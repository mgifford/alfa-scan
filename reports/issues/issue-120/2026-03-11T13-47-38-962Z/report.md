# Scan Report: Green Software Foundation - 1 Page Sample

- Issue: https://github.com/mgifford/open-scans/issues/120
- Submitted by: mgifford
- Scanned at: 2026-03-11T13:46:46.708Z
- Engines used: AXE, EQUALACCESS
- Scan duration: 0.1 minutes
- Total URLs submitted: 1
- Accepted public URLs: 1
- Rejected URLs: 0
- 🌙 Dark mode: None of the scanned URLs support `prefers-color-scheme: dark`
- ALFA outcomes: 0 passed, 0 failed, 0 cantTell, 0 inapplicable
- axe outcomes: 1490 passed, 10 failed, 5 cantTell, 51 inapplicable
- Equal Access outcomes: 5741 passed, 31 failed (28 unique, 3 duplicate), 19 cantTell, 0 inapplicable
- AccessLint outcomes: 0 passed, 0 failed (0 unique, 0 duplicate), 0 cantTell, 0 inapplicable
- QualWeb outcomes: 0 passed, 0 failed, 0 cantTell, 0 inapplicable
- Duplicate findings caught by later scanners: 3

## 🎯 Priority: Pages with Most Errors

Focus your efforts on these pages to make the biggest impact (combined scanner unique failures):

| Page | axe Unique | Equal Access Unique | Total Unique | Page Title |
|---|---:|---:|---:|---|
| [View Page](https://greensoftware.foundation/) | 10 | 28 | **38** | Green Software Foundation  \| GSF |

## 🔧 Priority: Most Common Issues (ALFA)

These ALFA accessibility issues appear most frequently across your pages:

✅ No ALFA failed rules detected!

## 🔧 Priority: Most Common Issues (axe)

These axe accessibility issues appear most frequently across your pages:

| Rule | Pages Affected | Documentation |
|---|---:|---|
| button-name | **1** of 1 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/button-name) |
| link-name | **1** of 1 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/link-name) |
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
| https://greensoftware.foundation/ | https://greensoftware.foundation/ | OK | 200 | no | 7823 | 10 | 0 | 28 | 0 | 3 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: button-name, link-name, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_content_in_landmark, aria_form_label_unique, element_attribute_deprecated, input_label_visible, style_background_decorative, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled, text_block_heading |

## Detailed Failure Information (ALFA)

## Detailed Failure Information (axe)

### https://greensoftware.foundation/

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-btn"><svg style="width:1.5rem;height:1.5rem" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></button>`
- XPath: `.search-btn:nth-child(5)`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a href="https://www.youtube.com/@greensoftwarefoundation3662" target="_blank" rel="noopener noreferrer" class="search-btn">`
- XPath: `.cta-wrapper > .search-btn[target="_blank"][rel="noopener noreferrer"]:nth-child(1)`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a href="https://movement.greensoftware.foundation/about" target="_blank" rel="noopener noreferrer" class="search-btn">`
- XPath: `.search-btn[target="_blank"][rel="noopener noreferrer"]:nth-child(2)`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a href="https://www.linkedin.com/company/green-software-foundation" target="_blank" rel="noopener noreferrer" class="search-btn">`
- XPath: `.search-btn[target="_blank"][rel="noopener noreferrer"]:nth-child(3)`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a href="https://github.com/Green-Software-Foundation" target="_blank" rel="noopener noreferrer" class="search-btn">`
- XPath: `.search-btn[target="_blank"][rel="noopener noreferrer"]:nth-child(4)`

**Failure 5:**
- Message: Links must have discernible text
- HTML: `<a href="https://github.com/Green-Software-Foundation" target="_blank" rel="noopener noreferrer">`
- XPath: `.social-links > li:nth-child(1) > a[target="_blank"][rel="noopener noreferrer"]`

*... and 2 more failures for this rule*

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="banner-wrapper">`
- XPath: `.banner-wrapper`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="sub-footer"><p>The Joint Development Foundation Projects, LLC is an affiliate of the Linux Foundation.</p></div>`
- XPath: `.sub-footer`

