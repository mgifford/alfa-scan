import test from "node:test";
import assert from "node:assert/strict";
import { escapeMarkdown, extractRuleId, toMarkdownReport, markdownToHtml } from "../../scanner/run-scan.mjs";

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

test("Cross-page pattern analysis identifies recurring HTML issues", () => {
  // Test data with recurring HTML patterns across multiple pages
  const summary = {
    issueNumber: 3,
    issueUrl: "https://github.com/example/repo/issues/3",
    scanTitle: "Pattern Test",
    submittedBy: "testuser",
    scannedAt: "2026-02-21T00:00:00.000Z",
    totalSubmitted: 3,
    acceptedCount: 3,
    rejectedCount: 0,
    rejected: [],
    alfaTotals: {
      passed: 200,
      failed: 60,
      cantTell: 0,
      inapplicable: 0
    },
    axeTotals: {
      passed: 180,
      failed: 40,
      cantTell: 0,
      inapplicable: 0
    },
    results: [
      {
        submittedUrl: "https://example.com/page1",
        finalUrl: "https://example.com/page1",
        redirected: false,
        statusCode: 200,
        ok: true,
        pageTitle: "Page 1",
        elapsedMs: 100,
        alfa: {
          executed: true,
          counts: { passed: 60, failed: 20, cantTell: 0, inapplicable: 0 },
          failedRules: ["https://alfa.siteimprove.com/rules/sia-r111"],
          passedRules: [],
          failures: [
            {
              rule: "https://alfa.siteimprove.com/rules/sia-r111",
              html: '<button class="small-btn">Click</button>',
              xpath: '/html/body/div/button[1]',
              message: "Target has insufficient size"
            },
            {
              rule: "https://alfa.siteimprove.com/rules/sia-r111",
              html: '<a href="#" class="tiny-link">Link</a>',
              xpath: '/html/body/div/a[1]',
              message: "Target has insufficient size"
            }
          ],
          outcomeCount: 80
        },
        axe: {
          executed: true,
          counts: { passed: 60, failed: 10, cantTell: 0, inapplicable: 0 },
          failedRules: ["color-contrast"],
          passedRules: [],
          failures: [
            {
              rule: "color-contrast",
              ruleUrl: "https://dequeuniversity.com/rules/axe/4.11/color-contrast",
              impact: "serious",
              html: '<p class="gray-text">Low contrast text</p>',
              xpath: '/html/body/p[1]',
              message: "Element has insufficient color contrast"
            }
          ],
          outcomeCount: 70
        }
      },
      {
        submittedUrl: "https://example.com/page2",
        finalUrl: "https://example.com/page2",
        redirected: false,
        statusCode: 200,
        ok: true,
        pageTitle: "Page 2",
        elapsedMs: 110,
        alfa: {
          executed: true,
          counts: { passed: 70, failed: 20, cantTell: 0, inapplicable: 0 },
          failedRules: ["https://alfa.siteimprove.com/rules/sia-r111"],
          passedRules: [],
          failures: [
            {
              rule: "https://alfa.siteimprove.com/rules/sia-r111",
              html: '<button class="small-btn">Click</button>',
              xpath: '/html/body/main/button[1]',
              message: "Target has insufficient size"
            }
          ],
          outcomeCount: 90
        },
        axe: {
          executed: true,
          counts: { passed: 60, failed: 15, cantTell: 0, inapplicable: 0 },
          failedRules: ["color-contrast"],
          passedRules: [],
          failures: [
            {
              rule: "color-contrast",
              ruleUrl: "https://dequeuniversity.com/rules/axe/4.11/color-contrast",
              impact: "serious",
              html: '<p class="gray-text">Low contrast text</p>',
              xpath: '/html/body/main/p[1]',
              message: "Element has insufficient color contrast"
            }
          ],
          outcomeCount: 75
        }
      },
      {
        submittedUrl: "https://example.com/page3",
        finalUrl: "https://example.com/page3",
        redirected: false,
        statusCode: 200,
        ok: true,
        pageTitle: "Page 3",
        elapsedMs: 105,
        alfa: {
          executed: true,
          counts: { passed: 70, failed: 20, cantTell: 0, inapplicable: 0 },
          failedRules: ["https://alfa.siteimprove.com/rules/sia-r111"],
          passedRules: [],
          failures: [
            {
              rule: "https://alfa.siteimprove.com/rules/sia-r111",
              html: '<button class="small-btn">Click</button>',
              xpath: '/html/body/section/button[1]',
              message: "Target has insufficient size"
            }
          ],
          outcomeCount: 90
        },
        axe: {
          executed: true,
          counts: { passed: 60, failed: 15, cantTell: 0, inapplicable: 0 },
          failedRules: ["color-contrast"],
          passedRules: [],
          failures: [
            {
              rule: "color-contrast",
              ruleUrl: "https://dequeuniversity.com/rules/axe/4.11/color-contrast",
              impact: "serious",
              html: '<p class="gray-text">Low contrast text</p>',
              xpath: '/html/body/section/p[1]',
              message: "Element has insufficient color contrast"
            }
          ],
          outcomeCount: 75
        }
      }
    ]
  };

  const report = toMarkdownReport(summary);

  // Verify cross-page pattern section is present
  assert.ok(report.includes("## 🔍 Cross-Page Patterns: Common HTML Issues"), 
    "Report should include cross-page patterns section");
  
  // Verify pattern section shows recurring issues
  assert.ok(report.includes("Fix the pattern once in your codebase to fix it everywhere"), 
    "Report should encourage fixing patterns at the source");
  
  // Verify recurring HTML patterns are identified
  assert.ok(report.includes('<button class="small-btn">Click</button>'), 
    "Report should show the recurring button pattern");
  assert.ok(report.includes('<p class="gray-text">Low contrast text</p>'), 
    "Report should show the recurring paragraph pattern");
  
  // Verify pattern affects multiple pages
  assert.ok(report.includes("Affects 3 page(s)") || report.includes("3 occurrence(s)"), 
    "Report should show that patterns affect multiple pages");
  
  // Verify replication instructions are included
  assert.ok(report.includes("**How to Replicate**"), 
    "Report should include replication instructions");
  assert.ok(report.includes("Press F12 to open DevTools"), 
    "Report should include DevTools instructions");
  assert.ok(report.includes("$x("), 
    "Report should include XPath search instructions");
  
  // Verify affected pages list
  assert.ok(report.includes("**Affected Pages**"), 
    "Report should list affected pages");
  assert.ok(report.includes("https://example.com/page1"), 
    "Report should list page1 in affected pages");
  
  // Verify pro tip about shared components
  assert.ok(report.includes("💡 **Pro Tip**"), 
    "Report should include pro tip");
  assert.ok(report.includes("shared components or templates"), 
    "Report should mention shared components");
});

test("Report includes dark mode information when URLs support it", () => {
  const summary = {
    issueNumber: 4,
    issueUrl: "https://github.com/example/repo/issues/4",
    scanTitle: "Dark Mode Test",
    submittedBy: "testuser",
    scannedAt: "2026-03-02T00:00:00.000Z",
    totalSubmitted: 3,
    acceptedCount: 3,
    scannedCount: 3,
    darkModeUrlCount: 2,
    rejectedCount: 0,
    rejected: [],
    alfaTotals: {
      passed: 100,
      failed: 0,
      cantTell: 0,
      inapplicable: 0
    },
    axeTotals: {
      passed: 80,
      failed: 0,
      cantTell: 0,
      inapplicable: 0
    },
    results: [
      {
        submittedUrl: "https://example.com/page1",
        finalUrl: "https://example.com/page1",
        alfa: {
          executed: true,
          counts: { passed: 50, failed: 0, cantTell: 0, inapplicable: 0 },
          failedRules: [],
          passedRules: [],
          failures: [],
          outcomeCount: 50
        },
        axe: {
          executed: true,
          counts: { passed: 40, failed: 0, cantTell: 0, inapplicable: 0 },
          failedRules: [],
          passedRules: [],
          failures: [],
          outcomeCount: 40,
          darkModeScanned: true
        }
      },
      {
        submittedUrl: "https://example.com/page2",
        finalUrl: "https://example.com/page2",
        alfa: {
          executed: true,
          counts: { passed: 50, failed: 0, cantTell: 0, inapplicable: 0 },
          failedRules: [],
          passedRules: [],
          failures: [],
          outcomeCount: 50
        },
        axe: {
          executed: true,
          counts: { passed: 40, failed: 0, cantTell: 0, inapplicable: 0 },
          failedRules: [],
          passedRules: [],
          failures: [],
          outcomeCount: 40,
          darkModeScanned: true
        }
      },
      {
        submittedUrl: "https://example.com/page3",
        finalUrl: "https://example.com/page3",
        alfa: {
          executed: true,
          counts: { passed: 0, failed: 0, cantTell: 0, inapplicable: 0 },
          failedRules: [],
          passedRules: [],
          failures: [],
          outcomeCount: 0
        },
        axe: {
          executed: true,
          counts: { passed: 0, failed: 0, cantTell: 0, inapplicable: 0 },
          failedRules: [],
          passedRules: [],
          failures: [],
          outcomeCount: 0,
          darkModeScanned: false
        }
      }
    ]
  };

  const report = toMarkdownReport(summary);

  // Verify dark mode information is present
  assert.ok(report.includes("🌙"), "Report should include dark mode emoji");
  assert.ok(report.includes("Dark mode tested: 2 of 3 URLs"), 
    "Report should show dark mode count");
  assert.ok(report.includes("67%") || report.includes("(67%)"), 
    "Report should show percentage of URLs with dark mode support");
  assert.ok(report.includes("prefers-color-scheme: dark"), 
    "Report should mention prefers-color-scheme: dark");
});

test("Report shows message when no URLs support dark mode", () => {
  const summary = {
    issueNumber: 5,
    issueUrl: "https://github.com/example/repo/issues/5",
    scanTitle: "No Dark Mode Test",
    submittedBy: "testuser",
    scannedAt: "2026-03-02T00:00:00.000Z",
    totalSubmitted: 2,
    acceptedCount: 2,
    scannedCount: 2,
    darkModeUrlCount: 0,
    rejectedCount: 0,
    rejected: [],
    alfaTotals: {
      passed: 100,
      failed: 0,
      cantTell: 0,
      inapplicable: 0
    },
    axeTotals: {
      passed: 80,
      failed: 0,
      cantTell: 0,
      inapplicable: 0
    },
    results: [
      {
        submittedUrl: "https://example.com/page1",
        finalUrl: "https://example.com/page1",
        alfa: {
          executed: true,
          counts: { passed: 50, failed: 0, cantTell: 0, inapplicable: 0 },
          failedRules: [],
          passedRules: [],
          failures: [],
          outcomeCount: 50
        },
        axe: {
          executed: true,
          counts: { passed: 40, failed: 0, cantTell: 0, inapplicable: 0 },
          failedRules: [],
          passedRules: [],
          failures: [],
          outcomeCount: 40,
          darkModeScanned: false
        }
      },
      {
        submittedUrl: "https://example.com/page2",
        finalUrl: "https://example.com/page2",
        alfa: {
          executed: true,
          counts: { passed: 50, failed: 0, cantTell: 0, inapplicable: 0 },
          failedRules: [],
          passedRules: [],
          failures: [],
          outcomeCount: 50
        },
        axe: {
          executed: true,
          counts: { passed: 40, failed: 0, cantTell: 0, inapplicable: 0 },
          failedRules: [],
          passedRules: [],
          failures: [],
          outcomeCount: 40,
          darkModeScanned: false
        }
      }
    ]
  };

  const report = toMarkdownReport(summary);

  // Verify dark mode information is present
  assert.ok(report.includes("🌙"), "Report should include dark mode emoji");
  assert.ok(report.includes("Dark mode: None of the scanned URLs support"), 
    "Report should show that no URLs support dark mode");
  assert.ok(report.includes("prefers-color-scheme: dark"), 
    "Report should mention prefers-color-scheme: dark");
});

test("markdownToHtml collapses continuation rows in Detailed Results table", () => {
  const summary = {
    issueNumber: 42,
    issueUrl: "https://github.com/example/repo/issues/42",
    scanTitle: "Test Scan",
    scannedAt: "2026-01-01T00:00:00.000Z",
    totalSubmitted: 1,
    acceptedCount: 1,
    rejectedCount: 0,
    rejected: [],
    alfaTotals: { passed: 10, failed: 2, cantTell: 0, inapplicable: 0 },
    axeTotals: { passed: 8, failed: 1, cantTell: 0, inapplicable: 0 },
    results: [
      {
        submittedUrl: "https://example.com/",
        finalUrl: "https://example.com/",
        redirected: false,
        statusCode: 200,
        ok: true,
        pageTitle: "Example Page",
        elapsedMs: 1000,
        error: null,
        duplicateFindingCount: 0,
        alfa: {
          executed: true,
          error: null,
          counts: { passed: 10, failed: 2, cantTell: 0, inapplicable: 0 },
          failedRules: [
            "https://alfa.siteimprove.com/rules/sia-r111",
            "https://alfa.siteimprove.com/rules/sia-r73"
          ],
          passedRules: [],
          failures: [],
          uniqueFailedCount: 2
        },
        axe: {
          executed: true,
          error: null,
          counts: { passed: 8, failed: 1, cantTell: 0, inapplicable: 0 },
          failedRules: ["color-contrast"],
          passedRules: [],
          failures: [],
          uniqueFailedCount: 1
        },
        equalAccess: {
          executed: false,
          error: null,
          counts: { passed: 0, failed: 0, cantTell: 0, inapplicable: 0 },
          failedRules: [],
          uniqueFailedCount: 0
        },
        accesslint: {
          executed: false,
          error: null,
          counts: { passed: 0, failed: 0, cantTell: 0, inapplicable: 0 },
          failedRules: [],
          uniqueFailedCount: 0
        }
      }
    ]
  };

  const markdown = toMarkdownReport(summary);
  const html = markdownToHtml(markdown, summary);

  // The Detailed Results table should not have bare continuation rows
  // (rows with all empty cells except the last)
  assert.ok(!html.includes("<tr><td></td><td></td><td></td><td></td><td></td>"),
    "HTML report should not contain bare continuation rows with empty cells");

  // Should use <details> for failed rules
  assert.ok(html.includes("<details>"), "HTML report should use <details> for failed rules");
  assert.ok(html.includes("<summary>"), "HTML report should use <summary> element");
  assert.ok(html.includes("View failed rules"), "Summary should say 'View failed rules'");

  // The failed rules content should be inside <details>
  assert.ok(html.includes("ALFA failed rules:"), "ALFA failed rules should still be present");
  assert.ok(html.includes("axe failed rules:"), "axe failed rules should still be present");
});

test("markdownToHtml Detailed Results table shows scanner count in summary", () => {
  const summary = {
    issueNumber: 43,
    issueUrl: "https://github.com/example/repo/issues/43",
    scanTitle: "Test Scan 2",
    scannedAt: "2026-01-01T00:00:00.000Z",
    totalSubmitted: 1,
    acceptedCount: 1,
    rejectedCount: 0,
    rejected: [],
    alfaTotals: { passed: 5, failed: 1, cantTell: 0, inapplicable: 0 },
    axeTotals: { passed: 5, failed: 1, cantTell: 0, inapplicable: 0 },
    results: [
      {
        submittedUrl: "https://example.com/",
        finalUrl: "https://example.com/",
        redirected: false,
        statusCode: 200,
        ok: true,
        pageTitle: "Example",
        elapsedMs: 500,
        error: null,
        duplicateFindingCount: 0,
        alfa: {
          executed: true,
          error: null,
          counts: { passed: 5, failed: 1, cantTell: 0, inapplicable: 0 },
          failedRules: ["https://alfa.siteimprove.com/rules/sia-r111"],
          passedRules: [],
          failures: [],
          uniqueFailedCount: 1
        },
        axe: {
          executed: true,
          error: null,
          counts: { passed: 5, failed: 1, cantTell: 0, inapplicable: 0 },
          failedRules: ["color-contrast"],
          passedRules: [],
          failures: [],
          uniqueFailedCount: 1
        },
        equalAccess: null,
        accesslint: null
      }
    ]
  };

  const markdown = toMarkdownReport(summary);
  const html = markdownToHtml(markdown, summary);

  // With 2 scanners reporting failures, summary should say "2 scanners"
  assert.ok(html.includes("2 scanners"), "Summary should show scanner count");
});
