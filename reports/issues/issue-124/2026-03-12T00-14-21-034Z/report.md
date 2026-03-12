# Scan Report: Test

- Issue: https://github.com/mgifford/open-scans/issues/124
- Submitted by: pattonwebz
- Scanned at: 2026-03-12T00:13:33.212Z
- Engines used: AXE, EQUALACCESS
- Scan duration: 0.2 minutes
- Total URLs submitted: 1
- Accepted public URLs: 1
- Rejected URLs: 0
- 🌙 Dark mode: None of the scanned URLs support `prefers-color-scheme: dark`
- ALFA outcomes: 0 passed, 0 failed, 0 cantTell, 0 inapplicable
- axe outcomes: 397 passed, 9 failed, 8 cantTell, 45 inapplicable
- Equal Access outcomes: 1255 passed, 40 failed (36 unique, 4 duplicate), 34 cantTell, 0 inapplicable
- AccessLint outcomes: 0 passed, 0 failed (0 unique, 0 duplicate), 0 cantTell, 0 inapplicable
- QualWeb outcomes: 0 passed, 0 failed, 0 cantTell, 0 inapplicable
- Duplicate findings caught by later scanners: 4

## 🎯 Priority: Pages with Most Errors

Focus your efforts on these pages to make the biggest impact (combined scanner unique failures):

| Page | axe Unique | Equal Access Unique | Total Unique | Page Title |
|---|---:|---:|---:|---|
| [View Page](https://www.pattonwebz.com/) | 9 | 36 | **45** | William Patton - WordPress Developer - PattonWebz |

## 🔧 Priority: Most Common Issues (ALFA)

These ALFA accessibility issues appear most frequently across your pages:

✅ No ALFA failed rules detected!

## 🔧 Priority: Most Common Issues (axe)

These axe accessibility issues appear most frequently across your pages:

| Rule | Pages Affected | Documentation |
|---|---:|---|
| heading-order | **1** of 1 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/heading-order) |
| landmark-unique | **1** of 1 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/landmark-unique) |
| link-in-text-block | **1** of 1 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/link-in-text-block) |
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
| https://pattonwebz.com | https://www.pattonwebz.com/ | OK | 200 | yes | 12253 | 9 | 0 | 36 | 0 | 4 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: heading-order, landmark-unique, link-in-text-block, link-name, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_complementary_labelled, aria_content_in_landmark, aria_landmark_name_unique, aria_role_redundant, element_tabbable_unobscured, input_label_exists, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, widget_tabbable_exists |

## Detailed Failure Information (ALFA)

## Detailed Failure Information (axe)

### https://pattonwebz.com

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3 class="wpmtst-testimonial-heading testimonial-heading">Robert DeVore – WP Dispensary</h3>`
- XPath: `.post-2891 > .wpmtst-testimonial-inner.testimonial-inner > .wpmtst-testimonial-heading.testimonial-heading`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<aside id="text-2" class="widget widget_text">`
- XPath: `#text-2`

#### Rule: [link-in-text-block](https://dequeuniversity.com/rules/axe/4.11/link-in-text-block?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a href="https://www.ninjawebz.com/" title="NinjaWebz Infrastructure">NinjaWebz</a>`
- XPath: `a[href$="ninjawebz.com/"]`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a class="prev" href="#"></a>`
- XPath: `.prev`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a class="next" href="#"></a>`
- XPath: `.next`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a href="https://www.pattonwebz.com/web-development/creating-a-keyboard-focus-trap/" class="post-thumb">`
- XPath: `.post-12354 > header > .post-thumb`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a href="https://www.pattonwebz.com/theme-dev/adding-a-custom-color-palette-blocks-to-a-gutenberg-ready-theme/" class="post-thumb">`
- XPath: `.post-12073 > header > .post-thumb`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="row">`
- XPath: `body > .container-main.container > .row:nth-child(1)`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="row">`
- XPath: `.container-main.container > .row:nth-child(2)`

