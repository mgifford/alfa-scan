/**
 * URL submission form handler for alfa-scan
 * Parses URLs, validates them, and creates GitHub issues for scanning
 */

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

// Create GitHub issue via authenticated API call
export async function createGitHubIssue(scanTitle, urls) {
  // Extract repository info from current page
  // For GitHub Pages URLs like username.github.io/repo-name/
  const hostname = window.location.hostname;
  const pathname = window.location.pathname;
  
  let owner, repo;
  
  // Check if it's a GitHub Pages URL
  const pagesMatch = hostname.match(/^(.+)\.github\.io$/);
  if (pagesMatch) {
    owner = pagesMatch[1];
    // Extract repo name from pathname (e.g., /alfa-scan/ -> alfa-scan)
    const pathMatch = pathname.match(/^\/([^\/]+)/);
    repo = pathMatch ? pathMatch[1] : "alfa-scan"; // fallback to alfa-scan
  } else {
    throw new Error("Could not determine GitHub repository from URL");
  }
  
  // For GitHub Pages, we need to handle authentication differently
  // Since we can't make authenticated API calls from client-side JavaScript,
  // we'll redirect to GitHub's issue creation URL with pre-filled data
  
  // Prepend "SCAN: " if not already present (case-insensitive check)
  // Normalize any existing prefix to "SCAN: " for consistency
  const issueTitle = scanTitle.toLowerCase().startsWith('scan: ') 
    ? `SCAN: ${scanTitle.replace(/^scan:\s*/i, '')}` 
    : `SCAN: ${scanTitle}`;
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

    const { accepted, rejected } = validateUrls(urls);
    const total = accepted.length + rejected.length;

    // Show preview
    previewDiv.classList.add("visible");

    // Update count
    urlCountDiv.textContent = `Total: ${total} URLs (${accepted.length} accepted, ${rejected.length} rejected)`;
    
    if (accepted.length === 0) {
      urlCountDiv.className = "url-count invalid";
      submitButton.disabled = true;
    } else if (accepted.length > 500) {
      urlCountDiv.className = "url-count invalid";
      urlCountDiv.textContent += " - Maximum 500 URLs allowed";
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
    
    // Show rejected URLs
    for (const { url, reason } of rejected) {
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
    const { accepted, rejected } = validateUrls(urls);

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
