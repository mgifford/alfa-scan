import { isNonWebDocument } from "./validate-targets.mjs";

const DEFAULT_CRAWL_TIMEOUT = 30000; // 30 seconds
const DEFAULT_MAX_URLS = 20;
const MAX_SITEMAP_URLS = 500;

// Use a Googlebot-style user-agent so sites that block generic bots still allow crawling.
// Many CDNs and WAFs whitelist well-known crawlers; the project URL in the comment token
// ensures transparency about the tool's identity.
const CRAWL_USER_AGENT =
  "Mozilla/5.0 (compatible; open-scans/1.0; +https://github.com/mgifford/open-scans)";

const CRAWL_HEADERS = {
  "User-Agent": CRAWL_USER_AGENT,
  Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
  "Accept-Language": "en-US,en;q=0.5"
};

/**
 * Creates an AbortController-based timeout signal.
 * @param {number} ms - Timeout in milliseconds
 * @returns {AbortSignal}
 */
function createTimeoutSignal(ms) {
  const controller = new AbortController();
  setTimeout(() => controller.abort(), ms);
  return controller.signal;
}

/**
 * Parse URLs from a sitemap XML string.
 * Handles both regular sitemaps (<urlset>) and sitemap indexes (<sitemapindex>).
 * @param {string} xml - Sitemap XML content
 * @returns {{ urls: string[], isSitemapIndex: boolean }}
 */
export function parseSitemapXml(xml) {
  const urls = [];

  // Check if it's a sitemap index (contains sub-sitemap references)
  const isSitemapIndex = /<sitemapindex/i.test(xml);

  // Extract all <loc> values
  const locPattern = /<loc>\s*([^<\s]+)\s*<\/loc>/gi;
  let match;
  while ((match = locPattern.exec(xml)) !== null) {
    const url = match[1].trim();
    if (url.startsWith("http://") || url.startsWith("https://")) {
      urls.push(url);
    }
  }

  return { urls, isSitemapIndex };
}

/**
 * Filter URLs to same-origin, valid (non-document) HTML pages.
 * @param {string[]} urls
 * @param {string} baseUrl
 * @returns {string[]}
 */
export function filterSameOriginUrls(urls, baseUrl) {
  let origin;
  try {
    origin = new URL(baseUrl).origin;
  } catch {
    return [];
  }
  return urls.filter((url) => {
    try {
      const parsed = new URL(url);
      return parsed.origin === origin && !isNonWebDocument(parsed);
    } catch {
      return false;
    }
  });
}

/**
 * Randomly sample up to maxCount items from an array using a Fisher-Yates shuffle.
 * Each call produces a non-deterministic result; a different random subset is
 * returned each time even for identical inputs.
 * @param {string[]} items
 * @param {number} maxCount
 * @returns {string[]}
 */
export function randomSample(items, maxCount) {
  if (items.length <= maxCount) return [...items];

  // Fisher-Yates shuffle on a copy
  const shuffled = [...items];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, maxCount);
}

/**
 * Fetch and parse a sitemap at the given URL.
 * Returns an empty array on any error (network, parse, etc.).
 * @param {string} sitemapUrl
 * @param {number} timeout
 * @returns {Promise<string[]>}
 */
async function fetchOneSitemap(sitemapUrl, timeout) {
  try {
    const response = await fetch(sitemapUrl, {
      headers: CRAWL_HEADERS,
      signal: createTimeoutSignal(timeout)
    });
    if (!response.ok) return [];
    const xml = await response.text();
    const { urls } = parseSitemapXml(xml);
    return urls;
  } catch {
    return [];
  }
}

/**
 * Fetch URLs from a site's sitemap.xml.
 * Handles sitemap index files by fetching up to 3 sub-sitemaps.
 * Returns an empty array if the sitemap is not found or an error occurs.
 *
 * @param {string} baseUrl - The base URL of the site (origin used to locate sitemap.xml)
 * @param {number} timeout - Request timeout in milliseconds
 * @returns {Promise<string[]>} Array of URLs found in the sitemap
 */
export async function fetchSitemapUrls(baseUrl, timeout = DEFAULT_CRAWL_TIMEOUT) {
  let origin;
  try {
    origin = new URL(baseUrl).origin;
  } catch {
    return [];
  }
  const sitemapUrl = `${origin}/sitemap.xml`;
  console.error(`[crawl] Fetching sitemap: ${sitemapUrl}`);

  try {
    const response = await fetch(sitemapUrl, {
      headers: CRAWL_HEADERS,
      signal: createTimeoutSignal(timeout)
    });

    if (!response.ok) {
      console.error(`[crawl] Sitemap not found (${response.status}): ${sitemapUrl}`);
      return [];
    }

    const xml = await response.text();
    const { urls, isSitemapIndex } = parseSitemapXml(xml);

    if (isSitemapIndex && urls.length > 0) {
      console.error(`[crawl] Found sitemap index with ${urls.length} sub-sitemaps`);
      const allUrls = [];
      // Fetch sub-sitemaps (limit to first 3 to avoid excessive requests)
      for (const subSitemapUrl of urls.slice(0, 3)) {
        const subUrls = await fetchOneSitemap(subSitemapUrl, timeout);
        allUrls.push(...subUrls);
        if (allUrls.length >= MAX_SITEMAP_URLS) break;
      }
      console.error(`[crawl] Found ${allUrls.length} URLs across sub-sitemaps`);
      return allUrls;
    }

    console.error(`[crawl] Found ${urls.length} URLs in sitemap`);
    return urls;
  } catch (err) {
    console.error(`[crawl] Error fetching sitemap: ${err.message}`);
    return [];
  }
}

/**
 * Parse sitemap URLs from a robots.txt body.
 * Extracts all "Sitemap: <url>" directives (case-insensitive).
 * @param {string} robotsTxt - The robots.txt content
 * @returns {string[]} Array of sitemap URLs found
 */
export function parseRobotsForSitemaps(robotsTxt) {
  const urls = [];
  const pattern = /^sitemap:\s*(https?:\/\/\S+)/gim;
  let match;
  while ((match = pattern.exec(robotsTxt)) !== null) {
    urls.push(match[1]);
  }
  return urls;
}

/**
 * Fetch and parse robots.txt to discover sitemap URLs.
 * Returns an empty array if robots.txt is not found or has no sitemap directives.
 *
 * @param {string} baseUrl - The base URL of the site
 * @param {number} timeout - Request timeout in milliseconds
 * @returns {Promise<string[]>} Sitemap URLs found in robots.txt
 */
export async function fetchRobotsSitemaps(baseUrl, timeout = DEFAULT_CRAWL_TIMEOUT) {
  let origin;
  try {
    origin = new URL(baseUrl).origin;
  } catch {
    return [];
  }
  const robotsUrl = `${origin}/robots.txt`;
  console.error(`[crawl] Checking robots.txt for sitemaps: ${robotsUrl}`);

  try {
    const response = await fetch(robotsUrl, {
      headers: CRAWL_HEADERS,
      signal: createTimeoutSignal(timeout)
    });
    if (!response.ok) {
      console.error(`[crawl] robots.txt not found (${response.status})`);
      return [];
    }
    const text = await response.text();
    const sitemapUrls = parseRobotsForSitemaps(text);
    console.error(`[crawl] Found ${sitemapUrls.length} sitemap(s) in robots.txt`);
    return sitemapUrls;
  } catch (err) {
    console.error(`[crawl] Error fetching robots.txt: ${err.message}`);
    return [];
  }
}

/**
 * Fetch a page's HTML and extract same-origin anchor links.
 * Returns an empty array on any error.
 *
 * @param {string} url - The URL to fetch
 * @param {number} timeout - Request timeout in milliseconds
 * @returns {Promise<string[]>} Array of same-origin URLs found on the page
 */
export async function crawlPageLinks(url, timeout = DEFAULT_CRAWL_TIMEOUT) {
  console.error(`[crawl] Crawling page for links: ${url}`);
  let origin;
  try {
    origin = new URL(url).origin;
  } catch {
    return [];
  }

  try {
    const response = await fetch(url, {
      headers: CRAWL_HEADERS,
      signal: createTimeoutSignal(timeout)
    });

    if (!response.ok) {
      console.error(`[crawl] Page not accessible (${response.status}): ${url}`);
      return [];
    }

    const html = await response.text();

    // Extract href values from anchor tags.
    // The leading [^"'#] intentionally excludes pure fragment anchors (href="#section")
    // which would resolve to the current page URL and add noise to the URL list.
    const hrefPattern = /href=["']([^"'#][^"']*?)["']/gi;
    const seen = new Set();
    let match;

    while ((match = hrefPattern.exec(html)) !== null) {
      try {
        const parsed = new URL(match[1], url);
        parsed.hash = "";
        const normalized = parsed.toString();
        if (
          parsed.origin === origin &&
          !isNonWebDocument(parsed) &&
          !seen.has(normalized)
        ) {
          seen.add(normalized);
        }
      } catch {
        // Ignore invalid URLs
      }
    }

    const result = [...seen];
    console.error(`[crawl] Found ${result.length} same-origin links on page`);
    return result;
  } catch (err) {
    console.error(`[crawl] Error crawling page: ${err.message}`);
    return [];
  }
}

/**
 * Crawl a site for URLs to scan.
 * Strategy:
 *   1. Try fetching {origin}/sitemap.xml — use a random sample if found.
 *   2. Try sitemaps listed in {origin}/robots.txt — use the first one that yields URLs.
 *   3. Fall back to extracting anchor links from the homepage.
 * Always includes the base URL itself as the first entry.
 *
 * @param {string} baseUrl - The base URL of the site to crawl
 * @param {number} maxUrls - Maximum number of URLs to return (default: 20)
 * @param {number} timeout - HTTP request timeout in milliseconds
 * @returns {Promise<string[]>} Array of discovered URLs
 */
export async function crawlSiteForUrls(baseUrl, maxUrls = DEFAULT_MAX_URLS, timeout = DEFAULT_CRAWL_TIMEOUT) {
  console.error(`[crawl] Starting crawl for ${baseUrl} (max ${maxUrls} URLs)`);

  // Step 1: Try sitemap.xml
  const sitemapUrls = await fetchSitemapUrls(baseUrl, timeout);
  if (sitemapUrls.length > 0) {
    const filtered = filterSameOriginUrls(sitemapUrls, baseUrl);
    console.error(`[crawl] Sitemap: ${filtered.length} same-origin HTML URLs after filtering`);

    if (filtered.length > 0) {
      // Ensure base URL is included; sample remaining slots from the rest
      const others = filtered.filter((u) => u !== baseUrl);
      const sampled = randomSample(others, maxUrls - 1);
      const result = [baseUrl, ...sampled].slice(0, maxUrls);
      console.error(`[crawl] Selected ${result.length} URLs from sitemap`);
      return result;
    }
  }

  // Step 2: Try sitemaps listed in robots.txt
  console.error(`[crawl] Trying robots.txt for sitemap discovery`);
  const robotsSitemaps = await fetchRobotsSitemaps(baseUrl, timeout);
  for (const robotsSitemapUrl of robotsSitemaps) {
    const urls = await fetchOneSitemap(robotsSitemapUrl, timeout);
    if (urls.length > 0) {
      const filtered = filterSameOriginUrls(urls, baseUrl);
      console.error(`[crawl] robots.txt sitemap ${robotsSitemapUrl}: ${filtered.length} same-origin URLs`);
      if (filtered.length > 0) {
        const others = filtered.filter((u) => u !== baseUrl);
        const sampled = randomSample(others, maxUrls - 1);
        const result = [baseUrl, ...sampled].slice(0, maxUrls);
        console.error(`[crawl] Selected ${result.length} URLs from robots.txt sitemap`);
        return result;
      }
    }
  }

  // Step 3: Fall back to crawling the homepage for links
  console.error(`[crawl] Falling back to page crawl`);
  const pageUrls = await crawlPageLinks(baseUrl, timeout);

  const others = pageUrls.filter((u) => u !== baseUrl);
  const sampled = randomSample(others, maxUrls - 1);
  const result = [baseUrl, ...sampled].slice(0, maxUrls);
  console.error(`[crawl] Final URL list: ${result.length} URLs`);
  return result;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const baseUrl = process.argv[2];
  const maxUrls = parseInt(process.argv[3] || "20", 10);
  if (!baseUrl) {
    console.error("Usage: node scanner/crawl-urls.mjs <base-url> [max-urls]");
    process.exitCode = 1;
  } else {
    const urls = await crawlSiteForUrls(baseUrl, maxUrls);
    process.stdout.write(JSON.stringify(urls, null, 2) + "\n");
  }
}
