# Scan Report: GitHub Pages accessibility check

- Issue: https://github.com/mgifford/open-scans/actions/runs/23163875720
- Submitted by: github-actions[bot]
- Scanned at: 2026-03-16T20:15:58.766Z
- Engines used: AXE
- Scan duration: 0.1 minutes
- Total URLs submitted: 1
- Accepted public URLs: 1
- Rejected URLs: 0
- 🎨 **Accessibility personalization (CSS media queries):**
  - 🌙 Dark mode: None of the scanned URLs support `prefers-color-scheme: dark`
  - ⚡ Reduced motion: None of the scanned URLs support `prefers-reduced-motion: reduce`
  - 🔍 High contrast: None of the scanned URLs support `prefers-contrast: more`
  - 🖥️ Forced colors: None of the scanned URLs support `forced-colors: active`
  - 🪟 Reduced transparency: None of the scanned URLs support `prefers-reduced-transparency: reduce`
- ALFA outcomes: 0 passed, 0 failed, 0 cantTell, 0 inapplicable
- axe outcomes: 64 passed, 5 failed, 0 cantTell, 60 inapplicable
- Equal Access outcomes: 0 passed, 0 failed (0 unique, 0 duplicate), 0 cantTell, 0 inapplicable
- AccessLint outcomes: 0 passed, 0 failed (0 unique, 0 duplicate), 0 cantTell, 0 inapplicable
- QualWeb outcomes: 0 passed, 0 failed, 0 cantTell, 0 inapplicable
- Duplicate findings caught by later scanners: 0

## 🎯 Pages with Most Errors

Focus your efforts on these pages to make the biggest impact (combined scanner unique failures):

| Page | axe Unique | Total Unique | Page Title |
|---|---:|---:|---|
| [View Page](https://mgifford.github.io/open-scans/) | 5 | **5** | Open Scans - Free Automated Accessibility Scanning |

## 🔧 Most Common Issues (ALFA)

These ALFA accessibility issues appear most frequently across your pages:

✅ No ALFA failed rules detected!

## 🔧 Most Common Issues (axe)

These axe accessibility issues appear most frequently across your pages:

| Rule | Pages Affected | Documentation |
|---|---:|---|
| landmark-one-main | **1** of 1 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/landmark-one-main) |
| region | **1** of 1 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/region) |

> 💡 **Tip**: Click on the rule documentation links to learn how to fix each issue. Consider fixing the most common issues first for maximum impact.

> 🤖 **Future Enhancement**: This report will soon include AI-powered fix suggestions for authenticated GitHub users (opt-in only, no auto-run AI).

## 🔍 Cross-Page Patterns: Common HTML Issues

These HTML patterns cause the same accessibility errors across multiple pages. **Fix the pattern once in your codebase to fix it everywhere!**

✅ No recurring HTML patterns found across multiple pages. Each issue appears to be page-specific.

## 📊 Detailed Results

Complete scan results for all tested pages:

| Submitted URL | Final URL | Status | HTTP | Redirected | Time (ms) | axe Unique | ALFA Unique | Equal Access Unique | AccessLint Unique | Duplicates | Notes |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|
| https://mgifford.github.io/open-scans/ | https://mgifford.github.io/open-scans/ | OK | 200 | no | 4451 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-one-main, region |

## Detailed Failure Information (ALFA)

## Detailed Failure Information (axe)

### https://mgifford.github.io/open-scans/

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html lang="en">`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h1>Submit URLs for Accessibility Scanning</h1>`
- XPath: `h1`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="subtitle">Enter up to 500 URLs to scan for accessibility issues using multiple WCAG 2.2 checking engines</p>`
- XPath: `.subtitle`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="form-group">`
- XPath: `.form-group:nth-child(1)`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="form-group">`
- XPath: `.form-group:nth-child(2)`

