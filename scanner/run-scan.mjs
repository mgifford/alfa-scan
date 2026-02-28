import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { spawn } from "node:child_process";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";
import { parseScanIssue } from "./parse-issue.mjs";
import { validateTargets } from "./validate-targets.mjs";
import { formatAlfaRule } from "./alfa-rule-metadata.mjs";
import { getRuleMetadata, ROLES, SEVERITY } from "./rule-metadata.mjs";
import { generateInteractiveHtml } from "./interactive-report.mjs";

const alfaCliPath = fileURLToPath(new URL("../node_modules/@siteimprove/alfa-cli/bin/alfa.js", import.meta.url));
const accessLintIifePath = fileURLToPath(new URL("../node_modules/@accesslint/core/dist/index.iife.js", import.meta.url));
const SCANNER_ORDER = ["axe", "alfa", "equalAccess", "accesslint", "qualweb"];

/**
 * Determine which scanners should run based on the engines specification
 * @param {string[]} engines - Array of engine names (e.g., ["axe", "alfa"] or ["all"])
 * @returns {Object} Object with boolean flags for each scanner
 */
export function determineScannersToRun(engines) {
  // Default to all if not specified or if "all" is in the list
  if (!engines || engines.length === 0 || engines.includes("all")) {
    return {
      runAxe: true,
      runAlfa: true,
      runEqualAccess: true,
      runAccesslint: true,
      runQualWeb: true
    };
  }
  
  // Map engine names to scanner flags
  return {
    runAxe: engines.includes("axe"),
    runAlfa: engines.includes("alfa"),
    runEqualAccess: engines.includes("equalaccess"),
    runAccesslint: engines.includes("accesslint"),
    runQualWeb: engines.includes("qualweb")
  };
}


// Timeout configuration (in milliseconds)
// These can be adjusted via environment variables for flexibility
const TIMEOUTS = {
  // Maximum time for initial HTTP fetch (default: 30s)
  FETCH_TIMEOUT: parseInt(process.env.FETCH_TIMEOUT_MS || "30000", 10),
  
  // Maximum time for a single URL scan including fetch and all audits (default: 60s)
  PER_URL_TIMEOUT: parseInt(process.env.PER_URL_TIMEOUT_MS || "60000", 10),
  
  // Maximum total time for the entire scan (default: 50 minutes to stay under 1 hour)
  TOTAL_SCAN_TIMEOUT: parseInt(process.env.TOTAL_SCAN_TIMEOUT_MS || "3000000", 10),
  
  // ALFA CLI page load timeout (default: 30s)
  ALFA_PAGE_TIMEOUT: parseInt(process.env.ALFA_PAGE_TIMEOUT_MS || "30000", 10),
  
  // ALFA command execution timeout (default: 3 minutes)
  ALFA_COMMAND_TIMEOUT: parseInt(process.env.ALFA_COMMAND_TIMEOUT_MS || "180000", 10),
  
  // Playwright/Puppeteer page navigation timeout (default: 30s)
  BROWSER_NAV_TIMEOUT: parseInt(process.env.BROWSER_NAV_TIMEOUT_MS || process.env.PLAYWRIGHT_NAV_TIMEOUT_MS || "30000", 10),
  
  // Playwright browser launch timeout (default: 30s)
  PLAYWRIGHT_LAUNCH_TIMEOUT: parseInt(process.env.PLAYWRIGHT_LAUNCH_TIMEOUT_MS || "30000", 10)
};

// Lazy-load Playwright and axe-core to avoid errors when not installed
let playwright = null;
let axePlaywright = null;
let axeCoreVersion = null;
let equalAccessChecker = null;
let qualWebCore = null;
let qualWebActRules = null;

async function loadAxeDependencies() {
  if (!playwright) {
    try {
      playwright = await import("playwright");
      axePlaywright = await import("@axe-core/playwright");
      
      // Get axe-core version from package.json
      try {
        const axeCorePackageJson = JSON.parse(
          readFileSync(
            fileURLToPath(new URL("../node_modules/axe-core/package.json", import.meta.url)),
            "utf8"
          )
        );
        axeCoreVersion = axeCorePackageJson.version;
      } catch {
        axeCoreVersion = "4.11"; // Fallback version
      }
    } catch (error) {
      console.warn("Playwright/axe-core not available:", error.message);
    }
  }
  return { playwright, axePlaywright, axeCoreVersion };
}

async function loadEqualAccessChecker() {
  if (!equalAccessChecker) {
    try {
      const module = await import("accessibility-checker");
      equalAccessChecker = module.default ?? module;
    } catch {
      equalAccessChecker = null;
    }
  }
  return equalAccessChecker;
}

async function loadQualWeb() {
  if (!qualWebCore) {
    try {
      // QualWeb only exports CommonJS, so we need to use createRequire
      const require = createRequire(import.meta.url);
      const { QualWeb } = require("@qualweb/core");
      const { ACTRules } = require("@qualweb/act-rules");
      qualWebCore = QualWeb;
      qualWebActRules = ACTRules;
    } catch (error) {
      console.error("QualWeb not available:", error.message);
      qualWebCore = null;
      qualWebActRules = null;
    }
  }
  return { qualWebCore, qualWebActRules };
}

// Maximum number of failures to show per rule in detailed report
const MAX_FAILURES_PER_RULE = 5;

/**
 * Create an AbortSignal that times out after the specified duration
 * @param {number} timeoutMs - Timeout in milliseconds
 * @returns {AbortSignal}
 */
function createTimeoutSignal(timeoutMs) {
  const controller = new AbortController();
  setTimeout(() => controller.abort(), timeoutMs);
  return controller.signal;
}

function runCommand(command, args, timeoutMs = 120000) {
  return new Promise((resolve) => {
    const child = spawn(command, args, {
      stdio: ["ignore", "pipe", "pipe"]
    });

    let stdout = "";
    let stderr = "";
    let timedOut = false;

    const timer = setTimeout(() => {
      timedOut = true;
      child.kill("SIGTERM");
    }, timeoutMs);

    child.stdout.on("data", (chunk) => {
      stdout += chunk.toString();
    });

    child.stderr.on("data", (chunk) => {
      stderr += chunk.toString();
    });

    child.on("close", (code) => {
      clearTimeout(timer);
      resolve({ code, stdout, stderr, timedOut });
    });

    child.on("error", (error) => {
      clearTimeout(timer);
      resolve({
        code: 1,
        stdout,
        stderr: `${stderr}\n${error instanceof Error ? error.message : String(error)}`,
        timedOut: false
      });
    });
  });
}

function normalizeRuleReference(rule) {
  if (!rule || typeof rule !== "object") {
    return "unknown-rule";
  }

  return (
    rule.uri ||
    rule.id ||
    rule.identifier ||
    rule.name ||
    rule.requirement?.uri ||
    "unknown-rule"
  );
}

function extractXPath(element) {
  if (!element || element.type !== "element") {
    return null;
  }
  
  // Build XPath with parent hierarchy and element position for unique identification
  const pathSegments = [];
  let current = element;
  
  while (current && current.type === "element") {
    const name = current.name || "unknown";
    let segment = name;
    
    // Add id attribute if present for more specific identification
    const id = getAttributeValue(current, "id");
    if (id) {
      segment += `[@id="${escapeXPathValue(id)}"]`;
    } else {
      // Calculate position among siblings with the same name
      const position = getElementPosition(current);
      if (position !== null) {
        segment += `[${position}]`;
      }
      
      // Add class attribute if present and no id
      const className = getAttributeValue(current, "class");
      if (className) {
        segment += `[@class="${escapeXPathValue(className)}"]`;
      }
    }
    
    pathSegments.unshift(segment);
    current = current.parent;
  }
  
  return pathSegments.length > 0 ? "/" + pathSegments.join("/") : null;
}

function getAttributeValue(element, attrName) {
  if (!element || !Array.isArray(element.attributes)) {
    return null;
  }
  
  for (const attr of element.attributes) {
    if (attr && attr.name === attrName && attr.value !== undefined) {
      return attr.value;
    }
  }
  
  return null;
}

function getElementPosition(element) {
  // Get parent to calculate position among siblings
  const parent = element.parent;
  if (!parent || !Array.isArray(parent.children)) {
    return null;
  }
  
  const elementName = element.name;
  let position = 1;
  
  for (const sibling of parent.children) {
    if (sibling === element) {
      return position;
    }
    if (sibling && sibling.type === "element" && sibling.name === elementName) {
      position++;
    }
  }
  
  return null;
}

function escapeXPathValue(value) {
  // Escape double quotes in XPath attribute values
  return String(value).replace(/"/g, '&quot;');
}

function extractHtmlSnippet(target) {
  if (!target || target.type !== "element") {
    return null;
  }
  
  const attrs = [];
  if (Array.isArray(target.attributes)) {
    for (const attr of target.attributes) {
      if (attr && attr.name && attr.value !== undefined) {
        attrs.push(`${attr.name}="${attr.value}"`);
      }
    }
  }
  
  const attrStr = attrs.length > 0 ? " " + attrs.join(" ") : "";
  const hasChildren = Array.isArray(target.children) && target.children.length > 0;
  
  if (!hasChildren) {
    return `<${target.name}${attrStr} />`;
  }
  
  // For elements with text content, show it
  if (target.children.length === 1 && target.children[0].type === "text") {
    const text = target.children[0].data || "";
    const truncated = text.length > 50 ? text.substring(0, 50) + "..." : text;
    return `<${target.name}${attrStr}>${truncated}</${target.name}>`;
  }
  
  return `<${target.name}${attrStr}>...</${target.name}>`;
}

function extractFailureMessage(expectations) {
  if (!Array.isArray(expectations) || expectations.length === 0) {
    return null;
  }
  
  for (const expectation of expectations) {
    if (Array.isArray(expectation) && expectation.length >= 2) {
      const result = expectation[1];
      if (result && result.type === "err" && result.error && result.error.message) {
        return result.error.message;
      }
    }
  }
  
  return null;
}

function createScannerBaseError(errorMessage = null) {
  return {
    executed: false,
    error: errorMessage,
    counts: {
      passed: 0,
      failed: 0,
      cantTell: 0,
      inapplicable: 0
    },
    failedRules: [],
    passedRules: [],
    failures: [],
    outcomeCount: 0,
    uniqueFailedCount: 0,
    duplicateFailedCount: 0
  };
}

function normalizeFindingLocator(value) {
  const text = String(value ?? "").trim();
  return text ? text.replace(/\s+/g, " ").toLowerCase() : "(no-locator)";
}

function normalizeRuleKey(failure) {
  const wcagSc = Array.isArray(failure.wcagSc)
    ? failure.wcagSc.filter(Boolean).map((entry) => String(entry).trim().toLowerCase()).sort().join("+")
    : String(failure.wcagSc ?? "").trim().toLowerCase();

  const actRule = String(failure.actRuleId ?? "").trim().toLowerCase();
  const rule = String(failure.rule ?? "").trim().toLowerCase();
  const message = String(failure.message ?? "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ")
    .slice(0, 120);

  if (actRule) {
    return `act:${actRule}`;
  }
  if (wcagSc) {
    return `wcag:${wcagSc}`;
  }
  if (rule) {
    return `rule:${rule}`;
  }
  return `msg:${message || "unknown"}`;
}

function addDuplicateMetadata(result) {
  const seen = new Map();
  let duplicateCount = 0;

  for (const scannerName of SCANNER_ORDER) {
    const scanner = result[scannerName];
    if (!scanner || !Array.isArray(scanner.failures)) {
      continue;
    }

    for (const failure of scanner.failures) {
      const locator = normalizeFindingLocator(failure.xpath || failure.selector || failure.html);
      const ruleKey = normalizeRuleKey(failure);
      const dedupeKey = `${result.finalUrl}|${locator}|${ruleKey}`;

      if (seen.has(dedupeKey)) {
        failure.isDuplicate = true;
        failure.duplicateOf = seen.get(dedupeKey);
        duplicateCount += 1;
      } else {
        failure.isDuplicate = false;
        failure.duplicateOf = null;
        seen.set(dedupeKey, scannerName);
      }
    }

    scanner.duplicateFailedCount = scanner.failures.filter((failure) => failure.isDuplicate).length;
    scanner.uniqueFailedCount = scanner.failures.length - scanner.duplicateFailedCount;
  }

  result.duplicateFindingCount = duplicateCount;
}

async function runAlfaAudit(url) {
  const args = [
    alfaCliPath,
    "audit",
    "--format",
    "@siteimprove/alfa-formatter-json",
    "--timeout",
    String(TIMEOUTS.ALFA_PAGE_TIMEOUT),
    url
  ];

  const run = await runCommand(process.execPath, args, TIMEOUTS.ALFA_COMMAND_TIMEOUT);
  const base = {
    executed: false,
    error: null,
    counts: {
      passed: 0,
      failed: 0,
      cantTell: 0,
      inapplicable: 0
    },
    failedRules: [],
    passedRules: [],
    failures: [],
    outcomeCount: 0
  };

  if (run.timedOut) {
    return {
      ...base,
      error: "ALFA audit timed out"
    };
  }

  if (run.code !== 0) {
    return {
      ...base,
      error: (run.stderr || "ALFA audit failed").trim()
    };
  }

  let parsed;
  try {
    parsed = JSON.parse(run.stdout);
  } catch {
    return {
      ...base,
      error: "ALFA output was not valid JSON"
    };
  }

  const outcomes = Array.isArray(parsed?.outcomes) ? parsed.outcomes : [];
  const failedRules = new Set();
  const passedRules = new Set();
  const counts = {
    passed: 0,
    failed: 0,
    cantTell: 0,
    inapplicable: 0
  };
  const failures = [];

  for (const outcome of outcomes) {
    const value = outcome?.outcome;
    if (value === "passed") {
      counts.passed += 1;
      passedRules.add(normalizeRuleReference(outcome.rule));
      continue;
    }

    if (value === "failed") {
      counts.failed += 1;
      const ruleUri = normalizeRuleReference(outcome.rule);
      failedRules.add(ruleUri);
      
      // Capture detailed failure information
      failures.push({
        rule: ruleUri,
        xpath: extractXPath(outcome.target),
        html: extractHtmlSnippet(outcome.target),
        message: extractFailureMessage(outcome.expectations)
      });
      continue;
    }

    if (value === "cantTell") {
      counts.cantTell += 1;
      continue;
    }

    if (value === "inapplicable") {
      counts.inapplicable += 1;
    }
  }

  return {
    executed: true,
    error: null,
    counts,
    failedRules: [...failedRules].sort(),
    passedRules: [...passedRules].sort(),
    failures,
    outcomeCount: outcomes.length
  };
}

async function runAxeAudit(url) {
  const base = createScannerBaseError(null);

  try {
    const { playwright: pw, axePlaywright: axe } = await loadAxeDependencies();
    
    if (!pw || !axe) {
      return {
        ...base,
        error: "Playwright or axe-core not available"
      };
    }

    // Launch browser with timeout
    const browser = await pw.chromium.launch({
      headless: true,
      timeout: TIMEOUTS.PLAYWRIGHT_LAUNCH_TIMEOUT
    });

    try {
      const context = await browser.newContext();
      const page = await context.newPage();
      
      // Navigate to URL with timeout
      await page.goto(url, {
        waitUntil: "domcontentloaded",
        timeout: TIMEOUTS.BROWSER_NAV_TIMEOUT
      });

      // Run axe scan using AxeBuilder
      const { AxeBuilder } = axe;
      const results = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "best-practice"])
        .analyze();

      // Normalize axe results to match ALFA structure
      const failedRules = new Set();
      const passedRules = new Set();
      const counts = {
        passed: 0,
        failed: 0,
        cantTell: 0,
        inapplicable: 0
      };
      const failures = [];

      // Process violations (failures)
      for (const violation of results.violations || []) {
        counts.failed += violation.nodes?.length || 0;
        failedRules.add(violation.id);
        const wcagSc = (violation.tags || []).filter((tag) => /^wcag\d+/i.test(tag));
        
        // Extract failure details from each node
        for (const node of violation.nodes || []) {
          failures.push({
            rule: violation.id,
            ruleUrl: violation.helpUrl,
            impact: violation.impact,
            wcagSc,
            xpath: node.target?.[0] || null,
            html: node.html || null,
            message: violation.help || node.failureSummary || null
          });
        }
      }

      // Process passes
      for (const pass of results.passes || []) {
        counts.passed += pass.nodes?.length || 0;
        passedRules.add(pass.id);
      }

      // Process incomplete (cantTell)
      for (const incomplete of results.incomplete || []) {
        counts.cantTell += incomplete.nodes?.length || 0;
      }

      // Process inapplicable
      for (const inapplicable of results.inapplicable || []) {
        counts.inapplicable += 1; // Count rules, not nodes
      }

      await browser.close();

      return {
        executed: true,
        error: null,
        counts,
        failedRules: [...failedRules].sort(),
        passedRules: [...passedRules].sort(),
        failures,
        outcomeCount: counts.passed + counts.failed + counts.cantTell + counts.inapplicable
      };
    } catch (error) {
      await browser.close();
      throw error;
    }
  } catch (error) {
    return {
      ...base,
      error: error instanceof Error ? error.message : String(error)
    };
  }
}

async function runAccessLintAudit(url) {
  const base = createScannerBaseError(null);

  try {
    const { playwright: pw } = await loadAxeDependencies();
    if (!pw) {
      return {
        ...base,
        error: "Playwright not available for AccessLint"
      };
    }

    const browser = await pw.chromium.launch({
      headless: true,
      timeout: TIMEOUTS.PLAYWRIGHT_LAUNCH_TIMEOUT
    });

    try {
      const context = await browser.newContext();
      const page = await context.newPage();
      await page.goto(url, {
        waitUntil: "domcontentloaded",
        timeout: TIMEOUTS.BROWSER_NAV_TIMEOUT
      });

      await page.addScriptTag({ path: accessLintIifePath });

      const audit = await page.evaluate(() => {
        const runner = globalThis.AccessLint;
        if (!runner || typeof runner.runAudit !== "function") {
          return { violations: [], ruleCount: 0 };
        }
        return runner.runAudit(document);
      });

      await browser.close();

      const violations = Array.isArray(audit?.violations) ? audit.violations : [];
      const ruleCount = Number(audit?.ruleCount ?? 0);
      const failedRules = new Set();
      const failures = [];

      for (const violation of violations) {
        const rule = String(violation?.ruleId ?? "unknown-rule");
        failedRules.add(rule);
        failures.push({
          rule,
          xpath: violation?.selector ?? null,
          selector: violation?.selector ?? null,
          html: violation?.html ?? null,
          impact: violation?.impact ?? null,
          message: violation?.message ?? null
        });
      }

      return {
        executed: true,
        error: null,
        counts: {
          passed: Math.max(ruleCount - violations.length, 0),
          failed: violations.length,
          cantTell: 0,
          inapplicable: 0
        },
        failedRules: [...failedRules].sort(),
        passedRules: [],
        failures,
        outcomeCount: ruleCount || violations.length,
        uniqueFailedCount: violations.length,
        duplicateFailedCount: 0
      };
    } catch (error) {
      await browser.close();
      throw error;
    }
  } catch (error) {
    return {
      ...base,
      error: error instanceof Error ? error.message : String(error)
    };
  }
}

async function runEqualAccessAudit(url) {
  const base = createScannerBaseError(null);

  try {
    const checker = await loadEqualAccessChecker();
    if (!checker?.getCompliance) {
      return {
        ...base,
        error: "accessibility-checker module not available"
      };
    }

    const result = await checker.getCompliance(url, `scan-${Date.now()}`);
    const report = result?.report;
    const issues = Array.isArray(report?.results) ? report.results : [];
    const failedIssues = issues.filter((issue) => {
      const policy = String(issue?.value?.[0] ?? "").toUpperCase();
      const confidence = String(issue?.value?.[1] ?? "").toUpperCase();
      return policy === "VIOLATION" || confidence === "FAIL";
    });

    const failedRules = new Set();
    const failures = [];

    for (const issue of failedIssues) {
      const rule = String(issue?.ruleId ?? "unknown-rule");
      failedRules.add(rule);
      failures.push({
        rule,
        xpath: issue?.path?.xpath || null,
        html: issue?.snippet || null,
        message: issue?.message || null
      });
    }

    const summaryCounts = report?.summary?.counts || {};

    return {
      executed: true,
      error: null,
      counts: {
        passed: Number(summaryCounts.pass ?? 0),
        failed: failedIssues.length,
        cantTell: Number(summaryCounts.potentialviolation ?? 0) + Number(summaryCounts.manual ?? 0),
        inapplicable: Number(summaryCounts.ignored ?? 0)
      },
      failedRules: [...failedRules].sort(),
      passedRules: [],
      failures,
      outcomeCount: Number(report?.numExecuted ?? failedIssues.length),
      uniqueFailedCount: failedIssues.length,
      duplicateFailedCount: 0
    };
  } catch (error) {
    return {
      ...base,
      error: error instanceof Error ? error.message : String(error)
    };
  }
  // NOTE: We don't close the checker here because:
  // 1. It's a singleton that's reused across URLs for better performance
  // 2. Closing after timeouts causes "Protocol error: Connection closed" when pages are already detached
  // Final cleanup happens once in main() after all scans complete.
}

async function runQualWebAudit(url) {
  const base = createScannerBaseError(null);
  
  // QualWeb requires a browser instance to be managed, so we create a new instance per URL
  let qualweb = null;
  
  try {
    const { qualWebCore: QualWeb, qualWebActRules: ACTRules } = await loadQualWeb();
    
    if (!QualWeb || !ACTRules) {
      return {
        ...base,
        error: "QualWeb not available"
      };
    }
    
    // Initialize QualWeb instance
    qualweb = new QualWeb({
      adBlock: false,
      stealth: false
    });
    
    // Start QualWeb with puppeteer configuration
    // maxConcurrency is set to 1 by default for safety as QualWeb creates isolated browser instances
    // Can be increased via QUALWEB_MAX_CONCURRENCY env var for better performance
    const maxConcurrency = parseInt(process.env.QUALWEB_MAX_CONCURRENCY || "1", 10);
    await qualweb.start(
      {
        maxConcurrency,
        timeout: TIMEOUTS.BROWSER_NAV_TIMEOUT,
        monitor: false
      },
      {
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
      }
    );
    
    // Create ACT Rules module instance
    const actRulesModule = new ACTRules();
    
    // Run evaluation
    const reports = await qualweb.evaluate({
      url,
      modules: [actRulesModule]
    });
    
    // Stop QualWeb instance
    await qualweb.stop();
    
    // Extract report for this URL
    const report = reports?.[url];
    
    if (!report) {
      return {
        ...base,
        error: "QualWeb evaluation returned no report"
      };
    }
    
    // Process ACT Rules results
    const actResults = report.modules?.["act-rules"];
    const assertions = actResults?.assertions || {};
    
    const failedRules = new Set();
    const passedRules = new Set();
    const failures = [];
    const counts = {
      passed: 0,
      failed: 0,
      cantTell: 0,
      inapplicable: 0
    };
    
    // Process each assertion
    for (const [ruleId, assertion] of Object.entries(assertions)) {
      const metadata = assertion.metadata || {};
      const results = assertion.results || [];
      
      for (const result of results) {
        const verdict = result.verdict;
        
        if (verdict === "passed") {
          counts.passed++;
          passedRules.add(ruleId);
        } else if (verdict === "failed") {
          counts.failed++;
          failedRules.add(ruleId);
          
          // Capture failure details
          failures.push({
            rule: ruleId,
            ruleUrl: metadata.url || null,
            description: metadata.description || null,
            xpath: result.location?.xpath || null,
            selector: result.location?.selector || null,
            html: result.htmlCode || result.pointer || null,
            message: result.description || metadata.description || null
          });
        } else if (verdict === "warning" || verdict === "cantTell") {
          counts.cantTell++;
        } else if (verdict === "inapplicable") {
          counts.inapplicable++;
        }
      }
    }
    
    return {
      executed: true,
      error: null,
      counts,
      failedRules: [...failedRules].sort(),
      passedRules: [...passedRules].sort(),
      failures,
      outcomeCount: counts.passed + counts.failed + counts.cantTell + counts.inapplicable
    };
  } catch (error) {
    // Make sure to clean up if there's an error
    if (qualweb) {
      try {
        await qualweb.stop();
      } catch {
        // Ignore cleanup errors
      }
    }
    
    return {
      ...base,
      error: error instanceof Error ? error.message : String(error)
    };
  }
}

function extractHtmlTitle(html) {
  const match = html.match(/<title[^>]*>([^<]+)<\/title>/i);
  return match ? match[1].trim() : null;
}

async function scanOneUrl(target, engines = ["all"]) {
  const started = Date.now();
  const heartbeat = setInterval(() => {
    const elapsedSec = Math.floor((Date.now() - started) / 1000);
    console.error(`[heartbeat] Scanning ${target.submittedUrl} (${elapsedSec}s elapsed)`);
  }, 30000);
  
  // Determine which scanners to run
  const scannersToRun = determineScannersToRun(engines);
  
  // Create a promise that rejects on per-URL timeout
  const timeoutPromise = new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error(`URL scan exceeded ${TIMEOUTS.PER_URL_TIMEOUT / 1000}s timeout`));
    }, TIMEOUTS.PER_URL_TIMEOUT);
  });
  
  // Wrap the actual scan logic in a race against the timeout
  const scanPromise = (async () => {
    try {
      const response = await fetch(target.normalizedUrl, {
        redirect: "follow",
        headers: {
          "user-agent": "alfa-scan-bot/0.1"
        },
        signal: createTimeoutSignal(TIMEOUTS.FETCH_TIMEOUT)
      });

      const elapsedMs = Date.now() - started;
      const finalUrl = response.url;
      const contentType = response.headers.get("content-type") || "";
      let pageTitle = null;

      if (contentType.includes("text/html")) {
        const html = await response.text();
        pageTitle = extractHtmlTitle(html);
      }

      // Run only the selected scanners
      const axe = scannersToRun.runAxe 
        ? await runAxeAudit(finalUrl) 
        : createScannerBaseError("Skipped (not requested)");
      const alfa = scannersToRun.runAlfa 
        ? await runAlfaAudit(finalUrl) 
        : createScannerBaseError("Skipped (not requested)");
      const equalAccess = scannersToRun.runEqualAccess 
        ? await runEqualAccessAudit(finalUrl) 
        : createScannerBaseError("Skipped (not requested)");
      const accesslint = scannersToRun.runAccesslint 
        ? await runAccessLintAudit(finalUrl) 
        : createScannerBaseError("Skipped (not requested)");
      const qualweb = scannersToRun.runQualWeb 
        ? await runQualWebAudit(finalUrl) 
        : createScannerBaseError("Skipped (not requested)");

      const result = {
        submittedUrl: target.submittedUrl,
        finalUrl,
        redirected: finalUrl !== target.normalizedUrl,
        statusCode: response.status,
        ok: response.ok,
        contentType,
        pageTitle,
        elapsedMs: Date.now() - started,
        error: null,
        alfa,
        axe,
        equalAccess,
        accesslint,
        qualweb,
        duplicateFindingCount: 0
      };

      addDuplicateMetadata(result);
      return result;
    } catch (error) {
      // Handle errors from fetch or audits
      const baseErrorResult = createScannerBaseError(error.name === "AbortError" ? "Request timed out" : "Skipped because initial URL fetch failed");
      
      return {
        submittedUrl: target.submittedUrl,
        finalUrl: target.normalizedUrl,
        redirected: false,
        statusCode: null,
        ok: false,
        contentType: null,
        pageTitle: null,
        elapsedMs: Date.now() - started,
        error: error instanceof Error ? error.message : String(error),
        alfa: baseErrorResult,
        axe: baseErrorResult,
        equalAccess: baseErrorResult,
        accesslint: baseErrorResult,
        qualweb: baseErrorResult,
        duplicateFindingCount: 0
      };
    }
  })();
  
  // Race between the actual scan and the timeout
  try {
    return await Promise.race([scanPromise, timeoutPromise]);
  } catch (timeoutError) {
    // Handle per-URL timeout
    const baseErrorResult = createScannerBaseError("URL scan timeout exceeded");
    
    return {
      submittedUrl: target.submittedUrl,
      finalUrl: target.normalizedUrl,
      redirected: false,
      statusCode: null,
      ok: false,
      contentType: null,
      pageTitle: null,
      elapsedMs: Date.now() - started,
      error: timeoutError instanceof Error ? timeoutError.message : String(timeoutError),
      alfa: baseErrorResult,
      axe: baseErrorResult,
      equalAccess: baseErrorResult,
      accesslint: baseErrorResult,
      qualweb: baseErrorResult,
      duplicateFindingCount: 0
    };
  } finally {
    clearInterval(heartbeat);
  }
}

export function escapeMarkdown(value) {
  return String(value ?? "")
    .replace(/\|/g, "\\|")
    .replace(/\n/g, " ");
}

function toCsv(summary) {
  const header = [
    "issue_number",
    "scan_title",
    "submitted_url",
    "final_url",
    "http_status",
    "fetch_ok",
    "redirected",
    "elapsed_ms",
    "alfa_executed",
    "alfa_passed",
    "alfa_failed",
    "alfa_cant_tell",
    "alfa_inapplicable",
    "alfa_failed_rules",
    "alfa_error",
    "axe_executed",
    "axe_passed",
    "axe_failed",
    "axe_cant_tell",
    "axe_inapplicable",
    "axe_failed_rules",
    "axe_error",
    "equal_access_executed",
    "equal_access_passed",
    "equal_access_failed",
    "equal_access_failed_unique",
    "equal_access_failed_duplicates",
    "equal_access_cant_tell",
    "equal_access_inapplicable",
    "equal_access_failed_rules",
    "equal_access_error",
    "accesslint_executed",
    "accesslint_passed",
    "accesslint_failed",
    "accesslint_failed_unique",
    "accesslint_failed_duplicates",
    "accesslint_cant_tell",
    "accesslint_inapplicable",
    "accesslint_failed_rules",
    "accesslint_error",
    "qualweb_executed",
    "qualweb_passed",
    "qualweb_failed",
    "qualweb_cant_tell",
    "qualweb_inapplicable",
    "qualweb_failed_rules",
    "qualweb_error",
    "duplicate_findings",
    "fetch_error",
    "page_title"
  ];

  const escapeCell = (value) => {
    const text = String(value ?? "");
    if (text.includes(",") || text.includes("\"") || text.includes("\n")) {
      return `"${text.replace(/\"/g, '""')}"`;
    }
    return text;
  };

  const rows = summary.results.map((result) => {
    const alfa = result.alfa;
    const axe = result.axe;
    const equalAccess = result.equalAccess;
    const accesslint = result.accesslint;
    const qualweb = result.qualweb;
    return [
      summary.issueNumber,
      summary.scanTitle,
      result.submittedUrl,
      result.finalUrl,
      result.statusCode ?? "",
      result.ok,
      result.redirected,
      result.elapsedMs,
      alfa.executed,
      alfa.counts.passed,
      alfa.counts.failed,
      alfa.counts.cantTell,
      alfa.counts.inapplicable,
      alfa.failedRules.join(";"),
      alfa.error ?? "",
      axe.executed,
      axe.counts.passed,
      axe.counts.failed,
      axe.counts.cantTell,
      axe.counts.inapplicable,
      axe.failedRules.join(";"),
      axe.error ?? "",
      equalAccess.executed,
      equalAccess.counts.passed,
      equalAccess.counts.failed,
      equalAccess.uniqueFailedCount ?? equalAccess.counts.failed,
      equalAccess.duplicateFailedCount ?? 0,
      equalAccess.counts.cantTell,
      equalAccess.counts.inapplicable,
      equalAccess.failedRules.join(";"),
      equalAccess.error ?? "",
      accesslint.executed,
      accesslint.counts.passed,
      accesslint.counts.failed,
      accesslint.uniqueFailedCount ?? accesslint.counts.failed,
      accesslint.duplicateFailedCount ?? 0,
      accesslint.counts.cantTell,
      accesslint.counts.inapplicable,
      accesslint.failedRules.join(";"),
      accesslint.error ?? "",
      qualweb.executed,
      qualweb.counts.passed,
      qualweb.counts.failed,
      qualweb.counts.cantTell,
      qualweb.counts.inapplicable,
      qualweb.failedRules.join(";"),
      qualweb.error ?? "",
      result.duplicateFindingCount ?? 0,
      result.error ?? "",
      result.pageTitle ?? ""
    ].map(escapeCell).join(",");
  });

  return [header.join(","), ...rows].join("\n") + "\n";
}

export function extractRuleId(ruleUrl) {
  const match = ruleUrl.match(/sia-r(\d+)$/);
  return match ? match[1] : null;
}

function buildOverlapReport(summary) {
  const scannerLabels = {
    axe: "axe",
    alfa: "ALFA",
    equalAccess: "Equal Access",
    accesslint: "AccessLint",
    qualweb: "QualWeb"
  };

  const dedupeMap = new Map();

  for (const result of summary.results) {
    for (const scannerName of SCANNER_ORDER) {
      const scanner = result[scannerName];
      if (!scanner || !Array.isArray(scanner.failures)) {
        continue;
      }

      for (const failure of scanner.failures) {
        const locator = normalizeFindingLocator(failure.xpath || failure.selector || failure.html);
        const ruleKey = normalizeRuleKey(failure);
        const dedupeKey = `${result.finalUrl}|${locator}|${ruleKey}`;

        if (!dedupeMap.has(dedupeKey)) {
          dedupeMap.set(dedupeKey, {
            key: dedupeKey,
            url: result.finalUrl,
            locator,
            ruleKey,
            scanners: new Set(),
            examples: []
          });
        }

        const entry = dedupeMap.get(dedupeKey);
        entry.scanners.add(scannerName);
        if (entry.examples.length < 2) {
          entry.examples.push({
            scanner: scannerName,
            rule: failure.rule ?? null,
            message: failure.message ?? null,
            xpath: failure.xpath ?? failure.selector ?? null
          });
        }
      }
    }
  }

  const scannerStats = {};
  for (const scannerName of SCANNER_ORDER) {
    const totalsKey = `${scannerName}Totals`;
    const totals = summary[totalsKey] || {
      failed: 0,
      uniqueFailed: 0,
      duplicates: 0
    };

    scannerStats[scannerName] = {
      label: scannerLabels[scannerName] || scannerName,
      failed: totals.failed ?? 0,
      uniqueFailed: totals.uniqueFailed ?? totals.failed ?? 0,
      duplicates: totals.duplicates ?? 0
    };
  }

  const scannersInUse = SCANNER_ORDER.filter((scannerName) => {
    return summary.results.some((result) => {
      const scanner = result[scannerName];
      return scanner && (scanner.counts?.failed > 0 || scanner.counts?.passed > 0 || scanner.executed);
    });
  });

  const matrix = {};
  for (const scannerA of scannersInUse) {
    matrix[scannerA] = {};
    for (const scannerB of scannersInUse) {
      let count = 0;
      for (const entry of dedupeMap.values()) {
        if (entry.scanners.has(scannerA) && entry.scanners.has(scannerB)) {
          count += 1;
        }
      }
      matrix[scannerA][scannerB] = count;
    }
  }

  const overlapEntries = [...dedupeMap.values()]
    .map((entry) => ({
      ...entry,
      scanners: [...entry.scanners]
    }))
    .filter((entry) => entry.scanners.length > 1)
    .sort((a, b) => b.scanners.length - a.scanners.length)
    .slice(0, 100);

  return {
    generatedAt: new Date().toISOString(),
    issueNumber: summary.issueNumber,
    scanTitle: summary.scanTitle,
    scannersInUse,
    scannerStats,
    matrix,
    duplicateFindingTotals: summary.duplicateFindingTotals ?? 0,
    overlapEntryCount: overlapEntries.length,
    overlapEntries
  };
}

function toOverlapMarkdown(overlap) {
  const lines = [];
  lines.push(`# Scanner Overlap Report: ${overlap.scanTitle || `Issue #${overlap.issueNumber}`}`);
  lines.push("");
  lines.push(`- Generated at: ${overlap.generatedAt}`);
  lines.push(`- Overlap entries: ${overlap.overlapEntryCount}`);
  lines.push(`- Duplicate findings in later scanners: ${overlap.duplicateFindingTotals}`);
  lines.push("");

  lines.push("## Scanner Summary");
  lines.push("");
  lines.push("| Scanner | Failed | Unique Failed | Duplicates |");
  lines.push("|---|---:|---:|---:|");
  for (const scannerName of overlap.scannersInUse) {
    const stats = overlap.scannerStats[scannerName];
    lines.push(`| ${stats.label} | ${stats.failed} | ${stats.uniqueFailed} | ${stats.duplicates} |`);
  }
  lines.push("");

  lines.push("## Overlap Matrix (shared findings by scanner pair)");
  lines.push("");
  if (overlap.scannersInUse.length > 0) {
    const header = ["Scanner", ...overlap.scannersInUse.map((name) => overlap.scannerStats[name].label)];
    lines.push(`| ${header.join(" | ")} |`);
    lines.push(`| ${header.map(() => "---:").join(" | ")} |`);
    for (const scannerA of overlap.scannersInUse) {
      const row = [overlap.scannerStats[scannerA].label];
      for (const scannerB of overlap.scannersInUse) {
        row.push(String(overlap.matrix[scannerA][scannerB] ?? 0));
      }
      lines.push(`| ${row.join(" | ")} |`);
    }
  }
  lines.push("");

  lines.push("## Top Shared Findings");
  lines.push("");
  if (overlap.overlapEntries.length === 0) {
    lines.push("No cross-scanner overlaps were detected.");
  } else {
    for (const entry of overlap.overlapEntries.slice(0, 25)) {
      lines.push(`### ${escapeMarkdown(entry.ruleKey)}`);
      lines.push(`- URL: ${escapeMarkdown(entry.url)}`);
      lines.push(`- Locator: ${escapeMarkdown(entry.locator)}`);
      lines.push(`- Scanners: ${entry.scanners.map((name) => overlap.scannerStats[name]?.label || name).join(", ")}`);
      if (entry.examples[0]?.message) {
        lines.push(`- Example: ${escapeMarkdown(entry.examples[0].message)}`);
      }
      lines.push("");
    }
  }

  return `${lines.join("\n")}\n`;
}


/**
 * Enhanced data aggregation for the interactive report
 */
function buildEnhancedSummary(summary) {
  const consolidatedFailures = new Map(); // Key: ruleId, Value: { rule, engine, metadata, pages: Set, totalOccurrences, failures: [] }
  const roleStats = {
    [ROLES.UX]: 0,
    [ROLES.VISUAL]: 0,
    [ROLES.CONTENT]: 0,
    [ROLES.DEV]: 0
  };
  const severityStats = {
    [SEVERITY.CRITICAL]: 0,
    [SEVERITY.SERIOUS]: 0,
    [SEVERITY.MODERATE]: 0,
    [SEVERITY.MINOR]: 0
  };

  for (const result of summary.results) {
    for (const engine of SCANNER_ORDER) {
      const engineResult = result[engine];
      if (!engineResult || !engineResult.failures) continue;

      for (const failure of engineResult.failures) {
        if (failure.isDuplicate) continue;

        const ruleId = failure.rule;
        const metadata = getRuleMetadata(engine, ruleId);
        const key = `${engine}:${ruleId}`;

        if (!consolidatedFailures.has(key)) {
          consolidatedFailures.set(key, {
            rule: ruleId,
            engine,
            metadata,
            pages: new Map(), // pageUrl -> count
            totalOccurrences: 0,
            examples: [] // Store a few unique examples
          });
        }

        const entry = consolidatedFailures.get(key);
        entry.totalOccurrences++;
        
        const pageCount = entry.pages.get(result.submittedUrl) || 0;
        entry.pages.set(result.submittedUrl, pageCount + 1);

        // Update stats (only once per unique failure)
        severityStats[metadata.severity]++;
        for (const role of metadata.roles) {
          roleStats[role]++;
        }

        // Keep up to 5 examples
        if (entry.examples.length < 5) {
          entry.examples.push({
            url: result.submittedUrl,
            html: failure.html,
            xpath: failure.xpath,
            message: failure.message
          });
        }
      }
    }
  }

  return {
    consolidatedFailures: Array.from(consolidatedFailures.values())
      .sort((a, b) => b.totalOccurrences - a.totalOccurrences),
    roleStats,
    severityStats
  };
}



export function toMarkdownReport(summary, axeVersion = "4.11") {
  const lines = [];
  lines.push(`# Scan Report: ${summary.scanTitle || `Issue #${summary.issueNumber}`}`);
  lines.push("");
  lines.push(`- Issue: ${summary.issueUrl}`);
  lines.push(`- Submitted by: ${summary.submittedBy}`);
  lines.push(`- Scanned at: ${summary.scannedAt}`);
  
  // Add engine information
  if (summary.engines && Array.isArray(summary.engines)) {
    const engineDisplay = summary.engines.includes("all") 
      ? "All engines (AXE, ALFA, Equal Access, AccessLint)" 
      : summary.engines.map(e => e.toUpperCase()).join(", ");
    lines.push(`- Engines used: ${engineDisplay}`);
  }
  
  // Add timing information
  if (summary.totalElapsedMs !== undefined) {
    const elapsedMinutes = (summary.totalElapsedMs / 60000).toFixed(1);
    lines.push(`- Scan duration: ${elapsedMinutes} minutes`);
  }
  
  lines.push(`- Total URLs submitted: ${summary.totalSubmitted}`);
  lines.push(`- Accepted public URLs: ${summary.acceptedCount}`);
  
  // Add scanned count if different from accepted
  if (summary.scannedCount !== undefined && summary.scannedCount !== summary.acceptedCount) {
    lines.push(`- **URLs scanned: ${summary.scannedCount}**`);
    if (summary.skippedDueToTimeout > 0) {
      lines.push(`- ⚠️ **${summary.skippedDueToTimeout} URLs skipped due to timeout**`);
    }
  }
  
  lines.push(`- Rejected URLs: ${summary.rejectedCount}`);
  lines.push(`- ALFA outcomes: ${summary.alfaTotals.passed} passed, ${summary.alfaTotals.failed} failed, ${summary.alfaTotals.cantTell} cantTell, ${summary.alfaTotals.inapplicable} inapplicable`);
  lines.push(`- axe outcomes: ${summary.axeTotals.passed} passed, ${summary.axeTotals.failed} failed, ${summary.axeTotals.cantTell} cantTell, ${summary.axeTotals.inapplicable} inapplicable`);
  if (summary.equalAccessTotals) {
    lines.push(`- Equal Access outcomes: ${summary.equalAccessTotals.passed} passed, ${summary.equalAccessTotals.failed} failed (${summary.equalAccessTotals.uniqueFailed} unique, ${summary.equalAccessTotals.duplicates} duplicate), ${summary.equalAccessTotals.cantTell} cantTell, ${summary.equalAccessTotals.inapplicable} inapplicable`);
  }
  if (summary.accesslintTotals) {
    lines.push(`- AccessLint outcomes: ${summary.accesslintTotals.passed} passed, ${summary.accesslintTotals.failed} failed (${summary.accesslintTotals.uniqueFailed} unique, ${summary.accesslintTotals.duplicates} duplicate), ${summary.accesslintTotals.cantTell} cantTell, ${summary.accesslintTotals.inapplicable} inapplicable`);
  }
  if (summary.duplicateFindingTotals !== undefined) {
    lines.push(`- Duplicate findings caught by later scanners: ${summary.duplicateFindingTotals}`);
  }
  lines.push("");

  // ACTION-ORIENTED SUMMARY: Pages with most errors
  lines.push("## 🎯 Priority: Pages with Most Errors");
  lines.push("");
  lines.push("Focus your efforts on these pages to make the biggest impact (combined scanner unique failures):");
  lines.push("");
  
  const pagesByErrorCount = [...summary.results]
    .filter(r => ((r.axe.uniqueFailedCount ?? r.axe.counts.failed) + (r.alfa.uniqueFailedCount ?? r.alfa.counts.failed) + (r.equalAccess?.uniqueFailedCount ?? r.equalAccess?.counts?.failed ?? 0) + (r.accesslint?.uniqueFailedCount ?? r.accesslint?.counts?.failed ?? 0)) > 0)
    .sort((a, b) => 
      ((b.axe.uniqueFailedCount ?? b.axe.counts.failed) + (b.alfa.uniqueFailedCount ?? b.alfa.counts.failed) + (b.equalAccess?.uniqueFailedCount ?? b.equalAccess?.counts?.failed ?? 0) + (b.accesslint?.uniqueFailedCount ?? b.accesslint?.counts?.failed ?? 0)) -
      ((a.axe.uniqueFailedCount ?? a.axe.counts.failed) + (a.alfa.uniqueFailedCount ?? a.alfa.counts.failed) + (a.equalAccess?.uniqueFailedCount ?? a.equalAccess?.counts?.failed ?? 0) + (a.accesslint?.uniqueFailedCount ?? a.accesslint?.counts?.failed ?? 0))
    )
    .slice(0, 10);
  
  if (pagesByErrorCount.length > 0) {
    lines.push("| Page | axe Unique | ALFA Unique | Equal Access Unique | AccessLint Unique | Total Unique | Page Title |");
    lines.push("|---|---:|---:|---:|---:|---:|---|");
    for (const result of pagesByErrorCount) {
      const axeUnique = result.axe.uniqueFailedCount ?? result.axe.counts.failed;
      const alfaUnique = result.alfa.uniqueFailedCount ?? result.alfa.counts.failed;
      const equalAccessUnique = result.equalAccess?.uniqueFailedCount ?? result.equalAccess?.counts?.failed ?? 0;
      const accesslintUnique = result.accesslint?.uniqueFailedCount ?? result.accesslint?.counts?.failed ?? 0;
      const totalFailed = axeUnique + alfaUnique + equalAccessUnique + accesslintUnique;
      lines.push(`| [View Page](${escapeMarkdown(result.finalUrl)}) | ${axeUnique} | ${alfaUnique} | ${equalAccessUnique} | ${accesslintUnique} | **${totalFailed}** | ${escapeMarkdown(result.pageTitle || result.finalUrl)} |`);
    }
  } else {
    lines.push("✅ No pages with accessibility errors detected!");
  }
  lines.push("");

  // ACTION-ORIENTED SUMMARY: Most common failed rules (ALFA)
  lines.push("## 🔧 Priority: Most Common Issues (ALFA)");
  lines.push("");
  lines.push("These ALFA accessibility issues appear most frequently across your pages:");
  lines.push("");
  
  const alfaRuleFrequency = new Map();
  for (const result of summary.results) {
    for (const rule of result.alfa.failedRules) {
      alfaRuleFrequency.set(rule, (alfaRuleFrequency.get(rule) || 0) + 1);
    }
  }
  
  const topAlfaFailedRules = [...alfaRuleFrequency.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10);
  
  if (topAlfaFailedRules.length > 0) {
    lines.push("| Rule | Pages Affected | Documentation |");
    lines.push("|---|---:|---|");
    for (const [rule, count] of topAlfaFailedRules) {
      const ruleInfo = formatAlfaRule(rule);
      const displayName = ruleInfo.description 
        ? `[${ruleInfo.id}](${rule}): ${ruleInfo.description}`
        : `[${ruleInfo.id}](${rule})`;
      lines.push(`| ${displayName} | **${count}** of ${summary.acceptedCount} | [View Rule](${rule}) |`);
    }
    lines.push("");
    lines.push("> 💡 **Tip**: Click on the rule documentation links to learn how to fix each issue.");
    lines.push("");
  } else {
    lines.push("✅ No ALFA failed rules detected!");
  }
  lines.push("");

  // ACTION-ORIENTED SUMMARY: Most common failed rules (axe)
  lines.push("## 🔧 Priority: Most Common Issues (axe)");
  lines.push("");
  lines.push("These axe accessibility issues appear most frequently across your pages:");
  lines.push("");
  
  const axeRuleFrequency = new Map();
  for (const result of summary.results) {
    for (const rule of result.axe.failedRules) {
      axeRuleFrequency.set(rule, (axeRuleFrequency.get(rule) || 0) + 1);
    }
  }
  
  const topAxeFailedRules = [...axeRuleFrequency.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10);
  
  if (topAxeFailedRules.length > 0) {
    lines.push("| Rule | Pages Affected | Documentation |");
    lines.push("|---|---:|---|");
    for (const [rule, count] of topAxeFailedRules) {
      // axe rules don't have the same URL pattern, so we'll use the rule ID directly
      const ruleUrl = `https://dequeuniversity.com/rules/axe/${axeVersion}/${rule}`;
      lines.push(`| ${rule} | **${count}** of ${summary.acceptedCount} | [View Rule](${ruleUrl}) |`);
    }
    lines.push("");
    lines.push("> 💡 **Tip**: Click on the rule documentation links to learn how to fix each issue. Consider fixing the most common issues first for maximum impact.");
    lines.push("");
    lines.push("> 🤖 **Future Enhancement**: This report will soon include AI-powered fix suggestions for authenticated GitHub users (opt-in only, no auto-run AI).");
  } else {
    lines.push("✅ No axe failed rules detected!");
  }
  lines.push("");

  // CROSS-PAGE PATTERN ANALYSIS: Find common HTML patterns causing errors across multiple pages
  lines.push("## 🔍 Cross-Page Patterns: Common HTML Issues");
  lines.push("");
  lines.push("These HTML patterns cause the same accessibility errors across multiple pages. **Fix the pattern once in your codebase to fix it everywhere!**");
  lines.push("");
  
  // Collect all failures with their HTML snippets and group by (rule + html) pattern
  const patternMap = new Map(); // Key: "rule|html", Value: { rule, html, xpath, message, pages: Set, count }
  
  for (const result of summary.results) {
    // Process ALFA failures
    if (result.alfa.failures) {
      for (const failure of result.alfa.failures) {
        if (failure.html && failure.rule) {
          const patternKey = `ALFA|${failure.rule}|${failure.html}`;
          if (!patternMap.has(patternKey)) {
            patternMap.set(patternKey, {
              scanner: 'ALFA',
              rule: failure.rule,
              html: failure.html,
              xpath: failure.xpath,
              message: failure.message,
              pages: new Set(),
              count: 0
            });
          }
          const pattern = patternMap.get(patternKey);
          pattern.pages.add(result.submittedUrl);
          pattern.count += 1;
        }
      }
    }
    
    // Process axe failures
    if (result.axe.failures) {
      for (const failure of result.axe.failures) {
        if (failure.html && failure.rule) {
          const patternKey = `axe|${failure.rule}|${failure.html}`;
          if (!patternMap.has(patternKey)) {
            patternMap.set(patternKey, {
              scanner: 'axe',
              rule: failure.rule,
              ruleUrl: failure.ruleUrl,
              impact: failure.impact,
              html: failure.html,
              xpath: failure.xpath,
              message: failure.message,
              pages: new Set(),
              count: 0
            });
          }
          const pattern = patternMap.get(patternKey);
          pattern.pages.add(result.submittedUrl);
          pattern.count += 1;
        }
      }
    }
  }
  
  // Filter to patterns that appear on multiple pages and sort by impact
  const crossPagePatterns = [...patternMap.values()]
    .filter(p => p.pages.size > 1)
    .sort((a, b) => {
      // Sort by number of pages affected, then by occurrence count
      if (b.pages.size !== a.pages.size) {
        return b.pages.size - a.pages.size;
      }
      return b.count - a.count;
    })
    .slice(0, 15); // Show top 15 patterns
  
  if (crossPagePatterns.length > 0) {
    lines.push("### 🎯 Top Patterns to Fix (Highest Impact)");
    lines.push("");
    
    for (let i = 0; i < crossPagePatterns.length; i++) {
      const pattern = crossPagePatterns[i];
      const ruleInfo = pattern.scanner === 'ALFA' ? formatAlfaRule(pattern.rule) : null;
      const ruleDisplay = ruleInfo 
        ? `${ruleInfo.id}: ${ruleInfo.description || 'No description'}`
        : pattern.rule;
      const ruleUrl = pattern.scanner === 'ALFA' 
        ? pattern.rule 
        : pattern.ruleUrl || `https://dequeuniversity.com/rules/axe/${axeVersion}/${pattern.rule}`;
      
      lines.push(`#### Pattern ${i + 1}: Affects ${pattern.pages.size} page(s) - ${pattern.count} occurrence(s)`);
      lines.push("");
      lines.push(`**Scanner**: ${pattern.scanner}`);
      lines.push(`**Rule**: [${ruleDisplay}](${ruleUrl})`);
      if (pattern.impact) {
        lines.push(`**Impact**: ${pattern.impact}`);
      }
      if (pattern.message) {
        lines.push(`**Issue**: ${escapeMarkdown(pattern.message)}`);
      }
      lines.push("");
      lines.push("**HTML Pattern**:");
      lines.push("```html");
      lines.push(pattern.html);
      lines.push("```");
      lines.push("");
      if (pattern.xpath) {
        lines.push("**XPath** (use in browser DevTools):");
        lines.push("```");
        lines.push(pattern.xpath);
        lines.push("```");
        lines.push("");
      }
      lines.push("**How to Replicate**:");
      lines.push("1. Open any affected page in your browser");
      lines.push("2. Press F12 to open DevTools");
      lines.push("3. Go to Console tab");
      if (pattern.xpath) {
        lines.push(`4. Run: \`$x('${pattern.xpath}')\``);
        lines.push("5. The element will be highlighted");
      } else {
        lines.push("4. Search for the HTML pattern in the Elements tab");
      }
      lines.push("");
      lines.push("**Affected Pages**:");
      const pageList = [...pattern.pages].slice(0, 5);
      for (const page of pageList) {
        lines.push(`- ${escapeMarkdown(page)}`);
      }
      if (pattern.pages.size > 5) {
        lines.push(`- *...and ${pattern.pages.size - 5} more page(s)*`);
      }
      lines.push("");
      lines.push("---");
      lines.push("");
    }
    
    lines.push("> 💡 **Pro Tip**: These patterns likely come from shared components or templates in your codebase. Fix them in the component/template source, and the fix will propagate to all affected pages.");
    lines.push("");
  } else {
    lines.push("✅ No recurring HTML patterns found across multiple pages. Each issue appears to be page-specific.");
    lines.push("");
  }

  if (summary.rejected.length > 0) {
    lines.push("## Rejected URLs");
    lines.push("");
    for (const rejected of summary.rejected) {
      lines.push(`- ${rejected.submittedUrl} - ${rejected.reason}`);
    }
    lines.push("");
  }

  lines.push("## 📊 Detailed Results");
  lines.push("");
  lines.push("Complete scan results for all tested pages:");
  lines.push("");
  lines.push("| Submitted URL | Final URL | Status | HTTP | Redirected | Time (ms) | axe Unique | ALFA Unique | Equal Access Unique | AccessLint Unique | Duplicates | Notes |");
  lines.push("|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|");
  for (const result of summary.results) {
    const status = result.ok ? "OK" : "FAIL";
    const httpCode = result.statusCode ?? "-";
    const redirected = result.redirected ? "yes" : "no";
    const axeUnique = result.axe.uniqueFailedCount ?? result.axe.counts.failed;
    const alfaUnique = result.alfa.uniqueFailedCount ?? result.alfa.counts.failed;
    const equalAccessUnique = result.equalAccess?.uniqueFailedCount ?? result.equalAccess?.counts?.failed ?? 0;
    const accesslintUnique = result.accesslint?.uniqueFailedCount ?? result.accesslint?.counts?.failed ?? 0;
    const duplicates = result.duplicateFindingCount ?? 0;
    const notes = result.error || result.alfa.error || result.axe.error || result.equalAccess?.error || result.accesslint?.error || result.pageTitle || "";
    lines.push(`| ${escapeMarkdown(result.submittedUrl)} | ${escapeMarkdown(result.finalUrl)} | ${status} | ${httpCode} | ${redirected} | ${result.elapsedMs} | ${axeUnique} | ${alfaUnique} | ${equalAccessUnique} | ${accesslintUnique} | ${duplicates} | ${escapeMarkdown(notes)} |`);

    if (result.alfa.failedRules.length > 0) {
      const formattedRules = result.alfa.failedRules.map(rule => {
        const ruleInfo = formatAlfaRule(rule);
        return ruleInfo.description ? `${ruleInfo.id} (${ruleInfo.description})` : ruleInfo.id;
      });
      lines.push(`|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: ${escapeMarkdown(formattedRules.join(", "))} |`);
    }
    if (result.axe.failedRules.length > 0) {
      lines.push(`|  |  |  |  |  |  |  |  |  |  | axe failed rules: ${escapeMarkdown(result.axe.failedRules.join(", "))} |`);
    }
    if ((result.equalAccess?.failedRules || []).length > 0) {
      lines.push(`|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: ${escapeMarkdown(result.equalAccess.failedRules.join(", "))} |`);
    }
    if ((result.accesslint?.failedRules || []).length > 0) {
      lines.push(`|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: ${escapeMarkdown(result.accesslint.failedRules.join(", "))} |`);
    }
  }
  lines.push("");

  // Add detailed failure information section
  lines.push("## Detailed Failure Information (ALFA)");
  lines.push("");
  
  for (const result of summary.results) {
    if (!result.alfa.failures || result.alfa.failures.length === 0) {
      continue;
    }
    
    lines.push(`### ${escapeMarkdown(result.submittedUrl)}`);
    lines.push("");
    
    // Group failures by rule
    const failuresByRule = new Map();
    for (const failure of result.alfa.failures.filter((entry) => !entry.isDuplicate)) {
      if (!failuresByRule.has(failure.rule)) {
        failuresByRule.set(failure.rule, []);
      }
      failuresByRule.get(failure.rule).push(failure);
    }
    
    for (const [rule, failures] of failuresByRule) {
      const ruleInfo = formatAlfaRule(rule);
      const ruleDisplay = ruleInfo.description 
        ? `${ruleInfo.id}: ${ruleInfo.description}`
        : ruleInfo.id;
      lines.push(`#### Rule: [${ruleDisplay}](${rule})`);
      lines.push("");
      
      for (let i = 0; i < failures.length && i < MAX_FAILURES_PER_RULE; i++) {
        const failure = failures[i];
        lines.push(`**Failure ${i + 1}:**`);
        if (failure.message) {
          lines.push(`- Message: ${escapeMarkdown(failure.message)}`);
        }
        if (failure.html) {
          lines.push(`- HTML: \`${escapeMarkdown(failure.html)}\``);
        }
        if (failure.xpath) {
          lines.push(`- XPath: \`${escapeMarkdown(failure.xpath)}\``);
        }
        lines.push("");
      }
      
      if (failures.length > MAX_FAILURES_PER_RULE) {
        lines.push(`*... and ${failures.length - MAX_FAILURES_PER_RULE} more failures for this rule*`);
        lines.push("");
      }
    }
  }

  // Add detailed failure information section for axe
  lines.push("## Detailed Failure Information (axe)");
  lines.push("");
  
  for (const result of summary.results) {
    if (!result.axe.failures || result.axe.failures.length === 0) {
      continue;
    }
    
    lines.push(`### ${escapeMarkdown(result.submittedUrl)}`);
    lines.push("");
    
    // Group failures by rule
    const axeFailuresByRule = new Map();
    for (const failure of result.axe.failures.filter((entry) => !entry.isDuplicate)) {
      const ruleKey = failure.rule || "unknown";
      if (!axeFailuresByRule.has(ruleKey)) {
        axeFailuresByRule.set(ruleKey, []);
      }
      axeFailuresByRule.get(ruleKey).push(failure);
    }
    
    for (const [rule, failures] of axeFailuresByRule) {
      const ruleUrl = failures[0].ruleUrl || `https://dequeuniversity.com/rules/axe/${axeVersion}/${rule}`;
      lines.push(`#### Rule: [${rule}](${ruleUrl})`);
      if (failures[0].impact) {
        lines.push(`**Impact**: ${failures[0].impact}`);
      }
      lines.push("");
      
      for (let i = 0; i < failures.length && i < MAX_FAILURES_PER_RULE; i++) {
        const failure = failures[i];
        lines.push(`**Failure ${i + 1}:**`);
        if (failure.message) {
          lines.push(`- Message: ${escapeMarkdown(failure.message)}`);
        }
        if (failure.html) {
          lines.push(`- HTML: \`${escapeMarkdown(failure.html)}\``);
        }
        if (failure.xpath) {
          lines.push(`- XPath: \`${escapeMarkdown(failure.xpath)}\``);
        }
        lines.push("");
      }
      
      if (failures.length > MAX_FAILURES_PER_RULE) {
        lines.push(`*... and ${failures.length - MAX_FAILURES_PER_RULE} more failures for this rule*`);
        lines.push("");
      }
    }
  }

  return `${lines.join("\n")}\n`;
}

/**
 * Convert markdown to HTML with basic styling
 * @param {string} markdown - Markdown content
 * @param {object} summary - Report summary for metadata
 * @returns {string} HTML content
 */
export function markdownToHtml(markdown, summary) {
  let html = markdown;
  
  // First, protect escaped pipes in content by temporarily replacing them
  html = html.replace(/\\\|/g, '&#124;');
  
  // Escape HTML in code blocks and inline code first
  html = html.replace(/`([^`]+)`/g, (match, code) => {
    return `<code>${code.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code>`;
  });
  
  // Tables - Convert markdown tables to HTML (do this before other conversions)
  const tableRegex = /^\|(.+)\|\n\|[-:\s|]+\|\n((?:\|.+\|\n?)+)/gm;
  html = html.replace(tableRegex, (match, header, rows) => {
    // Parse header
    const headerCells = header.split('|')
      .map(cell => cell.trim())
      .filter(cell => cell.length > 0)
      .map(cell => `<th>${cell}</th>`)
      .join('');
    
    // Parse rows
    const rowsHtml = rows.trim().split('\n').map(row => {
      const cells = row.substring(1, row.length - 1) // Remove leading and trailing |
        .split('|')
        .map(cell => `<td>${cell.trim()}</td>`)
        .join('');
      return `<tr>${cells}</tr>`;
    }).join('\n');
    
    return `<table>\n<thead>\n<tr>${headerCells}</tr>\n</thead>\n<tbody>\n${rowsHtml}\n</tbody>\n</table>`;
  });
  
  // Headers
  html = html.replace(/^#### (.*$)/gim, '<h4>$1</h4>');
  html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
  html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
  html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');
  
  // Bold and italic (non-greedy matching)
  html = html.replace(/\*\*\*(.+?)\*\*\*/g, '<strong><em>$1</em></strong>');
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\*(.+?)\*/g, '<em>$1</em>');
  
  // Links - [text](url)
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');
  
  // Blockquotes
  html = html.replace(/^&gt; (.*)$/gim, '<blockquote>$1</blockquote>');
  html = html.replace(/^> (.*)$/gim, '<blockquote>$1</blockquote>');
  
  // Lists
  html = html.replace(/^\* (.*)$/gim, '<li>$1</li>');
  html = html.replace(/^- (.*)$/gim, '<li>$1</li>');
  
  // Wrap consecutive list items in ul
  html = html.replace(/(<li>.*<\/li>\n?)+/g, '<ul>$&</ul>');
  
  // Paragraphs - wrap non-HTML lines in <p> tags
  const lines = html.split('\n');
  const processedLines = [];
  let inParagraph = false;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    
    // Skip empty lines
    if (!line) {
      if (inParagraph) {
        processedLines.push('</p>');
        inParagraph = false;
      }
      processedLines.push('');
      continue;
    }
    
    // Check if line is already HTML
    if (line.startsWith('<')) {
      if (inParagraph) {
        processedLines.push('</p>');
        inParagraph = false;
      }
      processedLines.push(line);
    } else {
      // Regular text line
      if (!inParagraph) {
        processedLines.push('<p>');
        inParagraph = true;
      }
      processedLines.push(line);
    }
  }
  
  if (inParagraph) {
    processedLines.push('</p>');
  }
  
  const bodyContent = processedLines.join('\n');
  
  // Create full HTML document with styling
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeMarkdown(summary.scanTitle || `Scan Report #${summary.issueNumber}`)}</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
      line-height: 1.6;
      color: #24292f;
      background-color: #f6f8fa;
      padding: 2rem;
    }
    
    .container {
      max-width: 1200px;
      margin: 0 auto;
      background: white;
      padding: 2rem;
      border-radius: 8px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
    }
    
    h1 {
      color: #0969da;
      margin-bottom: 1rem;
      font-size: 2rem;
      border-bottom: 1px solid #d0d7de;
      padding-bottom: 0.5rem;
    }
    
    h2 {
      color: #24292f;
      margin-top: 2rem;
      margin-bottom: 1rem;
      font-size: 1.5rem;
      border-bottom: 1px solid #d0d7de;
      padding-bottom: 0.5rem;
    }
    
    h3 {
      color: #24292f;
      margin-top: 1.5rem;
      margin-bottom: 0.75rem;
      font-size: 1.25rem;
    }
    
    h4 {
      color: #57606a;
      margin-top: 1rem;
      margin-bottom: 0.5rem;
      font-size: 1rem;
    }
    
    p {
      margin-bottom: 1rem;
    }
    
    a {
      color: #0969da;
      text-decoration: none;
    }
    
    a:hover {
      text-decoration: underline;
    }
    
    table {
      width: 100%;
      border-collapse: collapse;
      margin: 1rem 0;
      overflow-x: auto;
      display: block;
    }
    
    table thead {
      display: table;
      width: 100%;
      table-layout: fixed;
    }
    
    table tbody {
      display: table;
      width: 100%;
      table-layout: fixed;
    }
    
    th, td {
      padding: 0.75rem;
      text-align: left;
      border: 1px solid #d0d7de;
      word-wrap: break-word;
    }
    
    th {
      background-color: #f6f8fa;
      font-weight: 600;
      color: #24292f;
    }
    
    tr:nth-child(even) {
      background-color: #f6f8fa;
    }
    
    ul {
      margin-left: 2rem;
      margin-bottom: 1rem;
    }
    
    li {
      margin-bottom: 0.5rem;
    }
    
    code {
      background-color: #f6f8fa;
      padding: 0.2rem 0.4rem;
      border-radius: 3px;
      font-family: "SF Mono", Monaco, "Cascadia Code", "Roboto Mono", Menlo, Courier, monospace;
      font-size: 0.875em;
    }
    
    blockquote {
      border-left: 4px solid #d0d7de;
      padding-left: 1rem;
      margin: 1rem 0;
      color: #57606a;
    }
    
    strong {
      font-weight: 600;
    }
    
    .nav {
      margin-bottom: 1.5rem;
      padding-bottom: 1rem;
      border-bottom: 1px solid #d0d7de;
    }
    
    .nav a {
      color: #0969da;
      text-decoration: none;
      margin-right: 1.5rem;
    }
    
    .nav a:hover {
      text-decoration: underline;
    }
    
    footer {
      margin-top: 2rem;
      padding-top: 1.5rem;
      border-top: 1px solid #d0d7de;
      text-align: center;
      color: #57606a;
    }
    
    footer a {
      color: #0969da;
      text-decoration: none;
      font-weight: 600;
    }
    
    footer a:hover {
      text-decoration: underline;
    }
  </style>
</head>
<body>
  <div class="container">
    <nav class="nav">
      <a href="../../../../../../index.html">Submit URLs</a>
      <a href="../../../../../../reports.html">View Reports</a>
      <a href="${summary.issueUrl}" target="_blank" rel="noopener">View Issue #${summary.issueNumber}</a>
    </nav>
    
    ${bodyContent}
    
    <footer>
      <a href="https://github.com/mgifford/alfa-scan">Join our GitHub Community</a>
    </footer>
  </div>
</body>
</html>`;
}

async function main() {
  const scanStartTime = Date.now();
  const issueEventPath = process.argv[2];
  const outputDir = process.argv[3] || ".scan-output";
  if (!issueEventPath) {
    console.error("Usage: node scanner/run-scan.mjs <issue-event-json-file> [output-dir]");
    process.exit(1);
  }

  const event = JSON.parse(readFileSync(issueEventPath, "utf8"));
  const parsed = parseScanIssue(event);
  if (!parsed.ok || !parsed.value) {
    console.error(JSON.stringify(parsed, null, 2));
    process.exit(1);
  }

  if (!parsed.isRunnableIssue) {
    console.log(JSON.stringify({
      skipped: true,
      reason: "Issue title must start with 'SCAN:', 'WEEKLY:', 'MONTHLY:', 'QUARTERLY:', or a weekday prefix"
    }, null, 2));
    process.exit(0);
  }

  const request = parsed.value;
  const engines = request.engines || ["all"];
  const validation = validateTargets(request.requestedUrls);
  const acceptedTargets = validation.accepted;

  const results = [];
  let skippedDueToTimeout = 0;
  
  for (const target of acceptedTargets) {
    const elapsedTime = Date.now() - scanStartTime;
    
    // Check if we're approaching the total scan timeout
    // Leave a buffer for report generation (5 minutes)
    if (elapsedTime > TIMEOUTS.TOTAL_SCAN_TIMEOUT - 300000) {
      console.error(`Approaching total scan timeout limit (${TIMEOUTS.TOTAL_SCAN_TIMEOUT / 60000} minutes). Stopping scan.`);
      skippedDueToTimeout = acceptedTargets.length - results.length;
      break;
    }
    
    const result = await scanOneUrl(target, engines);
    results.push(result);
    
    // Log progress to help with debugging (stderr to not interfere with JSON output)
    const progress = `[${results.length}/${acceptedTargets.length}]`;
    if (result.error) {
      console.error(`${progress} Error scanning ${target.submittedUrl}: ${result.error}`);
    } else {
      console.error(`${progress} Scanned ${target.submittedUrl} in ${result.elapsedMs}ms`);
    }
  }

  const alfaTotals = {
    passed: 0,
    failed: 0,
    cantTell: 0,
    inapplicable: 0
  };

  const axeTotals = {
    passed: 0,
    failed: 0,
    cantTell: 0,
    inapplicable: 0
  };

  const equalAccessTotals = {
    passed: 0,
    failed: 0,
    uniqueFailed: 0,
    duplicates: 0,
    cantTell: 0,
    inapplicable: 0
  };

  const accesslintTotals = {
    passed: 0,
    failed: 0,
    uniqueFailed: 0,
    duplicates: 0,
    cantTell: 0,
    inapplicable: 0
  };

  let duplicateFindingTotals = 0;

  for (const result of results) {
    alfaTotals.passed += result.alfa.counts.passed;
    alfaTotals.failed += result.alfa.counts.failed;
    alfaTotals.cantTell += result.alfa.counts.cantTell;
    alfaTotals.inapplicable += result.alfa.counts.inapplicable;
    
    axeTotals.passed += result.axe.counts.passed;
    axeTotals.failed += result.axe.counts.failed;
    axeTotals.cantTell += result.axe.counts.cantTell;
    axeTotals.inapplicable += result.axe.counts.inapplicable;

    equalAccessTotals.passed += result.equalAccess.counts.passed;
    equalAccessTotals.failed += result.equalAccess.counts.failed;
    equalAccessTotals.uniqueFailed += result.equalAccess.uniqueFailedCount ?? result.equalAccess.counts.failed;
    equalAccessTotals.duplicates += result.equalAccess.duplicateFailedCount ?? 0;
    equalAccessTotals.cantTell += result.equalAccess.counts.cantTell;
    equalAccessTotals.inapplicable += result.equalAccess.counts.inapplicable;

    accesslintTotals.passed += result.accesslint.counts.passed;
    accesslintTotals.failed += result.accesslint.counts.failed;
    accesslintTotals.uniqueFailed += result.accesslint.uniqueFailedCount ?? result.accesslint.counts.failed;
    accesslintTotals.duplicates += result.accesslint.duplicateFailedCount ?? 0;
    accesslintTotals.cantTell += result.accesslint.counts.cantTell;
    accesslintTotals.inapplicable += result.accesslint.counts.inapplicable;

    duplicateFindingTotals += result.duplicateFindingCount ?? 0;
  }

  const scannedAt = new Date().toISOString();
  const totalElapsedTime = Date.now() - scanStartTime;
  
  // Create initial summary for enhanced data aggregation
  const initialSummary = {
    results
  };
  const enhancedData = buildEnhancedSummary(initialSummary);
  
  const summary = {
    issueNumber: request.issueNumber,
    issueUrl: request.issueUrl,
    issueTitle: request.issueTitle,
    scanTitle: request.scanTitle || request.issueTitle,
    submittedBy: request.submittedBy,
    engines,
    scannedAt,
    totalElapsedMs: totalElapsedTime,
    totalSubmitted: request.requestedUrls.length,
    acceptedCount: acceptedTargets.length,
    scannedCount: results.length,
    skippedDueToTimeout,
    rejectedCount: validation.rejected.length,
    rejected: validation.rejected,
    alfaTotals,
    axeTotals,
    equalAccessTotals,
    accesslintTotals,
    duplicateFindingTotals,
    results,
    enhanced: enhancedData
  };
  
  // Log warning if scan was incomplete
  if (skippedDueToTimeout > 0) {
    console.warn(`WARNING: Scan incomplete. ${skippedDueToTimeout} URLs were skipped due to timeout.`);
    console.warn(`\nTip: For large URL lists (${acceptedTargets.length} URLs), consider splitting into smaller batches:`);
    console.warn(`  - Option 1: Create multiple scan issues with 100-150 URLs each`);
    console.warn(`  - Option 2: Increase timeout via TOTAL_SCAN_TIMEOUT_MS environment variable in workflow`);
    console.warn(`  - Option 3: The scanned URLs (${results.length}/${acceptedTargets.length}) are included in this report`);
  }
  
  console.error(`Total scan time: ${(totalElapsedTime / 1000).toFixed(1)}s`);
  console.error(`Successfully scanned: ${results.length}/${acceptedTargets.length} URLs`);

  mkdirSync(outputDir, { recursive: true });
  const summaryPath = join(outputDir, "report.json");
  const markdownPath = join(outputDir, "report.md");
  const htmlPath = join(outputDir, "report.html");
  const csvPath = join(outputDir, "report.csv");
  const overlapJsonPath = join(outputDir, "report-overlap.json");
  const overlapMarkdownPath = join(outputDir, "report-overlap.md");
  
  const markdownContent = toMarkdownReport(summary, axeCoreVersion || "4.11");
  const overlapReport = buildOverlapReport(summary);
  const overlapMarkdownContent = toOverlapMarkdown(overlapReport);
  writeFileSync(summaryPath, JSON.stringify(summary, null, 2) + "\n", "utf8");
  writeFileSync(markdownPath, markdownContent, "utf8");
  writeFileSync(htmlPath, markdownToHtml(markdownContent, summary), "utf8");
  writeFileSync(csvPath, toCsv(summary), "utf8");
  writeFileSync(overlapJsonPath, JSON.stringify(overlapReport, null, 2) + "\n", "utf8");
  writeFileSync(overlapMarkdownPath, overlapMarkdownContent, "utf8");

  console.log(JSON.stringify({
    skipped: false,
    issueNumber: summary.issueNumber,
    scanTitle: summary.scanTitle,
    acceptedCount: summary.acceptedCount,
    scannedCount: summary.scannedCount,
    skippedDueToTimeout: summary.skippedDueToTimeout,
    rejectedCount: summary.rejectedCount,
    scannedAt,
    totalElapsedMs: totalElapsedTime,
    alfaTotals,
    axeTotals,
    equalAccessTotals,
    accesslintTotals,
    duplicateFindingTotals,
    summaryPath,
    markdownPath,
    htmlPath,
    csvPath,
    overlapJsonPath,
    overlapMarkdownPath
  }, null, 2));

  // Clean up Equal Access Checker browser pool to prevent "No usable sandbox" errors
  // This is critical when scans timeout or complete to ensure all browser instances are closed
  // The loadEqualAccessChecker() function returns a singleton instance, so this closes
  // the same browser pool that was used throughout the scan
  //
  // Note: When pages are detached due to timeouts, the close operation may throw errors
  // from puppeteer internals. We catch these and log warnings but don't fail the workflow.
  try {
    console.error("Cleaning up Equal Access Checker browser pool...");
    const checker = await loadEqualAccessChecker();
    if (checker?.close) {
      try {
        await checker.close();
        console.error("Successfully closed Equal Access Checker browser pool");
      } catch (closeError) {
        // Handle errors from the close() operation specifically
        const closeMsg = closeError instanceof Error ? closeError.message : String(closeError);
        if (closeMsg.includes("Protocol error") || closeMsg.includes("Connection closed") || closeMsg.includes("detached")) {
          console.error("Warning: Some browser pages were already closed or detached (expected after timeouts)");
        } else {
          console.error("Warning: Error during browser close:", closeMsg);
        }
      }
    }
  } catch (error) {
    // Log cleanup errors but don't fail the workflow
    // This outer catch handles errors from loadEqualAccessChecker or unexpected issues
    const errorMsg = error instanceof Error ? error.message : String(error);
    console.error("Warning: Failed to clean up Equal Access Checker:", errorMsg);
  }
}

// Only run main if this file is executed directly, not when imported
if (import.meta.url === `file://${process.argv[1]}`) {
  // Handle unhandled promise rejections that may occur during cleanup
  // This is particularly important for accessibility-checker's browser close operations
  // which may throw errors asynchronously when pages are detached
  //
  // Note: This handler is intentionally inside the import guard because:
  // - It's only needed when running as a CLI tool (direct execution)
  // - Tests import functions but don't run main(), so they don't need this handler
  // - Placing it here ensures it doesn't interfere with test error handling
  process.on('unhandledRejection', (reason, promise) => {
    const msg = reason instanceof Error ? reason.message : String(reason);
    // If it's a browser/page close error, log it as a warning but don't crash
    if (msg.includes("Protocol error") || msg.includes("Connection closed") || msg.includes("detached") || msg.includes("Target closed")) {
      console.error("Warning: Unhandled browser cleanup error (expected after timeouts):", msg);
    } else {
      // For other unhandled rejections, log and exit
      console.error("Unhandled Promise Rejection:", reason);
      process.exit(1);
    }
  });

  main().catch((error) => {
    console.error(error);
    process.exit(1);
  });
}
