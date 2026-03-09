# Scan Report: Kalamuna test

- Issue: https://github.com/mgifford/open-scans/issues/100
- Submitted by: andrewmallis
- Scanned at: 2026-03-09T14:34:09.270Z
- Engines used: All engines (AXE, ALFA, Equal Access, AccessLint, QualWeb)
- Scan duration: 1.8 minutes
- Total URLs submitted: 5
- Accepted public URLs: 5
- Rejected URLs: 0
- 🌙 Dark mode: None of the scanned URLs support `prefers-color-scheme: dark`
- ALFA outcomes: 3524 passed, 190 failed, 40 cantTell, 225 inapplicable
- axe outcomes: 4212 passed, 6 failed, 41 cantTell, 205 inapplicable
- Equal Access outcomes: 11623 passed, 397 failed (196 unique, 201 duplicate), 391 cantTell, 0 inapplicable
- AccessLint outcomes: 450 passed, 10 failed (10 unique, 0 duplicate), 0 cantTell, 0 inapplicable
- QualWeb outcomes: 1766 passed, 47 failed, 652 cantTell, 10 inapplicable
- Duplicate findings caught by later scanners: 324

## 🎯 Priority: Pages with Most Errors

Focus your efforts on these pages to make the biggest impact (combined scanner unique failures):

| Page | axe Unique | ALFA Unique | Equal Access Unique | AccessLint Unique | QualWeb | Total Unique | Page Title |
|---|---:|---:|---:|---:|---:|---:|---|
| [View Page](https://www.kalamuna.com/contact) | 2 | 28 | 54 | 3 | 4 | **91** | Contact us \| Kalamuna |
| [View Page](https://www.kalamuna.com/about) | 1 | 21 | 43 | 2 | 8 | **75** | About Kalamuna \| Kalamuna |
| [View Page](https://www.kalamuna.com/services) | 1 | 20 | 31 | 1 | 19 | **72** | Services \| Kalamuna |
| [View Page](https://www.kalamuna.com/) | 1 | 18 | 33 | 3 | 15 | **70** | Home \| Kalamuna |
| [View Page](https://www.kalamuna.com/work) | 1 | 19 | 35 | 1 | 1 | **57** | Work \| Kalamuna |

## 🔧 Priority: Most Common Issues (ALFA)

These ALFA accessibility issues appear most frequently across your pages:

| Rule | Pages Affected | Documentation |
|---|---:|---|
| [SIA-R111](https://alfa.siteimprove.com/rules/sia-r111): Interactive elements have a sufficient target size | **5** of 5 | [View Rule](https://alfa.siteimprove.com/rules/sia-r111) |
| [SIA-R3](https://alfa.siteimprove.com/rules/sia-r3): lang attribute has a valid language code | **5** of 5 | [View Rule](https://alfa.siteimprove.com/rules/sia-r3) |
| [SIA-R61](https://alfa.siteimprove.com/rules/sia-r61) | **5** of 5 | [View Rule](https://alfa.siteimprove.com/rules/sia-r61) |
| [SIA-R73](https://alfa.siteimprove.com/rules/sia-r73): Text spacing can be adjusted without loss of content | **5** of 5 | [View Rule](https://alfa.siteimprove.com/rules/sia-r73) |
| [SIA-R66](https://alfa.siteimprove.com/rules/sia-r66): Text has enhanced contrast with its background | **4** of 5 | [View Rule](https://alfa.siteimprove.com/rules/sia-r66) |
| [SIA-R60](https://alfa.siteimprove.com/rules/sia-r60) | **1** of 5 | [View Rule](https://alfa.siteimprove.com/rules/sia-r60) |
| [SIA-R53](https://alfa.siteimprove.com/rules/sia-r53): Headings follow a logical hierarchy | **1** of 5 | [View Rule](https://alfa.siteimprove.com/rules/sia-r53) |
| [SIA-R69](https://alfa.siteimprove.com/rules/sia-r69): Text has sufficient contrast with its background | **1** of 5 | [View Rule](https://alfa.siteimprove.com/rules/sia-r69) |
| [SIA-R85](https://alfa.siteimprove.com/rules/sia-r85) | **1** of 5 | [View Rule](https://alfa.siteimprove.com/rules/sia-r85) |

> 💡 **Tip**: Click on the rule documentation links to learn how to fix each issue.


## 🔧 Priority: Most Common Issues (axe)

These axe accessibility issues appear most frequently across your pages:

| Rule | Pages Affected | Documentation |
|---|---:|---|
| region | **5** of 5 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/region) |
| heading-order | **1** of 5 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/heading-order) |

> 💡 **Tip**: Click on the rule documentation links to learn how to fix each issue. Consider fixing the most common issues first for maximum impact.

> 🤖 **Future Enhancement**: This report will soon include AI-powered fix suggestions for authenticated GitHub users (opt-in only, no auto-run AI).

## 🔍 Cross-Page Patterns: Common HTML Issues

These HTML patterns cause the same accessibility errors across multiple pages. **Fix the pattern once in your codebase to fix it everywhere!**

### 🎯 Top Patterns to Fix (Highest Impact)

#### Pattern 1: Affects 5 page(s) - 13 occurrence(s)

**Scanner**: ALFA
**Rule**: [SIA-R73: Text spacing can be adjusted without loss of content](https://alfa.siteimprove.com/rules/sia-r73)
**Issue**: The line height of the paragraph is less than 1.5

**HTML Pattern**:
```html
<p>...</p>
```

**XPath** (use in browser DevTools):
```
/p
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('/p')`
5. The element will be highlighted

**Affected Pages**:
- https://www.kalamuna.com
- https://www.kalamuna.com/about
- https://www.kalamuna.com/contact
- https://www.kalamuna.com/services
- https://www.kalamuna.com/work

---

#### Pattern 2: Affects 5 page(s) - 10 occurrence(s)

**Scanner**: ALFA
**Rule**: [SIA-R3: lang attribute has a valid language code](https://alfa.siteimprove.com/rules/sia-r3)
**Issue**: The element does not have a unique ID

**HTML Pattern**:
```html
<div class="kcom-search-header-form block block-kcom-search block-search-button-block" data-drupal-selector="kcom-search-header-form" id="block-searchbuttonblock">...</div>
```

**XPath** (use in browser DevTools):
```
/div[@id="block-searchbuttonblock"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('/div[@id="block-searchbuttonblock"]')`
5. The element will be highlighted

**Affected Pages**:
- https://www.kalamuna.com
- https://www.kalamuna.com/about
- https://www.kalamuna.com/contact
- https://www.kalamuna.com/services
- https://www.kalamuna.com/work

---

#### Pattern 3: Affects 5 page(s) - 10 occurrence(s)

**Scanner**: ALFA
**Rule**: [SIA-R3: lang attribute has a valid language code](https://alfa.siteimprove.com/rules/sia-r3)
**Issue**: The element does not have a unique ID

**HTML Pattern**:
```html
<a id="search-toggle" href="" tabindex="0" aria-label="search toggle button" />
```

**XPath** (use in browser DevTools):
```
/a[@id="search-toggle"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('/a[@id="search-toggle"]')`
5. The element will be highlighted

**Affected Pages**:
- https://www.kalamuna.com
- https://www.kalamuna.com/about
- https://www.kalamuna.com/contact
- https://www.kalamuna.com/services
- https://www.kalamuna.com/work

---

#### Pattern 4: Affects 5 page(s) - 10 occurrence(s)

**Scanner**: ALFA
**Rule**: [SIA-R3: lang attribute has a valid language code](https://alfa.siteimprove.com/rules/sia-r3)
**Issue**: The element does not have a unique ID

**HTML Pattern**:
```html
<input data-drupal-selector="edit-search-content" type="text" id="edit-search-content" name="search_content" value="" maxlength="128" placeholder="Search" class="form-text" autocomplete="off" />
```

**XPath** (use in browser DevTools):
```
/input[@id="edit-search-content"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('/input[@id="edit-search-content"]')`
5. The element will be highlighted

**Affected Pages**:
- https://www.kalamuna.com
- https://www.kalamuna.com/about
- https://www.kalamuna.com/contact
- https://www.kalamuna.com/services
- https://www.kalamuna.com/work

---

#### Pattern 5: Affects 5 page(s) - 10 occurrence(s)

**Scanner**: ALFA
**Rule**: [SIA-R3: lang attribute has a valid language code](https://alfa.siteimprove.com/rules/sia-r3)
**Issue**: The element does not have a unique ID

**HTML Pattern**:
```html
<input data-drupal-selector="edit-search" type="submit" id="edit-search" name="op" value="Search" class="button button--primary js-form-submit form-submit" />
```

**XPath** (use in browser DevTools):
```
/input[@id="edit-search"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('/input[@id="edit-search"]')`
5. The element will be highlighted

**Affected Pages**:
- https://www.kalamuna.com
- https://www.kalamuna.com/about
- https://www.kalamuna.com/contact
- https://www.kalamuna.com/services
- https://www.kalamuna.com/work

---

#### Pattern 6: Affects 5 page(s) - 10 occurrence(s)

**Scanner**: ALFA
**Rule**: [SIA-R3: lang attribute has a valid language code](https://alfa.siteimprove.com/rules/sia-r3)
**Issue**: The element does not have a unique ID

**HTML Pattern**:
```html
<div id="block-lightmodeblock" class="block block-light-switch block-light-mode-block">...</div>
```

**XPath** (use in browser DevTools):
```
/div[@id="block-lightmodeblock"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('/div[@id="block-lightmodeblock"]')`
5. The element will be highlighted

**Affected Pages**:
- https://www.kalamuna.com
- https://www.kalamuna.com/about
- https://www.kalamuna.com/contact
- https://www.kalamuna.com/services
- https://www.kalamuna.com/work

---

#### Pattern 7: Affects 5 page(s) - 10 occurrence(s)

**Scanner**: ALFA
**Rule**: [SIA-R3: lang attribute has a valid language code](https://alfa.siteimprove.com/rules/sia-r3)
**Issue**: The element does not have a unique ID

**HTML Pattern**:
```html
<div id="block-darkmodeblock" class="block block-light-switch block-dark-mode-block">...</div>
```

**XPath** (use in browser DevTools):
```
/div[@id="block-darkmodeblock"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('/div[@id="block-darkmodeblock"]')`
5. The element will be highlighted

**Affected Pages**:
- https://www.kalamuna.com
- https://www.kalamuna.com/about
- https://www.kalamuna.com/contact
- https://www.kalamuna.com/services
- https://www.kalamuna.com/work

---

#### Pattern 8: Affects 5 page(s) - 10 occurrence(s)

**Scanner**: ALFA
**Rule**: [SIA-R3: lang attribute has a valid language code](https://alfa.siteimprove.com/rules/sia-r3)
**Issue**: The element does not have a unique ID

**HTML Pattern**:
```html
<a id="toggle-icon" class="toggle responsive-menu-toggle-icon hamburger hamburger--squeeze" title="Menu" href="#off-canvas">...</a>
```

**XPath** (use in browser DevTools):
```
/a[@id="toggle-icon"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('/a[@id="toggle-icon"]')`
5. The element will be highlighted

**Affected Pages**:
- https://www.kalamuna.com
- https://www.kalamuna.com/about
- https://www.kalamuna.com/contact
- https://www.kalamuna.com/services
- https://www.kalamuna.com/work

---

#### Pattern 9: Affects 5 page(s) - 5 occurrence(s)

**Scanner**: ALFA
**Rule**: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)
**Issue**: Target has insufficient size

**HTML Pattern**:
```html
<a id="search-toggle" href="" tabindex="0" aria-label="search toggle button" />
```

**XPath** (use in browser DevTools):
```
/a[@id="search-toggle"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('/a[@id="search-toggle"]')`
5. The element will be highlighted

**Affected Pages**:
- https://www.kalamuna.com
- https://www.kalamuna.com/about
- https://www.kalamuna.com/contact
- https://www.kalamuna.com/services
- https://www.kalamuna.com/work

---

#### Pattern 10: Affects 5 page(s) - 5 occurrence(s)

**Scanner**: ALFA
**Rule**: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)
**Issue**: Target has insufficient size

**HTML Pattern**:
```html
<a href="/careers" data-drupal-link-system-path="node/31">...</a>
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
- https://www.kalamuna.com
- https://www.kalamuna.com/about
- https://www.kalamuna.com/contact
- https://www.kalamuna.com/services
- https://www.kalamuna.com/work

---

#### Pattern 11: Affects 5 page(s) - 5 occurrence(s)

**Scanner**: ALFA
**Rule**: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)
**Issue**: Target has insufficient size

**HTML Pattern**:
```html
<a href="/privacy" data-drupal-link-system-path="node/49">...</a>
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
- https://www.kalamuna.com
- https://www.kalamuna.com/about
- https://www.kalamuna.com/contact
- https://www.kalamuna.com/services
- https://www.kalamuna.com/work

---

#### Pattern 12: Affects 5 page(s) - 5 occurrence(s)

**Scanner**: ALFA
**Rule**: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)
**Issue**: Target has insufficient size

**HTML Pattern**:
```html
<a href="/kalamuna-accessibility-statement" data-drupal-link-system-path="node/243">...</a>
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
- https://www.kalamuna.com
- https://www.kalamuna.com/about
- https://www.kalamuna.com/contact
- https://www.kalamuna.com/services
- https://www.kalamuna.com/work

---

#### Pattern 13: Affects 5 page(s) - 5 occurrence(s)

**Scanner**: axe
**Rule**: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate
**Issue**: All page content should be contained by landmarks

**HTML Pattern**:
```html
<a href="#main-content" class="visually-hidden focusable skip-link">
      Skip to main content
    </a>
```

**XPath** (use in browser DevTools):
```
.focusable
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.focusable')`
5. The element will be highlighted

**Affected Pages**:
- https://www.kalamuna.com
- https://www.kalamuna.com/about
- https://www.kalamuna.com/contact
- https://www.kalamuna.com/services
- https://www.kalamuna.com/work

---

#### Pattern 14: Affects 4 page(s) - 4 occurrence(s)

**Scanner**: ALFA
**Rule**: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)
**Issue**: Target has insufficient size

**HTML Pattern**:
```html
<a href="https://www.drupal.org/kalamuna" class="social-links--drupal ext" data-extlink="" rel="noreferrer">...</a>
```

**XPath** (use in browser DevTools):
```
/a[@class="social-links--drupal ext"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('/a[@class="social-links--drupal ext"]')`
5. The element will be highlighted

**Affected Pages**:
- https://www.kalamuna.com
- https://www.kalamuna.com/about
- https://www.kalamuna.com/services
- https://www.kalamuna.com/work

---

#### Pattern 15: Affects 4 page(s) - 4 occurrence(s)

**Scanner**: ALFA
**Rule**: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)
**Issue**: Target has insufficient size

**HTML Pattern**:
```html
<a href="https://github.com/kalamuna" class="social-links--github ext" data-extlink="" rel="noreferrer">...</a>
```

**XPath** (use in browser DevTools):
```
/a[@class="social-links--github ext"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('/a[@class="social-links--github ext"]')`
5. The element will be highlighted

**Affected Pages**:
- https://www.kalamuna.com
- https://www.kalamuna.com/about
- https://www.kalamuna.com/services
- https://www.kalamuna.com/work

---

> 💡 **Pro Tip**: These patterns likely come from shared components or templates in your codebase. Fix them in the component/template source, and the fix will propagate to all affected pages.

## 📊 Detailed Results

Complete scan results for all tested pages:

| Submitted URL | Final URL | Status | HTTP | Redirected | Time (ms) | axe Unique | ALFA Unique | Equal Access Unique | AccessLint Unique | Duplicates | Notes |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|
| https://www.kalamuna.com | https://www.kalamuna.com/ | OK | 200 | no | 26255 | 1 | 18 | 33 | 3 | 40 | Home \| Kalamuna |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R111 (Interactive elements have a sufficient target size), SIA-R3 (lang attribute has a valid language code), SIA-R61, SIA-R73 (Text spacing can be adjusted without loss of content) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_attribute_redundant, aria_content_in_landmark, aria_role_redundant, element_id_unique, element_tabbable_unobscured, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, style_viewport_resizable, svg_graphics_labelled, text_block_heading, text_contrast_sufficient |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: labels-and-names/frame-title, landmarks/region, text-alternatives/image-alt-words |
| https://www.kalamuna.com/about | https://www.kalamuna.com/about | OK | 200 | no | 22902 | 1 | 21 | 43 | 2 | 127 | About Kalamuna \| Kalamuna |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R111 (Interactive elements have a sufficient target size), SIA-R3 (lang attribute has a valid language code), SIA-R60, SIA-R61, SIA-R66 (Text has enhanced contrast with its background), SIA-R73 (Text spacing can be adjusted without loss of content) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_attribute_redundant, aria_content_in_landmark, aria_form_label_unique, aria_role_redundant, element_id_unique, element_tabbable_unobscured, fieldset_label_valid, fieldset_legend_valid, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, style_viewport_resizable, text_block_heading, text_contrast_sufficient |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/region, text-alternatives/image-alt-words |
| https://www.kalamuna.com/contact | https://www.kalamuna.com/contact | OK | 200 | no | 23027 | 2 | 28 | 54 | 3 | 32 | Contact us \| Kalamuna |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R111 (Interactive elements have a sufficient target size), SIA-R3 (lang attribute has a valid language code), SIA-R53 (Headings follow a logical hierarchy), SIA-R61, SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background), SIA-R73 (Text spacing can be adjusted without loss of content) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: heading-order, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_attribute_redundant, aria_attribute_valid, aria_content_in_landmark, aria_role_redundant, element_id_unique, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, frame_src_valid, input_checkboxes_grouped, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, style_viewport_resizable, text_block_heading, text_contrast_sufficient, text_sensory_misuse |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/focus-order, landmarks/region, navigable/heading-order |
| https://www.kalamuna.com/services | https://www.kalamuna.com/services | OK | 200 | no | 18130 | 1 | 20 | 31 | 1 | 65 | Services \| Kalamuna |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R111 (Interactive elements have a sufficient target size), SIA-R3 (lang attribute has a valid language code), SIA-R61, SIA-R66 (Text has enhanced contrast with its background), SIA-R73 (Text spacing can be adjusted without loss of content), SIA-R85 |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_attribute_redundant, aria_content_in_landmark, aria_role_redundant, element_id_unique, element_tabbable_unobscured, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, style_viewport_resizable, svg_graphics_labelled, text_block_heading, text_contrast_sufficient, text_sensory_misuse |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/region |
| https://www.kalamuna.com/work | https://www.kalamuna.com/work | OK | 200 | no | 19440 | 1 | 19 | 35 | 1 | 60 | Work \| Kalamuna |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R111 (Interactive elements have a sufficient target size), SIA-R3 (lang attribute has a valid language code), SIA-R61, SIA-R66 (Text has enhanced contrast with its background), SIA-R73 (Text spacing can be adjusted without loss of content) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_attribute_redundant, aria_content_in_landmark, aria_role_redundant, element_id_unique, element_tabbable_unobscured, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, style_viewport_resizable, svg_graphics_labelled, text_block_heading, text_contrast_sufficient, text_sensory_misuse |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/region |

## Detailed Failure Information (ALFA)

### https://www.kalamuna.com

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)

**Failure 1:**
- Message: Target has insufficient size
- HTML: `<a id="search-toggle" href="" tabindex="0" aria-label="search toggle button" />`
- XPath: `/a[@id="search-toggle"]`

**Failure 2:**
- Message: Target has insufficient size
- HTML: `<a href="/contact">Send us a Message</a>`
- XPath: `/a`

**Failure 3:**
- Message: Target has insufficient size
- HTML: `<a href="https://www.drupal.org/kalamuna" class="social-links--drupal ext" data-extlink="" rel="noreferrer">...</a>`
- XPath: `/a[@class="social-links--drupal ext"]`

**Failure 4:**
- Message: Target has insufficient size
- HTML: `<a href="https://github.com/kalamuna" class="social-links--github ext" data-extlink="" rel="noreferrer">...</a>`
- XPath: `/a[@class="social-links--github ext"]`

**Failure 5:**
- Message: Target has insufficient size
- HTML: `<a href="https://www.linkedin.com/company/kalamuna/" class="social-links--linkedin ext" data-extlink="" rel="noreferrer">...</a>`
- XPath: `/a[@class="social-links--linkedin ext"]`

*... and 3 more failures for this rule*

#### Rule: [SIA-R3: lang attribute has a valid language code](https://alfa.siteimprove.com/rules/sia-r3)

**Failure 1:**
- Message: The element does not have a unique ID
- HTML: `<div class="kcom-search-header-form block block-kcom-search block-search-button-block" data-drupal-selector="kcom-search-header-form" id="block-searchbuttonblock">...</div>`
- XPath: `/div[@id="block-searchbuttonblock"]`

**Failure 2:**
- Message: The element does not have a unique ID
- HTML: `<a id="search-toggle" href="" tabindex="0" aria-label="search toggle button" />`
- XPath: `/a[@id="search-toggle"]`

**Failure 3:**
- Message: The element does not have a unique ID
- HTML: `<form action="/" method="post" id="kcom-search-header-form" accept-charset="UTF-8" data-once="form-updated" data-drupal-form-fields="edit-search-content,edit-search" data-hs-cf-bound="true">...</form>`
- XPath: `/form[@id="kcom-search-header-form"]`

**Failure 4:**
- Message: The element does not have a unique ID
- HTML: `<input data-drupal-selector="edit-search-content" type="text" id="edit-search-content" name="search_content" value="" maxlength="128" placeholder="Search" class="form-text" autocomplete="off" />`
- XPath: `/input[@id="edit-search-content"]`

**Failure 5:**
- Message: The element does not have a unique ID
- HTML: `<input data-drupal-selector="edit-search" type="submit" id="edit-search" name="op" value="Search" class="button button--primary js-form-submit form-submit" />`
- XPath: `/input[@id="edit-search"]`

*... and 3 more failures for this rule*

#### Rule: [SIA-R61](https://alfa.siteimprove.com/rules/sia-r61)

**Failure 1:**
- Message: The document does not start with a level 1 heading

#### Rule: [SIA-R73: Text spacing can be adjusted without loss of content](https://alfa.siteimprove.com/rules/sia-r73)

**Failure 1:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p>...</p>`
- XPath: `/p`

### https://www.kalamuna.com/about

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)

**Failure 1:**
- Message: Target has insufficient size
- HTML: `<a id="search-toggle" href="" tabindex="0" aria-label="search toggle button" />`
- XPath: `/a[@id="search-toggle"]`

**Failure 2:**
- Message: Target has insufficient size
- HTML: `<a href="https://www.drupal.org/kalamuna" class="social-links--drupal ext" data-extlink="" rel="noreferrer">...</a>`
- XPath: `/a[@class="social-links--drupal ext"]`

**Failure 3:**
- Message: Target has insufficient size
- HTML: `<a href="https://github.com/kalamuna" class="social-links--github ext" data-extlink="" rel="noreferrer">...</a>`
- XPath: `/a[@class="social-links--github ext"]`

**Failure 4:**
- Message: Target has insufficient size
- HTML: `<a href="https://www.linkedin.com/company/kalamuna/" class="social-links--linkedin ext" data-extlink="" rel="noreferrer">...</a>`
- XPath: `/a[@class="social-links--linkedin ext"]`

**Failure 5:**
- Message: Target has insufficient size
- HTML: `<a href="https://www.facebook.com/kalamunatech/" class="social-links--facebook ext" data-extlink="" rel="noreferrer">...</a>`
- XPath: `/a[@class="social-links--facebook ext"]`

*... and 3 more failures for this rule*

#### Rule: [SIA-R3: lang attribute has a valid language code](https://alfa.siteimprove.com/rules/sia-r3)

**Failure 1:**
- Message: The element does not have a unique ID
- HTML: `<div class="kcom-search-header-form block block-kcom-search block-search-button-block" data-drupal-selector="kcom-search-header-form" id="block-searchbuttonblock">...</div>`
- XPath: `/div[@id="block-searchbuttonblock"]`

**Failure 2:**
- Message: The element does not have a unique ID
- HTML: `<a id="search-toggle" href="" tabindex="0" aria-label="search toggle button" />`
- XPath: `/a[@id="search-toggle"]`

**Failure 3:**
- Message: The element does not have a unique ID
- HTML: `<form action="/about/mike-mccaffrey" method="post" id="kcom-search-header-form" accept-charset="UTF-8" data-once="form-updated" data-drupal-form-fields="edit-search-content,edit-search" data-hs-cf-bound="true">...</form>`
- XPath: `/form[@id="kcom-search-header-form"]`

**Failure 4:**
- Message: The element does not have a unique ID
- HTML: `<input data-drupal-selector="edit-search-content" type="text" id="edit-search-content" name="search_content" value="" maxlength="128" placeholder="Search" class="form-text" autocomplete="off" />`
- XPath: `/input[@id="edit-search-content"]`

**Failure 5:**
- Message: The element does not have a unique ID
- HTML: `<input data-drupal-selector="edit-search" type="submit" id="edit-search" name="op" value="Search" class="button button--primary js-form-submit form-submit" />`
- XPath: `/input[@id="edit-search"]`

*... and 4 more failures for this rule*

#### Rule: [SIA-R60](https://alfa.siteimprove.com/rules/sia-r60)

**Failure 1:**
- Message: The grouping element has an accessible name
- HTML: `<fieldset data-drupal-selector="edit-field-bio-tags-target-id" id="edit-field-bio-tags-target-id--wrapper" class="fieldgroup form-composite js-form-item form-item js-form-wrapper form-wrapper">...</fieldset>`
- XPath: `/fieldset[@id="edit-field-bio-tags-target-id--wrapper"]`

#### Rule: [SIA-R61](https://alfa.siteimprove.com/rules/sia-r61)

**Failure 1:**
- Message: The document does not start with a level 1 heading

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 3.59:1 which is         below the required contrast of 4.5:1

#### Rule: [SIA-R73: Text spacing can be adjusted without loss of content](https://alfa.siteimprove.com/rules/sia-r73)

**Failure 1:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p>We were activists, artists, entrepreneurs, and do-...</p>`
- XPath: `/p`

### https://www.kalamuna.com/contact

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)

**Failure 1:**
- Message: Target has insufficient size
- HTML: `<a id="search-toggle" href="" tabindex="0" aria-label="search toggle button" />`
- XPath: `/a[@id="search-toggle"]`

**Failure 2:**
- Message: Target has insufficient size
- HTML: `<a href="https://www.google.com/maps/place/Kalamuna+Inc/@37.8028069,-122.2751097,17z/data=!3m1!4b1!4m5!3m4!1s0x808f80b3dc1faa5b:0x80851bf1900c0d06!8m2!3d37.8028027!4d-122.272921" title="Kalamuna Oakland, " class="ext" data-extlink="" rel="noreferrer">...</a>`
- XPath: `/a[@class="ext"]`

**Failure 3:**
- Message: Target has insufficient size
- HTML: `<a href="mailto:hello@kalamuna.com" class="mailto" data-extlink="">...</a>`
- XPath: `/a[@class="mailto"]`

**Failure 4:**
- Message: Target has insufficient size
- HTML: `<a href="tel:+18006747784">1.800.674.7784</a>`
- XPath: `/a`

**Failure 5:**
- Message: Target has insufficient size
- HTML: `<a class="social-links--drupal ext" data-extlink="" href="https://www.drupal.org/kalamuna" rel="noreferrer">...</a>`
- XPath: `/a[@class="social-links--drupal ext"]`

*... and 10 more failures for this rule*

#### Rule: [SIA-R3: lang attribute has a valid language code](https://alfa.siteimprove.com/rules/sia-r3)

**Failure 1:**
- Message: The element does not have a unique ID
- HTML: `<div class="kcom-search-header-form block block-kcom-search block-search-button-block" data-drupal-selector="kcom-search-header-form" id="block-searchbuttonblock">...</div>`
- XPath: `/div[@id="block-searchbuttonblock"]`

**Failure 2:**
- Message: The element does not have a unique ID
- HTML: `<a id="search-toggle" href="" tabindex="0" aria-label="search toggle button" />`
- XPath: `/a[@id="search-toggle"]`

**Failure 3:**
- Message: The element does not have a unique ID
- HTML: `<form action="/contact" method="post" id="kcom-search-header-form" accept-charset="UTF-8" data-hs-cf-bound="true" data-once="form-updated webform-auto-file-upload" data-drupal-form-fields="edit-search-content,edit-search">...</form>`
- XPath: `/form[@id="kcom-search-header-form"]`

**Failure 4:**
- Message: The element does not have a unique ID
- HTML: `<input data-drupal-selector="edit-search-content" type="text" id="edit-search-content" name="search_content" value="" maxlength="128" placeholder="Search" class="form-text" autocomplete="off" />`
- XPath: `/input[@id="edit-search-content"]`

**Failure 5:**
- Message: The element does not have a unique ID
- HTML: `<input data-drupal-selector="edit-search" type="submit" id="edit-search" name="op" value="Search" class="button button--primary js-form-submit form-submit" />`
- XPath: `/input[@id="edit-search"]`

*... and 3 more failures for this rule*

#### Rule: [SIA-R53: Headings follow a logical hierarchy](https://alfa.siteimprove.com/rules/sia-r53)

**Failure 1:**
- Message: The heading skips one or more levels
- HTML: `<h5>...</h5>`
- XPath: `/h5`

#### Rule: [SIA-R61](https://alfa.siteimprove.com/rules/sia-r61)

**Failure 1:**
- Message: The document does not start with a level 1 heading

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 3.59:1 which is         below the required contrast of 4.5:1

#### Rule: [SIA-R69: Text has sufficient contrast with its background](https://alfa.siteimprove.com/rules/sia-r69)

**Failure 1:**
- Message: The highest possible contrast of the text is 4.13:1 which is         below the required contrast of 4.5:1

#### Rule: [SIA-R73: Text spacing can be adjusted without loss of content](https://alfa.siteimprove.com/rules/sia-r73)

**Failure 1:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p>...</p>`
- XPath: `/p`

### https://www.kalamuna.com/services

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)

**Failure 1:**
- Message: Target has insufficient size
- HTML: `<a id="search-toggle" href="" tabindex="0" aria-label="search toggle button" />`
- XPath: `/a[@id="search-toggle"]`

**Failure 2:**
- Message: Target has insufficient size
- HTML: `<a href="https://www.drupal.org/kalamuna" class="social-links--drupal ext" data-extlink="" rel="noreferrer">...</a>`
- XPath: `/a[@class="social-links--drupal ext"]`

**Failure 3:**
- Message: Target has insufficient size
- HTML: `<a href="https://github.com/kalamuna" class="social-links--github ext" data-extlink="" rel="noreferrer">...</a>`
- XPath: `/a[@class="social-links--github ext"]`

**Failure 4:**
- Message: Target has insufficient size
- HTML: `<a href="https://www.linkedin.com/company/kalamuna/" class="social-links--linkedin ext" data-extlink="" rel="noreferrer">...</a>`
- XPath: `/a[@class="social-links--linkedin ext"]`

**Failure 5:**
- Message: Target has insufficient size
- HTML: `<a href="https://www.facebook.com/kalamunatech/" class="social-links--facebook ext" data-extlink="" rel="noreferrer">...</a>`
- XPath: `/a[@class="social-links--facebook ext"]`

*... and 3 more failures for this rule*

#### Rule: [SIA-R3: lang attribute has a valid language code](https://alfa.siteimprove.com/rules/sia-r3)

**Failure 1:**
- Message: The element does not have a unique ID
- HTML: `<div class="kcom-search-header-form block block-kcom-search block-search-button-block" data-drupal-selector="kcom-search-header-form" id="block-searchbuttonblock">...</div>`
- XPath: `/div[@id="block-searchbuttonblock"]`

**Failure 2:**
- Message: The element does not have a unique ID
- HTML: `<a id="search-toggle" href="" tabindex="0" aria-label="search toggle button" />`
- XPath: `/a[@id="search-toggle"]`

**Failure 3:**
- Message: The element does not have a unique ID
- HTML: `<form action="/services" method="post" id="kcom-search-header-form" accept-charset="UTF-8" data-once="form-updated" data-drupal-form-fields="edit-search-content,edit-search" data-hs-cf-bound="true">...</form>`
- XPath: `/form[@id="kcom-search-header-form"]`

**Failure 4:**
- Message: The element does not have a unique ID
- HTML: `<input data-drupal-selector="edit-search-content" type="text" id="edit-search-content" name="search_content" value="" maxlength="128" placeholder="Search" class="form-text" autocomplete="off" />`
- XPath: `/input[@id="edit-search-content"]`

**Failure 5:**
- Message: The element does not have a unique ID
- HTML: `<input data-drupal-selector="edit-search" type="submit" id="edit-search" name="op" value="Search" class="button button--primary js-form-submit form-submit" />`
- XPath: `/input[@id="edit-search"]`

*... and 3 more failures for this rule*

#### Rule: [SIA-R61](https://alfa.siteimprove.com/rules/sia-r61)

**Failure 1:**
- Message: The document does not start with a level 1 heading

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 3.59:1 which is         below the required contrast of 4.5:1

#### Rule: [SIA-R73: Text spacing can be adjusted without loss of content](https://alfa.siteimprove.com/rules/sia-r73)

**Failure 1:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p>Kalamuna was the perfect partner for our website o...</p>`
- XPath: `/p`

#### Rule: [SIA-R85](https://alfa.siteimprove.com/rules/sia-r85)

**Failure 1:**
- Message: The text of the paragraph is all italic
- HTML: `<p>Kalamuna was the perfect partner for our website o...</p>`
- XPath: `/p`

### https://www.kalamuna.com/work

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)

**Failure 1:**
- Message: Target has insufficient size
- HTML: `<a id="search-toggle" href="" tabindex="0" aria-label="search toggle button" />`
- XPath: `/a[@id="search-toggle"]`

**Failure 2:**
- Message: Target has insufficient size
- HTML: `<a href="https://www.drupal.org/kalamuna" class="social-links--drupal ext" data-extlink="" rel="noreferrer">...</a>`
- XPath: `/a[@class="social-links--drupal ext"]`

**Failure 3:**
- Message: Target has insufficient size
- HTML: `<a href="https://github.com/kalamuna" class="social-links--github ext" data-extlink="" rel="noreferrer">...</a>`
- XPath: `/a[@class="social-links--github ext"]`

**Failure 4:**
- Message: Target has insufficient size
- HTML: `<a href="https://www.linkedin.com/company/kalamuna/" class="social-links--linkedin ext" data-extlink="" rel="noreferrer">...</a>`
- XPath: `/a[@class="social-links--linkedin ext"]`

**Failure 5:**
- Message: Target has insufficient size
- HTML: `<a href="https://www.facebook.com/kalamunatech/" class="social-links--facebook ext" data-extlink="" rel="noreferrer">...</a>`
- XPath: `/a[@class="social-links--facebook ext"]`

*... and 3 more failures for this rule*

#### Rule: [SIA-R3: lang attribute has a valid language code](https://alfa.siteimprove.com/rules/sia-r3)

**Failure 1:**
- Message: The element does not have a unique ID
- HTML: `<div class="kcom-search-header-form block block-kcom-search block-search-button-block" data-drupal-selector="kcom-search-header-form" id="block-searchbuttonblock">...</div>`
- XPath: `/div[@id="block-searchbuttonblock"]`

**Failure 2:**
- Message: The element does not have a unique ID
- HTML: `<a id="search-toggle" href="" tabindex="0" aria-label="search toggle button" />`
- XPath: `/a[@id="search-toggle"]`

**Failure 3:**
- Message: The element does not have a unique ID
- HTML: `<form action="/portfolio/citris-and-banatao-institute" method="post" id="kcom-search-header-form" accept-charset="UTF-8" data-once="form-updated" data-drupal-form-fields="edit-search-content,edit-search" data-hs-cf-bound="true">...</form>`
- XPath: `/form[@id="kcom-search-header-form"]`

**Failure 4:**
- Message: The element does not have a unique ID
- HTML: `<input data-drupal-selector="edit-search-content" type="text" id="edit-search-content" name="search_content" value="" maxlength="128" placeholder="Search" class="form-text" autocomplete="off" />`
- XPath: `/input[@id="edit-search-content"]`

**Failure 5:**
- Message: The element does not have a unique ID
- HTML: `<input data-drupal-selector="edit-search" type="submit" id="edit-search" name="op" value="Search" class="button button--primary js-form-submit form-submit" />`
- XPath: `/input[@id="edit-search"]`

*... and 3 more failures for this rule*

#### Rule: [SIA-R61](https://alfa.siteimprove.com/rules/sia-r61)

**Failure 1:**
- Message: The document does not start with a level 1 heading

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 3.59:1 which is         below the required contrast of 4.5:1

#### Rule: [SIA-R73: Text spacing can be adjusted without loss of content](https://alfa.siteimprove.com/rules/sia-r73)

**Failure 1:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p>Get a sense of what it's like to work with us and ...</p>`
- XPath: `/p`

## Detailed Failure Information (axe)

### https://www.kalamuna.com

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable skip-link">       Skip to main content     </a>`
- XPath: `.focusable`

### https://www.kalamuna.com/about

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable skip-link">       Skip to main content     </a>`
- XPath: `.focusable`

### https://www.kalamuna.com/contact

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h5>`
- XPath: `.location:nth-child(1) > h5`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable skip-link">       Skip to main content     </a>`
- XPath: `.focusable`

### https://www.kalamuna.com/services

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable skip-link">       Skip to main content     </a>`
- XPath: `.focusable`

### https://www.kalamuna.com/work

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable skip-link">       Skip to main content     </a>`
- XPath: `.focusable`

