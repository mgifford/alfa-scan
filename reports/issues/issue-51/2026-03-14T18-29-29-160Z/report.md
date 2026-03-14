# Scan Report: California

- Issue: https://github.com/mgifford/open-scans/issues/51
- Submitted by: mgifford
- Scanned at: 2026-03-14T18:28:34.658Z
- Engines used: AXE, EQUALACCESS
- Scan duration: 2.5 minutes
- Total URLs submitted: 28
- Accepted public URLs: 28
- Rejected URLs: 0
- 🌙 Dark mode: None of the scanned URLs support `prefers-color-scheme: dark`
- ALFA outcomes: 0 passed, 0 failed, 0 cantTell, 0 inapplicable
- axe outcomes: 20796 passed, 17 failed, 50 cantTell, 1206 inapplicable
- Equal Access outcomes: 64411 passed, 881 failed (530 unique, 351 duplicate), 633 cantTell, 0 inapplicable
- AccessLint outcomes: 0 passed, 0 failed (0 unique, 0 duplicate), 0 cantTell, 0 inapplicable
- QualWeb outcomes: 0 passed, 0 failed, 0 cantTell, 0 inapplicable
- Duplicate findings caught by later scanners: 351

## 🎯 Pages with Most Errors

Focus your efforts on these pages to make the biggest impact (combined scanner unique failures):

| Page | axe Unique | Equal Access Unique | Total Unique | Page Title |
|---|---:|---:|---:|---|
| [View Page](https://www.ca.gov/topics/personal-records/) | 2 | 51 | **53** | Personal records \| CA.gov |
| [View Page](https://www.ca.gov/topics/assistance/) | 2 | 50 | **52** | Assistance and social programs \| CA.gov |
| [View Page](https://www.ca.gov/topics/dmv-auto/) | 2 | 50 | **52** | DMV/Auto \| CA.gov |
| [View Page](https://www.ca.gov/topics/jobs/) | 2 | 50 | **52** | Jobs and unemployment \| CA.gov |
| [View Page](https://www.ca.gov/topics/businesses/) | 2 | 46 | **48** | Businesses \| CA.gov |
| [View Page](https://www.ca.gov/topics/taxes/) | 2 | 46 | **48** | Taxes \| CA.gov |
| [View Page](https://www.ca.gov/topics/disaster-recovery/) | 2 | 18 | **20** | Disaster recovery \| CA.gov |
| [View Page](https://www.ca.gov/) | 0 | 16 | **16** | California State Portal \| CA.gov |
| [View Page](https://www.ca.gov/support/) | 0 | 16 | **16** | Get help \| CA.gov |
| [View Page](https://www.ca.gov/services/) | 1 | 14 | **15** | Services \| CA.gov |

## 🔧 Most Common Issues (ALFA)

These ALFA accessibility issues appear most frequently across your pages:

✅ No ALFA failed rules detected!

## 🔧 Most Common Issues (axe)

These axe accessibility issues appear most frequently across your pages:

| Rule | Pages Affected | Documentation |
|---|---:|---|
| landmark-unique | **10** of 28 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/landmark-unique) |
| aria-allowed-role | **6** of 28 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/aria-allowed-role) |
| aria-required-children | **1** of 28 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/aria-required-children) |

> 💡 **Tip**: Click on the rule documentation links to learn how to fix each issue. Consider fixing the most common issues first for maximum impact.

> 🤖 **Future Enhancement**: This report will soon include AI-powered fix suggestions for authenticated GitHub users (opt-in only, no auto-run AI).

## 🔍 Cross-Page Patterns: Common HTML Issues

These HTML patterns cause the same accessibility errors across multiple pages. **Fix the pattern once in your codebase to fix it everywhere!**

### 🎯 Top Patterns to Fix (Highest Impact)

#### Pattern 1: Affects 10 page(s) - 10 occurrence(s)

**Scanner**: axe
**Rule**: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate
**Issue**: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

**HTML Pattern**:
```html
<aside class="mobile-sidenav"><div class="container"></div></aside>
```

**XPath** (use in browser DevTools):
```
.mobile-sidenav
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.mobile-sidenav')`
5. The element will be highlighted

**Affected Pages**:
- https://ca.gov/services/
- https://ca.gov/departments/
- https://ca.gov/topics/
- https://ca.gov/topics/assistance/
- https://ca.gov/topics/businesses/
- *...and 5 more page(s)*

---

> 💡 **Pro Tip**: These patterns likely come from shared components or templates in your codebase. Fix them in the component/template source, and the fix will propagate to all affected pages.

## 📊 Detailed Results

Complete scan results for all tested pages:

| Submitted URL | Final URL | Status | HTTP | Redirected | Time (ms) | axe Unique | ALFA Unique | Equal Access Unique | AccessLint Unique | Duplicates | Notes |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|
| https://ca.gov/ | https://www.ca.gov/ | OK | 200 | yes | 8138 | 0 | 0 | 16 | 0 | 10 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_complementary_labelled, element_attribute_deprecated, element_tabbable_visible, figure_label_exists, heading_markup_misuse, style_color_misuse, style_focus_visible, style_highcontrast_visible, style_viewport_resizable, text_block_heading, text_contrast_sufficient, text_sensory_misuse |
| https://ca.gov/website-accessibility-certification.html | https://www.ca.gov/website-accessibility-certification.html | OK | 200 | yes | 4946 | 0 | 0 | 8 | 0 | 4 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_complementary_labelled, element_attribute_deprecated, element_tabbable_visible, style_color_misuse, style_highcontrast_visible, style_viewport_resizable, text_block_heading |
| https://ca.gov/legal/accessibility/ | https://www.ca.gov/legal/accessibility/ | OK | 200 | yes | 5060 | 0 | 0 | 9 | 0 | 3 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_complementary_labelled, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, style_color_misuse, style_highcontrast_visible, style_viewport_resizable, text_block_heading, text_sensory_misuse |
| https://ca.gov/services/ | https://www.ca.gov/services/ | OK | 200 | yes | 5122 | 1 | 0 | 14 | 0 | 3 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-unique |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_complementary_labelled, aria_landmark_name_unique, element_attribute_deprecated, element_tabbable_visible, style_background_decorative, style_color_misuse, style_focus_visible, style_highcontrast_visible, style_viewport_resizable, text_block_heading |
| https://ca.gov/contact/ | https://www.ca.gov/contact/ | OK | 200 | yes | 4794 | 0 | 0 | 8 | 0 | 3 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_complementary_labelled, element_attribute_deprecated, element_tabbable_visible, style_background_decorative, style_color_misuse, style_highcontrast_visible, style_viewport_resizable, text_block_heading |
| https://ca.gov/support/ | https://www.ca.gov/support/ | OK | 200 | yes | 5050 | 0 | 0 | 16 | 0 | 5 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_complementary_labelled, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, style_background_decorative, style_color_misuse, style_highcontrast_visible, style_viewport_resizable, text_block_heading, text_sensory_misuse |
| https://ca.gov/about/about-this-website/ | https://www.ca.gov/about/about-this-website/ | OK | 200 | yes | 4751 | 0 | 0 | 7 | 0 | 3 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_complementary_labelled, element_attribute_deprecated, element_tabbable_visible, style_color_misuse, style_highcontrast_visible, style_viewport_resizable, text_block_heading |
| https://ca.gov/about/sitemap/ | https://www.ca.gov/about/sitemap/ | OK | 200 | yes | 5003 | 0 | 0 | 8 | 0 | 3 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_complementary_labelled, element_attribute_deprecated, element_tabbable_visible, style_background_decorative, style_color_misuse, style_highcontrast_visible, style_viewport_resizable, text_block_heading |
| https://ca.gov/departments/176/services/52/ | https://www.ca.gov/departments/176/services/52/ | OK | 200 | yes | 4720 | 0 | 0 | 10 | 0 | 3 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_complementary_labelled, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, style_color_misuse, style_highcontrast_visible, style_viewport_resizable, text_block_heading |
| https://ca.gov/departments/193/services/15/ | https://www.ca.gov/departments/193/services/15/ | OK | 200 | yes | 4851 | 0 | 0 | 9 | 0 | 3 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_complementary_labelled, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, style_color_misuse, style_highcontrast_visible, style_viewport_resizable, text_block_heading |
| https://ca.gov/departments/220/services/1194/ | https://www.ca.gov/departments/220/services/1194/ | OK | 200 | yes | 5153 | 0 | 0 | 7 | 0 | 3 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_complementary_labelled, element_attribute_deprecated, element_tabbable_visible, style_color_misuse, style_highcontrast_visible, style_viewport_resizable, text_block_heading |
| https://ca.gov/departments/236/services/33/ | https://www.ca.gov/departments/236/services/33/ | OK | 200 | yes | 4874 | 0 | 0 | 11 | 0 | 3 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_complementary_labelled, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, style_color_misuse, style_highcontrast_visible, style_viewport_resizable, text_block_heading |
| https://ca.gov/departments/287/services/25/ | https://www.ca.gov/departments/287/services/25/ | OK | 200 | yes | 4824 | 0 | 0 | 9 | 0 | 3 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_complementary_labelled, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, style_color_misuse, style_highcontrast_visible, style_viewport_resizable, text_block_heading |
| https://ca.gov/departments/287/services/26/ | https://www.ca.gov/departments/287/services/26/ | OK | 200 | yes | 4921 | 0 | 0 | 8 | 0 | 3 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_complementary_labelled, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, style_color_misuse, style_highcontrast_visible, style_viewport_resizable, text_block_heading |
| https://ca.gov/support/technical-help/ | https://www.ca.gov/support/technical-help/ | OK | 200 | yes | 4851 | 0 | 0 | 9 | 0 | 4 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_complementary_labelled, element_attribute_deprecated, element_tabbable_visible, style_background_decorative, style_color_misuse, style_highcontrast_visible, style_viewport_resizable, text_block_heading, text_sensory_misuse |
| https://ca.gov/about-california/ | https://www.ca.gov/about-california/ | OK | 200 | yes | 5635 | 0 | 0 | 13 | 0 | 8 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_complementary_labelled, element_attribute_deprecated, element_tabbable_visible, figure_label_exists, style_background_decorative, style_color_misuse, style_highcontrast_visible, style_viewport_resizable, text_block_heading, text_contrast_sufficient, text_sensory_misuse |
| https://ca.gov/departments/ | https://www.ca.gov/departments/ | OK | 200 | yes | 4610 | 1 | 0 | 14 | 0 | 3 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-unique |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_complementary_labelled, aria_landmark_name_unique, element_attribute_deprecated, element_tabbable_visible, style_background_decorative, style_color_misuse, style_focus_visible, style_highcontrast_visible, style_viewport_resizable, text_block_heading |
| https://ca.gov/topics/ | https://www.ca.gov/topics/ | OK | 200 | yes | 4904 | 1 | 0 | 14 | 0 | 3 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-unique |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_complementary_labelled, aria_landmark_name_unique, element_attribute_deprecated, element_tabbable_visible, style_background_decorative, style_color_misuse, style_focus_visible, style_highcontrast_visible, style_viewport_resizable, text_block_heading |
| https://ca.gov/translate/ | https://www.ca.gov/translate/ | OK | 200 | yes | 5576 | 0 | 0 | 10 | 0 | 3 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_complementary_labelled, element_attribute_deprecated, element_tabbable_visible, style_background_decorative, style_color_misuse, style_highcontrast_visible, style_viewport_resizable, svg_graphics_labelled, text_block_heading |
| https://ca.gov/legal/conditions-of-use/ | https://www.ca.gov/legal/conditions-of-use/ | OK | 200 | yes | 5185 | 0 | 0 | 8 | 0 | 5 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_complementary_labelled, element_attribute_deprecated, element_tabbable_visible, style_color_misuse, style_highcontrast_visible, style_viewport_resizable, text_block_heading, text_sensory_misuse |
| https://ca.gov/legal/privacy-policy/ | https://www.ca.gov/legal/privacy-policy/ | OK | 200 | yes | 4766 | 0 | 0 | 11 | 0 | 12 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_complementary_labelled, element_attribute_deprecated, element_tabbable_visible, style_color_misuse, style_highcontrast_visible, style_viewport_resizable, text_block_heading, text_sensory_misuse |
| https://ca.gov/topics/assistance/ | https://www.ca.gov/topics/assistance/ | OK | 200 | yes | 7437 | 2 | 0 | 50 | 0 | 70 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, landmark-unique |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_attribute_required, aria_complementary_labelled, aria_landmark_name_unique, aria_region_labelled, aria_role_valid, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, fieldset_label_valid, figure_label_exists, input_label_exists, style_color_misuse, style_focus_visible, style_highcontrast_visible, style_viewport_resizable, target_spacing_sufficient, text_block_heading, text_quoted_correctly |
| https://ca.gov/topics/businesses/ | https://www.ca.gov/topics/businesses/ | OK | 200 | yes | 6167 | 2 | 0 | 46 | 0 | 46 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, landmark-unique |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_attribute_required, aria_complementary_labelled, aria_landmark_name_unique, aria_region_labelled, aria_role_valid, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, fieldset_label_valid, figure_label_exists, input_label_exists, style_color_misuse, style_focus_visible, style_highcontrast_visible, style_viewport_resizable, target_spacing_sufficient, text_block_heading |
| https://ca.gov/topics/disaster-recovery/ | https://www.ca.gov/topics/disaster-recovery/ | OK | 200 | yes | 5596 | 2 | 0 | 18 | 0 | 7 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-required-children, landmark-unique |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_child_valid, aria_complementary_labelled, aria_id_unique, aria_landmark_name_unique, aria_role_redundant, element_attribute_deprecated, element_tabbable_visible, style_background_decorative, style_color_misuse, style_focus_visible, style_highcontrast_visible, style_viewport_resizable, text_block_heading |
| https://ca.gov/topics/dmv-auto/ | https://www.ca.gov/topics/dmv-auto/ | OK | 200 | yes | 5773 | 2 | 0 | 50 | 0 | 37 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, landmark-unique |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_attribute_required, aria_complementary_labelled, aria_landmark_name_unique, aria_region_labelled, aria_role_valid, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, fieldset_label_valid, figure_label_exists, input_label_exists, style_color_misuse, style_focus_visible, style_highcontrast_visible, style_viewport_resizable, target_spacing_sufficient, text_block_heading, text_sensory_misuse |
| https://ca.gov/topics/jobs/ | https://www.ca.gov/topics/jobs/ | OK | 200 | yes | 6298 | 2 | 0 | 50 | 0 | 42 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, landmark-unique |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_attribute_required, aria_complementary_labelled, aria_landmark_name_unique, aria_region_labelled, aria_role_valid, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, fieldset_label_valid, figure_label_exists, input_label_exists, style_color_misuse, style_focus_visible, style_highcontrast_visible, style_viewport_resizable, target_spacing_sufficient, text_block_heading |
| https://ca.gov/topics/personal-records/ | https://www.ca.gov/topics/personal-records/ | OK | 200 | yes | 5832 | 2 | 0 | 51 | 0 | 36 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, landmark-unique |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_attribute_required, aria_complementary_labelled, aria_landmark_name_unique, aria_region_labelled, aria_role_valid, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, fieldset_label_valid, figure_label_exists, input_label_exists, style_color_misuse, style_focus_visible, style_highcontrast_visible, style_viewport_resizable, target_spacing_sufficient, text_block_heading |
| https://ca.gov/topics/taxes/ | https://www.ca.gov/topics/taxes/ | OK | 200 | yes | 5581 | 2 | 0 | 46 | 0 | 23 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, landmark-unique |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_attribute_required, aria_complementary_labelled, aria_landmark_name_unique, aria_region_labelled, aria_role_valid, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, fieldset_label_valid, figure_label_exists, input_label_exists, style_color_misuse, style_focus_visible, style_highcontrast_visible, style_viewport_resizable, target_spacing_sufficient, text_block_heading, text_sensory_misuse |

## Detailed Failure Information (ALFA)

## Detailed Failure Information (axe)

### https://ca.gov/services/

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<aside class="mobile-sidenav"><div class="container"></div></aside>`
- XPath: `.mobile-sidenav`

### https://ca.gov/departments/

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<aside class="mobile-sidenav"><div class="container"></div></aside>`
- XPath: `.mobile-sidenav`

### https://ca.gov/topics/

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<aside class="mobile-sidenav"><div class="container"></div></aside>`
- XPath: `.mobile-sidenav`

### https://ca.gov/topics/assistance/

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<h2 class="lead m-t items-count" aria-live="polite" role="region">         65 services <span class="sr-only">found</span>       </h2>`
- XPath: `.m-t`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<aside class="mobile-sidenav"><div class="container"></div></aside>`
- XPath: `.mobile-sidenav`

### https://ca.gov/topics/businesses/

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<h2 class="lead m-t items-count" aria-live="polite" role="region">         41 services <span class="sr-only">found</span>       </h2>`
- XPath: `.m-t`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<aside class="mobile-sidenav"><div class="container"></div></aside>`
- XPath: `.mobile-sidenav`

### https://ca.gov/topics/disaster-recovery/

#### Rule: [aria-required-children](https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) (Level A)

**Failure 1:**
- Message: Certain ARIA roles must contain particular children
- HTML: `<ol class="do-first__list" role="list">`
- XPath: `.do-first__list`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<aside class="mobile-sidenav"><div class="container"></div></aside>`
- XPath: `.mobile-sidenav`

### https://ca.gov/topics/dmv-auto/

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<h2 class="lead m-t items-count" aria-live="polite" role="region">         32 services <span class="sr-only">found</span>       </h2>`
- XPath: `.m-t`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<aside class="mobile-sidenav"><div class="container"></div></aside>`
- XPath: `.mobile-sidenav`

### https://ca.gov/topics/jobs/

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<h2 class="lead m-t items-count" aria-live="polite" role="region">         37 services <span class="sr-only">found</span>       </h2>`
- XPath: `.m-t`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<aside class="mobile-sidenav"><div class="container"></div></aside>`
- XPath: `.mobile-sidenav`

### https://ca.gov/topics/personal-records/

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<h2 class="lead m-t items-count" aria-live="polite" role="region">         31 services <span class="sr-only">found</span>       </h2>`
- XPath: `.m-t`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<aside class="mobile-sidenav"><div class="container"></div></aside>`
- XPath: `.mobile-sidenav`

### https://ca.gov/topics/taxes/

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<h2 class="lead m-t items-count" aria-live="polite" role="region">         18 services <span class="sr-only">found</span>       </h2>`
- XPath: `.m-t`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<aside class="mobile-sidenav"><div class="container"></div></aside>`
- XPath: `.mobile-sidenav`

