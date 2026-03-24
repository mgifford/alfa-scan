# Open Scans – Technical Features Reference

> A comprehensive technical reference for the open-scans issue-driven accessibility scanning platform.

---

## Table of Contents

1. [Project Architecture](#1-project-architecture)
2. [Accessibility Scanning Engines](#2-accessibility-scanning-engines)
3. [Issue-Driven Workflow](#3-issue-driven-workflow)
4. [URL Submission & Validation](#4-url-submission--validation)
5. [Scanner Modules](#5-scanner-modules)
6. [Report Formats & Artifacts](#6-report-formats--artifacts)
7. [Interactive HTML Report](#7-interactive-html-report)
8. [Scheduling & Recurring Scans](#8-scheduling--recurring-scans)
9. [Fingerprinting & Deduplication](#9-fingerprinting--deduplication)
10. [Cross-Engine Overlap Analysis](#10-cross-engine-overlap-analysis)
11. [Website Crawling](#11-website-crawling)
12. [Historical Trend Analysis](#12-historical-trend-analysis)
13. [Timeout & Resilience Configuration](#13-timeout--resilience-configuration)
14. [GitHub Actions Workflows](#14-github-actions-workflows)
15. [Frontend Application](#15-frontend-application)
16. [Rule Metadata & Disability Mapping](#16-rule-metadata--disability-mapping)
17. [Security & Input Validation](#17-security--input-validation)
18. [Testing Infrastructure](#18-testing-infrastructure)
19. [Configuration Files](#19-configuration-files)
20. [Data Flow](#20-data-flow)
21. [Capacity & Limits](#21-capacity--limits)

---

## 1. Project Architecture

Open Scans is a **three-tier, serverless accessibility scanning platform** built entirely on GitHub infrastructure:

```
┌──────────────────────────────────────────────────────────────┐
│  Frontend (GitHub Pages)                                       │
│  index.html · submit.js · reports.html                        │
│  URL submission form → GitHub issue creation URL              │
└─────────────────────────────┬────────────────────────────────┘
                              │ GitHub issue event
                              ▼
┌──────────────────────────────────────────────────────────────┐
│  Orchestration (GitHub Actions)                               │
│  8 YAML workflows triggered by issues, schedules, or manual   │
│  Concurrency group: scan-repository (sequential processing)   │
└─────────────────────────────┬────────────────────────────────┘
                              │ spawns
                              ▼
┌──────────────────────────────────────────────────────────────┐
│  Scanner (Node.js 20+, ES Modules)                            │
│  11 .mjs modules · 5 accessibility engines · Playwright       │
│  Outputs: JSON · Markdown · HTML · CSV · overlap reports      │
└─────────────────────────────┬────────────────────────────────┘
                              │ git commit + push
                              ▼
┌──────────────────────────────────────────────────────────────┐
│  Reports Storage (Git repository / GitHub Pages)              │
│  reports/issues/ · reports/pages/ · reports.html             │
└──────────────────────────────────────────────────────────────┘
```

### Key Design Decisions

| Decision | Rationale |
|---|---|
| GitHub Issues as task queue | Zero extra infrastructure; native GitHub event system |
| All artifacts in Git | Versioned, browsable history; free GitHub Pages hosting |
| ES Modules (`type: "module"`) | Tree-shakeable; future-proof Node.js standard |
| Sequential scan concurrency | Prevents Git push conflicts on shared `reports/` branch |
| axe always on by default | Widest WCAG coverage; used as reference for cross-engine overlap |
| Deterministic scanning | No AI at runtime; reproducible, auditable results |

---

## 2. Accessibility Scanning Engines

Open Scans integrates **five independent accessibility engines**. Each engine implements different rules, methodologies, and WCAG interpretations, enabling broad coverage and cross-validation.

### 2.1 Engine Overview

> Package versions below reflect the ranges declared in `package.json`. Run `npm list` to see currently installed versions.

| Engine | Package | Standards | Technology |
|---|---|---|---|
| **axe-core** | `@axe-core/playwright` | WCAG 2.0/2.1/2.2, best practices | Playwright + Chromium |
| **Siteimprove ALFA** | `@siteimprove/alfa-cli` | WCAG 2.0/2.1/2.2, ACT rules | CLI subprocess |
| **IBM Equal Access** | `accessibility-checker` | WCAG 2.1, IBM Accessibility | Puppeteer + Chromium |
| **AccessLint** | `@accesslint/core` | WCAG 2.x | Browser API (iife bundle) |
| **QualWeb** | `@qualweb/core` | WCAG 2.1, ACT rules | Puppeteer (isolated instance) |

### 2.2 Engine Selection

Engines are selected per-scan using a priority-ordered system:

**Priority 1 – Issue title keywords** (case-insensitive):
```
AXE        → run axe-core only (axe always runs anyway)
ALFA       → run axe + ALFA
EQUALACCESS → run axe + IBM Equal Access
ACCESSLINT → run axe + AccessLint
QUALWEB    → run axe + QualWeb
ALL        → run all five engines
```

**Priority 2 – `Engine:` line in issue body**:
```
Engine: alfa qualweb
Engine: all
Engine: axe, accesslint
```

**Priority 3 – Issue form dropdown** (`### Accessibility engines` section in issue template).

**Default behavior**: axe-core plus one randomly selected non-axe engine from `[alfa, equalaccess, accesslint, qualweb]`.

> **Note**: axe-core always runs regardless of engine selection, as it serves as the reference baseline for cross-engine overlap calculations.

### 2.3 Engine Implementation Details

#### axe-core
- Runs via `@axe-core/playwright` inside a Playwright Chromium browser
- Uses `page.waitForLoadState('networkidle')` before scanning
- Reports violations, passes, and incomplete (can't tell) results
- Dark mode scan re-runs on URLs where `prefers-color-scheme: dark` is supported

#### Siteimprove ALFA
- Invoked as a CLI subprocess: `@siteimprove/alfa-cli`
- Output parsed from JSON formatter (`@siteimprove/alfa-formatter-json`)
- EARL report also available (`@siteimprove/alfa-formatter-earl`)
- Configurable page and command timeouts

#### IBM Equal Access Checker
- Uses Puppeteer (bundled separately from Playwright)
- Configured via `.achecker.yml` (policy: `IBM_Accessibility`, format: `json`)
- Requires `--no-sandbox` and `--disable-setuid-sandbox` for GitHub Actions
- Reports: violations, potential violations, recommendations, manual checks

#### AccessLint
- Loaded from its IIFE bundle (`dist/index.iife.js`) and injected into the browser page
- Results enriched with axe WCAG success-criteria metadata via `getRuleMetadata('axe', rule)`

#### QualWeb
- Loaded via `createRequire` for CommonJS compatibility in the ES module environment
- Creates a new isolated Puppeteer browser instance per URL scan
- Evaluates ACT rules, WCAG techniques, and best practices

---

## 3. Issue-Driven Workflow

### 3.1 Creating a Scan

1. User visits the GitHub Pages form at `https://mgifford.github.io/open-scans/`
2. Enters a title and list of URLs (newline- or comma-separated)
3. Real-time preview shows accepted/rejected URLs
4. Clicking **"Create Scan Request"** redirects to a GitHub issue creation URL pre-filled with:
   - Title: `SCAN: <scan title>`
   - Body: validated URL list, engines, page count, form metadata
5. User reviews and submits the issue on GitHub
6. GitHub Actions `scan-request.yml` triggers automatically

### 3.2 Issue Body Format

```markdown
### Scan title
My Website Accessibility Audit

### URLs to scan
https://example.com/
https://example.com/about
https://example.com/contact

### Accessibility engines
Default (axe + random)

### Page load delay (ms)
0
```

Optional directives parsed from the body:
- `Engine: alfa qualweb` – engine selection
- `Page: 20` – crawl up to 20 URLs from the base URL
- `TREND_ANALYSIS` – opt in to historical trend analysis

### 3.3 Issue Lifecycle

```
Issue created (SCAN: title)
       │
       ▼
scan-request.yml triggers
       │
       ▼
Scanner runs → reports written to reports/issues/issue-N/TIMESTAMP/
       │
       ▼
reports.html regenerated
       │
       ▼
Bot comments on issue with results links
       │
       ▼
Issue closed (scan complete)
```

Recurring issues (`WEEKLY:`, `MONTHLY:`, etc.) are re-scanned on schedule and **remain open** between runs with a comment posted after each scan.

---

## 4. URL Submission & Validation

### 4.1 Client-Side Validation (`submit.js`)

The frontend form validates URLs in real time before creating the GitHub issue:

| Check | Description |
|---|---|
| Valid URL syntax | Must be parseable by the browser URL API |
| Protocol | `http://` or `https://` only |
| Localhost | Blocks `localhost`, `127.x.x.x` |
| Private IPv4 | Blocks `10.x`, `172.16–31.x`, `192.168.x`, `169.254.x` |
| Private IPv6 | Blocks `::1`, `fc00::/7`, `fe80::/10` |
| Non-web documents | Blocks 40+ non-HTML file extensions (see §4.3) |
| GitHub URL length | Splits batches to fit within GitHub's 8 000-character issue creation URL limit |

Real-time preview shows each URL as:
- `✓ Accepted` – valid, will be scanned
- `✗ Rejected [reason]` – invalid with human-readable reason

### 4.2 Server-Side Validation (`validate-targets.mjs`)

The same validation rules are re-applied inside GitHub Actions before scanning begins, ensuring no unsafe URLs can be scanned even if the form is bypassed:

```javascript
export function validateTargets(urls)  // returns { accepted, rejected }
export function isNonWebDocument(parsedUrl)
```

Blocked IPv4 ranges:
- `10.0.0.0/8` – Class A private
- `127.0.0.0/8` – Loopback
- `0.0.0.0/8` – Default route
- `169.254.0.0/16` – Link-local (APIPA)
- `172.16.0.0/12` – Class B private
- `192.168.0.0/16` – Class C private

Blocked IPv6 addresses/ranges:
- `::1` – Loopback
- `fc00::/7` – Unique local (ULA)
- `fe80::/10` – Link-local

### 4.3 Non-Web Document Extensions Blocked

| Category | Extensions |
|---|---|
| Documents | pdf, doc, docx, xls, xlsx, ppt, pptx, odt, ods, odp, rtf, txt, csv |
| Images | jpg, jpeg, png, gif, bmp, svg, ico, webp, tiff, tif, avif |
| Audio | mp3, wav, ogg, flac, aac, m4a |
| Video | mp4, avi, mov, wmv, mkv, webm, flv |
| Archives | zip, tar, gz, bz2, rar, 7z |
| Executables | exe, dmg, pkg, msi, apk, deb, rpm |
| E-books | epub, mobi, azw, azw3, fb2, lit |
| Data/code | json, xml, yaml, yml, rss, atom |
| Fonts | ttf, otf, woff, woff2, eot |

---

## 5. Scanner Modules

All scanner modules are ES modules located in `scanner/*.mjs`. Each module exports functions for use by workflows and unit tests.

### 5.1 `run-scan.mjs` – Core Orchestration Engine (~3 200 lines)

The heart of the platform. Orchestrates multi-engine scanning, report generation, fingerprinting, and deduplication.

**Exported functions**:

| Function | Description |
|---|---|
| `determineScannersToRun(engines)` | Maps engine spec to `{ runAxe, runAlfa, runEqualAccess, runAccesslint, runQualWeb }` |
| `hasErrAbortedError(result)` | Detects `net::ERR_ABORTED` in browser error lists |
| `formatFirstSeenDate(isoDate)` | Formats ISO date as human-readable `first seen YYYY-MM-DD` |
| `computeFindingFingerprint(url, locator, ruleKey)` | SHA-256(`url\|locator\|ruleKey`).slice(0, 12) |
| `loadFingerprintStore(storePath)` | Loads historical fingerprints from `fingerprints.json` |
| `annotateWithFingerprints(store, results, scanMeta)` | Enriches violations with first-seen dates and recurrence counts |
| `escapeMarkdown(value)` | Escapes Markdown special characters |
| `extractRuleId(ruleUrl)` | Extracts human-readable rule ID from a rule URL |
| `toMarkdownReport(summary, axeVersion)` | Generates Markdown report string |

**Internal scanner functions**:

| Function | Engine | Browser |
|---|---|---|
| `runAxeAudit(url, pageLoadDelayMs)` | axe-core | Playwright |
| `runAlfaAudit(url)` | ALFA CLI | CLI subprocess |
| `runEqualAccessAudit(url)` | IBM accessibility-checker | Puppeteer |
| `runAccessLintAudit(url)` | AccessLint | Playwright (IIFE inject) |
| `runQualWebAudit(url)` | QualWeb | Puppeteer (isolated) |
| `detectMediaQuerySupport(page)` | – | Playwright |

**`detectMediaQuerySupport`** detects 5 media queries per page:

| Property | Media Query |
|---|---|
| `darkMode` | `(prefers-color-scheme: dark)` |
| `reducedMotion` | `(prefers-reduced-motion: reduce)` |
| `highContrast` | `(prefers-contrast: more)` |
| `forcedColors` | `(forced-colors: active)` |
| `reducedTransparency` | `(prefers-reduced-transparency: reduce)` |

---

### 5.2 `parse-issue.mjs` – GitHub Issue Parser (~370 lines)

Extracts structured scan configuration from raw GitHub issue payloads.

**Exported functions**:

| Function | Description |
|---|---|
| `parseScanIssue(payload)` | Returns `{ ok, errors, value }` scan request object |
| `validateScanRequest(request)` | JSON Schema validation of parsed request |
| `getDefaultEngines()` | Returns `["axe", <random non-axe engine>]` |
| `extractPageCount(body)` | Extracts `Page: N` crawl count from issue body |
| `NON_AXE_ENGINES` | `["alfa", "equalaccess", "accesslint", "qualweb"]` |

**URL extraction methods** (applied in order, all unique results merged):
1. Plain text URLs (one per line or comma-separated)
2. HTML anchor `href` attributes: `href="https://..."`
3. Markdown links: `[text](URL)`
4. Google search wrapper unwrapping: extracts `q=https://...` parameter

**Crawl mode** is detected when the issue title is a bare URL and the body contains no explicit URL list, triggering `needsCrawl: true` with `crawlBaseUrl` and `crawlPageCount`.

---

### 5.3 `validate-targets.mjs` – URL Security Validator (~155 lines)

Server-side URL security checking (mirrors client-side rules). See [§4](#4-url-submission--validation) for full rule details.

---

### 5.4 `crawl-urls.mjs` – Website Crawler (~277 lines)

Discovers URLs from a single seed URL for `Page: N` crawl mode.

**Exported functions**:

| Function | Description |
|---|---|
| `crawlSiteForUrls(baseUrl, maxUrls, timeout)` | Returns up to `maxUrls` same-origin URLs |
| `parseSitemapXml(xml)` | Parses both `<urlset>` and `<sitemapindex>` XML formats |
| `filterSameOriginUrls(urls, baseUrl)` | Removes cross-origin and non-web document URLs |
| `randomSample(items, maxCount)` | Fisher-Yates random sample |

**Crawl strategy** (in order):
1. Try `{baseUrl}/sitemap.xml` – parse all `<loc>` entries
2. Fallback: load the page and extract `<a href>` links
3. Filter to same-origin, non-document URLs
4. Random sample up to `maxUrls` (default 20)

---

### 5.5 `generate-reports-html.mjs` – Report Dashboard Generator (~700 lines)

Regenerates `reports.html` after every scan by scanning the `reports/` directory tree.

**Exported functions**:

| Function | Description |
|---|---|
| `findAllReports(reportsDir)` | Recursively discovers all `report.json` files |
| `sortReportsByTime(reports)` | Sorts reports by scan timestamp (newest first) |
| `generateTableRows(reports)` | Generates HTML `<tr>` elements for the dashboard table |

**Dashboard columns**:
- Issue number (linked to GitHub issue)
- Scan title
- Timestamp
- URLs scanned
- Pass / Fail / Can't Tell counts per engine
- Links: HTML report · Markdown report · CSV · Overlap report

---

### 5.6 `interactive-report.mjs` – Interactive HTML Report (~1 600 lines)

Generates a fully self-contained, single-file interactive HTML report with embedded CSS and JavaScript. No external CDN dependencies.

See [§7](#7-interactive-html-report) for full feature details.

**Primary export**:
```javascript
export function generateInteractiveHtml(summary, options)
```

---

### 5.7 `analyse-trends.mjs` – Historical Trend Analyser (~350 lines)

Compares historical scan results for recurring issues to detect improving, worsening, and systemic patterns.

**Exported functions**:

| Function | Description |
|---|---|
| `loadScanHistory(reportsDir, issueNumber, limit)` | Loads N most recent `report.json` files for an issue |
| `computeTotals(report)` | Aggregates violation counts per scanner |
| `computeDiff(baseline, current)` | Returns added/removed violations between two scans |
| `computeSystemicPatterns(reports)` | Violations affecting ≥50% of pages across scans |

**Output categories**:
- **Improving** – violation counts decreased since last scan
- **Worsening** – violation counts increased
- **Resolved** – violations that appeared then disappeared
- **Systemic patterns** – same violation found on 50%+ of scanned pages
- **Per-scanner trend** – changes broken down by engine

---

### 5.8 `rule-metadata.mjs` – Accessibility Rule Database (~825 lines)

Central repository of human-readable metadata for 100+ axe-core rules.

**Exported constants**:

| Export | Description |
|---|---|
| `ROLES` | `["UX Designer", "Visual Designer", "Content Author", "Front-End Developer"]` |
| `SEVERITY` | `["Critical", "Serious", "Moderate", "Minor"]` |
| `DEFAULT_MAPPING` | Fallback metadata for unknown rules |
| `WCAG_SC_TO_DISABILITIES` | Maps WCAG success criteria to disability categories |
| `FPS_CATEGORIES` | 9 Functional Performance Specification categories with population stats |
| `DISABILITY_TO_FPS` | Maps disability categories to FPS keys |

**Exported functions**:

| Function | Description |
|---|---|
| `getRuleMetadata(engine, ruleId)` | Returns `{ roles, severity, taskBlocking, wcagSc, level }` |
| `parseWcagScTag(tag)` | Converts `wcag111` → `"1.1.1"` |
| `parseConformanceLevelFromTags(tags)` | Returns `"A"`, `"AA"`, `"AAA"`, or `"BP"` |
| `formatWcagFromTags(wcagTags)` | Returns `{ scs: [...], level: "AA" }` |
| `wcagScUrl(scNumber)` | Returns `https://www.w3.org/WAI/WCAG22/Understanding/{slug}` |
| `getDisabilitiesFromScs(scs)` | Returns `["visual","hearing","motor","cognitive"]` in stable order |
| `getFpsData(disabilities, wcagScs)` | Returns FPS entries with population demographic stats |

---

### 5.9 `alfa-rule-metadata.mjs` – ALFA Rule Descriptions (~250 lines)

Provides human-readable descriptions for Siteimprove ALFA rule URLs.

**Export**: `alfaRuleMetadata` object keyed by rule URLs (e.g., `https://alfa.siteimprove.com/rules/sia-r111`).

**Function**: `formatAlfaRule(ruleUrl)` – returns metadata or auto-generates a placeholder.

Covers 40+ common ALFA rules with WCAG criterion mappings and rule descriptions.

---

### 5.10 `equalaccess-rule-metadata.mjs` – IBM Rule Descriptions (~145 lines)

Provides human-readable descriptions for IBM Equal Access Checker rule IDs.

**Export**: `equalAccessRuleMetadata` object keyed by IBM rule IDs (e.g., `a_text_purpose`).

**Function**: `getEqualAccessRuleName(ruleId)` – returns rule name or falls back to the ID.

Covers 50+ IBM accessibility rules with WCAG criterion mappings.

---

## 6. Report Formats & Artifacts

Each completed scan produces up to **six output files** stored in `reports/issues/issue-{N}/{timestamp}/`:

| File | Format | Audience |
|---|---|---|
| `report.json` | JSON | Machines, APIs, CI pipelines |
| `report.md` | Markdown | Developers, GitHub viewers |
| `report.html` | HTML (self-contained) | Browsers, stakeholders |
| `report.csv` | CSV | Spreadsheets, data analysis |
| `report-overlap.json` | JSON | Cross-engine deduplication analysis |
| `report-overlap.md` | Markdown | Cross-engine overlap summary |

### 6.1 `report.json` – Machine-Readable Summary

Top-level structure:
```json
{
  "meta": { "issueNumber", "issueUrl", "scanTitle", "engines", "startedAt", "completedAt" },
  "summary": {
    "acceptedCount", "scannedCount", "rejectedCount", "skippedDueToTimeout",
    "darkModeUrlCount",
    "axe": { "pass", "violations", "incomplete", "inapplicable" },
    "alfa": { "pass", "fail", "cantTell" },
    "equalAccess": { "pass", "violation", "potentialViolation", "recommendation" },
    "accesslint": { "pass", "fail" },
    "qualweb": { "pass", "fail", "cantTell" }
  },
  "results": [ /* per-URL results */ ],
  "violations": [ /* consolidated violation list with fingerprints */ ]
}
```

### 6.2 `report.md` – Markdown Report

Sections:
- Scan metadata (title, date, engines used, URL counts)
- Summary table (pass/fail/can't tell per engine)
- Dark mode scan coverage (🌙 count and percentage)
- Per-engine violation details with WCAG criteria
- Skipped URL list (with timeout reasons)
- Rejected URL list (with validation reasons)

### 6.3 `report.html` – Interactive Report

See [§7](#7-interactive-html-report) for full details.

### 6.4 `report.csv` – Spreadsheet Export

Columns: `url`, `engine`, `ruleId`, `wcagSc`, `wcagLevel`, `severity`, `impact`, `description`, `helpUrl`, `xpath`, `html`, `firstSeen`

### 6.5 `report-overlap.json` / `report-overlap.md` – Cross-Engine Overlap

Documents violations found by multiple engines for the same WCAG success criterion. Helps identify high-confidence findings confirmed by multiple tools.

Fields per overlap entry:
- WCAG criterion (e.g., `1.4.3`)
- Number of engines that flagged it (`crossEngineOverlapCount`)
- Engine names that agree
- URL and element details

---

## 7. Interactive HTML Report

The `interactive-report.mjs` module generates a **fully self-contained single-page HTML report** with no external CDN dependencies. All CSS and JavaScript is embedded inline.

### 7.1 Structure

```
┌─────────────────────────────────────────────┐
│  Report header: title, date, engine badges   │
│  Summary stats: pass/fail/cantTell per engine │
│  Dark mode scan coverage indicator           │
├─────────────────────────────────────────────┤
│  Filter bar: engine · WCAG level · role ·   │
│             severity · status               │
├─────────────────────────────────────────────┤
│  Priority table: WCAG criteria × engines    │
├─────────────────────────────────────────────┤
│  Rule cards (one per violation type):       │
│  ├─ Rule title, WCAG SC badge, level badge  │
│  ├─ Engine badges                           │
│  ├─ Roles affected, severity, task-blocking │
│  ├─ Disability impact icons                 │
│  ├─ Failure reason                          │
│  ├─ Per-page breakdown (XPath + HTML)       │
│  │   └─ "Copy failure details" button       │
│  └─ First-seen date (from fingerprint)      │
└─────────────────────────────────────────────┘
```

### 7.2 Filtering & Sorting

Real-time client-side filters:

| Filter | Options |
|---|---|
| Scanner engine | axe · ALFA · IBM Equal Access · AccessLint · QualWeb |
| WCAG level | A · AA · AAA · Best Practice |
| Role affected | UX Designer · Visual Designer · Content Author · Front-End Developer |
| Severity | Critical · Serious · Moderate · Minor |
| Status | New · Recurring · Fixed |

### 7.3 Theming

- CSS custom properties for all colors
- `@media (prefers-color-scheme: dark)` automatic dark mode
- Manual override toggle: light / dark / auto
- Theme persisted in `localStorage` as `report-theme`
- Selectors: `[data-theme="light"]`, `[data-theme="dark"]`

### 7.4 Stable Anchor Links

Every rule card has a stable URL-fragment ID:
```
#rule-{engine}-{ruleId}
```
Example: `#rule-axe-color-contrast`

Generated by the `slugify()` helper in `interactive-report.mjs`.

### 7.5 Copy Failure Details Button

Each violation example has a **"Copy failure details"** button (class `btn-copy-failure`) that copies a pre-formatted GitHub issue comment to the clipboard via `navigator.clipboard`. The text includes:
- Rule name and WCAG criterion
- URL and XPath of the failing element
- HTML snippet
- Suggested fix text

Data is stored in `data-copy-*` attributes on the `.example-item` div.

### 7.6 WCAG Version Badges

- `WCAG_21_SCS` and `WCAG_22_SCS` sets track which success criteria were introduced in each version
- `getWcagVersionFromScs()` returns the minimum WCAG version applicable to a rule
- Badges shown: **WCAG 2.0** / **WCAG 2.1** / **WCAG 2.2**

### 7.7 Accessibility of the Report

The reports themselves target WCAG 2.2 Level AA:
- Semantic HTML with ARIA landmarks
- Keyboard navigable (focus indicators)
- Screen-reader-compatible expandable sections
- High-contrast color ratios
- Responsive layout (mobile/tablet/desktop)

---

## 8. Scheduling & Recurring Scans

### 8.1 Issue Title Prefixes

| Prefix | Schedule |
|---|---|
| `SCAN:` | One-time (also re-runs if issue is reopened/edited) |
| `WEEKLY:` | Same day of week the issue was created |
| `MONDAY:` | Every Monday |
| `TUESDAY:` | Every Tuesday |
| `WEDNESDAY:` | Every Wednesday |
| `THURSDAY:` | Every Thursday |
| `FRIDAY:` | Every Friday |
| `SATURDAY:` | Every Saturday |
| `SUNDAY:` | Every Sunday |
| `MONTHLY:` | 1st of every month |
| `QUARTERLY:` | Jan 1, Apr 1, Jul 1, Oct 1 |

### 8.2 Scheduling Workflows

Three workflows collaborate on scheduling:

| Workflow | Trigger | Purpose |
|---|---|---|
| `scan-request.yml` | `issues.opened/edited/reopened` | Immediate scan on issue events |
| `scan-issue-queue.yml` | Daily 00:00 UTC + manual | Daily catch-up for all open `SCAN:` issues |
| `scheduled-scan-queue.yml` | Daily 00:15 UTC + manual | Timed prefix issues due today |

### 8.3 Concurrency Protection

All scan workflows share concurrency group `scan-repository` with `cancel-in-progress: false`, ensuring only one scan runs at a time. This prevents race conditions in the shared `reports/` directory.

### 8.4 Recurring Issue Lifecycle

- Recurring issues **remain open** between scheduled runs
- Each run posts a results comment on the issue
- Issue body can be edited to update the URL list at any time
- No scan limit per issue

---

## 9. Fingerprinting & Deduplication

### 9.1 Violation Fingerprinting

Each finding is assigned a stable 12-character fingerprint:

```
fingerprint = SHA-256(url + "|" + locator + "|" + ruleKey).slice(0, 12)
```

This fingerprint is consistent across scans of the same URL with the same violation, enabling historical tracking.

**Implementation**: `computeFindingFingerprint(url, locator, ruleKey)` in `run-scan.mjs`.

### 9.2 Fingerprint Store

Fingerprints are persisted in `reports/issues/issue-{N}/fingerprints.json`:

```json
{
  "<fingerprint>": {
    "firstSeen": "2024-01-15T10:30:00Z",
    "seenCount": 3,
    "url": "https://example.com/page",
    "ruleKey": "color-contrast"
  }
}
```

**Load function**: `loadFingerprintStore(storePath)` reads the store or returns an empty object.

### 9.3 Annotation

`annotateWithFingerprints(store, results, scanMeta)` enriches violations with:
- `firstSeen` – ISO date string when this violation was first observed
- `seenCount` – number of times observed across scans
- `isNew` – true if first time seen in this scan
- `isRecurring` – true if seen in previous scans
- `isFixed` – true if present in history but absent in current scan

### 9.4 Systemic Pattern Detection

Violations found on ≥50% of scanned pages are flagged as **systemic patterns** in both the interactive report and trend analysis output.

---

## 10. Cross-Engine Overlap Analysis

### 10.1 WCAG SC Tag Normalization

Engine tags are normalized to WCAG success criterion numbers using:
```
WCAG_SC_TAG_RE = /^wcag\d{3,}$/
```

For example: `wcag143` → SC `1.4.3`.

This allows comparing results from different engines that use different tagging conventions.

### 10.2 Cross-Engine Overlap Computation

`computeCrossEngineWcagOverlap(result)` in `run-scan.mjs`:
1. Collects all WCAG SC tags from axe violations for the current URL
2. For each non-axe engine result, counts how many of its WCAG SC tags match axe's tags
3. Stores the count as `crossEngineOverlapCount` on each non-axe engine result

### 10.3 Overlap Reports

`report-overlap.json` and `report-overlap.md` summarize:
- Which WCAG criteria were flagged by multiple engines
- Engine agreement counts per criterion
- High-confidence findings (confirmed by 3+ engines)

---

## 11. Website Crawling

### 11.1 Activation

Crawl mode is activated when:
- The issue title is a bare URL (e.g., `https://example.com`), **or**
- The issue body contains `Page: N` (where N is the desired page count)

`parseScanIssue()` returns `{ needsCrawl: true, crawlBaseUrl, crawlPageCount }`.

### 11.2 Crawl Strategy

`crawlSiteForUrls(baseUrl, maxUrls, timeout)` in `crawl-urls.mjs`:

```
1. Fetch {baseUrl}/sitemap.xml
   ├─ Success: parse all <loc> entries (handles sitemap index)
   └─ Failure: load {baseUrl} in browser, extract <a href> links

2. Filter: same-origin only, non-document URLs only

3. Random sample: Fisher-Yates up to maxUrls (default 20)

4. Return URL list
```

### 11.3 Discovered URL Backfill

After crawling, the workflow updates the issue body with the discovered URLs, so the URL list is visible and editable for future recurring scans.

---

## 12. Historical Trend Analysis

### 12.1 Opt-In

Add `TREND_ANALYSIS` anywhere in the issue body to opt in to trend analysis.

### 12.2 Activation

`scan-trend-analysis.yml` triggers:
- Automatically after `scheduled-scan-queue.yml` completes successfully
- Manually via `workflow_dispatch` (with optional `issue_number` input)

### 12.3 Analysis Process

`loadScanHistory(reportsDir, issueNumber, limit)` loads the N most recent `report.json` files (default: 5 scans).

`computeDiff(baseline, current)` returns:
- **Added** violations (new since baseline)
- **Removed** violations (fixed since baseline)
- **Changed** violation counts per engine

`computeSystemicPatterns(reports)` identifies violations present in ≥50% of scanned pages across all loaded scans.

### 12.4 AI-Assisted Analysis (Optional)

The workflow can invoke the **GitHub Models API** for AI-powered prioritization and narrative trend analysis. This is opt-in and requires a configured API token.

### 12.5 Output

A structured comment is posted on the issue with:
- Overall trend indicator: **Improving** / **Stable** / **Deteriorating**
- Top 5 issues to fix (most frequent violations)
- Recently resolved violations
- Systemic patterns requiring structural fixes
- Per-scanner comparison table

---

## 13. Timeout & Resilience Configuration

### 13.1 Timeout Layers

The scanner implements multiple timeout layers to prevent infinite hangs in CI:

| Environment Variable | Default | Scope |
|---|---|---|
| `FETCH_TIMEOUT_MS` | 30 000 ms (30s) | Initial HTTP fetch |
| `PER_URL_TIMEOUT_MS` | 120 000 ms (2min) | Total time budget per URL |
| `TOTAL_SCAN_TIMEOUT_MS` | 3 000 000 ms (50min) | Entire scan run |
| `ALFA_PAGE_TIMEOUT_MS` | 30 000 ms (30s) | ALFA page load |
| `ALFA_COMMAND_TIMEOUT_MS` | 180 000 ms (3min) | ALFA CLI execution |
| `PLAYWRIGHT_NAV_TIMEOUT_MS` | 30 000 ms (30s) | Browser page navigation |
| `PLAYWRIGHT_LAUNCH_TIMEOUT_MS` | 30 000 ms (30s) | Browser launch |
| `NETWORK_IDLE_TIMEOUT_MS` | 10 000 ms (10s) | Network idle wait (best-effort) |

### 13.2 Timeout Behavior

**Per-URL timeout exceeded**:
- Scan for that URL aborts
- Error recorded in report: `"URL scan exceeded Xs timeout"`
- `skippedDueToTimeout` counter incremented
- Scanner continues with next URL

**Total scan timeout approached**:
- Remaining URLs are skipped (not errored)
- Partial results are written and committed
- Issue comment warns about skipped URLs

### 13.3 ERR_ABORTED Threshold

```
ERR_ABORTED_THRESHOLD = parseInt(process.env.ERR_ABORTED_THRESHOLD || "5", 10)
```

If a URL triggers more than this many `net::ERR_ABORTED` browser errors, it is skipped early. This prevents DDoS-like behavior on sites that aggressively block automated access.

### 13.4 Retry Logic

`retryOnNavigationError(fn, maxRetries)` wraps browser operations with automatic retry on:
- `"Execution context was destroyed"` errors
- Max 2 retries
- Exponential backoff between retries

Applied to Equal Access Checker and QualWeb scan functions where navigation errors are most common.

### 13.5 Customization

Timeouts are customized via environment variables in workflow YAML:

```yaml
- name: Run issue scan
  run: node scanner/run-scan.mjs .tmp/issue-event.json .scan-output
  env:
    PER_URL_TIMEOUT_MS: "90000"
    TOTAL_SCAN_TIMEOUT_MS: "2400000"
```

See [TIMEOUT-CONFIG.md](TIMEOUT-CONFIG.md) for the full tuning guide.

---

## 14. GitHub Actions Workflows

### 14.1 `scan-request.yml` – Issue-Triggered Scan

| Property | Value |
|---|---|
| Trigger | `issues.opened`, `issues.edited`, `issues.reopened` |
| Condition | Title starts with `SCAN:` and issue is open |
| Concurrency | `scan-repository` (sequential) |

**Steps**:
1. Checkout repo + setup Node.js 24 + install dependencies + install Playwright Chromium
2. Save GitHub event payload to `.tmp/issue-event.json`
3. Run `node scanner/run-scan.mjs` → outputs `meta.json`
4. Copy report artifacts to `reports/issues/issue-{N}/{timestamp}/`
5. Regenerate `reports.html`
6. Commit and push with retry logic (up to 3 attempts; handles merge conflicts by regenerating)
7. Post results comment on issue (accepted/scanned/rejected/skipped counts + report links)
8. Update issue body with discovered URLs (crawl mode only)
9. Close issue (after successful scan of at least one URL)

**Retry logic** for git push:
- Pulls with rebase on conflict
- Regenerates `reports.html` if a merge conflict occurs in that file
- Retries up to 3 times before failing

---

### 14.2 `scan-issue-queue.yml` – Daily Batch Scan

| Property | Value |
|---|---|
| Trigger | Schedule: daily 00:00 UTC; `workflow_dispatch` |
| Concurrency | `scan-repository` (sequential) |

Processes all open `SCAN:` issues that exist in the repository, scanning them sequentially. Useful for issues that missed the immediate trigger or were manually reopened.

---

### 14.3 `scheduled-scan-queue.yml` – Recurring Schedule Processing

| Property | Value |
|---|---|
| Trigger | Schedule: daily 00:15 UTC; `workflow_dispatch` |
| Concurrency | `scan-repository` (sequential) |

**Schedule matching logic** (bash, runs in CI):
```bash
today_weekday=$(date +%A | tr '[:upper:]' '[:lower:]')
today_date=$(date +%d)
today_month=$(date +%m)

# WEEKLY: match on creation weekday
# MONTHLY: match when today_date == 01
# QUARTERLY: match when month in {01,04,07,10} and today_date == 01
# MONDAY…SUNDAY: match on today_weekday
```

Issues that match run through the same scan pipeline as `scan-request.yml` but their issues **remain open** after scanning.

---

### 14.4 `scan-trend-analysis.yml` – Trend Analysis

| Property | Value |
|---|---|
| Trigger | `workflow_run` on `scheduled-scan-queue.yml` (completed); `workflow_dispatch` |
| Opt-in | Issue body must contain `TREND_ANALYSIS` |

Calls `scanner/analyse-trends.mjs` on up to 5 historical reports per issue. Posts structured analysis comment.

---

### 14.5 `scan-github-pages.yml` – Self-Scan

| Property | Value |
|---|---|
| Trigger | `workflow_run` on `deploy-pages.yml` (completed); monthly; `workflow_dispatch` |
| Purpose | Validates the open-scans website itself is accessible |

Scans the deployed GitHub Pages site (`https://{owner}.github.io/{repo}/`) with axe-core. Results stored in `reports/pages/{timestamp}/`.

> **Note**: `scan-github-pages.yml` uses a `workflow_run` trigger referencing the name in `deploy-pages.yml`. If that workflow is renamed, this trigger must also be updated. Both workflow files carry YAML comments noting this dependency.

---

### 14.6 `deploy-pages.yml` – GitHub Pages Deployment

| Property | Value |
|---|---|
| Trigger | Push to `main` touching `reports/**`, `index.html`, `reports.html`, `submit.js`; `workflow_dispatch` |
| Concurrency | `pages` group (one deployment at a time) |

Deploys the full repository to GitHub Pages using `actions/deploy-pages@v4`. Reports are live within ~1 minute of a push.

---

### 14.7 `create-agent-issues.yml` – AI Enhancement Issues

| Property | Value |
|---|---|
| Trigger | Manual `workflow_dispatch` only |
| Purpose | Creates three GitHub issues for AI enhancement opportunities (idempotent) |

Issues created:
1. AI-Powered Remediation Suggestions
2. Copilot Custom Prompt Files
3. Agent-Driven Cross-Scan Trend Analysis

---

### 14.8 `delete-merged-branches.yml` – Branch Cleanup

| Property | Value |
|---|---|
| Trigger | Manual `workflow_dispatch` only |
| Purpose | Safely deletes fully-merged remote branches |

Verifies each branch has no unique commits relative to `main` before deleting.

---

## 15. Frontend Application

### 15.1 `index.html` – URL Submission Form

A static GitHub Pages form providing:

- **Scan title input** – free text, prepended with `SCAN:` automatically
- **URL textarea** – accepts newline- or comma-separated URLs (up to 500)
- **Real-time validation preview**:
  - Live `✓ Accepted` / `✗ Rejected [reason]` per URL as the user types
  - URL count indicator
- **Engine selection** – dropdown for scanner preference
- **Submit button** – redirects to GitHub issue creation URL after 2-second delay
- Social media preview metadata (Open Graph tags)
- Responsive design, ARIA landmarks, accessible labels

### 15.2 `submit.js` – Form Logic (ES Module)

Provides client-side form handling, validation, and GitHub URL construction:

**Key exported functions**:

| Function | Description |
|---|---|
| `parseUrls(rawText)` | Splits text by newlines/commas, returns URL strings |
| `isValidUrl(urlString)` | Returns true for `http://` or `https://` URLs |
| `validateUrl(urlString)` | Full validation (private IPs, file types, etc.) |
| `validateUrls(urls)` | Returns `{ accepted: [], rejected: [] }` |
| `formatIssueBody(scanTitle, urls)` | Builds pre-filled Markdown issue body |
| `applyGitHubUrlLimit(accepted, owner, repo, scanTitle)` | Trims URL list to fit 8 000-char GitHub limit |
| `createGitHubIssue(scanTitle, urls)` | Builds full GitHub issue creation URL |

**GitHub integration**:
- Extracts `owner` / `repo` from `window.location` on GitHub Pages (e.g., `mgifford.github.io` → `owner=mgifford`)
- Builds: `https://github.com/{owner}/{repo}/issues/new?title=SCAN: {title}&body=...`

### 15.3 `reports.html` – Scan Results Dashboard

A static HTML page listing all completed scans in a table, regenerated after every scan by `generate-reports-html.mjs`. Key columns:

- Issue number (links to GitHub)
- Scan title
- Timestamp
- URLs scanned
- Pass / Fail / Can't Tell (per engine)
- Report links: HTML · Markdown · CSV · Overlap

---

## 16. Rule Metadata & Disability Mapping

### 16.1 Roles Affected

Every axe rule is mapped to one or more responsible roles:

| Role | Responsibility |
|---|---|
| **UX Designer** | Interaction patterns, navigation, focus management |
| **Visual Designer** | Color contrast, spacing, visual indicators |
| **Content Author** | Text alternatives, headings, link text |
| **Front-End Developer** | ARIA, semantics, keyboard access, DOM structure |

### 16.2 Severity Levels

| Level | Meaning |
|---|---|
| **Critical** | Blocks access for users with disabilities |
| **Serious** | Creates significant barriers |
| **Moderate** | Causes some difficulty |
| **Minor** | Minor inconvenience |

### 16.3 Disability Impact Mapping

`WCAG_SC_TO_DISABILITIES` maps each WCAG success criterion to affected disability categories:

| Disability Category | Example WCAG Criteria |
|---|---|
| **visual** | 1.1.1 (alt text), 1.3.3 (sensory chars), 1.4.1–1.4.6 (color/contrast), 2.4.x |
| **hearing** | 1.2.x (captions, audio descriptions) |
| **motor** | 2.1.x (keyboard), 2.4.3 (focus order), 2.5.x (pointer, target size) |
| **cognitive** | 1.3.x (info/structure), 2.4.6 (headings), 3.1.x (language), 3.3.x (input assistance) |

`getDisabilitiesFromScs(scs)` returns the sorted union of affected categories for a given set of WCAG SCs.

`renderDisabilityIcons()` in `interactive-report.mjs` renders SVG badge icons for each disability category.

### 16.4 Functional Performance Specifications (FPS)

`getFpsData(disabilities, wcagScs)` returns US Section 508 Functional Performance Specification entries with estimated population statistics for each category:

| FPS Key | Description |
|---|---|
| `without_vision` | Without vision |
| `limited_vision` | With limited vision |
| `without_perception_of_color` | Without perception of color |
| `without_hearing` | Without hearing |
| `limited_hearing` | With limited hearing |
| `without_speech` | Without speech |
| `limited_manipulation` | With limited manipulation |
| `limited_reach_and_strength` | With limited reach and strength |
| `limited_language` | With limited language, cognitive, and learning abilities |

Color-related WCAG SCs (1.4.1, 1.4.3, 1.4.6, 1.4.11) additionally trigger the `without_color_perception` FPS category.

---

## 17. Security & Input Validation

### 17.1 Defense-in-Depth for URL Validation

URL validation is applied at two independent layers to prevent unsafe scanning:

1. **Client-side** (`submit.js`) – prevents most invalid submissions at form level
2. **Server-side** (`validate-targets.mjs`) – independent re-validation in the workflow before any network access

### 17.2 Command Injection Prevention

All external process invocations use `spawn`/`spawnSync` with **argument arrays**, never `execSync` with template strings:

```javascript
// Correct – safe from injection
spawn(alfaCliPath, ["scan", "--format", "json", "--", url])

// Wrong – never used
execSync(`alfa scan --format json -- ${url}`)
```

### 17.3 Input Sanitization in Reports

`escapeMarkdown(value)` escapes Markdown special characters in user-controlled values before inserting them into report output, preventing unintended Markdown rendering.

### 17.4 GitHub Actions Permissions

Workflows use minimal required permissions:
- `issues: write` – post comments and close issues
- `contents: write` – commit scan results to repo
- `pages: write` – deploy GitHub Pages
- No secrets are committed or logged

### 17.5 Dependency Security

- QualWeb has a known low-severity ReDoS vulnerability in the transitive dependency `trim@0.0.1` (via `@qualweb/util → franc-min → trigram-utils`). This is used only for language detection in QualWeb, not in accessibility scanning code paths.
- All other dependencies are actively maintained with no known critical vulnerabilities.

---

## 18. Testing Infrastructure

### 18.1 Test Runner

Node.js built-in test runner (`node:test`). No external test framework required.

```bash
npm test                            # Run all 21 test modules
node --test tests/unit/parse-issue.test.mjs  # Run single module
```

### 18.2 Test Coverage (21 modules)

| Test File | Area Covered |
|---|---|
| `parse-issue.test.mjs` | Issue payload parsing, URL extraction, engine selection |
| `validate-targets.test.mjs` | URL validation rules, IP blocking, file type blocking |
| `run-scan-output.test.mjs` | Scan output JSON structure and field types |
| `run-scan-retry.test.mjs` | Navigation error retry logic and backoff |
| `report-format.test.mjs` | JSON/CSV/Markdown report formatting |
| `interactive-report.test.mjs` | Interactive HTML report generation |
| `generate-reports-html.test.mjs` | Dashboard HTML table generation |
| `analyse-trends.test.mjs` | Trend computation and diff analysis |
| `dedup-fingerprint.test.mjs` | SHA-256 fingerprinting and deduplication |
| `crawl-urls.test.mjs` | Sitemap parsing and URL discovery |
| `submit.test.mjs` | Frontend form validation logic |
| `wcag-criteria.test.mjs` | WCAG SC tag parsing and criteria mapping |
| `dual-scanner.test.mjs` | Multi-engine coordination |
| `error-handling.test.mjs` | Error recovery and graceful degradation |
| `timeout-handling.test.mjs` | Timeout configuration and behavior |
| `dark-mode.test.mjs` | Dark mode media query detection |
| `extract-xpath.test.mjs` | XPath extraction from violation data |
| `html-landmarks.test.mjs` | ARIA landmark validation in report HTML |
| `alfa-rule-metadata.test.mjs` | ALFA rule URL → description mapping |
| `equalaccess-rule-metadata.test.mjs` | IBM rule ID → description mapping |
| `pages-intake.test.mjs` | GitHub Pages scan intake and processing |

### 18.3 Test Conventions

- Functions exported from modules are testable independently
- Import guard prevents `main()` from executing during tests:
  ```javascript
  if (import.meta.url === `file://${process.argv[1]}`) { main(); }
  ```
- Test fixtures in `tests/fixtures/` (e.g., `issue-valid.json`)
- No external HTTP calls in unit tests (all mocked or fixture-based)

---

## 19. Configuration Files

### 19.1 `package.json`

```json
{
  "name": "issue-driven-accessibility-scanner",
  "version": "0.1.0",
  "private": true,
  "type": "module",
  "engines": { "node": ">=20" }
}
```

**npm scripts**:

| Script | Command |
|---|---|
| `npm test` | `node --test tests/unit/*.test.mjs` |
| `npm run lint` | `node --check` on all five scanner modules |
| `npm run run:parse` | `node scanner/parse-issue.mjs` |
| `npm run run:validate` | `node scanner/validate-targets.mjs` |
| `npm run run:scan` | `node scanner/run-scan.mjs` |
| `npm run run:generate-reports` | `node scanner/generate-reports-html.mjs` |
| `npm run run:analyse-trends` | `node scanner/analyse-trends.mjs` |

### 19.2 `.achecker.yml` – IBM Equal Access Checker

```yaml
ruleArchive: latest
policies:
  - IBM_Accessibility
failLevels:
  - violation
  - potentialviolation
reportLevels:
  - violation
  - potentialviolation
  - recommendation
  - potentialrecommendation
  - manual
outputFormat:
  - json
outputFolder: results
puppeteerArgs:
  - --no-sandbox
  - --disable-setuid-sandbox
```

The `--no-sandbox` flags are required for running Chromium in GitHub Actions (Docker environment).

### 19.3 `scanner/schemas/scan-request.schema.json`

JSON Schema for validating parsed scan requests:

| Field | Type | Constraint |
|---|---|---|
| `requestId` | string | required |
| `issueNumber` | integer | required, min 1 |
| `issueUrl` | string (URI) | required |
| `submittedBy` | string | required |
| `submittedAt` | string (date-time) | required |
| `requestedUrls` | array of URI strings | required, 1–100 items (500 absolute hard limit; batches above 100 are split by `submit.js` before schema validation) |
| `scanTitle` | string | optional |
| `engines` | array of enum | optional: `all`, `axe`, `alfa`, `accesslint`, `equalaccess`, `qualweb` |
| `pageLoadDelay` | integer | optional, 0–300 ms |

---

## 20. Data Flow

```
User
  │
  │  visits
  ▼
index.html (GitHub Pages)
  │
  │  types URLs + title
  ▼
submit.js (client-side validation + GitHub URL construction)
  │
  │  redirects to GitHub
  ▼
github.com/{owner}/{repo}/issues/new?title=SCAN:...&body=...
  │
  │  user submits issue
  ▼
GitHub Issues API → issues.opened event
  │
  │  triggers
  ▼
scan-request.yml (GitHub Actions)
  │
  ├─ node scanner/parse-issue.mjs   (parse payload → request object)
  ├─ node scanner/validate-targets.mjs  (re-validate URLs)
  │
  └─ node scanner/run-scan.mjs (orchestrate scan)
       │
       ├─ runAxeAudit()     → axe-core  (Playwright)
       ├─ runAlfaAudit()    → ALFA CLI  (subprocess)
       ├─ runEqualAccessAudit() → IBM   (Puppeteer)
       ├─ runAccessLintAudit()  → AccessLint (Playwright inject)
       └─ runQualWebAudit() → QualWeb   (Puppeteer isolated)
            │
            ├─ computeFindingFingerprint()   (SHA-256 stable IDs)
            ├─ loadFingerprintStore()        (load history)
            ├─ annotateWithFingerprints()    (first-seen dates)
            ├─ computeCrossEngineWcagOverlap() (multi-engine compare)
            │
            ├─ report.json     (machine-readable)
            ├─ report.md       (Markdown)
            ├─ report.html     (interactive, self-contained)
            ├─ report.csv      (spreadsheet)
            ├─ report-overlap.json
            └─ report-overlap.md
  │
  │  git commit + push to main
  ▼
deploy-pages.yml (GitHub Actions)
  │
  ▼
GitHub Pages (reports/ + reports.html live)
  │
  ▼
scan-github-pages.yml (self-scan of the deployed site)
  │
  ▼
reports.html (dashboard updated with new scan result)
  │
  ▼
User views results at reports.html
```

---

## 21. Capacity & Limits

| Metric | Value |
|---|---|
| Max URLs per scan request | 500 (absolute hard limit; recommended: 100–150) |
| URLs enforced by JSON Schema | 1–100 per validated request object (submit.js applies the 500 limit before schema validation by splitting large batches) |
| Default scan duration | 30–60 minutes |
| GitHub Actions job time limit | 6 hours (practical limit: ~50 min via `TOTAL_SCAN_TIMEOUT_MS`) |
| Max concurrent scans | 1 (sequential via concurrency group) |
| Max ERR_ABORTED errors per URL | 5 (configurable) |
| Max trend history loaded | 5 most recent scans |
| Max crawl URLs | 20 (default, via random sample) |
| Scanning engines available | 5 |
| Default engines per scan | 2 (axe + 1 random) |
| Non-web file extensions blocked | 40+ |
| Private IPv4 ranges blocked | 6 |
| Private IPv6 ranges blocked | 4 |
| Scanner module count | 11 `.mjs` files |
| Unit test modules | 21 |
| GitHub Actions workflows | 8 |
| Report artifacts per scan | Up to 6 files |

---

## Related Documentation

| Document | Purpose |
|---|---|
| [README.md](README.md) | User guide and getting-started instructions |
| [ACCESSIBILITY.md](ACCESSIBILITY.md) | WCAG 2.2 AA requirements and dev best practices |
| [TIMEOUT-CONFIG.md](TIMEOUT-CONFIG.md) | Timeout configuration and tuning guide |
| [AGENTS.md](AGENTS.md) | AI agent coding instructions and conventions |
| [SUSTAINABILITY.md](SUSTAINABILITY.md) | Digital sustainability policy and AI disclosure |
| [SECURITY.md](SECURITY.md) | Security reporting policy |
| [scanner/README.md](scanner/README.md) | Scanner module internals |

---

*Generated from codebase analysis. For questions or corrections, open an issue on [GitHub](https://github.com/mgifford/open-scans).*
