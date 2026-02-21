import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { spawn } from "node:child_process";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { parseScanIssue } from "./parse-issue.mjs";
import { validateTargets } from "./validate-targets.mjs";

const alfaCliPath = fileURLToPath(new URL("../node_modules/@siteimprove/alfa-cli/bin/alfa.js", import.meta.url));

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
    "30000",
    url
  ];

  const run = await runCommand(process.execPath, args, 180000);
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
      timeout: 30000
    });

    try {
      const context = await browser.newContext();
      const page = await context.newPage();
      
      // Navigate to URL with timeout
      await page.goto(url, {
        waitUntil: "domcontentloaded",
        timeout: 30000
      });

      // Run axe scan
      const results = await axe.analyze(page, {}, {
        runOnly: {
          type: "tag",
          values: ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "best-practice"]
        }
      });

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
  try {
    const response = await fetch(target.normalizedUrl, {
      redirect: "follow",
      headers: {
        "user-agent": "alfa-scan-bot/0.1"
      }
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
      elapsedMs,
      error: null,
      alfa,
      axe
    };
  } catch (error) {
    const baseErrorResult = {
      executed: false,
      error: "Skipped because initial URL fetch failed",
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
  lines.push(`- Total URLs submitted: ${summary.totalSubmitted}`);
  lines.push(`- Accepted public URLs: ${summary.acceptedCount}`);
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
      const ruleId = extractRuleId(rule);
      const ruleName = ruleId ? `SIA-R${ruleId}` : "Unknown Rule";
      lines.push(`| ${ruleName} | **${count}** of ${summary.acceptedCount} | [View Rule](${rule}) |`);
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
      lines.push(`|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: ${escapeMarkdown(result.alfa.failedRules.join(", "))} |`);
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
      lines.push(`#### Rule: [${rule}](${rule})`);
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

async function main() {
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
  for (const target of acceptedTargets) {
    results.push(await scanOneUrl(target));
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
  const summary = {
    issueNumber: request.issueNumber,
    issueUrl: request.issueUrl,
    issueTitle: request.issueTitle,
    scanTitle: request.scanTitle || request.issueTitle,
    submittedBy: request.submittedBy,
    scannedAt,
    totalSubmitted: request.requestedUrls.length,
    acceptedCount: acceptedTargets.length,
    rejectedCount: validation.rejected.length,
    rejected: validation.rejected,
    alfaTotals,
    axeTotals,
    results
  };

  mkdirSync(outputDir, { recursive: true });
  const summaryPath = join(outputDir, "report.json");
  const markdownPath = join(outputDir, "report.md");
  const csvPath = join(outputDir, "report.csv");
  writeFileSync(summaryPath, JSON.stringify(summary, null, 2) + "\n", "utf8");
  writeFileSync(markdownPath, toMarkdownReport(summary, axeCoreVersion || "4.11"), "utf8");
  writeFileSync(csvPath, toCsv(summary), "utf8");

  console.log(JSON.stringify({
    skipped: false,
    issueNumber: summary.issueNumber,
    scanTitle: summary.scanTitle,
    acceptedCount: summary.acceptedCount,
    rejectedCount: summary.rejectedCount,
    scannedAt,
    alfaTotals,
    axeTotals,
    summaryPath,
    markdownPath,
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
