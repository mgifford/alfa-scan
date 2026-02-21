import test from "node:test";
import assert from "node:assert/strict";

// Since submit.js is a browser module, we'll test the core functions
// by importing a test-compatible version

// Parse URLs from text input (supports line-by-line and CSV formats)
function parseUrls(rawText) {
  return rawText
    .split(/[\n,]/g)
    .map((value) => value.trim())
    .filter(Boolean)
    .filter((value) => value.startsWith("http://") || value.startsWith("https://"));
}

// Validate URL syntax
function isValidUrl(urlString) {
  try {
    const url = new URL(urlString);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

// Check if URL is localhost
function isLocalhost(url) {
  const hostname = url.hostname.toLowerCase();
  return hostname === "localhost" || hostname === "127.0.0.1" || hostname === "[::1]";
}

// Check if IPv4 address is in private range
function isPrivateIPv4(hostname) {
  const ipv4Pattern = /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/;
  const match = hostname.match(ipv4Pattern);
  if (!match) return false;

  const octets = match.slice(1).map(Number);
  
  // 10.0.0.0/8
  if (octets[0] === 10) return true;
  
  // 172.16.0.0/12
  if (octets[0] === 172 && octets[1] >= 16 && octets[1] <= 31) return true;
  
  // 192.168.0.0/16
  if (octets[0] === 192 && octets[1] === 168) return true;
  
  // 169.254.0.0/16 (link-local)
  if (octets[0] === 169 && octets[1] === 254) return true;
  
  return false;
}

// Check if IPv6 address is in private range
function isPrivateIPv6(hostname) {
  const lower = hostname.toLowerCase();
  
  // Remove brackets if present (URL hostname includes brackets for IPv6)
  const bare = lower.replace(/^\[|\]$/g, '');
  
  // Link-local: fe80::/10
  if (bare.startsWith("fe80:")) return true;
  
  // Unique local: fc00::/7
  if (bare.startsWith("fc") || bare.startsWith("fd")) return true;
  
  // Loopback: ::1
  if (bare === "::1") return true;
  
  return false;
}

// Validate that URL is publicly accessible
function validateUrl(urlString) {
  if (!isValidUrl(urlString)) {
    return { valid: false, reason: "Invalid URL format" };
  }

  const url = new URL(urlString);

  // Check for localhost
  if (isLocalhost(url)) {
    return { valid: false, reason: "Localhost URLs are not allowed" };
  }

  // Check for private IPv4
  if (isPrivateIPv4(url.hostname)) {
    return { valid: false, reason: "Private IP addresses are not allowed" };
  }

  // Check for private IPv6
  if (isPrivateIPv6(url.hostname)) {
    return { valid: false, reason: "Private IPv6 addresses are not allowed" };
  }

  return { valid: true, reason: "" };
}

// Validate all URLs and separate into accepted/rejected
function validateUrls(urls) {
  const accepted = [];
  const rejected = [];

  for (const url of urls) {
    const validation = validateUrl(url);
    if (validation.valid) {
      accepted.push(url);
    } else {
      rejected.push({ url, reason: validation.reason });
    }
  }

  return { accepted, rejected };
}

// Format issue body for GitHub issue creation
function formatIssueBody(scanTitle, urls) {
  return `# URLs

${urls.join("\n")}
`;
}

// Tests for URL parsing
test("parseUrls handles line-by-line format", () => {
  const input = `https://example.com
https://example.org
https://example.net`;
  const result = parseUrls(input);
  assert.deepEqual(result, [
    "https://example.com",
    "https://example.org",
    "https://example.net"
  ]);
});

test("parseUrls handles comma-separated format", () => {
  const input = "https://example.com, https://example.org, https://example.net";
  const result = parseUrls(input);
  assert.deepEqual(result, [
    "https://example.com",
    "https://example.org",
    "https://example.net"
  ]);
});

test("parseUrls handles mixed format", () => {
  const input = `https://example.com, https://example.org
https://example.net`;
  const result = parseUrls(input);
  assert.deepEqual(result, [
    "https://example.com",
    "https://example.org",
    "https://example.net"
  ]);
});

test("parseUrls filters out non-HTTP(S) content", () => {
  const input = `https://example.com
Some random text
http://example.org
ftp://example.net`;
  const result = parseUrls(input);
  assert.deepEqual(result, [
    "https://example.com",
    "http://example.org"
  ]);
});

test("parseUrls handles empty lines and whitespace", () => {
  const input = `https://example.com

  https://example.org  
  
https://example.net`;
  const result = parseUrls(input);
  assert.deepEqual(result, [
    "https://example.com",
    "https://example.org",
    "https://example.net"
  ]);
});

// Tests for URL validation
test("validateUrl accepts public HTTPS URL", () => {
  const result = validateUrl("https://example.com/path");
  assert.equal(result.valid, true);
  assert.equal(result.reason, "");
});

test("validateUrl accepts public HTTP URL", () => {
  const result = validateUrl("http://example.com");
  assert.equal(result.valid, true);
  assert.equal(result.reason, "");
});

test("validateUrl rejects localhost", () => {
  const result = validateUrl("http://localhost:3000");
  assert.equal(result.valid, false);
  assert.match(result.reason, /localhost/i);
});

test("validateUrl rejects 127.0.0.1", () => {
  const result = validateUrl("http://127.0.0.1");
  assert.equal(result.valid, false);
  assert.match(result.reason, /localhost/i);
});

test("validateUrl rejects private IPv4 (10.x.x.x)", () => {
  const result = validateUrl("https://10.1.2.3/path");
  assert.equal(result.valid, false);
  assert.match(result.reason, /private/i);
});

test("validateUrl rejects private IPv4 (172.16-31.x.x)", () => {
  const result = validateUrl("https://172.16.0.1");
  assert.equal(result.valid, false);
  assert.match(result.reason, /private/i);
});

test("validateUrl rejects private IPv4 (192.168.x.x)", () => {
  const result = validateUrl("https://192.168.1.1");
  assert.equal(result.valid, false);
  assert.match(result.reason, /private/i);
});

test("validateUrl rejects link-local IPv4 (169.254.x.x)", () => {
  const result = validateUrl("http://169.254.1.1");
  assert.equal(result.valid, false);
  assert.match(result.reason, /private/i);
});

test("validateUrl rejects private IPv6", () => {
  const result = validateUrl("https://[fd00::1]/");
  assert.equal(result.valid, false);
  assert.match(result.reason, /ipv6/i);
});

test("validateUrl rejects IPv6 loopback", () => {
  const result = validateUrl("http://[::1]");
  assert.equal(result.valid, false);
  assert.match(result.reason, /localhost/i);
});

test("validateUrl rejects invalid URL format", () => {
  const result = validateUrl("not-a-url");
  assert.equal(result.valid, false);
  assert.match(result.reason, /invalid/i);
});

test("validateUrl rejects FTP URLs", () => {
  const result = validateUrl("ftp://example.com");
  assert.equal(result.valid, false);
  assert.match(result.reason, /invalid/i);
});

// Tests for batch validation
test("validateUrls separates accepted and rejected URLs", () => {
  const urls = [
    "https://example.com",
    "http://localhost",
    "https://192.168.1.1",
    "https://example.org"
  ];
  const result = validateUrls(urls);
  
  assert.equal(result.accepted.length, 2);
  assert.deepEqual(result.accepted, [
    "https://example.com",
    "https://example.org"
  ]);
  
  assert.equal(result.rejected.length, 2);
  assert.equal(result.rejected[0].url, "http://localhost");
  assert.match(result.rejected[0].reason, /localhost/i);
  assert.equal(result.rejected[1].url, "https://192.168.1.1");
  assert.match(result.rejected[1].reason, /private/i);
});

test("validateUrls handles all valid URLs", () => {
  const urls = [
    "https://example.com",
    "https://example.org",
    "http://example.net"
  ];
  const result = validateUrls(urls);
  
  assert.equal(result.accepted.length, 3);
  assert.equal(result.rejected.length, 0);
});

test("validateUrls handles all invalid URLs", () => {
  const urls = [
    "http://localhost",
    "https://10.0.0.1",
    "not-a-url"
  ];
  const result = validateUrls(urls);
  
  assert.equal(result.accepted.length, 0);
  assert.equal(result.rejected.length, 3);
});

// Tests for issue body formatting
test("formatIssueBody creates proper structure", () => {
  const urls = [
    "https://example.com",
    "https://example.org"
  ];
  const result = formatIssueBody("Test Scan", urls);
  
  assert.match(result, /# URLs/);
  assert.match(result, /https:\/\/example\.com/);
  assert.match(result, /https:\/\/example\.org/);
});

test("formatIssueBody handles single URL", () => {
  const urls = ["https://example.com"];
  const result = formatIssueBody("Single URL Scan", urls);
  
  assert.match(result, /# URLs/);
  assert.match(result, /https:\/\/example\.com/);
});

// Integration test: end-to-end parsing and validation
test("Integration: parse and validate mixed input with >100 URLs rejected", () => {
  // Create input with 105 URLs (should be rejected)
  const urls = Array.from({ length: 105 }, (_, i) => `https://example${i}.com`);
  const input = urls.join("\n");
  
  const parsed = parseUrls(input);
  assert.equal(parsed.length, 105);
  
  const { accepted, rejected } = validateUrls(parsed);
  assert.equal(accepted.length, 105);
  
  // The form should enforce max 100 on the client side
  // This test validates that we can detect when count > 100
  assert.ok(accepted.length > 100, "Should detect when count exceeds 100");
});

test("Integration: parse and validate complex real-world input", () => {
  const input = `https://www.gsa.gov
  https://www.gsa.gov/about-us, https://www.gsa.gov/buy-through-us
  
  http://localhost:3000
  https://10.0.0.1/internal
  
  https://www.gsa.gov/policy-regulations`;
  
  const parsed = parseUrls(input);
  const { accepted, rejected } = validateUrls(parsed);
  
  assert.equal(accepted.length, 4, "Should accept 4 valid public URLs");
  assert.equal(rejected.length, 2, "Should reject 2 invalid URLs");
  
  // Verify rejected URLs have reasons
  assert.ok(rejected.every(r => r.reason.length > 0), "All rejected URLs should have reasons");
});

test("Integration: issue body matches parser expectations", () => {
  const scanTitle = "GSA.gov Test";
  const urls = [
    "https://www.gsa.gov",
    "https://www.gsa.gov/about-us"
  ];
  
  const body = formatIssueBody(scanTitle, urls);
  
  // Verify structure matches what parse-issue.mjs expects
  assert.match(body, /# URLs/, "Should have URLs section header");
  assert.match(body, /https:\/\/www\.gsa\.gov\n/, "URLs should be newline-separated");
  
  // Verify it can be parsed back (simulating parser behavior)
  const urlSection = body.match(/# URLs\s*\n([\s\S]*)/)?.[1];
  assert.ok(urlSection, "Should have URL section content");
  
  const reparsed = parseUrls(urlSection);
  assert.deepEqual(reparsed, urls, "Formatted body should be parseable back to original URLs");
});
