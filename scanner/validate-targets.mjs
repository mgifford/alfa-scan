import { isIP } from "node:net";

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

export function isNonWebDocument(parsedUrl) {
  // Extract the pathname (ignore query string / fragment)
  const path = parsedUrl.pathname.toLowerCase();
  const lastSegment = path.split("/").pop() || "";
  const dotIndex = lastSegment.lastIndexOf(".");
  if (dotIndex === -1) return false;
  const ext = lastSegment.slice(dotIndex + 1);
  return NON_WEB_EXTENSIONS.has(ext);
}

function normalizeUrl(rawUrl) {
  const parsed = new URL(rawUrl);
  parsed.hash = "";
  return parsed;
}

function isPrivateIPv4(hostname) {
  const octets = hostname.split(".").map(Number);
  if (octets.length !== 4 || octets.some((part) => Number.isNaN(part) || part < 0 || part > 255)) {
    return false;
  }

  if (octets[0] === 10) return true;
  if (octets[0] === 127) return true;
  if (octets[0] === 0) return true;
  if (octets[0] === 169 && octets[1] === 254) return true;
  if (octets[0] === 172 && octets[1] >= 16 && octets[1] <= 31) return true;
  if (octets[0] === 192 && octets[1] === 168) return true;
  return false;
}

function isPrivateIPv6(hostname) {
  const value = hostname.toLowerCase();
  if (value === "::1" || value === "::") return true;
  if (value.startsWith("fc") || value.startsWith("fd")) return true;
  if (value.startsWith("fe8") || value.startsWith("fe9") || value.startsWith("fea") || value.startsWith("feb")) {
    return true;
  }
  return false;
}

function reasonForBlockedHost(hostname) {
  const normalized = hostname.toLowerCase();
  const bareHost = normalized.startsWith("[") && normalized.endsWith("]")
    ? normalized.slice(1, -1)
    : normalized;
  if (bareHost === "localhost" || bareHost.endsWith(".localhost")) {
    return "localhost targets are blocked";
  }
  if (bareHost.endsWith(".local")) {
    return "local network hostnames are blocked";
  }

  const ipVersion = isIP(bareHost);
  if (ipVersion === 4 && isPrivateIPv4(bareHost)) {
    return "private/internal IPv4 target is blocked";
  }
  if (ipVersion === 6 && isPrivateIPv6(bareHost)) {
    return "private/internal IPv6 target is blocked";
  }
  return null;
}

export function validateTarget(rawUrl) {
  try {
    const parsed = normalizeUrl(rawUrl);
    if (!["http:", "https:"].includes(parsed.protocol)) {
      return {
        accepted: false,
        reason: "only http/https targets are allowed",
        submittedUrl: rawUrl
      };
    }

    const blockedReason = reasonForBlockedHost(parsed.hostname);
    if (blockedReason) {
      return {
        accepted: false,
        reason: blockedReason,
        submittedUrl: rawUrl,
        normalizedUrl: parsed.toString()
      };
    }

    if (isNonWebDocument(parsed)) {
      return {
        accepted: false,
        reason: "non-web document URLs cannot be accessibility-scanned",
        submittedUrl: rawUrl,
        normalizedUrl: parsed.toString()
      };
    }

    return {
      accepted: true,
      reason: null,
      submittedUrl: rawUrl,
      normalizedUrl: parsed.toString()
    };
  } catch {
    return {
      accepted: false,
      reason: "invalid URL format",
      submittedUrl: rawUrl
    };
  }
}

export function validateTargets(rawUrls) {
  const accepted = [];
  const rejected = [];

  for (const rawUrl of rawUrls) {
    const result = validateTarget(rawUrl);
    if (result.accepted) {
      accepted.push(result);
    } else {
      rejected.push(result);
    }
  }

  return {
    accepted,
    rejected
  };
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const urls = process.argv.slice(2);
  process.stdout.write(JSON.stringify(validateTargets(urls), null, 2));
}