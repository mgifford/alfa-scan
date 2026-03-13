import { readFileSync } from "node:fs";
import { randomUUID } from "node:crypto";

const schemaPath = new URL("./schemas/scan-request.schema.json", import.meta.url);
const scanRequestSchema = JSON.parse(readFileSync(schemaPath, "utf8"));

/**
 * The non-axe engines available for random selection when no engines are specified.
 * axe is always included in the default selection; one of these is chosen at random.
 */
export const NON_AXE_ENGINES = ["alfa", "equalaccess", "accesslint", "qualweb"];

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
 * Parse engine names from an "Engine: ..." line at the start of an issue body.
 * @param {string} body - The issue body text
 * @returns {string[]|null} Array of valid engine names, or null if not found
 */
function extractBodyEngines(body) {
  if (!body) return null;
  const firstLine = body.split("\n")[0].trim();
  const match = firstLine.match(/^Engine:\s*(.+)$/i);
  if (!match) return null;

  const knownEngines = new Set(["axe", "alfa", "equalaccess", "accesslint", "qualweb", "all"]);
  const engineList = match[1]
    .split(/[\s,]+/)
    .map((e) => e.trim().toLowerCase())
    .filter((e) => Boolean(e) && knownEngines.has(e));

  return engineList.length > 0 ? engineList : null;
}

function splitUrls(rawText) {
  return rawText
    .split(/[\n,]/g)
    .map((value) => value.trim())
    .filter(Boolean);
}

function extractSection(body, sectionName) {
  const sectionPattern = new RegExp(`(?:^|\\n)#{1,6}\\s*${sectionName}\\s*\\n([\\s\\S]*?)(?=\\n#{1,6}\\s|$)`, "i");
  const match = body.match(sectionPattern);
  return match ? match[1].trim() : "";
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
  const fallbackUrls = splitUrls(body).filter((value) => value.startsWith("http://") || value.startsWith("https://"));
  const requestedUrls = splitUrls(urlsSection).length > 0 ? splitUrls(urlsSection) : fallbackUrls;

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
    requestedUrls,
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
    pageLoadDelay: titleInfo.pageLoadDelay ?? 2
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