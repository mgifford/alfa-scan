import { isIP } from "node:net";

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