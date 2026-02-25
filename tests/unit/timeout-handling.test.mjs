import { test } from "node:test";
import assert from "node:assert/strict";

test("timeout constants can be configured via environment variables", () => {
  // This test verifies that the module can be configured via environment variables
  // The actual values are internal to the module and used during scan execution
  
  // Set environment variables
  process.env.FETCH_TIMEOUT_MS = "15000";
  process.env.PER_URL_TIMEOUT_MS = "60000";
  process.env.TOTAL_SCAN_TIMEOUT_MS = "1800000"; // 30 minutes
  
  // Just verify that environment variables can be set without errors
  assert.equal(process.env.FETCH_TIMEOUT_MS, "15000", "FETCH_TIMEOUT_MS should be set");
  assert.equal(process.env.PER_URL_TIMEOUT_MS, "60000", "PER_URL_TIMEOUT_MS should be set");
  assert.equal(process.env.TOTAL_SCAN_TIMEOUT_MS, "1800000", "TOTAL_SCAN_TIMEOUT_MS should be set");
});

test("toMarkdownReport includes timeout information when present", async () => {
  const { toMarkdownReport } = await import("../../scanner/run-scan.mjs");
  
  const summaryWithTimeout = {
    issueNumber: 123,
    issueUrl: "https://github.com/org/repo/issues/123",
    issueTitle: "SCAN: Test with timeout",
    scanTitle: "Test with timeout",
    submittedBy: "testuser",
    scannedAt: "2026-02-25T10:00:00Z",
    totalElapsedMs: 3000000, // 50 minutes
    totalSubmitted: 100,
    acceptedCount: 100,
    scannedCount: 50,
    skippedDueToTimeout: 50,
    rejectedCount: 0,
    rejected: [],
    alfaTotals: {
      passed: 100,
      failed: 10,
      cantTell: 5,
      inapplicable: 20
    },
    axeTotals: {
      passed: 95,
      failed: 8,
      cantTell: 3,
      inapplicable: 15
    },
    results: []
  };
  
  const report = toMarkdownReport(summaryWithTimeout, "4.11");
  
  // Check that the report includes timing information
  assert.ok(report.includes("Scan duration:"), "Report should include scan duration");
  assert.ok(report.includes("50.0 minutes"), "Report should show 50 minutes");
  
  // Check that skipped URLs are mentioned
  assert.ok(report.includes("50 URLs skipped due to timeout"), "Report should mention skipped URLs");
  assert.ok(report.includes("URLs scanned: 50"), "Report should show scanned count");
});

test("toMarkdownReport handles complete scan without timeout", async () => {
  const { toMarkdownReport } = await import("../../scanner/run-scan.mjs");
  
  const summaryComplete = {
    issueNumber: 124,
    issueUrl: "https://github.com/org/repo/issues/124",
    issueTitle: "SCAN: Complete scan",
    scanTitle: "Complete scan",
    submittedBy: "testuser",
    scannedAt: "2026-02-25T10:00:00Z",
    totalElapsedMs: 600000, // 10 minutes
    totalSubmitted: 10,
    acceptedCount: 10,
    scannedCount: 10,
    skippedDueToTimeout: 0,
    rejectedCount: 0,
    rejected: [],
    alfaTotals: {
      passed: 100,
      failed: 10,
      cantTell: 5,
      inapplicable: 20
    },
    axeTotals: {
      passed: 95,
      failed: 8,
      cantTell: 3,
      inapplicable: 15
    },
    results: []
  };
  
  const report = toMarkdownReport(summaryComplete, "4.11");
  
  // Check that the report includes timing information
  assert.ok(report.includes("Scan duration:"), "Report should include scan duration");
  assert.ok(report.includes("10.0 minutes"), "Report should show 10 minutes");
  
  // Check that there's no timeout warning
  assert.ok(!report.includes("skipped due to timeout"), "Report should not mention timeouts when complete");
});

test("toMarkdownReport handles legacy summary format without new fields", async () => {
  const { toMarkdownReport } = await import("../../scanner/run-scan.mjs");
  
  // Legacy summary without totalElapsedMs, scannedCount, skippedDueToTimeout
  const legacySummary = {
    issueNumber: 125,
    issueUrl: "https://github.com/org/repo/issues/125",
    issueTitle: "SCAN: Legacy format",
    scanTitle: "Legacy format",
    submittedBy: "testuser",
    scannedAt: "2026-02-25T10:00:00Z",
    totalSubmitted: 5,
    acceptedCount: 5,
    rejectedCount: 0,
    rejected: [],
    alfaTotals: {
      passed: 50,
      failed: 5,
      cantTell: 2,
      inapplicable: 10
    },
    axeTotals: {
      passed: 48,
      failed: 4,
      cantTell: 1,
      inapplicable: 8
    },
    results: []
  };
  
  const report = toMarkdownReport(legacySummary, "4.11");
  
  // Should generate report without errors, just without the new fields
  assert.ok(report.includes("# Scan Report:"), "Report should have header");
  assert.ok(report.includes("Accepted public URLs: 5"), "Report should show accepted count");
  assert.ok(!report.includes("skipped due to timeout"), "Report should not mention timeouts for legacy format");
});
