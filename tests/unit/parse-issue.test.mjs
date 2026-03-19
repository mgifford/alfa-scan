import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { parseScanIssue, validateScanRequest, NON_AXE_ENGINES, getDefaultEngines, extractPageCount } from "../../scanner/parse-issue.mjs";

test("parseScanIssue parses valid issue payload", () => {
  const payload = JSON.parse(readFileSync(new URL("../fixtures/issue-valid.json", import.meta.url), "utf8"));
  const result = parseScanIssue(payload);

  assert.equal(result.ok, true);
  assert.equal(result.errors.length, 0);
  assert.equal(result.value.issueNumber, 42);
  assert.equal(result.value.submittedBy, "octocat");
  assert.equal(result.value.requestedUrls.length, 3);
  assert.ok(result.value.requestId.startsWith("42-"));
});

test("validateScanRequest rejects more than 500 URLs", () => {
  const overLimitUrls = Array.from({ length: 501 }, (_, index) => `https://example.com/page-${index}`);
  const request = {
    requestId: "test-request",
    issueNumber: 99,
    issueUrl: "https://github.com/example/repo/issues/99",
    submittedBy: "octocat",
    submittedAt: "2026-02-20T20:00:00Z",
    requestLabel: "scan-request",
    requestedUrls: overLimitUrls
  };

  const validation = validateScanRequest(request);
  assert.equal(validation.ok, false);
  assert.ok(validation.errors.some((message) => message.includes("between 1 and 500")));
});

test("parseScanIssue returns explicit error for missing issue payload", () => {
  const result = parseScanIssue({});
  assert.equal(result.ok, false);
  assert.ok(result.errors.includes("Missing issue payload."));
  assert.equal(result.value, null);
});

test("parseScanIssue recognizes scheduled queue prefixes", () => {
  const payload = {
    issue: {
      number: 73,
      html_url: "https://github.com/example/repo/issues/73",
      title: "WEEKLY: Government homepage scan",
      created_at: "2026-02-20T20:00:00Z",
      user: { login: "octocat" },
      body: "# URLs\nhttps://example.com"
    }
  };

  const result = parseScanIssue(payload);
  assert.equal(result.ok, true);
  assert.equal(result.isScanIssue, false);
  assert.equal(result.isTimedIssue, true);
  assert.equal(result.isRunnableIssue, true);
  assert.equal(result.triggerType, "WEEKLY");
  assert.equal(result.value.scanTitle, "Government homepage scan");
});

test("parseScanIssue extracts AXE engine from title", () => {
  const payload = {
    issue: {
      number: 100,
      html_url: "https://github.com/example/repo/issues/100",
      title: "SCAN: AXE Homepage scan",
      created_at: "2026-02-20T20:00:00Z",
      user: { login: "octocat" },
      body: "# URLs\nhttps://example.com"
    }
  };

  const result = parseScanIssue(payload);
  assert.equal(result.ok, true);
  assert.deepEqual(result.engines, ["axe"]);
  assert.equal(result.value.scanTitle, "Homepage scan");
  assert.deepEqual(result.value.engines, ["axe"]);
});

test("parseScanIssue extracts ALFA engine from title", () => {
  const payload = {
    issue: {
      number: 101,
      html_url: "https://github.com/example/repo/issues/101",
      title: "SCAN: ALFA Test page",
      created_at: "2026-02-20T20:00:00Z",
      user: { login: "octocat" },
      body: "# URLs\nhttps://example.com"
    }
  };

  const result = parseScanIssue(payload);
  assert.equal(result.ok, true);
  assert.deepEqual(result.engines, ["alfa"]);
  assert.equal(result.value.scanTitle, "Test page");
});

test("parseScanIssue extracts multiple engines from title", () => {
  const payload = {
    issue: {
      number: 102,
      html_url: "https://github.com/example/repo/issues/102",
      title: "SCAN: AXE ALFA Homepage comparison",
      created_at: "2026-02-20T20:00:00Z",
      user: { login: "octocat" },
      body: "# URLs\nhttps://example.com"
    }
  };

  const result = parseScanIssue(payload);
  assert.equal(result.ok, true);
  assert.deepEqual(result.engines, ["axe", "alfa"]);
  assert.equal(result.value.scanTitle, "Homepage comparison");
});

test("parseScanIssue extracts EQUALACCESS engine from title", () => {
  const payload = {
    issue: {
      number: 103,
      html_url: "https://github.com/example/repo/issues/103",
      title: "SCAN: EQUALACCESS Test",
      created_at: "2026-02-20T20:00:00Z",
      user: { login: "octocat" },
      body: "# URLs\nhttps://example.com"
    }
  };

  const result = parseScanIssue(payload);
  assert.equal(result.ok, true);
  assert.deepEqual(result.engines, ["equalaccess"]);
  assert.equal(result.value.scanTitle, "Test");
});

test("parseScanIssue extracts ACCESSLINT engine from title", () => {
  const payload = {
    issue: {
      number: 104,
      html_url: "https://github.com/example/repo/issues/104",
      title: "SCAN: ACCESSLINT Validation",
      created_at: "2026-02-20T20:00:00Z",
      user: { login: "octocat" },
      body: "# URLs\nhttps://example.com"
    }
  };

  const result = parseScanIssue(payload);
  assert.equal(result.ok, true);
  assert.deepEqual(result.engines, ["accesslint"]);
  assert.equal(result.value.scanTitle, "Validation");
});

test("parseScanIssue extracts QUALWEB engine from title", () => {
  const payload = {
    issue: {
      number: 105,
      html_url: "https://github.com/example/repo/issues/105",
      title: "SCAN: QUALWEB ACT Rules scan",
      created_at: "2026-02-20T20:00:00Z",
      user: { login: "octocat" },
      body: "# URLs\nhttps://example.com"
    }
  };

  const result = parseScanIssue(payload);
  assert.equal(result.ok, true);
  assert.deepEqual(result.engines, ["qualweb"]);
  assert.equal(result.value.scanTitle, "ACT Rules scan");
});

test("parseScanIssue defaults to axe plus a random engine when none specified", () => {
  const payload = {
    issue: {
      number: 105,
      html_url: "https://github.com/example/repo/issues/105",
      title: "SCAN: Basic homepage test",
      created_at: "2026-02-20T20:00:00Z",
      user: { login: "octocat" },
      body: "# URLs\nhttps://example.com"
    }
  };

  const result = parseScanIssue(payload);
  assert.equal(result.ok, true);
  assert.equal(result.engines.length, 2, "should use exactly 2 engines by default");
  assert.equal(result.engines[0], "axe", "axe should always be the first default engine");
  assert.ok(NON_AXE_ENGINES.includes(result.engines[1]), "second engine should be from the non-axe pool");
  assert.equal(result.value.scanTitle, "Basic homepage test");
  assert.deepEqual(result.value.engines, result.engines);
});

test("parseScanIssue recognizes ALL keyword", () => {
  const payload = {
    issue: {
      number: 106,
      html_url: "https://github.com/example/repo/issues/106",
      title: "SCAN: ALL engines test",
      created_at: "2026-02-20T20:00:00Z",
      user: { login: "octocat" },
      body: "# URLs\nhttps://example.com"
    }
  };

  const result = parseScanIssue(payload);
  assert.equal(result.ok, true);
  assert.deepEqual(result.engines, ["all"]);
  assert.equal(result.value.scanTitle, "engines test");
});

test("parseScanIssue handles case-insensitive engine names", () => {
  const payload = {
    issue: {
      number: 107,
      html_url: "https://github.com/example/repo/issues/107",
      title: "SCAN: axe Alfa EqualAccess Test",
      created_at: "2026-02-20T20:00:00Z",
      user: { login: "octocat" },
      body: "# URLs\nhttps://example.com"
    }
  };

  const result = parseScanIssue(payload);
  assert.equal(result.ok, true);
  assert.deepEqual(result.engines, ["axe", "alfa", "equalaccess"]);
  assert.equal(result.value.scanTitle, "Test");
});

test("getDefaultEngines returns axe plus one NON_AXE_ENGINE", () => {
  for (let i = 0; i < 20; i++) {
    const engines = getDefaultEngines();
    assert.equal(engines.length, 2);
    assert.equal(engines[0], "axe");
    assert.ok(NON_AXE_ENGINES.includes(engines[1]), `expected a NON_AXE_ENGINE, got: ${engines[1]}`);
  }
});

test("parseScanIssue reads engines from 'Engine:' first body line", () => {
  const payload = {
    issue: {
      number: 108,
      html_url: "https://github.com/example/repo/issues/108",
      title: "SCAN: Homepage accessibility check",
      created_at: "2026-02-20T20:00:00Z",
      user: { login: "octocat" },
      body: "Engine: axe, alfa\n# URLs\nhttps://example.com"
    }
  };

  const result = parseScanIssue(payload);
  assert.equal(result.ok, true);
  assert.deepEqual(result.engines, ["axe", "alfa"]);
  assert.equal(result.value.scanTitle, "Homepage accessibility check");
});

test("parseScanIssue 'Engine:' body line overrides title engine keywords", () => {
  const payload = {
    issue: {
      number: 109,
      html_url: "https://github.com/example/repo/issues/109",
      title: "SCAN: QUALWEB homepage check",
      created_at: "2026-02-20T20:00:00Z",
      user: { login: "octocat" },
      body: "Engine: axe equalaccess\n# URLs\nhttps://example.com"
    }
  };

  const result = parseScanIssue(payload);
  assert.equal(result.ok, true);
  assert.deepEqual(result.engines, ["axe", "equalaccess"]);
});

test("parseScanIssue 'Engine: ALL' in body runs all engines", () => {
  const payload = {
    issue: {
      number: 110,
      html_url: "https://github.com/example/repo/issues/110",
      title: "SCAN: Full site audit",
      created_at: "2026-02-20T20:00:00Z",
      user: { login: "octocat" },
      body: "Engine: ALL\n# URLs\nhttps://example.com"
    }
  };

  const result = parseScanIssue(payload);
  assert.equal(result.ok, true);
  assert.deepEqual(result.engines, ["all"]);
});

test("parseScanIssue ignores unknown tokens in 'Engine:' body line", () => {
  const payload = {
    issue: {
      number: 111,
      html_url: "https://github.com/example/repo/issues/111",
      title: "SCAN: Test",
      created_at: "2026-02-20T20:00:00Z",
      user: { login: "octocat" },
      body: "Engine: axe, unknown-tool, accesslint\n# URLs\nhttps://example.com"
    }
  };

  const result = parseScanIssue(payload);
  assert.equal(result.ok, true);
  assert.deepEqual(result.engines, ["axe", "accesslint"]);
});

test("parseScanIssue uses default when 'Engine:' line has only unknown tokens", () => {
  const payload = {
    issue: {
      number: 112,
      html_url: "https://github.com/example/repo/issues/112",
      title: "SCAN: Test",
      created_at: "2026-02-20T20:00:00Z",
      user: { login: "octocat" },
      body: "Engine: unknown-tool\n# URLs\nhttps://example.com"
    }
  };

  const result = parseScanIssue(payload);
  assert.equal(result.ok, true);
  assert.equal(result.engines[0], "axe", "should fall back to default (axe + random)");
  assert.equal(result.engines.length, 2);
});

test("parseScanIssue reads engines from 'Accessibility engines' section (issue form template)", () => {
  // Simulate body rendered by the GitHub issue form template when a user selects "ALL"
  const body = "### URLs\n\nhttps://example.com\n\n### Accessibility engines\n\nALL\n";
  const payload = {
    issue: {
      number: 113,
      html_url: "https://github.com/example/repo/issues/113",
      title: "SCAN: Form template test",
      created_at: "2026-02-20T20:00:00Z",
      user: { login: "octocat" },
      body
    }
  };

  const result = parseScanIssue(payload);
  assert.equal(result.ok, true);
  assert.deepEqual(result.engines, ["all"]);
  assert.deepEqual(result.value.requestedUrls, ["https://example.com"]);
});

test("parseScanIssue reads specific engine from 'Accessibility engines' section (issue form template)", () => {
  // Simulate body rendered by the GitHub issue form template when a user selects "axe"
  const body = "### URLs\n\nhttps://example.com\n\n### Accessibility engines\n\naxe\n";
  const payload = {
    issue: {
      number: 114,
      html_url: "https://github.com/example/repo/issues/114",
      title: "SCAN: Form template test",
      created_at: "2026-02-20T20:00:00Z",
      user: { login: "octocat" },
      body
    }
  };

  const result = parseScanIssue(payload);
  assert.equal(result.ok, true);
  assert.deepEqual(result.engines, ["axe"]);
});

test("parseScanIssue uses default when 'Accessibility engines' section has 'Default' option", () => {
  // The default dropdown option should not override engine selection — fall back to default engines
  const body = "### URLs\n\nhttps://example.com\n\n### Accessibility engines\n\nDefault (axe + one random engine)\n";
  const payload = {
    issue: {
      number: 115,
      html_url: "https://github.com/example/repo/issues/115",
      title: "SCAN: Form template test",
      created_at: "2026-02-20T20:00:00Z",
      user: { login: "octocat" },
      body
    }
  };

  const result = parseScanIssue(payload);
  assert.equal(result.ok, true);
  assert.equal(result.engines[0], "axe", "should use default engines when form shows default option");
  assert.equal(result.engines.length, 2, "default should be axe + one random engine");
});

test("parseScanIssue defaults to 2 second page load delay when TIME not specified", () => {
  const payload = {
    issue: {
      number: 120,
      html_url: "https://github.com/example/repo/issues/120",
      title: "SCAN: Homepage test",
      created_at: "2026-02-20T20:00:00Z",
      user: { login: "octocat" },
      body: "# URLs\nhttps://example.com"
    }
  };

  const result = parseScanIssue(payload);
  assert.equal(result.ok, true);
  assert.equal(result.pageLoadDelay, 2, "default page load delay should be 2 seconds");
  assert.equal(result.value.pageLoadDelay, 2);
  assert.equal(result.value.scanTitle, "Homepage test");
});

test("parseScanIssue extracts TIME:5 delay from title", () => {
  const payload = {
    issue: {
      number: 121,
      html_url: "https://github.com/example/repo/issues/121",
      title: "SCAN: TIME:5 Government sites",
      created_at: "2026-02-20T20:00:00Z",
      user: { login: "octocat" },
      body: "# URLs\nhttps://example.com"
    }
  };

  const result = parseScanIssue(payload);
  assert.equal(result.ok, true);
  assert.equal(result.pageLoadDelay, 5, "TIME:5 should set 5 second delay");
  assert.equal(result.value.pageLoadDelay, 5);
  assert.equal(result.value.scanTitle, "Government sites");
});

test("parseScanIssue extracts TIME:0 to disable delay", () => {
  const payload = {
    issue: {
      number: 122,
      html_url: "https://github.com/example/repo/issues/122",
      title: "SCAN: TIME:0 Fast scan",
      created_at: "2026-02-20T20:00:00Z",
      user: { login: "octocat" },
      body: "# URLs\nhttps://example.com"
    }
  };

  const result = parseScanIssue(payload);
  assert.equal(result.ok, true);
  assert.equal(result.pageLoadDelay, 0, "TIME:0 should disable the delay");
  assert.equal(result.value.scanTitle, "Fast scan");
});

test("parseScanIssue clamps TIME:N above maximum to 300", () => {
  const payload = {
    issue: {
      number: 123,
      html_url: "https://github.com/example/repo/issues/123",
      title: "SCAN: TIME:999 Slow site",
      created_at: "2026-02-20T20:00:00Z",
      user: { login: "octocat" },
      body: "# URLs\nhttps://example.com"
    }
  };

  const result = parseScanIssue(payload);
  assert.equal(result.ok, true);
  assert.equal(result.pageLoadDelay, 300, "TIME:999 should be clamped to 300");
  assert.equal(result.value.scanTitle, "Slow site");
});

test("parseScanIssue supports TIME:N combined with engine keywords", () => {
  const payload = {
    issue: {
      number: 124,
      html_url: "https://github.com/example/repo/issues/124",
      title: "SCAN: AXE TIME:10 Slow government scan",
      created_at: "2026-02-20T20:00:00Z",
      user: { login: "octocat" },
      body: "# URLs\nhttps://example.com"
    }
  };

  const result = parseScanIssue(payload);
  assert.equal(result.ok, true);
  assert.deepEqual(result.engines, ["axe"]);
  assert.equal(result.pageLoadDelay, 10);
  assert.equal(result.value.scanTitle, "Slow government scan");
});

test("parseScanIssue TIME:N is case-insensitive", () => {
  const payload = {
    issue: {
      number: 125,
      html_url: "https://github.com/example/repo/issues/125",
      title: "SCAN: time:3 Test",
      created_at: "2026-02-20T20:00:00Z",
      user: { login: "octocat" },
      body: "# URLs\nhttps://example.com"
    }
  };

  const result = parseScanIssue(payload);
  assert.equal(result.ok, true);
  assert.equal(result.pageLoadDelay, 3);
  assert.equal(result.value.scanTitle, "Test");
});

// Regression tests for scan-github-pages.yml workflow run failures
// Run #1 failed because the original workflow hardcoded `number: 0` in the issue event,
// which fails the issueNumber >= 1 validation. These tests prevent that regression.

test("parseScanIssue rejects issue with number: 0 (invalid issueNumber)", () => {
  const payload = {
    issue: {
      number: 0,
      html_url: "https://github.com/example/repo/actions/runs/123",
      title: "SCAN: AXE GitHub Pages accessibility check",
      created_at: "2026-02-20T20:00:00Z",
      user: { login: "github-actions[bot]" },
      body: "Engine: axe\n\nhttps://example.github.io/repo/"
    }
  };

  const result = parseScanIssue(payload);
  assert.equal(result.ok, false);
  assert.ok(result.errors.some((e) => e.includes("issueNumber must be an integer >= 1")));
  assert.equal(result.value, null);
});

test("parseScanIssue rejects issue with number: null (from JSON.stringify(NaN))", () => {
  const payload = {
    issue: {
      number: null,
      html_url: "https://github.com/example/repo/actions/runs/123",
      title: "SCAN: AXE GitHub Pages accessibility check",
      created_at: "2026-02-20T20:00:00Z",
      user: { login: "github-actions[bot]" },
      body: "Engine: axe\n\nhttps://example.github.io/repo/"
    }
  };

  const result = parseScanIssue(payload);
  assert.equal(result.ok, false);
  assert.ok(result.errors.some((e) => e.includes("issueNumber must be an integer >= 1")));
  assert.equal(result.value, null);
});

test("parseScanIssue accepts issue with number: 1 (minimum valid GITHUB_RUN_NUMBER)", () => {
  const payload = {
    issue: {
      number: 1,
      html_url: "https://github.com/example/repo/actions/runs/123",
      title: "SCAN: AXE GitHub Pages accessibility check",
      created_at: "2026-02-20T20:00:00Z",
      user: { login: "github-actions[bot]" },
      body: "Engine: axe\n\nhttps://example.github.io/repo/"
    }
  };

  const result = parseScanIssue(payload);
  assert.equal(result.ok, true);
  assert.equal(result.value.issueNumber, 1);
  assert.deepEqual(result.engines, ["axe"]);
  assert.equal(result.value.scanTitle, "GitHub Pages accessibility check");
});

// Tests for enhanced URL extraction (HTML anchors, Markdown links, Google wrapper unwrapping)

test("parseScanIssue extracts URLs from HTML anchor href attributes", () => {
  const payload = {
    issue: {
      number: 200,
      html_url: "https://github.com/example/repo/issues/200",
      title: "SCAN: HTML anchor URL extraction",
      created_at: "2026-02-20T20:00:00Z",
      user: { login: "octocat" },
      body: '<a href="https://example.com/">https://example.com/</a>\n<a href="https://example.org/page">link text</a>'
    }
  };

  const result = parseScanIssue(payload);
  assert.equal(result.ok, true);
  assert.ok(result.value.requestedUrls.includes("https://example.com/"), "should include first href URL");
  assert.ok(result.value.requestedUrls.includes("https://example.org/page"), "should include second href URL");
});

test("parseScanIssue extracts URLs from Markdown link syntax", () => {
  const payload = {
    issue: {
      number: 201,
      html_url: "https://github.com/example/repo/issues/201",
      title: "SCAN: Markdown link URL extraction",
      created_at: "2026-02-20T20:00:00Z",
      user: { login: "octocat" },
      body: "Some text\n[Visit Example](https://example.com/)\n[Another page](https://example.org/about)"
    }
  };

  const result = parseScanIssue(payload);
  assert.equal(result.ok, true);
  assert.ok(result.value.requestedUrls.includes("https://example.com/"), "should include first markdown link URL");
  assert.ok(result.value.requestedUrls.includes("https://example.org/about"), "should include second markdown link URL");
});

test("parseScanIssue unwraps Google search wrapper URLs", () => {
  const payload = {
    issue: {
      number: 202,
      html_url: "https://github.com/example/repo/issues/202",
      title: "SCAN: Google URL unwrapping",
      created_at: "2026-02-20T20:00:00Z",
      user: { login: "octocat" },
      body: '<a href="https://www.google.com/search?q=https://example.com/target">link text</a>'
    }
  };

  const result = parseScanIssue(payload);
  assert.equal(result.ok, true);
  assert.ok(result.value.requestedUrls.includes("https://example.com/target"), "should unwrap Google search wrapper");
  assert.ok(!result.value.requestedUrls.some((u) => u.includes("google.com")), "should not include Google wrapper URL");
});

test("parseScanIssue deduplicates URLs from mixed sources", () => {
  const payload = {
    issue: {
      number: 203,
      html_url: "https://github.com/example/repo/issues/203",
      title: "SCAN: URL deduplication",
      created_at: "2026-02-20T20:00:00Z",
      user: { login: "octocat" },
      body: 'https://example.com/\n<a href="https://example.com/">same URL as anchor</a>\n<a href="https://example.org/">unique URL</a>'
    }
  };

  const result = parseScanIssue(payload);
  assert.equal(result.ok, true);
  assert.equal(
    result.value.requestedUrls.filter((u) => u === "https://example.com/").length,
    1,
    "duplicate URL should appear only once"
  );
  assert.ok(result.value.requestedUrls.includes("https://example.org/"), "unique URL should be present");
});

test("parseScanIssue handles mixed HTML, Markdown, and plain URLs (like AI-generated issue bodies)", () => {
  // Simulates an issue body similar to issue #175 with AI-generated content.
  // Note: the '<a href="URL">[text</a>](URL)' pattern is an actual hybrid format
  // produced by AI tools that mix HTML anchors with Markdown link syntax.
  // The parser must extract the URL from the href attribute in this case.
  const body = [
    "## Analysis",
    "Some non-URL text here.",
    "",
    '<a href="https://nh.gov/">https://nh.gov/</a>',
    '<a href="https://www.google.com/search?q=https://nh.gov/search/advanced">[https://nh.gov/search/advanced</a>](https://www.google.com/search?q=https://nh.gov/search/advanced)',
    "",
    "### More URLs",
    '<a href="https://das.nh.gov/">https://das.nh.gov/</a>',
    "https://nh.gov/contact-us",
    '<a href="https://nh.gov/contact-us">duplicate via anchor</a>'
  ].join("\n");

  const payload = {
    issue: {
      number: 204,
      html_url: "https://github.com/example/repo/issues/204",
      title: "SCAN: AI-generated issue body",
      created_at: "2026-02-20T20:00:00Z",
      user: { login: "octocat" },
      body
    }
  };

  const result = parseScanIssue(payload);
  assert.equal(result.ok, true, `expected ok, got errors: ${result.errors.join(", ")}`);
  assert.ok(result.value.requestedUrls.includes("https://nh.gov/"), "should include plain URL from href");
  assert.ok(result.value.requestedUrls.includes("https://nh.gov/search/advanced"), "should unwrap Google wrapper URL");
  assert.ok(result.value.requestedUrls.includes("https://das.nh.gov/"), "should include plain das.nh.gov URL");
  assert.ok(result.value.requestedUrls.includes("https://nh.gov/contact-us"), "should include plain text URL");
  // https://nh.gov/contact-us appears both as plain text and as anchor — should be deduplicated
  assert.equal(
    result.value.requestedUrls.filter((u) => u === "https://nh.gov/contact-us").length,
    1,
    "duplicate URL should appear only once"
  );
  // Google wrapper itself should not be in the list
  assert.ok(!result.value.requestedUrls.some((u) => u.includes("google.com")), "should not include google.com wrapper URLs");
});
// --- Crawl mode detection ---

test("parseScanIssue detects crawl mode when title is a URL and body has no URLs", () => {
  const payload = {
    issue: {
      number: 195,
      html_url: "https://github.com/mgifford/open-scans/issues/195",
      title: "SCAN: https://www.kingston.gov.uk/",
      created_at: "2026-03-19T13:41:03Z",
      user: { login: "mgifford" },
      body: "### URLs\n\nPage: 50\n\n### Accessibility engines\n\nDefault (axe + one random engine)"
    }
  };

  const result = parseScanIssue(payload);
  assert.equal(result.ok, true, `expected ok, got errors: ${result.errors.join(", ")}`);
  assert.equal(result.needsCrawl, true, "should detect crawl mode");
  assert.equal(result.crawlBaseUrl, "https://www.kingston.gov.uk/", "should extract base URL from title");
  assert.equal(result.crawlPageCount, 50, "should extract page count from body");
  // requestedUrls should be seeded with the base URL so validation passes
  assert.deepEqual(result.value.requestedUrls, ["https://www.kingston.gov.uk/"]);
});

test("parseScanIssue does NOT trigger crawl mode when body has valid URLs", () => {
  const payload = {
    issue: {
      number: 196,
      html_url: "https://github.com/example/repo/issues/196",
      title: "SCAN: https://www.example.com/",
      created_at: "2026-03-01T00:00:00Z",
      user: { login: "octocat" },
      body: "### URLs\n\nhttps://www.example.com/page1\nhttps://www.example.com/page2"
    }
  };

  const result = parseScanIssue(payload);
  assert.equal(result.ok, true);
  assert.equal(result.needsCrawl, false, "should not trigger crawl mode when URLs are present");
  assert.equal(result.crawlBaseUrl, null);
  assert.ok(result.value.requestedUrls.includes("https://www.example.com/page1"));
});

test("parseScanIssue does NOT trigger crawl mode for normal title with body URLs", () => {
  const payload = {
    issue: {
      number: 197,
      html_url: "https://github.com/example/repo/issues/197",
      title: "SCAN: Example site scan",
      created_at: "2026-03-01T00:00:00Z",
      user: { login: "octocat" },
      body: "# URLs\nhttps://example.com"
    }
  };

  const result = parseScanIssue(payload);
  assert.equal(result.ok, true);
  assert.equal(result.needsCrawl, false);
  assert.equal(result.crawlBaseUrl, null);
});

test("parseScanIssue crawl mode uses default page count when Page: not specified", () => {
  const payload = {
    issue: {
      number: 198,
      html_url: "https://github.com/example/repo/issues/198",
      title: "SCAN: https://example.com/",
      created_at: "2026-03-01T00:00:00Z",
      user: { login: "octocat" },
      body: "### URLs\n\n_No URLs specified_\n\n### Accessibility engines\n\nDefault"
    }
  };

  const result = parseScanIssue(payload);
  assert.equal(result.ok, true);
  assert.equal(result.needsCrawl, true);
  assert.equal(result.crawlBaseUrl, "https://example.com/");
  assert.equal(result.crawlPageCount, 20, "should use default page count of 20");
});

test("parseScanIssue crawl mode works with HTTPS and HTTP base URLs", () => {
  const payload = {
    issue: {
      number: 199,
      html_url: "https://github.com/example/repo/issues/199",
      title: "SCAN: http://example.com/",
      created_at: "2026-03-01T00:00:00Z",
      user: { login: "octocat" },
      body: ""
    }
  };

  const result = parseScanIssue(payload);
  assert.equal(result.ok, true);
  assert.equal(result.needsCrawl, true);
  assert.equal(result.crawlBaseUrl, "http://example.com/");
});

// --- extractPageCount ---

test("extractPageCount parses 'Page: 50'", () => {
  assert.equal(extractPageCount("Page: 50"), 50);
});

test("extractPageCount parses 'Pages: 100'", () => {
  assert.equal(extractPageCount("Pages: 100"), 100);
});

test("extractPageCount is case-insensitive", () => {
  assert.equal(extractPageCount("page: 30"), 30);
  assert.equal(extractPageCount("PAGES: 25"), 25);
});

test("extractPageCount returns default when not found", () => {
  assert.equal(extractPageCount("No page spec here"), 20);
  assert.equal(extractPageCount(""), 20);
  assert.equal(extractPageCount(null), 20);
});

test("extractPageCount returns custom default", () => {
  assert.equal(extractPageCount("", 50), 50);
});

test("extractPageCount clamps to valid range (1-500)", () => {
  assert.equal(extractPageCount("Page: 0"), 20); // below minimum, returns default
  assert.equal(extractPageCount("Page: 501"), 20); // above maximum, returns default
  assert.equal(extractPageCount("Page: 500"), 500); // at maximum
  assert.equal(extractPageCount("Page: 1"), 1); // at minimum
});

test("parseScanIssue extracts URLs from Markdown bullet-point lists (- URL format)", () => {
  // Simulates an issue body like #169 where URLs are under Markdown headings
  // with bullet-point (`- URL`) formatting.
  const body = [
    "### Category A: Core Pages",
    "",
    "- https://example.com/",
    "- https://example.com/about",
    "- https://example.com/contact",
    "",
    "### Category B: Services",
    "",
    "- https://example.com/services",
    "- https://example.com/faq"
  ].join("\n");

  const payload = {
    issue: {
      number: 205,
      html_url: "https://github.com/example/repo/issues/205",
      title: "SCAN: Example Site - AXE ALFA",
      created_at: "2026-03-19T00:00:00Z",
      user: { login: "octocat" },
      body
    }
  };

  const result = parseScanIssue(payload);
  assert.equal(result.ok, true, `should succeed but got errors: ${result.errors}`);
  assert.equal(result.value.requestedUrls.length, 5, "should extract all 5 bullet-point URLs");
  assert.ok(result.value.requestedUrls.includes("https://example.com/"), "should include first URL");
  assert.ok(result.value.requestedUrls.includes("https://example.com/faq"), "should include last URL");
});

test("parseScanIssue extracts URLs from Markdown bullet lists with asterisk and plus syntax", () => {
  const body = [
    "* https://example.com/asterisk",
    "+ https://example.com/plus",
    "- https://example.com/dash"
  ].join("\n");

  const payload = {
    issue: {
      number: 206,
      html_url: "https://github.com/example/repo/issues/206",
      title: "SCAN: Bullet styles",
      created_at: "2026-03-19T00:00:00Z",
      user: { login: "octocat" },
      body
    }
  };

  const result = parseScanIssue(payload);
  assert.equal(result.ok, true, `should succeed but got errors: ${result.errors}`);
  assert.equal(result.value.requestedUrls.length, 3, "should extract all 3 bullet-style URLs");
  assert.ok(result.value.requestedUrls.includes("https://example.com/asterisk"), "should include asterisk-prefixed URL");
  assert.ok(result.value.requestedUrls.includes("https://example.com/plus"), "should include plus-prefixed URL");
  assert.ok(result.value.requestedUrls.includes("https://example.com/dash"), "should include dash-prefixed URL");
});
