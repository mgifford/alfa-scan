# Scan Report: Homepage

- Issue: https://github.com/mgifford/open-scans/issues/91
- Submitted by: Siddarthsingh49
- Scanned at: 2026-03-06T16:19:27.716Z
- Engines used: All engines (AXE, ALFA, Equal Access, AccessLint, QualWeb)
- Scan duration: 0.3 minutes
- Total URLs submitted: 1
- Accepted public URLs: 1
- Rejected URLs: 0
- 🌙 Dark mode: None of the scanned URLs support `prefers-color-scheme: dark`
- ALFA outcomes: 812 passed, 17 failed, 5 cantTell, 54 inapplicable
- axe outcomes: 1137 passed, 2 failed, 9 cantTell, 43 inapplicable
- Equal Access outcomes: 3670 passed, 56 failed (56 unique, 0 duplicate), 46 cantTell, 0 inapplicable
- AccessLint outcomes: 87 passed, 5 failed (5 unique, 0 duplicate), 0 cantTell, 0 inapplicable
- QualWeb outcomes: 623 passed, 3 failed, 122 cantTell, 19 inapplicable
- Duplicate findings caught by later scanners: 6

## 🎯 Priority: Pages with Most Errors

Focus your efforts on these pages to make the biggest impact (combined scanner unique failures):

| Page | axe Unique | ALFA Unique | Equal Access Unique | AccessLint Unique | QualWeb | Total Unique | Page Title |
|---|---:|---:|---:|---:|---:|---:|---|
| [View Page](https://www.armani.com/en-ca/?searchVers=2) | 2 | 13 | 56 | 5 | 3 | **79** | Armani.com - Official Website \| Armani |

## 🔧 Priority: Most Common Issues (ALFA)

These ALFA accessibility issues appear most frequently across your pages:

| Rule | Pages Affected | Documentation |
|---|---:|---|
| [SIA-R11](https://alfa.siteimprove.com/rules/sia-r11): Button elements have an accessible name | **1** of 1 | [View Rule](https://alfa.siteimprove.com/rules/sia-r11) |
| [SIA-R111](https://alfa.siteimprove.com/rules/sia-r111): Interactive elements have a sufficient target size | **1** of 1 | [View Rule](https://alfa.siteimprove.com/rules/sia-r111) |
| [SIA-R17](https://alfa.siteimprove.com/rules/sia-r17) | **1** of 1 | [View Rule](https://alfa.siteimprove.com/rules/sia-r17) |
| [SIA-R3](https://alfa.siteimprove.com/rules/sia-r3): lang attribute has a valid language code | **1** of 1 | [View Rule](https://alfa.siteimprove.com/rules/sia-r3) |
| [SIA-R57](https://alfa.siteimprove.com/rules/sia-r57): Landmarks don't repeat the same content | **1** of 1 | [View Rule](https://alfa.siteimprove.com/rules/sia-r57) |

> 💡 **Tip**: Click on the rule documentation links to learn how to fix each issue.


## 🔧 Priority: Most Common Issues (axe)

These axe accessibility issues appear most frequently across your pages:

| Rule | Pages Affected | Documentation |
|---|---:|---|
| aria-dialog-name | **1** of 1 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/aria-dialog-name) |
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
| https://www.armani.com/en-ca/?searchVers=2 | https://www.armani.com/en-ca/?searchVers=2 | OK | 200 | no | 19804 | 2 | 13 | 56 | 5 | 6 | Armani.com - Official Website \| Armani |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R11 (Button elements have an accessible name), SIA-R111 (Interactive elements have a sufficient target size), SIA-R17, SIA-R3 (lang attribute has a valid language code), SIA-R57 (Landmarks don't repeat the same content) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-dialog-name, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_descendant_valid, aria_hidden_nontabbable, aria_role_redundant, element_attribute_deprecated, element_id_unique, element_tabbable_unobscured, element_tabbable_visible, form_submit_button_exists, html_skipnav_exists, input_label_visible, label_name_visible, list_markup_review, style_color_misuse, style_focus_visible, style_highcontrast_visible, target_spacing_sufficient, text_contrast_sufficient |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, labels-and-names/aria-dialog-name, labels-and-names/label-content-mismatch |

## Detailed Failure Information (ALFA)

### https://www.armani.com/en-ca/?searchVers=2

#### Rule: [SIA-R11: Button elements have an accessible name](https://alfa.siteimprove.com/rules/sia-r11)

**Failure 1:**
- Message: The link does not have an accessible name
- HTML: `<a href="https://www.armani.com/emporio-armani/experience/woman" rel="noopener noreferrer" tabindex="0" data-tracking="BA_https_www_armani_com_emporio_armani_experience_woman" pos-tracking="hero" class="text-editorial-undefined">...</a>`
- XPath: `/a[@class="text-editorial-undefined"]`

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)

**Failure 1:**
- Message: Target has insufficient size
- HTML: `<a data-testid="skip-link" href="#main" class="bg-primitives-black text-primitives-off-white absolute -top-10 left-0 z-[9999] p-2 transition-all duration-300 focus-within:top-0">Skip to content</a>`
- XPath: `/a[@class="bg-primitives-black text-primitives-off-white absolute -top-10 left-0 z-[9999] p-2 transition-all duration-300 focus-within:top-0"]`

**Failure 2:**
- Message: Target has insufficient size
- HTML: `<a href="https://www.armani.com/my-account">Log in to your account to get free shipping on ord...</a>`
- XPath: `/a`

**Failure 3:**
- Message: Target has insufficient size
- HTML: `<button aria-expanded="false" aria-haspopup="dialog" class="mobile-menu-toggler relative z-[1000] flex cursor-pointer items-center justify-center p-2.5 lg:h-6 lg:gap-2 lg:p-0 max-lg:bg-neutral-black max-lg:text-neutral-white max-lg:rounded-full max-lg:px-3" aria-label="Menu" data-v-40b0bd9b="">...</button>`
- XPath: `/button[@class="mobile-menu-toggler relative z-[1000] flex cursor-pointer items-center justify-center p-2.5 lg:h-6 lg:gap-2 lg:p-0 max-lg:bg-neutral-black max-lg:text-neutral-white max-lg:rounded-full max-lg:px-3"]`

**Failure 4:**
- Message: Target has insufficient size
- HTML: `<button class="button-search flex cursor-pointer items-center gap-2" aria-label="Search" aria-haspopup="dialog">...</button>`
- XPath: `/button[@class="button-search flex cursor-pointer items-center gap-2"]`

**Failure 5:**
- Message: Target has insufficient size
- HTML: `<button class="text-button-2 group flex gap-2 p-0 text-link-6 w-fit h-auto underline-effect-appear cta-l flex-row-reverse inline-flex" aria-haspopup="dialog" data-test-id="header-action-support-cta-contacts" data-v-aad19750="">...</button>`
- XPath: `/button[@class="text-button-2 group flex gap-2 p-0 text-link-6 w-fit h-auto underline-effect-appear cta-l flex-row-reverse inline-flex"]`

*... and 4 more failures for this rule*

#### Rule: [SIA-R17](https://alfa.siteimprove.com/rules/sia-r17)

**Failure 1:**
- Message: The element is either tabbable or has tabbable descendants
- HTML: `<button aria-hidden="true" style="position:fixed;top:1;left:1;width:1;height:0;padding:0;margin:-1;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0;" type="button" />`
- XPath: `/button`

#### Rule: [SIA-R3: lang attribute has a valid language code](https://alfa.siteimprove.com/rules/sia-r3)

**Failure 1:**
- Message: The element does not have a unique ID
- HTML: `<clipPath id="clip0_14493_3415">...</clipPath>`
- XPath: `/clipPath[@id="clip0_14493_3415"]`

#### Rule: [SIA-R57: Landmarks don't repeat the same content](https://alfa.siteimprove.com/rules/sia-r57)

**Failure 1:**
- Message: The text is not included in a landmark region

## Detailed Failure Information (axe)

### https://www.armani.com/en-ca/?searchVers=2

#### Rule: [aria-dialog-name](https://dequeuniversity.com/rules/axe/4.11/aria-dialog-name?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: ARIA dialog and alertdialog nodes should have an accessible name
- HTML: `<div role="dialog" class="lv-mega-menu__wrapper text-text-primary bg-background-secondary lg:border-primitives-grey-100 !h-screen lg:border-r" data-testid="lv-mega-menu"><!----></div>`
- XPath: `.lv-mega-menu__wrapper`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="" data-v-a4c9fe0c="">`
- XPath: `#strips-container > div[data-v-a4c9fe0c=""]`

