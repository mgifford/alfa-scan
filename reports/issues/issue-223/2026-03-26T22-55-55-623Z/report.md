# Scan Report: Bixal Website

- Issue: https://github.com/mgifford/open-scans/issues/223
- Submitted by: bi-zz-xal
- Scanned at: 2026-03-26T22:55:01.867Z
- Engines used: AXE, EQUALACCESS
- Scan duration: 11.3 minutes
- Total URLs submitted: 100
- Accepted public URLs: 100
- Rejected URLs: 0
- 🎨 **Accessibility personalization (CSS media queries):**
  - 🌙 Dark mode: None of the scanned URLs support `prefers-color-scheme: dark`
  - ⚡ **Reduced motion:** 100 of 100 URLs (100%) support `prefers-reduced-motion: reduce`
  - 🔍 High contrast: None of the scanned URLs support `prefers-contrast: more`
  - 🖥️ **Forced colors:** 99 of 100 URLs (99%) support `forced-colors: active`
  - 🪟 Reduced transparency: None of the scanned URLs support `prefers-reduced-transparency: reduce`
- ALFA outcomes: 0 passed, 0 failed, 0 cantTell, 0 inapplicable
- axe outcomes: 49832 passed, 1415 failed, 1794 cantTell, 3861 inapplicable
- Equal Access outcomes: 124871 passed, 2908 failed (2662 unique, 246 duplicate), 1606 cantTell, 0 inapplicable
- AccessLint outcomes: 0 passed, 0 failed (0 unique, 0 duplicate), 0 cantTell, 0 inapplicable
- QualWeb outcomes: 0 passed, 0 failed, 0 cantTell, 0 inapplicable
- Duplicate findings caught by later scanners: 444

## 🎯 Pages with Most Errors

Focus your efforts on these pages to make the biggest impact (combined scanner unique failures):

| Page | axe Unique | Equal Access Unique | Total Unique | Page Title |
|---|---:|---:|---:|---|
| [View Page](https://www.bixal.com/) | 18 | 31 | **49** | We are Bixal |
| [View Page](https://www.bixal.com/) | 18 | 31 | **49** | We are Bixal |
| [View Page](https://www.bixal.com/our-work/hhs) | 16 | 31 | **47** | Case Study \| Bixal |
| [View Page](https://www.bixal.com/our-work/digital-apex) | 13 | 32 | **45** | Case Study \| Bixal |
| [View Page](https://www.bixal.com/our-work/sba) | 13 | 32 | **45** | Case Study \| Bixal |
| [View Page](https://www.bixal.com/about) | 12 | 32 | **44** | About Bixal \| Bixal |
| [View Page](https://www.bixal.com/blog/data-driven-decision-making-in-the-government) | 12 | 32 | **44** | How Dashboards Drive Data-Driven Decision-Making in the Government |
| [View Page](https://www.bixal.com/blog/why-structured-content-cornerstone-your-agencys-ai-content-strategy) | 12 | 32 | **44** | Why Structured Content Is Critical to Your Agency’s AI Content Strategy |
| [View Page](https://www.bixal.com/blog/the-evolving-role-of-human-centered-technology) | 12 | 31 | **43** | The Evolving Role of Human-Centered Technology, Key Strategies for Effectively Leveraging the Potential of AI and More: A Q&amp;A With Bixal VP of Technology, Erica Stephens. \| Bixal |
| [View Page](https://www.bixal.com/blog) | 12 | 30 | **42** | Blog and News \| Bixal |

## 🔧 Most Common Issues (ALFA)

These ALFA accessibility issues appear most frequently across your pages:

✅ No ALFA failed rules detected!

## 🔧 Most Common Issues (axe)

These axe accessibility issues appear most frequently across your pages:

| Rule | Pages Affected | Documentation |
|---|---:|---|
| region | **100** of 100 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/region) |
| landmark-no-duplicate-banner | **99** of 100 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/landmark-no-duplicate-banner) |
| landmark-unique | **99** of 100 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/landmark-unique) |
| heading-order | **6** of 100 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/heading-order) |
| definition-list | **2** of 100 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/definition-list) |
| color-contrast | **2** of 100 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/color-contrast) |
| empty-heading | **2** of 100 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/empty-heading) |
| aria-allowed-role | **1** of 100 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/aria-allowed-role) |
| image-redundant-alt | **1** of 100 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/image-redundant-alt) |

> 💡 **Tip**: Click on the rule documentation links to learn how to fix each issue. Consider fixing the most common issues first for maximum impact.

> 🤖 **Future Enhancement**: This report will soon include AI-powered fix suggestions for authenticated GitHub users (opt-in only, no auto-run AI).

## 🔍 Cross-Page Patterns: Common HTML Issues

These HTML patterns cause the same accessibility errors across multiple pages. **Fix the pattern once in your codebase to fix it everywhere!**

### 🎯 Top Patterns to Fix (Highest Impact)

#### Pattern 1: Affects 99 page(s) - 198 occurrence(s)

**Scanner**: axe
**Rule**: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate
**Issue**: All page content should be contained by landmarks

**HTML Pattern**:
```html
<div class="bix-grid__item bix-grid__item--full">
```

**XPath** (use in browser DevTools):
```
.bix-grid__item--full.bix-grid__item:nth-child(1)
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.bix-grid__item--full.bix-grid__item:nth-child(1)')`
5. The element will be highlighted

**Affected Pages**:
- https://bixal.com/
- https://bixal.com/accessibility-statement
- https://bixal.com/blog/advancing-accessibility-in-the-federal-government
- https://bixal.com/blog/understanding-the-dojs-new-web-accessibility-rules
- https://bixal.com/blog/bixal-ceo-carla-briceno-named-2026-engage-federal-citizen-services-150-honoree
- *...and 94 more page(s)*

---

#### Pattern 2: Affects 99 page(s) - 198 occurrence(s)

**Scanner**: axe
**Rule**: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate
**Issue**: All page content should be contained by landmarks

**HTML Pattern**:
```html
<div class="bix-grid__item">
```

**XPath** (use in browser DevTools):
```
.bix-grid__item:nth-child(2)
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.bix-grid__item:nth-child(2)')`
5. The element will be highlighted

**Affected Pages**:
- https://bixal.com/
- https://bixal.com/accessibility-statement
- https://bixal.com/blog/advancing-accessibility-in-the-federal-government
- https://bixal.com/blog/understanding-the-dojs-new-web-accessibility-rules
- https://bixal.com/blog/bixal-ceo-carla-briceno-named-2026-engage-federal-citizen-services-150-honoree
- *...and 94 more page(s)*

---

#### Pattern 3: Affects 99 page(s) - 99 occurrence(s)

**Scanner**: axe
**Rule**: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate
**Issue**: Document should not have more than one banner landmark

**HTML Pattern**:
```html
<div data-sitewide-alert="" role="banner"></div>
```

**XPath** (use in browser DevTools):
```
div[data-sitewide-alert=""]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('div[data-sitewide-alert=""]')`
5. The element will be highlighted

**Affected Pages**:
- https://bixal.com/
- https://bixal.com/accessibility-statement
- https://bixal.com/blog/advancing-accessibility-in-the-federal-government
- https://bixal.com/blog/understanding-the-dojs-new-web-accessibility-rules
- https://bixal.com/blog/bixal-ceo-carla-briceno-named-2026-engage-federal-citizen-services-150-honoree
- *...and 94 more page(s)*

---

#### Pattern 4: Affects 99 page(s) - 99 occurrence(s)

**Scanner**: axe
**Rule**: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate
**Issue**: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

**HTML Pattern**:
```html
<div data-sitewide-alert="" role="banner"></div>
```

**XPath** (use in browser DevTools):
```
div[data-sitewide-alert=""]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('div[data-sitewide-alert=""]')`
5. The element will be highlighted

**Affected Pages**:
- https://bixal.com/
- https://bixal.com/accessibility-statement
- https://bixal.com/blog/advancing-accessibility-in-the-federal-government
- https://bixal.com/blog/understanding-the-dojs-new-web-accessibility-rules
- https://bixal.com/blog/bixal-ceo-carla-briceno-named-2026-engage-federal-citizen-services-150-honoree
- *...and 94 more page(s)*

---

#### Pattern 5: Affects 99 page(s) - 99 occurrence(s)

**Scanner**: axe
**Rule**: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate
**Issue**: All page content should be contained by landmarks

**HTML Pattern**:
```html
<div class="bix-title-prefix">Contact</div>
```

**XPath** (use in browser DevTools):
```
#contact > .bix-container > .bix-title-prefix
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('#contact > .bix-container > .bix-title-prefix')`
5. The element will be highlighted

**Affected Pages**:
- https://bixal.com/
- https://bixal.com/accessibility-statement
- https://bixal.com/blog/advancing-accessibility-in-the-federal-government
- https://bixal.com/blog/understanding-the-dojs-new-web-accessibility-rules
- https://bixal.com/blog/bixal-ceo-carla-briceno-named-2026-engage-federal-citizen-services-150-honoree
- *...and 94 more page(s)*

---

#### Pattern 6: Affects 99 page(s) - 99 occurrence(s)

**Scanner**: axe
**Rule**: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate
**Issue**: All page content should be contained by landmarks

**HTML Pattern**:
```html
<h2 class="bix-section__title">
      How can we help?<br>
      We'd love to hear from you.
    </h2>
```

**XPath** (use in browser DevTools):
```
#contact > .bix-container > h2
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('#contact > .bix-container > h2')`
5. The element will be highlighted

**Affected Pages**:
- https://bixal.com/
- https://bixal.com/accessibility-statement
- https://bixal.com/blog/advancing-accessibility-in-the-federal-government
- https://bixal.com/blog/understanding-the-dojs-new-web-accessibility-rules
- https://bixal.com/blog/bixal-ceo-carla-briceno-named-2026-engage-federal-citizen-services-150-honoree
- *...and 94 more page(s)*

---

#### Pattern 7: Affects 99 page(s) - 99 occurrence(s)

**Scanner**: axe
**Rule**: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate
**Issue**: All page content should be contained by landmarks

**HTML Pattern**:
```html
<p>Required fields are marked with an asterisk&nbsp;(<abbr title="required" class="bix-hint bix-hint--required">*</abbr>).</p>
```

**XPath** (use in browser DevTools):
```
#contact-message-site-wide-form > p
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('#contact-message-site-wide-form > p')`
5. The element will be highlighted

**Affected Pages**:
- https://bixal.com/
- https://bixal.com/accessibility-statement
- https://bixal.com/blog/advancing-accessibility-in-the-federal-government
- https://bixal.com/blog/understanding-the-dojs-new-web-accessibility-rules
- https://bixal.com/blog/bixal-ceo-carla-briceno-named-2026-engage-federal-citizen-services-150-honoree
- *...and 94 more page(s)*

---

#### Pattern 8: Affects 99 page(s) - 99 occurrence(s)

**Scanner**: axe
**Rule**: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate
**Issue**: All page content should be contained by landmarks

**HTML Pattern**:
```html
<div class="rc-inline-block">
```

**XPath** (use in browser DevTools):
```
iframe[title="reCAPTCHA"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('iframe[title="reCAPTCHA"]')`
5. The element will be highlighted

**Affected Pages**:
- https://bixal.com/
- https://bixal.com/accessibility-statement
- https://bixal.com/blog/advancing-accessibility-in-the-federal-government
- https://bixal.com/blog/understanding-the-dojs-new-web-accessibility-rules
- https://bixal.com/blog/bixal-ceo-carla-briceno-named-2026-engage-federal-citizen-services-150-honoree
- *...and 94 more page(s)*

---

#### Pattern 9: Affects 99 page(s) - 99 occurrence(s)

**Scanner**: axe
**Rule**: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate
**Issue**: All page content should be contained by landmarks

**HTML Pattern**:
```html
<a href="https://www.google.com/intl/en/policies/privacy/" target="_blank">Privacy</a>
```

**XPath** (use in browser DevTools):
```
iframe[title="reCAPTCHA"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('iframe[title="reCAPTCHA"]')`
5. The element will be highlighted

**Affected Pages**:
- https://bixal.com/
- https://bixal.com/accessibility-statement
- https://bixal.com/blog/advancing-accessibility-in-the-federal-government
- https://bixal.com/blog/understanding-the-dojs-new-web-accessibility-rules
- https://bixal.com/blog/bixal-ceo-carla-briceno-named-2026-engage-federal-citizen-services-150-honoree
- *...and 94 more page(s)*

---

#### Pattern 10: Affects 99 page(s) - 99 occurrence(s)

**Scanner**: axe
**Rule**: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate
**Issue**: All page content should be contained by landmarks

**HTML Pattern**:
```html
<a href="https://www.google.com/intl/en/policies/terms/" target="_blank">Terms</a>
```

**XPath** (use in browser DevTools):
```
iframe[title="reCAPTCHA"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('iframe[title="reCAPTCHA"]')`
5. The element will be highlighted

**Affected Pages**:
- https://bixal.com/
- https://bixal.com/accessibility-statement
- https://bixal.com/blog/advancing-accessibility-in-the-federal-government
- https://bixal.com/blog/understanding-the-dojs-new-web-accessibility-rules
- https://bixal.com/blog/bixal-ceo-carla-briceno-named-2026-engage-federal-citizen-services-150-honoree
- *...and 94 more page(s)*

---

#### Pattern 11: Affects 99 page(s) - 99 occurrence(s)

**Scanner**: axe
**Rule**: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate
**Issue**: All page content should be contained by landmarks

**HTML Pattern**:
```html
<p>This question is for testing whether or not you are a human visitor and to prevent automated spam submissions.</p>
```

**XPath** (use in browser DevTools):
```
.captcha > p
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.captcha > p')`
5. The element will be highlighted

**Affected Pages**:
- https://bixal.com/
- https://bixal.com/accessibility-statement
- https://bixal.com/blog/advancing-accessibility-in-the-federal-government
- https://bixal.com/blog/understanding-the-dojs-new-web-accessibility-rules
- https://bixal.com/blog/bixal-ceo-carla-briceno-named-2026-engage-federal-citizen-services-150-honoree
- *...and 94 more page(s)*

---

#### Pattern 12: Affects 99 page(s) - 99 occurrence(s)

**Scanner**: axe
**Rule**: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate
**Issue**: All page content should be contained by landmarks

**HTML Pattern**:
```html
<div class="cookiesjsr-banner--info">
```

**XPath** (use in browser DevTools):
```
.cookiesjsr-banner--info
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.cookiesjsr-banner--info')`
5. The element will be highlighted

**Affected Pages**:
- https://bixal.com/
- https://bixal.com/accessibility-statement
- https://bixal.com/blog/advancing-accessibility-in-the-federal-government
- https://bixal.com/blog/understanding-the-dojs-new-web-accessibility-rules
- https://bixal.com/blog/bixal-ceo-carla-briceno-named-2026-engage-federal-citizen-services-150-honoree
- *...and 94 more page(s)*

---

#### Pattern 13: Affects 2 page(s) - 12 occurrence(s)

**Scanner**: axe
**Rule**: [definition-list](https://dequeuniversity.com/rules/axe/4.11/definition-list?application=playwright)
**Impact**: serious
**Issue**: <dl> elements must only directly contain properly-ordered <dt> and <dd> groups, <script>, <template> or <div> elements

**HTML Pattern**:
```html
<dl class="bix-description-list">
```

**XPath** (use in browser DevTools):
```
.bix-graphic-list__item:nth-child(1) > .bix-graphic-list__body > .bix-description-list-collection.component--type--description-list-collection.component > .component--type--description-list.component.component--view-mode--default > dl
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.bix-graphic-list__item:nth-child(1) > .bix-graphic-list__body > .bix-description-list-collection.component--type--description-list-collection.component > .component--type--description-list.component.component--view-mode--default > dl')`
5. The element will be highlighted

**Affected Pages**:
- https://bixal.com/
- https://bixal.com/home

---

> 💡 **Pro Tip**: These patterns likely come from shared components or templates in your codebase. Fix them in the component/template source, and the fix will propagate to all affected pages.

## 📊 Detailed Results

Complete scan results for all tested pages:

| Submitted URL | Final URL | Status | HTTP | Redirected | Time (ms) | axe Unique | ALFA Unique | Equal Access Unique | AccessLint Unique | Duplicates | Notes |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|
| https://bixal.com/ | https://www.bixal.com/ | OK | 200 | yes | 10680 | 18 | 0 | 31 | 0 | 9 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: definition-list, landmark-no-duplicate-banner, landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_banner_label_unique, aria_content_in_landmark, aria_landmark_name_unique, aria_role_valid, element_attribute_deprecated, frame_src_valid, heading_markup_misuse, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_sensory_misuse |
| https://bixal.com/accessibility-statement | https://www.bixal.com/accessibility-statement | OK | 200 | yes | 6587 | 12 | 0 | 25 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_banner_label_unique, aria_content_in_landmark, aria_landmark_name_unique, aria_role_valid, element_attribute_deprecated, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_contrast_sufficient |
| https://bixal.com/blog/advancing-accessibility-in-the-federal-government | https://www.bixal.com/blog/advancing-accessibility-in-the-federal-government | OK | 200 | yes | 6590 | 12 | 0 | 27 | 0 | 9 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_banner_label_unique, aria_content_in_landmark, aria_landmark_name_unique, aria_role_valid, element_attribute_deprecated, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, text_sensory_misuse |
| https://bixal.com/blog/understanding-the-dojs-new-web-accessibility-rules | https://www.bixal.com/blog/understanding-the-dojs-new-web-accessibility-rules | OK | 200 | yes | 6503 | 12 | 0 | 28 | 0 | 6 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_banner_label_unique, aria_content_in_landmark, aria_landmark_name_unique, aria_role_valid, element_attribute_deprecated, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, text_sensory_misuse |
| https://bixal.com/blog/bixal-ceo-carla-briceno-named-2026-engage-federal-citizen-services-150-honoree | https://www.bixal.com/blog/bixal-ceo-carla-briceno-named-2026-engage-federal-citizen-services-150-honoree | OK | 200 | yes | 6434 | 12 | 0 | 26 | 0 | 3 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_banner_label_unique, aria_content_in_landmark, aria_landmark_name_unique, aria_role_valid, element_attribute_deprecated, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_contrast_sufficient |
| https://bixal.com/blog/driving-digital-transformation-government-service-delivery-crux-launch | https://www.bixal.com/blog/driving-digital-transformation-government-service-delivery-crux-launch | OK | 200 | yes | 6339 | 12 | 0 | 26 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_banner_label_unique, aria_content_in_landmark, aria_landmark_name_unique, aria_role_valid, element_attribute_deprecated, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, text_quoted_correctly |
| https://bixal.com/blog/strengthening-federal-service-delivery | https://www.bixal.com/blog/strengthening-federal-service-delivery | OK | 200 | yes | 6442 | 12 | 0 | 29 | 0 | 9 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_banner_label_unique, aria_content_in_landmark, aria_landmark_name_unique, aria_role_valid, element_attribute_deprecated, frame_src_valid, input_label_visible, list_markup_review, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, text_sensory_misuse |
| https://bixal.com/blog/ttb-awards-service-design-contract-bixal-contrast-joint-venture | https://www.bixal.com/blog/ttb-awards-service-design-contract-bixal-contrast-joint-venture | OK | 200 | yes | 6399 | 12 | 0 | 26 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_banner_label_unique, aria_content_in_landmark, aria_landmark_name_unique, aria_role_valid, element_attribute_deprecated, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, text_sensory_misuse |
| https://bixal.com/about | https://www.bixal.com/about | OK | 200 | yes | 7163 | 12 | 0 | 32 | 0 | 25 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_banner_label_unique, aria_content_in_landmark, aria_landmark_name_unique, aria_role_valid, element_attribute_deprecated, frame_src_valid, heading_markup_misuse, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, text_sensory_misuse |
| https://bixal.com/about/andrew-predmore | https://www.bixal.com/about/andrew-predmore | OK | 200 | yes | 6273 | 12 | 0 | 25 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_banner_label_unique, aria_content_in_landmark, aria_landmark_name_unique, aria_role_valid, element_attribute_deprecated, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading |
| https://bixal.com/about/bethany-thomas | https://www.bixal.com/about/bethany-thomas | OK | 200 | yes | 6439 | 12 | 0 | 25 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_banner_label_unique, aria_content_in_landmark, aria_landmark_name_unique, aria_role_valid, element_attribute_deprecated, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading |
| https://bixal.com/about/buddy-harlow | https://www.bixal.com/about/buddy-harlow | OK | 200 | yes | 6300 | 12 | 0 | 25 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_banner_label_unique, aria_content_in_landmark, aria_landmark_name_unique, aria_role_valid, element_attribute_deprecated, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading |
| https://bixal.com/about/campbell-linehan | https://www.bixal.com/about/campbell-linehan | OK | 200 | yes | 6368 | 12 | 0 | 25 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_banner_label_unique, aria_content_in_landmark, aria_landmark_name_unique, aria_role_valid, element_attribute_deprecated, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading |
| https://bixal.com/about/carla-briceno | https://www.bixal.com/about/carla-briceno | OK | 200 | yes | 6287 | 12 | 0 | 25 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_banner_label_unique, aria_content_in_landmark, aria_landmark_name_unique, aria_role_valid, element_attribute_deprecated, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading |
| https://bixal.com/about/cecilia-tan | https://www.bixal.com/about/cecilia-tan | OK | 200 | yes | 6363 | 12 | 0 | 25 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_banner_label_unique, aria_content_in_landmark, aria_landmark_name_unique, aria_role_valid, element_attribute_deprecated, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading |
| https://bixal.com/about/christa-zimmerman | https://www.bixal.com/about/christa-zimmerman | OK | 200 | yes | 6247 | 12 | 0 | 25 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_banner_label_unique, aria_content_in_landmark, aria_landmark_name_unique, aria_role_valid, element_attribute_deprecated, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading |
| https://bixal.com/about/clay-marshall | https://www.bixal.com/about/clay-marshall | OK | 200 | yes | 6326 | 12 | 0 | 25 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_banner_label_unique, aria_content_in_landmark, aria_landmark_name_unique, aria_role_valid, element_attribute_deprecated, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading |
| https://bixal.com/about/dannielle-laura | https://www.bixal.com/about/dannielle-laura | OK | 200 | yes | 6283 | 12 | 0 | 25 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_banner_label_unique, aria_content_in_landmark, aria_landmark_name_unique, aria_role_valid, element_attribute_deprecated, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading |
| https://bixal.com/2024-Bixal-Holiday-Extravaganza | https://www.bixal.com/2024-Bixal-Holiday-Extravaganza | OK | 200 | yes | 16473 | 12 | 0 | 28 | 0 | 3 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_banner_label_unique, aria_content_in_landmark, aria_landmark_name_unique, aria_role_valid, caption_track_exists, element_attribute_deprecated, frame_src_valid, input_label_visible, media_keyboard_controllable, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_contrast_sufficient |
| https://bixal.com/blog | https://www.bixal.com/blog | OK | 200 | yes | 6756 | 12 | 0 | 30 | 0 | 16 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_banner_label_unique, aria_content_in_landmark, aria_landmark_name_unique, aria_role_redundant, aria_role_valid, element_attribute_deprecated, figure_label_exists, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_contrast_sufficient |
| https://bixal.com/contract-vehicles | https://www.bixal.com/contract-vehicles | OK | 200 | yes | 6394 | 12 | 0 | 25 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_banner_label_unique, aria_content_in_landmark, aria_landmark_name_unique, aria_role_valid, element_attribute_deprecated, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_contrast_sufficient |
| https://bixal.com/fedramp-guidance-2024 | https://www.bixal.com/fedramp-guidance-2024 | OK | 200 | yes | 6442 | 12 | 0 | 25 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_banner_label_unique, aria_content_in_landmark, aria_landmark_name_unique, aria_role_valid, element_attribute_deprecated, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_contrast_sufficient |
| https://bixal.com/GSA-OASIS-IDIQ-8%28a%29-MAC | https://www.bixal.com/GSA-OASIS-IDIQ-8%28a%29-MAC | OK | 200 | yes | 6293 | 12 | 0 | 24 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_banner_label_unique, aria_content_in_landmark, aria_landmark_name_unique, aria_role_valid, element_attribute_deprecated, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading |
| https://bixal.com/GSA-STARS-III | https://www.bixal.com/GSA-STARS-III | OK | 200 | yes | 6286 | 12 | 0 | 24 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_banner_label_unique, aria_content_in_landmark, aria_landmark_name_unique, aria_role_valid, element_attribute_deprecated, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading |
| https://bixal.com/hls-test | https://www.bixal.com/hls-test | OK | 200 | yes | 16457 | 12 | 0 | 27 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_banner_label_unique, aria_content_in_landmark, aria_landmark_name_unique, aria_role_valid, caption_track_exists, element_attribute_deprecated, frame_src_valid, input_label_visible, media_keyboard_controllable, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_contrast_sufficient |
| https://bixal.com/home | https://www.bixal.com/ | OK | 200 | yes | 6839 | 18 | 0 | 31 | 0 | 9 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: definition-list, landmark-no-duplicate-banner, landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_banner_label_unique, aria_content_in_landmark, aria_landmark_name_unique, aria_role_valid, element_attribute_deprecated, frame_src_valid, heading_markup_misuse, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_sensory_misuse |
| https://bixal.com/our-work | https://www.bixal.com/our-work | OK | 200 | yes | 6545 | 12 | 0 | 25 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_banner_label_unique, aria_content_in_landmark, aria_landmark_name_unique, aria_role_valid, element_attribute_deprecated, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_contrast_sufficient |
| https://bixal.com/privacy | https://www.bixal.com/privacy | OK | 200 | yes | 7269 | 13 | 0 | 28 | 0 | 23 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: heading-order, landmark-no-duplicate-banner, landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_banner_label_unique, aria_content_in_landmark, aria_landmark_name_unique, aria_role_valid, element_attribute_deprecated, element_tabbable_unobscured, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, text_sensory_misuse |
| https://bixal.com/SBA-EADS-BPA | https://www.bixal.com/SBA-EADS-BPA | OK | 200 | yes | 6431 | 12 | 0 | 25 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_banner_label_unique, aria_content_in_landmark, aria_landmark_name_unique, aria_role_valid, element_attribute_deprecated, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_sensory_misuse |
| https://bixal.com/blog/5-key-takeaways-drupal-govcon-2025-government-teams | https://www.bixal.com/blog/5-key-takeaways-drupal-govcon-2025-government-teams | OK | 200 | yes | 6701 | 12 | 0 | 29 | 0 | 17 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_banner_label_unique, aria_content_in_landmark, aria_landmark_name_unique, aria_role_valid, element_attribute_deprecated, frame_src_valid, input_label_visible, list_markup_review, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, text_sensory_misuse |
| https://bixal.com/blog/ai-innovation-at-bixal | https://www.bixal.com/blog/ai-innovation-at-bixal | OK | 200 | yes | 6531 | 12 | 0 | 28 | 0 | 13 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_banner_label_unique, aria_content_in_landmark, aria_landmark_name_unique, aria_role_valid, element_attribute_deprecated, element_tabbable_unobscured, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, text_sensory_misuse |
| https://bixal.com/blog/beyond-hype-delivering-ai-solutions-advance-federal-missions | https://www.bixal.com/blog/beyond-hype-delivering-ai-solutions-advance-federal-missions | OK | 200 | yes | 6432 | 12 | 0 | 29 | 0 | 12 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_banner_label_unique, aria_content_in_landmark, aria_landmark_name_unique, aria_role_valid, element_attribute_deprecated, frame_src_valid, input_label_visible, list_markup_review, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, text_sensory_misuse |
| https://bixal.com/contract-vehicles/GSA-OASIS%2B-MAC-Program-Unrestricted-IDIQ | https://www.bixal.com/contract-vehicles/GSA-OASIS%2B-MAC-Program-Unrestricted-IDIQ | OK | 200 | yes | 6240 | 12 | 0 | 25 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_banner_label_unique, aria_content_in_landmark, aria_landmark_name_unique, aria_role_valid, element_attribute_deprecated, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading |
| https://bixal.com/contract-vehicles/gsa-total-bpa | https://www.bixal.com/contract-vehicles/gsa-total-bpa | OK | 200 | yes | 6310 | 12 | 0 | 24 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_banner_label_unique, aria_content_in_landmark, aria_landmark_name_unique, aria_role_valid, element_attribute_deprecated, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading |
| https://bixal.com/contract-vehicles/OASIS%2B-MAC-Program-Small-Business-IDIQ | https://www.bixal.com/contract-vehicles/OASIS%2B-MAC-Program-Small-Business-IDIQ | OK | 200 | yes | 6275 | 12 | 0 | 26 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_banner_label_unique, aria_content_in_landmark, aria_landmark_name_unique, aria_role_valid, element_attribute_deprecated, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_sensory_misuse |
| https://bixal.com/contract-vehicles/OASIS%2B-MAC-Program-WOSB-IDIQ | https://www.bixal.com/contract-vehicles/OASIS%2B-MAC-Program-WOSB-IDIQ | OK | 200 | yes | 6294 | 12 | 0 | 25 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_banner_label_unique, aria_content_in_landmark, aria_landmark_name_unique, aria_role_valid, element_attribute_deprecated, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading |
| https://bixal.com/contract-vehicles/usaid-comp-ta | https://www.bixal.com/contract-vehicles/usaid-comp-ta | OK | 200 | yes | 6276 | 12 | 0 | 24 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_banner_label_unique, aria_content_in_landmark, aria_landmark_name_unique, aria_role_valid, element_attribute_deprecated, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading |
| https://bixal.com/contract-vehicles/va-spruce-idiq | https://www.bixal.com/contract-vehicles/va-spruce-idiq | OK | 200 | yes | 6444 | 12 | 0 | 26 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_banner_label_unique, aria_content_in_landmark, aria_landmark_name_unique, aria_role_valid, element_attribute_deprecated, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_quoted_correctly, text_sensory_misuse |
| https://bixal.com/node/226 | https://www.bixal.com/node/226 | OK | 200 | yes | 6332 | 12 | 0 | 24 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_banner_label_unique, aria_content_in_landmark, aria_landmark_name_unique, aria_role_valid, element_attribute_deprecated, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading |
| https://bixal.com/node/272 | https://www.bixal.com/node/272 | OK | 200 | yes | 6285 | 12 | 0 | 25 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_banner_label_unique, aria_content_in_landmark, aria_landmark_name_unique, aria_role_valid, element_attribute_deprecated, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_sensory_misuse |
| https://bixal.com/our-work/digital-apex | https://www.bixal.com/our-work/digital-apex | OK | 200 | yes | 6908 | 13 | 0 | 32 | 0 | 9 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: heading-order, landmark-no-duplicate-banner, landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_banner_label_unique, aria_content_in_landmark, aria_landmark_name_unique, aria_role_valid, element_attribute_deprecated, element_tabbable_unobscured, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, style_viewport_resizable, text_block_heading, text_contrast_sufficient, text_sensory_misuse |
| https://bixal.com/our-work/fema | https://www.bixal.com/our-work/fema | OK | 200 | yes | 6746 | 13 | 0 | 29 | 0 | 3 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: heading-order, landmark-no-duplicate-banner, landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_banner_label_unique, aria_content_in_landmark, aria_landmark_name_unique, aria_role_valid, element_attribute_deprecated, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, style_viewport_resizable, text_block_heading, text_contrast_sufficient |
| https://bixal.com/our-work/hhs | https://www.bixal.com/our-work/hhs | OK | 200 | yes | 6820 | 16 | 0 | 31 | 0 | 5 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, heading-order, landmark-no-duplicate-banner, landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_banner_label_unique, aria_content_in_landmark, aria_landmark_name_unique, aria_role_valid, element_attribute_deprecated, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, style_viewport_resizable, text_block_heading, text_contrast_sufficient, text_sensory_misuse |
| https://bixal.com/our-work/hud | https://www.bixal.com/our-work/hud | OK | 200 | yes | 6752 | 12 | 0 | 29 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_banner_label_unique, aria_content_in_landmark, aria_landmark_name_unique, aria_role_valid, element_attribute_deprecated, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, style_viewport_resizable, text_block_heading, text_contrast_sufficient, text_sensory_misuse |
| https://bixal.com/our-work/monitoring-evaluation-and-learning | https://www.bixal.com/our-work/monitoring-evaluation-and-learning | OK | 200 | yes | 6685 | 12 | 0 | 29 | 0 | 3 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_banner_label_unique, aria_content_in_landmark, aria_landmark_name_unique, aria_role_valid, element_attribute_deprecated, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, style_viewport_resizable, text_block_heading, text_contrast_sufficient, text_sensory_misuse |
| https://bixal.com/our-work/nlm | https://www.bixal.com/our-work/nlm | OK | 200 | yes | 6856 | 12 | 0 | 29 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_banner_label_unique, aria_content_in_landmark, aria_landmark_name_unique, aria_role_valid, element_attribute_deprecated, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, style_viewport_resizable, text_block_heading, text_contrast_sufficient, text_sensory_misuse |
| https://bixal.com/our-work/sba | https://www.bixal.com/our-work/sba | OK | 200 | yes | 7444 | 13 | 0 | 32 | 0 | 17 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: heading-order, landmark-no-duplicate-banner, landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_banner_label_unique, aria_content_in_landmark, aria_landmark_name_unique, aria_role_valid, element_attribute_deprecated, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, style_viewport_resizable, text_block_heading, text_contrast_sufficient, text_sensory_misuse |
| https://bixal.com/our-work/usaid | https://www.bixal.com/our-work/usaid | OK | 200 | yes | 6723 | 12 | 0 | 29 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_banner_label_unique, aria_content_in_landmark, aria_landmark_name_unique, aria_role_valid, element_attribute_deprecated, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, style_viewport_resizable, text_block_heading, text_contrast_sufficient, text_sensory_misuse |
| https://bixal.com/careers | https://careers.bixal.com/ | OK | 200 | yes | 7493 | 6 | 0 | 33 | 0 | 31 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, color-contrast, empty-heading, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_accessiblename_exists, aria_attribute_valid, aria_content_in_landmark, aria_keyboard_handler_exists, aria_region_labelled, aria_role_redundant, blockquote_cite_exists, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, figure_label_exists, frame_src_valid, frame_title_exists, heading_content_exists, html_lang_exists, html_skipnav_exists, style_color_misuse, style_highcontrast_visible, svg_graphics_labelled, text_block_heading, text_contrast_sufficient, text_sensory_misuse |
| https://bixal.com/about/ninita-sporseen | https://www.bixal.com/about/ninita-sporseen | OK | 200 | yes | 6317 | 12 | 0 | 25 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_banner_label_unique, aria_content_in_landmark, aria_landmark_name_unique, aria_role_valid, element_attribute_deprecated, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading |
| https://bixal.com/about/saurav-shrestha | https://www.bixal.com/about/saurav-shrestha | OK | 200 | yes | 6498 | 12 | 0 | 25 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_banner_label_unique, aria_content_in_landmark, aria_landmark_name_unique, aria_role_valid, element_attribute_deprecated, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading |
| https://bixal.com/about/fatma-bakir | https://www.bixal.com/about/fatma-bakir | OK | 200 | yes | 6408 | 12 | 0 | 25 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_banner_label_unique, aria_content_in_landmark, aria_landmark_name_unique, aria_role_valid, element_attribute_deprecated, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading |
| https://bixal.com/blog/data-driven-decision-making-in-the-government | https://www.bixal.com/blog/data-driven-decision-making-in-the-government | OK | 200 | yes | 6596 | 12 | 0 | 32 | 0 | 7 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_banner_label_unique, aria_content_in_landmark, aria_landmark_name_unique, aria_role_valid, element_attribute_deprecated, frame_src_valid, input_label_visible, list_markup_review, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, text_sensory_misuse |
| https://bixal.com/about/rob-hom | https://www.bixal.com/about/rob-hom | OK | 200 | yes | 6314 | 12 | 0 | 25 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_banner_label_unique, aria_content_in_landmark, aria_landmark_name_unique, aria_role_valid, element_attribute_deprecated, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading |
| https://bixal.com/about/michael-levin | https://www.bixal.com/about/michael-levin | OK | 200 | yes | 6412 | 12 | 0 | 25 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_banner_label_unique, aria_content_in_landmark, aria_landmark_name_unique, aria_role_valid, element_attribute_deprecated, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading |
| https://bixal.com/blog/bixal-ceo-wins-2024-forum-leading-impact-award | https://www.bixal.com/blog/bixal-ceo-wins-2024-forum-leading-impact-award | OK | 200 | yes | 6375 | 12 | 0 | 26 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_banner_label_unique, aria_content_in_landmark, aria_landmark_name_unique, aria_role_valid, element_attribute_deprecated, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, text_sensory_misuse |
| https://bixal.com/blog/bixal-named-one-orangeslices-2026-elev8-govcon-honorees | https://www.bixal.com/blog/bixal-named-one-orangeslices-2026-elev8-govcon-honorees | OK | 200 | yes | 6673 | 12 | 0 | 27 | 0 | 4 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_banner_label_unique, aria_content_in_landmark, aria_landmark_name_unique, aria_role_valid, element_attribute_deprecated, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, text_sensory_misuse |
| https://bixal.com/blog/bixaler-spotlight-shawn-martell | https://www.bixal.com/blog/bixaler-spotlight-shawn-martell | OK | 200 | yes | 6532 | 12 | 0 | 27 | 0 | 3 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_banner_label_unique, aria_content_in_landmark, aria_landmark_name_unique, aria_role_valid, element_attribute_deprecated, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, text_sensory_misuse |
| https://bixal.com/blog/bixaler-spotlight-nita-sporseen | https://www.bixal.com/blog/bixaler-spotlight-nita-sporseen | OK | 200 | yes | 6644 | 12 | 0 | 28 | 0 | 4 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_banner_label_unique, aria_content_in_landmark, aria_landmark_name_unique, aria_role_valid, blockquote_cite_exists, element_attribute_deprecated, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, text_sensory_misuse |
| https://bixal.com/blog/the-evolving-role-of-human-centered-technology | https://www.bixal.com/blog/the-evolving-role-of-human-centered-technology | OK | 200 | yes | 6611 | 12 | 0 | 31 | 0 | 11 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_banner_label_unique, aria_content_in_landmark, aria_landmark_name_unique, aria_role_valid, blockquote_cite_exists, element_attribute_deprecated, frame_src_valid, heading_markup_misuse, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, text_quoted_correctly, text_sensory_misuse |
| https://bixal.com/about/jayme-charles | https://www.bixal.com/about/jayme-charles | OK | 200 | yes | 6362 | 12 | 0 | 25 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_banner_label_unique, aria_content_in_landmark, aria_landmark_name_unique, aria_role_valid, element_attribute_deprecated, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading |
| https://bixal.com/about/john-shortess | https://www.bixal.com/about/john-shortess | OK | 200 | yes | 6369 | 12 | 0 | 25 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_banner_label_unique, aria_content_in_landmark, aria_landmark_name_unique, aria_role_valid, element_attribute_deprecated, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading |
| https://bixal.com/about/josh-narotsky | https://www.bixal.com/about/josh-narotsky | OK | 200 | yes | 6422 | 12 | 0 | 25 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_banner_label_unique, aria_content_in_landmark, aria_landmark_name_unique, aria_role_valid, element_attribute_deprecated, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading |
| https://bixal.com/blog/react-form-building-essential-dos-and-donts | https://www.bixal.com/blog/react-form-building-essential-dos-and-donts | OK | 200 | yes | 6831 | 12 | 0 | 27 | 0 | 3 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_banner_label_unique, aria_content_in_landmark, aria_landmark_name_unique, aria_role_valid, element_attribute_deprecated, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, text_sensory_misuse |
| https://bixal.com/blog/static-dynamic-journey-bixals-site-migration-drupal-cms | https://www.bixal.com/blog/static-dynamic-journey-bixals-site-migration-drupal-cms | OK | 200 | yes | 6898 | 12 | 0 | 30 | 0 | 6 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_banner_label_unique, aria_content_in_landmark, aria_landmark_name_unique, aria_role_valid, caption_track_exists, element_attribute_deprecated, frame_src_valid, input_label_visible, media_keyboard_controllable, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, text_sensory_misuse |
| https://bixal.com/about/russell-flench | https://www.bixal.com/about/russell-flench | OK | 200 | yes | 6310 | 12 | 0 | 25 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_banner_label_unique, aria_content_in_landmark, aria_landmark_name_unique, aria_role_valid, element_attribute_deprecated, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading |
| https://bixal.com/blog/bixals-impactful-presentations-at-drupal-govcon-2023 | https://www.bixal.com/blog/bixals-impactful-presentations-at-drupal-govcon-2023 | OK | 200 | yes | 6616 | 12 | 0 | 28 | 0 | 13 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_banner_label_unique, aria_content_in_landmark, aria_landmark_name_unique, aria_role_valid, element_attribute_deprecated, figure_label_exists, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, text_sensory_misuse |
| https://bixal.com/blog/why-every-developer-should-master-command-line-interface | https://www.bixal.com/blog/why-every-developer-should-master-command-line-interface | OK | 200 | yes | 6604 | 13 | 0 | 29 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: empty-heading, landmark-no-duplicate-banner, landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_accessiblename_exists, aria_banner_label_unique, aria_content_in_landmark, aria_landmark_name_unique, aria_role_valid, element_attribute_deprecated, frame_src_valid, heading_content_exists, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, text_sensory_misuse |
| https://bixal.com/blog/improving-ux-content-managers-drupal-5-practical-tips-success | https://www.bixal.com/blog/improving-ux-content-managers-drupal-5-practical-tips-success | OK | 200 | yes | 6633 | 12 | 0 | 27 | 0 | 4 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_banner_label_unique, aria_content_in_landmark, aria_landmark_name_unique, aria_role_valid, blockquote_cite_exists, element_attribute_deprecated, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, text_sensory_misuse |
| https://bixal.com/about/quanisha-montgomery | https://www.bixal.com/about/quanisha-montgomery | OK | 200 | yes | 6424 | 12 | 0 | 25 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_banner_label_unique, aria_content_in_landmark, aria_landmark_name_unique, aria_role_valid, element_attribute_deprecated, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading |
| https://bixal.com/about/denice-fedorowycz | https://www.bixal.com/about/denice-fedorowycz | OK | 200 | yes | 6465 | 12 | 0 | 25 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_banner_label_unique, aria_content_in_landmark, aria_landmark_name_unique, aria_role_valid, element_attribute_deprecated, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading |
| https://bixal.com/about/matt-renaud | https://www.bixal.com/about/matt-renaud | OK | 200 | yes | 6492 | 12 | 0 | 25 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_banner_label_unique, aria_content_in_landmark, aria_landmark_name_unique, aria_role_valid, element_attribute_deprecated, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading |
| https://bixal.com/about/xavier-metichecchia | https://www.bixal.com/about/xavier-metichecchia | OK | 200 | yes | 6372 | 12 | 0 | 25 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_banner_label_unique, aria_content_in_landmark, aria_landmark_name_unique, aria_role_valid, element_attribute_deprecated, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading |
| https://bixal.com/blog/policy-practice-how-agencies-can-execute-americas-ai-action-plan | https://www.bixal.com/blog/policy-practice-how-agencies-can-execute-americas-ai-action-plan | OK | 200 | yes | 6576 | 12 | 0 | 27 | 0 | 5 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_banner_label_unique, aria_content_in_landmark, aria_landmark_name_unique, aria_role_valid, element_attribute_deprecated, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, text_sensory_misuse |
| https://bixal.com/blog/uswds-training-sneak-peek-with-james-mejia-and-charlie-mahoney | https://www.bixal.com/blog/uswds-training-sneak-peek-with-james-mejia-and-charlie-mahoney | OK | 200 | yes | 6504 | 12 | 0 | 27 | 0 | 7 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_banner_label_unique, aria_content_in_landmark, aria_landmark_name_unique, aria_role_valid, element_attribute_deprecated, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, text_sensory_misuse |
| https://bixal.com/about/meron-hagos | https://www.bixal.com/about/meron-hagos | OK | 200 | yes | 6478 | 12 | 0 | 25 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_banner_label_unique, aria_content_in_landmark, aria_landmark_name_unique, aria_role_valid, element_attribute_deprecated, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading |
| https://bixal.com/about/ernest-cain | https://www.bixal.com/about/ernest-cain | OK | 200 | yes | 6486 | 12 | 0 | 25 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_banner_label_unique, aria_content_in_landmark, aria_landmark_name_unique, aria_role_valid, element_attribute_deprecated, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading |
| https://bixal.com/about/lyssa-prince | https://www.bixal.com/about/lyssa-prince | OK | 200 | yes | 6386 | 12 | 0 | 25 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_banner_label_unique, aria_content_in_landmark, aria_landmark_name_unique, aria_role_valid, element_attribute_deprecated, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading |
| https://bixal.com/about/ray-estrada | https://www.bixal.com/about/ray-estrada | OK | 200 | yes | 6412 | 12 | 0 | 25 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_banner_label_unique, aria_content_in_landmark, aria_landmark_name_unique, aria_role_valid, element_attribute_deprecated, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading |
| https://bixal.com/about/rachelle-johnsson-chiang | https://www.bixal.com/about/rachelle-johnsson-chiang | OK | 200 | yes | 6397 | 12 | 0 | 25 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_banner_label_unique, aria_content_in_landmark, aria_landmark_name_unique, aria_role_valid, element_attribute_deprecated, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading |
| https://bixal.com/blog/global-communication-training | https://www.bixal.com/blog/global-communication-training | OK | 200 | yes | 6528 | 12 | 0 | 26 | 0 | 3 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_banner_label_unique, aria_content_in_landmark, aria_landmark_name_unique, aria_role_valid, element_attribute_deprecated, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, text_sensory_misuse |
| https://bixal.com/about/dj-neace | https://www.bixal.com/about/dj-neace | OK | 200 | yes | 6451 | 12 | 0 | 26 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_banner_label_unique, aria_content_in_landmark, aria_landmark_name_unique, aria_role_valid, element_attribute_deprecated, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_sensory_misuse |
| https://bixal.com/about/james-mejia | https://www.bixal.com/about/james-mejia | OK | 200 | yes | 6469 | 12 | 0 | 25 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_banner_label_unique, aria_content_in_landmark, aria_landmark_name_unique, aria_role_valid, element_attribute_deprecated, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading |
| https://bixal.com/blog/influencing-ux-stakeholder-values-6-ways-to-convey-the-significance-of-user-research | https://www.bixal.com/blog/influencing-ux-stakeholder-values-6-ways-to-convey-the-significance-of-user-research | OK | 200 | yes | 6607 | 13 | 0 | 27 | 0 | 7 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: heading-order, landmark-no-duplicate-banner, landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_banner_label_unique, aria_content_in_landmark, aria_landmark_name_unique, aria_role_valid, element_attribute_deprecated, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, text_sensory_misuse |
| https://bixal.com/about/karen-strother | https://www.bixal.com/about/karen-strother | OK | 200 | yes | 6722 | 12 | 0 | 25 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_banner_label_unique, aria_content_in_landmark, aria_landmark_name_unique, aria_role_valid, element_attribute_deprecated, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading |
| https://bixal.com/about/ivonne-carrillo-dom%C3%ADnguez | https://www.bixal.com/about/ivonne-carrillo-dom%C3%ADnguez | OK | 200 | yes | 6345 | 12 | 0 | 25 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_banner_label_unique, aria_content_in_landmark, aria_landmark_name_unique, aria_role_valid, element_attribute_deprecated, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading |
| https://bixal.com/about/michael-riordan | https://www.bixal.com/about/michael-riordan | OK | 200 | yes | 6374 | 12 | 0 | 25 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_banner_label_unique, aria_content_in_landmark, aria_landmark_name_unique, aria_role_valid, element_attribute_deprecated, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading |
| https://bixal.com/blog/bixal-vaultes-secure-prime-position-va-spruce-contract-vehicle-avb-digital-ii-jv | https://www.bixal.com/blog/bixal-vaultes-secure-prime-position-va-spruce-contract-vehicle-avb-digital-ii-jv | OK | 200 | yes | 6481 | 12 | 0 | 27 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_banner_label_unique, aria_content_in_landmark, aria_landmark_name_unique, aria_role_valid, element_attribute_deprecated, element_tabbable_unobscured, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, text_quoted_correctly |
| https://bixal.com/about/ponja-ocumarez | https://www.bixal.com/about/ponja-ocumarez | OK | 200 | yes | 6523 | 12 | 0 | 25 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_banner_label_unique, aria_content_in_landmark, aria_landmark_name_unique, aria_role_valid, element_attribute_deprecated, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading |
| https://bixal.com/about/lisa-tully | https://www.bixal.com/about/lisa-tully | OK | 200 | yes | 6502 | 12 | 0 | 25 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_banner_label_unique, aria_content_in_landmark, aria_landmark_name_unique, aria_role_valid, element_attribute_deprecated, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading |
| https://bixal.com/about/shawn-martell | https://www.bixal.com/about/shawn-martell | OK | 200 | yes | 6317 | 12 | 0 | 25 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_banner_label_unique, aria_content_in_landmark, aria_landmark_name_unique, aria_role_valid, element_attribute_deprecated, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading |
| https://bixal.com/about/kim-kiefer | https://www.bixal.com/about/kim-kiefer | OK | 200 | yes | 6452 | 12 | 0 | 25 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_banner_label_unique, aria_content_in_landmark, aria_landmark_name_unique, aria_role_valid, element_attribute_deprecated, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading |
| https://bixal.com/blog/data-maturity-ai-in-international-development | https://www.bixal.com/blog/data-maturity-ai-in-international-development | OK | 200 | yes | 6689 | 12 | 0 | 28 | 0 | 7 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_banner_label_unique, aria_content_in_landmark, aria_landmark_name_unique, aria_role_valid, element_attribute_deprecated, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, text_sensory_misuse |
| https://bixal.com/blog/why-federal-change-efforts-fail-and-how-strategic-communication-fixes-it | https://www.bixal.com/blog/why-federal-change-efforts-fail-and-how-strategic-communication-fixes-it | OK | 200 | yes | 6658 | 13 | 0 | 28 | 0 | 5 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-redundant-alt, landmark-no-duplicate-banner, landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_banner_label_unique, aria_content_in_landmark, aria_landmark_name_unique, aria_role_valid, blockquote_cite_exists, element_attribute_deprecated, frame_src_valid, input_label_visible, list_markup_review, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, text_sensory_misuse |
| https://bixal.com/blog/why-structured-content-cornerstone-your-agencys-ai-content-strategy | https://www.bixal.com/blog/why-structured-content-cornerstone-your-agencys-ai-content-strategy | OK | 200 | yes | 6540 | 12 | 0 | 32 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_banner_label_unique, aria_content_in_landmark, aria_landmark_name_unique, aria_role_valid, blockquote_cite_exists, element_attribute_deprecated, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, text_sensory_misuse |
| https://bixal.com/about/davide-fiocchi | https://www.bixal.com/about/davide-fiocchi | OK | 200 | yes | 6299 | 12 | 0 | 25 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_banner_label_unique, aria_content_in_landmark, aria_landmark_name_unique, aria_role_valid, element_attribute_deprecated, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading |
| https://bixal.com/about/gerardo-maldonado | https://www.bixal.com/about/gerardo-maldonado | OK | 200 | yes | 6320 | 12 | 0 | 25 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_banner_label_unique, aria_content_in_landmark, aria_landmark_name_unique, aria_role_valid, element_attribute_deprecated, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading |
| https://bixal.com/blog/bixal-named-trusted-drupal-certified-partner-drupal-association | https://www.bixal.com/blog/bixal-named-trusted-drupal-certified-partner-drupal-association | OK | 200 | yes | 6444 | 12 | 0 | 25 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_banner_label_unique, aria_content_in_landmark, aria_landmark_name_unique, aria_role_valid, element_attribute_deprecated, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_contrast_sufficient |
| https://bixal.com/about/lizette-lewis | https://www.bixal.com/about/lizette-lewis | OK | 200 | yes | 6351 | 12 | 0 | 25 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_banner_label_unique, aria_content_in_landmark, aria_landmark_name_unique, aria_role_valid, element_attribute_deprecated, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading |
| https://bixal.com/blog/harnessing-artificial-intelligence-knowledge-management | https://www.bixal.com/blog/harnessing-artificial-intelligence-knowledge-management | OK | 200 | yes | 6336 | 12 | 0 | 27 | 0 | 3 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_banner_label_unique, aria_content_in_landmark, aria_landmark_name_unique, aria_role_valid, element_attribute_deprecated, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, text_sensory_misuse |

## Detailed Failure Information (ALFA)

## Detailed Failure Information (axe)

### https://bixal.com/

#### Rule: [definition-list](https://dequeuniversity.com/rules/axe/4.11/definition-list?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) (Level A)

**Failure 1:**
- First identified: 2026-03-26
- Message: <dl> elements must only directly contain properly-ordered <dt> and <dd> groups, <script>, <template> or <div> elements
- HTML: `<dl class="bix-description-list">`
- XPath: `.bix-graphic-list__item:nth-child(1) > .bix-graphic-list__body > .bix-description-list-collection.component--type--description-list-collection.component > .component--type--description-list.component.component--view-mode--default > dl`

**Failure 2:**
- First identified: 2026-03-26
- Message: <dl> elements must only directly contain properly-ordered <dt> and <dd> groups, <script>, <template> or <div> elements
- HTML: `<dl class="bix-description-list">`
- XPath: `.bix-graphic-list__item:nth-child(2) > .bix-graphic-list__body > .bix-description-list-collection.component--type--description-list-collection.component > .component--type--description-list.component.component--view-mode--default > dl`

**Failure 3:**
- First identified: 2026-03-26
- Message: <dl> elements must only directly contain properly-ordered <dt> and <dd> groups, <script>, <template> or <div> elements
- HTML: `<dl class="bix-description-list">`
- XPath: `.bix-graphic-list__item:nth-child(3) > .bix-graphic-list__body > .bix-description-list-collection.component--type--description-list-collection.component > .component--type--description-list.component.component--view-mode--default > dl`

**Failure 4:**
- First identified: 2026-03-26
- Message: <dl> elements must only directly contain properly-ordered <dt> and <dd> groups, <script>, <template> or <div> elements
- HTML: `<dl class="bix-description-list">`
- XPath: `.bix-graphic-list__item:nth-child(4) > .bix-graphic-list__body > .bix-description-list-collection.component--type--description-list-collection.component > .component--type--description-list.component.component--view-mode--default > dl`

**Failure 5:**
- First identified: 2026-03-26
- Message: <dl> elements must only directly contain properly-ordered <dt> and <dd> groups, <script>, <template> or <div> elements
- HTML: `<dl class="bix-description-list">`
- XPath: `.bix-graphic-list__item:nth-child(5) > .bix-graphic-list__body > .bix-description-list-collection.component--type--description-list-collection.component > .component--type--description-list.component.component--view-mode--default > dl`

*... and 1 more failures for this rule*

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Document should not have more than one banner landmark
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-title-prefix">Contact</div>`
- XPath: `#contact > .bix-container > .bix-title-prefix`

**Failure 2:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<h2 class="bix-section__title">       How can we help?<br>       We'd love to hear from you.     </h2>`
- XPath: `#contact > .bix-container > h2`

**Failure 3:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<p>Required fields are marked with an asterisk&nbsp;(<abbr title="required" class="bix-hint bix-hint--required">*</abbr>).</p>`
- XPath: `#contact-message-site-wide-form > p`

**Failure 4:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item bix-grid__item--full">`
- XPath: `.bix-grid__item--full.bix-grid__item:nth-child(1)`

**Failure 5:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item">`
- XPath: `.bix-grid__item:nth-child(2)`

*... and 5 more failures for this rule*

### https://bixal.com/accessibility-statement

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Document should not have more than one banner landmark
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-title-prefix">Contact</div>`
- XPath: `.bix-title-prefix`

**Failure 2:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<h2 class="bix-section__title">       How can we help?<br>       We'd love to hear from you.     </h2>`
- XPath: `.bix-section__title`

**Failure 3:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<p>Required fields are marked with an asterisk&nbsp;(<abbr title="required" class="bix-hint bix-hint--required">*</abbr>).</p>`
- XPath: `#contact-message-site-wide-form > p`

**Failure 4:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item bix-grid__item--full">`
- XPath: `.bix-grid__item--full.bix-grid__item:nth-child(1)`

**Failure 5:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item">`
- XPath: `.bix-grid__item:nth-child(2)`

*... and 5 more failures for this rule*

### https://bixal.com/blog/advancing-accessibility-in-the-federal-government

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Document should not have more than one banner landmark
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-title-prefix">Contact</div>`
- XPath: `.bix-title-prefix`

**Failure 2:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<h2 class="bix-section__title">       How can we help?<br>       We'd love to hear from you.     </h2>`
- XPath: `.bix-section__title`

**Failure 3:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<p>Required fields are marked with an asterisk&nbsp;(<abbr title="required" class="bix-hint bix-hint--required">*</abbr>).</p>`
- XPath: `#contact-message-site-wide-form > p`

**Failure 4:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item bix-grid__item--full">`
- XPath: `.bix-grid__item--full.bix-grid__item:nth-child(1)`

**Failure 5:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item">`
- XPath: `.bix-grid__item:nth-child(2)`

*... and 5 more failures for this rule*

### https://bixal.com/blog/understanding-the-dojs-new-web-accessibility-rules

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Document should not have more than one banner landmark
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-title-prefix">Contact</div>`
- XPath: `.bix-title-prefix`

**Failure 2:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<h2 class="bix-section__title">       How can we help?<br>       We'd love to hear from you.     </h2>`
- XPath: `.bix-section__title`

**Failure 3:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<p>Required fields are marked with an asterisk&nbsp;(<abbr title="required" class="bix-hint bix-hint--required">*</abbr>).</p>`
- XPath: `#contact-message-site-wide-form > p`

**Failure 4:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item bix-grid__item--full">`
- XPath: `.bix-grid__item--full.bix-grid__item:nth-child(1)`

**Failure 5:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item">`
- XPath: `.bix-grid__item:nth-child(2)`

*... and 5 more failures for this rule*

### https://bixal.com/blog/bixal-ceo-carla-briceno-named-2026-engage-federal-citizen-services-150-honoree

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Document should not have more than one banner landmark
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-title-prefix">Contact</div>`
- XPath: `.bix-title-prefix`

**Failure 2:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<h2 class="bix-section__title">       How can we help?<br>       We'd love to hear from you.     </h2>`
- XPath: `.bix-section__title`

**Failure 3:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<p>Required fields are marked with an asterisk&nbsp;(<abbr title="required" class="bix-hint bix-hint--required">*</abbr>).</p>`
- XPath: `#contact-message-site-wide-form > p`

**Failure 4:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item bix-grid__item--full">`
- XPath: `.bix-grid__item--full.bix-grid__item:nth-child(1)`

**Failure 5:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item">`
- XPath: `.bix-grid__item:nth-child(2)`

*... and 5 more failures for this rule*

### https://bixal.com/blog/driving-digital-transformation-government-service-delivery-crux-launch

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Document should not have more than one banner landmark
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-title-prefix">Contact</div>`
- XPath: `.bix-title-prefix`

**Failure 2:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<h2 class="bix-section__title">       How can we help?<br>       We'd love to hear from you.     </h2>`
- XPath: `h2`

**Failure 3:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<p>Required fields are marked with an asterisk&nbsp;(<abbr title="required" class="bix-hint bix-hint--required">*</abbr>).</p>`
- XPath: `#contact-message-site-wide-form > p`

**Failure 4:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item bix-grid__item--full">`
- XPath: `.bix-grid__item--full.bix-grid__item:nth-child(1)`

**Failure 5:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item">`
- XPath: `.bix-grid__item:nth-child(2)`

*... and 5 more failures for this rule*

### https://bixal.com/blog/strengthening-federal-service-delivery

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Document should not have more than one banner landmark
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-title-prefix">Contact</div>`
- XPath: `.bix-title-prefix`

**Failure 2:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<h2 class="bix-section__title">       How can we help?<br>       We'd love to hear from you.     </h2>`
- XPath: `.bix-section__title`

**Failure 3:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<p>Required fields are marked with an asterisk&nbsp;(<abbr title="required" class="bix-hint bix-hint--required">*</abbr>).</p>`
- XPath: `#contact-message-site-wide-form > p`

**Failure 4:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item bix-grid__item--full">`
- XPath: `.bix-grid__item--full.bix-grid__item:nth-child(1)`

**Failure 5:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item">`
- XPath: `.bix-grid__item:nth-child(2)`

*... and 5 more failures for this rule*

### https://bixal.com/blog/ttb-awards-service-design-contract-bixal-contrast-joint-venture

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Document should not have more than one banner landmark
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-title-prefix">Contact</div>`
- XPath: `.bix-title-prefix`

**Failure 2:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<h2 class="bix-section__title">       How can we help?<br>       We'd love to hear from you.     </h2>`
- XPath: `.bix-section__title`

**Failure 3:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<p>Required fields are marked with an asterisk&nbsp;(<abbr title="required" class="bix-hint bix-hint--required">*</abbr>).</p>`
- XPath: `#contact-message-site-wide-form > p`

**Failure 4:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item bix-grid__item--full">`
- XPath: `.bix-grid__item--full.bix-grid__item:nth-child(1)`

**Failure 5:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item">`
- XPath: `.bix-grid__item:nth-child(2)`

*... and 5 more failures for this rule*

### https://bixal.com/about

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Document should not have more than one banner landmark
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-title-prefix">Contact</div>`
- XPath: `#contact > .bix-container > .bix-title-prefix`

**Failure 2:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<h2 class="bix-section__title">       How can we help?<br>       We'd love to hear from you.     </h2>`
- XPath: `#contact > .bix-container > h2`

**Failure 3:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<p>Required fields are marked with an asterisk&nbsp;(<abbr title="required" class="bix-hint bix-hint--required">*</abbr>).</p>`
- XPath: `#contact-message-site-wide-form > p`

**Failure 4:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item bix-grid__item--full">`
- XPath: `.bix-grid__item--full.bix-grid__item:nth-child(1)`

**Failure 5:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item">`
- XPath: `.bix-grid__item:nth-child(2)`

*... and 5 more failures for this rule*

### https://bixal.com/about/andrew-predmore

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Document should not have more than one banner landmark
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-title-prefix">Contact</div>`
- XPath: `.bix-title-prefix`

**Failure 2:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<h2 class="bix-section__title">       How can we help?<br>       We'd love to hear from you.     </h2>`
- XPath: `.bix-section__title`

**Failure 3:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<p>Required fields are marked with an asterisk&nbsp;(<abbr title="required" class="bix-hint bix-hint--required">*</abbr>).</p>`
- XPath: `#contact-message-site-wide-form > p`

**Failure 4:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item bix-grid__item--full">`
- XPath: `.bix-grid__item--full.bix-grid__item:nth-child(1)`

**Failure 5:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item">`
- XPath: `.bix-grid__item:nth-child(2)`

*... and 5 more failures for this rule*

### https://bixal.com/about/bethany-thomas

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Document should not have more than one banner landmark
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-title-prefix">Contact</div>`
- XPath: `.bix-title-prefix`

**Failure 2:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<h2 class="bix-section__title">       How can we help?<br>       We'd love to hear from you.     </h2>`
- XPath: `.bix-section__title`

**Failure 3:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<p>Required fields are marked with an asterisk&nbsp;(<abbr title="required" class="bix-hint bix-hint--required">*</abbr>).</p>`
- XPath: `#contact-message-site-wide-form > p`

**Failure 4:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item bix-grid__item--full">`
- XPath: `.bix-grid__item--full.bix-grid__item:nth-child(1)`

**Failure 5:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item">`
- XPath: `.bix-grid__item:nth-child(2)`

*... and 5 more failures for this rule*

### https://bixal.com/about/buddy-harlow

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Document should not have more than one banner landmark
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-title-prefix">Contact</div>`
- XPath: `.bix-title-prefix`

**Failure 2:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<h2 class="bix-section__title">       How can we help?<br>       We'd love to hear from you.     </h2>`
- XPath: `.bix-section__title`

**Failure 3:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<p>Required fields are marked with an asterisk&nbsp;(<abbr title="required" class="bix-hint bix-hint--required">*</abbr>).</p>`
- XPath: `#contact-message-site-wide-form > p`

**Failure 4:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item bix-grid__item--full">`
- XPath: `.bix-grid__item--full.bix-grid__item:nth-child(1)`

**Failure 5:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item">`
- XPath: `.bix-grid__item:nth-child(2)`

*... and 5 more failures for this rule*

### https://bixal.com/about/campbell-linehan

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Document should not have more than one banner landmark
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-title-prefix">Contact</div>`
- XPath: `.bix-title-prefix`

**Failure 2:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<h2 class="bix-section__title">       How can we help?<br>       We'd love to hear from you.     </h2>`
- XPath: `.bix-section__title`

**Failure 3:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<p>Required fields are marked with an asterisk&nbsp;(<abbr title="required" class="bix-hint bix-hint--required">*</abbr>).</p>`
- XPath: `#contact-message-site-wide-form > p`

**Failure 4:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item bix-grid__item--full">`
- XPath: `.bix-grid__item--full.bix-grid__item:nth-child(1)`

**Failure 5:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item">`
- XPath: `.bix-grid__item:nth-child(2)`

*... and 5 more failures for this rule*

### https://bixal.com/about/carla-briceno

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Document should not have more than one banner landmark
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-title-prefix">Contact</div>`
- XPath: `.bix-title-prefix`

**Failure 2:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<h2 class="bix-section__title">       How can we help?<br>       We'd love to hear from you.     </h2>`
- XPath: `.bix-section__title`

**Failure 3:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<p>Required fields are marked with an asterisk&nbsp;(<abbr title="required" class="bix-hint bix-hint--required">*</abbr>).</p>`
- XPath: `#contact-message-site-wide-form > p`

**Failure 4:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item bix-grid__item--full">`
- XPath: `.bix-grid__item--full.bix-grid__item:nth-child(1)`

**Failure 5:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item">`
- XPath: `.bix-grid__item:nth-child(2)`

*... and 5 more failures for this rule*

### https://bixal.com/about/cecilia-tan

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Document should not have more than one banner landmark
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-title-prefix">Contact</div>`
- XPath: `.bix-title-prefix`

**Failure 2:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<h2 class="bix-section__title">       How can we help?<br>       We'd love to hear from you.     </h2>`
- XPath: `.bix-section__title`

**Failure 3:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<p>Required fields are marked with an asterisk&nbsp;(<abbr title="required" class="bix-hint bix-hint--required">*</abbr>).</p>`
- XPath: `#contact-message-site-wide-form > p`

**Failure 4:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item bix-grid__item--full">`
- XPath: `.bix-grid__item--full.bix-grid__item:nth-child(1)`

**Failure 5:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item">`
- XPath: `.bix-grid__item:nth-child(2)`

*... and 5 more failures for this rule*

### https://bixal.com/about/christa-zimmerman

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Document should not have more than one banner landmark
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-title-prefix">Contact</div>`
- XPath: `.bix-title-prefix`

**Failure 2:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<h2 class="bix-section__title">       How can we help?<br>       We'd love to hear from you.     </h2>`
- XPath: `.bix-section__title`

**Failure 3:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<p>Required fields are marked with an asterisk&nbsp;(<abbr title="required" class="bix-hint bix-hint--required">*</abbr>).</p>`
- XPath: `#contact-message-site-wide-form > p`

**Failure 4:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item bix-grid__item--full">`
- XPath: `.bix-grid__item--full.bix-grid__item:nth-child(1)`

**Failure 5:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item">`
- XPath: `.bix-grid__item:nth-child(2)`

*... and 5 more failures for this rule*

### https://bixal.com/about/clay-marshall

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Document should not have more than one banner landmark
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-title-prefix">Contact</div>`
- XPath: `.bix-title-prefix`

**Failure 2:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<h2 class="bix-section__title">       How can we help?<br>       We'd love to hear from you.     </h2>`
- XPath: `.bix-section__title`

**Failure 3:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<p>Required fields are marked with an asterisk&nbsp;(<abbr title="required" class="bix-hint bix-hint--required">*</abbr>).</p>`
- XPath: `#contact-message-site-wide-form > p`

**Failure 4:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item bix-grid__item--full">`
- XPath: `.bix-grid__item--full.bix-grid__item:nth-child(1)`

**Failure 5:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item">`
- XPath: `.bix-grid__item:nth-child(2)`

*... and 5 more failures for this rule*

### https://bixal.com/about/dannielle-laura

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Document should not have more than one banner landmark
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-title-prefix">Contact</div>`
- XPath: `.bix-title-prefix`

**Failure 2:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<h2 class="bix-section__title">       How can we help?<br>       We'd love to hear from you.     </h2>`
- XPath: `.bix-section__title`

**Failure 3:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<p>Required fields are marked with an asterisk&nbsp;(<abbr title="required" class="bix-hint bix-hint--required">*</abbr>).</p>`
- XPath: `#contact-message-site-wide-form > p`

**Failure 4:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item bix-grid__item--full">`
- XPath: `.bix-grid__item--full.bix-grid__item:nth-child(1)`

**Failure 5:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item">`
- XPath: `.bix-grid__item:nth-child(2)`

*... and 5 more failures for this rule*

### https://bixal.com/2024-Bixal-Holiday-Extravaganza

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Document should not have more than one banner landmark
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-title-prefix">Contact</div>`
- XPath: `.bix-title-prefix`

**Failure 2:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<h2 class="bix-section__title">       How can we help?<br>       We'd love to hear from you.     </h2>`
- XPath: `.bix-section__title`

**Failure 3:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<p>Required fields are marked with an asterisk&nbsp;(<abbr title="required" class="bix-hint bix-hint--required">*</abbr>).</p>`
- XPath: `#contact-message-site-wide-form > p`

**Failure 4:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item bix-grid__item--full">`
- XPath: `.bix-grid__item--full.bix-grid__item:nth-child(1)`

**Failure 5:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item">`
- XPath: `.bix-grid__item:nth-child(2)`

*... and 5 more failures for this rule*

### https://bixal.com/blog

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Document should not have more than one banner landmark
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-title-prefix">Contact</div>`
- XPath: `.bix-title-prefix`

**Failure 2:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<h2 class="bix-section__title">       How can we help?<br>       We'd love to hear from you.     </h2>`
- XPath: `.bix-section__title`

**Failure 3:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<p>Required fields are marked with an asterisk&nbsp;(<abbr title="required" class="bix-hint bix-hint--required">*</abbr>).</p>`
- XPath: `#contact-message-site-wide-form > p`

**Failure 4:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item bix-grid__item--full">`
- XPath: `.bix-grid__item--full.bix-grid__item:nth-child(1)`

**Failure 5:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item">`
- XPath: `.bix-grid__item:nth-child(2)`

*... and 5 more failures for this rule*

### https://bixal.com/contract-vehicles

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Document should not have more than one banner landmark
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-title-prefix">Contact</div>`
- XPath: `.bix-title-prefix`

**Failure 2:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<h2 class="bix-section__title">       How can we help?<br>       We'd love to hear from you.     </h2>`
- XPath: `.bix-section__title`

**Failure 3:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<p>Required fields are marked with an asterisk&nbsp;(<abbr title="required" class="bix-hint bix-hint--required">*</abbr>).</p>`
- XPath: `#contact-message-site-wide-form > p`

**Failure 4:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item bix-grid__item--full">`
- XPath: `.bix-grid__item--full.bix-grid__item:nth-child(1)`

**Failure 5:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item">`
- XPath: `.bix-grid__item:nth-child(2)`

*... and 5 more failures for this rule*

### https://bixal.com/fedramp-guidance-2024

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Document should not have more than one banner landmark
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-title-prefix">Contact</div>`
- XPath: `.bix-title-prefix`

**Failure 2:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<h2 class="bix-section__title">       How can we help?<br>       We'd love to hear from you.     </h2>`
- XPath: `.bix-section__title`

**Failure 3:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<p>Required fields are marked with an asterisk&nbsp;(<abbr title="required" class="bix-hint bix-hint--required">*</abbr>).</p>`
- XPath: `#contact-message-site-wide-form > p`

**Failure 4:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item bix-grid__item--full">`
- XPath: `.bix-grid__item--full.bix-grid__item:nth-child(1)`

**Failure 5:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item">`
- XPath: `.bix-grid__item:nth-child(2)`

*... and 5 more failures for this rule*

### https://bixal.com/GSA-OASIS-IDIQ-8%28a%29-MAC

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Document should not have more than one banner landmark
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-title-prefix">Contact</div>`
- XPath: `.bix-title-prefix`

**Failure 2:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<h2 class="bix-section__title">       How can we help?<br>       We'd love to hear from you.     </h2>`
- XPath: `.bix-section__title`

**Failure 3:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<p>Required fields are marked with an asterisk&nbsp;(<abbr title="required" class="bix-hint bix-hint--required">*</abbr>).</p>`
- XPath: `#contact-message-site-wide-form > p`

**Failure 4:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item bix-grid__item--full">`
- XPath: `.bix-grid__item--full.bix-grid__item:nth-child(1)`

**Failure 5:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item">`
- XPath: `.bix-grid__item:nth-child(2)`

*... and 5 more failures for this rule*

### https://bixal.com/GSA-STARS-III

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Document should not have more than one banner landmark
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-title-prefix">Contact</div>`
- XPath: `.bix-title-prefix`

**Failure 2:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<h2 class="bix-section__title">       How can we help?<br>       We'd love to hear from you.     </h2>`
- XPath: `.bix-section__title`

**Failure 3:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<p>Required fields are marked with an asterisk&nbsp;(<abbr title="required" class="bix-hint bix-hint--required">*</abbr>).</p>`
- XPath: `#contact-message-site-wide-form > p`

**Failure 4:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item bix-grid__item--full">`
- XPath: `.bix-grid__item--full.bix-grid__item:nth-child(1)`

**Failure 5:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item">`
- XPath: `.bix-grid__item:nth-child(2)`

*... and 5 more failures for this rule*

### https://bixal.com/hls-test

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Document should not have more than one banner landmark
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-title-prefix">Contact</div>`
- XPath: `.bix-title-prefix`

**Failure 2:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<h2 class="bix-section__title">       How can we help?<br>       We'd love to hear from you.     </h2>`
- XPath: `h2`

**Failure 3:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<p>Required fields are marked with an asterisk&nbsp;(<abbr title="required" class="bix-hint bix-hint--required">*</abbr>).</p>`
- XPath: `#contact-message-site-wide-form > p`

**Failure 4:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item bix-grid__item--full">`
- XPath: `.bix-grid__item--full.bix-grid__item:nth-child(1)`

**Failure 5:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item">`
- XPath: `.bix-grid__item:nth-child(2)`

*... and 5 more failures for this rule*

### https://bixal.com/home

#### Rule: [definition-list](https://dequeuniversity.com/rules/axe/4.11/definition-list?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) (Level A)

**Failure 1:**
- First identified: 2026-03-26
- Message: <dl> elements must only directly contain properly-ordered <dt> and <dd> groups, <script>, <template> or <div> elements
- HTML: `<dl class="bix-description-list">`
- XPath: `.bix-graphic-list__item:nth-child(1) > .bix-graphic-list__body > .bix-description-list-collection.component--type--description-list-collection.component > .component--type--description-list.component.component--view-mode--default > dl`

**Failure 2:**
- First identified: 2026-03-26
- Message: <dl> elements must only directly contain properly-ordered <dt> and <dd> groups, <script>, <template> or <div> elements
- HTML: `<dl class="bix-description-list">`
- XPath: `.bix-graphic-list__item:nth-child(2) > .bix-graphic-list__body > .bix-description-list-collection.component--type--description-list-collection.component > .component--type--description-list.component.component--view-mode--default > dl`

**Failure 3:**
- First identified: 2026-03-26
- Message: <dl> elements must only directly contain properly-ordered <dt> and <dd> groups, <script>, <template> or <div> elements
- HTML: `<dl class="bix-description-list">`
- XPath: `.bix-graphic-list__item:nth-child(3) > .bix-graphic-list__body > .bix-description-list-collection.component--type--description-list-collection.component > .component--type--description-list.component.component--view-mode--default > dl`

**Failure 4:**
- First identified: 2026-03-26
- Message: <dl> elements must only directly contain properly-ordered <dt> and <dd> groups, <script>, <template> or <div> elements
- HTML: `<dl class="bix-description-list">`
- XPath: `.bix-graphic-list__item:nth-child(4) > .bix-graphic-list__body > .bix-description-list-collection.component--type--description-list-collection.component > .component--type--description-list.component.component--view-mode--default > dl`

**Failure 5:**
- First identified: 2026-03-26
- Message: <dl> elements must only directly contain properly-ordered <dt> and <dd> groups, <script>, <template> or <div> elements
- HTML: `<dl class="bix-description-list">`
- XPath: `.bix-graphic-list__item:nth-child(5) > .bix-graphic-list__body > .bix-description-list-collection.component--type--description-list-collection.component > .component--type--description-list.component.component--view-mode--default > dl`

*... and 1 more failures for this rule*

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Document should not have more than one banner landmark
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-title-prefix">Contact</div>`
- XPath: `#contact > .bix-container > .bix-title-prefix`

**Failure 2:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<h2 class="bix-section__title">       How can we help?<br>       We'd love to hear from you.     </h2>`
- XPath: `#contact > .bix-container > h2`

**Failure 3:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<p>Required fields are marked with an asterisk&nbsp;(<abbr title="required" class="bix-hint bix-hint--required">*</abbr>).</p>`
- XPath: `#contact-message-site-wide-form > p`

**Failure 4:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item bix-grid__item--full">`
- XPath: `.bix-grid__item--full.bix-grid__item:nth-child(1)`

**Failure 5:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item">`
- XPath: `.bix-grid__item:nth-child(2)`

*... and 5 more failures for this rule*

### https://bixal.com/our-work

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Document should not have more than one banner landmark
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-title-prefix">Contact</div>`
- XPath: `.bix-title-prefix`

**Failure 2:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<h2 class="bix-section__title">       How can we help?<br>       We'd love to hear from you.     </h2>`
- XPath: `#contact > .bix-container > h2`

**Failure 3:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<p>Required fields are marked with an asterisk&nbsp;(<abbr title="required" class="bix-hint bix-hint--required">*</abbr>).</p>`
- XPath: `#contact-message-site-wide-form > p`

**Failure 4:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item bix-grid__item--full">`
- XPath: `.bix-grid__item--full.bix-grid__item:nth-child(1)`

**Failure 5:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item">`
- XPath: `.bix-grid__item:nth-child(2)`

*... and 5 more failures for this rule*

### https://bixal.com/privacy

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Heading levels should only increase by one
- HTML: `<h3><em>Jump to Topic:&nbsp;</em></h3>`
- XPath: `h3:nth-child(2)`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Document should not have more than one banner landmark
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-title-prefix">Contact</div>`
- XPath: `.bix-title-prefix`

**Failure 2:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<h2 class="bix-section__title">       How can we help?<br>       We'd love to hear from you.     </h2>`
- XPath: `.bix-section__title`

**Failure 3:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<p>Required fields are marked with an asterisk&nbsp;(<abbr title="required" class="bix-hint bix-hint--required">*</abbr>).</p>`
- XPath: `#contact-message-site-wide-form > p`

**Failure 4:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item bix-grid__item--full">`
- XPath: `.bix-grid__item--full.bix-grid__item:nth-child(1)`

**Failure 5:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item">`
- XPath: `.bix-grid__item:nth-child(2)`

*... and 5 more failures for this rule*

### https://bixal.com/SBA-EADS-BPA

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Document should not have more than one banner landmark
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-title-prefix">Contact</div>`
- XPath: `.bix-title-prefix`

**Failure 2:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<h2 class="bix-section__title">       How can we help?<br>       We'd love to hear from you.     </h2>`
- XPath: `.bix-section__title`

**Failure 3:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<p>Required fields are marked with an asterisk&nbsp;(<abbr title="required" class="bix-hint bix-hint--required">*</abbr>).</p>`
- XPath: `#contact-message-site-wide-form > p`

**Failure 4:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item bix-grid__item--full">`
- XPath: `.bix-grid__item--full.bix-grid__item:nth-child(1)`

**Failure 5:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item">`
- XPath: `.bix-grid__item:nth-child(2)`

*... and 5 more failures for this rule*

### https://bixal.com/blog/5-key-takeaways-drupal-govcon-2025-government-teams

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Document should not have more than one banner landmark
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-title-prefix">Contact</div>`
- XPath: `.bix-title-prefix`

**Failure 2:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<h2 class="bix-section__title">       How can we help?<br>       We'd love to hear from you.     </h2>`
- XPath: `.bix-section__title`

**Failure 3:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<p>Required fields are marked with an asterisk&nbsp;(<abbr title="required" class="bix-hint bix-hint--required">*</abbr>).</p>`
- XPath: `#contact-message-site-wide-form > p`

**Failure 4:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item bix-grid__item--full">`
- XPath: `.bix-grid__item--full.bix-grid__item:nth-child(1)`

**Failure 5:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item">`
- XPath: `.bix-grid__item:nth-child(2)`

*... and 5 more failures for this rule*

### https://bixal.com/blog/ai-innovation-at-bixal

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Document should not have more than one banner landmark
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-title-prefix">Contact</div>`
- XPath: `.bix-title-prefix`

**Failure 2:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<h2 class="bix-section__title">       How can we help?<br>       We'd love to hear from you.     </h2>`
- XPath: `.bix-section__title`

**Failure 3:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<p>Required fields are marked with an asterisk&nbsp;(<abbr title="required" class="bix-hint bix-hint--required">*</abbr>).</p>`
- XPath: `#contact-message-site-wide-form > p`

**Failure 4:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item bix-grid__item--full">`
- XPath: `.bix-grid__item--full.bix-grid__item:nth-child(1)`

**Failure 5:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item">`
- XPath: `.bix-grid__item:nth-child(2)`

*... and 5 more failures for this rule*

### https://bixal.com/blog/beyond-hype-delivering-ai-solutions-advance-federal-missions

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Document should not have more than one banner landmark
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-title-prefix">Contact</div>`
- XPath: `.bix-title-prefix`

**Failure 2:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<h2 class="bix-section__title">       How can we help?<br>       We'd love to hear from you.     </h2>`
- XPath: `.bix-section__title`

**Failure 3:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<p>Required fields are marked with an asterisk&nbsp;(<abbr title="required" class="bix-hint bix-hint--required">*</abbr>).</p>`
- XPath: `#contact-message-site-wide-form > p`

**Failure 4:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item bix-grid__item--full">`
- XPath: `.bix-grid__item--full.bix-grid__item:nth-child(1)`

**Failure 5:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item">`
- XPath: `.bix-grid__item:nth-child(2)`

*... and 5 more failures for this rule*

### https://bixal.com/contract-vehicles/GSA-OASIS%2B-MAC-Program-Unrestricted-IDIQ

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Document should not have more than one banner landmark
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-title-prefix">Contact</div>`
- XPath: `.bix-title-prefix`

**Failure 2:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<h2 class="bix-section__title">       How can we help?<br>       We'd love to hear from you.     </h2>`
- XPath: `.bix-section__title`

**Failure 3:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<p>Required fields are marked with an asterisk&nbsp;(<abbr title="required" class="bix-hint bix-hint--required">*</abbr>).</p>`
- XPath: `#contact-message-site-wide-form > p`

**Failure 4:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item bix-grid__item--full">`
- XPath: `.bix-grid__item--full.bix-grid__item:nth-child(1)`

**Failure 5:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item">`
- XPath: `.bix-grid__item:nth-child(2)`

*... and 5 more failures for this rule*

### https://bixal.com/contract-vehicles/gsa-total-bpa

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Document should not have more than one banner landmark
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-title-prefix">Contact</div>`
- XPath: `.bix-title-prefix`

**Failure 2:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<h2 class="bix-section__title">       How can we help?<br>       We'd love to hear from you.     </h2>`
- XPath: `.bix-section__title`

**Failure 3:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<p>Required fields are marked with an asterisk&nbsp;(<abbr title="required" class="bix-hint bix-hint--required">*</abbr>).</p>`
- XPath: `#contact-message-site-wide-form > p`

**Failure 4:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item bix-grid__item--full">`
- XPath: `.bix-grid__item--full.bix-grid__item:nth-child(1)`

**Failure 5:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item">`
- XPath: `.bix-grid__item:nth-child(2)`

*... and 5 more failures for this rule*

### https://bixal.com/contract-vehicles/OASIS%2B-MAC-Program-Small-Business-IDIQ

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Document should not have more than one banner landmark
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-title-prefix">Contact</div>`
- XPath: `.bix-title-prefix`

**Failure 2:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<h2 class="bix-section__title">       How can we help?<br>       We'd love to hear from you.     </h2>`
- XPath: `.bix-section__title`

**Failure 3:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<p>Required fields are marked with an asterisk&nbsp;(<abbr title="required" class="bix-hint bix-hint--required">*</abbr>).</p>`
- XPath: `#contact-message-site-wide-form > p`

**Failure 4:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item bix-grid__item--full">`
- XPath: `.bix-grid__item--full.bix-grid__item:nth-child(1)`

**Failure 5:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item">`
- XPath: `.bix-grid__item:nth-child(2)`

*... and 5 more failures for this rule*

### https://bixal.com/contract-vehicles/OASIS%2B-MAC-Program-WOSB-IDIQ

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Document should not have more than one banner landmark
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-title-prefix">Contact</div>`
- XPath: `.bix-title-prefix`

**Failure 2:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<h2 class="bix-section__title">       How can we help?<br>       We'd love to hear from you.     </h2>`
- XPath: `.bix-section__title`

**Failure 3:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<p>Required fields are marked with an asterisk&nbsp;(<abbr title="required" class="bix-hint bix-hint--required">*</abbr>).</p>`
- XPath: `#contact-message-site-wide-form > p`

**Failure 4:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item bix-grid__item--full">`
- XPath: `.bix-grid__item--full.bix-grid__item:nth-child(1)`

**Failure 5:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item">`
- XPath: `.bix-grid__item:nth-child(2)`

*... and 5 more failures for this rule*

### https://bixal.com/contract-vehicles/usaid-comp-ta

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Document should not have more than one banner landmark
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-title-prefix">Contact</div>`
- XPath: `.bix-title-prefix`

**Failure 2:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<h2 class="bix-section__title">       How can we help?<br>       We'd love to hear from you.     </h2>`
- XPath: `.bix-section__title`

**Failure 3:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<p>Required fields are marked with an asterisk&nbsp;(<abbr title="required" class="bix-hint bix-hint--required">*</abbr>).</p>`
- XPath: `#contact-message-site-wide-form > p`

**Failure 4:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item bix-grid__item--full">`
- XPath: `.bix-grid__item--full.bix-grid__item:nth-child(1)`

**Failure 5:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item">`
- XPath: `.bix-grid__item:nth-child(2)`

*... and 5 more failures for this rule*

### https://bixal.com/contract-vehicles/va-spruce-idiq

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Document should not have more than one banner landmark
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-title-prefix">Contact</div>`
- XPath: `.bix-title-prefix`

**Failure 2:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<h2 class="bix-section__title">       How can we help?<br>       We'd love to hear from you.     </h2>`
- XPath: `.bix-section__title`

**Failure 3:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<p>Required fields are marked with an asterisk&nbsp;(<abbr title="required" class="bix-hint bix-hint--required">*</abbr>).</p>`
- XPath: `#contact-message-site-wide-form > p`

**Failure 4:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item bix-grid__item--full">`
- XPath: `.bix-grid__item--full.bix-grid__item:nth-child(1)`

**Failure 5:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item">`
- XPath: `.bix-grid__item:nth-child(2)`

*... and 5 more failures for this rule*

### https://bixal.com/node/226

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Document should not have more than one banner landmark
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-title-prefix">Contact</div>`
- XPath: `.bix-title-prefix`

**Failure 2:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<h2 class="bix-section__title">       How can we help?<br>       We'd love to hear from you.     </h2>`
- XPath: `.bix-section__title`

**Failure 3:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<p>Required fields are marked with an asterisk&nbsp;(<abbr title="required" class="bix-hint bix-hint--required">*</abbr>).</p>`
- XPath: `#contact-message-site-wide-form > p`

**Failure 4:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item bix-grid__item--full">`
- XPath: `.bix-grid__item--full.bix-grid__item:nth-child(1)`

**Failure 5:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item">`
- XPath: `.bix-grid__item:nth-child(2)`

*... and 5 more failures for this rule*

### https://bixal.com/node/272

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Document should not have more than one banner landmark
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-title-prefix">Contact</div>`
- XPath: `.bix-title-prefix`

**Failure 2:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<h2 class="bix-section__title">       How can we help?<br>       We'd love to hear from you.     </h2>`
- XPath: `.bix-section__title`

**Failure 3:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<p>Required fields are marked with an asterisk&nbsp;(<abbr title="required" class="bix-hint bix-hint--required">*</abbr>).</p>`
- XPath: `#contact-message-site-wide-form > p`

**Failure 4:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item bix-grid__item--full">`
- XPath: `.bix-grid__item--full.bix-grid__item:nth-child(1)`

**Failure 5:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item">`
- XPath: `.bix-grid__item:nth-child(2)`

*... and 5 more failures for this rule*

### https://bixal.com/our-work/digital-apex

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Heading levels should only increase by one
- HTML: `<h3 class="intro-block-2__heading" style="color:#7d0096">United States Agency for International Development (USAID)</h3>`
- XPath: `.intro-block-2__heading:nth-child(1)`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Document should not have more than one banner landmark
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-title-prefix">Contact</div>`
- XPath: `.bix-title-prefix`

**Failure 2:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<h2 class="bix-section__title">       How can we help?<br>       We'd love to hear from you.     </h2>`
- XPath: `.bix-section__title`

**Failure 3:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<p>Required fields are marked with an asterisk&nbsp;(<abbr title="required" class="bix-hint bix-hint--required">*</abbr>).</p>`
- XPath: `#contact-message-site-wide-form > p`

**Failure 4:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item bix-grid__item--full">`
- XPath: `.bix-grid__item--full.bix-grid__item:nth-child(1)`

**Failure 5:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item">`
- XPath: `.bix-grid__item:nth-child(2)`

*... and 5 more failures for this rule*

### https://bixal.com/our-work/fema

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Heading levels should only increase by one
- HTML: `<h3 class="intro-block-2__heading" style="color:#162d6a">U.S. Department of Homeland Security (DHS)</h3>`
- XPath: `.intro-block-2__heading:nth-child(1)`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Document should not have more than one banner landmark
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-title-prefix">Contact</div>`
- XPath: `.bix-title-prefix`

**Failure 2:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<h2 class="bix-section__title">       How can we help?<br>       We'd love to hear from you.     </h2>`
- XPath: `.bix-section__title`

**Failure 3:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<p>Required fields are marked with an asterisk&nbsp;(<abbr title="required" class="bix-hint bix-hint--required">*</abbr>).</p>`
- XPath: `#contact-message-site-wide-form > p`

**Failure 4:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item bix-grid__item--full">`
- XPath: `.bix-grid__item--full.bix-grid__item:nth-child(1)`

**Failure 5:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item">`
- XPath: `.bix-grid__item:nth-child(2)`

*... and 5 more failures for this rule*

### https://bixal.com/our-work/hhs

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-03-26
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<h3 class="intro-block-2__heading" style="color:#06c5bc">U.S. Department of Health &amp; Human Services (HHS)</h3>`
- XPath: `.intro-block-2__heading:nth-child(1)`

**Failure 2:**
- First identified: 2026-03-26
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<h3 class="intro-block-2__heading" style="color:#06c5bc">Office of the Assistant Secretary of Public Affairs (ASPA)</h3>`
- XPath: `.intro-block-2__heading:nth-child(2)`

**Failure 3:**
- First identified: 2026-03-26
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<h3 class="intro-block-2__heading" style="color:#06c5bc">Digital Solutions Services (DSS)</h3>`
- XPath: `.intro-block-2__heading:nth-child(3)`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Heading levels should only increase by one
- HTML: `<h3 class="intro-block-2__heading" style="color:#06c5bc">U.S. Department of Health &amp; Human Services (HHS)</h3>`
- XPath: `.intro-block-2__heading:nth-child(1)`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Document should not have more than one banner landmark
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-title-prefix">Contact</div>`
- XPath: `.bix-title-prefix`

**Failure 2:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<h2 class="bix-section__title">       How can we help?<br>       We'd love to hear from you.     </h2>`
- XPath: `.bix-section__title`

**Failure 3:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<p>Required fields are marked with an asterisk&nbsp;(<abbr title="required" class="bix-hint bix-hint--required">*</abbr>).</p>`
- XPath: `#contact-message-site-wide-form > p`

**Failure 4:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item bix-grid__item--full">`
- XPath: `.bix-grid__item--full.bix-grid__item:nth-child(1)`

**Failure 5:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item">`
- XPath: `.bix-grid__item:nth-child(2)`

*... and 5 more failures for this rule*

### https://bixal.com/our-work/hud

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Document should not have more than one banner landmark
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-title-prefix">Contact</div>`
- XPath: `.bix-title-prefix`

**Failure 2:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<h2 class="bix-section__title">       How can we help?<br>       We'd love to hear from you.     </h2>`
- XPath: `.bix-section__title`

**Failure 3:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<p>Required fields are marked with an asterisk&nbsp;(<abbr title="required" class="bix-hint bix-hint--required">*</abbr>).</p>`
- XPath: `#contact-message-site-wide-form > p`

**Failure 4:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item bix-grid__item--full">`
- XPath: `.bix-grid__item--full.bix-grid__item:nth-child(1)`

**Failure 5:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item">`
- XPath: `.bix-grid__item:nth-child(2)`

*... and 5 more failures for this rule*

### https://bixal.com/our-work/monitoring-evaluation-and-learning

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Document should not have more than one banner landmark
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-title-prefix">Contact</div>`
- XPath: `.bix-title-prefix`

**Failure 2:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<h2 class="bix-section__title">       How can we help?<br>       We'd love to hear from you.     </h2>`
- XPath: `.bix-section__title`

**Failure 3:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<p>Required fields are marked with an asterisk&nbsp;(<abbr title="required" class="bix-hint bix-hint--required">*</abbr>).</p>`
- XPath: `#contact-message-site-wide-form > p`

**Failure 4:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item bix-grid__item--full">`
- XPath: `.bix-grid__item--full.bix-grid__item:nth-child(1)`

**Failure 5:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item">`
- XPath: `.bix-grid__item:nth-child(2)`

*... and 5 more failures for this rule*

### https://bixal.com/our-work/nlm

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Document should not have more than one banner landmark
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-title-prefix">Contact</div>`
- XPath: `.bix-title-prefix`

**Failure 2:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<h2 class="bix-section__title">       How can we help?<br>       We'd love to hear from you.     </h2>`
- XPath: `.bix-section__title`

**Failure 3:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<p>Required fields are marked with an asterisk&nbsp;(<abbr title="required" class="bix-hint bix-hint--required">*</abbr>).</p>`
- XPath: `#contact-message-site-wide-form > p`

**Failure 4:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item bix-grid__item--full">`
- XPath: `.bix-grid__item--full.bix-grid__item:nth-child(1)`

**Failure 5:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item">`
- XPath: `.bix-grid__item:nth-child(2)`

*... and 5 more failures for this rule*

### https://bixal.com/our-work/sba

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Heading levels should only increase by one
- HTML: `<h3 class="intro-block-2__heading" style="color:#E02F00">U.S. Small Business Administration (SBA)</h3>`
- XPath: `.intro-block-2__heading:nth-child(1)`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Document should not have more than one banner landmark
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-title-prefix">Contact</div>`
- XPath: `.bix-title-prefix`

**Failure 2:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<h2 class="bix-section__title">       How can we help?<br>       We'd love to hear from you.     </h2>`
- XPath: `.bix-section__title`

**Failure 3:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<p>Required fields are marked with an asterisk&nbsp;(<abbr title="required" class="bix-hint bix-hint--required">*</abbr>).</p>`
- XPath: `#contact-message-site-wide-form > p`

**Failure 4:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item bix-grid__item--full">`
- XPath: `.bix-grid__item--full.bix-grid__item:nth-child(1)`

**Failure 5:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item">`
- XPath: `.bix-grid__item:nth-child(2)`

*... and 5 more failures for this rule*

### https://bixal.com/our-work/usaid

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Document should not have more than one banner landmark
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-title-prefix">Contact</div>`
- XPath: `.bix-title-prefix`

**Failure 2:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<h2 class="bix-section__title">       How can we help?<br>       We'd love to hear from you.     </h2>`
- XPath: `.bix-section__title`

**Failure 3:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<p>Required fields are marked with an asterisk&nbsp;(<abbr title="required" class="bix-hint bix-hint--required">*</abbr>).</p>`
- XPath: `#contact-message-site-wide-form > p`

**Failure 4:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item bix-grid__item--full">`
- XPath: `.bix-grid__item--full.bix-grid__item:nth-child(1)`

**Failure 5:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item">`
- XPath: `.bix-grid__item:nth-child(2)`

*... and 5 more failures for this rule*

### https://bixal.com/careers

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-03-26
- Message: ARIA role should be appropriate for the element
- HTML: `<li class="splide__slide is-act..." data-common--carouse...="item" data-url="https://images.teamt..." id="splide01-slide01" role="tabpanel" aria-roledescription="slide" aria-label="1 of 4" style="width: calc(100%); h...">`
- XPath: `#splide01-slide01`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-03-26
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="max-sm:sr-only text-sm leading-normal tracking-wider uppercase whitespace-nowrap">Career menu</span>`
- XPath: `.max-sm\:sr-only`

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-03-26
- Message: Headings should not be empty
- HTML: `<h2></h2>`
- XPath: `.prose.prose-block.font-company-body > h2`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<span class="truncate">Skip to main content</span>`
- XPath: `.left-0 > .gap-x-3.justify-center.items-center > .truncate`

**Failure 2:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<span class="mt-2 text-sm print:hidden">       <span class="mt-2 text-sm underline group-hover:text-teamtailor-pink">Career site</span>        by Teamtailor     </span>`
- XPath: `.print\:hidden.mt-2.text-sm`

**Failure 3:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<span class="tt-widget-button"><span>Careers</span></span>`
- XPath: `.tt-widget-button`

### https://bixal.com/about/ninita-sporseen

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Document should not have more than one banner landmark
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-title-prefix">Contact</div>`
- XPath: `.bix-title-prefix`

**Failure 2:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<h2 class="bix-section__title">       How can we help?<br>       We'd love to hear from you.     </h2>`
- XPath: `.bix-section__title`

**Failure 3:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<p>Required fields are marked with an asterisk&nbsp;(<abbr title="required" class="bix-hint bix-hint--required">*</abbr>).</p>`
- XPath: `#contact-message-site-wide-form > p`

**Failure 4:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item bix-grid__item--full">`
- XPath: `.bix-grid__item--full.bix-grid__item:nth-child(1)`

**Failure 5:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item">`
- XPath: `.bix-grid__item:nth-child(2)`

*... and 5 more failures for this rule*

### https://bixal.com/about/saurav-shrestha

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Document should not have more than one banner landmark
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-title-prefix">Contact</div>`
- XPath: `.bix-title-prefix`

**Failure 2:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<h2 class="bix-section__title">       How can we help?<br>       We'd love to hear from you.     </h2>`
- XPath: `.bix-section__title`

**Failure 3:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<p>Required fields are marked with an asterisk&nbsp;(<abbr title="required" class="bix-hint bix-hint--required">*</abbr>).</p>`
- XPath: `#contact-message-site-wide-form > p`

**Failure 4:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item bix-grid__item--full">`
- XPath: `.bix-grid__item--full.bix-grid__item:nth-child(1)`

**Failure 5:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item">`
- XPath: `.bix-grid__item:nth-child(2)`

*... and 5 more failures for this rule*

### https://bixal.com/about/fatma-bakir

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Document should not have more than one banner landmark
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-title-prefix">Contact</div>`
- XPath: `.bix-title-prefix`

**Failure 2:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<h2 class="bix-section__title">       How can we help?<br>       We'd love to hear from you.     </h2>`
- XPath: `.bix-section__title`

**Failure 3:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<p>Required fields are marked with an asterisk&nbsp;(<abbr title="required" class="bix-hint bix-hint--required">*</abbr>).</p>`
- XPath: `#contact-message-site-wide-form > p`

**Failure 4:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item bix-grid__item--full">`
- XPath: `.bix-grid__item--full.bix-grid__item:nth-child(1)`

**Failure 5:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item">`
- XPath: `.bix-grid__item:nth-child(2)`

*... and 5 more failures for this rule*

### https://bixal.com/blog/data-driven-decision-making-in-the-government

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Document should not have more than one banner landmark
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-title-prefix">Contact</div>`
- XPath: `.bix-title-prefix`

**Failure 2:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<h2 class="bix-section__title">       How can we help?<br>       We'd love to hear from you.     </h2>`
- XPath: `.bix-section__title`

**Failure 3:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<p>Required fields are marked with an asterisk&nbsp;(<abbr title="required" class="bix-hint bix-hint--required">*</abbr>).</p>`
- XPath: `#contact-message-site-wide-form > p`

**Failure 4:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item bix-grid__item--full">`
- XPath: `.bix-grid__item--full.bix-grid__item:nth-child(1)`

**Failure 5:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item">`
- XPath: `.bix-grid__item:nth-child(2)`

*... and 5 more failures for this rule*

### https://bixal.com/about/rob-hom

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Document should not have more than one banner landmark
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-title-prefix">Contact</div>`
- XPath: `.bix-title-prefix`

**Failure 2:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<h2 class="bix-section__title">       How can we help?<br>       We'd love to hear from you.     </h2>`
- XPath: `.bix-section__title`

**Failure 3:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<p>Required fields are marked with an asterisk&nbsp;(<abbr title="required" class="bix-hint bix-hint--required">*</abbr>).</p>`
- XPath: `#contact-message-site-wide-form > p`

**Failure 4:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item bix-grid__item--full">`
- XPath: `.bix-grid__item--full.bix-grid__item:nth-child(1)`

**Failure 5:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item">`
- XPath: `.bix-grid__item:nth-child(2)`

*... and 5 more failures for this rule*

### https://bixal.com/about/michael-levin

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Document should not have more than one banner landmark
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-title-prefix">Contact</div>`
- XPath: `.bix-title-prefix`

**Failure 2:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<h2 class="bix-section__title">       How can we help?<br>       We'd love to hear from you.     </h2>`
- XPath: `.bix-section__title`

**Failure 3:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<p>Required fields are marked with an asterisk&nbsp;(<abbr title="required" class="bix-hint bix-hint--required">*</abbr>).</p>`
- XPath: `#contact-message-site-wide-form > p`

**Failure 4:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item bix-grid__item--full">`
- XPath: `.bix-grid__item--full.bix-grid__item:nth-child(1)`

**Failure 5:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item">`
- XPath: `.bix-grid__item:nth-child(2)`

*... and 5 more failures for this rule*

### https://bixal.com/blog/bixal-ceo-wins-2024-forum-leading-impact-award

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Document should not have more than one banner landmark
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-title-prefix">Contact</div>`
- XPath: `.bix-title-prefix`

**Failure 2:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<h2 class="bix-section__title">       How can we help?<br>       We'd love to hear from you.     </h2>`
- XPath: `h2`

**Failure 3:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<p>Required fields are marked with an asterisk&nbsp;(<abbr title="required" class="bix-hint bix-hint--required">*</abbr>).</p>`
- XPath: `#contact-message-site-wide-form > p`

**Failure 4:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item bix-grid__item--full">`
- XPath: `.bix-grid__item--full.bix-grid__item:nth-child(1)`

**Failure 5:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item">`
- XPath: `.bix-grid__item:nth-child(2)`

*... and 5 more failures for this rule*

### https://bixal.com/blog/bixal-named-one-orangeslices-2026-elev8-govcon-honorees

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Document should not have more than one banner landmark
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-title-prefix">Contact</div>`
- XPath: `.bix-title-prefix`

**Failure 2:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<h2 class="bix-section__title">       How can we help?<br>       We'd love to hear from you.     </h2>`
- XPath: `.bix-section__title`

**Failure 3:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<p>Required fields are marked with an asterisk&nbsp;(<abbr title="required" class="bix-hint bix-hint--required">*</abbr>).</p>`
- XPath: `#contact-message-site-wide-form > p`

**Failure 4:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item bix-grid__item--full">`
- XPath: `.bix-grid__item--full.bix-grid__item:nth-child(1)`

**Failure 5:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item">`
- XPath: `.bix-grid__item:nth-child(2)`

*... and 5 more failures for this rule*

### https://bixal.com/blog/bixaler-spotlight-shawn-martell

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Document should not have more than one banner landmark
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-title-prefix">Contact</div>`
- XPath: `.bix-title-prefix`

**Failure 2:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<h2 class="bix-section__title">       How can we help?<br>       We'd love to hear from you.     </h2>`
- XPath: `.bix-section__title`

**Failure 3:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<p>Required fields are marked with an asterisk&nbsp;(<abbr title="required" class="bix-hint bix-hint--required">*</abbr>).</p>`
- XPath: `#contact-message-site-wide-form > p`

**Failure 4:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item bix-grid__item--full">`
- XPath: `.bix-grid__item--full.bix-grid__item:nth-child(1)`

**Failure 5:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item">`
- XPath: `.bix-grid__item:nth-child(2)`

*... and 5 more failures for this rule*

### https://bixal.com/blog/bixaler-spotlight-nita-sporseen

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Document should not have more than one banner landmark
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-title-prefix">Contact</div>`
- XPath: `.bix-title-prefix`

**Failure 2:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<h2 class="bix-section__title">       How can we help?<br>       We'd love to hear from you.     </h2>`
- XPath: `.bix-section__title`

**Failure 3:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<p>Required fields are marked with an asterisk&nbsp;(<abbr title="required" class="bix-hint bix-hint--required">*</abbr>).</p>`
- XPath: `#contact-message-site-wide-form > p`

**Failure 4:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item bix-grid__item--full">`
- XPath: `.bix-grid__item--full.bix-grid__item:nth-child(1)`

**Failure 5:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item">`
- XPath: `.bix-grid__item:nth-child(2)`

*... and 5 more failures for this rule*

### https://bixal.com/blog/the-evolving-role-of-human-centered-technology

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Document should not have more than one banner landmark
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-title-prefix">Contact</div>`
- XPath: `.bix-title-prefix`

**Failure 2:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<h2 class="bix-section__title">       How can we help?<br>       We'd love to hear from you.     </h2>`
- XPath: `h2`

**Failure 3:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<p>Required fields are marked with an asterisk&nbsp;(<abbr title="required" class="bix-hint bix-hint--required">*</abbr>).</p>`
- XPath: `#contact-message-site-wide-form > p`

**Failure 4:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item bix-grid__item--full">`
- XPath: `.bix-grid__item--full.bix-grid__item:nth-child(1)`

**Failure 5:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item">`
- XPath: `.bix-grid__item:nth-child(2)`

*... and 5 more failures for this rule*

### https://bixal.com/about/jayme-charles

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Document should not have more than one banner landmark
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-title-prefix">Contact</div>`
- XPath: `.bix-title-prefix`

**Failure 2:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<h2 class="bix-section__title">       How can we help?<br>       We'd love to hear from you.     </h2>`
- XPath: `.bix-section__title`

**Failure 3:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<p>Required fields are marked with an asterisk&nbsp;(<abbr title="required" class="bix-hint bix-hint--required">*</abbr>).</p>`
- XPath: `#contact-message-site-wide-form > p`

**Failure 4:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item bix-grid__item--full">`
- XPath: `.bix-grid__item--full.bix-grid__item:nth-child(1)`

**Failure 5:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item">`
- XPath: `.bix-grid__item:nth-child(2)`

*... and 5 more failures for this rule*

### https://bixal.com/about/john-shortess

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Document should not have more than one banner landmark
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-title-prefix">Contact</div>`
- XPath: `.bix-title-prefix`

**Failure 2:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<h2 class="bix-section__title">       How can we help?<br>       We'd love to hear from you.     </h2>`
- XPath: `.bix-section__title`

**Failure 3:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<p>Required fields are marked with an asterisk&nbsp;(<abbr title="required" class="bix-hint bix-hint--required">*</abbr>).</p>`
- XPath: `#contact-message-site-wide-form > p`

**Failure 4:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item bix-grid__item--full">`
- XPath: `.bix-grid__item--full.bix-grid__item:nth-child(1)`

**Failure 5:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item">`
- XPath: `.bix-grid__item:nth-child(2)`

*... and 5 more failures for this rule*

### https://bixal.com/about/josh-narotsky

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Document should not have more than one banner landmark
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-title-prefix">Contact</div>`
- XPath: `.bix-title-prefix`

**Failure 2:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<h2 class="bix-section__title">       How can we help?<br>       We'd love to hear from you.     </h2>`
- XPath: `.bix-section__title`

**Failure 3:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<p>Required fields are marked with an asterisk&nbsp;(<abbr title="required" class="bix-hint bix-hint--required">*</abbr>).</p>`
- XPath: `#contact-message-site-wide-form > p`

**Failure 4:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item bix-grid__item--full">`
- XPath: `.bix-grid__item--full.bix-grid__item:nth-child(1)`

**Failure 5:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item">`
- XPath: `.bix-grid__item:nth-child(2)`

*... and 5 more failures for this rule*

### https://bixal.com/blog/react-form-building-essential-dos-and-donts

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Document should not have more than one banner landmark
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-title-prefix">Contact</div>`
- XPath: `.bix-title-prefix`

**Failure 2:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<h2 class="bix-section__title">       How can we help?<br>       We'd love to hear from you.     </h2>`
- XPath: `.bix-section__title`

**Failure 3:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<p>Required fields are marked with an asterisk&nbsp;(<abbr title="required" class="bix-hint bix-hint--required">*</abbr>).</p>`
- XPath: `#contact-message-site-wide-form > p`

**Failure 4:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item bix-grid__item--full">`
- XPath: `.bix-grid__item--full.bix-grid__item:nth-child(1)`

**Failure 5:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item">`
- XPath: `.bix-grid__item:nth-child(2)`

*... and 5 more failures for this rule*

### https://bixal.com/blog/static-dynamic-journey-bixals-site-migration-drupal-cms

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Document should not have more than one banner landmark
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-title-prefix">Contact</div>`
- XPath: `.bix-title-prefix`

**Failure 2:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<h2 class="bix-section__title">       How can we help?<br>       We'd love to hear from you.     </h2>`
- XPath: `.bix-section__title`

**Failure 3:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<p>Required fields are marked with an asterisk&nbsp;(<abbr title="required" class="bix-hint bix-hint--required">*</abbr>).</p>`
- XPath: `#contact-message-site-wide-form > p`

**Failure 4:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item bix-grid__item--full">`
- XPath: `.bix-grid__item--full.bix-grid__item:nth-child(1)`

**Failure 5:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item">`
- XPath: `.bix-grid__item:nth-child(2)`

*... and 5 more failures for this rule*

### https://bixal.com/about/russell-flench

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Document should not have more than one banner landmark
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-title-prefix">Contact</div>`
- XPath: `.bix-title-prefix`

**Failure 2:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<h2 class="bix-section__title">       How can we help?<br>       We'd love to hear from you.     </h2>`
- XPath: `.bix-section__title`

**Failure 3:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<p>Required fields are marked with an asterisk&nbsp;(<abbr title="required" class="bix-hint bix-hint--required">*</abbr>).</p>`
- XPath: `#contact-message-site-wide-form > p`

**Failure 4:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item bix-grid__item--full">`
- XPath: `.bix-grid__item--full.bix-grid__item:nth-child(1)`

**Failure 5:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item">`
- XPath: `.bix-grid__item:nth-child(2)`

*... and 5 more failures for this rule*

### https://bixal.com/blog/bixals-impactful-presentations-at-drupal-govcon-2023

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Document should not have more than one banner landmark
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-title-prefix">Contact</div>`
- XPath: `.bix-title-prefix`

**Failure 2:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<h2 class="bix-section__title">       How can we help?<br>       We'd love to hear from you.     </h2>`
- XPath: `h2`

**Failure 3:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<p>Required fields are marked with an asterisk&nbsp;(<abbr title="required" class="bix-hint bix-hint--required">*</abbr>).</p>`
- XPath: `#contact-message-site-wide-form > p`

**Failure 4:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item bix-grid__item--full">`
- XPath: `.bix-grid__item--full.bix-grid__item:nth-child(1)`

**Failure 5:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item">`
- XPath: `.bix-grid__item:nth-child(2)`

*... and 5 more failures for this rule*

### https://bixal.com/blog/why-every-developer-should-master-command-line-interface

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-03-26
- Message: Headings should not be empty
- HTML: `<h2>&nbsp;</h2>`
- XPath: `h2:nth-child(25)`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Document should not have more than one banner landmark
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-title-prefix">Contact</div>`
- XPath: `.bix-title-prefix`

**Failure 2:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<h2 class="bix-section__title">       How can we help?<br>       We'd love to hear from you.     </h2>`
- XPath: `.bix-section__title`

**Failure 3:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<p>Required fields are marked with an asterisk&nbsp;(<abbr title="required" class="bix-hint bix-hint--required">*</abbr>).</p>`
- XPath: `#contact-message-site-wide-form > p`

**Failure 4:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item bix-grid__item--full">`
- XPath: `.bix-grid__item--full.bix-grid__item:nth-child(1)`

**Failure 5:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item">`
- XPath: `.bix-grid__item:nth-child(2)`

*... and 5 more failures for this rule*

### https://bixal.com/blog/improving-ux-content-managers-drupal-5-practical-tips-success

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Document should not have more than one banner landmark
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-title-prefix">Contact</div>`
- XPath: `.bix-title-prefix`

**Failure 2:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<h2 class="bix-section__title">       How can we help?<br>       We'd love to hear from you.     </h2>`
- XPath: `.bix-section__title`

**Failure 3:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<p>Required fields are marked with an asterisk&nbsp;(<abbr title="required" class="bix-hint bix-hint--required">*</abbr>).</p>`
- XPath: `#contact-message-site-wide-form > p`

**Failure 4:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item bix-grid__item--full">`
- XPath: `.bix-grid__item--full.bix-grid__item:nth-child(1)`

**Failure 5:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item">`
- XPath: `.bix-grid__item:nth-child(2)`

*... and 5 more failures for this rule*

### https://bixal.com/about/quanisha-montgomery

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Document should not have more than one banner landmark
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-title-prefix">Contact</div>`
- XPath: `.bix-title-prefix`

**Failure 2:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<h2 class="bix-section__title">       How can we help?<br>       We'd love to hear from you.     </h2>`
- XPath: `.bix-section__title`

**Failure 3:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<p>Required fields are marked with an asterisk&nbsp;(<abbr title="required" class="bix-hint bix-hint--required">*</abbr>).</p>`
- XPath: `#contact-message-site-wide-form > p`

**Failure 4:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item bix-grid__item--full">`
- XPath: `.bix-grid__item--full.bix-grid__item:nth-child(1)`

**Failure 5:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item">`
- XPath: `.bix-grid__item:nth-child(2)`

*... and 5 more failures for this rule*

### https://bixal.com/about/denice-fedorowycz

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Document should not have more than one banner landmark
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-title-prefix">Contact</div>`
- XPath: `.bix-title-prefix`

**Failure 2:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<h2 class="bix-section__title">       How can we help?<br>       We'd love to hear from you.     </h2>`
- XPath: `.bix-section__title`

**Failure 3:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<p>Required fields are marked with an asterisk&nbsp;(<abbr title="required" class="bix-hint bix-hint--required">*</abbr>).</p>`
- XPath: `#contact-message-site-wide-form > p`

**Failure 4:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item bix-grid__item--full">`
- XPath: `.bix-grid__item--full.bix-grid__item:nth-child(1)`

**Failure 5:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item">`
- XPath: `.bix-grid__item:nth-child(2)`

*... and 5 more failures for this rule*

### https://bixal.com/about/matt-renaud

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Document should not have more than one banner landmark
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-title-prefix">Contact</div>`
- XPath: `.bix-title-prefix`

**Failure 2:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<h2 class="bix-section__title">       How can we help?<br>       We'd love to hear from you.     </h2>`
- XPath: `.bix-section__title`

**Failure 3:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<p>Required fields are marked with an asterisk&nbsp;(<abbr title="required" class="bix-hint bix-hint--required">*</abbr>).</p>`
- XPath: `#contact-message-site-wide-form > p`

**Failure 4:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item bix-grid__item--full">`
- XPath: `.bix-grid__item--full.bix-grid__item:nth-child(1)`

**Failure 5:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item">`
- XPath: `.bix-grid__item:nth-child(2)`

*... and 5 more failures for this rule*

### https://bixal.com/about/xavier-metichecchia

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Document should not have more than one banner landmark
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-title-prefix">Contact</div>`
- XPath: `.bix-title-prefix`

**Failure 2:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<h2 class="bix-section__title">       How can we help?<br>       We'd love to hear from you.     </h2>`
- XPath: `.bix-section__title`

**Failure 3:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<p>Required fields are marked with an asterisk&nbsp;(<abbr title="required" class="bix-hint bix-hint--required">*</abbr>).</p>`
- XPath: `#contact-message-site-wide-form > p`

**Failure 4:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item bix-grid__item--full">`
- XPath: `.bix-grid__item--full.bix-grid__item:nth-child(1)`

**Failure 5:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item">`
- XPath: `.bix-grid__item:nth-child(2)`

*... and 5 more failures for this rule*

### https://bixal.com/blog/policy-practice-how-agencies-can-execute-americas-ai-action-plan

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Document should not have more than one banner landmark
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-title-prefix">Contact</div>`
- XPath: `.bix-title-prefix`

**Failure 2:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<h2 class="bix-section__title">       How can we help?<br>       We'd love to hear from you.     </h2>`
- XPath: `.bix-section__title`

**Failure 3:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<p>Required fields are marked with an asterisk&nbsp;(<abbr title="required" class="bix-hint bix-hint--required">*</abbr>).</p>`
- XPath: `#contact-message-site-wide-form > p`

**Failure 4:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item bix-grid__item--full">`
- XPath: `.bix-grid__item--full.bix-grid__item:nth-child(1)`

**Failure 5:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item">`
- XPath: `.bix-grid__item:nth-child(2)`

*... and 5 more failures for this rule*

### https://bixal.com/blog/uswds-training-sneak-peek-with-james-mejia-and-charlie-mahoney

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Document should not have more than one banner landmark
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-title-prefix">Contact</div>`
- XPath: `.bix-title-prefix`

**Failure 2:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<h2 class="bix-section__title">       How can we help?<br>       We'd love to hear from you.     </h2>`
- XPath: `h2`

**Failure 3:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<p>Required fields are marked with an asterisk&nbsp;(<abbr title="required" class="bix-hint bix-hint--required">*</abbr>).</p>`
- XPath: `#contact-message-site-wide-form > p`

**Failure 4:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item bix-grid__item--full">`
- XPath: `.bix-grid__item--full.bix-grid__item:nth-child(1)`

**Failure 5:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item">`
- XPath: `.bix-grid__item:nth-child(2)`

*... and 5 more failures for this rule*

### https://bixal.com/about/meron-hagos

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Document should not have more than one banner landmark
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-title-prefix">Contact</div>`
- XPath: `.bix-title-prefix`

**Failure 2:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<h2 class="bix-section__title">       How can we help?<br>       We'd love to hear from you.     </h2>`
- XPath: `.bix-section__title`

**Failure 3:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<p>Required fields are marked with an asterisk&nbsp;(<abbr title="required" class="bix-hint bix-hint--required">*</abbr>).</p>`
- XPath: `#contact-message-site-wide-form > p`

**Failure 4:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item bix-grid__item--full">`
- XPath: `.bix-grid__item--full.bix-grid__item:nth-child(1)`

**Failure 5:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item">`
- XPath: `.bix-grid__item:nth-child(2)`

*... and 5 more failures for this rule*

### https://bixal.com/about/ernest-cain

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Document should not have more than one banner landmark
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-title-prefix">Contact</div>`
- XPath: `.bix-title-prefix`

**Failure 2:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<h2 class="bix-section__title">       How can we help?<br>       We'd love to hear from you.     </h2>`
- XPath: `.bix-section__title`

**Failure 3:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<p>Required fields are marked with an asterisk&nbsp;(<abbr title="required" class="bix-hint bix-hint--required">*</abbr>).</p>`
- XPath: `#contact-message-site-wide-form > p`

**Failure 4:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item bix-grid__item--full">`
- XPath: `.bix-grid__item--full.bix-grid__item:nth-child(1)`

**Failure 5:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item">`
- XPath: `.bix-grid__item:nth-child(2)`

*... and 5 more failures for this rule*

### https://bixal.com/about/lyssa-prince

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Document should not have more than one banner landmark
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-title-prefix">Contact</div>`
- XPath: `.bix-title-prefix`

**Failure 2:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<h2 class="bix-section__title">       How can we help?<br>       We'd love to hear from you.     </h2>`
- XPath: `.bix-section__title`

**Failure 3:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<p>Required fields are marked with an asterisk&nbsp;(<abbr title="required" class="bix-hint bix-hint--required">*</abbr>).</p>`
- XPath: `#contact-message-site-wide-form > p`

**Failure 4:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item bix-grid__item--full">`
- XPath: `.bix-grid__item--full.bix-grid__item:nth-child(1)`

**Failure 5:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item">`
- XPath: `.bix-grid__item:nth-child(2)`

*... and 5 more failures for this rule*

### https://bixal.com/about/ray-estrada

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Document should not have more than one banner landmark
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-title-prefix">Contact</div>`
- XPath: `.bix-title-prefix`

**Failure 2:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<h2 class="bix-section__title">       How can we help?<br>       We'd love to hear from you.     </h2>`
- XPath: `.bix-section__title`

**Failure 3:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<p>Required fields are marked with an asterisk&nbsp;(<abbr title="required" class="bix-hint bix-hint--required">*</abbr>).</p>`
- XPath: `#contact-message-site-wide-form > p`

**Failure 4:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item bix-grid__item--full">`
- XPath: `.bix-grid__item--full.bix-grid__item:nth-child(1)`

**Failure 5:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item">`
- XPath: `.bix-grid__item:nth-child(2)`

*... and 5 more failures for this rule*

### https://bixal.com/about/rachelle-johnsson-chiang

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Document should not have more than one banner landmark
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-title-prefix">Contact</div>`
- XPath: `.bix-title-prefix`

**Failure 2:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<h2 class="bix-section__title">       How can we help?<br>       We'd love to hear from you.     </h2>`
- XPath: `.bix-section__title`

**Failure 3:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<p>Required fields are marked with an asterisk&nbsp;(<abbr title="required" class="bix-hint bix-hint--required">*</abbr>).</p>`
- XPath: `#contact-message-site-wide-form > p`

**Failure 4:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item bix-grid__item--full">`
- XPath: `.bix-grid__item--full.bix-grid__item:nth-child(1)`

**Failure 5:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item">`
- XPath: `.bix-grid__item:nth-child(2)`

*... and 5 more failures for this rule*

### https://bixal.com/blog/global-communication-training

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Document should not have more than one banner landmark
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-title-prefix">Contact</div>`
- XPath: `.bix-title-prefix`

**Failure 2:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<h2 class="bix-section__title">       How can we help?<br>       We'd love to hear from you.     </h2>`
- XPath: `.bix-section__title`

**Failure 3:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<p>Required fields are marked with an asterisk&nbsp;(<abbr title="required" class="bix-hint bix-hint--required">*</abbr>).</p>`
- XPath: `#contact-message-site-wide-form > p`

**Failure 4:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item bix-grid__item--full">`
- XPath: `.bix-grid__item--full.bix-grid__item:nth-child(1)`

**Failure 5:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item">`
- XPath: `.bix-grid__item:nth-child(2)`

*... and 5 more failures for this rule*

### https://bixal.com/about/dj-neace

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Document should not have more than one banner landmark
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-title-prefix">Contact</div>`
- XPath: `.bix-title-prefix`

**Failure 2:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<h2 class="bix-section__title">       How can we help?<br>       We'd love to hear from you.     </h2>`
- XPath: `.bix-section__title`

**Failure 3:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<p>Required fields are marked with an asterisk&nbsp;(<abbr title="required" class="bix-hint bix-hint--required">*</abbr>).</p>`
- XPath: `#contact-message-site-wide-form > p`

**Failure 4:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item bix-grid__item--full">`
- XPath: `.bix-grid__item--full.bix-grid__item:nth-child(1)`

**Failure 5:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item">`
- XPath: `.bix-grid__item:nth-child(2)`

*... and 5 more failures for this rule*

### https://bixal.com/about/james-mejia

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Document should not have more than one banner landmark
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-title-prefix">Contact</div>`
- XPath: `.bix-title-prefix`

**Failure 2:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<h2 class="bix-section__title">       How can we help?<br>       We'd love to hear from you.     </h2>`
- XPath: `.bix-section__title`

**Failure 3:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<p>Required fields are marked with an asterisk&nbsp;(<abbr title="required" class="bix-hint bix-hint--required">*</abbr>).</p>`
- XPath: `#contact-message-site-wide-form > p`

**Failure 4:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item bix-grid__item--full">`
- XPath: `.bix-grid__item--full.bix-grid__item:nth-child(1)`

**Failure 5:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item">`
- XPath: `.bix-grid__item:nth-child(2)`

*... and 5 more failures for this rule*

### https://bixal.com/blog/influencing-ux-stakeholder-values-6-ways-to-convey-the-significance-of-user-research

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Heading levels should only increase by one
- HTML: `<h3><strong>Understand the “why” behind the push-back</strong></h3>`
- XPath: `h3:nth-child(10)`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Document should not have more than one banner landmark
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-title-prefix">Contact</div>`
- XPath: `.bix-title-prefix`

**Failure 2:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<h2 class="bix-section__title">       How can we help?<br>       We'd love to hear from you.     </h2>`
- XPath: `h2`

**Failure 3:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<p>Required fields are marked with an asterisk&nbsp;(<abbr title="required" class="bix-hint bix-hint--required">*</abbr>).</p>`
- XPath: `#contact-message-site-wide-form > p`

**Failure 4:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item bix-grid__item--full">`
- XPath: `.bix-grid__item--full.bix-grid__item:nth-child(1)`

**Failure 5:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item">`
- XPath: `.bix-grid__item:nth-child(2)`

*... and 5 more failures for this rule*

### https://bixal.com/about/karen-strother

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Document should not have more than one banner landmark
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-title-prefix">Contact</div>`
- XPath: `.bix-title-prefix`

**Failure 2:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<h2 class="bix-section__title">       How can we help?<br>       We'd love to hear from you.     </h2>`
- XPath: `.bix-section__title`

**Failure 3:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<p>Required fields are marked with an asterisk&nbsp;(<abbr title="required" class="bix-hint bix-hint--required">*</abbr>).</p>`
- XPath: `#contact-message-site-wide-form > p`

**Failure 4:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item bix-grid__item--full">`
- XPath: `.bix-grid__item--full.bix-grid__item:nth-child(1)`

**Failure 5:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item">`
- XPath: `.bix-grid__item:nth-child(2)`

*... and 5 more failures for this rule*

### https://bixal.com/about/ivonne-carrillo-dom%C3%ADnguez

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Document should not have more than one banner landmark
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-title-prefix">Contact</div>`
- XPath: `.bix-title-prefix`

**Failure 2:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<h2 class="bix-section__title">       How can we help?<br>       We'd love to hear from you.     </h2>`
- XPath: `.bix-section__title`

**Failure 3:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<p>Required fields are marked with an asterisk&nbsp;(<abbr title="required" class="bix-hint bix-hint--required">*</abbr>).</p>`
- XPath: `#contact-message-site-wide-form > p`

**Failure 4:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item bix-grid__item--full">`
- XPath: `.bix-grid__item--full.bix-grid__item:nth-child(1)`

**Failure 5:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item">`
- XPath: `.bix-grid__item:nth-child(2)`

*... and 5 more failures for this rule*

### https://bixal.com/about/michael-riordan

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Document should not have more than one banner landmark
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-title-prefix">Contact</div>`
- XPath: `.bix-title-prefix`

**Failure 2:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<h2 class="bix-section__title">       How can we help?<br>       We'd love to hear from you.     </h2>`
- XPath: `.bix-section__title`

**Failure 3:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<p>Required fields are marked with an asterisk&nbsp;(<abbr title="required" class="bix-hint bix-hint--required">*</abbr>).</p>`
- XPath: `#contact-message-site-wide-form > p`

**Failure 4:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item bix-grid__item--full">`
- XPath: `.bix-grid__item--full.bix-grid__item:nth-child(1)`

**Failure 5:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item">`
- XPath: `.bix-grid__item:nth-child(2)`

*... and 5 more failures for this rule*

### https://bixal.com/blog/bixal-vaultes-secure-prime-position-va-spruce-contract-vehicle-avb-digital-ii-jv

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Document should not have more than one banner landmark
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-title-prefix">Contact</div>`
- XPath: `.bix-title-prefix`

**Failure 2:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<h2 class="bix-section__title">       How can we help?<br>       We'd love to hear from you.     </h2>`
- XPath: `h2`

**Failure 3:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<p>Required fields are marked with an asterisk&nbsp;(<abbr title="required" class="bix-hint bix-hint--required">*</abbr>).</p>`
- XPath: `#contact-message-site-wide-form > p`

**Failure 4:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item bix-grid__item--full">`
- XPath: `.bix-grid__item--full.bix-grid__item:nth-child(1)`

**Failure 5:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item">`
- XPath: `.bix-grid__item:nth-child(2)`

*... and 5 more failures for this rule*

### https://bixal.com/about/ponja-ocumarez

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Document should not have more than one banner landmark
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-title-prefix">Contact</div>`
- XPath: `.bix-title-prefix`

**Failure 2:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<h2 class="bix-section__title">       How can we help?<br>       We'd love to hear from you.     </h2>`
- XPath: `.bix-section__title`

**Failure 3:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<p>Required fields are marked with an asterisk&nbsp;(<abbr title="required" class="bix-hint bix-hint--required">*</abbr>).</p>`
- XPath: `#contact-message-site-wide-form > p`

**Failure 4:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item bix-grid__item--full">`
- XPath: `.bix-grid__item--full.bix-grid__item:nth-child(1)`

**Failure 5:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item">`
- XPath: `.bix-grid__item:nth-child(2)`

*... and 5 more failures for this rule*

### https://bixal.com/about/lisa-tully

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Document should not have more than one banner landmark
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-title-prefix">Contact</div>`
- XPath: `.bix-title-prefix`

**Failure 2:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<h2 class="bix-section__title">       How can we help?<br>       We'd love to hear from you.     </h2>`
- XPath: `.bix-section__title`

**Failure 3:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<p>Required fields are marked with an asterisk&nbsp;(<abbr title="required" class="bix-hint bix-hint--required">*</abbr>).</p>`
- XPath: `#contact-message-site-wide-form > p`

**Failure 4:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item bix-grid__item--full">`
- XPath: `.bix-grid__item--full.bix-grid__item:nth-child(1)`

**Failure 5:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item">`
- XPath: `.bix-grid__item:nth-child(2)`

*... and 5 more failures for this rule*

### https://bixal.com/about/shawn-martell

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Document should not have more than one banner landmark
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-title-prefix">Contact</div>`
- XPath: `.bix-title-prefix`

**Failure 2:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<h2 class="bix-section__title">       How can we help?<br>       We'd love to hear from you.     </h2>`
- XPath: `.bix-section__title`

**Failure 3:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<p>Required fields are marked with an asterisk&nbsp;(<abbr title="required" class="bix-hint bix-hint--required">*</abbr>).</p>`
- XPath: `#contact-message-site-wide-form > p`

**Failure 4:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item bix-grid__item--full">`
- XPath: `.bix-grid__item--full.bix-grid__item:nth-child(1)`

**Failure 5:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item">`
- XPath: `.bix-grid__item:nth-child(2)`

*... and 5 more failures for this rule*

### https://bixal.com/about/kim-kiefer

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Document should not have more than one banner landmark
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-title-prefix">Contact</div>`
- XPath: `.bix-title-prefix`

**Failure 2:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<h2 class="bix-section__title">       How can we help?<br>       We'd love to hear from you.     </h2>`
- XPath: `.bix-section__title`

**Failure 3:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<p>Required fields are marked with an asterisk&nbsp;(<abbr title="required" class="bix-hint bix-hint--required">*</abbr>).</p>`
- XPath: `#contact-message-site-wide-form > p`

**Failure 4:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item bix-grid__item--full">`
- XPath: `.bix-grid__item--full.bix-grid__item:nth-child(1)`

**Failure 5:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item">`
- XPath: `.bix-grid__item:nth-child(2)`

*... and 5 more failures for this rule*

### https://bixal.com/blog/data-maturity-ai-in-international-development

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Document should not have more than one banner landmark
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-title-prefix">Contact</div>`
- XPath: `.bix-title-prefix`

**Failure 2:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<h2 class="bix-section__title">       How can we help?<br>       We'd love to hear from you.     </h2>`
- XPath: `.bix-section__title`

**Failure 3:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<p>Required fields are marked with an asterisk&nbsp;(<abbr title="required" class="bix-hint bix-hint--required">*</abbr>).</p>`
- XPath: `#contact-message-site-wide-form > p`

**Failure 4:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item bix-grid__item--full">`
- XPath: `.bix-grid__item--full.bix-grid__item:nth-child(1)`

**Failure 5:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item">`
- XPath: `.bix-grid__item:nth-child(2)`

*... and 5 more failures for this rule*

### https://bixal.com/blog/why-federal-change-efforts-fail-and-how-strategic-communication-fixes-it

#### Rule: [image-redundant-alt](https://dequeuniversity.com/rules/axe/4.11/image-redundant-alt?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-03-26
- Message: Alternative text of images should not be repeated as text
- HTML: `<img src="/sites/default/files..." data-entity-uuid="352b6468-9725-4694-9..." data-entity-type="file" alt="Real transformation ..." width="405" height="319" class="align-right">`
- XPath: `.align-right`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Document should not have more than one banner landmark
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-title-prefix">Contact</div>`
- XPath: `.bix-title-prefix`

**Failure 2:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<h2 class="bix-section__title">       How can we help?<br>       We'd love to hear from you.     </h2>`
- XPath: `.bix-section__title`

**Failure 3:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<p>Required fields are marked with an asterisk&nbsp;(<abbr title="required" class="bix-hint bix-hint--required">*</abbr>).</p>`
- XPath: `#contact-message-site-wide-form > p`

**Failure 4:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item bix-grid__item--full">`
- XPath: `.bix-grid__item--full.bix-grid__item:nth-child(1)`

**Failure 5:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item">`
- XPath: `.bix-grid__item:nth-child(2)`

*... and 5 more failures for this rule*

### https://bixal.com/blog/why-structured-content-cornerstone-your-agencys-ai-content-strategy

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Document should not have more than one banner landmark
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-title-prefix">Contact</div>`
- XPath: `.bix-title-prefix`

**Failure 2:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<h2 class="bix-section__title">       How can we help?<br>       We'd love to hear from you.     </h2>`
- XPath: `.bix-section__title`

**Failure 3:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<p>Required fields are marked with an asterisk&nbsp;(<abbr title="required" class="bix-hint bix-hint--required">*</abbr>).</p>`
- XPath: `#contact-message-site-wide-form > p`

**Failure 4:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item bix-grid__item--full">`
- XPath: `.bix-grid__item--full.bix-grid__item:nth-child(1)`

**Failure 5:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item">`
- XPath: `.bix-grid__item:nth-child(2)`

*... and 5 more failures for this rule*

### https://bixal.com/about/davide-fiocchi

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Document should not have more than one banner landmark
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-title-prefix">Contact</div>`
- XPath: `.bix-title-prefix`

**Failure 2:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<h2 class="bix-section__title">       How can we help?<br>       We'd love to hear from you.     </h2>`
- XPath: `.bix-section__title`

**Failure 3:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<p>Required fields are marked with an asterisk&nbsp;(<abbr title="required" class="bix-hint bix-hint--required">*</abbr>).</p>`
- XPath: `#contact-message-site-wide-form > p`

**Failure 4:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item bix-grid__item--full">`
- XPath: `.bix-grid__item--full.bix-grid__item:nth-child(1)`

**Failure 5:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item">`
- XPath: `.bix-grid__item:nth-child(2)`

*... and 5 more failures for this rule*

### https://bixal.com/about/gerardo-maldonado

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Document should not have more than one banner landmark
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-title-prefix">Contact</div>`
- XPath: `.bix-title-prefix`

**Failure 2:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<h2 class="bix-section__title">       How can we help?<br>       We'd love to hear from you.     </h2>`
- XPath: `.bix-section__title`

**Failure 3:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<p>Required fields are marked with an asterisk&nbsp;(<abbr title="required" class="bix-hint bix-hint--required">*</abbr>).</p>`
- XPath: `#contact-message-site-wide-form > p`

**Failure 4:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item bix-grid__item--full">`
- XPath: `.bix-grid__item--full.bix-grid__item:nth-child(1)`

**Failure 5:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item">`
- XPath: `.bix-grid__item:nth-child(2)`

*... and 5 more failures for this rule*

### https://bixal.com/blog/bixal-named-trusted-drupal-certified-partner-drupal-association

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Document should not have more than one banner landmark
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-title-prefix">Contact</div>`
- XPath: `.bix-title-prefix`

**Failure 2:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<h2 class="bix-section__title">       How can we help?<br>       We'd love to hear from you.     </h2>`
- XPath: `h2`

**Failure 3:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<p>Required fields are marked with an asterisk&nbsp;(<abbr title="required" class="bix-hint bix-hint--required">*</abbr>).</p>`
- XPath: `#contact-message-site-wide-form > p`

**Failure 4:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item bix-grid__item--full">`
- XPath: `.bix-grid__item--full.bix-grid__item:nth-child(1)`

**Failure 5:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item">`
- XPath: `.bix-grid__item:nth-child(2)`

*... and 5 more failures for this rule*

### https://bixal.com/about/lizette-lewis

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Document should not have more than one banner landmark
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-title-prefix">Contact</div>`
- XPath: `.bix-title-prefix`

**Failure 2:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<h2 class="bix-section__title">       How can we help?<br>       We'd love to hear from you.     </h2>`
- XPath: `.bix-section__title`

**Failure 3:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<p>Required fields are marked with an asterisk&nbsp;(<abbr title="required" class="bix-hint bix-hint--required">*</abbr>).</p>`
- XPath: `#contact-message-site-wide-form > p`

**Failure 4:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item bix-grid__item--full">`
- XPath: `.bix-grid__item--full.bix-grid__item:nth-child(1)`

**Failure 5:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item">`
- XPath: `.bix-grid__item:nth-child(2)`

*... and 5 more failures for this rule*

### https://bixal.com/blog/harnessing-artificial-intelligence-knowledge-management

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Document should not have more than one banner landmark
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-title-prefix">Contact</div>`
- XPath: `.bix-title-prefix`

**Failure 2:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<h2 class="bix-section__title">       How can we help?<br>       We'd love to hear from you.     </h2>`
- XPath: `.bix-section__title`

**Failure 3:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<p>Required fields are marked with an asterisk&nbsp;(<abbr title="required" class="bix-hint bix-hint--required">*</abbr>).</p>`
- XPath: `#contact-message-site-wide-form > p`

**Failure 4:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item bix-grid__item--full">`
- XPath: `.bix-grid__item--full.bix-grid__item:nth-child(1)`

**Failure 5:**
- First identified: 2026-03-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item">`
- XPath: `.bix-grid__item:nth-child(2)`

*... and 5 more failures for this rule*

