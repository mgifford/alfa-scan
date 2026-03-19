# Open Scans

Issue-driven accessibility scanning prototype using GitHub Pages and GitHub Actions.

## What it is

- Accepts URL batches from a GitHub Pages form
- Creates scan-request GitHub issues
- Runs accessibility scans in GitHub Actions
- Publishes comparison-ready results to GitHub Pages

## Getting Started

### Quick Start: Submit Your Scan in 5 Minutes

1. **Prepare your URLs**: Gather a list of web pages you want to scan for accessibility issues (recommended: 100-150 URLs per scan)
2. **Submit your scan**: Go to [https://mgifford.github.io/open-scans/](https://mgifford.github.io/open-scans/)
   - Enter a descriptive title for your scan
   - Paste your URLs (one per line or comma-separated)
   - Click "Create Scan Request" - this creates a GitHub issue that triggers the scan
3. **Wait for results**: Scans typically complete in 30-60 minutes depending on the number of URLs
4. **View your report**: Check [https://mgifford.github.io/open-scans/reports.html](https://mgifford.github.io/open-scans/reports.html) for your completed scan results

### Integration with Top Task Finder

If you're using the [Top Task Finder](https://mgifford.github.io/top-task-finder/) to identify your most important pages, open-scans is the perfect next step:

1. **Identify your top tasks**: Use the Top Task Finder to determine which pages are most critical for your users
2. **Export your URLs**: Get the list of URLs corresponding to your top tasks
3. **Scan for accessibility**: Paste those URLs into open-scans to check for accessibility issues
4. **Prioritize fixes**: Focus on fixing accessibility issues on your most important pages first

Even if you haven't completed a formal top tasks analysis, open-scans can help you get started by scanning your key pages (homepage, main navigation pages, common user journeys, etc.).

## How to Use

### Submit URLs for Scanning

1. Visit the [GitHub Pages site](https://mgifford.github.io/open-scans/)
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

**Note**: The form accepts up to 500 URLs, but for best results, split large scans into batches of 100-150 URLs to avoid timeout issues.

### View Scan Results

Visit the [Reports page](https://mgifford.github.io/open-scans/reports.html) to see all completed scans with:
- Issue number and scan title
- Scan timestamp
- Number of URLs scanned
- Pass/fail/can't tell statistics
- Links to detailed reports (Markdown, CSV, JSON)

### Troubleshooting

**Scan not appearing after 30-60 minutes?**
- [View workflow history in GitHub Actions](https://github.com/mgifford/open-scans/actions) to check for errors
- Look for your scan issue number in the workflow runs
- Common issues include invalid URLs or network timeouts

**Need help?**
- Review [workflow run logs in GitHub Actions](https://github.com/mgifford/open-scans/actions) for detailed error messages
- Check that your URLs are publicly accessible
- Ensure URLs don't include localhost or private IP addresses

## Managing Your Scans

### Converting to Recurring Scans

If you find the scan results useful and want to run the same scan regularly:

1. **Find your scan issue**: Go to [https://github.com/mgifford/open-scans/issues](https://github.com/mgifford/open-scans/issues)
   - Your issue may be closed after the scan completes - use the search/filter if needed
   - Look for your issue number (e.g., `#54`)

2. **Edit the issue title**: Change the prefix from `SCAN:` to one of the following:
   - `WEEKLY:` - Runs on the same day of the week the issue was created
   - `SUNDAY:` - Runs every Sunday
   - `MONDAY:`, `TUESDAY:`, `WEDNESDAY:`, `THURSDAY:`, `FRIDAY:`, `SATURDAY:` - Runs on that specific day
   - `MONTHLY:` - Runs on the 1st of each month
   - `QUARTERLY:` - Runs on Jan 1, Apr 1, Jul 1, Oct 1

3. **Reopen the issue**: If the issue was closed, reopen it so the scheduled scans will run

4. **That's it!** Your scan will now run automatically on the schedule you selected

### Updating Your URL List

You can edit the list of URLs in your scan issue at any time:

1. Open your scan issue on GitHub
2. Click the edit (pencil) icon on the issue description
3. Modify the URL list in the issue body
4. Save your changes
5. The next scheduled scan (or manual trigger) will use the updated URL list

### Cleaning Up

To stop recurring scans when you no longer need them:

- **Option 1**: Edit the issue title to remove the schedule prefix (`WEEKLY:`, `SUNDAY:`, etc.) - change it back to `SCAN:` or any other text
- **Option 2**: Close the issue - closed issues are not scanned by the scheduled workflows
- **Option 3**: Delete the issue entirely if you're certain you won't need it again

## Scanning Triggers

Scans can be triggered in multiple ways:

### 1. Automatic On Issue Creation/Edit

When an issue with a title starting with "SCAN:" is created or edited, it automatically triggers a scan via the "Scan Request" workflow.

**Multiple Scans Processing**: If you create multiple SCAN issues at once, they will be processed sequentially (one after another) rather than simultaneously. This ensures stable operation and prevents conflicts when pushing scan results to the repository. Each scan will wait for the previous one to complete before starting.

**Specifying Accessibility Engines**: You can optionally specify which accessibility engines to run. If no engines are specified, the default behaviour is to run **axe** plus one randomly chosen engine from [ALFA, Equal Access, AccessLint, QualWeb] — giving thorough-but-fast results without running all five engines every time.

There are two ways to specify engines:

**1. In the issue title** — include one or more engine keywords:
- `AXE` - axe-core scanner
- `ALFA` - Siteimprove ALFA scanner
- `EQUALACCESS` - IBM Equal Access Checker
- `ACCESSLINT` - AccessLint scanner
- `QUALWEB` - QualWeb scanner
- `ALL` - Run all available scanners

The engine keywords are removed from the scan title automatically. You can combine multiple keywords.

**2. In the first line of the issue body** — use an `Engine:` prefix:
```
Engine: axe, alfa
```
List engine names separated by spaces or commas. This overrides any engine keywords in the title. Supported values: `axe`, `alfa`, `equalaccess`, `accesslint`, `qualweb`, `all`.

**Examples**:
- `SCAN: AXE Homepage accessibility check` — Runs only axe-core
- `SCAN: ALFA EQUALACCESS Government site scan` — Runs ALFA and Equal Access Checker
- `SCAN: ALL Complete accessibility audit` — Runs all five engines
- `SCAN: Homepage check` — Runs axe + one randomly chosen engine (default)
- Body first line `Engine: axe accesslint` with any title — Runs axe and AccessLint

### 2. Daily Scheduled Scans

**All Open SCAN Issues** - The "Scan All Open SCAN Issues" workflow runs daily at midnight UTC and scans ALL open issues with titles starting with "SCAN:". This ensures that any pending scan requests are processed regularly.

**Timed Issues Only** - The "Scan Timed Issues (WEEKLY, MONTHLY, etc.)" workflow runs daily at 00:15 UTC but ONLY processes issues with timed prefixes that are due on that day:
- `WEEKLY:` - Scans on the same day of the week the issue was created
- `MONTHLY:` - Scans on the 1st of each month
- `QUARTERLY:` - Scans on Jan 1, Apr 1, Jul 1, Oct 1
- `MONDAY:`, `TUESDAY:`, `WEDNESDAY:`, `THURSDAY:`, `FRIDAY:`, `SATURDAY:`, `SUNDAY:` - Scans on the corresponding day of the week

**Note**: Engine selection also works with timed scans (e.g., `WEEKLY: AXE Monday scan`).

### 3. Manual Trigger

You can manually trigger scans by:
1. Going to the [Actions tab](https://github.com/mgifford/open-scans/actions)
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
5. **QualWeb** - University of Lisbon's WCAG and ACT Rules evaluator

By default, **axe** plus one randomly selected engine run for a balanced result without the overhead of all five scanners. Use `ALL` in the title or `Engine: all` in the body to run every scanner. You can specify which scanners to use via the issue title or body (see [Scanning Triggers](#scanning-triggers) above).

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

## AI Disclosure

This section documents how AI tools have been used to build and run this project.

### How AI was used to build the project

Development of `open-scans` has used AI coding assistants for:

- Writing and refining scanner modules (`scanner/*.mjs`)
- Drafting and editing documentation (README, AGENTS.md, ACCESSIBILITY.md, SUSTAINABILITY.md)
- Generating and reviewing GitHub Actions workflow configuration
- Code review, debugging, and iterative improvements via PR feedback

### Is any AI used when running the program?

**No.** The scanner is a deterministic Node.js tool that runs established open-source accessibility engines (axe-core, Siteimprove ALFA, IBM Equal Access Checker, AccessLint, QualWeb). No LLM or generative AI is invoked at scan time.

The frontend (GitHub Pages) is a static site. No AI inference runs server-side or client-side during normal use.

### Is browser-based AI enabled?

**No.** Browser-built-in AI features (e.g., the Chrome AI APIs) are not activated by this application. Any future AI features would require explicit user opt-in, per the project's [sustainability policy](./SUSTAINABILITY.md).

### Models and tools used

| Model / tool | Purpose | When used |
| :--- | :--- | :--- |
| GitHub Copilot (GPT-4-class via OpenAI Codex) | Code generation, CI workflow authoring, documentation drafting | Throughout development |
| GitHub Copilot Chat (GPT-4-class) | Code review, debugging, policy drafting, iterative PR feedback | Throughout development |
| GitHub Copilot Coding Agent (Claude Sonnet 4.5) | Automated PR implementation — AI disclosure instruction in AGENTS.md, AI Disclosure section in README.md | Development – March 2026 |

> **For AI agents**: If you contribute to this project, add a row for your model/tool above. See the [AI Disclosure Requirement](./AGENTS.md) in AGENTS.md for instructions.

## Next workflow steps

1. ✅ ~~Review WP01~~
2. ✅ ~~Implement WP02~~
3. Implement WP03 (Dual-Scanner Execution Engine)
4. Continue through reporting, hardening, and end-to-end validation WPs
