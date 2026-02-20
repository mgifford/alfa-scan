import test from "node:test";
import assert from "node:assert/strict";
import { validateTarget, validateTargets } from "../../scanner/validate-targets.mjs";

test("validateTarget accepts public https URL", () => {
  const result = validateTarget("https://example.com/path#fragment");
  assert.equal(result.accepted, true);
  assert.equal(result.reason, null);
  assert.equal(result.normalizedUrl, "https://example.com/path");
});

test("validateTarget rejects localhost", () => {
  const result = validateTarget("http://localhost:3000");
  assert.equal(result.accepted, false);
  assert.match(result.reason, /localhost/);
});

test("validateTarget rejects private IPv4", () => {
  const result = validateTarget("https://10.1.2.3/path");
  assert.equal(result.accepted, false);
  assert.match(result.reason, /private\/internal IPv4/);
});

test("validateTarget rejects link-local IPv4", () => {
  const result = validateTarget("http://169.254.1.10");
  assert.equal(result.accepted, false);
});

test("validateTarget rejects private IPv6", () => {
  const result = validateTarget("https://[fd00::1]/");
  assert.equal(result.accepted, false);
  assert.match(result.reason, /private\/internal IPv6/);
});

test("validateTargets separates accepted and rejected URLs", () => {
  const result = validateTargets([
    "https://example.com",
    "http://localhost",
    "not-a-url"
  ]);

  assert.equal(result.accepted.length, 1);
  assert.equal(result.rejected.length, 2);
  assert.equal(result.accepted[0].normalizedUrl, "https://example.com/");
});