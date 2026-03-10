import test from "node:test";
import assert from "node:assert/strict";
import { generateInteractiveHtml } from "../../scanner/interactive-report.mjs";

/** Minimal summary fixture for testing the HTML report */
function makeSummary(overrides = {}) {
  return {
    issueNumber: 42,
    issueUrl: "https://github.com/example/repo/issues/42",
    scanTitle: "Test Site",
    scannedAt: "2026-03-10T00:00:00.000Z",
    totalElapsedMs: 120000,
    totalSubmitted: 2,
    acceptedCount: 2,
    scannedCount: 2,
    darkModeUrlCount: 1,
    results: [],
    enhanced: {
      consolidatedFailures: [
        {
          rule: "color-contrast",
          engine: "axe",
          totalOccurrences: 5,
          pages: new Map([["https://example.com/page1", 3], ["https://example.com/page2", 2]]),
          metadata: {
            severity: "Serious",
            roles: ["Content"],
            blocking: false,
            description: "Ensures the contrast between foreground and background colors meets WCAG 2 AA contrast ratio thresholds",
          },
          examples: [
            {
              url: "https://example.com/page1",
              message: "Element has insufficient color contrast",
              colorScheme: "light",
              html: '<p class="low-contrast">Text</p>',
              xpath: "/html/body/p[1]",
            },
            {
              url: "https://example.com/page1",
              message: "Element has insufficient color contrast",
              colorScheme: "dark",
              html: '<p class="low-contrast">Text</p>',
              xpath: "/html/body/p[2]",
            },
          ],
        },
      ],
      roleStats: { Content: 5, Navigation: 0, Form: 0 },
      severityStats: { Critical: 0, Serious: 5, Moderate: 0, Minor: 0 },
    },
    ...overrides,
  };
}

test("generateInteractiveHtml produces a valid HTML document", () => {
  const html = generateInteractiveHtml(makeSummary());
  assert.ok(html.startsWith("<!DOCTYPE html>"), "Should start with doctype");
  assert.ok(html.includes('<html lang="en">'), "Should have lang attribute");
  assert.ok(html.includes("</html>"), "Should close html tag");
});

// ── Anchor links ──────────────────────────────────────────────────────────────

test("generateInteractiveHtml includes a skip-to-main-content link", () => {
  const html = generateInteractiveHtml(makeSummary());
  assert.ok(
    html.includes('class="skip-link"') && html.includes('href="#main-content"'),
    "Should have a skip link pointing to #main-content"
  );
  assert.ok(
    html.includes('id="main-content"'),
    "Should have a main-content landmark target"
  );
});

test("generateInteractiveHtml includes anchor link for Summary section", () => {
  const html = generateInteractiveHtml(makeSummary());
  assert.ok(
    html.includes('id="section-summary"'),
    "Should have id='section-summary' on the Summary heading"
  );
  assert.ok(
    html.includes('href="#section-summary"'),
    "Should have an anchor link to #section-summary"
  );
  assert.ok(
    html.includes('aria-label="Link to Summary section"'),
    "Anchor link should have a descriptive aria-label"
  );
});

test("generateInteractiveHtml includes anchor link for Issues section", () => {
  const html = generateInteractiveHtml(makeSummary());
  assert.ok(
    html.includes('id="section-issues"'),
    "Should have id='section-issues' on the Issues heading"
  );
  assert.ok(
    html.includes('href="#section-issues"'),
    "Should have an anchor link to #section-issues"
  );
  assert.ok(
    html.includes('aria-label="Link to Issues section"'),
    "Anchor link should have a descriptive aria-label"
  );
});

test("generateInteractiveHtml gives each rule card a stable id", () => {
  const html = generateInteractiveHtml(makeSummary());
  // axe + "color-contrast" → slug "axe-color-contrast"
  assert.ok(
    html.includes('id="rule-axe-color-contrast"'),
    "Rule card should have a predictable id based on engine and rule id"
  );
});

test("generateInteractiveHtml includes inline anchor link on rule card", () => {
  const html = generateInteractiveHtml(makeSummary());
  assert.ok(
    html.includes('href="#rule-axe-color-contrast"') &&
      html.includes('aria-label="Link to color-contrast rule"'),
    "Rule card summary should include an inline anchor link with aria-label"
  );
});

test("generateInteractiveHtml anchor links have visually-hidden fallback text", () => {
  const html = generateInteractiveHtml(makeSummary());
  // The # symbol should be aria-hidden and real label on the <a> itself
  assert.ok(
    html.includes('<span aria-hidden="true">#</span>'),
    "Anchor icon # should be aria-hidden"
  );
});

// ── Light / dark mode ─────────────────────────────────────────────────────────

test("generateInteractiveHtml includes CSS custom properties for both light and dark", () => {
  const html = generateInteractiveHtml(makeSummary());
  assert.ok(
    html.includes("prefers-color-scheme: dark"),
    "Should include dark mode media query"
  );
  assert.ok(
    html.includes('[data-theme="dark"]'),
    "Should include manual dark theme override"
  );
  assert.ok(
    html.includes('[data-theme="light"]'),
    "Should include manual light theme override"
  );
});

test("generateInteractiveHtml includes theme toggle button", () => {
  const html = generateInteractiveHtml(makeSummary());
  assert.ok(
    html.includes('id="theme-toggle"'),
    "Should have a theme toggle button"
  );
  assert.ok(
    html.includes('aria-label="Switch to dark mode"'),
    "Toggle button should have a descriptive aria-label"
  );
  assert.ok(
    html.includes('class="theme-icon sun-icon"'),
    "Toggle should include a sun icon for switching to light mode"
  );
  assert.ok(
    html.includes('class="theme-icon moon-icon"'),
    "Toggle should include a moon icon for switching to dark mode"
  );
});

test("generateInteractiveHtml includes JavaScript for theme persistence", () => {
  const html = generateInteractiveHtml(makeSummary());
  assert.ok(
    html.includes("localStorage.setItem('report-theme'"),
    "Should persist theme choice in localStorage"
  );
  assert.ok(
    html.includes("localStorage.getItem('report-theme')"),
    "Should read theme from localStorage on load"
  );
  assert.ok(
    html.includes("applyTheme"),
    "Should define an applyTheme function"
  );
});

test("generateInteractiveHtml includes prefers-reduced-motion for smooth scroll", () => {
  const html = generateInteractiveHtml(makeSummary());
  assert.ok(
    html.includes("prefers-reduced-motion: no-preference"),
    "Should wrap smooth scroll in prefers-reduced-motion media query"
  );
  assert.ok(
    html.includes("scroll-behavior: smooth"),
    "Should enable smooth scroll within the media query"
  );
});

test("generateInteractiveHtml includes forced-colors support", () => {
  const html = generateInteractiveHtml(makeSummary());
  assert.ok(
    html.includes("forced-colors: active"),
    "Should include forced-colors media query for high contrast support"
  );
});

// ── Hardcoded colour replacement ──────────────────────────────────────────────

test("generateInteractiveHtml uses CSS variables instead of hardcoded hex colours for key elements", () => {
  const html = generateInteractiveHtml(makeSummary());
  // These specific hardcoded values should be gone from CSS declarations
  assert.ok(
    !html.includes("background: white"),
    "Container background should use CSS variable, not 'white'"
  );
  assert.ok(
    !html.includes("background: #fafafa"),
    "Summary background should use CSS variable, not #fafafa"
  );
  assert.ok(
    !html.includes("background: #f0f0f0"),
    "Hover background should use CSS variable, not #f0f0f0"
  );
  assert.ok(
    !html.includes("background: #eee"),
    "Bar background should use CSS variable, not #eee"
  );
  assert.ok(
    !html.includes("background: #f8f9fa"),
    "Code background should use CSS variable, not #f8f9fa"
  );
});

// ── Existing behaviour preserved ──────────────────────────────────────────────

test("generateInteractiveHtml still renders rule cards with severity and occurrence badges", () => {
  const html = generateInteractiveHtml(makeSummary());
  assert.ok(html.includes("badge-count"), "Should include occurrence count badge");
  assert.ok(html.includes("badge-severity"), "Should include severity badge");
  assert.ok(html.includes("Serious"), "Should display severity label");
  assert.ok(html.includes("color-contrast"), "Should display rule id");
});

test("generateInteractiveHtml renders dark mode badge on dark-mode example", () => {
  const html = generateInteractiveHtml(makeSummary());
  assert.ok(html.includes("badge-dark"), "Should render a dark-mode badge for dark examples");
  assert.ok(html.includes("badge-light"), "Should render a light-mode badge for light examples");
});

test("generateInteractiveHtml shows dark mode URL count in header when present", () => {
  const html = generateInteractiveHtml(makeSummary());
  assert.ok(
    html.includes("🌙 Dark Mode:") && html.includes("1 / 2 URLs"),
    "Should display dark mode URL count in the meta area"
  );
});

test("generateInteractiveHtml omits dark mode header info when count is zero", () => {
  const html = generateInteractiveHtml(makeSummary({ darkModeUrlCount: 0 }));
  assert.ok(
    !html.includes("🌙 Dark Mode:"),
    "Should not display dark mode line when count is 0"
  );
});

test("generateInteractiveHtml escapes HTML in example code blocks", () => {
  const summary = makeSummary();
  summary.enhanced.consolidatedFailures[0].examples[0].html = '<img src="x" onerror="alert(1)">';
  const html = generateInteractiveHtml(summary);
  assert.ok(
    html.includes("&lt;img") && !html.includes('<img src="x"'),
    "Example HTML content should be escaped to prevent XSS"
  );
});

test("generateInteractiveHtml includes ARIA tab pattern for role filtering", () => {
  const html = generateInteractiveHtml(makeSummary());
  assert.ok(html.includes('role="tablist"'), "Should have a tablist");
  assert.ok(html.includes('role="tab"'), "Tabs should have role='tab'");
  assert.ok(html.includes('role="tabpanel"'), "Should have a tabpanel");
  assert.ok(html.includes('aria-live="polite"'), "Should have a live region for filter announcements");
});

// ── Priority table ─────────────────────────────────────────────────────────────

function buildPrioritySummary() {
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

test("priority table is included in interactive HTML report", () => {
  const html = generateInteractiveHtml(buildPrioritySummary());

  assert.ok(html.includes("🎯 Priority: Pages with Most Errors"), "Priority table heading should be present");
  assert.ok(html.includes("priority-table"), "Priority table CSS class should be present");
  assert.ok(html.includes("View Page"), "Priority table should have page links");
});

test("priority table contains correct error counts", () => {
  const html = generateInteractiveHtml(buildPrioritySummary());

  // Counts appear in aria-label attributes on buttons: "Filter: N EngineName errors on ..."
  assert.ok(html.includes("Filter: 6 axe errors on"), "axe unique count for page1 should be in button aria-label");
  assert.ok(html.includes("Filter: 14 ALFA errors on"), "alfa unique count for page1 should be in button aria-label");
  assert.ok(html.includes("Filter: 24 Equal Access errors on"), "equalAccess unique count for page1 should be in button aria-label");
  assert.ok(html.includes("Filter: 25 QualWeb errors on"), "qualweb unique count for page1 should be in button aria-label");
});

test("priority table count buttons have correct data attributes", () => {
  const html = generateInteractiveHtml(buildPrioritySummary());

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
  const html = generateInteractiveHtml(buildPrioritySummary());

  assert.ok(html.includes('data-engine="axe"'), "Rule cards should have data-engine attribute for axe");
  assert.ok(html.includes('data-engine="alfa"'), "Rule cards should have data-engine attribute for alfa");
  assert.ok(html.includes('data-page-urls='), "Rule cards should have data-page-urls attribute");
  assert.ok(html.includes('https://example.com/page1'), "Page URLs should be embedded in data attribute");
});

test("filter banner is present in hidden state", () => {
  const html = generateInteractiveHtml(buildPrioritySummary());

  assert.ok(html.includes('id="filterBanner"'), "Filter banner should be present");
  assert.ok(html.includes('class="filter-banner hidden"'), "Filter banner should start hidden");
  assert.ok(html.includes('id="clearFilterBtn"'), "Clear filter button should be present");
  assert.ok(html.includes("Copy as GitHub Issue"), "Copy as GitHub Issue button should be present");
});

test("rule cards include engine badge", () => {
  const html = generateInteractiveHtml(buildPrioritySummary());

  assert.ok(html.includes('badge-engine'), "Engine badge class should be present on rule cards");
});

test("pages sorted by total errors descending in priority table", () => {
  const html = generateInteractiveHtml(buildPrioritySummary());

  // Page 1 has total=81, Page 2 has total=8
  const page1Pos = html.indexOf("Page One");
  const page2Pos = html.indexOf("Page Two");

  assert.ok(page1Pos !== -1, "Page One should be in the report");
  assert.ok(page2Pos !== -1, "Page Two should be in the report");
  assert.ok(page1Pos < page2Pos, "Page 1 (more errors) should appear before Page 2 in priority table");
});

test("zero error counts are shown without filter button", () => {
  const html = generateInteractiveHtml(buildPrioritySummary());

  // Page 2 has equalAccess=0, which should show as plain 0 not a button
  assert.ok(html.includes('count-zero">0<'), "Zero counts should be styled differently without click functionality");
});

test("page title is shown in priority table", () => {
  const html = generateInteractiveHtml(buildPrioritySummary());

  assert.ok(html.includes("Page One"), "Page title should appear in priority table");
  assert.ok(html.includes("Page Two"), "Page title should appear in priority table");
});

test("interactive HTML includes JavaScript for page filter", () => {
  const html = generateInteractiveHtml(buildPrioritySummary());

  assert.ok(html.includes("setPageFilter"), "JS should include setPageFilter function");
  assert.ok(html.includes("clearPageFilter"), "JS should include clearPageFilter function");
  assert.ok(html.includes("activePageUrl"), "JS should track active page URL filter");
  assert.ok(html.includes("activeEngine"), "JS should track active engine filter");
  assert.ok(html.includes("generateGitHubIssueMarkdown"), "JS should include GitHub issue markdown generator");
  // Engine label should use data-engine-label attribute, not parse aria-label
  assert.ok(html.includes("btn.dataset.engineLabel"), "JS should use data-engine-label attribute for engine label");
});

test("JavaScript filters by page URL and engine", () => {
  const html = generateInteractiveHtml(buildPrioritySummary());

  // The filterRules function should check both page URL and engine
  assert.ok(html.includes("pageUrls.includes(activePageUrl)"), "Filter should check if page URL is in card's page list");
  assert.ok(html.includes("cardEngine === activeEngine"), "Filter should check card engine matches active engine");
});

test("priority table is absent when all pages have zero errors", () => {
  const summary = buildPrioritySummary();
  summary.results = [];
  summary.enhanced.consolidatedFailures = [];
  summary.enhanced.roleStats = { UX: 0, Visual: 0, Content: 0, Dev: 0 };
  summary.enhanced.severityStats = { Critical: 0, Serious: 0, Moderate: 0, Minor: 0 };

  const html = generateInteractiveHtml(summary);

  assert.ok(typeof html === "string", "Should still generate valid HTML");
  // When there are no results, the priority TABLE element should not appear
  assert.ok(!html.includes('<table class="priority-table"'), "Priority table element should not appear when there are no results");
});
