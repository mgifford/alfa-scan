import test from "node:test";
import assert from "node:assert/strict";
import { writeFileSync, rmSync } from "node:fs";
import { join } from "node:path";
import { tmpdir } from "node:os";
import {
  computeFindingFingerprint,
  loadFingerprintStore,
  annotateWithFingerprints
} from "../../scanner/run-scan.mjs";

const TMP = tmpdir();

// ── computeFindingFingerprint ──────────────────────────────────────────────

test("computeFindingFingerprint returns 12-char hex string", () => {
  const fp = computeFindingFingerprint("https://example.com", "#main", "wcag:wcag143|light");
  assert.match(fp, /^[0-9a-f]{12}$/);
});

test("computeFindingFingerprint is deterministic", () => {
  const a = computeFindingFingerprint("https://example.com", "#main", "wcag:wcag143|light");
  const b = computeFindingFingerprint("https://example.com", "#main", "wcag:wcag143|light");
  assert.equal(a, b);
});

test("computeFindingFingerprint differs for different inputs", () => {
  const a = computeFindingFingerprint("https://a.com", "#h1", "wcag:wcag143|light");
  const b = computeFindingFingerprint("https://b.com", "#h1", "wcag:wcag143|light");
  const c = computeFindingFingerprint("https://a.com", "#h2", "wcag:wcag143|light");
  const d = computeFindingFingerprint("https://a.com", "#h1", "wcag:wcag111|light");
  assert.notEqual(a, b);
  assert.notEqual(a, c);
  assert.notEqual(a, d);
});

// ── loadFingerprintStore ───────────────────────────────────────────────────

test("loadFingerprintStore returns empty object when file does not exist", () => {
  const store = loadFingerprintStore(join(TMP, "does-not-exist-fingerprints.json"));
  assert.deepEqual(store, {});
});

test("loadFingerprintStore returns empty object for invalid JSON", () => {
  const badPath = join(TMP, "bad-fingerprints.json");
  writeFileSync(badPath, "not valid json");
  const store = loadFingerprintStore(badPath);
  assert.deepEqual(store, {});
  rmSync(badPath);
});

test("loadFingerprintStore loads existing store", () => {
  const testPath = join(TMP, "test-fingerprints.json");
  const data = { abc123: { firstSeenAt: "2026-01-01T00:00:00Z", lastSeenAt: "2026-01-02T00:00:00Z" } };
  writeFileSync(testPath, JSON.stringify(data));
  const store = loadFingerprintStore(testPath);
  assert.deepEqual(store, data);
  rmSync(testPath);
});

// ── annotateWithFingerprints ───────────────────────────────────────────────

function makeResult(failures = []) {
  const noopScanner = { failures: [], counts: { passed: 0, failed: 0, cantTell: 0, inapplicable: 0 } };
  return {
    submittedUrl: "https://example.com/",
    finalUrl: "https://example.com/",
    axe: { ...noopScanner, failures },
    alfa: noopScanner,
    equalAccess: noopScanner,
    accesslint: noopScanner,
    qualweb: noopScanner
  };
}

test("annotateWithFingerprints attaches fingerprint and firstSeenAt to new findings", () => {
  const store = {};
  const failure = { rule: "color-contrast", xpath: "#main", html: null, isDuplicate: false };
  const results = [makeResult([failure])];
  annotateWithFingerprints(store, results, { scannedAt: "2026-03-01T00:00:00Z", issueNumber: 42, scanTitle: "Test" });

  assert.ok(failure.fingerprint, "fingerprint should be attached");
  assert.equal(failure.firstSeenAt, "2026-03-01T00:00:00Z");
  assert.match(failure.fingerprint, /^[0-9a-f]{12}$/);
});

test("annotateWithFingerprints records new fingerprints in store", () => {
  const store = {};
  const failure = { rule: "image-alt", xpath: "img.logo", html: null, isDuplicate: false };
  const results = [makeResult([failure])];
  annotateWithFingerprints(store, results, { scannedAt: "2026-03-15T12:00:00Z", issueNumber: 10 });

  assert.equal(Object.keys(store).length, 1);
  const entry = Object.values(store)[0];
  assert.equal(entry.firstSeenAt, "2026-03-15T12:00:00Z");
  assert.equal(entry.lastSeenAt, "2026-03-15T12:00:00Z");
  assert.equal(entry.issueNumber, 10);
});

test("annotateWithFingerprints preserves firstSeenAt for recurring findings", () => {
  const store = { abc: { firstSeenAt: "2026-01-01T00:00:00Z", lastSeenAt: "2026-01-01T00:00:00Z", issueNumber: 1, url: "https://example.com/" } };
  // Create a failure that will produce the same fingerprint as 'abc'
  // We need to reverse-engineer what fingerprint this failure will get.
  // Instead, pre-populate the store with the actual fingerprint from a first run:
  const failure = { rule: "color-contrast", xpath: "#nav", html: null, isDuplicate: false };
  const results = [makeResult([failure])];

  // First run to get the fingerprint
  const tempStore = {};
  annotateWithFingerprints(tempStore, results, { scannedAt: "2026-01-01T00:00:00Z" });
  const fp = failure.fingerprint;
  const preExistingStore = { [fp]: { firstSeenAt: "2026-01-01T00:00:00Z", lastSeenAt: "2026-01-01T00:00:00Z" } };

  // Second run with the pre-existing store
  const failure2 = { rule: "color-contrast", xpath: "#nav", html: null, isDuplicate: false };
  const results2 = [makeResult([failure2])];
  annotateWithFingerprints(preExistingStore, results2, { scannedAt: "2026-03-20T00:00:00Z" });

  assert.equal(failure2.firstSeenAt, "2026-01-01T00:00:00Z", "firstSeenAt should be preserved from original scan");
  assert.equal(preExistingStore[fp].lastSeenAt, "2026-03-20T00:00:00Z", "lastSeenAt should be updated");
});

test("annotateWithFingerprints skips duplicate findings", () => {
  const store = {};
  const failure = { rule: "color-contrast", xpath: "#nav", html: null, isDuplicate: true };
  const results = [makeResult([failure])];
  annotateWithFingerprints(store, results, { scannedAt: "2026-03-01T00:00:00Z" });

  assert.equal(Object.keys(store).length, 0, "duplicate findings should not be fingerprinted");
  assert.equal(failure.fingerprint, undefined, "duplicate findings should not have fingerprint attached");
});

// ── normalizeRuleKey WCAG SC filtering ────────────────────────────────────
// We test this indirectly through computeFindingFingerprint consistency between
// a failure with level-inclusive tags vs SC-only tags.
test("fingerprints match for same SC regardless of level tag presence", () => {
  // Simulate axe-style failure with level tags included
  const axeFailure = {
    rule: "color-contrast",
    xpath: "#h1",
    html: null,
    wcagSc: ["wcag143", "wcag1411", "wcag2aa", "wcag21aa"], // includes level tags
    colorScheme: "light",
    isDuplicate: false
  };
  // Simulate AccessLint-style failure with only SC tags (after enrichment)
  const accesslintFailure = {
    rule: "color-contrast",
    xpath: "#h1",
    html: null,
    wcagSc: ["wcag143", "wcag1411"], // SC-only, no level tags
    colorScheme: "light",
    isDuplicate: false
  };

  const store = {};
  const results = [{
    submittedUrl: "https://example.com/",
    finalUrl: "https://example.com/",
    axe: {
      failures: [axeFailure],
      counts: { passed: 0, failed: 0, cantTell: 0, inapplicable: 0 }
    },
    alfa: { failures: [], counts: { passed: 0, failed: 0, cantTell: 0, inapplicable: 0 } },
    equalAccess: { failures: [], counts: { passed: 0, failed: 0, cantTell: 0, inapplicable: 0 } },
    accesslint: {
      failures: [accesslintFailure],
      counts: { passed: 0, failed: 0, cantTell: 0, inapplicable: 0 }
    },
    qualweb: { failures: [], counts: { passed: 0, failed: 0, cantTell: 0, inapplicable: 0 } }
  }];

  annotateWithFingerprints(store, results, { scannedAt: "2026-03-01T00:00:00Z" });

  // The two failures on the same element for the same WCAG SCs should produce
  // the same fingerprint after the SC-only normalization fix.
  assert.equal(
    axeFailure.fingerprint,
    accesslintFailure.fingerprint,
    "axe and AccessLint failures for the same WCAG SCs on the same element should share a fingerprint"
  );
});
