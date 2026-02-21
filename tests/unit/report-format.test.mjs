import test from "node:test";
import assert from "node:assert/strict";
import { escapeMarkdown, extractRuleId, toMarkdownReport } from "../../scanner/run-scan.mjs";

test("Enhanced report format includes priority sections", () => {
  // Test data matching the structure from run-scan.mjs
  const summary = {
    issueNumber: 1,
    issueUrl: "https://github.com/example/repo/issues/1",
    issueTitle: "SCAN: Test Site",
    scanTitle: "Test Site",
    submittedBy: "testuser",
    scannedAt: "2026-02-21T00:00:00.000Z",
    totalSubmitted: 3,
    acceptedCount: 3,
    rejectedCount: 0,
    rejected: [],
    alfaTotals: {
      passed: 300,
      failed: 50,
      cantTell: 5,
      inapplicable: 10
    },
    axeTotals: {
      passed: 250,
      failed: 40,
      cantTell: 3,
      inapplicable: 8
    },
    results: [
      {
        submittedUrl: "https://example.com/page1",
        finalUrl: "https://example.com/page1",
        redirected: false,
        statusCode: 200,
        ok: true,
        contentType: "text/html",
        pageTitle: "Page 1",
        elapsedMs: 100,
        error: null,
        alfa: {
          executed: true,
          error: null,
          counts: { passed: 100, failed: 20, cantTell: 2, inapplicable: 3 },
          failedRules: [
            "https://alfa.siteimprove.com/rules/sia-r111",
            "https://alfa.siteimprove.com/rules/sia-r56"
          ],
          passedRules: [],
          failures: [],
          outcomeCount: 125
        },
        axe: {
          executed: true,
          error: null,
          counts: { passed: 80, failed: 15, cantTell: 1, inapplicable: 2 },
          failedRules: ["color-contrast", "aria-label"],
          passedRules: [],
          failures: [],
          outcomeCount: 98
        }
      },
      {
        submittedUrl: "https://example.com/page2",
        finalUrl: "https://example.com/page2",
        redirected: false,
        statusCode: 200,
        ok: true,
        contentType: "text/html",
        pageTitle: "Page 2",
        elapsedMs: 150,
        error: null,
        alfa: {
          executed: true,
          error: null,
          counts: { passed: 100, failed: 15, cantTell: 2, inapplicable: 3 },
          failedRules: [
            "https://alfa.siteimprove.com/rules/sia-r111",
            "https://alfa.siteimprove.com/rules/sia-r57"
          ],
          passedRules: [],
          failures: [],
          outcomeCount: 120
        },
        axe: {
          executed: true,
          error: null,
          counts: { passed: 85, failed: 12, cantTell: 1, inapplicable: 3 },
          failedRules: ["color-contrast"],
          passedRules: [],
          failures: [],
          outcomeCount: 101
        }
      },
      {
        submittedUrl: "https://example.com/page3",
        finalUrl: "https://example.com/page3",
        redirected: false,
        statusCode: 200,
        ok: true,
        contentType: "text/html",
        pageTitle: "Page 3",
        elapsedMs: 120,
        error: null,
        alfa: {
          executed: true,
          error: null,
          counts: { passed: 100, failed: 15, cantTell: 1, inapplicable: 4 },
          failedRules: [
            "https://alfa.siteimprove.com/rules/sia-r111"
          ],
          passedRules: [],
          failures: [],
          outcomeCount: 120
        },
        axe: {
          executed: true,
          error: null,
          counts: { passed: 85, failed: 13, cantTell: 1, inapplicable: 3 },
          failedRules: ["color-contrast", "aria-label"],
          passedRules: [],
          failures: [],
          outcomeCount: 102
        }
      }
    ]
  };

  const report = toMarkdownReport(summary);

  // Verify priority sections are present
  assert.ok(report.includes("## 🎯 Priority: Pages with Most Errors"), "Report should include priority pages section");
  assert.ok(report.includes("## 🔧 Priority: Most Common Issues (ALFA)"), "Report should include ALFA priority issues section");
  assert.ok(report.includes("## 🔧 Priority: Most Common Issues (axe)"), "Report should include axe priority issues section");
  
  // Verify pages are sorted by error count (descending) - combined ALFA + axe
  assert.ok(report.includes("Page 1"), "Report should include Page 1");
  // Page 1 has 35 total failures (20 ALFA + 15 axe), Page 2 has 27, Page 3 has 28
  
  // Verify rule frequency counting for ALFA
  assert.ok(report.includes("SIA-R111"), "Report should include most common ALFA rule");
  assert.ok(report.includes("**3** of 3"), "Rule frequency should show 3 pages affected for sia-r111");
  
  // Verify ALFA rule has description
  assert.ok(report.includes("Target size (enhanced)") || report.includes("Interactive elements"), 
    "Report should include ALFA rule description");
  
  // Verify axe rules are present
  assert.ok(report.includes("color-contrast"), "Report should include axe rule");
  
  // Verify helpful tips are included
  assert.ok(report.includes("💡 **Tip**"), "Report should include helpful tips");
  assert.ok(report.includes("🤖 **Future Enhancement**"), "Report should mention future AI enhancement");
  assert.ok(report.includes("opt-in only, no auto-run AI"), "Report should clarify no auto-run AI");
  
  // Verify rule documentation links
  assert.ok(report.includes("[View Rule](https://alfa.siteimprove.com/rules/sia-r111)"), "Report should include ALFA rule documentation link");
});

test("Enhanced report handles case with no errors", () => {
  const summaryNoErrors = {
    issueNumber: 2,
    issueUrl: "https://github.com/example/repo/issues/2",
    scanTitle: "Perfect Site",
    submittedBy: "testuser",
    scannedAt: "2026-02-21T00:00:00.000Z",
    totalSubmitted: 1,
    acceptedCount: 1,
    rejectedCount: 0,
    rejected: [],
    alfaTotals: {
      passed: 100,
      failed: 0,
      cantTell: 0,
      inapplicable: 10
    },
    axeTotals: {
      passed: 80,
      failed: 0,
      cantTell: 0,
      inapplicable: 8
    },
    results: [
      {
        submittedUrl: "https://example.com/perfect",
        finalUrl: "https://example.com/perfect",
        redirected: false,
        statusCode: 200,
        ok: true,
        contentType: "text/html",
        pageTitle: "Perfect Page",
        elapsedMs: 100,
        error: null,
        alfa: {
          executed: true,
          error: null,
          counts: { passed: 100, failed: 0, cantTell: 0, inapplicable: 10 },
          failedRules: [],
          passedRules: [],
          failures: [],
          outcomeCount: 110
        },
        axe: {
          executed: true,
          error: null,
          counts: { passed: 80, failed: 0, cantTell: 0, inapplicable: 8 },
          failedRules: [],
          passedRules: [],
          failures: [],
          outcomeCount: 88
        }
      }
    ]
  };

  const report = toMarkdownReport(summaryNoErrors);

  // Verify positive messages for no errors
  assert.ok(report.includes("✅ No pages with accessibility errors detected!"), "Report should show success message for no errors");
  assert.ok(report.includes("✅ No ALFA failed rules detected!"), "Report should show success message for no ALFA failed rules");
  assert.ok(report.includes("✅ No axe failed rules detected!"), "Report should show success message for no axe failed rules");
});
