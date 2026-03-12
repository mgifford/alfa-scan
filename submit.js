/**
 * URL submission form handler for alfa-scan
 * Parses URLs, validates them, and creates GitHub issues for scanning
 */

// Regex to match any case variation of "scan:" prefix with zero or more spaces
// Intentionally uses \s* to handle spaces, tabs, and other whitespace that users might accidentally include
const SCAN_PREFIX_REGEX = /^scan:\s*/i;

// Maximum GitHub URL length to avoid "URL too long" errors
// GitHub's server rejects URLs that exceed ~8192 characters; 8000 provides a safe margin
const MAX_GITHUB_URL_LENGTH = 8000;

// File extensions that indicate non-web documents which cannot be accessibility-scanned
const NON_WEB_EXTENSIONS = new Set([
  // Documents
  "pdf", "doc", "docx", "xls", "xlsx", "ppt", "pptx",
  "odt", "ods", "odp", "rtf", "txt", "csv",
  // Images
  "jpg", "jpeg", "png", "gif", "bmp", "svg", "ico", "webp", "tiff", "tif", "avif",
  // Audio
  "mp3", "wav", "ogg", "flac", "aac", "m4a",
  // Video
  "mp4", "avi", "mov", "wmv", "mkv", "webm", "flv",
  // Archives
  "zip", "tar", "gz", "bz2", "rar", "7z",
  // Executables / packages
  "exe", "dmg", "pkg", "msi", "apk", "deb", "rpm",
  // E-books
  "epub", "mobi", "azw", "azw3", "fb2", "lit",
  // Data / code (not HTML pages)
  "json", "xml", "yaml", "yml", "rss", "atom",
  // Fonts
  "ttf", "otf", "woff", "woff2", "eot"
]);

// Check if URL points to a non-web document that cannot be accessibility-scanned
function isNonWebDocument(url) {
  const path = url.pathname.toLowerCase();
  const lastSegment = path.split("/").pop() || "";
  const dotIndex = lastSegment.lastIndexOf(".");
  if (dotIndex === -1) return false;
  const ext = lastSegment.slice(dotIndex + 1);
  return NON_WEB_EXTENSIONS.has(ext);
}

// Parse URLs from text input (supports line-by-line and CSV formats)
export function parseUrls(rawText) {
  return rawText
    .split(/[\n,]/g)
    .map((value) => value.trim())
    .filter(Boolean)
    .filter((value) => value.startsWith("http://") || value.startsWith("https://"));
}

// Validate URL syntax
export function isValidUrl(urlString) {
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
export function validateUrl(urlString) {
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

  // Check for non-web document file types
  if (isNonWebDocument(url)) {
    return { valid: false, reason: "Non-web document URLs cannot be accessibility-scanned (e.g. PDFs, images, videos)" };
  }

  return { valid: true, reason: "" };
}

// Validate all URLs and separate into accepted/rejected
export function validateUrls(urls) {
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
export function formatIssueBody(scanTitle, urls) {
  return `# URLs

${urls.join("\n")}
`;
}

// Extract GitHub owner and repo from the current GitHub Pages URL.
// Returns null if the current page is not a GitHub Pages URL.
function getGitHubRepoInfo() {
  const hostname = window.location.hostname;
  const pathname = window.location.pathname;
  const pagesMatch = hostname.match(/^(.+)\.github\.io$/);
  if (!pagesMatch) return null;
  const owner = pagesMatch[1];
  // Extract repo name from pathname (e.g., /open-scans/ -> open-scans)
  // Fallback to "open-scans" matches the deployed GitHub Pages URL path for this project
  const pathMatch = pathname.match(/^\/([^/]+)/);
  const repo = pathMatch ? pathMatch[1] : "open-scans";
  return { owner, repo };
}

// Apply GitHub URL length limit to pre-validated accepted URLs.
// Returns { fitting, tooLong } where tooLong items have { url, reason }.
// URLs are accepted greedily in order; once adding the next URL would exceed
// MAX_GITHUB_URL_LENGTH, it and all remaining URLs go into tooLong.
export function applyGitHubUrlLimit(accepted, owner, repo, scanTitle) {
  const issueTitle = `SCAN: ${scanTitle.replace(SCAN_PREFIX_REGEX, "")}`;
  const encodedTitle = encodeURIComponent(issueTitle);
  const baseUrl = `https://github.com/${owner}/${repo}/issues/new?title=${encodedTitle}&body=`;
  const bodyPrefix = encodeURIComponent("# URLs\n\n");

  let currentLength = baseUrl.length + bodyPrefix.length;
  const fitting = [];
  const tooLong = [];

  for (const url of accepted) {
    const encodedUrl = encodeURIComponent(`${url}\n`);
    if (currentLength + encodedUrl.length <= MAX_GITHUB_URL_LENGTH) {
      fitting.push(url);
      currentLength += encodedUrl.length;
    } else {
      tooLong.push({ url, reason: "URL too long for GitHub issue creation" });
    }
  }

  return { fitting, tooLong };
}

// Create GitHub issue via authenticated API call
export async function createGitHubIssue(scanTitle, urls) {
  const repoInfo = getGitHubRepoInfo();
  if (!repoInfo) {
    throw new Error("Could not determine GitHub repository from URL");
  }
  const { owner, repo } = repoInfo;

  // For GitHub Pages, we need to handle authentication differently
  // Since we can't make authenticated API calls from client-side JavaScript,
  // we'll redirect to GitHub's issue creation URL with pre-filled data

  // Prepend "SCAN: " and normalize any existing prefix (case-insensitive)
  // replace() returns the original string if pattern doesn't match
  const issueTitle = `SCAN: ${scanTitle.replace(SCAN_PREFIX_REGEX, "")}`;
  const issueBody = formatIssueBody(scanTitle, urls);

  // Encode the issue title and body for URL
  const encodedTitle = encodeURIComponent(issueTitle);
  const encodedBody = encodeURIComponent(issueBody);

  // Construct GitHub issue creation URL
  const githubUrl = `https://github.com/${owner}/${repo}/issues/new?title=${encodedTitle}&body=${encodedBody}`;

  return githubUrl;
}

// Initialize form
function initForm() {
  const form = document.getElementById("scan-form");
  const urlsTextarea = document.getElementById("urls");
  const previewDiv = document.getElementById("preview");
  const urlCountDiv = document.getElementById("url-count");
  const urlListDiv = document.getElementById("url-list");
  const submitButton = document.getElementById("submit-button");
  const loadingDiv = document.getElementById("loading");
  const errorDiv = document.getElementById("error-message");
  const successDiv = document.getElementById("success-message");

  // Update preview on input
  urlsTextarea.addEventListener("input", () => {
    const rawText = urlsTextarea.value;
    const urls = parseUrls(rawText);
    
    if (urls.length === 0) {
      previewDiv.classList.remove("visible");
      submitButton.disabled = false;
      return;
    }

    const { accepted: validUrls, rejected } = validateUrls(urls);

    // Apply GitHub URL length limit
    const scanTitle = document.getElementById("scan-title").value.trim() || "Scan";
    const repoInfo = getGitHubRepoInfo();
    let accepted = validUrls;
    let urlsTooLong = [];
    if (repoInfo) {
      const result = applyGitHubUrlLimit(validUrls, repoInfo.owner, repoInfo.repo, scanTitle);
      accepted = result.fitting;
      urlsTooLong = result.tooLong;
    }

    const total = urls.length;

    // Show preview
    previewDiv.classList.add("visible");

    // Build count message
    let countText = `Total: ${total} URLs (${accepted.length} accepted`;
    if (urlsTooLong.length > 0 && rejected.length === 0) {
      countText += `, ${urlsTooLong.length} rejected — URL${urlsTooLong.length === 1 ? "" : "s"} too long for GitHub`;
    } else if (urlsTooLong.length > 0) {
      countText += `, ${rejected.length} rejected, ${urlsTooLong.length} URL${urlsTooLong.length === 1 ? "" : "s"} too long for GitHub`;
    } else if (rejected.length > 0) {
      countText += `, ${rejected.length} rejected`;
    }
    countText += ")";
    urlCountDiv.textContent = countText;
    
    if (accepted.length === 0) {
      urlCountDiv.className = "url-count invalid";
      submitButton.disabled = true;
    } else if (accepted.length > 500) {
      urlCountDiv.className = "url-count invalid";
      urlCountDiv.textContent += " — Maximum 500 URLs allowed";
      submitButton.disabled = true;
    } else {
      urlCountDiv.className = "url-count valid";
      submitButton.disabled = false;
    }

    // Update URL list
    urlListDiv.innerHTML = "";
    
    // Show accepted URLs
    for (const url of accepted) {
      const div = document.createElement("div");
      div.className = "url-item accepted";
      div.textContent = `✓ ${url}`;
      urlListDiv.appendChild(div);
    }
    
    // Show rejected URLs (validation failures)
    for (const { url, reason } of rejected) {
      const div = document.createElement("div");
      div.className = "url-item rejected";
      div.innerHTML = `✗ ${url}<div class="reason">${reason}</div>`;
      urlListDiv.appendChild(div);
    }

    // Show URLs rejected due to GitHub URL length limit
    for (const { url, reason } of urlsTooLong) {
      const div = document.createElement("div");
      div.className = "url-item rejected";
      div.innerHTML = `✗ ${url}<div class="reason">${reason}</div>`;
      urlListDiv.appendChild(div);
    }
  });

  // Handle form submission
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Hide previous messages
    errorDiv.classList.remove("visible");
    successDiv.classList.remove("visible");

    const scanTitle = document.getElementById("scan-title").value.trim();
    const rawText = urlsTextarea.value;
    const urls = parseUrls(rawText);
    const { accepted: validUrls } = validateUrls(urls);

    // Apply GitHub URL length limit so the generated URL doesn't exceed GitHub's limit
    const repoInfo = getGitHubRepoInfo();
    const accepted = (repoInfo && validUrls.length > 0)
      ? applyGitHubUrlLimit(validUrls, repoInfo.owner, repoInfo.repo, scanTitle).fitting
      : validUrls;

    // Validate
    if (accepted.length === 0) {
      errorDiv.textContent = "No valid URLs to scan. Please enter at least one public HTTP/HTTPS URL.";
      errorDiv.classList.add("visible");
      return;
    }

    if (accepted.length > 500) {
      errorDiv.textContent = `Too many URLs. Maximum 500 URLs allowed, but ${accepted.length} were provided.`;
      errorDiv.classList.add("visible");
      return;
    }

    // Show loading state
    submitButton.disabled = true;
    loadingDiv.classList.add("visible");

    try {
      // Create GitHub issue URL
      const githubUrl = await createGitHubIssue(scanTitle, accepted);
      
      // Show success message with redirect info
      successDiv.innerHTML = `
        <p>Redirecting to GitHub to create your scan request...</p>
        <p>You will be able to review and submit the issue with title: <strong>SCAN: ${scanTitle}</strong></p>
        <p>If you are not redirected, <a href="${githubUrl}" target="_blank">click here</a>.</p>
      `;
      successDiv.classList.add("visible");
      
      // Redirect to GitHub after a short delay
      setTimeout(() => {
        window.location.href = githubUrl;
      }, 2000);
      
    } catch (error) {
      console.error("Error creating scan request:", error);
      errorDiv.textContent = `Error: ${error.message}`;
      errorDiv.classList.add("visible");
      submitButton.disabled = false;
      loadingDiv.classList.remove("visible");
    }
  });
}

// Initialize when DOM is ready (only in browser, not during testing)
if (typeof document !== 'undefined') {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initForm);
  } else {
    initForm();
  }
}
