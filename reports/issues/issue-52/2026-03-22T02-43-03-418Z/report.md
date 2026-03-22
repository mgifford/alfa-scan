# Scan Report: Alberta

- Issue: https://github.com/mgifford/open-scans/issues/52
- Submitted by: mgifford
- Scanned at: 2026-03-22T02:42:03.507Z
- Engines used: AXE, EQUALACCESS
- Scan duration: 4.0 minutes
- Total URLs submitted: 59
- Accepted public URLs: 59
- Rejected URLs: 0
- 🎨 **Accessibility personalization (CSS media queries):**
  - 🌙 Dark mode: None of the scanned URLs support `prefers-color-scheme: dark`
  - ⚡ Reduced motion: None of the scanned URLs support `prefers-reduced-motion: reduce`
  - 🔍 High contrast: None of the scanned URLs support `prefers-contrast: more`
  - 🖥️ Forced colors: None of the scanned URLs support `forced-colors: active`
  - 🪟 Reduced transparency: None of the scanned URLs support `prefers-reduced-transparency: reduce`
- ALFA outcomes: 0 passed, 0 failed, 0 cantTell, 0 inapplicable
- axe outcomes: 17542 passed, 59 failed, 364 cantTell, 1519 inapplicable
- Equal Access outcomes: 48877 passed, 1307 failed (741 unique, 566 duplicate), 568 cantTell, 0 inapplicable
- AccessLint outcomes: 0 passed, 0 failed (0 unique, 0 duplicate), 0 cantTell, 0 inapplicable
- QualWeb outcomes: 0 passed, 0 failed, 0 cantTell, 0 inapplicable
- Duplicate findings caught by later scanners: 569

## 🎯 Pages with Most Errors

Focus your efforts on these pages to make the biggest impact (combined scanner unique failures):

| Page | axe Unique | Equal Access Unique | Total Unique | Page Title |
|---|---:|---:|---:|---|
| [View Page](https://www.alberta.ca/budget) | 3 | 38 | **41** | Budget \| Alberta.ca |
| [View Page](https://www.alberta.ca/emergency) | 12 | 26 | **38** | Active emergency updates \| Alberta.ca |
| [View Page](https://www.alberta.ca/alberta-advantage-immigration-program) | 9 | 25 | **34** | Alberta Advantage Immigration Program \| Alberta.ca |
| [View Page](https://www.alberta.ca/release.cfm?xID=9564141722588-FFA6-400D-B388DB636D18FB65) | 2 | 30 | **32** | A bold investment in student success \| Un investissement audacieux dans la réussite des élèves \| alberta.ca |
| [View Page](https://www.alberta.ca/premier) | 1 | 28 | **29** | Premier of Alberta \| Alberta.ca |
| [View Page](https://www.alberta.ca/schools-now) | 1 | 28 | **29** | Schools Now \| Alberta.ca |
| [View Page](https://www.alberta.ca/release.cfm?xID=9573410ED1AD8-DE7F-DF66-A798654D0700135F) | 4 | 24 | **28** | Budget 2026: Investing in what matters \| Budget 2026 : investir dans ce qui compte \| alberta.ca |
| [View Page](https://www.alberta.ca/acute-care-action-plan) | 1 | 26 | **27** | Acute Care Action Plan \| Alberta.ca |
| [View Page](https://www.alberta.ca/canada-post-service-interruption) | 1 | 24 | **25** | Canada Post service interruption \| Alberta.ca |
| [View Page](https://www.alberta.ca/vehicle-registration-renewal) | 1 | 24 | **25** | Renew your vehicle registration \| Alberta.ca |

## 🔧 Most Common Issues (ALFA)

These ALFA accessibility issues appear most frequently across your pages:

✅ No ALFA failed rules detected!

## 🔧 Most Common Issues (axe)

These axe accessibility issues appear most frequently across your pages:

| Rule | Pages Affected | Documentation |
|---|---:|---|
| landmark-unique | **27** of 59 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/landmark-unique) |
| region | **5** of 59 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/region) |
| color-contrast | **2** of 59 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/color-contrast) |
| aria-prohibited-attr | **2** of 59 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/aria-prohibited-attr) |
| button-name | **2** of 59 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/button-name) |
| aria-allowed-role | **1** of 59 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/aria-allowed-role) |
| landmark-complementary-is-top-level | **1** of 59 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/landmark-complementary-is-top-level) |

> 💡 **Tip**: Click on the rule documentation links to learn how to fix each issue. Consider fixing the most common issues first for maximum impact.

> 🤖 **Future Enhancement**: This report will soon include AI-powered fix suggestions for authenticated GitHub users (opt-in only, no auto-run AI).

## 🔍 Cross-Page Patterns: Common HTML Issues

These HTML patterns cause the same accessibility errors across multiple pages. **Fix the pattern once in your codebase to fix it everywhere!**

### 🎯 Top Patterns to Fix (Highest Impact)

#### Pattern 1: Affects 24 page(s) - 24 occurrence(s)

**Scanner**: axe
**Rule**: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate
**Issue**: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

**HTML Pattern**:
```html
<nav role="navigation" id="goa-quicklinks" class="goa-list">
```

**XPath** (use in browser DevTools):
```
.goa-list:nth-child(1) > nav[role="navigation"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.goa-list:nth-child(1) > nav[role="navigation"]')`
5. The element will be highlighted

**Affected Pages**:
- https://alberta.ca/accessibility
- https://alberta.ca/canada-post-service-interruption
- https://alberta.ca/vehicle-registration-renewal
- https://alberta.ca/family-and-social-supports-topic
- https://alberta.ca/about-government
- *...and 19 more page(s)*

---

#### Pattern 2: Affects 5 page(s) - 5 occurrence(s)

**Scanner**: axe
**Rule**: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate
**Issue**: All page content should be contained by landmarks

**HTML Pattern**:
```html
<div class="ab-footer">
```

**XPath** (use in browser DevTools):
```
.ab-footer
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.ab-footer')`
5. The element will be highlighted

**Affected Pages**:
- https://alberta.ca/announcements.cfm?xID=9573410ED1AD8-DE7F-DF66-A798654D0700135F
- https://alberta.ca/announcements.cfm?xID=95735120C00EF-B4D2-523E-653AFC3B7691D90A
- https://alberta.ca/release.cfm?xID=956393BF7AAE1-FC58-0121-F6ACBF2A8BCD7A5B
- https://alberta.ca/release.cfm?xID=956403CB2A273-BB32-5FB1-CF2920F98FFC9B8A
- https://alberta.ca/release.cfm?xID=9564141722588-FFA6-400D-B388DB636D18FB65

---

#### Pattern 3: Affects 2 page(s) - 3 occurrence(s)

**Scanner**: axe
**Rule**: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**Issue**: Buttons must have discernible text

**HTML Pattern**:
```html
<button class="ytmVideoInfoLink ytmVideoInfoChannelAvatar"><img alt="thumbnail-image" class="ytCoreImageHost ytmVideoInfoChannelLogo ytCoreImageFillParentHeight ytCoreImageFillParentWidth ytCoreImageContentModeScaleAspectFill"></button>
```

**XPath** (use in browser DevTools):
```
#goa-band29421 > .paragraph--type--media-block.goa-column-50-50-100.paragraph > .goa-image.margin-top > .goa-video > iframe
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('#goa-band29421 > .paragraph--type--media-block.goa-column-50-50-100.paragraph > .goa-image.margin-top > .goa-video > iframe')`
5. The element will be highlighted

**Affected Pages**:
- https://alberta.ca/budget
- https://alberta.ca/release.cfm?xID=9564141722588-FFA6-400D-B388DB636D18FB65

---

#### Pattern 4: Affects 2 page(s) - 2 occurrence(s)

**Scanner**: axe
**Rule**: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate
**Issue**: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

**HTML Pattern**:
```html
<nav>
```

**XPath** (use in browser DevTools):
```
.goa-languages > nav
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.goa-languages > nav')`
5. The element will be highlighted

**Affected Pages**:
- https://alberta.ca/alberta-advantage-immigration-program
- https://alberta.ca/schools-now

---

> 💡 **Pro Tip**: These patterns likely come from shared components or templates in your codebase. Fix them in the component/template source, and the fix will propagate to all affected pages.

## 📊 Detailed Results

Complete scan results for all tested pages:

| Submitted URL | Final URL | Status | HTTP | Redirected | Time (ms) | axe Unique | ALFA Unique | Equal Access Unique | AccessLint Unique | Duplicates | Notes |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|
| https://alberta.ca/ | https://alberta.ca/ | FAIL | - | no | 271 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://alberta.ca/accessibility | https://www.alberta.ca/accessibility | OK | 200 | yes | 8122 | 1 | 0 | 23 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-unique |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_landmark_name_unique, aria_navigation_label_unique, aria_role_redundant, element_attribute_deprecated, element_id_unique, element_tabbable_visible, form_submit_button_exists, input_label_visible, style_color_misuse, style_highcontrast_visible, svg_graphics_labelled, text_block_heading, text_contrast_sufficient, widget_tabbable_exists |
| https://alberta.ca/find-a-job | https://alberta.ca/find-a-job | FAIL | - | no | 174 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://alberta.ca/all-services | https://alberta.ca/all-services | FAIL | - | no | 191 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://alberta.ca/canada-post-service-interruption | https://www.alberta.ca/canada-post-service-interruption | OK | 200 | yes | 8304 | 1 | 0 | 24 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-unique |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_landmark_name_unique, aria_navigation_label_unique, aria_role_redundant, element_attribute_deprecated, element_id_unique, element_tabbable_visible, form_submit_button_exists, input_label_visible, style_color_misuse, style_highcontrast_visible, svg_graphics_labelled, text_block_heading, text_contrast_sufficient, text_sensory_misuse, widget_tabbable_exists |
| https://alberta.ca/vehicle-registration-renewal | https://www.alberta.ca/vehicle-registration-renewal | OK | 200 | yes | 6401 | 1 | 0 | 24 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-unique |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_landmark_name_unique, aria_navigation_label_unique, aria_role_redundant, element_attribute_deprecated, element_id_unique, element_tabbable_visible, form_submit_button_exists, input_label_visible, style_color_misuse, style_highcontrast_visible, svg_graphics_labelled, text_block_heading, text_contrast_sufficient, text_sensory_misuse, widget_tabbable_exists |
| https://alberta.ca/family-and-social-supports-topic | https://www.alberta.ca/family-and-social-supports-topic | OK | 200 | yes | 6040 | 1 | 0 | 21 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-unique |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_landmark_name_unique, aria_navigation_label_unique, aria_role_redundant, element_attribute_deprecated, element_id_unique, element_tabbable_visible, form_submit_button_exists, input_label_visible, style_color_misuse, style_highcontrast_visible, svg_graphics_labelled, text_contrast_sufficient, widget_tabbable_exists |
| https://alberta.ca/about-government | https://www.alberta.ca/about-government | OK | 200 | yes | 5965 | 1 | 0 | 22 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-unique |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_landmark_name_unique, aria_navigation_label_unique, aria_role_redundant, element_attribute_deprecated, element_id_unique, element_tabbable_visible, form_submit_button_exists, input_label_visible, style_color_misuse, style_highcontrast_visible, svg_graphics_labelled, text_contrast_sufficient, text_sensory_misuse, widget_tabbable_exists |
| https://alberta.ca/acute-care-action-plan | https://www.alberta.ca/acute-care-action-plan | OK | 200 | yes | 10410 | 1 | 0 | 26 | 0 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-unique |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_landmark_name_unique, aria_navigation_label_unique, aria_role_redundant, element_attribute_deprecated, element_id_unique, element_tabbable_visible, form_submit_button_exists, input_label_visible, style_background_decorative, style_color_misuse, style_highcontrast_visible, svg_graphics_labelled, text_block_heading, text_contrast_sufficient, text_sensory_misuse, widget_tabbable_exists |
| https://alberta.ca/agriculture | https://alberta.ca/agriculture | FAIL | - | no | 157 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://alberta.ca/ahcip | https://alberta.ca/ahcip | FAIL | - | no | 180 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://alberta.ca/aish | https://www.alberta.ca/aish | OK | 200 | yes | 6222 | 1 | 0 | 24 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-unique |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_landmark_name_unique, aria_navigation_label_unique, aria_role_redundant, element_attribute_deprecated, element_id_unique, element_tabbable_visible, form_submit_button_exists, input_label_visible, style_color_misuse, style_highcontrast_visible, svg_graphics_labelled, text_block_heading, text_contrast_sufficient, widget_tabbable_exists |
| https://alberta.ca/alberta-advantage-immigration-program | https://www.alberta.ca/alberta-advantage-immigration-program | OK | 200 | yes | 6508 | 9 | 0 | 25 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, landmark-unique |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_landmark_name_unique, aria_navigation_label_unique, aria_role_redundant, element_attribute_deprecated, element_id_unique, element_tabbable_visible, form_submit_button_exists, input_label_visible, style_color_misuse, style_highcontrast_visible, svg_graphics_labelled, text_block_heading, text_contrast_sufficient, widget_tabbable_exists |
| https://alberta.ca/alberta-ca-account | https://alberta.ca/alberta-ca-account | FAIL | - | no | 242 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://alberta.ca/announcements.cfm?xID=957330F7B921A-EEA9-EE49-575132BCF2B4A8E4 | https://alberta.ca/announcements.cfm?xID=957330F7B921A-EEA9-EE49-575132BCF2B4A8E4 | FAIL | - | no | 156 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://alberta.ca/announcements.cfm?xID=9573410ED1AD8-DE7F-DF66-A798654D0700135F | https://www.alberta.ca/release.cfm?xID=9573410ED1AD8-DE7F-DF66-A798654D0700135F | OK | 200 | yes | 8242 | 4 | 0 | 24 | 0 | 14 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, landmark-complementary-is-top-level, landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_complementary_labelled, aria_content_in_landmark, aria_role_redundant, blockquote_cite_exists, element_attribute_deprecated, element_tabbable_visible, heading_markup_misuse, style_color_misuse, style_highcontrast_visible, svg_graphics_labelled, text_sensory_misuse |
| https://alberta.ca/announcements.cfm?xID=95735120C00EF-B4D2-523E-653AFC3B7691D90A | https://www.alberta.ca/release.cfm?xID=95735120C00EF-B4D2-523E-653AFC3B7691D90A | OK | 200 | yes | 8144 | 1 | 0 | 23 | 0 | 10 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_complementary_labelled, aria_content_in_landmark, aria_role_redundant, blockquote_cite_exists, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, heading_markup_misuse, style_color_misuse, style_highcontrast_visible, svg_graphics_labelled |
| https://alberta.ca/birth-adoption-death-marriage-and-divorce-topic | https://alberta.ca/birth-adoption-death-marriage-and-divorce-topic | FAIL | - | no | 157 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://alberta.ca/budget | https://www.alberta.ca/budget | OK | 200 | yes | 8116 | 3 | 0 | 38 | 0 | 6 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-prohibited-attr, button-name, landmark-unique |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_landmark_name_unique, aria_navigation_label_unique, aria_role_redundant, element_attribute_deprecated, element_id_unique, element_tabbable_visible, form_submit_button_exists, frame_src_valid, html_lang_exists, html_skipnav_exists, input_label_visible, style_background_decorative, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled, text_block_heading, text_contrast_sufficient, widget_tabbable_exists |
| https://alberta.ca/business-and-economic-development | https://alberta.ca/business-and-economic-development | FAIL | - | no | 156 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://alberta.ca/contact-government | https://alberta.ca/contact-government | FAIL | - | no | 156 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://alberta.ca/contact.cfm | https://alberta.ca/contact.cfm | FAIL | - | no | 156 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://alberta.ca/culture-topic | https://www.alberta.ca/culture-topic | OK | 200 | yes | 6109 | 1 | 0 | 21 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-unique |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_landmark_name_unique, aria_navigation_label_unique, aria_role_redundant, element_attribute_deprecated, element_id_unique, element_tabbable_visible, form_submit_button_exists, input_label_visible, style_color_misuse, style_highcontrast_visible, svg_graphics_labelled, text_contrast_sufficient, widget_tabbable_exists |
| https://alberta.ca/cut-red-tape | https://alberta.ca/cut-red-tape | FAIL | - | no | 245 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://alberta.ca/disclaimer | https://alberta.ca/disclaimer | FAIL | - | no | 157 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://alberta.ca/driving-safety-topic | https://www.alberta.ca/driving-safety-topic | OK | 200 | yes | 5912 | 1 | 0 | 21 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-unique |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_landmark_name_unique, aria_navigation_label_unique, aria_role_redundant, element_attribute_deprecated, element_id_unique, element_tabbable_visible, form_submit_button_exists, input_label_visible, style_color_misuse, style_highcontrast_visible, svg_graphics_labelled, text_contrast_sufficient, widget_tabbable_exists |
| https://alberta.ca/education-and-training-topic | https://www.alberta.ca/education-and-training-topic | OK | 200 | yes | 5985 | 1 | 0 | 21 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-unique |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_landmark_name_unique, aria_navigation_label_unique, aria_role_redundant, element_attribute_deprecated, element_id_unique, element_tabbable_visible, form_submit_button_exists, input_label_visible, style_color_misuse, style_highcontrast_visible, svg_graphics_labelled, text_contrast_sufficient, widget_tabbable_exists |
| https://alberta.ca/emergency | https://www.alberta.ca/emergency | OK | 200 | yes | 6926 | 12 | 0 | 26 | 0 | 3 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, landmark-unique |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_landmark_name_unique, aria_navigation_label_unique, aria_role_redundant, element_attribute_deprecated, element_id_unique, element_tabbable_visible, form_submit_button_exists, input_label_visible, style_color_misuse, style_highcontrast_visible, svg_graphics_labelled, text_block_heading, text_contrast_sufficient, widget_tabbable_exists |
| https://alberta.ca/emergency-preparedness-disaster-response-and-public-safety-topic | https://www.alberta.ca/emergency-preparedness-disaster-response-and-public-safety-topic | OK | 200 | yes | 5928 | 1 | 0 | 21 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-unique |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_landmark_name_unique, aria_navigation_label_unique, aria_role_redundant, element_attribute_deprecated, element_id_unique, element_tabbable_visible, form_submit_button_exists, input_label_visible, style_color_misuse, style_highcontrast_visible, svg_graphics_labelled, text_contrast_sufficient, widget_tabbable_exists |
| https://alberta.ca/employment-topic | https://alberta.ca/employment-topic | FAIL | - | no | 157 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://alberta.ca/energy-topic | https://alberta.ca/energy-topic | FAIL | - | no | 165 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://alberta.ca/environment-natural-resources | https://alberta.ca/environment-natural-resources | FAIL | - | no | 156 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://alberta.ca/fish-and-wildlife-topic | https://www.alberta.ca/fish-and-wildlife-topic | OK | 200 | yes | 6084 | 1 | 0 | 22 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-unique |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_landmark_name_unique, aria_navigation_label_unique, aria_role_redundant, element_attribute_deprecated, element_id_unique, element_tabbable_visible, form_submit_button_exists, input_label_visible, style_color_misuse, style_highcontrast_visible, svg_graphics_labelled, text_contrast_sufficient, text_sensory_misuse, widget_tabbable_exists |
| https://alberta.ca/government-of-alberta | https://alberta.ca/government-of-alberta | FAIL | - | no | 156 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://alberta.ca/health-wellness | https://alberta.ca/health-wellness | FAIL | - | no | 156 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://alberta.ca/housing-topic | https://alberta.ca/housing-topic | FAIL | - | no | 158 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://alberta.ca/indigenous-relations-topic | https://www.alberta.ca/indigenous-relations-topic | OK | 200 | yes | 6055 | 1 | 0 | 21 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-unique |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_landmark_name_unique, aria_navigation_label_unique, aria_role_redundant, element_attribute_deprecated, element_id_unique, element_tabbable_visible, form_submit_button_exists, input_label_visible, style_color_misuse, style_highcontrast_visible, svg_graphics_labelled, text_contrast_sufficient, widget_tabbable_exists |
| https://alberta.ca/infrastructure-topic | https://www.alberta.ca/infrastructure-topic | OK | 200 | yes | 6223 | 1 | 0 | 21 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-unique |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_landmark_name_unique, aria_navigation_label_unique, aria_role_redundant, element_attribute_deprecated, element_id_unique, element_tabbable_visible, form_submit_button_exists, input_label_visible, style_color_misuse, style_highcontrast_visible, svg_graphics_labelled, text_contrast_sufficient, widget_tabbable_exists |
| https://alberta.ca/justice-topic | https://alberta.ca/justice-topic | FAIL | - | no | 157 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://alberta.ca/key-initiatives | https://alberta.ca/key-initiatives | FAIL | - | no | 157 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://alberta.ca/ministries | https://www.alberta.ca/ministries | OK | 200 | yes | 6267 | 1 | 0 | 21 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-unique |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_landmark_name_unique, aria_navigation_label_unique, aria_role_redundant, element_attribute_deprecated, element_id_unique, element_tabbable_visible, form_submit_button_exists, input_label_visible, style_color_misuse, style_highcontrast_visible, svg_graphics_labelled, text_contrast_sufficient, widget_tabbable_exists |
| https://alberta.ca/moving-to-alberta-topic | https://www.alberta.ca/moving-to-alberta-topic | OK | 200 | yes | 6149 | 1 | 0 | 21 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-unique |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_landmark_name_unique, aria_navigation_label_unique, aria_role_redundant, element_attribute_deprecated, element_id_unique, element_tabbable_visible, form_submit_button_exists, input_label_visible, style_color_misuse, style_highcontrast_visible, svg_graphics_labelled, text_contrast_sufficient, widget_tabbable_exists |
| https://alberta.ca/municipalities-topic | https://www.alberta.ca/municipalities-topic | OK | 200 | yes | 6079 | 1 | 0 | 21 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-unique |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_landmark_name_unique, aria_navigation_label_unique, aria_role_redundant, element_attribute_deprecated, element_id_unique, element_tabbable_visible, form_submit_button_exists, input_label_visible, style_color_misuse, style_highcontrast_visible, svg_graphics_labelled, text_contrast_sufficient, widget_tabbable_exists |
| https://alberta.ca/news | https://alberta.ca/news | FAIL | - | no | 157 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://alberta.ca/non-profit-and-charitable-organizations-topic | https://www.alberta.ca/non-profit-and-charitable-organizations-topic | OK | 200 | yes | 5968 | 1 | 0 | 21 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-unique |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_landmark_name_unique, aria_navigation_label_unique, aria_role_redundant, element_attribute_deprecated, element_id_unique, element_tabbable_visible, form_submit_button_exists, input_label_visible, style_color_misuse, style_highcontrast_visible, svg_graphics_labelled, text_contrast_sufficient, widget_tabbable_exists |
| https://alberta.ca/open-government-program | https://alberta.ca/open-government-program | FAIL | - | no | 157 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://alberta.ca/premier.aspx | https://www.alberta.ca/premier | OK | 200 | yes | 6842 | 1 | 0 | 28 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-unique |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_landmark_name_unique, aria_navigation_label_unique, aria_role_redundant, element_attribute_deprecated, element_id_unique, element_tabbable_visible, form_submit_button_exists, input_label_visible, style_background_decorative, style_color_misuse, style_highcontrast_visible, svg_graphics_labelled, text_contrast_sufficient, text_sensory_misuse, widget_tabbable_exists |
| https://alberta.ca/privacystatement | https://www.alberta.ca/privacystatement | OK | 200 | yes | 6420 | 1 | 0 | 24 | 0 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-unique |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_landmark_name_unique, aria_navigation_label_unique, aria_role_redundant, element_attribute_deprecated, element_id_unique, element_tabbable_visible, form_submit_button_exists, input_label_visible, style_color_misuse, style_highcontrast_visible, svg_graphics_labelled, text_block_heading, text_contrast_sufficient, text_sensory_misuse, widget_tabbable_exists |
| https://alberta.ca/public-engagement | https://alberta.ca/public-engagement | FAIL | - | no | 157 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://alberta.ca/release.cfm?xID=956393BF7AAE1-FC58-0121-F6ACBF2A8BCD7A5B | https://www.alberta.ca/release.cfm?xID=956393BF7AAE1-FC58-0121-F6ACBF2A8BCD7A5B | OK | 200 | yes | 6537 | 1 | 0 | 22 | 0 | 6 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, blockquote_cite_exists, element_attribute_deprecated, element_tabbable_visible, style_color_misuse, style_highcontrast_visible, svg_graphics_labelled, table_headers_exists |
| https://alberta.ca/release.cfm?xID=956403CB2A273-BB32-5FB1-CF2920F98FFC9B8A | https://www.alberta.ca/release.cfm?xID=956403CB2A273-BB32-5FB1-CF2920F98FFC9B8A | OK | 200 | yes | 10475 | 1 | 0 | 19 | 0 | 5 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, blockquote_cite_exists, element_attribute_deprecated, element_tabbable_visible, style_color_misuse, style_highcontrast_visible, svg_graphics_labelled |
| https://alberta.ca/release.cfm?xID=9564141722588-FFA6-400D-B388DB636D18FB65 | https://www.alberta.ca/release.cfm?xID=9564141722588-FFA6-400D-B388DB636D18FB65 | OK | 200 | yes | 13222 | 2 | 0 | 30 | 0 | 522 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-prohibited-attr, button-name, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, blockquote_cite_exists, element_attribute_deprecated, element_tabbable_visible, frame_src_valid, heading_markup_misuse, style_color_misuse, style_highcontrast_visible, svg_graphics_labelled, table_headers_exists, table_headers_related, text_block_heading, text_sensory_misuse |
| https://alberta.ca/schools-now | https://www.alberta.ca/schools-now | OK | 200 | yes | 14400 | 1 | 0 | 28 | 0 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-unique |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_landmark_name_unique, aria_navigation_label_unique, aria_role_redundant, element_attribute_deprecated, element_id_unique, element_tabbable_visible, form_submit_button_exists, input_label_visible, style_background_decorative, style_color_misuse, style_highcontrast_visible, svg_graphics_labelled, text_block_heading, text_contrast_sufficient, widget_tabbable_exists |
| https://alberta.ca/social-media-directory | https://www.alberta.ca/social-media-directory | OK | 200 | yes | 6835 | 1 | 0 | 23 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-unique |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_landmark_name_unique, aria_navigation_label_unique, aria_role_redundant, element_attribute_deprecated, element_id_unique, element_tabbable_visible, form_submit_button_exists, input_label_visible, style_color_misuse, style_highcontrast_visible, svg_graphics_labelled, text_block_heading, text_contrast_sufficient, widget_tabbable_exists |
| https://alberta.ca/staff-directory.cfm | https://www.alberta.ca/staff-directory.cfm | OK | 200 | yes | 6580 | 0 | 0 | 14 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_attribute_redundant, element_attribute_deprecated, element_id_unique, element_tabbable_visible, form_submit_button_exists, input_label_visible, style_background_decorative, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled |
| https://alberta.ca/tax-information-topic | https://alberta.ca/tax-information-topic | FAIL | - | no | 156 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://alberta.ca/tourism-sport-and-outdoor-recreation | https://www.alberta.ca/tourism-sport-and-outdoor-recreation | OK | 200 | yes | 6125 | 1 | 0 | 21 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-unique |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_landmark_name_unique, aria_navigation_label_unique, aria_role_redundant, element_attribute_deprecated, element_id_unique, element_tabbable_visible, form_submit_button_exists, input_label_visible, style_color_misuse, style_highcontrast_visible, svg_graphics_labelled, text_contrast_sufficient, widget_tabbable_exists |
| https://alberta.ca/usingthissite | https://alberta.ca/usingthissite | FAIL | - | no | 156 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://alberta.ca/west-coast-oil-pipeline | https://alberta.ca/west-coast-oil-pipeline | FAIL | - | no | 157 | 0 | 0 | 0 | 0 | 0 | fetch failed |

## Detailed Failure Information (ALFA)

## Detailed Failure Information (axe)

### https://alberta.ca/accessibility

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-22
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav role="navigation" id="goa-quicklinks" class="goa-list">`
- XPath: `.goa-list:nth-child(1) > nav[role="navigation"]`

### https://alberta.ca/canada-post-service-interruption

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-22
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav role="navigation" id="goa-quicklinks" class="goa-list">`
- XPath: `.goa-list:nth-child(1) > nav[role="navigation"]`

### https://alberta.ca/vehicle-registration-renewal

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-22
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav role="navigation" id="goa-quicklinks" class="goa-list">`
- XPath: `.goa-list:nth-child(1) > nav[role="navigation"]`

### https://alberta.ca/family-and-social-supports-topic

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-22
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav role="navigation" id="goa-quicklinks" class="goa-list">`
- XPath: `.goa-list:nth-child(1) > nav[role="navigation"]`

### https://alberta.ca/about-government

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-22
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav role="navigation" id="goa-quicklinks" class="goa-list">`
- XPath: `.goa-list:nth-child(1) > nav[role="navigation"]`

### https://alberta.ca/acute-care-action-plan

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-22
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav role="navigation" id="goa-quicklinks" class="goa-list">`
- XPath: `.goa-list:nth-child(1) > nav[role="navigation"]`

### https://alberta.ca/aish

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-22
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav role="navigation" id="goa-quicklinks" class="goa-list">`
- XPath: `.goa-list:nth-child(1) > nav[role="navigation"]`

### https://alberta.ca/alberta-advantage-immigration-program

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-03-22
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<button class="" aria-expanded="false">Tourism and Hospitality Stream</button>`
- XPath: `#accordion46583 > .goa-title > button`

**Failure 2:**
- First identified: 2026-03-22
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<button class="" aria-expanded="false">Alberta Opportunity Stream</button>`
- XPath: `#accordion46584 > .goa-title > button`

**Failure 3:**
- First identified: 2026-03-22
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<button class="" aria-expanded="false">Alberta Express Entry Stream</button>`
- XPath: `#accordion46585 > .goa-title > button`

**Failure 4:**
- First identified: 2026-03-22
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<button class="" aria-expanded="false">Rural Renewal Stream</button>`
- XPath: `#accordion46586 > .goa-title > button`

**Failure 5:**
- First identified: 2026-03-22
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<button class="" aria-expanded="false">Rural Entrepreneur Stream</button>`
- XPath: `#accordion46589 > .goa-title > button`

*... and 3 more failures for this rule*

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-22
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav>`
- XPath: `.goa-languages > nav`

### https://alberta.ca/announcements.cfm?xID=9573410ED1AD8-DE7F-DF66-A798654D0700135F

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-03-22
- Message: ARIA role should be appropriate for the element
- HTML: `<aside role="complementary">`
- XPath: `aside > .side-content > aside`

#### Rule: [landmark-complementary-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-complementary-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-22
- Message: Aside should not be contained in another landmark
- HTML: `<aside role="complementary">`
- XPath: `aside > .side-content > aside`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-22
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<aside role="complementary">`
- XPath: `.goa-grid-100-100-100 > .side-content > aside`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-22
- Message: All page content should be contained by landmarks
- HTML: `<div class="ab-footer">`
- XPath: `.ab-footer`

### https://alberta.ca/announcements.cfm?xID=95735120C00EF-B4D2-523E-653AFC3B7691D90A

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-22
- Message: All page content should be contained by landmarks
- HTML: `<div class="ab-footer">`
- XPath: `.ab-footer`

### https://alberta.ca/budget

#### Rule: [aria-prohibited-attr](https://dequeuniversity.com/rules/axe/4.11/aria-prohibited-attr?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-03-22
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div class="html5-video-player ytp-hide-controls ytp-exp-bottom-control-flexbox ytp-modern-caption ytp-livebadge-color unstarted-mode" tabindex="" id="movie_player" data-version="/s/player/1ebf2aa6/player_embed.vflset/en_US/base.js" aria-label="YouTube Video Player">`
- XPath: `#goa-band29421 > .paragraph--type--media-block.goa-column-50-50-100.paragraph > .goa-image.margin-top > .goa-video > iframe`

**Failure 2:**
- First identified: 2026-03-22
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div class="html5-video-player ytp-hide-controls ytp-exp-bottom-control-flexbox ytp-modern-caption ytp-livebadge-color unstarted-mode" tabindex="" id="movie_player" data-version="/s/player/1ebf2aa6/player_embed.vflset/en_US/base.js" aria-label="YouTube Video Player">`
- XPath: `#goa-band73942 > .paragraph--type--media-block.goa-column-50-50-100.paragraph > .goa-image.margin-top > .goa-video > iframe`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-22
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav role="navigation" id="goa-quicklinks" class="goa-list">`
- XPath: `.goa-list:nth-child(1) > nav[role="navigation"]`

### https://alberta.ca/culture-topic

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-22
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav role="navigation" id="goa-quicklinks" class="goa-list">`
- XPath: `.goa-list:nth-child(1) > nav[role="navigation"]`

### https://alberta.ca/driving-safety-topic

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-22
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav role="navigation" id="goa-quicklinks" class="goa-list">`
- XPath: `.goa-list:nth-child(1) > nav[role="navigation"]`

### https://alberta.ca/education-and-training-topic

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-22
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav role="navigation" id="goa-quicklinks" class="goa-list">`
- XPath: `.goa-list:nth-child(1) > nav[role="navigation"]`

### https://alberta.ca/emergency

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-03-22
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<button class="" aria-expanded="false">Communities eligible for re-entry</button>`
- XPath: `#accordion63081 > h3 > button`

**Failure 2:**
- First identified: 2026-03-22
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<button class="" aria-expanded="false">Eligibility</button>`
- XPath: `#accordion61869 > h3 > button`

**Failure 3:**
- First identified: 2026-03-22
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<button class="" aria-expanded="false">How to apply</button>`
- XPath: `#accordion61870 > h3 > button`

**Failure 4:**
- First identified: 2026-03-22
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<button class="" aria-expanded="false">How it works</button>`
- XPath: `#accordion61871 > h3 > button`

**Failure 5:**
- First identified: 2026-03-22
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<button class="" aria-expanded="false">Get help</button>`
- XPath: `#accordion61872 > h3 > button`

*... and 6 more failures for this rule*

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-22
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav role="navigation" id="goa-quicklinks" class="goa-list">`
- XPath: `.goa-list:nth-child(1) > nav[role="navigation"]`

### https://alberta.ca/emergency-preparedness-disaster-response-and-public-safety-topic

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-22
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav role="navigation" id="goa-quicklinks" class="goa-list">`
- XPath: `.goa-list:nth-child(1) > nav[role="navigation"]`

### https://alberta.ca/fish-and-wildlife-topic

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-22
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav role="navigation" id="goa-quicklinks" class="goa-list">`
- XPath: `.goa-list:nth-child(1) > nav[role="navigation"]`

### https://alberta.ca/indigenous-relations-topic

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-22
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav role="navigation" id="goa-quicklinks" class="goa-list">`
- XPath: `.goa-list:nth-child(1) > nav[role="navigation"]`

### https://alberta.ca/infrastructure-topic

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-22
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav role="navigation" id="goa-quicklinks" class="goa-list">`
- XPath: `.goa-list:nth-child(1) > nav[role="navigation"]`

### https://alberta.ca/ministries

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-22
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav role="navigation" id="goa-quicklinks" class="goa-list">`
- XPath: `.goa-list:nth-child(1) > nav[role="navigation"]`

### https://alberta.ca/moving-to-alberta-topic

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-22
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav role="navigation" id="goa-quicklinks" class="goa-list">`
- XPath: `.goa-list:nth-child(1) > nav[role="navigation"]`

### https://alberta.ca/municipalities-topic

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-22
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav role="navigation" id="goa-quicklinks" class="goa-list">`
- XPath: `.goa-list:nth-child(1) > nav[role="navigation"]`

### https://alberta.ca/non-profit-and-charitable-organizations-topic

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-22
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav role="navigation" id="goa-quicklinks" class="goa-list">`
- XPath: `.goa-list:nth-child(1) > nav[role="navigation"]`

### https://alberta.ca/premier.aspx

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-22
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav role="navigation" id="goa-quicklinks" class="goa-list">`
- XPath: `.goa-list:nth-child(1) > nav[role="navigation"]`

### https://alberta.ca/privacystatement

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-22
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav role="navigation" id="goa-quicklinks" class="goa-list">`
- XPath: `.goa-list:nth-child(1) > nav[role="navigation"]`

### https://alberta.ca/release.cfm?xID=956393BF7AAE1-FC58-0121-F6ACBF2A8BCD7A5B

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-22
- Message: All page content should be contained by landmarks
- HTML: `<div class="ab-footer">`
- XPath: `.ab-footer`

### https://alberta.ca/release.cfm?xID=956403CB2A273-BB32-5FB1-CF2920F98FFC9B8A

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-22
- Message: All page content should be contained by landmarks
- HTML: `<div class="ab-footer">`
- XPath: `.ab-footer`

### https://alberta.ca/release.cfm?xID=9564141722588-FFA6-400D-B388DB636D18FB65

#### Rule: [aria-prohibited-attr](https://dequeuniversity.com/rules/axe/4.11/aria-prohibited-attr?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-03-22
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div class="html5-video-player ytp-hide-controls ytp-exp-bottom-control-flexbox ytp-modern-caption ytp-livebadge-color unstarted-mode ytp-large-width-mode" tabindex="" id="movie_player" data-version="/s/player/1ebf2aa6/player_embed.vflset/en_US/base.js" aria-label="YouTube Video Player">`
- XPath: `#\36 98254387`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-22
- Message: All page content should be contained by landmarks
- HTML: `<div class="ab-footer">`
- XPath: `.ab-footer`

### https://alberta.ca/schools-now

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-22
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav>`
- XPath: `.goa-languages > nav`

### https://alberta.ca/social-media-directory

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-22
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav role="navigation" id="goa-quicklinks" class="goa-list">`
- XPath: `.goa-list:nth-child(1) > nav[role="navigation"]`

### https://alberta.ca/tourism-sport-and-outdoor-recreation

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-22
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav role="navigation" id="goa-quicklinks" class="goa-list">`
- XPath: `.goa-list:nth-child(1) > nav[role="navigation"]`

