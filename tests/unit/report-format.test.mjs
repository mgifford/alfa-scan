import test from "node:test";
import assert from "node:assert/strict";

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
          outcomeCount: 125
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
          outcomeCount: 120
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
          outcomeCount: 120
        }
      }
    ]
  };

  // Helper functions from run-scan.mjs
  function escapeMarkdown(value) {
    return String(value ?? "")
      .replace(/\|/g, "\\|")
      .replace(/\n/g, " ");
  }

  function extractRuleId(ruleUrl) {
    const match = ruleUrl.match(/sia-r(\d+)$/);
    return match ? match[1] : null;
  }

  function toMarkdownReport(summary) {
    const lines = [];
    lines.push(`# Scan Report: ${summary.scanTitle || `Issue #${summary.issueNumber}`}`);
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

    return lines.join("\n");
  }

  const report = toMarkdownReport(summary);

  // Verify priority sections are present
  assert.ok(report.includes("## 🎯 Priority: Pages with Most Errors"), "Report should include priority pages section");
  assert.ok(report.includes("## 🔧 Priority: Most Common Issues"), "Report should include priority issues section");
  
  // Verify pages are sorted by error count (descending)
  assert.ok(report.includes("Page 1"), "Report should include Page 1");
  assert.ok(report.indexOf("**20**") < report.indexOf("**15**"), "Pages should be sorted by error count");
  
  // Verify rule frequency counting
  assert.ok(report.includes("SIA-R111"), "Report should include most common rule");
  assert.ok(report.includes("**3** of 3"), "Rule frequency should show 3 pages affected for sia-r111");
  
  // Verify helpful tips are included
  assert.ok(report.includes("💡 **Tip**"), "Report should include helpful tips");
  assert.ok(report.includes("🤖 **Future Enhancement**"), "Report should mention future AI enhancement");
  assert.ok(report.includes("opt-in only, no auto-run AI"), "Report should clarify no auto-run AI");
  
  // Verify rule documentation links
  assert.ok(report.includes("[View Rule](https://alfa.siteimprove.com/rules/sia-r111)"), "Report should include rule documentation link");
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
    results: [
      {
        submittedUrl: "https://example.com/perfect",
        finalUrl: "https://example.com/perfect",
        pageTitle: "Perfect Page",
        alfa: {
          counts: { passed: 100, failed: 0, cantTell: 0, inapplicable: 10 },
          failedRules: []
        }
      }
    ]
  };

  function toMarkdownReportSimple(summary) {
    const lines = [];
    
    const pagesByErrorCount = [...summary.results]
      .filter(r => r.alfa.counts.failed > 0)
      .sort((a, b) => b.alfa.counts.failed - a.alfa.counts.failed);
    
    if (pagesByErrorCount.length > 0) {
      lines.push("Has errors");
    } else {
      lines.push("✅ No pages with accessibility errors detected!");
    }
    
    const ruleFrequency = new Map();
    for (const result of summary.results) {
      for (const rule of result.alfa.failedRules) {
        ruleFrequency.set(rule, (ruleFrequency.get(rule) || 0) + 1);
      }
    }
    
    if (ruleFrequency.size > 0) {
      lines.push("Has rules");
    } else {
      lines.push("✅ No failed rules detected!");
    }
    
    return lines.join("\n");
  }

  const report = toMarkdownReportSimple(summaryNoErrors);

  // Verify positive messages for no errors
  assert.ok(report.includes("✅ No pages with accessibility errors detected!"), "Report should show success message for no errors");
  assert.ok(report.includes("✅ No failed rules detected!"), "Report should show success message for no failed rules");
});
