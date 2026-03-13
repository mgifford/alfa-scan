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

test("generateInteractiveHtml includes per-engine accordion sections after priority table", () => {
  const html = generateInteractiveHtml(makeSummary());
  assert.ok(html.includes('accordion-section'), "Should have accordion-section elements");
  assert.ok(html.includes('accordion-header'), "Should have accordion-header elements");
  assert.ok(html.includes('🔧 Priority: Most Common Issues'), "Should have Most Common Issues accordion headings");
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

test("accordion sections are present per engine with failures", () => {
  const html = generateInteractiveHtml(buildPrioritySummary());

  assert.ok(html.includes('id="accordion-axe"'), "Should have axe accordion section");
  assert.ok(html.includes('id="accordion-alfa"'), "Should have alfa accordion section");
  assert.ok(html.includes('🔧 Priority: Most Common Issues (axe)'), "Should have axe section label");
  assert.ok(html.includes('🔧 Priority: Most Common Issues (ALFA)'), "Should have ALFA section label");
  // Sections should be collapsed by default (no 'open' attribute on accordion-section details elements)
  // Extract accordion-section details tags and verify none have 'open' attribute
  const accordionMatches = html.match(/<details class="accordion-section"[^>]*>/g) || [];
  assert.ok(accordionMatches.length > 0, "Should have accordion-section elements");
  assert.ok(accordionMatches.every(tag => !tag.includes(' open')), "All accordion sections should be collapsed by default");
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

test("interactive HTML includes JavaScript for priority table navigation", () => {
  const html = generateInteractiveHtml(buildPrioritySummary());

  assert.ok(html.includes("count-btn"), "Priority table should have clickable count buttons");
  assert.ok(html.includes("accordion"), "JS should reference accordion elements");
  assert.ok(html.includes("active-filter"), "JS should track active filter button");
});

test("JavaScript opens accordion on priority table click", () => {
  const html = generateInteractiveHtml(buildPrioritySummary());

  // The click handler should open the relevant accordion and scroll to it
  assert.ok(html.includes("accordion-"), "JS should reference accordion by engine id");
  assert.ok(html.includes("setAttribute('open'"), "JS should open accordion via open attribute");
  assert.ok(html.includes("scrollIntoView"), "JS should scroll to accordion");
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

// ── Show all pages toggle ──────────────────────────────────────────────────────

function buildLargePrioritySummary() {
  const results = Array.from({ length: 15 }, (_, i) => ({
    submittedUrl: `https://example.com/page${i + 1}`,
    finalUrl: `https://example.com/page${i + 1}`,
    pageTitle: `Page ${i + 1}`,
    axe: { uniqueFailedCount: 10 - i, counts: { failed: 10 - i }, failures: [], failedRules: [] },
    alfa: { uniqueFailedCount: 5, counts: { failed: 5 }, failures: [], failedRules: [] },
    equalAccess: { uniqueFailedCount: 3, counts: { failed: 3 }, failures: [], failedRules: [] },
    accesslint: { uniqueFailedCount: 2, counts: { failed: 2 }, failures: [], failedRules: [] },
    qualweb: { counts: { failed: 1 }, failures: [], failedRules: [] },
    duplicateFindingCount: 0
  }));
  const base = buildPrioritySummary();
  return { ...base, totalSubmitted: 15, acceptedCount: 15, scannedCount: 15, results };
}

test("show-all button appears when there are more than 10 pages with errors", () => {
  const html = generateInteractiveHtml(buildLargePrioritySummary());
  assert.ok(html.includes('id="show-all-pages-btn"'), "Show-all button should be present");
  assert.ok(html.includes("Show all 15 pages"), "Button should show the total page count");
  assert.ok(html.includes('aria-expanded="false"'), "Button should start collapsed");
});

test("show-all button does not appear when there are 10 or fewer pages with errors", () => {
  const html = generateInteractiveHtml(buildPrioritySummary());
  assert.ok(!html.includes('id="show-all-pages-btn"'), "Show-all button should NOT be present for ≤10 pages");
});

test("extra rows beyond 10 are marked hidden in priority table", () => {
  const html = generateInteractiveHtml(buildLargePrioritySummary());
  assert.ok(html.includes('class="priority-row-extra" hidden'), "Rows beyond the first 10 should have hidden attribute");
});

test("first 10 rows are not marked as extra in priority table", () => {
  const html = generateInteractiveHtml(buildLargePrioritySummary());
  // The first row (Page 1) should NOT have the extra class
  const page1Index = html.indexOf("Page 1");
  const extraClassIndex = html.indexOf('priority-row-extra');
  // Page 1 appears before any extra rows
  assert.ok(page1Index < extraClassIndex, "First rows should appear before the extra hidden rows");
});

test("show-all toggle JavaScript is included when extra rows exist", () => {
  const html = generateInteractiveHtml(buildLargePrioritySummary());
  assert.ok(html.includes("show-all-pages-btn"), "JS should reference the show-all button");
  assert.ok(html.includes("priority-row-extra"), "JS should reference extra rows by class");
  assert.ok(html.includes("Show fewer pages"), "JS should have 'show fewer' text for toggling back");
});

// ── WCAG filtering ────────────────────────────────────────────────────────────

/** Build a failure fixture with explicit WCAG data for filtering tests */
function makeWcagSummary(wcagScs, wcagLevel) {
  return makeSummary({
    enhanced: {
      consolidatedFailures: [
        {
          rule: "color-contrast",
          engine: "axe",
          totalOccurrences: 5,
          pages: new Map([["https://example.com/page1", 5]]),
          wcag: { scs: wcagScs, level: wcagLevel },
          metadata: {
            severity: "Serious",
            roles: ["Visual"],
            blocking: false,
            description: "Ensure sufficient color contrast",
            wcagCriteria: wcagScs,
            conformanceLevel: wcagLevel,
          },
          examples: [],
        },
      ],
      roleStats: { Visual: 5 },
      severityStats: { Serious: 5 },
    },
  });
}

test("rule cards include data-wcag-level attribute", () => {
  const html = generateInteractiveHtml(makeWcagSummary(["1.4.3"], "AA"));

  assert.ok(html.includes('data-wcag-level="AA"'), "Rule card should have data-wcag-level=AA for a WCAG AA rule");
});

test("rule cards include data-wcag-version attribute for WCAG 2.0 criterion", () => {
  const html = generateInteractiveHtml(makeWcagSummary(["1.4.3"], "AA"));

  // SC 1.4.3 was introduced in WCAG 2.0
  assert.ok(html.includes('data-wcag-version="2.0"'), "Rule card for SC 1.4.3 (WCAG 2.0) should have data-wcag-version=2.0");
});

test("best-practice rule cards have data-wcag-level=best-practice and data-wcag-version=best-practice", () => {
  const summary = makeSummary({
    enhanced: {
      consolidatedFailures: [
        {
          rule: "heading-order",
          engine: "axe",
          totalOccurrences: 3,
          pages: new Map([["https://example.com/page1", 3]]),
          wcag: { scs: [], level: "best-practice" },
          metadata: {
            severity: "Moderate",
            roles: ["Content"],
            blocking: false,
            description: "Heading levels should only increase by one",
            wcagCriteria: [],
            conformanceLevel: "best-practice",
          },
          examples: [],
        },
      ],
      roleStats: { Content: 3 },
      severityStats: { Moderate: 3 },
    },
  });
  const html = generateInteractiveHtml(summary);

  assert.ok(
    html.includes('data-wcag-level="best-practice"'),
    "Best-practice rule should have data-wcag-level=best-practice"
  );
  assert.ok(
    html.includes('data-wcag-version="best-practice"'),
    "Best-practice rule should have data-wcag-version=best-practice"
  );
});

test("rule cards for WCAG 2.1-only criteria have data-wcag-version=2.1", () => {
  const summary = makeSummary({
    enhanced: {
      consolidatedFailures: [
        {
          rule: "some-reflow-rule",
          engine: "axe",
          totalOccurrences: 2,
          pages: new Map([["https://example.com/page1", 2]]),
          wcag: { scs: ["1.4.10"], level: "AA" },
          metadata: {
            severity: "Serious",
            roles: ["Visual"],
            blocking: false,
            description: "Content should not require scrolling in two dimensions",
            wcagCriteria: ["1.4.10"],
            conformanceLevel: "AA",
          },
          examples: [],
        },
      ],
      roleStats: { Visual: 2 },
      severityStats: { Serious: 2 },
    },
  });
  const html = generateInteractiveHtml(summary);

  assert.ok(
    html.includes('data-wcag-version="2.1"'),
    "Rule with SC 1.4.10 (introduced in WCAG 2.1) should have data-wcag-version=2.1"
  );
});

test("rule cards for WCAG 2.2-only criteria have data-wcag-version=2.2", () => {
  const summary = makeSummary({
    enhanced: {
      consolidatedFailures: [
        {
          rule: "target-size",
          engine: "alfa",
          totalOccurrences: 4,
          pages: new Map([["https://example.com/page1", 4]]),
          wcag: { scs: ["2.5.8"], level: "AA" },
          metadata: {
            severity: "Serious",
            roles: ["UX"],
            blocking: true,
            description: "Target size should be at least 24x24 CSS pixels",
            wcagCriteria: ["2.5.8"],
            conformanceLevel: "AA",
          },
          examples: [],
        },
      ],
      roleStats: { UX: 4 },
      severityStats: { Serious: 4 },
    },
  });
  const html = generateInteractiveHtml(summary);

  assert.ok(
    html.includes('data-wcag-version="2.2"'),
    "Rule with SC 2.5.8 (introduced in WCAG 2.2) should have data-wcag-version=2.2"
  );
});

test("filter controls are present in the HTML report", () => {
  const html = generateInteractiveHtml(buildPrioritySummary());

  assert.ok(html.includes('id="rule-filters"'), "Filter controls should be present");
  assert.ok(html.includes('id="filter-type"'), "Type filter should be present");
  assert.ok(html.includes('id="filter-level"'), "Level filter should be present");
  assert.ok(html.includes('id="filter-version"'), "Version filter should be present");
  assert.ok(html.includes('id="filter-engine"'), "Engine filter should be present");
});

test("filter controls include WCAG level options A, A+AA, and A+AA+AAA", () => {
  const html = generateInteractiveHtml(buildPrioritySummary());

  assert.ok(html.includes('value="A"'), "Level A option should be present");
  assert.ok(html.includes('value="A+AA"'), "Level A+AA option should be present");
  assert.ok(html.includes('value="A+AA+AAA"'), "Level A+AA+AAA option should be present");
});

test("filter controls include WCAG version options 2.0, 2.1, and 2.2", () => {
  const html = generateInteractiveHtml(buildPrioritySummary());

  assert.ok(html.includes('value="2.0"'), "WCAG 2.0 version option should be present");
  assert.ok(html.includes('value="2.1"'), "WCAG 2.1 version option should be present");
  assert.ok(html.includes('value="2.2"'), "WCAG 2.2 version option should be present");
});

test("filter controls include Best Practices and WCAG Requirements type options", () => {
  const html = generateInteractiveHtml(buildPrioritySummary());

  assert.ok(html.includes('value="wcag"'), "WCAG requirements type option should be present");
  assert.ok(html.includes('value="best-practice"'), "Best practices type option should be present");
});

test("filter controls include engine options for active engines", () => {
  const html = generateInteractiveHtml(buildPrioritySummary());

  assert.ok(html.includes('value="axe"'), "axe engine option should be present in filter");
  assert.ok(html.includes('value="alfa"'), "alfa engine option should be present in filter");
});

test("filter JavaScript references filter control elements", () => {
  const html = generateInteractiveHtml(buildPrioritySummary());

  assert.ok(html.includes("applyRuleFilters"), "JS should define applyRuleFilters function");
  assert.ok(html.includes("filter-type"), "JS should reference type filter");
  assert.ok(html.includes("filter-level"), "JS should reference level filter");
  assert.ok(html.includes("filter-version"), "JS should reference version filter");
  assert.ok(html.includes("clear-rule-filters"), "JS should reference clear filters button");
  assert.ok(html.includes("filter-rule-count"), "JS should reference filter count display");
});

test("filter controls have accessible labels", () => {
  const html = generateInteractiveHtml(buildPrioritySummary());

  assert.ok(html.includes('aria-label="Filter by requirement type"'), "Type filter should have aria-label");
  assert.ok(html.includes('aria-label="Filter by WCAG conformance level"'), "Level filter should have aria-label");
  assert.ok(html.includes('aria-label="Filter by WCAG version"'), "Version filter should have aria-label");
  assert.ok(html.includes('aria-label="Filter by accessibility engine"'), "Engine filter should have aria-label");
  assert.ok(html.includes('aria-live="polite"'), "Filter count should use aria-live for announcements");
});
