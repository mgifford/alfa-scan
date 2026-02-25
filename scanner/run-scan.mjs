import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { spawn } from "node:child_process";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { parseScanIssue } from "./parse-issue.mjs";
import { validateTargets } from "./validate-targets.mjs";
import { formatAlfaRule } from "./alfa-rule-metadata.mjs";

const alfaCliPath = fileURLToPath(new URL("../node_modules/@siteimprove/alfa-cli/bin/alfa.js", import.meta.url));

// Timeout configuration (in milliseconds)
// These can be adjusted via environment variables for flexibility
const TIMEOUTS = {
  // Maximum time for initial HTTP fetch (default: 30s)
  FETCH_TIMEOUT: parseInt(process.env.FETCH_TIMEOUT_MS || "30000", 10),
  
  // Maximum time for a single URL scan including fetch and both audits (default: 2 minutes)
  PER_URL_TIMEOUT: parseInt(process.env.PER_URL_TIMEOUT_MS || "120000", 10),
  
  // Maximum total time for the entire scan (default: 50 minutes to stay under 1 hour)
  TOTAL_SCAN_TIMEOUT: parseInt(process.env.TOTAL_SCAN_TIMEOUT_MS || "3000000", 10),
  
  // ALFA CLI page load timeout (default: 30s)
  ALFA_PAGE_TIMEOUT: parseInt(process.env.ALFA_PAGE_TIMEOUT_MS || "30000", 10),
  
  // ALFA command execution timeout (default: 3 minutes)
  ALFA_COMMAND_TIMEOUT: parseInt(process.env.ALFA_COMMAND_TIMEOUT_MS || "180000", 10),
  
  // Playwright page navigation timeout (default: 30s)
  PLAYWRIGHT_NAV_TIMEOUT: parseInt(process.env.PLAYWRIGHT_NAV_TIMEOUT_MS || "30000", 10),
  
  // Playwright browser launch timeout (default: 30s)
  PLAYWRIGHT_LAUNCH_TIMEOUT: parseInt(process.env.PLAYWRIGHT_LAUNCH_TIMEOUT_MS || "30000", 10)
};

// Lazy-load Playwright and axe-core to avoid errors when not installed
let playwright = null;
let axePlaywright = null;
let axeCoreVersion = null;

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
        timeout: TIMEOUTS.PLAYWRIGHT_NAV_TIMEOUT
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
        
        // Extract failure details from each node
        for (const node of violation.nodes || []) {
          failures.push({
            rule: violation.id,
            ruleUrl: violation.helpUrl,
            impact: violation.impact,
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

function extractHtmlTitle(html) {
  const match = html.match(/<title[^>]*>([^<]+)<\/title>/i);
  return match ? match[1].trim() : null;
}

async function scanOneUrl(target) {
  const started = Date.now();
  
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

      const alfa = await runAlfaAudit(finalUrl);
      const axe = await runAxeAudit(finalUrl);

      return {
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
        axe
      };
    } catch (error) {
      // Handle errors from fetch or audits
      const baseErrorResult = {
        executed: false,
        error: error.name === "AbortError" ? "Request timed out" : "Skipped because initial URL fetch failed",
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
        axe: baseErrorResult
      };
    }
  })();
  
  // Race between the actual scan and the timeout
  try {
    return await Promise.race([scanPromise, timeoutPromise]);
  } catch (timeoutError) {
    // Handle per-URL timeout
    const baseErrorResult = {
      executed: false,
      error: "URL scan timeout exceeded",
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
      axe: baseErrorResult
    };
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

export function toMarkdownReport(summary, axeVersion = "4.11") {
  const lines = [];
  lines.push(`# Scan Report: ${summary.scanTitle || `Issue #${summary.issueNumber}`}`);
  lines.push("");
  lines.push(`- Issue: ${summary.issueUrl}`);
  lines.push(`- Submitted by: ${summary.submittedBy}`);
  lines.push(`- Scanned at: ${summary.scannedAt}`);
  
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
  lines.push("");

  // ACTION-ORIENTED SUMMARY: Pages with most errors
  lines.push("## 🎯 Priority: Pages with Most Errors");
  lines.push("");
  lines.push("Focus your efforts on these pages to make the biggest impact (combined ALFA + axe results):");
  lines.push("");
  
  const pagesByErrorCount = [...summary.results]
    .filter(r => (r.alfa.counts.failed + r.axe.counts.failed) > 0)
    .sort((a, b) => 
      (b.alfa.counts.failed + b.axe.counts.failed) - 
      (a.alfa.counts.failed + a.axe.counts.failed)
    )
    .slice(0, 10);
  
  if (pagesByErrorCount.length > 0) {
    lines.push("| Page | ALFA Failed | axe Failed | Total Failed | Page Title |");
    lines.push("|---|---:|---:|---:|---|");
    for (const result of pagesByErrorCount) {
      const totalFailed = result.alfa.counts.failed + result.axe.counts.failed;
      lines.push(`| [View Page](${escapeMarkdown(result.finalUrl)}) | ${result.alfa.counts.failed} | ${result.axe.counts.failed} | **${totalFailed}** | ${escapeMarkdown(result.pageTitle || result.finalUrl)} |`);
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
  lines.push("| Submitted URL | Final URL | Status | HTTP | Redirected | Time (ms) | ALFA Pass | ALFA Fail | axe Pass | axe Fail | Notes |");
  lines.push("|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---|");
  for (const result of summary.results) {
    const status = result.ok ? "OK" : "FAIL";
    const httpCode = result.statusCode ?? "-";
    const redirected = result.redirected ? "yes" : "no";
    const alfaPass = result.alfa.counts.passed;
    const alfaFail = result.alfa.counts.failed;
    const axePass = result.axe.counts.passed;
    const axeFail = result.axe.counts.failed;
    const notes = result.error || result.alfa.error || result.axe.error || result.pageTitle || "";
    lines.push(`| ${escapeMarkdown(result.submittedUrl)} | ${escapeMarkdown(result.finalUrl)} | ${status} | ${httpCode} | ${redirected} | ${result.elapsedMs} | ${alfaPass} | ${alfaFail} | ${axePass} | ${axeFail} | ${escapeMarkdown(notes)} |`);

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
    for (const failure of result.alfa.failures) {
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
    for (const failure of result.axe.failures) {
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

  if (!parsed.isScanIssue) {
    console.log(JSON.stringify({
      skipped: true,
      reason: "Issue title must start with 'SCAN:'"
    }, null, 2));
    process.exit(0);
  }

  const request = parsed.value;
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
    
    const result = await scanOneUrl(target);
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

  for (const result of results) {
    alfaTotals.passed += result.alfa.counts.passed;
    alfaTotals.failed += result.alfa.counts.failed;
    alfaTotals.cantTell += result.alfa.counts.cantTell;
    alfaTotals.inapplicable += result.alfa.counts.inapplicable;
    
    axeTotals.passed += result.axe.counts.passed;
    axeTotals.failed += result.axe.counts.failed;
    axeTotals.cantTell += result.axe.counts.cantTell;
    axeTotals.inapplicable += result.axe.counts.inapplicable;
  }

  const scannedAt = new Date().toISOString();
  const totalElapsedTime = Date.now() - scanStartTime;
  const summary = {
    issueNumber: request.issueNumber,
    issueUrl: request.issueUrl,
    issueTitle: request.issueTitle,
    scanTitle: request.scanTitle || request.issueTitle,
    submittedBy: request.submittedBy,
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
    results
  };
  
  // Log warning if scan was incomplete
  if (skippedDueToTimeout > 0) {
    console.warn(`WARNING: Scan incomplete. ${skippedDueToTimeout} URLs were skipped due to timeout.`);
  }
  
  console.error(`Total scan time: ${(totalElapsedTime / 1000).toFixed(1)}s`);
  console.error(`Successfully scanned: ${results.length}/${acceptedTargets.length} URLs`);

  mkdirSync(outputDir, { recursive: true });
  const summaryPath = join(outputDir, "report.json");
  const markdownPath = join(outputDir, "report.md");
  const htmlPath = join(outputDir, "report.html");
  const csvPath = join(outputDir, "report.csv");
  
  const markdownContent = toMarkdownReport(summary, axeCoreVersion || "4.11");
  writeFileSync(summaryPath, JSON.stringify(summary, null, 2) + "\n", "utf8");
  writeFileSync(markdownPath, markdownContent, "utf8");
  writeFileSync(htmlPath, markdownToHtml(markdownContent, summary), "utf8");
  writeFileSync(csvPath, toCsv(summary), "utf8");

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
    summaryPath,
    markdownPath,
    htmlPath,
    csvPath
  }, null, 2));
}

// Only run main if this file is executed directly, not when imported
if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch((error) => {
    console.error(error);
    process.exit(1);
  });
}
