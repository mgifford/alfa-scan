# Scan Report: Mgov

- Issue: https://github.com/mgifford/open-scans/issues/122
- Submitted by: maggiewachs
- Scanned at: 2026-03-11T19:29:20.913Z
- Engines used: AXE, EQUALACCESS
- Scan duration: 24.4 minutes
- Total URLs submitted: 100
- Accepted public URLs: 100
- Rejected URLs: 0
- 🌙 **Dark mode tested: 4 of 100 URLs (4%) support `prefers-color-scheme: dark`**
- ALFA outcomes: 0 passed, 0 failed, 0 cantTell, 0 inapplicable
- axe outcomes: 88335 passed, 38 failed, 485 cantTell, 3236 inapplicable
- Equal Access outcomes: 193301 passed, 2567 failed (2251 unique, 316 duplicate), 1460 cantTell, 0 inapplicable
- AccessLint outcomes: 0 passed, 0 failed (0 unique, 0 duplicate), 0 cantTell, 0 inapplicable
- QualWeb outcomes: 0 passed, 0 failed, 0 cantTell, 0 inapplicable
- Duplicate findings caught by later scanners: 316

## 🎯 Priority: Pages with Most Errors

Focus your efforts on these pages to make the biggest impact (combined scanner unique failures):

| Page | axe Unique | Equal Access Unique | Total Unique | Page Title |
|---|---:|---:|---:|---|
| [View Page](https://www.medicare.gov/coverage/ambulance-services) | 0 | 43 | **43** | Ambulance services coverage |
| [View Page](https://www.medicare.gov/basics/get-started-with-medicare/using-medicare/how-to-get-medicare-services) | 0 | 43 | **43** | How to get Medicare services \| Medicare |
| [View Page](https://www.medicare.gov/sitemap) | 0 | 43 | **43** | A-Z Index \| Medicare |
| [View Page](https://www.medicare.gov/coverage/advanced-primary-care-management-services) | 5 | 37 | **42** | Advanced Primary Healthcare Management \| Learn More |
| [View Page](https://www.medicare.gov/care-compare/?providerType=Hospital) | 0 | 42 | **42** | Find Healthcare Providers: Compare Care Near You \| Medicare |
| [View Page](https://www.medicare.gov/care-compare/?providerType=DialysisFacility) | 0 | 41 | **41** | Find Healthcare Providers: Compare Care Near You \| Medicare |
| [View Page](https://www.medicare.gov/care-compare/?providerType=HomeHealth) | 0 | 41 | **41** | Find Healthcare Providers: Compare Care Near You \| Medicare |
| [View Page](https://www.medicare.gov/care-compare/?providerType=Hospice) | 0 | 41 | **41** | Find Healthcare Providers: Compare Care Near You \| Medicare |
| [View Page](https://www.medicare.gov/care-compare/?providerType=InpatientRehabilitation) | 0 | 41 | **41** | Find Healthcare Providers: Compare Care Near You \| Medicare |
| [View Page](https://www.medicare.gov/coverage/cardiovascular-risk-assessment-management-services) | 5 | 35 | **40** | Medicare Cardiovascular Risk Management \| Learn More |

## 🔧 Priority: Most Common Issues (ALFA)

These ALFA accessibility issues appear most frequently across your pages:

✅ No ALFA failed rules detected!

## 🔧 Priority: Most Common Issues (axe)

These axe accessibility issues appear most frequently across your pages:

| Rule | Pages Affected | Documentation |
|---|---:|---|
| landmark-unique | **8** of 100 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/landmark-unique) |
| color-contrast | **7** of 100 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/color-contrast) |
| frame-title | **7** of 100 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/frame-title) |
| image-alt | **7** of 100 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/image-alt) |
| heading-order | **1** of 100 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/heading-order) |

> 💡 **Tip**: Click on the rule documentation links to learn how to fix each issue. Consider fixing the most common issues first for maximum impact.

> 🤖 **Future Enhancement**: This report will soon include AI-powered fix suggestions for authenticated GitHub users (opt-in only, no auto-run AI).

## 🔍 Cross-Page Patterns: Common HTML Issues

These HTML patterns cause the same accessibility errors across multiple pages. **Fix the pattern once in your codebase to fix it everywhere!**

### 🎯 Top Patterns to Fix (Highest Impact)

#### Pattern 1: Affects 8 page(s) - 8 occurrence(s)

**Scanner**: axe
**Rule**: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate
**Issue**: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

**HTML Pattern**:
```html
<main id="content" class="ds-l-col--12 ds-u-padding-x--0 primary-content__content">
```

**XPath** (use in browser DevTools):
```
#content
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('#content')`
5. The element will be highlighted

**Affected Pages**:
- https://medicare.gov/coverage/search
- https://medicare.gov/basics/report-a-death
- https://medicare.gov/coverage/advanced-primary-care-management-services
- https://medicare.gov/coverage/blood-services
- https://medicare.gov/coverage/cardiovascular-risk-assessment-management-services
- *...and 3 more page(s)*

---

#### Pattern 2: Affects 7 page(s) - 7 occurrence(s)

**Scanner**: axe
**Rule**: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**Issue**: Elements must meet minimum color contrast ratio thresholds

**HTML Pattern**:
```html
<a href="https://www.medicare.gov/privacy-policy" <u="">data privacy policy.</a>
```

**XPath** (use in browser DevTools):
```
iframe[height="100%"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('iframe[height="100%"]')`
5. The element will be highlighted

**Affected Pages**:
- https://medicare.gov/coverage/search
- https://medicare.gov/basics/report-a-death
- https://medicare.gov/coverage/advanced-primary-care-management-services
- https://medicare.gov/coverage/blood-services
- https://medicare.gov/coverage/cardiovascular-risk-assessment-management-services
- *...and 2 more page(s)*

---

#### Pattern 3: Affects 7 page(s) - 7 occurrence(s)

**Scanner**: axe
**Rule**: [frame-title](https://dequeuniversity.com/rules/axe/4.11/frame-title?application=playwright)
**Impact**: serious
**Issue**: Frames must have an accessible name

**HTML Pattern**:
```html
<iframe data-src="https://surveys.cms.gov/jfe/form/SV_9LbdFueyKSYZ2nk?Q_CHL=si&amp;Q_CanScreenCapture=1" width="100%" height="100%" frameborder="0" name="survey-iframe-SI_6tbIx8xW9ShoDfU" data-name="embedded-iframe-SI_6tbIx8xW9ShoDfU"></iframe>
```

**XPath** (use in browser DevTools):
```
iframe[height="100%"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('iframe[height="100%"]')`
5. The element will be highlighted

**Affected Pages**:
- https://medicare.gov/coverage/search
- https://medicare.gov/basics/report-a-death
- https://medicare.gov/coverage/advanced-primary-care-management-services
- https://medicare.gov/coverage/blood-services
- https://medicare.gov/coverage/cardiovascular-risk-assessment-management-services
- *...and 2 more page(s)*

---

#### Pattern 4: Affects 7 page(s) - 7 occurrence(s)

**Scanner**: axe
**Rule**: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**Issue**: Images must have alternative text

**HTML Pattern**:
```html
<img src="https://surveys.CMS.gov/CP/Graphic.php?IM=IM_eECuJsNTdnd7l66" style="width: 448px; height: 297px;" data-image-state="ready">
```

**XPath** (use in browser DevTools):
```
iframe[height="100%"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('iframe[height="100%"]')`
5. The element will be highlighted

**Affected Pages**:
- https://medicare.gov/coverage/search
- https://medicare.gov/basics/report-a-death
- https://medicare.gov/coverage/advanced-primary-care-management-services
- https://medicare.gov/coverage/blood-services
- https://medicare.gov/coverage/cardiovascular-risk-assessment-management-services
- *...and 2 more page(s)*

---

#### Pattern 5: Affects 7 page(s) - 7 occurrence(s)

**Scanner**: axe
**Rule**: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate
**Issue**: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

**HTML Pattern**:
```html
<nav class="social-links " data-component-id="medicare_evo:footer">
```

**XPath** (use in browser DevTools):
```
.social-links
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.social-links')`
5. The element will be highlighted

**Affected Pages**:
- https://medicare.gov/coverage/search
- https://medicare.gov/basics/report-a-death
- https://medicare.gov/coverage/advanced-primary-care-management-services
- https://medicare.gov/coverage/blood-services
- https://medicare.gov/coverage/cardiovascular-risk-assessment-management-services
- *...and 2 more page(s)*

---

> 💡 **Pro Tip**: These patterns likely come from shared components or templates in your codebase. Fix them in the component/template source, and the fix will propagate to all affected pages.

## 📊 Detailed Results

Complete scan results for all tested pages:

| Submitted URL | Final URL | Status | HTTP | Redirected | Time (ms) | axe Unique | ALFA Unique | Equal Access Unique | AccessLint Unique | Duplicates | Notes |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|
| https://medicare.gov/ | https://www.medicare.gov/ | OK | 200 | yes | 9582 | 0 | 0 | 18 | 0 | 6 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, fieldset_legend_valid, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_sensory_misuse |
| https://medicare.gov/about-us/accessibility-nondiscrimination-notice | https://www.medicare.gov/about-us/accessibility-nondiscrimination-notice | OK | 200 | yes | 5837 | 0 | 0 | 26 | 0 | 4 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, fieldset_legend_valid, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_sensory_misuse |
| https://medicare.gov/basics/forms-publications-mailings/mailings/help-with-costs/copayment-changing | https://www.medicare.gov/basics/forms-publications-mailings/mailings/help-with-costs/copayment-changing | OK | 200 | yes | 5103 | 0 | 0 | 25 | 0 | 3 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, fieldset_legend_valid, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_sensory_misuse |
| https://medicare.gov/coverage/find-alphabetically | https://www.medicare.gov/coverage/find-alphabetically | OK | 200 | yes | 6967 | 0 | 0 | 28 | 0 | 34 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_keyboard_handler_exists, aria_role_redundant, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, fieldset_legend_valid, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, widget_tabbable_single |
| https://medicare.gov/coverage/search | https://www.medicare.gov/coverage/search | OK | 200 | yes | 5439 | 5 | 0 | 27 | 0 | 3 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, frame-title, image-alt, landmark-unique |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_form_label_unique, aria_role_redundant, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, fieldset_legend_valid, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible |
| https://medicare.gov/coverage/search/pii | https://www.medicare.gov/coverage/search/pii | OK | 200 | yes | 5025 | 0 | 0 | 27 | 0 | 3 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_form_label_unique, aria_role_redundant, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, fieldset_legend_valid, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible |
| https://medicare.gov/prescription-payment-plan | https://www.medicare.gov/prescription-payment-plan | OK | 200 | yes | 5177 | 0 | 0 | 29 | 0 | 3 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, fieldset_legend_valid, frame_src_valid, input_label_visible, label_name_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_sensory_misuse |
| https://medicare.gov/providers-services | https://www.medicare.gov/providers-services | OK | 200 | yes | 4843 | 0 | 0 | 20 | 0 | 3 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, fieldset_legend_valid, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible |
| https://medicare.gov/search/medicare/pii | https://www.medicare.gov/search/medicare/pii | OK | 200 | yes | 4637 | 0 | 0 | 18 | 0 | 3 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, fieldset_legend_valid, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible |
| https://medicare.gov/basics/report-a-death | https://www.medicare.gov/basics/report-a-death | OK | 200 | yes | 5303 | 5 | 0 | 20 | 0 | 3 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, frame-title, image-alt, landmark-unique |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, fieldset_legend_valid, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible |
| https://medicare.gov/basics/reporting-medicare-fraud-and-abuse | https://www.medicare.gov/basics/reporting-medicare-fraud-and-abuse | OK | 200 | yes | 5469 | 0 | 0 | 26 | 0 | 3 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, fieldset_legend_valid, frame_src_valid, input_label_visible, label_name_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible |
| https://medicare.gov/coverage/advanced-primary-care-management-services | https://www.medicare.gov/coverage/advanced-primary-care-management-services | OK | 200 | yes | 6168 | 5 | 0 | 37 | 0 | 3 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, frame-title, image-alt, landmark-unique |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, fieldset_legend_valid, frame_src_valid, input_label_visible, list_markup_review, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_sensory_misuse |
| https://medicare.gov/coverage/ambulance-services | https://www.medicare.gov/coverage/ambulance-services | OK | 200 | yes | 5507 | 0 | 0 | 43 | 0 | 3 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, fieldset_legend_valid, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_quoted_correctly, text_sensory_misuse |
| https://medicare.gov/coverage/behavioral-health-integration-services | https://www.medicare.gov/coverage/behavioral-health-integration-services | OK | 200 | yes | 5300 | 0 | 0 | 28 | 0 | 3 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, fieldset_legend_valid, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading |
| https://medicare.gov/coverage/blood-services | https://www.medicare.gov/coverage/blood-services | OK | 200 | yes | 5758 | 5 | 0 | 26 | 0 | 3 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, frame-title, image-alt, landmark-unique |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, fieldset_legend_valid, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible |
| https://medicare.gov/coverage/cardiovascular-risk-assessment-management-services | https://www.medicare.gov/coverage/cardiovascular-risk-assessment-management-services | OK | 200 | yes | 6032 | 5 | 0 | 35 | 0 | 4 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, frame-title, image-alt, landmark-unique |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, fieldset_legend_valid, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_sensory_misuse |
| https://medicare.gov/coverage/caregiver-training-services | https://www.medicare.gov/coverage/caregiver-training-services | OK | 200 | yes | 5530 | 0 | 0 | 28 | 0 | 3 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, fieldset_legend_valid, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading |
| https://medicare.gov/coverage/chiropractic-services | https://www.medicare.gov/coverage/chiropractic-services | OK | 200 | yes | 5480 | 0 | 0 | 37 | 0 | 3 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_form_label_unique, aria_role_redundant, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, fieldset_legend_valid, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading |
| https://medicare.gov/prescription-payment-plan/before-payment-option | https://www.medicare.gov/prescription-payment-plan/before-payment-option | OK | 200 | yes | 5421 | 0 | 0 | 22 | 0 | 6 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, fieldset_legend_valid, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_sensory_misuse |
| https://medicare.gov/prescription-payment-plan/examples | https://www.medicare.gov/prescription-payment-plan/examples | OK | 200 | yes | 5386 | 0 | 0 | 20 | 0 | 3 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, fieldset_legend_valid, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible |
| https://medicare.gov/prescription-payment-plan/using-payment-option | https://www.medicare.gov/prescription-payment-plan/using-payment-option | OK | 200 | yes | 5179 | 0 | 0 | 27 | 0 | 3 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, fieldset_legend_valid, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_sensory_misuse |
| https://medicare.gov/prescription-payment-plan/will-this-help-me | https://www.medicare.gov/prescription-payment-plan/will-this-help-me | OK | 200 | yes | 5787 | 5 | 0 | 21 | 0 | 3 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, frame-title, image-alt, landmark-unique |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, fieldset_legend_valid, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_sensory_misuse |
| https://medicare.gov/providers-services/claims-appeals-complaints | https://www.medicare.gov/providers-services/claims-appeals-complaints | OK | 200 | yes | 5613 | 5 | 0 | 20 | 0 | 3 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, frame-title, image-alt, landmark-unique |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, fieldset_legend_valid, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible |
| https://medicare.gov/providers-services/coordinating-care | https://www.medicare.gov/providers-services/coordinating-care | OK | 200 | yes | 5410 | 0 | 0 | 23 | 0 | 4 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, fieldset_legend_valid, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_sensory_misuse |
| https://medicare.gov/providers-services/disaster-emergency | https://www.medicare.gov/providers-services/disaster-emergency | OK | 200 | yes | 5384 | 0 | 0 | 22 | 0 | 3 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, fieldset_legend_valid, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible |
| https://medicare.gov/providers-services/original-medicare | https://www.medicare.gov/providers-services/original-medicare | OK | 200 | yes | 5317 | 0 | 0 | 20 | 0 | 3 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, fieldset_legend_valid, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible |
| https://medicare.gov/publications/02174-nursing-home-other-long-term-services.epub | https://medicare.gov/publications/02174-nursing-home-other-long-term-services.epub | FAIL | - | no | 60000 | 0 | 0 | 0 | 0 | 0 | URL scan exceeded 60s timeout |
| https://medicare.gov/publications/02174-nursing-home-other-long-term-services.mobi | https://medicare.gov/publications/02174-nursing-home-other-long-term-services.mobi | FAIL | - | no | 59999 | 0 | 0 | 0 | 0 | 0 | URL scan exceeded 60s timeout |
| https://medicare.gov/publications/10110-Your-Guide-to-Medicare-Preventive-Services.epub | https://medicare.gov/publications/10110-Your-Guide-to-Medicare-Preventive-Services.epub | FAIL | - | no | 60000 | 0 | 0 | 0 | 0 | 0 | URL scan exceeded 60s timeout |
| https://medicare.gov/publications/10110-Your-Guide-to-Medicare-Preventive-Services.mobi | https://medicare.gov/publications/10110-Your-Guide-to-Medicare-Preventive-Services.mobi | FAIL | - | no | 59999 | 0 | 0 | 0 | 0 | 0 | URL scan exceeded 60s timeout |
| https://medicare.gov/publications/your_guide_to_medicares_preventive_services.epub | https://medicare.gov/publications/your_guide_to_medicares_preventive_services.epub | FAIL | - | no | 60001 | 0 | 0 | 0 | 0 | 0 | URL scan exceeded 60s timeout |
| https://medicare.gov/basics/costs/pay-premiums | https://www.medicare.gov/basics/costs/pay-premiums | OK | 200 | yes | 11837 | 0 | 0 | 33 | 0 | 4 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, fieldset_legend_valid, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_quoted_correctly, text_sensory_misuse |
| https://medicare.gov/basics/reporting-medicare-fraud-and-abuse/privacy-practices-original-medicare | https://www.medicare.gov/basics/reporting-medicare-fraud-and-abuse/privacy-practices-original-medicare | OK | 200 | yes | 10365 | 0 | 0 | 22 | 0 | 4 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, fieldset_legend_valid, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_sensory_misuse |
| https://medicare.gov/health-drug-plans/coordination/who-pays-first | https://www.medicare.gov/health-drug-plans/coordination/who-pays-first | OK | 200 | yes | 10782 | 0 | 0 | 22 | 0 | 3 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, fieldset_legend_valid, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible |
| https://medicare.gov/providers-services/claims-appeals-complaints/appeals | https://www.medicare.gov/providers-services/claims-appeals-complaints/appeals | OK | 200 | yes | 9884 | 0 | 0 | 25 | 0 | 3 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, fieldset_legend_valid, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_sensory_misuse |
| https://medicare.gov/providers-services/claims-appeals-complaints/claims | https://www.medicare.gov/providers-services/claims-appeals-complaints/claims | OK | 200 | yes | 11050 | 0 | 0 | 28 | 0 | 3 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, fieldset_legend_valid, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible |
| https://medicare.gov/providers-services/claims-appeals-complaints/complaints | https://www.medicare.gov/providers-services/claims-appeals-complaints/complaints | OK | 200 | yes | 11296 | 0 | 0 | 28 | 0 | 3 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, fieldset_legend_valid, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_sensory_misuse |
| https://medicare.gov/providers-services/original-medicare/not-covered | https://www.medicare.gov/providers-services/original-medicare/not-covered | OK | 200 | yes | 11059 | 0 | 0 | 32 | 0 | 3 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, fieldset_legend_valid, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible |
| https://medicare.gov/providers-services/original-medicare/nursing-homes | https://www.medicare.gov/providers-services/original-medicare/nursing-homes | OK | 200 | yes | 10305 | 0 | 0 | 20 | 0 | 3 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, fieldset_legend_valid, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible |
| https://medicare.gov/basics/costs/pay-premiums/medicare-easy-pay | https://www.medicare.gov/basics/costs/pay-premiums/medicare-easy-pay | OK | 200 | yes | 11049 | 0 | 0 | 21 | 0 | 4 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, fieldset_legend_valid, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_quoted_correctly |
| https://medicare.gov/basics/costs/pay-premiums/online-bill-pay | https://www.medicare.gov/basics/costs/pay-premiums/online-bill-pay | OK | 200 | yes | 10400 | 0 | 0 | 22 | 0 | 3 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, fieldset_legend_valid, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_quoted_correctly |
| https://medicare.gov/basics/get-started-with-medicare/using-medicare/how-to-get-medicare-services | https://www.medicare.gov/basics/get-started-with-medicare/using-medicare/how-to-get-medicare-services | OK | 200 | yes | 13667 | 0 | 0 | 43 | 0 | 3 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, fieldset_legend_valid, frame_src_valid, input_label_visible, label_name_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible |
| https://medicare.gov/basics/costs/help | https://www.medicare.gov/basics/costs/help | OK | 200 | yes | 10876 | 0 | 0 | 21 | 0 | 4 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, fieldset_legend_valid, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_sensory_misuse |
| https://medicare.gov/basics/forms-publications-mailings/mailings/costs-and-coverage/change-in-social-security-payment | https://www.medicare.gov/basics/forms-publications-mailings/mailings/costs-and-coverage/change-in-social-security-payment | OK | 200 | yes | 10157 | 0 | 0 | 20 | 0 | 3 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, fieldset_legend_valid, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible |
| https://medicare.gov/care-compare/resources/about-this-tool | https://www.medicare.gov/care-compare/resources/about-this-tool/ | OK | 200 | yes | 12211 | 1 | 0 | 26 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: heading-order |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_visible, frame_src_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_sensory_misuse |
| https://medicare.gov/care-compare/resources/information-about-provider-types | https://www.medicare.gov/care-compare/resources/information-about-provider-types/ | OK | 200 | yes | 14039 | 0 | 0 | 32 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_visible, frame_src_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_sensory_misuse |
| https://medicare.gov/care-compare/resources/information-for-providers | https://www.medicare.gov/care-compare/resources/information-for-providers/ | OK | 200 | yes | 12490 | 0 | 0 | 23 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_visible, frame_src_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_sensory_misuse |
| https://medicare.gov/care-compare/resources/resources-and-information | https://www.medicare.gov/care-compare/resources/resources-and-information/ | OK | 200 | yes | 13345 | 0 | 0 | 23 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_visible, frame_src_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_sensory_misuse |
| https://medicare.gov/about-us | https://www.medicare.gov/about-us | OK | 200 | yes | 9049 | 0 | 0 | 15 | 0 | 3 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_unobscured, fieldset_legend_valid, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible |
| https://medicare.gov/archive | https://www.medicare.gov/archive | OK | 200 | yes | 9281 | 0 | 0 | 21 | 0 | 3 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, fieldset_legend_valid, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_sensory_misuse |
| https://medicare.gov/care-compare | https://www.medicare.gov/care-compare/ | OK | 200 | yes | 14346 | 0 | 0 | 37 | 0 | 4 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_descendant_valid, aria_role_redundant, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_visible, frame_src_valid, style_background_decorative, style_color_misuse, style_focus_visible, style_highcontrast_visible, style_hover_persistent, text_sensory_misuse |
| https://medicare.gov/care-compare/?providerType=DialysisFacility | https://www.medicare.gov/care-compare/?providerType=DialysisFacility | OK | 200 | yes | 15411 | 0 | 0 | 41 | 0 | 4 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_attribute_redundant, aria_content_in_landmark, aria_descendant_valid, aria_keyboard_handler_exists, aria_role_redundant, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_visible, frame_src_valid, style_background_decorative, style_color_misuse, style_focus_visible, style_highcontrast_visible, style_hover_persistent |
| https://medicare.gov/care-compare/?providerType=HomeHealth | https://www.medicare.gov/care-compare/?providerType=HomeHealth | OK | 200 | yes | 15559 | 0 | 0 | 41 | 0 | 4 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_attribute_redundant, aria_content_in_landmark, aria_descendant_valid, aria_keyboard_handler_exists, aria_role_redundant, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_visible, frame_src_valid, style_background_decorative, style_color_misuse, style_focus_visible, style_highcontrast_visible, style_hover_persistent |
| https://medicare.gov/care-compare/?providerType=Hospice | https://www.medicare.gov/care-compare/?providerType=Hospice | OK | 200 | yes | 15717 | 0 | 0 | 41 | 0 | 4 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_attribute_redundant, aria_content_in_landmark, aria_descendant_valid, aria_keyboard_handler_exists, aria_role_redundant, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_visible, frame_src_valid, style_background_decorative, style_color_misuse, style_focus_visible, style_highcontrast_visible, style_hover_persistent |
| https://medicare.gov/care-compare/?providerType=Hospital | https://www.medicare.gov/care-compare/?providerType=Hospital | OK | 200 | yes | 13009 | 0 | 0 | 42 | 0 | 4 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_attribute_redundant, aria_content_in_landmark, aria_descendant_valid, aria_keyboard_handler_exists, aria_role_redundant, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_visible, frame_src_valid, style_background_decorative, style_color_misuse, style_focus_visible, style_highcontrast_visible, style_hover_persistent |
| https://medicare.gov/care-compare/?providerType=InpatientRehabilitation | https://www.medicare.gov/care-compare/?providerType=InpatientRehabilitation | OK | 200 | yes | 11982 | 0 | 0 | 41 | 0 | 4 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_attribute_redundant, aria_content_in_landmark, aria_descendant_valid, aria_keyboard_handler_exists, aria_role_redundant, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_visible, frame_src_valid, style_background_decorative, style_color_misuse, style_focus_visible, style_highcontrast_visible, style_hover_persistent |
| https://medicare.gov/eligibilitypremiumcalc | https://www.medicare.gov/eligibilitypremiumcalc | OK | 200 | yes | 10008 | 0 | 0 | 20 | 0 | 3 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, fieldset_legend_valid, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible |
| https://medicare.gov/glossary | https://www.medicare.gov/glossary | OK | 200 | yes | 9634 | 0 | 0 | 20 | 0 | 3 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, fieldset_legend_valid, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible |
| https://medicare.gov/go-digital | https://www.medicare.gov/go-digital | OK | 200 | yes | 10172 | 0 | 0 | 26 | 0 | 9 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, fieldset_legend_valid, frame_src_valid, input_label_visible, list_markup_review, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_quoted_correctly |
| https://medicare.gov/health-drug-plans | https://www.medicare.gov/health-drug-plans | OK | 200 | yes | 9207 | 0 | 0 | 16 | 0 | 3 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_unobscured, fieldset_legend_valid, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_sensory_misuse |
| https://medicare.gov/index | https://www.medicare.gov/ | OK | 200 | yes | 9666 | 0 | 0 | 13 | 0 | 6 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_unobscured, fieldset_legend_valid, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_sensory_misuse |
| https://medicare.gov/medical-equipment-suppliers | https://www.medicare.gov/medical-equipment-suppliers | OK | 200 | yes | 10695 | 0 | 0 | 15 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_id_unique, aria_keyboard_handler_exists, aria_role_redundant, element_tabbable_unobscured, element_tabbable_visible, frame_src_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible |
| https://medicare.gov/medicare-and-you | https://www.medicare.gov/medicare-and-you | OK | 200 | yes | 9717 | 0 | 0 | 16 | 0 | 3 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_unobscured, fieldset_legend_valid, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_quoted_correctly |
| https://medicare.gov/plain-language | https://www.medicare.gov/plain-language | OK | 200 | yes | 13994 | 2 | 0 | 22 | 0 | 3 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-unique |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, fieldset_legend_valid, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible |
| https://medicare.gov/plan-compare | https://www.medicare.gov/plan-compare/ | OK | 200 | yes | 6638 | 0 | 0 | 7 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, element_tabbable_visible, frame_src_valid, html_skipnav_exists, skip_main_exists, style_color_misuse, style_highcontrast_visible |
| https://medicare.gov/privacy-policy | https://www.medicare.gov/privacy-policy | OK | 200 | yes | 12172 | 0 | 0 | 17 | 0 | 7 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_unobscured, fieldset_legend_valid, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_quoted_correctly, text_sensory_misuse |
| https://medicare.gov/procedure-price-lookup | https://www.medicare.gov/procedure-price-lookup/ | OK | 200 | yes | 9770 | 0 | 0 | 18 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_id_unique, aria_keyboard_handler_exists, element_attribute_deprecated, element_tabbable_visible, frame_src_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible |
| https://medicare.gov/publications | https://www.medicare.gov/publications | OK | 200 | yes | 9811 | 0 | 0 | 18 | 0 | 3 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_form_label_unique, aria_role_redundant, element_attribute_deprecated, element_tabbable_unobscured, fieldset_legend_valid, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible |
| https://medicare.gov/talk-to-someone | https://www.medicare.gov/talk-to-someone | OK | 200 | yes | 10755 | 0 | 0 | 20 | 0 | 3 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, fieldset_legend_valid, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible |
| https://medicare.gov/about-us/contact-medicare | https://www.medicare.gov/about-us/contact-medicare | OK | 200 | yes | 9002 | 0 | 0 | 16 | 0 | 3 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_unobscured, fieldset_legend_valid, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible |
| https://medicare.gov/about-us/get-involved-with-medicare | https://www.medicare.gov/about-us/get-involved-with-medicare | OK | 200 | yes | 9117 | 0 | 0 | 15 | 0 | 3 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_unobscured, fieldset_legend_valid, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible |
| https://medicare.gov/about-us/how-is-medicare-funded | https://www.medicare.gov/about-us/how-is-medicare-funded | OK | 200 | yes | 9751 | 0 | 0 | 31 | 0 | 3 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, fieldset_legend_valid, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible |
| https://medicare.gov/about-us/other-languages | https://www.medicare.gov/about-us/other-languages | OK | 200 | yes | 9059 | 0 | 0 | 17 | 0 | 5 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_unobscured, fieldset_legend_valid, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_quoted_correctly, text_sensory_misuse |
| https://medicare.gov/about-us/plain-writing | https://www.medicare.gov/about-us/plain-writing | OK | 200 | yes | 9447 | 0 | 0 | 16 | 0 | 3 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_unobscured, fieldset_legend_valid, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible |
| https://medicare.gov/about-us/using-this-site | https://www.medicare.gov/about-us/using-this-site | OK | 200 | yes | 9046 | 0 | 0 | 15 | 0 | 3 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_unobscured, fieldset_legend_valid, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible |
| https://medicare.gov/account/create-account | https://www.medicare.gov/account/create-account | OK | 200 | yes | 8261 | 0 | 0 | 9 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, element_attribute_deprecated, element_tabbable_visible, fieldset_label_valid, fieldset_legend_valid, frame_src_valid, style_color_misuse, style_highcontrast_visible |
| https://medicare.gov/account/login | https://www.medicare.gov/account/login | OK | 200 | yes | 10310 | 0 | 0 | 13 | 0 | 7 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_descendant_valid, element_attribute_deprecated, element_tabbable_visible, frame_src_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible |
| https://medicare.gov/health-drug-plans/coordination | https://www.medicare.gov/health-drug-plans/coordination | OK | 200 | yes | 10756 | 0 | 0 | 21 | 0 | 3 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, fieldset_legend_valid, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_quoted_correctly |
| https://medicare.gov/health-drug-plans/health-plans | https://www.medicare.gov/health-drug-plans/health-plans | OK | 200 | yes | 10565 | 0 | 0 | 30 | 0 | 3 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, fieldset_legend_valid, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible |
| https://medicare.gov/health-drug-plans/medigap | https://www.medicare.gov/health-drug-plans/medigap | OK | 200 | yes | 10991 | 0 | 0 | 33 | 0 | 3 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, fieldset_legend_valid, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_sensory_misuse |
| https://medicare.gov/health-drug-plans/open-enrollment | https://www.medicare.gov/health-drug-plans/open-enrollment | OK | 200 | yes | 10171 | 0 | 0 | 21 | 0 | 3 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, fieldset_legend_valid, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_sensory_misuse |
| https://medicare.gov/health-drug-plans/part-d | https://www.medicare.gov/health-drug-plans/part-d | OK | 200 | yes | 9832 | 0 | 0 | 24 | 0 | 3 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, fieldset_legend_valid, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible |
| https://medicare.gov/node/26306 | https://www.medicare.gov/node/26306 | OK | 200 | yes | 12867 | 0 | 0 | 32 | 0 | 6 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, fieldset_legend_valid, frame_src_valid, input_label_visible, list_markup_review, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_sensory_misuse |
| https://medicare.gov/node/27591 | https://www.medicare.gov/node/27591 | OK | 200 | yes | 10616 | 0 | 0 | 25 | 0 | 3 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, fieldset_legend_valid, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_sensory_misuse |
| https://medicare.gov/privacy-policy/third-party-privacy-policies | https://www.medicare.gov/privacy-policy/third-party-privacy-policies | OK | 200 | yes | 14621 | 0 | 0 | 20 | 0 | 3 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, fieldset_legend_valid, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible |
| https://medicare.gov/publications/02154-medicare-hospice-benefits.epub | https://medicare.gov/publications/02154-medicare-hospice-benefits.epub | FAIL | - | no | 60000 | 0 | 0 | 0 | 0 | 0 | URL scan exceeded 60s timeout |
| https://medicare.gov/publications/02154-medicare-hospice-benefits.mobi | https://medicare.gov/publications/02154-medicare-hospice-benefits.mobi | FAIL | - | no | 60010 | 0 | 0 | 0 | 0 | 0 | URL scan exceeded 60s timeout |
| https://medicare.gov/publications/02174-your-guide-to-choosing-a-nursing-home | https://medicare.gov/publications/02174-your-guide-to-choosing-a-nursing-home | FAIL | - | no | 60001 | 0 | 0 | 0 | 0 | 0 | URL scan exceeded 60s timeout |
| https://medicare.gov/publications/10050-medicare-and-you.epub | https://medicare.gov/publications/10050-medicare-and-you.epub | FAIL | - | no | 60000 | 0 | 0 | 0 | 0 | 0 | URL scan exceeded 60s timeout |
| https://medicare.gov/health-drug-plans/health-plans/costs | https://www.medicare.gov/health-drug-plans/health-plans/costs | OK | 200 | yes | 11218 | 0 | 0 | 32 | 0 | 3 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, fieldset_legend_valid, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_quoted_correctly |
| https://medicare.gov/health-drug-plans/health-plans/your-health-plan-options | https://www.medicare.gov/health-drug-plans/health-plans/your-health-plan-options | OK | 200 | yes | 10999 | 0 | 0 | 26 | 0 | 3 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, fieldset_legend_valid, frame_src_valid, input_label_visible, list_markup_review, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading |
| https://medicare.gov/health-drug-plans/medigap/ready-to-buy | https://www.medicare.gov/health-drug-plans/medigap/ready-to-buy | OK | 200 | yes | 12479 | 0 | 0 | 21 | 0 | 3 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, fieldset_legend_valid, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_sensory_misuse |
| https://medicare.gov/medigap-supplemental-insurance-plans/ | https://www.medicare.gov/medigap-supplemental-insurance-plans/ | OK | 200 | yes | 7216 | 0 | 0 | 8 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, element_tabbable_visible, frame_src_valid, skip_main_exists, style_color_misuse, style_highcontrast_visible, text_contrast_sufficient |
| https://medicare.gov/sitemap | https://www.medicare.gov/sitemap | OK | 200 | yes | 19430 | 0 | 0 | 43 | 0 | 3 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_unobscured, fieldset_legend_valid, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_quoted_correctly |
| https://medicare.gov/health-drug-plans/part-d/basics/choose-coverage | https://www.medicare.gov/health-drug-plans/part-d/basics/choose-coverage | OK | 200 | yes | 11968 | 0 | 0 | 34 | 0 | 3 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, fieldset_legend_valid, frame_src_valid, input_label_visible, list_markup_review, style_color_misuse, style_focus_visible, style_highcontrast_visible |
| https://medicare.gov/providers-services/claims-appeals-complaints/claims/share-your-medicare-claims | https://www.medicare.gov/providers-services/claims-appeals-complaints/claims/share-your-medicare-claims | OK | 200 | yes | 11524 | 0 | 0 | 28 | 0 | 3 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, fieldset_legend_valid, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible |
| https://medicare.gov/coverage/pre-exposure-prophylaxis-prep-for-hiv-prevention | https://www.medicare.gov/coverage/pre-exposure-prophylaxis-prep-for-hiv-prevention | OK | 200 | yes | 12470 | 0 | 0 | 33 | 0 | 4 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, fieldset_legend_valid, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_sensory_misuse |
| https://medicare.gov/health-drug-plans/part-d/basics | https://www.medicare.gov/health-drug-plans/part-d/basics | OK | 200 | yes | 12147 | 0 | 0 | 30 | 0 | 3 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, fieldset_legend_valid, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible |
| https://medicare.gov/coverage/kidney-transplants | https://www.medicare.gov/coverage/kidney-transplants | OK | 200 | yes | 12399 | 0 | 0 | 37 | 0 | 3 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, fieldset_legend_valid, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading |
| https://medicare.gov/publications/12085-opioid-treatment-programs.pdf-0 | https://medicare.gov/publications/12085-opioid-treatment-programs.pdf-0 | FAIL | - | no | 60000 | 0 | 0 | 0 | 0 | 0 | URL scan exceeded 60s timeout |

## Detailed Failure Information (ALFA)

## Detailed Failure Information (axe)

### https://medicare.gov/coverage/search

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.medicare.gov/privacy-policy" <u="">data privacy policy.</a>`
- XPath: `iframe[height="100%"]`

#### Rule: [frame-title](https://dequeuniversity.com/rules/axe/4.11/frame-title?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Frames must have an accessible name
- HTML: `<iframe data-src="https://surveys.cms.gov/jfe/form/SV_9LbdFueyKSYZ2nk?Q_CHL=si&amp;Q_CanScreenCapture=1" width="100%" height="100%" frameborder="0" name="survey-iframe-SI_6tbIx8xW9ShoDfU" data-name="embedded-iframe-SI_6tbIx8xW9ShoDfU"></iframe>`
- XPath: `iframe[height="100%"]`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="https://surveys.CMS.gov/CP/Graphic.php?IM=IM_eECuJsNTdnd7l66" style="width: 448px; height: 297px;" data-image-state="ready">`
- XPath: `iframe[height="100%"]`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<main id="content" class="ds-l-col--12 ds-u-padding-x--0 primary-content__content">`
- XPath: `#content`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav class="social-links " data-component-id="medicare_evo:footer">`
- XPath: `.social-links`

### https://medicare.gov/basics/report-a-death

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.medicare.gov/privacy-policy" <u="">data privacy policy.</a>`
- XPath: `iframe[height="100%"]`

#### Rule: [frame-title](https://dequeuniversity.com/rules/axe/4.11/frame-title?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Frames must have an accessible name
- HTML: `<iframe data-src="https://surveys.cms.gov/jfe/form/SV_9LbdFueyKSYZ2nk?Q_CHL=si&amp;Q_CanScreenCapture=1" width="100%" height="100%" frameborder="0" name="survey-iframe-SI_6tbIx8xW9ShoDfU" data-name="embedded-iframe-SI_6tbIx8xW9ShoDfU"></iframe>`
- XPath: `iframe[height="100%"]`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="https://surveys.CMS.gov/CP/Graphic.php?IM=IM_eECuJsNTdnd7l66" style="width: 448px; height: 297px;" data-image-state="ready">`
- XPath: `iframe[height="100%"]`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<main id="content" class="ds-l-col--12 ds-u-padding-x--0 primary-content__content">`
- XPath: `#content`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav class="social-links " data-component-id="medicare_evo:footer">`
- XPath: `.social-links`

### https://medicare.gov/coverage/advanced-primary-care-management-services

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.medicare.gov/privacy-policy" <u="">data privacy policy.</a>`
- XPath: `iframe[height="100%"]`

#### Rule: [frame-title](https://dequeuniversity.com/rules/axe/4.11/frame-title?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Frames must have an accessible name
- HTML: `<iframe data-src="https://surveys.cms.gov/jfe/form/SV_9LbdFueyKSYZ2nk?Q_CHL=si&amp;Q_CanScreenCapture=1" width="100%" height="100%" frameborder="0" name="survey-iframe-SI_6tbIx8xW9ShoDfU" data-name="embedded-iframe-SI_6tbIx8xW9ShoDfU"></iframe>`
- XPath: `iframe[height="100%"]`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="https://surveys.CMS.gov/CP/Graphic.php?IM=IM_eECuJsNTdnd7l66" style="width: 448px; height: 297px;" data-image-state="ready">`
- XPath: `iframe[height="100%"]`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<main id="content" class="ds-l-col--12 ds-u-padding-x--0 primary-content__content">`
- XPath: `#content`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav class="social-links " data-component-id="medicare_evo:footer">`
- XPath: `.social-links`

### https://medicare.gov/coverage/blood-services

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.medicare.gov/privacy-policy" <u="">data privacy policy.</a>`
- XPath: `iframe[height="100%"]`

#### Rule: [frame-title](https://dequeuniversity.com/rules/axe/4.11/frame-title?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Frames must have an accessible name
- HTML: `<iframe data-src="https://surveys.cms.gov/jfe/form/SV_9LbdFueyKSYZ2nk?Q_CHL=si&amp;Q_CanScreenCapture=1" width="100%" height="100%" frameborder="0" name="survey-iframe-SI_6tbIx8xW9ShoDfU" data-name="embedded-iframe-SI_6tbIx8xW9ShoDfU"></iframe>`
- XPath: `iframe[height="100%"]`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="https://surveys.CMS.gov/CP/Graphic.php?IM=IM_eECuJsNTdnd7l66" style="width: 448px; height: 297px;" data-image-state="ready">`
- XPath: `iframe[height="100%"]`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<main id="content" class="ds-l-col--12 ds-u-padding-x--0 primary-content__content">`
- XPath: `#content`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav class="social-links " data-component-id="medicare_evo:footer">`
- XPath: `.social-links`

### https://medicare.gov/coverage/cardiovascular-risk-assessment-management-services

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.medicare.gov/privacy-policy" <u="">data privacy policy.</a>`
- XPath: `iframe[height="100%"]`

#### Rule: [frame-title](https://dequeuniversity.com/rules/axe/4.11/frame-title?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Frames must have an accessible name
- HTML: `<iframe data-src="https://surveys.cms.gov/jfe/form/SV_9LbdFueyKSYZ2nk?Q_CHL=si&amp;Q_CanScreenCapture=1" width="100%" height="100%" frameborder="0" name="survey-iframe-SI_6tbIx8xW9ShoDfU" data-name="embedded-iframe-SI_6tbIx8xW9ShoDfU"></iframe>`
- XPath: `iframe[height="100%"]`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="https://surveys.CMS.gov/CP/Graphic.php?IM=IM_eECuJsNTdnd7l66" style="width: 448px; height: 297px;" data-image-state="ready">`
- XPath: `iframe[height="100%"]`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<main id="content" class="ds-l-col--12 ds-u-padding-x--0 primary-content__content">`
- XPath: `#content`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav class="social-links " data-component-id="medicare_evo:footer">`
- XPath: `.social-links`

### https://medicare.gov/prescription-payment-plan/will-this-help-me

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.medicare.gov/privacy-policy" <u="">data privacy policy.</a>`
- XPath: `iframe[height="100%"]`

#### Rule: [frame-title](https://dequeuniversity.com/rules/axe/4.11/frame-title?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Frames must have an accessible name
- HTML: `<iframe data-src="https://surveys.cms.gov/jfe/form/SV_9LbdFueyKSYZ2nk?Q_CHL=si&amp;Q_CanScreenCapture=1" width="100%" height="100%" frameborder="0" name="survey-iframe-SI_6tbIx8xW9ShoDfU" data-name="embedded-iframe-SI_6tbIx8xW9ShoDfU"></iframe>`
- XPath: `iframe[height="100%"]`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="https://surveys.CMS.gov/CP/Graphic.php?IM=IM_eECuJsNTdnd7l66" style="width: 448px; height: 297px;" data-image-state="ready">`
- XPath: `iframe[height="100%"]`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<main id="content" class="ds-l-col--12 ds-u-padding-x--0 primary-content__content">`
- XPath: `#content`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav class="social-links " data-component-id="medicare_evo:footer">`
- XPath: `.social-links`

### https://medicare.gov/providers-services/claims-appeals-complaints

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.medicare.gov/privacy-policy" <u="">data privacy policy.</a>`
- XPath: `iframe[height="100%"]`

#### Rule: [frame-title](https://dequeuniversity.com/rules/axe/4.11/frame-title?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Frames must have an accessible name
- HTML: `<iframe data-src="https://surveys.cms.gov/jfe/form/SV_9LbdFueyKSYZ2nk?Q_CHL=si&amp;Q_CanScreenCapture=1" width="100%" height="100%" frameborder="0" name="survey-iframe-SI_6tbIx8xW9ShoDfU" data-name="embedded-iframe-SI_6tbIx8xW9ShoDfU"></iframe>`
- XPath: `iframe[height="100%"]`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="https://surveys.CMS.gov/CP/Graphic.php?IM=IM_eECuJsNTdnd7l66" style="width: 448px; height: 297px;" data-image-state="ready">`
- XPath: `iframe[height="100%"]`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<main id="content" class="ds-l-col--12 ds-u-padding-x--0 primary-content__content">`
- XPath: `#content`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav class="social-links " data-component-id="medicare_evo:footer">`
- XPath: `.social-links`

### https://medicare.gov/care-compare/resources/about-this-tool

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h4>What can this tool do for me?</h4>`
- XPath: `h4`

### https://medicare.gov/plain-language

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<main id="content" class="ds-l-col--12 ds-u-padding-x--0 primary-content__content">`
- XPath: `#content`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div id="Buttons" role="navigation">`
- XPath: `#iframe-field_iframe-3606`

