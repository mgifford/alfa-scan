# Scan Report: Bixal Accessibility Scan

- Issue: https://github.com/mgifford/open-scans/issues/216
- Submitted by: bi-zz-xal
- Scanned at: 2026-03-27T09:15:16.410Z
- Engines used: AXE, ALFA
- Scan duration: 3.3 minutes
- Total URLs submitted: 20
- Accepted public URLs: 20
- Rejected URLs: 0
- 🎨 **Accessibility personalization (CSS media queries):**
  - 🌙 Dark mode: None of the scanned URLs support `prefers-color-scheme: dark`
  - ⚡ **Reduced motion:** 20 of 20 URLs (100%) support `prefers-reduced-motion: reduce`
  - 🔍 High contrast: None of the scanned URLs support `prefers-contrast: more`
  - 🖥️ **Forced colors:** 20 of 20 URLs (100%) support `forced-colors: active`
  - 🪟 Reduced transparency: None of the scanned URLs support `prefers-reduced-transparency: reduce`
- ALFA outcomes: 9447 passed, 729 failed, 559 cantTell, 994 inapplicable
- axe outcomes: 9461 passed, 287 failed, 360 cantTell, 774 inapplicable
- Equal Access outcomes: 0 passed, 0 failed (0 unique, 0 duplicate), 0 cantTell, 0 inapplicable
- AccessLint outcomes: 0 passed, 0 failed (0 unique, 0 duplicate), 0 cantTell, 0 inapplicable
- QualWeb outcomes: 0 passed, 0 failed, 0 cantTell, 0 inapplicable
- Duplicate findings caught by later scanners: 632

## 🎯 Pages with Most Errors

Focus your efforts on these pages to make the biggest impact (combined scanner unique failures):

| Page | axe Unique | ALFA Unique | Total Unique | Page Title |
|---|---:|---:|---:|---|
| [View Page](https://www.bixal.com/) | 18 | 6 | **24** | We are Bixal |
| [View Page](https://www.bixal.com/blog/why-change-management-matters-government) | 13 | 8 | **21** | A Practical Change Management Process for Federal Agencies |
| [View Page](https://www.bixal.com/our-work/nlm) | 12 | 8 | **20** | Case Study \| Bixal |
| [View Page](https://www.bixal.com/about/john-shortess) | 12 | 7 | **19** | John Shortess \| Bixal |
| [View Page](https://www.bixal.com/about/bethany-thomas) | 12 | 7 | **19** | Bethany Thomas \| Bixal |
| [View Page](https://www.bixal.com/about/melissa-kanaya) | 12 | 7 | **19** | Melissa Kanaya \| Bixal |
| [View Page](https://www.bixal.com/about/gerardo-maldonado) | 12 | 7 | **19** | Gerardo Maldonado \| Bixal |
| [View Page](https://www.bixal.com/about/jayme-charles) | 12 | 7 | **19** | Jayme Charles \| Bixal |
| [View Page](https://www.bixal.com/blog/mastering-communication-five-key-strategies-government-agencies) | 12 | 7 | **19** | Mastering Communication: Five Key Strategies for Government Agencies \| Bixal |
| [View Page](https://www.bixal.com/about/dj-neace) | 12 | 7 | **19** | DJ Neace \| Bixal |

## 🔧 Most Common Issues (ALFA)

These ALFA accessibility issues appear most frequently across your pages:

| Rule | Pages Affected | Documentation |
|---|---:|---|
| [SIA-R111](https://alfa.siteimprove.com/rules/sia-r111): Interactive elements have a sufficient target size | **20** of 20 | [View Rule](https://alfa.siteimprove.com/rules/sia-r111) |
| [SIA-R56](https://alfa.siteimprove.com/rules/sia-r56): Landmarks with the same role are distinguishable | **20** of 20 | [View Rule](https://alfa.siteimprove.com/rules/sia-r56) |
| [SIA-R57](https://alfa.siteimprove.com/rules/sia-r57): Landmarks don't repeat the same content | **20** of 20 | [View Rule](https://alfa.siteimprove.com/rules/sia-r57) |
| [SIA-R86](https://alfa.siteimprove.com/rules/sia-r86): Page has a mechanism to bypass repeated blocks of content | **20** of 20 | [View Rule](https://alfa.siteimprove.com/rules/sia-r86) |
| [SIA-R78](https://alfa.siteimprove.com/rules/sia-r78): Headings of same level have text content between them | **4** of 20 | [View Rule](https://alfa.siteimprove.com/rules/sia-r78) |
| [SIA-R74](https://alfa.siteimprove.com/rules/sia-r74) | **2** of 20 | [View Rule](https://alfa.siteimprove.com/rules/sia-r74) |
| [SIA-R2](https://alfa.siteimprove.com/rules/sia-r2): HTML elements have a valid lang attribute | **1** of 20 | [View Rule](https://alfa.siteimprove.com/rules/sia-r2) |
| [SIA-R66](https://alfa.siteimprove.com/rules/sia-r66): Text has enhanced contrast with its background | **1** of 20 | [View Rule](https://alfa.siteimprove.com/rules/sia-r66) |

> 💡 **Tip**: Click on the rule documentation links to learn how to fix each issue.


## 🔧 Most Common Issues (axe)

These axe accessibility issues appear most frequently across your pages:

| Rule | Pages Affected | Documentation |
|---|---:|---|
| landmark-no-duplicate-banner | **20** of 20 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/landmark-no-duplicate-banner) |
| landmark-unique | **20** of 20 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/landmark-unique) |
| region | **20** of 20 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/region) |
| definition-list | **1** of 20 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/definition-list) |
| image-alt | **1** of 20 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/image-alt) |

> 💡 **Tip**: Click on the rule documentation links to learn how to fix each issue. Consider fixing the most common issues first for maximum impact.

> 🤖 **Future Enhancement**: This report will soon include AI-powered fix suggestions for authenticated GitHub users (opt-in only, no auto-run AI).

## 🔍 Cross-Page Patterns: Common HTML Issues

These HTML patterns cause the same accessibility errors across multiple pages. **Fix the pattern once in your codebase to fix it everywhere!**

### 🎯 Top Patterns to Fix (Highest Impact)

#### Pattern 1: Affects 20 page(s) - 40 occurrence(s)

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
- https://www.bixal.com
- https://www.bixal.com/about/john-shortess
- https://www.bixal.com/about/bethany-thomas
- https://www.bixal.com/about/melissa-kanaya
- https://www.bixal.com/about/gerardo-maldonado
- *...and 15 more page(s)*

---

#### Pattern 2: Affects 20 page(s) - 40 occurrence(s)

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
- https://www.bixal.com
- https://www.bixal.com/about/john-shortess
- https://www.bixal.com/about/bethany-thomas
- https://www.bixal.com/about/melissa-kanaya
- https://www.bixal.com/about/gerardo-maldonado
- *...and 15 more page(s)*

---

#### Pattern 3: Affects 20 page(s) - 20 occurrence(s)

**Scanner**: ALFA
**Rule**: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)
**Issue**: Target has insufficient size

**HTML Pattern**:
```html
<a href="/" title="Bixal" class="bix-site-header__logo">...</a>
```

**XPath** (use in browser DevTools):
```
/a[@class="bix-site-header__logo"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('/a[@class="bix-site-header__logo"]')`
5. The element will be highlighted

**Affected Pages**:
- https://www.bixal.com
- https://www.bixal.com/about/john-shortess
- https://www.bixal.com/about/bethany-thomas
- https://www.bixal.com/about/melissa-kanaya
- https://www.bixal.com/about/gerardo-maldonado
- *...and 15 more page(s)*

---

#### Pattern 4: Affects 20 page(s) - 20 occurrence(s)

**Scanner**: ALFA
**Rule**: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)
**Issue**: Target has insufficient size

**HTML Pattern**:
```html
<a href="tel:1.703.634.5701">703.634.5701</a>
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
- https://www.bixal.com
- https://www.bixal.com/about/john-shortess
- https://www.bixal.com/about/bethany-thomas
- https://www.bixal.com/about/melissa-kanaya
- https://www.bixal.com/about/gerardo-maldonado
- *...and 15 more page(s)*

---

#### Pattern 5: Affects 20 page(s) - 20 occurrence(s)

**Scanner**: ALFA
**Rule**: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)
**Issue**: Target has insufficient size

**HTML Pattern**:
```html
<a href="mailto: info@bixal.com">...</a>
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
- https://www.bixal.com
- https://www.bixal.com/about/john-shortess
- https://www.bixal.com/about/bethany-thomas
- https://www.bixal.com/about/melissa-kanaya
- https://www.bixal.com/about/gerardo-maldonado
- *...and 15 more page(s)*

---

#### Pattern 6: Affects 20 page(s) - 20 occurrence(s)

**Scanner**: ALFA
**Rule**: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)
**Issue**: Target has insufficient size

**HTML Pattern**:
```html
<a href="https://www.iso.org/home.html" rel="nofollow" target="_blank">ISO 9001:2015 </a>
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
- https://www.bixal.com
- https://www.bixal.com/about/john-shortess
- https://www.bixal.com/about/bethany-thomas
- https://www.bixal.com/about/melissa-kanaya
- https://www.bixal.com/about/gerardo-maldonado
- *...and 15 more page(s)*

---

#### Pattern 7: Affects 20 page(s) - 20 occurrence(s)

**Scanner**: ALFA
**Rule**: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)
**Issue**: Target has insufficient size

**HTML Pattern**:
```html
<a href="https://cmmiinstitute.com/learning/appraisals/levels" rel="nofollow" target="_blank">CMMI Level 3 </a>
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
- https://www.bixal.com
- https://www.bixal.com/about/john-shortess
- https://www.bixal.com/about/bethany-thomas
- https://www.bixal.com/about/melissa-kanaya
- https://www.bixal.com/about/gerardo-maldonado
- *...and 15 more page(s)*

---

#### Pattern 8: Affects 20 page(s) - 20 occurrence(s)

**Scanner**: ALFA
**Rule**: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)
**Issue**: Target has insufficient size

**HTML Pattern**:
```html
<a href="/node/29" target="_blank">Privacy policy</a>
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
- https://www.bixal.com
- https://www.bixal.com/about/john-shortess
- https://www.bixal.com/about/bethany-thomas
- https://www.bixal.com/about/melissa-kanaya
- https://www.bixal.com/about/gerardo-maldonado
- *...and 15 more page(s)*

---

#### Pattern 9: Affects 20 page(s) - 20 occurrence(s)

**Scanner**: ALFA
**Rule**: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)
**Issue**: Target has insufficient size

**HTML Pattern**:
```html
<a href="/cookies/documentation" target="_blank">Cookie documentation</a>
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
- https://www.bixal.com
- https://www.bixal.com/about/john-shortess
- https://www.bixal.com/about/bethany-thomas
- https://www.bixal.com/about/melissa-kanaya
- https://www.bixal.com/about/gerardo-maldonado
- *...and 15 more page(s)*

---

#### Pattern 10: Affects 20 page(s) - 20 occurrence(s)

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
- https://www.bixal.com
- https://www.bixal.com/about/john-shortess
- https://www.bixal.com/about/bethany-thomas
- https://www.bixal.com/about/melissa-kanaya
- https://www.bixal.com/about/gerardo-maldonado
- *...and 15 more page(s)*

---

#### Pattern 11: Affects 20 page(s) - 20 occurrence(s)

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
- https://www.bixal.com
- https://www.bixal.com/about/john-shortess
- https://www.bixal.com/about/bethany-thomas
- https://www.bixal.com/about/melissa-kanaya
- https://www.bixal.com/about/gerardo-maldonado
- *...and 15 more page(s)*

---

#### Pattern 12: Affects 20 page(s) - 20 occurrence(s)

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
- https://www.bixal.com
- https://www.bixal.com/about/john-shortess
- https://www.bixal.com/about/bethany-thomas
- https://www.bixal.com/about/melissa-kanaya
- https://www.bixal.com/about/gerardo-maldonado
- *...and 15 more page(s)*

---

#### Pattern 13: Affects 20 page(s) - 20 occurrence(s)

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
- https://www.bixal.com
- https://www.bixal.com/about/john-shortess
- https://www.bixal.com/about/bethany-thomas
- https://www.bixal.com/about/melissa-kanaya
- https://www.bixal.com/about/gerardo-maldonado
- *...and 15 more page(s)*

---

#### Pattern 14: Affects 20 page(s) - 20 occurrence(s)

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
- https://www.bixal.com
- https://www.bixal.com/about/john-shortess
- https://www.bixal.com/about/bethany-thomas
- https://www.bixal.com/about/melissa-kanaya
- https://www.bixal.com/about/gerardo-maldonado
- *...and 15 more page(s)*

---

#### Pattern 15: Affects 20 page(s) - 20 occurrence(s)

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
- https://www.bixal.com
- https://www.bixal.com/about/john-shortess
- https://www.bixal.com/about/bethany-thomas
- https://www.bixal.com/about/melissa-kanaya
- https://www.bixal.com/about/gerardo-maldonado
- *...and 15 more page(s)*

---

> 💡 **Pro Tip**: These patterns likely come from shared components or templates in your codebase. Fix them in the component/template source, and the fix will propagate to all affected pages.

## 📊 Detailed Results

Complete scan results for all tested pages:

| Submitted URL | Final URL | Status | HTTP | Redirected | Time (ms) | axe Unique | ALFA Unique | Equal Access Unique | AccessLint Unique | Duplicates | Notes |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|
| https://www.bixal.com | https://www.bixal.com/ | OK | 200 | no | 11150 | 18 | 6 | 0 | 0 | 31 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R111 (Interactive elements have a sufficient target size), SIA-R56 (Landmarks with the same role are distinguishable), SIA-R57 (Landmarks don't repeat the same content), SIA-R86 (Page has a mechanism to bypass repeated blocks of content) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: definition-list, landmark-no-duplicate-banner, landmark-unique, region |
| https://www.bixal.com/about/john-shortess | https://www.bixal.com/about/john-shortess | OK | 200 | no | 10903 | 12 | 7 | 0 | 0 | 31 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R111 (Interactive elements have a sufficient target size), SIA-R56 (Landmarks with the same role are distinguishable), SIA-R57 (Landmarks don't repeat the same content), SIA-R86 (Page has a mechanism to bypass repeated blocks of content) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
| https://www.bixal.com/about/bethany-thomas | https://www.bixal.com/about/bethany-thomas | OK | 200 | no | 11240 | 12 | 7 | 0 | 0 | 31 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R111 (Interactive elements have a sufficient target size), SIA-R56 (Landmarks with the same role are distinguishable), SIA-R57 (Landmarks don't repeat the same content), SIA-R86 (Page has a mechanism to bypass repeated blocks of content) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
| https://www.bixal.com/about/melissa-kanaya | https://www.bixal.com/about/melissa-kanaya | OK | 200 | no | 10155 | 12 | 7 | 0 | 0 | 31 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R111 (Interactive elements have a sufficient target size), SIA-R56 (Landmarks with the same role are distinguishable), SIA-R57 (Landmarks don't repeat the same content), SIA-R86 (Page has a mechanism to bypass repeated blocks of content) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
| https://www.bixal.com/about/gerardo-maldonado | https://www.bixal.com/about/gerardo-maldonado | OK | 200 | no | 10580 | 12 | 7 | 0 | 0 | 31 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R111 (Interactive elements have a sufficient target size), SIA-R56 (Landmarks with the same role are distinguishable), SIA-R57 (Landmarks don't repeat the same content), SIA-R86 (Page has a mechanism to bypass repeated blocks of content) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
| https://www.bixal.com/our-work/monitoring-evaluation-and-learning | https://www.bixal.com/our-work/monitoring-evaluation-and-learning | OK | 200 | no | 10005 | 12 | 6 | 0 | 0 | 35 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R111 (Interactive elements have a sufficient target size), SIA-R56 (Landmarks with the same role are distinguishable), SIA-R57 (Landmarks don't repeat the same content), SIA-R74, SIA-R86 (Page has a mechanism to bypass repeated blocks of content) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
| https://www.bixal.com/blog/why-change-management-matters-government | https://www.bixal.com/blog/why-change-management-matters-government | OK | 200 | no | 10040 | 13 | 8 | 0 | 0 | 31 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R111 (Interactive elements have a sufficient target size), SIA-R2 (HTML elements have a valid lang attribute), SIA-R56 (Landmarks with the same role are distinguishable), SIA-R57 (Landmarks don't repeat the same content), SIA-R78 (Headings of same level have text content between them), SIA-R86 (Page has a mechanism to bypass repeated blocks of content) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt, landmark-no-duplicate-banner, landmark-unique, region |
| https://www.bixal.com/about/jayme-charles | https://www.bixal.com/about/jayme-charles | OK | 200 | no | 9704 | 12 | 7 | 0 | 0 | 31 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R111 (Interactive elements have a sufficient target size), SIA-R56 (Landmarks with the same role are distinguishable), SIA-R57 (Landmarks don't repeat the same content), SIA-R86 (Page has a mechanism to bypass repeated blocks of content) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
| https://www.bixal.com/blog/mastering-communication-five-key-strategies-government-agencies | https://www.bixal.com/blog/mastering-communication-five-key-strategies-government-agencies | OK | 200 | no | 9205 | 12 | 7 | 0 | 0 | 31 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R111 (Interactive elements have a sufficient target size), SIA-R56 (Landmarks with the same role are distinguishable), SIA-R57 (Landmarks don't repeat the same content), SIA-R78 (Headings of same level have text content between them), SIA-R86 (Page has a mechanism to bypass repeated blocks of content) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
| https://www.bixal.com/our-work/nlm | https://www.bixal.com/our-work/nlm | OK | 200 | no | 10608 | 12 | 8 | 0 | 0 | 37 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R111 (Interactive elements have a sufficient target size), SIA-R56 (Landmarks with the same role are distinguishable), SIA-R57 (Landmarks don't repeat the same content), SIA-R66 (Text has enhanced contrast with its background), SIA-R74, SIA-R86 (Page has a mechanism to bypass repeated blocks of content) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
| https://www.bixal.com/about/dj-neace | https://www.bixal.com/about/dj-neace | OK | 200 | no | 9555 | 12 | 7 | 0 | 0 | 31 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R111 (Interactive elements have a sufficient target size), SIA-R56 (Landmarks with the same role are distinguishable), SIA-R57 (Landmarks don't repeat the same content), SIA-R86 (Page has a mechanism to bypass repeated blocks of content) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
| https://www.bixal.com/about/cecilia-tan | https://www.bixal.com/about/cecilia-tan | OK | 200 | no | 9415 | 12 | 7 | 0 | 0 | 31 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R111 (Interactive elements have a sufficient target size), SIA-R56 (Landmarks with the same role are distinguishable), SIA-R57 (Landmarks don't repeat the same content), SIA-R86 (Page has a mechanism to bypass repeated blocks of content) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
| https://www.bixal.com/blog/bixal-ceo-wins-2024-forum-leading-impact-award | https://www.bixal.com/blog/bixal-ceo-wins-2024-forum-leading-impact-award | OK | 200 | no | 10095 | 12 | 7 | 0 | 0 | 31 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R111 (Interactive elements have a sufficient target size), SIA-R56 (Landmarks with the same role are distinguishable), SIA-R57 (Landmarks don't repeat the same content), SIA-R78 (Headings of same level have text content between them), SIA-R86 (Page has a mechanism to bypass repeated blocks of content) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
| https://www.bixal.com/blog/fortifying-federal-applications-what-shai-hulud-worm-taught-us-about-software-security | https://www.bixal.com/blog/fortifying-federal-applications-what-shai-hulud-worm-taught-us-about-software-security | OK | 200 | no | 9690 | 12 | 7 | 0 | 0 | 31 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R111 (Interactive elements have a sufficient target size), SIA-R56 (Landmarks with the same role are distinguishable), SIA-R57 (Landmarks don't repeat the same content), SIA-R78 (Headings of same level have text content between them), SIA-R86 (Page has a mechanism to bypass repeated blocks of content) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
| https://www.bixal.com/about/denice-fedorowycz | https://www.bixal.com/about/denice-fedorowycz | OK | 200 | no | 9006 | 12 | 7 | 0 | 0 | 31 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R111 (Interactive elements have a sufficient target size), SIA-R56 (Landmarks with the same role are distinguishable), SIA-R57 (Landmarks don't repeat the same content), SIA-R86 (Page has a mechanism to bypass repeated blocks of content) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
| https://www.bixal.com/about/kim-kiefer | https://www.bixal.com/about/kim-kiefer | OK | 200 | no | 9209 | 12 | 7 | 0 | 0 | 31 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R111 (Interactive elements have a sufficient target size), SIA-R56 (Landmarks with the same role are distinguishable), SIA-R57 (Landmarks don't repeat the same content), SIA-R86 (Page has a mechanism to bypass repeated blocks of content) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
| https://www.bixal.com/about/christa-zimmerman | https://www.bixal.com/about/christa-zimmerman | OK | 200 | no | 9690 | 12 | 6 | 0 | 0 | 31 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R111 (Interactive elements have a sufficient target size), SIA-R56 (Landmarks with the same role are distinguishable), SIA-R57 (Landmarks don't repeat the same content), SIA-R86 (Page has a mechanism to bypass repeated blocks of content) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
| https://www.bixal.com/contract-vehicles/GSA-OASIS%2B-MAC-Program-Unrestricted-IDIQ | https://www.bixal.com/contract-vehicles/GSA-OASIS%2B-MAC-Program-Unrestricted-IDIQ | OK | 200 | no | 9626 | 12 | 6 | 0 | 0 | 31 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R111 (Interactive elements have a sufficient target size), SIA-R56 (Landmarks with the same role are distinguishable), SIA-R57 (Landmarks don't repeat the same content), SIA-R86 (Page has a mechanism to bypass repeated blocks of content) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
| https://www.bixal.com/SBA-EADS-BPA | https://www.bixal.com/SBA-EADS-BPA | OK | 200 | no | 9545 | 12 | 6 | 0 | 0 | 33 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R111 (Interactive elements have a sufficient target size), SIA-R56 (Landmarks with the same role are distinguishable), SIA-R57 (Landmarks don't repeat the same content), SIA-R86 (Page has a mechanism to bypass repeated blocks of content) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
| https://www.bixal.com/about/rob-hom | https://www.bixal.com/about/rob-hom | OK | 200 | no | 9587 | 12 | 7 | 0 | 0 | 31 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R111 (Interactive elements have a sufficient target size), SIA-R56 (Landmarks with the same role are distinguishable), SIA-R57 (Landmarks don't repeat the same content), SIA-R86 (Page has a mechanism to bypass repeated blocks of content) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |

## Detailed Failure Information (ALFA)

### https://www.bixal.com

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)
**WCAG**: [SC 2.5.8](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-03-27
- Message: Target has insufficient size
- HTML: `<a href="/" title="Bixal" class="bix-site-header__logo">...</a>`
- XPath: `/a[@class="bix-site-header__logo"]`

**Failure 2:**
- First identified: 2026-03-27
- Message: Target has insufficient size
- HTML: `<a class="bix-site-nav__link " href="/our-work">               Our Work             </a>`
- XPath: `/a[@class="bix-site-nav__link "]`

**Failure 3:**
- First identified: 2026-03-27
- Message: Target has insufficient size
- HTML: `<a href="tel:1.703.634.5701">703.634.5701</a>`
- XPath: `/a`

#### Rule: [SIA-R56: Landmarks with the same role are distinguishable](https://alfa.siteimprove.com/rules/sia-r56)
**WCAG**: [SC 1.3.6](https://www.w3.org/WAI/WCAG22/Understanding/identify-purpose) (Level AAA)

**Failure 1:**
- First identified: 2026-03-27
- Message: Some `banner` have the same name.

#### Rule: [SIA-R57: Landmarks don't repeat the same content](https://alfa.siteimprove.com/rules/sia-r57)
**WCAG**: [SC 1.3.6](https://www.w3.org/WAI/WCAG22/Understanding/identify-purpose) (Level AAA)

**Failure 1:**
- First identified: 2026-03-27
- Message: The text is not included in a landmark region

#### Rule: [SIA-R86: Page has a mechanism to bypass repeated blocks of content](https://alfa.siteimprove.com/rules/sia-r86)
**WCAG**: [SC 2.4.1](https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks) (Level A)

**Failure 1:**
- First identified: 2026-03-27
- Message: The element is marked as decorative but is exposed
- HTML: `<iframe title="reCAPTCHA" width="304" height="78" role="presentation" name="a-e6k8b48sz17e" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation" src="https://www.google.com/recaptcha/api2/anchor?ar=1&k=6LfH1LIqAAAAACvGsKyYIZj3f4yHu3DH7jyN2dBX&co=aHR0cHM6Ly93d3cuYml4YWwuY29tOjQ0Mw..&hl=en&type=image&v=79clEdOi5xQbrrpL2L8kGmK3&theme=light&size=normal&anchor-ms=20000&execute-ms=30000&cb=mqo9xz4bb87x" />`
- XPath: `/iframe`

### https://www.bixal.com/about/john-shortess

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)
**WCAG**: [SC 2.5.8](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-03-27
- Message: Target has insufficient size
- HTML: `<a href="/" title="Bixal" class="bix-site-header__logo">...</a>`
- XPath: `/a[@class="bix-site-header__logo"]`

**Failure 2:**
- First identified: 2026-03-27
- Message: Target has insufficient size
- HTML: `<a class="bix-site-nav__link " href="/our-work">               Our Work             </a>`
- XPath: `/a[@class="bix-site-nav__link "]`

**Failure 3:**
- First identified: 2026-03-27
- Message: Target has insufficient size
- HTML: `<a href="https://www.linkedin.com/in/johnshortess" class="bix-social-nav__link" target="_blank" title="LinkedIn" rel="noopener noreferrer">...</a>`
- XPath: `/a[@class="bix-social-nav__link"]`

**Failure 4:**
- First identified: 2026-03-27
- Message: Target has insufficient size
- HTML: `<a href="tel:1.703.634.5701">703.634.5701</a>`
- XPath: `/a`

#### Rule: [SIA-R56: Landmarks with the same role are distinguishable](https://alfa.siteimprove.com/rules/sia-r56)
**WCAG**: [SC 1.3.6](https://www.w3.org/WAI/WCAG22/Understanding/identify-purpose) (Level AAA)

**Failure 1:**
- First identified: 2026-03-27
- Message: Some `banner` have the same name.

#### Rule: [SIA-R57: Landmarks don't repeat the same content](https://alfa.siteimprove.com/rules/sia-r57)
**WCAG**: [SC 1.3.6](https://www.w3.org/WAI/WCAG22/Understanding/identify-purpose) (Level AAA)

**Failure 1:**
- First identified: 2026-03-27
- Message: The text is not included in a landmark region

#### Rule: [SIA-R86: Page has a mechanism to bypass repeated blocks of content](https://alfa.siteimprove.com/rules/sia-r86)
**WCAG**: [SC 2.4.1](https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks) (Level A)

**Failure 1:**
- First identified: 2026-03-27
- Message: The element is marked as decorative but is exposed
- HTML: `<iframe title="reCAPTCHA" width="304" height="78" role="presentation" name="a-fbs70sffg22v" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation" src="https://www.google.com/recaptcha/api2/anchor?ar=1&k=6LfH1LIqAAAAACvGsKyYIZj3f4yHu3DH7jyN2dBX&co=aHR0cHM6Ly93d3cuYml4YWwuY29tOjQ0Mw..&hl=en&type=image&v=79clEdOi5xQbrrpL2L8kGmK3&theme=light&size=normal&anchor-ms=20000&execute-ms=30000&cb=31gv9t2u9hni" />`
- XPath: `/iframe`

### https://www.bixal.com/about/bethany-thomas

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)
**WCAG**: [SC 2.5.8](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-03-27
- Message: Target has insufficient size
- HTML: `<a href="/" title="Bixal" class="bix-site-header__logo">...</a>`
- XPath: `/a[@class="bix-site-header__logo"]`

**Failure 2:**
- First identified: 2026-03-27
- Message: Target has insufficient size
- HTML: `<a class="bix-site-nav__link " href="/our-work">               Our Work             </a>`
- XPath: `/a[@class="bix-site-nav__link "]`

**Failure 3:**
- First identified: 2026-03-27
- Message: Target has insufficient size
- HTML: `<a href="https://www.linkedin.com/in/bethany-s-thomas/" class="bix-social-nav__link" target="_blank" title="LinkedIn" rel="noopener noreferrer">...</a>`
- XPath: `/a[@class="bix-social-nav__link"]`

**Failure 4:**
- First identified: 2026-03-27
- Message: Target has insufficient size
- HTML: `<a href="tel:1.703.634.5701">703.634.5701</a>`
- XPath: `/a`

#### Rule: [SIA-R56: Landmarks with the same role are distinguishable](https://alfa.siteimprove.com/rules/sia-r56)
**WCAG**: [SC 1.3.6](https://www.w3.org/WAI/WCAG22/Understanding/identify-purpose) (Level AAA)

**Failure 1:**
- First identified: 2026-03-27
- Message: Some `banner` have the same name.

#### Rule: [SIA-R57: Landmarks don't repeat the same content](https://alfa.siteimprove.com/rules/sia-r57)
**WCAG**: [SC 1.3.6](https://www.w3.org/WAI/WCAG22/Understanding/identify-purpose) (Level AAA)

**Failure 1:**
- First identified: 2026-03-27
- Message: The text is not included in a landmark region

#### Rule: [SIA-R86: Page has a mechanism to bypass repeated blocks of content](https://alfa.siteimprove.com/rules/sia-r86)
**WCAG**: [SC 2.4.1](https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks) (Level A)

**Failure 1:**
- First identified: 2026-03-27
- Message: The element is marked as decorative but is exposed
- HTML: `<iframe title="reCAPTCHA" width="304" height="78" role="presentation" name="a-ih4jrmuttree" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation" src="https://www.google.com/recaptcha/api2/anchor?ar=1&k=6LfH1LIqAAAAACvGsKyYIZj3f4yHu3DH7jyN2dBX&co=aHR0cHM6Ly93d3cuYml4YWwuY29tOjQ0Mw..&hl=en&type=image&v=79clEdOi5xQbrrpL2L8kGmK3&theme=light&size=normal&anchor-ms=20000&execute-ms=30000&cb=52kf8nwzt8dc" />`
- XPath: `/iframe`

### https://www.bixal.com/about/melissa-kanaya

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)
**WCAG**: [SC 2.5.8](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-03-27
- Message: Target has insufficient size
- HTML: `<a href="/" title="Bixal" class="bix-site-header__logo">...</a>`
- XPath: `/a[@class="bix-site-header__logo"]`

**Failure 2:**
- First identified: 2026-03-27
- Message: Target has insufficient size
- HTML: `<a class="bix-site-nav__link " href="/our-work">               Our Work             </a>`
- XPath: `/a[@class="bix-site-nav__link "]`

**Failure 3:**
- First identified: 2026-03-27
- Message: Target has insufficient size
- HTML: `<a href="https://www.linkedin.com/in/melissa-kanaya-86a3262/" class="bix-social-nav__link" target="_blank" title="LinkedIn" rel="noopener noreferrer">...</a>`
- XPath: `/a[@class="bix-social-nav__link"]`

**Failure 4:**
- First identified: 2026-03-27
- Message: Target has insufficient size
- HTML: `<a href="tel:1.703.634.5701">703.634.5701</a>`
- XPath: `/a`

#### Rule: [SIA-R56: Landmarks with the same role are distinguishable](https://alfa.siteimprove.com/rules/sia-r56)
**WCAG**: [SC 1.3.6](https://www.w3.org/WAI/WCAG22/Understanding/identify-purpose) (Level AAA)

**Failure 1:**
- First identified: 2026-03-27
- Message: Some `banner` have the same name.

#### Rule: [SIA-R57: Landmarks don't repeat the same content](https://alfa.siteimprove.com/rules/sia-r57)
**WCAG**: [SC 1.3.6](https://www.w3.org/WAI/WCAG22/Understanding/identify-purpose) (Level AAA)

**Failure 1:**
- First identified: 2026-03-27
- Message: The text is not included in a landmark region

#### Rule: [SIA-R86: Page has a mechanism to bypass repeated blocks of content](https://alfa.siteimprove.com/rules/sia-r86)
**WCAG**: [SC 2.4.1](https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks) (Level A)

**Failure 1:**
- First identified: 2026-03-27
- Message: The element is marked as decorative but is exposed
- HTML: `<iframe title="reCAPTCHA" width="304" height="78" role="presentation" name="a-ni1ufrzgmd2l" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation" src="https://www.google.com/recaptcha/api2/anchor?ar=1&k=6LfH1LIqAAAAACvGsKyYIZj3f4yHu3DH7jyN2dBX&co=aHR0cHM6Ly93d3cuYml4YWwuY29tOjQ0Mw..&hl=en&type=image&v=79clEdOi5xQbrrpL2L8kGmK3&theme=light&size=normal&anchor-ms=20000&execute-ms=30000&cb=8hs62sq6r7us" />`
- XPath: `/iframe`

### https://www.bixal.com/about/gerardo-maldonado

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)
**WCAG**: [SC 2.5.8](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-03-27
- Message: Target has insufficient size
- HTML: `<a href="/" title="Bixal" class="bix-site-header__logo">...</a>`
- XPath: `/a[@class="bix-site-header__logo"]`

**Failure 2:**
- First identified: 2026-03-27
- Message: Target has insufficient size
- HTML: `<a class="bix-site-nav__link " href="/our-work">               Our Work             </a>`
- XPath: `/a[@class="bix-site-nav__link "]`

**Failure 3:**
- First identified: 2026-03-27
- Message: Target has insufficient size
- HTML: `<a href="https://www.linkedin.com/in/gerardo-m-3ab35a46/" class="bix-social-nav__link" target="_blank" title="LinkedIn" rel="noopener noreferrer">...</a>`
- XPath: `/a[@class="bix-social-nav__link"]`

**Failure 4:**
- First identified: 2026-03-27
- Message: Target has insufficient size
- HTML: `<a href="tel:1.703.634.5701">703.634.5701</a>`
- XPath: `/a`

#### Rule: [SIA-R56: Landmarks with the same role are distinguishable](https://alfa.siteimprove.com/rules/sia-r56)
**WCAG**: [SC 1.3.6](https://www.w3.org/WAI/WCAG22/Understanding/identify-purpose) (Level AAA)

**Failure 1:**
- First identified: 2026-03-27
- Message: Some `banner` have the same name.

#### Rule: [SIA-R57: Landmarks don't repeat the same content](https://alfa.siteimprove.com/rules/sia-r57)
**WCAG**: [SC 1.3.6](https://www.w3.org/WAI/WCAG22/Understanding/identify-purpose) (Level AAA)

**Failure 1:**
- First identified: 2026-03-27
- Message: The text is not included in a landmark region

#### Rule: [SIA-R86: Page has a mechanism to bypass repeated blocks of content](https://alfa.siteimprove.com/rules/sia-r86)
**WCAG**: [SC 2.4.1](https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks) (Level A)

**Failure 1:**
- First identified: 2026-03-27
- Message: The element is marked as decorative but is exposed
- HTML: `<iframe title="reCAPTCHA" width="304" height="78" role="presentation" name="a-nee85gg32qj7" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation" src="https://www.google.com/recaptcha/api2/anchor?ar=1&k=6LfH1LIqAAAAACvGsKyYIZj3f4yHu3DH7jyN2dBX&co=aHR0cHM6Ly93d3cuYml4YWwuY29tOjQ0Mw..&hl=en&type=image&v=79clEdOi5xQbrrpL2L8kGmK3&theme=light&size=normal&anchor-ms=20000&execute-ms=30000&cb=bjpfiki5nf18" />`
- XPath: `/iframe`

### https://www.bixal.com/our-work/monitoring-evaluation-and-learning

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)
**WCAG**: [SC 2.5.8](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-03-27
- Message: Target has insufficient size
- HTML: `<a href="/" title="Bixal" class="bix-site-header__logo">...</a>`
- XPath: `/a[@class="bix-site-header__logo"]`

**Failure 2:**
- First identified: 2026-03-27
- Message: Target has insufficient size
- HTML: `<a href="tel:1.703.634.5701">703.634.5701</a>`
- XPath: `/a`

#### Rule: [SIA-R56: Landmarks with the same role are distinguishable](https://alfa.siteimprove.com/rules/sia-r56)
**WCAG**: [SC 1.3.6](https://www.w3.org/WAI/WCAG22/Understanding/identify-purpose) (Level AAA)

**Failure 1:**
- First identified: 2026-03-27
- Message: Some `banner` have the same name.

#### Rule: [SIA-R57: Landmarks don't repeat the same content](https://alfa.siteimprove.com/rules/sia-r57)
**WCAG**: [SC 1.3.6](https://www.w3.org/WAI/WCAG22/Understanding/identify-purpose) (Level AAA)

**Failure 1:**
- First identified: 2026-03-27
- Message: The text is not included in a landmark region

#### Rule: [SIA-R74](https://alfa.siteimprove.com/rules/sia-r74)

**Failure 1:**
- First identified: 2026-03-27
- Message: The font size is specified using an absolute unit
- HTML: `<p>Many of Bixal’s federal partners require efficient...</p>`
- XPath: `/p`

#### Rule: [SIA-R86: Page has a mechanism to bypass repeated blocks of content](https://alfa.siteimprove.com/rules/sia-r86)
**WCAG**: [SC 2.4.1](https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks) (Level A)

**Failure 1:**
- First identified: 2026-03-27
- Message: The element is marked as decorative but is exposed
- HTML: `<iframe title="reCAPTCHA" width="304" height="78" role="presentation" name="a-osimean4t917" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation" src="https://www.google.com/recaptcha/api2/anchor?ar=1&k=6LfH1LIqAAAAACvGsKyYIZj3f4yHu3DH7jyN2dBX&co=aHR0cHM6Ly93d3cuYml4YWwuY29tOjQ0Mw..&hl=en&type=image&v=79clEdOi5xQbrrpL2L8kGmK3&theme=light&size=normal&anchor-ms=20000&execute-ms=30000&cb=d5zyzenvet89" />`
- XPath: `/iframe`

### https://www.bixal.com/blog/why-change-management-matters-government

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)
**WCAG**: [SC 2.5.8](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-03-27
- Message: Target has insufficient size
- HTML: `<a href="/" title="Bixal" class="bix-site-header__logo">...</a>`
- XPath: `/a[@class="bix-site-header__logo"]`

**Failure 2:**
- First identified: 2026-03-27
- Message: Target has insufficient size
- HTML: `<a class="bix-site-nav__link " href="/our-work">               Our Work             </a>`
- XPath: `/a[@class="bix-site-nav__link "]`

**Failure 3:**
- First identified: 2026-03-27
- Message: Target has insufficient size
- HTML: `<a href="tel:1.703.634.5701">703.634.5701</a>`
- XPath: `/a`

#### Rule: [SIA-R2: HTML elements have a valid lang attribute](https://alfa.siteimprove.com/rules/sia-r2)
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- First identified: 2026-03-27
- Message: The image does not have an accessible name
- HTML: `<img src="/sites/default/files/inline-images/change%20management%20process_0.png" data-entity-uuid="bd27b0a2-435a-4999-b509-81f92a0dfdfe" data-entity-type="file" width="6360" height="2769" />`
- XPath: `/img`

#### Rule: [SIA-R56: Landmarks with the same role are distinguishable](https://alfa.siteimprove.com/rules/sia-r56)
**WCAG**: [SC 1.3.6](https://www.w3.org/WAI/WCAG22/Understanding/identify-purpose) (Level AAA)

**Failure 1:**
- First identified: 2026-03-27
- Message: Some `banner` have the same name.

#### Rule: [SIA-R57: Landmarks don't repeat the same content](https://alfa.siteimprove.com/rules/sia-r57)
**WCAG**: [SC 1.3.6](https://www.w3.org/WAI/WCAG22/Understanding/identify-purpose) (Level AAA)

**Failure 1:**
- First identified: 2026-03-27
- Message: The text is not included in a landmark region

#### Rule: [SIA-R78: Headings of same level have text content between them](https://alfa.siteimprove.com/rules/sia-r78)
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) (Level A)

**Failure 1:**
- First identified: 2026-03-27
- Message: There is no content between this heading and the next
- HTML: `<h1 class="bix-hero__title">         Blog and News       </h1>`
- XPath: `/h1[@class="bix-hero__title"]`

#### Rule: [SIA-R86: Page has a mechanism to bypass repeated blocks of content](https://alfa.siteimprove.com/rules/sia-r86)
**WCAG**: [SC 2.4.1](https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks) (Level A)

**Failure 1:**
- First identified: 2026-03-27
- Message: The element is marked as decorative but is exposed
- HTML: `<iframe title="reCAPTCHA" width="304" height="78" role="presentation" name="a-bbrddfvf7w2x" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation" src="https://www.google.com/recaptcha/api2/anchor?ar=1&k=6LfH1LIqAAAAACvGsKyYIZj3f4yHu3DH7jyN2dBX&co=aHR0cHM6Ly93d3cuYml4YWwuY29tOjQ0Mw..&hl=en&type=image&v=79clEdOi5xQbrrpL2L8kGmK3&theme=light&size=normal&anchor-ms=20000&execute-ms=30000&cb=bhzb4qa6g134" />`
- XPath: `/iframe`

### https://www.bixal.com/about/jayme-charles

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)
**WCAG**: [SC 2.5.8](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-03-27
- Message: Target has insufficient size
- HTML: `<a href="/" title="Bixal" class="bix-site-header__logo">...</a>`
- XPath: `/a[@class="bix-site-header__logo"]`

**Failure 2:**
- First identified: 2026-03-27
- Message: Target has insufficient size
- HTML: `<a class="bix-site-nav__link " href="/our-work">               Our Work             </a>`
- XPath: `/a[@class="bix-site-nav__link "]`

**Failure 3:**
- First identified: 2026-03-27
- Message: Target has insufficient size
- HTML: `<a href="https://www.linkedin.com/in/jayme-keefer-charles-m-a-10515699/" class="bix-social-nav__link" target="_blank" title="LinkedIn" rel="noopener noreferrer">...</a>`
- XPath: `/a[@class="bix-social-nav__link"]`

**Failure 4:**
- First identified: 2026-03-27
- Message: Target has insufficient size
- HTML: `<a href="tel:1.703.634.5701">703.634.5701</a>`
- XPath: `/a`

#### Rule: [SIA-R56: Landmarks with the same role are distinguishable](https://alfa.siteimprove.com/rules/sia-r56)
**WCAG**: [SC 1.3.6](https://www.w3.org/WAI/WCAG22/Understanding/identify-purpose) (Level AAA)

**Failure 1:**
- First identified: 2026-03-27
- Message: Some `banner` have the same name.

#### Rule: [SIA-R57: Landmarks don't repeat the same content](https://alfa.siteimprove.com/rules/sia-r57)
**WCAG**: [SC 1.3.6](https://www.w3.org/WAI/WCAG22/Understanding/identify-purpose) (Level AAA)

**Failure 1:**
- First identified: 2026-03-27
- Message: The text is not included in a landmark region

#### Rule: [SIA-R86: Page has a mechanism to bypass repeated blocks of content](https://alfa.siteimprove.com/rules/sia-r86)
**WCAG**: [SC 2.4.1](https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks) (Level A)

**Failure 1:**
- First identified: 2026-03-27
- Message: The element is marked as decorative but is exposed
- HTML: `<iframe title="reCAPTCHA" width="304" height="78" role="presentation" name="a-bjzujn2b4j5s" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation" src="https://www.google.com/recaptcha/api2/anchor?ar=1&k=6LfH1LIqAAAAACvGsKyYIZj3f4yHu3DH7jyN2dBX&co=aHR0cHM6Ly93d3cuYml4YWwuY29tOjQ0Mw..&hl=en&type=image&v=79clEdOi5xQbrrpL2L8kGmK3&theme=light&size=normal&anchor-ms=20000&execute-ms=30000&cb=4mhrnbin8h4c" />`
- XPath: `/iframe`

### https://www.bixal.com/blog/mastering-communication-five-key-strategies-government-agencies

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)
**WCAG**: [SC 2.5.8](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-03-27
- Message: Target has insufficient size
- HTML: `<a href="/" title="Bixal" class="bix-site-header__logo">...</a>`
- XPath: `/a[@class="bix-site-header__logo"]`

**Failure 2:**
- First identified: 2026-03-27
- Message: Target has insufficient size
- HTML: `<a class="bix-site-nav__link " href="/our-work">               Our Work             </a>`
- XPath: `/a[@class="bix-site-nav__link "]`

**Failure 3:**
- First identified: 2026-03-27
- Message: Target has insufficient size
- HTML: `<a href="tel:1.703.634.5701">703.634.5701</a>`
- XPath: `/a`

#### Rule: [SIA-R56: Landmarks with the same role are distinguishable](https://alfa.siteimprove.com/rules/sia-r56)
**WCAG**: [SC 1.3.6](https://www.w3.org/WAI/WCAG22/Understanding/identify-purpose) (Level AAA)

**Failure 1:**
- First identified: 2026-03-27
- Message: Some `banner` have the same name.

#### Rule: [SIA-R57: Landmarks don't repeat the same content](https://alfa.siteimprove.com/rules/sia-r57)
**WCAG**: [SC 1.3.6](https://www.w3.org/WAI/WCAG22/Understanding/identify-purpose) (Level AAA)

**Failure 1:**
- First identified: 2026-03-27
- Message: The text is not included in a landmark region

#### Rule: [SIA-R78: Headings of same level have text content between them](https://alfa.siteimprove.com/rules/sia-r78)
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) (Level A)

**Failure 1:**
- First identified: 2026-03-27
- Message: There is no content between this heading and the next
- HTML: `<h1 class="bix-hero__title">         Blog and News       </h1>`
- XPath: `/h1[@class="bix-hero__title"]`

#### Rule: [SIA-R86: Page has a mechanism to bypass repeated blocks of content](https://alfa.siteimprove.com/rules/sia-r86)
**WCAG**: [SC 2.4.1](https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks) (Level A)

**Failure 1:**
- First identified: 2026-03-27
- Message: The element is marked as decorative but is exposed
- HTML: `<iframe title="reCAPTCHA" width="304" height="78" role="presentation" name="a-4vcko4iqj7di" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation" src="https://www.google.com/recaptcha/api2/anchor?ar=1&k=6LfH1LIqAAAAACvGsKyYIZj3f4yHu3DH7jyN2dBX&co=aHR0cHM6Ly93d3cuYml4YWwuY29tOjQ0Mw..&hl=en&type=image&v=79clEdOi5xQbrrpL2L8kGmK3&theme=light&size=normal&anchor-ms=20000&execute-ms=30000&cb=5p7f5ide4a42" />`
- XPath: `/iframe`

### https://www.bixal.com/our-work/nlm

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)
**WCAG**: [SC 2.5.8](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-03-27
- Message: Target has insufficient size
- HTML: `<a href="/" title="Bixal" class="bix-site-header__logo">...</a>`
- XPath: `/a[@class="bix-site-header__logo"]`

**Failure 2:**
- First identified: 2026-03-27
- Message: Target has insufficient size
- HTML: `<a href="tel:1.703.634.5701">703.634.5701</a>`
- XPath: `/a`

#### Rule: [SIA-R56: Landmarks with the same role are distinguishable](https://alfa.siteimprove.com/rules/sia-r56)
**WCAG**: [SC 1.3.6](https://www.w3.org/WAI/WCAG22/Understanding/identify-purpose) (Level AAA)

**Failure 1:**
- First identified: 2026-03-27
- Message: Some `banner` have the same name.

#### Rule: [SIA-R57: Landmarks don't repeat the same content](https://alfa.siteimprove.com/rules/sia-r57)
**WCAG**: [SC 1.3.6](https://www.w3.org/WAI/WCAG22/Understanding/identify-purpose) (Level AAA)

**Failure 1:**
- First identified: 2026-03-27
- Message: The text is not included in a landmark region

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)
**WCAG**: [SC 1.4.6](https://www.w3.org/WAI/WCAG22/Understanding/contrast-enhanced) (Level AAA)

**Failure 1:**
- First identified: 2026-03-27
- Message: The highest possible contrast of the text is 6:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R74](https://alfa.siteimprove.com/rules/sia-r74)

**Failure 1:**
- First identified: 2026-03-27
- Message: The font size is specified using an absolute unit
- HTML: `<p>Bixal assembled a highly qualified team of UX spec...</p>`
- XPath: `/p`

**Failure 2:**
- First identified: 2026-03-27
- Message: The font size is specified using an absolute unit
- HTML: `<p class="overview-text">The Latino community actively engages online and n...</p>`
- XPath: `/p[@class="overview-text"]`

#### Rule: [SIA-R86: Page has a mechanism to bypass repeated blocks of content](https://alfa.siteimprove.com/rules/sia-r86)
**WCAG**: [SC 2.4.1](https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks) (Level A)

**Failure 1:**
- First identified: 2026-03-27
- Message: The element is marked as decorative but is exposed
- HTML: `<iframe title="reCAPTCHA" width="304" height="78" role="presentation" name="a-283r8edwj51m" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation" src="https://www.google.com/recaptcha/api2/anchor?ar=1&k=6LfH1LIqAAAAACvGsKyYIZj3f4yHu3DH7jyN2dBX&co=aHR0cHM6Ly93d3cuYml4YWwuY29tOjQ0Mw..&hl=en&type=image&v=79clEdOi5xQbrrpL2L8kGmK3&theme=light&size=normal&anchor-ms=20000&execute-ms=30000&cb=to8ncjhz01ps" />`
- XPath: `/iframe`

### https://www.bixal.com/about/dj-neace

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)
**WCAG**: [SC 2.5.8](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-03-27
- Message: Target has insufficient size
- HTML: `<a href="/" title="Bixal" class="bix-site-header__logo">...</a>`
- XPath: `/a[@class="bix-site-header__logo"]`

**Failure 2:**
- First identified: 2026-03-27
- Message: Target has insufficient size
- HTML: `<a class="bix-site-nav__link " href="/our-work">               Our Work             </a>`
- XPath: `/a[@class="bix-site-nav__link "]`

**Failure 3:**
- First identified: 2026-03-27
- Message: Target has insufficient size
- HTML: `<a href="https://www.linkedin.com/in/dj-neace-583393a2/" class="bix-social-nav__link" target="_blank" title="LinkedIn" rel="noopener noreferrer">...</a>`
- XPath: `/a[@class="bix-social-nav__link"]`

**Failure 4:**
- First identified: 2026-03-27
- Message: Target has insufficient size
- HTML: `<a href="tel:1.703.634.5701">703.634.5701</a>`
- XPath: `/a`

#### Rule: [SIA-R56: Landmarks with the same role are distinguishable](https://alfa.siteimprove.com/rules/sia-r56)
**WCAG**: [SC 1.3.6](https://www.w3.org/WAI/WCAG22/Understanding/identify-purpose) (Level AAA)

**Failure 1:**
- First identified: 2026-03-27
- Message: Some `banner` have the same name.

#### Rule: [SIA-R57: Landmarks don't repeat the same content](https://alfa.siteimprove.com/rules/sia-r57)
**WCAG**: [SC 1.3.6](https://www.w3.org/WAI/WCAG22/Understanding/identify-purpose) (Level AAA)

**Failure 1:**
- First identified: 2026-03-27
- Message: The text is not included in a landmark region

#### Rule: [SIA-R86: Page has a mechanism to bypass repeated blocks of content](https://alfa.siteimprove.com/rules/sia-r86)
**WCAG**: [SC 2.4.1](https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks) (Level A)

**Failure 1:**
- First identified: 2026-03-27
- Message: The element is marked as decorative but is exposed
- HTML: `<iframe title="reCAPTCHA" width="304" height="78" role="presentation" name="a-54b8ubzczatd" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation" src="https://www.google.com/recaptcha/api2/anchor?ar=1&k=6LfH1LIqAAAAACvGsKyYIZj3f4yHu3DH7jyN2dBX&co=aHR0cHM6Ly93d3cuYml4YWwuY29tOjQ0Mw..&hl=en&type=image&v=79clEdOi5xQbrrpL2L8kGmK3&theme=light&size=normal&anchor-ms=20000&execute-ms=30000&cb=pktp92jlafc8" />`
- XPath: `/iframe`

### https://www.bixal.com/about/cecilia-tan

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)
**WCAG**: [SC 2.5.8](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-03-27
- Message: Target has insufficient size
- HTML: `<a href="/" title="Bixal" class="bix-site-header__logo">...</a>`
- XPath: `/a[@class="bix-site-header__logo"]`

**Failure 2:**
- First identified: 2026-03-27
- Message: Target has insufficient size
- HTML: `<a class="bix-site-nav__link " href="/our-work">               Our Work             </a>`
- XPath: `/a[@class="bix-site-nav__link "]`

**Failure 3:**
- First identified: 2026-03-27
- Message: Target has insufficient size
- HTML: `<a href="https://www.linkedin.com/in/cecilia-l-tan/" class="bix-social-nav__link" target="_blank" title="LinkedIn" rel="noopener noreferrer">...</a>`
- XPath: `/a[@class="bix-social-nav__link"]`

**Failure 4:**
- First identified: 2026-03-27
- Message: Target has insufficient size
- HTML: `<a href="tel:1.703.634.5701">703.634.5701</a>`
- XPath: `/a`

#### Rule: [SIA-R56: Landmarks with the same role are distinguishable](https://alfa.siteimprove.com/rules/sia-r56)
**WCAG**: [SC 1.3.6](https://www.w3.org/WAI/WCAG22/Understanding/identify-purpose) (Level AAA)

**Failure 1:**
- First identified: 2026-03-27
- Message: Some `banner` have the same name.

#### Rule: [SIA-R57: Landmarks don't repeat the same content](https://alfa.siteimprove.com/rules/sia-r57)
**WCAG**: [SC 1.3.6](https://www.w3.org/WAI/WCAG22/Understanding/identify-purpose) (Level AAA)

**Failure 1:**
- First identified: 2026-03-27
- Message: The text is not included in a landmark region

#### Rule: [SIA-R86: Page has a mechanism to bypass repeated blocks of content](https://alfa.siteimprove.com/rules/sia-r86)
**WCAG**: [SC 2.4.1](https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks) (Level A)

**Failure 1:**
- First identified: 2026-03-27
- Message: The element is marked as decorative but is exposed
- HTML: `<iframe title="reCAPTCHA" width="304" height="78" role="presentation" name="a-qqvapcjupu59" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation" src="https://www.google.com/recaptcha/api2/anchor?ar=1&k=6LfH1LIqAAAAACvGsKyYIZj3f4yHu3DH7jyN2dBX&co=aHR0cHM6Ly93d3cuYml4YWwuY29tOjQ0Mw..&hl=en&type=image&v=79clEdOi5xQbrrpL2L8kGmK3&theme=light&size=normal&anchor-ms=20000&execute-ms=30000&cb=gfmgl6sw9k1y" />`
- XPath: `/iframe`

### https://www.bixal.com/blog/bixal-ceo-wins-2024-forum-leading-impact-award

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)
**WCAG**: [SC 2.5.8](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-03-27
- Message: Target has insufficient size
- HTML: `<a href="/" title="Bixal" class="bix-site-header__logo">...</a>`
- XPath: `/a[@class="bix-site-header__logo"]`

**Failure 2:**
- First identified: 2026-03-27
- Message: Target has insufficient size
- HTML: `<a class="bix-site-nav__link " href="/our-work">               Our Work             </a>`
- XPath: `/a[@class="bix-site-nav__link "]`

**Failure 3:**
- First identified: 2026-03-27
- Message: Target has insufficient size
- HTML: `<a href="tel:1.703.634.5701">703.634.5701</a>`
- XPath: `/a`

#### Rule: [SIA-R56: Landmarks with the same role are distinguishable](https://alfa.siteimprove.com/rules/sia-r56)
**WCAG**: [SC 1.3.6](https://www.w3.org/WAI/WCAG22/Understanding/identify-purpose) (Level AAA)

**Failure 1:**
- First identified: 2026-03-27
- Message: Some `banner` have the same name.

#### Rule: [SIA-R57: Landmarks don't repeat the same content](https://alfa.siteimprove.com/rules/sia-r57)
**WCAG**: [SC 1.3.6](https://www.w3.org/WAI/WCAG22/Understanding/identify-purpose) (Level AAA)

**Failure 1:**
- First identified: 2026-03-27
- Message: The text is not included in a landmark region

#### Rule: [SIA-R78: Headings of same level have text content between them](https://alfa.siteimprove.com/rules/sia-r78)
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) (Level A)

**Failure 1:**
- First identified: 2026-03-27
- Message: There is no content between this heading and the next
- HTML: `<h1 class="bix-hero__title">         Blog and News       </h1>`
- XPath: `/h1[@class="bix-hero__title"]`

#### Rule: [SIA-R86: Page has a mechanism to bypass repeated blocks of content](https://alfa.siteimprove.com/rules/sia-r86)
**WCAG**: [SC 2.4.1](https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks) (Level A)

**Failure 1:**
- First identified: 2026-03-27
- Message: The element is marked as decorative but is exposed
- HTML: `<iframe title="reCAPTCHA" width="304" height="78" role="presentation" name="a-csyxmfxgeoxu" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation" src="https://www.google.com/recaptcha/api2/anchor?ar=1&k=6LfH1LIqAAAAACvGsKyYIZj3f4yHu3DH7jyN2dBX&co=aHR0cHM6Ly93d3cuYml4YWwuY29tOjQ0Mw..&hl=en&type=image&v=79clEdOi5xQbrrpL2L8kGmK3&theme=light&size=normal&anchor-ms=20000&execute-ms=30000&cb=b541xgwvc8o" />`
- XPath: `/iframe`

### https://www.bixal.com/blog/fortifying-federal-applications-what-shai-hulud-worm-taught-us-about-software-security

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)
**WCAG**: [SC 2.5.8](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-03-27
- Message: Target has insufficient size
- HTML: `<a href="/" title="Bixal" class="bix-site-header__logo">...</a>`
- XPath: `/a[@class="bix-site-header__logo"]`

**Failure 2:**
- First identified: 2026-03-27
- Message: Target has insufficient size
- HTML: `<a class="bix-site-nav__link " href="/our-work">               Our Work             </a>`
- XPath: `/a[@class="bix-site-nav__link "]`

**Failure 3:**
- First identified: 2026-03-27
- Message: Target has insufficient size
- HTML: `<a href="tel:1.703.634.5701">703.634.5701</a>`
- XPath: `/a`

#### Rule: [SIA-R56: Landmarks with the same role are distinguishable](https://alfa.siteimprove.com/rules/sia-r56)
**WCAG**: [SC 1.3.6](https://www.w3.org/WAI/WCAG22/Understanding/identify-purpose) (Level AAA)

**Failure 1:**
- First identified: 2026-03-27
- Message: Some `banner` have the same name.

#### Rule: [SIA-R57: Landmarks don't repeat the same content](https://alfa.siteimprove.com/rules/sia-r57)
**WCAG**: [SC 1.3.6](https://www.w3.org/WAI/WCAG22/Understanding/identify-purpose) (Level AAA)

**Failure 1:**
- First identified: 2026-03-27
- Message: The text is not included in a landmark region

#### Rule: [SIA-R78: Headings of same level have text content between them](https://alfa.siteimprove.com/rules/sia-r78)
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) (Level A)

**Failure 1:**
- First identified: 2026-03-27
- Message: There is no content between this heading and the next
- HTML: `<h1 class="bix-hero__title">         Blog and News       </h1>`
- XPath: `/h1[@class="bix-hero__title"]`

#### Rule: [SIA-R86: Page has a mechanism to bypass repeated blocks of content](https://alfa.siteimprove.com/rules/sia-r86)
**WCAG**: [SC 2.4.1](https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks) (Level A)

**Failure 1:**
- First identified: 2026-03-27
- Message: The element is marked as decorative but is exposed
- HTML: `<iframe title="reCAPTCHA" width="304" height="78" role="presentation" name="a-ly1lo0p54hmo" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation" src="https://www.google.com/recaptcha/api2/anchor?ar=1&k=6LfH1LIqAAAAACvGsKyYIZj3f4yHu3DH7jyN2dBX&co=aHR0cHM6Ly93d3cuYml4YWwuY29tOjQ0Mw..&hl=en&type=image&v=79clEdOi5xQbrrpL2L8kGmK3&theme=light&size=normal&anchor-ms=120000&execute-ms=30000&cb=skzgccmfvq3b" />`
- XPath: `/iframe`

### https://www.bixal.com/about/denice-fedorowycz

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)
**WCAG**: [SC 2.5.8](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-03-27
- Message: Target has insufficient size
- HTML: `<a href="/" title="Bixal" class="bix-site-header__logo">...</a>`
- XPath: `/a[@class="bix-site-header__logo"]`

**Failure 2:**
- First identified: 2026-03-27
- Message: Target has insufficient size
- HTML: `<a class="bix-site-nav__link " href="/our-work">               Our Work             </a>`
- XPath: `/a[@class="bix-site-nav__link "]`

**Failure 3:**
- First identified: 2026-03-27
- Message: Target has insufficient size
- HTML: `<a href="http://linkedin.com/in/denicefedorowycz/" class="bix-social-nav__link" target="_blank" title="LinkedIn" rel="noopener noreferrer">...</a>`
- XPath: `/a[@class="bix-social-nav__link"]`

**Failure 4:**
- First identified: 2026-03-27
- Message: Target has insufficient size
- HTML: `<a href="tel:1.703.634.5701">703.634.5701</a>`
- XPath: `/a`

#### Rule: [SIA-R56: Landmarks with the same role are distinguishable](https://alfa.siteimprove.com/rules/sia-r56)
**WCAG**: [SC 1.3.6](https://www.w3.org/WAI/WCAG22/Understanding/identify-purpose) (Level AAA)

**Failure 1:**
- First identified: 2026-03-27
- Message: Some `banner` have the same name.

#### Rule: [SIA-R57: Landmarks don't repeat the same content](https://alfa.siteimprove.com/rules/sia-r57)
**WCAG**: [SC 1.3.6](https://www.w3.org/WAI/WCAG22/Understanding/identify-purpose) (Level AAA)

**Failure 1:**
- First identified: 2026-03-27
- Message: The text is not included in a landmark region

#### Rule: [SIA-R86: Page has a mechanism to bypass repeated blocks of content](https://alfa.siteimprove.com/rules/sia-r86)
**WCAG**: [SC 2.4.1](https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks) (Level A)

**Failure 1:**
- First identified: 2026-03-27
- Message: The element is marked as decorative but is exposed
- HTML: `<iframe title="reCAPTCHA" width="304" height="78" role="presentation" name="a-yz9ce828fcfp" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation" src="https://www.google.com/recaptcha/api2/anchor?ar=1&k=6LfH1LIqAAAAACvGsKyYIZj3f4yHu3DH7jyN2dBX&co=aHR0cHM6Ly93d3cuYml4YWwuY29tOjQ0Mw..&hl=en&type=image&v=79clEdOi5xQbrrpL2L8kGmK3&theme=light&size=normal&anchor-ms=20000&execute-ms=30000&cb=ts2y70uk77gc" />`
- XPath: `/iframe`

### https://www.bixal.com/about/kim-kiefer

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)
**WCAG**: [SC 2.5.8](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-03-27
- Message: Target has insufficient size
- HTML: `<a href="/" title="Bixal" class="bix-site-header__logo">...</a>`
- XPath: `/a[@class="bix-site-header__logo"]`

**Failure 2:**
- First identified: 2026-03-27
- Message: Target has insufficient size
- HTML: `<a class="bix-site-nav__link " href="/our-work">               Our Work             </a>`
- XPath: `/a[@class="bix-site-nav__link "]`

**Failure 3:**
- First identified: 2026-03-27
- Message: Target has insufficient size
- HTML: `<a href="https://www.linkedin.com/in/kieferkim/" class="bix-social-nav__link" target="_blank" title="LinkedIn" rel="noopener noreferrer">...</a>`
- XPath: `/a[@class="bix-social-nav__link"]`

**Failure 4:**
- First identified: 2026-03-27
- Message: Target has insufficient size
- HTML: `<a href="tel:1.703.634.5701">703.634.5701</a>`
- XPath: `/a`

#### Rule: [SIA-R56: Landmarks with the same role are distinguishable](https://alfa.siteimprove.com/rules/sia-r56)
**WCAG**: [SC 1.3.6](https://www.w3.org/WAI/WCAG22/Understanding/identify-purpose) (Level AAA)

**Failure 1:**
- First identified: 2026-03-27
- Message: Some `banner` have the same name.

#### Rule: [SIA-R57: Landmarks don't repeat the same content](https://alfa.siteimprove.com/rules/sia-r57)
**WCAG**: [SC 1.3.6](https://www.w3.org/WAI/WCAG22/Understanding/identify-purpose) (Level AAA)

**Failure 1:**
- First identified: 2026-03-27
- Message: The text is not included in a landmark region

#### Rule: [SIA-R86: Page has a mechanism to bypass repeated blocks of content](https://alfa.siteimprove.com/rules/sia-r86)
**WCAG**: [SC 2.4.1](https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks) (Level A)

**Failure 1:**
- First identified: 2026-03-27
- Message: The element is marked as decorative but is exposed
- HTML: `<iframe title="reCAPTCHA" width="304" height="78" role="presentation" name="a-xbwei55l7hj9" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation" src="https://www.google.com/recaptcha/api2/anchor?ar=1&k=6LfH1LIqAAAAACvGsKyYIZj3f4yHu3DH7jyN2dBX&co=aHR0cHM6Ly93d3cuYml4YWwuY29tOjQ0Mw..&hl=en&type=image&v=79clEdOi5xQbrrpL2L8kGmK3&theme=light&size=normal&anchor-ms=20000&execute-ms=30000&cb=qbyytumn1gql" />`
- XPath: `/iframe`

### https://www.bixal.com/about/christa-zimmerman

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)
**WCAG**: [SC 2.5.8](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-03-27
- Message: Target has insufficient size
- HTML: `<a href="/" title="Bixal" class="bix-site-header__logo">...</a>`
- XPath: `/a[@class="bix-site-header__logo"]`

**Failure 2:**
- First identified: 2026-03-27
- Message: Target has insufficient size
- HTML: `<a class="bix-site-nav__link " href="/our-work">               Our Work             </a>`
- XPath: `/a[@class="bix-site-nav__link "]`

**Failure 3:**
- First identified: 2026-03-27
- Message: Target has insufficient size
- HTML: `<a href="tel:1.703.634.5701">703.634.5701</a>`
- XPath: `/a`

#### Rule: [SIA-R56: Landmarks with the same role are distinguishable](https://alfa.siteimprove.com/rules/sia-r56)
**WCAG**: [SC 1.3.6](https://www.w3.org/WAI/WCAG22/Understanding/identify-purpose) (Level AAA)

**Failure 1:**
- First identified: 2026-03-27
- Message: Some `banner` have the same name.

#### Rule: [SIA-R57: Landmarks don't repeat the same content](https://alfa.siteimprove.com/rules/sia-r57)
**WCAG**: [SC 1.3.6](https://www.w3.org/WAI/WCAG22/Understanding/identify-purpose) (Level AAA)

**Failure 1:**
- First identified: 2026-03-27
- Message: The text is not included in a landmark region

#### Rule: [SIA-R86: Page has a mechanism to bypass repeated blocks of content](https://alfa.siteimprove.com/rules/sia-r86)
**WCAG**: [SC 2.4.1](https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks) (Level A)

**Failure 1:**
- First identified: 2026-03-27
- Message: The element is marked as decorative but is exposed
- HTML: `<iframe title="reCAPTCHA" width="304" height="78" role="presentation" name="a-bkadhcs2icva" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation" src="https://www.google.com/recaptcha/api2/anchor?ar=1&k=6LfH1LIqAAAAACvGsKyYIZj3f4yHu3DH7jyN2dBX&co=aHR0cHM6Ly93d3cuYml4YWwuY29tOjQ0Mw..&hl=en&type=image&v=79clEdOi5xQbrrpL2L8kGmK3&theme=light&size=normal&anchor-ms=20000&execute-ms=30000&cb=kn23xqj0e1zg" />`
- XPath: `/iframe`

### https://www.bixal.com/contract-vehicles/GSA-OASIS%2B-MAC-Program-Unrestricted-IDIQ

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)
**WCAG**: [SC 2.5.8](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-03-27
- Message: Target has insufficient size
- HTML: `<a href="/" title="Bixal" class="bix-site-header__logo">...</a>`
- XPath: `/a[@class="bix-site-header__logo"]`

**Failure 2:**
- First identified: 2026-03-27
- Message: Target has insufficient size
- HTML: `<a class="bix-site-nav__link " href="/our-work">               Our Work             </a>`
- XPath: `/a[@class="bix-site-nav__link "]`

**Failure 3:**
- First identified: 2026-03-27
- Message: Target has insufficient size
- HTML: `<a href="tel:1.703.634.5701">703.634.5701</a>`
- XPath: `/a`

#### Rule: [SIA-R56: Landmarks with the same role are distinguishable](https://alfa.siteimprove.com/rules/sia-r56)
**WCAG**: [SC 1.3.6](https://www.w3.org/WAI/WCAG22/Understanding/identify-purpose) (Level AAA)

**Failure 1:**
- First identified: 2026-03-27
- Message: Some `banner` have the same name.

#### Rule: [SIA-R57: Landmarks don't repeat the same content](https://alfa.siteimprove.com/rules/sia-r57)
**WCAG**: [SC 1.3.6](https://www.w3.org/WAI/WCAG22/Understanding/identify-purpose) (Level AAA)

**Failure 1:**
- First identified: 2026-03-27
- Message: The text is not included in a landmark region

#### Rule: [SIA-R86: Page has a mechanism to bypass repeated blocks of content](https://alfa.siteimprove.com/rules/sia-r86)
**WCAG**: [SC 2.4.1](https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks) (Level A)

**Failure 1:**
- First identified: 2026-03-27
- Message: The element is marked as decorative but is exposed
- HTML: `<iframe title="reCAPTCHA" width="304" height="78" role="presentation" name="a-nhfuh2f27fe5" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation" src="https://www.google.com/recaptcha/api2/anchor?ar=1&k=6LfH1LIqAAAAACvGsKyYIZj3f4yHu3DH7jyN2dBX&co=aHR0cHM6Ly93d3cuYml4YWwuY29tOjQ0Mw..&hl=en&type=image&v=79clEdOi5xQbrrpL2L8kGmK3&theme=light&size=normal&anchor-ms=20000&execute-ms=30000&cb=t7i1iu87ogxr" />`
- XPath: `/iframe`

### https://www.bixal.com/SBA-EADS-BPA

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)
**WCAG**: [SC 2.5.8](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-03-27
- Message: Target has insufficient size
- HTML: `<a href="/" title="Bixal" class="bix-site-header__logo">...</a>`
- XPath: `/a[@class="bix-site-header__logo"]`

**Failure 2:**
- First identified: 2026-03-27
- Message: Target has insufficient size
- HTML: `<a class="bix-site-nav__link " href="/our-work">               Our Work             </a>`
- XPath: `/a[@class="bix-site-nav__link "]`

**Failure 3:**
- First identified: 2026-03-27
- Message: Target has insufficient size
- HTML: `<a href="mailto: contracts@bixal.com">...</a>`
- XPath: `/a`

#### Rule: [SIA-R56: Landmarks with the same role are distinguishable](https://alfa.siteimprove.com/rules/sia-r56)
**WCAG**: [SC 1.3.6](https://www.w3.org/WAI/WCAG22/Understanding/identify-purpose) (Level AAA)

**Failure 1:**
- First identified: 2026-03-27
- Message: Some `banner` have the same name.

#### Rule: [SIA-R57: Landmarks don't repeat the same content](https://alfa.siteimprove.com/rules/sia-r57)
**WCAG**: [SC 1.3.6](https://www.w3.org/WAI/WCAG22/Understanding/identify-purpose) (Level AAA)

**Failure 1:**
- First identified: 2026-03-27
- Message: The text is not included in a landmark region

#### Rule: [SIA-R86: Page has a mechanism to bypass repeated blocks of content](https://alfa.siteimprove.com/rules/sia-r86)
**WCAG**: [SC 2.4.1](https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks) (Level A)

**Failure 1:**
- First identified: 2026-03-27
- Message: The element is marked as decorative but is exposed
- HTML: `<iframe title="reCAPTCHA" width="304" height="78" role="presentation" name="a-jaa75k360o7b" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation" src="https://www.google.com/recaptcha/api2/anchor?ar=1&k=6LfH1LIqAAAAACvGsKyYIZj3f4yHu3DH7jyN2dBX&co=aHR0cHM6Ly93d3cuYml4YWwuY29tOjQ0Mw..&hl=en&type=image&v=79clEdOi5xQbrrpL2L8kGmK3&theme=light&size=normal&anchor-ms=20000&execute-ms=30000&cb=w758bsyt6fbd" />`
- XPath: `/iframe`

### https://www.bixal.com/about/rob-hom

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)
**WCAG**: [SC 2.5.8](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-03-27
- Message: Target has insufficient size
- HTML: `<a href="/" title="Bixal" class="bix-site-header__logo">...</a>`
- XPath: `/a[@class="bix-site-header__logo"]`

**Failure 2:**
- First identified: 2026-03-27
- Message: Target has insufficient size
- HTML: `<a class="bix-site-nav__link " href="/our-work">               Our Work             </a>`
- XPath: `/a[@class="bix-site-nav__link "]`

**Failure 3:**
- First identified: 2026-03-27
- Message: Target has insufficient size
- HTML: `<a href="https://www.linkedin.com/in/robhom13" class="bix-social-nav__link" target="_blank" title="LinkedIn" rel="noopener noreferrer">...</a>`
- XPath: `/a[@class="bix-social-nav__link"]`

**Failure 4:**
- First identified: 2026-03-27
- Message: Target has insufficient size
- HTML: `<a href="tel:1.703.634.5701">703.634.5701</a>`
- XPath: `/a`

#### Rule: [SIA-R56: Landmarks with the same role are distinguishable](https://alfa.siteimprove.com/rules/sia-r56)
**WCAG**: [SC 1.3.6](https://www.w3.org/WAI/WCAG22/Understanding/identify-purpose) (Level AAA)

**Failure 1:**
- First identified: 2026-03-27
- Message: Some `banner` have the same name.

#### Rule: [SIA-R57: Landmarks don't repeat the same content](https://alfa.siteimprove.com/rules/sia-r57)
**WCAG**: [SC 1.3.6](https://www.w3.org/WAI/WCAG22/Understanding/identify-purpose) (Level AAA)

**Failure 1:**
- First identified: 2026-03-27
- Message: The text is not included in a landmark region

#### Rule: [SIA-R86: Page has a mechanism to bypass repeated blocks of content](https://alfa.siteimprove.com/rules/sia-r86)
**WCAG**: [SC 2.4.1](https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks) (Level A)

**Failure 1:**
- First identified: 2026-03-27
- Message: The element is marked as decorative but is exposed
- HTML: `<iframe title="reCAPTCHA" width="304" height="78" role="presentation" name="a-6rdgacnw5nbq" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation" src="https://www.google.com/recaptcha/api2/anchor?ar=1&k=6LfH1LIqAAAAACvGsKyYIZj3f4yHu3DH7jyN2dBX&co=aHR0cHM6Ly93d3cuYml4YWwuY29tOjQ0Mw..&hl=en&type=image&v=79clEdOi5xQbrrpL2L8kGmK3&theme=light&size=normal&anchor-ms=20000&execute-ms=30000&cb=m2bizjkuv4ny" />`
- XPath: `/iframe`

## Detailed Failure Information (axe)

### https://www.bixal.com

#### Rule: [definition-list](https://dequeuniversity.com/rules/axe/4.11/definition-list?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) (Level A)

**Failure 1:**
- First identified: 2026-03-27
- Message: <dl> elements must only directly contain properly-ordered <dt> and <dd> groups, <script>, <template> or <div> elements
- HTML: `<dl class="bix-description-list">`
- XPath: `.bix-graphic-list__item:nth-child(1) > .bix-graphic-list__body > .bix-description-list-collection.component--type--description-list-collection.component > .component--type--description-list.component.component--view-mode--default > dl`

**Failure 2:**
- First identified: 2026-03-27
- Message: <dl> elements must only directly contain properly-ordered <dt> and <dd> groups, <script>, <template> or <div> elements
- HTML: `<dl class="bix-description-list">`
- XPath: `.bix-graphic-list__item:nth-child(2) > .bix-graphic-list__body > .bix-description-list-collection.component--type--description-list-collection.component > .component--type--description-list.component.component--view-mode--default > dl`

**Failure 3:**
- First identified: 2026-03-27
- Message: <dl> elements must only directly contain properly-ordered <dt> and <dd> groups, <script>, <template> or <div> elements
- HTML: `<dl class="bix-description-list">`
- XPath: `.bix-graphic-list__item:nth-child(3) > .bix-graphic-list__body > .bix-description-list-collection.component--type--description-list-collection.component > .component--type--description-list.component.component--view-mode--default > dl`

**Failure 4:**
- First identified: 2026-03-27
- Message: <dl> elements must only directly contain properly-ordered <dt> and <dd> groups, <script>, <template> or <div> elements
- HTML: `<dl class="bix-description-list">`
- XPath: `.bix-graphic-list__item:nth-child(4) > .bix-graphic-list__body > .bix-description-list-collection.component--type--description-list-collection.component > .component--type--description-list.component.component--view-mode--default > dl`

**Failure 5:**
- First identified: 2026-03-27
- Message: <dl> elements must only directly contain properly-ordered <dt> and <dd> groups, <script>, <template> or <div> elements
- HTML: `<dl class="bix-description-list">`
- XPath: `.bix-graphic-list__item:nth-child(5) > .bix-graphic-list__body > .bix-description-list-collection.component--type--description-list-collection.component > .component--type--description-list.component.component--view-mode--default > dl`

*... and 1 more failures for this rule*

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-27
- Message: Document should not have more than one banner landmark
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-27
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-27
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-title-prefix">Contact</div>`
- XPath: `#contact > .bix-container > .bix-title-prefix`

**Failure 2:**
- First identified: 2026-03-27
- Message: All page content should be contained by landmarks
- HTML: `<h2 class="bix-section__title">       How can we help?<br>       We'd love to hear from you.     </h2>`
- XPath: `#contact > .bix-container > h2`

**Failure 3:**
- First identified: 2026-03-27
- Message: All page content should be contained by landmarks
- HTML: `<p>Required fields are marked with an asterisk&nbsp;(<abbr title="required" class="bix-hint bix-hint--required">*</abbr>).</p>`
- XPath: `#contact-message-site-wide-form > p`

**Failure 4:**
- First identified: 2026-03-27
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item bix-grid__item--full">`
- XPath: `.bix-grid__item--full.bix-grid__item:nth-child(1)`

**Failure 5:**
- First identified: 2026-03-27
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item">`
- XPath: `.bix-grid__item:nth-child(2)`

*... and 5 more failures for this rule*

### https://www.bixal.com/about/john-shortess

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-27
- Message: Document should not have more than one banner landmark
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-27
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-27
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-title-prefix">Contact</div>`
- XPath: `.bix-title-prefix`

**Failure 2:**
- First identified: 2026-03-27
- Message: All page content should be contained by landmarks
- HTML: `<h2 class="bix-section__title">       How can we help?<br>       We'd love to hear from you.     </h2>`
- XPath: `.bix-section__title`

**Failure 3:**
- First identified: 2026-03-27
- Message: All page content should be contained by landmarks
- HTML: `<p>Required fields are marked with an asterisk&nbsp;(<abbr title="required" class="bix-hint bix-hint--required">*</abbr>).</p>`
- XPath: `#contact-message-site-wide-form > p`

**Failure 4:**
- First identified: 2026-03-27
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item bix-grid__item--full">`
- XPath: `.bix-grid__item--full.bix-grid__item:nth-child(1)`

**Failure 5:**
- First identified: 2026-03-27
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item">`
- XPath: `.bix-grid__item:nth-child(2)`

*... and 5 more failures for this rule*

### https://www.bixal.com/about/bethany-thomas

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-27
- Message: Document should not have more than one banner landmark
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-27
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-27
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-title-prefix">Contact</div>`
- XPath: `.bix-title-prefix`

**Failure 2:**
- First identified: 2026-03-27
- Message: All page content should be contained by landmarks
- HTML: `<h2 class="bix-section__title">       How can we help?<br>       We'd love to hear from you.     </h2>`
- XPath: `.bix-section__title`

**Failure 3:**
- First identified: 2026-03-27
- Message: All page content should be contained by landmarks
- HTML: `<p>Required fields are marked with an asterisk&nbsp;(<abbr title="required" class="bix-hint bix-hint--required">*</abbr>).</p>`
- XPath: `#contact-message-site-wide-form > p`

**Failure 4:**
- First identified: 2026-03-27
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item bix-grid__item--full">`
- XPath: `.bix-grid__item--full.bix-grid__item:nth-child(1)`

**Failure 5:**
- First identified: 2026-03-27
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item">`
- XPath: `.bix-grid__item:nth-child(2)`

*... and 5 more failures for this rule*

### https://www.bixal.com/about/melissa-kanaya

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-27
- Message: Document should not have more than one banner landmark
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-27
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-27
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-title-prefix">Contact</div>`
- XPath: `.bix-title-prefix`

**Failure 2:**
- First identified: 2026-03-27
- Message: All page content should be contained by landmarks
- HTML: `<h2 class="bix-section__title">       How can we help?<br>       We'd love to hear from you.     </h2>`
- XPath: `.bix-section__title`

**Failure 3:**
- First identified: 2026-03-27
- Message: All page content should be contained by landmarks
- HTML: `<p>Required fields are marked with an asterisk&nbsp;(<abbr title="required" class="bix-hint bix-hint--required">*</abbr>).</p>`
- XPath: `#contact-message-site-wide-form > p`

**Failure 4:**
- First identified: 2026-03-27
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item bix-grid__item--full">`
- XPath: `.bix-grid__item--full.bix-grid__item:nth-child(1)`

**Failure 5:**
- First identified: 2026-03-27
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item">`
- XPath: `.bix-grid__item:nth-child(2)`

*... and 5 more failures for this rule*

### https://www.bixal.com/about/gerardo-maldonado

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-27
- Message: Document should not have more than one banner landmark
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-27
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-27
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-title-prefix">Contact</div>`
- XPath: `.bix-title-prefix`

**Failure 2:**
- First identified: 2026-03-27
- Message: All page content should be contained by landmarks
- HTML: `<h2 class="bix-section__title">       How can we help?<br>       We'd love to hear from you.     </h2>`
- XPath: `.bix-section__title`

**Failure 3:**
- First identified: 2026-03-27
- Message: All page content should be contained by landmarks
- HTML: `<p>Required fields are marked with an asterisk&nbsp;(<abbr title="required" class="bix-hint bix-hint--required">*</abbr>).</p>`
- XPath: `#contact-message-site-wide-form > p`

**Failure 4:**
- First identified: 2026-03-27
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item bix-grid__item--full">`
- XPath: `.bix-grid__item--full.bix-grid__item:nth-child(1)`

**Failure 5:**
- First identified: 2026-03-27
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item">`
- XPath: `.bix-grid__item:nth-child(2)`

*... and 5 more failures for this rule*

### https://www.bixal.com/our-work/monitoring-evaluation-and-learning

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-27
- Message: Document should not have more than one banner landmark
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-27
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-27
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-title-prefix">Contact</div>`
- XPath: `.bix-title-prefix`

**Failure 2:**
- First identified: 2026-03-27
- Message: All page content should be contained by landmarks
- HTML: `<h2 class="bix-section__title">       How can we help?<br>       We'd love to hear from you.     </h2>`
- XPath: `.bix-section__title`

**Failure 3:**
- First identified: 2026-03-27
- Message: All page content should be contained by landmarks
- HTML: `<p>Required fields are marked with an asterisk&nbsp;(<abbr title="required" class="bix-hint bix-hint--required">*</abbr>).</p>`
- XPath: `#contact-message-site-wide-form > p`

**Failure 4:**
- First identified: 2026-03-27
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item bix-grid__item--full">`
- XPath: `.bix-grid__item--full.bix-grid__item:nth-child(1)`

**Failure 5:**
- First identified: 2026-03-27
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item">`
- XPath: `.bix-grid__item:nth-child(2)`

*... and 5 more failures for this rule*

### https://www.bixal.com/blog/why-change-management-matters-government

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-03-27
- Message: Images must have alternative text
- HTML: `<img src="/sites/default/files/inline-images/change%20management%20process_0.png" data-entity-uuid="bd27b0a2-435a-4999-b509-81f92a0dfdfe" data-entity-type="file" width="6360" height="2769">`
- XPath: `img[width="6360"]`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-27
- Message: Document should not have more than one banner landmark
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-27
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-27
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-title-prefix">Contact</div>`
- XPath: `.bix-title-prefix`

**Failure 2:**
- First identified: 2026-03-27
- Message: All page content should be contained by landmarks
- HTML: `<h2 class="bix-section__title">       How can we help?<br>       We'd love to hear from you.     </h2>`
- XPath: `.bix-section__title`

**Failure 3:**
- First identified: 2026-03-27
- Message: All page content should be contained by landmarks
- HTML: `<p>Required fields are marked with an asterisk&nbsp;(<abbr title="required" class="bix-hint bix-hint--required">*</abbr>).</p>`
- XPath: `#contact-message-site-wide-form > p`

**Failure 4:**
- First identified: 2026-03-27
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item bix-grid__item--full">`
- XPath: `.bix-grid__item--full.bix-grid__item:nth-child(1)`

**Failure 5:**
- First identified: 2026-03-27
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item">`
- XPath: `.bix-grid__item:nth-child(2)`

*... and 5 more failures for this rule*

### https://www.bixal.com/about/jayme-charles

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-27
- Message: Document should not have more than one banner landmark
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-27
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-27
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-title-prefix">Contact</div>`
- XPath: `.bix-title-prefix`

**Failure 2:**
- First identified: 2026-03-27
- Message: All page content should be contained by landmarks
- HTML: `<h2 class="bix-section__title">       How can we help?<br>       We'd love to hear from you.     </h2>`
- XPath: `.bix-section__title`

**Failure 3:**
- First identified: 2026-03-27
- Message: All page content should be contained by landmarks
- HTML: `<p>Required fields are marked with an asterisk&nbsp;(<abbr title="required" class="bix-hint bix-hint--required">*</abbr>).</p>`
- XPath: `#contact-message-site-wide-form > p`

**Failure 4:**
- First identified: 2026-03-27
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item bix-grid__item--full">`
- XPath: `.bix-grid__item--full.bix-grid__item:nth-child(1)`

**Failure 5:**
- First identified: 2026-03-27
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item">`
- XPath: `.bix-grid__item:nth-child(2)`

*... and 5 more failures for this rule*

### https://www.bixal.com/blog/mastering-communication-five-key-strategies-government-agencies

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-27
- Message: Document should not have more than one banner landmark
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-27
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-27
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-title-prefix">Contact</div>`
- XPath: `.bix-title-prefix`

**Failure 2:**
- First identified: 2026-03-27
- Message: All page content should be contained by landmarks
- HTML: `<h2 class="bix-section__title">       How can we help?<br>       We'd love to hear from you.     </h2>`
- XPath: `.bix-section__title`

**Failure 3:**
- First identified: 2026-03-27
- Message: All page content should be contained by landmarks
- HTML: `<p>Required fields are marked with an asterisk&nbsp;(<abbr title="required" class="bix-hint bix-hint--required">*</abbr>).</p>`
- XPath: `#contact-message-site-wide-form > p`

**Failure 4:**
- First identified: 2026-03-27
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item bix-grid__item--full">`
- XPath: `.bix-grid__item--full.bix-grid__item:nth-child(1)`

**Failure 5:**
- First identified: 2026-03-27
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item">`
- XPath: `.bix-grid__item:nth-child(2)`

*... and 5 more failures for this rule*

### https://www.bixal.com/our-work/nlm

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-27
- Message: Document should not have more than one banner landmark
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-27
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-27
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-title-prefix">Contact</div>`
- XPath: `.bix-title-prefix`

**Failure 2:**
- First identified: 2026-03-27
- Message: All page content should be contained by landmarks
- HTML: `<h2 class="bix-section__title">       How can we help?<br>       We'd love to hear from you.     </h2>`
- XPath: `.bix-section__title`

**Failure 3:**
- First identified: 2026-03-27
- Message: All page content should be contained by landmarks
- HTML: `<p>Required fields are marked with an asterisk&nbsp;(<abbr title="required" class="bix-hint bix-hint--required">*</abbr>).</p>`
- XPath: `#contact-message-site-wide-form > p`

**Failure 4:**
- First identified: 2026-03-27
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item bix-grid__item--full">`
- XPath: `.bix-grid__item--full.bix-grid__item:nth-child(1)`

**Failure 5:**
- First identified: 2026-03-27
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item">`
- XPath: `.bix-grid__item:nth-child(2)`

*... and 5 more failures for this rule*

### https://www.bixal.com/about/dj-neace

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-27
- Message: Document should not have more than one banner landmark
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-27
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-27
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-title-prefix">Contact</div>`
- XPath: `.bix-title-prefix`

**Failure 2:**
- First identified: 2026-03-27
- Message: All page content should be contained by landmarks
- HTML: `<h2 class="bix-section__title">       How can we help?<br>       We'd love to hear from you.     </h2>`
- XPath: `.bix-section__title`

**Failure 3:**
- First identified: 2026-03-27
- Message: All page content should be contained by landmarks
- HTML: `<p>Required fields are marked with an asterisk&nbsp;(<abbr title="required" class="bix-hint bix-hint--required">*</abbr>).</p>`
- XPath: `#contact-message-site-wide-form > p`

**Failure 4:**
- First identified: 2026-03-27
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item bix-grid__item--full">`
- XPath: `.bix-grid__item--full.bix-grid__item:nth-child(1)`

**Failure 5:**
- First identified: 2026-03-27
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item">`
- XPath: `.bix-grid__item:nth-child(2)`

*... and 5 more failures for this rule*

### https://www.bixal.com/about/cecilia-tan

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-27
- Message: Document should not have more than one banner landmark
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-27
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-27
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-title-prefix">Contact</div>`
- XPath: `.bix-title-prefix`

**Failure 2:**
- First identified: 2026-03-27
- Message: All page content should be contained by landmarks
- HTML: `<h2 class="bix-section__title">       How can we help?<br>       We'd love to hear from you.     </h2>`
- XPath: `.bix-section__title`

**Failure 3:**
- First identified: 2026-03-27
- Message: All page content should be contained by landmarks
- HTML: `<p>Required fields are marked with an asterisk&nbsp;(<abbr title="required" class="bix-hint bix-hint--required">*</abbr>).</p>`
- XPath: `#contact-message-site-wide-form > p`

**Failure 4:**
- First identified: 2026-03-27
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item bix-grid__item--full">`
- XPath: `.bix-grid__item--full.bix-grid__item:nth-child(1)`

**Failure 5:**
- First identified: 2026-03-27
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item">`
- XPath: `.bix-grid__item:nth-child(2)`

*... and 5 more failures for this rule*

### https://www.bixal.com/blog/bixal-ceo-wins-2024-forum-leading-impact-award

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-27
- Message: Document should not have more than one banner landmark
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-27
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-27
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-title-prefix">Contact</div>`
- XPath: `.bix-title-prefix`

**Failure 2:**
- First identified: 2026-03-27
- Message: All page content should be contained by landmarks
- HTML: `<h2 class="bix-section__title">       How can we help?<br>       We'd love to hear from you.     </h2>`
- XPath: `h2`

**Failure 3:**
- First identified: 2026-03-27
- Message: All page content should be contained by landmarks
- HTML: `<p>Required fields are marked with an asterisk&nbsp;(<abbr title="required" class="bix-hint bix-hint--required">*</abbr>).</p>`
- XPath: `#contact-message-site-wide-form > p`

**Failure 4:**
- First identified: 2026-03-27
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item bix-grid__item--full">`
- XPath: `.bix-grid__item--full.bix-grid__item:nth-child(1)`

**Failure 5:**
- First identified: 2026-03-27
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item">`
- XPath: `.bix-grid__item:nth-child(2)`

*... and 5 more failures for this rule*

### https://www.bixal.com/blog/fortifying-federal-applications-what-shai-hulud-worm-taught-us-about-software-security

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-27
- Message: Document should not have more than one banner landmark
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-27
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-27
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-title-prefix">Contact</div>`
- XPath: `.bix-title-prefix`

**Failure 2:**
- First identified: 2026-03-27
- Message: All page content should be contained by landmarks
- HTML: `<h2 class="bix-section__title">       How can we help?<br>       We'd love to hear from you.     </h2>`
- XPath: `.bix-section__title`

**Failure 3:**
- First identified: 2026-03-27
- Message: All page content should be contained by landmarks
- HTML: `<p>Required fields are marked with an asterisk&nbsp;(<abbr title="required" class="bix-hint bix-hint--required">*</abbr>).</p>`
- XPath: `#contact-message-site-wide-form > p`

**Failure 4:**
- First identified: 2026-03-27
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item bix-grid__item--full">`
- XPath: `.bix-grid__item--full.bix-grid__item:nth-child(1)`

**Failure 5:**
- First identified: 2026-03-27
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item">`
- XPath: `.bix-grid__item:nth-child(2)`

*... and 5 more failures for this rule*

### https://www.bixal.com/about/denice-fedorowycz

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-27
- Message: Document should not have more than one banner landmark
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-27
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-27
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-title-prefix">Contact</div>`
- XPath: `.bix-title-prefix`

**Failure 2:**
- First identified: 2026-03-27
- Message: All page content should be contained by landmarks
- HTML: `<h2 class="bix-section__title">       How can we help?<br>       We'd love to hear from you.     </h2>`
- XPath: `.bix-section__title`

**Failure 3:**
- First identified: 2026-03-27
- Message: All page content should be contained by landmarks
- HTML: `<p>Required fields are marked with an asterisk&nbsp;(<abbr title="required" class="bix-hint bix-hint--required">*</abbr>).</p>`
- XPath: `#contact-message-site-wide-form > p`

**Failure 4:**
- First identified: 2026-03-27
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item bix-grid__item--full">`
- XPath: `.bix-grid__item--full.bix-grid__item:nth-child(1)`

**Failure 5:**
- First identified: 2026-03-27
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item">`
- XPath: `.bix-grid__item:nth-child(2)`

*... and 5 more failures for this rule*

### https://www.bixal.com/about/kim-kiefer

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-27
- Message: Document should not have more than one banner landmark
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-27
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-27
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-title-prefix">Contact</div>`
- XPath: `.bix-title-prefix`

**Failure 2:**
- First identified: 2026-03-27
- Message: All page content should be contained by landmarks
- HTML: `<h2 class="bix-section__title">       How can we help?<br>       We'd love to hear from you.     </h2>`
- XPath: `.bix-section__title`

**Failure 3:**
- First identified: 2026-03-27
- Message: All page content should be contained by landmarks
- HTML: `<p>Required fields are marked with an asterisk&nbsp;(<abbr title="required" class="bix-hint bix-hint--required">*</abbr>).</p>`
- XPath: `#contact-message-site-wide-form > p`

**Failure 4:**
- First identified: 2026-03-27
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item bix-grid__item--full">`
- XPath: `.bix-grid__item--full.bix-grid__item:nth-child(1)`

**Failure 5:**
- First identified: 2026-03-27
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item">`
- XPath: `.bix-grid__item:nth-child(2)`

*... and 5 more failures for this rule*

### https://www.bixal.com/about/christa-zimmerman

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-27
- Message: Document should not have more than one banner landmark
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-27
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-27
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-title-prefix">Contact</div>`
- XPath: `.bix-title-prefix`

**Failure 2:**
- First identified: 2026-03-27
- Message: All page content should be contained by landmarks
- HTML: `<h2 class="bix-section__title">       How can we help?<br>       We'd love to hear from you.     </h2>`
- XPath: `.bix-section__title`

**Failure 3:**
- First identified: 2026-03-27
- Message: All page content should be contained by landmarks
- HTML: `<p>Required fields are marked with an asterisk&nbsp;(<abbr title="required" class="bix-hint bix-hint--required">*</abbr>).</p>`
- XPath: `#contact-message-site-wide-form > p`

**Failure 4:**
- First identified: 2026-03-27
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item bix-grid__item--full">`
- XPath: `.bix-grid__item--full.bix-grid__item:nth-child(1)`

**Failure 5:**
- First identified: 2026-03-27
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item">`
- XPath: `.bix-grid__item:nth-child(2)`

*... and 5 more failures for this rule*

### https://www.bixal.com/contract-vehicles/GSA-OASIS%2B-MAC-Program-Unrestricted-IDIQ

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-27
- Message: Document should not have more than one banner landmark
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-27
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-27
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-title-prefix">Contact</div>`
- XPath: `.bix-title-prefix`

**Failure 2:**
- First identified: 2026-03-27
- Message: All page content should be contained by landmarks
- HTML: `<h2 class="bix-section__title">       How can we help?<br>       We'd love to hear from you.     </h2>`
- XPath: `.bix-section__title`

**Failure 3:**
- First identified: 2026-03-27
- Message: All page content should be contained by landmarks
- HTML: `<p>Required fields are marked with an asterisk&nbsp;(<abbr title="required" class="bix-hint bix-hint--required">*</abbr>).</p>`
- XPath: `#contact-message-site-wide-form > p`

**Failure 4:**
- First identified: 2026-03-27
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item bix-grid__item--full">`
- XPath: `.bix-grid__item--full.bix-grid__item:nth-child(1)`

**Failure 5:**
- First identified: 2026-03-27
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item">`
- XPath: `.bix-grid__item:nth-child(2)`

*... and 5 more failures for this rule*

### https://www.bixal.com/SBA-EADS-BPA

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-27
- Message: Document should not have more than one banner landmark
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-27
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-27
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-title-prefix">Contact</div>`
- XPath: `.bix-title-prefix`

**Failure 2:**
- First identified: 2026-03-27
- Message: All page content should be contained by landmarks
- HTML: `<h2 class="bix-section__title">       How can we help?<br>       We'd love to hear from you.     </h2>`
- XPath: `.bix-section__title`

**Failure 3:**
- First identified: 2026-03-27
- Message: All page content should be contained by landmarks
- HTML: `<p>Required fields are marked with an asterisk&nbsp;(<abbr title="required" class="bix-hint bix-hint--required">*</abbr>).</p>`
- XPath: `#contact-message-site-wide-form > p`

**Failure 4:**
- First identified: 2026-03-27
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item bix-grid__item--full">`
- XPath: `.bix-grid__item--full.bix-grid__item:nth-child(1)`

**Failure 5:**
- First identified: 2026-03-27
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item">`
- XPath: `.bix-grid__item:nth-child(2)`

*... and 5 more failures for this rule*

### https://www.bixal.com/about/rob-hom

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-27
- Message: Document should not have more than one banner landmark
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-27
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div data-sitewide-alert="" role="banner"></div>`
- XPath: `div[data-sitewide-alert=""]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-27
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-title-prefix">Contact</div>`
- XPath: `.bix-title-prefix`

**Failure 2:**
- First identified: 2026-03-27
- Message: All page content should be contained by landmarks
- HTML: `<h2 class="bix-section__title">       How can we help?<br>       We'd love to hear from you.     </h2>`
- XPath: `.bix-section__title`

**Failure 3:**
- First identified: 2026-03-27
- Message: All page content should be contained by landmarks
- HTML: `<p>Required fields are marked with an asterisk&nbsp;(<abbr title="required" class="bix-hint bix-hint--required">*</abbr>).</p>`
- XPath: `#contact-message-site-wide-form > p`

**Failure 4:**
- First identified: 2026-03-27
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item bix-grid__item--full">`
- XPath: `.bix-grid__item--full.bix-grid__item:nth-child(1)`

**Failure 5:**
- First identified: 2026-03-27
- Message: All page content should be contained by landmarks
- HTML: `<div class="bix-grid__item">`
- XPath: `.bix-grid__item:nth-child(2)`

*... and 5 more failures for this rule*

