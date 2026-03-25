import test from "node:test";
import assert from "node:assert/strict";
import { parseSitemapXml, filterSameOriginUrls, randomSample, parseRobotsForSitemaps } from "../../scanner/crawl-urls.mjs";

// --- parseSitemapXml ---

test("parseSitemapXml extracts URLs from a regular sitemap", () => {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://example.com/</loc></url>
  <url><loc>https://example.com/about</loc></url>
  <url><loc>https://example.com/contact</loc></url>
</urlset>`;

  const { urls, isSitemapIndex } = parseSitemapXml(xml);
  assert.equal(isSitemapIndex, false);
  assert.deepEqual(urls, [
    "https://example.com/",
    "https://example.com/about",
    "https://example.com/contact"
  ]);
});

test("parseSitemapXml detects sitemap index", () => {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap><loc>https://example.com/sitemap-pages.xml</loc></sitemap>
  <sitemap><loc>https://example.com/sitemap-posts.xml</loc></sitemap>
</sitemapindex>`;

  const { urls, isSitemapIndex } = parseSitemapXml(xml);
  assert.equal(isSitemapIndex, true);
  assert.deepEqual(urls, [
    "https://example.com/sitemap-pages.xml",
    "https://example.com/sitemap-posts.xml"
  ]);
});

test("parseSitemapXml ignores non-http loc values", () => {
  const xml = `<urlset>
  <url><loc>https://example.com/page</loc></url>
  <url><loc>ftp://files.example.com/doc.pdf</loc></url>
  <url><loc>   </loc></url>
</urlset>`;

  const { urls } = parseSitemapXml(xml);
  assert.deepEqual(urls, ["https://example.com/page"]);
});

test("parseSitemapXml returns empty for malformed XML with no loc tags", () => {
  const { urls, isSitemapIndex } = parseSitemapXml("<html><body>Not a sitemap</body></html>");
  assert.deepEqual(urls, []);
  assert.equal(isSitemapIndex, false);
});

// --- filterSameOriginUrls ---

test("filterSameOriginUrls keeps only same-origin URLs", () => {
  const urls = [
    "https://example.com/",
    "https://example.com/about",
    "https://other.com/page",
    "https://sub.example.com/page",
    "http://example.com/oldpage"
  ];
  const result = filterSameOriginUrls(urls, "https://example.com/");
  assert.deepEqual(result, [
    "https://example.com/",
    "https://example.com/about"
  ]);
});

test("filterSameOriginUrls removes non-web documents", () => {
  const urls = [
    "https://example.com/",
    "https://example.com/file.pdf",
    "https://example.com/image.jpg",
    "https://example.com/page"
  ];
  const result = filterSameOriginUrls(urls, "https://example.com/");
  assert.deepEqual(result, [
    "https://example.com/",
    "https://example.com/page"
  ]);
});

test("filterSameOriginUrls returns empty for invalid base URL", () => {
  const result = filterSameOriginUrls(["https://example.com/"], "not-a-url");
  assert.deepEqual(result, []);
});

test("filterSameOriginUrls handles invalid URLs in the list", () => {
  const urls = [
    "https://example.com/page",
    "not-a-url",
    "https://example.com/about"
  ];
  const result = filterSameOriginUrls(urls, "https://example.com/");
  assert.deepEqual(result, [
    "https://example.com/page",
    "https://example.com/about"
  ]);
});

// --- randomSample ---

test("randomSample returns all items when count >= array length", () => {
  const items = ["a", "b", "c"];
  const result = randomSample(items, 10);
  assert.deepEqual(result, ["a", "b", "c"]);
});

test("randomSample returns exactly maxCount items when array is larger", () => {
  const items = Array.from({ length: 100 }, (_, i) => `https://example.com/page-${i}`);
  const result = randomSample(items, 20);
  assert.equal(result.length, 20);
  // All returned items should be from the original array
  for (const item of result) {
    assert.ok(items.includes(item), `${item} should be in original array`);
  }
});

test("randomSample returns a copy and does not modify original", () => {
  const items = ["a", "b", "c"];
  const result = randomSample(items, 2);
  assert.equal(result.length, 2);
  assert.deepEqual(items, ["a", "b", "c"]); // Original unchanged
});

test("randomSample returns empty array for empty input", () => {
  const result = randomSample([], 5);
  assert.deepEqual(result, []);
});

// --- parseRobotsForSitemaps ---

test("parseRobotsForSitemaps extracts sitemap URLs from robots.txt", () => {
  const robots = [
    "User-agent: *",
    "Disallow: /private/",
    "",
    "Sitemap: https://example.com/sitemap.xml",
    "Sitemap: https://example.com/sitemap-news.xml"
  ].join("\n");
  const result = parseRobotsForSitemaps(robots);
  assert.deepEqual(result, [
    "https://example.com/sitemap.xml",
    "https://example.com/sitemap-news.xml"
  ]);
});

test("parseRobotsForSitemaps is case-insensitive for the Sitemap: directive", () => {
  const robots = [
    "SITEMAP: https://example.com/sitemap.xml",
    "sitemap: https://example.com/other.xml"
  ].join("\n");
  const result = parseRobotsForSitemaps(robots);
  assert.deepEqual(result, [
    "https://example.com/sitemap.xml",
    "https://example.com/other.xml"
  ]);
});

test("parseRobotsForSitemaps returns empty array when no sitemaps are listed", () => {
  const robots = "User-agent: *\nDisallow: /admin/\n";
  const result = parseRobotsForSitemaps(robots);
  assert.deepEqual(result, []);
});

test("parseRobotsForSitemaps returns empty array for empty input", () => {
  assert.deepEqual(parseRobotsForSitemaps(""), []);
});

test("parseRobotsForSitemaps ignores non-http sitemap entries", () => {
  const robots = [
    "Sitemap: https://example.com/sitemap.xml",
    "Sitemap: ftp://example.com/other.xml"
  ].join("\n");
  const result = parseRobotsForSitemaps(robots);
  // Only the https URL should be returned
  assert.deepEqual(result, ["https://example.com/sitemap.xml"]);
});
