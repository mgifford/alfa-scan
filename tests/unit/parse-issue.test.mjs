import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { parseScanIssue, validateScanRequest, NON_AXE_ENGINES, getDefaultEngines } from "../../scanner/parse-issue.mjs";

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