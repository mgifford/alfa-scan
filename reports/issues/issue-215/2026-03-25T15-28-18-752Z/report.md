# Scan Report: https://www.adapt-offshore.org/

- Issue: https://github.com/mgifford/open-scans/issues/215
- Submitted by: mgifford
- Scanned at: 2026-03-25T15:27:31.992Z
- Engines used: All engines (AXE, ALFA, Equal Access, AccessLint, QualWeb)
- Scan duration: 2.6 minutes
- Total URLs submitted: 10
- Accepted public URLs: 10
- Rejected URLs: 0
- 🎨 **Accessibility personalization (CSS media queries):**
  - 🌙 **Dark mode:** 10 of 10 URLs (100%) support `prefers-color-scheme: dark`
  - ⚡ Reduced motion: None of the scanned URLs support `prefers-reduced-motion: reduce`
  - 🔍 High contrast: None of the scanned URLs support `prefers-contrast: more`
  - 🖥️ Forced colors: None of the scanned URLs support `forced-colors: active`
  - 🪟 Reduced transparency: None of the scanned URLs support `prefers-reduced-transparency: reduce`
- ALFA outcomes: 3498 passed, 228 failed, 0 cantTell, 593 inapplicable
- axe outcomes: 6807 passed, 157 failed, 10 cantTell, 986 inapplicable
- Equal Access outcomes: 8091 passed, 129 failed (112 unique, 17 duplicate), 67 cantTell, 0 inapplicable
- AccessLint outcomes: 908 passed, 12 failed (12 unique, 0 duplicate), 0 cantTell, 0 inapplicable
- QualWeb outcomes: 486 passed, 7 failed, 185 cantTell, 3 inapplicable
- Duplicate findings caught by later scanners: 171

## 🎯 Pages with Most Errors

Focus your efforts on these pages to make the biggest impact (combined scanner unique failures):

| Page | axe Unique | ALFA Unique | Equal Access Unique | AccessLint Unique | QualWeb | Total Unique | Page Title |
|---|---:|---:|---:|---:|---:|---:|---|
| [View Page](https://www.adapt-offshore.org/about) | 28 | 16 | 16 | 2 | 0 | **62** | Adaptive Sailing Offshore |
| [View Page](https://www.adapt-offshore.org/) | 29 | 8 | 12 | 0 | 7 | **56** | Adaptive Sailing Offshore |
| [View Page](https://www.adapt-offshore.org/support?tab=volunteer) | 18 | 6 | 16 | 3 | 0 | **43** | Adaptive Sailing Offshore |
| [View Page](https://www.adapt-offshore.org/support?tab=services) | 17 | 6 | 9 | 4 | 0 | **36** | Adaptive Sailing Offshore |
| [View Page](https://www.adapt-offshore.org/membership) | 13 | 9 | 10 | 0 | 0 | **32** | Adaptive Sailing Offshore |
| [View Page](https://www.adapt-offshore.org/privacy) | 15 | 8 | 9 | 0 | 0 | **32** | Adaptive Sailing Offshore |
| [View Page](https://www.adapt-offshore.org/support) | 11 | 6 | 12 | 1 | 0 | **30** | Adaptive Sailing Offshore |
| [View Page](https://www.adapt-offshore.org/support?tab=monetary) | 11 | 6 | 12 | 1 | 0 | **30** | Adaptive Sailing Offshore |
| [View Page](https://www.adapt-offshore.org/support?tab=equipment) | 8 | 8 | 7 | 1 | 0 | **24** | Adaptive Sailing Offshore |
| [View Page](https://www.adapt-offshore.org/terms) | 7 | 7 | 9 | 0 | 0 | **23** | Adaptive Sailing Offshore |

## 🔧 Most Common Issues (ALFA)

These ALFA accessibility issues appear most frequently across your pages:

| Rule | Pages Affected | Documentation |
|---|---:|---|
| [SIA-R111](https://alfa.siteimprove.com/rules/sia-r111): Interactive elements have a sufficient target size | **10** of 10 | [View Rule](https://alfa.siteimprove.com/rules/sia-r111) |
| [SIA-R17](https://alfa.siteimprove.com/rules/sia-r17) | **10** of 10 | [View Rule](https://alfa.siteimprove.com/rules/sia-r17) |
| [SIA-R73](https://alfa.siteimprove.com/rules/sia-r73): Text spacing can be adjusted without loss of content | **10** of 10 | [View Rule](https://alfa.siteimprove.com/rules/sia-r73) |
| [SIA-R59](https://alfa.siteimprove.com/rules/sia-r59): Document has at least one heading to identify its main content | **4** of 10 | [View Rule](https://alfa.siteimprove.com/rules/sia-r59) |
| [SIA-R18](https://alfa.siteimprove.com/rules/sia-r18): ARIA states are consistent with element semantics | **1** of 10 | [View Rule](https://alfa.siteimprove.com/rules/sia-r18) |
| [SIA-R53](https://alfa.siteimprove.com/rules/sia-r53): Headings follow a logical hierarchy | **1** of 10 | [View Rule](https://alfa.siteimprove.com/rules/sia-r53) |

> 💡 **Tip**: Click on the rule documentation links to learn how to fix each issue.


## 🔧 Most Common Issues (axe)

These axe accessibility issues appear most frequently across your pages:

| Rule | Pages Affected | Documentation |
|---|---:|---|
| color-contrast | **10** of 10 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/color-contrast) |
| heading-order | **3** of 10 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/heading-order) |
| landmark-main-is-top-level | **1** of 10 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/landmark-main-is-top-level) |
| landmark-no-duplicate-main | **1** of 10 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/landmark-no-duplicate-main) |

> 💡 **Tip**: Click on the rule documentation links to learn how to fix each issue. Consider fixing the most common issues first for maximum impact.

> 🤖 **Future Enhancement**: This report will soon include AI-powered fix suggestions for authenticated GitHub users (opt-in only, no auto-run AI).

## 🔍 Cross-Page Patterns: Common HTML Issues

These HTML patterns cause the same accessibility errors across multiple pages. **Fix the pattern once in your codebase to fix it everywhere!**

### 🎯 Top Patterns to Fix (Highest Impact)

#### Pattern 1: Affects 10 page(s) - 10 occurrence(s)

**Scanner**: ALFA
**Rule**: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)
**Issue**: Target has insufficient size

**HTML Pattern**:
```html
<a class="text-[#F1FAEE] no-underline hover:underline hover:text-[#457B9D] transition-colors" href="/">Home</a>
```

**XPath** (use in browser DevTools):
```
/a[@class="text-[#F1FAEE] no-underline hover:underline hover:text-[#457B9D] transition-colors"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('/a[@class="text-[#F1FAEE] no-underline hover:underline hover:text-[#457B9D] transition-colors"]')`
5. The element will be highlighted

**Affected Pages**:
- https://adapt-offshore.org/
- https://adapt-offshore.org/about
- https://adapt-offshore.org/support
- https://adapt-offshore.org/membership
- https://adapt-offshore.org/privacy
- *...and 5 more page(s)*

---

#### Pattern 2: Affects 10 page(s) - 10 occurrence(s)

**Scanner**: ALFA
**Rule**: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)
**Issue**: Target has insufficient size

**HTML Pattern**:
```html
<a class="text-[#F1FAEE] no-underline hover:underline hover:text-[#457B9D] transition-colors" href="/#mission">Our Programs</a>
```

**XPath** (use in browser DevTools):
```
/a[@class="text-[#F1FAEE] no-underline hover:underline hover:text-[#457B9D] transition-colors"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('/a[@class="text-[#F1FAEE] no-underline hover:underline hover:text-[#457B9D] transition-colors"]')`
5. The element will be highlighted

**Affected Pages**:
- https://adapt-offshore.org/
- https://adapt-offshore.org/about
- https://adapt-offshore.org/support
- https://adapt-offshore.org/membership
- https://adapt-offshore.org/privacy
- *...and 5 more page(s)*

---

#### Pattern 3: Affects 10 page(s) - 10 occurrence(s)

**Scanner**: ALFA
**Rule**: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)
**Issue**: Target has insufficient size

**HTML Pattern**:
```html
<a class="text-[#F1FAEE] no-underline hover:underline hover:text-[#457B9D] transition-colors" href="/membership">Membership</a>
```

**XPath** (use in browser DevTools):
```
/a[@class="text-[#F1FAEE] no-underline hover:underline hover:text-[#457B9D] transition-colors"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('/a[@class="text-[#F1FAEE] no-underline hover:underline hover:text-[#457B9D] transition-colors"]')`
5. The element will be highlighted

**Affected Pages**:
- https://adapt-offshore.org/
- https://adapt-offshore.org/about
- https://adapt-offshore.org/support
- https://adapt-offshore.org/membership
- https://adapt-offshore.org/privacy
- *...and 5 more page(s)*

---

#### Pattern 4: Affects 10 page(s) - 10 occurrence(s)

**Scanner**: ALFA
**Rule**: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)
**Issue**: Target has insufficient size

**HTML Pattern**:
```html
<a class="text-[#F1FAEE] no-underline hover:underline hover:text-[#457B9D] transition-colors" href="/support">Support Us</a>
```

**XPath** (use in browser DevTools):
```
/a[@class="text-[#F1FAEE] no-underline hover:underline hover:text-[#457B9D] transition-colors"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('/a[@class="text-[#F1FAEE] no-underline hover:underline hover:text-[#457B9D] transition-colors"]')`
5. The element will be highlighted

**Affected Pages**:
- https://adapt-offshore.org/
- https://adapt-offshore.org/about
- https://adapt-offshore.org/support
- https://adapt-offshore.org/membership
- https://adapt-offshore.org/privacy
- *...and 5 more page(s)*

---

#### Pattern 5: Affects 10 page(s) - 10 occurrence(s)

**Scanner**: ALFA
**Rule**: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)
**Issue**: Target has insufficient size

**HTML Pattern**:
```html
<a class="text-[#F1FAEE] no-underline hover:underline hover:text-[#457B9D] transition-colors" href="/about#newsletter">Get Our Newsletter</a>
```

**XPath** (use in browser DevTools):
```
/a[@class="text-[#F1FAEE] no-underline hover:underline hover:text-[#457B9D] transition-colors"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('/a[@class="text-[#F1FAEE] no-underline hover:underline hover:text-[#457B9D] transition-colors"]')`
5. The element will be highlighted

**Affected Pages**:
- https://adapt-offshore.org/
- https://adapt-offshore.org/about
- https://adapt-offshore.org/support
- https://adapt-offshore.org/membership
- https://adapt-offshore.org/privacy
- *...and 5 more page(s)*

---

#### Pattern 6: Affects 10 page(s) - 10 occurrence(s)

**Scanner**: ALFA
**Rule**: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)
**Issue**: Target has insufficient size

**HTML Pattern**:
```html
<a class="text-[#F1FAEE] no-underline hover:underline hover:text-[#457B9D] transition-colors" href="/about#contact">Contact</a>
```

**XPath** (use in browser DevTools):
```
/a[@class="text-[#F1FAEE] no-underline hover:underline hover:text-[#457B9D] transition-colors"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('/a[@class="text-[#F1FAEE] no-underline hover:underline hover:text-[#457B9D] transition-colors"]')`
5. The element will be highlighted

**Affected Pages**:
- https://adapt-offshore.org/
- https://adapt-offshore.org/about
- https://adapt-offshore.org/support
- https://adapt-offshore.org/membership
- https://adapt-offshore.org/privacy
- *...and 5 more page(s)*

---

#### Pattern 7: Affects 10 page(s) - 10 occurrence(s)

**Scanner**: ALFA
**Rule**: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)
**Issue**: Target has insufficient size

**HTML Pattern**:
```html
<a class="text-[#F1FAEE] no-underline hover:underline hover:text-[#457B9D] transition-colors" href="/about">About Us</a>
```

**XPath** (use in browser DevTools):
```
/a[@class="text-[#F1FAEE] no-underline hover:underline hover:text-[#457B9D] transition-colors"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('/a[@class="text-[#F1FAEE] no-underline hover:underline hover:text-[#457B9D] transition-colors"]')`
5. The element will be highlighted

**Affected Pages**:
- https://adapt-offshore.org/
- https://adapt-offshore.org/about
- https://adapt-offshore.org/support
- https://adapt-offshore.org/membership
- https://adapt-offshore.org/privacy
- *...and 5 more page(s)*

---

#### Pattern 8: Affects 10 page(s) - 10 occurrence(s)

**Scanner**: ALFA
**Rule**: [SIA-R17: No description](https://alfa.siteimprove.com/rules/sia-r17)
**Issue**: The element is either tabbable or has tabbable descendants

**HTML Pattern**:
```html
<div class="hidden" aria-hidden="true">...</div>
```

**XPath** (use in browser DevTools):
```
/div[@class="hidden"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('/div[@class="hidden"]')`
5. The element will be highlighted

**Affected Pages**:
- https://adapt-offshore.org/
- https://adapt-offshore.org/about
- https://adapt-offshore.org/support
- https://adapt-offshore.org/membership
- https://adapt-offshore.org/privacy
- *...and 5 more page(s)*

---

#### Pattern 9: Affects 10 page(s) - 10 occurrence(s)

**Scanner**: ALFA
**Rule**: [SIA-R73: Text spacing can be adjusted without loss of content](https://alfa.siteimprove.com/rules/sia-r73)
**Issue**: The line height of the paragraph is `normal` which will result in a line height of less than 1.5

**HTML Pattern**:
```html
<p class="mb-2">Adaptive Sailing Offshore, Inc. (501(c)(3) non-pro...</p>
```

**XPath** (use in browser DevTools):
```
/p[@class="mb-2"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('/p[@class="mb-2"]')`
5. The element will be highlighted

**Affected Pages**:
- https://adapt-offshore.org/
- https://adapt-offshore.org/about
- https://adapt-offshore.org/support
- https://adapt-offshore.org/membership
- https://adapt-offshore.org/privacy
- *...and 5 more page(s)*

---

#### Pattern 10: Affects 10 page(s) - 10 occurrence(s)

**Scanner**: ALFA
**Rule**: [SIA-R73: Text spacing can be adjusted without loss of content](https://alfa.siteimprove.com/rules/sia-r73)
**Issue**: The line height of the paragraph is `normal` which will result in a line height of less than 1.5

**HTML Pattern**:
```html
<p class="mb-4">Sailing out of Boston Harbor since July 2025</p>
```

**XPath** (use in browser DevTools):
```
/p[@class="mb-4"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('/p[@class="mb-4"]')`
5. The element will be highlighted

**Affected Pages**:
- https://adapt-offshore.org/
- https://adapt-offshore.org/about
- https://adapt-offshore.org/support
- https://adapt-offshore.org/membership
- https://adapt-offshore.org/privacy
- *...and 5 more page(s)*

---

#### Pattern 11: Affects 10 page(s) - 10 occurrence(s)

**Scanner**: ALFA
**Rule**: [SIA-R73: Text spacing can be adjusted without loss of content](https://alfa.siteimprove.com/rules/sia-r73)
**Issue**: The line height of the paragraph is `normal` which will result in a line height of less than 1.5

**HTML Pattern**:
```html
<p class="mb-4">...</p>
```

**XPath** (use in browser DevTools):
```
/p[@class="mb-4"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('/p[@class="mb-4"]')`
5. The element will be highlighted

**Affected Pages**:
- https://adapt-offshore.org/
- https://adapt-offshore.org/about
- https://adapt-offshore.org/support
- https://adapt-offshore.org/membership
- https://adapt-offshore.org/privacy
- *...and 5 more page(s)*

---

#### Pattern 12: Affects 10 page(s) - 10 occurrence(s)

**Scanner**: ALFA
**Rule**: [SIA-R73: Text spacing can be adjusted without loss of content](https://alfa.siteimprove.com/rules/sia-r73)
**Issue**: The line height of the paragraph is `normal` which will result in a line height of less than 1.5

**HTML Pattern**:
```html
<p>© 2025 Adaptive Sailing Offshore. All rights reser...</p>
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
- https://adapt-offshore.org/
- https://adapt-offshore.org/about
- https://adapt-offshore.org/support
- https://adapt-offshore.org/membership
- https://adapt-offshore.org/privacy
- *...and 5 more page(s)*

---

#### Pattern 13: Affects 5 page(s) - 5 occurrence(s)

**Scanner**: axe
**Rule**: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**Issue**: Elements must meet minimum color contrast ratio thresholds

**HTML Pattern**:
```html
<a href="#support" class="header-link">Support Our Mission</a>
```

**XPath** (use in browser DevTools):
```
.header-link
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.header-link')`
5. The element will be highlighted

**Affected Pages**:
- https://adapt-offshore.org/support
- https://adapt-offshore.org/support?tab=equipment
- https://adapt-offshore.org/support?tab=monetary
- https://adapt-offshore.org/support?tab=services
- https://adapt-offshore.org/support?tab=volunteer

---

#### Pattern 14: Affects 3 page(s) - 19 occurrence(s)

**Scanner**: ALFA
**Rule**: [SIA-R73: Text spacing can be adjusted without loss of content](https://alfa.siteimprove.com/rules/sia-r73)
**Issue**: The line height of the paragraph is `normal` which will result in a line height of less than 1.5

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
- https://adapt-offshore.org/
- https://adapt-offshore.org/membership
- https://adapt-offshore.org/terms

---

#### Pattern 15: Affects 2 page(s) - 9 occurrence(s)

**Scanner**: axe
**Rule**: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**Issue**: Elements must meet minimum color contrast ratio thresholds

**HTML Pattern**:
```html
<p>
```

**XPath** (use in browser DevTools):
```
#mission > p:nth-child(3)
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('#mission > p:nth-child(3)')`
5. The element will be highlighted

**Affected Pages**:
- https://adapt-offshore.org/
- https://adapt-offshore.org/membership

---

> 💡 **Pro Tip**: These patterns likely come from shared components or templates in your codebase. Fix them in the component/template source, and the fix will propagate to all affected pages.

## 📊 Detailed Results

Complete scan results for all tested pages:

| Submitted URL | Final URL | Status | HTTP | Redirected | Time (ms) | axe Unique | ALFA Unique | Equal Access Unique | AccessLint Unique | Duplicates | Notes |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|
| https://adapt-offshore.org/ | https://www.adapt-offshore.org/ | OK | 200 | yes | 17194 | 29 | 8 | 12 | 0 | 41 | Adaptive Sailing Offshore |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R111 (Interactive elements have a sufficient target size), SIA-R17, SIA-R73 (Text spacing can be adjusted without loss of content) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_tabbable_unobscured, list_markup_review, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, text_sensory_misuse |
| https://adapt-offshore.org/about | https://www.adapt-offshore.org/about | OK | 200 | yes | 15168 | 28 | 16 | 16 | 2 | 36 | Adaptive Sailing Offshore |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R111 (Interactive elements have a sufficient target size), SIA-R17, SIA-R18 (ARIA states are consistent with element semantics), SIA-R73 (Text spacing can be adjusted without loss of content) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, landmark-main-is-top-level, landmark-no-duplicate-main |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_attribute_redundant, aria_attribute_valid, aria_content_in_landmark, aria_main_label_visible, aria_role_redundant, fieldset_legend_valid, input_label_visible, style_color_misuse, style_highcontrast_visible, text_sensory_misuse |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, landmarks/no-duplicate-main |
| https://adapt-offshore.org/support | https://www.adapt-offshore.org/support | OK | 200 | yes | 26207 | 11 | 6 | 12 | 1 | 9 | Adaptive Sailing Offshore |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R111 (Interactive elements have a sufficient target size), SIA-R17, SIA-R59 (Document has at least one heading to identify its main content), SIA-R73 (Text spacing can be adjusted without loss of content) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, input_label_visible, label_name_visible, style_color_misuse, style_highcontrast_visible, text_block_heading |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: labels-and-names/label-content-mismatch |
| https://adapt-offshore.org/membership | https://www.adapt-offshore.org/membership | OK | 200 | yes | 13425 | 13 | 9 | 10 | 0 | 22 | Adaptive Sailing Offshore |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R111 (Interactive elements have a sufficient target size), SIA-R17, SIA-R73 (Text spacing can be adjusted without loss of content) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, list_markup_review, style_color_misuse, style_highcontrast_visible, text_quoted_correctly, text_sensory_misuse |
| https://adapt-offshore.org/privacy | https://www.adapt-offshore.org/privacy | OK | 200 | yes | 12768 | 15 | 8 | 9 | 0 | 15 | Adaptive Sailing Offshore |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R111 (Interactive elements have a sufficient target size), SIA-R17, SIA-R73 (Text spacing can be adjusted without loss of content) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, style_color_misuse, style_highcontrast_visible, text_block_heading, text_sensory_misuse |
| https://adapt-offshore.org/terms | https://www.adapt-offshore.org/terms | OK | 200 | yes | 15396 | 7 | 7 | 9 | 0 | 15 | Adaptive Sailing Offshore |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R111 (Interactive elements have a sufficient target size), SIA-R17, SIA-R73 (Text spacing can be adjusted without loss of content) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, list_markup_review, style_color_misuse, style_highcontrast_visible, text_block_heading |
| https://adapt-offshore.org/support?tab=equipment | https://www.adapt-offshore.org/support?tab=equipment | OK | 200 | yes | 13936 | 8 | 8 | 7 | 1 | 7 | Adaptive Sailing Offshore |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R111 (Interactive elements have a sufficient target size), SIA-R17, SIA-R53 (Headings follow a logical hierarchy), SIA-R73 (Text spacing can be adjusted without loss of content) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, heading-order |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, input_label_visible, style_color_misuse, style_highcontrast_visible |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: navigable/heading-order |
| https://adapt-offshore.org/support?tab=monetary | https://www.adapt-offshore.org/support?tab=monetary | OK | 200 | yes | 13074 | 11 | 6 | 12 | 1 | 9 | Adaptive Sailing Offshore |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R111 (Interactive elements have a sufficient target size), SIA-R17, SIA-R59 (Document has at least one heading to identify its main content), SIA-R73 (Text spacing can be adjusted without loss of content) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, input_label_visible, label_name_visible, style_color_misuse, style_highcontrast_visible, text_block_heading |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: labels-and-names/label-content-mismatch |
| https://adapt-offshore.org/support?tab=services | https://www.adapt-offshore.org/support?tab=services | OK | 200 | yes | 12815 | 17 | 6 | 9 | 4 | 9 | Adaptive Sailing Offshore |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R111 (Interactive elements have a sufficient target size), SIA-R17, SIA-R59 (Document has at least one heading to identify its main content), SIA-R73 (Text spacing can be adjusted without loss of content) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, heading-order |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, input_label_visible, style_color_misuse, style_highcontrast_visible, text_contrast_sufficient |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, navigable/heading-order |
| https://adapt-offshore.org/support?tab=volunteer | https://www.adapt-offshore.org/support?tab=volunteer | OK | 200 | yes | 13323 | 18 | 6 | 16 | 3 | 8 | Adaptive Sailing Offshore |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R111 (Interactive elements have a sufficient target size), SIA-R17, SIA-R59 (Document has at least one heading to identify its main content), SIA-R73 (Text spacing can be adjusted without loss of content) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, heading-order |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, input_checkboxes_grouped, input_label_visible, label_ref_valid, style_color_misuse, style_highcontrast_visible, text_contrast_sufficient |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, navigable/heading-order |

## Detailed Failure Information (ALFA)

### https://adapt-offshore.org/

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)
**WCAG**: [SC 2.5.8](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-03-25
- Message: Target has insufficient size
- HTML: `<a class="text-[#F1FAEE] no-underline hover:underline hover:text-[#457B9D] transition-colors" href="/">Home</a>`
- XPath: `/a[@class="text-[#F1FAEE] no-underline hover:underline hover:text-[#457B9D] transition-colors"]`

**Failure 2:**
- First identified: 2026-03-25
- Message: Target has insufficient size
- HTML: `<a class="header-link" href="#mission">Our Mission</a>`
- XPath: `/a[@class="header-link"]`

#### Rule: [SIA-R17](https://alfa.siteimprove.com/rules/sia-r17)

**Failure 1:**
- First identified: 2026-03-25
- Message: The element is either tabbable or has tabbable descendants
- HTML: `<div class="hidden" aria-hidden="true">...</div>`
- XPath: `/div[@class="hidden"]`

#### Rule: [SIA-R73: Text spacing can be adjusted without loss of content](https://alfa.siteimprove.com/rules/sia-r73)
**WCAG**: [SC 1.4.12](https://www.w3.org/WAI/WCAG22/Understanding/text-spacing) (Level AA)

**Failure 1:**
- First identified: 2026-03-25
- Message: The line height of the paragraph is `normal` which will result in a line height of less than 1.5
- HTML: `<p class="hero-slogan">Build Your Offshore Sailing Abilities</p>`
- XPath: `/p[@class="hero-slogan"]`

**Failure 2:**
- First identified: 2026-03-25
- Message: The line height of the paragraph is `normal` which will result in a line height of less than 1.5
- HTML: `<p class="text-lg text-green-700 mb-4">...</p>`
- XPath: `/p[@class="text-lg text-green-700 mb-4"]`

**Failure 3:**
- First identified: 2026-03-25
- Message: The line height of the paragraph is `normal` which will result in a line height of less than 1.5
- HTML: `<p>As a member-supported non-profit, our purpose is t...</p>`
- XPath: `/p`

**Failure 4:**
- First identified: 2026-03-25
- Message: The line height of the paragraph is `normal` which will result in a line height of less than 1.5
- HTML: `<p class="mb-2">Adaptive Sailing Offshore, Inc. (501(c)(3) non-pro...</p>`
- XPath: `/p[@class="mb-2"]`

**Failure 5:**
- First identified: 2026-03-25
- Message: The line height of the paragraph is `normal` which will result in a line height of less than 1.5
- HTML: `<p class="mb-4">Sailing out of Boston Harbor since July 2025</p>`
- XPath: `/p[@class="mb-4"]`

### https://adapt-offshore.org/about

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)
**WCAG**: [SC 2.5.8](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-03-25
- Message: Target has insufficient size
- HTML: `<a class="text-[#F1FAEE] no-underline hover:underline hover:text-[#457B9D] transition-colors" href="/">Home</a>`
- XPath: `/a[@class="text-[#F1FAEE] no-underline hover:underline hover:text-[#457B9D] transition-colors"]`

**Failure 2:**
- First identified: 2026-03-25
- Message: Target has insufficient size
- HTML: `<a href="#about" class="header-link">About Adaptive Sailing Offshore</a>`
- XPath: `/a[@class="header-link"]`

#### Rule: [SIA-R17](https://alfa.siteimprove.com/rules/sia-r17)

**Failure 1:**
- First identified: 2026-03-25
- Message: The element is either tabbable or has tabbable descendants
- HTML: `<div class="hidden" aria-hidden="true">...</div>`
- XPath: `/div[@class="hidden"]`

#### Rule: [SIA-R18: ARIA states are consistent with element semantics](https://alfa.siteimprove.com/rules/sia-r18)
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: The attribute is prohibited for the element on which it is specified

#### Rule: [SIA-R73: Text spacing can be adjusted without loss of content](https://alfa.siteimprove.com/rules/sia-r73)
**WCAG**: [SC 1.4.12](https://www.w3.org/WAI/WCAG22/Understanding/text-spacing) (Level AA)

**Failure 1:**
- First identified: 2026-03-25
- Message: The line height of the paragraph is `normal` which will result in a line height of less than 1.5
- HTML: `<p class="text-lg mb-6">Adaptive Sailing Offshore (AO) is a community reso...</p>`
- XPath: `/p[@class="text-lg mb-6"]`

**Failure 2:**
- First identified: 2026-03-25
- Message: The line height of the paragraph is `normal` which will result in a line height of less than 1.5
- HTML: `<p class="mb-6">We operate two donated 33' Beneteau Figaro 2 sailb...</p>`
- XPath: `/p[@class="mb-6"]`

**Failure 3:**
- First identified: 2026-03-25
- Message: The line height of the paragraph is `normal` which will result in a line height of less than 1.5
- HTML: `<p class="mb-8">By reducing common barriers to offshore sailing, A...</p>`
- XPath: `/p[@class="mb-8"]`

**Failure 4:**
- First identified: 2026-03-25
- Message: The line height of the paragraph is `normal` which will result in a line height of less than 1.5
- HTML: `<p class="mb-4">To build the broadest possible sailing community b...</p>`
- XPath: `/p[@class="mb-4"]`

**Failure 5:**
- First identified: 2026-03-25
- Message: The line height of the paragraph is `normal` which will result in a line height of less than 1.5
- HTML: `<p>We focus on reducing barriers that limit participa...</p>`
- XPath: `/p`

*... and 7 more failures for this rule*

### https://adapt-offshore.org/support

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)
**WCAG**: [SC 2.5.8](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-03-25
- Message: Target has insufficient size
- HTML: `<a class="text-[#F1FAEE] no-underline hover:underline hover:text-[#457B9D] transition-colors" href="/">Home</a>`
- XPath: `/a[@class="text-[#F1FAEE] no-underline hover:underline hover:text-[#457B9D] transition-colors"]`

#### Rule: [SIA-R17](https://alfa.siteimprove.com/rules/sia-r17)

**Failure 1:**
- First identified: 2026-03-25
- Message: The element is either tabbable or has tabbable descendants
- HTML: `<div class="hidden" aria-hidden="true">...</div>`
- XPath: `/div[@class="hidden"]`

#### Rule: [SIA-R59: Document has at least one heading to identify its main content](https://alfa.siteimprove.com/rules/sia-r59)
**WCAG**: [SC 2.4.6](https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels) (Level AA)

**Failure 1:**
- First identified: 2026-03-25
- Message: The document does not have a heading element

#### Rule: [SIA-R73: Text spacing can be adjusted without loss of content](https://alfa.siteimprove.com/rules/sia-r73)
**WCAG**: [SC 1.4.12](https://www.w3.org/WAI/WCAG22/Understanding/text-spacing) (Level AA)

**Failure 1:**
- First identified: 2026-03-25
- Message: The line height of the paragraph is `normal` which will result in a line height of less than 1.5
- HTML: `<p class="mb-2">Adaptive Sailing Offshore, Inc. (501(c)(3) non-pro...</p>`
- XPath: `/p[@class="mb-2"]`

**Failure 2:**
- First identified: 2026-03-25
- Message: The line height of the paragraph is `normal` which will result in a line height of less than 1.5
- HTML: `<p class="mb-4">Sailing out of Boston Harbor since July 2025</p>`
- XPath: `/p[@class="mb-4"]`

**Failure 3:**
- First identified: 2026-03-25
- Message: The line height of the paragraph is `normal` which will result in a line height of less than 1.5
- HTML: `<p>© 2025 Adaptive Sailing Offshore. All rights reser...</p>`
- XPath: `/p`

### https://adapt-offshore.org/membership

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)
**WCAG**: [SC 2.5.8](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-03-25
- Message: Target has insufficient size
- HTML: `<a class="text-[#F1FAEE] no-underline hover:underline hover:text-[#457B9D] transition-colors" href="/">Home</a>`
- XPath: `/a[@class="text-[#F1FAEE] no-underline hover:underline hover:text-[#457B9D] transition-colors"]`

**Failure 2:**
- First identified: 2026-03-25
- Message: Target has insufficient size
- HTML: `<a href="#membership" class="header-link">Become a Founding Member</a>`
- XPath: `/a[@class="header-link"]`

#### Rule: [SIA-R17](https://alfa.siteimprove.com/rules/sia-r17)

**Failure 1:**
- First identified: 2026-03-25
- Message: The element is either tabbable or has tabbable descendants
- HTML: `<div class="hidden" aria-hidden="true">...</div>`
- XPath: `/div[@class="hidden"]`

#### Rule: [SIA-R73: Text spacing can be adjusted without loss of content](https://alfa.siteimprove.com/rules/sia-r73)
**WCAG**: [SC 1.4.12](https://www.w3.org/WAI/WCAG22/Understanding/text-spacing) (Level AA)

**Failure 1:**
- First identified: 2026-03-25
- Message: The line height of the paragraph is `normal` which will result in a line height of less than 1.5
- HTML: `<p>...</p>`
- XPath: `/p`

**Failure 2:**
- First identified: 2026-03-25
- Message: The line height of the paragraph is `normal` which will result in a line height of less than 1.5
- HTML: `<p class="text-gray-700 mb-4 min-h-[120px]">Get started sailing offshore. Be part of the crew ...</p>`
- XPath: `/p[@class="text-gray-700 mb-4 min-h-[120px]"]`

**Failure 3:**
- First identified: 2026-03-25
- Message: The line height of the paragraph is `normal` which will result in a line height of less than 1.5
- HTML: `<p class="text-gray-500 text-sm italic mb-6">Activation subject to readiness assessment (see de...</p>`
- XPath: `/p[@class="text-gray-500 text-sm italic mb-6"]`

**Failure 4:**
- First identified: 2026-03-25
- Message: The line height of the paragraph is `normal` which will result in a line height of less than 1.5
- HTML: `<p id="pwyc" class="pl-4 ml-4 col-span-full">...</p>`
- XPath: `/p[@id="pwyc"]`

**Failure 5:**
- First identified: 2026-03-25
- Message: The line height of the paragraph is `normal` which will result in a line height of less than 1.5
- HTML: `<p class="mb-2">Adaptive Sailing Offshore, Inc. (501(c)(3) non-pro...</p>`
- XPath: `/p[@class="mb-2"]`

*... and 1 more failures for this rule*

### https://adapt-offshore.org/privacy

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)
**WCAG**: [SC 2.5.8](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-03-25
- Message: Target has insufficient size
- HTML: `<a class="text-[#F1FAEE] no-underline hover:underline hover:text-[#457B9D] transition-colors" href="/">Home</a>`
- XPath: `/a[@class="text-[#F1FAEE] no-underline hover:underline hover:text-[#457B9D] transition-colors"]`

#### Rule: [SIA-R17](https://alfa.siteimprove.com/rules/sia-r17)

**Failure 1:**
- First identified: 2026-03-25
- Message: The element is either tabbable or has tabbable descendants
- HTML: `<div class="hidden" aria-hidden="true">...</div>`
- XPath: `/div[@class="hidden"]`

#### Rule: [SIA-R73: Text spacing can be adjusted without loss of content](https://alfa.siteimprove.com/rules/sia-r73)
**WCAG**: [SC 1.4.12](https://www.w3.org/WAI/WCAG22/Understanding/text-spacing) (Level AA)

**Failure 1:**
- First identified: 2026-03-25
- Message: The line height of the paragraph is `normal` which will result in a line height of less than 1.5
- HTML: `<p class="text-lg mb-6">...</p>`
- XPath: `/p[@class="text-lg mb-6"]`

**Failure 2:**
- First identified: 2026-03-25
- Message: The line height of the paragraph is `normal` which will result in a line height of less than 1.5
- HTML: `<p class="mb-4">Adaptive Sailing Offshore, Inc. collects personal ...</p>`
- XPath: `/p[@class="mb-4"]`

**Failure 3:**
- First identified: 2026-03-25
- Message: The line height of the paragraph is `normal` which will result in a line height of less than 1.5
- HTML: `<p class="mb-6">...</p>`
- XPath: `/p[@class="mb-6"]`

**Failure 4:**
- First identified: 2026-03-25
- Message: The line height of the paragraph is `normal` which will result in a line height of less than 1.5
- HTML: `<p class="text-sm text-gray-600 mt-8">...</p>`
- XPath: `/p[@class="text-sm text-gray-600 mt-8"]`

**Failure 5:**
- First identified: 2026-03-25
- Message: The line height of the paragraph is `normal` which will result in a line height of less than 1.5
- HTML: `<p class="mb-2">Adaptive Sailing Offshore, Inc. (501(c)(3) non-pro...</p>`
- XPath: `/p[@class="mb-2"]`

*... and 1 more failures for this rule*

### https://adapt-offshore.org/terms

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)
**WCAG**: [SC 2.5.8](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-03-25
- Message: Target has insufficient size
- HTML: `<a class="text-[#F1FAEE] no-underline hover:underline hover:text-[#457B9D] transition-colors" href="/">Home</a>`
- XPath: `/a[@class="text-[#F1FAEE] no-underline hover:underline hover:text-[#457B9D] transition-colors"]`

#### Rule: [SIA-R17](https://alfa.siteimprove.com/rules/sia-r17)

**Failure 1:**
- First identified: 2026-03-25
- Message: The element is either tabbable or has tabbable descendants
- HTML: `<div class="hidden" aria-hidden="true">...</div>`
- XPath: `/div[@class="hidden"]`

#### Rule: [SIA-R73: Text spacing can be adjusted without loss of content](https://alfa.siteimprove.com/rules/sia-r73)
**WCAG**: [SC 1.4.12](https://www.w3.org/WAI/WCAG22/Understanding/text-spacing) (Level AA)

**Failure 1:**
- First identified: 2026-03-25
- Message: The line height of the paragraph is `normal` which will result in a line height of less than 1.5
- HTML: `<p class="text-lg mb-6">...</p>`
- XPath: `/p[@class="text-lg mb-6"]`

**Failure 2:**
- First identified: 2026-03-25
- Message: The line height of the paragraph is `normal` which will result in a line height of less than 1.5
- HTML: `<p class="mb-6">By accessing and using this website, you accept an...</p>`
- XPath: `/p[@class="mb-6"]`

**Failure 3:**
- First identified: 2026-03-25
- Message: The line height of the paragraph is `normal` which will result in a line height of less than 1.5
- HTML: `<p>...</p>`
- XPath: `/p`

**Failure 4:**
- First identified: 2026-03-25
- Message: The line height of the paragraph is `normal` which will result in a line height of less than 1.5
- HTML: `<p class="mb-2">Adaptive Sailing Offshore, Inc. (501(c)(3) non-pro...</p>`
- XPath: `/p[@class="mb-2"]`

**Failure 5:**
- First identified: 2026-03-25
- Message: The line height of the paragraph is `normal` which will result in a line height of less than 1.5
- HTML: `<p class="mb-4">Sailing out of Boston Harbor since July 2025</p>`
- XPath: `/p[@class="mb-4"]`

### https://adapt-offshore.org/support?tab=equipment

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)
**WCAG**: [SC 2.5.8](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-03-25
- Message: Target has insufficient size
- HTML: `<a class="text-[#F1FAEE] no-underline hover:underline hover:text-[#457B9D] transition-colors" href="/">Home</a>`
- XPath: `/a[@class="text-[#F1FAEE] no-underline hover:underline hover:text-[#457B9D] transition-colors"]`

**Failure 2:**
- First identified: 2026-03-25
- Message: Target has insufficient size
- HTML: `<a href="#support" class="header-link">Support Our Mission</a>`
- XPath: `/a[@class="header-link"]`

#### Rule: [SIA-R17](https://alfa.siteimprove.com/rules/sia-r17)

**Failure 1:**
- First identified: 2026-03-25
- Message: The element is either tabbable or has tabbable descendants
- HTML: `<div class="hidden" aria-hidden="true">...</div>`
- XPath: `/div[@class="hidden"]`

#### Rule: [SIA-R53: Headings follow a logical hierarchy](https://alfa.siteimprove.com/rules/sia-r53)
**WCAG**: Best Practice

**Failure 1:**
- First identified: 2026-03-25
- Message: The heading skips one or more levels
- HTML: `<h3 class="text-2xl font-semibold text-[#1D3557] mb-6">Priority Equipment Needs</h3>`
- XPath: `/h3[@class="text-2xl font-semibold text-[#1D3557] mb-6"]`

#### Rule: [SIA-R73: Text spacing can be adjusted without loss of content](https://alfa.siteimprove.com/rules/sia-r73)
**WCAG**: [SC 1.4.12](https://www.w3.org/WAI/WCAG22/Understanding/text-spacing) (Level AA)

**Failure 1:**
- First identified: 2026-03-25
- Message: The line height of the paragraph is `normal` which will result in a line height of less than 1.5
- HTML: `<p class="text-lg mb-8">Equipment donations are crucial for our vessel res...</p>`
- XPath: `/p[@class="text-lg mb-8"]`

**Failure 2:**
- First identified: 2026-03-25
- Message: The line height of the paragraph is `normal` which will result in a line height of less than 1.5
- HTML: `<p class="mb-2">Adaptive Sailing Offshore, Inc. (501(c)(3) non-pro...</p>`
- XPath: `/p[@class="mb-2"]`

**Failure 3:**
- First identified: 2026-03-25
- Message: The line height of the paragraph is `normal` which will result in a line height of less than 1.5
- HTML: `<p class="mb-4">Sailing out of Boston Harbor since July 2025</p>`
- XPath: `/p[@class="mb-4"]`

**Failure 4:**
- First identified: 2026-03-25
- Message: The line height of the paragraph is `normal` which will result in a line height of less than 1.5
- HTML: `<p>© 2025 Adaptive Sailing Offshore. All rights reser...</p>`
- XPath: `/p`

### https://adapt-offshore.org/support?tab=monetary

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)
**WCAG**: [SC 2.5.8](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-03-25
- Message: Target has insufficient size
- HTML: `<a class="text-[#F1FAEE] no-underline hover:underline hover:text-[#457B9D] transition-colors" href="/">Home</a>`
- XPath: `/a[@class="text-[#F1FAEE] no-underline hover:underline hover:text-[#457B9D] transition-colors"]`

#### Rule: [SIA-R17](https://alfa.siteimprove.com/rules/sia-r17)

**Failure 1:**
- First identified: 2026-03-25
- Message: The element is either tabbable or has tabbable descendants
- HTML: `<div class="hidden" aria-hidden="true">...</div>`
- XPath: `/div[@class="hidden"]`

#### Rule: [SIA-R59: Document has at least one heading to identify its main content](https://alfa.siteimprove.com/rules/sia-r59)
**WCAG**: [SC 2.4.6](https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels) (Level AA)

**Failure 1:**
- First identified: 2026-03-25
- Message: The document does not have a heading element

#### Rule: [SIA-R73: Text spacing can be adjusted without loss of content](https://alfa.siteimprove.com/rules/sia-r73)
**WCAG**: [SC 1.4.12](https://www.w3.org/WAI/WCAG22/Understanding/text-spacing) (Level AA)

**Failure 1:**
- First identified: 2026-03-25
- Message: The line height of the paragraph is `normal` which will result in a line height of less than 1.5
- HTML: `<p class="mb-2">Adaptive Sailing Offshore, Inc. (501(c)(3) non-pro...</p>`
- XPath: `/p[@class="mb-2"]`

**Failure 2:**
- First identified: 2026-03-25
- Message: The line height of the paragraph is `normal` which will result in a line height of less than 1.5
- HTML: `<p class="mb-4">Sailing out of Boston Harbor since July 2025</p>`
- XPath: `/p[@class="mb-4"]`

**Failure 3:**
- First identified: 2026-03-25
- Message: The line height of the paragraph is `normal` which will result in a line height of less than 1.5
- HTML: `<p>© 2025 Adaptive Sailing Offshore. All rights reser...</p>`
- XPath: `/p`

### https://adapt-offshore.org/support?tab=services

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)
**WCAG**: [SC 2.5.8](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-03-25
- Message: Target has insufficient size
- HTML: `<a class="text-[#F1FAEE] no-underline hover:underline hover:text-[#457B9D] transition-colors" href="/">Home</a>`
- XPath: `/a[@class="text-[#F1FAEE] no-underline hover:underline hover:text-[#457B9D] transition-colors"]`

#### Rule: [SIA-R17](https://alfa.siteimprove.com/rules/sia-r17)

**Failure 1:**
- First identified: 2026-03-25
- Message: The element is either tabbable or has tabbable descendants
- HTML: `<div class="hidden" aria-hidden="true">...</div>`
- XPath: `/div[@class="hidden"]`

#### Rule: [SIA-R59: Document has at least one heading to identify its main content](https://alfa.siteimprove.com/rules/sia-r59)
**WCAG**: [SC 2.4.6](https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels) (Level AA)

**Failure 1:**
- First identified: 2026-03-25
- Message: The document does not have a heading element

#### Rule: [SIA-R73: Text spacing can be adjusted without loss of content](https://alfa.siteimprove.com/rules/sia-r73)
**WCAG**: [SC 1.4.12](https://www.w3.org/WAI/WCAG22/Understanding/text-spacing) (Level AA)

**Failure 1:**
- First identified: 2026-03-25
- Message: The line height of the paragraph is `normal` which will result in a line height of less than 1.5
- HTML: `<p class="mb-2">Adaptive Sailing Offshore, Inc. (501(c)(3) non-pro...</p>`
- XPath: `/p[@class="mb-2"]`

**Failure 2:**
- First identified: 2026-03-25
- Message: The line height of the paragraph is `normal` which will result in a line height of less than 1.5
- HTML: `<p class="mb-4">Sailing out of Boston Harbor since July 2025</p>`
- XPath: `/p[@class="mb-4"]`

**Failure 3:**
- First identified: 2026-03-25
- Message: The line height of the paragraph is `normal` which will result in a line height of less than 1.5
- HTML: `<p>© 2025 Adaptive Sailing Offshore. All rights reser...</p>`
- XPath: `/p`

### https://adapt-offshore.org/support?tab=volunteer

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)
**WCAG**: [SC 2.5.8](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-03-25
- Message: Target has insufficient size
- HTML: `<a class="text-[#F1FAEE] no-underline hover:underline hover:text-[#457B9D] transition-colors" href="/">Home</a>`
- XPath: `/a[@class="text-[#F1FAEE] no-underline hover:underline hover:text-[#457B9D] transition-colors"]`

#### Rule: [SIA-R17](https://alfa.siteimprove.com/rules/sia-r17)

**Failure 1:**
- First identified: 2026-03-25
- Message: The element is either tabbable or has tabbable descendants
- HTML: `<div class="hidden" aria-hidden="true">...</div>`
- XPath: `/div[@class="hidden"]`

#### Rule: [SIA-R59: Document has at least one heading to identify its main content](https://alfa.siteimprove.com/rules/sia-r59)
**WCAG**: [SC 2.4.6](https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels) (Level AA)

**Failure 1:**
- First identified: 2026-03-25
- Message: The document does not have a heading element

#### Rule: [SIA-R73: Text spacing can be adjusted without loss of content](https://alfa.siteimprove.com/rules/sia-r73)
**WCAG**: [SC 1.4.12](https://www.w3.org/WAI/WCAG22/Understanding/text-spacing) (Level AA)

**Failure 1:**
- First identified: 2026-03-25
- Message: The line height of the paragraph is `normal` which will result in a line height of less than 1.5
- HTML: `<p class="mb-2">Adaptive Sailing Offshore, Inc. (501(c)(3) non-pro...</p>`
- XPath: `/p[@class="mb-2"]`

**Failure 2:**
- First identified: 2026-03-25
- Message: The line height of the paragraph is `normal` which will result in a line height of less than 1.5
- HTML: `<p class="mb-4">Sailing out of Boston Harbor since July 2025</p>`
- XPath: `/p[@class="mb-4"]`

**Failure 3:**
- First identified: 2026-03-25
- Message: The line height of the paragraph is `normal` which will result in a line height of less than 1.5
- HTML: `<p>© 2025 Adaptive Sailing Offshore. All rights reser...</p>`
- XPath: `/p`

## Detailed Failure Information (axe)

### https://adapt-offshore.org/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-03-25
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a class="header-link" href="#mission">Our Mission</a>`
- XPath: `h2 > a[href$="#mission"]`

**Failure 2:**
- First identified: 2026-03-25
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<p>As a member-supported non-profit, our purpose is to build the broadest possible sailing community. Adaptive Sailing Offshore (AO) works to expand access to offshore sailing from Boston Harbor.</p>`
- XPath: `#mission > p:nth-child(2)`

**Failure 3:**
- First identified: 2026-03-25
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<p>`
- XPath: `#mission > p:nth-child(3)`

**Failure 4:**
- First identified: 2026-03-25
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a class="header-link" href="#boats">Our Fleet: Two Capable Figaro 2s</a>`
- XPath: `a[href$="#boats"]`

**Failure 5:**
- First identified: 2026-03-25
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<p>The AO fleet consists of two 33-foot Beneteau Figaro 2s. These celebrated offshore racers are known for their strength and performance, making them an excellent choice for learning seamanship in true maritime conditions.</p>`
- XPath: `#boats > p:nth-child(2)`

*... and 24 more failures for this rule*

### https://adapt-offshore.org/about

#### Rule: [landmark-main-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-main-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: Main landmark should not be contained in another landmark
- HTML: `<section class="section" id="about" role="main" aria-labelledby="about-heading">`
- XPath: `#about`

**Failure 2:**
- First identified: 2026-03-25
- Message: Main landmark should not be contained in another landmark
- HTML: `<section class="section" id="about" role="main" aria-labelledby="about-heading">`
- XPath: `#about`

#### Rule: [landmark-no-duplicate-main](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: Document should not have more than one main landmark
- HTML: `<main id="main-content">`
- XPath: `#main-content`

**Failure 2:**
- First identified: 2026-03-25
- Message: Document should not have more than one main landmark
- HTML: `<main id="main-content">`
- XPath: `#main-content`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-03-25
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="#about" class="header-link">About Adaptive Sailing Offshore</a>`
- XPath: `a[href$="#about"]`

**Failure 2:**
- First identified: 2026-03-25
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<p class="text-lg mb-6">Adaptive Sailing Offshore (AO) is a community resource for safe, inclusive offshore experiences for sailors of diverse abilities, with particular focus on individuals benefiting from additional adaptations.</p>`
- XPath: `.text-lg`

**Failure 3:**
- First identified: 2026-03-25
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<p class="mb-6">We operate two donated 33' Beneteau Figaro 2 sailboats out of Boston Harbor, sailing throughout New England coastal waters within areas covered by SeaTow. Our activities are conducted in appropriate conditions year-round.</p>`
- XPath: `.prose > .mb-6:nth-child(2)`

**Failure 4:**
- First identified: 2026-03-25
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<p class="mb-8">By reducing common barriers to offshore sailing, AO empowers a diverse community of sailors to gain confidence, experience, and connection at sea.</p>`
- XPath: `.prose > .mb-8`

**Failure 5:**
- First identified: 2026-03-25
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="#mission-vision" class="header-link">Our Mission &amp; Vision</a>`
- XPath: `a[href$="#mission-vision"]`

*... and 19 more failures for this rule*

### https://adapt-offshore.org/support

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-03-25
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="#support" class="header-link">Support Our Mission</a>`
- XPath: `.header-link`

**Failure 2:**
- First identified: 2026-03-25
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<li><strong>Restore hulls and replace worn gear</strong> like drivetrains,sails, rigging, and safety equipment</li>`
- XPath: `.mb-12 > ul > li:nth-child(1)`

**Failure 3:**
- First identified: 2026-03-25
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<strong>Restore hulls and replace worn gear</strong>`
- XPath: `li:nth-child(1) > strong`

**Failure 4:**
- First identified: 2026-03-25
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<li><strong>Equip vessels and crewmembers</strong> for safe offshore operations</li>`
- XPath: `.mb-12 > ul > li:nth-child(2)`

**Failure 5:**
- First identified: 2026-03-25
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<strong>Equip vessels and crewmembers</strong>`
- XPath: `li:nth-child(2) > strong`

*... and 6 more failures for this rule*

### https://adapt-offshore.org/membership

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-03-25
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="#membership" class="header-link">Become a Founding Member</a>`
- XPath: `a[href$="#membership"]`

**Failure 2:**
- First identified: 2026-03-25
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<p>To launch our non-profit mission, we are inviting a limited number of passionate sailors to join us as <strong>Founding Members</strong>. This is a unique opportunity to provide essential seed funding while securing flexible access to sailing for seasons to come.</p>`
- XPath: `section:nth-child(1) > p:nth-child(2)`

**Failure 3:**
- First identified: 2026-03-25
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<strong>Founding Members</strong>`
- XPath: `p:nth-child(2) > strong`

**Failure 4:**
- First identified: 2026-03-25
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<p>`
- XPath: `section:nth-child(1) > p:nth-child(3)`

**Failure 5:**
- First identified: 2026-03-25
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<strong>bank of sailing months</strong>`
- XPath: `p:nth-child(3) > strong`

*... and 8 more failures for this rule*

### https://adapt-offshore.org/privacy

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-03-25
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<h1 class="text-4xl font-bold text-[#1D3557] mb-8 text-center">Privacy Policy</h1>`
- XPath: `h1`

**Failure 2:**
- First identified: 2026-03-25
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<h2 class="text-2xl font-semibold text-[#1D3557] mt-8 mb-4">Information We Collect</h2>`
- XPath: `h2:nth-child(2)`

**Failure 3:**
- First identified: 2026-03-25
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<h3 class="text-xl font-semibold text-[#1D3557] mt-6 mb-3">Contact and Communication Forms</h3>`
- XPath: `h3:nth-child(4)`

**Failure 4:**
- First identified: 2026-03-25
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<h3 class="text-xl font-semibold text-[#1D3557] mt-6 mb-3">Payment and Membership Forms</h3>`
- XPath: `h3:nth-child(6)`

**Failure 5:**
- First identified: 2026-03-25
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<h2 class="text-2xl font-semibold text-[#1D3557] mt-8 mb-4">How We Use Your Information</h2>`
- XPath: `h2:nth-child(8)`

*... and 10 more failures for this rule*

### https://adapt-offshore.org/terms

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-03-25
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<h1 class="text-4xl font-bold text-[#1D3557] mb-8 text-center">Terms of Service</h1>`
- XPath: `h1`

**Failure 2:**
- First identified: 2026-03-25
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<h2 class="text-2xl font-semibold text-[#1D3557] mb-4">1. Acceptance of Terms</h2>`
- XPath: `h2:nth-child(2)`

**Failure 3:**
- First identified: 2026-03-25
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<h2 class="text-2xl font-semibold text-[#1D3557] mb-4">2. Use License</h2>`
- XPath: `h2:nth-child(4)`

**Failure 4:**
- First identified: 2026-03-25
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<h2 class="text-2xl font-semibold text-[#1D3557] mb-4">3. Disclaimer</h2>`
- XPath: `h2:nth-child(6)`

**Failure 5:**
- First identified: 2026-03-25
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<h2 class="text-2xl font-semibold text-[#1D3557] mb-4">4. Limitations</h2>`
- XPath: `h2:nth-child(8)`

*... and 2 more failures for this rule*

### https://adapt-offshore.org/support?tab=equipment

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: Heading levels should only increase by one
- HTML: `<h3 class="text-2xl font-semibold text-[#1D3557] mb-6">Priority Equipment Needs</h3>`
- XPath: `.text-2xl`

**Failure 2:**
- First identified: 2026-03-25
- Message: Heading levels should only increase by one
- HTML: `<h3 class="text-2xl font-semibold text-[#1D3557] mb-6">Priority Equipment Needs</h3>`
- XPath: `.text-2xl`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-03-25
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="#support" class="header-link">Support Our Mission</a>`
- XPath: `.header-link`

**Failure 2:**
- First identified: 2026-03-25
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<input id="equipment-name" required="" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#457B9D] focus:border-transparent" placeholder="e.g., Life jackets, Navigation equipment, Safety gear" type="text" name="equipmentName">`
- XPath: `#equipment-name`

**Failure 3:**
- First identified: 2026-03-25
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select id="equipment-condition" name="condition" required="" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#457B9D] focus:border-transparent">`
- XPath: `#equipment-condition`

**Failure 4:**
- First identified: 2026-03-25
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<textarea id="equipment-descriptio..." name="description" rows="4" class="w-full px-3 py-2 bor..." placeholder="Please describe the ...">`
- XPath: `#equipment-description`

**Failure 5:**
- First identified: 2026-03-25
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<input id="equipment-location" required="" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#457B9D] focus:border-transparent" placeholder="City, State" type="text" name="location">`
- XPath: `#equipment-location`

*... and 1 more failures for this rule*

### https://adapt-offshore.org/support?tab=monetary

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-03-25
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="#support" class="header-link">Support Our Mission</a>`
- XPath: `.header-link`

**Failure 2:**
- First identified: 2026-03-25
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<li><strong>Restore hulls and replace worn gear</strong> like drivetrains,sails, rigging, and safety equipment</li>`
- XPath: `.mb-12 > ul > li:nth-child(1)`

**Failure 3:**
- First identified: 2026-03-25
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<strong>Restore hulls and replace worn gear</strong>`
- XPath: `li:nth-child(1) > strong`

**Failure 4:**
- First identified: 2026-03-25
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<li><strong>Equip vessels and crewmembers</strong> for safe offshore operations</li>`
- XPath: `.mb-12 > ul > li:nth-child(2)`

**Failure 5:**
- First identified: 2026-03-25
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<strong>Equip vessels and crewmembers</strong>`
- XPath: `li:nth-child(2) > strong`

*... and 6 more failures for this rule*

### https://adapt-offshore.org/support?tab=services

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-03-25
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<h4 class="font-semibold text-[#457B9D] mb-2">Tax Deductible</h4>`
- XPath: `.text-center:nth-child(1) > h4`

**Failure 2:**
- First identified: 2026-03-25
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<h4 class="font-semibold text-[#457B9D] mb-2">Direct Impact</h4>`
- XPath: `.text-center:nth-child(2) > h4`

**Failure 3:**
- First identified: 2026-03-25
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<h4 class="font-semibold text-[#457B9D] mb-2">Community Recognition</h4>`
- XPath: `.text-center:nth-child(3) > h4`

**Failure 4:**
- First identified: 2026-03-25
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="#support" class="header-link">Support Our Mission</a>`
- XPath: `.header-link`

**Failure 5:**
- First identified: 2026-03-25
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<h4 class="font-semibold text-[#457B9D] mb-2">Tax Deductible</h4>`
- XPath: `.text-center:nth-child(1) > h4`

*... and 10 more failures for this rule*

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: Heading levels should only increase by one
- HTML: `<h3 class="text-2xl font-semibold text-[#1D3557] mb-4">Marine &amp; Technical Services</h3>`
- XPath: `.border-2.hover\:border-\[\#1D3557\].bg-white:nth-child(1) > .text-2xl`

**Failure 2:**
- First identified: 2026-03-25
- Message: Heading levels should only increase by one
- HTML: `<h3 class="text-2xl font-semibold text-[#1D3557] mb-4">Marine &amp; Technical Services</h3>`
- XPath: `.border-2.hover\:border-\[\#1D3557\].bg-white:nth-child(1) > .text-2xl`

### https://adapt-offshore.org/support?tab=volunteer

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-03-25
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<h4 class="font-semibold text-[#457B9D] mb-3 text-center">For Learners</h4>`
- XPath: `div:nth-child(1) > .mb-3`

**Failure 2:**
- First identified: 2026-03-25
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<h4 class="font-semibold text-[#457B9D] mb-3 text-center">For Mentors</h4>`
- XPath: `div:nth-child(2) > .mb-3`

**Failure 3:**
- First identified: 2026-03-25
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="#support" class="header-link">Support Our Mission</a>`
- XPath: `.header-link`

**Failure 4:**
- First identified: 2026-03-25
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<h4 class="font-semibold text-[#457B9D] mb-3 text-center">For Learners</h4>`
- XPath: `div:nth-child(1) > .mb-3`

**Failure 5:**
- First identified: 2026-03-25
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<h4 class="font-semibold text-[#457B9D] mb-3 text-center">For Mentors</h4>`
- XPath: `div:nth-child(2) > .mb-3`

*... and 11 more failures for this rule*

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: Heading levels should only increase by one
- HTML: `<h3 class="text-2xl font-semibold text-[#1D3557] mb-4">Learn &amp; Build Skills</h3>`
- XPath: `.border-2.hover\:border-\[\#1D3557\].bg-white:nth-child(1) > .text-2xl`

**Failure 2:**
- First identified: 2026-03-25
- Message: Heading levels should only increase by one
- HTML: `<h3 class="text-2xl font-semibold text-[#1D3557] mb-4">Learn &amp; Build Skills</h3>`
- XPath: `.border-2.hover\:border-\[\#1D3557\].bg-white:nth-child(1) > .text-2xl`

