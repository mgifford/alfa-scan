---
description: Write unit tests for open-scans scanner modules using the Node.js built-in test runner.
---

## Context

You are writing unit tests for the **open-scans** scanner. Tests live in `tests/unit/*.test.mjs` and use the **Node.js built-in test runner** (`node:test`). No external test framework (Jest, Mocha, etc.) is used.

## Test Runner Pattern

Every test file follows this structure:

```javascript
import test from "node:test";
import assert from "node:assert/strict";
// Import only the specific functions you are testing
import { myFunction, anotherFunction } from "../../scanner/module-name.mjs";

test("brief description of what is being verified", () => {
  const result = myFunction(input);
  assert.equal(result.ok, true);
  assert.deepEqual(result.value, { key: "expected" });
});

test("error case: describe the failure condition", () => {
  const result = myFunction(null);
  assert.equal(result.ok, false);
  assert.ok(result.errors.includes("expected error message"));
});
```

Run all tests with:

```bash
npm test
```

Run a single test file with:

```bash
node --test tests/unit/module-name.test.mjs
```

## Import Guard Pattern

Scanner modules use an import guard to prevent `main()` from running when the module is imported by a test. **Do not remove or bypass this guard** — it is what makes unit testing possible without triggering side effects:

```javascript
// At the bottom of scanner/module-name.mjs
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}
```

If you add a new scanner module, include this guard and export all testable functions.

## Fixture Files

Static test data lives in `tests/fixtures/`. Use `readFileSync` with a `URL` relative to `import.meta.url` to load fixtures — this works regardless of the working directory when tests run:

```javascript
import { readFileSync } from "node:fs";

const payload = JSON.parse(
  readFileSync(new URL("../fixtures/issue-valid.json", import.meta.url), "utf8")
);
```

When you need HTML fixtures for testing report generation or landmark detection, create a `.html` file in `tests/fixtures/`:

```javascript
const html = readFileSync(
  new URL("../fixtures/sample-page.html", import.meta.url),
  "utf8"
);
```

## Mocking Scanner Engine Outputs

To test modules that consume scanner engine results without running a real browser scan, create fixture JSON files that match the engine output schema. Place them in `tests/fixtures/`:

```
tests/fixtures/
  axe-result-sample.json      ← axe-core violations array
  alfa-result-sample.json     ← ALFA outcomes array
  equalaccess-result-sample.json
  qualweb-result-sample.json
```

Load them in your test and pass them directly to the function under test:

```javascript
import { consolidateFindings } from "../../scanner/run-scan.mjs";

const axeResult = JSON.parse(
  readFileSync(new URL("../fixtures/axe-result-sample.json", import.meta.url), "utf8")
);

test("consolidateFindings merges axe and alfa results", () => {
  const consolidated = consolidateFindings([axeResult], [], []);
  assert.ok(Array.isArray(consolidated));
  assert.ok(consolidated.length > 0);
});
```

## Fingerprint Tests

Fingerprints are computed as `SHA-256(url|locator|ruleKey).slice(0, 12)`. Test the `computeFindingFingerprint` function from `run-scan.mjs` with deterministic inputs:

```javascript
test("computeFindingFingerprint produces stable 12-char hex string", () => {
  const fp = computeFindingFingerprint("https://example.com/", "html > body > h1", "color-contrast");
  assert.match(fp, /^[0-9a-f]{12}$/);

  // Same inputs → same fingerprint (deterministic)
  const fp2 = computeFindingFingerprint("https://example.com/", "html > body > h1", "color-contrast");
  assert.equal(fp, fp2);
});
```

## Testing parse-issue.mjs

`parseScanIssue` accepts a GitHub issue payload object and returns `{ ok, value, errors, isScanIssue, isTimedIssue, ... }`. Use the pattern from the existing tests:

```javascript
test("parseScanIssue parses a SCAN: issue with URLs in body", () => {
  const payload = {
    issue: {
      number: 10,
      html_url: "https://github.com/owner/repo/issues/10",
      title: "SCAN: Homepage",
      created_at: "2026-01-01T00:00:00Z",
      user: { login: "tester" },
      body: "# URLs\nhttps://example.com\nhttps://example.com/about"
    }
  };
  const result = parseScanIssue(payload);
  assert.equal(result.ok, true);
  assert.equal(result.value.requestedUrls.length, 2);
});
```

## Testing validate-targets.mjs

`validateUrls` returns `{ valid: string[], invalid: Array<{url, reason}> }`. Test private IP rejection and valid URL acceptance:

```javascript
test("validateUrls rejects private IPv4 addresses", () => {
  const { valid, invalid } = validateUrls(["https://192.168.1.1/", "https://example.com/"]);
  assert.equal(valid.length, 1);
  assert.ok(invalid.some(e => e.url === "https://192.168.1.1/"));
});
```

## Testing Trend Analysis

`analyse-trends.mjs` functions accept arrays of historical scan summaries and return trend objects. Test with synthetic data rather than real report files:

```javascript
test("analyseTrends identifies worsening trend", () => {
  const history = [
    { date: "2026-01-01", totalViolations: 10 },
    { date: "2026-02-01", totalViolations: 15 },
    { date: "2026-03-01", totalViolations: 20 }
  ];
  const trend = computeTrend(history);
  assert.equal(trend.direction, "worsening");
});
```

## stdout / stderr Convention in Tests

Tests must not assert on stdout content from scanner modules that are designed to output JSON. Instead, import and call individual functions directly. If you need to test a full CLI invocation, capture stderr and stdout separately:

```javascript
import { spawnSync } from "node:child_process";

test("run-scan outputs valid JSON to stdout", () => {
  const result = spawnSync(
    "node",
    ["scanner/run-scan.mjs", "--dry-run"],
    { encoding: "utf8" }
  );
  // stdout must be parseable JSON
  assert.doesNotThrow(() => JSON.parse(result.stdout));
  // stderr may have progress messages — that is expected
});
```

## Accessibility-Specific Test Patterns

When testing report HTML generation, verify that WCAG-required structural elements are present:

```javascript
import { generateInteractiveHtml } from "../../scanner/interactive-report.mjs";

test("report HTML contains required landmark regions", () => {
  const html = generateInteractiveHtml(sampleScanData);
  assert.ok(html.includes('<main'), "Missing <main> landmark");
  assert.ok(html.includes('role="banner"') || html.includes("<header"), "Missing banner landmark");
  assert.ok(html.includes('skip-link') || html.includes('href="#main-content"'), "Missing skip link");
});

test("report tables have captions and scope attributes", () => {
  const html = generateInteractiveHtml(sampleScanData);
  assert.ok(html.includes("<caption"), "Tables must have captions (WCAG 1.3.1)");
  assert.ok(html.includes('scope="col"') || html.includes("scope='col'"), "Column headers need scope");
});
```

## Checklist Before Submitting

- [ ] Test file placed in `tests/unit/` with `.test.mjs` extension
- [ ] Only `node:test` and `node:assert/strict` used (no external frameworks)
- [ ] Fixtures loaded with `readFileSync(new URL("../fixtures/...", import.meta.url))`
- [ ] Module functions are imported directly — not called via CLI subprocess unless testing CLI output
- [ ] Import guard present in the module under test
- [ ] Both success and error paths tested
- [ ] Fingerprint tests use deterministic inputs and verify 12-char hex format
- [ ] Report HTML tests check for landmark regions, skip links, and table captions
- [ ] `npm test` passes with no failures
- [ ] `npm run lint` passes
