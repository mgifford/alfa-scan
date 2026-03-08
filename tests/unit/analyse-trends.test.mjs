import test from "node:test";
import assert from "node:assert/strict";
import { mkdirSync, writeFileSync, rmSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import {
  loadScanHistory,
  computeTotals,
  computeDiff,
  detectSystemicPatterns,
  analyseTrends,
  formatTrendComment,
} from "../../scanner/analyse-trends.mjs";

const tmpDir = fileURLToPath(new URL("../../.tmp/test-trends", import.meta.url));

// ---------------------------------------------------------------------------
// Helpers to build minimal report fixtures
// ---------------------------------------------------------------------------

function makeReport(overrides = {}) {
  return {
    issueNumber: 1,
    scanTitle: "Test Site",
    scannedAt: "2026-01-01T00:00:00.000Z",
    scannedCount: 2,
    alfaTotals: { passed: 100, failed: 10, cantTell: 0, inapplicable: 0 },
    axeTotals: { passed: 50, failed: 5, cantTell: 0, inapplicable: 0 },
    equalAccessTotals: { passed: 80, failed: 8, cantTell: 0, inapplicable: 0 },
    accesslintTotals: { passed: 0, failed: 0, cantTell: 0, inapplicable: 0 },
    qualwebTotals: { passed: 60, failed: 6, cantTell: 0, inapplicable: 0 },
    results: [],
    ...overrides,
  };
}

// Write a report to a timestamped directory under tmpDir/issues/issue-<n>/
function writeReport(issueNumber, timestamp, report) {
  const dir = join(tmpDir, "issues", `issue-${issueNumber}`, timestamp);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "report.json"), JSON.stringify(report));
}

// ---------------------------------------------------------------------------
// computeTotals
// ---------------------------------------------------------------------------

test("computeTotals sums all scanner failure counts", () => {
  const report = makeReport();
  const totals = computeTotals(report);

  assert.equal(totals.alfa, 10);
  assert.equal(totals.axe, 5);
  assert.equal(totals.equalAccess, 8);
  assert.equal(totals.qualweb, 6);
  assert.equal(totals.accesslint, 0);
  assert.equal(totals.combined, 29); // 10+5+8+6+0
  assert.equal(totals.scannedAt, "2026-01-01T00:00:00.000Z");
  assert.equal(totals.scannedCount, 2);
});

test("computeTotals handles missing scanner totals gracefully", () => {
  const report = { scannedAt: null, scannedCount: 0 };
  const totals = computeTotals(report);

  assert.equal(totals.alfa, 0);
  assert.equal(totals.axe, 0);
  assert.equal(totals.combined, 0);
  assert.equal(totals.scannedAt, null);
});

// ---------------------------------------------------------------------------
// computeDiff
// ---------------------------------------------------------------------------

test("computeDiff reports worsening when failures increase", () => {
  const older = makeReport({ alfaTotals: { failed: 5 } });
  const newer = makeReport({
    scannedAt: "2026-01-08T00:00:00.000Z",
    alfaTotals: { failed: 10 },
  });
  const diff = computeDiff(older, newer);

  assert.equal(diff.trend, "worsening");
  assert.ok(diff.change > 0);
  assert.equal(diff.perScanner.alfa, 5);
});

test("computeDiff reports improving when failures decrease", () => {
  const older = makeReport({ alfaTotals: { failed: 20 } });
  const newer = makeReport({
    scannedAt: "2026-01-08T00:00:00.000Z",
    alfaTotals: { failed: 10 },
  });
  const diff = computeDiff(older, newer);

  assert.equal(diff.trend, "improving");
  assert.ok(diff.change < 0);
});

test("computeDiff reports stable when failures are unchanged", () => {
  const scan = makeReport();
  const diff = computeDiff(scan, { ...scan, scannedAt: "2026-01-08T00:00:00.000Z" });

  assert.equal(diff.trend, "stable");
  assert.equal(diff.change, 0);
});

test("computeDiff includes per-scanner deltas", () => {
  const older = makeReport({
    axeTotals: { failed: 2 },
    qualwebTotals: { failed: 10 },
  });
  const newer = makeReport({
    scannedAt: "2026-01-08T00:00:00.000Z",
    axeTotals: { failed: 4 },
    qualwebTotals: { failed: 8 },
  });
  const diff = computeDiff(older, newer);

  assert.equal(diff.perScanner.axe, 2);
  assert.equal(diff.perScanner.qualweb, -2);
});

// ---------------------------------------------------------------------------
// detectSystemicPatterns
// ---------------------------------------------------------------------------

test("detectSystemicPatterns returns rules failing on many pages", () => {
  const ruleA = "https://alfa.siteimprove.com/rules/sia-r56";
  const ruleB = "https://alfa.siteimprove.com/rules/sia-r111";

  const report = makeReport({
    results: [
      {
        finalUrl: "https://example.com/",
        alfa: { failedRules: [ruleA, ruleB] },
        axe: { failedRules: [] },
      },
      {
        finalUrl: "https://example.com/about",
        alfa: { failedRules: [ruleA, ruleB] },
        axe: { failedRules: [] },
      },
      {
        finalUrl: "https://example.com/contact",
        alfa: { failedRules: [ruleA] },
        axe: { failedRules: [] },
      },
    ],
  });

  const patterns = detectSystemicPatterns(report, 2);

  assert.ok(patterns.length >= 1);
  const topPattern = patterns[0];
  assert.equal(topPattern.ruleId, ruleA);
  assert.equal(topPattern.pageCount, 3);
});

test("detectSystemicPatterns respects threshold", () => {
  const ruleA = "https://alfa.siteimprove.com/rules/sia-r56";
  const report = makeReport({
    results: [
      { finalUrl: "https://example.com/", alfa: { failedRules: [ruleA] }, axe: { failedRules: [] } },
      { finalUrl: "https://example.com/b", alfa: { failedRules: [ruleA] }, axe: { failedRules: [] } },
    ],
  });

  // threshold=3: ruleA only appears on 2 pages, should not be returned
  const patterns = detectSystemicPatterns(report, 3);
  assert.equal(patterns.length, 0);
});

test("detectSystemicPatterns handles empty results", () => {
  const report = makeReport({ results: [] });
  const patterns = detectSystemicPatterns(report);
  assert.equal(patterns.length, 0);
});

test("detectSystemicPatterns prefixes axe rule IDs", () => {
  const axeRule = "color-contrast";
  const report = makeReport({
    results: [
      { finalUrl: "https://example.com/a", alfa: { failedRules: [] }, axe: { failedRules: [axeRule] } },
      { finalUrl: "https://example.com/b", alfa: { failedRules: [] }, axe: { failedRules: [axeRule] } },
      { finalUrl: "https://example.com/c", alfa: { failedRules: [] }, axe: { failedRules: [axeRule] } },
    ],
  });

  const patterns = detectSystemicPatterns(report, 2);
  assert.ok(patterns.some((p) => p.ruleId === `axe:${axeRule}`));
});

// ---------------------------------------------------------------------------
// analyseTrends
// ---------------------------------------------------------------------------

test("analyseTrends returns error object for empty history", () => {
  const result = analyseTrends([]);
  assert.ok(result.error);
  assert.match(result.error, /No scan history/);
});

test("analyseTrends returns insufficient history for single scan", () => {
  const result = analyseTrends([makeReport()]);
  assert.ok(result.error);
  assert.match(result.error, /Insufficient history/);
  assert.ok(result.latestTotals);
});

test("analyseTrends computes overall trend from two scans", () => {
  const older = makeReport({ scannedAt: "2026-01-01T00:00:00.000Z" });
  const newer = makeReport({
    scannedAt: "2026-01-08T00:00:00.000Z",
    alfaTotals: { failed: 5 }, // down from 10
  });

  const result = analyseTrends([older, newer]);

  assert.equal(result.scansAnalysed, 2);
  assert.equal(result.overallTrend, "improving");
  assert.equal(result.diffs.length, 1);
  assert.ok(result.latestTotals);
  assert.ok(result.baselineTotals);
});

test("analyseTrends tracks worsening trend", () => {
  const older = makeReport({ scannedAt: "2026-01-01T00:00:00.000Z" });
  const newer = makeReport({
    scannedAt: "2026-01-08T00:00:00.000Z",
    alfaTotals: { failed: 20 }, // up from 10
  });

  const result = analyseTrends([older, newer]);
  assert.equal(result.overallTrend, "worsening");
});

test("analyseTrends works with three or more scans", () => {
  const scan1 = makeReport({ scannedAt: "2026-01-01T00:00:00.000Z" });
  const scan2 = makeReport({
    scannedAt: "2026-01-08T00:00:00.000Z",
    alfaTotals: { failed: 15 },
  });
  const scan3 = makeReport({
    scannedAt: "2026-01-15T00:00:00.000Z",
    alfaTotals: { failed: 8 },
  });

  const result = analyseTrends([scan1, scan2, scan3]);

  assert.equal(result.scansAnalysed, 3);
  assert.equal(result.diffs.length, 2);
  // Latest scan improved from scan2, so overall trend should be improving
  assert.equal(result.overallTrend, "improving");
});

// ---------------------------------------------------------------------------
// formatTrendComment
// ---------------------------------------------------------------------------

test("formatTrendComment handles no scan history", () => {
  const comment = formatTrendComment({ error: "No scan history available" }, "Test Site");
  assert.match(comment, /Accessibility Trend Analysis/);
  assert.match(comment, /Test Site/);
  assert.match(comment, /No scan history/);
});

test("formatTrendComment handles insufficient history", () => {
  const analysis = {
    error: "Insufficient history",
    message: "At least 2 scans are required for trend analysis",
    latestTotals: computeTotals(makeReport()),
  };
  const comment = formatTrendComment(analysis);
  assert.match(comment, /Not enough scan history/);
  assert.match(comment, /Combined/);
});

test("formatTrendComment includes trend emoji and label", () => {
  const older = makeReport({ scannedAt: "2026-01-01T00:00:00.000Z" });
  const newer = makeReport({
    scannedAt: "2026-01-08T00:00:00.000Z",
    alfaTotals: { failed: 5 },
  });
  const analysis = analyseTrends([older, newer]);
  const comment = formatTrendComment(analysis, "My Site");

  assert.match(comment, /📈/);
  assert.match(comment, /Improving/);
  assert.match(comment, /My Site/);
  assert.match(comment, /TREND_ANALYSIS/); // Should include opt-in reminder
});

test("formatTrendComment includes systemic patterns when present", () => {
  const ruleA = "https://alfa.siteimprove.com/rules/sia-r56";
  const withResults = makeReport({
    scannedAt: "2026-01-08T00:00:00.000Z",
    results: [
      { finalUrl: "https://example.com/a", alfa: { failedRules: [ruleA] }, axe: { failedRules: [] } },
      { finalUrl: "https://example.com/b", alfa: { failedRules: [ruleA] }, axe: { failedRules: [] } },
      { finalUrl: "https://example.com/c", alfa: { failedRules: [ruleA] }, axe: { failedRules: [] } },
    ],
  });
  const analysis = analyseTrends([makeReport({ scannedAt: "2026-01-01T00:00:00.000Z" }), withResults]);
  const comment = formatTrendComment(analysis);

  assert.match(comment, /Systemic Patterns/);
  assert.match(comment, /sia-r56/);
  assert.match(comment, /\b3\b.*pages/);
});

// ---------------------------------------------------------------------------
// loadScanHistory (file system integration)
// ---------------------------------------------------------------------------

test("loadScanHistory returns empty array for non-existent issue", () => {
  const history = loadScanHistory("/nonexistent/path", 999);
  assert.deepEqual(history, []);
});

test("loadScanHistory loads and sorts reports oldest-first", () => {
  try {
    const report1 = makeReport({ scannedAt: "2026-01-01T00:00:00.000Z" });
    const report2 = makeReport({ scannedAt: "2026-01-08T00:00:00.000Z" });

    // Write in reverse order to verify sorting works
    writeReport(42, "2026-01-08T00-00-00-000Z", report2);
    writeReport(42, "2026-01-01T00-00-00-000Z", report1);

    const history = loadScanHistory(join(tmpDir, "issues"), 42);

    assert.equal(history.length, 2);
    assert.equal(history[0].scannedAt, "2026-01-01T00:00:00.000Z");
    assert.equal(history[1].scannedAt, "2026-01-08T00:00:00.000Z");
  } finally {
    rmSync(join(tmpDir, "issues", "issue-42"), { recursive: true, force: true });
  }
});

test("loadScanHistory respects the limit parameter", () => {
  try {
    for (let i = 1; i <= 6; i++) {
      const stamp = `2026-01-${String(i).padStart(2, "0")}T00-00-00-000Z`;
      writeReport(43, stamp, makeReport({ scannedAt: `2026-01-${String(i).padStart(2, "0")}T00:00:00.000Z` }));
    }

    const history = loadScanHistory(join(tmpDir, "issues"), 43, 3);
    assert.equal(history.length, 3);
    // Should have the 3 most recent
    assert.equal(history[0].scannedAt, "2026-01-04T00:00:00.000Z");
    assert.equal(history[2].scannedAt, "2026-01-06T00:00:00.000Z");
  } finally {
    rmSync(join(tmpDir, "issues", "issue-43"), { recursive: true, force: true });
  }
});

test("loadScanHistory skips directories without report.json", () => {
  try {
    // Create a timestamp dir with no report.json
    const emptyDir = join(tmpDir, "issues", "issue-44", "2026-01-01T00-00-00-000Z");
    mkdirSync(emptyDir, { recursive: true });

    // Create a valid one
    writeReport(44, "2026-01-02T00-00-00-000Z", makeReport());

    const history = loadScanHistory(join(tmpDir, "issues"), 44);
    assert.equal(history.length, 1);
  } finally {
    rmSync(join(tmpDir, "issues", "issue-44"), { recursive: true, force: true });
  }
});
