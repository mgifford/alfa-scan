import test from "node:test";
import assert from "node:assert/strict";
import { generateInteractiveHtml } from "../../scanner/interactive-report.mjs";

// Shared summary fixture used across tests
function buildTestSummary() {
  return {
    issueNumber: 42,
    issueUrl: "https://github.com/example/repo/issues/42",
    issueTitle: "SCAN: Test Site",
    scanTitle: "Test Site",
    submittedBy: "testuser",
    scannedAt: "2026-03-01T12:00:00.000Z",
    totalElapsedMs: 30000,
    totalSubmitted: 2,
    acceptedCount: 2,
    scannedCount: 2,
    darkModeUrlCount: 0,
    results: [
      {
        submittedUrl: "https://example.com/page1",
        finalUrl: "https://example.com/page1",
        pageTitle: "Page One",
        axe: { uniqueFailedCount: 6, counts: { failed: 6 }, failures: [], failedRules: [] },
        alfa: { uniqueFailedCount: 14, counts: { failed: 14 }, failures: [], failedRules: [] },
        equalAccess: { uniqueFailedCount: 24, counts: { failed: 24 }, failures: [], failedRules: [] },
        accesslint: { uniqueFailedCount: 12, counts: { failed: 12 }, failures: [], failedRules: [] },
        qualweb: { counts: { failed: 25 }, failures: [], failedRules: [] },
        duplicateFindingCount: 0
      },
      {
        submittedUrl: "https://example.com/page2",
        finalUrl: "https://example.com/page2",
        pageTitle: "Page Two",
        axe: { uniqueFailedCount: 2, counts: { failed: 2 }, failures: [], failedRules: [] },
        alfa: { uniqueFailedCount: 3, counts: { failed: 3 }, failures: [], failedRules: [] },
        equalAccess: { uniqueFailedCount: 0, counts: { failed: 0 }, failures: [], failedRules: [] },
        accesslint: { uniqueFailedCount: 1, counts: { failed: 1 }, failures: [], failedRules: [] },
        qualweb: { counts: { failed: 2 }, failures: [], failedRules: [] },
        duplicateFindingCount: 0
      }
    ],
    enhanced: {
      consolidatedFailures: [
        {
          rule: "color-contrast",
          engine: "axe",
          metadata: { severity: "Serious", roles: ["Visual"], blocking: false, description: "Ensure sufficient color contrast" },
          pages: new Map([["https://example.com/page1", 4], ["https://example.com/page2", 2]]),
          totalOccurrences: 6,
          examples: [
            { url: "https://example.com/page1", html: "<button>Click</button>", xpath: "/html/body/button", message: "Low contrast", colorScheme: "light" }
          ]
        },
        {
          rule: "https://alfa.siteimprove.com/rules/sia-r69",
          engine: "alfa",
          metadata: { severity: "Critical", roles: ["UX"], blocking: true, description: "Links must have discernible text" },
          pages: new Map([["https://example.com/page1", 14]]),
          totalOccurrences: 14,
          examples: [
            { url: "https://example.com/page1", html: "<a href='#'></a>", xpath: "/html/body/a", message: null, colorScheme: "light" }
          ]
        }
      ],
      roleStats: { UX: 14, Visual: 6, Content: 0, Dev: 0 },
      severityStats: { Critical: 14, Serious: 6, Moderate: 0, Minor: 0 }
    }
  };
}

test("generateInteractiveHtml produces valid HTML with priority table", () => {
  const summary = buildTestSummary();
  const html = generateInteractiveHtml(summary);

  assert.ok(typeof html === "string", "Output should be a string");
  assert.ok(html.startsWith("<!DOCTYPE html>"), "Output should start with DOCTYPE");
  assert.ok(html.includes("</html>"), "Output should have closing html tag");
});

test("priority table is included in interactive HTML report", () => {
  const summary = buildTestSummary();
  const html = generateInteractiveHtml(summary);

  assert.ok(html.includes("🎯 Priority: Pages with Most Errors"), "Priority table heading should be present");
  assert.ok(html.includes("priority-table"), "Priority table CSS class should be present");
  assert.ok(html.includes("View Page"), "Priority table should have page links");
});

test("priority table contains correct error counts", () => {
  const summary = buildTestSummary();
  const html = generateInteractiveHtml(summary);

  // Counts appear in aria-label attributes on buttons: "Filter: N EngineName errors on ..."
  // SCANNER_LABELS uses: axe, ALFA, Equal Access, AccessLint, QualWeb
  assert.ok(html.includes("Filter: 6 axe errors on"), "axe unique count for page1 should be in button aria-label");
  assert.ok(html.includes("Filter: 14 ALFA errors on"), "alfa unique count for page1 should be in button aria-label");
  assert.ok(html.includes("Filter: 24 Equal Access errors on"), "equalAccess unique count for page1 should be in button aria-label");
  assert.ok(html.includes("Filter: 25 QualWeb errors on"), "qualweb unique count for page1 should be in button aria-label");
});

test("priority table count buttons have correct data attributes", () => {
  const summary = buildTestSummary();
  const html = generateInteractiveHtml(summary);

  assert.ok(html.includes('class="count-btn"'), "Count buttons should have count-btn class");
  // Filter button should use submittedUrl (not finalUrl) to match consolidatedFailures.pages keys
  assert.ok(html.includes('data-page-url="https://example.com/page1"'), "Button should have submitted page URL as data attribute");
  assert.ok(html.includes('data-engine="axe"'), "Button should have axe engine data attribute");
  assert.ok(html.includes('data-engine="alfa"'), "Button should have alfa engine data attribute");
  // Engine label stored directly to avoid fragile aria-label parsing
  assert.ok(html.includes('data-engine-label="axe"'), "Button should have axe engine label data attribute");
  assert.ok(html.includes('data-engine-label="ALFA"'), "Button should have ALFA engine label data attribute");
});

test("rule cards have data-engine and data-page-urls attributes", () => {
  const summary = buildTestSummary();
  const html = generateInteractiveHtml(summary);

  assert.ok(html.includes('data-engine="axe"'), "Rule cards should have data-engine attribute for axe");
  assert.ok(html.includes('data-engine="alfa"'), "Rule cards should have data-engine attribute for alfa");
  assert.ok(html.includes('data-page-urls='), "Rule cards should have data-page-urls attribute");
  assert.ok(html.includes('https://example.com/page1'), "Page URLs should be embedded in data attribute");
});

test("filter banner is present in hidden state", () => {
  const summary = buildTestSummary();
  const html = generateInteractiveHtml(summary);

  assert.ok(html.includes('id="filterBanner"'), "Filter banner should be present");
  assert.ok(html.includes('class="filter-banner hidden"'), "Filter banner should start hidden");
  assert.ok(html.includes('id="clearFilterBtn"'), "Clear filter button should be present");
  assert.ok(html.includes('Copy as GitHub Issue'), "Copy as GitHub Issue button should be present");
});

test("rule cards include engine badge", () => {
  const summary = buildTestSummary();
  const html = generateInteractiveHtml(summary);

  assert.ok(html.includes('badge-engine'), "Engine badge class should be present on rule cards");
});

test("pages sorted by total errors descending in priority table", () => {
  const summary = buildTestSummary();
  const html = generateInteractiveHtml(summary);

  // Page 1 has total=81, Page 2 has total=8
  // Page 1 should appear before Page 2 in the table
  const page1Pos = html.indexOf("Page One");
  const page2Pos = html.indexOf("Page Two");

  assert.ok(page1Pos !== -1, "Page One should be in the report");
  assert.ok(page2Pos !== -1, "Page Two should be in the report");
  assert.ok(page1Pos < page2Pos, "Page 1 (more errors) should appear before Page 2 in priority table");
});

test("zero error counts are shown without filter button", () => {
  const summary = buildTestSummary();
  const html = generateInteractiveHtml(summary);

  // Page 2 has equalAccess=0, which should show as plain 0 not a button
  assert.ok(html.includes('count-zero">0<'), "Zero counts should be styled differently without click functionality");
});

test("page title is shown in priority table", () => {
  const summary = buildTestSummary();
  const html = generateInteractiveHtml(summary);

  assert.ok(html.includes("Page One"), "Page title should appear in priority table");
  assert.ok(html.includes("Page Two"), "Page title should appear in priority table");
});

test("interactive HTML includes JavaScript for page filter", () => {
  const summary = buildTestSummary();
  const html = generateInteractiveHtml(summary);

  assert.ok(html.includes("setPageFilter"), "JS should include setPageFilter function");
  assert.ok(html.includes("clearPageFilter"), "JS should include clearPageFilter function");
  assert.ok(html.includes("activePageUrl"), "JS should track active page URL filter");
  assert.ok(html.includes("activeEngine"), "JS should track active engine filter");
  assert.ok(html.includes("generateGitHubIssueMarkdown"), "JS should include GitHub issue markdown generator");
  // Engine label should use data-engine-label attribute, not parse aria-label
  assert.ok(html.includes("btn.dataset.engineLabel"), "JS should use data-engine-label attribute for engine label");
});

test("JavaScript filters by page URL and engine", () => {
  const summary = buildTestSummary();
  const html = generateInteractiveHtml(summary);

  // The filterRules function should check both page URL and engine
  assert.ok(html.includes("pageUrls.includes(activePageUrl)"), "Filter should check if page URL is in card's page list");
  assert.ok(html.includes("cardEngine === activeEngine"), "Filter should check card engine matches active engine");
});

test("generateInteractiveHtml handles empty results gracefully", () => {
  const summary = buildTestSummary();
  summary.results = [];
  summary.enhanced.consolidatedFailures = [];
  summary.enhanced.roleStats = { UX: 0, Visual: 0, Content: 0, Dev: 0 };
  summary.enhanced.severityStats = { Critical: 0, Serious: 0, Moderate: 0, Minor: 0 };

  const html = generateInteractiveHtml(summary);

  assert.ok(typeof html === "string", "Should still generate valid HTML");
  // When there are no results, the priority TABLE element should not appear (only CSS class in styles)
  assert.ok(!html.includes('<table class="priority-table"'), "Priority table element should not appear when there are no results");
});
