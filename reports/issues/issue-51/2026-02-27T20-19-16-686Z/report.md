# Scan Report: California

- Issue: https://github.com/mgifford/alfa-scan/issues/51
- Submitted by: mgifford
- Scanned at: 2026-02-27T20:18:24.692Z
- Engines used: All engines (AXE, ALFA, Equal Access, AccessLint)
- Scan duration: 3.2 minutes
- Total URLs submitted: 28
- Accepted public URLs: 28
- Rejected URLs: 0
- ALFA outcomes: 29281 passed, 2250 failed, 77 cantTell, 1364 inapplicable
- axe outcomes: 19784 passed, 15 failed, 71 cantTell, 1209 inapplicable
- Equal Access outcomes: 64442 passed, 873 failed (528 unique, 345 duplicate), 633 cantTell, 0 inapplicable
- AccessLint outcomes: 2562 passed, 14 failed (14 unique, 0 duplicate), 0 cantTell, 0 inapplicable
- Duplicate findings caught by later scanners: 2358

## 🎯 Priority: Pages with Most Errors

Focus your efforts on these pages to make the biggest impact (combined scanner unique failures):

| Page | axe Unique | ALFA Unique | Equal Access Unique | AccessLint Unique | Total Unique | Page Title |
|---|---:|---:|---:|---:|---:|---|
| [View Page](https://www.ca.gov/topics/personal-records/) | 2 | 10 | 51 | 1 | **64** | Personal records \| CA.gov |
| [View Page](https://www.ca.gov/topics/assistance/) | 2 | 10 | 50 | 1 | **63** | Assistance and social programs \| CA.gov |
| [View Page](https://www.ca.gov/topics/dmv-auto/) | 2 | 10 | 50 | 1 | **63** | DMV/Auto \| CA.gov |
| [View Page](https://www.ca.gov/topics/jobs/) | 2 | 10 | 50 | 1 | **63** | Jobs and unemployment \| CA.gov |
| [View Page](https://www.ca.gov/topics/businesses/) | 2 | 10 | 46 | 1 | **59** | Businesses \| CA.gov |
| [View Page](https://www.ca.gov/topics/taxes/) | 2 | 10 | 46 | 1 | **59** | Taxes \| CA.gov |
| [View Page](https://www.ca.gov/topics/disaster-recovery/) | 2 | 9 | 19 | 1 | **31** | Disaster recovery \| CA.gov |
| [View Page](https://www.ca.gov/) | 0 | 10 | 15 | 0 | **25** | California State Portal \| CA.gov |
| [View Page](https://www.ca.gov/services/) | 1 | 10 | 14 | 0 | **25** | Services \| CA.gov |
| [View Page](https://www.ca.gov/support/) | 0 | 8 | 16 | 0 | **24** | Get help \| CA.gov |

## 🔧 Priority: Most Common Issues (ALFA)

These ALFA accessibility issues appear most frequently across your pages:

| Rule | Pages Affected | Documentation |
|---|---:|---|
| [SIA-R111](https://alfa.siteimprove.com/rules/sia-r111): Interactive elements have a sufficient target size | **28** of 28 | [View Rule](https://alfa.siteimprove.com/rules/sia-r111) |
| [SIA-R66](https://alfa.siteimprove.com/rules/sia-r66): Text has enhanced contrast with its background | **28** of 28 | [View Rule](https://alfa.siteimprove.com/rules/sia-r66) |
| [SIA-R56](https://alfa.siteimprove.com/rules/sia-r56): Landmarks with the same role are distinguishable | **10** of 28 | [View Rule](https://alfa.siteimprove.com/rules/sia-r56) |
| [SIA-R40](https://alfa.siteimprove.com/rules/sia-r40) | **6** of 28 | [View Rule](https://alfa.siteimprove.com/rules/sia-r40) |
| [SIA-R78](https://alfa.siteimprove.com/rules/sia-r78): Headings of same level have text content between them | **3** of 28 | [View Rule](https://alfa.siteimprove.com/rules/sia-r78) |
| [SIA-R73](https://alfa.siteimprove.com/rules/sia-r73): Text spacing can be adjusted without loss of content | **1** of 28 | [View Rule](https://alfa.siteimprove.com/rules/sia-r73) |

> 💡 **Tip**: Click on the rule documentation links to learn how to fix each issue.


## 🔧 Priority: Most Common Issues (axe)

These axe accessibility issues appear most frequently across your pages:

| Rule | Pages Affected | Documentation |
|---|---:|---|
| landmark-unique | **8** of 28 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/landmark-unique) |
| aria-allowed-role | **6** of 28 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/aria-allowed-role) |
| aria-required-children | **1** of 28 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/aria-required-children) |

> 💡 **Tip**: Click on the rule documentation links to learn how to fix each issue. Consider fixing the most common issues first for maximum impact.

> 🤖 **Future Enhancement**: This report will soon include AI-powered fix suggestions for authenticated GitHub users (opt-in only, no auto-run AI).

## 🔍 Cross-Page Patterns: Common HTML Issues

These HTML patterns cause the same accessibility errors across multiple pages. **Fix the pattern once in your codebase to fix it everywhere!**

### 🎯 Top Patterns to Fix (Highest Impact)

#### Pattern 1: Affects 28 page(s) - 29 occurrence(s)

**Scanner**: ALFA
**Rule**: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)
**Issue**: Target has insufficient size

**HTML Pattern**:
```html
<a href="/legal/conditions-of-use/">Conditions of use</a>
```

**XPath** (use in browser DevTools):
```
/a
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('/a')`
5. The element will be highlighted

**Affected Pages**:
- https://ca.gov/
- https://ca.gov/website-accessibility-certification.html
- https://ca.gov/legal/accessibility/
- https://ca.gov/services/
- https://ca.gov/contact/
- *...and 23 more page(s)*

---

#### Pattern 2: Affects 28 page(s) - 29 occurrence(s)

**Scanner**: ALFA
**Rule**: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)
**Issue**: Target has insufficient size

**HTML Pattern**:
```html
<a href="/legal/privacy-policy/">Privacy policy</a>
```

**XPath** (use in browser DevTools):
```
/a
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('/a')`
5. The element will be highlighted

**Affected Pages**:
- https://ca.gov/
- https://ca.gov/website-accessibility-certification.html
- https://ca.gov/legal/accessibility/
- https://ca.gov/services/
- https://ca.gov/contact/
- *...and 23 more page(s)*

---

#### Pattern 3: Affects 28 page(s) - 29 occurrence(s)

**Scanner**: ALFA
**Rule**: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)
**Issue**: Target has insufficient size

**HTML Pattern**:
```html
<a href="/about/sitemap/">Sitemap</a>
```

**XPath** (use in browser DevTools):
```
/a
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('/a')`
5. The element will be highlighted

**Affected Pages**:
- https://ca.gov/
- https://ca.gov/website-accessibility-certification.html
- https://ca.gov/legal/accessibility/
- https://ca.gov/services/
- https://ca.gov/contact/
- *...and 23 more page(s)*

---

#### Pattern 4: Affects 28 page(s) - 28 occurrence(s)

**Scanner**: ALFA
**Rule**: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)
**Issue**: Target has insufficient size

**HTML Pattern**:
```html
<button type="button" data-bs-toggle="collapse" data-bs-target="#collapseOficial" aria-expanded="false" aria-controls="collapseOficial" class="btn-official mt-1 gray-900 color-black-hover">...</button>
```

**XPath** (use in browser DevTools):
```
/button[@class="btn-official mt-1 gray-900 color-black-hover"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('/button[@class="btn-official mt-1 gray-900 color-black-hover"]')`
5. The element will be highlighted

**Affected Pages**:
- https://ca.gov/
- https://ca.gov/website-accessibility-certification.html
- https://ca.gov/legal/accessibility/
- https://ca.gov/services/
- https://ca.gov/contact/
- *...and 23 more page(s)*

---

#### Pattern 5: Affects 28 page(s) - 28 occurrence(s)

**Scanner**: ALFA
**Rule**: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)
**Issue**: Target has insufficient size

**HTML Pattern**:
```html
<a href="#googtrans(en|es)" class="m-l-0 underline cursor-pointer" lang="es" hreflang="es" translate="no" rel="alternate">Español</a>
```

**XPath** (use in browser DevTools):
```
/a[@class="m-l-0 underline cursor-pointer"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('/a[@class="m-l-0 underline cursor-pointer"]')`
5. The element will be highlighted

**Affected Pages**:
- https://ca.gov/
- https://ca.gov/website-accessibility-certification.html
- https://ca.gov/legal/accessibility/
- https://ca.gov/services/
- https://ca.gov/contact/
- *...and 23 more page(s)*

---

#### Pattern 6: Affects 28 page(s) - 28 occurrence(s)

**Scanner**: ALFA
**Rule**: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)
**Issue**: Target has insufficient size

**HTML Pattern**:
```html
<a href="#googtrans(en|ko)" lang="ko" hreflang="ko" translate="no" rel="alternate" class="underline cursor-pointer">한국어</a>
```

**XPath** (use in browser DevTools):
```
/a[@class="underline cursor-pointer"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('/a[@class="underline cursor-pointer"]')`
5. The element will be highlighted

**Affected Pages**:
- https://ca.gov/
- https://ca.gov/website-accessibility-certification.html
- https://ca.gov/legal/accessibility/
- https://ca.gov/services/
- https://ca.gov/contact/
- *...and 23 more page(s)*

---

#### Pattern 7: Affects 28 page(s) - 28 occurrence(s)

**Scanner**: ALFA
**Rule**: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)
**Issue**: Target has insufficient size

**HTML Pattern**:
```html
<a href="#googtrans(en|tl)" lang="tl" hreflang="tl" translate="no" rel="alternate" class="underline cursor-pointer">Tagalog</a>
```

**XPath** (use in browser DevTools):
```
/a[@class="underline cursor-pointer"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('/a[@class="underline cursor-pointer"]')`
5. The element will be highlighted

**Affected Pages**:
- https://ca.gov/
- https://ca.gov/website-accessibility-certification.html
- https://ca.gov/legal/accessibility/
- https://ca.gov/services/
- https://ca.gov/contact/
- *...and 23 more page(s)*

---

#### Pattern 8: Affects 28 page(s) - 28 occurrence(s)

**Scanner**: ALFA
**Rule**: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)
**Issue**: Target has insufficient size

**HTML Pattern**:
```html
<a href="#googtrans(en|vi)" lang="vi" hreflang="vi" translate="no" rel="alternate" class="underline cursor-pointer">Tiếng Việt</a>
```

**XPath** (use in browser DevTools):
```
/a[@class="underline cursor-pointer"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('/a[@class="underline cursor-pointer"]')`
5. The element will be highlighted

**Affected Pages**:
- https://ca.gov/
- https://ca.gov/website-accessibility-certification.html
- https://ca.gov/legal/accessibility/
- https://ca.gov/services/
- https://ca.gov/contact/
- *...and 23 more page(s)*

---

#### Pattern 9: Affects 28 page(s) - 28 occurrence(s)

**Scanner**: ALFA
**Rule**: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)
**Issue**: Target has insufficient size

**HTML Pattern**:
```html
<a href="#googtrans(en|zh-TW)" lang="zh-hant" hreflang="zh-hant" translate="no" rel="alternate" class="underline cursor-pointer">繁體中文</a>
```

**XPath** (use in browser DevTools):
```
/a[@class="underline cursor-pointer"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('/a[@class="underline cursor-pointer"]')`
5. The element will be highlighted

**Affected Pages**:
- https://ca.gov/
- https://ca.gov/website-accessibility-certification.html
- https://ca.gov/legal/accessibility/
- https://ca.gov/services/
- https://ca.gov/contact/
- *...and 23 more page(s)*

---

#### Pattern 10: Affects 28 page(s) - 28 occurrence(s)

**Scanner**: ALFA
**Rule**: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)
**Issue**: Target has insufficient size

**HTML Pattern**:
```html
<a href="/about/about-this-website/" class="d-block no-underline m-y font-size-16 color-white color-highlight-hover underline-hover">
          About this website</a>
```

**XPath** (use in browser DevTools):
```
/a[@class="d-block no-underline m-y font-size-16 color-white color-highlight-hover underline-hover"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('/a[@class="d-block no-underline m-y font-size-16 color-white color-highlight-hover underline-hover"]')`
5. The element will be highlighted

**Affected Pages**:
- https://ca.gov/
- https://ca.gov/website-accessibility-certification.html
- https://ca.gov/legal/accessibility/
- https://ca.gov/services/
- https://ca.gov/contact/
- *...and 23 more page(s)*

---

#### Pattern 11: Affects 28 page(s) - 28 occurrence(s)

**Scanner**: ALFA
**Rule**: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)
**Issue**: Target has insufficient size

**HTML Pattern**:
```html
<a href="https://calcareers.ca.gov/" rel="external" class="d-block no-underline m-y font-size-16 color-white color-highlight-hover underline-hover">...</a>
```

**XPath** (use in browser DevTools):
```
/a[@class="d-block no-underline m-y font-size-16 color-white color-highlight-hover underline-hover"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('/a[@class="d-block no-underline m-y font-size-16 color-white color-highlight-hover underline-hover"]')`
5. The element will be highlighted

**Affected Pages**:
- https://ca.gov/
- https://ca.gov/website-accessibility-certification.html
- https://ca.gov/legal/accessibility/
- https://ca.gov/services/
- https://ca.gov/contact/
- *...and 23 more page(s)*

---

#### Pattern 12: Affects 28 page(s) - 28 occurrence(s)

**Scanner**: ALFA
**Rule**: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)
**Issue**: Target has insufficient size

**HTML Pattern**:
```html
<a href="https://data.ca.gov/" rel="nofollow external" class="d-block no-underline m-y font-size-16 color-white color-highlight-hover underline-hover">...</a>
```

**XPath** (use in browser DevTools):
```
/a[@class="d-block no-underline m-y font-size-16 color-white color-highlight-hover underline-hover"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('/a[@class="d-block no-underline m-y font-size-16 color-white color-highlight-hover underline-hover"]')`
5. The element will be highlighted

**Affected Pages**:
- https://ca.gov/
- https://ca.gov/website-accessibility-certification.html
- https://ca.gov/legal/accessibility/
- https://ca.gov/services/
- https://ca.gov/contact/
- *...and 23 more page(s)*

---

#### Pattern 13: Affects 28 page(s) - 28 occurrence(s)

**Scanner**: ALFA
**Rule**: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)
**Issue**: Target has insufficient size

**HTML Pattern**:
```html
<a href="https://www.sco.ca.gov/ppsd_cpod.html" rel="external" class="d-block no-underline m-y font-size-16 color-white color-highlight-hover underline-hover">...</a>
```

**XPath** (use in browser DevTools):
```
/a[@class="d-block no-underline m-y font-size-16 color-white color-highlight-hover underline-hover"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('/a[@class="d-block no-underline m-y font-size-16 color-white color-highlight-hover underline-hover"]')`
5. The element will be highlighted

**Affected Pages**:
- https://ca.gov/
- https://ca.gov/website-accessibility-certification.html
- https://ca.gov/legal/accessibility/
- https://ca.gov/services/
- https://ca.gov/contact/
- *...and 23 more page(s)*

---

#### Pattern 14: Affects 28 page(s) - 28 occurrence(s)

**Scanner**: ALFA
**Rule**: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)
**Issue**: Target has insufficient size

**HTML Pattern**:
```html
<a href="/support/technical-help/" class="d-block no-underline m-y font-size-16 color-white color-highlight-hover underline-hover">
          Technical help</a>
```

**XPath** (use in browser DevTools):
```
/a[@class="d-block no-underline m-y font-size-16 color-white color-highlight-hover underline-hover"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('/a[@class="d-block no-underline m-y font-size-16 color-white color-highlight-hover underline-hover"]')`
5. The element will be highlighted

**Affected Pages**:
- https://ca.gov/
- https://ca.gov/website-accessibility-certification.html
- https://ca.gov/legal/accessibility/
- https://ca.gov/services/
- https://ca.gov/contact/
- *...and 23 more page(s)*

---

#### Pattern 15: Affects 28 page(s) - 28 occurrence(s)

**Scanner**: ALFA
**Rule**: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)
**Issue**: Target has insufficient size

**HTML Pattern**:
```html
<a href="/contact/" class="d-block no-underline m-y font-size-16 color-white color-highlight-hover underline-hover">...</a>
```

**XPath** (use in browser DevTools):
```
/a[@class="d-block no-underline m-y font-size-16 color-white color-highlight-hover underline-hover"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('/a[@class="d-block no-underline m-y font-size-16 color-white color-highlight-hover underline-hover"]')`
5. The element will be highlighted

**Affected Pages**:
- https://ca.gov/
- https://ca.gov/website-accessibility-certification.html
- https://ca.gov/legal/accessibility/
- https://ca.gov/services/
- https://ca.gov/contact/
- *...and 23 more page(s)*

---

> 💡 **Pro Tip**: These patterns likely come from shared components or templates in your codebase. Fix them in the component/template source, and the fix will propagate to all affected pages.

## 📊 Detailed Results

Complete scan results for all tested pages:

| Submitted URL | Final URL | Status | HTTP | Redirected | Time (ms) | axe Unique | ALFA Unique | Equal Access Unique | AccessLint Unique | Duplicates | Notes |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|
| https://ca.gov/ | https://www.ca.gov/ | OK | 200 | yes | 8815 | 0 | 10 | 15 | 0 | 74 | California State Portal \| CA.gov |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R111 (Interactive elements have a sufficient target size), SIA-R66 (Text has enhanced contrast with its background), SIA-R78 (Headings of same level have text content between them) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_complementary_labelled, element_attribute_deprecated, element_tabbable_visible, figure_label_exists, style_color_misuse, style_focus_visible, style_highcontrast_visible, style_viewport_resizable, text_block_heading, text_contrast_sufficient, text_sensory_misuse |
| https://ca.gov/website-accessibility-certification.html | https://www.ca.gov/website-accessibility-certification.html | OK | 200 | yes | 6119 | 0 | 7 | 8 | 0 | 41 | Web Accessibility Certification \| CA.gov |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R111 (Interactive elements have a sufficient target size), SIA-R66 (Text has enhanced contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_complementary_labelled, element_attribute_deprecated, element_tabbable_visible, style_color_misuse, style_highcontrast_visible, style_viewport_resizable, text_block_heading |
| https://ca.gov/legal/accessibility/ | https://www.ca.gov/legal/accessibility/ | OK | 200 | yes | 6015 | 0 | 7 | 9 | 0 | 58 | Accessibility \| CA.gov |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R111 (Interactive elements have a sufficient target size), SIA-R66 (Text has enhanced contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_complementary_labelled, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, style_color_misuse, style_highcontrast_visible, style_viewport_resizable, text_block_heading, text_sensory_misuse |
| https://ca.gov/services/ | https://www.ca.gov/services/ | OK | 200 | yes | 5679 | 1 | 10 | 14 | 0 | 67 | Services \| CA.gov |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R111 (Interactive elements have a sufficient target size), SIA-R56 (Landmarks with the same role are distinguishable), SIA-R66 (Text has enhanced contrast with its background), SIA-R78 (Headings of same level have text content between them) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-unique |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_complementary_labelled, aria_landmark_name_unique, element_attribute_deprecated, element_tabbable_visible, style_background_decorative, style_color_misuse, style_focus_visible, style_highcontrast_visible, style_viewport_resizable, text_block_heading |
| https://ca.gov/contact/ | https://www.ca.gov/contact/ | OK | 200 | yes | 7599 | 0 | 7 | 8 | 0 | 40 | Contact \| CA.gov |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R111 (Interactive elements have a sufficient target size), SIA-R66 (Text has enhanced contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_complementary_labelled, element_attribute_deprecated, element_tabbable_visible, style_background_decorative, style_color_misuse, style_highcontrast_visible, style_viewport_resizable, text_block_heading |
| https://ca.gov/support/ | https://www.ca.gov/support/ | OK | 200 | yes | 6348 | 0 | 8 | 16 | 0 | 55 | Get help \| CA.gov |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R111 (Interactive elements have a sufficient target size), SIA-R66 (Text has enhanced contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_complementary_labelled, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, style_background_decorative, style_color_misuse, style_highcontrast_visible, style_viewport_resizable, text_block_heading, text_sensory_misuse |
| https://ca.gov/about/about-this-website/ | https://www.ca.gov/about/about-this-website/ | OK | 200 | yes | 5477 | 0 | 7 | 7 | 0 | 36 | About this website \| CA.gov |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R111 (Interactive elements have a sufficient target size), SIA-R66 (Text has enhanced contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_complementary_labelled, element_attribute_deprecated, element_tabbable_visible, style_color_misuse, style_highcontrast_visible, style_viewport_resizable, text_block_heading |
| https://ca.gov/about/sitemap/ | https://www.ca.gov/about/sitemap/ | OK | 200 | yes | 5481 | 0 | 7 | 8 | 0 | 94 | Sitemap \| CA.gov |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R111 (Interactive elements have a sufficient target size), SIA-R66 (Text has enhanced contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_complementary_labelled, element_attribute_deprecated, element_tabbable_visible, style_background_decorative, style_color_misuse, style_highcontrast_visible, style_viewport_resizable, text_block_heading |
| https://ca.gov/departments/176/services/52/ | https://www.ca.gov/departments/176/services/52/ | OK | 200 | yes | 6142 | 0 | 8 | 10 | 0 | 73 | Apply for Birth Certificate \| CA.gov |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R111 (Interactive elements have a sufficient target size), SIA-R66 (Text has enhanced contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_complementary_labelled, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, style_color_misuse, style_highcontrast_visible, style_viewport_resizable, text_block_heading |
| https://ca.gov/departments/193/services/15/ | https://www.ca.gov/departments/193/services/15/ | OK | 200 | yes | 5846 | 0 | 8 | 9 | 0 | 52 | Traffic tickets \| CA.gov |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R111 (Interactive elements have a sufficient target size), SIA-R66 (Text has enhanced contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_complementary_labelled, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, style_color_misuse, style_highcontrast_visible, style_viewport_resizable, text_block_heading |
| https://ca.gov/departments/220/services/1194/ | https://www.ca.gov/departments/220/services/1194/ | OK | 200 | yes | 6556 | 0 | 8 | 7 | 0 | 90 | Apply for a REAL ID/DL \| CA.gov |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R111 (Interactive elements have a sufficient target size), SIA-R66 (Text has enhanced contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_complementary_labelled, element_attribute_deprecated, element_tabbable_visible, style_color_misuse, style_highcontrast_visible, style_viewport_resizable, text_block_heading |
| https://ca.gov/departments/236/services/33/ | https://www.ca.gov/departments/236/services/33/ | OK | 200 | yes | 5623 | 0 | 8 | 11 | 0 | 64 | Check your refund status \| CA.gov |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R111 (Interactive elements have a sufficient target size), SIA-R66 (Text has enhanced contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_complementary_labelled, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, style_color_misuse, style_highcontrast_visible, style_viewport_resizable, text_block_heading |
| https://ca.gov/departments/287/services/25/ | https://www.ca.gov/departments/287/services/25/ | OK | 200 | yes | 6045 | 0 | 8 | 9 | 0 | 52 | Register for Permits, Licenses, or Accounts \| CA.gov |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R111 (Interactive elements have a sufficient target size), SIA-R66 (Text has enhanced contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_complementary_labelled, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, style_color_misuse, style_highcontrast_visible, style_viewport_resizable, text_block_heading |
| https://ca.gov/departments/287/services/26/ | https://www.ca.gov/departments/287/services/26/ | OK | 200 | yes | 6063 | 0 | 8 | 8 | 7 | 53 | Apply for a Seller's Permit \| CA.gov |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R111 (Interactive elements have a sufficient target size), SIA-R66 (Text has enhanced contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_complementary_labelled, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, style_color_misuse, style_highcontrast_visible, style_viewport_resizable, text_block_heading |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: adaptable/listitem-parent |
| https://ca.gov/support/technical-help/ | https://www.ca.gov/support/technical-help/ | OK | 200 | yes | 5228 | 0 | 7 | 9 | 0 | 38 | Technical help \| CA.gov |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R111 (Interactive elements have a sufficient target size), SIA-R66 (Text has enhanced contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_complementary_labelled, element_attribute_deprecated, element_tabbable_visible, style_background_decorative, style_color_misuse, style_highcontrast_visible, style_viewport_resizable, text_block_heading, text_sensory_misuse |
| https://ca.gov/about-california/ | https://www.ca.gov/about-california/ | OK | 200 | yes | 7358 | 0 | 11 | 13 | 0 | 66 | About California \| CA.gov |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R111 (Interactive elements have a sufficient target size), SIA-R66 (Text has enhanced contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_complementary_labelled, element_attribute_deprecated, element_tabbable_visible, figure_label_exists, style_background_decorative, style_color_misuse, style_highcontrast_visible, style_viewport_resizable, text_block_heading, text_contrast_sufficient, text_sensory_misuse |
| https://ca.gov/departments/ | https://www.ca.gov/departments/ | OK | 200 | yes | 5867 | 0 | 9 | 14 | 0 | 48 | Departments \| CA.gov |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R111 (Interactive elements have a sufficient target size), SIA-R56 (Landmarks with the same role are distinguishable), SIA-R66 (Text has enhanced contrast with its background), SIA-R78 (Headings of same level have text content between them) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_complementary_labelled, aria_landmark_name_unique, element_attribute_deprecated, element_tabbable_visible, style_background_decorative, style_color_misuse, style_focus_visible, style_highcontrast_visible, style_viewport_resizable, text_block_heading |
| https://ca.gov/topics/ | https://www.ca.gov/topics/ | OK | 200 | yes | 6176 | 0 | 9 | 14 | 0 | 63 | Topics \| CA.gov |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R111 (Interactive elements have a sufficient target size), SIA-R56 (Landmarks with the same role are distinguishable), SIA-R66 (Text has enhanced contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_complementary_labelled, aria_landmark_name_unique, element_attribute_deprecated, element_tabbable_visible, style_background_decorative, style_color_misuse, style_focus_visible, style_highcontrast_visible, style_viewport_resizable, text_block_heading |
| https://ca.gov/translate/ | https://www.ca.gov/translate/ | OK | 200 | yes | 6275 | 0 | 7 | 10 | 0 | 34 | Translate this website \| CA.gov |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R111 (Interactive elements have a sufficient target size), SIA-R66 (Text has enhanced contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_complementary_labelled, element_attribute_deprecated, element_tabbable_visible, style_background_decorative, style_color_misuse, style_highcontrast_visible, style_viewport_resizable, svg_graphics_labelled, text_block_heading |
| https://ca.gov/legal/conditions-of-use/ | https://www.ca.gov/legal/conditions-of-use/ | OK | 200 | yes | 5978 | 0 | 7 | 8 | 0 | 66 | Conditions of use \| CA.gov |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R111 (Interactive elements have a sufficient target size), SIA-R66 (Text has enhanced contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_complementary_labelled, element_attribute_deprecated, element_tabbable_visible, style_color_misuse, style_highcontrast_visible, style_viewport_resizable, text_block_heading, text_sensory_misuse |
| https://ca.gov/legal/privacy-policy/ | https://www.ca.gov/legal/privacy-policy/ | OK | 200 | yes | 5447 | 0 | 7 | 9 | 0 | 39 | Privacy policy \| CA.gov |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R111 (Interactive elements have a sufficient target size), SIA-R66 (Text has enhanced contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_complementary_labelled, element_attribute_deprecated, element_tabbable_visible, style_color_misuse, style_highcontrast_visible, style_viewport_resizable, text_block_heading, text_sensory_misuse |
| https://ca.gov/topics/assistance/ | https://www.ca.gov/topics/assistance/ | OK | 200 | yes | 11812 | 2 | 10 | 50 | 1 | 253 | Assistance and social programs \| CA.gov |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R111 (Interactive elements have a sufficient target size), SIA-R40, SIA-R56 (Landmarks with the same role are distinguishable), SIA-R66 (Text has enhanced contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, landmark-unique |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_attribute_required, aria_complementary_labelled, aria_landmark_name_unique, aria_region_labelled, aria_role_valid, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, fieldset_label_valid, figure_label_exists, input_label_exists, style_color_misuse, style_focus_visible, style_highcontrast_visible, style_viewport_resizable, target_spacing_sufficient, text_block_heading, text_quoted_correctly |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-allowed-role |
| https://ca.gov/topics/businesses/ | https://www.ca.gov/topics/businesses/ | OK | 200 | yes | 9936 | 2 | 10 | 46 | 1 | 181 | Businesses \| CA.gov |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R111 (Interactive elements have a sufficient target size), SIA-R40, SIA-R56 (Landmarks with the same role are distinguishable), SIA-R66 (Text has enhanced contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, landmark-unique |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_attribute_required, aria_complementary_labelled, aria_landmark_name_unique, aria_region_labelled, aria_role_valid, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, fieldset_label_valid, figure_label_exists, input_label_exists, style_color_misuse, style_focus_visible, style_highcontrast_visible, style_viewport_resizable, target_spacing_sufficient, text_block_heading |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-allowed-role |
| https://ca.gov/topics/disaster-recovery/ | https://www.ca.gov/topics/disaster-recovery/ | OK | 200 | yes | 7074 | 2 | 9 | 19 | 1 | 132 | Disaster recovery \| CA.gov |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R111 (Interactive elements have a sufficient target size), SIA-R56 (Landmarks with the same role are distinguishable), SIA-R66 (Text has enhanced contrast with its background), SIA-R73 (Text spacing can be adjusted without loss of content) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-required-children, landmark-unique |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_child_valid, aria_complementary_labelled, aria_id_unique, aria_landmark_name_unique, aria_role_redundant, element_attribute_deprecated, element_tabbable_visible, style_background_decorative, style_color_misuse, style_focus_visible, style_highcontrast_visible, style_viewport_resizable, text_block_heading |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: adaptable/list-children |
| https://ca.gov/topics/dmv-auto/ | https://www.ca.gov/topics/dmv-auto/ | OK | 200 | yes | 9184 | 2 | 10 | 50 | 1 | 155 | DMV/Auto \| CA.gov |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R111 (Interactive elements have a sufficient target size), SIA-R40, SIA-R56 (Landmarks with the same role are distinguishable), SIA-R66 (Text has enhanced contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, landmark-unique |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_attribute_required, aria_complementary_labelled, aria_landmark_name_unique, aria_region_labelled, aria_role_valid, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, fieldset_label_valid, figure_label_exists, input_label_exists, style_color_misuse, style_focus_visible, style_highcontrast_visible, style_viewport_resizable, target_spacing_sufficient, text_block_heading, text_sensory_misuse |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-allowed-role |
| https://ca.gov/topics/jobs/ | https://www.ca.gov/topics/jobs/ | OK | 200 | yes | 8602 | 2 | 10 | 50 | 1 | 170 | Jobs and unemployment \| CA.gov |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R111 (Interactive elements have a sufficient target size), SIA-R40, SIA-R56 (Landmarks with the same role are distinguishable), SIA-R66 (Text has enhanced contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, landmark-unique |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_attribute_required, aria_complementary_labelled, aria_landmark_name_unique, aria_region_labelled, aria_role_valid, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, fieldset_label_valid, figure_label_exists, input_label_exists, style_color_misuse, style_focus_visible, style_highcontrast_visible, style_viewport_resizable, target_spacing_sufficient, text_block_heading |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-allowed-role |
| https://ca.gov/topics/personal-records/ | https://www.ca.gov/topics/personal-records/ | OK | 200 | yes | 8554 | 2 | 10 | 51 | 1 | 152 | Personal records \| CA.gov |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R111 (Interactive elements have a sufficient target size), SIA-R40, SIA-R56 (Landmarks with the same role are distinguishable), SIA-R66 (Text has enhanced contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, landmark-unique |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_attribute_required, aria_complementary_labelled, aria_landmark_name_unique, aria_region_labelled, aria_role_valid, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, fieldset_label_valid, figure_label_exists, input_label_exists, style_color_misuse, style_focus_visible, style_highcontrast_visible, style_viewport_resizable, target_spacing_sufficient, text_block_heading |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-allowed-role |
| https://ca.gov/topics/taxes/ | https://www.ca.gov/topics/taxes/ | OK | 200 | yes | 8031 | 2 | 10 | 46 | 1 | 112 | Taxes \| CA.gov |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R111 (Interactive elements have a sufficient target size), SIA-R40, SIA-R56 (Landmarks with the same role are distinguishable), SIA-R66 (Text has enhanced contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, landmark-unique |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_attribute_required, aria_complementary_labelled, aria_landmark_name_unique, aria_region_labelled, aria_role_valid, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, fieldset_label_valid, figure_label_exists, input_label_exists, style_color_misuse, style_focus_visible, style_highcontrast_visible, style_viewport_resizable, target_spacing_sufficient, text_block_heading, text_sensory_misuse |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-allowed-role |

## Detailed Failure Information (ALFA)

### https://ca.gov/

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)

**Failure 1:**
- Message: Target has insufficient size
- HTML: `<button type="button" data-bs-toggle="collapse" data-bs-target="#collapseOficial" aria-expanded="false" aria-controls="collapseOficial" class="btn-official mt-1 gray-900 color-black-hover">...</button>`
- XPath: `/button[@class="btn-official mt-1 gray-900 color-black-hover"]`

**Failure 2:**
- Message: Target has insufficient size
- HTML: `<a href="#googtrans(en\|es)" class="m-l-0 underline cursor-pointer" lang="es" hreflang="es" translate="no" rel="alternate">Español</a>`
- XPath: `/a[@class="m-l-0 underline cursor-pointer"]`

**Failure 3:**
- Message: Target has insufficient size
- HTML: `<a href="#googtrans(en\|ko)" lang="ko" hreflang="ko" translate="no" rel="alternate" class="underline cursor-pointer">한국어</a>`
- XPath: `/a[@class="underline cursor-pointer"]`

**Failure 4:**
- Message: Target has insufficient size
- HTML: `<a class="btn btn-outline-light btn-hover rounded-5" href="/departments/220/services/1194/">Real ID/license</a>`
- XPath: `/a[@class="btn btn-outline-light btn-hover rounded-5"]`

**Failure 5:**
- Message: Target has insufficient size
- HTML: `<a href="https://www.visitcalifornia.com/places-to-visit/" class="link-before no-underline">...</a>`
- XPath: `/a[@class="link-before no-underline"]`

*... and 3 more failures for this rule*

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 5.89:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R78: Headings of same level have text content between them](https://alfa.siteimprove.com/rules/sia-r78)

**Failure 1:**
- Message: There is no content between this heading and the next
- HTML: `<h3 class="m-a-0 lead bold">DMV/Auto</h3>`
- XPath: `/h3[@class="m-a-0 lead bold"]`

### https://ca.gov/website-accessibility-certification.html

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)

**Failure 1:**
- Message: Target has insufficient size
- HTML: `<button type="button" data-bs-toggle="collapse" data-bs-target="#collapseOficial" aria-expanded="false" aria-controls="collapseOficial" class="btn-official mt-1 gray-900 color-black-hover">...</button>`
- XPath: `/button[@class="btn-official mt-1 gray-900 color-black-hover"]`

**Failure 2:**
- Message: Target has insufficient size
- HTML: `<a href="#googtrans(en\|es)" class="m-l-0 underline cursor-pointer" lang="es" hreflang="es" translate="no" rel="alternate">Español</a>`
- XPath: `/a[@class="m-l-0 underline cursor-pointer"]`

**Failure 3:**
- Message: Target has insufficient size
- HTML: `<a href="#googtrans(en\|ko)" lang="ko" hreflang="ko" translate="no" rel="alternate" class="underline cursor-pointer">한국어</a>`
- XPath: `/a[@class="underline cursor-pointer"]`

**Failure 4:**
- Message: Target has insufficient size
- HTML: `<a href="/">Home</a>`
- XPath: `/a`

**Failure 5:**
- Message: Target has insufficient size
- HTML: `<a href="/about/about-this-website/" class="d-block no-underline m-y font-size-16 color-white color-highlight-hover underline-hover">           About this website</a>`
- XPath: `/a[@class="d-block no-underline m-y font-size-16 color-white color-highlight-hover underline-hover"]`

*... and 1 more failures for this rule*

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 5.89:1 which is         below the required contrast of 7:1

### https://ca.gov/legal/accessibility/

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)

**Failure 1:**
- Message: Target has insufficient size
- HTML: `<button type="button" data-bs-toggle="collapse" data-bs-target="#collapseOficial" aria-expanded="false" aria-controls="collapseOficial" class="btn-official mt-1 gray-900 color-black-hover">...</button>`
- XPath: `/button[@class="btn-official mt-1 gray-900 color-black-hover"]`

**Failure 2:**
- Message: Target has insufficient size
- HTML: `<a href="#googtrans(en\|es)" class="m-l-0 underline cursor-pointer" lang="es" hreflang="es" translate="no" rel="alternate">Español</a>`
- XPath: `/a[@class="m-l-0 underline cursor-pointer"]`

**Failure 3:**
- Message: Target has insufficient size
- HTML: `<a href="#googtrans(en\|ko)" lang="ko" hreflang="ko" translate="no" rel="alternate" class="underline cursor-pointer">한국어</a>`
- XPath: `/a[@class="underline cursor-pointer"]`

**Failure 4:**
- Message: Target has insufficient size
- HTML: `<a href="/">Home</a>`
- XPath: `/a`

**Failure 5:**
- Message: Target has insufficient size
- HTML: `<a href="/about/about-this-website/" class="d-block no-underline m-y font-size-16 color-white color-highlight-hover underline-hover">           About this website</a>`
- XPath: `/a[@class="d-block no-underline m-y font-size-16 color-white color-highlight-hover underline-hover"]`

*... and 1 more failures for this rule*

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 5.89:1 which is         below the required contrast of 7:1

### https://ca.gov/services/

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)

**Failure 1:**
- Message: Target has insufficient size
- HTML: `<button type="button" data-bs-toggle="collapse" data-bs-target="#collapseOficial" aria-expanded="false" aria-controls="collapseOficial" class="btn-official mt-1 gray-900 color-black-hover">...</button>`
- XPath: `/button[@class="btn-official mt-1 gray-900 color-black-hover"]`

**Failure 2:**
- Message: Target has insufficient size
- HTML: `<a href="#googtrans(en\|es)" class="m-l-0 underline cursor-pointer" lang="es" hreflang="es" translate="no" rel="alternate">Español</a>`
- XPath: `/a[@class="m-l-0 underline cursor-pointer"]`

**Failure 3:**
- Message: Target has insufficient size
- HTML: `<a href="#googtrans(en\|ko)" lang="ko" hreflang="ko" translate="no" rel="alternate" class="underline cursor-pointer">한국어</a>`
- XPath: `/a[@class="underline cursor-pointer"]`

**Failure 4:**
- Message: Target has insufficient size
- HTML: `<a href="/">Home</a>`
- XPath: `/a`

**Failure 5:**
- Message: Target has insufficient size
- HTML: `<a href="/topics/businesses/" class="color-p2 link-before text-left no-underline d-block">Businesses</a>`
- XPath: `/a[@class="color-p2 link-before text-left no-underline d-block"]`

*... and 2 more failures for this rule*

#### Rule: [SIA-R56: Landmarks with the same role are distinguishable](https://alfa.siteimprove.com/rules/sia-r56)

**Failure 1:**
- Message: Some `complementary` have the same name.

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 5.89:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R78: Headings of same level have text content between them](https://alfa.siteimprove.com/rules/sia-r78)

**Failure 1:**
- Message: There is no content between this heading and the next
- HTML: `<h3 class="m-a-0 lead bold">Food stamps</h3>`
- XPath: `/h3[@class="m-a-0 lead bold"]`

### https://ca.gov/contact/

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)

**Failure 1:**
- Message: Target has insufficient size
- HTML: `<button type="button" data-bs-toggle="collapse" data-bs-target="#collapseOficial" aria-expanded="false" aria-controls="collapseOficial" class="btn-official mt-1 gray-900 color-black-hover">...</button>`
- XPath: `/button[@class="btn-official mt-1 gray-900 color-black-hover"]`

**Failure 2:**
- Message: Target has insufficient size
- HTML: `<a href="#googtrans(en\|es)" class="m-l-0 underline cursor-pointer" lang="es" hreflang="es" translate="no" rel="alternate">Español</a>`
- XPath: `/a[@class="m-l-0 underline cursor-pointer"]`

**Failure 3:**
- Message: Target has insufficient size
- HTML: `<a href="#googtrans(en\|ko)" lang="ko" hreflang="ko" translate="no" rel="alternate" class="underline cursor-pointer">한국어</a>`
- XPath: `/a[@class="underline cursor-pointer"]`

**Failure 4:**
- Message: Target has insufficient size
- HTML: `<a href="/">Home</a>`
- XPath: `/a`

**Failure 5:**
- Message: Target has insufficient size
- HTML: `<a href="/about/about-this-website/" class="d-block no-underline m-y font-size-16 color-white color-highlight-hover underline-hover">           About this website</a>`
- XPath: `/a[@class="d-block no-underline m-y font-size-16 color-white color-highlight-hover underline-hover"]`

*... and 1 more failures for this rule*

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 5.89:1 which is         below the required contrast of 7:1

### https://ca.gov/support/

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)

**Failure 1:**
- Message: Target has insufficient size
- HTML: `<button type="button" data-bs-toggle="collapse" data-bs-target="#collapseOficial" aria-expanded="false" aria-controls="collapseOficial" class="btn-official mt-1 gray-900 color-black-hover">...</button>`
- XPath: `/button[@class="btn-official mt-1 gray-900 color-black-hover"]`

**Failure 2:**
- Message: Target has insufficient size
- HTML: `<a href="#googtrans(en\|es)" class="m-l-0 underline cursor-pointer" lang="es" hreflang="es" translate="no" rel="alternate">Español</a>`
- XPath: `/a[@class="m-l-0 underline cursor-pointer"]`

**Failure 3:**
- Message: Target has insufficient size
- HTML: `<a href="#googtrans(en\|ko)" lang="ko" hreflang="ko" translate="no" rel="alternate" class="underline cursor-pointer">한국어</a>`
- XPath: `/a[@class="underline cursor-pointer"]`

**Failure 4:**
- Message: Target has insufficient size
- HTML: `<a href="/">Home</a>`
- XPath: `/a`

**Failure 5:**
- Message: Target has insufficient size
- HTML: `<a href="https://calfresh.dss.ca.gov/food/" class="color-p2 link-before text-left no-underline d-block">...</a>`
- XPath: `/a[@class="color-p2 link-before text-left no-underline d-block"]`

*... and 2 more failures for this rule*

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 5.89:1 which is         below the required contrast of 7:1

### https://ca.gov/about/about-this-website/

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)

**Failure 1:**
- Message: Target has insufficient size
- HTML: `<button type="button" data-bs-toggle="collapse" data-bs-target="#collapseOficial" aria-expanded="false" aria-controls="collapseOficial" class="btn-official mt-1 gray-900 color-black-hover">...</button>`
- XPath: `/button[@class="btn-official mt-1 gray-900 color-black-hover"]`

**Failure 2:**
- Message: Target has insufficient size
- HTML: `<a href="#googtrans(en\|es)" class="m-l-0 underline cursor-pointer" lang="es" hreflang="es" translate="no" rel="alternate">Español</a>`
- XPath: `/a[@class="m-l-0 underline cursor-pointer"]`

**Failure 3:**
- Message: Target has insufficient size
- HTML: `<a href="#googtrans(en\|ko)" lang="ko" hreflang="ko" translate="no" rel="alternate" class="underline cursor-pointer">한국어</a>`
- XPath: `/a[@class="underline cursor-pointer"]`

**Failure 4:**
- Message: Target has insufficient size
- HTML: `<a href="/">Home</a>`
- XPath: `/a`

**Failure 5:**
- Message: Target has insufficient size
- HTML: `<a href="/about/about-this-website/" class="d-block no-underline m-y font-size-16 color-white color-highlight-hover underline-hover">           About this website</a>`
- XPath: `/a[@class="d-block no-underline m-y font-size-16 color-white color-highlight-hover underline-hover"]`

*... and 1 more failures for this rule*

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 5.89:1 which is         below the required contrast of 7:1

### https://ca.gov/about/sitemap/

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)

**Failure 1:**
- Message: Target has insufficient size
- HTML: `<button type="button" data-bs-toggle="collapse" data-bs-target="#collapseOficial" aria-expanded="false" aria-controls="collapseOficial" class="btn-official mt-1 gray-900 color-black-hover">...</button>`
- XPath: `/button[@class="btn-official mt-1 gray-900 color-black-hover"]`

**Failure 2:**
- Message: Target has insufficient size
- HTML: `<a href="#googtrans(en\|es)" class="m-l-0 underline cursor-pointer" lang="es" hreflang="es" translate="no" rel="alternate">Español</a>`
- XPath: `/a[@class="m-l-0 underline cursor-pointer"]`

**Failure 3:**
- Message: Target has insufficient size
- HTML: `<a href="#googtrans(en\|ko)" lang="ko" hreflang="ko" translate="no" rel="alternate" class="underline cursor-pointer">한국어</a>`
- XPath: `/a[@class="underline cursor-pointer"]`

**Failure 4:**
- Message: Target has insufficient size
- HTML: `<a href="/">Home</a>`
- XPath: `/a`

**Failure 5:**
- Message: Target has insufficient size
- HTML: `<a href="/about/about-this-website/" class="d-block no-underline m-y font-size-16 color-white color-highlight-hover underline-hover">           About this website</a>`
- XPath: `/a[@class="d-block no-underline m-y font-size-16 color-white color-highlight-hover underline-hover"]`

*... and 1 more failures for this rule*

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 5.89:1 which is         below the required contrast of 7:1

### https://ca.gov/departments/176/services/52/

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)

**Failure 1:**
- Message: Target has insufficient size
- HTML: `<button type="button" data-bs-toggle="collapse" data-bs-target="#collapseOficial" aria-expanded="false" aria-controls="collapseOficial" class="btn-official mt-1 gray-900 color-black-hover">...</button>`
- XPath: `/button[@class="btn-official mt-1 gray-900 color-black-hover"]`

**Failure 2:**
- Message: Target has insufficient size
- HTML: `<a href="#googtrans(en\|es)" class="m-l-0 underline cursor-pointer" lang="es" hreflang="es" translate="no" rel="alternate">Español</a>`
- XPath: `/a[@class="m-l-0 underline cursor-pointer"]`

**Failure 3:**
- Message: Target has insufficient size
- HTML: `<a href="#googtrans(en\|ko)" lang="ko" hreflang="ko" translate="no" rel="alternate" class="underline cursor-pointer">한국어</a>`
- XPath: `/a[@class="underline cursor-pointer"]`

**Failure 4:**
- Message: Target has insufficient size
- HTML: `<a href="/">Home</a>`
- XPath: `/a`

**Failure 5:**
- Message: Target has insufficient size
- HTML: `<a href="../53/" class="btn btn-default btn-sm me-2 my-2">Apply for Death Certificate</a>`
- XPath: `/a[@class="btn btn-default btn-sm me-2 my-2"]`

*... and 2 more failures for this rule*

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 5.89:1 which is         below the required contrast of 7:1

### https://ca.gov/departments/193/services/15/

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)

**Failure 1:**
- Message: Target has insufficient size
- HTML: `<button type="button" data-bs-toggle="collapse" data-bs-target="#collapseOficial" aria-expanded="false" aria-controls="collapseOficial" class="btn-official mt-1 gray-900 color-black-hover">...</button>`
- XPath: `/button[@class="btn-official mt-1 gray-900 color-black-hover"]`

**Failure 2:**
- Message: Target has insufficient size
- HTML: `<a href="#googtrans(en\|es)" class="m-l-0 underline cursor-pointer" lang="es" hreflang="es" translate="no" rel="alternate">Español</a>`
- XPath: `/a[@class="m-l-0 underline cursor-pointer"]`

**Failure 3:**
- Message: Target has insufficient size
- HTML: `<a href="#googtrans(en\|ko)" lang="ko" hreflang="ko" translate="no" rel="alternate" class="underline cursor-pointer">한국어</a>`
- XPath: `/a[@class="underline cursor-pointer"]`

**Failure 4:**
- Message: Target has insufficient size
- HTML: `<a href="/">Home</a>`
- XPath: `/a`

**Failure 5:**
- Message: Target has insufficient size
- HTML: `<a href="../16/" class="btn btn-default btn-sm me-2 my-2">Find Where to File for Divorce</a>`
- XPath: `/a[@class="btn btn-default btn-sm me-2 my-2"]`

*... and 2 more failures for this rule*

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 5.89:1 which is         below the required contrast of 7:1

### https://ca.gov/departments/220/services/1194/

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)

**Failure 1:**
- Message: Target has insufficient size
- HTML: `<button type="button" data-bs-toggle="collapse" data-bs-target="#collapseOficial" aria-expanded="false" aria-controls="collapseOficial" class="btn-official mt-1 gray-900 color-black-hover">...</button>`
- XPath: `/button[@class="btn-official mt-1 gray-900 color-black-hover"]`

**Failure 2:**
- Message: Target has insufficient size
- HTML: `<a href="#googtrans(en\|es)" class="m-l-0 underline cursor-pointer" lang="es" hreflang="es" translate="no" rel="alternate">Español</a>`
- XPath: `/a[@class="m-l-0 underline cursor-pointer"]`

**Failure 3:**
- Message: Target has insufficient size
- HTML: `<a href="#googtrans(en\|ko)" lang="ko" hreflang="ko" translate="no" rel="alternate" class="underline cursor-pointer">한국어</a>`
- XPath: `/a[@class="underline cursor-pointer"]`

**Failure 4:**
- Message: Target has insufficient size
- HTML: `<a href="/">Home</a>`
- XPath: `/a`

**Failure 5:**
- Message: Target has insufficient size
- HTML: `<a href="../47/" class="btn btn-default btn-sm me-2 my-2">Change Home Address</a>`
- XPath: `/a[@class="btn btn-default btn-sm me-2 my-2"]`

*... and 2 more failures for this rule*

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 5.89:1 which is         below the required contrast of 7:1

### https://ca.gov/departments/236/services/33/

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)

**Failure 1:**
- Message: Target has insufficient size
- HTML: `<button type="button" data-bs-toggle="collapse" data-bs-target="#collapseOficial" aria-expanded="false" aria-controls="collapseOficial" class="btn-official mt-1 gray-900 color-black-hover">...</button>`
- XPath: `/button[@class="btn-official mt-1 gray-900 color-black-hover"]`

**Failure 2:**
- Message: Target has insufficient size
- HTML: `<a href="#googtrans(en\|es)" class="m-l-0 underline cursor-pointer" lang="es" hreflang="es" translate="no" rel="alternate">Español</a>`
- XPath: `/a[@class="m-l-0 underline cursor-pointer"]`

**Failure 3:**
- Message: Target has insufficient size
- HTML: `<a href="#googtrans(en\|ko)" lang="ko" hreflang="ko" translate="no" rel="alternate" class="underline cursor-pointer">한국어</a>`
- XPath: `/a[@class="underline cursor-pointer"]`

**Failure 4:**
- Message: Target has insufficient size
- HTML: `<a href="/">Home</a>`
- XPath: `/a`

**Failure 5:**
- Message: Target has insufficient size
- HTML: `<a href="../1167/" class="btn btn-default btn-sm me-2 my-2">CalEITC is bigger and better</a>`
- XPath: `/a[@class="btn btn-default btn-sm me-2 my-2"]`

*... and 2 more failures for this rule*

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 5.89:1 which is         below the required contrast of 7:1

### https://ca.gov/departments/287/services/25/

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)

**Failure 1:**
- Message: Target has insufficient size
- HTML: `<button type="button" data-bs-toggle="collapse" data-bs-target="#collapseOficial" aria-expanded="false" aria-controls="collapseOficial" class="btn-official mt-1 gray-900 color-black-hover">...</button>`
- XPath: `/button[@class="btn-official mt-1 gray-900 color-black-hover"]`

**Failure 2:**
- Message: Target has insufficient size
- HTML: `<a href="#googtrans(en\|es)" class="m-l-0 underline cursor-pointer" lang="es" hreflang="es" translate="no" rel="alternate">Español</a>`
- XPath: `/a[@class="m-l-0 underline cursor-pointer"]`

**Failure 3:**
- Message: Target has insufficient size
- HTML: `<a href="#googtrans(en\|ko)" lang="ko" hreflang="ko" translate="no" rel="alternate" class="underline cursor-pointer">한국어</a>`
- XPath: `/a[@class="underline cursor-pointer"]`

**Failure 4:**
- Message: Target has insufficient size
- HTML: `<a href="/">Home</a>`
- XPath: `/a`

**Failure 5:**
- Message: Target has insufficient size
- HTML: `<a href="../26/" class="btn btn-default btn-sm me-2 my-2">Apply for a Seller's Permit</a>`
- XPath: `/a[@class="btn btn-default btn-sm me-2 my-2"]`

*... and 2 more failures for this rule*

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 5.89:1 which is         below the required contrast of 7:1

### https://ca.gov/departments/287/services/26/

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)

**Failure 1:**
- Message: Target has insufficient size
- HTML: `<button type="button" data-bs-toggle="collapse" data-bs-target="#collapseOficial" aria-expanded="false" aria-controls="collapseOficial" class="btn-official mt-1 gray-900 color-black-hover">...</button>`
- XPath: `/button[@class="btn-official mt-1 gray-900 color-black-hover"]`

**Failure 2:**
- Message: Target has insufficient size
- HTML: `<a href="#googtrans(en\|es)" class="m-l-0 underline cursor-pointer" lang="es" hreflang="es" translate="no" rel="alternate">Español</a>`
- XPath: `/a[@class="m-l-0 underline cursor-pointer"]`

**Failure 3:**
- Message: Target has insufficient size
- HTML: `<a href="#googtrans(en\|ko)" lang="ko" hreflang="ko" translate="no" rel="alternate" class="underline cursor-pointer">한국어</a>`
- XPath: `/a[@class="underline cursor-pointer"]`

**Failure 4:**
- Message: Target has insufficient size
- HTML: `<a href="/">Home</a>`
- XPath: `/a`

**Failure 5:**
- Message: Target has insufficient size
- HTML: `<a href="../24/" class="btn btn-default btn-sm me-2 my-2">Look Up Tax Rates</a>`
- XPath: `/a[@class="btn btn-default btn-sm me-2 my-2"]`

*... and 2 more failures for this rule*

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 5.89:1 which is         below the required contrast of 7:1

### https://ca.gov/support/technical-help/

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)

**Failure 1:**
- Message: Target has insufficient size
- HTML: `<button type="button" data-bs-toggle="collapse" data-bs-target="#collapseOficial" aria-expanded="false" aria-controls="collapseOficial" class="btn-official mt-1 gray-900 color-black-hover">...</button>`
- XPath: `/button[@class="btn-official mt-1 gray-900 color-black-hover"]`

**Failure 2:**
- Message: Target has insufficient size
- HTML: `<a href="#googtrans(en\|es)" class="m-l-0 underline cursor-pointer" lang="es" hreflang="es" translate="no" rel="alternate">Español</a>`
- XPath: `/a[@class="m-l-0 underline cursor-pointer"]`

**Failure 3:**
- Message: Target has insufficient size
- HTML: `<a href="#googtrans(en\|ko)" lang="ko" hreflang="ko" translate="no" rel="alternate" class="underline cursor-pointer">한국어</a>`
- XPath: `/a[@class="underline cursor-pointer"]`

**Failure 4:**
- Message: Target has insufficient size
- HTML: `<a href="/">Home</a>`
- XPath: `/a`

**Failure 5:**
- Message: Target has insufficient size
- HTML: `<a href="/about/about-this-website/" class="d-block no-underline m-y font-size-16 color-white color-highlight-hover underline-hover">           About this website</a>`
- XPath: `/a[@class="d-block no-underline m-y font-size-16 color-white color-highlight-hover underline-hover"]`

*... and 1 more failures for this rule*

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 5.89:1 which is         below the required contrast of 7:1

### https://ca.gov/about-california/

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)

**Failure 1:**
- Message: Target has insufficient size
- HTML: `<button type="button" data-bs-toggle="collapse" data-bs-target="#collapseOficial" aria-expanded="false" aria-controls="collapseOficial" class="btn-official mt-1 gray-900 color-black-hover">...</button>`
- XPath: `/button[@class="btn-official mt-1 gray-900 color-black-hover"]`

**Failure 2:**
- Message: Target has insufficient size
- HTML: `<a href="#googtrans(en\|es)" class="m-l-0 underline cursor-pointer" lang="es" hreflang="es" translate="no" rel="alternate">Español</a>`
- XPath: `/a[@class="m-l-0 underline cursor-pointer"]`

**Failure 3:**
- Message: Target has insufficient size
- HTML: `<a href="#googtrans(en\|ko)" lang="ko" hreflang="ko" translate="no" rel="alternate" class="underline cursor-pointer">한국어</a>`
- XPath: `/a[@class="underline cursor-pointer"]`

**Failure 4:**
- Message: Target has insufficient size
- HTML: `<a href="/">Home</a>`
- XPath: `/a`

**Failure 5:**
- Message: Target has insufficient size
- HTML: `<a href="https://www.gov.ca.gov/" class="btn btn-primary btn-hover w-100">...</a>`
- XPath: `/a[@class="btn btn-primary btn-hover w-100"]`

*... and 5 more failures for this rule*

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 5.89:1 which is         below the required contrast of 7:1

### https://ca.gov/departments/

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)

**Failure 1:**
- Message: Target has insufficient size
- HTML: `<button type="button" data-bs-toggle="collapse" data-bs-target="#collapseOficial" aria-expanded="false" aria-controls="collapseOficial" class="btn-official mt-1 gray-900 color-black-hover">...</button>`
- XPath: `/button[@class="btn-official mt-1 gray-900 color-black-hover"]`

**Failure 2:**
- Message: Target has insufficient size
- HTML: `<a href="#googtrans(en\|es)" class="m-l-0 underline cursor-pointer" lang="es" hreflang="es" translate="no" rel="alternate">Español</a>`
- XPath: `/a[@class="m-l-0 underline cursor-pointer"]`

**Failure 3:**
- Message: Target has insufficient size
- HTML: `<a href="#googtrans(en\|ko)" lang="ko" hreflang="ko" translate="no" rel="alternate" class="underline cursor-pointer">한국어</a>`
- XPath: `/a[@class="underline cursor-pointer"]`

**Failure 4:**
- Message: Target has insufficient size
- HTML: `<a href="/">Home</a>`
- XPath: `/a`

**Failure 5:**
- Message: Target has insufficient size
- HTML: `<a href="/about/about-this-website/" class="d-block no-underline m-y font-size-16 color-white color-highlight-hover underline-hover">           About this website</a>`
- XPath: `/a[@class="d-block no-underline m-y font-size-16 color-white color-highlight-hover underline-hover"]`

*... and 1 more failures for this rule*

#### Rule: [SIA-R56: Landmarks with the same role are distinguishable](https://alfa.siteimprove.com/rules/sia-r56)

**Failure 1:**
- Message: Some `complementary` have the same name.

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 5.89:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R78: Headings of same level have text content between them](https://alfa.siteimprove.com/rules/sia-r78)

**Failure 1:**
- Message: There is no content between this heading and the next
- HTML: `<h3 class="m-a-0 lead bold">Department of Motor Vehicles</h3>`
- XPath: `/h3[@class="m-a-0 lead bold"]`

### https://ca.gov/topics/

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)

**Failure 1:**
- Message: Target has insufficient size
- HTML: `<button type="button" data-bs-toggle="collapse" data-bs-target="#collapseOficial" aria-expanded="false" aria-controls="collapseOficial" class="btn-official mt-1 gray-900 color-black-hover">...</button>`
- XPath: `/button[@class="btn-official mt-1 gray-900 color-black-hover"]`

**Failure 2:**
- Message: Target has insufficient size
- HTML: `<a href="#googtrans(en\|es)" class="m-l-0 underline cursor-pointer" lang="es" hreflang="es" translate="no" rel="alternate">Español</a>`
- XPath: `/a[@class="m-l-0 underline cursor-pointer"]`

**Failure 3:**
- Message: Target has insufficient size
- HTML: `<a href="#googtrans(en\|ko)" lang="ko" hreflang="ko" translate="no" rel="alternate" class="underline cursor-pointer">한국어</a>`
- XPath: `/a[@class="underline cursor-pointer"]`

**Failure 4:**
- Message: Target has insufficient size
- HTML: `<a href="/">Home</a>`
- XPath: `/a`

**Failure 5:**
- Message: Target has insufficient size
- HTML: `<a href="/topics/businesses/" class="color-p2 link-before text-left no-underline d-block">Businesses</a>`
- XPath: `/a[@class="color-p2 link-before text-left no-underline d-block"]`

*... and 2 more failures for this rule*

#### Rule: [SIA-R56: Landmarks with the same role are distinguishable](https://alfa.siteimprove.com/rules/sia-r56)

**Failure 1:**
- Message: Some `complementary` have the same name.

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 5.89:1 which is         below the required contrast of 7:1

### https://ca.gov/translate/

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)

**Failure 1:**
- Message: Target has insufficient size
- HTML: `<button type="button" data-bs-toggle="collapse" data-bs-target="#collapseOficial" aria-expanded="false" aria-controls="collapseOficial" class="btn-official mt-1 gray-900 color-black-hover">...</button>`
- XPath: `/button[@class="btn-official mt-1 gray-900 color-black-hover"]`

**Failure 2:**
- Message: Target has insufficient size
- HTML: `<a href="#googtrans(en\|es)" class="m-l-0 underline cursor-pointer" lang="es" hreflang="es" translate="no" rel="alternate">Español</a>`
- XPath: `/a[@class="m-l-0 underline cursor-pointer"]`

**Failure 3:**
- Message: Target has insufficient size
- HTML: `<a href="#googtrans(en\|ko)" lang="ko" hreflang="ko" translate="no" rel="alternate" class="underline cursor-pointer">한국어</a>`
- XPath: `/a[@class="underline cursor-pointer"]`

**Failure 4:**
- Message: Target has insufficient size
- HTML: `<a href="/">Home</a>`
- XPath: `/a`

**Failure 5:**
- Message: Target has insufficient size
- HTML: `<a href="/about/about-this-website/" class="d-block no-underline m-y font-size-16 color-white color-highlight-hover underline-hover">           About this website</a>`
- XPath: `/a[@class="d-block no-underline m-y font-size-16 color-white color-highlight-hover underline-hover"]`

*... and 1 more failures for this rule*

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 5.89:1 which is         below the required contrast of 7:1

### https://ca.gov/legal/conditions-of-use/

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)

**Failure 1:**
- Message: Target has insufficient size
- HTML: `<button type="button" data-bs-toggle="collapse" data-bs-target="#collapseOficial" aria-expanded="false" aria-controls="collapseOficial" class="btn-official mt-1 gray-900 color-black-hover">...</button>`
- XPath: `/button[@class="btn-official mt-1 gray-900 color-black-hover"]`

**Failure 2:**
- Message: Target has insufficient size
- HTML: `<a href="#googtrans(en\|es)" class="m-l-0 underline cursor-pointer" lang="es" hreflang="es" translate="no" rel="alternate">Español</a>`
- XPath: `/a[@class="m-l-0 underline cursor-pointer"]`

**Failure 3:**
- Message: Target has insufficient size
- HTML: `<a href="#googtrans(en\|ko)" lang="ko" hreflang="ko" translate="no" rel="alternate" class="underline cursor-pointer">한국어</a>`
- XPath: `/a[@class="underline cursor-pointer"]`

**Failure 4:**
- Message: Target has insufficient size
- HTML: `<a href="/">Home</a>`
- XPath: `/a`

**Failure 5:**
- Message: Target has insufficient size
- HTML: `<a href="/about/about-this-website/" class="d-block no-underline m-y font-size-16 color-white color-highlight-hover underline-hover">           About this website</a>`
- XPath: `/a[@class="d-block no-underline m-y font-size-16 color-white color-highlight-hover underline-hover"]`

*... and 1 more failures for this rule*

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 5.89:1 which is         below the required contrast of 7:1

### https://ca.gov/legal/privacy-policy/

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)

**Failure 1:**
- Message: Target has insufficient size
- HTML: `<button type="button" data-bs-toggle="collapse" data-bs-target="#collapseOficial" aria-expanded="false" aria-controls="collapseOficial" class="btn-official mt-1 gray-900 color-black-hover">...</button>`
- XPath: `/button[@class="btn-official mt-1 gray-900 color-black-hover"]`

**Failure 2:**
- Message: Target has insufficient size
- HTML: `<a href="#googtrans(en\|es)" class="m-l-0 underline cursor-pointer" lang="es" hreflang="es" translate="no" rel="alternate">Español</a>`
- XPath: `/a[@class="m-l-0 underline cursor-pointer"]`

**Failure 3:**
- Message: Target has insufficient size
- HTML: `<a href="#googtrans(en\|ko)" lang="ko" hreflang="ko" translate="no" rel="alternate" class="underline cursor-pointer">한국어</a>`
- XPath: `/a[@class="underline cursor-pointer"]`

**Failure 4:**
- Message: Target has insufficient size
- HTML: `<a href="/">Home</a>`
- XPath: `/a`

**Failure 5:**
- Message: Target has insufficient size
- HTML: `<a href="/about/about-this-website/" class="d-block no-underline m-y font-size-16 color-white color-highlight-hover underline-hover">           About this website</a>`
- XPath: `/a[@class="d-block no-underline m-y font-size-16 color-white color-highlight-hover underline-hover"]`

*... and 1 more failures for this rule*

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 5.89:1 which is         below the required contrast of 7:1

### https://ca.gov/topics/assistance/

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)

**Failure 1:**
- Message: Target has insufficient size
- HTML: `<button type="button" data-bs-toggle="collapse" data-bs-target="#collapseOficial" aria-expanded="false" aria-controls="collapseOficial" class="btn-official mt-1 gray-900 color-black-hover">...</button>`
- XPath: `/button[@class="btn-official mt-1 gray-900 color-black-hover"]`

**Failure 2:**
- Message: Target has insufficient size
- HTML: `<a href="#googtrans(en\|es)" class="m-l-0 underline cursor-pointer" lang="es" hreflang="es" translate="no" rel="alternate">Español</a>`
- XPath: `/a[@class="m-l-0 underline cursor-pointer"]`

**Failure 3:**
- Message: Target has insufficient size
- HTML: `<a href="#googtrans(en\|ko)" lang="ko" hreflang="ko" translate="no" rel="alternate" class="underline cursor-pointer">한국어</a>`
- XPath: `/a[@class="underline cursor-pointer"]`

**Failure 4:**
- Message: Target has insufficient size
- HTML: `<a href="/">Home</a>`
- XPath: `/a`

**Failure 5:**
- Message: Target has insufficient size
- HTML: `<a href="/departments/178/services/60/" class="link-before no-underline">Apply for food stamps</a>`
- XPath: `/a[@class="link-before no-underline"]`

*... and 2 more failures for this rule*

#### Rule: [SIA-R40](https://alfa.siteimprove.com/rules/sia-r40)

**Failure 1:**
- Message: The region does not have an accessible name
- HTML: `<h2 class="lead m-t items-count" aria-live="polite" role="region">...</h2>`
- XPath: `/h2[@class="lead m-t items-count"]`

#### Rule: [SIA-R56: Landmarks with the same role are distinguishable](https://alfa.siteimprove.com/rules/sia-r56)

**Failure 1:**
- Message: Some `complementary` have the same name.

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 5.89:1 which is         below the required contrast of 7:1

### https://ca.gov/topics/businesses/

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)

**Failure 1:**
- Message: Target has insufficient size
- HTML: `<button type="button" data-bs-toggle="collapse" data-bs-target="#collapseOficial" aria-expanded="false" aria-controls="collapseOficial" class="btn-official mt-1 gray-900 color-black-hover">...</button>`
- XPath: `/button[@class="btn-official mt-1 gray-900 color-black-hover"]`

**Failure 2:**
- Message: Target has insufficient size
- HTML: `<a href="#googtrans(en\|es)" class="m-l-0 underline cursor-pointer" lang="es" hreflang="es" translate="no" rel="alternate">Español</a>`
- XPath: `/a[@class="m-l-0 underline cursor-pointer"]`

**Failure 3:**
- Message: Target has insufficient size
- HTML: `<a href="#googtrans(en\|ko)" lang="ko" hreflang="ko" translate="no" rel="alternate" class="underline cursor-pointer">한국어</a>`
- XPath: `/a[@class="underline cursor-pointer"]`

**Failure 4:**
- Message: Target has insufficient size
- HTML: `<a href="/">Home</a>`
- XPath: `/a`

**Failure 5:**
- Message: Target has insufficient size
- HTML: `<a href="/departments/287/services/26/" class="link-before no-underline">Apply for a seller’s permit</a>`
- XPath: `/a[@class="link-before no-underline"]`

*... and 2 more failures for this rule*

#### Rule: [SIA-R40](https://alfa.siteimprove.com/rules/sia-r40)

**Failure 1:**
- Message: The region does not have an accessible name
- HTML: `<h2 class="lead m-t items-count" aria-live="polite" role="region">...</h2>`
- XPath: `/h2[@class="lead m-t items-count"]`

#### Rule: [SIA-R56: Landmarks with the same role are distinguishable](https://alfa.siteimprove.com/rules/sia-r56)

**Failure 1:**
- Message: Some `complementary` have the same name.

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 5.89:1 which is         below the required contrast of 7:1

### https://ca.gov/topics/disaster-recovery/

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)

**Failure 1:**
- Message: Target has insufficient size
- HTML: `<button type="button" data-bs-toggle="collapse" data-bs-target="#collapseOficial" aria-expanded="false" aria-controls="collapseOficial" class="btn-official mt-1 gray-900 color-black-hover">...</button>`
- XPath: `/button[@class="btn-official mt-1 gray-900 color-black-hover"]`

**Failure 2:**
- Message: Target has insufficient size
- HTML: `<a href="#googtrans(en\|es)" class="m-l-0 underline cursor-pointer" lang="es" hreflang="es" translate="no" rel="alternate">Español</a>`
- XPath: `/a[@class="m-l-0 underline cursor-pointer"]`

**Failure 3:**
- Message: Target has insufficient size
- HTML: `<a href="#googtrans(en\|ko)" lang="ko" hreflang="ko" translate="no" rel="alternate" class="underline cursor-pointer">한국어</a>`
- XPath: `/a[@class="underline cursor-pointer"]`

**Failure 4:**
- Message: Target has insufficient size
- HTML: `<a href="/">Home</a>`
- XPath: `/a`

**Failure 5:**
- Message: Target has insufficient size
- HTML: `<a href="/about/about-this-website/" class="d-block no-underline m-y font-size-16 color-white color-highlight-hover underline-hover">           About this website</a>`
- XPath: `/a[@class="d-block no-underline m-y font-size-16 color-white color-highlight-hover underline-hover"]`

*... and 1 more failures for this rule*

#### Rule: [SIA-R56: Landmarks with the same role are distinguishable](https://alfa.siteimprove.com/rules/sia-r56)

**Failure 1:**
- Message: Some `complementary` have the same name.

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 5.89:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R73: Text spacing can be adjusted without loss of content](https://alfa.siteimprove.com/rules/sia-r73)

**Failure 1:**
- Message: The line height of the paragraph is `normal` which will result in a line height of less than 1.5
- HTML: `<p>...</p>`
- XPath: `/p`

### https://ca.gov/topics/dmv-auto/

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)

**Failure 1:**
- Message: Target has insufficient size
- HTML: `<button type="button" data-bs-toggle="collapse" data-bs-target="#collapseOficial" aria-expanded="false" aria-controls="collapseOficial" class="btn-official mt-1 gray-900 color-black-hover">...</button>`
- XPath: `/button[@class="btn-official mt-1 gray-900 color-black-hover"]`

**Failure 2:**
- Message: Target has insufficient size
- HTML: `<a href="#googtrans(en\|es)" class="m-l-0 underline cursor-pointer" lang="es" hreflang="es" translate="no" rel="alternate">Español</a>`
- XPath: `/a[@class="m-l-0 underline cursor-pointer"]`

**Failure 3:**
- Message: Target has insufficient size
- HTML: `<a href="#googtrans(en\|ko)" lang="ko" hreflang="ko" translate="no" rel="alternate" class="underline cursor-pointer">한국어</a>`
- XPath: `/a[@class="underline cursor-pointer"]`

**Failure 4:**
- Message: Target has insufficient size
- HTML: `<a href="/">Home</a>`
- XPath: `/a`

**Failure 5:**
- Message: Target has insufficient size
- HTML: `<a href="/departments/193/services/15/" class="link-before no-underline">Pay traffic ticket</a>`
- XPath: `/a[@class="link-before no-underline"]`

*... and 2 more failures for this rule*

#### Rule: [SIA-R40](https://alfa.siteimprove.com/rules/sia-r40)

**Failure 1:**
- Message: The region does not have an accessible name
- HTML: `<h2 class="lead m-t items-count" aria-live="polite" role="region">...</h2>`
- XPath: `/h2[@class="lead m-t items-count"]`

#### Rule: [SIA-R56: Landmarks with the same role are distinguishable](https://alfa.siteimprove.com/rules/sia-r56)

**Failure 1:**
- Message: Some `complementary` have the same name.

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 5.89:1 which is         below the required contrast of 7:1

### https://ca.gov/topics/jobs/

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)

**Failure 1:**
- Message: Target has insufficient size
- HTML: `<button type="button" data-bs-toggle="collapse" data-bs-target="#collapseOficial" aria-expanded="false" aria-controls="collapseOficial" class="btn-official mt-1 gray-900 color-black-hover">...</button>`
- XPath: `/button[@class="btn-official mt-1 gray-900 color-black-hover"]`

**Failure 2:**
- Message: Target has insufficient size
- HTML: `<a href="#googtrans(en\|es)" class="m-l-0 underline cursor-pointer" lang="es" hreflang="es" translate="no" rel="alternate">Español</a>`
- XPath: `/a[@class="m-l-0 underline cursor-pointer"]`

**Failure 3:**
- Message: Target has insufficient size
- HTML: `<a href="#googtrans(en\|ko)" lang="ko" hreflang="ko" translate="no" rel="alternate" class="underline cursor-pointer">한국어</a>`
- XPath: `/a[@class="underline cursor-pointer"]`

**Failure 4:**
- Message: Target has insufficient size
- HTML: `<a href="/">Home</a>`
- XPath: `/a`

**Failure 5:**
- Message: Target has insufficient size
- HTML: `<a href="/departments/89/services/39/" class="link-before no-underline">Find a California state job</a>`
- XPath: `/a[@class="link-before no-underline"]`

*... and 2 more failures for this rule*

#### Rule: [SIA-R40](https://alfa.siteimprove.com/rules/sia-r40)

**Failure 1:**
- Message: The region does not have an accessible name
- HTML: `<h2 class="lead m-t items-count" aria-live="polite" role="region">...</h2>`
- XPath: `/h2[@class="lead m-t items-count"]`

#### Rule: [SIA-R56: Landmarks with the same role are distinguishable](https://alfa.siteimprove.com/rules/sia-r56)

**Failure 1:**
- Message: Some `complementary` have the same name.

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 5.89:1 which is         below the required contrast of 7:1

### https://ca.gov/topics/personal-records/

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)

**Failure 1:**
- Message: Target has insufficient size
- HTML: `<button type="button" data-bs-toggle="collapse" data-bs-target="#collapseOficial" aria-expanded="false" aria-controls="collapseOficial" class="btn-official mt-1 gray-900 color-black-hover">...</button>`
- XPath: `/button[@class="btn-official mt-1 gray-900 color-black-hover"]`

**Failure 2:**
- Message: Target has insufficient size
- HTML: `<a href="#googtrans(en\|es)" class="m-l-0 underline cursor-pointer" lang="es" hreflang="es" translate="no" rel="alternate">Español</a>`
- XPath: `/a[@class="m-l-0 underline cursor-pointer"]`

**Failure 3:**
- Message: Target has insufficient size
- HTML: `<a href="#googtrans(en\|ko)" lang="ko" hreflang="ko" translate="no" rel="alternate" class="underline cursor-pointer">한국어</a>`
- XPath: `/a[@class="underline cursor-pointer"]`

**Failure 4:**
- Message: Target has insufficient size
- HTML: `<a href="/">Home</a>`
- XPath: `/a`

**Failure 5:**
- Message: Target has insufficient size
- HTML: `<a href="/departments/176/services/52/" class="link-before no-underline">Apply for a birth certificate</a>`
- XPath: `/a[@class="link-before no-underline"]`

*... and 2 more failures for this rule*

#### Rule: [SIA-R40](https://alfa.siteimprove.com/rules/sia-r40)

**Failure 1:**
- Message: The region does not have an accessible name
- HTML: `<h2 class="lead m-t items-count" aria-live="polite" role="region">...</h2>`
- XPath: `/h2[@class="lead m-t items-count"]`

#### Rule: [SIA-R56: Landmarks with the same role are distinguishable](https://alfa.siteimprove.com/rules/sia-r56)

**Failure 1:**
- Message: Some `complementary` have the same name.

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 5.89:1 which is         below the required contrast of 7:1

### https://ca.gov/topics/taxes/

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)

**Failure 1:**
- Message: Target has insufficient size
- HTML: `<button type="button" data-bs-toggle="collapse" data-bs-target="#collapseOficial" aria-expanded="false" aria-controls="collapseOficial" class="btn-official mt-1 gray-900 color-black-hover">...</button>`
- XPath: `/button[@class="btn-official mt-1 gray-900 color-black-hover"]`

**Failure 2:**
- Message: Target has insufficient size
- HTML: `<a href="#googtrans(en\|es)" class="m-l-0 underline cursor-pointer" lang="es" hreflang="es" translate="no" rel="alternate">Español</a>`
- XPath: `/a[@class="m-l-0 underline cursor-pointer"]`

**Failure 3:**
- Message: Target has insufficient size
- HTML: `<a href="#googtrans(en\|ko)" lang="ko" hreflang="ko" translate="no" rel="alternate" class="underline cursor-pointer">한국어</a>`
- XPath: `/a[@class="underline cursor-pointer"]`

**Failure 4:**
- Message: Target has insufficient size
- HTML: `<a href="/">Home</a>`
- XPath: `/a`

**Failure 5:**
- Message: Target has insufficient size
- HTML: `<a href="/departments/236/services/33/" class="link-before no-underline">Check your tax refund status</a>`
- XPath: `/a[@class="link-before no-underline"]`

*... and 2 more failures for this rule*

#### Rule: [SIA-R40](https://alfa.siteimprove.com/rules/sia-r40)

**Failure 1:**
- Message: The region does not have an accessible name
- HTML: `<h2 class="lead m-t items-count" aria-live="polite" role="region">...</h2>`
- XPath: `/h2[@class="lead m-t items-count"]`

#### Rule: [SIA-R56: Landmarks with the same role are distinguishable](https://alfa.siteimprove.com/rules/sia-r56)

**Failure 1:**
- Message: Some `complementary` have the same name.

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 5.89:1 which is         below the required contrast of 7:1

## Detailed Failure Information (axe)

### https://ca.gov/services/

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

**Failure 1:**
- Message: Certain ARIA roles must contain particular children
- HTML: `<ol class="do-first__list" role="list">`
- XPath: `.do-first__list`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div class="col-lg-3 pb-lg-5" role="complementary">`
- XPath: `.col-lg-3`

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
- HTML: `<div class="col-lg-3 pb-lg-5" role="complementary">`
- XPath: `.col-lg-3`

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

