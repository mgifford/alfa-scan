# Scan Report: Bixal Accessibility Scan

- Issue: https://github.com/mgifford/open-scans/issues/216
- Submitted by: bi-zz-xal
- Scanned at: 2026-03-25T15:54:25.037Z
- Engines used: AXE, EQUALACCESS
- Scan duration: 0.2 minutes
- Total URLs submitted: 1
- Accepted public URLs: 1
- Rejected URLs: 0
- 🎨 **Accessibility personalization (CSS media queries):**
  - 🌙 Dark mode: None of the scanned URLs support `prefers-color-scheme: dark`
  - ⚡ **Reduced motion:** 1 of 1 URLs (100%) support `prefers-reduced-motion: reduce`
  - 🔍 High contrast: None of the scanned URLs support `prefers-contrast: more`
  - 🖥️ **Forced colors:** 1 of 1 URLs (100%) support `forced-colors: active`
  - 🪟 Reduced transparency: None of the scanned URLs support `prefers-reduced-transparency: reduce`
- ALFA outcomes: 0 passed, 0 failed, 0 cantTell, 0 inapplicable
- axe outcomes: 683 passed, 20 failed, 23 cantTell, 37 inapplicable
- Equal Access outcomes: 1671 passed, 38 failed (31 unique, 7 duplicate), 25 cantTell, 0 inapplicable
- AccessLint outcomes: 0 passed, 0 failed (0 unique, 0 duplicate), 0 cantTell, 0 inapplicable
- QualWeb outcomes: 0 passed, 0 failed, 0 cantTell, 0 inapplicable
- Duplicate findings caught by later scanners: 9

## 🎯 Pages with Most Errors

Focus your efforts on these pages to make the biggest impact (combined scanner unique failures):

| Page | axe Unique | Equal Access Unique | Total Unique | Page Title |
|---|---:|---:|---:|---|
| [View Page](https://www.bixal.com/) | 18 | 31 | **49** | We are Bixal |

## 🔧 Most Common Issues (ALFA)

These ALFA accessibility issues appear most frequently across your pages:

✅ No ALFA failed rules detected!

## 🔧 Most Common Issues (axe)

These axe accessibility issues appear most frequently across your pages:

| Rule | Pages Affected | Documentation |
|---|---:|---|
| definition-list | **1** of 1 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/definition-list) |
| landmark-no-duplicate-banner | **1** of 1 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/landmark-no-duplicate-banner) |
| landmark-unique | **1** of 1 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/landmark-unique) |
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
| https://www.bixal.com | https://www.bixal.com/ | OK | 200 | no | 10895 | 18 | 0 | 31 | 0 | 9 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: definition-list, landmark-no-duplicate-banner, landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_banner_label_unique, aria_content_in_landmark, aria_landmark_name_unique, aria_role_valid, element_attribute_deprecated, frame_src_valid, heading_markup_misuse, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_sensory_misuse |

## Detailed Failure Information (ALFA)

## Detailed Failure Information (axe)

### https://www.bixal.com

#### Rule: [definition-list](https://dequeuniversity.com/rules/axe/4.11/definition-list?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: <dl> elements must only directly contain properly-ordered <dt> and <dd> groups, <script>, <template> or <div> elements
- HTML: `<dl class="bix-description-list">`
- XPath: `.bix-graphic-list__item:nth-child(1) > .bix-graphic-list__body > .bix-description-list-collection.component--type--description-list-collection.component > .component--type--description-list.component.component--view-mode--default > dl`

**Failure 2:**
- First identified: 2026-03-25
- Message: <dl> elements must only directly contain properly-ordered <dt> and <dd> groups, <script>, <template> or <div> elements
- HTML: `<dl class="bix-description-list">`
- XPath: `.bix-graphic-list__item:nth-child(2) > .bix-graphic-list__body > .bix-description-list-collection.component--type--description-list-collection.component > .component--type--description-list.component.component--view-mode--default > dl`

**Failure 3:**
- First identified: 2026-03-25
- Message: <dl> elements must only directly contain properly-ordered <dt> and <dd> groups, <script>, <template> or <div> elements
- HTML: `<dl class="bix-description-list">`
- XPath: `.bix-graphic-list__item:nth-child(3) > .bix-graphic-list__body > .bix-description-list-collection.component--type--description-list-collection.component > .component--type--description-list.component.component--view-mode--default > dl`

**Failure 4:**
- First identified: 2026-03-25
- Message: <dl> elements must only directly contain properly-ordered <dt> and <dd> groups, <script>, <template> or <div> elements
- HTML: `<dl class="bix-description-list">`
- XPath: `.bix-graphic-list__item:nth-child(4) > .bix-graphic-list__body > .bix-description-list-collection.component--type--description-list-collection.component > .component--type--description-list.component.component--view-mode--default > dl`

**Failure 5:**
- First identified: 2026-03-25
- Message: <dl> elements must only directly contain properly-ordered <dt> and <dd> groups, <script>, <template> or <div> elements
- HTML: `<dl class="bix-description-list">`
- XPath: `.bix-graphic-list__item:nth-child(5) > .bix-graphic-list__body > .bix-description-list-collection.component--type--description-list-collection.component > .component--type--description-list.component.component--view-mode--default > dl`

*... and 1 more failures for this rule*

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: Document should not have more than one banner landmark
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-title-prefix">Contact</div>`
- XPath: `#contact > .bix-container > .bix-title-prefix`

**Failure 2:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2 class="bix-section__title">       How can we help?<br>       We'd love to hear from you.     </h2>`
- XPath: `#contact > .bix-container > h2`

**Failure 3:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<p>Required fields are marked with an asterisk&nbsp;(<abbr title="required" class="bix-hint bix-hint--required">*</abbr>).</p>`
- XPath: `#contact-message-site-wide-form > p`

**Failure 4:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item bix-grid__item--full">`
- XPath: `.bix-grid__item--full.bix-grid__item:nth-child(1)`

**Failure 5:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item">`
- XPath: `.bix-grid__item:nth-child(2)`

*... and 5 more failures for this rule*

