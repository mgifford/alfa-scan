# Scan Report: Italy

- Issue: https://github.com/mgifford/open-scans/issues/70
- Submitted by: mgifford
- Scanned at: 2026-03-11T00:49:38.371Z
- Engines used: ALFA, EQUALACCESS
- Scan duration: 9.1 minutes
- Total URLs submitted: 68
- Accepted public URLs: 68
- Rejected URLs: 0
- 🌙 Dark mode: None of the scanned URLs support `prefers-color-scheme: dark`
- ALFA outcomes: 46974 passed, 6384 failed, 856 cantTell, 3498 inapplicable
- axe outcomes: 0 passed, 0 failed, 0 cantTell, 0 inapplicable
- Equal Access outcomes: 126873 passed, 2732 failed (2275 unique, 457 duplicate), 2347 cantTell, 0 inapplicable
- AccessLint outcomes: 0 passed, 0 failed (0 unique, 0 duplicate), 0 cantTell, 0 inapplicable
- QualWeb outcomes: 0 passed, 0 failed, 0 cantTell, 0 inapplicable
- Duplicate findings caught by later scanners: 5612

## 🎯 Priority: Pages with Most Errors

Focus your efforts on these pages to make the biggest impact (combined scanner unique failures):

| Page | axe Unique | ALFA Unique | Equal Access Unique | AccessLint Unique | QualWeb | Total Unique | Page Title |
|---|---:|---:|---:|---:|---:|---:|---|
| [View Page](https://www.governo.it/it/il-presidente) | 0 | 27 | 43 | 0 | 0 | **70** | Il Presidente \| www.governo.it |
| [View Page](https://www.governo.it/it/campagne-di-comunicazione) | 0 | 18 | 46 | 0 | 0 | **64** | Campagne di Comunicazione della XIX Legislatura \| www.governo.it |
| [View Page](https://www.governo.it/it/gallerie-del-presidente) | 0 | 18 | 46 | 0 | 0 | **64** | Il Presidente del Consiglio: gallerie foto e video \| www.governo.it |
| [View Page](https://www.governo.it/it/gallerie) | 0 | 18 | 46 | 0 | 0 | **64** | Gallerie foto e video \| www.governo.it |
| [View Page](https://www.governo.it/it/gallerie-governo) | 0 | 17 | 46 | 0 | 0 | **63** | Governo: gallerie foto e video \| www.governo.it |
| [View Page](https://www.governo.it/it) | 0 | 22 | 40 | 0 | 0 | **62** | www.governo.it \| Governo Italiano Presidenza del Consiglio dei Ministri |
| [View Page](https://www.governo.it/it) | 0 | 22 | 40 | 0 | 0 | **62** | www.governo.it \| Governo Italiano Presidenza del Consiglio dei Ministri |
| [View Page](https://www.governo.it/it/il-governo) | 0 | 20 | 42 | 0 | 0 | **62** | Il Governo \| www.governo.it |
| [View Page](https://www.governo.it/it/piano-mattei) | 0 | 21 | 40 | 0 | 0 | **61** | Piano Mattei per l'Africa \| www.governo.it |
| [View Page](https://www.governo.it/it/i-ministeri-0) | 0 | 20 | 41 | 0 | 0 | **61** | I Ministeri \| www.governo.it |

## 🔧 Priority: Most Common Issues (ALFA)

These ALFA accessibility issues appear most frequently across your pages:

| Rule | Pages Affected | Documentation |
|---|---:|---|
| [SIA-R11](https://alfa.siteimprove.com/rules/sia-r11): Button elements have an accessible name | **67** of 68 | [View Rule](https://alfa.siteimprove.com/rules/sia-r11) |
| [SIA-R111](https://alfa.siteimprove.com/rules/sia-r111): Interactive elements have a sufficient target size | **67** of 68 | [View Rule](https://alfa.siteimprove.com/rules/sia-r111) |
| [SIA-R53](https://alfa.siteimprove.com/rules/sia-r53): Headings follow a logical hierarchy | **67** of 68 | [View Rule](https://alfa.siteimprove.com/rules/sia-r53) |
| [SIA-R57](https://alfa.siteimprove.com/rules/sia-r57): Landmarks don't repeat the same content | **67** of 68 | [View Rule](https://alfa.siteimprove.com/rules/sia-r57) |
| [SIA-R66](https://alfa.siteimprove.com/rules/sia-r66): Text has enhanced contrast with its background | **67** of 68 | [View Rule](https://alfa.siteimprove.com/rules/sia-r66) |
| [SIA-R69](https://alfa.siteimprove.com/rules/sia-r69): Text has sufficient contrast with its background | **67** of 68 | [View Rule](https://alfa.siteimprove.com/rules/sia-r69) |
| [SIA-R72](https://alfa.siteimprove.com/rules/sia-r72) | **67** of 68 | [View Rule](https://alfa.siteimprove.com/rules/sia-r72) |
| [SIA-R73](https://alfa.siteimprove.com/rules/sia-r73): Text spacing can be adjusted without loss of content | **67** of 68 | [View Rule](https://alfa.siteimprove.com/rules/sia-r73) |
| [SIA-R74](https://alfa.siteimprove.com/rules/sia-r74) | **67** of 68 | [View Rule](https://alfa.siteimprove.com/rules/sia-r74) |
| [SIA-R78](https://alfa.siteimprove.com/rules/sia-r78): Headings of same level have text content between them | **67** of 68 | [View Rule](https://alfa.siteimprove.com/rules/sia-r78) |

> 💡 **Tip**: Click on the rule documentation links to learn how to fix each issue.


## 🔧 Priority: Most Common Issues (axe)

These axe accessibility issues appear most frequently across your pages:

✅ No axe failed rules detected!

## 🔍 Cross-Page Patterns: Common HTML Issues

These HTML patterns cause the same accessibility errors across multiple pages. **Fix the pattern once in your codebase to fix it everywhere!**

### 🎯 Top Patterns to Fix (Highest Impact)

#### Pattern 1: Affects 67 page(s) - 421 occurrence(s)

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
- https://governo.it/
- https://governo.it/en
- https://governo.it/it
- https://governo.it/pubblicit%C3%A0-legale
- https://governo.it/it/agenda
- *...and 62 more page(s)*

---

#### Pattern 2: Affects 67 page(s) - 67 occurrence(s)

**Scanner**: ALFA
**Rule**: [SIA-R11: Button elements have an accessible name](https://alfa.siteimprove.com/rules/sia-r11)
**Issue**: The link does not have an accessible name

**HTML Pattern**:
```html
<a href="#" class="toggle-menu menu-left push-body jPushMenuBtn">...</a>
```

**XPath** (use in browser DevTools):
```
/a[@class="toggle-menu menu-left push-body jPushMenuBtn"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('/a[@class="toggle-menu menu-left push-body jPushMenuBtn"]')`
5. The element will be highlighted

**Affected Pages**:
- https://governo.it/
- https://governo.it/en
- https://governo.it/it
- https://governo.it/pubblicit%C3%A0-legale
- https://governo.it/it/agenda
- *...and 62 more page(s)*

---

#### Pattern 3: Affects 67 page(s) - 67 occurrence(s)

**Scanner**: ALFA
**Rule**: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)
**Issue**: Target has insufficient size

**HTML Pattern**:
```html
<a href="https://www.governo.it">IT</a>
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
- https://governo.it/
- https://governo.it/en
- https://governo.it/it
- https://governo.it/pubblicit%C3%A0-legale
- https://governo.it/it/agenda
- *...and 62 more page(s)*

---

#### Pattern 4: Affects 67 page(s) - 67 occurrence(s)

**Scanner**: ALFA
**Rule**: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)
**Issue**: Target has insufficient size

**HTML Pattern**:
```html
<a href="https://www.governo.it/en">EN</a>
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
- https://governo.it/
- https://governo.it/en
- https://governo.it/it
- https://governo.it/pubblicit%C3%A0-legale
- https://governo.it/it/agenda
- *...and 62 more page(s)*

---

#### Pattern 5: Affects 67 page(s) - 67 occurrence(s)

**Scanner**: ALFA
**Rule**: [SIA-R72: No description](https://alfa.siteimprove.com/rules/sia-r72)
**Issue**: The text of the paragraph is uppercased

**HTML Pattern**:
```html
<p class="menu_under_burger">MENU</p>
```

**XPath** (use in browser DevTools):
```
/p[@class="menu_under_burger"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('/p[@class="menu_under_burger"]')`
5. The element will be highlighted

**Affected Pages**:
- https://governo.it/
- https://governo.it/en
- https://governo.it/it
- https://governo.it/pubblicit%C3%A0-legale
- https://governo.it/it/agenda
- *...and 62 more page(s)*

---

#### Pattern 6: Affects 67 page(s) - 67 occurrence(s)

**Scanner**: ALFA
**Rule**: [SIA-R73: Text spacing can be adjusted without loss of content](https://alfa.siteimprove.com/rules/sia-r73)
**Issue**: The line height of the paragraph is less than 1.5

**HTML Pattern**:
```html
<p class="menu_under_burger">MENU</p>
```

**XPath** (use in browser DevTools):
```
/p[@class="menu_under_burger"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('/p[@class="menu_under_burger"]')`
5. The element will be highlighted

**Affected Pages**:
- https://governo.it/
- https://governo.it/en
- https://governo.it/it
- https://governo.it/pubblicit%C3%A0-legale
- https://governo.it/it/agenda
- *...and 62 more page(s)*

---

#### Pattern 7: Affects 67 page(s) - 67 occurrence(s)

**Scanner**: ALFA
**Rule**: [SIA-R73: Text spacing can be adjusted without loss of content](https://alfa.siteimprove.com/rules/sia-r73)
**Issue**: The line height of the paragraph is less than 1.5

**HTML Pattern**:
```html
<p class="nav_social clearfix">...</p>
```

**XPath** (use in browser DevTools):
```
/p[@class="nav_social clearfix"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('/p[@class="nav_social clearfix"]')`
5. The element will be highlighted

**Affected Pages**:
- https://governo.it/
- https://governo.it/en
- https://governo.it/it
- https://governo.it/pubblicit%C3%A0-legale
- https://governo.it/it/agenda
- *...and 62 more page(s)*

---

#### Pattern 8: Affects 67 page(s) - 67 occurrence(s)

**Scanner**: ALFA
**Rule**: [SIA-R74: No description](https://alfa.siteimprove.com/rules/sia-r74)
**Issue**: The font size is specified using an absolute unit

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
- https://governo.it/
- https://governo.it/en
- https://governo.it/it
- https://governo.it/pubblicit%C3%A0-legale
- https://governo.it/it/agenda
- *...and 62 more page(s)*

---

#### Pattern 9: Affects 67 page(s) - 67 occurrence(s)

**Scanner**: ALFA
**Rule**: [SIA-R84: No description](https://alfa.siteimprove.com/rules/sia-r84)
**Issue**: The scrollable element is not reachable through keyboard navigation

**HTML Pattern**:
```html
<nav class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left">...</nav>
```

**XPath** (use in browser DevTools):
```
/nav[@class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('/nav[@class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left"]')`
5. The element will be highlighted

**Affected Pages**:
- https://governo.it/
- https://governo.it/en
- https://governo.it/it
- https://governo.it/pubblicit%C3%A0-legale
- https://governo.it/it/agenda
- *...and 62 more page(s)*

---

#### Pattern 10: Affects 66 page(s) - 66 occurrence(s)

**Scanner**: ALFA
**Rule**: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)
**Issue**: Target has insufficient size

**HTML Pattern**:
```html
<a href="https://www.facebook.com/palazzochigi.it/" title="Seguici su Facebook">...</a>
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
- https://governo.it/
- https://governo.it/it
- https://governo.it/pubblicit%C3%A0-legale
- https://governo.it/it/agenda
- https://governo.it/it/agenda?t_p=h
- *...and 61 more page(s)*

---

#### Pattern 11: Affects 66 page(s) - 66 occurrence(s)

**Scanner**: ALFA
**Rule**: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)
**Issue**: Target has insufficient size

**HTML Pattern**:
```html
<a href="https://twitter.com/Palazzo_Chigi" title="Seguici su Twitter">...</a>
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
- https://governo.it/
- https://governo.it/it
- https://governo.it/pubblicit%C3%A0-legale
- https://governo.it/it/agenda
- https://governo.it/it/agenda?t_p=h
- *...and 61 more page(s)*

---

#### Pattern 12: Affects 66 page(s) - 66 occurrence(s)

**Scanner**: ALFA
**Rule**: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)
**Issue**: Target has insufficient size

**HTML Pattern**:
```html
<a href="https://www.instagram.com/palazzo_chigi/" title="Seguici su Instagram">...</a>
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
- https://governo.it/
- https://governo.it/it
- https://governo.it/pubblicit%C3%A0-legale
- https://governo.it/it/agenda
- https://governo.it/it/agenda?t_p=h
- *...and 61 more page(s)*

---

#### Pattern 13: Affects 66 page(s) - 66 occurrence(s)

**Scanner**: ALFA
**Rule**: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)
**Issue**: Target has insufficient size

**HTML Pattern**:
```html
<a href="https://www.youtube.com/palazzochigi" title="Seguici su YouTube">...</a>
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
- https://governo.it/
- https://governo.it/it
- https://governo.it/pubblicit%C3%A0-legale
- https://governo.it/it/agenda
- https://governo.it/it/agenda?t_p=h
- *...and 61 more page(s)*

---

#### Pattern 14: Affects 66 page(s) - 66 occurrence(s)

**Scanner**: ALFA
**Rule**: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)
**Issue**: Target has insufficient size

**HTML Pattern**:
```html
<a href="https://www.linkedin.com/company/presidenza-del-consiglio-dei-ministri" title="Seguici su LinkedIn">...</a>
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
- https://governo.it/
- https://governo.it/it
- https://governo.it/pubblicit%C3%A0-legale
- https://governo.it/it/agenda
- https://governo.it/it/agenda?t_p=h
- *...and 61 more page(s)*

---

#### Pattern 15: Affects 66 page(s) - 66 occurrence(s)

**Scanner**: ALFA
**Rule**: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)
**Issue**: Target has insufficient size

**HTML Pattern**:
```html
<a href="http://presidenza.governo.it/AmministrazioneTrasparente/Organizzazione/TelefonoPostaElettronica/PEC.html">Elenco PEC</a>
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
- https://governo.it/
- https://governo.it/it
- https://governo.it/pubblicit%C3%A0-legale
- https://governo.it/it/agenda
- https://governo.it/it/agenda?t_p=h
- *...and 61 more page(s)*

---

> 💡 **Pro Tip**: These patterns likely come from shared components or templates in your codebase. Fix them in the component/template source, and the fix will propagate to all affected pages.

## 📊 Detailed Results

Complete scan results for all tested pages:

| Submitted URL | Final URL | Status | HTTP | Redirected | Time (ms) | axe Unique | ALFA Unique | Equal Access Unique | AccessLint Unique | Duplicates | Notes |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|
| https://governo.it/ | https://www.governo.it/it | OK | 200 | yes | 11944 | 0 | 22 | 40 | 0 | 94 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R11 (Button elements have an accessible name), SIA-R111 (Interactive elements have a sufficient target size), SIA-R2 (HTML elements have a valid lang attribute), SIA-R53 (Headings follow a logical hierarchy), SIA-R57 (Landmarks don't repeat the same content), SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background), SIA-R72, SIA-R73 (Text spacing can be adjusted without loss of content), SIA-R74, SIA-R78 (Headings of same level have text content between them), SIA-R84 |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_content_in_landmark, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, img_alt_valid, input_label_visible, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, text_quoted_correctly, widget_tabbable_exists |
| https://governo.it/en | https://www.governo.it/en | OK | 200 | yes | 7877 | 0 | 20 | 34 | 0 | 69 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R11 (Button elements have an accessible name), SIA-R111 (Interactive elements have a sufficient target size), SIA-R2 (HTML elements have a valid lang attribute), SIA-R53 (Headings follow a logical hierarchy), SIA-R57 (Landmarks don't repeat the same content), SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background), SIA-R72, SIA-R73 (Text spacing can be adjusted without loss of content), SIA-R74, SIA-R78 (Headings of same level have text content between them), SIA-R84 |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_content_in_landmark, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, img_alt_redundant, img_alt_valid, input_label_visible, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, widget_tabbable_exists |
| https://governo.it/it | https://www.governo.it/it | OK | 200 | yes | 8368 | 0 | 22 | 40 | 0 | 95 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R11 (Button elements have an accessible name), SIA-R111 (Interactive elements have a sufficient target size), SIA-R2 (HTML elements have a valid lang attribute), SIA-R53 (Headings follow a logical hierarchy), SIA-R57 (Landmarks don't repeat the same content), SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background), SIA-R72, SIA-R73 (Text spacing can be adjusted without loss of content), SIA-R74, SIA-R78 (Headings of same level have text content between them), SIA-R84 |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_content_in_landmark, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, img_alt_valid, input_label_visible, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, text_quoted_correctly, widget_tabbable_exists |
| https://governo.it/pubblicit%C3%A0-legale | https://www.governo.it/it/pubblicit%C3%A0-legale | OK | 200 | yes | 9104 | 0 | 16 | 30 | 0 | 112 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R11 (Button elements have an accessible name), SIA-R111 (Interactive elements have a sufficient target size), SIA-R113, SIA-R53 (Headings follow a logical hierarchy), SIA-R57 (Landmarks don't repeat the same content), SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background), SIA-R72, SIA-R73 (Text spacing can be adjusted without loss of content), SIA-R74, SIA-R78 (Headings of same level have text content between them), SIA-R84 |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_content_in_landmark, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, heading_markup_misuse, input_label_visible, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, widget_tabbable_exists |
| https://governo.it/feed/rss | https://www.governo.it/feed/rss | OK | 200 | yes | 3108 | 0 | 5 | 5 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R1 (id attributes are unique within the document), SIA-R4 (Page has a descriptive title), SIA-R59, SIA-R79, SIA-R87 (First focusable element is a skip link) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: html_lang_exists, html_skipnav_exists, page_title_exists, skip_main_exists, style_highcontrast_visible |
| https://governo.it/it/agenda | https://www.governo.it/it/agenda | OK | 200 | yes | 16467 | 0 | 19 | 36 | 0 | 110 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R11 (Button elements have an accessible name), SIA-R111 (Interactive elements have a sufficient target size), SIA-R53 (Headings follow a logical hierarchy), SIA-R57 (Landmarks don't repeat the same content), SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background), SIA-R72, SIA-R73 (Text spacing can be adjusted without loss of content), SIA-R74, SIA-R78 (Headings of same level have text content between them), SIA-R83 (Text can be resized to 200% without loss of content), SIA-R84 |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_content_in_landmark, aria_form_label_unique, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, text_quoted_correctly, widget_tabbable_exists |
| https://governo.it/it/agenda?t_p=h | https://www.governo.it/it/agenda?t_p=h | OK | 200 | yes | 16758 | 0 | 19 | 35 | 0 | 110 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R11 (Button elements have an accessible name), SIA-R111 (Interactive elements have a sufficient target size), SIA-R53 (Headings follow a logical hierarchy), SIA-R57 (Landmarks don't repeat the same content), SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background), SIA-R72, SIA-R73 (Text spacing can be adjusted without loss of content), SIA-R74, SIA-R78 (Headings of same level have text content between them), SIA-R83 (Text can be resized to 200% without loss of content), SIA-R84 |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_content_in_landmark, aria_form_label_unique, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, text_quoted_correctly, widget_tabbable_exists |
| https://governo.it/it/archivio-articoli-presidenza-del-consiglio | https://www.governo.it/it/archivio-articoli-presidenza-del-consiglio | OK | 200 | yes | 8838 | 0 | 16 | 27 | 0 | 111 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R11 (Button elements have an accessible name), SIA-R111 (Interactive elements have a sufficient target size), SIA-R113, SIA-R53 (Headings follow a logical hierarchy), SIA-R57 (Landmarks don't repeat the same content), SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background), SIA-R72, SIA-R73 (Text spacing can be adjusted without loss of content), SIA-R74, SIA-R78 (Headings of same level have text content between them), SIA-R84 |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_content_in_landmark, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, widget_tabbable_exists |
| https://governo.it/it/archivio-consiglio-dei-ministri | https://www.governo.it/it/archivio-consiglio-dei-ministri | OK | 200 | yes | 8994 | 0 | 16 | 32 | 0 | 119 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R11 (Button elements have an accessible name), SIA-R111 (Interactive elements have a sufficient target size), SIA-R113, SIA-R53 (Headings follow a logical hierarchy), SIA-R57 (Landmarks don't repeat the same content), SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background), SIA-R72, SIA-R73 (Text spacing can be adjusted without loss of content), SIA-R74, SIA-R78 (Headings of same level have text content between them), SIA-R84 |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_content_in_landmark, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, widget_tabbable_exists |
| https://governo.it/it/campagne-di-comunicazione | https://www.governo.it/it/campagne-di-comunicazione | OK | 200 | yes | 9061 | 0 | 18 | 46 | 0 | 106 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R11 (Button elements have an accessible name), SIA-R111 (Interactive elements have a sufficient target size), SIA-R113, SIA-R53 (Headings follow a logical hierarchy), SIA-R57 (Landmarks don't repeat the same content), SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background), SIA-R72, SIA-R73 (Text spacing can be adjusted without loss of content), SIA-R74, SIA-R78 (Headings of same level have text content between them), SIA-R84 |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_content_in_landmark, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, widget_tabbable_exists |
| https://governo.it/it/come-fare | https://www.governo.it/it/come-fare | OK | 200 | yes | 6979 | 0 | 16 | 29 | 0 | 50 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R11 (Button elements have an accessible name), SIA-R111 (Interactive elements have a sufficient target size), SIA-R53 (Headings follow a logical hierarchy), SIA-R57 (Landmarks don't repeat the same content), SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background), SIA-R72, SIA-R73 (Text spacing can be adjusted without loss of content), SIA-R74, SIA-R78 (Headings of same level have text content between them), SIA-R83 (Text can be resized to 200% without loss of content), SIA-R84 |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_complementary_labelled, aria_content_in_landmark, blockquote_cite_exists, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, widget_tabbable_exists |
| https://governo.it/it/comitati-commissioni-e-commissari | https://www.governo.it/it/comitati-commissioni-e-commissari | OK | 200 | yes | 8097 | 0 | 19 | 30 | 0 | 181 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R11 (Button elements have an accessible name), SIA-R111 (Interactive elements have a sufficient target size), SIA-R113, SIA-R53 (Headings follow a logical hierarchy), SIA-R57 (Landmarks don't repeat the same content), SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background), SIA-R72, SIA-R73 (Text spacing can be adjusted without loss of content), SIA-R74, SIA-R78 (Headings of same level have text content between them), SIA-R83 (Text can be resized to 200% without loss of content), SIA-R84 |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_complementary_labelled, aria_content_in_landmark, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, widget_tabbable_exists |
| https://governo.it/it/dichiarazioneaccessibilita | https://www.governo.it/it/dichiarazioneaccessibilita | OK | 200 | yes | 6825 | 0 | 18 | 29 | 0 | 52 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R11 (Button elements have an accessible name), SIA-R111 (Interactive elements have a sufficient target size), SIA-R53 (Headings follow a logical hierarchy), SIA-R57 (Landmarks don't repeat the same content), SIA-R62 (Links are visually distinguishable from surrounding text), SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background), SIA-R72, SIA-R73 (Text spacing can be adjusted without loss of content), SIA-R74, SIA-R78 (Headings of same level have text content between them), SIA-R83 (Text can be resized to 200% without loss of content), SIA-R84 |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_complementary_labelled, aria_content_in_landmark, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, widget_tabbable_exists |
| https://governo.it/it/diretta-video | https://www.governo.it/it/diretta-video | OK | 200 | yes | 7854 | 0 | 19 | 38 | 0 | 60 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R11 (Button elements have an accessible name), SIA-R111 (Interactive elements have a sufficient target size), SIA-R13, SIA-R53 (Headings follow a logical hierarchy), SIA-R57 (Landmarks don't repeat the same content), SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background), SIA-R72, SIA-R73 (Text spacing can be adjusted without loss of content), SIA-R74, SIA-R78 (Headings of same level have text content between them), SIA-R83 (Text can be resized to 200% without loss of content), SIA-R84 |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_content_in_landmark, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, frame_src_valid, frame_title_exists, input_label_visible, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, text_quoted_correctly, widget_tabbable_exists |
| https://governo.it/it/gallerie-del-presidente | https://www.governo.it/it/gallerie-del-presidente | OK | 200 | yes | 8857 | 0 | 18 | 46 | 0 | 109 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R11 (Button elements have an accessible name), SIA-R111 (Interactive elements have a sufficient target size), SIA-R113, SIA-R53 (Headings follow a logical hierarchy), SIA-R57 (Landmarks don't repeat the same content), SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background), SIA-R72, SIA-R73 (Text spacing can be adjusted without loss of content), SIA-R74, SIA-R78 (Headings of same level have text content between them), SIA-R84 |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_content_in_landmark, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, text_quoted_correctly, widget_tabbable_exists |
| https://governo.it/it/palazzo-chigi-la-storia-le-immagini-e-il-restauro/palazzo-chigi-la-storia/2877 | https://www.governo.it/it/palazzo-chigi-la-storia-le-immagini-e-il-restauro/palazzo-chigi-la-storia/2877 | OK | 200 | yes | 7201 | 0 | 18 | 32 | 0 | 78 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R11 (Button elements have an accessible name), SIA-R111 (Interactive elements have a sufficient target size), SIA-R53 (Headings follow a logical hierarchy), SIA-R56 (Landmarks with the same role are distinguishable), SIA-R57 (Landmarks don't repeat the same content), SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background), SIA-R72, SIA-R73 (Text spacing can be adjusted without loss of content), SIA-R74, SIA-R78 (Headings of same level have text content between them), SIA-R83 (Text can be resized to 200% without loss of content), SIA-R84 |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_complementary_labelled, aria_content_in_landmark, aria_navigation_label_unique, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, widget_tabbable_exists |
| https://governo.it/it/articolo/il-messaggio-del-presidente-meloni-all-evento-ia-e-lavoro-governare-la-trasformazione | https://www.governo.it/it/articolo/il-messaggio-del-presidente-meloni-all-evento-ia-e-lavoro-governare-la-trasformazione | OK | 200 | yes | 7504 | 0 | 20 | 34 | 0 | 53 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R11 (Button elements have an accessible name), SIA-R111 (Interactive elements have a sufficient target size), SIA-R2 (HTML elements have a valid lang attribute), SIA-R53 (Headings follow a logical hierarchy), SIA-R57 (Landmarks don't repeat the same content), SIA-R61, SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background), SIA-R72, SIA-R73 (Text spacing can be adjusted without loss of content), SIA-R74, SIA-R78 (Headings of same level have text content between them), SIA-R83 (Text can be resized to 200% without loss of content), SIA-R84 |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_complementary_labelled, aria_content_in_landmark, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, img_alt_valid, input_label_visible, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, text_quoted_correctly, widget_tabbable_exists |
| https://governo.it/it/gallerie | https://www.governo.it/it/gallerie | OK | 200 | yes | 9429 | 0 | 18 | 46 | 0 | 109 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R11 (Button elements have an accessible name), SIA-R111 (Interactive elements have a sufficient target size), SIA-R113, SIA-R53 (Headings follow a logical hierarchy), SIA-R57 (Landmarks don't repeat the same content), SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background), SIA-R72, SIA-R73 (Text spacing can be adjusted without loss of content), SIA-R74, SIA-R78 (Headings of same level have text content between them), SIA-R84 |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_content_in_landmark, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, text_quoted_correctly, widget_tabbable_exists |
| https://governo.it/it/articolo/la-facciata-di-palazzo-chigi-si-illumina-il-quarto-anniversario-dellinvasione-dellucraina | https://www.governo.it/it/articolo/la-facciata-di-palazzo-chigi-si-illumina-il-quarto-anniversario-dellinvasione-dellucraina | OK | 200 | yes | 7180 | 0 | 17 | 37 | 0 | 54 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R11 (Button elements have an accessible name), SIA-R111 (Interactive elements have a sufficient target size), SIA-R13, SIA-R53 (Headings follow a logical hierarchy), SIA-R57 (Landmarks don't repeat the same content), SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background), SIA-R72, SIA-R73 (Text spacing can be adjusted without loss of content), SIA-R74, SIA-R78 (Headings of same level have text content between them), SIA-R83 (Text can be resized to 200% without loss of content), SIA-R84 |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_complementary_labelled, aria_content_in_landmark, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, frame_src_valid, frame_title_exists, input_label_visible, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, widget_tabbable_exists |
| https://governo.it/it/pubblicita-legale | https://www.governo.it/it/pubblicita-legale | OK | 200 | yes | 7595 | 0 | 17 | 27 | 0 | 112 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R11 (Button elements have an accessible name), SIA-R111 (Interactive elements have a sufficient target size), SIA-R113, SIA-R53 (Headings follow a logical hierarchy), SIA-R57 (Landmarks don't repeat the same content), SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background), SIA-R72, SIA-R73 (Text spacing can be adjusted without loss of content), SIA-R74, SIA-R78 (Headings of same level have text content between them), SIA-R84 |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_content_in_landmark, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, heading_markup_misuse, input_label_visible, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, widget_tabbable_exists |
| https://governo.it/it/media/campagna-di-comunicazione-istituzionale-il-treno-del-ricordo-2026/31082 | https://www.governo.it/it/media/campagna-di-comunicazione-istituzionale-il-treno-del-ricordo-2026/31082 | OK | 200 | yes | 7186 | 0 | 18 | 36 | 0 | 53 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R11 (Button elements have an accessible name), SIA-R111 (Interactive elements have a sufficient target size), SIA-R13, SIA-R53 (Headings follow a logical hierarchy), SIA-R57 (Landmarks don't repeat the same content), SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background), SIA-R72, SIA-R73 (Text spacing can be adjusted without loss of content), SIA-R74, SIA-R78 (Headings of same level have text content between them), SIA-R83 (Text can be resized to 200% without loss of content), SIA-R84 |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_content_in_landmark, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, frame_src_valid, frame_title_exists, input_label_visible, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, widget_tabbable_exists |
| https://governo.it/it/media/la-facciata-di-palazzo-chigi-si-illumina-il-quarto-anniversario-dellinvasione-dellucraina-0 | https://www.governo.it/it/media/la-facciata-di-palazzo-chigi-si-illumina-il-quarto-anniversario-dellinvasione-dellucraina-0 | OK | 200 | yes | 8293 | 0 | 18 | 38 | 0 | 54 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R11 (Button elements have an accessible name), SIA-R111 (Interactive elements have a sufficient target size), SIA-R13, SIA-R53 (Headings follow a logical hierarchy), SIA-R57 (Landmarks don't repeat the same content), SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background), SIA-R72, SIA-R73 (Text spacing can be adjusted without loss of content), SIA-R74, SIA-R78 (Headings of same level have text content between them), SIA-R83 (Text can be resized to 200% without loss of content), SIA-R84 |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_content_in_landmark, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, frame_src_valid, frame_title_exists, input_label_visible, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, widget_tabbable_exists |
| https://governo.it/it/provvedimenti | https://www.governo.it/it/provvedimenti | OK | 200 | yes | 7225 | 0 | 21 | 27 | 0 | 87 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R11 (Button elements have an accessible name), SIA-R111 (Interactive elements have a sufficient target size), SIA-R113, SIA-R53 (Headings follow a logical hierarchy), SIA-R57 (Landmarks don't repeat the same content), SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background), SIA-R72, SIA-R73 (Text spacing can be adjusted without loss of content), SIA-R74, SIA-R78 (Headings of same level have text content between them), SIA-R84 |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_content_in_landmark, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, heading_markup_misuse, input_label_visible, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, widget_tabbable_exists |
| https://governo.it/it/tipologie-contenuto/notizie | https://www.governo.it/it/tipologie-contenuto/notizie | OK | 200 | yes | 7556 | 0 | 20 | 27 | 0 | 105 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R11 (Button elements have an accessible name), SIA-R111 (Interactive elements have a sufficient target size), SIA-R113, SIA-R53 (Headings follow a logical hierarchy), SIA-R57 (Landmarks don't repeat the same content), SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background), SIA-R72, SIA-R73 (Text spacing can be adjusted without loss of content), SIA-R74, SIA-R78 (Headings of same level have text content between them), SIA-R84 |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_content_in_landmark, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, text_quoted_correctly, widget_tabbable_exists |
| https://governo.it/it/media/la-facciata-di-palazzo-chigi-si-illumina-il-quarto-anniversario-dellinvasione-dellucraina | https://www.governo.it/it/media/la-facciata-di-palazzo-chigi-si-illumina-il-quarto-anniversario-dellinvasione-dellucraina | OK | 200 | yes | 7332 | 0 | 18 | 31 | 0 | 56 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R11 (Button elements have an accessible name), SIA-R111 (Interactive elements have a sufficient target size), SIA-R113, SIA-R53 (Headings follow a logical hierarchy), SIA-R57 (Landmarks don't repeat the same content), SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background), SIA-R72, SIA-R73 (Text spacing can be adjusted without loss of content), SIA-R74, SIA-R78 (Headings of same level have text content between them), SIA-R83 (Text can be resized to 200% without loss of content), SIA-R84 |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_content_in_landmark, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, widget_tabbable_exists |
| https://governo.it/it/governo/meloni/presidente-del-consiglio/giorgia-meloni | https://www.governo.it/it/governo/meloni/presidente-del-consiglio/giorgia-meloni | OK | 200 | yes | 7310 | 0 | 17 | 36 | 0 | 54 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R11 (Button elements have an accessible name), SIA-R111 (Interactive elements have a sufficient target size), SIA-R53 (Headings follow a logical hierarchy), SIA-R57 (Landmarks don't repeat the same content), SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background), SIA-R72, SIA-R73 (Text spacing can be adjusted without loss of content), SIA-R74, SIA-R78 (Headings of same level have text content between them), SIA-R83 (Text can be resized to 200% without loss of content), SIA-R84 |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_complementary_labelled, aria_content_in_landmark, blockquote_cite_exists, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, widget_tabbable_exists |
| https://governo.it/it/notizie-governo | https://www.governo.it/it/notizie-governo | OK | 200 | yes | 8089 | 0 | 18 | 27 | 0 | 107 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R11 (Button elements have an accessible name), SIA-R111 (Interactive elements have a sufficient target size), SIA-R113, SIA-R53 (Headings follow a logical hierarchy), SIA-R57 (Landmarks don't repeat the same content), SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background), SIA-R72, SIA-R73 (Text spacing can be adjusted without loss of content), SIA-R74, SIA-R78 (Headings of same level have text content between them), SIA-R84 |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_content_in_landmark, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, widget_tabbable_exists |
| https://governo.it/it/organizzazione/il-segretario-generale/64 | https://www.governo.it/it/organizzazione/il-segretario-generale/64 | OK | 200 | yes | 6830 | 0 | 18 | 32 | 0 | 65 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R11 (Button elements have an accessible name), SIA-R111 (Interactive elements have a sufficient target size), SIA-R53 (Headings follow a logical hierarchy), SIA-R56 (Landmarks with the same role are distinguishable), SIA-R57 (Landmarks don't repeat the same content), SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background), SIA-R72, SIA-R73 (Text spacing can be adjusted without loss of content), SIA-R74, SIA-R78 (Headings of same level have text content between them), SIA-R83 (Text can be resized to 200% without loss of content), SIA-R84 |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_complementary_labelled, aria_content_in_landmark, aria_navigation_label_unique, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, widget_tabbable_exists |
| https://governo.it/it/il-governo-funzioni-struttura-e-storia/la-funzione-del-presidente-del-consiglio/188 | https://www.governo.it/it/il-governo-funzioni-struttura-e-storia/la-funzione-del-presidente-del-consiglio/188 | OK | 200 | yes | 6634 | 0 | 18 | 32 | 0 | 57 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R11 (Button elements have an accessible name), SIA-R111 (Interactive elements have a sufficient target size), SIA-R53 (Headings follow a logical hierarchy), SIA-R56 (Landmarks with the same role are distinguishable), SIA-R57 (Landmarks don't repeat the same content), SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background), SIA-R72, SIA-R73 (Text spacing can be adjusted without loss of content), SIA-R74, SIA-R78 (Headings of same level have text content between them), SIA-R83 (Text can be resized to 200% without loss of content), SIA-R84 |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_complementary_labelled, aria_content_in_landmark, aria_navigation_label_unique, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, widget_tabbable_exists |
| https://governo.it/it/articolo/incidente-milano-il-cordoglio-del-presidente-meloni/31213 | https://www.governo.it/it/articolo/incidente-milano-il-cordoglio-del-presidente-meloni/31213 | OK | 200 | yes | 7985 | 0 | 19 | 37 | 0 | 53 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R11 (Button elements have an accessible name), SIA-R111 (Interactive elements have a sufficient target size), SIA-R2 (HTML elements have a valid lang attribute), SIA-R53 (Headings follow a logical hierarchy), SIA-R57 (Landmarks don't repeat the same content), SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background), SIA-R72, SIA-R73 (Text spacing can be adjusted without loss of content), SIA-R74, SIA-R78 (Headings of same level have text content between them), SIA-R83 (Text can be resized to 200% without loss of content), SIA-R84 |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_complementary_labelled, aria_content_in_landmark, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, img_alt_valid, input_label_visible, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, widget_tabbable_exists |
| https://governo.it/it/il-presidente | https://www.governo.it/it/il-presidente | OK | 200 | yes | 8839 | 0 | 27 | 43 | 0 | 113 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R11 (Button elements have an accessible name), SIA-R111 (Interactive elements have a sufficient target size), SIA-R53 (Headings follow a logical hierarchy), SIA-R57 (Landmarks don't repeat the same content), SIA-R62 (Links are visually distinguishable from surrounding text), SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background), SIA-R72, SIA-R73 (Text spacing can be adjusted without loss of content), SIA-R74, SIA-R78 (Headings of same level have text content between them), SIA-R83 (Text can be resized to 200% without loss of content), SIA-R84, SIA-R85 |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_content_in_landmark, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, heading_content_exists, input_label_visible, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, text_quoted_correctly, widget_tabbable_exists |
| https://governo.it/it/notizie-presidente | https://www.governo.it/it/notizie-presidente | OK | 200 | yes | 8099 | 0 | 15 | 29 | 0 | 106 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R11 (Button elements have an accessible name), SIA-R111 (Interactive elements have a sufficient target size), SIA-R113, SIA-R53 (Headings follow a logical hierarchy), SIA-R57 (Landmarks don't repeat the same content), SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background), SIA-R72, SIA-R73 (Text spacing can be adjusted without loss of content), SIA-R74, SIA-R78 (Headings of same level have text content between them), SIA-R84 |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_content_in_landmark, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, text_quoted_correctly, widget_tabbable_exists |
| https://governo.it/it/organizzazione/uffici-dipartimenti-strutture/69 | https://www.governo.it/it/organizzazione/uffici-dipartimenti-strutture/69 | OK | 200 | yes | 8045 | 0 | 19 | 36 | 0 | 178 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R11 (Button elements have an accessible name), SIA-R111 (Interactive elements have a sufficient target size), SIA-R53 (Headings follow a logical hierarchy), SIA-R56 (Landmarks with the same role are distinguishable), SIA-R57 (Landmarks don't repeat the same content), SIA-R62 (Links are visually distinguishable from surrounding text), SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background), SIA-R72, SIA-R73 (Text spacing can be adjusted without loss of content), SIA-R74, SIA-R78 (Headings of same level have text content between them), SIA-R83 (Text can be resized to 200% without loss of content), SIA-R84 |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_complementary_labelled, aria_content_in_landmark, aria_navigation_label_unique, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, heading_markup_misuse, input_label_visible, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, widget_tabbable_exists |
| https://governo.it/it/articolo/giorno-del-ricordo-dal-10-febbraio-al-1-marzo-2026-la-3a-edizione-del-treno-del-ricordo | https://www.governo.it/it/articolo/giorno-del-ricordo-dal-10-febbraio-al-1-marzo-2026-la-3a-edizione-del-treno-del-ricordo | OK | 200 | yes | 7040 | 0 | 19 | 34 | 0 | 54 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R11 (Button elements have an accessible name), SIA-R111 (Interactive elements have a sufficient target size), SIA-R2 (HTML elements have a valid lang attribute), SIA-R53 (Headings follow a logical hierarchy), SIA-R57 (Landmarks don't repeat the same content), SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background), SIA-R72, SIA-R73 (Text spacing can be adjusted without loss of content), SIA-R74, SIA-R78 (Headings of same level have text content between them), SIA-R83 (Text can be resized to 200% without loss of content), SIA-R84 |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_complementary_labelled, aria_content_in_landmark, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, img_alt_valid, input_label_visible, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, widget_tabbable_exists |
| https://governo.it/it/visitare-i-palazzi-istituzionali/prenotazione-visite-guidate/2939 | https://www.governo.it/it/visitare-i-palazzi-istituzionali/prenotazione-visite-guidate/2939 | OK | 200 | yes | 7149 | 0 | 18 | 36 | 0 | 61 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R11 (Button elements have an accessible name), SIA-R111 (Interactive elements have a sufficient target size), SIA-R53 (Headings follow a logical hierarchy), SIA-R56 (Landmarks with the same role are distinguishable), SIA-R57 (Landmarks don't repeat the same content), SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background), SIA-R72, SIA-R73 (Text spacing can be adjusted without loss of content), SIA-R74, SIA-R78 (Headings of same level have text content between them), SIA-R83 (Text can be resized to 200% without loss of content), SIA-R84 |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_complementary_labelled, aria_content_in_landmark, aria_navigation_label_unique, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, text_quoted_correctly, widget_tabbable_exists |
| https://governo.it/it/agenda/2026-03-04t000000/laying-groundwork-jobs-africa/31205 | https://www.governo.it/it/agenda/2026-03-04t000000/laying-groundwork-jobs-africa/31205 | OK | 200 | yes | 6474 | 0 | 17 | 30 | 0 | 51 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R11 (Button elements have an accessible name), SIA-R111 (Interactive elements have a sufficient target size), SIA-R53 (Headings follow a logical hierarchy), SIA-R57 (Landmarks don't repeat the same content), SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background), SIA-R72, SIA-R73 (Text spacing can be adjusted without loss of content), SIA-R74, SIA-R78 (Headings of same level have text content between them), SIA-R83 (Text can be resized to 200% without loss of content), SIA-R84 |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_complementary_labelled, aria_content_in_landmark, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, text_quoted_correctly, widget_tabbable_exists |
| https://governo.it/it/piano-mattei | https://www.governo.it/it/piano-mattei | OK | 200 | yes | 8895 | 0 | 21 | 40 | 0 | 98 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R11 (Button elements have an accessible name), SIA-R111 (Interactive elements have a sufficient target size), SIA-R53 (Headings follow a logical hierarchy), SIA-R56 (Landmarks with the same role are distinguishable), SIA-R57 (Landmarks don't repeat the same content), SIA-R61, SIA-R62 (Links are visually distinguishable from surrounding text), SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background), SIA-R72, SIA-R73 (Text spacing can be adjusted without loss of content), SIA-R74, SIA-R78 (Headings of same level have text content between them), SIA-R83 (Text can be resized to 200% without loss of content), SIA-R84 |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_complementary_labelled, aria_content_in_landmark, aria_navigation_label_unique, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, text_quoted_correctly, widget_tabbable_exists |
| https://governo.it/it/i-ministeri-0 | https://www.governo.it/it/i-ministeri-0 | OK | 200 | yes | 9465 | 0 | 20 | 41 | 0 | 167 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R11 (Button elements have an accessible name), SIA-R111 (Interactive elements have a sufficient target size), SIA-R53 (Headings follow a logical hierarchy), SIA-R57 (Landmarks don't repeat the same content), SIA-R62 (Links are visually distinguishable from surrounding text), SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background), SIA-R72, SIA-R73 (Text spacing can be adjusted without loss of content), SIA-R74, SIA-R78 (Headings of same level have text content between them), SIA-R83 (Text can be resized to 200% without loss of content), SIA-R84 |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_complementary_labelled, aria_content_in_landmark, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, widget_tabbable_exists |
| https://governo.it/it/media/incontro-con-il-presidente-della-repubblica-di-cipro/31198 | https://www.governo.it/it/media/incontro-con-il-presidente-della-repubblica-di-cipro/31198 | OK | 200 | yes | 8240 | 0 | 17 | 42 | 0 | 61 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R11 (Button elements have an accessible name), SIA-R111 (Interactive elements have a sufficient target size), SIA-R13, SIA-R53 (Headings follow a logical hierarchy), SIA-R57 (Landmarks don't repeat the same content), SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background), SIA-R72, SIA-R73 (Text spacing can be adjusted without loss of content), SIA-R74, SIA-R78 (Headings of same level have text content between them), SIA-R83 (Text can be resized to 200% without loss of content), SIA-R84 |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_content_in_landmark, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, frame_src_valid, frame_title_exists, input_label_visible, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, widget_tabbable_exists |
| https://governo.it/it/articolo/consiglio-dei-ministri-n-163/31194 | https://www.governo.it/it/articolo/consiglio-dei-ministri-n-163/31194 | OK | 200 | yes | 8040 | 0 | 19 | 38 | 0 | 53 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R11 (Button elements have an accessible name), SIA-R111 (Interactive elements have a sufficient target size), SIA-R2 (HTML elements have a valid lang attribute), SIA-R53 (Headings follow a logical hierarchy), SIA-R57 (Landmarks don't repeat the same content), SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background), SIA-R72, SIA-R73 (Text spacing can be adjusted without loss of content), SIA-R74, SIA-R78 (Headings of same level have text content between them), SIA-R83 (Text can be resized to 200% without loss of content), SIA-R84 |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_complementary_labelled, aria_content_in_landmark, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, img_alt_valid, input_label_visible, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, widget_tabbable_exists |
| https://governo.it/it/ministri-e-sottosegretari | https://www.governo.it/it/ministri-e-sottosegretari | OK | 200 | yes | 8895 | 0 | 20 | 30 | 0 | 235 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R11 (Button elements have an accessible name), SIA-R111 (Interactive elements have a sufficient target size), SIA-R53 (Headings follow a logical hierarchy), SIA-R57 (Landmarks don't repeat the same content), SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background), SIA-R72, SIA-R73 (Text spacing can be adjusted without loss of content), SIA-R74, SIA-R78 (Headings of same level have text content between them), SIA-R83 (Text can be resized to 200% without loss of content), SIA-R84 |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_content_in_landmark, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, widget_tabbable_exists |
| https://governo.it/it/articolo/tre-anni-di-governo-meloni-tre-anni-di-risultati-e-traguardi-l-italia/30114 | https://www.governo.it/it/articolo/tre-anni-di-governo-meloni-tre-anni-di-risultati-e-traguardi-l-italia/30114 | OK | 200 | yes | 7786 | 0 | 18 | 33 | 0 | 53 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R11 (Button elements have an accessible name), SIA-R111 (Interactive elements have a sufficient target size), SIA-R2 (HTML elements have a valid lang attribute), SIA-R53 (Headings follow a logical hierarchy), SIA-R57 (Landmarks don't repeat the same content), SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background), SIA-R72, SIA-R73 (Text spacing can be adjusted without loss of content), SIA-R74, SIA-R78 (Headings of same level have text content between them), SIA-R83 (Text can be resized to 200% without loss of content), SIA-R84 |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_complementary_labelled, aria_content_in_landmark, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, img_alt_valid, input_label_visible, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, widget_tabbable_exists |
| https://governo.it/it/costituzione-italiana/principi-fondamentali/2839 | https://www.governo.it/it/costituzione-italiana/principi-fondamentali/2839 | OK | 200 | yes | 7267 | 0 | 19 | 33 | 0 | 68 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R11 (Button elements have an accessible name), SIA-R111 (Interactive elements have a sufficient target size), SIA-R53 (Headings follow a logical hierarchy), SIA-R56 (Landmarks with the same role are distinguishable), SIA-R57 (Landmarks don't repeat the same content), SIA-R62 (Links are visually distinguishable from surrounding text), SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background), SIA-R72, SIA-R73 (Text spacing can be adjusted without loss of content), SIA-R74, SIA-R78 (Headings of same level have text content between them), SIA-R83 (Text can be resized to 200% without loss of content), SIA-R84 |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_complementary_labelled, aria_content_in_landmark, aria_navigation_label_unique, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, widget_tabbable_exists |
| https://governo.it/it/media/corinaldo-incontro-con-i-familiari-delle-vittime-palazzo-chigi/31211 | https://www.governo.it/it/media/corinaldo-incontro-con-i-familiari-delle-vittime-palazzo-chigi/31211 | OK | 200 | yes | 7693 | 0 | 17 | 31 | 0 | 52 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R11 (Button elements have an accessible name), SIA-R111 (Interactive elements have a sufficient target size), SIA-R53 (Headings follow a logical hierarchy), SIA-R57 (Landmarks don't repeat the same content), SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background), SIA-R72, SIA-R73 (Text spacing can be adjusted without loss of content), SIA-R74, SIA-R78 (Headings of same level have text content between them), SIA-R83 (Text can be resized to 200% without loss of content), SIA-R84 |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_content_in_landmark, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, widget_tabbable_exists |
| https://governo.it/it/agenda/2026-03-06t000000/cerimonia-di-apertura-dei-giochi-paralimpici-invernali-di-milano-cortina | https://www.governo.it/it/agenda/2026-03-06t000000/cerimonia-di-apertura-dei-giochi-paralimpici-invernali-di-milano-cortina | OK | 200 | yes | 6596 | 0 | 17 | 29 | 0 | 51 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R11 (Button elements have an accessible name), SIA-R111 (Interactive elements have a sufficient target size), SIA-R53 (Headings follow a logical hierarchy), SIA-R57 (Landmarks don't repeat the same content), SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background), SIA-R72, SIA-R73 (Text spacing can be adjusted without loss of content), SIA-R74, SIA-R78 (Headings of same level have text content between them), SIA-R83 (Text can be resized to 200% without loss of content), SIA-R84 |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_complementary_labelled, aria_content_in_landmark, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, widget_tabbable_exists |
| https://governo.it/it/media/giorno-del-ricordo-dal-10-febbraio-al-1-marzo-2026-la-3a-edizione-del-treno-del-ricordo/31177 | https://www.governo.it/it/media/giorno-del-ricordo-dal-10-febbraio-al-1-marzo-2026-la-3a-edizione-del-treno-del-ricordo/31177 | OK | 200 | yes | 8139 | 0 | 15 | 30 | 0 | 54 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R11 (Button elements have an accessible name), SIA-R111 (Interactive elements have a sufficient target size), SIA-R53 (Headings follow a logical hierarchy), SIA-R57 (Landmarks don't repeat the same content), SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background), SIA-R72, SIA-R73 (Text spacing can be adjusted without loss of content), SIA-R74, SIA-R78 (Headings of same level have text content between them), SIA-R83 (Text can be resized to 200% without loss of content), SIA-R84 |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_content_in_landmark, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, widget_tabbable_exists |
| https://governo.it/it/media/cerimonia-di-chiusura-dei-giochi-olimpici-invernali-di-milano-cortina-2026/31175 | https://www.governo.it/it/media/cerimonia-di-chiusura-dei-giochi-olimpici-invernali-di-milano-cortina-2026/31175 | OK | 200 | yes | 7279 | 0 | 15 | 32 | 0 | 55 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R11 (Button elements have an accessible name), SIA-R111 (Interactive elements have a sufficient target size), SIA-R53 (Headings follow a logical hierarchy), SIA-R57 (Landmarks don't repeat the same content), SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background), SIA-R72, SIA-R73 (Text spacing can be adjusted without loss of content), SIA-R74, SIA-R78 (Headings of same level have text content between them), SIA-R83 (Text can be resized to 200% without loss of content), SIA-R84 |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_content_in_landmark, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, widget_tabbable_exists |
| https://governo.it/it/il-governo | https://www.governo.it/it/il-governo | OK | 200 | yes | 9033 | 0 | 20 | 42 | 0 | 126 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R11 (Button elements have an accessible name), SIA-R111 (Interactive elements have a sufficient target size), SIA-R53 (Headings follow a logical hierarchy), SIA-R56 (Landmarks with the same role are distinguishable), SIA-R57 (Landmarks don't repeat the same content), SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background), SIA-R72, SIA-R73 (Text spacing can be adjusted without loss of content), SIA-R74, SIA-R78 (Headings of same level have text content between them), SIA-R83 (Text can be resized to 200% without loss of content), SIA-R84 |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_complementary_labelled, aria_content_in_landmark, aria_navigation_label_unique, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, widget_tabbable_exists |
| https://governo.it/it/agenda/2026-02-27t000000/voto-alle-donne/31206 | https://www.governo.it/it/agenda/2026-02-27t000000/voto-alle-donne/31206 | OK | 200 | yes | 6852 | 0 | 17 | 30 | 0 | 50 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R11 (Button elements have an accessible name), SIA-R111 (Interactive elements have a sufficient target size), SIA-R53 (Headings follow a logical hierarchy), SIA-R57 (Landmarks don't repeat the same content), SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background), SIA-R72, SIA-R73 (Text spacing can be adjusted without loss of content), SIA-R74, SIA-R78 (Headings of same level have text content between them), SIA-R83 (Text can be resized to 200% without loss of content), SIA-R84 |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_complementary_labelled, aria_content_in_landmark, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, text_quoted_correctly, widget_tabbable_exists |
| https://governo.it/it/media/riunione-della-coalizione-dei-volenterosi/31181 | https://www.governo.it/it/media/riunione-della-coalizione-dei-volenterosi/31181 | OK | 200 | yes | 7822 | 0 | 18 | 32 | 0 | 55 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R11 (Button elements have an accessible name), SIA-R111 (Interactive elements have a sufficient target size), SIA-R113, SIA-R53 (Headings follow a logical hierarchy), SIA-R57 (Landmarks don't repeat the same content), SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background), SIA-R72, SIA-R73 (Text spacing can be adjusted without loss of content), SIA-R74, SIA-R78 (Headings of same level have text content between them), SIA-R83 (Text can be resized to 200% without loss of content), SIA-R84 |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_content_in_landmark, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, widget_tabbable_exists |
| https://governo.it/it/media/incontro-con-il-presidente-della-repubblica-di-cipro/31200 | https://www.governo.it/it/media/incontro-con-il-presidente-della-repubblica-di-cipro/31200 | OK | 200 | yes | 7205 | 0 | 17 | 32 | 0 | 55 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R11 (Button elements have an accessible name), SIA-R111 (Interactive elements have a sufficient target size), SIA-R53 (Headings follow a logical hierarchy), SIA-R57 (Landmarks don't repeat the same content), SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background), SIA-R72, SIA-R73 (Text spacing can be adjusted without loss of content), SIA-R74, SIA-R78 (Headings of same level have text content between them), SIA-R83 (Text can be resized to 200% without loss of content), SIA-R84 |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_content_in_landmark, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, widget_tabbable_exists |
| https://governo.it/it/il-governo-funzioni-struttura-e-storia/la-struttura-del-governo/185 | https://www.governo.it/it/il-governo-funzioni-struttura-e-storia/la-struttura-del-governo/185 | OK | 200 | yes | 6478 | 0 | 18 | 31 | 0 | 55 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R11 (Button elements have an accessible name), SIA-R111 (Interactive elements have a sufficient target size), SIA-R53 (Headings follow a logical hierarchy), SIA-R56 (Landmarks with the same role are distinguishable), SIA-R57 (Landmarks don't repeat the same content), SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background), SIA-R72, SIA-R73 (Text spacing can be adjusted without loss of content), SIA-R74, SIA-R78 (Headings of same level have text content between them), SIA-R83 (Text can be resized to 200% without loss of content), SIA-R84 |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_complementary_labelled, aria_content_in_landmark, aria_navigation_label_unique, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, widget_tabbable_exists |
| https://governo.it/it/privacy-policy | https://www.governo.it/it/privacy-policy | OK | 200 | yes | 6832 | 0 | 19 | 30 | 0 | 82 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R11 (Button elements have an accessible name), SIA-R111 (Interactive elements have a sufficient target size), SIA-R53 (Headings follow a logical hierarchy), SIA-R57 (Landmarks don't repeat the same content), SIA-R62 (Links are visually distinguishable from surrounding text), SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background), SIA-R72, SIA-R73 (Text spacing can be adjusted without loss of content), SIA-R74, SIA-R78 (Headings of same level have text content between them), SIA-R83 (Text can be resized to 200% without loss of content), SIA-R84 |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_complementary_labelled, aria_content_in_landmark, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, list_markup_review, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, widget_tabbable_exists |
| https://governo.it/it/tipologie-contenuto/consiglio-dei-ministri | https://www.governo.it/it/tipologie-contenuto/consiglio-dei-ministri | OK | 200 | yes | 7998 | 0 | 20 | 28 | 0 | 114 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R11 (Button elements have an accessible name), SIA-R111 (Interactive elements have a sufficient target size), SIA-R113, SIA-R53 (Headings follow a logical hierarchy), SIA-R57 (Landmarks don't repeat the same content), SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background), SIA-R72, SIA-R73 (Text spacing can be adjusted without loss of content), SIA-R74, SIA-R78 (Headings of same level have text content between them), SIA-R84 |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_content_in_landmark, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, widget_tabbable_exists |
| https://governo.it/it/i-governi-dal-1943-ad-oggi/i-governi-nelle-legislature/192 | https://www.governo.it/it/i-governi-dal-1943-ad-oggi/i-governi-nelle-legislature/192 | OK | 200 | yes | 8014 | 0 | 18 | 32 | 0 | 164 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R11 (Button elements have an accessible name), SIA-R111 (Interactive elements have a sufficient target size), SIA-R53 (Headings follow a logical hierarchy), SIA-R56 (Landmarks with the same role are distinguishable), SIA-R57 (Landmarks don't repeat the same content), SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background), SIA-R72, SIA-R73 (Text spacing can be adjusted without loss of content), SIA-R74, SIA-R78 (Headings of same level have text content between them), SIA-R83 (Text can be resized to 200% without loss of content), SIA-R84 |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_complementary_labelled, aria_content_in_landmark, aria_navigation_label_unique, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, widget_tabbable_exists |
| https://governo.it/it/note-legali | https://www.governo.it/it/note-legali | OK | 200 | yes | 7118 | 0 | 20 | 29 | 0 | 63 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R11 (Button elements have an accessible name), SIA-R111 (Interactive elements have a sufficient target size), SIA-R113, SIA-R53 (Headings follow a logical hierarchy), SIA-R57 (Landmarks don't repeat the same content), SIA-R62 (Links are visually distinguishable from surrounding text), SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background), SIA-R72, SIA-R73 (Text spacing can be adjusted without loss of content), SIA-R74, SIA-R78 (Headings of same level have text content between them), SIA-R83 (Text can be resized to 200% without loss of content), SIA-R84 |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_complementary_labelled, aria_content_in_landmark, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, widget_tabbable_exists |
| https://governo.it/it/agenda/2026-03-04t000000/incontro-con-il-ministro-degli-esteri-degli-emirati-arabi-uniti/31207 | https://www.governo.it/it/agenda/2026-03-04t000000/incontro-con-il-ministro-degli-esteri-degli-emirati-arabi-uniti/31207 | FAIL | 404 | yes | 7861 | 0 | 16 | 32 | 0 | 53 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R11 (Button elements have an accessible name), SIA-R111 (Interactive elements have a sufficient target size), SIA-R53 (Headings follow a logical hierarchy), SIA-R57 (Landmarks don't repeat the same content), SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background), SIA-R72, SIA-R73 (Text spacing can be adjusted without loss of content), SIA-R74, SIA-R78 (Headings of same level have text content between them), SIA-R84 |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_content_in_landmark, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, widget_tabbable_exists |
| https://governo.it/it/articolo/corinaldo-incontro-con-i-familiari-delle-vittime-palazzo-chigi/31212 | https://www.governo.it/it/articolo/corinaldo-incontro-con-i-familiari-delle-vittime-palazzo-chigi/31212 | OK | 200 | yes | 7080 | 0 | 17 | 35 | 0 | 50 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R11 (Button elements have an accessible name), SIA-R111 (Interactive elements have a sufficient target size), SIA-R2 (HTML elements have a valid lang attribute), SIA-R53 (Headings follow a logical hierarchy), SIA-R57 (Landmarks don't repeat the same content), SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background), SIA-R72, SIA-R73 (Text spacing can be adjusted without loss of content), SIA-R74, SIA-R78 (Headings of same level have text content between them), SIA-R83 (Text can be resized to 200% without loss of content), SIA-R84 |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_complementary_labelled, aria_content_in_landmark, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, img_alt_valid, input_label_visible, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, text_quoted_correctly, widget_tabbable_exists |
| https://governo.it/it/articolo/g7-leaders-statement-war-ukraine/31186 | https://www.governo.it/it/articolo/g7-leaders-statement-war-ukraine/31186 | OK | 200 | yes | 7344 | 0 | 19 | 33 | 0 | 53 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R11 (Button elements have an accessible name), SIA-R111 (Interactive elements have a sufficient target size), SIA-R2 (HTML elements have a valid lang attribute), SIA-R53 (Headings follow a logical hierarchy), SIA-R57 (Landmarks don't repeat the same content), SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background), SIA-R72, SIA-R73 (Text spacing can be adjusted without loss of content), SIA-R74, SIA-R78 (Headings of same level have text content between them), SIA-R83 (Text can be resized to 200% without loss of content), SIA-R84 |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_complementary_labelled, aria_content_in_landmark, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, img_alt_valid, input_label_visible, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, text_sensory_misuse, widget_tabbable_exists |
| https://governo.it/it/la-presidenza-del-consiglio-dei-ministri | https://www.governo.it/it/la-presidenza-del-consiglio-dei-ministri | OK | 200 | yes | 8105 | 0 | 19 | 37 | 0 | 97 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R11 (Button elements have an accessible name), SIA-R111 (Interactive elements have a sufficient target size), SIA-R53 (Headings follow a logical hierarchy), SIA-R56 (Landmarks with the same role are distinguishable), SIA-R57 (Landmarks don't repeat the same content), SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background), SIA-R72, SIA-R73 (Text spacing can be adjusted without loss of content), SIA-R74, SIA-R78 (Headings of same level have text content between them), SIA-R83 (Text can be resized to 200% without loss of content), SIA-R84 |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_complementary_labelled, aria_content_in_landmark, aria_navigation_label_unique, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, widget_tabbable_exists |
| https://governo.it/it/articolo/medio-oriente-il-presidente-meloni-presiede-una-conferenza-telefonica/31215 | https://www.governo.it/it/articolo/medio-oriente-il-presidente-meloni-presiede-una-conferenza-telefonica/31215 | OK | 200 | yes | 7642 | 0 | 17 | 32 | 0 | 52 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R11 (Button elements have an accessible name), SIA-R111 (Interactive elements have a sufficient target size), SIA-R2 (HTML elements have a valid lang attribute), SIA-R53 (Headings follow a logical hierarchy), SIA-R57 (Landmarks don't repeat the same content), SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background), SIA-R72, SIA-R73 (Text spacing can be adjusted without loss of content), SIA-R74, SIA-R78 (Headings of same level have text content between them), SIA-R83 (Text can be resized to 200% without loss of content), SIA-R84 |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_complementary_labelled, aria_content_in_landmark, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, img_alt_valid, input_label_visible, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, widget_tabbable_exists |
| https://governo.it/it/notizie-presidenza | https://www.governo.it/it/notizie-presidenza | OK | 200 | yes | 8808 | 0 | 17 | 32 | 0 | 112 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R11 (Button elements have an accessible name), SIA-R111 (Interactive elements have a sufficient target size), SIA-R113, SIA-R53 (Headings follow a logical hierarchy), SIA-R57 (Landmarks don't repeat the same content), SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background), SIA-R72, SIA-R73 (Text spacing can be adjusted without loss of content), SIA-R74, SIA-R78 (Headings of same level have text content between them), SIA-R84 |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_content_in_landmark, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, widget_tabbable_exists |
| https://governo.it/it/notizie-chigi | https://www.governo.it/it/notizie-chigi | OK | 200 | yes | 8493 | 0 | 16 | 33 | 0 | 105 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R11 (Button elements have an accessible name), SIA-R111 (Interactive elements have a sufficient target size), SIA-R113, SIA-R53 (Headings follow a logical hierarchy), SIA-R57 (Landmarks don't repeat the same content), SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background), SIA-R72, SIA-R73 (Text spacing can be adjusted without loss of content), SIA-R74, SIA-R78 (Headings of same level have text content between them), SIA-R84 |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_content_in_landmark, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, text_quoted_correctly, widget_tabbable_exists |
| https://governo.it/it/interventi | https://www.governo.it/it/interventi | OK | 200 | yes | 7870 | 0 | 15 | 30 | 0 | 76 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R11 (Button elements have an accessible name), SIA-R111 (Interactive elements have a sufficient target size), SIA-R113, SIA-R53 (Headings follow a logical hierarchy), SIA-R57 (Landmarks don't repeat the same content), SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background), SIA-R72, SIA-R73 (Text spacing can be adjusted without loss of content), SIA-R74, SIA-R78 (Headings of same level have text content between them), SIA-R84 |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_content_in_landmark, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, text_quoted_correctly, widget_tabbable_exists |
| https://governo.it/it/sala-stampa | https://www.governo.it/it/sala-stampa | OK | 200 | yes | 6555 | 0 | 19 | 33 | 0 | 57 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R11 (Button elements have an accessible name), SIA-R111 (Interactive elements have a sufficient target size), SIA-R53 (Headings follow a logical hierarchy), SIA-R57 (Landmarks don't repeat the same content), SIA-R62 (Links are visually distinguishable from surrounding text), SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background), SIA-R72, SIA-R73 (Text spacing can be adjusted without loss of content), SIA-R74, SIA-R78 (Headings of same level have text content between them), SIA-R83 (Text can be resized to 200% without loss of content), SIA-R84 |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_complementary_labelled, aria_content_in_landmark, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, widget_tabbable_exists |
| https://governo.it/it/gallerie-governo | https://www.governo.it/it/gallerie-governo | OK | 200 | yes | 8041 | 0 | 17 | 46 | 0 | 107 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R11 (Button elements have an accessible name), SIA-R111 (Interactive elements have a sufficient target size), SIA-R113, SIA-R53 (Headings follow a logical hierarchy), SIA-R57 (Landmarks don't repeat the same content), SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background), SIA-R72, SIA-R73 (Text spacing can be adjusted without loss of content), SIA-R74, SIA-R78 (Headings of same level have text content between them), SIA-R84 |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_content_in_landmark, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, widget_tabbable_exists |
| https://governo.it/it/articolo/il-messaggio-del-presidente-meloni-lanniversario-della-costituzione-di-confetra/31195 | https://www.governo.it/it/articolo/il-messaggio-del-presidente-meloni-lanniversario-della-costituzione-di-confetra/31195 | OK | 200 | yes | 7221 | 0 | 20 | 32 | 0 | 50 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R11 (Button elements have an accessible name), SIA-R111 (Interactive elements have a sufficient target size), SIA-R2 (HTML elements have a valid lang attribute), SIA-R53 (Headings follow a logical hierarchy), SIA-R57 (Landmarks don't repeat the same content), SIA-R61, SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background), SIA-R72, SIA-R73 (Text spacing can be adjusted without loss of content), SIA-R74, SIA-R78 (Headings of same level have text content between them), SIA-R83 (Text can be resized to 200% without loss of content), SIA-R84 |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_complementary_labelled, aria_content_in_landmark, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, img_alt_valid, input_label_visible, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, widget_tabbable_exists |
| https://governo.it/it/articolo/il-sottosegretario-mantovano-partecipa-allinaugurazione-dell-anno-giudiziario-della-corte | https://www.governo.it/it/articolo/il-sottosegretario-mantovano-partecipa-allinaugurazione-dell-anno-giudiziario-della-corte | OK | 200 | yes | 6958 | 0 | 19 | 31 | 0 | 51 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R11 (Button elements have an accessible name), SIA-R111 (Interactive elements have a sufficient target size), SIA-R2 (HTML elements have a valid lang attribute), SIA-R53 (Headings follow a logical hierarchy), SIA-R57 (Landmarks don't repeat the same content), SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background), SIA-R72, SIA-R73 (Text spacing can be adjusted without loss of content), SIA-R74, SIA-R78 (Headings of same level have text content between them), SIA-R83 (Text can be resized to 200% without loss of content), SIA-R84 |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_complementary_labelled, aria_content_in_landmark, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, img_alt_valid, input_label_visible, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, widget_tabbable_exists |

## Detailed Failure Information (ALFA)

### https://governo.it/

#### Rule: [SIA-R11: Button elements have an accessible name](https://alfa.siteimprove.com/rules/sia-r11)

**Failure 1:**
- Message: The link does not have an accessible name
- HTML: `<a href="#" class="toggle-menu menu-left push-body jPushMenuBtn">...</a>`
- XPath: `/a[@class="toggle-menu menu-left push-body jPushMenuBtn"]`

**Failure 2:**
- Message: The link does not have an accessible name
- HTML: `<a href="">...</a>`
- XPath: `/a`

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)

**Failure 1:**
- Message: Target has insufficient size
- HTML: `<a href="#" class="toggle-menu menu-left push-body jPushMenuBtn">...</a>`
- XPath: `/a[@class="toggle-menu menu-left push-body jPushMenuBtn"]`

**Failure 2:**
- Message: Target has insufficient size
- HTML: `<a href="https://www.governo.it">IT</a>`
- XPath: `/a`

**Failure 3:**
- Message: Target has insufficient size
- HTML: `<a class="vai_alla_notizia" href="https://www.governo.it/it/articolo/seconda-riunione-del-gruppo-di-lavoro-informale-sulla-competitivit-europea/31312" title="Continua a leggere">...</a>`
- XPath: `/a[@class="vai_alla_notizia"]`

#### Rule: [SIA-R2: HTML elements have a valid lang attribute](https://alfa.siteimprove.com/rules/sia-r2)

**Failure 1:**
- Message: The image does not have an accessible name
- HTML: `<img src="https://www.governo.it/sites/governo.it/files/styles/860x600/public/field/image/DSC00290_1.jpeg?itok=5aBKfrtS" class="class_img_url_immagine" />`
- XPath: `/img[@class="class_img_url_immagine"]`

#### Rule: [SIA-R53: Headings follow a logical hierarchy](https://alfa.siteimprove.com/rules/sia-r53)

**Failure 1:**
- Message: The heading skips one or more levels
- HTML: `<h3 class="contacts_footer">Contatti</h3>`
- XPath: `/h3[@class="contacts_footer"]`

#### Rule: [SIA-R57: Landmarks don't repeat the same content](https://alfa.siteimprove.com/rules/sia-r57)

**Failure 1:**
- Message: The text is not included in a landmark region

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 2.27:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R69: Text has sufficient contrast with its background](https://alfa.siteimprove.com/rules/sia-r69)

**Failure 1:**
- Message: The highest possible contrast of the text is 2.27:1 which is         below the required contrast of 4.5:1

#### Rule: [SIA-R72](https://alfa.siteimprove.com/rules/sia-r72)

**Failure 1:**
- Message: The text of the paragraph is uppercased
- HTML: `<p class="menu_under_burger">MENU</p>`
- XPath: `/p[@class="menu_under_burger"]`

#### Rule: [SIA-R73: Text spacing can be adjusted without loss of content](https://alfa.siteimprove.com/rules/sia-r73)

**Failure 1:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p>...</p>`
- XPath: `/p`

**Failure 2:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="menu_under_burger">MENU</p>`
- XPath: `/p[@class="menu_under_burger"]`

**Failure 3:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="nav_social clearfix">...</p>`
- XPath: `/p[@class="nav_social clearfix"]`

**Failure 4:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="tipologia_home_pp">10 Marzo 2026</p>`
- XPath: `/p[@class="tipologia_home_pp"]`

**Failure 5:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="h3 pull-right">...</p>`
- XPath: `/p[@class="h3 pull-right"]`

*... and 2 more failures for this rule*

#### Rule: [SIA-R74](https://alfa.siteimprove.com/rules/sia-r74)

**Failure 1:**
- Message: The font size is specified using an absolute unit
- HTML: `<p>...</p>`
- XPath: `/p`

#### Rule: [SIA-R78: Headings of same level have text content between them](https://alfa.siteimprove.com/rules/sia-r78)

**Failure 1:**
- Message: There is no content between this heading and the next
- HTML: `<h3>Piano Mattei per l’Africa, riunione cabina di regi...</h3>`
- XPath: `/h3`

**Failure 2:**
- Message: There is no content between this heading and the next
- HTML: `<h3 class="contacts_footer">Contatti</h3>`
- XPath: `/h3[@class="contacts_footer"]`

#### Rule: [SIA-R84](https://alfa.siteimprove.com/rules/sia-r84)

**Failure 1:**
- Message: The scrollable element is not reachable through keyboard navigation
- HTML: `<nav class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left">...</nav>`
- XPath: `/nav[@class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left"]`

### https://governo.it/en

#### Rule: [SIA-R11: Button elements have an accessible name](https://alfa.siteimprove.com/rules/sia-r11)

**Failure 1:**
- Message: The link does not have an accessible name
- HTML: `<a href="#" class="toggle-menu menu-left push-body jPushMenuBtn">...</a>`
- XPath: `/a[@class="toggle-menu menu-left push-body jPushMenuBtn"]`

**Failure 2:**
- Message: The link does not have an accessible name
- HTML: `<a href="">...</a>`
- XPath: `/a`

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)

**Failure 1:**
- Message: Target has insufficient size
- HTML: `<button type="button" class="agree-button eu-cookie-compliance-secondary-button">Si, acconsento</button>`
- XPath: `/button[@class="agree-button eu-cookie-compliance-secondary-button"]`

**Failure 2:**
- Message: Target has insufficient size
- HTML: `<button type="button" class="decline-button eu-cookie-compliance-default-button">No, non acconsento</button>`
- XPath: `/button[@class="decline-button eu-cookie-compliance-default-button"]`

**Failure 3:**
- Message: Target has insufficient size
- HTML: `<a href="https://www.governo.it">IT</a>`
- XPath: `/a`

**Failure 4:**
- Message: Target has insufficient size
- HTML: `<a class="vai_alla_notizia" href="https://www.governo.it/en/articolo/international-women-s-day-celebration/31287" title="Read more">...</a>`
- XPath: `/a[@class="vai_alla_notizia"]`

#### Rule: [SIA-R2: HTML elements have a valid lang attribute](https://alfa.siteimprove.com/rules/sia-r2)

**Failure 1:**
- Message: The image does not have an accessible name
- HTML: `<img src="https://www.governo.it/sites/governo.it/files/styles/860x600/public/field/image/DSC00756_pp.gif?itok=y0IAdZVT" class="class_img_url_immagine" />`
- XPath: `/img[@class="class_img_url_immagine"]`

#### Rule: [SIA-R53: Headings follow a logical hierarchy](https://alfa.siteimprove.com/rules/sia-r53)

**Failure 1:**
- Message: The heading skips one or more levels
- HTML: `<h3 class="contacts_footer">Contacts</h3>`
- XPath: `/h3[@class="contacts_footer"]`

#### Rule: [SIA-R57: Landmarks don't repeat the same content](https://alfa.siteimprove.com/rules/sia-r57)

**Failure 1:**
- Message: The text is not included in a landmark region

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 2.27:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R69: Text has sufficient contrast with its background](https://alfa.siteimprove.com/rules/sia-r69)

**Failure 1:**
- Message: The highest possible contrast of the text is 2.27:1 which is         below the required contrast of 4.5:1

#### Rule: [SIA-R72](https://alfa.siteimprove.com/rules/sia-r72)

**Failure 1:**
- Message: The text of the paragraph is uppercased
- HTML: `<p class="menu_under_burger">MENU</p>`
- XPath: `/p[@class="menu_under_burger"]`

#### Rule: [SIA-R73: Text spacing can be adjusted without loss of content](https://alfa.siteimprove.com/rules/sia-r73)

**Failure 1:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p>...</p>`
- XPath: `/p`

**Failure 2:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="menu_under_burger">MENU</p>`
- XPath: `/p[@class="menu_under_burger"]`

**Failure 3:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="nav_social clearfix">...</p>`
- XPath: `/p[@class="nav_social clearfix"]`

**Failure 4:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="tipologia_home_pp">9 March 2026</p>`
- XPath: `/p[@class="tipologia_home_pp"]`

#### Rule: [SIA-R74](https://alfa.siteimprove.com/rules/sia-r74)

**Failure 1:**
- Message: The font size is specified using an absolute unit
- HTML: `<p>...</p>`
- XPath: `/p`

#### Rule: [SIA-R78: Headings of same level have text content between them](https://alfa.siteimprove.com/rules/sia-r78)

**Failure 1:**
- Message: There is no content between this heading and the next
- HTML: `<h3>‘International Women’s Day’ celebration  [PHOTO]</h3>`
- XPath: `/h3`

**Failure 2:**
- Message: There is no content between this heading and the next
- HTML: `<h3 class="contacts_footer">Contacts</h3>`
- XPath: `/h3[@class="contacts_footer"]`

#### Rule: [SIA-R84](https://alfa.siteimprove.com/rules/sia-r84)

**Failure 1:**
- Message: The scrollable element is not reachable through keyboard navigation
- HTML: `<nav class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left">...</nav>`
- XPath: `/nav[@class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left"]`

### https://governo.it/it

#### Rule: [SIA-R11: Button elements have an accessible name](https://alfa.siteimprove.com/rules/sia-r11)

**Failure 1:**
- Message: The link does not have an accessible name
- HTML: `<a href="#" class="toggle-menu menu-left push-body jPushMenuBtn">...</a>`
- XPath: `/a[@class="toggle-menu menu-left push-body jPushMenuBtn"]`

**Failure 2:**
- Message: The link does not have an accessible name
- HTML: `<a href="">...</a>`
- XPath: `/a`

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)

**Failure 1:**
- Message: Target has insufficient size
- HTML: `<a href="#" class="toggle-menu menu-left push-body jPushMenuBtn">...</a>`
- XPath: `/a[@class="toggle-menu menu-left push-body jPushMenuBtn"]`

**Failure 2:**
- Message: Target has insufficient size
- HTML: `<a href="https://www.governo.it">...</a>`
- XPath: `/a`

**Failure 3:**
- Message: Target has insufficient size
- HTML: `<a class="vai_alla_notizia" href="https://www.governo.it/it/articolo/seconda-riunione-del-gruppo-di-lavoro-informale-sulla-competitivit-europea/31312" title="Continua a leggere">...</a>`
- XPath: `/a[@class="vai_alla_notizia"]`

#### Rule: [SIA-R2: HTML elements have a valid lang attribute](https://alfa.siteimprove.com/rules/sia-r2)

**Failure 1:**
- Message: The image does not have an accessible name
- HTML: `<img src="https://www.governo.it/sites/governo.it/files/styles/860x600/public/field/image/DSC00290_1.jpeg?itok=5aBKfrtS" class="class_img_url_immagine" />`
- XPath: `/img[@class="class_img_url_immagine"]`

#### Rule: [SIA-R53: Headings follow a logical hierarchy](https://alfa.siteimprove.com/rules/sia-r53)

**Failure 1:**
- Message: The heading skips one or more levels
- HTML: `<h3 class="contacts_footer">Contatti</h3>`
- XPath: `/h3[@class="contacts_footer"]`

#### Rule: [SIA-R57: Landmarks don't repeat the same content](https://alfa.siteimprove.com/rules/sia-r57)

**Failure 1:**
- Message: The text is not included in a landmark region

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 2.27:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R69: Text has sufficient contrast with its background](https://alfa.siteimprove.com/rules/sia-r69)

**Failure 1:**
- Message: The highest possible contrast of the text is 2.27:1 which is         below the required contrast of 4.5:1

#### Rule: [SIA-R72](https://alfa.siteimprove.com/rules/sia-r72)

**Failure 1:**
- Message: The text of the paragraph is uppercased
- HTML: `<p class="menu_under_burger">MENU</p>`
- XPath: `/p[@class="menu_under_burger"]`

#### Rule: [SIA-R73: Text spacing can be adjusted without loss of content](https://alfa.siteimprove.com/rules/sia-r73)

**Failure 1:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p>...</p>`
- XPath: `/p`

**Failure 2:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="menu_under_burger">MENU</p>`
- XPath: `/p[@class="menu_under_burger"]`

**Failure 3:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="nav_social clearfix">...</p>`
- XPath: `/p[@class="nav_social clearfix"]`

**Failure 4:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="tipologia_home_pp">10 Marzo 2026</p>`
- XPath: `/p[@class="tipologia_home_pp"]`

**Failure 5:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="h3 pull-right">...</p>`
- XPath: `/p[@class="h3 pull-right"]`

*... and 2 more failures for this rule*

#### Rule: [SIA-R74](https://alfa.siteimprove.com/rules/sia-r74)

**Failure 1:**
- Message: The font size is specified using an absolute unit
- HTML: `<p>...</p>`
- XPath: `/p`

#### Rule: [SIA-R78: Headings of same level have text content between them](https://alfa.siteimprove.com/rules/sia-r78)

**Failure 1:**
- Message: There is no content between this heading and the next
- HTML: `<h3>Piano Mattei per l’Africa, riunione cabina di regi...</h3>`
- XPath: `/h3`

**Failure 2:**
- Message: There is no content between this heading and the next
- HTML: `<h3 class="contacts_footer">Contatti</h3>`
- XPath: `/h3[@class="contacts_footer"]`

#### Rule: [SIA-R84](https://alfa.siteimprove.com/rules/sia-r84)

**Failure 1:**
- Message: The scrollable element is not reachable through keyboard navigation
- HTML: `<nav class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left">...</nav>`
- XPath: `/nav[@class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left"]`

### https://governo.it/pubblicit%C3%A0-legale

#### Rule: [SIA-R11: Button elements have an accessible name](https://alfa.siteimprove.com/rules/sia-r11)

**Failure 1:**
- Message: The link does not have an accessible name
- HTML: `<a href="#" class="toggle-menu menu-left push-body jPushMenuBtn">...</a>`
- XPath: `/a[@class="toggle-menu menu-left push-body jPushMenuBtn"]`

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)

**Failure 1:**
- Message: Target has insufficient size
- HTML: `<button type="button" class="agree-button eu-cookie-compliance-secondary-button">Si, acconsento</button>`
- XPath: `/button[@class="agree-button eu-cookie-compliance-secondary-button"]`

**Failure 2:**
- Message: Target has insufficient size
- HTML: `<button type="button" class="decline-button eu-cookie-compliance-default-button">No, non acconsento</button>`
- XPath: `/button[@class="decline-button eu-cookie-compliance-default-button"]`

**Failure 3:**
- Message: Target has insufficient size
- HTML: `<a href="https://www.governo.it">IT</a>`
- XPath: `/a`

#### Rule: [SIA-R113](https://alfa.siteimprove.com/rules/sia-r113)

**Failure 1:**
- Message: Target has insufficient size and spacing
- HTML: `<a title="Vai a pagina 2" href="/it/pubblicit%C3%A0-legale?page=1">2</a>`
- XPath: `/a`

#### Rule: [SIA-R53: Headings follow a logical hierarchy](https://alfa.siteimprove.com/rules/sia-r53)

**Failure 1:**
- Message: The heading skips one or more levels
- HTML: `<h3 class="contacts_footer">Contatti</h3>`
- XPath: `/h3[@class="contacts_footer"]`

#### Rule: [SIA-R57: Landmarks don't repeat the same content](https://alfa.siteimprove.com/rules/sia-r57)

**Failure 1:**
- Message: The text is not included in a landmark region

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 2.27:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R69: Text has sufficient contrast with its background](https://alfa.siteimprove.com/rules/sia-r69)

**Failure 1:**
- Message: The highest possible contrast of the text is 2.27:1 which is         below the required contrast of 4.5:1

#### Rule: [SIA-R72](https://alfa.siteimprove.com/rules/sia-r72)

**Failure 1:**
- Message: The text of the paragraph is uppercased
- HTML: `<p class="menu_under_burger">MENU</p>`
- XPath: `/p[@class="menu_under_burger"]`

#### Rule: [SIA-R73: Text spacing can be adjusted without loss of content](https://alfa.siteimprove.com/rules/sia-r73)

**Failure 1:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p>...</p>`
- XPath: `/p`

**Failure 2:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="menu_under_burger">MENU</p>`
- XPath: `/p[@class="menu_under_burger"]`

**Failure 3:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="nav_social clearfix">...</p>`
- XPath: `/p[@class="nav_social clearfix"]`

#### Rule: [SIA-R74](https://alfa.siteimprove.com/rules/sia-r74)

**Failure 1:**
- Message: The font size is specified using an absolute unit
- HTML: `<p>...</p>`
- XPath: `/p`

#### Rule: [SIA-R78: Headings of same level have text content between them](https://alfa.siteimprove.com/rules/sia-r78)

**Failure 1:**
- Message: There is no content between this heading and the next
- HTML: `<h3 class="contacts_footer">Contatti</h3>`
- XPath: `/h3[@class="contacts_footer"]`

#### Rule: [SIA-R84](https://alfa.siteimprove.com/rules/sia-r84)

**Failure 1:**
- Message: The scrollable element is not reachable through keyboard navigation
- HTML: `<nav class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left">...</nav>`
- XPath: `/nav[@class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left"]`

### https://governo.it/feed/rss

#### Rule: [SIA-R1: id attributes are unique within the document](https://alfa.siteimprove.com/rules/sia-r1)

**Failure 1:**
- Message: The document does not have a `<title>` element

#### Rule: [SIA-R4: Page has a descriptive title](https://alfa.siteimprove.com/rules/sia-r4)

**Failure 1:**
- Message: The `lang` attribute is either missing, empty, or only whitespace
- HTML: `<html>...</html>`
- XPath: `/html`

#### Rule: [SIA-R59](https://alfa.siteimprove.com/rules/sia-r59)

**Failure 1:**
- Message: The document does not have a heading element

#### Rule: [SIA-R79](https://alfa.siteimprove.com/rules/sia-r79)

**Failure 1:**
- Message: The element has no <figure> ancestor and has text which not inside a <code>, <kbd> or <samp> element.
- HTML: `<pre style="word-wrap: break-word; white-space: pre-wrap;"><?xml version="1.0" encoding="utf-8" ?><rss versio...</pre>`
- XPath: `/pre`

#### Rule: [SIA-R87: First focusable element is a skip link](https://alfa.siteimprove.com/rules/sia-r87)

**Failure 1:**
- Message: The document has no tabbable descendants

### https://governo.it/it/agenda

#### Rule: [SIA-R11: Button elements have an accessible name](https://alfa.siteimprove.com/rules/sia-r11)

**Failure 1:**
- Message: The link does not have an accessible name
- HTML: `<a href="#" class="toggle-menu menu-left push-body jPushMenuBtn">...</a>`
- XPath: `/a[@class="toggle-menu menu-left push-body jPushMenuBtn"]`

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)

**Failure 1:**
- Message: Target has insufficient size
- HTML: `<button type="button" class="agree-button eu-cookie-compliance-secondary-button">Si, acconsento</button>`
- XPath: `/button[@class="agree-button eu-cookie-compliance-secondary-button"]`

**Failure 2:**
- Message: Target has insufficient size
- HTML: `<button type="button" class="decline-button eu-cookie-compliance-default-button">No, non acconsento</button>`
- XPath: `/button[@class="decline-button eu-cookie-compliance-default-button"]`

**Failure 3:**
- Message: Target has insufficient size
- HTML: `<a href="#" class="toggle-menu menu-left push-body jPushMenuBtn">...</a>`
- XPath: `/a[@class="toggle-menu menu-left push-body jPushMenuBtn"]`

**Failure 4:**
- Message: Target has insufficient size
- HTML: `<a href="https://www.governo.it">IT</a>`
- XPath: `/a`

**Failure 5:**
- Message: Target has insufficient size
- HTML: `<button type="submit" name="m_m" value="1773186352" class="btn-link bottone_agenda_all">Febbraio 2026</button>`
- XPath: `/button[@class="btn-link bottone_agenda_all"]`

#### Rule: [SIA-R53: Headings follow a logical hierarchy](https://alfa.siteimprove.com/rules/sia-r53)

**Failure 1:**
- Message: The heading skips one or more levels
- HTML: `<h3 class="contacts_footer">Contatti</h3>`
- XPath: `/h3[@class="contacts_footer"]`

#### Rule: [SIA-R57: Landmarks don't repeat the same content](https://alfa.siteimprove.com/rules/sia-r57)

**Failure 1:**
- Message: The text is not included in a landmark region

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 2.27:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R69: Text has sufficient contrast with its background](https://alfa.siteimprove.com/rules/sia-r69)

**Failure 1:**
- Message: The highest possible contrast of the text is 2.27:1 which is         below the required contrast of 4.5:1

#### Rule: [SIA-R72](https://alfa.siteimprove.com/rules/sia-r72)

**Failure 1:**
- Message: The text of the paragraph is uppercased
- HTML: `<p class="menu_under_burger">MENU</p>`
- XPath: `/p[@class="menu_under_burger"]`

#### Rule: [SIA-R73: Text spacing can be adjusted without loss of content](https://alfa.siteimprove.com/rules/sia-r73)

**Failure 1:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p>...</p>`
- XPath: `/p`

**Failure 2:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="menu_under_burger">MENU</p>`
- XPath: `/p[@class="menu_under_burger"]`

**Failure 3:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="nav_social clearfix">...</p>`
- XPath: `/p[@class="nav_social clearfix"]`

**Failure 4:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="agenda_titolo_vedi_tutto" style="font-weight: bold;">...</p>`
- XPath: `/p[@class="agenda_titolo_vedi_tutto"]`

#### Rule: [SIA-R74](https://alfa.siteimprove.com/rules/sia-r74)

**Failure 1:**
- Message: The font size is specified using an absolute unit
- HTML: `<p>...</p>`
- XPath: `/p`

#### Rule: [SIA-R78: Headings of same level have text content between them](https://alfa.siteimprove.com/rules/sia-r78)

**Failure 1:**
- Message: There is no content between this heading and the next
- HTML: `<h3 class="contacts_footer">Contatti</h3>`
- XPath: `/h3[@class="contacts_footer"]`

#### Rule: [SIA-R83: Text can be resized to 200% without loss of content](https://alfa.siteimprove.com/rules/sia-r83)

**Failure 1:**
- Message: The text is clipped

#### Rule: [SIA-R84](https://alfa.siteimprove.com/rules/sia-r84)

**Failure 1:**
- Message: The scrollable element is not reachable through keyboard navigation
- HTML: `<nav class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left">...</nav>`
- XPath: `/nav[@class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left"]`

### https://governo.it/it/agenda?t_p=h

#### Rule: [SIA-R11: Button elements have an accessible name](https://alfa.siteimprove.com/rules/sia-r11)

**Failure 1:**
- Message: The link does not have an accessible name
- HTML: `<a href="#" class="toggle-menu menu-left push-body jPushMenuBtn">...</a>`
- XPath: `/a[@class="toggle-menu menu-left push-body jPushMenuBtn"]`

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)

**Failure 1:**
- Message: Target has insufficient size
- HTML: `<button type="button" class="agree-button eu-cookie-compliance-secondary-button">Si, acconsento</button>`
- XPath: `/button[@class="agree-button eu-cookie-compliance-secondary-button"]`

**Failure 2:**
- Message: Target has insufficient size
- HTML: `<button type="button" class="decline-button eu-cookie-compliance-default-button">No, non acconsento</button>`
- XPath: `/button[@class="decline-button eu-cookie-compliance-default-button"]`

**Failure 3:**
- Message: Target has insufficient size
- HTML: `<a href="#" class="toggle-menu menu-left push-body jPushMenuBtn">...</a>`
- XPath: `/a[@class="toggle-menu menu-left push-body jPushMenuBtn"]`

**Failure 4:**
- Message: Target has insufficient size
- HTML: `<a href="https://www.governo.it">...</a>`
- XPath: `/a`

**Failure 5:**
- Message: Target has insufficient size
- HTML: `<button type="submit" name="m_m" value="1773185759" class="btn-link bottone_agenda_all">Febbraio 2026</button>`
- XPath: `/button[@class="btn-link bottone_agenda_all"]`

#### Rule: [SIA-R53: Headings follow a logical hierarchy](https://alfa.siteimprove.com/rules/sia-r53)

**Failure 1:**
- Message: The heading skips one or more levels
- HTML: `<h3 class="contacts_footer">Contatti</h3>`
- XPath: `/h3[@class="contacts_footer"]`

#### Rule: [SIA-R57: Landmarks don't repeat the same content](https://alfa.siteimprove.com/rules/sia-r57)

**Failure 1:**
- Message: The text is not included in a landmark region

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 2.27:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R69: Text has sufficient contrast with its background](https://alfa.siteimprove.com/rules/sia-r69)

**Failure 1:**
- Message: The highest possible contrast of the text is 2.27:1 which is         below the required contrast of 4.5:1

#### Rule: [SIA-R72](https://alfa.siteimprove.com/rules/sia-r72)

**Failure 1:**
- Message: The text of the paragraph is uppercased
- HTML: `<p class="menu_under_burger">MENU</p>`
- XPath: `/p[@class="menu_under_burger"]`

#### Rule: [SIA-R73: Text spacing can be adjusted without loss of content](https://alfa.siteimprove.com/rules/sia-r73)

**Failure 1:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p>...</p>`
- XPath: `/p`

**Failure 2:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="menu_under_burger">MENU</p>`
- XPath: `/p[@class="menu_under_burger"]`

**Failure 3:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="nav_social clearfix">...</p>`
- XPath: `/p[@class="nav_social clearfix"]`

**Failure 4:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="agenda_titolo_vedi_tutto" style="font-weight: bold;">...</p>`
- XPath: `/p[@class="agenda_titolo_vedi_tutto"]`

#### Rule: [SIA-R74](https://alfa.siteimprove.com/rules/sia-r74)

**Failure 1:**
- Message: The font size is specified using an absolute unit
- HTML: `<p>...</p>`
- XPath: `/p`

#### Rule: [SIA-R78: Headings of same level have text content between them](https://alfa.siteimprove.com/rules/sia-r78)

**Failure 1:**
- Message: There is no content between this heading and the next
- HTML: `<h3 class="contacts_footer">Contatti</h3>`
- XPath: `/h3[@class="contacts_footer"]`

#### Rule: [SIA-R83: Text can be resized to 200% without loss of content](https://alfa.siteimprove.com/rules/sia-r83)

**Failure 1:**
- Message: The text is clipped

#### Rule: [SIA-R84](https://alfa.siteimprove.com/rules/sia-r84)

**Failure 1:**
- Message: The scrollable element is not reachable through keyboard navigation
- HTML: `<nav class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left">...</nav>`
- XPath: `/nav[@class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left"]`

### https://governo.it/it/archivio-articoli-presidenza-del-consiglio

#### Rule: [SIA-R11: Button elements have an accessible name](https://alfa.siteimprove.com/rules/sia-r11)

**Failure 1:**
- Message: The link does not have an accessible name
- HTML: `<a href="#" class="toggle-menu menu-left push-body jPushMenuBtn">...</a>`
- XPath: `/a[@class="toggle-menu menu-left push-body jPushMenuBtn"]`

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)

**Failure 1:**
- Message: Target has insufficient size
- HTML: `<button type="button" class="agree-button eu-cookie-compliance-secondary-button">Si, acconsento</button>`
- XPath: `/button[@class="agree-button eu-cookie-compliance-secondary-button"]`

**Failure 2:**
- Message: Target has insufficient size
- HTML: `<button type="button" class="decline-button eu-cookie-compliance-default-button">No, non acconsento</button>`
- XPath: `/button[@class="decline-button eu-cookie-compliance-default-button"]`

**Failure 3:**
- Message: Target has insufficient size
- HTML: `<a href="https://www.governo.it">IT</a>`
- XPath: `/a`

#### Rule: [SIA-R113](https://alfa.siteimprove.com/rules/sia-r113)

**Failure 1:**
- Message: Target has insufficient size and spacing
- HTML: `<a title="Vai a pagina 2" href="/it/archivio-articoli-presidenza-del-consiglio?page=1">2</a>`
- XPath: `/a`

#### Rule: [SIA-R53: Headings follow a logical hierarchy](https://alfa.siteimprove.com/rules/sia-r53)

**Failure 1:**
- Message: The heading skips one or more levels
- HTML: `<h3 class="contacts_footer">Contatti</h3>`
- XPath: `/h3[@class="contacts_footer"]`

#### Rule: [SIA-R57: Landmarks don't repeat the same content](https://alfa.siteimprove.com/rules/sia-r57)

**Failure 1:**
- Message: The text is not included in a landmark region

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 2.27:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R69: Text has sufficient contrast with its background](https://alfa.siteimprove.com/rules/sia-r69)

**Failure 1:**
- Message: The highest possible contrast of the text is 2.27:1 which is         below the required contrast of 4.5:1

#### Rule: [SIA-R72](https://alfa.siteimprove.com/rules/sia-r72)

**Failure 1:**
- Message: The text of the paragraph is uppercased
- HTML: `<p class="menu_under_burger">MENU</p>`
- XPath: `/p[@class="menu_under_burger"]`

#### Rule: [SIA-R73: Text spacing can be adjusted without loss of content](https://alfa.siteimprove.com/rules/sia-r73)

**Failure 1:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p>...</p>`
- XPath: `/p`

**Failure 2:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="menu_under_burger">MENU</p>`
- XPath: `/p[@class="menu_under_burger"]`

**Failure 3:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="nav_social clearfix">...</p>`
- XPath: `/p[@class="nav_social clearfix"]`

#### Rule: [SIA-R74](https://alfa.siteimprove.com/rules/sia-r74)

**Failure 1:**
- Message: The font size is specified using an absolute unit
- HTML: `<p>...</p>`
- XPath: `/p`

#### Rule: [SIA-R78: Headings of same level have text content between them](https://alfa.siteimprove.com/rules/sia-r78)

**Failure 1:**
- Message: There is no content between this heading and the next
- HTML: `<h3 class="contacts_footer">Contatti</h3>`
- XPath: `/h3[@class="contacts_footer"]`

#### Rule: [SIA-R84](https://alfa.siteimprove.com/rules/sia-r84)

**Failure 1:**
- Message: The scrollable element is not reachable through keyboard navigation
- HTML: `<nav class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left">...</nav>`
- XPath: `/nav[@class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left"]`

### https://governo.it/it/archivio-consiglio-dei-ministri

#### Rule: [SIA-R11: Button elements have an accessible name](https://alfa.siteimprove.com/rules/sia-r11)

**Failure 1:**
- Message: The link does not have an accessible name
- HTML: `<a href="#" class="toggle-menu menu-left push-body jPushMenuBtn">...</a>`
- XPath: `/a[@class="toggle-menu menu-left push-body jPushMenuBtn"]`

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)

**Failure 1:**
- Message: Target has insufficient size
- HTML: `<a href="#" class="toggle-menu menu-left push-body jPushMenuBtn">...</a>`
- XPath: `/a[@class="toggle-menu menu-left push-body jPushMenuBtn"]`

**Failure 2:**
- Message: Target has insufficient size
- HTML: `<a href="https://www.governo.it">...</a>`
- XPath: `/a`

**Failure 3:**
- Message: Target has insufficient size
- HTML: `<a class="box_text_anchor" href="/it/articolo/consiglio-dei-ministri-n-164/31307">...</a>`
- XPath: `/a[@class="box_text_anchor"]`

#### Rule: [SIA-R113](https://alfa.siteimprove.com/rules/sia-r113)

**Failure 1:**
- Message: Target has insufficient size and spacing
- HTML: `<a title="Vai a pagina 2" href="/it/archivio-consiglio-dei-ministri?page=1">2</a>`
- XPath: `/a`

#### Rule: [SIA-R53: Headings follow a logical hierarchy](https://alfa.siteimprove.com/rules/sia-r53)

**Failure 1:**
- Message: The heading skips one or more levels
- HTML: `<h3 class="contacts_footer">Contatti</h3>`
- XPath: `/h3[@class="contacts_footer"]`

#### Rule: [SIA-R57: Landmarks don't repeat the same content](https://alfa.siteimprove.com/rules/sia-r57)

**Failure 1:**
- Message: The text is not included in a landmark region

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 2.27:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R69: Text has sufficient contrast with its background](https://alfa.siteimprove.com/rules/sia-r69)

**Failure 1:**
- Message: The highest possible contrast of the text is 2.27:1 which is         below the required contrast of 4.5:1

#### Rule: [SIA-R72](https://alfa.siteimprove.com/rules/sia-r72)

**Failure 1:**
- Message: The text of the paragraph is uppercased
- HTML: `<p class="menu_under_burger">MENU</p>`
- XPath: `/p[@class="menu_under_burger"]`

#### Rule: [SIA-R73: Text spacing can be adjusted without loss of content](https://alfa.siteimprove.com/rules/sia-r73)

**Failure 1:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p>...</p>`
- XPath: `/p`

**Failure 2:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="menu_under_burger">MENU</p>`
- XPath: `/p[@class="menu_under_burger"]`

**Failure 3:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="nav_social clearfix">...</p>`
- XPath: `/p[@class="nav_social clearfix"]`

#### Rule: [SIA-R74](https://alfa.siteimprove.com/rules/sia-r74)

**Failure 1:**
- Message: The font size is specified using an absolute unit
- HTML: `<p>...</p>`
- XPath: `/p`

#### Rule: [SIA-R78: Headings of same level have text content between them](https://alfa.siteimprove.com/rules/sia-r78)

**Failure 1:**
- Message: There is no content between this heading and the next
- HTML: `<h3 class="contacts_footer">Contatti</h3>`
- XPath: `/h3[@class="contacts_footer"]`

#### Rule: [SIA-R84](https://alfa.siteimprove.com/rules/sia-r84)

**Failure 1:**
- Message: The scrollable element is not reachable through keyboard navigation
- HTML: `<nav class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left">...</nav>`
- XPath: `/nav[@class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left"]`

### https://governo.it/it/campagne-di-comunicazione

#### Rule: [SIA-R11: Button elements have an accessible name](https://alfa.siteimprove.com/rules/sia-r11)

**Failure 1:**
- Message: The link does not have an accessible name
- HTML: `<a href="#" class="toggle-menu menu-left push-body jPushMenuBtn">...</a>`
- XPath: `/a[@class="toggle-menu menu-left push-body jPushMenuBtn"]`

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)

**Failure 1:**
- Message: Target has insufficient size
- HTML: `<button type="button" class="agree-button eu-cookie-compliance-secondary-button">Si, acconsento</button>`
- XPath: `/button[@class="agree-button eu-cookie-compliance-secondary-button"]`

**Failure 2:**
- Message: Target has insufficient size
- HTML: `<button type="button" class="decline-button eu-cookie-compliance-default-button">No, non acconsento</button>`
- XPath: `/button[@class="decline-button eu-cookie-compliance-default-button"]`

**Failure 3:**
- Message: Target has insufficient size
- HTML: `<a href="https://www.governo.it">IT</a>`
- XPath: `/a`

#### Rule: [SIA-R113](https://alfa.siteimprove.com/rules/sia-r113)

**Failure 1:**
- Message: Target has insufficient size and spacing
- HTML: `<a title="Vai a pagina 2" href="/it/campagne-di-comunicazione?page=1">2</a>`
- XPath: `/a`

#### Rule: [SIA-R53: Headings follow a logical hierarchy](https://alfa.siteimprove.com/rules/sia-r53)

**Failure 1:**
- Message: The heading skips one or more levels
- HTML: `<h3 class="contacts_footer">Contatti</h3>`
- XPath: `/h3[@class="contacts_footer"]`

#### Rule: [SIA-R57: Landmarks don't repeat the same content](https://alfa.siteimprove.com/rules/sia-r57)

**Failure 1:**
- Message: The text is not included in a landmark region

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 2.27:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R69: Text has sufficient contrast with its background](https://alfa.siteimprove.com/rules/sia-r69)

**Failure 1:**
- Message: The highest possible contrast of the text is 2.27:1 which is         below the required contrast of 4.5:1

#### Rule: [SIA-R72](https://alfa.siteimprove.com/rules/sia-r72)

**Failure 1:**
- Message: The text of the paragraph is uppercased
- HTML: `<p class="menu_under_burger">MENU</p>`
- XPath: `/p[@class="menu_under_burger"]`

#### Rule: [SIA-R73: Text spacing can be adjusted without loss of content](https://alfa.siteimprove.com/rules/sia-r73)

**Failure 1:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p>...</p>`
- XPath: `/p`

**Failure 2:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="menu_under_burger">MENU</p>`
- XPath: `/p[@class="menu_under_burger"]`

**Failure 3:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="nav_social clearfix">...</p>`
- XPath: `/p[@class="nav_social clearfix"]`

**Failure 4:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="h6">Video                    </p>`
- XPath: `/p[@class="h6"]`

#### Rule: [SIA-R74](https://alfa.siteimprove.com/rules/sia-r74)

**Failure 1:**
- Message: The font size is specified using an absolute unit
- HTML: `<p>...</p>`
- XPath: `/p`

#### Rule: [SIA-R78: Headings of same level have text content between them](https://alfa.siteimprove.com/rules/sia-r78)

**Failure 1:**
- Message: There is no content between this heading and the next
- HTML: `<h2 class="h4">Campagna di comunicazione istituzionale “Iscrizion...</h2>`
- XPath: `/h2[@class="h4"]`

**Failure 2:**
- Message: There is no content between this heading and the next
- HTML: `<h3 class="contacts_footer">Contatti</h3>`
- XPath: `/h3[@class="contacts_footer"]`

#### Rule: [SIA-R84](https://alfa.siteimprove.com/rules/sia-r84)

**Failure 1:**
- Message: The scrollable element is not reachable through keyboard navigation
- HTML: `<nav class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left">...</nav>`
- XPath: `/nav[@class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left"]`

### https://governo.it/it/come-fare

#### Rule: [SIA-R11: Button elements have an accessible name](https://alfa.siteimprove.com/rules/sia-r11)

**Failure 1:**
- Message: The link does not have an accessible name
- HTML: `<a href="#" class="toggle-menu menu-left push-body jPushMenuBtn">...</a>`
- XPath: `/a[@class="toggle-menu menu-left push-body jPushMenuBtn"]`

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)

**Failure 1:**
- Message: Target has insufficient size
- HTML: `<a href="#" class="toggle-menu menu-left push-body jPushMenuBtn">...</a>`
- XPath: `/a[@class="toggle-menu menu-left push-body jPushMenuBtn"]`

**Failure 2:**
- Message: Target has insufficient size
- HTML: `<a href="https://www.governo.it">IT</a>`
- XPath: `/a`

**Failure 3:**
- Message: Target has insufficient size
- HTML: `<a href="/it/come-fare" title="" class="active-trail active">Come fare per</a>`
- XPath: `/a[@class="active-trail active"]`

#### Rule: [SIA-R53: Headings follow a logical hierarchy](https://alfa.siteimprove.com/rules/sia-r53)

**Failure 1:**
- Message: The heading skips one or more levels
- HTML: `<h3 class="contacts_footer">Contatti</h3>`
- XPath: `/h3[@class="contacts_footer"]`

#### Rule: [SIA-R57: Landmarks don't repeat the same content](https://alfa.siteimprove.com/rules/sia-r57)

**Failure 1:**
- Message: The text is not included in a landmark region

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 2.27:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R69: Text has sufficient contrast with its background](https://alfa.siteimprove.com/rules/sia-r69)

**Failure 1:**
- Message: The highest possible contrast of the text is 2.27:1 which is         below the required contrast of 4.5:1

#### Rule: [SIA-R72](https://alfa.siteimprove.com/rules/sia-r72)

**Failure 1:**
- Message: The text of the paragraph is uppercased
- HTML: `<p class="menu_under_burger">MENU</p>`
- XPath: `/p[@class="menu_under_burger"]`

#### Rule: [SIA-R73: Text spacing can be adjusted without loss of content](https://alfa.siteimprove.com/rules/sia-r73)

**Failure 1:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p>...</p>`
- XPath: `/p`

**Failure 2:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="menu_under_burger">MENU</p>`
- XPath: `/p[@class="menu_under_burger"]`

**Failure 3:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="nav_social clearfix">...</p>`
- XPath: `/p[@class="nav_social clearfix"]`

#### Rule: [SIA-R74](https://alfa.siteimprove.com/rules/sia-r74)

**Failure 1:**
- Message: The font size is specified using an absolute unit
- HTML: `<p>...</p>`
- XPath: `/p`

#### Rule: [SIA-R78: Headings of same level have text content between them](https://alfa.siteimprove.com/rules/sia-r78)

**Failure 1:**
- Message: There is no content between this heading and the next
- HTML: `<h3 class="contacts_footer">Contatti</h3>`
- XPath: `/h3[@class="contacts_footer"]`

#### Rule: [SIA-R83: Text can be resized to 200% without loss of content](https://alfa.siteimprove.com/rules/sia-r83)

**Failure 1:**
- Message: The text is clipped

#### Rule: [SIA-R84](https://alfa.siteimprove.com/rules/sia-r84)

**Failure 1:**
- Message: The scrollable element is not reachable through keyboard navigation
- HTML: `<nav class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left">...</nav>`
- XPath: `/nav[@class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left"]`

### https://governo.it/it/comitati-commissioni-e-commissari

#### Rule: [SIA-R11: Button elements have an accessible name](https://alfa.siteimprove.com/rules/sia-r11)

**Failure 1:**
- Message: The link does not have an accessible name
- HTML: `<a href="#" class="toggle-menu menu-left push-body jPushMenuBtn">...</a>`
- XPath: `/a[@class="toggle-menu menu-left push-body jPushMenuBtn"]`

**Failure 2:**
- Message: The link does not have an accessible name
- HTML: `<a href="https://presidenza.governo.it/AmministrazioneTrasparente/Organizzazione/CommissariStraordinari/DPR_20250113_Castelli.pdf"> </a>`
- XPath: `/a`

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)

**Failure 1:**
- Message: Target has insufficient size
- HTML: `<button type="button" class="agree-button eu-cookie-compliance-secondary-button">Si, acconsento</button>`
- XPath: `/button[@class="agree-button eu-cookie-compliance-secondary-button"]`

**Failure 2:**
- Message: Target has insufficient size
- HTML: `<button type="button" class="decline-button eu-cookie-compliance-default-button">No, non acconsento</button>`
- XPath: `/button[@class="decline-button eu-cookie-compliance-default-button"]`

**Failure 3:**
- Message: Target has insufficient size
- HTML: `<a href="#" class="toggle-menu menu-left push-body jPushMenuBtn">...</a>`
- XPath: `/a[@class="toggle-menu menu-left push-body jPushMenuBtn"]`

**Failure 4:**
- Message: Target has insufficient size
- HTML: `<a href="https://www.governo.it">...</a>`
- XPath: `/a`

#### Rule: [SIA-R113](https://alfa.siteimprove.com/rules/sia-r113)

**Failure 1:**
- Message: Target has insufficient size and spacing
- HTML: `<a href="https://presidenza.governo.it/AmministrazioneTrasparente/Organizzazione/CommissariStraordinari/DPCM%203%20febbraio%202025.pdf">4</a>`
- XPath: `/a`

#### Rule: [SIA-R53: Headings follow a logical hierarchy](https://alfa.siteimprove.com/rules/sia-r53)

**Failure 1:**
- Message: The heading skips one or more levels
- HTML: `<h3 class="contacts_footer">Contatti</h3>`
- XPath: `/h3[@class="contacts_footer"]`

#### Rule: [SIA-R57: Landmarks don't repeat the same content](https://alfa.siteimprove.com/rules/sia-r57)

**Failure 1:**
- Message: The text is not included in a landmark region

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 2.27:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R69: Text has sufficient contrast with its background](https://alfa.siteimprove.com/rules/sia-r69)

**Failure 1:**
- Message: The highest possible contrast of the text is 2.27:1 which is         below the required contrast of 4.5:1

#### Rule: [SIA-R72](https://alfa.siteimprove.com/rules/sia-r72)

**Failure 1:**
- Message: The text of the paragraph is uppercased
- HTML: `<p class="menu_under_burger">MENU</p>`
- XPath: `/p[@class="menu_under_burger"]`

#### Rule: [SIA-R73: Text spacing can be adjusted without loss of content](https://alfa.siteimprove.com/rules/sia-r73)

**Failure 1:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p>...</p>`
- XPath: `/p`

**Failure 2:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="menu_under_burger">MENU</p>`
- XPath: `/p[@class="menu_under_burger"]`

**Failure 3:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="nav_social clearfix">...</p>`
- XPath: `/p[@class="nav_social clearfix"]`

#### Rule: [SIA-R74](https://alfa.siteimprove.com/rules/sia-r74)

**Failure 1:**
- Message: The font size is specified using an absolute unit
- HTML: `<p>...</p>`
- XPath: `/p`

#### Rule: [SIA-R78: Headings of same level have text content between them](https://alfa.siteimprove.com/rules/sia-r78)

**Failure 1:**
- Message: There is no content between this heading and the next
- HTML: `<h3 class="contacts_footer">Contatti</h3>`
- XPath: `/h3[@class="contacts_footer"]`

#### Rule: [SIA-R83: Text can be resized to 200% without loss of content](https://alfa.siteimprove.com/rules/sia-r83)

**Failure 1:**
- Message: The text is clipped

#### Rule: [SIA-R84](https://alfa.siteimprove.com/rules/sia-r84)

**Failure 1:**
- Message: The scrollable element is not reachable through keyboard navigation
- HTML: `<nav class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left">...</nav>`
- XPath: `/nav[@class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left"]`

### https://governo.it/it/dichiarazioneaccessibilita

#### Rule: [SIA-R11: Button elements have an accessible name](https://alfa.siteimprove.com/rules/sia-r11)

**Failure 1:**
- Message: The link does not have an accessible name
- HTML: `<a href="#" class="toggle-menu menu-left push-body jPushMenuBtn">...</a>`
- XPath: `/a[@class="toggle-menu menu-left push-body jPushMenuBtn"]`

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)

**Failure 1:**
- Message: Target has insufficient size
- HTML: `<button type="button" class="agree-button eu-cookie-compliance-secondary-button">Si, acconsento</button>`
- XPath: `/button[@class="agree-button eu-cookie-compliance-secondary-button"]`

**Failure 2:**
- Message: Target has insufficient size
- HTML: `<button type="button" class="decline-button eu-cookie-compliance-default-button">No, non acconsento</button>`
- XPath: `/button[@class="decline-button eu-cookie-compliance-default-button"]`

**Failure 3:**
- Message: Target has insufficient size
- HTML: `<a href="https://www.governo.it">IT</a>`
- XPath: `/a`

**Failure 4:**
- Message: Target has insufficient size
- HTML: `<a href="/it/dichiarazioneaccessibilita" title="" class="active-trail active">Dichiarazione di accessibilità</a>`
- XPath: `/a[@class="active-trail active"]`

#### Rule: [SIA-R53: Headings follow a logical hierarchy](https://alfa.siteimprove.com/rules/sia-r53)

**Failure 1:**
- Message: The heading skips one or more levels
- HTML: `<h3 class="contacts_footer">Contatti</h3>`
- XPath: `/h3[@class="contacts_footer"]`

#### Rule: [SIA-R57: Landmarks don't repeat the same content](https://alfa.siteimprove.com/rules/sia-r57)

**Failure 1:**
- Message: The text is not included in a landmark region

#### Rule: [SIA-R62: Links are visually distinguishable from surrounding text](https://alfa.siteimprove.com/rules/sia-r62)

**Failure 1:**
- Message: The link is not distinguishable from the surrounding text
- HTML: `<a href="mailto:accessibile@governo.it">accessibile@governo.it</a>`
- XPath: `/a`

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 2.27:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R69: Text has sufficient contrast with its background](https://alfa.siteimprove.com/rules/sia-r69)

**Failure 1:**
- Message: The highest possible contrast of the text is 2.27:1 which is         below the required contrast of 4.5:1

#### Rule: [SIA-R72](https://alfa.siteimprove.com/rules/sia-r72)

**Failure 1:**
- Message: The text of the paragraph is uppercased
- HTML: `<p class="menu_under_burger">MENU</p>`
- XPath: `/p[@class="menu_under_burger"]`

#### Rule: [SIA-R73: Text spacing can be adjusted without loss of content](https://alfa.siteimprove.com/rules/sia-r73)

**Failure 1:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p>...</p>`
- XPath: `/p`

**Failure 2:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="menu_under_burger">MENU</p>`
- XPath: `/p[@class="menu_under_burger"]`

**Failure 3:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="nav_social clearfix">...</p>`
- XPath: `/p[@class="nav_social clearfix"]`

#### Rule: [SIA-R74](https://alfa.siteimprove.com/rules/sia-r74)

**Failure 1:**
- Message: The font size is specified using an absolute unit
- HTML: `<p>...</p>`
- XPath: `/p`

#### Rule: [SIA-R78: Headings of same level have text content between them](https://alfa.siteimprove.com/rules/sia-r78)

**Failure 1:**
- Message: There is no content between this heading and the next
- HTML: `<h3 class="contacts_footer">Contatti</h3>`
- XPath: `/h3[@class="contacts_footer"]`

#### Rule: [SIA-R83: Text can be resized to 200% without loss of content](https://alfa.siteimprove.com/rules/sia-r83)

**Failure 1:**
- Message: The text is clipped

#### Rule: [SIA-R84](https://alfa.siteimprove.com/rules/sia-r84)

**Failure 1:**
- Message: The scrollable element is not reachable through keyboard navigation
- HTML: `<nav class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left">...</nav>`
- XPath: `/nav[@class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left"]`

### https://governo.it/it/diretta-video

#### Rule: [SIA-R11: Button elements have an accessible name](https://alfa.siteimprove.com/rules/sia-r11)

**Failure 1:**
- Message: The link does not have an accessible name
- HTML: `<a href="#" class="toggle-menu menu-left push-body jPushMenuBtn">...</a>`
- XPath: `/a[@class="toggle-menu menu-left push-body jPushMenuBtn"]`

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)

**Failure 1:**
- Message: Target has insufficient size
- HTML: `<a href="#" class="toggle-menu menu-left push-body jPushMenuBtn">...</a>`
- XPath: `/a[@class="toggle-menu menu-left push-body jPushMenuBtn"]`

**Failure 2:**
- Message: Target has insufficient size
- HTML: `<a href="https://www.governo.it">IT</a>`
- XPath: `/a`

#### Rule: [SIA-R13](https://alfa.siteimprove.com/rules/sia-r13)

**Failure 1:**
- Message: The `<iframe>` does not have an accessible name
- HTML: `<iframe width="1232" height="693" src="https://www.youtube.com/embed/ZzzJjDyBB2M" frameborder="0" allowfullscreen="" />`
- XPath: `/iframe`

#### Rule: [SIA-R53: Headings follow a logical hierarchy](https://alfa.siteimprove.com/rules/sia-r53)

**Failure 1:**
- Message: The heading skips one or more levels
- HTML: `<h3>Gli altri video</h3>`
- XPath: `/h3`

**Failure 2:**
- Message: The heading skips one or more levels
- HTML: `<h3 class="contacts_footer">Contatti</h3>`
- XPath: `/h3[@class="contacts_footer"]`

#### Rule: [SIA-R57: Landmarks don't repeat the same content](https://alfa.siteimprove.com/rules/sia-r57)

**Failure 1:**
- Message: The text is not included in a landmark region

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 2.27:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R69: Text has sufficient contrast with its background](https://alfa.siteimprove.com/rules/sia-r69)

**Failure 1:**
- Message: The highest possible contrast of the text is 2.27:1 which is         below the required contrast of 4.5:1

#### Rule: [SIA-R72](https://alfa.siteimprove.com/rules/sia-r72)

**Failure 1:**
- Message: The text of the paragraph is uppercased
- HTML: `<p class="menu_under_burger">MENU</p>`
- XPath: `/p[@class="menu_under_burger"]`

#### Rule: [SIA-R73: Text spacing can be adjusted without loss of content](https://alfa.siteimprove.com/rules/sia-r73)

**Failure 1:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p>...</p>`
- XPath: `/p`

**Failure 2:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="menu_under_burger">MENU</p>`
- XPath: `/p[@class="menu_under_burger"]`

**Failure 3:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="nav_social clearfix">...</p>`
- XPath: `/p[@class="nav_social clearfix"]`

**Failure 4:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="h3 pull-right">...</p>`
- XPath: `/p[@class="h3 pull-right"]`

#### Rule: [SIA-R74](https://alfa.siteimprove.com/rules/sia-r74)

**Failure 1:**
- Message: The font size is specified using an absolute unit
- HTML: `<p>...</p>`
- XPath: `/p`

#### Rule: [SIA-R78: Headings of same level have text content between them](https://alfa.siteimprove.com/rules/sia-r78)

**Failure 1:**
- Message: There is no content between this heading and the next
- HTML: `<h3>Campagna di comunicazione istituzionale “Votare vu...</h3>`
- XPath: `/h3`

**Failure 2:**
- Message: There is no content between this heading and the next
- HTML: `<h3 class="contacts_footer">Contatti</h3>`
- XPath: `/h3[@class="contacts_footer"]`

#### Rule: [SIA-R83: Text can be resized to 200% without loss of content](https://alfa.siteimprove.com/rules/sia-r83)

**Failure 1:**
- Message: The text is clipped

#### Rule: [SIA-R84](https://alfa.siteimprove.com/rules/sia-r84)

**Failure 1:**
- Message: The scrollable element is not reachable through keyboard navigation
- HTML: `<nav class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left">...</nav>`
- XPath: `/nav[@class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left"]`

### https://governo.it/it/gallerie-del-presidente

#### Rule: [SIA-R11: Button elements have an accessible name](https://alfa.siteimprove.com/rules/sia-r11)

**Failure 1:**
- Message: The link does not have an accessible name
- HTML: `<a href="#" class="toggle-menu menu-left push-body jPushMenuBtn">...</a>`
- XPath: `/a[@class="toggle-menu menu-left push-body jPushMenuBtn"]`

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)

**Failure 1:**
- Message: Target has insufficient size
- HTML: `<button type="button" class="agree-button eu-cookie-compliance-secondary-button">Si, acconsento</button>`
- XPath: `/button[@class="agree-button eu-cookie-compliance-secondary-button"]`

**Failure 2:**
- Message: Target has insufficient size
- HTML: `<button type="button" class="decline-button eu-cookie-compliance-default-button">No, non acconsento</button>`
- XPath: `/button[@class="decline-button eu-cookie-compliance-default-button"]`

**Failure 3:**
- Message: Target has insufficient size
- HTML: `<a href="https://www.governo.it">IT</a>`
- XPath: `/a`

#### Rule: [SIA-R113](https://alfa.siteimprove.com/rules/sia-r113)

**Failure 1:**
- Message: Target has insufficient size and spacing
- HTML: `<a title="Vai a pagina 2" href="/it/gallerie-del-presidente?page=1">2</a>`
- XPath: `/a`

#### Rule: [SIA-R53: Headings follow a logical hierarchy](https://alfa.siteimprove.com/rules/sia-r53)

**Failure 1:**
- Message: The heading skips one or more levels
- HTML: `<h3 class="contacts_footer">Contatti</h3>`
- XPath: `/h3[@class="contacts_footer"]`

#### Rule: [SIA-R57: Landmarks don't repeat the same content](https://alfa.siteimprove.com/rules/sia-r57)

**Failure 1:**
- Message: The text is not included in a landmark region

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 2.27:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R69: Text has sufficient contrast with its background](https://alfa.siteimprove.com/rules/sia-r69)

**Failure 1:**
- Message: The highest possible contrast of the text is 2.27:1 which is         below the required contrast of 4.5:1

#### Rule: [SIA-R72](https://alfa.siteimprove.com/rules/sia-r72)

**Failure 1:**
- Message: The text of the paragraph is uppercased
- HTML: `<p class="menu_under_burger">MENU</p>`
- XPath: `/p[@class="menu_under_burger"]`

#### Rule: [SIA-R73: Text spacing can be adjusted without loss of content](https://alfa.siteimprove.com/rules/sia-r73)

**Failure 1:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p>...</p>`
- XPath: `/p`

**Failure 2:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="menu_under_burger">MENU</p>`
- XPath: `/p[@class="menu_under_burger"]`

**Failure 3:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="nav_social clearfix">...</p>`
- XPath: `/p[@class="nav_social clearfix"]`

**Failure 4:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="h6">Foto                    </p>`
- XPath: `/p[@class="h6"]`

#### Rule: [SIA-R74](https://alfa.siteimprove.com/rules/sia-r74)

**Failure 1:**
- Message: The font size is specified using an absolute unit
- HTML: `<p>...</p>`
- XPath: `/p`

#### Rule: [SIA-R78: Headings of same level have text content between them](https://alfa.siteimprove.com/rules/sia-r78)

**Failure 1:**
- Message: There is no content between this heading and the next
- HTML: `<h2 class="h4">Medio Oriente, il Presidente Meloni presiede una n...</h2>`
- XPath: `/h2[@class="h4"]`

**Failure 2:**
- Message: There is no content between this heading and the next
- HTML: `<h3 class="contacts_footer">Contatti</h3>`
- XPath: `/h3[@class="contacts_footer"]`

#### Rule: [SIA-R84](https://alfa.siteimprove.com/rules/sia-r84)

**Failure 1:**
- Message: The scrollable element is not reachable through keyboard navigation
- HTML: `<nav class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left">...</nav>`
- XPath: `/nav[@class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left"]`

### https://governo.it/it/palazzo-chigi-la-storia-le-immagini-e-il-restauro/palazzo-chigi-la-storia/2877

#### Rule: [SIA-R11: Button elements have an accessible name](https://alfa.siteimprove.com/rules/sia-r11)

**Failure 1:**
- Message: The link does not have an accessible name
- HTML: `<a href="#" class="toggle-menu menu-left push-body jPushMenuBtn">...</a>`
- XPath: `/a[@class="toggle-menu menu-left push-body jPushMenuBtn"]`

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)

**Failure 1:**
- Message: Target has insufficient size
- HTML: `<button type="button" class="agree-button eu-cookie-compliance-secondary-button">Si, acconsento</button>`
- XPath: `/button[@class="agree-button eu-cookie-compliance-secondary-button"]`

**Failure 2:**
- Message: Target has insufficient size
- HTML: `<button type="button" class="decline-button eu-cookie-compliance-default-button">No, non acconsento</button>`
- XPath: `/button[@class="decline-button eu-cookie-compliance-default-button"]`

**Failure 3:**
- Message: Target has insufficient size
- HTML: `<a href="#" class="toggle-menu menu-left push-body jPushMenuBtn">...</a>`
- XPath: `/a[@class="toggle-menu menu-left push-body jPushMenuBtn"]`

**Failure 4:**
- Message: Target has insufficient size
- HTML: `<a href="https://www.governo.it">IT</a>`
- XPath: `/a`

#### Rule: [SIA-R53: Headings follow a logical hierarchy](https://alfa.siteimprove.com/rules/sia-r53)

**Failure 1:**
- Message: The heading skips one or more levels
- HTML: `<h3 class="contacts_footer">Contatti</h3>`
- XPath: `/h3[@class="contacts_footer"]`

#### Rule: [SIA-R56: Landmarks with the same role are distinguishable](https://alfa.siteimprove.com/rules/sia-r56)

**Failure 1:**
- Message: Some `navigation` have the same name.

#### Rule: [SIA-R57: Landmarks don't repeat the same content](https://alfa.siteimprove.com/rules/sia-r57)

**Failure 1:**
- Message: The text is not included in a landmark region

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 2.27:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R69: Text has sufficient contrast with its background](https://alfa.siteimprove.com/rules/sia-r69)

**Failure 1:**
- Message: The highest possible contrast of the text is 2.27:1 which is         below the required contrast of 4.5:1

#### Rule: [SIA-R72](https://alfa.siteimprove.com/rules/sia-r72)

**Failure 1:**
- Message: The text of the paragraph is uppercased
- HTML: `<p class="menu_under_burger">MENU</p>`
- XPath: `/p[@class="menu_under_burger"]`

#### Rule: [SIA-R73: Text spacing can be adjusted without loss of content](https://alfa.siteimprove.com/rules/sia-r73)

**Failure 1:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p>...</p>`
- XPath: `/p`

**Failure 2:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="menu_under_burger">MENU</p>`
- XPath: `/p[@class="menu_under_burger"]`

**Failure 3:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="nav_social clearfix">...</p>`
- XPath: `/p[@class="nav_social clearfix"]`

#### Rule: [SIA-R74](https://alfa.siteimprove.com/rules/sia-r74)

**Failure 1:**
- Message: The font size is specified using an absolute unit
- HTML: `<p>...</p>`
- XPath: `/p`

#### Rule: [SIA-R78: Headings of same level have text content between them](https://alfa.siteimprove.com/rules/sia-r78)

**Failure 1:**
- Message: There is no content between this heading and the next
- HTML: `<h3 class="contacts_footer">Contatti</h3>`
- XPath: `/h3[@class="contacts_footer"]`

#### Rule: [SIA-R83: Text can be resized to 200% without loss of content](https://alfa.siteimprove.com/rules/sia-r83)

**Failure 1:**
- Message: The text is clipped

#### Rule: [SIA-R84](https://alfa.siteimprove.com/rules/sia-r84)

**Failure 1:**
- Message: The scrollable element is not reachable through keyboard navigation
- HTML: `<nav class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left">...</nav>`
- XPath: `/nav[@class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left"]`

### https://governo.it/it/articolo/il-messaggio-del-presidente-meloni-all-evento-ia-e-lavoro-governare-la-trasformazione

#### Rule: [SIA-R11: Button elements have an accessible name](https://alfa.siteimprove.com/rules/sia-r11)

**Failure 1:**
- Message: The link does not have an accessible name
- HTML: `<a href="#" class="toggle-menu menu-left push-body jPushMenuBtn">...</a>`
- XPath: `/a[@class="toggle-menu menu-left push-body jPushMenuBtn"]`

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)

**Failure 1:**
- Message: Target has insufficient size
- HTML: `<button type="button" class="agree-button eu-cookie-compliance-secondary-button">Si, acconsento</button>`
- XPath: `/button[@class="agree-button eu-cookie-compliance-secondary-button"]`

**Failure 2:**
- Message: Target has insufficient size
- HTML: `<button type="button" class="decline-button eu-cookie-compliance-default-button">No, non acconsento</button>`
- XPath: `/button[@class="decline-button eu-cookie-compliance-default-button"]`

**Failure 3:**
- Message: Target has insufficient size
- HTML: `<a href="#" class="toggle-menu menu-left push-body jPushMenuBtn">...</a>`
- XPath: `/a[@class="toggle-menu menu-left push-body jPushMenuBtn"]`

**Failure 4:**
- Message: Target has insufficient size
- HTML: `<a href="https://www.governo.it">...</a>`
- XPath: `/a`

#### Rule: [SIA-R2: HTML elements have a valid lang attribute](https://alfa.siteimprove.com/rules/sia-r2)

**Failure 1:**
- Message: The image does not have an accessible name
- HTML: `<img class="width_100" src="https://www.governo.it/sites/governo.it/files/PresidenteMeloni%20%283%29.jpg" />`
- XPath: `/img[@class="width_100"]`

#### Rule: [SIA-R53: Headings follow a logical hierarchy](https://alfa.siteimprove.com/rules/sia-r53)

**Failure 1:**
- Message: The heading skips one or more levels
- HTML: `<h3 class="contacts_footer">Contatti</h3>`
- XPath: `/h3[@class="contacts_footer"]`

#### Rule: [SIA-R57: Landmarks don't repeat the same content](https://alfa.siteimprove.com/rules/sia-r57)

**Failure 1:**
- Message: The text is not included in a landmark region

#### Rule: [SIA-R61](https://alfa.siteimprove.com/rules/sia-r61)

**Failure 1:**
- Message: The document does not start with a level 1 heading

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 2.27:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R69: Text has sufficient contrast with its background](https://alfa.siteimprove.com/rules/sia-r69)

**Failure 1:**
- Message: The highest possible contrast of the text is 2.27:1 which is         below the required contrast of 4.5:1

#### Rule: [SIA-R72](https://alfa.siteimprove.com/rules/sia-r72)

**Failure 1:**
- Message: The text of the paragraph is uppercased
- HTML: `<p class="menu_under_burger">MENU</p>`
- XPath: `/p[@class="menu_under_burger"]`

#### Rule: [SIA-R73: Text spacing can be adjusted without loss of content](https://alfa.siteimprove.com/rules/sia-r73)

**Failure 1:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p>...</p>`
- XPath: `/p`

**Failure 2:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="menu_under_burger">MENU</p>`
- XPath: `/p[@class="menu_under_burger"]`

**Failure 3:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="nav_social clearfix">...</p>`
- XPath: `/p[@class="nav_social clearfix"]`

**Failure 4:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="h6">Venerdì, 27 Febbraio 2026</p>`
- XPath: `/p[@class="h6"]`

#### Rule: [SIA-R74](https://alfa.siteimprove.com/rules/sia-r74)

**Failure 1:**
- Message: The font size is specified using an absolute unit
- HTML: `<p>...</p>`
- XPath: `/p`

#### Rule: [SIA-R78: Headings of same level have text content between them](https://alfa.siteimprove.com/rules/sia-r78)

**Failure 1:**
- Message: There is no content between this heading and the next
- HTML: `<h3 class="contacts_footer">Contatti</h3>`
- XPath: `/h3[@class="contacts_footer"]`

#### Rule: [SIA-R83: Text can be resized to 200% without loss of content](https://alfa.siteimprove.com/rules/sia-r83)

**Failure 1:**
- Message: The text is clipped

#### Rule: [SIA-R84](https://alfa.siteimprove.com/rules/sia-r84)

**Failure 1:**
- Message: The scrollable element is not reachable through keyboard navigation
- HTML: `<nav class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left">...</nav>`
- XPath: `/nav[@class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left"]`

### https://governo.it/it/gallerie

#### Rule: [SIA-R11: Button elements have an accessible name](https://alfa.siteimprove.com/rules/sia-r11)

**Failure 1:**
- Message: The link does not have an accessible name
- HTML: `<a href="#" class="toggle-menu menu-left push-body jPushMenuBtn">...</a>`
- XPath: `/a[@class="toggle-menu menu-left push-body jPushMenuBtn"]`

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)

**Failure 1:**
- Message: Target has insufficient size
- HTML: `<button type="button" class="agree-button eu-cookie-compliance-secondary-button">Si, acconsento</button>`
- XPath: `/button[@class="agree-button eu-cookie-compliance-secondary-button"]`

**Failure 2:**
- Message: Target has insufficient size
- HTML: `<button type="button" class="decline-button eu-cookie-compliance-default-button">No, non acconsento</button>`
- XPath: `/button[@class="decline-button eu-cookie-compliance-default-button"]`

**Failure 3:**
- Message: Target has insufficient size
- HTML: `<a href="https://www.governo.it">IT</a>`
- XPath: `/a`

#### Rule: [SIA-R113](https://alfa.siteimprove.com/rules/sia-r113)

**Failure 1:**
- Message: Target has insufficient size and spacing
- HTML: `<a title="Vai a pagina 2" href="/it/gallerie?page=1">2</a>`
- XPath: `/a`

#### Rule: [SIA-R53: Headings follow a logical hierarchy](https://alfa.siteimprove.com/rules/sia-r53)

**Failure 1:**
- Message: The heading skips one or more levels
- HTML: `<h3 class="contacts_footer">Contatti</h3>`
- XPath: `/h3[@class="contacts_footer"]`

#### Rule: [SIA-R57: Landmarks don't repeat the same content](https://alfa.siteimprove.com/rules/sia-r57)

**Failure 1:**
- Message: The text is not included in a landmark region

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 2.27:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R69: Text has sufficient contrast with its background](https://alfa.siteimprove.com/rules/sia-r69)

**Failure 1:**
- Message: The highest possible contrast of the text is 2.27:1 which is         below the required contrast of 4.5:1

#### Rule: [SIA-R72](https://alfa.siteimprove.com/rules/sia-r72)

**Failure 1:**
- Message: The text of the paragraph is uppercased
- HTML: `<p class="menu_under_burger">MENU</p>`
- XPath: `/p[@class="menu_under_burger"]`

#### Rule: [SIA-R73: Text spacing can be adjusted without loss of content](https://alfa.siteimprove.com/rules/sia-r73)

**Failure 1:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p>...</p>`
- XPath: `/p`

**Failure 2:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="menu_under_burger">MENU</p>`
- XPath: `/p[@class="menu_under_burger"]`

**Failure 3:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="nav_social clearfix">...</p>`
- XPath: `/p[@class="nav_social clearfix"]`

**Failure 4:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="h6">Foto                    </p>`
- XPath: `/p[@class="h6"]`

#### Rule: [SIA-R74](https://alfa.siteimprove.com/rules/sia-r74)

**Failure 1:**
- Message: The font size is specified using an absolute unit
- HTML: `<p>...</p>`
- XPath: `/p`

#### Rule: [SIA-R78: Headings of same level have text content between them](https://alfa.siteimprove.com/rules/sia-r78)

**Failure 1:**
- Message: There is no content between this heading and the next
- HTML: `<h2 class="h4">Relazione annuale sulla politica dell’informazione...</h2>`
- XPath: `/h2[@class="h4"]`

**Failure 2:**
- Message: There is no content between this heading and the next
- HTML: `<h3 class="contacts_footer">Contatti</h3>`
- XPath: `/h3[@class="contacts_footer"]`

#### Rule: [SIA-R84](https://alfa.siteimprove.com/rules/sia-r84)

**Failure 1:**
- Message: The scrollable element is not reachable through keyboard navigation
- HTML: `<nav class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left">...</nav>`
- XPath: `/nav[@class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left"]`

### https://governo.it/it/articolo/la-facciata-di-palazzo-chigi-si-illumina-il-quarto-anniversario-dellinvasione-dellucraina

#### Rule: [SIA-R11: Button elements have an accessible name](https://alfa.siteimprove.com/rules/sia-r11)

**Failure 1:**
- Message: The link does not have an accessible name
- HTML: `<a href="#" class="toggle-menu menu-left push-body jPushMenuBtn">...</a>`
- XPath: `/a[@class="toggle-menu menu-left push-body jPushMenuBtn"]`

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)

**Failure 1:**
- Message: Target has insufficient size
- HTML: `<a href="#" class="toggle-menu menu-left push-body jPushMenuBtn">...</a>`
- XPath: `/a[@class="toggle-menu menu-left push-body jPushMenuBtn"]`

**Failure 2:**
- Message: Target has insufficient size
- HTML: `<a href="https://www.governo.it">...</a>`
- XPath: `/a`

#### Rule: [SIA-R13](https://alfa.siteimprove.com/rules/sia-r13)

**Failure 1:**
- Message: The `<iframe>` does not have an accessible name
- HTML: `<iframe frameborder="0" src="https://www.youtube-nocookie.com/embed/uRX9orLmugk? width%3D640%26amp%3Bheight%3D360%26amp%3Bautoplay%3D0%26amp%3Bvq%3Dlarge%26amp%3Brel%3D0%26amp%3Bcontrols%3D1%26amp%3Bautohide%3D2%26amp%3Bshowinfo%3D1%26amp%3Bmodestbranding%3D0%26amp%3Btheme%3Ddark%26amp%3Biv_load_policy%3D1%26amp%3Bwmode%3Dopaque" id="fitvid471238" />`
- XPath: `/iframe[@id="fitvid471238"]`

#### Rule: [SIA-R53: Headings follow a logical hierarchy](https://alfa.siteimprove.com/rules/sia-r53)

**Failure 1:**
- Message: The heading skips one or more levels
- HTML: `<h3 class="contacts_footer">Contatti</h3>`
- XPath: `/h3[@class="contacts_footer"]`

#### Rule: [SIA-R57: Landmarks don't repeat the same content](https://alfa.siteimprove.com/rules/sia-r57)

**Failure 1:**
- Message: The text is not included in a landmark region

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 2.27:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R69: Text has sufficient contrast with its background](https://alfa.siteimprove.com/rules/sia-r69)

**Failure 1:**
- Message: The highest possible contrast of the text is 2.27:1 which is         below the required contrast of 4.5:1

#### Rule: [SIA-R72](https://alfa.siteimprove.com/rules/sia-r72)

**Failure 1:**
- Message: The text of the paragraph is uppercased
- HTML: `<p class="menu_under_burger">MENU</p>`
- XPath: `/p[@class="menu_under_burger"]`

#### Rule: [SIA-R73: Text spacing can be adjusted without loss of content](https://alfa.siteimprove.com/rules/sia-r73)

**Failure 1:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p>...</p>`
- XPath: `/p`

**Failure 2:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="menu_under_burger">MENU</p>`
- XPath: `/p[@class="menu_under_burger"]`

**Failure 3:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="nav_social clearfix">...</p>`
- XPath: `/p[@class="nav_social clearfix"]`

**Failure 4:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="h5 dataright">24 Febbraio 2026</p>`
- XPath: `/p[@class="h5 dataright"]`

#### Rule: [SIA-R74](https://alfa.siteimprove.com/rules/sia-r74)

**Failure 1:**
- Message: The font size is specified using an absolute unit
- HTML: `<p>...</p>`
- XPath: `/p`

#### Rule: [SIA-R78: Headings of same level have text content between them](https://alfa.siteimprove.com/rules/sia-r78)

**Failure 1:**
- Message: There is no content between this heading and the next
- HTML: `<h3 class="contacts_footer">Contatti</h3>`
- XPath: `/h3[@class="contacts_footer"]`

#### Rule: [SIA-R83: Text can be resized to 200% without loss of content](https://alfa.siteimprove.com/rules/sia-r83)

**Failure 1:**
- Message: The text is clipped

#### Rule: [SIA-R84](https://alfa.siteimprove.com/rules/sia-r84)

**Failure 1:**
- Message: The scrollable element is not reachable through keyboard navigation
- HTML: `<nav class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left">...</nav>`
- XPath: `/nav[@class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left"]`

### https://governo.it/it/pubblicita-legale

#### Rule: [SIA-R11: Button elements have an accessible name](https://alfa.siteimprove.com/rules/sia-r11)

**Failure 1:**
- Message: The link does not have an accessible name
- HTML: `<a href="#" class="toggle-menu menu-left push-body jPushMenuBtn">...</a>`
- XPath: `/a[@class="toggle-menu menu-left push-body jPushMenuBtn"]`

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)

**Failure 1:**
- Message: Target has insufficient size
- HTML: `<button type="button" class="agree-button eu-cookie-compliance-secondary-button">Si, acconsento</button>`
- XPath: `/button[@class="agree-button eu-cookie-compliance-secondary-button"]`

**Failure 2:**
- Message: Target has insufficient size
- HTML: `<button type="button" class="decline-button eu-cookie-compliance-default-button">No, non acconsento</button>`
- XPath: `/button[@class="decline-button eu-cookie-compliance-default-button"]`

**Failure 3:**
- Message: Target has insufficient size
- HTML: `<a href="#" class="toggle-menu menu-left push-body jPushMenuBtn">...</a>`
- XPath: `/a[@class="toggle-menu menu-left push-body jPushMenuBtn"]`

**Failure 4:**
- Message: Target has insufficient size
- HTML: `<a href="https://www.governo.it">...</a>`
- XPath: `/a`

#### Rule: [SIA-R113](https://alfa.siteimprove.com/rules/sia-r113)

**Failure 1:**
- Message: Target has insufficient size and spacing
- HTML: `<a title="Vai a pagina 2" href="/it/pubblicita-legale?page=1">2</a>`
- XPath: `/a`

#### Rule: [SIA-R53: Headings follow a logical hierarchy](https://alfa.siteimprove.com/rules/sia-r53)

**Failure 1:**
- Message: The heading skips one or more levels
- HTML: `<h3 class="contacts_footer">Contatti</h3>`
- XPath: `/h3[@class="contacts_footer"]`

#### Rule: [SIA-R57: Landmarks don't repeat the same content](https://alfa.siteimprove.com/rules/sia-r57)

**Failure 1:**
- Message: The text is not included in a landmark region

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 2.27:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R69: Text has sufficient contrast with its background](https://alfa.siteimprove.com/rules/sia-r69)

**Failure 1:**
- Message: The highest possible contrast of the text is 2.27:1 which is         below the required contrast of 4.5:1

#### Rule: [SIA-R72](https://alfa.siteimprove.com/rules/sia-r72)

**Failure 1:**
- Message: The text of the paragraph is uppercased
- HTML: `<p class="menu_under_burger">MENU</p>`
- XPath: `/p[@class="menu_under_burger"]`

#### Rule: [SIA-R73: Text spacing can be adjusted without loss of content](https://alfa.siteimprove.com/rules/sia-r73)

**Failure 1:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p>...</p>`
- XPath: `/p`

**Failure 2:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="menu_under_burger">MENU</p>`
- XPath: `/p[@class="menu_under_burger"]`

**Failure 3:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="nav_social clearfix">...</p>`
- XPath: `/p[@class="nav_social clearfix"]`

#### Rule: [SIA-R74](https://alfa.siteimprove.com/rules/sia-r74)

**Failure 1:**
- Message: The font size is specified using an absolute unit
- HTML: `<p>...</p>`
- XPath: `/p`

#### Rule: [SIA-R78: Headings of same level have text content between them](https://alfa.siteimprove.com/rules/sia-r78)

**Failure 1:**
- Message: There is no content between this heading and the next
- HTML: `<h3 class="contacts_footer">Contatti</h3>`
- XPath: `/h3[@class="contacts_footer"]`

#### Rule: [SIA-R84](https://alfa.siteimprove.com/rules/sia-r84)

**Failure 1:**
- Message: The scrollable element is not reachable through keyboard navigation
- HTML: `<nav class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left">...</nav>`
- XPath: `/nav[@class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left"]`

### https://governo.it/it/media/campagna-di-comunicazione-istituzionale-il-treno-del-ricordo-2026/31082

#### Rule: [SIA-R11: Button elements have an accessible name](https://alfa.siteimprove.com/rules/sia-r11)

**Failure 1:**
- Message: The link does not have an accessible name
- HTML: `<a href="#" class="toggle-menu menu-left push-body jPushMenuBtn">...</a>`
- XPath: `/a[@class="toggle-menu menu-left push-body jPushMenuBtn"]`

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)

**Failure 1:**
- Message: Target has insufficient size
- HTML: `<button type="button" class="agree-button eu-cookie-compliance-secondary-button">Si, acconsento</button>`
- XPath: `/button[@class="agree-button eu-cookie-compliance-secondary-button"]`

**Failure 2:**
- Message: Target has insufficient size
- HTML: `<button type="button" class="decline-button eu-cookie-compliance-default-button">No, non acconsento</button>`
- XPath: `/button[@class="decline-button eu-cookie-compliance-default-button"]`

**Failure 3:**
- Message: Target has insufficient size
- HTML: `<a href="#" class="toggle-menu menu-left push-body jPushMenuBtn">...</a>`
- XPath: `/a[@class="toggle-menu menu-left push-body jPushMenuBtn"]`

**Failure 4:**
- Message: Target has insufficient size
- HTML: `<a href="https://www.governo.it">IT</a>`
- XPath: `/a`

#### Rule: [SIA-R13](https://alfa.siteimprove.com/rules/sia-r13)

**Failure 1:**
- Message: The `<iframe>` does not have an accessible name
- HTML: `<iframe class="" width="640" height="360" src="//www.youtube-nocookie.com/embed/PXnHCjDifgU?width%3D640%26amp%3Bheight%3D360%26amp%3Btheme%3Ddark%26amp%3Bautoplay%3D0%26amp%3Bvq%3Dlarge%26amp%3Brel%3D0%26amp%3Bshowinfo%3D1%26amp%3Bmodestbranding%3D0%26amp%3Biv_load_policy%3D1%26amp%3Bcontrols%3D1%26amp%3Bautohide%3D2%26amp%3Bwmode%3Dopaque" frameborder="0" allowfullscreen="" />`
- XPath: `/iframe`

#### Rule: [SIA-R53: Headings follow a logical hierarchy](https://alfa.siteimprove.com/rules/sia-r53)

**Failure 1:**
- Message: The heading skips one or more levels
- HTML: `<h3 class="contacts_footer">Contatti</h3>`
- XPath: `/h3[@class="contacts_footer"]`

#### Rule: [SIA-R57: Landmarks don't repeat the same content](https://alfa.siteimprove.com/rules/sia-r57)

**Failure 1:**
- Message: The text is not included in a landmark region

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 2.27:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R69: Text has sufficient contrast with its background](https://alfa.siteimprove.com/rules/sia-r69)

**Failure 1:**
- Message: The highest possible contrast of the text is 2.27:1 which is         below the required contrast of 4.5:1

#### Rule: [SIA-R72](https://alfa.siteimprove.com/rules/sia-r72)

**Failure 1:**
- Message: The text of the paragraph is uppercased
- HTML: `<p class="menu_under_burger">MENU</p>`
- XPath: `/p[@class="menu_under_burger"]`

#### Rule: [SIA-R73: Text spacing can be adjusted without loss of content](https://alfa.siteimprove.com/rules/sia-r73)

**Failure 1:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p>...</p>`
- XPath: `/p`

**Failure 2:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="menu_under_burger">MENU</p>`
- XPath: `/p[@class="menu_under_burger"]`

**Failure 3:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="nav_social clearfix">...</p>`
- XPath: `/p[@class="nav_social clearfix"]`

#### Rule: [SIA-R74](https://alfa.siteimprove.com/rules/sia-r74)

**Failure 1:**
- Message: The font size is specified using an absolute unit
- HTML: `<p>...</p>`
- XPath: `/p`

#### Rule: [SIA-R78: Headings of same level have text content between them](https://alfa.siteimprove.com/rules/sia-r78)

**Failure 1:**
- Message: There is no content between this heading and the next
- HTML: `<h3 class="contacts_footer">Contatti</h3>`
- XPath: `/h3[@class="contacts_footer"]`

#### Rule: [SIA-R83: Text can be resized to 200% without loss of content](https://alfa.siteimprove.com/rules/sia-r83)

**Failure 1:**
- Message: The text is clipped

#### Rule: [SIA-R84](https://alfa.siteimprove.com/rules/sia-r84)

**Failure 1:**
- Message: The scrollable element is not reachable through keyboard navigation
- HTML: `<nav class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left">...</nav>`
- XPath: `/nav[@class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left"]`

### https://governo.it/it/media/la-facciata-di-palazzo-chigi-si-illumina-il-quarto-anniversario-dellinvasione-dellucraina-0

#### Rule: [SIA-R11: Button elements have an accessible name](https://alfa.siteimprove.com/rules/sia-r11)

**Failure 1:**
- Message: The link does not have an accessible name
- HTML: `<a href="#" class="toggle-menu menu-left push-body jPushMenuBtn">...</a>`
- XPath: `/a[@class="toggle-menu menu-left push-body jPushMenuBtn"]`

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)

**Failure 1:**
- Message: Target has insufficient size
- HTML: `<button type="button" class="agree-button eu-cookie-compliance-secondary-button">Si, acconsento</button>`
- XPath: `/button[@class="agree-button eu-cookie-compliance-secondary-button"]`

**Failure 2:**
- Message: Target has insufficient size
- HTML: `<button type="button" class="decline-button eu-cookie-compliance-default-button">No, non acconsento</button>`
- XPath: `/button[@class="decline-button eu-cookie-compliance-default-button"]`

**Failure 3:**
- Message: Target has insufficient size
- HTML: `<a href="#" class="toggle-menu menu-left push-body jPushMenuBtn">...</a>`
- XPath: `/a[@class="toggle-menu menu-left push-body jPushMenuBtn"]`

**Failure 4:**
- Message: Target has insufficient size
- HTML: `<a href="https://www.governo.it">...</a>`
- XPath: `/a`

#### Rule: [SIA-R13](https://alfa.siteimprove.com/rules/sia-r13)

**Failure 1:**
- Message: The `<iframe>` does not have an accessible name
- HTML: `<iframe class="" width="640" height="360" src="//www.youtube-nocookie.com/embed/uRX9orLmugk?width%3D640%26amp%3Bheight%3D360%26amp%3Btheme%3Ddark%26amp%3Bautoplay%3D0%26amp%3Bvq%3Dlarge%26amp%3Brel%3D0%26amp%3Bshowinfo%3D1%26amp%3Bmodestbranding%3D0%26amp%3Biv_load_policy%3D1%26amp%3Bcontrols%3D1%26amp%3Bautohide%3D2%26amp%3Bwmode%3Dopaque" frameborder="0" allowfullscreen="" />`
- XPath: `/iframe`

#### Rule: [SIA-R53: Headings follow a logical hierarchy](https://alfa.siteimprove.com/rules/sia-r53)

**Failure 1:**
- Message: The heading skips one or more levels
- HTML: `<h3 class="contacts_footer">Contatti</h3>`
- XPath: `/h3[@class="contacts_footer"]`

#### Rule: [SIA-R57: Landmarks don't repeat the same content](https://alfa.siteimprove.com/rules/sia-r57)

**Failure 1:**
- Message: The text is not included in a landmark region

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 2.27:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R69: Text has sufficient contrast with its background](https://alfa.siteimprove.com/rules/sia-r69)

**Failure 1:**
- Message: The highest possible contrast of the text is 2.27:1 which is         below the required contrast of 4.5:1

#### Rule: [SIA-R72](https://alfa.siteimprove.com/rules/sia-r72)

**Failure 1:**
- Message: The text of the paragraph is uppercased
- HTML: `<p class="menu_under_burger">MENU</p>`
- XPath: `/p[@class="menu_under_burger"]`

#### Rule: [SIA-R73: Text spacing can be adjusted without loss of content](https://alfa.siteimprove.com/rules/sia-r73)

**Failure 1:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p>...</p>`
- XPath: `/p`

**Failure 2:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="menu_under_burger">MENU</p>`
- XPath: `/p[@class="menu_under_burger"]`

**Failure 3:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="nav_social clearfix">...</p>`
- XPath: `/p[@class="nav_social clearfix"]`

#### Rule: [SIA-R74](https://alfa.siteimprove.com/rules/sia-r74)

**Failure 1:**
- Message: The font size is specified using an absolute unit
- HTML: `<p>...</p>`
- XPath: `/p`

#### Rule: [SIA-R78: Headings of same level have text content between them](https://alfa.siteimprove.com/rules/sia-r78)

**Failure 1:**
- Message: There is no content between this heading and the next
- HTML: `<h3 class="contacts_footer">Contatti</h3>`
- XPath: `/h3[@class="contacts_footer"]`

#### Rule: [SIA-R83: Text can be resized to 200% without loss of content](https://alfa.siteimprove.com/rules/sia-r83)

**Failure 1:**
- Message: The text is clipped

#### Rule: [SIA-R84](https://alfa.siteimprove.com/rules/sia-r84)

**Failure 1:**
- Message: The scrollable element is not reachable through keyboard navigation
- HTML: `<nav class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left">...</nav>`
- XPath: `/nav[@class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left"]`

### https://governo.it/it/provvedimenti

#### Rule: [SIA-R11: Button elements have an accessible name](https://alfa.siteimprove.com/rules/sia-r11)

**Failure 1:**
- Message: The link does not have an accessible name
- HTML: `<a href="#" class="toggle-menu menu-left push-body jPushMenuBtn">...</a>`
- XPath: `/a[@class="toggle-menu menu-left push-body jPushMenuBtn"]`

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)

**Failure 1:**
- Message: Target has insufficient size
- HTML: `<button type="button" class="agree-button eu-cookie-compliance-secondary-button">Si, acconsento</button>`
- XPath: `/button[@class="agree-button eu-cookie-compliance-secondary-button"]`

**Failure 2:**
- Message: Target has insufficient size
- HTML: `<button type="button" class="decline-button eu-cookie-compliance-default-button">No, non acconsento</button>`
- XPath: `/button[@class="decline-button eu-cookie-compliance-default-button"]`

**Failure 3:**
- Message: Target has insufficient size
- HTML: `<a href="#" class="toggle-menu menu-left push-body jPushMenuBtn">...</a>`
- XPath: `/a[@class="toggle-menu menu-left push-body jPushMenuBtn"]`

**Failure 4:**
- Message: Target has insufficient size
- HTML: `<a href="https://www.governo.it">...</a>`
- XPath: `/a`

#### Rule: [SIA-R113](https://alfa.siteimprove.com/rules/sia-r113)

**Failure 1:**
- Message: Target has insufficient size and spacing
- HTML: `<a title="Vai a pagina 2" href="/it/provvedimenti?page=1">2</a>`
- XPath: `/a`

#### Rule: [SIA-R53: Headings follow a logical hierarchy](https://alfa.siteimprove.com/rules/sia-r53)

**Failure 1:**
- Message: The heading skips one or more levels
- HTML: `<h3 class="h4">DECRETO LEGGE: Disposizioni urgenti per la proroga...</h3>`
- XPath: `/h3[@class="h4"]`

**Failure 2:**
- Message: The heading skips one or more levels
- HTML: `<h3 class="contacts_footer">Contatti</h3>`
- XPath: `/h3[@class="contacts_footer"]`

#### Rule: [SIA-R57: Landmarks don't repeat the same content](https://alfa.siteimprove.com/rules/sia-r57)

**Failure 1:**
- Message: The text is not included in a landmark region

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 2.27:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R69: Text has sufficient contrast with its background](https://alfa.siteimprove.com/rules/sia-r69)

**Failure 1:**
- Message: The highest possible contrast of the text is 2.27:1 which is         below the required contrast of 4.5:1

#### Rule: [SIA-R72](https://alfa.siteimprove.com/rules/sia-r72)

**Failure 1:**
- Message: The text of the paragraph is uppercased
- HTML: `<p class="menu_under_burger">MENU</p>`
- XPath: `/p[@class="menu_under_burger"]`

#### Rule: [SIA-R73: Text spacing can be adjusted without loss of content](https://alfa.siteimprove.com/rules/sia-r73)

**Failure 1:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p>...</p>`
- XPath: `/p`

**Failure 2:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="menu_under_burger">MENU</p>`
- XPath: `/p[@class="menu_under_burger"]`

**Failure 3:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="nav_social clearfix">...</p>`
- XPath: `/p[@class="nav_social clearfix"]`

**Failure 4:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="h4 text-center" style="word-wrap: break-word; margin-left: 30%; padding-top: 1.5%;">...</p>`
- XPath: `/p[@class="h4 text-center"]`

**Failure 5:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="h5">Data Consiglio dei Ministri: 29 Dicembre 2025</p>`
- XPath: `/p[@class="h5"]`

#### Rule: [SIA-R74](https://alfa.siteimprove.com/rules/sia-r74)

**Failure 1:**
- Message: The font size is specified using an absolute unit
- HTML: `<p>...</p>`
- XPath: `/p`

#### Rule: [SIA-R78: Headings of same level have text content between them](https://alfa.siteimprove.com/rules/sia-r78)

**Failure 1:**
- Message: There is no content between this heading and the next
- HTML: `<h3 class="h4">DECRETO LEGISLATIVO: Disposizioni integrative e co...</h3>`
- XPath: `/h3[@class="h4"]`

**Failure 2:**
- Message: There is no content between this heading and the next
- HTML: `<h3 class="contacts_footer">Contatti</h3>`
- XPath: `/h3[@class="contacts_footer"]`

#### Rule: [SIA-R84](https://alfa.siteimprove.com/rules/sia-r84)

**Failure 1:**
- Message: The scrollable element is not reachable through keyboard navigation
- HTML: `<nav class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left">...</nav>`
- XPath: `/nav[@class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left"]`

### https://governo.it/it/tipologie-contenuto/notizie

#### Rule: [SIA-R11: Button elements have an accessible name](https://alfa.siteimprove.com/rules/sia-r11)

**Failure 1:**
- Message: The link does not have an accessible name
- HTML: `<a href="#" class="toggle-menu menu-left push-body jPushMenuBtn">...</a>`
- XPath: `/a[@class="toggle-menu menu-left push-body jPushMenuBtn"]`

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)

**Failure 1:**
- Message: Target has insufficient size
- HTML: `<button type="button" class="agree-button eu-cookie-compliance-secondary-button">Si, acconsento</button>`
- XPath: `/button[@class="agree-button eu-cookie-compliance-secondary-button"]`

**Failure 2:**
- Message: Target has insufficient size
- HTML: `<button type="button" class="decline-button eu-cookie-compliance-default-button">No, non acconsento</button>`
- XPath: `/button[@class="decline-button eu-cookie-compliance-default-button"]`

**Failure 3:**
- Message: Target has insufficient size
- HTML: `<a href="#" class="toggle-menu menu-left push-body jPushMenuBtn">...</a>`
- XPath: `/a[@class="toggle-menu menu-left push-body jPushMenuBtn"]`

**Failure 4:**
- Message: Target has insufficient size
- HTML: `<a href="https://www.governo.it">...</a>`
- XPath: `/a`

#### Rule: [SIA-R113](https://alfa.siteimprove.com/rules/sia-r113)

**Failure 1:**
- Message: Target has insufficient size and spacing
- HTML: `<a title="Vai a pagina 2" href="/it/tipologie-contenuto/notizie?page=1">2</a>`
- XPath: `/a`

#### Rule: [SIA-R53: Headings follow a logical hierarchy](https://alfa.siteimprove.com/rules/sia-r53)

**Failure 1:**
- Message: The heading skips one or more levels
- HTML: `<h3 class="h4">...</h3>`
- XPath: `/h3[@class="h4"]`

**Failure 2:**
- Message: The heading skips one or more levels
- HTML: `<h3 class="contacts_footer">Contatti</h3>`
- XPath: `/h3[@class="contacts_footer"]`

#### Rule: [SIA-R57: Landmarks don't repeat the same content](https://alfa.siteimprove.com/rules/sia-r57)

**Failure 1:**
- Message: The text is not included in a landmark region

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 2.27:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R69: Text has sufficient contrast with its background](https://alfa.siteimprove.com/rules/sia-r69)

**Failure 1:**
- Message: The highest possible contrast of the text is 2.27:1 which is         below the required contrast of 4.5:1

#### Rule: [SIA-R72](https://alfa.siteimprove.com/rules/sia-r72)

**Failure 1:**
- Message: The text of the paragraph is uppercased
- HTML: `<p class="menu_under_burger">MENU</p>`
- XPath: `/p[@class="menu_under_burger"]`

#### Rule: [SIA-R73: Text spacing can be adjusted without loss of content](https://alfa.siteimprove.com/rules/sia-r73)

**Failure 1:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p>...</p>`
- XPath: `/p`

**Failure 2:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="menu_under_burger">MENU</p>`
- XPath: `/p[@class="menu_under_burger"]`

**Failure 3:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="nav_social clearfix">...</p>`
- XPath: `/p[@class="nav_social clearfix"]`

**Failure 4:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="h4 text-center" style="word-wrap: break-word; margin-left: 30%; padding-top: 1.5%;">...</p>`
- XPath: `/p[@class="h4 text-center"]`

**Failure 5:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="h5">10 Marzo 2026</p>`
- XPath: `/p[@class="h5"]`

#### Rule: [SIA-R74](https://alfa.siteimprove.com/rules/sia-r74)

**Failure 1:**
- Message: The font size is specified using an absolute unit
- HTML: `<p>...</p>`
- XPath: `/p`

#### Rule: [SIA-R78: Headings of same level have text content between them](https://alfa.siteimprove.com/rules/sia-r78)

**Failure 1:**
- Message: There is no content between this heading and the next
- HTML: `<h3 class="contacts_footer">Contatti</h3>`
- XPath: `/h3[@class="contacts_footer"]`

#### Rule: [SIA-R84](https://alfa.siteimprove.com/rules/sia-r84)

**Failure 1:**
- Message: The scrollable element is not reachable through keyboard navigation
- HTML: `<nav class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left">...</nav>`
- XPath: `/nav[@class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left"]`

### https://governo.it/it/media/la-facciata-di-palazzo-chigi-si-illumina-il-quarto-anniversario-dellinvasione-dellucraina

#### Rule: [SIA-R11: Button elements have an accessible name](https://alfa.siteimprove.com/rules/sia-r11)

**Failure 1:**
- Message: The link does not have an accessible name
- HTML: `<a href="#" class="toggle-menu menu-left push-body jPushMenuBtn">...</a>`
- XPath: `/a[@class="toggle-menu menu-left push-body jPushMenuBtn"]`

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)

**Failure 1:**
- Message: Target has insufficient size
- HTML: `<button type="button" class="agree-button eu-cookie-compliance-secondary-button">Si, acconsento</button>`
- XPath: `/button[@class="agree-button eu-cookie-compliance-secondary-button"]`

**Failure 2:**
- Message: Target has insufficient size
- HTML: `<button type="button" class="decline-button eu-cookie-compliance-default-button">No, non acconsento</button>`
- XPath: `/button[@class="decline-button eu-cookie-compliance-default-button"]`

**Failure 3:**
- Message: Target has insufficient size
- HTML: `<a href="#" class="toggle-menu menu-left push-body jPushMenuBtn">...</a>`
- XPath: `/a[@class="toggle-menu menu-left push-body jPushMenuBtn"]`

**Failure 4:**
- Message: Target has insufficient size
- HTML: `<a href="https://www.governo.it">...</a>`
- XPath: `/a`

#### Rule: [SIA-R113](https://alfa.siteimprove.com/rules/sia-r113)

**Failure 1:**
- Message: Target has insufficient size and spacing
- HTML: `<a href="https://www.governo.it">...</a>`
- XPath: `/a`

#### Rule: [SIA-R53: Headings follow a logical hierarchy](https://alfa.siteimprove.com/rules/sia-r53)

**Failure 1:**
- Message: The heading skips one or more levels
- HTML: `<h3 class="contacts_footer">Contatti</h3>`
- XPath: `/h3[@class="contacts_footer"]`

#### Rule: [SIA-R57: Landmarks don't repeat the same content](https://alfa.siteimprove.com/rules/sia-r57)

**Failure 1:**
- Message: The text is not included in a landmark region

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 2.27:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R69: Text has sufficient contrast with its background](https://alfa.siteimprove.com/rules/sia-r69)

**Failure 1:**
- Message: The highest possible contrast of the text is 2.27:1 which is         below the required contrast of 4.5:1

#### Rule: [SIA-R72](https://alfa.siteimprove.com/rules/sia-r72)

**Failure 1:**
- Message: The text of the paragraph is uppercased
- HTML: `<p class="menu_under_burger">MENU</p>`
- XPath: `/p[@class="menu_under_burger"]`

#### Rule: [SIA-R73: Text spacing can be adjusted without loss of content](https://alfa.siteimprove.com/rules/sia-r73)

**Failure 1:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p>...</p>`
- XPath: `/p`

**Failure 2:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="menu_under_burger">MENU</p>`
- XPath: `/p[@class="menu_under_burger"]`

**Failure 3:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="nav_social clearfix">...</p>`
- XPath: `/p[@class="nav_social clearfix"]`

#### Rule: [SIA-R74](https://alfa.siteimprove.com/rules/sia-r74)

**Failure 1:**
- Message: The font size is specified using an absolute unit
- HTML: `<p>...</p>`
- XPath: `/p`

#### Rule: [SIA-R78: Headings of same level have text content between them](https://alfa.siteimprove.com/rules/sia-r78)

**Failure 1:**
- Message: There is no content between this heading and the next
- HTML: `<h3 class="contacts_footer">Contatti</h3>`
- XPath: `/h3[@class="contacts_footer"]`

#### Rule: [SIA-R83: Text can be resized to 200% without loss of content](https://alfa.siteimprove.com/rules/sia-r83)

**Failure 1:**
- Message: The text is clipped

#### Rule: [SIA-R84](https://alfa.siteimprove.com/rules/sia-r84)

**Failure 1:**
- Message: The scrollable element is not reachable through keyboard navigation
- HTML: `<nav class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left">...</nav>`
- XPath: `/nav[@class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left"]`

### https://governo.it/it/governo/meloni/presidente-del-consiglio/giorgia-meloni

#### Rule: [SIA-R11: Button elements have an accessible name](https://alfa.siteimprove.com/rules/sia-r11)

**Failure 1:**
- Message: The link does not have an accessible name
- HTML: `<a href="#" class="toggle-menu menu-left push-body jPushMenuBtn">...</a>`
- XPath: `/a[@class="toggle-menu menu-left push-body jPushMenuBtn"]`

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)

**Failure 1:**
- Message: Target has insufficient size
- HTML: `<button type="button" class="agree-button eu-cookie-compliance-secondary-button">Si, acconsento</button>`
- XPath: `/button[@class="agree-button eu-cookie-compliance-secondary-button"]`

**Failure 2:**
- Message: Target has insufficient size
- HTML: `<button type="button" class="decline-button eu-cookie-compliance-default-button">No, non acconsento</button>`
- XPath: `/button[@class="decline-button eu-cookie-compliance-default-button"]`

**Failure 3:**
- Message: Target has insufficient size
- HTML: `<a href="#" class="toggle-menu menu-left push-body jPushMenuBtn">...</a>`
- XPath: `/a[@class="toggle-menu menu-left push-body jPushMenuBtn"]`

**Failure 4:**
- Message: Target has insufficient size
- HTML: `<a href="https://www.governo.it">...</a>`
- XPath: `/a`

#### Rule: [SIA-R53: Headings follow a logical hierarchy](https://alfa.siteimprove.com/rules/sia-r53)

**Failure 1:**
- Message: The heading skips one or more levels
- HTML: `<h3 class="contacts_footer">Contatti</h3>`
- XPath: `/h3[@class="contacts_footer"]`

#### Rule: [SIA-R57: Landmarks don't repeat the same content](https://alfa.siteimprove.com/rules/sia-r57)

**Failure 1:**
- Message: The text is not included in a landmark region

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 2.27:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R69: Text has sufficient contrast with its background](https://alfa.siteimprove.com/rules/sia-r69)

**Failure 1:**
- Message: The highest possible contrast of the text is 2.27:1 which is         below the required contrast of 4.5:1

#### Rule: [SIA-R72](https://alfa.siteimprove.com/rules/sia-r72)

**Failure 1:**
- Message: The text of the paragraph is uppercased
- HTML: `<p class="menu_under_burger">MENU</p>`
- XPath: `/p[@class="menu_under_burger"]`

#### Rule: [SIA-R73: Text spacing can be adjusted without loss of content](https://alfa.siteimprove.com/rules/sia-r73)

**Failure 1:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p>...</p>`
- XPath: `/p`

**Failure 2:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="menu_under_burger">MENU</p>`
- XPath: `/p[@class="menu_under_burger"]`

**Failure 3:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="nav_social clearfix">...</p>`
- XPath: `/p[@class="nav_social clearfix"]`

#### Rule: [SIA-R74](https://alfa.siteimprove.com/rules/sia-r74)

**Failure 1:**
- Message: The font size is specified using an absolute unit
- HTML: `<p>...</p>`
- XPath: `/p`

#### Rule: [SIA-R78: Headings of same level have text content between them](https://alfa.siteimprove.com/rules/sia-r78)

**Failure 1:**
- Message: There is no content between this heading and the next
- HTML: `<h3 class="contacts_footer">Contatti</h3>`
- XPath: `/h3[@class="contacts_footer"]`

#### Rule: [SIA-R83: Text can be resized to 200% without loss of content](https://alfa.siteimprove.com/rules/sia-r83)

**Failure 1:**
- Message: The text is clipped

#### Rule: [SIA-R84](https://alfa.siteimprove.com/rules/sia-r84)

**Failure 1:**
- Message: The scrollable element is not reachable through keyboard navigation
- HTML: `<nav class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left">...</nav>`
- XPath: `/nav[@class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left"]`

### https://governo.it/it/notizie-governo

#### Rule: [SIA-R11: Button elements have an accessible name](https://alfa.siteimprove.com/rules/sia-r11)

**Failure 1:**
- Message: The link does not have an accessible name
- HTML: `<a href="#" class="toggle-menu menu-left push-body jPushMenuBtn">...</a>`
- XPath: `/a[@class="toggle-menu menu-left push-body jPushMenuBtn"]`

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)

**Failure 1:**
- Message: Target has insufficient size
- HTML: `<button type="button" class="agree-button eu-cookie-compliance-secondary-button">Si, acconsento</button>`
- XPath: `/button[@class="agree-button eu-cookie-compliance-secondary-button"]`

**Failure 2:**
- Message: Target has insufficient size
- HTML: `<button type="button" class="decline-button eu-cookie-compliance-default-button">No, non acconsento</button>`
- XPath: `/button[@class="decline-button eu-cookie-compliance-default-button"]`

**Failure 3:**
- Message: Target has insufficient size
- HTML: `<a href="#" class="toggle-menu menu-left push-body jPushMenuBtn">...</a>`
- XPath: `/a[@class="toggle-menu menu-left push-body jPushMenuBtn"]`

**Failure 4:**
- Message: Target has insufficient size
- HTML: `<a href="https://www.governo.it">...</a>`
- XPath: `/a`

**Failure 5:**
- Message: Target has insufficient size
- HTML: `<a class="box_text_anchor" href="/it/articolo/consiglio-dei-ministri-n-164/31307">...</a>`
- XPath: `/a[@class="box_text_anchor"]`

#### Rule: [SIA-R113](https://alfa.siteimprove.com/rules/sia-r113)

**Failure 1:**
- Message: Target has insufficient size and spacing
- HTML: `<a title="Vai a pagina 2" href="/it/notizie-governo?page=1">2</a>`
- XPath: `/a`

#### Rule: [SIA-R53: Headings follow a logical hierarchy](https://alfa.siteimprove.com/rules/sia-r53)

**Failure 1:**
- Message: The heading skips one or more levels
- HTML: `<h3 class="contacts_footer">Contatti</h3>`
- XPath: `/h3[@class="contacts_footer"]`

#### Rule: [SIA-R57: Landmarks don't repeat the same content](https://alfa.siteimprove.com/rules/sia-r57)

**Failure 1:**
- Message: The text is not included in a landmark region

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 2.27:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R69: Text has sufficient contrast with its background](https://alfa.siteimprove.com/rules/sia-r69)

**Failure 1:**
- Message: The highest possible contrast of the text is 2.27:1 which is         below the required contrast of 4.5:1

#### Rule: [SIA-R72](https://alfa.siteimprove.com/rules/sia-r72)

**Failure 1:**
- Message: The text of the paragraph is uppercased
- HTML: `<p class="menu_under_burger">MENU</p>`
- XPath: `/p[@class="menu_under_burger"]`

#### Rule: [SIA-R73: Text spacing can be adjusted without loss of content](https://alfa.siteimprove.com/rules/sia-r73)

**Failure 1:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p>...</p>`
- XPath: `/p`

**Failure 2:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="menu_under_burger">MENU</p>`
- XPath: `/p[@class="menu_under_burger"]`

**Failure 3:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="nav_social clearfix">...</p>`
- XPath: `/p[@class="nav_social clearfix"]`

#### Rule: [SIA-R74](https://alfa.siteimprove.com/rules/sia-r74)

**Failure 1:**
- Message: The font size is specified using an absolute unit
- HTML: `<p>...</p>`
- XPath: `/p`

#### Rule: [SIA-R78: Headings of same level have text content between them](https://alfa.siteimprove.com/rules/sia-r78)

**Failure 1:**
- Message: There is no content between this heading and the next
- HTML: `<h3 class="contacts_footer">Contatti</h3>`
- XPath: `/h3[@class="contacts_footer"]`

#### Rule: [SIA-R84](https://alfa.siteimprove.com/rules/sia-r84)

**Failure 1:**
- Message: The scrollable element is not reachable through keyboard navigation
- HTML: `<nav class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left">...</nav>`
- XPath: `/nav[@class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left"]`

### https://governo.it/it/organizzazione/il-segretario-generale/64

#### Rule: [SIA-R11: Button elements have an accessible name](https://alfa.siteimprove.com/rules/sia-r11)

**Failure 1:**
- Message: The link does not have an accessible name
- HTML: `<a href="#" class="toggle-menu menu-left push-body jPushMenuBtn">...</a>`
- XPath: `/a[@class="toggle-menu menu-left push-body jPushMenuBtn"]`

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)

**Failure 1:**
- Message: Target has insufficient size
- HTML: `<button type="button" class="agree-button eu-cookie-compliance-secondary-button">Si, acconsento</button>`
- XPath: `/button[@class="agree-button eu-cookie-compliance-secondary-button"]`

**Failure 2:**
- Message: Target has insufficient size
- HTML: `<button type="button" class="decline-button eu-cookie-compliance-default-button">No, non acconsento</button>`
- XPath: `/button[@class="decline-button eu-cookie-compliance-default-button"]`

**Failure 3:**
- Message: Target has insufficient size
- HTML: `<a href="#" class="toggle-menu menu-left push-body jPushMenuBtn">...</a>`
- XPath: `/a[@class="toggle-menu menu-left push-body jPushMenuBtn"]`

**Failure 4:**
- Message: Target has insufficient size
- HTML: `<a href="https://www.governo.it">...</a>`
- XPath: `/a`

#### Rule: [SIA-R53: Headings follow a logical hierarchy](https://alfa.siteimprove.com/rules/sia-r53)

**Failure 1:**
- Message: The heading skips one or more levels
- HTML: `<h3 class="contacts_footer">Contatti</h3>`
- XPath: `/h3[@class="contacts_footer"]`

#### Rule: [SIA-R56: Landmarks with the same role are distinguishable](https://alfa.siteimprove.com/rules/sia-r56)

**Failure 1:**
- Message: Some `navigation` have the same name.

#### Rule: [SIA-R57: Landmarks don't repeat the same content](https://alfa.siteimprove.com/rules/sia-r57)

**Failure 1:**
- Message: The text is not included in a landmark region

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 2.27:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R69: Text has sufficient contrast with its background](https://alfa.siteimprove.com/rules/sia-r69)

**Failure 1:**
- Message: The highest possible contrast of the text is 2.27:1 which is         below the required contrast of 4.5:1

#### Rule: [SIA-R72](https://alfa.siteimprove.com/rules/sia-r72)

**Failure 1:**
- Message: The text of the paragraph is uppercased
- HTML: `<p class="menu_under_burger">MENU</p>`
- XPath: `/p[@class="menu_under_burger"]`

#### Rule: [SIA-R73: Text spacing can be adjusted without loss of content](https://alfa.siteimprove.com/rules/sia-r73)

**Failure 1:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p>...</p>`
- XPath: `/p`

**Failure 2:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="menu_under_burger">MENU</p>`
- XPath: `/p[@class="menu_under_burger"]`

**Failure 3:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="nav_social clearfix">...</p>`
- XPath: `/p[@class="nav_social clearfix"]`

#### Rule: [SIA-R74](https://alfa.siteimprove.com/rules/sia-r74)

**Failure 1:**
- Message: The font size is specified using an absolute unit
- HTML: `<p>...</p>`
- XPath: `/p`

#### Rule: [SIA-R78: Headings of same level have text content between them](https://alfa.siteimprove.com/rules/sia-r78)

**Failure 1:**
- Message: There is no content between this heading and the next
- HTML: `<h3 class="contacts_footer">Contatti</h3>`
- XPath: `/h3[@class="contacts_footer"]`

#### Rule: [SIA-R83: Text can be resized to 200% without loss of content](https://alfa.siteimprove.com/rules/sia-r83)

**Failure 1:**
- Message: The text is clipped

#### Rule: [SIA-R84](https://alfa.siteimprove.com/rules/sia-r84)

**Failure 1:**
- Message: The scrollable element is not reachable through keyboard navigation
- HTML: `<nav class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left">...</nav>`
- XPath: `/nav[@class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left"]`

### https://governo.it/it/il-governo-funzioni-struttura-e-storia/la-funzione-del-presidente-del-consiglio/188

#### Rule: [SIA-R11: Button elements have an accessible name](https://alfa.siteimprove.com/rules/sia-r11)

**Failure 1:**
- Message: The link does not have an accessible name
- HTML: `<a href="#" class="toggle-menu menu-left push-body jPushMenuBtn">...</a>`
- XPath: `/a[@class="toggle-menu menu-left push-body jPushMenuBtn"]`

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)

**Failure 1:**
- Message: Target has insufficient size
- HTML: `<button type="button" class="agree-button eu-cookie-compliance-secondary-button">Si, acconsento</button>`
- XPath: `/button[@class="agree-button eu-cookie-compliance-secondary-button"]`

**Failure 2:**
- Message: Target has insufficient size
- HTML: `<button type="button" class="decline-button eu-cookie-compliance-default-button">No, non acconsento</button>`
- XPath: `/button[@class="decline-button eu-cookie-compliance-default-button"]`

**Failure 3:**
- Message: Target has insufficient size
- HTML: `<a href="#" class="toggle-menu menu-left push-body jPushMenuBtn">...</a>`
- XPath: `/a[@class="toggle-menu menu-left push-body jPushMenuBtn"]`

**Failure 4:**
- Message: Target has insufficient size
- HTML: `<a href="https://www.governo.it">...</a>`
- XPath: `/a`

#### Rule: [SIA-R53: Headings follow a logical hierarchy](https://alfa.siteimprove.com/rules/sia-r53)

**Failure 1:**
- Message: The heading skips one or more levels
- HTML: `<h3 class="contacts_footer">Contatti</h3>`
- XPath: `/h3[@class="contacts_footer"]`

#### Rule: [SIA-R56: Landmarks with the same role are distinguishable](https://alfa.siteimprove.com/rules/sia-r56)

**Failure 1:**
- Message: Some `navigation` have the same name.

#### Rule: [SIA-R57: Landmarks don't repeat the same content](https://alfa.siteimprove.com/rules/sia-r57)

**Failure 1:**
- Message: The text is not included in a landmark region

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 2.27:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R69: Text has sufficient contrast with its background](https://alfa.siteimprove.com/rules/sia-r69)

**Failure 1:**
- Message: The highest possible contrast of the text is 2.27:1 which is         below the required contrast of 4.5:1

#### Rule: [SIA-R72](https://alfa.siteimprove.com/rules/sia-r72)

**Failure 1:**
- Message: The text of the paragraph is uppercased
- HTML: `<p class="menu_under_burger">MENU</p>`
- XPath: `/p[@class="menu_under_burger"]`

#### Rule: [SIA-R73: Text spacing can be adjusted without loss of content](https://alfa.siteimprove.com/rules/sia-r73)

**Failure 1:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p>...</p>`
- XPath: `/p`

**Failure 2:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="menu_under_burger">MENU</p>`
- XPath: `/p[@class="menu_under_burger"]`

**Failure 3:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="nav_social clearfix">...</p>`
- XPath: `/p[@class="nav_social clearfix"]`

#### Rule: [SIA-R74](https://alfa.siteimprove.com/rules/sia-r74)

**Failure 1:**
- Message: The font size is specified using an absolute unit
- HTML: `<p>...</p>`
- XPath: `/p`

#### Rule: [SIA-R78: Headings of same level have text content between them](https://alfa.siteimprove.com/rules/sia-r78)

**Failure 1:**
- Message: There is no content between this heading and the next
- HTML: `<h3 class="contacts_footer">Contatti</h3>`
- XPath: `/h3[@class="contacts_footer"]`

#### Rule: [SIA-R83: Text can be resized to 200% without loss of content](https://alfa.siteimprove.com/rules/sia-r83)

**Failure 1:**
- Message: The text is clipped

#### Rule: [SIA-R84](https://alfa.siteimprove.com/rules/sia-r84)

**Failure 1:**
- Message: The scrollable element is not reachable through keyboard navigation
- HTML: `<nav class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left">...</nav>`
- XPath: `/nav[@class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left"]`

### https://governo.it/it/articolo/incidente-milano-il-cordoglio-del-presidente-meloni/31213

#### Rule: [SIA-R11: Button elements have an accessible name](https://alfa.siteimprove.com/rules/sia-r11)

**Failure 1:**
- Message: The link does not have an accessible name
- HTML: `<a href="#" class="toggle-menu menu-left push-body jPushMenuBtn">...</a>`
- XPath: `/a[@class="toggle-menu menu-left push-body jPushMenuBtn"]`

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)

**Failure 1:**
- Message: Target has insufficient size
- HTML: `<button type="button" class="agree-button eu-cookie-compliance-secondary-button">Si, acconsento</button>`
- XPath: `/button[@class="agree-button eu-cookie-compliance-secondary-button"]`

**Failure 2:**
- Message: Target has insufficient size
- HTML: `<button type="button" class="decline-button eu-cookie-compliance-default-button">No, non acconsento</button>`
- XPath: `/button[@class="decline-button eu-cookie-compliance-default-button"]`

**Failure 3:**
- Message: Target has insufficient size
- HTML: `<a href="#" class="toggle-menu menu-left push-body jPushMenuBtn">...</a>`
- XPath: `/a[@class="toggle-menu menu-left push-body jPushMenuBtn"]`

**Failure 4:**
- Message: Target has insufficient size
- HTML: `<a href="https://www.governo.it">...</a>`
- XPath: `/a`

#### Rule: [SIA-R2: HTML elements have a valid lang attribute](https://alfa.siteimprove.com/rules/sia-r2)

**Failure 1:**
- Message: The image does not have an accessible name
- HTML: `<img src="https://www.governo.it/sites/governo.it/files/styles/860x600/public/BD8E879E_PP.jpg?itok=NuB9_Mmu" />`
- XPath: `/img`

#### Rule: [SIA-R53: Headings follow a logical hierarchy](https://alfa.siteimprove.com/rules/sia-r53)

**Failure 1:**
- Message: The heading skips one or more levels
- HTML: `<h3 class="contacts_footer">Contatti</h3>`
- XPath: `/h3[@class="contacts_footer"]`

#### Rule: [SIA-R57: Landmarks don't repeat the same content](https://alfa.siteimprove.com/rules/sia-r57)

**Failure 1:**
- Message: The text is not included in a landmark region

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 2.27:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R69: Text has sufficient contrast with its background](https://alfa.siteimprove.com/rules/sia-r69)

**Failure 1:**
- Message: The highest possible contrast of the text is 2.27:1 which is         below the required contrast of 4.5:1

#### Rule: [SIA-R72](https://alfa.siteimprove.com/rules/sia-r72)

**Failure 1:**
- Message: The text of the paragraph is uppercased
- HTML: `<p class="menu_under_burger">MENU</p>`
- XPath: `/p[@class="menu_under_burger"]`

#### Rule: [SIA-R73: Text spacing can be adjusted without loss of content](https://alfa.siteimprove.com/rules/sia-r73)

**Failure 1:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p>...</p>`
- XPath: `/p`

**Failure 2:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="menu_under_burger">MENU</p>`
- XPath: `/p[@class="menu_under_burger"]`

**Failure 3:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="nav_social clearfix">...</p>`
- XPath: `/p[@class="nav_social clearfix"]`

**Failure 4:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="h5 dataright">27 Febbraio 2026</p>`
- XPath: `/p[@class="h5 dataright"]`

#### Rule: [SIA-R74](https://alfa.siteimprove.com/rules/sia-r74)

**Failure 1:**
- Message: The font size is specified using an absolute unit
- HTML: `<p>...</p>`
- XPath: `/p`

#### Rule: [SIA-R78: Headings of same level have text content between them](https://alfa.siteimprove.com/rules/sia-r78)

**Failure 1:**
- Message: There is no content between this heading and the next
- HTML: `<h3 class="contacts_footer">Contatti</h3>`
- XPath: `/h3[@class="contacts_footer"]`

#### Rule: [SIA-R83: Text can be resized to 200% without loss of content](https://alfa.siteimprove.com/rules/sia-r83)

**Failure 1:**
- Message: The text is clipped

#### Rule: [SIA-R84](https://alfa.siteimprove.com/rules/sia-r84)

**Failure 1:**
- Message: The scrollable element is not reachable through keyboard navigation
- HTML: `<nav class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left">...</nav>`
- XPath: `/nav[@class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left"]`

### https://governo.it/it/il-presidente

#### Rule: [SIA-R11: Button elements have an accessible name](https://alfa.siteimprove.com/rules/sia-r11)

**Failure 1:**
- Message: The link does not have an accessible name
- HTML: `<a href="#" class="toggle-menu menu-left push-body jPushMenuBtn">...</a>`
- XPath: `/a[@class="toggle-menu menu-left push-body jPushMenuBtn"]`

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)

**Failure 1:**
- Message: Target has insufficient size
- HTML: `<button type="button" class="agree-button eu-cookie-compliance-secondary-button">Si, acconsento</button>`
- XPath: `/button[@class="agree-button eu-cookie-compliance-secondary-button"]`

**Failure 2:**
- Message: Target has insufficient size
- HTML: `<button type="button" class="decline-button eu-cookie-compliance-default-button">No, non acconsento</button>`
- XPath: `/button[@class="decline-button eu-cookie-compliance-default-button"]`

**Failure 3:**
- Message: Target has insufficient size
- HTML: `<a href="https://www.governo.it">IT</a>`
- XPath: `/a`

**Failure 4:**
- Message: Target has insufficient size
- HTML: `<a href="/it/il-presidente" title="" class="active-trail active">Il Presidente</a>`
- XPath: `/a[@class="active-trail active"]`

**Failure 5:**
- Message: Target has insufficient size
- HTML: `<a class="simple-link-blu" href="https://www.governo.it/it/governo/meloni/presidente-del-consiglio/giorgia-meloni" title="Biografia">Biografia</a>`
- XPath: `/a[@class="simple-link-blu"]`

*... and 1 more failures for this rule*

#### Rule: [SIA-R53: Headings follow a logical hierarchy](https://alfa.siteimprove.com/rules/sia-r53)

**Failure 1:**
- Message: The heading skips one or more levels
- HTML: `<h3 class="h4">...</h3>`
- XPath: `/h3[@class="h4"]`

**Failure 2:**
- Message: The heading skips one or more levels
- HTML: `<h3 class="contacts_footer">Contatti</h3>`
- XPath: `/h3[@class="contacts_footer"]`

#### Rule: [SIA-R57: Landmarks don't repeat the same content](https://alfa.siteimprove.com/rules/sia-r57)

**Failure 1:**
- Message: The text is not included in a landmark region

#### Rule: [SIA-R62: Links are visually distinguishable from surrounding text](https://alfa.siteimprove.com/rules/sia-r62)

**Failure 1:**
- Message: The link is not distinguishable from the surrounding text
- HTML: `<a href="mailto:presidente@pec.governo.it">presidente@pec.governo.it</a>`
- XPath: `/a`

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 2.27:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R69: Text has sufficient contrast with its background](https://alfa.siteimprove.com/rules/sia-r69)

**Failure 1:**
- Message: The highest possible contrast of the text is 2.27:1 which is         below the required contrast of 4.5:1

#### Rule: [SIA-R72](https://alfa.siteimprove.com/rules/sia-r72)

**Failure 1:**
- Message: The text of the paragraph is uppercased
- HTML: `<p class="menu_under_burger">MENU</p>`
- XPath: `/p[@class="menu_under_burger"]`

#### Rule: [SIA-R73: Text spacing can be adjusted without loss of content](https://alfa.siteimprove.com/rules/sia-r73)

**Failure 1:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p>...</p>`
- XPath: `/p`

**Failure 2:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="menu_under_burger">MENU</p>`
- XPath: `/p[@class="menu_under_burger"]`

**Failure 3:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="nav_social clearfix">...</p>`
- XPath: `/p[@class="nav_social clearfix"]`

**Failure 4:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="h3 pull-right">...</p>`
- XPath: `/p[@class="h3 pull-right"]`

**Failure 5:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="agenda_data_giorno_p">...</p>`
- XPath: `/p[@class="agenda_data_giorno_p"]`

*... and 2 more failures for this rule*

#### Rule: [SIA-R74](https://alfa.siteimprove.com/rules/sia-r74)

**Failure 1:**
- Message: The font size is specified using an absolute unit
- HTML: `<p>...</p>`
- XPath: `/p`

#### Rule: [SIA-R78: Headings of same level have text content between them](https://alfa.siteimprove.com/rules/sia-r78)

**Failure 1:**
- Message: There is no content between this heading and the next
- HTML: `<h3>Celebrazione della "Giornata Internazionale della ...</h3>`
- XPath: `/h3`

**Failure 2:**
- Message: There is no content between this heading and the next
- HTML: `<h3 class="contacts_footer">Contatti</h3>`
- XPath: `/h3[@class="contacts_footer"]`

#### Rule: [SIA-R83: Text can be resized to 200% without loss of content](https://alfa.siteimprove.com/rules/sia-r83)

**Failure 1:**
- Message: The text is clipped

#### Rule: [SIA-R84](https://alfa.siteimprove.com/rules/sia-r84)

**Failure 1:**
- Message: The scrollable element is not reachable through keyboard navigation
- HTML: `<nav class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left">...</nav>`
- XPath: `/nav[@class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left"]`

#### Rule: [SIA-R85](https://alfa.siteimprove.com/rules/sia-r85)

**Failure 1:**
- Message: The text of the paragraph is all italic
- HTML: `<p class="data_intervista">Sabato, 7 Marzo 2026</p>`
- XPath: `/p[@class="data_intervista"]`

### https://governo.it/it/notizie-presidente

#### Rule: [SIA-R11: Button elements have an accessible name](https://alfa.siteimprove.com/rules/sia-r11)

**Failure 1:**
- Message: The link does not have an accessible name
- HTML: `<a href="#" class="toggle-menu menu-left push-body jPushMenuBtn">...</a>`
- XPath: `/a[@class="toggle-menu menu-left push-body jPushMenuBtn"]`

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)

**Failure 1:**
- Message: Target has insufficient size
- HTML: `<a href="#" class="toggle-menu menu-left push-body jPushMenuBtn">...</a>`
- XPath: `/a[@class="toggle-menu menu-left push-body jPushMenuBtn"]`

**Failure 2:**
- Message: Target has insufficient size
- HTML: `<a href="https://www.governo.it">IT</a>`
- XPath: `/a`

#### Rule: [SIA-R113](https://alfa.siteimprove.com/rules/sia-r113)

**Failure 1:**
- Message: Target has insufficient size and spacing
- HTML: `<a title="Vai a pagina 2" href="/it/notizie-presidente?datafine=2020-07-30%2023%3A59%3A59&datainizio=2020-07-30%2000%3A00%3A00&page=1">2</a>`
- XPath: `/a`

#### Rule: [SIA-R53: Headings follow a logical hierarchy](https://alfa.siteimprove.com/rules/sia-r53)

**Failure 1:**
- Message: The heading skips one or more levels
- HTML: `<h3 class="contacts_footer">Contatti</h3>`
- XPath: `/h3[@class="contacts_footer"]`

#### Rule: [SIA-R57: Landmarks don't repeat the same content](https://alfa.siteimprove.com/rules/sia-r57)

**Failure 1:**
- Message: The text is not included in a landmark region

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 2.27:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R69: Text has sufficient contrast with its background](https://alfa.siteimprove.com/rules/sia-r69)

**Failure 1:**
- Message: The highest possible contrast of the text is 2.27:1 which is         below the required contrast of 4.5:1

#### Rule: [SIA-R72](https://alfa.siteimprove.com/rules/sia-r72)

**Failure 1:**
- Message: The text of the paragraph is uppercased
- HTML: `<p class="menu_under_burger">MENU</p>`
- XPath: `/p[@class="menu_under_burger"]`

#### Rule: [SIA-R73: Text spacing can be adjusted without loss of content](https://alfa.siteimprove.com/rules/sia-r73)

**Failure 1:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p>...</p>`
- XPath: `/p`

**Failure 2:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="menu_under_burger">MENU</p>`
- XPath: `/p[@class="menu_under_burger"]`

**Failure 3:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="nav_social clearfix">...</p>`
- XPath: `/p[@class="nav_social clearfix"]`

#### Rule: [SIA-R74](https://alfa.siteimprove.com/rules/sia-r74)

**Failure 1:**
- Message: The font size is specified using an absolute unit
- HTML: `<p>...</p>`
- XPath: `/p`

#### Rule: [SIA-R78: Headings of same level have text content between them](https://alfa.siteimprove.com/rules/sia-r78)

**Failure 1:**
- Message: There is no content between this heading and the next
- HTML: `<h3 class="contacts_footer">Contatti</h3>`
- XPath: `/h3[@class="contacts_footer"]`

#### Rule: [SIA-R84](https://alfa.siteimprove.com/rules/sia-r84)

**Failure 1:**
- Message: The scrollable element is not reachable through keyboard navigation
- HTML: `<nav class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left">...</nav>`
- XPath: `/nav[@class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left"]`

### https://governo.it/it/organizzazione/uffici-dipartimenti-strutture/69

#### Rule: [SIA-R11: Button elements have an accessible name](https://alfa.siteimprove.com/rules/sia-r11)

**Failure 1:**
- Message: The link does not have an accessible name
- HTML: `<a href="#" class="toggle-menu menu-left push-body jPushMenuBtn">...</a>`
- XPath: `/a[@class="toggle-menu menu-left push-body jPushMenuBtn"]`

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)

**Failure 1:**
- Message: Target has insufficient size
- HTML: `<button type="button" class="agree-button eu-cookie-compliance-secondary-button">Si, acconsento</button>`
- XPath: `/button[@class="agree-button eu-cookie-compliance-secondary-button"]`

**Failure 2:**
- Message: Target has insufficient size
- HTML: `<button type="button" class="decline-button eu-cookie-compliance-default-button">No, non acconsento</button>`
- XPath: `/button[@class="decline-button eu-cookie-compliance-default-button"]`

**Failure 3:**
- Message: Target has insufficient size
- HTML: `<a href="#" class="toggle-menu menu-left push-body jPushMenuBtn">...</a>`
- XPath: `/a[@class="toggle-menu menu-left push-body jPushMenuBtn"]`

**Failure 4:**
- Message: Target has insufficient size
- HTML: `<a href="https://www.governo.it">...</a>`
- XPath: `/a`

#### Rule: [SIA-R53: Headings follow a logical hierarchy](https://alfa.siteimprove.com/rules/sia-r53)

**Failure 1:**
- Message: The heading skips one or more levels
- HTML: `<h3 class="contacts_footer">Contatti</h3>`
- XPath: `/h3[@class="contacts_footer"]`

#### Rule: [SIA-R56: Landmarks with the same role are distinguishable](https://alfa.siteimprove.com/rules/sia-r56)

**Failure 1:**
- Message: Some `navigation` have the same name.

#### Rule: [SIA-R57: Landmarks don't repeat the same content](https://alfa.siteimprove.com/rules/sia-r57)

**Failure 1:**
- Message: The text is not included in a landmark region

#### Rule: [SIA-R62: Links are visually distinguishable from surrounding text](https://alfa.siteimprove.com/rules/sia-r62)

**Failure 1:**
- Message: The link is not distinguishable from the surrounding text
- HTML: `<a href="http://www.sspa.it/">Scuola Nazionale dell'Amministrazione</a>`
- XPath: `/a`

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 2.27:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R69: Text has sufficient contrast with its background](https://alfa.siteimprove.com/rules/sia-r69)

**Failure 1:**
- Message: The highest possible contrast of the text is 2.27:1 which is         below the required contrast of 4.5:1

#### Rule: [SIA-R72](https://alfa.siteimprove.com/rules/sia-r72)

**Failure 1:**
- Message: The text of the paragraph is uppercased
- HTML: `<p class="menu_under_burger">MENU</p>`
- XPath: `/p[@class="menu_under_burger"]`

#### Rule: [SIA-R73: Text spacing can be adjusted without loss of content](https://alfa.siteimprove.com/rules/sia-r73)

**Failure 1:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p>...</p>`
- XPath: `/p`

**Failure 2:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="menu_under_burger">MENU</p>`
- XPath: `/p[@class="menu_under_burger"]`

**Failure 3:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="nav_social clearfix">...</p>`
- XPath: `/p[@class="nav_social clearfix"]`

#### Rule: [SIA-R74](https://alfa.siteimprove.com/rules/sia-r74)

**Failure 1:**
- Message: The font size is specified using an absolute unit
- HTML: `<p>...</p>`
- XPath: `/p`

#### Rule: [SIA-R78: Headings of same level have text content between them](https://alfa.siteimprove.com/rules/sia-r78)

**Failure 1:**
- Message: There is no content between this heading and the next
- HTML: `<h3 class="contacts_footer">Contatti</h3>`
- XPath: `/h3[@class="contacts_footer"]`

#### Rule: [SIA-R83: Text can be resized to 200% without loss of content](https://alfa.siteimprove.com/rules/sia-r83)

**Failure 1:**
- Message: The text is clipped

#### Rule: [SIA-R84](https://alfa.siteimprove.com/rules/sia-r84)

**Failure 1:**
- Message: The scrollable element is not reachable through keyboard navigation
- HTML: `<nav class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left">...</nav>`
- XPath: `/nav[@class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left"]`

### https://governo.it/it/articolo/giorno-del-ricordo-dal-10-febbraio-al-1-marzo-2026-la-3a-edizione-del-treno-del-ricordo

#### Rule: [SIA-R11: Button elements have an accessible name](https://alfa.siteimprove.com/rules/sia-r11)

**Failure 1:**
- Message: The link does not have an accessible name
- HTML: `<a href="#" class="toggle-menu menu-left push-body jPushMenuBtn">...</a>`
- XPath: `/a[@class="toggle-menu menu-left push-body jPushMenuBtn"]`

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)

**Failure 1:**
- Message: Target has insufficient size
- HTML: `<button type="button" class="agree-button eu-cookie-compliance-secondary-button">Si, acconsento</button>`
- XPath: `/button[@class="agree-button eu-cookie-compliance-secondary-button"]`

**Failure 2:**
- Message: Target has insufficient size
- HTML: `<button type="button" class="decline-button eu-cookie-compliance-default-button">No, non acconsento</button>`
- XPath: `/button[@class="decline-button eu-cookie-compliance-default-button"]`

**Failure 3:**
- Message: Target has insufficient size
- HTML: `<a href="#" class="toggle-menu menu-left push-body jPushMenuBtn">...</a>`
- XPath: `/a[@class="toggle-menu menu-left push-body jPushMenuBtn"]`

**Failure 4:**
- Message: Target has insufficient size
- HTML: `<a href="https://www.governo.it">...</a>`
- XPath: `/a`

#### Rule: [SIA-R2: HTML elements have a valid lang attribute](https://alfa.siteimprove.com/rules/sia-r2)

**Failure 1:**
- Message: The image does not have an accessible name
- HTML: `<img src="https://www.governo.it/sites/governo.it/files/styles/860x600/public/H_IMG_0798.jpg?itok=gEwWwQ8c" />`
- XPath: `/img`

#### Rule: [SIA-R53: Headings follow a logical hierarchy](https://alfa.siteimprove.com/rules/sia-r53)

**Failure 1:**
- Message: The heading skips one or more levels
- HTML: `<h3 class="contacts_footer">Contatti</h3>`
- XPath: `/h3[@class="contacts_footer"]`

#### Rule: [SIA-R57: Landmarks don't repeat the same content](https://alfa.siteimprove.com/rules/sia-r57)

**Failure 1:**
- Message: The text is not included in a landmark region

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 2.27:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R69: Text has sufficient contrast with its background](https://alfa.siteimprove.com/rules/sia-r69)

**Failure 1:**
- Message: The highest possible contrast of the text is 2.27:1 which is         below the required contrast of 4.5:1

#### Rule: [SIA-R72](https://alfa.siteimprove.com/rules/sia-r72)

**Failure 1:**
- Message: The text of the paragraph is uppercased
- HTML: `<p class="menu_under_burger">MENU</p>`
- XPath: `/p[@class="menu_under_burger"]`

#### Rule: [SIA-R73: Text spacing can be adjusted without loss of content](https://alfa.siteimprove.com/rules/sia-r73)

**Failure 1:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p>...</p>`
- XPath: `/p`

**Failure 2:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="menu_under_burger">MENU</p>`
- XPath: `/p[@class="menu_under_burger"]`

**Failure 3:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="nav_social clearfix">...</p>`
- XPath: `/p[@class="nav_social clearfix"]`

**Failure 4:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="h5 dataright">23 Febbraio 2026</p>`
- XPath: `/p[@class="h5 dataright"]`

#### Rule: [SIA-R74](https://alfa.siteimprove.com/rules/sia-r74)

**Failure 1:**
- Message: The font size is specified using an absolute unit
- HTML: `<p>...</p>`
- XPath: `/p`

#### Rule: [SIA-R78: Headings of same level have text content between them](https://alfa.siteimprove.com/rules/sia-r78)

**Failure 1:**
- Message: There is no content between this heading and the next
- HTML: `<h3 class="contacts_footer">Contatti</h3>`
- XPath: `/h3[@class="contacts_footer"]`

#### Rule: [SIA-R83: Text can be resized to 200% without loss of content](https://alfa.siteimprove.com/rules/sia-r83)

**Failure 1:**
- Message: The text is clipped

#### Rule: [SIA-R84](https://alfa.siteimprove.com/rules/sia-r84)

**Failure 1:**
- Message: The scrollable element is not reachable through keyboard navigation
- HTML: `<nav class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left">...</nav>`
- XPath: `/nav[@class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left"]`

### https://governo.it/it/visitare-i-palazzi-istituzionali/prenotazione-visite-guidate/2939

#### Rule: [SIA-R11: Button elements have an accessible name](https://alfa.siteimprove.com/rules/sia-r11)

**Failure 1:**
- Message: The link does not have an accessible name
- HTML: `<a href="#" class="toggle-menu menu-left push-body jPushMenuBtn">...</a>`
- XPath: `/a[@class="toggle-menu menu-left push-body jPushMenuBtn"]`

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)

**Failure 1:**
- Message: Target has insufficient size
- HTML: `<button type="button" class="agree-button eu-cookie-compliance-secondary-button">Si, acconsento</button>`
- XPath: `/button[@class="agree-button eu-cookie-compliance-secondary-button"]`

**Failure 2:**
- Message: Target has insufficient size
- HTML: `<button type="button" class="decline-button eu-cookie-compliance-default-button">No, non acconsento</button>`
- XPath: `/button[@class="decline-button eu-cookie-compliance-default-button"]`

**Failure 3:**
- Message: Target has insufficient size
- HTML: `<a href="#" class="toggle-menu menu-left push-body jPushMenuBtn">...</a>`
- XPath: `/a[@class="toggle-menu menu-left push-body jPushMenuBtn"]`

**Failure 4:**
- Message: Target has insufficient size
- HTML: `<a href="https://www.governo.it">...</a>`
- XPath: `/a`

#### Rule: [SIA-R53: Headings follow a logical hierarchy](https://alfa.siteimprove.com/rules/sia-r53)

**Failure 1:**
- Message: The heading skips one or more levels
- HTML: `<h3 class="contacts_footer">Contatti</h3>`
- XPath: `/h3[@class="contacts_footer"]`

#### Rule: [SIA-R56: Landmarks with the same role are distinguishable](https://alfa.siteimprove.com/rules/sia-r56)

**Failure 1:**
- Message: Some `navigation` have the same name.

#### Rule: [SIA-R57: Landmarks don't repeat the same content](https://alfa.siteimprove.com/rules/sia-r57)

**Failure 1:**
- Message: The text is not included in a landmark region

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 2.27:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R69: Text has sufficient contrast with its background](https://alfa.siteimprove.com/rules/sia-r69)

**Failure 1:**
- Message: The highest possible contrast of the text is 2.27:1 which is         below the required contrast of 4.5:1

#### Rule: [SIA-R72](https://alfa.siteimprove.com/rules/sia-r72)

**Failure 1:**
- Message: The text of the paragraph is uppercased
- HTML: `<p class="menu_under_burger">MENU</p>`
- XPath: `/p[@class="menu_under_burger"]`

#### Rule: [SIA-R73: Text spacing can be adjusted without loss of content](https://alfa.siteimprove.com/rules/sia-r73)

**Failure 1:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p>...</p>`
- XPath: `/p`

**Failure 2:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="menu_under_burger">MENU</p>`
- XPath: `/p[@class="menu_under_burger"]`

**Failure 3:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="nav_social clearfix">...</p>`
- XPath: `/p[@class="nav_social clearfix"]`

#### Rule: [SIA-R74](https://alfa.siteimprove.com/rules/sia-r74)

**Failure 1:**
- Message: The font size is specified using an absolute unit
- HTML: `<p>...</p>`
- XPath: `/p`

#### Rule: [SIA-R78: Headings of same level have text content between them](https://alfa.siteimprove.com/rules/sia-r78)

**Failure 1:**
- Message: There is no content between this heading and the next
- HTML: `<h3 class="contacts_footer">Contatti</h3>`
- XPath: `/h3[@class="contacts_footer"]`

#### Rule: [SIA-R83: Text can be resized to 200% without loss of content](https://alfa.siteimprove.com/rules/sia-r83)

**Failure 1:**
- Message: The text is clipped

#### Rule: [SIA-R84](https://alfa.siteimprove.com/rules/sia-r84)

**Failure 1:**
- Message: The scrollable element is not reachable through keyboard navigation
- HTML: `<nav class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left">...</nav>`
- XPath: `/nav[@class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left"]`

### https://governo.it/it/agenda/2026-03-04t000000/laying-groundwork-jobs-africa/31205

#### Rule: [SIA-R11: Button elements have an accessible name](https://alfa.siteimprove.com/rules/sia-r11)

**Failure 1:**
- Message: The link does not have an accessible name
- HTML: `<a href="#" class="toggle-menu menu-left push-body jPushMenuBtn">...</a>`
- XPath: `/a[@class="toggle-menu menu-left push-body jPushMenuBtn"]`

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)

**Failure 1:**
- Message: Target has insufficient size
- HTML: `<button type="button" class="agree-button eu-cookie-compliance-secondary-button">Si, acconsento</button>`
- XPath: `/button[@class="agree-button eu-cookie-compliance-secondary-button"]`

**Failure 2:**
- Message: Target has insufficient size
- HTML: `<button type="button" class="decline-button eu-cookie-compliance-default-button">No, non acconsento</button>`
- XPath: `/button[@class="decline-button eu-cookie-compliance-default-button"]`

**Failure 3:**
- Message: Target has insufficient size
- HTML: `<a href="#" class="toggle-menu menu-left push-body jPushMenuBtn">...</a>`
- XPath: `/a[@class="toggle-menu menu-left push-body jPushMenuBtn"]`

**Failure 4:**
- Message: Target has insufficient size
- HTML: `<a href="https://www.governo.it">...</a>`
- XPath: `/a`

#### Rule: [SIA-R53: Headings follow a logical hierarchy](https://alfa.siteimprove.com/rules/sia-r53)

**Failure 1:**
- Message: The heading skips one or more levels
- HTML: `<h3 class="contacts_footer">Contatti</h3>`
- XPath: `/h3[@class="contacts_footer"]`

#### Rule: [SIA-R57: Landmarks don't repeat the same content](https://alfa.siteimprove.com/rules/sia-r57)

**Failure 1:**
- Message: The text is not included in a landmark region

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 2.27:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R69: Text has sufficient contrast with its background](https://alfa.siteimprove.com/rules/sia-r69)

**Failure 1:**
- Message: The highest possible contrast of the text is 2.27:1 which is         below the required contrast of 4.5:1

#### Rule: [SIA-R72](https://alfa.siteimprove.com/rules/sia-r72)

**Failure 1:**
- Message: The text of the paragraph is uppercased
- HTML: `<p class="menu_under_burger">MENU</p>`
- XPath: `/p[@class="menu_under_burger"]`

#### Rule: [SIA-R73: Text spacing can be adjusted without loss of content](https://alfa.siteimprove.com/rules/sia-r73)

**Failure 1:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p>...</p>`
- XPath: `/p`

**Failure 2:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="menu_under_burger">MENU</p>`
- XPath: `/p[@class="menu_under_burger"]`

**Failure 3:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="nav_social clearfix">...</p>`
- XPath: `/p[@class="nav_social clearfix"]`

#### Rule: [SIA-R74](https://alfa.siteimprove.com/rules/sia-r74)

**Failure 1:**
- Message: The font size is specified using an absolute unit
- HTML: `<p>...</p>`
- XPath: `/p`

#### Rule: [SIA-R78: Headings of same level have text content between them](https://alfa.siteimprove.com/rules/sia-r78)

**Failure 1:**
- Message: There is no content between this heading and the next
- HTML: `<h3 class="contacts_footer">Contatti</h3>`
- XPath: `/h3[@class="contacts_footer"]`

#### Rule: [SIA-R83: Text can be resized to 200% without loss of content](https://alfa.siteimprove.com/rules/sia-r83)

**Failure 1:**
- Message: The text is clipped

#### Rule: [SIA-R84](https://alfa.siteimprove.com/rules/sia-r84)

**Failure 1:**
- Message: The scrollable element is not reachable through keyboard navigation
- HTML: `<nav class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left">...</nav>`
- XPath: `/nav[@class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left"]`

### https://governo.it/it/piano-mattei

#### Rule: [SIA-R11: Button elements have an accessible name](https://alfa.siteimprove.com/rules/sia-r11)

**Failure 1:**
- Message: The link does not have an accessible name
- HTML: `<a href="#" class="toggle-menu menu-left push-body jPushMenuBtn">...</a>`
- XPath: `/a[@class="toggle-menu menu-left push-body jPushMenuBtn"]`

**Failure 2:**
- Message: The link does not have an accessible name
- HTML: `<a href="#" title="" class="share_buttons_trigger reveal-trigger" tabindex="-1">...</a>`
- XPath: `/a[@class="share_buttons_trigger reveal-trigger"]`

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)

**Failure 1:**
- Message: Target has insufficient size
- HTML: `<button type="button" class="agree-button eu-cookie-compliance-secondary-button">Si, acconsento</button>`
- XPath: `/button[@class="agree-button eu-cookie-compliance-secondary-button"]`

**Failure 2:**
- Message: Target has insufficient size
- HTML: `<button type="button" class="decline-button eu-cookie-compliance-default-button">No, non acconsento</button>`
- XPath: `/button[@class="decline-button eu-cookie-compliance-default-button"]`

**Failure 3:**
- Message: Target has insufficient size
- HTML: `<a href="https://www.governo.it">IT</a>`
- XPath: `/a`

**Failure 4:**
- Message: Target has insufficient size
- HTML: `<a class="eventi eventi_no_active" href="/it/articolo/piano-mattei-lafrica-la-cabina-di-regia/28742">La Cabina di Regia</a>`
- XPath: `/a[@class="eventi eventi_no_active"]`

#### Rule: [SIA-R53: Headings follow a logical hierarchy](https://alfa.siteimprove.com/rules/sia-r53)

**Failure 1:**
- Message: The heading skips one or more levels
- HTML: `<h3 class="contacts_footer">Contatti</h3>`
- XPath: `/h3[@class="contacts_footer"]`

#### Rule: [SIA-R56: Landmarks with the same role are distinguishable](https://alfa.siteimprove.com/rules/sia-r56)

**Failure 1:**
- Message: Some `navigation` have the same name.

#### Rule: [SIA-R57: Landmarks don't repeat the same content](https://alfa.siteimprove.com/rules/sia-r57)

**Failure 1:**
- Message: The text is not included in a landmark region

#### Rule: [SIA-R61](https://alfa.siteimprove.com/rules/sia-r61)

**Failure 1:**
- Message: The document does not start with a level 1 heading

#### Rule: [SIA-R62: Links are visually distinguishable from surrounding text](https://alfa.siteimprove.com/rules/sia-r62)

**Failure 1:**
- Message: The link is not distinguishable from the surrounding text
- HTML: `<a href="/node/24851">Vertice Italia-Africa del 29 gennaio 2024</a>`
- XPath: `/a`

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 2.27:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R69: Text has sufficient contrast with its background](https://alfa.siteimprove.com/rules/sia-r69)

**Failure 1:**
- Message: The highest possible contrast of the text is 2.27:1 which is         below the required contrast of 4.5:1

#### Rule: [SIA-R72](https://alfa.siteimprove.com/rules/sia-r72)

**Failure 1:**
- Message: The text of the paragraph is uppercased
- HTML: `<p class="menu_under_burger">MENU</p>`
- XPath: `/p[@class="menu_under_burger"]`

#### Rule: [SIA-R73: Text spacing can be adjusted without loss of content](https://alfa.siteimprove.com/rules/sia-r73)

**Failure 1:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p>...</p>`
- XPath: `/p`

**Failure 2:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="menu_under_burger">MENU</p>`
- XPath: `/p[@class="menu_under_burger"]`

**Failure 3:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="nav_social clearfix">...</p>`
- XPath: `/p[@class="nav_social clearfix"]`

#### Rule: [SIA-R74](https://alfa.siteimprove.com/rules/sia-r74)

**Failure 1:**
- Message: The font size is specified using an absolute unit
- HTML: `<p>...</p>`
- XPath: `/p`

#### Rule: [SIA-R78: Headings of same level have text content between them](https://alfa.siteimprove.com/rules/sia-r78)

**Failure 1:**
- Message: There is no content between this heading and the next
- HTML: `<h3 class="contacts_footer">Contatti</h3>`
- XPath: `/h3[@class="contacts_footer"]`

#### Rule: [SIA-R83: Text can be resized to 200% without loss of content](https://alfa.siteimprove.com/rules/sia-r83)

**Failure 1:**
- Message: The text is clipped

#### Rule: [SIA-R84](https://alfa.siteimprove.com/rules/sia-r84)

**Failure 1:**
- Message: The scrollable element is not reachable through keyboard navigation
- HTML: `<nav class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left">...</nav>`
- XPath: `/nav[@class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left"]`

### https://governo.it/it/i-ministeri-0

#### Rule: [SIA-R11: Button elements have an accessible name](https://alfa.siteimprove.com/rules/sia-r11)

**Failure 1:**
- Message: The link does not have an accessible name
- HTML: `<a href="#" class="toggle-menu menu-left push-body jPushMenuBtn">...</a>`
- XPath: `/a[@class="toggle-menu menu-left push-body jPushMenuBtn"]`

**Failure 2:**
- Message: The link does not have an accessible name
- HTML: `<a href="mailto:gabinetto.rapportiparlamento@governo.it%20%20%20">...</a>`
- XPath: `/a`

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)

**Failure 1:**
- Message: Target has insufficient size
- HTML: `<button type="button" class="agree-button eu-cookie-compliance-secondary-button">Si, acconsento</button>`
- XPath: `/button[@class="agree-button eu-cookie-compliance-secondary-button"]`

**Failure 2:**
- Message: Target has insufficient size
- HTML: `<button type="button" class="decline-button eu-cookie-compliance-default-button">No, non acconsento</button>`
- XPath: `/button[@class="decline-button eu-cookie-compliance-default-button"]`

**Failure 3:**
- Message: Target has insufficient size
- HTML: `<a href="#" class="toggle-menu menu-left push-body jPushMenuBtn">...</a>`
- XPath: `/a[@class="toggle-menu menu-left push-body jPushMenuBtn"]`

**Failure 4:**
- Message: Target has insufficient size
- HTML: `<a href="https://www.governo.it">...</a>`
- XPath: `/a`

#### Rule: [SIA-R53: Headings follow a logical hierarchy](https://alfa.siteimprove.com/rules/sia-r53)

**Failure 1:**
- Message: The heading skips one or more levels
- HTML: `<h4 class="strong">Presidenza del Consiglio dei Ministri</h4>`
- XPath: `/h4[@class="strong"]`

**Failure 2:**
- Message: The heading skips one or more levels
- HTML: `<h3 class="contacts_footer">Contatti</h3>`
- XPath: `/h3[@class="contacts_footer"]`

#### Rule: [SIA-R57: Landmarks don't repeat the same content](https://alfa.siteimprove.com/rules/sia-r57)

**Failure 1:**
- Message: The text is not included in a landmark region

#### Rule: [SIA-R62: Links are visually distinguishable from surrounding text](https://alfa.siteimprove.com/rules/sia-r62)

**Failure 1:**
- Message: The link is not distinguishable from the surrounding text
- HTML: `<a href="mailto:ministro.affariesteri@cert.esteri.it">ministro.affariesteri@cert.esteri.it</a>`
- XPath: `/a`

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 2.27:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R69: Text has sufficient contrast with its background](https://alfa.siteimprove.com/rules/sia-r69)

**Failure 1:**
- Message: The highest possible contrast of the text is 2.27:1 which is         below the required contrast of 4.5:1

#### Rule: [SIA-R72](https://alfa.siteimprove.com/rules/sia-r72)

**Failure 1:**
- Message: The text of the paragraph is uppercased
- HTML: `<p class="menu_under_burger">MENU</p>`
- XPath: `/p[@class="menu_under_burger"]`

#### Rule: [SIA-R73: Text spacing can be adjusted without loss of content](https://alfa.siteimprove.com/rules/sia-r73)

**Failure 1:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p>...</p>`
- XPath: `/p`

**Failure 2:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="menu_under_burger">MENU</p>`
- XPath: `/p[@class="menu_under_burger"]`

**Failure 3:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="nav_social clearfix">...</p>`
- XPath: `/p[@class="nav_social clearfix"]`

#### Rule: [SIA-R74](https://alfa.siteimprove.com/rules/sia-r74)

**Failure 1:**
- Message: The font size is specified using an absolute unit
- HTML: `<p>...</p>`
- XPath: `/p`

#### Rule: [SIA-R78: Headings of same level have text content between them](https://alfa.siteimprove.com/rules/sia-r78)

**Failure 1:**
- Message: There is no content between this heading and the next
- HTML: `<h3 class="contacts_footer">Contatti</h3>`
- XPath: `/h3[@class="contacts_footer"]`

#### Rule: [SIA-R83: Text can be resized to 200% without loss of content](https://alfa.siteimprove.com/rules/sia-r83)

**Failure 1:**
- Message: The text is clipped

#### Rule: [SIA-R84](https://alfa.siteimprove.com/rules/sia-r84)

**Failure 1:**
- Message: The scrollable element is not reachable through keyboard navigation
- HTML: `<nav class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left">...</nav>`
- XPath: `/nav[@class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left"]`

### https://governo.it/it/media/incontro-con-il-presidente-della-repubblica-di-cipro/31198

#### Rule: [SIA-R11: Button elements have an accessible name](https://alfa.siteimprove.com/rules/sia-r11)

**Failure 1:**
- Message: The link does not have an accessible name
- HTML: `<a href="#" class="toggle-menu menu-left push-body jPushMenuBtn">...</a>`
- XPath: `/a[@class="toggle-menu menu-left push-body jPushMenuBtn"]`

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)

**Failure 1:**
- Message: Target has insufficient size
- HTML: `<button type="button" class="agree-button eu-cookie-compliance-secondary-button">Si, acconsento</button>`
- XPath: `/button[@class="agree-button eu-cookie-compliance-secondary-button"]`

**Failure 2:**
- Message: Target has insufficient size
- HTML: `<button type="button" class="decline-button eu-cookie-compliance-default-button">No, non acconsento</button>`
- XPath: `/button[@class="decline-button eu-cookie-compliance-default-button"]`

**Failure 3:**
- Message: Target has insufficient size
- HTML: `<a href="https://www.governo.it">IT</a>`
- XPath: `/a`

#### Rule: [SIA-R13](https://alfa.siteimprove.com/rules/sia-r13)

**Failure 1:**
- Message: The `<iframe>` does not have an accessible name
- HTML: `<iframe class="" width="640" height="360" src="//www.youtube-nocookie.com/embed/A0AMOjcy9LE?width%3D640%26amp%3Bheight%3D360%26amp%3Btheme%3Ddark%26amp%3Bautoplay%3D0%26amp%3Bvq%3Dlarge%26amp%3Brel%3D0%26amp%3Bshowinfo%3D1%26amp%3Bmodestbranding%3D0%26amp%3Biv_load_policy%3D1%26amp%3Bcontrols%3D1%26amp%3Bautohide%3D2%26amp%3Bwmode%3Dopaque" frameborder="0" allowfullscreen="" />`
- XPath: `/iframe`

#### Rule: [SIA-R53: Headings follow a logical hierarchy](https://alfa.siteimprove.com/rules/sia-r53)

**Failure 1:**
- Message: The heading skips one or more levels
- HTML: `<h3 class="contacts_footer">Contatti</h3>`
- XPath: `/h3[@class="contacts_footer"]`

#### Rule: [SIA-R57: Landmarks don't repeat the same content](https://alfa.siteimprove.com/rules/sia-r57)

**Failure 1:**
- Message: The text is not included in a landmark region

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 2.27:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R69: Text has sufficient contrast with its background](https://alfa.siteimprove.com/rules/sia-r69)

**Failure 1:**
- Message: The highest possible contrast of the text is 2.27:1 which is         below the required contrast of 4.5:1

#### Rule: [SIA-R72](https://alfa.siteimprove.com/rules/sia-r72)

**Failure 1:**
- Message: The text of the paragraph is uppercased
- HTML: `<p class="menu_under_burger">MENU</p>`
- XPath: `/p[@class="menu_under_burger"]`

#### Rule: [SIA-R73: Text spacing can be adjusted without loss of content](https://alfa.siteimprove.com/rules/sia-r73)

**Failure 1:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p>...</p>`
- XPath: `/p`

**Failure 2:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="menu_under_burger">MENU</p>`
- XPath: `/p[@class="menu_under_burger"]`

**Failure 3:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="nav_social clearfix">...</p>`
- XPath: `/p[@class="nav_social clearfix"]`

#### Rule: [SIA-R74](https://alfa.siteimprove.com/rules/sia-r74)

**Failure 1:**
- Message: The font size is specified using an absolute unit
- HTML: `<p>...</p>`
- XPath: `/p`

#### Rule: [SIA-R78: Headings of same level have text content between them](https://alfa.siteimprove.com/rules/sia-r78)

**Failure 1:**
- Message: There is no content between this heading and the next
- HTML: `<h3 class="contacts_footer">Contatti</h3>`
- XPath: `/h3[@class="contacts_footer"]`

#### Rule: [SIA-R83: Text can be resized to 200% without loss of content](https://alfa.siteimprove.com/rules/sia-r83)

**Failure 1:**
- Message: The text is clipped

#### Rule: [SIA-R84](https://alfa.siteimprove.com/rules/sia-r84)

**Failure 1:**
- Message: The scrollable element is not reachable through keyboard navigation
- HTML: `<nav class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left">...</nav>`
- XPath: `/nav[@class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left"]`

### https://governo.it/it/articolo/consiglio-dei-ministri-n-163/31194

#### Rule: [SIA-R11: Button elements have an accessible name](https://alfa.siteimprove.com/rules/sia-r11)

**Failure 1:**
- Message: The link does not have an accessible name
- HTML: `<a href="#" class="toggle-menu menu-left push-body jPushMenuBtn">...</a>`
- XPath: `/a[@class="toggle-menu menu-left push-body jPushMenuBtn"]`

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)

**Failure 1:**
- Message: Target has insufficient size
- HTML: `<button type="button" class="agree-button eu-cookie-compliance-secondary-button">Si, acconsento</button>`
- XPath: `/button[@class="agree-button eu-cookie-compliance-secondary-button"]`

**Failure 2:**
- Message: Target has insufficient size
- HTML: `<button type="button" class="decline-button eu-cookie-compliance-default-button">No, non acconsento</button>`
- XPath: `/button[@class="decline-button eu-cookie-compliance-default-button"]`

**Failure 3:**
- Message: Target has insufficient size
- HTML: `<a href="#" class="toggle-menu menu-left push-body jPushMenuBtn">...</a>`
- XPath: `/a[@class="toggle-menu menu-left push-body jPushMenuBtn"]`

**Failure 4:**
- Message: Target has insufficient size
- HTML: `<a href="https://www.governo.it">...</a>`
- XPath: `/a`

#### Rule: [SIA-R2: HTML elements have a valid lang attribute](https://alfa.siteimprove.com/rules/sia-r2)

**Failure 1:**
- Message: The image does not have an accessible name
- HTML: `<img src="https://www.governo.it/sites/governo.it/files/styles/860x600/public/palazzo_chigi_22_6.jpg?itok=_mAwl-Yw" />`
- XPath: `/img`

#### Rule: [SIA-R53: Headings follow a logical hierarchy](https://alfa.siteimprove.com/rules/sia-r53)

**Failure 1:**
- Message: The heading skips one or more levels
- HTML: `<h3 class="contacts_footer">Contatti</h3>`
- XPath: `/h3[@class="contacts_footer"]`

#### Rule: [SIA-R57: Landmarks don't repeat the same content](https://alfa.siteimprove.com/rules/sia-r57)

**Failure 1:**
- Message: The text is not included in a landmark region

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 2.27:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R69: Text has sufficient contrast with its background](https://alfa.siteimprove.com/rules/sia-r69)

**Failure 1:**
- Message: The highest possible contrast of the text is 2.27:1 which is         below the required contrast of 4.5:1

#### Rule: [SIA-R72](https://alfa.siteimprove.com/rules/sia-r72)

**Failure 1:**
- Message: The text of the paragraph is uppercased
- HTML: `<p class="menu_under_burger">MENU</p>`
- XPath: `/p[@class="menu_under_burger"]`

#### Rule: [SIA-R73: Text spacing can be adjusted without loss of content](https://alfa.siteimprove.com/rules/sia-r73)

**Failure 1:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p>...</p>`
- XPath: `/p`

**Failure 2:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="menu_under_burger">MENU</p>`
- XPath: `/p[@class="menu_under_burger"]`

**Failure 3:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="nav_social clearfix">...</p>`
- XPath: `/p[@class="nav_social clearfix"]`

**Failure 4:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="h5 dataright">26 Febbraio 2026</p>`
- XPath: `/p[@class="h5 dataright"]`

#### Rule: [SIA-R74](https://alfa.siteimprove.com/rules/sia-r74)

**Failure 1:**
- Message: The font size is specified using an absolute unit
- HTML: `<p>...</p>`
- XPath: `/p`

#### Rule: [SIA-R78: Headings of same level have text content between them](https://alfa.siteimprove.com/rules/sia-r78)

**Failure 1:**
- Message: There is no content between this heading and the next
- HTML: `<h3 class="contacts_footer">Contatti</h3>`
- XPath: `/h3[@class="contacts_footer"]`

#### Rule: [SIA-R83: Text can be resized to 200% without loss of content](https://alfa.siteimprove.com/rules/sia-r83)

**Failure 1:**
- Message: The text is clipped

#### Rule: [SIA-R84](https://alfa.siteimprove.com/rules/sia-r84)

**Failure 1:**
- Message: The scrollable element is not reachable through keyboard navigation
- HTML: `<nav class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left">...</nav>`
- XPath: `/nav[@class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left"]`

### https://governo.it/it/ministri-e-sottosegretari

#### Rule: [SIA-R11: Button elements have an accessible name](https://alfa.siteimprove.com/rules/sia-r11)

**Failure 1:**
- Message: The link does not have an accessible name
- HTML: `<a href="#" class="toggle-menu menu-left push-body jPushMenuBtn">...</a>`
- XPath: `/a[@class="toggle-menu menu-left push-body jPushMenuBtn"]`

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)

**Failure 1:**
- Message: Target has insufficient size
- HTML: `<button type="button" class="agree-button eu-cookie-compliance-secondary-button">Si, acconsento</button>`
- XPath: `/button[@class="agree-button eu-cookie-compliance-secondary-button"]`

**Failure 2:**
- Message: Target has insufficient size
- HTML: `<button type="button" class="decline-button eu-cookie-compliance-default-button">No, non acconsento</button>`
- XPath: `/button[@class="decline-button eu-cookie-compliance-default-button"]`

**Failure 3:**
- Message: Target has insufficient size
- HTML: `<a href="#" class="toggle-menu menu-left push-body jPushMenuBtn">...</a>`
- XPath: `/a[@class="toggle-menu menu-left push-body jPushMenuBtn"]`

**Failure 4:**
- Message: Target has insufficient size
- HTML: `<a href="https://www.governo.it">...</a>`
- XPath: `/a`

#### Rule: [SIA-R53: Headings follow a logical hierarchy](https://alfa.siteimprove.com/rules/sia-r53)

**Failure 1:**
- Message: The heading skips one or more levels
- HTML: `<h4>Presidente del Consiglio dei Ministri</h4>`
- XPath: `/h4`

**Failure 2:**
- Message: The heading skips one or more levels
- HTML: `<h3 style="margin-bottom: 0px;">Ministro per i Rapporti con il Parlamento</h3>`
- XPath: `/h3`

**Failure 3:**
- Message: The heading skips one or more levels
- HTML: `<h3 class="contacts_footer">Contatti</h3>`
- XPath: `/h3[@class="contacts_footer"]`

#### Rule: [SIA-R57: Landmarks don't repeat the same content](https://alfa.siteimprove.com/rules/sia-r57)

**Failure 1:**
- Message: The text is not included in a landmark region

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 2.27:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R69: Text has sufficient contrast with its background](https://alfa.siteimprove.com/rules/sia-r69)

**Failure 1:**
- Message: The highest possible contrast of the text is 2.27:1 which is         below the required contrast of 4.5:1

#### Rule: [SIA-R72](https://alfa.siteimprove.com/rules/sia-r72)

**Failure 1:**
- Message: The text of the paragraph is uppercased
- HTML: `<p class="menu_under_burger">MENU</p>`
- XPath: `/p[@class="menu_under_burger"]`

#### Rule: [SIA-R73: Text spacing can be adjusted without loss of content](https://alfa.siteimprove.com/rules/sia-r73)

**Failure 1:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p>...</p>`
- XPath: `/p`

**Failure 2:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="menu_under_burger">MENU</p>`
- XPath: `/p[@class="menu_under_burger"]`

**Failure 3:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="nav_social clearfix">...</p>`
- XPath: `/p[@class="nav_social clearfix"]`

#### Rule: [SIA-R74](https://alfa.siteimprove.com/rules/sia-r74)

**Failure 1:**
- Message: The font size is specified using an absolute unit
- HTML: `<p>...</p>`
- XPath: `/p`

#### Rule: [SIA-R78: Headings of same level have text content between them](https://alfa.siteimprove.com/rules/sia-r78)

**Failure 1:**
- Message: There is no content between this heading and the next
- HTML: `<h3>Vice Presidente</h3>`
- XPath: `/h3`

**Failure 2:**
- Message: There is no content between this heading and the next
- HTML: `<h3 class="contacts_footer">Contatti</h3>`
- XPath: `/h3[@class="contacts_footer"]`

#### Rule: [SIA-R83: Text can be resized to 200% without loss of content](https://alfa.siteimprove.com/rules/sia-r83)

**Failure 1:**
- Message: The text is clipped

#### Rule: [SIA-R84](https://alfa.siteimprove.com/rules/sia-r84)

**Failure 1:**
- Message: The scrollable element is not reachable through keyboard navigation
- HTML: `<nav class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left">...</nav>`
- XPath: `/nav[@class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left"]`

### https://governo.it/it/articolo/tre-anni-di-governo-meloni-tre-anni-di-risultati-e-traguardi-l-italia/30114

#### Rule: [SIA-R11: Button elements have an accessible name](https://alfa.siteimprove.com/rules/sia-r11)

**Failure 1:**
- Message: The link does not have an accessible name
- HTML: `<a href="#" class="toggle-menu menu-left push-body jPushMenuBtn">...</a>`
- XPath: `/a[@class="toggle-menu menu-left push-body jPushMenuBtn"]`

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)

**Failure 1:**
- Message: Target has insufficient size
- HTML: `<button type="button" class="agree-button eu-cookie-compliance-secondary-button">Si, acconsento</button>`
- XPath: `/button[@class="agree-button eu-cookie-compliance-secondary-button"]`

**Failure 2:**
- Message: Target has insufficient size
- HTML: `<button type="button" class="decline-button eu-cookie-compliance-default-button">No, non acconsento</button>`
- XPath: `/button[@class="decline-button eu-cookie-compliance-default-button"]`

**Failure 3:**
- Message: Target has insufficient size
- HTML: `<a href="https://www.governo.it">IT</a>`
- XPath: `/a`

#### Rule: [SIA-R2: HTML elements have a valid lang attribute](https://alfa.siteimprove.com/rules/sia-r2)

**Failure 1:**
- Message: The image does not have an accessible name
- HTML: `<img src="https://www.governo.it/sites/governo.it/files/styles/860x600/public/notizia-3-anni.png?itok=pqAVElsr" />`
- XPath: `/img`

#### Rule: [SIA-R53: Headings follow a logical hierarchy](https://alfa.siteimprove.com/rules/sia-r53)

**Failure 1:**
- Message: The heading skips one or more levels
- HTML: `<h3 class="contacts_footer">Contatti</h3>`
- XPath: `/h3[@class="contacts_footer"]`

#### Rule: [SIA-R57: Landmarks don't repeat the same content](https://alfa.siteimprove.com/rules/sia-r57)

**Failure 1:**
- Message: The text is not included in a landmark region

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 2.27:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R69: Text has sufficient contrast with its background](https://alfa.siteimprove.com/rules/sia-r69)

**Failure 1:**
- Message: The highest possible contrast of the text is 2.27:1 which is         below the required contrast of 4.5:1

#### Rule: [SIA-R72](https://alfa.siteimprove.com/rules/sia-r72)

**Failure 1:**
- Message: The text of the paragraph is uppercased
- HTML: `<p class="menu_under_burger">MENU</p>`
- XPath: `/p[@class="menu_under_burger"]`

#### Rule: [SIA-R73: Text spacing can be adjusted without loss of content](https://alfa.siteimprove.com/rules/sia-r73)

**Failure 1:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p>...</p>`
- XPath: `/p`

**Failure 2:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="menu_under_burger">MENU</p>`
- XPath: `/p[@class="menu_under_burger"]`

**Failure 3:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="nav_social clearfix">...</p>`
- XPath: `/p[@class="nav_social clearfix"]`

**Failure 4:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="h5 dataright">22 Ottobre 2025</p>`
- XPath: `/p[@class="h5 dataright"]`

#### Rule: [SIA-R74](https://alfa.siteimprove.com/rules/sia-r74)

**Failure 1:**
- Message: The font size is specified using an absolute unit
- HTML: `<p>...</p>`
- XPath: `/p`

#### Rule: [SIA-R78: Headings of same level have text content between them](https://alfa.siteimprove.com/rules/sia-r78)

**Failure 1:**
- Message: There is no content between this heading and the next
- HTML: `<h3 class="contacts_footer">Contatti</h3>`
- XPath: `/h3[@class="contacts_footer"]`

#### Rule: [SIA-R83: Text can be resized to 200% without loss of content](https://alfa.siteimprove.com/rules/sia-r83)

**Failure 1:**
- Message: The text is clipped

#### Rule: [SIA-R84](https://alfa.siteimprove.com/rules/sia-r84)

**Failure 1:**
- Message: The scrollable element is not reachable through keyboard navigation
- HTML: `<nav class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left">...</nav>`
- XPath: `/nav[@class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left"]`

### https://governo.it/it/costituzione-italiana/principi-fondamentali/2839

#### Rule: [SIA-R11: Button elements have an accessible name](https://alfa.siteimprove.com/rules/sia-r11)

**Failure 1:**
- Message: The link does not have an accessible name
- HTML: `<a href="#" class="toggle-menu menu-left push-body jPushMenuBtn">...</a>`
- XPath: `/a[@class="toggle-menu menu-left push-body jPushMenuBtn"]`

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)

**Failure 1:**
- Message: Target has insufficient size
- HTML: `<button type="button" class="agree-button eu-cookie-compliance-secondary-button">Si, acconsento</button>`
- XPath: `/button[@class="agree-button eu-cookie-compliance-secondary-button"]`

**Failure 2:**
- Message: Target has insufficient size
- HTML: `<button type="button" class="decline-button eu-cookie-compliance-default-button">No, non acconsento</button>`
- XPath: `/button[@class="decline-button eu-cookie-compliance-default-button"]`

**Failure 3:**
- Message: Target has insufficient size
- HTML: `<a href="#" class="toggle-menu menu-left push-body jPushMenuBtn">...</a>`
- XPath: `/a[@class="toggle-menu menu-left push-body jPushMenuBtn"]`

**Failure 4:**
- Message: Target has insufficient size
- HTML: `<a href="https://www.governo.it">...</a>`
- XPath: `/a`

#### Rule: [SIA-R53: Headings follow a logical hierarchy](https://alfa.siteimprove.com/rules/sia-r53)

**Failure 1:**
- Message: The heading skips one or more levels
- HTML: `<h3 class="contacts_footer">Contatti</h3>`
- XPath: `/h3[@class="contacts_footer"]`

#### Rule: [SIA-R56: Landmarks with the same role are distinguishable](https://alfa.siteimprove.com/rules/sia-r56)

**Failure 1:**
- Message: Some `navigation` have the same name.

#### Rule: [SIA-R57: Landmarks don't repeat the same content](https://alfa.siteimprove.com/rules/sia-r57)

**Failure 1:**
- Message: The text is not included in a landmark region

#### Rule: [SIA-R62: Links are visually distinguishable from surrounding text](https://alfa.siteimprove.com/rules/sia-r62)

**Failure 1:**
- Message: The link is not distinguishable from the surrounding text
- HTML: `<a href="#1" title="leggi la nota n.2">1</a>`
- XPath: `/a`

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 2.27:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R69: Text has sufficient contrast with its background](https://alfa.siteimprove.com/rules/sia-r69)

**Failure 1:**
- Message: The highest possible contrast of the text is 2.27:1 which is         below the required contrast of 4.5:1

#### Rule: [SIA-R72](https://alfa.siteimprove.com/rules/sia-r72)

**Failure 1:**
- Message: The text of the paragraph is uppercased
- HTML: `<p class="menu_under_burger">MENU</p>`
- XPath: `/p[@class="menu_under_burger"]`

#### Rule: [SIA-R73: Text spacing can be adjusted without loss of content](https://alfa.siteimprove.com/rules/sia-r73)

**Failure 1:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p>...</p>`
- XPath: `/p`

**Failure 2:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="menu_under_burger">MENU</p>`
- XPath: `/p[@class="menu_under_burger"]`

**Failure 3:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="nav_social clearfix">...</p>`
- XPath: `/p[@class="nav_social clearfix"]`

#### Rule: [SIA-R74](https://alfa.siteimprove.com/rules/sia-r74)

**Failure 1:**
- Message: The font size is specified using an absolute unit
- HTML: `<p>...</p>`
- XPath: `/p`

#### Rule: [SIA-R78: Headings of same level have text content between them](https://alfa.siteimprove.com/rules/sia-r78)

**Failure 1:**
- Message: There is no content between this heading and the next
- HTML: `<h3 class="contacts_footer">Contatti</h3>`
- XPath: `/h3[@class="contacts_footer"]`

#### Rule: [SIA-R83: Text can be resized to 200% without loss of content](https://alfa.siteimprove.com/rules/sia-r83)

**Failure 1:**
- Message: The text is clipped

#### Rule: [SIA-R84](https://alfa.siteimprove.com/rules/sia-r84)

**Failure 1:**
- Message: The scrollable element is not reachable through keyboard navigation
- HTML: `<nav class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left">...</nav>`
- XPath: `/nav[@class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left"]`

### https://governo.it/it/media/corinaldo-incontro-con-i-familiari-delle-vittime-palazzo-chigi/31211

#### Rule: [SIA-R11: Button elements have an accessible name](https://alfa.siteimprove.com/rules/sia-r11)

**Failure 1:**
- Message: The link does not have an accessible name
- HTML: `<a href="#" class="toggle-menu menu-left push-body jPushMenuBtn">...</a>`
- XPath: `/a[@class="toggle-menu menu-left push-body jPushMenuBtn"]`

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)

**Failure 1:**
- Message: Target has insufficient size
- HTML: `<button type="button" class="agree-button eu-cookie-compliance-secondary-button">Si, acconsento</button>`
- XPath: `/button[@class="agree-button eu-cookie-compliance-secondary-button"]`

**Failure 2:**
- Message: Target has insufficient size
- HTML: `<button type="button" class="decline-button eu-cookie-compliance-default-button">No, non acconsento</button>`
- XPath: `/button[@class="decline-button eu-cookie-compliance-default-button"]`

**Failure 3:**
- Message: Target has insufficient size
- HTML: `<a href="#" class="toggle-menu menu-left push-body jPushMenuBtn">...</a>`
- XPath: `/a[@class="toggle-menu menu-left push-body jPushMenuBtn"]`

**Failure 4:**
- Message: Target has insufficient size
- HTML: `<a href="https://www.governo.it">IT</a>`
- XPath: `/a`

#### Rule: [SIA-R53: Headings follow a logical hierarchy](https://alfa.siteimprove.com/rules/sia-r53)

**Failure 1:**
- Message: The heading skips one or more levels
- HTML: `<h3 class="contacts_footer">Contatti</h3>`
- XPath: `/h3[@class="contacts_footer"]`

#### Rule: [SIA-R57: Landmarks don't repeat the same content](https://alfa.siteimprove.com/rules/sia-r57)

**Failure 1:**
- Message: The text is not included in a landmark region

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 2.27:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R69: Text has sufficient contrast with its background](https://alfa.siteimprove.com/rules/sia-r69)

**Failure 1:**
- Message: The highest possible contrast of the text is 2.27:1 which is         below the required contrast of 4.5:1

#### Rule: [SIA-R72](https://alfa.siteimprove.com/rules/sia-r72)

**Failure 1:**
- Message: The text of the paragraph is uppercased
- HTML: `<p class="menu_under_burger">MENU</p>`
- XPath: `/p[@class="menu_under_burger"]`

#### Rule: [SIA-R73: Text spacing can be adjusted without loss of content](https://alfa.siteimprove.com/rules/sia-r73)

**Failure 1:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p>...</p>`
- XPath: `/p`

**Failure 2:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="menu_under_burger">MENU</p>`
- XPath: `/p[@class="menu_under_burger"]`

**Failure 3:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="nav_social clearfix">...</p>`
- XPath: `/p[@class="nav_social clearfix"]`

#### Rule: [SIA-R74](https://alfa.siteimprove.com/rules/sia-r74)

**Failure 1:**
- Message: The font size is specified using an absolute unit
- HTML: `<p>...</p>`
- XPath: `/p`

#### Rule: [SIA-R78: Headings of same level have text content between them](https://alfa.siteimprove.com/rules/sia-r78)

**Failure 1:**
- Message: There is no content between this heading and the next
- HTML: `<h3 class="contacts_footer">Contatti</h3>`
- XPath: `/h3[@class="contacts_footer"]`

#### Rule: [SIA-R83: Text can be resized to 200% without loss of content](https://alfa.siteimprove.com/rules/sia-r83)

**Failure 1:**
- Message: The text is clipped

#### Rule: [SIA-R84](https://alfa.siteimprove.com/rules/sia-r84)

**Failure 1:**
- Message: The scrollable element is not reachable through keyboard navigation
- HTML: `<nav class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left">...</nav>`
- XPath: `/nav[@class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left"]`

### https://governo.it/it/agenda/2026-03-06t000000/cerimonia-di-apertura-dei-giochi-paralimpici-invernali-di-milano-cortina

#### Rule: [SIA-R11: Button elements have an accessible name](https://alfa.siteimprove.com/rules/sia-r11)

**Failure 1:**
- Message: The link does not have an accessible name
- HTML: `<a href="#" class="toggle-menu menu-left push-body jPushMenuBtn">...</a>`
- XPath: `/a[@class="toggle-menu menu-left push-body jPushMenuBtn"]`

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)

**Failure 1:**
- Message: Target has insufficient size
- HTML: `<button type="button" class="agree-button eu-cookie-compliance-secondary-button">Si, acconsento</button>`
- XPath: `/button[@class="agree-button eu-cookie-compliance-secondary-button"]`

**Failure 2:**
- Message: Target has insufficient size
- HTML: `<button type="button" class="decline-button eu-cookie-compliance-default-button">No, non acconsento</button>`
- XPath: `/button[@class="decline-button eu-cookie-compliance-default-button"]`

**Failure 3:**
- Message: Target has insufficient size
- HTML: `<a href="#" class="toggle-menu menu-left push-body jPushMenuBtn">...</a>`
- XPath: `/a[@class="toggle-menu menu-left push-body jPushMenuBtn"]`

**Failure 4:**
- Message: Target has insufficient size
- HTML: `<a href="https://www.governo.it">...</a>`
- XPath: `/a`

#### Rule: [SIA-R53: Headings follow a logical hierarchy](https://alfa.siteimprove.com/rules/sia-r53)

**Failure 1:**
- Message: The heading skips one or more levels
- HTML: `<h3 class="contacts_footer">Contatti</h3>`
- XPath: `/h3[@class="contacts_footer"]`

#### Rule: [SIA-R57: Landmarks don't repeat the same content](https://alfa.siteimprove.com/rules/sia-r57)

**Failure 1:**
- Message: The text is not included in a landmark region

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 2.27:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R69: Text has sufficient contrast with its background](https://alfa.siteimprove.com/rules/sia-r69)

**Failure 1:**
- Message: The highest possible contrast of the text is 2.27:1 which is         below the required contrast of 4.5:1

#### Rule: [SIA-R72](https://alfa.siteimprove.com/rules/sia-r72)

**Failure 1:**
- Message: The text of the paragraph is uppercased
- HTML: `<p class="menu_under_burger">MENU</p>`
- XPath: `/p[@class="menu_under_burger"]`

#### Rule: [SIA-R73: Text spacing can be adjusted without loss of content](https://alfa.siteimprove.com/rules/sia-r73)

**Failure 1:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p>...</p>`
- XPath: `/p`

**Failure 2:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="menu_under_burger">MENU</p>`
- XPath: `/p[@class="menu_under_burger"]`

**Failure 3:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="nav_social clearfix">...</p>`
- XPath: `/p[@class="nav_social clearfix"]`

#### Rule: [SIA-R74](https://alfa.siteimprove.com/rules/sia-r74)

**Failure 1:**
- Message: The font size is specified using an absolute unit
- HTML: `<p>...</p>`
- XPath: `/p`

#### Rule: [SIA-R78: Headings of same level have text content between them](https://alfa.siteimprove.com/rules/sia-r78)

**Failure 1:**
- Message: There is no content between this heading and the next
- HTML: `<h3 class="contacts_footer">Contatti</h3>`
- XPath: `/h3[@class="contacts_footer"]`

#### Rule: [SIA-R83: Text can be resized to 200% without loss of content](https://alfa.siteimprove.com/rules/sia-r83)

**Failure 1:**
- Message: The text is clipped

#### Rule: [SIA-R84](https://alfa.siteimprove.com/rules/sia-r84)

**Failure 1:**
- Message: The scrollable element is not reachable through keyboard navigation
- HTML: `<nav class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left">...</nav>`
- XPath: `/nav[@class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left"]`

### https://governo.it/it/media/giorno-del-ricordo-dal-10-febbraio-al-1-marzo-2026-la-3a-edizione-del-treno-del-ricordo/31177

#### Rule: [SIA-R11: Button elements have an accessible name](https://alfa.siteimprove.com/rules/sia-r11)

**Failure 1:**
- Message: The link does not have an accessible name
- HTML: `<a href="#" class="toggle-menu menu-left push-body jPushMenuBtn">...</a>`
- XPath: `/a[@class="toggle-menu menu-left push-body jPushMenuBtn"]`

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)

**Failure 1:**
- Message: Target has insufficient size
- HTML: `<a href="#" class="toggle-menu menu-left push-body jPushMenuBtn">...</a>`
- XPath: `/a[@class="toggle-menu menu-left push-body jPushMenuBtn"]`

**Failure 2:**
- Message: Target has insufficient size
- HTML: `<a href="https://www.governo.it">...</a>`
- XPath: `/a`

#### Rule: [SIA-R53: Headings follow a logical hierarchy](https://alfa.siteimprove.com/rules/sia-r53)

**Failure 1:**
- Message: The heading skips one or more levels
- HTML: `<h3 class="contacts_footer">Contatti</h3>`
- XPath: `/h3[@class="contacts_footer"]`

#### Rule: [SIA-R57: Landmarks don't repeat the same content](https://alfa.siteimprove.com/rules/sia-r57)

**Failure 1:**
- Message: The text is not included in a landmark region

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 2.27:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R69: Text has sufficient contrast with its background](https://alfa.siteimprove.com/rules/sia-r69)

**Failure 1:**
- Message: The highest possible contrast of the text is 2.27:1 which is         below the required contrast of 4.5:1

#### Rule: [SIA-R72](https://alfa.siteimprove.com/rules/sia-r72)

**Failure 1:**
- Message: The text of the paragraph is uppercased
- HTML: `<p class="menu_under_burger">MENU</p>`
- XPath: `/p[@class="menu_under_burger"]`

#### Rule: [SIA-R73: Text spacing can be adjusted without loss of content](https://alfa.siteimprove.com/rules/sia-r73)

**Failure 1:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p>...</p>`
- XPath: `/p`

**Failure 2:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="menu_under_burger">MENU</p>`
- XPath: `/p[@class="menu_under_burger"]`

**Failure 3:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="nav_social clearfix">...</p>`
- XPath: `/p[@class="nav_social clearfix"]`

#### Rule: [SIA-R74](https://alfa.siteimprove.com/rules/sia-r74)

**Failure 1:**
- Message: The font size is specified using an absolute unit
- HTML: `<p>...</p>`
- XPath: `/p`

#### Rule: [SIA-R78: Headings of same level have text content between them](https://alfa.siteimprove.com/rules/sia-r78)

**Failure 1:**
- Message: There is no content between this heading and the next
- HTML: `<h3 class="contacts_footer">Contatti</h3>`
- XPath: `/h3[@class="contacts_footer"]`

#### Rule: [SIA-R83: Text can be resized to 200% without loss of content](https://alfa.siteimprove.com/rules/sia-r83)

**Failure 1:**
- Message: The text is clipped

#### Rule: [SIA-R84](https://alfa.siteimprove.com/rules/sia-r84)

**Failure 1:**
- Message: The scrollable element is not reachable through keyboard navigation
- HTML: `<nav class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left">...</nav>`
- XPath: `/nav[@class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left"]`

### https://governo.it/it/media/cerimonia-di-chiusura-dei-giochi-olimpici-invernali-di-milano-cortina-2026/31175

#### Rule: [SIA-R11: Button elements have an accessible name](https://alfa.siteimprove.com/rules/sia-r11)

**Failure 1:**
- Message: The link does not have an accessible name
- HTML: `<a href="#" class="toggle-menu menu-left push-body jPushMenuBtn">...</a>`
- XPath: `/a[@class="toggle-menu menu-left push-body jPushMenuBtn"]`

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)

**Failure 1:**
- Message: Target has insufficient size
- HTML: `<a href="#" class="toggle-menu menu-left push-body jPushMenuBtn">...</a>`
- XPath: `/a[@class="toggle-menu menu-left push-body jPushMenuBtn"]`

**Failure 2:**
- Message: Target has insufficient size
- HTML: `<a href="https://www.governo.it">...</a>`
- XPath: `/a`

#### Rule: [SIA-R53: Headings follow a logical hierarchy](https://alfa.siteimprove.com/rules/sia-r53)

**Failure 1:**
- Message: The heading skips one or more levels
- HTML: `<h3 class="contacts_footer">Contatti</h3>`
- XPath: `/h3[@class="contacts_footer"]`

#### Rule: [SIA-R57: Landmarks don't repeat the same content](https://alfa.siteimprove.com/rules/sia-r57)

**Failure 1:**
- Message: The text is not included in a landmark region

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 2.27:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R69: Text has sufficient contrast with its background](https://alfa.siteimprove.com/rules/sia-r69)

**Failure 1:**
- Message: The highest possible contrast of the text is 2.27:1 which is         below the required contrast of 4.5:1

#### Rule: [SIA-R72](https://alfa.siteimprove.com/rules/sia-r72)

**Failure 1:**
- Message: The text of the paragraph is uppercased
- HTML: `<p class="menu_under_burger">MENU</p>`
- XPath: `/p[@class="menu_under_burger"]`

#### Rule: [SIA-R73: Text spacing can be adjusted without loss of content](https://alfa.siteimprove.com/rules/sia-r73)

**Failure 1:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p>...</p>`
- XPath: `/p`

**Failure 2:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="menu_under_burger">MENU</p>`
- XPath: `/p[@class="menu_under_burger"]`

**Failure 3:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="nav_social clearfix">...</p>`
- XPath: `/p[@class="nav_social clearfix"]`

#### Rule: [SIA-R74](https://alfa.siteimprove.com/rules/sia-r74)

**Failure 1:**
- Message: The font size is specified using an absolute unit
- HTML: `<p>...</p>`
- XPath: `/p`

#### Rule: [SIA-R78: Headings of same level have text content between them](https://alfa.siteimprove.com/rules/sia-r78)

**Failure 1:**
- Message: There is no content between this heading and the next
- HTML: `<h3 class="contacts_footer">Contatti</h3>`
- XPath: `/h3[@class="contacts_footer"]`

#### Rule: [SIA-R83: Text can be resized to 200% without loss of content](https://alfa.siteimprove.com/rules/sia-r83)

**Failure 1:**
- Message: The text is clipped

#### Rule: [SIA-R84](https://alfa.siteimprove.com/rules/sia-r84)

**Failure 1:**
- Message: The scrollable element is not reachable through keyboard navigation
- HTML: `<nav class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left">...</nav>`
- XPath: `/nav[@class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left"]`

### https://governo.it/it/il-governo

#### Rule: [SIA-R11: Button elements have an accessible name](https://alfa.siteimprove.com/rules/sia-r11)

**Failure 1:**
- Message: The link does not have an accessible name
- HTML: `<a href="#" class="toggle-menu menu-left push-body jPushMenuBtn">...</a>`
- XPath: `/a[@class="toggle-menu menu-left push-body jPushMenuBtn"]`

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)

**Failure 1:**
- Message: Target has insufficient size
- HTML: `<a href="#" class="toggle-menu menu-left push-body jPushMenuBtn">...</a>`
- XPath: `/a[@class="toggle-menu menu-left push-body jPushMenuBtn"]`

**Failure 2:**
- Message: Target has insufficient size
- HTML: `<a href="https://www.governo.it">...</a>`
- XPath: `/a`

**Failure 3:**
- Message: Target has insufficient size
- HTML: `<a href="/it/il-governo" title="" class="active-trail active">Il Governo</a>`
- XPath: `/a[@class="active-trail active"]`

#### Rule: [SIA-R53: Headings follow a logical hierarchy](https://alfa.siteimprove.com/rules/sia-r53)

**Failure 1:**
- Message: The heading skips one or more levels
- HTML: `<h5>...</h5>`
- XPath: `/h5`

**Failure 2:**
- Message: The heading skips one or more levels
- HTML: `<h3 class="contacts_footer">Contatti</h3>`
- XPath: `/h3[@class="contacts_footer"]`

#### Rule: [SIA-R56: Landmarks with the same role are distinguishable](https://alfa.siteimprove.com/rules/sia-r56)

**Failure 1:**
- Message: Some `navigation` have the same name.

#### Rule: [SIA-R57: Landmarks don't repeat the same content](https://alfa.siteimprove.com/rules/sia-r57)

**Failure 1:**
- Message: The text is not included in a landmark region

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 2.27:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R69: Text has sufficient contrast with its background](https://alfa.siteimprove.com/rules/sia-r69)

**Failure 1:**
- Message: The highest possible contrast of the text is 2.27:1 which is         below the required contrast of 4.5:1

#### Rule: [SIA-R72](https://alfa.siteimprove.com/rules/sia-r72)

**Failure 1:**
- Message: The text of the paragraph is uppercased
- HTML: `<p class="menu_under_burger">MENU</p>`
- XPath: `/p[@class="menu_under_burger"]`

#### Rule: [SIA-R73: Text spacing can be adjusted without loss of content](https://alfa.siteimprove.com/rules/sia-r73)

**Failure 1:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p>...</p>`
- XPath: `/p`

**Failure 2:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="menu_under_burger">MENU</p>`
- XPath: `/p[@class="menu_under_burger"]`

**Failure 3:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="nav_social clearfix">...</p>`
- XPath: `/p[@class="nav_social clearfix"]`

**Failure 4:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="h3 pull-right">...</p>`
- XPath: `/p[@class="h3 pull-right"]`

#### Rule: [SIA-R74](https://alfa.siteimprove.com/rules/sia-r74)

**Failure 1:**
- Message: The font size is specified using an absolute unit
- HTML: `<p>...</p>`
- XPath: `/p`

#### Rule: [SIA-R78: Headings of same level have text content between them](https://alfa.siteimprove.com/rules/sia-r78)

**Failure 1:**
- Message: There is no content between this heading and the next
- HTML: `<h3>Piano Mattei per l’Africa, riunione cabina di regi...</h3>`
- XPath: `/h3`

**Failure 2:**
- Message: There is no content between this heading and the next
- HTML: `<h3 class="contacts_footer">Contatti</h3>`
- XPath: `/h3[@class="contacts_footer"]`

#### Rule: [SIA-R83: Text can be resized to 200% without loss of content](https://alfa.siteimprove.com/rules/sia-r83)

**Failure 1:**
- Message: The text is clipped

#### Rule: [SIA-R84](https://alfa.siteimprove.com/rules/sia-r84)

**Failure 1:**
- Message: The scrollable element is not reachable through keyboard navigation
- HTML: `<nav class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left">...</nav>`
- XPath: `/nav[@class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left"]`

### https://governo.it/it/agenda/2026-02-27t000000/voto-alle-donne/31206

#### Rule: [SIA-R11: Button elements have an accessible name](https://alfa.siteimprove.com/rules/sia-r11)

**Failure 1:**
- Message: The link does not have an accessible name
- HTML: `<a href="#" class="toggle-menu menu-left push-body jPushMenuBtn">...</a>`
- XPath: `/a[@class="toggle-menu menu-left push-body jPushMenuBtn"]`

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)

**Failure 1:**
- Message: Target has insufficient size
- HTML: `<button type="button" class="agree-button eu-cookie-compliance-secondary-button">Si, acconsento</button>`
- XPath: `/button[@class="agree-button eu-cookie-compliance-secondary-button"]`

**Failure 2:**
- Message: Target has insufficient size
- HTML: `<button type="button" class="decline-button eu-cookie-compliance-default-button">No, non acconsento</button>`
- XPath: `/button[@class="decline-button eu-cookie-compliance-default-button"]`

**Failure 3:**
- Message: Target has insufficient size
- HTML: `<a href="#" class="toggle-menu menu-left push-body jPushMenuBtn">...</a>`
- XPath: `/a[@class="toggle-menu menu-left push-body jPushMenuBtn"]`

**Failure 4:**
- Message: Target has insufficient size
- HTML: `<a href="https://www.governo.it">...</a>`
- XPath: `/a`

#### Rule: [SIA-R53: Headings follow a logical hierarchy](https://alfa.siteimprove.com/rules/sia-r53)

**Failure 1:**
- Message: The heading skips one or more levels
- HTML: `<h3 class="contacts_footer">Contatti</h3>`
- XPath: `/h3[@class="contacts_footer"]`

#### Rule: [SIA-R57: Landmarks don't repeat the same content](https://alfa.siteimprove.com/rules/sia-r57)

**Failure 1:**
- Message: The text is not included in a landmark region

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 2.27:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R69: Text has sufficient contrast with its background](https://alfa.siteimprove.com/rules/sia-r69)

**Failure 1:**
- Message: The highest possible contrast of the text is 2.27:1 which is         below the required contrast of 4.5:1

#### Rule: [SIA-R72](https://alfa.siteimprove.com/rules/sia-r72)

**Failure 1:**
- Message: The text of the paragraph is uppercased
- HTML: `<p class="menu_under_burger">MENU</p>`
- XPath: `/p[@class="menu_under_burger"]`

#### Rule: [SIA-R73: Text spacing can be adjusted without loss of content](https://alfa.siteimprove.com/rules/sia-r73)

**Failure 1:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p>...</p>`
- XPath: `/p`

**Failure 2:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="menu_under_burger">MENU</p>`
- XPath: `/p[@class="menu_under_burger"]`

**Failure 3:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="nav_social clearfix">...</p>`
- XPath: `/p[@class="nav_social clearfix"]`

#### Rule: [SIA-R74](https://alfa.siteimprove.com/rules/sia-r74)

**Failure 1:**
- Message: The font size is specified using an absolute unit
- HTML: `<p>...</p>`
- XPath: `/p`

#### Rule: [SIA-R78: Headings of same level have text content between them](https://alfa.siteimprove.com/rules/sia-r78)

**Failure 1:**
- Message: There is no content between this heading and the next
- HTML: `<h3 class="contacts_footer">Contatti</h3>`
- XPath: `/h3[@class="contacts_footer"]`

#### Rule: [SIA-R83: Text can be resized to 200% without loss of content](https://alfa.siteimprove.com/rules/sia-r83)

**Failure 1:**
- Message: The text is clipped

#### Rule: [SIA-R84](https://alfa.siteimprove.com/rules/sia-r84)

**Failure 1:**
- Message: The scrollable element is not reachable through keyboard navigation
- HTML: `<nav class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left">...</nav>`
- XPath: `/nav[@class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left"]`

### https://governo.it/it/media/riunione-della-coalizione-dei-volenterosi/31181

#### Rule: [SIA-R11: Button elements have an accessible name](https://alfa.siteimprove.com/rules/sia-r11)

**Failure 1:**
- Message: The link does not have an accessible name
- HTML: `<a href="#" class="toggle-menu menu-left push-body jPushMenuBtn">...</a>`
- XPath: `/a[@class="toggle-menu menu-left push-body jPushMenuBtn"]`

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)

**Failure 1:**
- Message: Target has insufficient size
- HTML: `<button type="button" class="agree-button eu-cookie-compliance-secondary-button">Si, acconsento</button>`
- XPath: `/button[@class="agree-button eu-cookie-compliance-secondary-button"]`

**Failure 2:**
- Message: Target has insufficient size
- HTML: `<button type="button" class="decline-button eu-cookie-compliance-default-button">No, non acconsento</button>`
- XPath: `/button[@class="decline-button eu-cookie-compliance-default-button"]`

**Failure 3:**
- Message: Target has insufficient size
- HTML: `<a href="#" class="toggle-menu menu-left push-body jPushMenuBtn">...</a>`
- XPath: `/a[@class="toggle-menu menu-left push-body jPushMenuBtn"]`

**Failure 4:**
- Message: Target has insufficient size
- HTML: `<a href="https://www.governo.it">...</a>`
- XPath: `/a`

#### Rule: [SIA-R113](https://alfa.siteimprove.com/rules/sia-r113)

**Failure 1:**
- Message: Target has insufficient size and spacing
- HTML: `<a href="https://www.governo.it">...</a>`
- XPath: `/a`

#### Rule: [SIA-R53: Headings follow a logical hierarchy](https://alfa.siteimprove.com/rules/sia-r53)

**Failure 1:**
- Message: The heading skips one or more levels
- HTML: `<h3 class="contacts_footer">Contatti</h3>`
- XPath: `/h3[@class="contacts_footer"]`

#### Rule: [SIA-R57: Landmarks don't repeat the same content](https://alfa.siteimprove.com/rules/sia-r57)

**Failure 1:**
- Message: The text is not included in a landmark region

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 2.27:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R69: Text has sufficient contrast with its background](https://alfa.siteimprove.com/rules/sia-r69)

**Failure 1:**
- Message: The highest possible contrast of the text is 2.27:1 which is         below the required contrast of 4.5:1

#### Rule: [SIA-R72](https://alfa.siteimprove.com/rules/sia-r72)

**Failure 1:**
- Message: The text of the paragraph is uppercased
- HTML: `<p class="menu_under_burger">MENU</p>`
- XPath: `/p[@class="menu_under_burger"]`

#### Rule: [SIA-R73: Text spacing can be adjusted without loss of content](https://alfa.siteimprove.com/rules/sia-r73)

**Failure 1:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p>...</p>`
- XPath: `/p`

**Failure 2:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="menu_under_burger">MENU</p>`
- XPath: `/p[@class="menu_under_burger"]`

**Failure 3:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="nav_social clearfix">...</p>`
- XPath: `/p[@class="nav_social clearfix"]`

#### Rule: [SIA-R74](https://alfa.siteimprove.com/rules/sia-r74)

**Failure 1:**
- Message: The font size is specified using an absolute unit
- HTML: `<p>...</p>`
- XPath: `/p`

#### Rule: [SIA-R78: Headings of same level have text content between them](https://alfa.siteimprove.com/rules/sia-r78)

**Failure 1:**
- Message: There is no content between this heading and the next
- HTML: `<h3 class="contacts_footer">Contatti</h3>`
- XPath: `/h3[@class="contacts_footer"]`

#### Rule: [SIA-R83: Text can be resized to 200% without loss of content](https://alfa.siteimprove.com/rules/sia-r83)

**Failure 1:**
- Message: The text is clipped

#### Rule: [SIA-R84](https://alfa.siteimprove.com/rules/sia-r84)

**Failure 1:**
- Message: The scrollable element is not reachable through keyboard navigation
- HTML: `<nav class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left">...</nav>`
- XPath: `/nav[@class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left"]`

### https://governo.it/it/media/incontro-con-il-presidente-della-repubblica-di-cipro/31200

#### Rule: [SIA-R11: Button elements have an accessible name](https://alfa.siteimprove.com/rules/sia-r11)

**Failure 1:**
- Message: The link does not have an accessible name
- HTML: `<a href="#" class="toggle-menu menu-left push-body jPushMenuBtn">...</a>`
- XPath: `/a[@class="toggle-menu menu-left push-body jPushMenuBtn"]`

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)

**Failure 1:**
- Message: Target has insufficient size
- HTML: `<button type="button" class="agree-button eu-cookie-compliance-secondary-button">Si, acconsento</button>`
- XPath: `/button[@class="agree-button eu-cookie-compliance-secondary-button"]`

**Failure 2:**
- Message: Target has insufficient size
- HTML: `<button type="button" class="decline-button eu-cookie-compliance-default-button">No, non acconsento</button>`
- XPath: `/button[@class="decline-button eu-cookie-compliance-default-button"]`

**Failure 3:**
- Message: Target has insufficient size
- HTML: `<a href="#" class="toggle-menu menu-left push-body jPushMenuBtn">...</a>`
- XPath: `/a[@class="toggle-menu menu-left push-body jPushMenuBtn"]`

**Failure 4:**
- Message: Target has insufficient size
- HTML: `<a href="https://www.governo.it">...</a>`
- XPath: `/a`

#### Rule: [SIA-R53: Headings follow a logical hierarchy](https://alfa.siteimprove.com/rules/sia-r53)

**Failure 1:**
- Message: The heading skips one or more levels
- HTML: `<h3 class="contacts_footer">Contatti</h3>`
- XPath: `/h3[@class="contacts_footer"]`

#### Rule: [SIA-R57: Landmarks don't repeat the same content](https://alfa.siteimprove.com/rules/sia-r57)

**Failure 1:**
- Message: The text is not included in a landmark region

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 2.27:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R69: Text has sufficient contrast with its background](https://alfa.siteimprove.com/rules/sia-r69)

**Failure 1:**
- Message: The highest possible contrast of the text is 2.27:1 which is         below the required contrast of 4.5:1

#### Rule: [SIA-R72](https://alfa.siteimprove.com/rules/sia-r72)

**Failure 1:**
- Message: The text of the paragraph is uppercased
- HTML: `<p class="menu_under_burger">MENU</p>`
- XPath: `/p[@class="menu_under_burger"]`

#### Rule: [SIA-R73: Text spacing can be adjusted without loss of content](https://alfa.siteimprove.com/rules/sia-r73)

**Failure 1:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p>...</p>`
- XPath: `/p`

**Failure 2:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="menu_under_burger">MENU</p>`
- XPath: `/p[@class="menu_under_burger"]`

**Failure 3:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="nav_social clearfix">...</p>`
- XPath: `/p[@class="nav_social clearfix"]`

#### Rule: [SIA-R74](https://alfa.siteimprove.com/rules/sia-r74)

**Failure 1:**
- Message: The font size is specified using an absolute unit
- HTML: `<p>...</p>`
- XPath: `/p`

#### Rule: [SIA-R78: Headings of same level have text content between them](https://alfa.siteimprove.com/rules/sia-r78)

**Failure 1:**
- Message: There is no content between this heading and the next
- HTML: `<h3 class="contacts_footer">Contatti</h3>`
- XPath: `/h3[@class="contacts_footer"]`

#### Rule: [SIA-R83: Text can be resized to 200% without loss of content](https://alfa.siteimprove.com/rules/sia-r83)

**Failure 1:**
- Message: The text is clipped

#### Rule: [SIA-R84](https://alfa.siteimprove.com/rules/sia-r84)

**Failure 1:**
- Message: The scrollable element is not reachable through keyboard navigation
- HTML: `<nav class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left">...</nav>`
- XPath: `/nav[@class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left"]`

### https://governo.it/it/il-governo-funzioni-struttura-e-storia/la-struttura-del-governo/185

#### Rule: [SIA-R11: Button elements have an accessible name](https://alfa.siteimprove.com/rules/sia-r11)

**Failure 1:**
- Message: The link does not have an accessible name
- HTML: `<a href="#" class="toggle-menu menu-left push-body jPushMenuBtn">...</a>`
- XPath: `/a[@class="toggle-menu menu-left push-body jPushMenuBtn"]`

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)

**Failure 1:**
- Message: Target has insufficient size
- HTML: `<button type="button" class="agree-button eu-cookie-compliance-secondary-button">Si, acconsento</button>`
- XPath: `/button[@class="agree-button eu-cookie-compliance-secondary-button"]`

**Failure 2:**
- Message: Target has insufficient size
- HTML: `<button type="button" class="decline-button eu-cookie-compliance-default-button">No, non acconsento</button>`
- XPath: `/button[@class="decline-button eu-cookie-compliance-default-button"]`

**Failure 3:**
- Message: Target has insufficient size
- HTML: `<a href="#" class="toggle-menu menu-left push-body jPushMenuBtn">...</a>`
- XPath: `/a[@class="toggle-menu menu-left push-body jPushMenuBtn"]`

**Failure 4:**
- Message: Target has insufficient size
- HTML: `<a href="https://www.governo.it">...</a>`
- XPath: `/a`

#### Rule: [SIA-R53: Headings follow a logical hierarchy](https://alfa.siteimprove.com/rules/sia-r53)

**Failure 1:**
- Message: The heading skips one or more levels
- HTML: `<h3 class="contacts_footer">Contatti</h3>`
- XPath: `/h3[@class="contacts_footer"]`

#### Rule: [SIA-R56: Landmarks with the same role are distinguishable](https://alfa.siteimprove.com/rules/sia-r56)

**Failure 1:**
- Message: Some `navigation` have the same name.

#### Rule: [SIA-R57: Landmarks don't repeat the same content](https://alfa.siteimprove.com/rules/sia-r57)

**Failure 1:**
- Message: The text is not included in a landmark region

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 2.27:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R69: Text has sufficient contrast with its background](https://alfa.siteimprove.com/rules/sia-r69)

**Failure 1:**
- Message: The highest possible contrast of the text is 2.27:1 which is         below the required contrast of 4.5:1

#### Rule: [SIA-R72](https://alfa.siteimprove.com/rules/sia-r72)

**Failure 1:**
- Message: The text of the paragraph is uppercased
- HTML: `<p class="menu_under_burger">MENU</p>`
- XPath: `/p[@class="menu_under_burger"]`

#### Rule: [SIA-R73: Text spacing can be adjusted without loss of content](https://alfa.siteimprove.com/rules/sia-r73)

**Failure 1:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p>...</p>`
- XPath: `/p`

**Failure 2:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="menu_under_burger">MENU</p>`
- XPath: `/p[@class="menu_under_burger"]`

**Failure 3:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="nav_social clearfix">...</p>`
- XPath: `/p[@class="nav_social clearfix"]`

#### Rule: [SIA-R74](https://alfa.siteimprove.com/rules/sia-r74)

**Failure 1:**
- Message: The font size is specified using an absolute unit
- HTML: `<p>...</p>`
- XPath: `/p`

#### Rule: [SIA-R78: Headings of same level have text content between them](https://alfa.siteimprove.com/rules/sia-r78)

**Failure 1:**
- Message: There is no content between this heading and the next
- HTML: `<h3 class="contacts_footer">Contatti</h3>`
- XPath: `/h3[@class="contacts_footer"]`

#### Rule: [SIA-R83: Text can be resized to 200% without loss of content](https://alfa.siteimprove.com/rules/sia-r83)

**Failure 1:**
- Message: The text is clipped

#### Rule: [SIA-R84](https://alfa.siteimprove.com/rules/sia-r84)

**Failure 1:**
- Message: The scrollable element is not reachable through keyboard navigation
- HTML: `<nav class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left">...</nav>`
- XPath: `/nav[@class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left"]`

### https://governo.it/it/privacy-policy

#### Rule: [SIA-R11: Button elements have an accessible name](https://alfa.siteimprove.com/rules/sia-r11)

**Failure 1:**
- Message: The link does not have an accessible name
- HTML: `<a href="#" class="toggle-menu menu-left push-body jPushMenuBtn">...</a>`
- XPath: `/a[@class="toggle-menu menu-left push-body jPushMenuBtn"]`

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)

**Failure 1:**
- Message: Target has insufficient size
- HTML: `<button type="button" class="agree-button eu-cookie-compliance-secondary-button">Si, acconsento</button>`
- XPath: `/button[@class="agree-button eu-cookie-compliance-secondary-button"]`

**Failure 2:**
- Message: Target has insufficient size
- HTML: `<button type="button" class="decline-button eu-cookie-compliance-default-button">No, non acconsento</button>`
- XPath: `/button[@class="decline-button eu-cookie-compliance-default-button"]`

**Failure 3:**
- Message: Target has insufficient size
- HTML: `<a href="#" class="toggle-menu menu-left push-body jPushMenuBtn">...</a>`
- XPath: `/a[@class="toggle-menu menu-left push-body jPushMenuBtn"]`

**Failure 4:**
- Message: Target has insufficient size
- HTML: `<a href="https://www.governo.it">...</a>`
- XPath: `/a`

**Failure 5:**
- Message: Target has insufficient size
- HTML: `<a href="/it/privacy-policy" title="" class="active-trail active">Privacy policy</a>`
- XPath: `/a[@class="active-trail active"]`

#### Rule: [SIA-R53: Headings follow a logical hierarchy](https://alfa.siteimprove.com/rules/sia-r53)

**Failure 1:**
- Message: The heading skips one or more levels
- HTML: `<h3 class="contacts_footer">Contatti</h3>`
- XPath: `/h3[@class="contacts_footer"]`

#### Rule: [SIA-R57: Landmarks don't repeat the same content](https://alfa.siteimprove.com/rules/sia-r57)

**Failure 1:**
- Message: The text is not included in a landmark region

#### Rule: [SIA-R62: Links are visually distinguishable from surrounding text](https://alfa.siteimprove.com/rules/sia-r62)

**Failure 1:**
- Message: The link is not distinguishable from the surrounding text
- HTML: `<a href="mailto:responsabileprotezionedatipcm@governo.it">responsabileprotezionedatipcm@governo.it</a>`
- XPath: `/a`

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 2.27:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R69: Text has sufficient contrast with its background](https://alfa.siteimprove.com/rules/sia-r69)

**Failure 1:**
- Message: The highest possible contrast of the text is 2.27:1 which is         below the required contrast of 4.5:1

#### Rule: [SIA-R72](https://alfa.siteimprove.com/rules/sia-r72)

**Failure 1:**
- Message: The text of the paragraph is uppercased
- HTML: `<p class="menu_under_burger">MENU</p>`
- XPath: `/p[@class="menu_under_burger"]`

#### Rule: [SIA-R73: Text spacing can be adjusted without loss of content](https://alfa.siteimprove.com/rules/sia-r73)

**Failure 1:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p>...</p>`
- XPath: `/p`

**Failure 2:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="menu_under_burger">MENU</p>`
- XPath: `/p[@class="menu_under_burger"]`

**Failure 3:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="nav_social clearfix">...</p>`
- XPath: `/p[@class="nav_social clearfix"]`

#### Rule: [SIA-R74](https://alfa.siteimprove.com/rules/sia-r74)

**Failure 1:**
- Message: The font size is specified using an absolute unit
- HTML: `<p>...</p>`
- XPath: `/p`

#### Rule: [SIA-R78: Headings of same level have text content between them](https://alfa.siteimprove.com/rules/sia-r78)

**Failure 1:**
- Message: There is no content between this heading and the next
- HTML: `<h3 class="contacts_footer">Contatti</h3>`
- XPath: `/h3[@class="contacts_footer"]`

#### Rule: [SIA-R83: Text can be resized to 200% without loss of content](https://alfa.siteimprove.com/rules/sia-r83)

**Failure 1:**
- Message: The text is clipped

#### Rule: [SIA-R84](https://alfa.siteimprove.com/rules/sia-r84)

**Failure 1:**
- Message: The scrollable element is not reachable through keyboard navigation
- HTML: `<nav class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left">...</nav>`
- XPath: `/nav[@class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left"]`

### https://governo.it/it/tipologie-contenuto/consiglio-dei-ministri

#### Rule: [SIA-R11: Button elements have an accessible name](https://alfa.siteimprove.com/rules/sia-r11)

**Failure 1:**
- Message: The link does not have an accessible name
- HTML: `<a href="#" class="toggle-menu menu-left push-body jPushMenuBtn">...</a>`
- XPath: `/a[@class="toggle-menu menu-left push-body jPushMenuBtn"]`

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)

**Failure 1:**
- Message: Target has insufficient size
- HTML: `<button type="button" class="agree-button eu-cookie-compliance-secondary-button">Si, acconsento</button>`
- XPath: `/button[@class="agree-button eu-cookie-compliance-secondary-button"]`

**Failure 2:**
- Message: Target has insufficient size
- HTML: `<button type="button" class="decline-button eu-cookie-compliance-default-button">No, non acconsento</button>`
- XPath: `/button[@class="decline-button eu-cookie-compliance-default-button"]`

**Failure 3:**
- Message: Target has insufficient size
- HTML: `<a href="#" class="toggle-menu menu-left push-body jPushMenuBtn">...</a>`
- XPath: `/a[@class="toggle-menu menu-left push-body jPushMenuBtn"]`

**Failure 4:**
- Message: Target has insufficient size
- HTML: `<a href="https://www.governo.it">...</a>`
- XPath: `/a`

#### Rule: [SIA-R113](https://alfa.siteimprove.com/rules/sia-r113)

**Failure 1:**
- Message: Target has insufficient size and spacing
- HTML: `<a title="Vai a pagina 2" href="/it/tipologie-contenuto/consiglio-dei-ministri?page=1">2</a>`
- XPath: `/a`

#### Rule: [SIA-R53: Headings follow a logical hierarchy](https://alfa.siteimprove.com/rules/sia-r53)

**Failure 1:**
- Message: The heading skips one or more levels
- HTML: `<h3 class="h4">...</h3>`
- XPath: `/h3[@class="h4"]`

**Failure 2:**
- Message: The heading skips one or more levels
- HTML: `<h3 class="contacts_footer">Contatti</h3>`
- XPath: `/h3[@class="contacts_footer"]`

#### Rule: [SIA-R57: Landmarks don't repeat the same content](https://alfa.siteimprove.com/rules/sia-r57)

**Failure 1:**
- Message: The text is not included in a landmark region

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 2.27:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R69: Text has sufficient contrast with its background](https://alfa.siteimprove.com/rules/sia-r69)

**Failure 1:**
- Message: The highest possible contrast of the text is 2.27:1 which is         below the required contrast of 4.5:1

#### Rule: [SIA-R72](https://alfa.siteimprove.com/rules/sia-r72)

**Failure 1:**
- Message: The text of the paragraph is uppercased
- HTML: `<p class="menu_under_burger">MENU</p>`
- XPath: `/p[@class="menu_under_burger"]`

#### Rule: [SIA-R73: Text spacing can be adjusted without loss of content](https://alfa.siteimprove.com/rules/sia-r73)

**Failure 1:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p>...</p>`
- XPath: `/p`

**Failure 2:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="menu_under_burger">MENU</p>`
- XPath: `/p[@class="menu_under_burger"]`

**Failure 3:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="nav_social clearfix">...</p>`
- XPath: `/p[@class="nav_social clearfix"]`

**Failure 4:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="h4 text-center" style="word-wrap: break-word; margin-left: 30%; padding-top: 1.5%;">...</p>`
- XPath: `/p[@class="h4 text-center"]`

**Failure 5:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="h5">10 Marzo 2026</p>`
- XPath: `/p[@class="h5"]`

#### Rule: [SIA-R74](https://alfa.siteimprove.com/rules/sia-r74)

**Failure 1:**
- Message: The font size is specified using an absolute unit
- HTML: `<p>...</p>`
- XPath: `/p`

#### Rule: [SIA-R78: Headings of same level have text content between them](https://alfa.siteimprove.com/rules/sia-r78)

**Failure 1:**
- Message: There is no content between this heading and the next
- HTML: `<h3 class="contacts_footer">Contatti</h3>`
- XPath: `/h3[@class="contacts_footer"]`

#### Rule: [SIA-R84](https://alfa.siteimprove.com/rules/sia-r84)

**Failure 1:**
- Message: The scrollable element is not reachable through keyboard navigation
- HTML: `<nav class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left">...</nav>`
- XPath: `/nav[@class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left"]`

### https://governo.it/it/i-governi-dal-1943-ad-oggi/i-governi-nelle-legislature/192

#### Rule: [SIA-R11: Button elements have an accessible name](https://alfa.siteimprove.com/rules/sia-r11)

**Failure 1:**
- Message: The link does not have an accessible name
- HTML: `<a href="#" class="toggle-menu menu-left push-body jPushMenuBtn">...</a>`
- XPath: `/a[@class="toggle-menu menu-left push-body jPushMenuBtn"]`

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)

**Failure 1:**
- Message: Target has insufficient size
- HTML: `<button type="button" class="agree-button eu-cookie-compliance-secondary-button">Si, acconsento</button>`
- XPath: `/button[@class="agree-button eu-cookie-compliance-secondary-button"]`

**Failure 2:**
- Message: Target has insufficient size
- HTML: `<button type="button" class="decline-button eu-cookie-compliance-default-button">No, non acconsento</button>`
- XPath: `/button[@class="decline-button eu-cookie-compliance-default-button"]`

**Failure 3:**
- Message: Target has insufficient size
- HTML: `<a href="#" class="toggle-menu menu-left push-body jPushMenuBtn">...</a>`
- XPath: `/a[@class="toggle-menu menu-left push-body jPushMenuBtn"]`

**Failure 4:**
- Message: Target has insufficient size
- HTML: `<a href="https://www.governo.it">...</a>`
- XPath: `/a`

#### Rule: [SIA-R53: Headings follow a logical hierarchy](https://alfa.siteimprove.com/rules/sia-r53)

**Failure 1:**
- Message: The heading skips one or more levels
- HTML: `<h3 class="contacts_footer">Contatti</h3>`
- XPath: `/h3[@class="contacts_footer"]`

#### Rule: [SIA-R56: Landmarks with the same role are distinguishable](https://alfa.siteimprove.com/rules/sia-r56)

**Failure 1:**
- Message: Some `navigation` have the same name.

#### Rule: [SIA-R57: Landmarks don't repeat the same content](https://alfa.siteimprove.com/rules/sia-r57)

**Failure 1:**
- Message: The text is not included in a landmark region

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 2.27:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R69: Text has sufficient contrast with its background](https://alfa.siteimprove.com/rules/sia-r69)

**Failure 1:**
- Message: The highest possible contrast of the text is 2.27:1 which is         below the required contrast of 4.5:1

#### Rule: [SIA-R72](https://alfa.siteimprove.com/rules/sia-r72)

**Failure 1:**
- Message: The text of the paragraph is uppercased
- HTML: `<p class="menu_under_burger">MENU</p>`
- XPath: `/p[@class="menu_under_burger"]`

#### Rule: [SIA-R73: Text spacing can be adjusted without loss of content](https://alfa.siteimprove.com/rules/sia-r73)

**Failure 1:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p>...</p>`
- XPath: `/p`

**Failure 2:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="menu_under_burger">MENU</p>`
- XPath: `/p[@class="menu_under_burger"]`

**Failure 3:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="nav_social clearfix">...</p>`
- XPath: `/p[@class="nav_social clearfix"]`

#### Rule: [SIA-R74](https://alfa.siteimprove.com/rules/sia-r74)

**Failure 1:**
- Message: The font size is specified using an absolute unit
- HTML: `<p>...</p>`
- XPath: `/p`

#### Rule: [SIA-R78: Headings of same level have text content between them](https://alfa.siteimprove.com/rules/sia-r78)

**Failure 1:**
- Message: There is no content between this heading and the next
- HTML: `<h3 class="contacts_footer">Contatti</h3>`
- XPath: `/h3[@class="contacts_footer"]`

#### Rule: [SIA-R83: Text can be resized to 200% without loss of content](https://alfa.siteimprove.com/rules/sia-r83)

**Failure 1:**
- Message: The text is clipped

#### Rule: [SIA-R84](https://alfa.siteimprove.com/rules/sia-r84)

**Failure 1:**
- Message: The scrollable element is not reachable through keyboard navigation
- HTML: `<nav class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left">...</nav>`
- XPath: `/nav[@class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left"]`

### https://governo.it/it/note-legali

#### Rule: [SIA-R11: Button elements have an accessible name](https://alfa.siteimprove.com/rules/sia-r11)

**Failure 1:**
- Message: The link does not have an accessible name
- HTML: `<a href="#" class="toggle-menu menu-left push-body jPushMenuBtn">...</a>`
- XPath: `/a[@class="toggle-menu menu-left push-body jPushMenuBtn"]`

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)

**Failure 1:**
- Message: Target has insufficient size
- HTML: `<button type="button" class="agree-button eu-cookie-compliance-secondary-button">Si, acconsento</button>`
- XPath: `/button[@class="agree-button eu-cookie-compliance-secondary-button"]`

**Failure 2:**
- Message: Target has insufficient size
- HTML: `<button type="button" class="decline-button eu-cookie-compliance-default-button">No, non acconsento</button>`
- XPath: `/button[@class="decline-button eu-cookie-compliance-default-button"]`

**Failure 3:**
- Message: Target has insufficient size
- HTML: `<a href="#" class="toggle-menu menu-left push-body jPushMenuBtn">...</a>`
- XPath: `/a[@class="toggle-menu menu-left push-body jPushMenuBtn"]`

**Failure 4:**
- Message: Target has insufficient size
- HTML: `<a href="https://www.governo.it">...</a>`
- XPath: `/a`

**Failure 5:**
- Message: Target has insufficient size
- HTML: `<a href="/it/note-legali" title="" class="active-trail active">Note legali</a>`
- XPath: `/a[@class="active-trail active"]`

#### Rule: [SIA-R113](https://alfa.siteimprove.com/rules/sia-r113)

**Failure 1:**
- Message: Target has insufficient size and spacing
- HTML: `<a href="https://www.governo.it">...</a>`
- XPath: `/a`

#### Rule: [SIA-R53: Headings follow a logical hierarchy](https://alfa.siteimprove.com/rules/sia-r53)

**Failure 1:**
- Message: The heading skips one or more levels
- HTML: `<h3 class="contacts_footer">Contatti</h3>`
- XPath: `/h3[@class="contacts_footer"]`

#### Rule: [SIA-R57: Landmarks don't repeat the same content](https://alfa.siteimprove.com/rules/sia-r57)

**Failure 1:**
- Message: The text is not included in a landmark region

#### Rule: [SIA-R62: Links are visually distinguishable from surrounding text](https://alfa.siteimprove.com/rules/sia-r62)

**Failure 1:**
- Message: The link is not distinguishable from the surrounding text
- HTML: `<a href="https://www.governo.it/privacy-policy">Informativa sulla Privacy</a>`
- XPath: `/a`

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 2.27:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R69: Text has sufficient contrast with its background](https://alfa.siteimprove.com/rules/sia-r69)

**Failure 1:**
- Message: The highest possible contrast of the text is 2.27:1 which is         below the required contrast of 4.5:1

#### Rule: [SIA-R72](https://alfa.siteimprove.com/rules/sia-r72)

**Failure 1:**
- Message: The text of the paragraph is uppercased
- HTML: `<p class="menu_under_burger">MENU</p>`
- XPath: `/p[@class="menu_under_burger"]`

#### Rule: [SIA-R73: Text spacing can be adjusted without loss of content](https://alfa.siteimprove.com/rules/sia-r73)

**Failure 1:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p>...</p>`
- XPath: `/p`

**Failure 2:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="menu_under_burger">MENU</p>`
- XPath: `/p[@class="menu_under_burger"]`

**Failure 3:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="nav_social clearfix">...</p>`
- XPath: `/p[@class="nav_social clearfix"]`

#### Rule: [SIA-R74](https://alfa.siteimprove.com/rules/sia-r74)

**Failure 1:**
- Message: The font size is specified using an absolute unit
- HTML: `<p>...</p>`
- XPath: `/p`

#### Rule: [SIA-R78: Headings of same level have text content between them](https://alfa.siteimprove.com/rules/sia-r78)

**Failure 1:**
- Message: There is no content between this heading and the next
- HTML: `<h3 class="contacts_footer">Contatti</h3>`
- XPath: `/h3[@class="contacts_footer"]`

#### Rule: [SIA-R83: Text can be resized to 200% without loss of content](https://alfa.siteimprove.com/rules/sia-r83)

**Failure 1:**
- Message: The text is clipped

#### Rule: [SIA-R84](https://alfa.siteimprove.com/rules/sia-r84)

**Failure 1:**
- Message: The scrollable element is not reachable through keyboard navigation
- HTML: `<nav class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left">...</nav>`
- XPath: `/nav[@class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left"]`

### https://governo.it/it/agenda/2026-03-04t000000/incontro-con-il-ministro-degli-esteri-degli-emirati-arabi-uniti/31207

#### Rule: [SIA-R11: Button elements have an accessible name](https://alfa.siteimprove.com/rules/sia-r11)

**Failure 1:**
- Message: The link does not have an accessible name
- HTML: `<a href="#" class="toggle-menu menu-left push-body jPushMenuBtn">...</a>`
- XPath: `/a[@class="toggle-menu menu-left push-body jPushMenuBtn"]`

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)

**Failure 1:**
- Message: Target has insufficient size
- HTML: `<button type="button" class="agree-button eu-cookie-compliance-secondary-button">Si, acconsento</button>`
- XPath: `/button[@class="agree-button eu-cookie-compliance-secondary-button"]`

**Failure 2:**
- Message: Target has insufficient size
- HTML: `<button type="button" class="decline-button eu-cookie-compliance-default-button">No, non acconsento</button>`
- XPath: `/button[@class="decline-button eu-cookie-compliance-default-button"]`

**Failure 3:**
- Message: Target has insufficient size
- HTML: `<a href="#" class="toggle-menu menu-left push-body jPushMenuBtn">...</a>`
- XPath: `/a[@class="toggle-menu menu-left push-body jPushMenuBtn"]`

**Failure 4:**
- Message: Target has insufficient size
- HTML: `<a href="https://www.governo.it">...</a>`
- XPath: `/a`

#### Rule: [SIA-R53: Headings follow a logical hierarchy](https://alfa.siteimprove.com/rules/sia-r53)

**Failure 1:**
- Message: The heading skips one or more levels
- HTML: `<h3 class="contacts_footer">Contatti</h3>`
- XPath: `/h3[@class="contacts_footer"]`

#### Rule: [SIA-R57: Landmarks don't repeat the same content](https://alfa.siteimprove.com/rules/sia-r57)

**Failure 1:**
- Message: The text is not included in a landmark region

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 2.27:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R69: Text has sufficient contrast with its background](https://alfa.siteimprove.com/rules/sia-r69)

**Failure 1:**
- Message: The highest possible contrast of the text is 2.27:1 which is         below the required contrast of 4.5:1

#### Rule: [SIA-R72](https://alfa.siteimprove.com/rules/sia-r72)

**Failure 1:**
- Message: The text of the paragraph is uppercased
- HTML: `<p class="menu_under_burger">MENU</p>`
- XPath: `/p[@class="menu_under_burger"]`

#### Rule: [SIA-R73: Text spacing can be adjusted without loss of content](https://alfa.siteimprove.com/rules/sia-r73)

**Failure 1:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p>...</p>`
- XPath: `/p`

**Failure 2:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="menu_under_burger">MENU</p>`
- XPath: `/p[@class="menu_under_burger"]`

**Failure 3:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="nav_social clearfix">...</p>`
- XPath: `/p[@class="nav_social clearfix"]`

#### Rule: [SIA-R74](https://alfa.siteimprove.com/rules/sia-r74)

**Failure 1:**
- Message: The font size is specified using an absolute unit
- HTML: `<p>...</p>`
- XPath: `/p`

#### Rule: [SIA-R78: Headings of same level have text content between them](https://alfa.siteimprove.com/rules/sia-r78)

**Failure 1:**
- Message: There is no content between this heading and the next
- HTML: `<h3 class="contacts_footer">Contatti</h3>`
- XPath: `/h3[@class="contacts_footer"]`

#### Rule: [SIA-R84](https://alfa.siteimprove.com/rules/sia-r84)

**Failure 1:**
- Message: The scrollable element is not reachable through keyboard navigation
- HTML: `<nav class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left">...</nav>`
- XPath: `/nav[@class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left"]`

### https://governo.it/it/articolo/corinaldo-incontro-con-i-familiari-delle-vittime-palazzo-chigi/31212

#### Rule: [SIA-R11: Button elements have an accessible name](https://alfa.siteimprove.com/rules/sia-r11)

**Failure 1:**
- Message: The link does not have an accessible name
- HTML: `<a href="#" class="toggle-menu menu-left push-body jPushMenuBtn">...</a>`
- XPath: `/a[@class="toggle-menu menu-left push-body jPushMenuBtn"]`

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)

**Failure 1:**
- Message: Target has insufficient size
- HTML: `<a href="#" class="toggle-menu menu-left push-body jPushMenuBtn">...</a>`
- XPath: `/a[@class="toggle-menu menu-left push-body jPushMenuBtn"]`

**Failure 2:**
- Message: Target has insufficient size
- HTML: `<a href="https://www.governo.it">IT</a>`
- XPath: `/a`

#### Rule: [SIA-R2: HTML elements have a valid lang attribute](https://alfa.siteimprove.com/rules/sia-r2)

**Failure 1:**
- Message: The image does not have an accessible name
- HTML: `<img src="https://www.governo.it/sites/governo.it/files/styles/860x600/public/H_DSC09689.jpg?itok=ogq_xTuw" />`
- XPath: `/img`

#### Rule: [SIA-R53: Headings follow a logical hierarchy](https://alfa.siteimprove.com/rules/sia-r53)

**Failure 1:**
- Message: The heading skips one or more levels
- HTML: `<h3 class="contacts_footer">Contatti</h3>`
- XPath: `/h3[@class="contacts_footer"]`

#### Rule: [SIA-R57: Landmarks don't repeat the same content](https://alfa.siteimprove.com/rules/sia-r57)

**Failure 1:**
- Message: The text is not included in a landmark region

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 2.27:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R69: Text has sufficient contrast with its background](https://alfa.siteimprove.com/rules/sia-r69)

**Failure 1:**
- Message: The highest possible contrast of the text is 2.27:1 which is         below the required contrast of 4.5:1

#### Rule: [SIA-R72](https://alfa.siteimprove.com/rules/sia-r72)

**Failure 1:**
- Message: The text of the paragraph is uppercased
- HTML: `<p class="menu_under_burger">MENU</p>`
- XPath: `/p[@class="menu_under_burger"]`

#### Rule: [SIA-R73: Text spacing can be adjusted without loss of content](https://alfa.siteimprove.com/rules/sia-r73)

**Failure 1:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p>...</p>`
- XPath: `/p`

**Failure 2:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="menu_under_burger">MENU</p>`
- XPath: `/p[@class="menu_under_burger"]`

**Failure 3:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="nav_social clearfix">...</p>`
- XPath: `/p[@class="nav_social clearfix"]`

**Failure 4:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="h5 dataright">27 Febbraio 2026</p>`
- XPath: `/p[@class="h5 dataright"]`

#### Rule: [SIA-R74](https://alfa.siteimprove.com/rules/sia-r74)

**Failure 1:**
- Message: The font size is specified using an absolute unit
- HTML: `<p>...</p>`
- XPath: `/p`

#### Rule: [SIA-R78: Headings of same level have text content between them](https://alfa.siteimprove.com/rules/sia-r78)

**Failure 1:**
- Message: There is no content between this heading and the next
- HTML: `<h3 class="contacts_footer">Contatti</h3>`
- XPath: `/h3[@class="contacts_footer"]`

#### Rule: [SIA-R83: Text can be resized to 200% without loss of content](https://alfa.siteimprove.com/rules/sia-r83)

**Failure 1:**
- Message: The text is clipped

#### Rule: [SIA-R84](https://alfa.siteimprove.com/rules/sia-r84)

**Failure 1:**
- Message: The scrollable element is not reachable through keyboard navigation
- HTML: `<nav class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left">...</nav>`
- XPath: `/nav[@class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left"]`

### https://governo.it/it/articolo/g7-leaders-statement-war-ukraine/31186

#### Rule: [SIA-R11: Button elements have an accessible name](https://alfa.siteimprove.com/rules/sia-r11)

**Failure 1:**
- Message: The link does not have an accessible name
- HTML: `<a href="#" class="toggle-menu menu-left push-body jPushMenuBtn">...</a>`
- XPath: `/a[@class="toggle-menu menu-left push-body jPushMenuBtn"]`

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)

**Failure 1:**
- Message: Target has insufficient size
- HTML: `<button type="button" class="agree-button eu-cookie-compliance-secondary-button">Si, acconsento</button>`
- XPath: `/button[@class="agree-button eu-cookie-compliance-secondary-button"]`

**Failure 2:**
- Message: Target has insufficient size
- HTML: `<button type="button" class="decline-button eu-cookie-compliance-default-button">No, non acconsento</button>`
- XPath: `/button[@class="decline-button eu-cookie-compliance-default-button"]`

**Failure 3:**
- Message: Target has insufficient size
- HTML: `<a href="#" class="toggle-menu menu-left push-body jPushMenuBtn">...</a>`
- XPath: `/a[@class="toggle-menu menu-left push-body jPushMenuBtn"]`

**Failure 4:**
- Message: Target has insufficient size
- HTML: `<a href="https://www.governo.it">...</a>`
- XPath: `/a`

#### Rule: [SIA-R2: HTML elements have a valid lang attribute](https://alfa.siteimprove.com/rules/sia-r2)

**Failure 1:**
- Message: The image does not have an accessible name
- HTML: `<img src="https://www.governo.it/sites/governo.it/files/styles/860x600/public/logo_PCM_136.png?itok=mxVl33xN" />`
- XPath: `/img`

#### Rule: [SIA-R53: Headings follow a logical hierarchy](https://alfa.siteimprove.com/rules/sia-r53)

**Failure 1:**
- Message: The heading skips one or more levels
- HTML: `<h3 class="contacts_footer">Contatti</h3>`
- XPath: `/h3[@class="contacts_footer"]`

#### Rule: [SIA-R57: Landmarks don't repeat the same content](https://alfa.siteimprove.com/rules/sia-r57)

**Failure 1:**
- Message: The text is not included in a landmark region

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 2.27:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R69: Text has sufficient contrast with its background](https://alfa.siteimprove.com/rules/sia-r69)

**Failure 1:**
- Message: The highest possible contrast of the text is 2.27:1 which is         below the required contrast of 4.5:1

#### Rule: [SIA-R72](https://alfa.siteimprove.com/rules/sia-r72)

**Failure 1:**
- Message: The text of the paragraph is uppercased
- HTML: `<p class="menu_under_burger">MENU</p>`
- XPath: `/p[@class="menu_under_burger"]`

#### Rule: [SIA-R73: Text spacing can be adjusted without loss of content](https://alfa.siteimprove.com/rules/sia-r73)

**Failure 1:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p>...</p>`
- XPath: `/p`

**Failure 2:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="menu_under_burger">MENU</p>`
- XPath: `/p[@class="menu_under_burger"]`

**Failure 3:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="nav_social clearfix">...</p>`
- XPath: `/p[@class="nav_social clearfix"]`

**Failure 4:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="h5 dataright">24 Febbraio 2026</p>`
- XPath: `/p[@class="h5 dataright"]`

#### Rule: [SIA-R74](https://alfa.siteimprove.com/rules/sia-r74)

**Failure 1:**
- Message: The font size is specified using an absolute unit
- HTML: `<p>...</p>`
- XPath: `/p`

#### Rule: [SIA-R78: Headings of same level have text content between them](https://alfa.siteimprove.com/rules/sia-r78)

**Failure 1:**
- Message: There is no content between this heading and the next
- HTML: `<h3 class="contacts_footer">Contatti</h3>`
- XPath: `/h3[@class="contacts_footer"]`

#### Rule: [SIA-R83: Text can be resized to 200% without loss of content](https://alfa.siteimprove.com/rules/sia-r83)

**Failure 1:**
- Message: The text is clipped

#### Rule: [SIA-R84](https://alfa.siteimprove.com/rules/sia-r84)

**Failure 1:**
- Message: The scrollable element is not reachable through keyboard navigation
- HTML: `<nav class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left">...</nav>`
- XPath: `/nav[@class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left"]`

### https://governo.it/it/la-presidenza-del-consiglio-dei-ministri

#### Rule: [SIA-R11: Button elements have an accessible name](https://alfa.siteimprove.com/rules/sia-r11)

**Failure 1:**
- Message: The link does not have an accessible name
- HTML: `<a href="#" class="toggle-menu menu-left push-body jPushMenuBtn">...</a>`
- XPath: `/a[@class="toggle-menu menu-left push-body jPushMenuBtn"]`

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)

**Failure 1:**
- Message: Target has insufficient size
- HTML: `<a href="#" class="toggle-menu menu-left push-body jPushMenuBtn">...</a>`
- XPath: `/a[@class="toggle-menu menu-left push-body jPushMenuBtn"]`

**Failure 2:**
- Message: Target has insufficient size
- HTML: `<a href="https://www.governo.it">IT</a>`
- XPath: `/a`

**Failure 3:**
- Message: Target has insufficient size
- HTML: `<a href="/it/la-presidenza-del-consiglio-dei-ministri" title="" class="active-trail active">Presidenza del Consiglio dei Ministri</a>`
- XPath: `/a[@class="active-trail active"]`

#### Rule: [SIA-R53: Headings follow a logical hierarchy](https://alfa.siteimprove.com/rules/sia-r53)

**Failure 1:**
- Message: The heading skips one or more levels
- HTML: `<h5>...</h5>`
- XPath: `/h5`

**Failure 2:**
- Message: The heading skips one or more levels
- HTML: `<h3 class="contacts_footer">Contatti</h3>`
- XPath: `/h3[@class="contacts_footer"]`

#### Rule: [SIA-R56: Landmarks with the same role are distinguishable](https://alfa.siteimprove.com/rules/sia-r56)

**Failure 1:**
- Message: Some `navigation` have the same name.

#### Rule: [SIA-R57: Landmarks don't repeat the same content](https://alfa.siteimprove.com/rules/sia-r57)

**Failure 1:**
- Message: The text is not included in a landmark region

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 2.27:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R69: Text has sufficient contrast with its background](https://alfa.siteimprove.com/rules/sia-r69)

**Failure 1:**
- Message: The highest possible contrast of the text is 2.27:1 which is         below the required contrast of 4.5:1

#### Rule: [SIA-R72](https://alfa.siteimprove.com/rules/sia-r72)

**Failure 1:**
- Message: The text of the paragraph is uppercased
- HTML: `<p class="menu_under_burger">MENU</p>`
- XPath: `/p[@class="menu_under_burger"]`

#### Rule: [SIA-R73: Text spacing can be adjusted without loss of content](https://alfa.siteimprove.com/rules/sia-r73)

**Failure 1:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p>...</p>`
- XPath: `/p`

**Failure 2:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="menu_under_burger">MENU</p>`
- XPath: `/p[@class="menu_under_burger"]`

**Failure 3:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="nav_social clearfix">...</p>`
- XPath: `/p[@class="nav_social clearfix"]`

**Failure 4:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="h3 pull-right">...</p>`
- XPath: `/p[@class="h3 pull-right"]`

#### Rule: [SIA-R74](https://alfa.siteimprove.com/rules/sia-r74)

**Failure 1:**
- Message: The font size is specified using an absolute unit
- HTML: `<p>...</p>`
- XPath: `/p`

#### Rule: [SIA-R78: Headings of same level have text content between them](https://alfa.siteimprove.com/rules/sia-r78)

**Failure 1:**
- Message: There is no content between this heading and the next
- HTML: `<h3 class="contacts_footer">Contatti</h3>`
- XPath: `/h3[@class="contacts_footer"]`

#### Rule: [SIA-R83: Text can be resized to 200% without loss of content](https://alfa.siteimprove.com/rules/sia-r83)

**Failure 1:**
- Message: The text is clipped

#### Rule: [SIA-R84](https://alfa.siteimprove.com/rules/sia-r84)

**Failure 1:**
- Message: The scrollable element is not reachable through keyboard navigation
- HTML: `<nav class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left">...</nav>`
- XPath: `/nav[@class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left"]`

### https://governo.it/it/articolo/medio-oriente-il-presidente-meloni-presiede-una-conferenza-telefonica/31215

#### Rule: [SIA-R11: Button elements have an accessible name](https://alfa.siteimprove.com/rules/sia-r11)

**Failure 1:**
- Message: The link does not have an accessible name
- HTML: `<a href="#" class="toggle-menu menu-left push-body jPushMenuBtn">...</a>`
- XPath: `/a[@class="toggle-menu menu-left push-body jPushMenuBtn"]`

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)

**Failure 1:**
- Message: Target has insufficient size
- HTML: `<a href="#" class="toggle-menu menu-left push-body jPushMenuBtn">...</a>`
- XPath: `/a[@class="toggle-menu menu-left push-body jPushMenuBtn"]`

**Failure 2:**
- Message: Target has insufficient size
- HTML: `<a href="https://www.governo.it">IT</a>`
- XPath: `/a`

#### Rule: [SIA-R2: HTML elements have a valid lang attribute](https://alfa.siteimprove.com/rules/sia-r2)

**Failure 1:**
- Message: The image does not have an accessible name
- HTML: `<img src="https://www.governo.it/sites/governo.it/files/styles/860x600/public/logo_PCM_128_2.png?itok=HJMSujGB" />`
- XPath: `/img`

#### Rule: [SIA-R53: Headings follow a logical hierarchy](https://alfa.siteimprove.com/rules/sia-r53)

**Failure 1:**
- Message: The heading skips one or more levels
- HTML: `<h3 class="contacts_footer">Contatti</h3>`
- XPath: `/h3[@class="contacts_footer"]`

#### Rule: [SIA-R57: Landmarks don't repeat the same content](https://alfa.siteimprove.com/rules/sia-r57)

**Failure 1:**
- Message: The text is not included in a landmark region

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 2.27:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R69: Text has sufficient contrast with its background](https://alfa.siteimprove.com/rules/sia-r69)

**Failure 1:**
- Message: The highest possible contrast of the text is 2.27:1 which is         below the required contrast of 4.5:1

#### Rule: [SIA-R72](https://alfa.siteimprove.com/rules/sia-r72)

**Failure 1:**
- Message: The text of the paragraph is uppercased
- HTML: `<p class="menu_under_burger">MENU</p>`
- XPath: `/p[@class="menu_under_burger"]`

#### Rule: [SIA-R73: Text spacing can be adjusted without loss of content](https://alfa.siteimprove.com/rules/sia-r73)

**Failure 1:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p>...</p>`
- XPath: `/p`

**Failure 2:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="menu_under_burger">MENU</p>`
- XPath: `/p[@class="menu_under_burger"]`

**Failure 3:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="nav_social clearfix">...</p>`
- XPath: `/p[@class="nav_social clearfix"]`

**Failure 4:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="h5 dataright">28 Febbraio 2026</p>`
- XPath: `/p[@class="h5 dataright"]`

#### Rule: [SIA-R74](https://alfa.siteimprove.com/rules/sia-r74)

**Failure 1:**
- Message: The font size is specified using an absolute unit
- HTML: `<p>...</p>`
- XPath: `/p`

#### Rule: [SIA-R78: Headings of same level have text content between them](https://alfa.siteimprove.com/rules/sia-r78)

**Failure 1:**
- Message: There is no content between this heading and the next
- HTML: `<h3 class="contacts_footer">Contatti</h3>`
- XPath: `/h3[@class="contacts_footer"]`

#### Rule: [SIA-R83: Text can be resized to 200% without loss of content](https://alfa.siteimprove.com/rules/sia-r83)

**Failure 1:**
- Message: The text is clipped

#### Rule: [SIA-R84](https://alfa.siteimprove.com/rules/sia-r84)

**Failure 1:**
- Message: The scrollable element is not reachable through keyboard navigation
- HTML: `<nav class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left">...</nav>`
- XPath: `/nav[@class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left"]`

### https://governo.it/it/notizie-presidenza

#### Rule: [SIA-R11: Button elements have an accessible name](https://alfa.siteimprove.com/rules/sia-r11)

**Failure 1:**
- Message: The link does not have an accessible name
- HTML: `<a href="#" class="toggle-menu menu-left push-body jPushMenuBtn">...</a>`
- XPath: `/a[@class="toggle-menu menu-left push-body jPushMenuBtn"]`

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)

**Failure 1:**
- Message: Target has insufficient size
- HTML: `<button type="button" class="agree-button eu-cookie-compliance-secondary-button">Si, acconsento</button>`
- XPath: `/button[@class="agree-button eu-cookie-compliance-secondary-button"]`

**Failure 2:**
- Message: Target has insufficient size
- HTML: `<button type="button" class="decline-button eu-cookie-compliance-default-button">No, non acconsento</button>`
- XPath: `/button[@class="decline-button eu-cookie-compliance-default-button"]`

**Failure 3:**
- Message: Target has insufficient size
- HTML: `<a href="#" class="toggle-menu menu-left push-body jPushMenuBtn">...</a>`
- XPath: `/a[@class="toggle-menu menu-left push-body jPushMenuBtn"]`

**Failure 4:**
- Message: Target has insufficient size
- HTML: `<a href="https://www.governo.it">...</a>`
- XPath: `/a`

#### Rule: [SIA-R113](https://alfa.siteimprove.com/rules/sia-r113)

**Failure 1:**
- Message: Target has insufficient size and spacing
- HTML: `<a title="Vai a pagina 2" href="/it/notizie-presidenza?page=1">2</a>`
- XPath: `/a`

#### Rule: [SIA-R53: Headings follow a logical hierarchy](https://alfa.siteimprove.com/rules/sia-r53)

**Failure 1:**
- Message: The heading skips one or more levels
- HTML: `<h3 class="contacts_footer">Contatti</h3>`
- XPath: `/h3[@class="contacts_footer"]`

#### Rule: [SIA-R57: Landmarks don't repeat the same content](https://alfa.siteimprove.com/rules/sia-r57)

**Failure 1:**
- Message: The text is not included in a landmark region

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 2.27:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R69: Text has sufficient contrast with its background](https://alfa.siteimprove.com/rules/sia-r69)

**Failure 1:**
- Message: The highest possible contrast of the text is 2.27:1 which is         below the required contrast of 4.5:1

#### Rule: [SIA-R72](https://alfa.siteimprove.com/rules/sia-r72)

**Failure 1:**
- Message: The text of the paragraph is uppercased
- HTML: `<p class="menu_under_burger">MENU</p>`
- XPath: `/p[@class="menu_under_burger"]`

#### Rule: [SIA-R73: Text spacing can be adjusted without loss of content](https://alfa.siteimprove.com/rules/sia-r73)

**Failure 1:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p>...</p>`
- XPath: `/p`

**Failure 2:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="menu_under_burger">MENU</p>`
- XPath: `/p[@class="menu_under_burger"]`

**Failure 3:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="nav_social clearfix">...</p>`
- XPath: `/p[@class="nav_social clearfix"]`

#### Rule: [SIA-R74](https://alfa.siteimprove.com/rules/sia-r74)

**Failure 1:**
- Message: The font size is specified using an absolute unit
- HTML: `<p>...</p>`
- XPath: `/p`

#### Rule: [SIA-R78: Headings of same level have text content between them](https://alfa.siteimprove.com/rules/sia-r78)

**Failure 1:**
- Message: There is no content between this heading and the next
- HTML: `<h3 class="contacts_footer">Contatti</h3>`
- XPath: `/h3[@class="contacts_footer"]`

#### Rule: [SIA-R84](https://alfa.siteimprove.com/rules/sia-r84)

**Failure 1:**
- Message: The scrollable element is not reachable through keyboard navigation
- HTML: `<nav class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left">...</nav>`
- XPath: `/nav[@class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left"]`

### https://governo.it/it/notizie-chigi

#### Rule: [SIA-R11: Button elements have an accessible name](https://alfa.siteimprove.com/rules/sia-r11)

**Failure 1:**
- Message: The link does not have an accessible name
- HTML: `<a href="#" class="toggle-menu menu-left push-body jPushMenuBtn">...</a>`
- XPath: `/a[@class="toggle-menu menu-left push-body jPushMenuBtn"]`

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)

**Failure 1:**
- Message: Target has insufficient size
- HTML: `<a href="#" class="toggle-menu menu-left push-body jPushMenuBtn">...</a>`
- XPath: `/a[@class="toggle-menu menu-left push-body jPushMenuBtn"]`

**Failure 2:**
- Message: Target has insufficient size
- HTML: `<a href="https://www.governo.it">...</a>`
- XPath: `/a`

**Failure 3:**
- Message: Target has insufficient size
- HTML: `<a class="box_text_anchor" href="/it/articolo/consiglio-dei-ministri-n-164/31307">...</a>`
- XPath: `/a[@class="box_text_anchor"]`

#### Rule: [SIA-R113](https://alfa.siteimprove.com/rules/sia-r113)

**Failure 1:**
- Message: Target has insufficient size and spacing
- HTML: `<a title="Vai a pagina 2" href="/it/notizie-chigi?page=1">2</a>`
- XPath: `/a`

#### Rule: [SIA-R53: Headings follow a logical hierarchy](https://alfa.siteimprove.com/rules/sia-r53)

**Failure 1:**
- Message: The heading skips one or more levels
- HTML: `<h3 class="contacts_footer">Contatti</h3>`
- XPath: `/h3[@class="contacts_footer"]`

#### Rule: [SIA-R57: Landmarks don't repeat the same content](https://alfa.siteimprove.com/rules/sia-r57)

**Failure 1:**
- Message: The text is not included in a landmark region

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 2.27:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R69: Text has sufficient contrast with its background](https://alfa.siteimprove.com/rules/sia-r69)

**Failure 1:**
- Message: The highest possible contrast of the text is 2.27:1 which is         below the required contrast of 4.5:1

#### Rule: [SIA-R72](https://alfa.siteimprove.com/rules/sia-r72)

**Failure 1:**
- Message: The text of the paragraph is uppercased
- HTML: `<p class="menu_under_burger">MENU</p>`
- XPath: `/p[@class="menu_under_burger"]`

#### Rule: [SIA-R73: Text spacing can be adjusted without loss of content](https://alfa.siteimprove.com/rules/sia-r73)

**Failure 1:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p>...</p>`
- XPath: `/p`

**Failure 2:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="menu_under_burger">MENU</p>`
- XPath: `/p[@class="menu_under_burger"]`

**Failure 3:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="nav_social clearfix">...</p>`
- XPath: `/p[@class="nav_social clearfix"]`

#### Rule: [SIA-R74](https://alfa.siteimprove.com/rules/sia-r74)

**Failure 1:**
- Message: The font size is specified using an absolute unit
- HTML: `<p>...</p>`
- XPath: `/p`

#### Rule: [SIA-R78: Headings of same level have text content between them](https://alfa.siteimprove.com/rules/sia-r78)

**Failure 1:**
- Message: There is no content between this heading and the next
- HTML: `<h3 class="contacts_footer">Contatti</h3>`
- XPath: `/h3[@class="contacts_footer"]`

#### Rule: [SIA-R84](https://alfa.siteimprove.com/rules/sia-r84)

**Failure 1:**
- Message: The scrollable element is not reachable through keyboard navigation
- HTML: `<nav class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left">...</nav>`
- XPath: `/nav[@class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left"]`

### https://governo.it/it/interventi

#### Rule: [SIA-R11: Button elements have an accessible name](https://alfa.siteimprove.com/rules/sia-r11)

**Failure 1:**
- Message: The link does not have an accessible name
- HTML: `<a href="#" class="toggle-menu menu-left push-body jPushMenuBtn">...</a>`
- XPath: `/a[@class="toggle-menu menu-left push-body jPushMenuBtn"]`

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)

**Failure 1:**
- Message: Target has insufficient size
- HTML: `<a href="#" class="toggle-menu menu-left push-body jPushMenuBtn">...</a>`
- XPath: `/a[@class="toggle-menu menu-left push-body jPushMenuBtn"]`

**Failure 2:**
- Message: Target has insufficient size
- HTML: `<a href="https://www.governo.it">...</a>`
- XPath: `/a`

#### Rule: [SIA-R113](https://alfa.siteimprove.com/rules/sia-r113)

**Failure 1:**
- Message: Target has insufficient size and spacing
- HTML: `<a title="Vai a pagina 2" href="/it/interventi?page=1">2</a>`
- XPath: `/a`

#### Rule: [SIA-R53: Headings follow a logical hierarchy](https://alfa.siteimprove.com/rules/sia-r53)

**Failure 1:**
- Message: The heading skips one or more levels
- HTML: `<h3 class="contacts_footer">Contatti</h3>`
- XPath: `/h3[@class="contacts_footer"]`

#### Rule: [SIA-R57: Landmarks don't repeat the same content](https://alfa.siteimprove.com/rules/sia-r57)

**Failure 1:**
- Message: The text is not included in a landmark region

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 2.27:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R69: Text has sufficient contrast with its background](https://alfa.siteimprove.com/rules/sia-r69)

**Failure 1:**
- Message: The highest possible contrast of the text is 2.27:1 which is         below the required contrast of 4.5:1

#### Rule: [SIA-R72](https://alfa.siteimprove.com/rules/sia-r72)

**Failure 1:**
- Message: The text of the paragraph is uppercased
- HTML: `<p class="menu_under_burger">MENU</p>`
- XPath: `/p[@class="menu_under_burger"]`

#### Rule: [SIA-R73: Text spacing can be adjusted without loss of content](https://alfa.siteimprove.com/rules/sia-r73)

**Failure 1:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p>...</p>`
- XPath: `/p`

**Failure 2:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="menu_under_burger">MENU</p>`
- XPath: `/p[@class="menu_under_burger"]`

**Failure 3:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="nav_social clearfix">...</p>`
- XPath: `/p[@class="nav_social clearfix"]`

#### Rule: [SIA-R74](https://alfa.siteimprove.com/rules/sia-r74)

**Failure 1:**
- Message: The font size is specified using an absolute unit
- HTML: `<p>...</p>`
- XPath: `/p`

#### Rule: [SIA-R78: Headings of same level have text content between them](https://alfa.siteimprove.com/rules/sia-r78)

**Failure 1:**
- Message: There is no content between this heading and the next
- HTML: `<h3 class="contacts_footer">Contatti</h3>`
- XPath: `/h3[@class="contacts_footer"]`

#### Rule: [SIA-R84](https://alfa.siteimprove.com/rules/sia-r84)

**Failure 1:**
- Message: The scrollable element is not reachable through keyboard navigation
- HTML: `<nav class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left">...</nav>`
- XPath: `/nav[@class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left"]`

### https://governo.it/it/sala-stampa

#### Rule: [SIA-R11: Button elements have an accessible name](https://alfa.siteimprove.com/rules/sia-r11)

**Failure 1:**
- Message: The link does not have an accessible name
- HTML: `<a href="#" class="toggle-menu menu-left push-body jPushMenuBtn">...</a>`
- XPath: `/a[@class="toggle-menu menu-left push-body jPushMenuBtn"]`

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)

**Failure 1:**
- Message: Target has insufficient size
- HTML: `<button type="button" class="agree-button eu-cookie-compliance-secondary-button">Si, acconsento</button>`
- XPath: `/button[@class="agree-button eu-cookie-compliance-secondary-button"]`

**Failure 2:**
- Message: Target has insufficient size
- HTML: `<button type="button" class="decline-button eu-cookie-compliance-default-button">No, non acconsento</button>`
- XPath: `/button[@class="decline-button eu-cookie-compliance-default-button"]`

**Failure 3:**
- Message: Target has insufficient size
- HTML: `<a href="#" class="toggle-menu menu-left push-body jPushMenuBtn">...</a>`
- XPath: `/a[@class="toggle-menu menu-left push-body jPushMenuBtn"]`

**Failure 4:**
- Message: Target has insufficient size
- HTML: `<a href="https://www.governo.it">...</a>`
- XPath: `/a`

**Failure 5:**
- Message: Target has insufficient size
- HTML: `<a href="/it/sala-stampa" title="" class="active-trail active">Sala stampa</a>`
- XPath: `/a[@class="active-trail active"]`

#### Rule: [SIA-R53: Headings follow a logical hierarchy](https://alfa.siteimprove.com/rules/sia-r53)

**Failure 1:**
- Message: The heading skips one or more levels
- HTML: `<h3 class="contacts_footer">Contatti</h3>`
- XPath: `/h3[@class="contacts_footer"]`

#### Rule: [SIA-R57: Landmarks don't repeat the same content](https://alfa.siteimprove.com/rules/sia-r57)

**Failure 1:**
- Message: The text is not included in a landmark region

#### Rule: [SIA-R62: Links are visually distinguishable from surrounding text](https://alfa.siteimprove.com/rules/sia-r62)

**Failure 1:**
- Message: The link is not distinguishable from the surrounding text
- HTML: `<a href="https://amei.palazzochigi.it">https://amei.palazzochigi.it</a>`
- XPath: `/a`

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 2.27:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R69: Text has sufficient contrast with its background](https://alfa.siteimprove.com/rules/sia-r69)

**Failure 1:**
- Message: The highest possible contrast of the text is 2.27:1 which is         below the required contrast of 4.5:1

#### Rule: [SIA-R72](https://alfa.siteimprove.com/rules/sia-r72)

**Failure 1:**
- Message: The text of the paragraph is uppercased
- HTML: `<p class="menu_under_burger">MENU</p>`
- XPath: `/p[@class="menu_under_burger"]`

#### Rule: [SIA-R73: Text spacing can be adjusted without loss of content](https://alfa.siteimprove.com/rules/sia-r73)

**Failure 1:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p>...</p>`
- XPath: `/p`

**Failure 2:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="menu_under_burger">MENU</p>`
- XPath: `/p[@class="menu_under_burger"]`

**Failure 3:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="nav_social clearfix">...</p>`
- XPath: `/p[@class="nav_social clearfix"]`

#### Rule: [SIA-R74](https://alfa.siteimprove.com/rules/sia-r74)

**Failure 1:**
- Message: The font size is specified using an absolute unit
- HTML: `<p>...</p>`
- XPath: `/p`

#### Rule: [SIA-R78: Headings of same level have text content between them](https://alfa.siteimprove.com/rules/sia-r78)

**Failure 1:**
- Message: There is no content between this heading and the next
- HTML: `<h3 class="contacts_footer">Contatti</h3>`
- XPath: `/h3[@class="contacts_footer"]`

#### Rule: [SIA-R83: Text can be resized to 200% without loss of content](https://alfa.siteimprove.com/rules/sia-r83)

**Failure 1:**
- Message: The text is clipped

#### Rule: [SIA-R84](https://alfa.siteimprove.com/rules/sia-r84)

**Failure 1:**
- Message: The scrollable element is not reachable through keyboard navigation
- HTML: `<nav class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left">...</nav>`
- XPath: `/nav[@class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left"]`

### https://governo.it/it/gallerie-governo

#### Rule: [SIA-R11: Button elements have an accessible name](https://alfa.siteimprove.com/rules/sia-r11)

**Failure 1:**
- Message: The link does not have an accessible name
- HTML: `<a href="#" class="toggle-menu menu-left push-body jPushMenuBtn">...</a>`
- XPath: `/a[@class="toggle-menu menu-left push-body jPushMenuBtn"]`

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)

**Failure 1:**
- Message: Target has insufficient size
- HTML: `<a href="#" class="toggle-menu menu-left push-body jPushMenuBtn">...</a>`
- XPath: `/a[@class="toggle-menu menu-left push-body jPushMenuBtn"]`

**Failure 2:**
- Message: Target has insufficient size
- HTML: `<a href="https://www.governo.it">...</a>`
- XPath: `/a`

#### Rule: [SIA-R113](https://alfa.siteimprove.com/rules/sia-r113)

**Failure 1:**
- Message: Target has insufficient size and spacing
- HTML: `<a title="Vai a pagina 2" href="/it/gallerie-governo?page=1">2</a>`
- XPath: `/a`

#### Rule: [SIA-R53: Headings follow a logical hierarchy](https://alfa.siteimprove.com/rules/sia-r53)

**Failure 1:**
- Message: The heading skips one or more levels
- HTML: `<h3 class="contacts_footer">Contatti</h3>`
- XPath: `/h3[@class="contacts_footer"]`

#### Rule: [SIA-R57: Landmarks don't repeat the same content](https://alfa.siteimprove.com/rules/sia-r57)

**Failure 1:**
- Message: The text is not included in a landmark region

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 2.27:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R69: Text has sufficient contrast with its background](https://alfa.siteimprove.com/rules/sia-r69)

**Failure 1:**
- Message: The highest possible contrast of the text is 2.27:1 which is         below the required contrast of 4.5:1

#### Rule: [SIA-R72](https://alfa.siteimprove.com/rules/sia-r72)

**Failure 1:**
- Message: The text of the paragraph is uppercased
- HTML: `<p class="menu_under_burger">MENU</p>`
- XPath: `/p[@class="menu_under_burger"]`

#### Rule: [SIA-R73: Text spacing can be adjusted without loss of content](https://alfa.siteimprove.com/rules/sia-r73)

**Failure 1:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p>...</p>`
- XPath: `/p`

**Failure 2:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="menu_under_burger">MENU</p>`
- XPath: `/p[@class="menu_under_burger"]`

**Failure 3:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="nav_social clearfix">...</p>`
- XPath: `/p[@class="nav_social clearfix"]`

**Failure 4:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="h6">Foto                    </p>`
- XPath: `/p[@class="h6"]`

#### Rule: [SIA-R74](https://alfa.siteimprove.com/rules/sia-r74)

**Failure 1:**
- Message: The font size is specified using an absolute unit
- HTML: `<p>...</p>`
- XPath: `/p`

#### Rule: [SIA-R78: Headings of same level have text content between them](https://alfa.siteimprove.com/rules/sia-r78)

**Failure 1:**
- Message: There is no content between this heading and the next
- HTML: `<h2 class="h4">PNRR, Cabina di regia su interventi Comuni, Città ...</h2>`
- XPath: `/h2[@class="h4"]`

**Failure 2:**
- Message: There is no content between this heading and the next
- HTML: `<h3 class="contacts_footer">Contatti</h3>`
- XPath: `/h3[@class="contacts_footer"]`

#### Rule: [SIA-R84](https://alfa.siteimprove.com/rules/sia-r84)

**Failure 1:**
- Message: The scrollable element is not reachable through keyboard navigation
- HTML: `<nav class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left">...</nav>`
- XPath: `/nav[@class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left"]`

### https://governo.it/it/articolo/il-messaggio-del-presidente-meloni-lanniversario-della-costituzione-di-confetra/31195

#### Rule: [SIA-R11: Button elements have an accessible name](https://alfa.siteimprove.com/rules/sia-r11)

**Failure 1:**
- Message: The link does not have an accessible name
- HTML: `<a href="#" class="toggle-menu menu-left push-body jPushMenuBtn">...</a>`
- XPath: `/a[@class="toggle-menu menu-left push-body jPushMenuBtn"]`

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)

**Failure 1:**
- Message: Target has insufficient size
- HTML: `<button type="button" class="agree-button eu-cookie-compliance-secondary-button">Si, acconsento</button>`
- XPath: `/button[@class="agree-button eu-cookie-compliance-secondary-button"]`

**Failure 2:**
- Message: Target has insufficient size
- HTML: `<button type="button" class="decline-button eu-cookie-compliance-default-button">No, non acconsento</button>`
- XPath: `/button[@class="decline-button eu-cookie-compliance-default-button"]`

**Failure 3:**
- Message: Target has insufficient size
- HTML: `<a href="#" class="toggle-menu menu-left push-body jPushMenuBtn">...</a>`
- XPath: `/a[@class="toggle-menu menu-left push-body jPushMenuBtn"]`

**Failure 4:**
- Message: Target has insufficient size
- HTML: `<a href="https://www.governo.it">...</a>`
- XPath: `/a`

#### Rule: [SIA-R2: HTML elements have a valid lang attribute](https://alfa.siteimprove.com/rules/sia-r2)

**Failure 1:**
- Message: The image does not have an accessible name
- HTML: `<img class="width_100" src="https://www.governo.it/sites/governo.it/files/B7A915CA3A27_pp%20%281%29.jpg" />`
- XPath: `/img[@class="width_100"]`

#### Rule: [SIA-R53: Headings follow a logical hierarchy](https://alfa.siteimprove.com/rules/sia-r53)

**Failure 1:**
- Message: The heading skips one or more levels
- HTML: `<h3 class="contacts_footer">Contatti</h3>`
- XPath: `/h3[@class="contacts_footer"]`

#### Rule: [SIA-R57: Landmarks don't repeat the same content](https://alfa.siteimprove.com/rules/sia-r57)

**Failure 1:**
- Message: The text is not included in a landmark region

#### Rule: [SIA-R61](https://alfa.siteimprove.com/rules/sia-r61)

**Failure 1:**
- Message: The document does not start with a level 1 heading

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 2.27:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R69: Text has sufficient contrast with its background](https://alfa.siteimprove.com/rules/sia-r69)

**Failure 1:**
- Message: The highest possible contrast of the text is 2.27:1 which is         below the required contrast of 4.5:1

#### Rule: [SIA-R72](https://alfa.siteimprove.com/rules/sia-r72)

**Failure 1:**
- Message: The text of the paragraph is uppercased
- HTML: `<p class="menu_under_burger">MENU</p>`
- XPath: `/p[@class="menu_under_burger"]`

#### Rule: [SIA-R73: Text spacing can be adjusted without loss of content](https://alfa.siteimprove.com/rules/sia-r73)

**Failure 1:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p>...</p>`
- XPath: `/p`

**Failure 2:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="menu_under_burger">MENU</p>`
- XPath: `/p[@class="menu_under_burger"]`

**Failure 3:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="nav_social clearfix">...</p>`
- XPath: `/p[@class="nav_social clearfix"]`

**Failure 4:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="h6">Giovedì, 26 Febbraio 2026</p>`
- XPath: `/p[@class="h6"]`

#### Rule: [SIA-R74](https://alfa.siteimprove.com/rules/sia-r74)

**Failure 1:**
- Message: The font size is specified using an absolute unit
- HTML: `<p>...</p>`
- XPath: `/p`

#### Rule: [SIA-R78: Headings of same level have text content between them](https://alfa.siteimprove.com/rules/sia-r78)

**Failure 1:**
- Message: There is no content between this heading and the next
- HTML: `<h3 class="contacts_footer">Contatti</h3>`
- XPath: `/h3[@class="contacts_footer"]`

#### Rule: [SIA-R83: Text can be resized to 200% without loss of content](https://alfa.siteimprove.com/rules/sia-r83)

**Failure 1:**
- Message: The text is clipped

#### Rule: [SIA-R84](https://alfa.siteimprove.com/rules/sia-r84)

**Failure 1:**
- Message: The scrollable element is not reachable through keyboard navigation
- HTML: `<nav class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left">...</nav>`
- XPath: `/nav[@class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left"]`

### https://governo.it/it/articolo/il-sottosegretario-mantovano-partecipa-allinaugurazione-dell-anno-giudiziario-della-corte

#### Rule: [SIA-R11: Button elements have an accessible name](https://alfa.siteimprove.com/rules/sia-r11)

**Failure 1:**
- Message: The link does not have an accessible name
- HTML: `<a href="#" class="toggle-menu menu-left push-body jPushMenuBtn">...</a>`
- XPath: `/a[@class="toggle-menu menu-left push-body jPushMenuBtn"]`

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)

**Failure 1:**
- Message: Target has insufficient size
- HTML: `<button type="button" class="agree-button eu-cookie-compliance-secondary-button">Si, acconsento</button>`
- XPath: `/button[@class="agree-button eu-cookie-compliance-secondary-button"]`

**Failure 2:**
- Message: Target has insufficient size
- HTML: `<button type="button" class="decline-button eu-cookie-compliance-default-button">No, non acconsento</button>`
- XPath: `/button[@class="decline-button eu-cookie-compliance-default-button"]`

**Failure 3:**
- Message: Target has insufficient size
- HTML: `<a href="#" class="toggle-menu menu-left push-body jPushMenuBtn">...</a>`
- XPath: `/a[@class="toggle-menu menu-left push-body jPushMenuBtn"]`

**Failure 4:**
- Message: Target has insufficient size
- HTML: `<a href="https://www.governo.it">...</a>`
- XPath: `/a`

#### Rule: [SIA-R2: HTML elements have a valid lang attribute](https://alfa.siteimprove.com/rules/sia-r2)

**Failure 1:**
- Message: The image does not have an accessible name
- HTML: `<img src="https://www.governo.it/sites/governo.it/files/styles/860x600/public/logo_PCM_7_25_3.png?itok=rJ1_TsA7" />`
- XPath: `/img`

#### Rule: [SIA-R53: Headings follow a logical hierarchy](https://alfa.siteimprove.com/rules/sia-r53)

**Failure 1:**
- Message: The heading skips one or more levels
- HTML: `<h3 class="contacts_footer">Contatti</h3>`
- XPath: `/h3[@class="contacts_footer"]`

#### Rule: [SIA-R57: Landmarks don't repeat the same content](https://alfa.siteimprove.com/rules/sia-r57)

**Failure 1:**
- Message: The text is not included in a landmark region

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 2.27:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R69: Text has sufficient contrast with its background](https://alfa.siteimprove.com/rules/sia-r69)

**Failure 1:**
- Message: The highest possible contrast of the text is 2.27:1 which is         below the required contrast of 4.5:1

#### Rule: [SIA-R72](https://alfa.siteimprove.com/rules/sia-r72)

**Failure 1:**
- Message: The text of the paragraph is uppercased
- HTML: `<p class="menu_under_burger">MENU</p>`
- XPath: `/p[@class="menu_under_burger"]`

#### Rule: [SIA-R73: Text spacing can be adjusted without loss of content](https://alfa.siteimprove.com/rules/sia-r73)

**Failure 1:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p>...</p>`
- XPath: `/p`

**Failure 2:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="menu_under_burger">MENU</p>`
- XPath: `/p[@class="menu_under_burger"]`

**Failure 3:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="nav_social clearfix">...</p>`
- XPath: `/p[@class="nav_social clearfix"]`

**Failure 4:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="h5 dataright">24 Febbraio 2026</p>`
- XPath: `/p[@class="h5 dataright"]`

#### Rule: [SIA-R74](https://alfa.siteimprove.com/rules/sia-r74)

**Failure 1:**
- Message: The font size is specified using an absolute unit
- HTML: `<p>...</p>`
- XPath: `/p`

#### Rule: [SIA-R78: Headings of same level have text content between them](https://alfa.siteimprove.com/rules/sia-r78)

**Failure 1:**
- Message: There is no content between this heading and the next
- HTML: `<h3 class="contacts_footer">Contatti</h3>`
- XPath: `/h3[@class="contacts_footer"]`

#### Rule: [SIA-R83: Text can be resized to 200% without loss of content](https://alfa.siteimprove.com/rules/sia-r83)

**Failure 1:**
- Message: The text is clipped

#### Rule: [SIA-R84](https://alfa.siteimprove.com/rules/sia-r84)

**Failure 1:**
- Message: The scrollable element is not reachable through keyboard navigation
- HTML: `<nav class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left">...</nav>`
- XPath: `/nav[@class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left"]`

## Detailed Failure Information (axe)

