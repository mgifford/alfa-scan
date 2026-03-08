/**
 * analyse-trends.mjs
 *
 * Computes accessibility scan trends by comparing historical scan reports for a
 * recurring issue, then formats the analysis as a structured GitHub comment.
 * An optional AI-enriched analysis can be requested via the GitHub Models API.
 *
 * stdout: JSON analysis object (for workflow parsing)
 * stderr: progress and diagnostic messages
 *
 * Usage: node scanner/analyse-trends.mjs <reports-dir> <issue-number>
 */

import { readdirSync, readFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const DEFAULT_LIMIT = 5;
const DEFAULT_SYSTEMIC_THRESHOLD = 3;

// Regex matching timestamp-named scan directories, e.g. 2026-03-02T01-05-00-798Z
const TIMESTAMP_DIR_RE = /^\d{4}-\d{2}-\d{2}T\d{2}-\d{2}-\d{2}-\d{3}Z$/;

/**
 * Load the N most recent scan reports for an issue from the reports directory.
 * Returns an array of parsed report objects, sorted oldest-first.
 *
 * @param {string} reportsDir - Base reports directory (e.g. "reports/issues")
 * @param {number} issueNumber - GitHub issue number
 * @param {number} [limit] - Maximum number of historical scans to load
 * @returns {object[]} Sorted array of parsed report JSON objects
 */
export function loadScanHistory(reportsDir, issueNumber, limit = DEFAULT_LIMIT) {
  const issueDir = join(reportsDir, `issue-${issueNumber}`);

  if (!existsSync(issueDir)) {
    return [];
  }

  let stamps;
  try {
    stamps = readdirSync(issueDir)
      .filter((name) => TIMESTAMP_DIR_RE.test(name))
      .sort() // ISO timestamps sort lexicographically (oldest first)
      .slice(-limit); // Take the N most recent
  } catch {
    return [];
  }

  const reports = [];
  for (const stamp of stamps) {
    const reportPath = join(issueDir, stamp, "report.json");
    if (existsSync(reportPath)) {
      try {
        const raw = readFileSync(reportPath, "utf8");
        reports.push(JSON.parse(raw));
      } catch {
        // Skip malformed or unreadable reports
      }
    }
  }

  return reports;
}

/**
 * Compute aggregate violation totals from a scan report.
 *
 * @param {object} report - Parsed report.json object
 * @returns {{ alfa: number, axe: number, equalAccess: number, qualweb: number,
 *             accesslint: number, combined: number, scannedAt: string|null,
 *             scannedCount: number }}
 */
export function computeTotals(report) {
  const alfa = report.alfaTotals?.failed ?? 0;
  const axe = report.axeTotals?.failed ?? 0;
  const equalAccess = report.equalAccessTotals?.failed ?? 0;
  const qualweb = report.qualwebTotals?.failed ?? 0;
  const accesslint = report.accesslintTotals?.failed ?? 0;

  return {
    alfa,
    axe,
    equalAccess,
    qualweb,
    accesslint,
    combined: alfa + axe + equalAccess + qualweb + accesslint,
    scannedAt: report.scannedAt ?? null,
    scannedCount: report.scannedCount ?? 0,
  };
}

/**
 * Compute the diff between two consecutive scan reports.
 *
 * @param {object} baseline - Older scan report
 * @param {object} current  - Newer scan report
 * @returns {{ from: object, to: object, change: number, trend: string,
 *             perScanner: object }}
 */
export function computeDiff(baseline, current) {
  const baselineTotals = computeTotals(baseline);
  const currentTotals = computeTotals(current);

  const change = currentTotals.combined - baselineTotals.combined;

  return {
    from: { scannedAt: baselineTotals.scannedAt, totals: baselineTotals },
    to: { scannedAt: currentTotals.scannedAt, totals: currentTotals },
    change,
    trend: change < 0 ? "improving" : change > 0 ? "worsening" : "stable",
    perScanner: {
      alfa: currentTotals.alfa - baselineTotals.alfa,
      axe: currentTotals.axe - baselineTotals.axe,
      equalAccess: currentTotals.equalAccess - baselineTotals.equalAccess,
      qualweb: currentTotals.qualweb - baselineTotals.qualweb,
      accesslint: currentTotals.accesslint - baselineTotals.accesslint,
    },
  };
}

/**
 * Detect systemic patterns: accessibility rules that fail on many pages.
 * Returns rules appearing on >= threshold pages, sorted by page count descending.
 *
 * @param {object} report     - Parsed report.json object
 * @param {number} [threshold] - Minimum pages for a pattern to be reported
 * @returns {Array<{ ruleId: string, pageCount: number, pages: string[] }>}
 */
export function detectSystemicPatterns(report, threshold = DEFAULT_SYSTEMIC_THRESHOLD) {
  /** @type {Map<string, Set<string>>} */
  const rulePageMap = new Map();

  for (const result of report.results ?? []) {
    const pageUrl = result.finalUrl ?? result.submittedUrl ?? "";

    // ALFA failed rules
    for (const ruleId of result.alfa?.failedRules ?? []) {
      if (!rulePageMap.has(ruleId)) rulePageMap.set(ruleId, new Set());
      rulePageMap.get(ruleId).add(pageUrl);
    }

    // axe-core failed rules (prefixed to avoid collisions with ALFA rule IDs)
    for (const ruleId of result.axe?.failedRules ?? []) {
      const key = `axe:${ruleId}`;
      if (!rulePageMap.has(key)) rulePageMap.set(key, new Set());
      rulePageMap.get(key).add(pageUrl);
    }
  }

  const patterns = [];
  for (const [ruleId, pages] of rulePageMap) {
    if (pages.size >= threshold) {
      patterns.push({
        ruleId,
        pageCount: pages.size,
        pages: [...pages].slice(0, 10), // Cap at 10 for readability
      });
    }
  }

  return patterns.sort((a, b) => b.pageCount - a.pageCount);
}

/**
 * Analyse trends across a history of scan reports.
 *
 * @param {object[]} history - Array of parsed report objects, oldest first
 * @returns {object} Structured analysis result
 */
export function analyseTrends(history) {
  if (history.length === 0) {
    return { error: "No scan history available" };
  }

  if (history.length === 1) {
    return {
      error: "Insufficient history",
      message: "At least 2 scans are required for trend analysis",
      latestTotals: computeTotals(history[0]),
      latestSystemicPatterns: detectSystemicPatterns(history[0]),
    };
  }

  const diffs = [];
  for (let i = 1; i < history.length; i++) {
    diffs.push(computeDiff(history[i - 1], history[i]));
  }

  const latestDiff = diffs[diffs.length - 1];
  const improvingCount = diffs.filter((d) => d.trend === "improving").length;
  const worseningCount = diffs.filter((d) => d.trend === "worsening").length;

  const overallTrend = latestDiff.trend;

  return {
    scansAnalysed: history.length,
    diffs,
    latestDiff,
    overallTrend,
    improvingCount,
    worseningCount,
    latestTotals: computeTotals(history[history.length - 1]),
    baselineTotals: computeTotals(history[0]),
    latestSystemicPatterns: detectSystemicPatterns(history[history.length - 1]),
  };
}

/**
 * Format a totals object as a markdown table.
 *
 * @param {{ alfa: number, axe: number, equalAccess: number, qualweb: number,
 *           accesslint: number, combined: number }} totals
 * @returns {string}
 */
function formatTotalsTable(totals) {
  return [
    "### Current Scan Totals",
    "",
    "| Scanner | Failures |",
    "|---------|----------|",
    `| ALFA | ${totals.alfa} |`,
    `| axe-core | ${totals.axe} |`,
    `| Equal Access | ${totals.equalAccess} |`,
    `| QualWeb | ${totals.qualweb} |`,
    `| **Combined** | **${totals.combined}** |`,
  ].join("\n");
}

/**
 * Format a trend analysis object as a markdown comment ready to post on GitHub.
 *
 * @param {object} analysis  - Output of analyseTrends()
 * @param {string} [scanTitle] - Human-readable scan title
 * @returns {string} Markdown-formatted comment body
 */
export function formatTrendComment(analysis, scanTitle = "") {
  const titleSuffix = scanTitle ? ` — ${scanTitle}` : "";

  if (analysis.error === "No scan history available") {
    return `## 📊 Accessibility Trend Analysis${titleSuffix}\n\n_No scan history found for this issue._`;
  }

  if (analysis.error === "Insufficient history") {
    const lines = [
      `## 📊 Accessibility Trend Analysis${titleSuffix}`,
      "",
      "_Not enough scan history for trend analysis. At least 2 scans are needed._",
      "",
    ];
    if (analysis.latestTotals) {
      lines.push(formatTotalsTable(analysis.latestTotals));
    }
    return lines.join("\n");
  }

  const trendEmoji = { improving: "📈", stable: "➡️", worsening: "📉" };
  const trendLabel = {
    improving: "✅ Improving",
    stable: "⚠️ Stable",
    worsening: "❌ Worsening",
  };

  const lines = [
    `## 📊 Accessibility Trend Analysis${titleSuffix}`,
    "",
    `**Overall Trend: ${trendEmoji[analysis.overallTrend] ?? "➡️"} ${trendLabel[analysis.overallTrend] ?? analysis.overallTrend}**`,
    `(${analysis.improvingCount} scan${analysis.improvingCount === 1 ? "" : "s"} improved, ${analysis.worseningCount} worsened)`,
    "",
  ];

  const latestDiff = analysis.latestDiff;
  if (latestDiff.change !== 0) {
    const direction = latestDiff.change < 0 ? "decreased" : "increased";
    lines.push(
      `Total violations ${direction} by **${Math.abs(latestDiff.change)}** since the previous scan.`,
      ""
    );
  } else {
    lines.push("Total violations unchanged since the previous scan.", "");
  }

  if (analysis.latestSystemicPatterns?.length > 0) {
    lines.push(
      "### 🔵 Systemic Patterns (same violation across multiple pages)",
      ""
    );
    for (const pattern of analysis.latestSystemicPatterns.slice(0, 5)) {
      // Display a short rule name: strip URL prefix or axe: prefix
      const ruleDisplay = pattern.ruleId
        .replace(/^axe:/, "[axe] ")
        .replace(/.*\/rules\//, "");
      lines.push(
        `- **${ruleDisplay}** — fails on **${pattern.pageCount}** page${pattern.pageCount === 1 ? "" : "s"}`
      );
    }
    lines.push("");
  }

  lines.push("### 📋 Scan History", "");
  lines.push("| Scan date | Combined failures | Change |");
  lines.push("|-----------|-------------------|--------|");

  const baseDate = analysis.baselineTotals.scannedAt
    ? new Date(analysis.baselineTotals.scannedAt).toISOString().slice(0, 10)
    : "Unknown";
  lines.push(
    `| ${baseDate} (baseline) | ${analysis.baselineTotals.combined} | — |`
  );

  for (const diff of analysis.diffs) {
    const date = diff.to.scannedAt
      ? new Date(diff.to.scannedAt).toISOString().slice(0, 10)
      : "Unknown";
    const changeStr =
      diff.change === 0 ? "±0" : diff.change > 0 ? `+${diff.change}` : `${diff.change}`;
    lines.push(`| ${date} | ${diff.to.totals.combined} | ${changeStr} |`);
  }

  lines.push(
    "",
    `_Analysis based on ${analysis.scansAnalysed} scans. Add \`TREND_ANALYSIS\` to your issue body to enable this analysis._`
  );

  return lines.join("\n");
}

async function main() {
  // Usage: node scanner/analyse-trends.mjs <reports-dir> <issue-number>
  const args = process.argv.slice(2);
  const reportsDir = args[0];
  const issueNumber = Number(args[1]);

  if (!reportsDir || !issueNumber || !Number.isInteger(issueNumber) || issueNumber <= 0) {
    console.error("Usage: node scanner/analyse-trends.mjs <reports-dir> <issue-number>");
    process.exit(1);
  }

  console.error(`Loading scan history for issue #${issueNumber} from ${reportsDir}…`);
  const history = loadScanHistory(reportsDir, issueNumber);
  console.error(`Found ${history.length} scan report(s).`);

  const analysis = analyseTrends(history);

  // Output JSON to stdout for workflow parsing
  console.log(JSON.stringify(analysis));
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}
