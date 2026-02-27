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

Scans can be triggered in multiple ways:

### 1. Automatic On Issue Creation/Edit

When an issue with a title starting with "SCAN:" is created or edited, it automatically triggers a scan via the "Scan Request" workflow.

**Specifying Accessibility Engines**: You can optionally specify which accessibility engines to run by including keywords in the issue title:
- `AXE` - Run only axe-core scanner
- `ALFA` - Run only Siteimprove ALFA scanner
- `EQUALACCESS` - Run only IBM Equal Access Checker
- `ACCESSLINT` - Run only AccessLint scanner
- `ALL` - Run all available scanners (default if no engine specified)

You can specify multiple engines in a single scan. The engine keywords are removed from the scan title automatically.

**Examples**:
- `SCAN: AXE Homepage accessibility check` - Runs only axe-core
- `SCAN: ALFA EQUALACCESS Government site scan` - Runs ALFA and Equal Access Checker
- `SCAN: Homepage check` - Runs all engines (default)
- `SCAN: ALL Complete accessibility audit` - Runs all engines explicitly

### 2. Daily Scheduled Scans

**All Open SCAN Issues** - The "Scan All Open SCAN Issues" workflow runs daily at midnight UTC and scans ALL open issues with titles starting with "SCAN:". This ensures that any pending scan requests are processed regularly.

**Timed Issues Only** - The "Scan Timed Issues (WEEKLY, MONTHLY, etc.)" workflow runs daily at 00:15 UTC but ONLY processes issues with timed prefixes that are due on that day:
- `WEEKLY:` - Scans every Monday
- `MONTHLY:` - Scans on the 1st of each month
- `QUARTERLY:` - Scans on Jan 1, Apr 1, Jul 1, Oct 1
- `MONDAY:`, `TUESDAY:`, `WEDNESDAY:`, `THURSDAY:`, `FRIDAY:`, `SATURDAY:`, `SUNDAY:` - Scans on the corresponding day of the week

**Note**: Engine selection also works with timed scans (e.g., `WEEKLY: AXE Monday scan`).

### 3. Manual Trigger

You can manually trigger scans by:
1. Going to the [Actions tab](https://github.com/mgifford/alfa-scan/actions)
2. Selecting the appropriate workflow:
   - **"Scan All Open SCAN Issues"** - To scan all pending "SCAN:" issues (recommended for regular scan requests)
   - **"Scan Timed Issues (WEEKLY, MONTHLY, etc.)"** - To scan recurring timed issues (only if timed issues are due today)
3. Clicking "Run workflow" button

**Important**: If you have a regular scan request (issue title starting with "SCAN:"), use the "Scan All Open SCAN Issues" workflow, not the "Scan Timed Issues" workflow.

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
- **scanner/parse-issue.mjs**: Extracts URLs and engine specifications from scan request issues
- **scanner/validate-targets.mjs**: Server-side URL validation
- **scanner/run-scan.mjs**: Executes accessibility scans with selected engines and generates reports

### Accessibility Scanners

The system supports multiple accessibility scanning engines that can be run individually or in combination:

1. **axe-core** - Deque's industry-standard accessibility testing engine
2. **Siteimprove ALFA** - Siteimprove's open-source accessibility rules engine
3. **IBM Equal Access Checker** - IBM's comprehensive accessibility checker
4. **AccessLint** - Automated accessibility testing tool

By default, all scanners run for comprehensive coverage. You can specify which scanners to use via the issue title (see [Scanning Triggers](#scanning-triggers) above).

## Configuration

### Equal Access Checker (.achecker.yml)

The scanner uses IBM's Equal Access Checker (accessibility-checker) alongside Alfa and axe-core. Configuration is stored in `.achecker.yml`:

- **Policies**: IBM_Accessibility ruleset
- **Fail Levels**: violation, potentialviolation
- **Output Format**: JSON reports
- **Puppeteer Args**: Required for GitHub Actions environment
  - `--no-sandbox`: Bypass Chrome sandbox (required in CI/CD)
  - `--disable-setuid-sandbox`: Additional sandbox bypass

The `puppeteerArgs` configuration is critical for running in GitHub Actions where the Chrome sandbox is not available. Without these flags, the scanner will fail with "No usable sandbox" errors.

## Documentation

- **[ACCESSIBILITY.md](./ACCESSIBILITY.md)** - Accessibility standards, WCAG 2.2 AA requirements, and development best practices
- **[AGENTS.md](./AGENTS.md)** - AI agent instructions for Copilot, Cursor, Claude, and other coding assistants
- **[TIMEOUT-CONFIG.md](./TIMEOUT-CONFIG.md)** - Timeout configuration and tuning guide for scan optimization
- **[.kittify/AGENTS.md](.kittify/AGENTS.md)** - Spec Kitty project management rules

## Next workflow steps

1. ✅ ~~Review WP01~~
2. ✅ ~~Implement WP02~~
3. Implement WP03 (Dual-Scanner Execution Engine)
4. Continue through reporting, hardening, and end-to-end validation WPs