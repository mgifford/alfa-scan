import { readFileSync } from "node:fs";
import { randomUUID } from "node:crypto";

const schemaPath = new URL("./schemas/scan-request.schema.json", import.meta.url);
const scanRequestSchema = JSON.parse(readFileSync(schemaPath, "utf8"));

/**
 * The non-axe engines available for random selection when no engines are specified.
 * axe is always included in the default selection; one of these is chosen at random.
 */
export const NON_AXE_ENGINES = ["alfa", "equalaccess", "accesslint", "qualweb"];

/** All valid engine names accepted by the scanner (including the "all" alias). */
const KNOWN_ENGINES = new Set(["axe", "alfa", "equalaccess", "accesslint", "qualweb", "all"]);

/**
 * Returns the default engines to use when none are specified:
 * always axe plus one randomly selected engine from NON_AXE_ENGINES.
 * @returns {string[]} Array of two engine names
 */
export function getDefaultEngines() {
  const randomIndex = Math.floor(Math.random() * NON_AXE_ENGINES.length);
  return ["axe", NON_AXE_ENGINES[randomIndex]];
}

/**
 * Parse engine names from an "Engine: ..." line at the start of an issue body,
 * or from an "### Accessibility engines" section rendered by the issue form template.
 * @param {string} body - The issue body text
 * @returns {string[]|null} Array of valid engine names, or null if not found
 */
function extractBodyEngines(body) {
  if (!body) return null;

  // Check for "Engine: ..." on the first line (manually written issues)
  const firstLine = body.split("\n")[0].trim();
  const match = firstLine.match(/^Engine:\s*(.+)$/i);
  if (match) {
    const engineList = match[1]
      .split(/[\s,]+/)
      .map((e) => e.trim().toLowerCase())
      .filter((e) => Boolean(e) && KNOWN_ENGINES.has(e));
    if (engineList.length > 0) return engineList;
  }

  // Check for the "Accessibility engines" section rendered by the issue form template.
  // GitHub renders the dropdown selection as the section content (e.g. "ALL" or "axe").
  const engineSection = extractSection(body, "Accessibility engines");
  if (engineSection) {
    const engineList = engineSection
      .split(/[\s,]+/)
      .map((e) => e.trim().toLowerCase())
      .filter((e) => Boolean(e) && KNOWN_ENGINES.has(e));
    if (engineList.length > 0) return engineList;
  }

  return null;
}

function splitUrls(rawText) {
  return rawText
    .split(/[\n,]/g)
    .map((value) => value.trim().replace(/^[-*+]\s+/, ""))
    .filter(Boolean);
}

/**
 * Extract URLs from HTML anchor href attributes, e.g. <a href="https://example.com">.
 * @param {string} text - Text potentially containing HTML anchor tags
 * @returns {string[]} Array of URLs found in href attributes
 */
function extractHrefUrls(text) {
  const urls = [];
  const pattern = /href=["']([^"']+)["']/g;
  let match;
  while ((match = pattern.exec(text)) !== null) {
    urls.push(match[1]);
  }
  return urls;
}

/**
 * Extract URLs from Markdown link syntax [text](URL).
 * @param {string} text - Text potentially containing Markdown links
 * @returns {string[]} Array of URLs found in Markdown links
 */
function extractMarkdownLinkUrls(text) {
  const urls = [];
  const pattern = /\[[^\]]*\]\(([^)\s"]+)(?:\s+"[^"]*")?\)/g;
  let match;
  while ((match = pattern.exec(text)) !== null) {
    urls.push(match[1]);
  }
  return urls;
}

/**
 * Unwrap a Google search wrapper URL to extract the actual target URL.
 * Handles: https://www.google.com/search?q=https://example.com
 * @param {string} url - Potentially a Google wrapper URL
 * @returns {string} The actual URL, or the original if not a Google wrapper
 */
function unwrapGoogleUrl(url) {
  try {
    const parsed = new URL(url);
    if (
      (parsed.hostname === "www.google.com" || parsed.hostname === "google.com") &&
      parsed.pathname === "/search"
    ) {
      const q = parsed.searchParams.get("q");
      if (q && (q.startsWith("http://") || q.startsWith("https://"))) {
        return q;
      }
    }
  } catch {
    // Not a valid URL — return unchanged
  }
  return url;
}

function extractSection(body, sectionName) {
  const sectionPattern = new RegExp(`(?:^|\\n)#{1,6}\\s*${sectionName}\\s*\\n([\\s\\S]*?)(?=\\n#{1,6}\\s|$)`, "i");
  const match = body.match(sectionPattern);
  return match ? match[1].trim() : "";
}

/**
 * Parse a page/URL count from a text like "Page: 50" or "Pages: 20".
 * Used when the issue body specifies how many URLs to discover via crawling.
 * @param {string} text - Text to search (typically the URLs section content)
 * @param {number} defaultCount - Default count if not found
 * @returns {number}
 */
export function extractPageCount(text, defaultCount = 20) {
  if (!text) return defaultCount;
  const match = text.match(/\bpages?:\s*(\d+)/i);
  if (match) {
    const count = parseInt(match[1], 10);
    if (count >= 1 && count <= 500) return count;
  }
  return defaultCount;
}

function extractScanTitle(issueTitle) {
  const title = issueTitle ?? "";
  const match = title.match(/^\s*(SCAN|WEEKLY|MONTHLY|QUARTERLY|MONDAYS?|TUESDAYS?|WEDNESDAYS?|THURSDAYS?|FRIDAYS?|SATURDAYS?|SUNDAYS?):\s*(.+?)\s*$/i);
  if (!match || !match[2]) {
    return {
      isScanIssue: false,
      isTimedIssue: false,
      isRunnableIssue: false,
      triggerType: "none",
      scanTitle: "",
      engines: ["all"]
    };
  }

  const normalizedPrefix = match[1].toUpperCase();
  const isScanIssue = normalizedPrefix === "SCAN";
  const remainingTitle = match[2].trim();
  
  // Extract engine specifications from the title
  // Look for engine keywords: AXE, ALFA, ACCESSLINT, EQUALACCESS, QUALWEB, ALL
  const engineKeywords = ["AXE", "ALFA", "ACCESSLINT", "EQUALACCESS", "QUALWEB", "ALL"];
  const foundEngines = [];
  let scanTitle = remainingTitle;
  
  // Check for engine keywords in the title
  for (const keyword of engineKeywords) {
    const regex = new RegExp(`\\b${keyword}\\b`, "i");
    if (regex.test(scanTitle)) {
      foundEngines.push(keyword.toLowerCase());
      // Remove the keyword from the title
      scanTitle = scanTitle.replace(regex, "").trim();
    }
  }

  // Extract TIME:N delay specification from the title (e.g. "TIME:5" = 5 second delay)
  // Default delay is 2 seconds to allow slow-loading pages to fully render
  const DEFAULT_PAGE_LOAD_DELAY = 2;
  let pageLoadDelay = DEFAULT_PAGE_LOAD_DELAY;
  const timeMatch = scanTitle.match(/\bTIME:(\d+)\b/i);
  if (timeMatch) {
    const requestedSeconds = parseInt(timeMatch[1], 10);
    pageLoadDelay = Math.min(Math.max(requestedSeconds, 0), 300);
    scanTitle = scanTitle.replace(/\bTIME:\d+\b/i, "").trim();
  }
  
  // Clean up extra whitespace
  scanTitle = scanTitle.replace(/\s+/g, " ").trim();
  
  // Return engines found in the title, or empty array if none — caller resolves the default
  const engines = [...foundEngines];

  return {
    isScanIssue,
    isTimedIssue: !isScanIssue,
    isRunnableIssue: true,
    triggerType: normalizedPrefix,
    scanTitle,
    engines,
    pageLoadDelay
  };
}

export function parseScanIssue(issueEvent) {
  if (!issueEvent?.issue) {
    return {
      ok: false,
      errors: ["Missing issue payload."],
      value: null
    };
  }

  const issue = issueEvent.issue;
  const body = issue.body ?? "";
  const issueTitle = issue.title ?? "";
  const titleInfo = extractScanTitle(issueTitle);
  const urlsSection = extractSection(body, "URLs");
  
  // Collect candidate URLs from all text formats present in the body,
  // then unwrap Google search wrappers and deduplicate (preserving order).
  const isHttpUrl = (v) => v.startsWith("http://") || v.startsWith("https://");
  const plainBodyUrls = splitUrls(body).filter(isHttpUrl);
  const hrefBodyUrls = extractHrefUrls(body).filter(isHttpUrl);
  const mdLinkBodyUrls = extractMarkdownLinkUrls(body).filter(isHttpUrl);
  const seenBody = new Set();
  const fallbackUrls = [];
  for (const raw of [...plainBodyUrls, ...hrefBodyUrls, ...mdLinkBodyUrls]) {
    const url = unwrapGoogleUrl(raw);
    if (!seenBody.has(url)) {
      seenBody.add(url);
      fallbackUrls.push(url);
    }
  }

  // Prefer the explicit # URLs section when it has content; otherwise use the full-body fallback.
  const urlsSectionItems = splitUrls(urlsSection);
  const urlsSectionCandidates = urlsSectionItems.length > 0
    ? urlsSectionItems
    : fallbackUrls;
  const seen = new Set();
  const requestedUrls = [];
  for (const raw of urlsSectionCandidates) {
    const url = unwrapGoogleUrl(raw);
    if (!seen.has(url)) {
      seen.add(url);
      requestedUrls.push(url);
    }
  }

  // Determine if crawl mode is needed.
  // This occurs when the scan title is itself a valid URL (e.g. "SCAN: https://example.com/")
  // and no valid HTTP/HTTPS URLs were found in the issue body.
  // In crawl mode, the scanner will discover URLs via sitemap.xml or page crawl before scanning.
  const scanTitleIsUrl = validateUriLike(titleInfo.scanTitle);
  const hasValidBodyUrls = requestedUrls.some((v) => validateUriLike(v));
  const needsCrawl = scanTitleIsUrl && !hasValidBodyUrls;

  let crawlBaseUrl = null;
  let crawlPageCount = null;
  let finalRequestedUrls = requestedUrls;

  if (needsCrawl) {
    crawlBaseUrl = titleInfo.scanTitle;
    crawlPageCount = extractPageCount(urlsSection);
    // Use the base URL as the sole requested URL so schema validation passes.
    // run-scan.mjs will replace this list with the crawled URLs before scanning.
    finalRequestedUrls = [crawlBaseUrl];
  }

  // Engine selection priority: body "Engine:" line > title keywords > default (axe + random)
  const bodyEngines = extractBodyEngines(body);
  const titleEngines = titleInfo.engines;
  const engines = bodyEngines ?? (titleEngines.length > 0 ? titleEngines : getDefaultEngines());

  const requestId = `${issue.number}-${randomUUID()}`;
  const request = {
    requestId,
    issueNumber: issue.number,
    issueUrl: issue.html_url,
    submittedBy: issue.user?.login ?? "unknown",
    submittedAt: issue.created_at ?? new Date().toISOString(),
    requestLabel: extractSection(body, "Request Label") || "scan-request",
    issueTitle,
    scanTitle: titleInfo.scanTitle,
    requestedUrls: finalRequestedUrls,
    engines,
    pageLoadDelay: titleInfo.pageLoadDelay ?? 2
  };

  const validation = validateScanRequest(request);
  return {
    ok: validation.ok,
    errors: validation.errors,
    value: validation.ok ? request : null,
    isScanIssue: titleInfo.isScanIssue,
    isTimedIssue: titleInfo.isTimedIssue,
    isRunnableIssue: titleInfo.isRunnableIssue,
    triggerType: titleInfo.triggerType,
    engines,
    pageLoadDelay: titleInfo.pageLoadDelay ?? 2,
    needsCrawl,
    crawlBaseUrl,
    crawlPageCount
  };
}

function validateUriLike(value) {
  try {
    const parsed = new URL(value);
    return ["http:", "https:"].includes(parsed.protocol);
  } catch {
    return false;
  }
}

export function validateScanRequest(candidate) {
  const errors = [];

  for (const key of scanRequestSchema.required) {
    if (candidate[key] === undefined || candidate[key] === null || candidate[key] === "") {
      errors.push(`Missing required field: ${key}`);
    }
  }

  if (candidate.issueNumber !== undefined && (!Number.isInteger(candidate.issueNumber) || candidate.issueNumber < 1)) {
    errors.push("issueNumber must be an integer >= 1");
  }

  if (candidate.issueUrl && !validateUriLike(candidate.issueUrl)) {
    errors.push("issueUrl must be a valid http/https URL");
  }

  if (!Array.isArray(candidate.requestedUrls)) {
    errors.push("requestedUrls must be an array");
  } else {
    if (candidate.requestedUrls.length < 1 || candidate.requestedUrls.length > 500) {
      errors.push("requestedUrls must contain between 1 and 500 URLs");
    }

    candidate.requestedUrls.forEach((value, index) => {
      if (!validateUriLike(value)) {
        errors.push(`requestedUrls[${index}] is not a valid http/https URL`);
      }
    });
  }

  const knownKeys = new Set(Object.keys(scanRequestSchema.properties));
  for (const key of Object.keys(candidate)) {
    if (!knownKeys.has(key)) {
      errors.push(`Unexpected field: ${key}`);
    }
  }

  return {
    ok: errors.length === 0,
    errors
  };
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const samplePath = process.argv[2];
  if (!samplePath) {
    console.error("Usage: node scanner/parse-issue.mjs <issue-event-json-file>");
    process.exitCode = 1;
  } else {
    const payload = JSON.parse(readFileSync(samplePath, "utf8"));
    const result = parseScanIssue(payload);
    process.stdout.write(JSON.stringify(result, null, 2));
  }
}