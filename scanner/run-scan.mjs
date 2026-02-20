import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { parseScanIssue } from "./parse-issue.mjs";
import { validateTargets } from "./validate-targets.mjs";

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

    return {
      submittedUrl: target.submittedUrl,
      finalUrl,
      redirected: finalUrl !== target.normalizedUrl,
      statusCode: response.status,
      ok: response.ok,
      contentType,
      pageTitle,
      elapsedMs,
      error: null
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
      error: error instanceof Error ? error.message : String(error)
    };
  }
}

function toMarkdownReport(summary) {
  const lines = [];
  lines.push(`# Scan Report: ${summary.scanTitle || `Issue #${summary.issueNumber}`}`);
  lines.push("");
  lines.push(`- Issue: ${summary.issueUrl}`);
  lines.push(`- Submitted by: ${summary.submittedBy}`);
  lines.push(`- Scanned at: ${summary.scannedAt}`);
  lines.push(`- Total URLs submitted: ${summary.totalSubmitted}`);
  lines.push(`- Accepted public URLs: ${summary.acceptedCount}`);
  lines.push(`- Rejected URLs: ${summary.rejectedCount}`);
  lines.push("");

  if (summary.rejected.length > 0) {
    lines.push("## Rejected URLs");
    lines.push("");
    for (const rejected of summary.rejected) {
      lines.push(`- ${rejected.submittedUrl} - ${rejected.reason}`);
    }
    lines.push("");
  }

  lines.push("## URL Scan Results");
  lines.push("");
  lines.push("| Submitted URL | Final URL | Status | HTTP | Redirected | Time (ms) | Notes |\n|---|---|---:|---:|---:|---:|---|");
  for (const result of summary.results) {
    const status = result.ok ? "OK" : "FAIL";
    const httpCode = result.statusCode ?? "-";
    const redirected = result.redirected ? "yes" : "no";
    const notes = result.error || result.pageTitle || "";
    lines.push(`| ${result.submittedUrl} | ${result.finalUrl} | ${status} | ${httpCode} | ${redirected} | ${result.elapsedMs} | ${notes.replace(/\|/g, "\\|")} |`);
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
    results
  };

  mkdirSync(outputDir, { recursive: true });
  const summaryPath = join(outputDir, "report.json");
  const markdownPath = join(outputDir, "report.md");
  writeFileSync(summaryPath, JSON.stringify(summary, null, 2) + "\n", "utf8");
  writeFileSync(markdownPath, toMarkdownReport(summary), "utf8");

  console.log(JSON.stringify({
    skipped: false,
    issueNumber: summary.issueNumber,
    scanTitle: summary.scanTitle,
    acceptedCount: summary.acceptedCount,
    rejectedCount: summary.rejectedCount,
    scannedAt,
    summaryPath,
    markdownPath
  }, null, 2));
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
