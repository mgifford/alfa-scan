import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { spawn } from "node:child_process";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { parseScanIssue } from "./parse-issue.mjs";
import { validateTargets } from "./validate-targets.mjs";

const alfaCliPath = fileURLToPath(new URL("../node_modules/@siteimprove/alfa-cli/bin/alfa.js", import.meta.url));

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

  for (const outcome of outcomes) {
    const value = outcome?.outcome;
    if (value === "passed") {
      counts.passed += 1;
      passedRules.add(normalizeRuleReference(outcome.rule));
      continue;
    }

    if (value === "failed") {
      counts.failed += 1;
      failedRules.add(normalizeRuleReference(outcome.rule));
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
    outcomeCount: outcomes.length
  };
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
      alfa
    };
  } catch (error) {
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
      alfa: {
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
        outcomeCount: 0
      }
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
    "alfa_passed_rules",
    "alfa_error",
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
      alfa.passedRules.join(";"),
      alfa.error ?? "",
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

export function toMarkdownReport(summary) {
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
  lines.push("");

  // ACTION-ORIENTED SUMMARY: Pages with most errors
  lines.push("## 🎯 Priority: Pages with Most Errors");
  lines.push("");
  lines.push("Focus your efforts on these pages to make the biggest impact:");
  lines.push("");
  
  const pagesByErrorCount = [...summary.results]
    .filter(r => r.alfa.counts.failed > 0)
    .sort((a, b) => b.alfa.counts.failed - a.alfa.counts.failed)
    .slice(0, 10);
  
  if (pagesByErrorCount.length > 0) {
    lines.push("| Page | Failed Tests | Passed Tests | Page Title |");
    lines.push("|---|---:|---:|---|");
    for (const result of pagesByErrorCount) {
      lines.push(`| [View Page](${escapeMarkdown(result.finalUrl)}) | **${result.alfa.counts.failed}** | ${result.alfa.counts.passed} | ${escapeMarkdown(result.pageTitle || result.finalUrl)} |`);
    }
  } else {
    lines.push("✅ No pages with accessibility errors detected!");
  }
  lines.push("");

  // ACTION-ORIENTED SUMMARY: Most common failed rules
  lines.push("## 🔧 Priority: Most Common Issues");
  lines.push("");
  lines.push("These accessibility issues appear most frequently across your pages. Fixing these will have the most impact:");
  lines.push("");
  
  const ruleFrequency = new Map();
  for (const result of summary.results) {
    for (const rule of result.alfa.failedRules) {
      ruleFrequency.set(rule, (ruleFrequency.get(rule) || 0) + 1);
    }
  }
  
  const topFailedRules = [...ruleFrequency.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10);
  
  if (topFailedRules.length > 0) {
    lines.push("| Rule | Pages Affected | Documentation |");
    lines.push("|---|---:|---|");
    for (const [rule, count] of topFailedRules) {
      const ruleId = extractRuleId(rule);
      const ruleName = ruleId ? `SIA-R${ruleId}` : "Unknown Rule";
      lines.push(`| ${ruleName} | **${count}** of ${summary.acceptedCount} | [View Rule](${rule}) |`);
    }
    lines.push("");
    lines.push("> 💡 **Tip**: Click on the rule documentation links to learn how to fix each issue. Consider fixing the most common issues first for maximum impact.");
    lines.push("");
    lines.push("> 🤖 **Future Enhancement**: This report will soon include AI-powered fix suggestions for authenticated GitHub users (opt-in only, no auto-run AI).");
  } else {
    lines.push("✅ No failed rules detected!");
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
  lines.push("| Submitted URL | Final URL | Status | HTTP | Redirected | Time (ms) | ALFA Pass | ALFA Fail | Notes |");
  lines.push("|---|---|---:|---:|---:|---:|---:|---:|---|");
  for (const result of summary.results) {
    const status = result.ok ? "OK" : "FAIL";
    const httpCode = result.statusCode ?? "-";
    const redirected = result.redirected ? "yes" : "no";
    const alfaPass = result.alfa.counts.passed;
    const alfaFail = result.alfa.counts.failed;
    const notes = result.error || result.alfa.error || result.pageTitle || "";
    lines.push(`| ${escapeMarkdown(result.submittedUrl)} | ${escapeMarkdown(result.finalUrl)} | ${status} | ${httpCode} | ${redirected} | ${result.elapsedMs} | ${alfaPass} | ${alfaFail} | ${escapeMarkdown(notes)} |`);

    if (result.alfa.failedRules.length > 0) {
      lines.push(`|  |  |  |  |  |  |  |  | Failed rules: ${escapeMarkdown(result.alfa.failedRules.join(", "))} |`);
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

  for (const result of results) {
    alfaTotals.passed += result.alfa.counts.passed;
    alfaTotals.failed += result.alfa.counts.failed;
    alfaTotals.cantTell += result.alfa.counts.cantTell;
    alfaTotals.inapplicable += result.alfa.counts.inapplicable;
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
    results
  };

  mkdirSync(outputDir, { recursive: true });
  const summaryPath = join(outputDir, "report.json");
  const markdownPath = join(outputDir, "report.md");
  const csvPath = join(outputDir, "report.csv");
  writeFileSync(summaryPath, JSON.stringify(summary, null, 2) + "\n", "utf8");
  writeFileSync(markdownPath, toMarkdownReport(summary), "utf8");
  writeFileSync(csvPath, toCsv(summary), "utf8");

  console.log(JSON.stringify({
    skipped: false,
    issueNumber: summary.issueNumber,
    scanTitle: summary.scanTitle,
    acceptedCount: summary.acceptedCount,
    rejectedCount: summary.rejectedCount,
    scannedAt,
    alfaTotals,
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
