import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { parseScanIssue, validateScanRequest } from "../../scanner/parse-issue.mjs";

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