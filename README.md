# alfa-scan

Issue-driven accessibility scanning prototype using GitHub Pages and GitHub Actions.

## What it is

- Accepts URL batches from a GitHub Pages form
- Creates scan-request GitHub issues
- Runs accessibility scans in GitHub Actions
- Publishes comparison-ready results to GitHub Pages

## How to Use

### Submit URLs for Scanning

1. Visit the [GitHub Pages site](https://mgifford.github.io/alfa-scan/)
2. Enter a descriptive scan title (e.g., "GSA.gov Homepage and Key Pages")
3. Enter up to 100 URLs to scan (one per line or comma-separated)
4. Review the validation preview showing accepted/rejected URLs
5. Click "Create Scan Request" to be redirected to GitHub
6. Review and submit the pre-filled issue to start the scan

The form validates URLs in real-time and blocks:
- Localhost URLs
- Private IP addresses (10.x.x.x, 172.16-31.x.x, 192.168.x.x)
- Link-local addresses (169.254.x.x)
- Private IPv6 addresses

### View Scan Results

Visit the [Reports page](https://mgifford.github.io/alfa-scan/reports.html) to see all completed scans with:
- Issue number and scan title
- Scan timestamp
- Number of URLs scanned
- Pass/fail/can't tell statistics
- Links to detailed reports (Markdown, CSV, JSON)

## Scanning Triggers

Scans can be triggered in three ways:

1. **On Issue Creation/Edit**: When an issue with a title starting with "SCAN:" is created or edited, it automatically triggers a scan
2. **Daily Schedule**: All open "SCAN:" issues are automatically scanned daily at midnight UTC
3. **Manual Trigger**: You can manually trigger a scan of all open "SCAN:" issues by:
   - Going to the Actions tab
   - Selecting "Scan Issue Queue" workflow
   - Clicking "Run workflow"

## Current status

- Planning artifacts and work packages are generated under `kitty-specs/001-issue-driven-accessibility-scanner/`
- ✅ WP01 (Foundation and Guardrails) - Complete
- ✅ WP02 (Pages Intake and Issue Submission) - Complete
- 🔄 Next: WP03 (Dual-Scanner Execution Engine)

## Architecture

### Frontend (GitHub Pages)
- **index.html**: URL submission form with real-time validation
- **reports.html**: Scan results dashboard
- **submit.js**: Client-side URL parsing, validation, and GitHub integration

### Backend (GitHub Actions)
- **scanner/parse-issue.mjs**: Extracts URLs from scan request issues
- **scanner/validate-targets.mjs**: Server-side URL validation
- **scanner/run-scan.mjs**: Executes Alfa scans and generates reports

## Next workflow steps

1. ✅ ~~Review WP01~~
2. ✅ ~~Implement WP02~~
3. Implement WP03 (Dual-Scanner Execution Engine)
4. Continue through reporting, hardening, and end-to-end validation WPs