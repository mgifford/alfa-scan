# Timeout Configuration

This document describes the timeout settings available in the alfa-scan scanner to prevent workflows from exceeding GitHub Actions time limits.

## Overview

The scanner implements multiple layers of timeout protection:

1. **Per-URL timeouts** - Prevent individual problematic pages from blocking the entire scan
2. **Overall scan timeout** - Ensure the entire scan completes within the desired time frame
3. **Component-specific timeouts** - Fine-grained control over different phases of the scan

## Default Timeout Values

All timeouts are configured in milliseconds:

| Setting | Default | Description |
|---------|---------|-------------|
| `FETCH_TIMEOUT_MS` | 30000 (30s) | Maximum time for initial HTTP fetch of a page |
| `PER_URL_TIMEOUT_MS` | 120000 (2min) | Maximum total time per URL (fetch + ALFA + axe) |
| `TOTAL_SCAN_TIMEOUT_MS` | 3000000 (50min) | Maximum total scan time (leaves buffer for report generation) |
| `ALFA_PAGE_TIMEOUT_MS` | 30000 (30s) | ALFA CLI page load timeout |
| `ALFA_COMMAND_TIMEOUT_MS` | 180000 (3min) | ALFA command execution timeout |
| `PLAYWRIGHT_NAV_TIMEOUT_MS` | 30000 (30s) | Playwright page navigation timeout |
| `PLAYWRIGHT_LAUNCH_TIMEOUT_MS` | 30000 (30s) | Playwright browser launch timeout |

## Why These Defaults?

- **50-minute total timeout**: Allows completion within 1 hour GitHub Actions limit with buffer for report generation
- **2-minute per-URL timeout**: Accommodates slow-loading pages while preventing indefinite hangs
- **30-second fetch timeout**: Reasonable time for initial HTTP response
- **Component timeouts**: Match the per-URL timeout budget, allowing graceful failure of individual components

## Customizing Timeouts

### Option 1: Environment Variables in Workflows

Edit `.github/workflows/scan-request.yml` or `.github/workflows/scan-issue-queue.yml`:

```yaml
- name: Run issue scan
  run: |
    mkdir -p .scan-output
    node scanner/run-scan.mjs .tmp/issue-event.json .scan-output > .scan-output/meta.json
  env:
    FETCH_TIMEOUT_MS: "20000"           # 20s for initial HTTP fetch
    PER_URL_TIMEOUT_MS: "90000"         # 1.5min per URL total
    TOTAL_SCAN_TIMEOUT_MS: "2400000"    # 40min total scan time
    ALFA_PAGE_TIMEOUT_MS: "20000"       # 20s ALFA page load
    ALFA_COMMAND_TIMEOUT_MS: "120000"   # 2min ALFA command execution
    PLAYWRIGHT_NAV_TIMEOUT_MS: "20000"  # 20s Playwright navigation
    PLAYWRIGHT_LAUNCH_TIMEOUT_MS: "20000" # 20s Playwright browser launch
```

### Option 2: System Environment Variables

For local testing or custom deployments:

```bash
export FETCH_TIMEOUT_MS=20000
export PER_URL_TIMEOUT_MS=90000
export TOTAL_SCAN_TIMEOUT_MS=2400000
node scanner/run-scan.mjs issue-event.json .scan-output
```

## Timeout Behavior

### Per-URL Timeout

When a URL scan exceeds `PER_URL_TIMEOUT_MS`:
- The scan for that URL is aborted
- An error is recorded in the report
- The scanner continues with the next URL
- Results include error message: "URL scan exceeded Xs timeout"

### Total Scan Timeout

When the total scan time approaches `TOTAL_SCAN_TIMEOUT_MS`:
- Scanning stops before the limit (leaves 5-minute buffer)
- All scanned URLs up to that point are included in the report
- Skipped URLs are counted and reported
- Report includes warning: "X URLs skipped due to timeout"

### Component Timeout Cascade

Timeouts cascade from most specific to most general:

1. Fetch timeout (30s) → aborts HTTP request
2. ALFA page timeout (30s) → aborts ALFA page load
3. ALFA command timeout (3min) → kills ALFA process
4. Playwright navigation timeout (30s) → aborts page navigation
5. Per-URL timeout (2min) → aborts entire URL scan
6. Total scan timeout (50min) → stops scanning additional URLs

## Recommendations

### For Large Scans (100+ URLs)

Consider reducing per-URL timeout to scan more URLs within the time limit:

```yaml
env:
  PER_URL_TIMEOUT_MS: "60000"     # 1min per URL
  TOTAL_SCAN_TIMEOUT_MS: "2700000" # 45min total
```

### For Complex Sites

Increase per-URL timeout for sites with heavy JavaScript:

```yaml
env:
  PER_URL_TIMEOUT_MS: "180000"    # 3min per URL
  PLAYWRIGHT_NAV_TIMEOUT_MS: "60000" # 1min page navigation
```

### For Quick Validation

Reduce timeouts for faster feedback on smaller scans:

```yaml
env:
  FETCH_TIMEOUT_MS: "15000"       # 15s fetch
  PER_URL_TIMEOUT_MS: "60000"     # 1min per URL
  TOTAL_SCAN_TIMEOUT_MS: "1200000" # 20min total
```

## Monitoring Timeout Issues

### In Workflow Output

The scanner logs progress during execution:

```
[1/100] Scanned https://example.com in 1234ms
[2/100] Error scanning https://slow-site.com: URL scan exceeded 120s timeout
...
Approaching total scan timeout limit (50 minutes). Stopping scan.
WARNING: Scan incomplete. 25 URLs were skipped due to timeout.
Total scan time: 49.8min
Successfully scanned: 75/100 URLs
```

### In Reports

Reports include timeout information:

- Scan duration in minutes
- Count of scanned vs. accepted URLs
- Warning banner if URLs were skipped
- Per-URL error messages for timeouts

### In GitHub Comments

Workflow comments on issues include:

```
Scan complete for **Your Site**.

- Accepted URLs: 100
- Scanned URLs: 75
- ⚠️ **25 URLs skipped due to timeout** (scan exceeded time limit)
- Rejected URLs: 0
```

## Troubleshooting

### Scan Consistently Timing Out

1. **Reduce URL count**: Split large scans into multiple smaller issues
2. **Increase timeouts**: Adjust environment variables (but stay under 1 hour total)
3. **Identify slow pages**: Check reports for consistently timing out URLs
4. **Remove problematic URLs**: Exclude sites that consistently fail

### Workflow Exceeds 6 Hours (GitHub Maximum)

This should not happen with proper timeout configuration. If it does:

1. Check that `TOTAL_SCAN_TIMEOUT_MS` is set correctly
2. Verify timeouts are being applied (check workflow logs)
3. Report as a bug - the timeout mechanism may need adjustment

### URLs Timing Out Unnecessarily

If valid URLs are timing out:

1. Increase `PER_URL_TIMEOUT_MS` for complex sites
2. Increase `PLAYWRIGHT_NAV_TIMEOUT_MS` for slow-loading pages
3. Check network connectivity from GitHub Actions runner
4. Verify the site is actually accessible and not blocking automation

## Implementation Details

The timeout mechanism uses multiple strategies:

1. **AbortController** for fetch API calls
2. **Promise.race()** for per-URL timeout enforcement
3. **setTimeout with SIGTERM** for subprocess timeouts
4. **Elapsed time checking** for total scan timeout
5. **Early termination** to preserve partial results

This layered approach ensures graceful failure at any level while maximizing the number of successfully scanned URLs.
