# Scan Report: Drupal

- Issue: https://github.com/mgifford/open-scans/issues/220
- Submitted by: mgifford
- Scanned at: 2026-03-25T20:37:31.828Z
- Engines used: AXE, ALFA
- Scan duration: 0.3 minutes
- Total URLs submitted: 1
- Accepted public URLs: 1
- Rejected URLs: 0
- 🎨 **Accessibility personalization (CSS media queries):**
  - 🌙 Dark mode: None of the scanned URLs support `prefers-color-scheme: dark`
  - ⚡ Reduced motion: None of the scanned URLs support `prefers-reduced-motion: reduce`
  - 🔍 High contrast: None of the scanned URLs support `prefers-contrast: more`
  - 🖥️ Forced colors: None of the scanned URLs support `forced-colors: active`
  - 🪟 Reduced transparency: None of the scanned URLs support `prefers-reduced-transparency: reduce`
- ALFA outcomes: 54 passed, 5 failed, 1 cantTell, 68 inapplicable
- axe outcomes: 0 passed, 0 failed, 0 cantTell, 0 inapplicable
- Equal Access outcomes: 0 passed, 0 failed (0 unique, 0 duplicate), 0 cantTell, 0 inapplicable
- AccessLint outcomes: 0 passed, 0 failed (0 unique, 0 duplicate), 0 cantTell, 0 inapplicable
- QualWeb outcomes: 0 passed, 0 failed, 0 cantTell, 0 inapplicable
- Duplicate findings caught by later scanners: 4

## 🎯 Pages with Most Errors

Focus your efforts on these pages to make the biggest impact (combined scanner unique failures):

| Page | axe Unique | ALFA Unique | Total Unique | Page Title |
|---|---:|---:|---:|---|
| [View Page](https://www.drupal.org/) | 0 | 1 | **1** | Access to this page has been denied. |

## 🔧 Most Common Issues (ALFA)

These ALFA accessibility issues appear most frequently across your pages:

| Rule | Pages Affected | Documentation |
|---|---:|---|
| [SIA-R73](https://alfa.siteimprove.com/rules/sia-r73): Text spacing can be adjusted without loss of content | **1** of 1 | [View Rule](https://alfa.siteimprove.com/rules/sia-r73) |

> 💡 **Tip**: Click on the rule documentation links to learn how to fix each issue.


## 🔧 Most Common Issues (axe)

These axe accessibility issues appear most frequently across your pages:

✅ No axe failed rules detected!

## 🔍 Cross-Page Patterns: Common HTML Issues

These HTML patterns cause the same accessibility errors across multiple pages. **Fix the pattern once in your codebase to fix it everywhere!**

✅ No recurring HTML patterns found across multiple pages. Each issue appears to be page-specific.

## 📊 Detailed Results

Complete scan results for all tested pages:

| Submitted URL | Final URL | Status | HTTP | Redirected | Time (ms) | axe Unique | ALFA Unique | Equal Access Unique | AccessLint Unique | Duplicates | Notes |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|
| https://www.drupal.org | https://www.drupal.org/ | FAIL | 403 | no | 16009 | 0 | 1 | 0 | 0 | 4 | frame.evaluate: TypeError: Cannot read properties of undefined (reading 'toLowerCase')     at flattenTree (eval at evaluate (:290:30), <anonymous>:18422:37)     at eval (eval at evaluate (:290:30), <anonymous>:18410:21)     at Array.forEach (<anonymous>)     at createChildren (eval at evaluate (:290:30), <anonymous>:18409:18)     at flattenTree (eval at evaluate (:290:30), <anonymous>:18451:26)     at eval (eval at evaluate (:290:30), <anonymous>:18410:21)     at Array.forEach (<anonymous>)     at createChildren (eval at evaluate (:290:30), <anonymous>:18409:18)     at flattenTree (eval at evaluate (:290:30), <anonymous>:18451:26)     at eval (eval at evaluate (:290:30), <anonymous>:18410:21) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R73 (Text spacing can be adjusted without loss of content) |

## Detailed Failure Information (ALFA)

### https://www.drupal.org

#### Rule: [SIA-R73: Text spacing can be adjusted without loss of content](https://alfa.siteimprove.com/rules/sia-r73)
**WCAG**: [SC 1.4.12](https://www.w3.org/WAI/WCAG22/Understanding/text-spacing) (Level AA)

**Failure 1:**
- First identified: 2026-03-25
- Message: The line height of the paragraph is `normal` which will result in a line height of less than 1.5
- HTML: `<p> You have been blocked because we believe you are ...</p>`
- XPath: `/p`

## Detailed Failure Information (axe)

