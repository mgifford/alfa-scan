import test from "node:test";
import assert from "node:assert/strict";
import { validateTarget, validateTargets, isNonWebDocument } from "../../scanner/validate-targets.mjs";

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

test("validateTarget rejects PDF URLs", () => {
  const result = validateTarget("https://www.example.com/docs/report.pdf");
  assert.equal(result.accepted, false);
  assert.match(result.reason, /non-web document/);
});

test("validateTarget rejects Word document URLs", () => {
  const result = validateTarget("https://example.com/files/document.docx");
  assert.equal(result.accepted, false);
  assert.match(result.reason, /non-web document/);
});

test("validateTarget rejects image URLs", () => {
  const result = validateTarget("https://example.com/images/photo.jpg");
  assert.equal(result.accepted, false);
  assert.match(result.reason, /non-web document/);
});

test("validateTarget rejects video URLs", () => {
  const result = validateTarget("https://example.com/video/clip.mp4");
  assert.equal(result.accepted, false);
  assert.match(result.reason, /non-web document/);
});

test("validateTarget accepts HTML web page URLs", () => {
  const result = validateTarget("https://example.com/page.html");
  assert.equal(result.accepted, true);
});

test("validateTarget accepts URLs with no file extension", () => {
  const result = validateTarget("https://example.com/about");
  assert.equal(result.accepted, true);
});

test("validateTarget accepts URLs with query strings that look like documents", () => {
  // Query parameters should not trigger extension filtering
  const result = validateTarget("https://example.com/search?type=pdf");
  assert.equal(result.accepted, true);
});

test("validateTargets filters out non-web documents with correct reason", () => {
  const result = validateTargets([
    "https://example.com/page",
    "https://example.com/report.pdf",
    "https://example.com/spreadsheet.xlsx"
  ]);

  assert.equal(result.accepted.length, 1);
  assert.equal(result.rejected.length, 2);
  for (const rejected of result.rejected) {
    assert.match(rejected.reason, /non-web document/);
  }
});

test("isNonWebDocument returns true for PDF URL", () => {
  assert.equal(isNonWebDocument(new URL("https://example.com/report.pdf")), true);
});

test("isNonWebDocument returns false for HTML URL", () => {
  assert.equal(isNonWebDocument(new URL("https://example.com/page.html")), false);
});

test("isNonWebDocument returns false for URL with no extension", () => {
  assert.equal(isNonWebDocument(new URL("https://example.com/about")), false);
});

test("isNonWebDocument returns false when extension is in query string only", () => {
  assert.equal(isNonWebDocument(new URL("https://example.com/search?file=report.pdf")), false);
});

test("isNonWebDocument returns true for epub URL", () => {
  assert.equal(isNonWebDocument(new URL("https://www.medicare.gov/publications/guide.epub")), true);
});

test("isNonWebDocument returns true for mobi URL", () => {
  assert.equal(isNonWebDocument(new URL("https://example.com/book.mobi")), true);
});

test("validateTargets filters out epub and mobi URLs", () => {
  const result = validateTargets([
    "https://example.com/page",
    "https://www.medicare.gov/publications/guide.epub",
    "https://example.com/book.mobi"
  ]);

  assert.equal(result.accepted.length, 1);
  assert.equal(result.rejected.length, 2);
  for (const rejected of result.rejected) {
    assert.match(rejected.reason, /non-web document/);
  }
});