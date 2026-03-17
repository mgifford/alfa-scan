# Scan Report: CivicActions.com

- Issue: https://github.com/mgifford/open-scans/issues/189
- Submitted by: mgifford
- Scanned at: 2026-03-17T16:18:20.871Z
- Engines used: AXE, EQUALACCESS
- Scan duration: 3.7 minutes
- Total URLs submitted: 45
- Accepted public URLs: 45
- Rejected URLs: 0
- 🎨 **Accessibility personalization (CSS media queries):**
  - 🌙 Dark mode: None of the scanned URLs support `prefers-color-scheme: dark`
  - ⚡ Reduced motion: None of the scanned URLs support `prefers-reduced-motion: reduce`
  - 🔍 High contrast: None of the scanned URLs support `prefers-contrast: more`
  - 🖥️ Forced colors: None of the scanned URLs support `forced-colors: active`
  - 🪟 Reduced transparency: None of the scanned URLs support `prefers-reduced-transparency: reduce`
- ALFA outcomes: 0 passed, 0 failed, 0 cantTell, 0 inapplicable
- axe outcomes: 23513 passed, 12 failed, 117 cantTell, 2253 inapplicable
- Equal Access outcomes: 76966 passed, 1756 failed (925 unique, 831 duplicate), 1186 cantTell, 0 inapplicable
- AccessLint outcomes: 0 passed, 0 failed (0 unique, 0 duplicate), 0 cantTell, 0 inapplicable
- QualWeb outcomes: 0 passed, 0 failed, 0 cantTell, 0 inapplicable
- Duplicate findings caught by later scanners: 831

## 🎯 Pages with Most Errors

Focus your efforts on these pages to make the biggest impact (combined scanner unique failures):

| Page | axe Unique | Equal Access Unique | Total Unique | Page Title |
|---|---:|---:|---:|---|
| [View Page](https://civicactions.com/services/ditap/) | 0 | 42 | **42** | Digital IT Acquisition Professional (DITAP) certification program \| CivicActions |
| [View Page](https://civicactions.com/case-studies/) | 0 | 28 | **28** | Case Studies \| CivicActions |
| [View Page](https://civicactions.com/services/) | 3 | 24 | **27** | Services \| CivicActions |
| [View Page](https://civicactions.com/) | 0 | 26 | **26** | Home \| CivicActions |
| [View Page](https://civicactions.com/case-studies/va-cms-modernization/) | 1 | 24 | **25** | Helping Veterans access care and benefits online \| CivicActions |
| [View Page](https://civicactions.com/case-studies/va-alt-text/) | 1 | 23 | **24** | Better Accessibility Through Alternative Text Validation \| CivicActions |
| [View Page](https://civicactions.com/case-studies/globalnet-platform-support/) | 1 | 22 | **23** | A global professional networking platform for security practitioners \| CivicActions |
| [View Page](https://civicactions.com/careers/) | 0 | 23 | **23** | Careers \| CivicActions |
| [View Page](https://civicactions.com/case-studies/cms-design-challenge-mvp/) | 1 | 22 | **23** | Building an MVP for Medicare.gov with human-centered design \| CivicActions |
| [View Page](https://civicactions.com/case-studies/nsf-website-redesign/) | 0 | 23 | **23** | A smoother path to scientific research and discovery \| CivicActions |

## 🔧 Most Common Issues (ALFA)

These ALFA accessibility issues appear most frequently across your pages:

✅ No ALFA failed rules detected!

## 🔧 Most Common Issues (axe)

These axe accessibility issues appear most frequently across your pages:

| Rule | Pages Affected | Documentation |
|---|---:|---|
| color-contrast | **5** of 45 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/color-contrast) |
| heading-order | **3** of 45 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/heading-order) |
| page-has-heading-one | **1** of 45 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/page-has-heading-one) |
| empty-heading | **1** of 45 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/empty-heading) |

> 💡 **Tip**: Click on the rule documentation links to learn how to fix each issue. Consider fixing the most common issues first for maximum impact.

> 🤖 **Future Enhancement**: This report will soon include AI-powered fix suggestions for authenticated GitHub users (opt-in only, no auto-run AI).

## 🔍 Cross-Page Patterns: Common HTML Issues

These HTML patterns cause the same accessibility errors across multiple pages. **Fix the pattern once in your codebase to fix it everywhere!**

### 🎯 Top Patterns to Fix (Highest Impact)

#### Pattern 1: Affects 2 page(s) - 2 occurrence(s)

**Scanner**: axe
**Rule**: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate
**Issue**: Heading levels should only increase by one

**HTML Pattern**:
```html
<div class="HoXoMd D1wxyf RjsPE" dir="auto" role="heading" aria-level="3"><span class="M7eMe">Email</span><span class="vnumgf" id="i4" aria-label="Required question"> *</span></div>
```

**XPath** (use in browser DevTools):
```
iframe
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('iframe')`
5. The element will be highlighted

**Affected Pages**:
- https://civicactions.com/services/ditap/register/
- https://civicactions.com/feedback/

---

> 💡 **Pro Tip**: These patterns likely come from shared components or templates in your codebase. Fix them in the component/template source, and the fix will propagate to all affected pages.

## 📊 Detailed Results

Complete scan results for all tested pages:

| Submitted URL | Final URL | Status | HTTP | Redirected | Time (ms) | axe Unique | ALFA Unique | Equal Access Unique | AccessLint Unique | Duplicates | Notes |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|
| https://civicactions.com/ | https://civicactions.com/ | OK | 200 | no | 8491 | 0 | 0 | 26 | 0 | 7 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_hidden_nontabbable, aria_role_redundant, element_attribute_deprecated, element_id_unique, element_tabbable_unobscured, element_tabbable_visible, heading_markup_misuse, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_contrast_sufficient |
| https://civicactions.com/accessibility-statement/ | https://civicactions.com/accessibility-statement/ | OK | 200 | no | 4709 | 0 | 0 | 16 | 0 | 6 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_hidden_nontabbable, element_attribute_deprecated, element_id_unique, element_tabbable_unobscured, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled |
| https://civicactions.com/press/2022-04-21-civicactions-announces-Ryerson-partnership-digital-accessibility/ | https://civicactions.com/press/2022-04-21-civicactions-announces-Ryerson-partnership-digital-accessibility/ | OK | 200 | no | 4518 | 0 | 0 | 20 | 0 | 7 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_hidden_nontabbable, element_attribute_deprecated, element_id_unique, element_tabbable_unobscured, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled, text_quoted_correctly |
| https://civicactions.com/services/ | https://civicactions.com/services/ | OK | 200 | no | 5138 | 3 | 0 | 24 | 0 | 16 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_hidden_nontabbable, element_attribute_deprecated, element_id_unique, element_tabbable_unobscured, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled, text_block_heading, text_contrast_sufficient |
| https://civicactions.com/services2/ | https://civicactions.com/services2/ | OK | 200 | no | 4337 | 1 | 0 | 16 | 0 | 6 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: page-has-heading-one |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_hidden_nontabbable, element_attribute_deprecated, element_id_unique, element_tabbable_unobscured, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_sensory_misuse |
| https://civicactions.com/case-studies/cms-web-experience-services/ | https://civicactions.com/case-studies/cms-web-experience-services/ | OK | 200 | no | 5065 | 0 | 0 | 22 | 0 | 30 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_hidden_nontabbable, aria_role_redundant, element_attribute_deprecated, element_id_unique, element_tabbable_unobscured, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_sensory_misuse |
| https://civicactions.com/contact/ | https://civicactions.com/contact/ | OK | 200 | no | 4820 | 0 | 0 | 21 | 0 | 6 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_hidden_nontabbable, element_attribute_deprecated, element_id_unique, element_tabbable_unobscured, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled |
| https://civicactions.com/press/2024-01-16-CivicActions-Announces-Impact-Report/ | https://civicactions.com/press/2024-01-16-CivicActions-Announces-Impact-Report/ | OK | 200 | no | 4521 | 0 | 0 | 19 | 0 | 6 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_hidden_nontabbable, element_attribute_deprecated, element_id_unique, element_tabbable_unobscured, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled, text_quoted_correctly |
| https://civicactions.com/services/ditap/ | https://civicactions.com/services/ditap/ | OK | 200 | no | 5461 | 0 | 0 | 42 | 0 | 9 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_descendant_valid, aria_hidden_nontabbable, aria_keyboard_handler_exists, element_attribute_deprecated, element_id_unique, element_tabbable_unobscured, heading_markup_misuse, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled, text_quoted_correctly, text_sensory_misuse |
| https://civicactions.com/services/ditap/register/ | https://civicactions.com/services/ditap/register/ | OK | 200 | no | 7582 | 1 | 0 | 10 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: heading-order |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, element_attribute_deprecated, element_tabbable_unobscured, frame_src_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled, text_sensory_misuse |
| https://civicactions.com/case-studies/globalnet-platform-support/ | https://civicactions.com/case-studies/globalnet-platform-support/ | OK | 200 | no | 5128 | 1 | 0 | 22 | 0 | 18 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_hidden_nontabbable, aria_role_redundant, element_attribute_deprecated, element_id_unique, element_tabbable_unobscured, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, text_sensory_misuse |
| https://civicactions.com/careers/ | https://civicactions.com/careers/ | OK | 200 | no | 5816 | 0 | 0 | 23 | 0 | 7 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_hidden_nontabbable, element_attribute_deprecated, element_id_unique, element_tabbable_unobscured, frame_src_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled, text_contrast_sufficient |
| https://civicactions.com/case-studies/ | https://civicactions.com/case-studies/ | OK | 200 | no | 5172 | 0 | 0 | 28 | 0 | 6 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_hidden_nontabbable, element_attribute_deprecated, element_id_unique, element_tabbable_unobscured, input_checkboxes_grouped, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled |
| https://civicactions.com/contracting/ | https://civicactions.com/contracting/ | OK | 200 | no | 4870 | 0 | 0 | 19 | 0 | 6 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_hidden_nontabbable, element_attribute_deprecated, element_id_unique, element_tabbable_unobscured, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled, text_block_heading |
| https://civicactions.com/feedback/ | https://civicactions.com/feedback/ | OK | 200 | no | 5106 | 1 | 0 | 20 | 0 | 6 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: heading-order |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_hidden_nontabbable, element_attribute_deprecated, element_id_unique, element_tabbable_unobscured, frame_src_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled |
| https://civicactions.com/licensing/ | https://civicactions.com/licensing/ | OK | 200 | no | 4390 | 0 | 0 | 18 | 0 | 6 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_hidden_nontabbable, element_attribute_deprecated, element_id_unique, element_tabbable_unobscured, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled |
| https://civicactions.com/press/ | https://civicactions.com/press/ | OK | 200 | no | 4590 | 0 | 0 | 20 | 0 | 6 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_hidden_nontabbable, element_attribute_deprecated, element_id_unique, element_tabbable_unobscured, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled, text_sensory_misuse |
| https://civicactions.com/privacy/ | https://civicactions.com/privacy/ | OK | 200 | no | 4588 | 1 | 0 | 19 | 0 | 6 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: heading-order |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_hidden_nontabbable, element_attribute_deprecated, element_id_unique, element_tabbable_unobscured, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled, text_sensory_misuse |
| https://civicactions.com/styles/ | https://civicactions.com/styles/ | OK | 200 | no | 4297 | 0 | 0 | 15 | 0 | 6 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_hidden_nontabbable, element_attribute_deprecated, element_id_unique, element_tabbable_unobscured, style_color_misuse, style_focus_visible, style_highcontrast_visible |
| https://civicactions.com/sustainability/ | https://civicactions.com/sustainability/ | OK | 200 | no | 4562 | 0 | 0 | 19 | 0 | 6 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_hidden_nontabbable, aria_role_redundant, element_attribute_deprecated, element_id_unique, element_tabbable_unobscured, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled, text_sensory_misuse |
| https://civicactions.com/team/ | https://civicactions.com/team/ | OK | 200 | no | 8426 | 0 | 0 | 21 | 0 | 366 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_hidden_nontabbable, aria_role_redundant, element_attribute_deprecated, element_id_unique, element_tabbable_unobscured, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled, text_block_heading |
| https://civicactions.com/case-studies/cms-design-challenge-mvp/ | https://civicactions.com/case-studies/cms-design-challenge-mvp/ | OK | 200 | no | 4684 | 1 | 0 | 22 | 0 | 17 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_hidden_nontabbable, element_attribute_deprecated, element_id_unique, element_tabbable_unobscured, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, text_quoted_correctly, text_sensory_misuse |
| https://civicactions.com/case-studies/cybergeek/ | https://civicactions.com/case-studies/cybergeek/ | OK | 200 | no | 4862 | 0 | 0 | 22 | 0 | 17 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_hidden_nontabbable, aria_role_redundant, element_attribute_deprecated, element_id_unique, element_tabbable_unobscured, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_sensory_misuse |
| https://civicactions.com/case-studies/dept-of-education-system-lifecycle-development-management/ | https://civicactions.com/case-studies/dept-of-education-system-lifecycle-development-management/ | OK | 200 | no | 5105 | 0 | 0 | 21 | 0 | 23 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_hidden_nontabbable, aria_role_redundant, element_attribute_deprecated, element_id_unique, element_tabbable_unobscured, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_sensory_misuse |
| https://civicactions.com/case-studies/Drupal-10/ | https://civicactions.com/case-studies/Drupal-10/ | OK | 200 | no | 5028 | 0 | 0 | 20 | 0 | 23 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_hidden_nontabbable, aria_role_redundant, element_attribute_deprecated, element_id_unique, element_tabbable_unobscured, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading |
| https://civicactions.com/case-studies/fcc-website-modernization/ | https://civicactions.com/case-studies/fcc-website-modernization/ | OK | 200 | no | 4741 | 0 | 0 | 20 | 0 | 16 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_hidden_nontabbable, element_attribute_deprecated, element_id_unique, element_tabbable_unobscured, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_sensory_misuse |
| https://civicactions.com/case-studies/georgia-workforce-open-data/ | https://civicactions.com/case-studies/georgia-workforce-open-data/ | OK | 200 | no | 4844 | 0 | 0 | 20 | 0 | 17 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_hidden_nontabbable, element_attribute_deprecated, element_id_unique, element_tabbable_unobscured, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_sensory_misuse |
| https://civicactions.com/case-studies/nsf-website-redesign/ | https://civicactions.com/case-studies/nsf-website-redesign/ | OK | 200 | no | 5352 | 0 | 0 | 23 | 0 | 32 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_hidden_nontabbable, aria_role_redundant, element_attribute_deprecated, element_id_unique, element_tabbable_unobscured, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_sensory_misuse |
| https://civicactions.com/press/2/ | https://civicactions.com/press/2/ | OK | 200 | no | 4477 | 0 | 0 | 21 | 0 | 6 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_hidden_nontabbable, element_attribute_deprecated, element_id_unique, element_tabbable_unobscured, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled, text_sensory_misuse |
| https://civicactions.com/press/2020-03-02-civicactions-wins-cms-contract/ | https://civicactions.com/press/2020-03-02-civicactions-wins-cms-contract/ | OK | 200 | no | 4320 | 0 | 0 | 19 | 0 | 6 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_hidden_nontabbable, element_attribute_deprecated, element_id_unique, element_tabbable_unobscured, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled, text_sensory_misuse |
| https://civicactions.com/press/2020-08-14-civicactions-certified-to-deliver-ditap/ | https://civicactions.com/press/2020-08-14-civicactions-certified-to-deliver-ditap/ | OK | 200 | no | 4353 | 0 | 0 | 18 | 0 | 6 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_hidden_nontabbable, element_attribute_deprecated, element_id_unique, element_tabbable_unobscured, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled |
| https://civicactions.com/press/2020-11-09-civicactions-acquires-openconcept/ | https://civicactions.com/press/2020-11-09-civicactions-acquires-openconcept/ | OK | 200 | no | 4373 | 0 | 0 | 19 | 0 | 6 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_hidden_nontabbable, element_attribute_deprecated, element_id_unique, element_tabbable_unobscured, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled, text_block_heading |
| https://civicactions.com/press/2021-05-03-civicactions-wins-nsf-recompete/ | https://civicactions.com/press/2021-05-03-civicactions-wins-nsf-recompete/ | OK | 200 | no | 4356 | 0 | 0 | 18 | 0 | 6 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_hidden_nontabbable, element_attribute_deprecated, element_id_unique, element_tabbable_unobscured, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled |
| https://civicactions.com/press/2021-05-11-civicactions-wins-department-of-ed-recompete/ | https://civicactions.com/press/2021-05-11-civicactions-wins-department-of-ed-recompete/ | OK | 200 | no | 4335 | 0 | 0 | 18 | 0 | 6 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_hidden_nontabbable, element_attribute_deprecated, element_id_unique, element_tabbable_unobscured, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled |
| https://civicactions.com/press/2021-07-08-gsa-engages-civicactions-to-modernize-vpat/ | https://civicactions.com/press/2021-07-08-gsa-engages-civicactions-to-modernize-vpat/ | OK | 200 | no | 4420 | 0 | 0 | 18 | 0 | 6 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_hidden_nontabbable, element_attribute_deprecated, element_id_unique, element_tabbable_unobscured, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled |
| https://civicactions.com/case-studies/nyc-metro-transit-digital-clocks/ | https://civicactions.com/case-studies/nyc-metro-transit-digital-clocks/ | OK | 200 | no | 4761 | 1 | 0 | 21 | 0 | 21 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_hidden_nontabbable, element_attribute_deprecated, element_id_unique, element_tabbable_unobscured, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, text_sensory_misuse |
| https://civicactions.com/press/2022-01-05-civicactions-named-govtech-100-top-government-technology-companies-list/ | https://civicactions.com/press/2022-01-05-civicactions-named-govtech-100-top-government-technology-companies-list/ | OK | 200 | no | 4350 | 0 | 0 | 21 | 0 | 6 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_hidden_nontabbable, element_attribute_deprecated, element_id_unique, element_tabbable_unobscured, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled, text_block_heading, text_sensory_misuse |
| https://civicactions.com/press/2021-07-19-civicactions-announces-va-ditap-graduation/ | https://civicactions.com/press/2021-07-19-civicactions-announces-va-ditap-graduation/ | OK | 200 | no | 4511 | 0 | 0 | 20 | 0 | 7 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_hidden_nontabbable, element_attribute_deprecated, element_id_unique, element_tabbable_unobscured, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled, text_sensory_misuse |
| https://civicactions.com/press/2024-07-09-CivicActions-Appoints-Mike-Gifford/ | https://civicactions.com/press/2024-07-09-CivicActions-Appoints-Mike-Gifford/ | OK | 200 | no | 4420 | 0 | 0 | 19 | 0 | 6 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_hidden_nontabbable, element_attribute_deprecated, element_id_unique, element_tabbable_unobscured, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled, text_quoted_correctly |
| https://civicactions.com/case-studies/va-alt-text/ | https://civicactions.com/case-studies/va-alt-text/ | OK | 200 | no | 4873 | 1 | 0 | 23 | 0 | 18 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: empty-heading |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_accessiblename_exists, aria_content_in_landmark, aria_hidden_nontabbable, aria_role_redundant, element_attribute_deprecated, element_id_unique, element_tabbable_unobscured, heading_content_exists, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_sensory_misuse |
| https://civicactions.com/case-studies/va-cms-modernization/ | https://civicactions.com/case-studies/va-cms-modernization/ | OK | 200 | no | 5125 | 1 | 0 | 24 | 0 | 18 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_hidden_nontabbable, aria_role_redundant, element_attribute_deprecated, element_id_unique, element_tabbable_unobscured, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, text_sensory_misuse |
| https://civicactions.com/press/2021-09-08-civicactions-announces-ditap-grads-across-federal-agencies/ | https://civicactions.com/press/2021-09-08-civicactions-announces-ditap-grads-across-federal-agencies/ | OK | 200 | no | 4419 | 0 | 0 | 20 | 0 | 7 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_hidden_nontabbable, element_attribute_deprecated, element_id_unique, element_tabbable_unobscured, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled, text_sensory_misuse |
| https://civicactions.com/press/3/ | https://civicactions.com/press/3/ | OK | 200 | no | 4407 | 0 | 0 | 19 | 0 | 6 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_hidden_nontabbable, element_attribute_deprecated, element_id_unique, element_tabbable_unobscured, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled |
| https://civicactions.com/case-studies/open-acr/ | https://civicactions.com/case-studies/open-acr/ | OK | 200 | no | 4690 | 0 | 0 | 20 | 0 | 17 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_hidden_nontabbable, aria_role_redundant, element_attribute_deprecated, element_id_unique, element_tabbable_unobscured, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading |
| https://civicactions.com/press/2024-01-05-CivicActions-Partners-with-aamdsif/ | https://civicactions.com/press/2024-01-05-CivicActions-Partners-with-aamdsif/ | OK | 200 | no | 4340 | 0 | 0 | 19 | 0 | 6 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_hidden_nontabbable, element_attribute_deprecated, element_id_unique, element_tabbable_unobscured, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled, text_quoted_correctly |

## Detailed Failure Information (ALFA)

## Detailed Failure Information (axe)

### https://civicactions.com/services/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a class="external-link" href="https://accessibility.civicactions.com/posts/heart-accessibility ">Accessibility consulting and training</a>`
- XPath: `li:nth-child(1) > .external-link`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/services/ditap/">DITAP program certification</a>`
- XPath: `li:nth-child(1) > a[href$="ditap/"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://distributedgov.com/" class="external-link">Telework consulting and training</a>`
- XPath: `a[href$="distributedgov.com/"]`

### https://civicactions.com/services2/

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Page should contain a level-one heading
- HTML: `<html lang="en">`
- XPath: `html`

### https://civicactions.com/services/ditap/register/

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<div class="HoXoMd D1wxyf RjsPE" dir="auto" role="heading" aria-level="3"><span class="M7eMe">Email</span><span class="vnumgf" id="i4" aria-label="Required question"> *</span></div>`
- XPath: `iframe`

### https://civicactions.com/case-studies/globalnet-platform-support/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://github.com/CivicActions/globalnet">entire codebase</a>`
- XPath: `.key-outcome:nth-child(6) > .body > p > a`

### https://civicactions.com/feedback/

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<div class="HoXoMd D1wxyf RjsPE" dir="auto" role="heading" aria-level="3"><span class="M7eMe">Email</span><span class="vnumgf" id="i4" aria-label="Required question"> *</span></div>`
- XPath: `iframe`

### https://civicactions.com/privacy/

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3>Have questions? Drop us a line.</h3>`
- XPath: `h3`

### https://civicactions.com/case-studies/cms-design-challenge-mvp/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.section508.gov/blog/accessibility-news-the-section-508-Update">Section 508</a>`
- XPath: `.key-outcome:nth-child(3) > .body > p > a`

### https://civicactions.com/case-studies/nyc-metro-transit-digital-clocks/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://reactjs.org/">React</a>`
- XPath: `a[href$="reactjs.org/"]`

### https://civicactions.com/case-studies/va-alt-text/

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: Headings should not be empty
- HTML: `<h2></h2>`
- XPath: `.first-approach > h2`

### https://civicactions.com/case-studies/va-cms-modernization/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.nextgov.com/it-modernization/2019/11/more-vets-are-taking-advantage-digital-services-through-new-vagov/161190/">resulted in more Veterans</a>`
- XPath: `.key-outcome:nth-child(6) > .body > p > a`

