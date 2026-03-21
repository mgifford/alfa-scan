# Scan Report: London

- Issue: https://github.com/mgifford/open-scans/issues/68
- Submitted by: mgifford
- Scanned at: 2026-03-21T01:51:59.937Z
- Engines used: AXE, EQUALACCESS
- Scan duration: 17.3 minutes
- Total URLs submitted: 100
- Accepted public URLs: 100
- Rejected URLs: 0
- 🎨 **Accessibility personalization (CSS media queries):**
  - 🌙 **Dark mode:** 26 of 100 URLs (26%) support `prefers-color-scheme: dark`
  - ⚡ **Reduced motion:** 70 of 100 URLs (70%) support `prefers-reduced-motion: reduce`
  - 🔍 **High contrast:** 1 of 100 URLs (1%) support `prefers-contrast: more`
  - 🖥️ **Forced colors:** 2 of 100 URLs (2%) support `forced-colors: active`
  - 🪟 Reduced transparency: None of the scanned URLs support `prefers-reduced-transparency: reduce`
- ALFA outcomes: 0 passed, 0 failed, 0 cantTell, 0 inapplicable
- axe outcomes: 78729 passed, 174 failed, 271 cantTell, 6377 inapplicable
- Equal Access outcomes: 175331 passed, 7519 failed (7361 unique, 158 duplicate), 6674 cantTell, 0 inapplicable
- AccessLint outcomes: 0 passed, 0 failed (0 unique, 0 duplicate), 0 cantTell, 0 inapplicable
- QualWeb outcomes: 0 passed, 0 failed, 0 cantTell, 0 inapplicable
- Duplicate findings caught by later scanners: 160

## 🎯 Pages with Most Errors

Focus your efforts on these pages to make the biggest impact (combined scanner unique failures):

| Page | axe Unique | Equal Access Unique | Total Unique | Page Title |
|---|---:|---:|---:|---|
| [View Page](https://www.london.gov.uk/city-hall-blog/where-find-best-londons-culture-online) | 1 | 128 | **129** | Where to find the best of London’s culture online \| London City Hall |
| [View Page](https://www.london.gov.uk/publications/festival-ideas-workshop-findings) | 10 | 109 | **119** | Festival of Ideas Workshop Findings \| London City Hall |
| [View Page](https://www.london.gov.uk/mayor-london/mayors-annual-report) | 1 | 118 | **119** | The Mayor&#039;s Annual Report \| London City Hall |
| [View Page](https://www.facebook.com/OldOakParkRoyal/) | 6 | 111 | **117** | Old Oak and Park Royal Development Corporation \| London |
| [View Page](https://www.london.gov.uk/defending-londons-postal-service) | 4 | 113 | **117** | Defending London&#039;s Postal Service \| London City Hall |
| [View Page](https://www.london.gov.uk/) | 1 | 114 | **115** | Home page - London City Hall |
| [View Page](https://www.london.gov.uk/covid-19-resources-and-services-your-language) | 2 | 112 | **114** | COVID-19 resources and services in your language \| London City Hall |
| [View Page](https://www.london.gov.uk/who-we-are/what-london-assembly-does/london-assembly-publications/london-stalling-reducing-traffic-congestion) | 1 | 113 | **114** | London Stalling: Reducing Traffic Congestion in London \| London City Hall |
| [View Page](https://www.london.gov.uk/media-centre) | 3 | 110 | **113** | Media centre \| London City Hall |
| [View Page](https://www.london.gov.uk/who-we-are/city-halls-buildings-and-squares/how-find-city-hall) | 1 | 111 | **112** | How to find City Hall \| London City Hall |

## 🔧 Most Common Issues (ALFA)

These ALFA accessibility issues appear most frequently across your pages:

✅ No ALFA failed rules detected!

## 🔧 Most Common Issues (axe)

These axe accessibility issues appear most frequently across your pages:

| Rule | Pages Affected | Documentation |
|---|---:|---|
| svg-img-alt | **67** of 100 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/svg-img-alt) |
| meta-refresh | **25** of 100 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/meta-refresh) |
| landmark-unique | **9** of 100 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/landmark-unique) |
| heading-order | **7** of 100 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/heading-order) |
| region | **4** of 100 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/region) |
| color-contrast | **3** of 100 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/color-contrast) |
| aria-dialog-name | **1** of 100 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/aria-dialog-name) |
| meta-viewport-large | **1** of 100 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/meta-viewport-large) |
| empty-table-header | **1** of 100 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/empty-table-header) |
| image-alt | **1** of 100 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/image-alt) |

> 💡 **Tip**: Click on the rule documentation links to learn how to fix each issue. Consider fixing the most common issues first for maximum impact.

> 🤖 **Future Enhancement**: This report will soon include AI-powered fix suggestions for authenticated GitHub users (opt-in only, no auto-run AI).

## 🔍 Cross-Page Patterns: Common HTML Issues

These HTML patterns cause the same accessibility errors across multiple pages. **Fix the pattern once in your codebase to fix it everywhere!**

### 🎯 Top Patterns to Fix (Highest Impact)

#### Pattern 1: Affects 67 page(s) - 67 occurrence(s)

**Scanner**: axe
**Rule**: [svg-img-alt](https://dequeuniversity.com/rules/axe/4.11/svg-img-alt?application=playwright)
**Impact**: serious
**Issue**: <svg> elements with an img role must have alternative text

**HTML Pattern**:
```html
<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="simple-icons-icon simple-icons-icon__linkedin" focusable="false">
```

**XPath** (use in browser DevTools):
```
.simple-icons-icon__linkedin
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.simple-icons-icon__linkedin')`
5. The element will be highlighted

**Affected Pages**:
- https://london.gov.uk/
- https://london.gov.uk/warmer-homes-faqs/i-received-support-under-first-phase-warmer-homes-can-i-re-apply-phase-warmer-homes
- https://london.gov.uk/find-your-london-festival
- https://london.gov.uk/what-affordable-home-and-how-can-i-find-one
- https://london.gov.uk/who-we-are/city-halls-buildings-and-squares/accessibility-city-hall
- *...and 62 more page(s)*

---

#### Pattern 2: Affects 25 page(s) - 50 occurrence(s)

**Scanner**: axe
**Rule**: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**Issue**: Delayed refresh under 20 hours must not be used

**HTML Pattern**:
```html
<meta http-equiv="refresh" content="360">
```

**XPath** (use in browser DevTools):
```
meta[http-equiv="refresh"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('meta[http-equiv="refresh"]')`
5. The element will be highlighted

**Affected Pages**:
- https://london.gov.uk/find-advice-and-support
- https://london.gov.uk/programmes-strategies/accessibility
- https://london.gov.uk/programmes-strategies/accessibility-statement-talk-london
- https://london.gov.uk/programmes-strategies/arts-and-culture/space-culture/help-resources-and-guidance/finding-building-or-land
- https://london.gov.uk/find-course-london
- *...and 20 more page(s)*

---

#### Pattern 3: Affects 9 page(s) - 9 occurrence(s)

**Scanner**: axe
**Rule**: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate
**Issue**: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

**HTML Pattern**:
```html
<section class="u-space-y-6 u-p-6 sm:u-p-12 md:u-p-7 lg:u-p-8 xl:u-p-12 xl:u-p-11 xxl:u-p-10 u-bg-off-white has-light-bg" aria-labelledby="key-info-heading">
```

**XPath** (use in browser DevTools):
```
.layout__region--first > .u-items-baseline.u-h-full > .layout__region.u-space-y-1.u-w-full > section
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.layout__region--first > .u-items-baseline.u-h-full > .layout__region.u-space-y-1.u-w-full > section')`
5. The element will be highlighted

**Affected Pages**:
- https://london.gov.uk/apply-access
- https://london.gov.uk/events/77-memorial-service-2023
- https://london.gov.uk/events/77-memorial-service-2024
- https://london.gov.uk/events/mayors-christmas-carol-service-2023
- https://london.gov.uk/events/mayors-christmas-carol-service-2024
- *...and 4 more page(s)*

---

#### Pattern 4: Affects 4 page(s) - 4 occurrence(s)

**Scanner**: axe
**Rule**: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate
**Issue**: Heading levels should only increase by one

**HTML Pattern**:
```html
<h3 class="h3">
                    Related questions
            </h3>
```

**XPath** (use in browser DevTools):
```
.u-space-y-4 > h3
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.u-space-y-4 > h3')`
5. The element will be highlighted

**Affected Pages**:
- https://london.gov.uk/warmer-homes-faqs/i-received-support-under-first-phase-warmer-homes-can-i-re-apply-phase-warmer-homes
- https://london.gov.uk/what-affordable-home-and-how-can-i-find-one
- https://london.gov.uk/warmer-homes-faqs/where-can-i-find-out-more-about-different-kinds-improvements
- https://london.gov.uk/could-you-please-confirm-if-we-need-apply-map-quality-mark-construction-provision-if-it-already

---

#### Pattern 5: Affects 2 page(s) - 2 occurrence(s)

**Scanner**: axe
**Rule**: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate
**Issue**: Heading levels should only increase by one

**HTML Pattern**:
```html
<h5 class="h5">
                    Eligibility
            </h5>
```

**XPath** (use in browser DevTools):
```
.u-mb-10:nth-child(1) > .u-bg-off-white.u-p-6.sm\:u-px-12 > h5
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.u-mb-10:nth-child(1) > .u-bg-off-white.u-p-6.sm\:u-px-12 > h5')`
5. The element will be highlighted

**Affected Pages**:
- https://london.gov.uk/warmer-homes-faqs/i-received-support-under-first-phase-warmer-homes-can-i-re-apply-phase-warmer-homes
- https://london.gov.uk/warmer-homes-faqs/where-can-i-find-out-more-about-different-kinds-improvements

---

#### Pattern 6: Affects 2 page(s) - 2 occurrence(s)

**Scanner**: axe
**Rule**: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**Issue**: Elements must meet minimum color contrast ratio thresholds

**HTML Pattern**:
```html
<p>We use some essential cookies to make this website work.</p>
```

**XPath** (use in browser DevTools):
```
p:nth-child(1)
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('p:nth-child(1)')`
5. The element will be highlighted

**Affected Pages**:
- https://london.gov.uk/find-affordable-home
- https://london.gov.uk/register

---

#### Pattern 7: Affects 2 page(s) - 2 occurrence(s)

**Scanner**: axe
**Rule**: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**Issue**: Elements must meet minimum color contrast ratio thresholds

**HTML Pattern**:
```html
<p>We also use cookies set by other sites to help us deliver content from their services.</p>
```

**XPath** (use in browser DevTools):
```
p > p:nth-child(3)
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('p > p:nth-child(3)')`
5. The element will be highlighted

**Affected Pages**:
- https://london.gov.uk/find-affordable-home
- https://london.gov.uk/register

---

#### Pattern 8: Affects 2 page(s) - 2 occurrence(s)

**Scanner**: axe
**Rule**: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate
**Issue**: Heading levels should only increase by one

**HTML Pattern**:
```html
<h5 class="h5">
                    General
            </h5>
```

**XPath** (use in browser DevTools):
```
h5
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('h5')`
5. The element will be highlighted

**Affected Pages**:
- https://london.gov.uk/what-affordable-home-and-how-can-i-find-one
- https://london.gov.uk/could-you-please-confirm-if-we-need-apply-map-quality-mark-construction-provision-if-it-already

---

> 💡 **Pro Tip**: These patterns likely come from shared components or templates in your codebase. Fix them in the component/template source, and the fix will propagate to all affected pages.

## 📊 Detailed Results

Complete scan results for all tested pages:

| Submitted URL | Final URL | Status | HTTP | Redirected | Time (ms) | axe Unique | ALFA Unique | Equal Access Unique | AccessLint Unique | Duplicates | Notes |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|
| https://london.gov.uk/ | https://www.london.gov.uk/ | OK | 200 | yes | 14297 | 1 | 0 | 114 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: svg-img-alt |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_form_label_unique, aria_id_unique, aria_role_redundant, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, fieldset_legend_valid, figure_label_exists, frame_src_valid, input_label_visible, label_ref_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled, text_block_heading, text_contrast_sufficient, text_sensory_misuse |
| https://london.gov.uk/find-us-facebook | https://www.facebook.com/OldOakParkRoyal/ | OK | 200 | yes | 12293 | 6 | 0 | 111 | 0 | 12 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-dialog-name, color-contrast, meta-viewport-large |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_hidden_nontabbable, aria_role_redundant, element_tabbable_unobscured, heading_content_exists, style_color_misuse, style_focus_visible, style_highcontrast_visible, style_viewport_resizable, text_block_heading, text_contrast_sufficient |
| https://london.gov.uk/find-advice-and-support | https://www.london.gov.uk/programmes-strategies/communities-and-social-justice/european-londoners-hub/advice-and-support-services | FAIL | 403 | yes | 15195 | 2 | 0 | 6 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, meta_refresh_delay, style_color_misuse, style_highcontrast_visible |
| https://london.gov.uk/warmer-homes-faqs/i-received-support-under-first-phase-warmer-homes-can-i-re-apply-phase-warmer-homes | https://www.london.gov.uk/warmer-homes-faqs/i-received-support-under-first-phase-warmer-homes-can-i-re-apply-phase-warmer-homes | OK | 200 | yes | 9616 | 3 | 0 | 100 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: heading-order, svg-img-alt |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, label_ref_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled, text_contrast_sufficient |
| https://london.gov.uk/programmes-strategies/accessibility | https://london.gov.uk/programmes-strategies/accessibility | FAIL | 403 | no | 14601 | 2 | 0 | 6 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, meta_refresh_delay, style_color_misuse, style_highcontrast_visible |
| https://london.gov.uk/programmes-strategies/accessibility-statement-talk-london | https://london.gov.uk/programmes-strategies/accessibility-statement-talk-london | FAIL | 403 | no | 14583 | 2 | 0 | 6 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, meta_refresh_delay, style_color_misuse, style_highcontrast_visible |
| https://london.gov.uk/programmes-strategies/arts-and-culture/space-culture/help-resources-and-guidance/finding-building-or-land | https://london.gov.uk/programmes-strategies/arts-and-culture/space-culture/help-resources-and-guidance/finding-building-or-land | FAIL | 403 | no | 14532 | 2 | 0 | 6 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, meta_refresh_delay, style_color_misuse, style_highcontrast_visible |
| https://london.gov.uk/find-affordable-home | https://homes.london.gov.uk/ | OK | 200 | yes | 13741 | 5 | 0 | 88 | 0 | 20 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, aria_widget_labelled, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, label_name_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled, text_block_heading, widget_tabbable_exists |
| https://london.gov.uk/find-course-london | https://www.london.gov.uk/programmes-strategies/jobs-and-skills/find-adult-learning-providers-near-me | FAIL | 403 | yes | 16098 | 2 | 0 | 6 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, meta_refresh_delay, style_color_misuse, style_highcontrast_visible |
| https://london.gov.uk/find-healthy-school | https://www.london.gov.uk/programmes-strategies/education-and-youth/schools-success/schools-success-mapped | FAIL | 403 | yes | 15508 | 2 | 0 | 6 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, meta_refresh_delay, style_color_misuse, style_highcontrast_visible |
| https://london.gov.uk/find-opportunities | https://www.london.gov.uk/programmes-strategies/volunteering/search/ | FAIL | 403 | yes | 15344 | 2 | 0 | 6 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, meta_refresh_delay, style_color_misuse, style_highcontrast_visible |
| https://london.gov.uk/find-your-london-festival | https://www.london.gov.uk/events/2016-03-18/find-your-london/find-your-london-festival-map | FAIL | 404 | yes | 7993 | 1 | 0 | 108 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: svg-img-alt |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, label_ref_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled, text_contrast_sufficient |
| https://london.gov.uk/programmes-strategies/accessibility/accessible-comms-policy | https://london.gov.uk/programmes-strategies/accessibility/accessible-comms-policy | FAIL | 403 | no | 14569 | 2 | 0 | 6 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, meta_refresh_delay, style_color_misuse, style_highcontrast_visible |
| https://london.gov.uk/programmes-strategies/communities-and-social-justice/european-londoners-hub/advice-and-support-services | https://london.gov.uk/programmes-strategies/communities-and-social-justice/european-londoners-hub/advice-and-support-services | FAIL | 403 | no | 14751 | 2 | 0 | 6 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, meta_refresh_delay, style_color_misuse, style_highcontrast_visible |
| https://london.gov.uk/programmes-strategies/communities-and-social-justice/help-cost-living/income-and-budgeting/debt-help/where-find-debt-advice | https://london.gov.uk/programmes-strategies/communities-and-social-justice/help-cost-living/income-and-budgeting/debt-help/where-find-debt-advice | FAIL | 403 | no | 14486 | 2 | 0 | 6 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, meta_refresh_delay, style_color_misuse, style_highcontrast_visible |
| https://london.gov.uk/programmes-strategies/education-and-youth/young-londoners/new-deal-young-people/find-resources-mentoring-programmes/mentoring-and-mental-health-support-programme-funding-2026-27 | https://london.gov.uk/programmes-strategies/education-and-youth/young-londoners/new-deal-young-people/find-resources-mentoring-programmes/mentoring-and-mental-health-support-programme-funding-2026-27 | FAIL | 403 | no | 14589 | 2 | 0 | 6 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, meta_refresh_delay, style_color_misuse, style_highcontrast_visible |
| https://london.gov.uk/programmes-strategies/mayors-office-policing-and-crime/services-we-fund/supporting-victims-and-witnesses | https://london.gov.uk/programmes-strategies/mayors-office-policing-and-crime/services-we-fund/supporting-victims-and-witnesses | FAIL | 403 | no | 14523 | 2 | 0 | 6 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, meta_refresh_delay, style_color_misuse, style_highcontrast_visible |
| https://london.gov.uk/what-affordable-home-and-how-can-i-find-one | https://www.london.gov.uk/what-affordable-home-and-how-can-i-find-one | OK | 200 | yes | 9156 | 3 | 0 | 98 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: heading-order, svg-img-alt |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, label_ref_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled, text_contrast_sufficient |
| https://london.gov.uk/who-we-are/city-halls-buildings-and-squares/accessibility-city-hall | https://www.london.gov.uk/who-we-are/city-halls-buildings-and-squares/accessibility-city-hall | OK | 200 | yes | 9247 | 1 | 0 | 105 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: svg-img-alt |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_complementary_labelled, aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, label_ref_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled, text_contrast_sufficient, text_sensory_misuse |
| https://london.gov.uk/workshop-findings | https://www.london.gov.uk/publications/festival-ideas-workshop-findings | OK | 200 | yes | 10912 | 10 | 0 | 109 | 0 | 8 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: empty-table-header, svg-img-alt |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_accessiblename_exists, aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, label_ref_valid, list_markup_review, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled, table_caption_empty, text_block_heading, text_contrast_sufficient |
| https://london.gov.uk/city-hall-blog/do-you-have-rogue-landlord-find-out-here | https://www.london.gov.uk/city-hall-blog/do-you-have-rogue-landlord-find-out-here | OK | 200 | yes | 8286 | 1 | 0 | 101 | 0 | 5 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: svg-img-alt |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, label_ref_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled, text_block_heading, text_contrast_sufficient |
| https://london.gov.uk/city-hall-blog/find-out-how-our-empty-land-being-used-benefit-londoners | https://www.london.gov.uk/city-hall-blog/find-out-how-our-empty-land-being-used-benefit-londoners | OK | 200 | yes | 10251 | 1 | 0 | 101 | 0 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: svg-img-alt |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, label_ref_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled, text_block_heading, text_contrast_sufficient, text_sensory_misuse |
| https://london.gov.uk/city-hall-blog/finding-ways-get-more-women-cleantech-and-keep-them-there | https://www.london.gov.uk/city-hall-blog/finding-ways-get-more-women-cleantech-and-keep-them-there | OK | 200 | yes | 9744 | 2 | 0 | 102 | 0 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: heading-order, svg-img-alt |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, figure_label_exists, label_ref_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled, text_block_heading, text_contrast_sufficient, text_sensory_misuse |
| https://london.gov.uk/city-hall-blog/step-outside-and-find-your-london-spring | https://www.london.gov.uk/city-hall-blog/step-outside-and-find-your-london-spring | OK | 200 | yes | 8842 | 1 | 0 | 101 | 0 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: svg-img-alt |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, label_ref_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled, text_block_heading, text_contrast_sufficient, text_sensory_misuse |
| https://london.gov.uk/city-hall-blog/where-find-best-londons-culture-online | https://www.london.gov.uk/city-hall-blog/where-find-best-londons-culture-online | OK | 200 | yes | 14283 | 1 | 0 | 128 | 0 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: svg-img-alt |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_form_label_unique, aria_id_unique, aria_role_redundant, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, frame_src_valid, input_label_visible, label_ref_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled, text_block_heading, text_contrast_sufficient, text_sensory_misuse |
| https://london.gov.uk/programmes-and-strategies/environment-and-climate-change/energy/renew-0/renew-support | https://www.london.gov.uk/programmes-and-strategies/environment-and-climate-change/energy/renew-0/renew-support | OK | 200 | yes | 9196 | 1 | 0 | 107 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: svg-img-alt |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, figure_label_exists, label_ref_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled, table_headers_exists, text_contrast_sufficient |
| https://london.gov.uk/programmes-strategies/arts-and-culture/space-culture/help-resources-and-guidance/space-register | https://london.gov.uk/programmes-strategies/arts-and-culture/space-culture/help-resources-and-guidance/space-register | FAIL | 403 | no | 14987 | 2 | 0 | 6 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, meta_refresh_delay, style_color_misuse, style_highcontrast_visible |
| https://london.gov.uk/programmes-strategies/education-and-youth/healthy-early-years-london-and-healthy-schools-london/accessibility-statement-healthy-early-years-london-and-healthy-schools-london | https://london.gov.uk/programmes-strategies/education-and-youth/healthy-early-years-london-and-healthy-schools-london/accessibility-statement-healthy-early-years-london-and-healthy-schools-london | FAIL | 403 | no | 14563 | 2 | 0 | 6 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, meta_refresh_delay, style_color_misuse, style_highcontrast_visible |
| https://london.gov.uk/warmer-homes-faqs/where-can-i-find-out-more-about-different-kinds-improvements | https://www.london.gov.uk/warmer-homes-faqs/where-can-i-find-out-more-about-different-kinds-improvements | OK | 200 | yes | 9082 | 3 | 0 | 105 | 0 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: heading-order, svg-img-alt |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, label_ref_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled, text_contrast_sufficient |
| https://london.gov.uk/who-we-are/what-london-assembly-does/assembly-members/publications-tom-copley/centre-stage-report-supporting | https://www.london.gov.uk/who-we-are/what-london-assembly-does/assembly-members/publications-tom-copley/centre-stage-report-supporting | OK | 200 | yes | 8968 | 1 | 0 | 103 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: svg-img-alt |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, label_ref_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled, text_contrast_sufficient, text_sensory_misuse |
| https://london.gov.uk/who-we-are/what-london-assembly-does/questions-mayor/accessibility-statement-mayors-question-time | https://www.london.gov.uk/who-we-are/what-london-assembly-does/questions-mayor/accessibility-statement-mayors-question-time | OK | 200 | yes | 8605 | 1 | 0 | 100 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: svg-img-alt |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, label_ref_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled, text_contrast_sufficient, text_sensory_misuse |
| https://london.gov.uk/apply-access | https://www.london.gov.uk/media-centre | OK | 200 | yes | 7512 | 3 | 0 | 110 | 0 | 3 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-unique, svg-img-alt |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_landmark_name_unique, aria_navigation_label_unique, aria_region_label_unique, aria_role_redundant, element_attribute_deprecated, element_id_unique, element_tabbable_role_valid, element_tabbable_unobscured, label_ref_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled, text_contrast_sufficient |
| https://london.gov.uk/apply-settled-status | https://www.gov.uk/settled-status-eu-citizens-families/applying-for-settled-status | OK | 200 | yes | 7757 | 3 | 0 | 16 | 0 | 10 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_complementary_labelled, aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_id_unique, input_label_visible, style_color_misuse, style_highcontrast_visible, text_block_heading |
| https://london.gov.uk/bookshop-sales-assistant | https://www.london.gov.uk/programmes-strategies/volunteering/resources-organisations-social-enterprises-and-charities/changes-team-london-volunteering-website-faqs | FAIL | 403 | yes | 15300 | 2 | 0 | 6 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, meta_refresh_delay, style_color_misuse, style_highcontrast_visible |
| https://london.gov.uk/bus-services-436-and-452 | https://consultations.tfl.gov.uk/buses/436-452 | FAIL | 530 | yes | 6766 | 5 | 0 | 7 | 0 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt, landmark-one-main, meta-viewport, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, element_attribute_deprecated, img_alt_valid, skip_main_exists, style_color_misuse, style_highcontrast_visible |
| https://london.gov.uk/contact-renew | https://www.london.gov.uk/user/login?destination=/programmes-and-strategies/environment-and-climate-change/energy/renew-0/contact-renew | OK | 200 | yes | 9890 | 1 | 0 | 25 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, frame_src_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible |
| https://london.gov.uk/could-you-please-confirm-if-we-need-apply-map-quality-mark-construction-provision-if-it-already | https://www.london.gov.uk/could-you-please-confirm-if-we-need-apply-map-quality-mark-construction-provision-if-it-already | OK | 200 | yes | 8982 | 3 | 0 | 99 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: heading-order, svg-img-alt |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, heading_markup_misuse, label_ref_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled, text_contrast_sufficient |
| https://london.gov.uk/covid-19-resources-and-services-your-language | https://www.london.gov.uk/covid-19-resources-and-services-your-language | OK | 200 | yes | 15427 | 2 | 0 | 112 | 0 | 11 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: heading-order, svg-img-alt |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_descendant_valid, aria_form_label_unique, aria_role_redundant, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, input_label_visible, label_ref_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled, text_block_heading, text_contrast_sufficient |
| https://london.gov.uk/defending-londons-postal-service | https://www.london.gov.uk/defending-londons-postal-service | OK | 200 | yes | 8119 | 4 | 0 | 113 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: link-in-text-block, svg-img-alt |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, label_ref_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled, text_block_heading, text_contrast_sufficient |
| https://london.gov.uk/download-full-report | https://www.london.gov.uk/sites/default/files/gla_smartlondon_report_web_3.pdf | OK | 200 | yes | 972 | 0 | 0 | 0 | 0 | 0 | Skipped (not requested) |
| https://london.gov.uk/investigation-request-metropolitan-police-actions-against-university-london-students | https://www.london.gov.uk/investigation-request-metropolitan-police-actions-against-university-london-students | OK | 200 | yes | 7856 | 1 | 0 | 98 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: svg-img-alt |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, label_ref_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled, text_contrast_sufficient |
| https://london.gov.uk/lfb-reporting | https://data.london.gov.uk/dataset/lfb-financial-and-performance-reporting-2019-20 | FAIL | 403 | yes | 15055 | 2 | 0 | 6 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, meta_refresh_delay, style_color_misuse, style_highcontrast_visible |
| https://london.gov.uk/log-or-register | https://www.london.gov.uk/programmes-and-strategies/environment-and-climate-change/pollution-and-air-quality/non-road-mobile-machinery-register/login | FAIL | 404 | yes | 8179 | 1 | 0 | 108 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: svg-img-alt |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, label_ref_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled, text_contrast_sufficient |
| https://london.gov.uk/national-careers-service | https://nationalcareers.service.gov.uk/ | OK | 200 | yes | 10053 | 0 | 0 | 14 | 0 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, element_tabbable_visible, form_submit_button_exists, frame_src_valid, input_label_visible, style_color_misuse, style_highcontrast_visible, svg_graphics_labelled, text_block_heading, text_sensory_misuse |
| https://london.gov.uk/pay-it-forward | https://www.london.gov.uk/programmes-strategies/health-and-wellbeing/coronavirus-updates-and-guidance | FAIL | 403 | yes | 15313 | 2 | 0 | 6 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, meta_refresh_delay, style_color_misuse, style_highcontrast_visible |
| https://london.gov.uk/programmes-and-strategies/environment-and-climate-change/pollution-and-air-quality/nrmm/accessibility-statement-non-road-mobile-machinery | https://www.london.gov.uk/programmes-and-strategies/environment-and-climate-change/pollution-and-air-quality/nrmm/accessibility-statement-non-road-mobile-machinery | OK | 200 | yes | 8748 | 1 | 0 | 110 | 0 | 22 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: svg-img-alt |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, label_ref_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled, text_contrast_sufficient, text_quoted_correctly, text_sensory_misuse |
| https://london.gov.uk/programmes-strategies/arts-and-culture/find-out-whats-useful-culture-websites | https://london.gov.uk/programmes-strategies/arts-and-culture/find-out-whats-useful-culture-websites | FAIL | 403 | no | 14785 | 2 | 0 | 6 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, meta_refresh_delay, style_color_misuse, style_highcontrast_visible |
| https://london.gov.uk/register | https://www.london.gov.uk/healthy-early-years-and-healthy-schools-london/ | OK | 200 | yes | 9618 | 2 | 0 | 4 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: html_skipnav_exists, skip_main_exists, style_color_misuse, style_highcontrast_visible |
| https://london.gov.uk/register-your-business | https://www.london.gov.uk/programmes-strategies/education-and-youth/preparing-young-people-workplace/register-your-interest-businesses | FAIL | 403 | yes | 15056 | 2 | 0 | 6 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, meta_refresh_delay, style_color_misuse, style_highcontrast_visible |
| https://london.gov.uk/register-your-interest | https://www.london.gov.uk/programmes-strategies/health-and-wellbeing/london-healthy-workplace-award/about-london-healthy-workplace-award/register-your-interest-london-healthy-workplace-awards | FAIL | 403 | yes | 14939 | 2 | 0 | 6 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, meta_refresh_delay, style_color_misuse, style_highcontrast_visible |
| https://london.gov.uk/register-your-interest-1 | https://www.london.gov.uk/programmes-strategies/jobs-and-skills/mayors-construction-academy/register-interest | FAIL | 403 | yes | 14948 | 2 | 0 | 6 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, meta_refresh_delay, style_color_misuse, style_highcontrast_visible |
| https://london.gov.uk/register-your-interest-2 | https://www.london.gov.uk/programmes-strategies/health-and-wellbeing/london-healthy-workplace-award/about-london-healthy-workplace-award/register-your-interest-london-healthy-workplace-awards | FAIL | 403 | yes | 14875 | 2 | 0 | 6 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, meta_refresh_delay, style_color_misuse, style_highcontrast_visible |
| https://london.gov.uk/register-your-school | https://www.london.gov.uk/programmes-strategies/education-and-youth/preparing-young-people-workplace/register-your-interest-schools | FAIL | 403 | yes | 15169 | 2 | 0 | 6 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, meta_refresh_delay, style_color_misuse, style_highcontrast_visible |
| https://london.gov.uk/renew-programme | https://www.london.gov.uk/programmes-and-strategies/environment-and-climate-change/energy/renew-0 | FAIL | 404 | yes | 8321 | 1 | 0 | 108 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: svg-img-alt |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, label_ref_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled, text_contrast_sufficient |
| https://london.gov.uk/report-landlord-or-agent | https://www.london.gov.uk/programmes-strategies/housing-and-land/renting-home/report-rogue-landlord-or-agent | FAIL | 403 | yes | 14967 | 2 | 0 | 6 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, meta_refresh_delay, style_color_misuse, style_highcontrast_visible |
| https://london.gov.uk/reporting-hate-crime | https://www.london.gov.uk/programmes-strategies/mayors-office-policing-and-crime-mopac/mopac-guidance-and-resources/reporting-hate-crime | FAIL | 403 | yes | 15157 | 2 | 0 | 6 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, meta_refresh_delay, style_color_misuse, style_highcontrast_visible |
| https://london.gov.uk/reports-and-toolkits | https://www.london.gov.uk/publications/reports-toolkits-and-best-practice-guides | FAIL | 404 | yes | 7882 | 1 | 0 | 108 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: svg-img-alt |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, label_ref_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled, text_contrast_sufficient |
| https://london.gov.uk/request-halt-tfl-consultation-bus-stops-bromley | https://www.london.gov.uk/request-halt-tfl-consultation-bus-stops-bromley | OK | 200 | yes | 7729 | 1 | 0 | 98 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: svg-img-alt |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, label_ref_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled, text_contrast_sufficient |
| https://london.gov.uk/request-increase-frequency-481-bus | https://www.london.gov.uk/request-increase-frequency-481-bus | OK | 200 | yes | 7726 | 1 | 0 | 98 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: svg-img-alt |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, label_ref_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled, text_contrast_sufficient |
| https://london.gov.uk/request-increase-number-bus-countdown-indicators-greyhound-lane-and-streatham-vale | https://www.london.gov.uk/request-increase-number-bus-countdown-indicators-greyhound-lane-and-streatham-vale | OK | 200 | yes | 7773 | 1 | 0 | 99 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: svg-img-alt |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, label_ref_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled, text_contrast_sufficient, text_sensory_misuse |
| https://london.gov.uk/request-increased-police-numbers-and-local-safer-neighbourhood-teams | https://www.london.gov.uk/request-increased-police-numbers-and-local-safer-neighbourhood-teams | OK | 200 | yes | 7986 | 1 | 0 | 98 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: svg-img-alt |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, label_ref_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled, text_contrast_sufficient |
| https://london.gov.uk/request-pedestrian-crossing-tulse-hill-and-brixton-water-junction | https://www.london.gov.uk/request-pedestrian-crossing-tulse-hill-and-brixton-water-junction | OK | 200 | yes | 7763 | 1 | 0 | 98 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: svg-img-alt |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, label_ref_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled, text_contrast_sufficient |
| https://london.gov.uk/request-reduce-speed-limit-roehampton-vale | https://www.london.gov.uk/request-reduce-speed-limit-roehampton-vale | OK | 200 | yes | 7727 | 1 | 0 | 99 | 0 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: svg-img-alt |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, label_ref_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled, text_contrast_sufficient, text_sensory_misuse |
| https://london.gov.uk/request-reduce-speed-limit-roehampton-vale-0 | https://www.london.gov.uk/request-reduce-speed-limit-roehampton-vale-0 | OK | 200 | yes | 8054 | 1 | 0 | 99 | 0 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: svg-img-alt |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, label_ref_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled, text_contrast_sufficient, text_sensory_misuse |
| https://london.gov.uk/request-replacement-bus-shelter-highbury-grange | https://www.london.gov.uk/request-replacement-bus-shelter-highbury-grange | OK | 200 | yes | 8305 | 1 | 0 | 98 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: svg-img-alt |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, label_ref_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled, text_contrast_sufficient |
| https://london.gov.uk/request-restore-lost-southwark-police-officers | https://www.london.gov.uk/request-restore-lost-southwark-police-officers | OK | 200 | yes | 7749 | 1 | 0 | 99 | 0 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: svg-img-alt |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, label_ref_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled, text_contrast_sufficient, text_sensory_misuse |
| https://london.gov.uk/request-review-how-control-vehicle-speeds-clapham-common-area | https://www.london.gov.uk/request-review-how-control-vehicle-speeds-clapham-common-area | OK | 200 | yes | 7866 | 1 | 0 | 99 | 0 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: svg-img-alt |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, label_ref_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled, text_contrast_sufficient, text_sensory_misuse |
| https://london.gov.uk/request-stop-conversion-premier-house | https://www.london.gov.uk/request-stop-conversion-premier-house | OK | 200 | yes | 7587 | 1 | 0 | 98 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: svg-img-alt |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, label_ref_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled, text_contrast_sufficient |
| https://london.gov.uk/request-traffic-lights-charterhouse-street-junction | https://www.london.gov.uk/request-traffic-lights-charterhouse-street-junction | OK | 200 | yes | 7931 | 1 | 0 | 98 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: svg-img-alt |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, label_ref_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled, text_contrast_sufficient |
| https://london.gov.uk/request-traffic-safety-measures-and-around-redbridge-roundabout | https://www.london.gov.uk/request-traffic-safety-measures-and-around-redbridge-roundabout | OK | 200 | yes | 8291 | 1 | 0 | 99 | 0 | 3 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: svg-img-alt |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, label_ref_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled, text_contrast_sufficient, text_sensory_misuse |
| https://london.gov.uk/safer-roads-request-chiswick | https://www.london.gov.uk/safer-roads-request-chiswick | OK | 200 | yes | 7827 | 1 | 0 | 99 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: svg-img-alt |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, label_ref_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled, text_contrast_sufficient, text_sensory_misuse |
| https://london.gov.uk/step-free-access-rayners-lane-tube-station-request | https://www.london.gov.uk/step-free-access-rayners-lane-tube-station-request | OK | 200 | yes | 7924 | 1 | 0 | 99 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: svg-img-alt |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, label_ref_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled, text_contrast_sufficient, text_sensory_misuse |
| https://london.gov.uk/traffic-congestion-report | https://www.london.gov.uk/who-we-are/what-london-assembly-does/london-assembly-publications/london-stalling-reducing-traffic-congestion | OK | 200 | yes | 9284 | 1 | 0 | 113 | 0 | 5 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: svg-img-alt |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, label_ref_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled, text_block_heading, text_contrast_sufficient, text_sensory_misuse |
| https://london.gov.uk/traffic-review-request-junction-a20-and-a205-following-safety-concerns | https://www.london.gov.uk/traffic-review-request-junction-a20-and-a205-following-safety-concerns | OK | 200 | yes | 8342 | 1 | 0 | 99 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: svg-img-alt |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, label_ref_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled, text_contrast_sufficient, text_sensory_misuse |
| https://london.gov.uk/who-we-are/city-halls-buildings-and-squares/how-find-city-hall | https://www.london.gov.uk/who-we-are/city-halls-buildings-and-squares/how-find-city-hall | OK | 200 | yes | 9648 | 1 | 0 | 111 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: svg-img-alt |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, figure_label_exists, frame_src_valid, html_lang_exists, html_skipnav_exists, label_ref_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled, text_contrast_sufficient |
| https://london.gov.uk/boris-johnson/register-of-interests | https://www.london.gov.uk/boris-johnson/register-of-interests | OK | 200 | yes | 8568 | 1 | 0 | 102 | 0 | 14 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: svg-img-alt |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, label_ref_valid, list_markup_review, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled, text_block_heading, text_contrast_sufficient, text_sensory_misuse |
| https://london.gov.uk/city-hall-blog/applying-government-service-standard-london-boroughs | https://www.london.gov.uk/city-hall-blog/applying-government-service-standard-london-boroughs | OK | 200 | yes | 9876 | 1 | 0 | 103 | 0 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: svg-img-alt |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, figure_label_exists, label_ref_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled, text_block_heading, text_contrast_sufficient, text_quoted_correctly, text_sensory_misuse |
| https://london.gov.uk/city-hall-blog/digital-service-standard-local-government | https://www.london.gov.uk/city-hall-blog/digital-service-standard-local-government | OK | 200 | yes | 9908 | 2 | 0 | 101 | 0 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: heading-order, svg-img-alt |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, label_ref_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled, text_block_heading, text_contrast_sufficient, text_sensory_misuse |
| https://london.gov.uk/city-hall-blog/grenfell-tower-national-memorial-service | https://www.london.gov.uk/city-hall-blog/grenfell-tower-national-memorial-service | OK | 200 | yes | 8780 | 1 | 0 | 102 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: svg-img-alt |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, blockquote_cite_exists, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, label_ref_valid, list_markup_review, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled, text_block_heading, text_contrast_sufficient |
| https://london.gov.uk/city-hall-blog/how-register-covid-summer-food-fund | https://www.london.gov.uk/city-hall-blog/how-register-covid-summer-food-fund | OK | 200 | yes | 9584 | 1 | 0 | 104 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: svg-img-alt |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_child_valid, aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, label_ref_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled, text_block_heading, text_contrast_sufficient |
| https://london.gov.uk/city-hall-blog/im-committed-improving-mental-health-services-london | https://www.london.gov.uk/city-hall-blog/im-committed-improving-mental-health-services-london | OK | 200 | yes | 9375 | 1 | 0 | 101 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: svg-img-alt |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, label_ref_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled, text_block_heading, text_contrast_sufficient, text_sensory_misuse |
| https://london.gov.uk/content/london-accessible-housing-register | https://www.london.gov.uk/content/london-accessible-housing-register | OK | 200 | yes | 7897 | 1 | 0 | 103 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: svg-img-alt |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, label_ref_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled, text_contrast_sufficient |
| https://london.gov.uk/events/77-memorial-service-2023 | https://www.london.gov.uk/events/77-memorial-service-2023 | OK | 200 | yes | 8676 | 2 | 0 | 104 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-unique, svg-img-alt |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_landmark_name_unique, aria_region_label_unique, aria_role_redundant, element_attribute_deprecated, element_id_unique, element_tabbable_role_valid, element_tabbable_unobscured, label_ref_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled, text_contrast_sufficient |
| https://london.gov.uk/events/77-memorial-service-2024 | https://www.london.gov.uk/events/77-memorial-service-2024 | OK | 200 | yes | 8982 | 2 | 0 | 107 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-unique, svg-img-alt |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_landmark_name_unique, aria_region_label_unique, aria_role_redundant, element_attribute_deprecated, element_id_unique, element_tabbable_role_valid, element_tabbable_unobscured, label_ref_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled, text_contrast_sufficient |
| https://london.gov.uk/events/mayors-christmas-carol-service-2023 | https://www.london.gov.uk/events/mayors-christmas-carol-service-2023 | OK | 200 | yes | 8968 | 2 | 0 | 109 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-unique, svg-img-alt |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_landmark_name_unique, aria_region_label_unique, aria_role_redundant, element_attribute_deprecated, element_id_unique, element_tabbable_role_valid, element_tabbable_unobscured, label_ref_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled, text_contrast_sufficient, text_quoted_correctly, text_sensory_misuse |
| https://london.gov.uk/events/mayors-christmas-carol-service-2024 | https://www.london.gov.uk/events/mayors-christmas-carol-service-2024 | OK | 200 | yes | 9085 | 2 | 0 | 109 | 0 | 3 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-unique, svg-img-alt |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_landmark_name_unique, aria_region_label_unique, aria_role_redundant, element_attribute_deprecated, element_id_unique, element_tabbable_role_valid, element_tabbable_unobscured, figure_label_exists, label_ref_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled, text_contrast_sufficient, text_quoted_correctly |
| https://london.gov.uk/events/mayors-christmas-carol-service-2025 | https://www.london.gov.uk/events/mayors-christmas-carol-service-2025 | OK | 200 | yes | 8795 | 2 | 0 | 105 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-unique, svg-img-alt |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_landmark_name_unique, aria_region_label_unique, aria_role_redundant, element_attribute_deprecated, element_id_unique, element_tabbable_role_valid, element_tabbable_unobscured, label_ref_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled, text_contrast_sufficient, text_quoted_correctly |
| https://london.gov.uk/events/remembrance-day-service-2023 | https://www.london.gov.uk/events/remembrance-day-service-2023 | OK | 200 | yes | 9331 | 2 | 0 | 105 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-unique, svg-img-alt |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_landmark_name_unique, aria_region_label_unique, aria_role_redundant, element_attribute_deprecated, element_id_unique, element_tabbable_role_valid, element_tabbable_unobscured, label_ref_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled, text_contrast_sufficient |
| https://london.gov.uk/events/remembrance-day-service-2024 | https://www.london.gov.uk/events/remembrance-day-service-2024 | OK | 200 | yes | 9216 | 2 | 0 | 105 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-unique, svg-img-alt |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_landmark_name_unique, aria_region_label_unique, aria_role_redundant, element_attribute_deprecated, element_id_unique, element_tabbable_role_valid, element_tabbable_unobscured, label_ref_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled, text_contrast_sufficient, text_quoted_correctly |
| https://london.gov.uk/events/remembrance-service-2025 | https://www.london.gov.uk/events/remembrance-service-2025 | OK | 200 | yes | 8564 | 2 | 0 | 106 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-unique, svg-img-alt |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_landmark_name_unique, aria_region_label_unique, aria_role_redundant, element_attribute_deprecated, element_id_unique, element_tabbable_role_valid, element_tabbable_unobscured, figure_label_exists, label_ref_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled, text_contrast_sufficient, text_quoted_correctly |
| https://london.gov.uk/heidi-alexander/register-of-interests | https://www.london.gov.uk/heidi-alexander/register-of-interests | OK | 200 | yes | 8386 | 1 | 0 | 99 | 0 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: svg-img-alt |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, label_ref_valid, list_markup_review, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled, text_contrast_sufficient, text_sensory_misuse |
| https://london.gov.uk/julia-slay/register-of-interests | https://www.london.gov.uk/julia-slay/register-of-interests | OK | 200 | yes | 7994 | 1 | 0 | 100 | 0 | 8 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: svg-img-alt |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, label_ref_valid, list_markup_review, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled, text_contrast_sufficient, text_quoted_correctly, text_sensory_misuse |
| https://london.gov.uk/mayor-london/mayors-annual-report | https://www.london.gov.uk/mayor-london/mayors-annual-report | OK | 200 | yes | 9143 | 1 | 0 | 118 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: svg-img-alt |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, label_ref_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled, text_contrast_sufficient |
| https://london.gov.uk/motions/70th-anniversary-national-health-service | https://www.london.gov.uk/motions/70th-anniversary-national-health-service | OK | 200 | yes | 8657 | 1 | 0 | 102 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: svg-img-alt |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, label_ref_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled, text_block_heading, text_contrast_sufficient |
| https://london.gov.uk/motions/backing-age-uks-campaign-fully-reinstate-winter-fuel-payment | https://www.london.gov.uk/motions/backing-age-uks-campaign-fully-reinstate-winter-fuel-payment | OK | 200 | yes | 8355 | 1 | 0 | 106 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: svg-img-alt |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, label_ref_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled, text_block_heading, text_contrast_sufficient, text_sensory_misuse |
| https://london.gov.uk/motions/banking-services | https://www.london.gov.uk/motions/banking-services | OK | 200 | yes | 7929 | 1 | 0 | 103 | 0 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: svg-img-alt |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, label_ref_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled, text_block_heading, text_contrast_sufficient, text_sensory_misuse |
| https://london.gov.uk/motions/blair-peach-and-cass-report | https://www.london.gov.uk/motions/blair-peach-and-cass-report | OK | 200 | yes | 8070 | 1 | 0 | 99 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: svg-img-alt |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, label_ref_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled, text_contrast_sufficient |
| https://london.gov.uk/motions/child-and-adolescent-mental-health-services-camhs | https://www.london.gov.uk/motions/child-and-adolescent-mental-health-services-camhs | OK | 200 | yes | 8299 | 1 | 0 | 102 | 0 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: svg-img-alt |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, label_ref_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled, text_block_heading, text_contrast_sufficient |
| https://london.gov.uk/motions/coroner-report-cycling-fatalities | https://www.london.gov.uk/motions/coroner-report-cycling-fatalities | OK | 200 | yes | 7930 | 1 | 0 | 101 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: svg-img-alt |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, label_ref_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled, text_block_heading, text_contrast_sufficient |
| https://london.gov.uk/motions/coroner-report-cycling-fatalities-0 | https://www.london.gov.uk/motions/coroner-report-cycling-fatalities-0 | OK | 200 | yes | 7800 | 1 | 0 | 101 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: svg-img-alt |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, label_ref_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled, text_block_heading, text_contrast_sufficient |

## Detailed Failure Information (ALFA)

## Detailed Failure Information (axe)

### https://london.gov.uk/

#### Rule: [svg-img-alt](https://dequeuniversity.com/rules/axe/4.11/svg-img-alt?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: <svg> elements with an img role must have alternative text
- HTML: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="simple-icons-icon simple-icons-icon__linkedin" focusable="false">`
- XPath: `.simple-icons-icon__linkedin`

### https://london.gov.uk/find-us-facebook

#### Rule: [aria-dialog-name](https://dequeuniversity.com/rules/axe/4.11/aria-dialog-name?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: ARIA dialog and alertdialog nodes should have an accessible name
- HTML: `<div role="dialog" class="x1n2onr6 x1ja2u2z x1afcbsf x78zum5 xdt5ytf x1a2a7pz x6ikm8r x10wlt62 x71s49j x1jx94hy xw5cjc7 x1dmpuos x1vsv7so xau1kf4 x104qc98 x15o3w11 xogydr4 x1vmz7ll x1yyrj1m x193iq5w">`
- XPath: `.x1afcbsf`

**Failure 2:**
- Message: ARIA dialog and alertdialog nodes should have an accessible name
- HTML: `<div role="dialog" class="x1n2onr6 x1ja2u2z x1afcbsf x78zum5 xdt5ytf x1a2a7pz x6ikm8r x10wlt62 x71s49j x1jx94hy xw5cjc7 x1dmpuos x1vsv7so xau1kf4 x104qc98 x15o3w11 xogydr4 x1vmz7ll x1yyrj1m x193iq5w">`
- XPath: `.x1afcbsf`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="x1lliihq x6ikm8r x10wlt62 x1n2onr6 xlyipyv xuxw1ft">Create new account</span>`
- XPath: `.xp48ta0 > .x14ayic.xwyz465.x1e0frkt > .xsqbvy7.xb9jzoj[role="none"] > .x1lkfr7t.x1lbecb7.xtk6v10 > .xlyipyv.xuxw1ft.x6ikm8r`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="x1lliihq x6ikm8r x10wlt62 x1n2onr6 xlyipyv xuxw1ft">Create new account</span>`
- XPath: `.xp48ta0 > .x14ayic.xwyz465.x1e0frkt > .xsqbvy7.xb9jzoj[role="none"] > .x1lkfr7t.x1lbecb7.xtk6v10 > .xlyipyv.xuxw1ft.x6ikm8r`

#### Rule: [meta-viewport-large](https://dequeuniversity.com/rules/axe/4.11/meta-viewport-large?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: Users should be able to zoom and scale the text up to 500%
- HTML: `<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=2,shrink-to-fit=no">`
- XPath: `meta[name="viewport"]`

**Failure 2:**
- Message: Users should be able to zoom and scale the text up to 500%
- HTML: `<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=2,shrink-to-fit=no">`
- XPath: `meta[name="viewport"]`

### https://london.gov.uk/find-advice-and-support

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://london.gov.uk/warmer-homes-faqs/i-received-support-under-first-phase-warmer-homes-can-i-re-apply-phase-warmer-homes

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3 class="h3">                     Related questions             </h3>`
- XPath: `.u-space-y-4 > h3`

**Failure 2:**
- Message: Heading levels should only increase by one
- HTML: `<h5 class="h5">                     Eligibility             </h5>`
- XPath: `.u-mb-10:nth-child(1) > .u-bg-off-white.u-p-6.sm\:u-px-12 > h5`

#### Rule: [svg-img-alt](https://dequeuniversity.com/rules/axe/4.11/svg-img-alt?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: <svg> elements with an img role must have alternative text
- HTML: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="simple-icons-icon simple-icons-icon__linkedin" focusable="false">`
- XPath: `.simple-icons-icon__linkedin`

### https://london.gov.uk/programmes-strategies/accessibility

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://london.gov.uk/programmes-strategies/accessibility-statement-talk-london

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://london.gov.uk/programmes-strategies/arts-and-culture/space-culture/help-resources-and-guidance/finding-building-or-land

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://london.gov.uk/find-affordable-home

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<p>We use some essential cookies to make this website work.</p>`
- XPath: `p:nth-child(1)`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<p>We also use cookies set by other sites to help us deliver content from their services.</p>`
- XPath: `p > p:nth-child(3)`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="footer-locations-grid slide-toggle__child">`
- XPath: `.footer-locations-grid`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="https://www.sharetobuy.com/" aria-label="Share to Buy">`
- XPath: `a[aria-label="Share to Buy"]`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="footer-inline-nav inline-nav">`
- XPath: `.footer-inline-nav`

### https://london.gov.uk/find-course-london

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://london.gov.uk/find-healthy-school

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://london.gov.uk/find-opportunities

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://london.gov.uk/find-your-london-festival

#### Rule: [svg-img-alt](https://dequeuniversity.com/rules/axe/4.11/svg-img-alt?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: <svg> elements with an img role must have alternative text
- HTML: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="simple-icons-icon simple-icons-icon__linkedin" focusable="false">`
- XPath: `.simple-icons-icon__linkedin`

### https://london.gov.uk/programmes-strategies/accessibility/accessible-comms-policy

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://london.gov.uk/programmes-strategies/communities-and-social-justice/european-londoners-hub/advice-and-support-services

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://london.gov.uk/programmes-strategies/communities-and-social-justice/help-cost-living/income-and-budgeting/debt-help/where-find-debt-advice

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://london.gov.uk/programmes-strategies/education-and-youth/young-londoners/new-deal-young-people/find-resources-mentoring-programmes/mentoring-and-mental-health-support-programme-funding-2026-27

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://london.gov.uk/programmes-strategies/mayors-office-policing-and-crime/services-we-fund/supporting-victims-and-witnesses

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://london.gov.uk/what-affordable-home-and-how-can-i-find-one

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3 class="h3">                     Related questions             </h3>`
- XPath: `.u-space-y-4 > h3`

**Failure 2:**
- Message: Heading levels should only increase by one
- HTML: `<h5 class="h5">                     General             </h5>`
- XPath: `h5`

#### Rule: [svg-img-alt](https://dequeuniversity.com/rules/axe/4.11/svg-img-alt?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: <svg> elements with an img role must have alternative text
- HTML: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="simple-icons-icon simple-icons-icon__linkedin" focusable="false">`
- XPath: `.simple-icons-icon__linkedin`

### https://london.gov.uk/who-we-are/city-halls-buildings-and-squares/accessibility-city-hall

#### Rule: [svg-img-alt](https://dequeuniversity.com/rules/axe/4.11/svg-img-alt?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: <svg> elements with an img role must have alternative text
- HTML: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="simple-icons-icon simple-icons-icon__linkedin" focusable="false">`
- XPath: `.simple-icons-icon__linkedin`

### https://london.gov.uk/workshop-findings

#### Rule: [empty-table-header](https://dequeuniversity.com/rules/axe/4.11/empty-table-header?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: Table header text should not be empty
- HTML: `<th>&nbsp;</th>`
- XPath: `tr:nth-child(2) > th`

**Failure 2:**
- Message: Table header text should not be empty
- HTML: `<th>&nbsp;</th>`
- XPath: `tr:nth-child(3) > th`

**Failure 3:**
- Message: Table header text should not be empty
- HTML: `<th>&nbsp;</th>`
- XPath: `tr:nth-child(5) > th`

**Failure 4:**
- Message: Table header text should not be empty
- HTML: `<th>&nbsp;</th>`
- XPath: `tr:nth-child(6) > th`

**Failure 5:**
- Message: Table header text should not be empty
- HTML: `<th>&nbsp;</th>`
- XPath: `tr:nth-child(7) > th`

*... and 4 more failures for this rule*

#### Rule: [svg-img-alt](https://dequeuniversity.com/rules/axe/4.11/svg-img-alt?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: <svg> elements with an img role must have alternative text
- HTML: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="simple-icons-icon simple-icons-icon__linkedin" focusable="false">`
- XPath: `.simple-icons-icon__linkedin`

### https://london.gov.uk/city-hall-blog/do-you-have-rogue-landlord-find-out-here

#### Rule: [svg-img-alt](https://dequeuniversity.com/rules/axe/4.11/svg-img-alt?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: <svg> elements with an img role must have alternative text
- HTML: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="simple-icons-icon simple-icons-icon__linkedin" focusable="false">`
- XPath: `.simple-icons-icon__linkedin`

### https://london.gov.uk/city-hall-blog/find-out-how-our-empty-land-being-used-benefit-londoners

#### Rule: [svg-img-alt](https://dequeuniversity.com/rules/axe/4.11/svg-img-alt?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: <svg> elements with an img role must have alternative text
- HTML: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="simple-icons-icon simple-icons-icon__linkedin" focusable="false">`
- XPath: `.simple-icons-icon__linkedin`

### https://london.gov.uk/city-hall-blog/finding-ways-get-more-women-cleantech-and-keep-them-there

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h4 id="by-karen-lawrence-commissioner-on-the-london-sustainable-development-commission">`
- XPath: `#by-karen-lawrence-commissioner-on-the-london-sustainable-development-commission`

#### Rule: [svg-img-alt](https://dequeuniversity.com/rules/axe/4.11/svg-img-alt?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: <svg> elements with an img role must have alternative text
- HTML: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="simple-icons-icon simple-icons-icon__linkedin" focusable="false">`
- XPath: `.simple-icons-icon__linkedin`

### https://london.gov.uk/city-hall-blog/step-outside-and-find-your-london-spring

#### Rule: [svg-img-alt](https://dequeuniversity.com/rules/axe/4.11/svg-img-alt?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: <svg> elements with an img role must have alternative text
- HTML: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="simple-icons-icon simple-icons-icon__linkedin" focusable="false">`
- XPath: `.simple-icons-icon__linkedin`

### https://london.gov.uk/city-hall-blog/where-find-best-londons-culture-online

#### Rule: [svg-img-alt](https://dequeuniversity.com/rules/axe/4.11/svg-img-alt?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: <svg> elements with an img role must have alternative text
- HTML: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="simple-icons-icon simple-icons-icon__linkedin" focusable="false">`
- XPath: `.simple-icons-icon__linkedin`

### https://london.gov.uk/programmes-and-strategies/environment-and-climate-change/energy/renew-0/renew-support

#### Rule: [svg-img-alt](https://dequeuniversity.com/rules/axe/4.11/svg-img-alt?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: <svg> elements with an img role must have alternative text
- HTML: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="simple-icons-icon simple-icons-icon__linkedin" focusable="false">`
- XPath: `.simple-icons-icon__linkedin`

### https://london.gov.uk/programmes-strategies/arts-and-culture/space-culture/help-resources-and-guidance/space-register

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://london.gov.uk/programmes-strategies/education-and-youth/healthy-early-years-london-and-healthy-schools-london/accessibility-statement-healthy-early-years-london-and-healthy-schools-london

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://london.gov.uk/warmer-homes-faqs/where-can-i-find-out-more-about-different-kinds-improvements

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3 class="h3">                     Related questions             </h3>`
- XPath: `.u-space-y-4 > h3`

**Failure 2:**
- Message: Heading levels should only increase by one
- HTML: `<h5 class="h5">                     Eligibility             </h5>`
- XPath: `.u-mb-10:nth-child(1) > .u-bg-off-white.u-p-6.sm\:u-px-12 > h5`

#### Rule: [svg-img-alt](https://dequeuniversity.com/rules/axe/4.11/svg-img-alt?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: <svg> elements with an img role must have alternative text
- HTML: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="simple-icons-icon simple-icons-icon__linkedin" focusable="false">`
- XPath: `.simple-icons-icon__linkedin`

### https://london.gov.uk/who-we-are/what-london-assembly-does/assembly-members/publications-tom-copley/centre-stage-report-supporting

#### Rule: [svg-img-alt](https://dequeuniversity.com/rules/axe/4.11/svg-img-alt?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: <svg> elements with an img role must have alternative text
- HTML: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="simple-icons-icon simple-icons-icon__linkedin" focusable="false">`
- XPath: `.simple-icons-icon__linkedin`

### https://london.gov.uk/who-we-are/what-london-assembly-does/questions-mayor/accessibility-statement-mayors-question-time

#### Rule: [svg-img-alt](https://dequeuniversity.com/rules/axe/4.11/svg-img-alt?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: <svg> elements with an img role must have alternative text
- HTML: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="simple-icons-icon simple-icons-icon__linkedin" focusable="false">`
- XPath: `.simple-icons-icon__linkedin`

### https://london.gov.uk/apply-access

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<section class="u-space-y-6 u-p-6 sm:u-p-12 md:u-p-7 lg:u-p-8 xl:u-p-12 xl:u-p-11 xxl:u-p-10 u-bg-off-white has-light-bg" aria-labelledby="key-info-heading">`
- XPath: `.layout__region--first > .u-items-baseline.u-h-full > .layout__region.u-space-y-1.u-w-full > section`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav>`
- XPath: `.layout__region--first > .u-items-baseline.u-h-full > .layout__region.u-space-y-1.u-w-full > section > nav`

#### Rule: [svg-img-alt](https://dequeuniversity.com/rules/axe/4.11/svg-img-alt?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: <svg> elements with an img role must have alternative text
- HTML: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="simple-icons-icon simple-icons-icon__linkedin" focusable="false">`
- XPath: `.simple-icons-icon__linkedin`

### https://london.gov.uk/apply-settled-status

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a data-module="govuk-skip-link" class="gem-c-skip-link govuk-skip-link govuk-!-display-none-print" href="#content" data-govuk-skip-link-init="" data-govuk-skip-link-module-started="true">Skip to main content</a>`
- XPath: `body > .gem-c-skip-link.govuk-skip-link[data-module="govuk-skip-link"]`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div data-module="ga4-link-tracker" class="gem-c-step-nav-header" title="Stay in the UK ('settled status'): step by step" data-ga4-link-tracker-module-started="true">`
- XPath: `.gem-c-step-nav-header`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2 class="gem-c-feedback__prompt-question">Is this page useful?</h2>`
- XPath: `.gem-c-feedback__prompt-question`

### https://london.gov.uk/bookshop-sales-assistant

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://london.gov.uk/bus-services-436-and-452

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img height="40" src="data:image/svg+xml;b...">`
- XPath: `img`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html lang="en" class="">`
- XPath: `html`

#### Rule: [meta-viewport](https://dequeuniversity.com/rules/axe/4.11/meta-viewport?application=playwright)
**Impact**: moderate
**WCAG**: [SC 1.4.4](https://www.w3.org/WAI/WCAG22/Understanding/resize-text) (Level AA)

**Failure 1:**
- Message: Zooming and scaling must not be disabled
- HTML: `<meta name="viewport" content="width=device-width, initial-scale = 1.0, maximum-scale=1.0, user-scalable=no">`
- XPath: `meta[name="viewport"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="top-row">`
- XPath: `.top-row`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div id="full-width-content">`
- XPath: `#full-width-content`

### https://london.gov.uk/contact-renew

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="https://www.google.com/intl/en/policies/privacy/" target="_blank">Privacy</a>`
- XPath: `iframe[title="reCAPTCHA"]`

### https://london.gov.uk/could-you-please-confirm-if-we-need-apply-map-quality-mark-construction-provision-if-it-already

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3 class="h3">                     Related questions             </h3>`
- XPath: `.u-space-y-4 > h3`

**Failure 2:**
- Message: Heading levels should only increase by one
- HTML: `<h5 class="h5">                     General             </h5>`
- XPath: `h5`

#### Rule: [svg-img-alt](https://dequeuniversity.com/rules/axe/4.11/svg-img-alt?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: <svg> elements with an img role must have alternative text
- HTML: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="simple-icons-icon simple-icons-icon__linkedin" focusable="false">`
- XPath: `.simple-icons-icon__linkedin`

### https://london.gov.uk/covid-19-resources-and-services-your-language

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3 class="u-py-3 u-px-5 u-bg-off-white h5">                     Filter results             </h3>`
- XPath: `.h5.u-bg-off-white.u-px-5`

#### Rule: [svg-img-alt](https://dequeuniversity.com/rules/axe/4.11/svg-img-alt?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: <svg> elements with an img role must have alternative text
- HTML: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="simple-icons-icon simple-icons-icon__linkedin" focusable="false">`
- XPath: `.simple-icons-icon__linkedin`

### https://london.gov.uk/defending-londons-postal-service

#### Rule: [link-in-text-block](https://dequeuniversity.com/rules/axe/4.11/link-in-text-block?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.1](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color) (Level A)

**Failure 1:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a href="https://www.london.g..." name="_ftnref3" style="margin: 0px; padding..." title="">`
- XPath: `a[name="_ftnref3"]`

**Failure 2:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a href="https://www.london.g..." name="_ftnref4" style="margin: 0px; padding..." title="">`
- XPath: `a[name="_ftnref4"]`

**Failure 3:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a href="https://www.london.g..." name="_ftn4" style="margin: 0px; padding..." title="">`
- XPath: `a[name="_ftn4"]`

#### Rule: [svg-img-alt](https://dequeuniversity.com/rules/axe/4.11/svg-img-alt?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: <svg> elements with an img role must have alternative text
- HTML: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="simple-icons-icon simple-icons-icon__linkedin" focusable="false">`
- XPath: `.simple-icons-icon__linkedin`

### https://london.gov.uk/investigation-request-metropolitan-police-actions-against-university-london-students

#### Rule: [svg-img-alt](https://dequeuniversity.com/rules/axe/4.11/svg-img-alt?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: <svg> elements with an img role must have alternative text
- HTML: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="simple-icons-icon simple-icons-icon__linkedin" focusable="false">`
- XPath: `.simple-icons-icon__linkedin`

### https://london.gov.uk/lfb-reporting

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://london.gov.uk/log-or-register

#### Rule: [svg-img-alt](https://dequeuniversity.com/rules/axe/4.11/svg-img-alt?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: <svg> elements with an img role must have alternative text
- HTML: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="simple-icons-icon simple-icons-icon__linkedin" focusable="false">`
- XPath: `.simple-icons-icon__linkedin`

### https://london.gov.uk/pay-it-forward

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://london.gov.uk/programmes-and-strategies/environment-and-climate-change/pollution-and-air-quality/nrmm/accessibility-statement-non-road-mobile-machinery

#### Rule: [svg-img-alt](https://dequeuniversity.com/rules/axe/4.11/svg-img-alt?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: <svg> elements with an img role must have alternative text
- HTML: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="simple-icons-icon simple-icons-icon__linkedin" focusable="false">`
- XPath: `.simple-icons-icon__linkedin`

### https://london.gov.uk/programmes-strategies/arts-and-culture/find-out-whats-useful-culture-websites

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://london.gov.uk/register

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<p>We use some essential cookies to make this website work.</p>`
- XPath: `p > p:nth-child(1)`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<p>We also use cookies set by other sites to help us deliver content from their services.</p>`
- XPath: `p:nth-child(3)`

### https://london.gov.uk/register-your-business

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://london.gov.uk/register-your-interest

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://london.gov.uk/register-your-interest-1

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://london.gov.uk/register-your-interest-2

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://london.gov.uk/register-your-school

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://london.gov.uk/renew-programme

#### Rule: [svg-img-alt](https://dequeuniversity.com/rules/axe/4.11/svg-img-alt?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: <svg> elements with an img role must have alternative text
- HTML: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="simple-icons-icon simple-icons-icon__linkedin" focusable="false">`
- XPath: `.simple-icons-icon__linkedin`

### https://london.gov.uk/report-landlord-or-agent

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://london.gov.uk/reporting-hate-crime

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://london.gov.uk/reports-and-toolkits

#### Rule: [svg-img-alt](https://dequeuniversity.com/rules/axe/4.11/svg-img-alt?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: <svg> elements with an img role must have alternative text
- HTML: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="simple-icons-icon simple-icons-icon__linkedin" focusable="false">`
- XPath: `.simple-icons-icon__linkedin`

### https://london.gov.uk/request-halt-tfl-consultation-bus-stops-bromley

#### Rule: [svg-img-alt](https://dequeuniversity.com/rules/axe/4.11/svg-img-alt?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: <svg> elements with an img role must have alternative text
- HTML: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="simple-icons-icon simple-icons-icon__linkedin" focusable="false">`
- XPath: `.simple-icons-icon__linkedin`

### https://london.gov.uk/request-increase-frequency-481-bus

#### Rule: [svg-img-alt](https://dequeuniversity.com/rules/axe/4.11/svg-img-alt?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: <svg> elements with an img role must have alternative text
- HTML: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="simple-icons-icon simple-icons-icon__linkedin" focusable="false">`
- XPath: `.simple-icons-icon__linkedin`

### https://london.gov.uk/request-increase-number-bus-countdown-indicators-greyhound-lane-and-streatham-vale

#### Rule: [svg-img-alt](https://dequeuniversity.com/rules/axe/4.11/svg-img-alt?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: <svg> elements with an img role must have alternative text
- HTML: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="simple-icons-icon simple-icons-icon__linkedin" focusable="false">`
- XPath: `.simple-icons-icon__linkedin`

### https://london.gov.uk/request-increased-police-numbers-and-local-safer-neighbourhood-teams

#### Rule: [svg-img-alt](https://dequeuniversity.com/rules/axe/4.11/svg-img-alt?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: <svg> elements with an img role must have alternative text
- HTML: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="simple-icons-icon simple-icons-icon__linkedin" focusable="false">`
- XPath: `.simple-icons-icon__linkedin`

### https://london.gov.uk/request-pedestrian-crossing-tulse-hill-and-brixton-water-junction

#### Rule: [svg-img-alt](https://dequeuniversity.com/rules/axe/4.11/svg-img-alt?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: <svg> elements with an img role must have alternative text
- HTML: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="simple-icons-icon simple-icons-icon__linkedin" focusable="false">`
- XPath: `.simple-icons-icon__linkedin`

### https://london.gov.uk/request-reduce-speed-limit-roehampton-vale

#### Rule: [svg-img-alt](https://dequeuniversity.com/rules/axe/4.11/svg-img-alt?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: <svg> elements with an img role must have alternative text
- HTML: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="simple-icons-icon simple-icons-icon__linkedin" focusable="false">`
- XPath: `.simple-icons-icon__linkedin`

### https://london.gov.uk/request-reduce-speed-limit-roehampton-vale-0

#### Rule: [svg-img-alt](https://dequeuniversity.com/rules/axe/4.11/svg-img-alt?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: <svg> elements with an img role must have alternative text
- HTML: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="simple-icons-icon simple-icons-icon__linkedin" focusable="false">`
- XPath: `.simple-icons-icon__linkedin`

### https://london.gov.uk/request-replacement-bus-shelter-highbury-grange

#### Rule: [svg-img-alt](https://dequeuniversity.com/rules/axe/4.11/svg-img-alt?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: <svg> elements with an img role must have alternative text
- HTML: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="simple-icons-icon simple-icons-icon__linkedin" focusable="false">`
- XPath: `.simple-icons-icon__linkedin`

### https://london.gov.uk/request-restore-lost-southwark-police-officers

#### Rule: [svg-img-alt](https://dequeuniversity.com/rules/axe/4.11/svg-img-alt?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: <svg> elements with an img role must have alternative text
- HTML: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="simple-icons-icon simple-icons-icon__linkedin" focusable="false">`
- XPath: `.simple-icons-icon__linkedin`

### https://london.gov.uk/request-review-how-control-vehicle-speeds-clapham-common-area

#### Rule: [svg-img-alt](https://dequeuniversity.com/rules/axe/4.11/svg-img-alt?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: <svg> elements with an img role must have alternative text
- HTML: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="simple-icons-icon simple-icons-icon__linkedin" focusable="false">`
- XPath: `.simple-icons-icon__linkedin`

### https://london.gov.uk/request-stop-conversion-premier-house

#### Rule: [svg-img-alt](https://dequeuniversity.com/rules/axe/4.11/svg-img-alt?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: <svg> elements with an img role must have alternative text
- HTML: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="simple-icons-icon simple-icons-icon__linkedin" focusable="false">`
- XPath: `.simple-icons-icon__linkedin`

### https://london.gov.uk/request-traffic-lights-charterhouse-street-junction

#### Rule: [svg-img-alt](https://dequeuniversity.com/rules/axe/4.11/svg-img-alt?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: <svg> elements with an img role must have alternative text
- HTML: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="simple-icons-icon simple-icons-icon__linkedin" focusable="false">`
- XPath: `.simple-icons-icon__linkedin`

### https://london.gov.uk/request-traffic-safety-measures-and-around-redbridge-roundabout

#### Rule: [svg-img-alt](https://dequeuniversity.com/rules/axe/4.11/svg-img-alt?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: <svg> elements with an img role must have alternative text
- HTML: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="simple-icons-icon simple-icons-icon__linkedin" focusable="false">`
- XPath: `.simple-icons-icon__linkedin`

### https://london.gov.uk/safer-roads-request-chiswick

#### Rule: [svg-img-alt](https://dequeuniversity.com/rules/axe/4.11/svg-img-alt?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: <svg> elements with an img role must have alternative text
- HTML: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="simple-icons-icon simple-icons-icon__linkedin" focusable="false">`
- XPath: `.simple-icons-icon__linkedin`

### https://london.gov.uk/step-free-access-rayners-lane-tube-station-request

#### Rule: [svg-img-alt](https://dequeuniversity.com/rules/axe/4.11/svg-img-alt?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: <svg> elements with an img role must have alternative text
- HTML: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="simple-icons-icon simple-icons-icon__linkedin" focusable="false">`
- XPath: `.simple-icons-icon__linkedin`

### https://london.gov.uk/traffic-congestion-report

#### Rule: [svg-img-alt](https://dequeuniversity.com/rules/axe/4.11/svg-img-alt?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: <svg> elements with an img role must have alternative text
- HTML: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="simple-icons-icon simple-icons-icon__linkedin" focusable="false">`
- XPath: `.simple-icons-icon__linkedin`

### https://london.gov.uk/traffic-review-request-junction-a20-and-a205-following-safety-concerns

#### Rule: [svg-img-alt](https://dequeuniversity.com/rules/axe/4.11/svg-img-alt?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: <svg> elements with an img role must have alternative text
- HTML: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="simple-icons-icon simple-icons-icon__linkedin" focusable="false">`
- XPath: `.simple-icons-icon__linkedin`

### https://london.gov.uk/who-we-are/city-halls-buildings-and-squares/how-find-city-hall

#### Rule: [svg-img-alt](https://dequeuniversity.com/rules/axe/4.11/svg-img-alt?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: <svg> elements with an img role must have alternative text
- HTML: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="simple-icons-icon simple-icons-icon__linkedin" focusable="false">`
- XPath: `.simple-icons-icon__linkedin`

### https://london.gov.uk/boris-johnson/register-of-interests

#### Rule: [svg-img-alt](https://dequeuniversity.com/rules/axe/4.11/svg-img-alt?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: <svg> elements with an img role must have alternative text
- HTML: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="simple-icons-icon simple-icons-icon__linkedin" focusable="false">`
- XPath: `.simple-icons-icon__linkedin`

### https://london.gov.uk/city-hall-blog/applying-government-service-standard-london-boroughs

#### Rule: [svg-img-alt](https://dequeuniversity.com/rules/axe/4.11/svg-img-alt?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: <svg> elements with an img role must have alternative text
- HTML: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="simple-icons-icon simple-icons-icon__linkedin" focusable="false">`
- XPath: `.simple-icons-icon__linkedin`

### https://london.gov.uk/city-hall-blog/digital-service-standard-local-government

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3 id="digital-service-design-in-central-government">Digital Service Design in central government</h3>`
- XPath: `#digital-service-design-in-central-government`

#### Rule: [svg-img-alt](https://dequeuniversity.com/rules/axe/4.11/svg-img-alt?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: <svg> elements with an img role must have alternative text
- HTML: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="simple-icons-icon simple-icons-icon__linkedin" focusable="false">`
- XPath: `.simple-icons-icon__linkedin`

### https://london.gov.uk/city-hall-blog/grenfell-tower-national-memorial-service

#### Rule: [svg-img-alt](https://dequeuniversity.com/rules/axe/4.11/svg-img-alt?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: <svg> elements with an img role must have alternative text
- HTML: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="simple-icons-icon simple-icons-icon__linkedin" focusable="false">`
- XPath: `.simple-icons-icon__linkedin`

### https://london.gov.uk/city-hall-blog/how-register-covid-summer-food-fund

#### Rule: [svg-img-alt](https://dequeuniversity.com/rules/axe/4.11/svg-img-alt?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: <svg> elements with an img role must have alternative text
- HTML: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="simple-icons-icon simple-icons-icon__linkedin" focusable="false">`
- XPath: `.simple-icons-icon__linkedin`

### https://london.gov.uk/city-hall-blog/im-committed-improving-mental-health-services-london

#### Rule: [svg-img-alt](https://dequeuniversity.com/rules/axe/4.11/svg-img-alt?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: <svg> elements with an img role must have alternative text
- HTML: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="simple-icons-icon simple-icons-icon__linkedin" focusable="false">`
- XPath: `.simple-icons-icon__linkedin`

### https://london.gov.uk/content/london-accessible-housing-register

#### Rule: [svg-img-alt](https://dequeuniversity.com/rules/axe/4.11/svg-img-alt?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: <svg> elements with an img role must have alternative text
- HTML: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="simple-icons-icon simple-icons-icon__linkedin" focusable="false">`
- XPath: `.simple-icons-icon__linkedin`

### https://london.gov.uk/events/77-memorial-service-2023

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<section class="u-space-y-6 u-p-6 sm:u-p-12 md:u-p-7 lg:u-p-8 xl:u-p-12 xl:u-p-11 xxl:u-p-10 u-bg-off-white has-light-bg" aria-labelledby="key-info-heading">`
- XPath: `.lg\:u-col-span-8 > section`

#### Rule: [svg-img-alt](https://dequeuniversity.com/rules/axe/4.11/svg-img-alt?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: <svg> elements with an img role must have alternative text
- HTML: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="simple-icons-icon simple-icons-icon__linkedin" focusable="false">`
- XPath: `.simple-icons-icon__linkedin`

### https://london.gov.uk/events/77-memorial-service-2024

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<section class="u-space-y-6 u-p-6 sm:u-p-12 md:u-p-7 lg:u-p-8 xl:u-p-12 xl:u-p-11 xxl:u-p-10 u-bg-off-white has-light-bg" aria-labelledby="key-info-heading">`
- XPath: `.lg\:u-col-span-8 > section`

#### Rule: [svg-img-alt](https://dequeuniversity.com/rules/axe/4.11/svg-img-alt?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: <svg> elements with an img role must have alternative text
- HTML: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="simple-icons-icon simple-icons-icon__linkedin" focusable="false">`
- XPath: `.simple-icons-icon__linkedin`

### https://london.gov.uk/events/mayors-christmas-carol-service-2023

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<section class="u-space-y-6 u-p-6 sm:u-p-12 md:u-p-7 lg:u-p-8 xl:u-p-12 xl:u-p-11 xxl:u-p-10 u-bg-off-white has-light-bg" aria-labelledby="key-info-heading">`
- XPath: `.lg\:u-col-span-8 > section`

#### Rule: [svg-img-alt](https://dequeuniversity.com/rules/axe/4.11/svg-img-alt?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: <svg> elements with an img role must have alternative text
- HTML: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="simple-icons-icon simple-icons-icon__linkedin" focusable="false">`
- XPath: `.simple-icons-icon__linkedin`

### https://london.gov.uk/events/mayors-christmas-carol-service-2024

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<section class="u-space-y-6 u-p-6 sm:u-p-12 md:u-p-7 lg:u-p-8 xl:u-p-12 xl:u-p-11 xxl:u-p-10 u-bg-off-white has-light-bg" aria-labelledby="key-info-heading">`
- XPath: `.lg\:u-col-span-8 > section`

#### Rule: [svg-img-alt](https://dequeuniversity.com/rules/axe/4.11/svg-img-alt?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: <svg> elements with an img role must have alternative text
- HTML: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="simple-icons-icon simple-icons-icon__linkedin" focusable="false">`
- XPath: `.simple-icons-icon__linkedin`

### https://london.gov.uk/events/mayors-christmas-carol-service-2025

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<section class="u-space-y-6 u-p-6 sm:u-p-12 md:u-p-7 lg:u-p-8 xl:u-p-12 xl:u-p-11 xxl:u-p-10 u-bg-off-white has-light-bg" aria-labelledby="key-info-heading">`
- XPath: `.lg\:u-col-span-8 > section`

#### Rule: [svg-img-alt](https://dequeuniversity.com/rules/axe/4.11/svg-img-alt?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: <svg> elements with an img role must have alternative text
- HTML: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="simple-icons-icon simple-icons-icon__linkedin" focusable="false">`
- XPath: `.simple-icons-icon__linkedin`

### https://london.gov.uk/events/remembrance-day-service-2023

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<section class="u-space-y-6 u-p-6 sm:u-p-12 md:u-p-7 lg:u-p-8 xl:u-p-12 xl:u-p-11 xxl:u-p-10 u-bg-off-white has-light-bg" aria-labelledby="key-info-heading">`
- XPath: `.lg\:u-col-span-8 > section`

#### Rule: [svg-img-alt](https://dequeuniversity.com/rules/axe/4.11/svg-img-alt?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: <svg> elements with an img role must have alternative text
- HTML: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="simple-icons-icon simple-icons-icon__linkedin" focusable="false">`
- XPath: `.simple-icons-icon__linkedin`

### https://london.gov.uk/events/remembrance-day-service-2024

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<section class="u-space-y-6 u-p-6 sm:u-p-12 md:u-p-7 lg:u-p-8 xl:u-p-12 xl:u-p-11 xxl:u-p-10 u-bg-off-white has-light-bg" aria-labelledby="key-info-heading">`
- XPath: `.lg\:u-col-span-8 > section`

#### Rule: [svg-img-alt](https://dequeuniversity.com/rules/axe/4.11/svg-img-alt?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: <svg> elements with an img role must have alternative text
- HTML: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="simple-icons-icon simple-icons-icon__linkedin" focusable="false">`
- XPath: `.simple-icons-icon__linkedin`

### https://london.gov.uk/events/remembrance-service-2025

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<section class="u-space-y-6 u-p-6 sm:u-p-12 md:u-p-7 lg:u-p-8 xl:u-p-12 xl:u-p-11 xxl:u-p-10 u-bg-off-white has-light-bg" aria-labelledby="key-info-heading">`
- XPath: `.lg\:u-col-span-8 > section`

#### Rule: [svg-img-alt](https://dequeuniversity.com/rules/axe/4.11/svg-img-alt?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: <svg> elements with an img role must have alternative text
- HTML: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="simple-icons-icon simple-icons-icon__linkedin" focusable="false">`
- XPath: `.simple-icons-icon__linkedin`

### https://london.gov.uk/heidi-alexander/register-of-interests

#### Rule: [svg-img-alt](https://dequeuniversity.com/rules/axe/4.11/svg-img-alt?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: <svg> elements with an img role must have alternative text
- HTML: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="simple-icons-icon simple-icons-icon__linkedin" focusable="false">`
- XPath: `.simple-icons-icon__linkedin`

### https://london.gov.uk/julia-slay/register-of-interests

#### Rule: [svg-img-alt](https://dequeuniversity.com/rules/axe/4.11/svg-img-alt?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: <svg> elements with an img role must have alternative text
- HTML: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="simple-icons-icon simple-icons-icon__linkedin" focusable="false">`
- XPath: `.simple-icons-icon__linkedin`

### https://london.gov.uk/mayor-london/mayors-annual-report

#### Rule: [svg-img-alt](https://dequeuniversity.com/rules/axe/4.11/svg-img-alt?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: <svg> elements with an img role must have alternative text
- HTML: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="simple-icons-icon simple-icons-icon__linkedin" focusable="false">`
- XPath: `.simple-icons-icon__linkedin`

### https://london.gov.uk/motions/70th-anniversary-national-health-service

#### Rule: [svg-img-alt](https://dequeuniversity.com/rules/axe/4.11/svg-img-alt?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: <svg> elements with an img role must have alternative text
- HTML: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="simple-icons-icon simple-icons-icon__linkedin" focusable="false">`
- XPath: `.simple-icons-icon__linkedin`

### https://london.gov.uk/motions/backing-age-uks-campaign-fully-reinstate-winter-fuel-payment

#### Rule: [svg-img-alt](https://dequeuniversity.com/rules/axe/4.11/svg-img-alt?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: <svg> elements with an img role must have alternative text
- HTML: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="simple-icons-icon simple-icons-icon__linkedin" focusable="false">`
- XPath: `.simple-icons-icon__linkedin`

### https://london.gov.uk/motions/banking-services

#### Rule: [svg-img-alt](https://dequeuniversity.com/rules/axe/4.11/svg-img-alt?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: <svg> elements with an img role must have alternative text
- HTML: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="simple-icons-icon simple-icons-icon__linkedin" focusable="false">`
- XPath: `.simple-icons-icon__linkedin`

### https://london.gov.uk/motions/blair-peach-and-cass-report

#### Rule: [svg-img-alt](https://dequeuniversity.com/rules/axe/4.11/svg-img-alt?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: <svg> elements with an img role must have alternative text
- HTML: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="simple-icons-icon simple-icons-icon__linkedin" focusable="false">`
- XPath: `.simple-icons-icon__linkedin`

### https://london.gov.uk/motions/child-and-adolescent-mental-health-services-camhs

#### Rule: [svg-img-alt](https://dequeuniversity.com/rules/axe/4.11/svg-img-alt?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: <svg> elements with an img role must have alternative text
- HTML: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="simple-icons-icon simple-icons-icon__linkedin" focusable="false">`
- XPath: `.simple-icons-icon__linkedin`

### https://london.gov.uk/motions/coroner-report-cycling-fatalities

#### Rule: [svg-img-alt](https://dequeuniversity.com/rules/axe/4.11/svg-img-alt?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: <svg> elements with an img role must have alternative text
- HTML: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="simple-icons-icon simple-icons-icon__linkedin" focusable="false">`
- XPath: `.simple-icons-icon__linkedin`

### https://london.gov.uk/motions/coroner-report-cycling-fatalities-0

#### Rule: [svg-img-alt](https://dequeuniversity.com/rules/axe/4.11/svg-img-alt?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: <svg> elements with an img role must have alternative text
- HTML: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="simple-icons-icon simple-icons-icon__linkedin" focusable="false">`
- XPath: `.simple-icons-icon__linkedin`

