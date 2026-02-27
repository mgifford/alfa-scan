import { readFileSync } from "node:fs";
import { randomUUID } from "node:crypto";

const schemaPath = new URL("./schemas/scan-request.schema.json", import.meta.url);
const scanRequestSchema = JSON.parse(readFileSync(schemaPath, "utf8"));

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
  // Look for engine keywords: AXE, ALFA, ACCESSLINT, EQUALACCESS, ALL
  const engineKeywords = ["AXE", "ALFA", "ACCESSLINT", "EQUALACCESS", "ALL"];
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
  
  // Clean up extra whitespace
  scanTitle = scanTitle.replace(/\s+/g, " ").trim();
  
  // Default to "all" if no engines specified
  const engines = foundEngines.length > 0 ? foundEngines : ["all"];

  return {
    isScanIssue,
    isTimedIssue: !isScanIssue,
    isRunnableIssue: true,
    triggerType: normalizedPrefix,
    scanTitle,
    engines
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
    engines: titleInfo.engines
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
    engines: titleInfo.engines
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