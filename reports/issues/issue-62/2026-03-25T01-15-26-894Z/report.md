# Scan Report: Barcelona.cat

- Issue: https://github.com/mgifford/open-scans/issues/62
- Submitted by: mgifford
- Scanned at: 2026-03-25T01:14:37.451Z
- Engines used: AXE, QUALWEB
- Scan duration: 20.6 minutes
- Total URLs submitted: 100
- Accepted public URLs: 100
- Rejected URLs: 0
- 🎨 **Accessibility personalization (CSS media queries):**
  - 🌙 Dark mode: None of the scanned URLs support `prefers-color-scheme: dark`
  - ⚡ **Reduced motion:** 100 of 100 URLs (100%) support `prefers-reduced-motion: reduce`
  - 🔍 High contrast: None of the scanned URLs support `prefers-contrast: more`
  - 🖥️ Forced colors: None of the scanned URLs support `forced-colors: active`
  - 🪟 Reduced transparency: None of the scanned URLs support `prefers-reduced-transparency: reduce`
- ALFA outcomes: 0 passed, 0 failed, 0 cantTell, 0 inapplicable
- axe outcomes: 102393 passed, 2797 failed, 2233 cantTell, 4307 inapplicable
- Equal Access outcomes: 0 passed, 0 failed (0 unique, 0 duplicate), 0 cantTell, 0 inapplicable
- AccessLint outcomes: 0 passed, 0 failed (0 unique, 0 duplicate), 0 cantTell, 0 inapplicable
- QualWeb outcomes: 58778 passed, 4997 failed, 15011 cantTell, 157 inapplicable
- Duplicate findings caught by later scanners: 4668

## 🎯 Pages with Most Errors

Focus your efforts on these pages to make the biggest impact (combined scanner unique failures):

| Page | axe Unique | QualWeb | Total Unique | Page Title |
|---|---:|---:|---:|---|
| [View Page](https://www.barcelona.cat/en/what-to-do-in-bcn/get-fit/sports-facilities) | 24 | 178 | **202** | https://www.barcelona.cat/en/what-to-do-in-bcn/get-fit/sports-facilities |
| [View Page](https://www.barcelona.cat/ca/que-pots-fer-a-bcn/posat-en-forma/installacions-esportives) | 24 | 178 | **202** | https://www.barcelona.cat/ca/que-pots-fer-a-bcn/posat-en-forma/installacions-esportives |
| [View Page](https://www.barcelona.cat/es/que-hacer-en-bcn/ponte-en-forma/clubes) | 24 | 163 | **187** | https://www.barcelona.cat/es/que-hacer-en-bcn/ponte-en-forma/clubes |
| [View Page](https://www.barcelona.cat/ca/que-pots-fer-a-bcn/llistat) | 74 | 104 | **178** | https://www.barcelona.cat/ca/que-pots-fer-a-bcn/llistat |
| [View Page](https://www.barcelona.cat/en/what-to-do-in-bcn/montjuic-park/activities/list) | 74 | 85 | **159** | https://www.barcelona.cat/en/what-to-do-in-bcn/montjuic-park/activities/list |
| [View Page](https://www.barcelona.cat/en/what-to-do-in-bcn/festes-majors) | 74 | 80 | **154** | https://www.barcelona.cat/en/what-to-do-in-bcn/festes-majors |
| [View Page](https://www.barcelona.cat/en/what-to-do-in-bcn/summer/outdoor-films) | 74 | 49 | **123** | https://www.barcelona.cat/en/what-to-do-in-bcn/summer/outdoor-films |
| [View Page](https://www.barcelona.cat/ca) | 36 | 76 | **112** | El portal web oficial de Barcelona \| Ajuntament de Barcelona |
| [View Page](https://www.barcelona.cat/ca) | 35 | 76 | **111** | El portal web oficial de Barcelona \| Ajuntament de Barcelona |
| [View Page](https://www.barcelona.cat/en) | 35 | 76 | **111** | The official Barcelona website \| Barcelona City Council |

## 🔧 Most Common Issues (ALFA)

These ALFA accessibility issues appear most frequently across your pages:

✅ No ALFA failed rules detected!

## 🔧 Most Common Issues (axe)

These axe accessibility issues appear most frequently across your pages:

| Rule | Pages Affected | Documentation |
|---|---:|---|
| landmark-no-duplicate-banner | **100** of 100 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/landmark-no-duplicate-banner) |
| region | **100** of 100 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/region) |
| tabindex | **100** of 100 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/tabindex) |
| image-alt | **90** of 100 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/image-alt) |
| aria-required-children | **20** of 100 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/aria-required-children) |
| color-contrast | **10** of 100 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/color-contrast) |
| frame-title | **9** of 100 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/frame-title) |
| aria-allowed-role | **8** of 100 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/aria-allowed-role) |
| link-name | **7** of 100 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/link-name) |
| aria-prohibited-attr | **6** of 100 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/aria-prohibited-attr) |

> 💡 **Tip**: Click on the rule documentation links to learn how to fix each issue. Consider fixing the most common issues first for maximum impact.

> 🤖 **Future Enhancement**: This report will soon include AI-powered fix suggestions for authenticated GitHub users (opt-in only, no auto-run AI).

## 🔍 Cross-Page Patterns: Common HTML Issues

These HTML patterns cause the same accessibility errors across multiple pages. **Fix the pattern once in your codebase to fix it everywhere!**

### 🎯 Top Patterns to Fix (Highest Impact)

#### Pattern 1: Affects 99 page(s) - 297 occurrence(s)

**Scanner**: axe
**Rule**: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate
**Issue**: All page content should be contained by landmarks

**HTML Pattern**:
```html
<li>
```

**XPath** (use in browser DevTools):
```
#ajuntament--prefooter > .container > ul > li:nth-child(1)
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('#ajuntament--prefooter > .container > ul > li:nth-child(1)')`
5. The element will be highlighted

**Affected Pages**:
- https://barcelona.cat/
- https://barcelona.cat/en/living-in-bcn/accessibility
- https://barcelona.cat/en/what-to-do-in-bcn/bathing-and-beaches/accessibility
- https://barcelona.cat/en/what-to-do-in-bcn/montjuic-park/find-out-about-montjuic-park-council
- https://barcelona.cat/ca
- *...and 94 more page(s)*

---

#### Pattern 2: Affects 99 page(s) - 99 occurrence(s)

**Scanner**: axe
**Rule**: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate
**Issue**: Document should not have more than one banner landmark

**HTML Pattern**:
```html
<header id="brand" alias="barcelonacat" brand="barcelonacat_2026-03..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">
```

**XPath** (use in browser DevTools):
```
#brand
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('#brand')`
5. The element will be highlighted

**Affected Pages**:
- https://barcelona.cat/
- https://barcelona.cat/en/living-in-bcn/accessibility
- https://barcelona.cat/en/what-to-do-in-bcn/bathing-and-beaches/accessibility
- https://barcelona.cat/en/what-to-do-in-bcn/montjuic-park/find-out-about-montjuic-park-council
- https://barcelona.cat/ca
- *...and 94 more page(s)*

---

#### Pattern 3: Affects 99 page(s) - 99 occurrence(s)

**Scanner**: axe
**Rule**: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate
**Issue**: All page content should be contained by landmarks

**HTML Pattern**:
```html
<p>
```

**XPath** (use in browser DevTools):
```
li:nth-child(2) > .llistat > li > p
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('li:nth-child(2) > .llistat > li > p')`
5. The element will be highlighted

**Affected Pages**:
- https://barcelona.cat/
- https://barcelona.cat/en/living-in-bcn/accessibility
- https://barcelona.cat/en/what-to-do-in-bcn/bathing-and-beaches/accessibility
- https://barcelona.cat/en/what-to-do-in-bcn/montjuic-park/find-out-about-montjuic-park-council
- https://barcelona.cat/ca
- *...and 94 more page(s)*

---

#### Pattern 4: Affects 50 page(s) - 50 occurrence(s)

**Scanner**: axe
**Rule**: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**Issue**: Images must have alternative text

**HTML Pattern**:
```html
<img src="/themes/barcelonacat_theme/images/menu/fletxa_3.png">
```

**XPath** (use in browser DevTools):
```
.menu-2 > .icona > img
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.menu-2 > .icona > img')`
5. The element will be highlighted

**Affected Pages**:
- https://barcelona.cat/en/what-to-do-in-bcn/bathing-and-beaches/accessibility
- https://barcelona.cat/en/what-to-do-in-bcn/montjuic-park/find-out-about-montjuic-park-council
- https://barcelona.cat/ca/que-pots-fer-a-bcn
- https://barcelona.cat/en/what-to-do-in-bcn
- https://barcelona.cat/es/que-hacer-en-bcn
- *...and 45 more page(s)*

---

#### Pattern 5: Affects 36 page(s) - 180 occurrence(s)

**Scanner**: axe
**Rule**: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate
**Issue**: All page content should be contained by landmarks

**HTML Pattern**:
```html
<span class="sr-only"> Open in a new window</span>
```

**XPath** (use in browser DevTools):
```
li:nth-child(1) > a[title="Open in a new window"][target="_blank"] > .sr-only:nth-child(3)
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('li:nth-child(1) > a[title="Open in a new window"][target="_blank"] > .sr-only:nth-child(3)')`
5. The element will be highlighted

**Affected Pages**:
- https://barcelona.cat/en/living-in-bcn/accessibility
- https://barcelona.cat/en/what-to-do-in-bcn/bathing-and-beaches/accessibility
- https://barcelona.cat/en/what-to-do-in-bcn/montjuic-park/find-out-about-montjuic-park-council
- https://barcelona.cat/en
- https://barcelona.cat/en/catalan-national-day-2022
- *...and 31 more page(s)*

---

#### Pattern 6: Affects 36 page(s) - 36 occurrence(s)

**Scanner**: axe
**Rule**: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate
**Issue**: All page content should be contained by landmarks

**HTML Pattern**:
```html
<h2>Addresses</h2>
```

**XPath** (use in browser DevTools):
```
li:nth-child(2) > h2
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('li:nth-child(2) > h2')`
5. The element will be highlighted

**Affected Pages**:
- https://barcelona.cat/en/living-in-bcn/accessibility
- https://barcelona.cat/en/what-to-do-in-bcn/bathing-and-beaches/accessibility
- https://barcelona.cat/en/what-to-do-in-bcn/montjuic-park/find-out-about-montjuic-park-council
- https://barcelona.cat/en
- https://barcelona.cat/en/catalan-national-day-2022
- *...and 31 more page(s)*

---

#### Pattern 7: Affects 36 page(s) - 36 occurrence(s)

**Scanner**: axe
**Rule**: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate
**Issue**: All page content should be contained by landmarks

**HTML Pattern**:
```html
<h2>Contact</h2>
```

**XPath** (use in browser DevTools):
```
li:nth-child(3) > h2
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('li:nth-child(3) > h2')`
5. The element will be highlighted

**Affected Pages**:
- https://barcelona.cat/en/living-in-bcn/accessibility
- https://barcelona.cat/en/what-to-do-in-bcn/bathing-and-beaches/accessibility
- https://barcelona.cat/en/what-to-do-in-bcn/montjuic-park/find-out-about-montjuic-park-council
- https://barcelona.cat/en
- https://barcelona.cat/en/catalan-national-day-2022
- *...and 31 more page(s)*

---

#### Pattern 8: Affects 36 page(s) - 36 occurrence(s)

**Scanner**: axe
**Rule**: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate
**Issue**: All page content should be contained by landmarks

**HTML Pattern**:
```html
<p><a href="https://atencioenlinia.ajuntament.barcelona.cat/en/fitxa/resultat-busqueda?origen=WEB_BARCELONA_CAT&amp;tema=7&amp;element=1121">Contact form</a></p>
```

**XPath** (use in browser DevTools):
```
li:nth-child(3) > .llistat > li:nth-child(1) > p
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('li:nth-child(3) > .llistat > li:nth-child(1) > p')`
5. The element will be highlighted

**Affected Pages**:
- https://barcelona.cat/en/living-in-bcn/accessibility
- https://barcelona.cat/en/what-to-do-in-bcn/bathing-and-beaches/accessibility
- https://barcelona.cat/en/what-to-do-in-bcn/montjuic-park/find-out-about-montjuic-park-council
- https://barcelona.cat/en
- https://barcelona.cat/en/catalan-national-day-2022
- *...and 31 more page(s)*

---

#### Pattern 9: Affects 36 page(s) - 36 occurrence(s)

**Scanner**: axe
**Rule**: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate
**Issue**: All page content should be contained by landmarks

**HTML Pattern**:
```html
<p><a href="tel: 010">010</a> (administrative procedures and information for the public)</p>
```

**XPath** (use in browser DevTools):
```
li:nth-child(2) > p
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('li:nth-child(2) > p')`
5. The element will be highlighted

**Affected Pages**:
- https://barcelona.cat/en/living-in-bcn/accessibility
- https://barcelona.cat/en/what-to-do-in-bcn/bathing-and-beaches/accessibility
- https://barcelona.cat/en/what-to-do-in-bcn/montjuic-park/find-out-about-montjuic-park-council
- https://barcelona.cat/en
- https://barcelona.cat/en/catalan-national-day-2022
- *...and 31 more page(s)*

---

#### Pattern 10: Affects 36 page(s) - 36 occurrence(s)

**Scanner**: axe
**Rule**: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate
**Issue**: All page content should be contained by landmarks

**HTML Pattern**:
```html
<p><a href="tel: 934 027 000">934 027 000</a> (call centre)</p>
```

**XPath** (use in browser DevTools):
```
li:nth-child(3) > p
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('li:nth-child(3) > p')`
5. The element will be highlighted

**Affected Pages**:
- https://barcelona.cat/en/living-in-bcn/accessibility
- https://barcelona.cat/en/what-to-do-in-bcn/bathing-and-beaches/accessibility
- https://barcelona.cat/en/what-to-do-in-bcn/montjuic-park/find-out-about-montjuic-park-council
- https://barcelona.cat/en
- https://barcelona.cat/en/catalan-national-day-2022
- *...and 31 more page(s)*

---

#### Pattern 11: Affects 36 page(s) - 36 occurrence(s)

**Scanner**: axe
**Rule**: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate
**Issue**: All page content should be contained by landmarks

**HTML Pattern**:
```html
<h2>Follow us on:</h2>
```

**XPath** (use in browser DevTools):
```
.ajuntament-xarxes-socials > h2
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.ajuntament-xarxes-socials > h2')`
5. The element will be highlighted

**Affected Pages**:
- https://barcelona.cat/en/living-in-bcn/accessibility
- https://barcelona.cat/en/what-to-do-in-bcn/bathing-and-beaches/accessibility
- https://barcelona.cat/en/what-to-do-in-bcn/montjuic-park/find-out-about-montjuic-park-council
- https://barcelona.cat/en
- https://barcelona.cat/en/catalan-national-day-2022
- *...and 31 more page(s)*

---

#### Pattern 12: Affects 36 page(s) - 36 occurrence(s)

**Scanner**: axe
**Rule**: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate
**Issue**: All page content should be contained by landmarks

**HTML Pattern**:
```html
<span class="sr-only">Instagram. Open in a new window</span>
```

**XPath** (use in browser DevTools):
```
li:nth-child(1) > a[title="Open in a new window"][target="_blank"] > .sr-only:nth-child(2)
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('li:nth-child(1) > a[title="Open in a new window"][target="_blank"] > .sr-only:nth-child(2)')`
5. The element will be highlighted

**Affected Pages**:
- https://barcelona.cat/en/living-in-bcn/accessibility
- https://barcelona.cat/en/what-to-do-in-bcn/bathing-and-beaches/accessibility
- https://barcelona.cat/en/what-to-do-in-bcn/montjuic-park/find-out-about-montjuic-park-council
- https://barcelona.cat/en
- https://barcelona.cat/en/catalan-national-day-2022
- *...and 31 more page(s)*

---

#### Pattern 13: Affects 36 page(s) - 36 occurrence(s)

**Scanner**: axe
**Rule**: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate
**Issue**: All page content should be contained by landmarks

**HTML Pattern**:
```html
<span class="sr-only">Tik tok. Open in a new window</span>
```

**XPath** (use in browser DevTools):
```
li:nth-child(2) > a[title="Open in a new window"][target="_blank"] > .sr-only:nth-child(2)
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('li:nth-child(2) > a[title="Open in a new window"][target="_blank"] > .sr-only:nth-child(2)')`
5. The element will be highlighted

**Affected Pages**:
- https://barcelona.cat/en/living-in-bcn/accessibility
- https://barcelona.cat/en/what-to-do-in-bcn/bathing-and-beaches/accessibility
- https://barcelona.cat/en/what-to-do-in-bcn/montjuic-park/find-out-about-montjuic-park-council
- https://barcelona.cat/en
- https://barcelona.cat/en/catalan-national-day-2022
- *...and 31 more page(s)*

---

#### Pattern 14: Affects 36 page(s) - 36 occurrence(s)

**Scanner**: axe
**Rule**: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate
**Issue**: All page content should be contained by landmarks

**HTML Pattern**:
```html
<span class="sr-only">Youtube. Open in a new window</span>
```

**XPath** (use in browser DevTools):
```
li:nth-child(3) > a[title="Open in a new window"][target="_blank"] > .sr-only:nth-child(2)
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('li:nth-child(3) > a[title="Open in a new window"][target="_blank"] > .sr-only:nth-child(2)')`
5. The element will be highlighted

**Affected Pages**:
- https://barcelona.cat/en/living-in-bcn/accessibility
- https://barcelona.cat/en/what-to-do-in-bcn/bathing-and-beaches/accessibility
- https://barcelona.cat/en/what-to-do-in-bcn/montjuic-park/find-out-about-montjuic-park-council
- https://barcelona.cat/en
- https://barcelona.cat/en/catalan-national-day-2022
- *...and 31 more page(s)*

---

#### Pattern 15: Affects 36 page(s) - 36 occurrence(s)

**Scanner**: axe
**Rule**: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate
**Issue**: All page content should be contained by landmarks

**HTML Pattern**:
```html
<span class="sr-only">Telegram. Open in a new window</span>
```

**XPath** (use in browser DevTools):
```
a[href$="BcnAjuntament"] > .sr-only:nth-child(2)
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('a[href$="BcnAjuntament"] > .sr-only:nth-child(2)')`
5. The element will be highlighted

**Affected Pages**:
- https://barcelona.cat/en/living-in-bcn/accessibility
- https://barcelona.cat/en/what-to-do-in-bcn/bathing-and-beaches/accessibility
- https://barcelona.cat/en/what-to-do-in-bcn/montjuic-park/find-out-about-montjuic-park-council
- https://barcelona.cat/en
- https://barcelona.cat/en/catalan-national-day-2022
- *...and 31 more page(s)*

---

> 💡 **Pro Tip**: These patterns likely come from shared components or templates in your codebase. Fix them in the component/template source, and the fix will propagate to all affected pages.

## 📊 Detailed Results

Complete scan results for all tested pages:

| Submitted URL | Final URL | Status | HTTP | Redirected | Time (ms) | axe Unique | ALFA Unique | Equal Access Unique | AccessLint Unique | Duplicates | Notes |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|
| https://barcelona.cat/ | https://www.barcelona.cat/ca | OK | 200 | yes | 17791 | 35 | 0 | 0 | 0 | 76 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-progressbar-name, aria-prohibited-attr, button-name, color-contrast, frame-title, html-lang-valid, image-alt, landmark-no-duplicate-banner, landmark-unique, link-name, region, tabindex |
| https://barcelona.cat/en/living-in-bcn/accessibility | https://www.barcelona.cat/en/living-in-bcn/accessibility | OK | 200 | yes | 11548 | 24 | 0 | 0 | 0 | 29 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt, landmark-no-duplicate-banner, region, tabindex |
| https://barcelona.cat/en/what-to-do-in-bcn/bathing-and-beaches/accessibility | https://www.barcelona.cat/en/what-to-do-in-bcn/bathing-and-beaches/accessibility | OK | 200 | yes | 12072 | 24 | 0 | 0 | 0 | 35 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt, landmark-no-duplicate-banner, region, tabindex |
| https://barcelona.cat/en/what-to-do-in-bcn/montjuic-park/find-out-about-montjuic-park-council | https://www.barcelona.cat/en/what-to-do-in-bcn/montjuic-park/find-out-about-montjuic-park-council | OK | 200 | yes | 10476 | 24 | 0 | 0 | 0 | 34 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt, landmark-no-duplicate-banner, region, tabindex |
| https://barcelona.cat/ca | https://www.barcelona.cat/ca | OK | 200 | yes | 14496 | 36 | 0 | 0 | 0 | 76 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-progressbar-name, aria-prohibited-attr, button-name, color-contrast, frame-title, html-lang-valid, image-alt, landmark-no-duplicate-banner, landmark-unique, link-name, region, tabindex |
| https://barcelona.cat/en | https://www.barcelona.cat/en | OK | 200 | yes | 14834 | 35 | 0 | 0 | 0 | 76 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-progressbar-name, aria-prohibited-attr, button-name, color-contrast, frame-title, html-lang-valid, image-alt, landmark-no-duplicate-banner, landmark-unique, link-name, region, tabindex |
| https://barcelona.cat/es | https://www.barcelona.cat/es | OK | 200 | yes | 15148 | 35 | 0 | 0 | 0 | 76 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-progressbar-name, aria-prohibited-attr, button-name, color-contrast, frame-title, html-lang-valid, image-alt, landmark-no-duplicate-banner, landmark-unique, link-name, region, tabindex |
| https://barcelona.cat/ca/canelons | https://www.barcelona.cat/ca/canelons | OK | 200 | yes | 11377 | 23 | 0 | 0 | 0 | 28 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, region, tabindex |
| https://barcelona.cat/ca/coneixbcn | https://www.barcelona.cat/ca/coneixbcn | OK | 200 | yes | 11173 | 25 | 0 | 0 | 0 | 28 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-required-children, image-alt, landmark-no-duplicate-banner, region, tabindex |
| https://barcelona.cat/ca/diada-nacional-de-catalunya-2022 | https://www.barcelona.cat/ca/diada-nacional-de-catalunya-2022 | OK | 200 | yes | 11771 | 23 | 0 | 0 | 0 | 22 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, region, tabindex |
| https://barcelona.cat/ca/implicat | https://www.barcelona.cat/ca/implicat | OK | 200 | yes | 13097 | 24 | 0 | 0 | 0 | 42 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt, landmark-no-duplicate-banner, region, tabindex |
| https://barcelona.cat/ca/pagina-imatge-promocional | https://www.barcelona.cat/ca/pagina-imatge-promocional | OK | 202 | yes | 10765 | 23 | 0 | 0 | 0 | 21 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, region, tabindex |
| https://barcelona.cat/ca/prova-video | https://www.barcelona.cat/ca/prova-video | OK | 202 | yes | 11706 | 24 | 0 | 0 | 0 | 23 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, landmark-no-duplicate-banner, region, tabindex |
| https://barcelona.cat/ca/que-pots-fer-a-bcn | https://www.barcelona.cat/ca/que-pots-fer-a-bcn | OK | 202 | yes | 12779 | 26 | 0 | 0 | 0 | 48 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-required-children, image-alt, image-redundant-alt, landmark-no-duplicate-banner, region, tabindex |
| https://barcelona.cat/ca/treball-i-empresa | https://www.barcelona.cat/ca/treball-i-empresa | OK | 202 | yes | 12760 | 24 | 0 | 0 | 0 | 36 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt, landmark-no-duplicate-banner, region, tabindex |
| https://barcelona.cat/ca/viure-a-bcn | https://www.barcelona.cat/ca/viure-a-bcn | OK | 202 | yes | 11958 | 25 | 0 | 0 | 0 | 30 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-required-children, image-alt, landmark-no-duplicate-banner, region, tabindex |
| https://barcelona.cat/en/catalan-national-day-2022 | https://www.barcelona.cat/en/catalan-national-day-2022 | OK | 202 | yes | 11583 | 23 | 0 | 0 | 0 | 22 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, region, tabindex |
| https://barcelona.cat/en/discoverbcn | https://www.barcelona.cat/en/discoverbcn | OK | 202 | yes | 12070 | 25 | 0 | 0 | 0 | 28 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-required-children, image-alt, landmark-no-duplicate-banner, region, tabindex |
| https://barcelona.cat/en/getinvolved | https://www.barcelona.cat/en/getinvolved | OK | 202 | yes | 12086 | 24 | 0 | 0 | 0 | 42 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt, landmark-no-duplicate-banner, region, tabindex |
| https://barcelona.cat/en/living-in-bcn | https://www.barcelona.cat/en/living-in-bcn | OK | 202 | yes | 12047 | 25 | 0 | 0 | 0 | 30 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-required-children, image-alt, landmark-no-duplicate-banner, region, tabindex |
| https://barcelona.cat/en/pagina-exemple-mapa-sant-jordi | https://www.barcelona.cat/en/pagina-exemple-mapa-sant-jordi | OK | 202 | yes | 11146 | 24 | 0 | 0 | 0 | 21 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: frame-title, landmark-no-duplicate-banner, region, tabindex |
| https://barcelona.cat/en/what-to-do-in-bcn | https://www.barcelona.cat/en/what-to-do-in-bcn | OK | 202 | yes | 11686 | 25 | 0 | 0 | 0 | 48 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-required-children, image-alt, landmark-no-duplicate-banner, region, tabindex |
| https://barcelona.cat/es/conocebcn | https://www.barcelona.cat/es/conocebcn | OK | 202 | yes | 11797 | 25 | 0 | 0 | 0 | 28 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-required-children, image-alt, landmark-no-duplicate-banner, region, tabindex |
| https://barcelona.cat/es/diada-nacional-de-cataluna-2022 | https://www.barcelona.cat/es/diada-nacional-de-cataluna-2022 | OK | 202 | yes | 11673 | 23 | 0 | 0 | 0 | 22 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, region, tabindex |
| https://barcelona.cat/es/implicate | https://www.barcelona.cat/es/implicate | OK | 202 | yes | 12573 | 24 | 0 | 0 | 0 | 42 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt, landmark-no-duplicate-banner, region, tabindex |
| https://barcelona.cat/es/que-hacer-en-bcn | https://www.barcelona.cat/es/que-hacer-en-bcn | OK | 202 | yes | 12851 | 25 | 0 | 0 | 0 | 48 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-required-children, image-alt, landmark-no-duplicate-banner, region, tabindex |
| https://barcelona.cat/es/trabajo-y-empresa | https://www.barcelona.cat/es/trabajo-y-empresa | OK | 202 | yes | 12226 | 24 | 0 | 0 | 0 | 35 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt, landmark-no-duplicate-banner, region, tabindex |
| https://barcelona.cat/es/vivir-en-bcn | https://www.barcelona.cat/es/vivir-en-bcn | OK | 202 | yes | 11854 | 25 | 0 | 0 | 0 | 30 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-required-children, image-alt, landmark-no-duplicate-banner, region, tabindex |
| https://barcelona.cat/es/aviso-legal/banoasistido | https://www.barcelona.cat/es/aviso-legal/banoasistido | OK | 202 | yes | 10965 | 23 | 0 | 0 | 0 | 28 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, region, tabindex |
| https://barcelona.cat/es/blogoteca/condiciones-uso | https://www.barcelona.cat/es/blogoteca/condiciones-uso | OK | 202 | yes | 10831 | 23 | 0 | 0 | 0 | 21 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, region, tabindex |
| https://barcelona.cat/es/conocebcn/la-ciutadella-del-conocimiento | https://www.barcelona.cat/es/conocebcn/la-ciutadella-del-conocimiento | OK | 202 | yes | 12236 | 24 | 0 | 0 | 0 | 49 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt, landmark-no-duplicate-banner, region, tabindex |
| https://barcelona.cat/es/que-hacer-en-bcn/banos-y-playas/actividades-deportivas-organizadas-por-deportistas-federados | https://www.barcelona.cat/es/que-hacer-en-bcn/banos-y-playas/actividades-deportivas-organizadas-por-deportistas-federados | OK | 202 | yes | 11269 | 24 | 0 | 0 | 0 | 31 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt, landmark-no-duplicate-banner, region, tabindex |
| https://barcelona.cat/en/what-to-do-in-bcn/montjuic-park/news | https://www.barcelona.cat/en/what-to-do-in-bcn/montjuic-park/news | OK | 202 | yes | 12748 | 26 | 0 | 0 | 0 | 46 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, image-alt, landmark-no-duplicate-banner, region, tabindex |
| https://barcelona.cat/en/what-to-do-in-bcn/parks-and-gardens/belvederes | https://www.barcelona.cat/en/what-to-do-in-bcn/parks-and-gardens/belvederes | OK | 202 | yes | 13203 | 24 | 0 | 0 | 0 | 47 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt, landmark-no-duplicate-banner, region, tabindex |
| https://barcelona.cat/en/discoverbcn/pics | https://www.barcelona.cat/en/discoverbcn/pics | OK | 202 | yes | 22876 | 26 | 0 | 0 | 0 | 56 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, image-alt, landmark-no-duplicate-banner, region, tabindex |
| https://barcelona.cat/es/vivir-en-bcn/vive-el-barrio | https://www.barcelona.cat/es/vivir-en-bcn/vive-el-barrio | OK | 202 | yes | 13075 | 30 | 0 | 0 | 0 | 74 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: area-alt, aria-allowed-role, aria-command-name, frame-title, image-alt, image-redundant-alt, landmark-no-duplicate-banner, list, region, tabindex |
| https://barcelona.cat/ca/viure-a-bcn/diada/transports-publics-durant-la-diada-2024 | https://www.barcelona.cat/ca/viure-a-bcn/diada/transports-publics-durant-la-diada-2024 | OK | 202 | yes | 12479 | 27 | 0 | 0 | 0 | 38 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-command-name, aria-prohibited-attr, color-contrast, empty-heading, frame-title, image-alt, landmark-no-duplicate-banner, region, tabindex |
| https://barcelona.cat/en/what-to-do-in-bcn/magic-fountain/history | https://www.barcelona.cat/en/what-to-do-in-bcn/magic-fountain/history | OK | 202 | yes | 11615 | 25 | 0 | 0 | 0 | 39 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-required-children, image-alt, landmark-no-duplicate-banner, region, tabindex |
| https://barcelona.cat/es/conocebcn/ciutadelladelconocimiento/biblioteca-central | https://www.barcelona.cat/es/conocebcn/ciutadelladelconocimiento/biblioteca-central | OK | 202 | yes | 11286 | 25 | 0 | 0 | 0 | 23 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-required-children, image-alt, landmark-no-duplicate-banner, region, tabindex |
| https://barcelona.cat/en/what-to-do-in-bcn/festes-majors | https://www.barcelona.cat/en/what-to-do-in-bcn/festes-majors | OK | 202 | yes | 13792 | 74 | 0 | 0 | 0 | 76 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt, landmark-no-duplicate-banner, region, tabindex |
| https://barcelona.cat/ca/viure-a-bcn/amb-nens-i-nenes/lleure/llistat-de-ludotecas | https://www.barcelona.cat/ca/viure-a-bcn/amb-nens-i-nenes/lleure/llistat-de-ludotecas | OK | 202 | yes | 13849 | 24 | 0 | 0 | 0 | 49 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt, landmark-no-duplicate-banner, region, tabindex |
| https://barcelona.cat/en/what-to-do-in-bcn/parks-and-gardens/childrens-play-areas | https://www.barcelona.cat/en/what-to-do-in-bcn/parks-and-gardens/childrens-play-areas | OK | 202 | yes | 11584 | 24 | 0 | 0 | 0 | 48 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt, landmark-no-duplicate-banner, region, tabindex |
| https://barcelona.cat/ca/que-pots-fer-a-bcn/estiu/refrescat-a-les-piscines-municipals | https://www.barcelona.cat/ca/que-pots-fer-a-bcn/estiu/refrescat-a-les-piscines-municipals | OK | 202 | yes | 12052 | 24 | 0 | 0 | 0 | 63 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt, landmark-no-duplicate-banner, region, tabindex |
| https://barcelona.cat/es/que-hacer-en-bcn/banos-y-playas/playa-de-sant-miquel | https://www.barcelona.cat/es/que-hacer-en-bcn/banos-y-playas/playa-de-sant-miquel | OK | 202 | yes | 11850 | 24 | 0 | 0 | 0 | 54 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt, landmark-no-duplicate-banner, region, tabindex |
| https://barcelona.cat/ca/que-pots-fer-a-bcn/parcs-i-jardins/parcs-forestals | https://www.barcelona.cat/ca/que-pots-fer-a-bcn/parcs-i-jardins/parcs-forestals | OK | 202 | yes | 11492 | 24 | 0 | 0 | 0 | 37 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt, landmark-no-duplicate-banner, region, tabindex |
| https://barcelona.cat/en/what-to-do-in-bcn/summer/outdoor-films | https://www.barcelona.cat/en/what-to-do-in-bcn/summer/outdoor-films | OK | 202 | yes | 12725 | 74 | 0 | 0 | 0 | 45 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt, landmark-no-duplicate-banner, region, tabindex |
| https://barcelona.cat/es/que-hacer-en-bcn/banos-y-playas/zona-de-banos-del-forum | https://www.barcelona.cat/es/que-hacer-en-bcn/banos-y-playas/zona-de-banos-del-forum | OK | 202 | yes | 11477 | 24 | 0 | 0 | 0 | 51 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt, landmark-no-duplicate-banner, region, tabindex |
| https://barcelona.cat/en/discoverbcn/ciutadella-knowledge-hub/heritage-and-science-hub | https://www.barcelona.cat/en/discoverbcn/ciutadella-knowledge-hub/heritage-and-science-hub | OK | 202 | yes | 12088 | 25 | 0 | 0 | 0 | 27 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-required-children, image-alt, landmark-no-duplicate-banner, region, tabindex |
| https://barcelona.cat/es/que-hacer-en-bcn/cultura/teatros | https://www.barcelona.cat/es/que-hacer-en-bcn/cultura/teatros | OK | 202 | yes | 12655 | 24 | 0 | 0 | 0 | 60 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt, landmark-no-duplicate-banner, region, tabindex |
| https://barcelona.cat/capdesetmana/ca/ | https://www.barcelona.cat/capdesetmana/ca/ | OK | 202 | yes | 12763 | 12 | 0 | 0 | 0 | 82 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: empty-heading, frame-title, heading-order, image-alt, landmark-no-duplicate-banner, link-name, region, select-name, tabindex |
| https://barcelona.cat/es/vivir-en-bcn/diada | https://www.barcelona.cat/es/vivir-en-bcn/diada | OK | 202 | yes | 11707 | 24 | 0 | 0 | 0 | 55 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt, landmark-no-duplicate-banner, region, tabindex |
| https://barcelona.cat/en/living-in-bcn/pets | https://www.barcelona.cat/en/living-in-bcn/pets | OK | 202 | yes | 12719 | 26 | 0 | 0 | 0 | 36 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, image-alt, landmark-no-duplicate-banner, region, tabindex |
| https://barcelona.cat/es/que-hacer-en-bcn/banos-y-playas/deporte-en-las-playas/pesca | https://www.barcelona.cat/es/que-hacer-en-bcn/banos-y-playas/deporte-en-las-playas/pesca | OK | 202 | yes | 11138 | 24 | 0 | 0 | 0 | 28 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt, landmark-no-duplicate-banner, region, tabindex |
| https://barcelona.cat/en/what-to-do-in-bcn/get-fit/sports-facilities | https://www.barcelona.cat/en/what-to-do-in-bcn/get-fit/sports-facilities | OK | 202 | yes | 14540 | 24 | 0 | 0 | 0 | 174 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt, landmark-no-duplicate-banner, region, tabindex |
| https://barcelona.cat/ca/que-pots-fer-a-bcn/banys-i-platges/esport-les-platges | https://www.barcelona.cat/ca/que-pots-fer-a-bcn/banys-i-platges/esport-les-platges | OK | 202 | yes | 11026 | 24 | 0 | 0 | 0 | 39 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt, landmark-no-duplicate-banner, region, tabindex |
| https://barcelona.cat/ca/que-pots-fer-a-bcn/cultura | https://www.barcelona.cat/ca/que-pots-fer-a-bcn/cultura | OK | 202 | yes | 12406 | 33 | 0 | 0 | 0 | 60 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt, landmark-no-duplicate-banner, link-name, region, tabindex |
| https://barcelona.cat/es/vivir-en-bcn/con-accesibilidad | https://www.barcelona.cat/es/vivir-en-bcn/con-accesibilidad | OK | 202 | yes | 11512 | 24 | 0 | 0 | 0 | 29 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt, landmark-no-duplicate-banner, region, tabindex |
| https://barcelona.cat/en/what-to-do-in-bcn/montjuic-park/activities/list | https://www.barcelona.cat/en/what-to-do-in-bcn/montjuic-park/activities/list | OK | 202 | yes | 12776 | 74 | 0 | 0 | 0 | 81 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt, landmark-no-duplicate-banner, region, tabindex |
| https://barcelona.cat/es/vivir-en-bcn/medio-ambiente-y-sostenibilidad | https://www.barcelona.cat/es/vivir-en-bcn/medio-ambiente-y-sostenibilidad | OK | 202 | yes | 12116 | 24 | 0 | 0 | 0 | 37 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt, landmark-no-duplicate-banner, region, tabindex |
| https://barcelona.cat/en/what-to-do-in-bcn/bathing-and-beaches/dogs-area | https://www.barcelona.cat/en/what-to-do-in-bcn/bathing-and-beaches/dogs-area | OK | 202 | yes | 11376 | 25 | 0 | 0 | 0 | 42 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-required-children, image-alt, landmark-no-duplicate-banner, region, tabindex |
| https://barcelona.cat/en/living-in-bcn/diada | https://www.barcelona.cat/en/living-in-bcn/diada | OK | 202 | yes | 11296 | 24 | 0 | 0 | 0 | 56 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt, landmark-no-duplicate-banner, region, tabindex |
| https://barcelona.cat/es/conocebcn/la-historia/la-barcino-romana | https://www.barcelona.cat/es/conocebcn/la-historia/la-barcino-romana | OK | 202 | yes | 11268 | 24 | 0 | 0 | 0 | 32 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt, landmark-no-duplicate-banner, region, tabindex |
| https://barcelona.cat/en/what-to-do-in-bcn/culture/cinemas | https://www.barcelona.cat/en/what-to-do-in-bcn/culture/cinemas | OK | 202 | yes | 11704 | 24 | 0 | 0 | 0 | 58 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt, landmark-no-duplicate-banner, region, tabindex |
| https://barcelona.cat/en/what-to-do-in-bcn/magic-fountain/choreographies-magic-fountain | https://www.barcelona.cat/en/what-to-do-in-bcn/magic-fountain/choreographies-magic-fountain | OK | 202 | yes | 13281 | 28 | 0 | 0 | 0 | 34 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, image-alt, landmark-no-duplicate-banner, listitem, region, tabindex |
| https://barcelona.cat/es/vivir-en-bcn/con-ninos-y-ninas | https://www.barcelona.cat/es/vivir-en-bcn/con-ninos-y-ninas | OK | 202 | yes | 10984 | 24 | 0 | 0 | 0 | 31 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt, landmark-no-duplicate-banner, region, tabindex |
| https://barcelona.cat/en/discoverbcn/la-ciutadella-knowledge-hub/news | https://www.barcelona.cat/en/discoverbcn/la-ciutadella-knowledge-hub/news | OK | 202 | yes | 12074 | 26 | 0 | 0 | 0 | 33 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, image-alt, landmark-no-duplicate-banner, region, tabindex |
| https://barcelona.cat/ca/que-pots-fer-a-bcn/banys-i-platges | https://www.barcelona.cat/ca/que-pots-fer-a-bcn/banys-i-platges | OK | 202 | yes | 14648 | 31 | 0 | 0 | 0 | 59 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt, landmark-no-duplicate-banner, link-name, nested-interactive, region, tabindex |
| https://barcelona.cat/ca/que-pots-fer-a-bcn/banys-i-platges/platges-sense-residus | https://www.barcelona.cat/ca/que-pots-fer-a-bcn/banys-i-platges/platges-sense-residus | OK | 202 | yes | 12098 | 25 | 0 | 0 | 0 | 37 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-required-children, image-alt, landmark-no-duplicate-banner, region, tabindex |
| https://barcelona.cat/es/que-hacer-en-bcn/parque-montjuic/noticias | https://www.barcelona.cat/es/que-hacer-en-bcn/parque-montjuic/noticias | OK | 202 | yes | 12150 | 26 | 0 | 0 | 0 | 46 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, image-alt, landmark-no-duplicate-banner, region, tabindex |
| https://barcelona.cat/ca/que-pots-fer-a-bcn/banys-i-platges/zona-de-banys-del-forum | https://www.barcelona.cat/ca/que-pots-fer-a-bcn/banys-i-platges/zona-de-banys-del-forum | OK | 202 | yes | 12560 | 24 | 0 | 0 | 0 | 51 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt, landmark-no-duplicate-banner, region, tabindex |
| https://barcelona.cat/es/que-hacer-en-bcn/ponte-en-forma/clubs-asociaciones-y-penas | https://www.barcelona.cat/es/que-hacer-en-bcn/ponte-en-forma/clubs-asociaciones-y-penas | OK | 202 | yes | 12930 | 24 | 0 | 0 | 0 | 61 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt, landmark-no-duplicate-banner, region, tabindex |
| https://barcelona.cat/en/what-to-do-in-bcn/bathing-and-beaches/sant-sebastia-beach | https://www.barcelona.cat/en/what-to-do-in-bcn/bathing-and-beaches/sant-sebastia-beach | OK | 202 | yes | 11932 | 24 | 0 | 0 | 0 | 55 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt, landmark-no-duplicate-banner, region, tabindex |
| https://barcelona.cat/en/what-to-do-in-bcn/magic-fountain/how-it-works | https://www.barcelona.cat/en/what-to-do-in-bcn/magic-fountain/how-it-works | OK | 202 | yes | 10885 | 25 | 0 | 0 | 0 | 31 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-required-children, image-alt, landmark-no-duplicate-banner, region, tabindex |
| https://barcelona.cat/ca/que-pots-fer-a-bcn/banys-i-platges/historia-de-les-platges | https://www.barcelona.cat/ca/que-pots-fer-a-bcn/banys-i-platges/historia-de-les-platges | OK | 202 | yes | 11802 | 25 | 0 | 0 | 0 | 42 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-required-children, image-alt, landmark-no-duplicate-banner, region, tabindex |
| https://barcelona.cat/es/que-hacer-en-bcn/fuente-magica/horarios-de-la-fuente-magica | https://www.barcelona.cat/es/que-hacer-en-bcn/fuente-magica/horarios-de-la-fuente-magica | OK | 202 | yes | 13783 | 31 | 0 | 0 | 0 | 39 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: button-name, empty-table-header, image-alt, landmark-no-duplicate-banner, region, tabindex |
| https://barcelona.cat/en/what-to-do-in-bcn/culture/theatres | https://www.barcelona.cat/en/what-to-do-in-bcn/culture/theatres | OK | 202 | yes | 12474 | 24 | 0 | 0 | 0 | 60 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt, landmark-no-duplicate-banner, region, tabindex |
| https://barcelona.cat/ca/que-pots-fer-a-bcn/cultura/auditoris | https://www.barcelona.cat/ca/que-pots-fer-a-bcn/cultura/auditoris | OK | 202 | yes | 12193 | 24 | 0 | 0 | 0 | 53 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt, landmark-no-duplicate-banner, region, tabindex |
| https://barcelona.cat/en/what-to-do-in-bcn/bathing-and-beaches/sports-activities-organised-federated-athletes-entities | https://www.barcelona.cat/en/what-to-do-in-bcn/bathing-and-beaches/sports-activities-organised-federated-athletes-entities | OK | 202 | yes | 11099 | 24 | 0 | 0 | 0 | 31 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt, landmark-no-duplicate-banner, region, tabindex |
| https://barcelona.cat/es/conocebcn/la-ciutadella-del-conocimiento/noticias | https://www.barcelona.cat/es/conocebcn/la-ciutadella-del-conocimiento/noticias | OK | 202 | yes | 11642 | 26 | 0 | 0 | 0 | 33 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, image-alt, landmark-no-duplicate-banner, region, tabindex |
| https://barcelona.cat/ca/que-pots-fer-a-bcn/estiu/oficines-de-tramitacio-del-dni-i-passaport | https://www.barcelona.cat/ca/que-pots-fer-a-bcn/estiu/oficines-de-tramitacio-del-dni-i-passaport | OK | 202 | yes | 11942 | 24 | 0 | 0 | 0 | 48 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt, landmark-no-duplicate-banner, region, tabindex |
| https://barcelona.cat/es/que-hacer-en-bcn/banos-y-playas/playa-de-somorrostro | https://www.barcelona.cat/es/que-hacer-en-bcn/banos-y-playas/playa-de-somorrostro | OK | 202 | yes | 11640 | 24 | 0 | 0 | 0 | 67 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt, landmark-no-duplicate-banner, region, tabindex |
| https://barcelona.cat/es/que-hacer-en-bcn/ponte-en-forma/federaciones | https://www.barcelona.cat/es/que-hacer-en-bcn/ponte-en-forma/federaciones | OK | 202 | yes | 16254 | 24 | 0 | 0 | 0 | 57 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt, landmark-no-duplicate-banner, region, tabindex |
| https://barcelona.cat/ca/que-pots-fer-a-bcn/banys-i-platges/activitats-esportives-organitzades-amb-anim-de-lucre | https://www.barcelona.cat/ca/que-pots-fer-a-bcn/banys-i-platges/activitats-esportives-organitzades-amb-anim-de-lucre | OK | 202 | yes | 12528 | 24 | 0 | 0 | 0 | 36 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt, landmark-no-duplicate-banner, region, tabindex |
| https://barcelona.cat/en/discoverbcn/ciutadella-knowledge-hub/greenhouse/history | https://www.barcelona.cat/en/discoverbcn/ciutadella-knowledge-hub/greenhouse/history | OK | 202 | yes | 11405 | 25 | 0 | 0 | 0 | 26 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-required-children, image-alt, landmark-no-duplicate-banner, region, tabindex |
| https://barcelona.cat/ca/que-pots-fer-a-bcn/posat-en-forma/installacions-esportives | https://www.barcelona.cat/ca/que-pots-fer-a-bcn/posat-en-forma/installacions-esportives | OK | 202 | yes | 14388 | 24 | 0 | 0 | 0 | 174 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt, landmark-no-duplicate-banner, region, tabindex |
| https://barcelona.cat/ca/que-pots-fer-a-bcn/llistat | https://www.barcelona.cat/ca/que-pots-fer-a-bcn/llistat | OK | 202 | yes | 14037 | 74 | 0 | 0 | 0 | 100 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt, landmark-no-duplicate-banner, region, tabindex |
| https://barcelona.cat/en/what-to-do-in-bcn/summer/municipal-tax-office | https://www.barcelona.cat/en/what-to-do-in-bcn/summer/municipal-tax-office | OK | 202 | yes | 11483 | 24 | 0 | 0 | 0 | 33 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt, landmark-no-duplicate-banner, region, tabindex |
| https://barcelona.cat/en/living-in-bcn/environment-and-sustainability/list-containers | https://www.barcelona.cat/en/living-in-bcn/environment-and-sustainability/list-containers | OK | 202 | yes | 12587 | 24 | 0 | 0 | 0 | 46 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt, landmark-no-duplicate-banner, region, tabindex |
| https://barcelona.cat/en/living-in-bcn/catalan-national-day-2019/public-transport-11-september-2022-catalan-national-day | https://www.barcelona.cat/en/living-in-bcn/catalan-national-day-2019/public-transport-11-september-2022-catalan-national-day | OK | 202 | yes | 13408 | 25 | 0 | 0 | 0 | 58 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-command-name, aria-prohibited-attr, frame-title, landmark-no-duplicate-banner, link-in-text-block, region, tabindex |
| https://barcelona.cat/ca/que-pots-fer-a-bcn/banys-i-platges/barcelona-platja-platja | https://www.barcelona.cat/ca/que-pots-fer-a-bcn/banys-i-platges/barcelona-platja-platja | OK | 202 | yes | 11919 | 24 | 0 | 0 | 0 | 44 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt, landmark-no-duplicate-banner, region, tabindex |
| https://barcelona.cat/es/que-hacer-en-bcn/banos-y-playas/historia-de-las-playas | https://www.barcelona.cat/es/que-hacer-en-bcn/banos-y-playas/historia-de-las-playas | OK | 202 | yes | 12451 | 25 | 0 | 0 | 0 | 42 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-required-children, image-alt, landmark-no-duplicate-banner, region, tabindex |
| https://barcelona.cat/es/que-hacer-en-bcn/parques-y-jardines/parques-forestales | https://www.barcelona.cat/es/que-hacer-en-bcn/parques-y-jardines/parques-forestales | OK | 202 | yes | 12281 | 24 | 0 | 0 | 0 | 37 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt, landmark-no-duplicate-banner, region, tabindex |
| https://barcelona.cat/es/vivir-en-bcn/con-personas-mayores/vivir-con-tranquilidad | https://www.barcelona.cat/es/vivir-en-bcn/con-personas-mayores/vivir-con-tranquilidad | OK | 202 | yes | 11384 | 24 | 0 | 0 | 0 | 29 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt, landmark-no-duplicate-banner, region, tabindex |
| https://barcelona.cat/es/que-hacer-en-bcn/ponte-en-forma/clubes | https://www.barcelona.cat/es/que-hacer-en-bcn/ponte-en-forma/clubes | OK | 202 | yes | 14433 | 24 | 0 | 0 | 0 | 159 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt, landmark-no-duplicate-banner, region, tabindex |
| https://barcelona.cat/en/what-to-do-in-bcn/parks-and-gardens/history | https://www.barcelona.cat/en/what-to-do-in-bcn/parks-and-gardens/history | OK | 202 | yes | 11796 | 25 | 0 | 0 | 0 | 31 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-required-children, image-alt, landmark-no-duplicate-banner, region, tabindex |
| https://barcelona.cat/es/que-hacer-en-bcn/parque-montjuic/conoce-el-consejo-del-parque-de-montjuic | https://www.barcelona.cat/es/que-hacer-en-bcn/parque-montjuic/conoce-el-consejo-del-parque-de-montjuic | OK | 202 | yes | 11133 | 24 | 0 | 0 | 0 | 34 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt, landmark-no-duplicate-banner, region, tabindex |
| https://barcelona.cat/ca/viure-a-bcn/amb-nens-i-nenes | https://www.barcelona.cat/ca/viure-a-bcn/amb-nens-i-nenes | OK | 202 | yes | 11407 | 24 | 0 | 0 | 0 | 31 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt, landmark-no-duplicate-banner, region, tabindex |
| https://barcelona.cat/es/conocebcn/la-historia/la-barcelona-contemporanea | https://www.barcelona.cat/es/conocebcn/la-historia/la-barcelona-contemporanea | OK | 202 | yes | 10968 | 24 | 0 | 0 | 0 | 26 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt, landmark-no-duplicate-banner, region, tabindex |
| https://barcelona.cat/en/discoverbcn/ciutadella-knowledge-hub/transformation-park | https://www.barcelona.cat/en/discoverbcn/ciutadella-knowledge-hub/transformation-park | OK | 202 | yes | 11407 | 25 | 0 | 0 | 0 | 23 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-required-children, image-alt, landmark-no-duplicate-banner, region, tabindex |
| https://barcelona.cat/es/conocebcn/ciutadelladelconocimiento/polo-de-biociencia-del-csic | https://www.barcelona.cat/es/conocebcn/ciutadelladelconocimiento/polo-de-biociencia-del-csic | OK | 202 | yes | 10642 | 24 | 0 | 0 | 0 | 24 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt, landmark-no-duplicate-banner, region, tabindex |

## Detailed Failure Information (ALFA)

## Detailed Failure Information (axe)

### https://barcelona.cat/

#### Rule: [aria-progressbar-name](https://dequeuniversity.com/rules/axe/4.11/aria-progressbar-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: ARIA progressbar nodes must have an accessible name
- HTML: `<div id="progressbar-carousel-capcalera" class="progress" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="50" style="background-size: 50% 100%;">           <span class="slider__label sr-only">50% completed</span>         </div>`
- XPath: `#progressbar-carousel-capcalera`

#### Rule: [aria-prohibited-attr](https://dequeuniversity.com/rules/axe/4.11/aria-prohibited-attr?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Elements must only use permitted ARIA attributes
- HTML: `<span tabindex="0" class="qualitat-aire-anterior bcn-disabled" aria-label="Anterior">                 <i aria-hidden="true" title="Anterior" class="bcn-disabled"></i>             </span>`
- XPath: `#qualitat-aire-i`

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Buttons must have discernible text
- HTML: `<button class="geoLocation"></button>`
- XPath: `#iframe-planol`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-03-25
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a target="_blank" href="../ca/">Plànol</a>`
- XPath: `#iframe-planol`

#### Rule: [frame-title](https://dequeuniversity.com/rules/axe/4.11/frame-title?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Frames must have an accessible name
- HTML: `<iframe frameborder="0" height="88px" src="https://ajuntament.barcelona.cat/widgets/temps/v3/?lang=ca" width="142px" id="i-temps"></iframe>`
- XPath: `#i-temps`

**Failure 2:**
- First identified: 2026-03-25
- Message: Frames must have an accessible name
- HTML: `<iframe frameborder="0" height="410px" src="https://com-shi-va.barcelona.cat/ca/api/widget/route" width="100%"></iframe>`
- XPath: `iframe[height="410px"]`

#### Rule: [html-lang-valid](https://dequeuniversity.com/rules/axe/4.11/html-lang-valid?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: <html> element must have a valid value for the lang attribute
- HTML: `<html lang="cat" class=" js no-touch geolocation borderimage borderradius textshadow opacity cssgradients svg svgclippaths">`
- XPath: `#iframe-planol`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Images must have alternative text
- HTML: `<img src="/images/icons/marker.svg" class="img-marker">`
- XPath: `iframe[height="410px"]`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2026-03..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div class="llistat-bg-promos slick-initialized slick-slider slick-dotted" role="region" aria-label="carousel">`
- XPath: `.llistat-bg-promos`

**Failure 2:**
- First identified: 2026-03-25
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<main id="main-content" role="main">`
- XPath: `#main-content`

**Failure 3:**
- First identified: 2026-03-25
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav class="js-main-search">`
- XPath: `#iframe-planol`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Links must have discernible text
- HTML: `<a id="lupaCerca" href="javascript:void(0);" class="js_search_icon"></a>`
- XPath: `#iframe-planol`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<a href="#carousel-capcalera" class="visually-hidden focusable to-main-content" tabindex="1">       Vés al contingut     </a>`
- XPath: `.focusable`

**Failure 2:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `#ajuntament--prefooter > .container > ul > li:nth-child(1)`

**Failure 3:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Adreces</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contacte</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-03-25
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#carousel-capcalera" class="visually-hidden focusable to-main-content" tabindex="1">       Vés al contingut     </a>`
- XPath: `.focusable`

### https://barcelona.cat/en/living-in-bcn/accessibility

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_1.png">`
- XPath: `.menu-0 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2026-03..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

**Failure 2:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Addresses</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contact</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-03-25
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

### https://barcelona.cat/en/what-to-do-in-bcn/bathing-and-beaches/accessibility

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_3.png">`
- XPath: `.menu-2 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2026-03..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

**Failure 2:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Addresses</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contact</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-03-25
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

### https://barcelona.cat/en/what-to-do-in-bcn/montjuic-park/find-out-about-montjuic-park-council

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_3.png">`
- XPath: `.menu-2 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2026-03..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

**Failure 2:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Addresses</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contact</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-03-25
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

### https://barcelona.cat/ca

#### Rule: [aria-progressbar-name](https://dequeuniversity.com/rules/axe/4.11/aria-progressbar-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: ARIA progressbar nodes must have an accessible name
- HTML: `<div id="progressbar-carousel-capcalera" class="progress" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="50" style="background-size: 50% 100%;">           <span class="slider__label sr-only">50% completed</span>         </div>`
- XPath: `#progressbar-carousel-capcalera`

#### Rule: [aria-prohibited-attr](https://dequeuniversity.com/rules/axe/4.11/aria-prohibited-attr?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Elements must only use permitted ARIA attributes
- HTML: `<span tabindex="0" class="qualitat-aire-anterior bcn-disabled" aria-label="Anterior">                 <i aria-hidden="true" title="Anterior" class="bcn-disabled"></i>             </span>`
- XPath: `#qualitat-aire-i`

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Buttons must have discernible text
- HTML: `<button class="geoLocation"></button>`
- XPath: `#iframe-planol`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-03-25
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<div class="time">tarda</div>`
- XPath: `#i-temps`

**Failure 2:**
- First identified: 2026-03-25
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a target="_blank" href="../ca/">Plànol</a>`
- XPath: `#iframe-planol`

#### Rule: [frame-title](https://dequeuniversity.com/rules/axe/4.11/frame-title?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Frames must have an accessible name
- HTML: `<iframe frameborder="0" height="88px" src="https://ajuntament.barcelona.cat/widgets/temps/v3/?lang=ca" width="142px" id="i-temps"></iframe>`
- XPath: `#i-temps`

**Failure 2:**
- First identified: 2026-03-25
- Message: Frames must have an accessible name
- HTML: `<iframe frameborder="0" height="410px" src="https://com-shi-va.barcelona.cat/ca/api/widget/route" width="100%"></iframe>`
- XPath: `iframe[height="410px"]`

#### Rule: [html-lang-valid](https://dequeuniversity.com/rules/axe/4.11/html-lang-valid?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: <html> element must have a valid value for the lang attribute
- HTML: `<html lang="cat" class=" js no-touch geolocation borderimage borderradius textshadow opacity cssgradients svg svgclippaths">`
- XPath: `#iframe-planol`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Images must have alternative text
- HTML: `<img src="/images/icons/marker.svg" class="img-marker">`
- XPath: `iframe[height="410px"]`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2026-03..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div class="llistat-bg-promos slick-initialized slick-slider slick-dotted" role="region" aria-label="carousel">`
- XPath: `.llistat-bg-promos`

**Failure 2:**
- First identified: 2026-03-25
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<main id="main-content" role="main">`
- XPath: `#main-content`

**Failure 3:**
- First identified: 2026-03-25
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav class="js-main-search">`
- XPath: `#iframe-planol`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Links must have discernible text
- HTML: `<a id="lupaCerca" href="javascript:void(0);" class="js_search_icon"></a>`
- XPath: `#iframe-planol`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<a href="#carousel-capcalera" class="visually-hidden focusable to-main-content" tabindex="1">       Vés al contingut     </a>`
- XPath: `.focusable`

**Failure 2:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `#ajuntament--prefooter > .container > ul > li:nth-child(1)`

**Failure 3:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Adreces</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contacte</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-03-25
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#carousel-capcalera" class="visually-hidden focusable to-main-content" tabindex="1">       Vés al contingut     </a>`
- XPath: `.focusable`

### https://barcelona.cat/en

#### Rule: [aria-progressbar-name](https://dequeuniversity.com/rules/axe/4.11/aria-progressbar-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: ARIA progressbar nodes must have an accessible name
- HTML: `<div id="progressbar-carousel-capcalera" class="progress" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="50" style="background-size: 50% 100%;">           <span class="slider__label sr-only">50% completed</span>         </div>`
- XPath: `#progressbar-carousel-capcalera`

#### Rule: [aria-prohibited-attr](https://dequeuniversity.com/rules/axe/4.11/aria-prohibited-attr?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Elements must only use permitted ARIA attributes
- HTML: `<span tabindex="0" class="qualitat-aire-anterior bcn-disabled" aria-label="Previous">                 <i aria-hidden="true" title="Previous" class="bcn-disabled"></i>             </span>`
- XPath: `#qualitat-aire-i`

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Buttons must have discernible text
- HTML: `<button class="geoLocation"></button>`
- XPath: `#planol-screen > iframe`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-03-25
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a target="_blank" href="../en/">Barcelona map</a>`
- XPath: `#planol-screen > iframe`

#### Rule: [frame-title](https://dequeuniversity.com/rules/axe/4.11/frame-title?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Frames must have an accessible name
- HTML: `<iframe frameborder="0" height="88px" src="https://ajuntament.barcelona.cat/widgets/temps/v3/?lang=en" width="142px" id="i-temps"></iframe>`
- XPath: `#i-temps`

**Failure 2:**
- First identified: 2026-03-25
- Message: Frames must have an accessible name
- HTML: `<iframe frameborder="0" height="410px" src="https://com-shi-va.barcelona.cat/en/api/widget/route" width="100%"></iframe>`
- XPath: `iframe[height="410px"]`

#### Rule: [html-lang-valid](https://dequeuniversity.com/rules/axe/4.11/html-lang-valid?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: <html> element must have a valid value for the lang attribute
- HTML: `<html lang="cat" class=" js no-touch geolocation borderimage borderradius textshadow opacity cssgradients svg svgclippaths">`
- XPath: `#planol-screen > iframe`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Images must have alternative text
- HTML: `<img src="/images/icons/marker.svg" class="img-marker">`
- XPath: `iframe[height="410px"]`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2026-03..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div class="llistat-bg-promos slick-initialized slick-slider slick-dotted" role="region" aria-label="carousel">`
- XPath: `.llistat-bg-promos`

**Failure 2:**
- First identified: 2026-03-25
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<main id="main-content" role="main">`
- XPath: `#main-content`

**Failure 3:**
- First identified: 2026-03-25
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav class="js-main-search">`
- XPath: `#planol-screen > iframe`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Links must have discernible text
- HTML: `<a id="lupaCerca" href="javascript:void(0);" class="js_search_icon"></a>`
- XPath: `#planol-screen > iframe`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<a href="#carousel-capcalera" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

**Failure 2:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `#ajuntament--prefooter > .container > ul > li:nth-child(1)`

**Failure 3:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Addresses</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contact</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-03-25
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#carousel-capcalera" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

### https://barcelona.cat/es

#### Rule: [aria-progressbar-name](https://dequeuniversity.com/rules/axe/4.11/aria-progressbar-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: ARIA progressbar nodes must have an accessible name
- HTML: `<div id="progressbar-carousel-capcalera" class="progress" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="50" style="background-size: 50% 100%;">           <span class="slider__label sr-only">50% completed</span>         </div>`
- XPath: `#progressbar-carousel-capcalera`

#### Rule: [aria-prohibited-attr](https://dequeuniversity.com/rules/axe/4.11/aria-prohibited-attr?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Elements must only use permitted ARIA attributes
- HTML: `<span tabindex="0" class="qualitat-aire-anterior bcn-disabled" aria-label="Previo">                 <i aria-hidden="true" title="Previo" class="bcn-disabled"></i>             </span>`
- XPath: `#qualitat-aire-i`

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Buttons must have discernible text
- HTML: `<button class="geoLocation"></button>`
- XPath: `#planol-screen > iframe`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-03-25
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a target="_blank" href="../es/">Plano</a>`
- XPath: `#planol-screen > iframe`

#### Rule: [frame-title](https://dequeuniversity.com/rules/axe/4.11/frame-title?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Frames must have an accessible name
- HTML: `<iframe frameborder="0" height="88px" src="https://ajuntament.barcelona.cat/widgets/temps/v3/?lang=es" width="142px" id="i-temps"></iframe>`
- XPath: `#i-temps`

**Failure 2:**
- First identified: 2026-03-25
- Message: Frames must have an accessible name
- HTML: `<iframe frameborder="0" height="410px" src="https://com-shi-va.barcelona.cat/es/api/widget/route" width="100%"></iframe>`
- XPath: `iframe[height="410px"]`

#### Rule: [html-lang-valid](https://dequeuniversity.com/rules/axe/4.11/html-lang-valid?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: <html> element must have a valid value for the lang attribute
- HTML: `<html lang="cat" class=" js no-touch geolocation borderimage borderradius textshadow opacity cssgradients svg svgclippaths">`
- XPath: `#planol-screen > iframe`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Images must have alternative text
- HTML: `<img src="/images/icons/marker.svg" class="img-marker">`
- XPath: `iframe[height="410px"]`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2026-03..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div class="llistat-bg-promos slick-initialized slick-slider slick-dotted" role="region" aria-label="carousel">`
- XPath: `.llistat-bg-promos`

**Failure 2:**
- First identified: 2026-03-25
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<main id="main-content" role="main">`
- XPath: `#main-content`

**Failure 3:**
- First identified: 2026-03-25
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav class="js-main-search">`
- XPath: `#planol-screen > iframe`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Links must have discernible text
- HTML: `<a id="lupaCerca" href="javascript:void(0);" class="js_search_icon"></a>`
- XPath: `#planol-screen > iframe`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<a href="#carousel-capcalera" class="visually-hidden focusable to-main-content" tabindex="1">       Pasar al contenido principal     </a>`
- XPath: `.focusable`

**Failure 2:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `#ajuntament--prefooter > .container > ul > li:nth-child(1)`

**Failure 3:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Dirección</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contacto</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-03-25
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#carousel-capcalera" class="visually-hidden focusable to-main-content" tabindex="1">       Pasar al contenido principal     </a>`
- XPath: `.focusable`

### https://barcelona.cat/ca/canelons

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2026-03..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Vés al contingut     </a>`
- XPath: `.focusable`

**Failure 2:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Adreces</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contacte</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-03-25
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Vés al contingut     </a>`
- XPath: `.focusable`

### https://barcelona.cat/ca/coneixbcn

#### Rule: [aria-required-children](https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Certain ARIA roles must contain particular children
- HTML: `<div role="menu" class="container list-pano-rollover">`
- XPath: `.list-pano-rollover`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_4.png">`
- XPath: `.menu-3 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2026-03..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Vés al contingut     </a>`
- XPath: `.focusable`

**Failure 2:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `#ajuntament--prefooter > .container > ul > li:nth-child(1)`

**Failure 3:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Adreces</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contacte</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-03-25
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Vés al contingut     </a>`
- XPath: `.focusable`

### https://barcelona.cat/ca/diada-nacional-de-catalunya-2022

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2026-03..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Vés al contingut     </a>`
- XPath: `.focusable`

**Failure 2:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Adreces</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contacte</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-03-25
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Vés al contingut     </a>`
- XPath: `.focusable`

### https://barcelona.cat/ca/implicat

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_5.png">`
- XPath: `.menu-4 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2026-03..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Vés al contingut     </a>`
- XPath: `.focusable`

**Failure 2:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Adreces</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contacte</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-03-25
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Vés al contingut     </a>`
- XPath: `.focusable`

### https://barcelona.cat/ca/pagina-imatge-promocional

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2026-03..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Vés al contingut     </a>`
- XPath: `.focusable`

**Failure 2:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Adreces</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contacte</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-03-25
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Vés al contingut     </a>`
- XPath: `.focusable`

### https://barcelona.cat/ca/prova-video

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-03-25
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>           Video 1       <span>       </span></span>`
- XPath: `.faq-question > span`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2026-03..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Vés al contingut     </a>`
- XPath: `.focusable`

**Failure 2:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Adreces</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contacte</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-03-25
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Vés al contingut     </a>`
- XPath: `.focusable`

### https://barcelona.cat/ca/que-pots-fer-a-bcn

#### Rule: [aria-required-children](https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Certain ARIA roles must contain particular children
- HTML: `<div role="menu" class="container list-pano-rollover">`
- XPath: `.list-pano-rollover`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_3.png">`
- XPath: `.menu-2 > .icona > img`

#### Rule: [image-redundant-alt](https://dequeuniversity.com/rules/axe/4.11/image-redundant-alt?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-03-25
- Message: Alternative text of images should not be repeated as text
- HTML: `<img loading="lazy" src="/sites/default/files/styles/distribuidora_banner_paginat/public/vedebcn_250x250.jpg?itok=sI_-hMsI" width="250" height="250" alt="ve de barcelona">`
- XPath: `img[alt="ve de barcelona"]`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2026-03..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Vés al contingut     </a>`
- XPath: `.focusable`

**Failure 2:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `#ajuntament--prefooter > .container > ul > li:nth-child(1)`

**Failure 3:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Adreces</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contacte</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-03-25
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Vés al contingut     </a>`
- XPath: `.focusable`

### https://barcelona.cat/ca/treball-i-empresa

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_2.png">`
- XPath: `.menu-1 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2026-03..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Vés al contingut     </a>`
- XPath: `.focusable`

**Failure 2:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Adreces</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contacte</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-03-25
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Vés al contingut     </a>`
- XPath: `.focusable`

### https://barcelona.cat/ca/viure-a-bcn

#### Rule: [aria-required-children](https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Certain ARIA roles must contain particular children
- HTML: `<div role="menu" class="container list-pano-rollover">`
- XPath: `.list-pano-rollover`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_1.png">`
- XPath: `.menu-0 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2026-03..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Vés al contingut     </a>`
- XPath: `.focusable`

**Failure 2:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `#ajuntament--prefooter > .container > ul > li:nth-child(1)`

**Failure 3:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Adreces</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contacte</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-03-25
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Vés al contingut     </a>`
- XPath: `.focusable`

### https://barcelona.cat/en/catalan-national-day-2022

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2026-03..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

**Failure 2:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Addresses</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contact</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-03-25
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

### https://barcelona.cat/en/discoverbcn

#### Rule: [aria-required-children](https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Certain ARIA roles must contain particular children
- HTML: `<div role="menu" class="container list-pano-rollover">`
- XPath: `.list-pano-rollover`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_4.png">`
- XPath: `.menu-3 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2026-03..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

**Failure 2:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `#ajuntament--prefooter > .container > ul > li:nth-child(1)`

**Failure 3:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Addresses</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contact</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-03-25
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

### https://barcelona.cat/en/getinvolved

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_5.png">`
- XPath: `.menu-4 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2026-03..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

**Failure 2:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Addresses</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contact</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-03-25
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

### https://barcelona.cat/en/living-in-bcn

#### Rule: [aria-required-children](https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Certain ARIA roles must contain particular children
- HTML: `<div role="menu" class="container list-pano-rollover">`
- XPath: `.list-pano-rollover`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_1.png">`
- XPath: `.menu-0 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2026-03..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

**Failure 2:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `#ajuntament--prefooter > .container > ul > li:nth-child(1)`

**Failure 3:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Addresses</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contact</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-03-25
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

### https://barcelona.cat/en/pagina-exemple-mapa-sant-jordi

#### Rule: [frame-title](https://dequeuniversity.com/rules/axe/4.11/frame-title?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Frames must have an accessible name
- HTML: `<iframe frameborder="0" id="frame_home" src="http://lameva.barcelona.cat/sites/all/static/stjordi/map/mapa_sang_EN.html" width="100%"></iframe>`
- XPath: `#frame_home`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2026-03..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

**Failure 2:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Addresses</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contact</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-03-25
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

### https://barcelona.cat/en/what-to-do-in-bcn

#### Rule: [aria-required-children](https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Certain ARIA roles must contain particular children
- HTML: `<div role="menu" class="container list-pano-rollover">`
- XPath: `.list-pano-rollover`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_3.png">`
- XPath: `.menu-2 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2026-03..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

**Failure 2:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `#ajuntament--prefooter > .container > ul > li:nth-child(1)`

**Failure 3:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Addresses</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contact</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-03-25
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

### https://barcelona.cat/es/conocebcn

#### Rule: [aria-required-children](https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Certain ARIA roles must contain particular children
- HTML: `<div role="menu" class="container list-pano-rollover">`
- XPath: `.list-pano-rollover`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_4.png">`
- XPath: `.menu-3 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2026-03..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Pasar al contenido principal     </a>`
- XPath: `.focusable`

**Failure 2:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `#ajuntament--prefooter > .container > ul > li:nth-child(1)`

**Failure 3:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Dirección</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contacto</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-03-25
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Pasar al contenido principal     </a>`
- XPath: `.focusable`

### https://barcelona.cat/es/diada-nacional-de-cataluna-2022

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2026-03..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Pasar al contenido principal     </a>`
- XPath: `.focusable`

**Failure 2:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Dirección</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contacto</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-03-25
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Pasar al contenido principal     </a>`
- XPath: `.focusable`

### https://barcelona.cat/es/implicate

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_5.png">`
- XPath: `.menu-4 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2026-03..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Pasar al contenido principal     </a>`
- XPath: `.focusable`

**Failure 2:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Dirección</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contacto</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-03-25
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Pasar al contenido principal     </a>`
- XPath: `.focusable`

### https://barcelona.cat/es/que-hacer-en-bcn

#### Rule: [aria-required-children](https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Certain ARIA roles must contain particular children
- HTML: `<div role="menu" class="container list-pano-rollover">`
- XPath: `.list-pano-rollover`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_3.png">`
- XPath: `.menu-2 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2026-03..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Pasar al contenido principal     </a>`
- XPath: `.focusable`

**Failure 2:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `#ajuntament--prefooter > .container > ul > li:nth-child(1)`

**Failure 3:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Dirección</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contacto</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-03-25
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Pasar al contenido principal     </a>`
- XPath: `.focusable`

### https://barcelona.cat/es/trabajo-y-empresa

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_2.png">`
- XPath: `.menu-1 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2026-03..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Pasar al contenido principal     </a>`
- XPath: `.focusable`

**Failure 2:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Dirección</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contacto</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-03-25
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Pasar al contenido principal     </a>`
- XPath: `.focusable`

### https://barcelona.cat/es/vivir-en-bcn

#### Rule: [aria-required-children](https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Certain ARIA roles must contain particular children
- HTML: `<div role="menu" class="container list-pano-rollover">`
- XPath: `.list-pano-rollover`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_1.png">`
- XPath: `.menu-0 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2026-03..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Pasar al contenido principal     </a>`
- XPath: `.focusable`

**Failure 2:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `#ajuntament--prefooter > .container > ul > li:nth-child(1)`

**Failure 3:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Dirección</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contacto</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-03-25
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Pasar al contenido principal     </a>`
- XPath: `.focusable`

### https://barcelona.cat/es/aviso-legal/banoasistido

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2026-03..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Pasar al contenido principal     </a>`
- XPath: `.focusable`

**Failure 2:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Dirección</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contacto</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-03-25
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Pasar al contenido principal     </a>`
- XPath: `.focusable`

### https://barcelona.cat/es/blogoteca/condiciones-uso

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2026-03..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Pasar al contenido principal     </a>`
- XPath: `.focusable`

**Failure 2:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Dirección</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contacto</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-03-25
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Pasar al contenido principal     </a>`
- XPath: `.focusable`

### https://barcelona.cat/es/conocebcn/la-ciutadella-del-conocimiento

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_4.png">`
- XPath: `.menu-3 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2026-03..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Pasar al contenido principal     </a>`
- XPath: `.focusable`

**Failure 2:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `#ajuntament--prefooter > .container > ul > li:nth-child(1)`

**Failure 3:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Dirección</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contacto</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-03-25
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Pasar al contenido principal     </a>`
- XPath: `.focusable`

### https://barcelona.cat/es/que-hacer-en-bcn/banos-y-playas/actividades-deportivas-organizadas-por-deportistas-federados

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_3.png">`
- XPath: `.menu-2 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2026-03..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Pasar al contenido principal     </a>`
- XPath: `.focusable`

**Failure 2:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Dirección</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contacto</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-03-25
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Pasar al contenido principal     </a>`
- XPath: `.focusable`

### https://barcelona.cat/en/what-to-do-in-bcn/montjuic-park/news

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-03-25
- Message: ARIA role should be appropriate for the element
- HTML: `<form class="d-flex justify-content-md-between align-items-md-center ajuntament-actualitat-filtres" role="region" aria-label="News list dates and number of results per page control" aria-controls="ajuntament-actualitat-noticies">`
- XPath: `.justify-content-md-between`

**Failure 2:**
- First identified: 2026-03-25
- Message: ARIA role should be appropriate for the element
- HTML: `<h3 class="sr-only" role="status">Showing <span>10</span> results.</h3>`
- XPath: `h3[role="status"]`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_3.png">`
- XPath: `.menu-2 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2026-03..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

**Failure 2:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `#ajuntament--prefooter > .container > ul > li:nth-child(1)`

**Failure 3:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Addresses</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contact</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-03-25
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

### https://barcelona.cat/en/what-to-do-in-bcn/parks-and-gardens/belvederes

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_3.png">`
- XPath: `.menu-2 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2026-03..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

**Failure 2:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Addresses</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contact</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-03-25
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

### https://barcelona.cat/en/discoverbcn/pics

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-03-25
- Message: ARIA role should be appropriate for the element
- HTML: `<legend aria-expanded="false" role="button" tabindex="0" class="ajuntament-maps-legend">Districts                           <span aria-hidden="true" title="Desplegar districtes" class="icobcn-fletxa-baix2-l"></span>                         </legend>`
- XPath: `.ajuntament-maps-fieldset:nth-child(1) > legend`

**Failure 2:**
- First identified: 2026-03-25
- Message: ARIA role should be appropriate for the element
- HTML: `<legend aria-expanded="true" role="button" tabindex="0" class="ajuntament-maps-legend ajuntament-maps-slided">`
- XPath: `.ajuntament-maps-fieldset:nth-child(2) > legend`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_4.png">`
- XPath: `.menu-3 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2026-03..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

**Failure 2:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Addresses</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contact</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-03-25
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

### https://barcelona.cat/es/vivir-en-bcn/vive-el-barrio

#### Rule: [area-alt](https://dequeuniversity.com/rules/axe/4.11/area-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Active <area> elements must have alternative text
- HTML: `<area shape="poly" alt="" coords="580,500,584,501,597,..." href="#" districte="1">`
- XPath: `#fembarri`

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-03-25
- Message: ARIA role should be appropriate for the element
- HTML: `<li districte="1" data-url="https://ajuntament.barcelona.cat/ciutatvella/es/" tabindex="0" role="button"><img src="img/districte_1.jpg" alt="Ciutat Vella"><div class="label"><p class="name">Ciutat Vella</p><p class="barris">4 barrios</p></div></li>`
- XPath: `#fembarri`

#### Rule: [aria-command-name](https://dequeuniversity.com/rules/axe/4.11/aria-command-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: ARIA commands must have an accessible name
- HTML: `<div class="title" tabindex="-1" role="button"></div>`
- XPath: `#fembarri`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_1.png">`
- XPath: `.menu-0 > .icona > img`

**Failure 2:**
- First identified: 2026-03-25
- Message: Images must have alternative text
- HTML: `<img class="mapster_el" src="https://www.barcelona.cat/themes/barcelonacat_theme/includes/fembarri/img/0_map_es.jpg" style="width: 1080px; height: 770px; opacity: 1;">`
- XPath: `#fembarri`

#### Rule: [image-redundant-alt](https://dequeuniversity.com/rules/axe/4.11/image-redundant-alt?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-03-25
- Message: Alternative text of images should not be repeated as text
- HTML: `<img src="img/districte_1.jpg" alt="Ciutat Vella">`
- XPath: `#fembarri`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2026-03..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [list](https://dequeuniversity.com/rules/axe/4.11/list?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul class="districtes_menu">`
- XPath: `#fembarri`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Pasar al contenido principal     </a>`
- XPath: `.focusable`

**Failure 2:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Dirección</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contacto</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-03-25
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Pasar al contenido principal     </a>`
- XPath: `.focusable`

### https://barcelona.cat/ca/viure-a-bcn/diada/transports-publics-durant-la-diada-2024

#### Rule: [aria-command-name](https://dequeuniversity.com/rules/axe/4.11/aria-command-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: ARIA commands must have an accessible name
- HTML: `<div role="button" class="U26fgb JRtysb ZDSs1 ..." jscontroller="iSvg6e" jsaction="click:cOuCgd; moused..." jsshadow="" aria-disabled="false" tabindex="0" aria-haspopup="true" aria-expanded="false" data-aligntop="true">`
- XPath: `.modal--image`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-03-25
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="//www.google.com/intl/en_US/help/terms_maps.html" target="_blank">Terms</a>`
- XPath: `.modal--image`

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-03-25
- Message: Headings should not be empty
- HTML: `<h3 dir="ltr">&nbsp;</h3>`
- XPath: `h3:nth-child(3)`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_1.png">`
- XPath: `.menu-0 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2026-03..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Vés al contingut     </a>`
- XPath: `.focusable`

**Failure 2:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Adreces</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contacte</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-03-25
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Vés al contingut     </a>`
- XPath: `.focusable`

### https://barcelona.cat/en/what-to-do-in-bcn/magic-fountain/history

#### Rule: [aria-required-children](https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Certain ARIA roles must contain particular children
- HTML: `<div class="galeria-internanav" role="tablist" aria-label="Gallery controls">`
- XPath: `.galeria-internanav`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_3.png">`
- XPath: `.menu-2 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2026-03..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

**Failure 2:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Addresses</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contact</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-03-25
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

### https://barcelona.cat/es/conocebcn/ciutadelladelconocimiento/biblioteca-central

#### Rule: [aria-required-children](https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Certain ARIA roles must contain particular children
- HTML: `<div class="galeria-internanav" role="tablist" aria-label="Gallery controls">`
- XPath: `.galeria-internanav`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_4.png">`
- XPath: `.menu-3 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2026-03..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Pasar al contenido principal     </a>`
- XPath: `.focusable`

**Failure 2:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Dirección</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contacto</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-03-25
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Pasar al contenido principal     </a>`
- XPath: `.focusable`

### https://barcelona.cat/en/what-to-do-in-bcn/festes-majors

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-03-25
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<div class="day-item is-previous-month" data-time="1771804800000" tabindex="2">23</div>`
- XPath: `div[data-time="1771804800000"]`

**Failure 2:**
- First identified: 2026-03-25
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<div class="day-item is-previous-month" data-time="1771891200000" tabindex="2">24</div>`
- XPath: `div[data-time="1771891200000"]`

**Failure 3:**
- First identified: 2026-03-25
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<div class="day-item is-previous-month" data-time="1771977600000" tabindex="2">25</div>`
- XPath: `div[data-time="1771977600000"]`

**Failure 4:**
- First identified: 2026-03-25
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<div class="day-item is-previous-month" data-time="1772064000000" tabindex="2">26</div>`
- XPath: `div[data-time="1772064000000"]`

**Failure 5:**
- First identified: 2026-03-25
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<div class="day-item is-previous-month" data-time="1772150400000" tabindex="2">27</div>`
- XPath: `div[data-time="1772150400000"]`

*... and 1 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_3.png">`
- XPath: `.menu-2 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2026-03..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

**Failure 2:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Addresses</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contact</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-03-25
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

**Failure 2:**
- First identified: 2026-03-25
- Message: Elements should not have tabindex greater than zero
- HTML: `<button type="button" class="button-previous-month" tabindex="1">←<span class="sr-only">Previous month</span></button>`
- XPath: `.button-previous-month`

**Failure 3:**
- First identified: 2026-03-25
- Message: Elements should not have tabindex greater than zero
- HTML: `<button type="button" class="button-next-month" tabindex="1">→<span class="sr-only">Next month</span></button>`
- XPath: `.button-next-month`

**Failure 4:**
- First identified: 2026-03-25
- Message: Elements should not have tabindex greater than zero
- HTML: `<div class="day-item is-previous-month" data-time="1771804800000" tabindex="2">23</div>`
- XPath: `div[data-time="1771804800000"]`

**Failure 5:**
- First identified: 2026-03-25
- Message: Elements should not have tabindex greater than zero
- HTML: `<div class="day-item is-previous-month" data-time="1771891200000" tabindex="2">24</div>`
- XPath: `div[data-time="1771891200000"]`

*... and 40 more failures for this rule*

### https://barcelona.cat/ca/viure-a-bcn/amb-nens-i-nenes/lleure/llistat-de-ludotecas

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_1.png">`
- XPath: `.menu-0 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2026-03..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Vés al contingut     </a>`
- XPath: `.focusable`

**Failure 2:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Adreces</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contacte</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-03-25
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Vés al contingut     </a>`
- XPath: `.focusable`

### https://barcelona.cat/en/what-to-do-in-bcn/parks-and-gardens/childrens-play-areas

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_3.png">`
- XPath: `.menu-2 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2026-03..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

**Failure 2:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Addresses</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contact</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-03-25
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

### https://barcelona.cat/ca/que-pots-fer-a-bcn/estiu/refrescat-a-les-piscines-municipals

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_3.png">`
- XPath: `.menu-2 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2026-03..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Vés al contingut     </a>`
- XPath: `.focusable`

**Failure 2:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Adreces</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contacte</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-03-25
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Vés al contingut     </a>`
- XPath: `.focusable`

### https://barcelona.cat/es/que-hacer-en-bcn/banos-y-playas/playa-de-sant-miquel

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_3.png">`
- XPath: `.menu-2 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2026-03..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Pasar al contenido principal     </a>`
- XPath: `.focusable`

**Failure 2:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Dirección</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contacto</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-03-25
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Pasar al contenido principal     </a>`
- XPath: `.focusable`

### https://barcelona.cat/ca/que-pots-fer-a-bcn/parcs-i-jardins/parcs-forestals

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_3.png">`
- XPath: `.menu-2 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2026-03..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Vés al contingut     </a>`
- XPath: `.focusable`

**Failure 2:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Adreces</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contacte</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-03-25
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Vés al contingut     </a>`
- XPath: `.focusable`

### https://barcelona.cat/en/what-to-do-in-bcn/summer/outdoor-films

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-03-25
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<div class="day-item is-previous-month" data-time="1771804800000" tabindex="2">23</div>`
- XPath: `div[data-time="1771804800000"]`

**Failure 2:**
- First identified: 2026-03-25
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<div class="day-item is-previous-month" data-time="1771891200000" tabindex="2">24</div>`
- XPath: `div[data-time="1771891200000"]`

**Failure 3:**
- First identified: 2026-03-25
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<div class="day-item is-previous-month" data-time="1771977600000" tabindex="2">25</div>`
- XPath: `div[data-time="1771977600000"]`

**Failure 4:**
- First identified: 2026-03-25
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<div class="day-item is-previous-month" data-time="1772064000000" tabindex="2">26</div>`
- XPath: `div[data-time="1772064000000"]`

**Failure 5:**
- First identified: 2026-03-25
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<div class="day-item is-previous-month" data-time="1772150400000" tabindex="2">27</div>`
- XPath: `div[data-time="1772150400000"]`

*... and 1 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_3.png">`
- XPath: `.menu-2 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2026-03..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

**Failure 2:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Addresses</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contact</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-03-25
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

**Failure 2:**
- First identified: 2026-03-25
- Message: Elements should not have tabindex greater than zero
- HTML: `<button type="button" class="button-previous-month" tabindex="1">←<span class="sr-only">Previous month</span></button>`
- XPath: `.button-previous-month`

**Failure 3:**
- First identified: 2026-03-25
- Message: Elements should not have tabindex greater than zero
- HTML: `<button type="button" class="button-next-month" tabindex="1">→<span class="sr-only">Next month</span></button>`
- XPath: `.button-next-month`

**Failure 4:**
- First identified: 2026-03-25
- Message: Elements should not have tabindex greater than zero
- HTML: `<div class="day-item is-previous-month" data-time="1771804800000" tabindex="2">23</div>`
- XPath: `div[data-time="1771804800000"]`

**Failure 5:**
- First identified: 2026-03-25
- Message: Elements should not have tabindex greater than zero
- HTML: `<div class="day-item is-previous-month" data-time="1771891200000" tabindex="2">24</div>`
- XPath: `div[data-time="1771891200000"]`

*... and 40 more failures for this rule*

### https://barcelona.cat/es/que-hacer-en-bcn/banos-y-playas/zona-de-banos-del-forum

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_3.png">`
- XPath: `.menu-2 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2026-03..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Pasar al contenido principal     </a>`
- XPath: `.focusable`

**Failure 2:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Dirección</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contacto</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-03-25
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Pasar al contenido principal     </a>`
- XPath: `.focusable`

### https://barcelona.cat/en/discoverbcn/ciutadella-knowledge-hub/heritage-and-science-hub

#### Rule: [aria-required-children](https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Certain ARIA roles must contain particular children
- HTML: `<div class="galeria-internanav" role="tablist" aria-label="Gallery controls">`
- XPath: `.galeria-internanav`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_4.png">`
- XPath: `.menu-3 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2026-03..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

**Failure 2:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Addresses</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contact</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-03-25
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

### https://barcelona.cat/es/que-hacer-en-bcn/cultura/teatros

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_3.png">`
- XPath: `.menu-2 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2026-03..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Pasar al contenido principal     </a>`
- XPath: `.focusable`

**Failure 2:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Dirección</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contacto</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-03-25
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Pasar al contenido principal     </a>`
- XPath: `.focusable`

### https://barcelona.cat/capdesetmana/ca/

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-03-25
- Message: Headings should not be empty
- HTML: `<h1 class="descripcion-Title"></h1>`
- XPath: `.widgetCartelleraIF`

#### Rule: [frame-title](https://dequeuniversity.com/rules/axe/4.11/frame-title?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Frames must have an accessible name
- HTML: `<iframe class="widgetCartelleraIF" frameborder="0" height="238" src="https://www.barcelona.cat/barcelonacultura/sites/cartelera/widget/index.php?lang=ca&amp;color=c60c30" width="100%"></iframe>`
- XPath: `.widgetCartelleraIF`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: Heading levels should only increase by one
- HTML: `<h3><i class="bcn-icon-cerca"></i>Troba les activitats d'aquest cap de setmana:</h3>`
- XPath: `div > h3`

**Failure 2:**
- First identified: 2026-03-25
- Message: Heading levels should only increase by one
- HTML: `<h3 class="movieInfo-Title"></h3>`
- XPath: `.widgetCartelleraIF`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Images must have alternative text
- HTML: `<img src="https://www.barcelona.cat/barcelonacultura/cartellera/files/eternity-cartel.jpg">`
- XPath: `.widgetCartelleraIF`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="capdesetmana" brand="capdesetmana_2026-03..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0277" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Cap de setmana" data-cercador="true">`
- XPath: `#brand`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Links must have discernible text
- HTML: `<a href="https://www.barcelona.cat/barcelonacultura/cartellera/ca/pellicula/eternity" target="_blank"><div class="overlay"><span></span></div><img src="https://www.barcelona.cat/barcelonacultura/cartellera/files/eternity-cartel.jpg"></a>`
- XPath: `.widgetCartelleraIF`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable" tabindex="1">       Vés al contingut     </a>`
- XPath: `a[href$="#main-content"]`

#### Rule: [select-name](https://dequeuniversity.com/rules/axe/4.11/select-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Select element must have an accessible name
- HTML: `<select class="districtsrc" name="districtstr" id="districtsrc" tabindex="-98">`
- XPath: `#districtsrc`

**Failure 2:**
- First identified: 2026-03-25
- Message: Select element must have an accessible name
- HTML: `<select name="ctg" id="ctg" class="" tabindex="-98">`
- XPath: `#ctg`

**Failure 3:**
- First identified: 2026-03-25
- Message: Select element must have an accessible name
- HTML: `<select id="entradatipus" name="ticket" class="" tabindex="-98">`
- XPath: `#entradatipus`

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-03-25
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable" tabindex="1">       Vés al contingut     </a>`
- XPath: `a[href$="#main-content"]`

### https://barcelona.cat/es/vivir-en-bcn/diada

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_1.png">`
- XPath: `.menu-0 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2026-03..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Pasar al contenido principal     </a>`
- XPath: `.focusable`

**Failure 2:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Dirección</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contacto</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-03-25
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Pasar al contenido principal     </a>`
- XPath: `.focusable`

### https://barcelona.cat/en/living-in-bcn/pets

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-03-25
- Message: ARIA role should be appropriate for the element
- HTML: `<legend aria-expanded="false" role="button" tabindex="0" class="ajuntament-maps-legend">Districts                           <span aria-hidden="true" title="Desplegar districtes" class="icobcn-fletxa-baix2-l"></span>                         </legend>`
- XPath: `.ajuntament-maps-fieldset:nth-child(1) > legend`

**Failure 2:**
- First identified: 2026-03-25
- Message: ARIA role should be appropriate for the element
- HTML: `<legend aria-expanded="true" role="button" tabindex="0" class="ajuntament-maps-legend ajuntament-maps-slided">`
- XPath: `.ajuntament-maps-slided`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_1.png">`
- XPath: `.menu-0 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2026-03..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

**Failure 2:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Addresses</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contact</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-03-25
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

### https://barcelona.cat/es/que-hacer-en-bcn/banos-y-playas/deporte-en-las-playas/pesca

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_3.png">`
- XPath: `.menu-2 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2026-03..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Pasar al contenido principal     </a>`
- XPath: `.focusable`

**Failure 2:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Dirección</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contacto</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-03-25
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Pasar al contenido principal     </a>`
- XPath: `.focusable`

### https://barcelona.cat/en/what-to-do-in-bcn/get-fit/sports-facilities

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_3.png">`
- XPath: `.menu-2 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2026-03..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

**Failure 2:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Addresses</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contact</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-03-25
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

### https://barcelona.cat/ca/que-pots-fer-a-bcn/banys-i-platges/esport-les-platges

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_3.png">`
- XPath: `.menu-2 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2026-03..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Vés al contingut     </a>`
- XPath: `.focusable`

**Failure 2:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Adreces</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contacte</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-03-25
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Vés al contingut     </a>`
- XPath: `.focusable`

### https://barcelona.cat/ca/que-pots-fer-a-bcn/cultura

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_3.png">`
- XPath: `.menu-2 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2026-03..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Links must have discernible text
- HTML: `<a href="/ca/que-pots-fer-a-bcn/cultura/arxius-i-centres-de-documentacio"><img src="/themes/barcelonacat_theme/images/espais-cultura/arxius.jpg" alt=""><span>Arxius i centres de documentació</span></a>`
- XPath: `.banners-circles > ul > li:nth-child(1) > a`

**Failure 2:**
- First identified: 2026-03-25
- Message: Links must have discernible text
- HTML: `<a href="/ca/que-pots-fer-a-bcn/cultura/auditoris"><img src="/themes/barcelonacat_theme/images/espais-cultura/audicions.jpg" alt=""><span>Auditoris</span></a>`
- XPath: `.banners-circles > ul > li:nth-child(2) > a`

**Failure 3:**
- First identified: 2026-03-25
- Message: Links must have discernible text
- HTML: `<a href="/ca/que-pots-fer-a-bcn/cultura/biblioteques"><img src="/themes/barcelonacat_theme/images/espais-cultura/biblioteques.jpg" alt=""><span>Biblioteques</span></a>`
- XPath: `.banners-circles > ul > li:nth-child(3) > a`

**Failure 4:**
- First identified: 2026-03-25
- Message: Links must have discernible text
- HTML: `<a href="/ca/que-pots-fer-a-bcn/cultura/cinemes"><img src="/themes/barcelonacat_theme/images/espais-cultura/cinemes.jpg" alt=""><span>Cinemes</span></a>`
- XPath: `.banners-circles > ul > li:nth-child(4) > a`

**Failure 5:**
- First identified: 2026-03-25
- Message: Links must have discernible text
- HTML: `<a href="/ca/que-pots-fer-a-bcn/cultura/espais-dexposicions"><img src="/themes/barcelonacat_theme/images/espais-cultura/exposicions.jpg" alt=""><span>Espais d'exposicions</span></a>`
- XPath: `.banners-circles > ul > li:nth-child(5) > a`

*... and 4 more failures for this rule*

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Vés al contingut     </a>`
- XPath: `.focusable`

**Failure 2:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `#ajuntament--prefooter > .container > ul > li:nth-child(1)`

**Failure 3:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Adreces</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contacte</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-03-25
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Vés al contingut     </a>`
- XPath: `.focusable`

### https://barcelona.cat/es/vivir-en-bcn/con-accesibilidad

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_1.png">`
- XPath: `.menu-0 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2026-03..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Pasar al contenido principal     </a>`
- XPath: `.focusable`

**Failure 2:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Dirección</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contacto</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-03-25
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Pasar al contenido principal     </a>`
- XPath: `.focusable`

### https://barcelona.cat/en/what-to-do-in-bcn/montjuic-park/activities/list

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-03-25
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<div class="day-item is-previous-month" data-time="1771804800000" tabindex="2">23</div>`
- XPath: `div[data-time="1771804800000"]`

**Failure 2:**
- First identified: 2026-03-25
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<div class="day-item is-previous-month" data-time="1771891200000" tabindex="2">24</div>`
- XPath: `div[data-time="1771891200000"]`

**Failure 3:**
- First identified: 2026-03-25
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<div class="day-item is-previous-month" data-time="1771977600000" tabindex="2">25</div>`
- XPath: `div[data-time="1771977600000"]`

**Failure 4:**
- First identified: 2026-03-25
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<div class="day-item is-previous-month" data-time="1772064000000" tabindex="2">26</div>`
- XPath: `div[data-time="1772064000000"]`

**Failure 5:**
- First identified: 2026-03-25
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<div class="day-item is-previous-month" data-time="1772150400000" tabindex="2">27</div>`
- XPath: `div[data-time="1772150400000"]`

*... and 1 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_3.png">`
- XPath: `.menu-2 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2026-03..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

**Failure 2:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Addresses</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contact</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-03-25
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

**Failure 2:**
- First identified: 2026-03-25
- Message: Elements should not have tabindex greater than zero
- HTML: `<button type="button" class="button-previous-month" tabindex="1">←<span class="sr-only">Previous month</span></button>`
- XPath: `.button-previous-month`

**Failure 3:**
- First identified: 2026-03-25
- Message: Elements should not have tabindex greater than zero
- HTML: `<button type="button" class="button-next-month" tabindex="1">→<span class="sr-only">Next month</span></button>`
- XPath: `.button-next-month`

**Failure 4:**
- First identified: 2026-03-25
- Message: Elements should not have tabindex greater than zero
- HTML: `<div class="day-item is-previous-month" data-time="1771804800000" tabindex="2">23</div>`
- XPath: `div[data-time="1771804800000"]`

**Failure 5:**
- First identified: 2026-03-25
- Message: Elements should not have tabindex greater than zero
- HTML: `<div class="day-item is-previous-month" data-time="1771891200000" tabindex="2">24</div>`
- XPath: `div[data-time="1771891200000"]`

*... and 40 more failures for this rule*

### https://barcelona.cat/es/vivir-en-bcn/medio-ambiente-y-sostenibilidad

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_1.png">`
- XPath: `.menu-0 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2026-03..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Pasar al contenido principal     </a>`
- XPath: `.focusable`

**Failure 2:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Dirección</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contacto</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-03-25
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Pasar al contenido principal     </a>`
- XPath: `.focusable`

### https://barcelona.cat/en/what-to-do-in-bcn/bathing-and-beaches/dogs-area

#### Rule: [aria-required-children](https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Certain ARIA roles must contain particular children
- HTML: `<div class="galeria-internanav" role="tablist" aria-label="Gallery controls">`
- XPath: `.galeria-internanav`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_3.png">`
- XPath: `.menu-2 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2026-03..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

**Failure 2:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Addresses</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contact</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-03-25
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

### https://barcelona.cat/en/living-in-bcn/diada

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_1.png">`
- XPath: `.menu-0 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2026-03..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

**Failure 2:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Addresses</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contact</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-03-25
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

### https://barcelona.cat/es/conocebcn/la-historia/la-barcino-romana

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_4.png">`
- XPath: `.menu-3 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2026-03..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Pasar al contenido principal     </a>`
- XPath: `.focusable`

**Failure 2:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Dirección</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contacto</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-03-25
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Pasar al contenido principal     </a>`
- XPath: `.focusable`

### https://barcelona.cat/en/what-to-do-in-bcn/culture/cinemas

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_3.png">`
- XPath: `.menu-2 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2026-03..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

**Failure 2:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Addresses</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contact</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-03-25
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

### https://barcelona.cat/en/what-to-do-in-bcn/magic-fountain/choreographies-magic-fountain

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-03-25
- Message: ARIA role should be appropriate for the element
- HTML: `<ul class="pager__items js-pager__items calendar-view-pager" role="region" aria-label="Calendar controls" aria-controls="calendari-mensual-coreos">`
- XPath: `.pager__items`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_3.png">`
- XPath: `.menu-2 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2026-03..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [listitem](https://dequeuniversity.com/rules/axe/4.11/listitem?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: <li> elements must be contained in a <ul> or <ol>
- HTML: `<li class="pager__item pager__previous">`
- XPath: `.pager__previous`

**Failure 2:**
- First identified: 2026-03-25
- Message: <li> elements must be contained in a <ul> or <ol>
- HTML: `<li class="pager__item pager__current"><div class="js-form-item form-item js-form-type-item form-item- js-form-item- form-no-label">         March 2026         </div> </li>`
- XPath: `.pager__current`

**Failure 3:**
- First identified: 2026-03-25
- Message: <li> elements must be contained in a <ul> or <ol>
- HTML: `<li class="pager__item pager__next">`
- XPath: `.pager__next`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

**Failure 2:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Addresses</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contact</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-03-25
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

### https://barcelona.cat/es/vivir-en-bcn/con-ninos-y-ninas

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_1.png">`
- XPath: `.menu-0 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2026-03..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Pasar al contenido principal     </a>`
- XPath: `.focusable`

**Failure 2:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Dirección</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contacto</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-03-25
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Pasar al contenido principal     </a>`
- XPath: `.focusable`

### https://barcelona.cat/en/discoverbcn/la-ciutadella-knowledge-hub/news

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-03-25
- Message: ARIA role should be appropriate for the element
- HTML: `<form class="d-flex justify-content-md-between align-items-md-center ajuntament-actualitat-filtres" role="region" aria-label="News list dates and number of results per page control" aria-controls="ajuntament-actualitat-noticies">`
- XPath: `.justify-content-md-between`

**Failure 2:**
- First identified: 2026-03-25
- Message: ARIA role should be appropriate for the element
- HTML: `<h3 class="sr-only" role="status">Showing <span>10</span> results.</h3>`
- XPath: `h3[role="status"]`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_4.png">`
- XPath: `.menu-3 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2026-03..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

**Failure 2:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `#ajuntament--prefooter > .container > ul > li:nth-child(1)`

**Failure 3:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Addresses</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contact</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-03-25
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

### https://barcelona.cat/ca/que-pots-fer-a-bcn/banys-i-platges

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_3.png">`
- XPath: `.menu-2 > .icona > img`

**Failure 2:**
- First identified: 2026-03-25
- Message: Images must have alternative text
- HTML: `<img src="https://www.barcelona.cat/estatics-planol/v0.9/img/w/bp/K/K001.png">`
- XPath: `label[for="transport-metros"] > img`

**Failure 3:**
- First identified: 2026-03-25
- Message: Images must have alternative text
- HTML: `<img src="https://www.barcelona.cat/estatics-planol/v0.9/img/w/bp/K/K002.png">`
- XPath: `label[for="transport-ferrocarrils"] > img`

**Failure 4:**
- First identified: 2026-03-25
- Message: Images must have alternative text
- HTML: `<img src="https://www.barcelona.cat/estatics-planol/v0.9/img/w/bp/K/K003.png">`
- XPath: `label[for="transport-renfe"] > img`

**Failure 5:**
- First identified: 2026-03-25
- Message: Images must have alternative text
- HTML: `<img src="https://www.barcelona.cat/estatics-planol/v0.9/img/w/bp/K/K011.png">`
- XPath: `label[for="transport-tramvies"] > img`

*... and 1 more failures for this rule*

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2026-03..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Links must have discernible text
- HTML: `<a href="#" id="popup-closer" class="ol-popup-closer"></a>`
- XPath: `#popup-closer`

#### Rule: [nested-interactive](https://dequeuniversity.com/rules/axe/4.11/nested-interactive?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Interactive controls must not be nested
- HTML: `<button class="platges-button platges-transports-control">`
- XPath: `.platges-button`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Vés al contingut     </a>`
- XPath: `.focusable`

**Failure 2:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Adreces</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contacte</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-03-25
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Vés al contingut     </a>`
- XPath: `.focusable`

### https://barcelona.cat/ca/que-pots-fer-a-bcn/banys-i-platges/platges-sense-residus

#### Rule: [aria-required-children](https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Certain ARIA roles must contain particular children
- HTML: `<div class="galeria-internanav" role="tablist" aria-label="Gallery controls">`
- XPath: `.galeria-internanav`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_3.png">`
- XPath: `.menu-2 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2026-03..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Vés al contingut     </a>`
- XPath: `.focusable`

**Failure 2:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Adreces</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contacte</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-03-25
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Vés al contingut     </a>`
- XPath: `.focusable`

### https://barcelona.cat/es/que-hacer-en-bcn/parque-montjuic/noticias

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-03-25
- Message: ARIA role should be appropriate for the element
- HTML: `<form class="d-flex justify-content-md-between align-items-md-center ajuntament-actualitat-filtres" role="region" aria-label="Control de fechas y número de resultados por página del listado de noticias" aria-controls="ajuntament-actualitat-noticies">`
- XPath: `.justify-content-md-between`

**Failure 2:**
- First identified: 2026-03-25
- Message: ARIA role should be appropriate for the element
- HTML: `<h3 class="sr-only" role="status">Mostrando <span>10</span> resultados.</h3>`
- XPath: `h3[role="status"]`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_3.png">`
- XPath: `.menu-2 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2026-03..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Pasar al contenido principal     </a>`
- XPath: `.focusable`

**Failure 2:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `#ajuntament--prefooter > .container > ul > li:nth-child(1)`

**Failure 3:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Dirección</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contacto</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-03-25
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Pasar al contenido principal     </a>`
- XPath: `.focusable`

### https://barcelona.cat/ca/que-pots-fer-a-bcn/banys-i-platges/zona-de-banys-del-forum

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_3.png">`
- XPath: `.menu-2 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2026-03..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Vés al contingut     </a>`
- XPath: `.focusable`

**Failure 2:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Adreces</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contacte</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-03-25
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Vés al contingut     </a>`
- XPath: `.focusable`

### https://barcelona.cat/es/que-hacer-en-bcn/ponte-en-forma/clubs-asociaciones-y-penas

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_3.png">`
- XPath: `.menu-2 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2026-03..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Pasar al contenido principal     </a>`
- XPath: `.focusable`

**Failure 2:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Dirección</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contacto</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-03-25
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Pasar al contenido principal     </a>`
- XPath: `.focusable`

### https://barcelona.cat/en/what-to-do-in-bcn/bathing-and-beaches/sant-sebastia-beach

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_3.png">`
- XPath: `.menu-2 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2026-03..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

**Failure 2:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Addresses</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contact</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-03-25
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

### https://barcelona.cat/en/what-to-do-in-bcn/magic-fountain/how-it-works

#### Rule: [aria-required-children](https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Certain ARIA roles must contain particular children
- HTML: `<div class="galeria-internanav" role="tablist" aria-label="Gallery controls">`
- XPath: `.galeria-internanav`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_3.png">`
- XPath: `.menu-2 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2026-03..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

**Failure 2:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Addresses</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contact</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-03-25
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

### https://barcelona.cat/ca/que-pots-fer-a-bcn/banys-i-platges/historia-de-les-platges

#### Rule: [aria-required-children](https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Certain ARIA roles must contain particular children
- HTML: `<div class="galeria-internanav" role="tablist" aria-label="Gallery controls">`
- XPath: `.galeria-internanav`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_3.png">`
- XPath: `.menu-2 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2026-03..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Vés al contingut     </a>`
- XPath: `.focusable`

**Failure 2:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Adreces</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contacte</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-03-25
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Vés al contingut     </a>`
- XPath: `.focusable`

### https://barcelona.cat/es/que-hacer-en-bcn/fuente-magica/horarios-de-la-fuente-magica

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Buttons must have discernible text
- HTML: `<button class="geoLocation"></button>`
- XPath: `.geoLocation`

**Failure 2:**
- First identified: 2026-03-25
- Message: Buttons must have discernible text
- HTML: `<button class="planol-widget-canviFons"></button>`
- XPath: `.planol-widget-canviFons`

**Failure 3:**
- First identified: 2026-03-25
- Message: Buttons must have discernible text
- HTML: `<button class="mostraStreetView">`
- XPath: `.mostraStreetView`

**Failure 4:**
- First identified: 2026-03-25
- Message: Buttons must have discernible text
- HTML: `<button type="button" class="ol-full-screen-false"></button>`
- XPath: `.ol-full-screen-false`

#### Rule: [empty-table-header](https://dequeuniversity.com/rules/axe/4.11/empty-table-header?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-03-25
- Message: Table header text should not be empty
- HTML: `<th scope="col"></th>`
- XPath: `th:nth-child(1)`

**Failure 2:**
- First identified: 2026-03-25
- Message: Table header text should not be empty
- HTML: `<th scope="col"></th>`
- XPath: `th:nth-child(4)`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_3.png">`
- XPath: `.menu-2 > .icona > img`

**Failure 2:**
- First identified: 2026-03-25
- Message: Images must have alternative text
- HTML: `<img id="dragImgStreetView" src="https://www.barcelon..." onmouseover="this.src="https://ww..." onmouseout="this.src="https://ww..." class="grabbable" draggable="true">`
- XPath: `#dragImgStreetView`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2026-03..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Pasar al contenido principal     </a>`
- XPath: `.focusable`

**Failure 2:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Dirección</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contacto</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-03-25
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Pasar al contenido principal     </a>`
- XPath: `.focusable`

### https://barcelona.cat/en/what-to-do-in-bcn/culture/theatres

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_3.png">`
- XPath: `.menu-2 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2026-03..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

**Failure 2:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Addresses</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contact</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-03-25
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

### https://barcelona.cat/ca/que-pots-fer-a-bcn/cultura/auditoris

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_3.png">`
- XPath: `.menu-2 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2026-03..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Vés al contingut     </a>`
- XPath: `.focusable`

**Failure 2:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Adreces</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contacte</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-03-25
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Vés al contingut     </a>`
- XPath: `.focusable`

### https://barcelona.cat/en/what-to-do-in-bcn/bathing-and-beaches/sports-activities-organised-federated-athletes-entities

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_3.png">`
- XPath: `.menu-2 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2026-03..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

**Failure 2:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Addresses</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contact</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-03-25
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

### https://barcelona.cat/es/conocebcn/la-ciutadella-del-conocimiento/noticias

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-03-25
- Message: ARIA role should be appropriate for the element
- HTML: `<form class="d-flex justify-content-md-between align-items-md-center ajuntament-actualitat-filtres" role="region" aria-label="Control de fechas y número de resultados por página del listado de noticias" aria-controls="ajuntament-actualitat-noticies">`
- XPath: `.justify-content-md-between`

**Failure 2:**
- First identified: 2026-03-25
- Message: ARIA role should be appropriate for the element
- HTML: `<h3 class="sr-only" role="status">Mostrando <span>10</span> resultados.</h3>`
- XPath: `h3[role="status"]`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_4.png">`
- XPath: `.menu-3 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2026-03..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Pasar al contenido principal     </a>`
- XPath: `.focusable`

**Failure 2:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `#ajuntament--prefooter > .container > ul > li:nth-child(1)`

**Failure 3:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Dirección</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contacto</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-03-25
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Pasar al contenido principal     </a>`
- XPath: `.focusable`

### https://barcelona.cat/ca/que-pots-fer-a-bcn/estiu/oficines-de-tramitacio-del-dni-i-passaport

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_3.png">`
- XPath: `.menu-2 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2026-03..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Vés al contingut     </a>`
- XPath: `.focusable`

**Failure 2:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Adreces</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contacte</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-03-25
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Vés al contingut     </a>`
- XPath: `.focusable`

### https://barcelona.cat/es/que-hacer-en-bcn/banos-y-playas/playa-de-somorrostro

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_3.png">`
- XPath: `.menu-2 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2026-03..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Pasar al contenido principal     </a>`
- XPath: `.focusable`

**Failure 2:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Dirección</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contacto</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-03-25
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Pasar al contenido principal     </a>`
- XPath: `.focusable`

### https://barcelona.cat/es/que-hacer-en-bcn/ponte-en-forma/federaciones

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_3.png">`
- XPath: `.menu-2 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2026-03..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Pasar al contenido principal     </a>`
- XPath: `.focusable`

**Failure 2:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Dirección</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contacto</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-03-25
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Pasar al contenido principal     </a>`
- XPath: `.focusable`

### https://barcelona.cat/ca/que-pots-fer-a-bcn/banys-i-platges/activitats-esportives-organitzades-amb-anim-de-lucre

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_3.png">`
- XPath: `.menu-2 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2026-03..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Vés al contingut     </a>`
- XPath: `.focusable`

**Failure 2:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Adreces</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contacte</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-03-25
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Vés al contingut     </a>`
- XPath: `.focusable`

### https://barcelona.cat/en/discoverbcn/ciutadella-knowledge-hub/greenhouse/history

#### Rule: [aria-required-children](https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Certain ARIA roles must contain particular children
- HTML: `<div class="galeria-internanav" role="tablist" aria-label="Gallery controls">`
- XPath: `.galeria-internanav`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_4.png">`
- XPath: `.menu-3 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2026-03..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

**Failure 2:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Addresses</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contact</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-03-25
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

### https://barcelona.cat/ca/que-pots-fer-a-bcn/posat-en-forma/installacions-esportives

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_3.png">`
- XPath: `.menu-2 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2026-03..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Vés al contingut     </a>`
- XPath: `.focusable`

**Failure 2:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Adreces</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contacte</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-03-25
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Vés al contingut     </a>`
- XPath: `.focusable`

### https://barcelona.cat/ca/que-pots-fer-a-bcn/llistat

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-03-25
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<div class="day-item is-previous-month" data-time="1771804800000" tabindex="2">23</div>`
- XPath: `div[data-time="1771804800000"]`

**Failure 2:**
- First identified: 2026-03-25
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<div class="day-item is-previous-month" data-time="1771891200000" tabindex="2">24</div>`
- XPath: `div[data-time="1771891200000"]`

**Failure 3:**
- First identified: 2026-03-25
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<div class="day-item is-previous-month" data-time="1771977600000" tabindex="2">25</div>`
- XPath: `div[data-time="1771977600000"]`

**Failure 4:**
- First identified: 2026-03-25
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<div class="day-item is-previous-month" data-time="1772064000000" tabindex="2">26</div>`
- XPath: `div[data-time="1772064000000"]`

**Failure 5:**
- First identified: 2026-03-25
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<div class="day-item is-previous-month" data-time="1772150400000" tabindex="2">27</div>`
- XPath: `div[data-time="1772150400000"]`

*... and 1 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_3.png">`
- XPath: `.menu-2 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2026-03..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Vés al contingut     </a>`
- XPath: `.focusable`

**Failure 2:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Adreces</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contacte</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-03-25
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Vés al contingut     </a>`
- XPath: `.focusable`

**Failure 2:**
- First identified: 2026-03-25
- Message: Elements should not have tabindex greater than zero
- HTML: `<button type="button" class="button-previous-month" tabindex="1">←<span class="sr-only">Mes anterior</span></button>`
- XPath: `.button-previous-month`

**Failure 3:**
- First identified: 2026-03-25
- Message: Elements should not have tabindex greater than zero
- HTML: `<button type="button" class="button-next-month" tabindex="1">→<span class="sr-only">Mes següent</span></button>`
- XPath: `.button-next-month`

**Failure 4:**
- First identified: 2026-03-25
- Message: Elements should not have tabindex greater than zero
- HTML: `<div class="day-item is-previous-month" data-time="1771804800000" tabindex="2">23</div>`
- XPath: `div[data-time="1771804800000"]`

**Failure 5:**
- First identified: 2026-03-25
- Message: Elements should not have tabindex greater than zero
- HTML: `<div class="day-item is-previous-month" data-time="1771891200000" tabindex="2">24</div>`
- XPath: `div[data-time="1771891200000"]`

*... and 40 more failures for this rule*

### https://barcelona.cat/en/what-to-do-in-bcn/summer/municipal-tax-office

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_3.png">`
- XPath: `.menu-2 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2026-03..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

**Failure 2:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Addresses</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contact</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-03-25
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

### https://barcelona.cat/en/living-in-bcn/environment-and-sustainability/list-containers

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_1.png">`
- XPath: `.menu-0 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2026-03..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

**Failure 2:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Addresses</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contact</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-03-25
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

### https://barcelona.cat/en/living-in-bcn/catalan-national-day-2019/public-transport-11-september-2022-catalan-national-day

#### Rule: [aria-command-name](https://dequeuniversity.com/rules/axe/4.11/aria-command-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: ARIA commands must have an accessible name
- HTML: `<div title="" role="button" tabindex="0" style="width: 31.7193px; height: 32px; overflow: hidden; position: absolute; cursor: pointer; touch-action: none; left: -78px; top: 24px; z-index: 0;">`
- XPath: `iframe[frameborder="0"]`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2026-03..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [link-in-text-block](https://dequeuniversity.com/rules/axe/4.11/link-in-text-block?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.1](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Links must be distinguishable without relying on color
- HTML: `<a href="//support.google.com/mymaps/answer/3024454?hl=en&amp;amp;ref_topic=3188329" target="_blank">Crea el teu</a>`
- XPath: `iframe[frameborder="0"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

**Failure 2:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Addresses</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contact</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-03-25
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

### https://barcelona.cat/ca/que-pots-fer-a-bcn/banys-i-platges/barcelona-platja-platja

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_3.png">`
- XPath: `.menu-2 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2026-03..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Vés al contingut     </a>`
- XPath: `.focusable`

**Failure 2:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Adreces</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contacte</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-03-25
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Vés al contingut     </a>`
- XPath: `.focusable`

### https://barcelona.cat/es/que-hacer-en-bcn/banos-y-playas/historia-de-las-playas

#### Rule: [aria-required-children](https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Certain ARIA roles must contain particular children
- HTML: `<div class="galeria-internanav" role="tablist" aria-label="Gallery controls">`
- XPath: `.galeria-internanav`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_3.png">`
- XPath: `.menu-2 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2026-03..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Pasar al contenido principal     </a>`
- XPath: `.focusable`

**Failure 2:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Dirección</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contacto</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-03-25
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Pasar al contenido principal     </a>`
- XPath: `.focusable`

### https://barcelona.cat/es/que-hacer-en-bcn/parques-y-jardines/parques-forestales

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_3.png">`
- XPath: `.menu-2 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2026-03..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Pasar al contenido principal     </a>`
- XPath: `.focusable`

**Failure 2:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Dirección</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contacto</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-03-25
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Pasar al contenido principal     </a>`
- XPath: `.focusable`

### https://barcelona.cat/es/vivir-en-bcn/con-personas-mayores/vivir-con-tranquilidad

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_1.png">`
- XPath: `.menu-0 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2026-03..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Pasar al contenido principal     </a>`
- XPath: `.focusable`

**Failure 2:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Dirección</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contacto</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-03-25
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Pasar al contenido principal     </a>`
- XPath: `.focusable`

### https://barcelona.cat/es/que-hacer-en-bcn/ponte-en-forma/clubes

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_3.png">`
- XPath: `.menu-2 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2026-03..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Pasar al contenido principal     </a>`
- XPath: `.focusable`

**Failure 2:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Dirección</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contacto</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-03-25
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Pasar al contenido principal     </a>`
- XPath: `.focusable`

### https://barcelona.cat/en/what-to-do-in-bcn/parks-and-gardens/history

#### Rule: [aria-required-children](https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Certain ARIA roles must contain particular children
- HTML: `<div class="galeria-internanav" role="tablist" aria-label="Gallery controls">`
- XPath: `.galeria-internanav`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_3.png">`
- XPath: `.menu-2 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2026-03..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

**Failure 2:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Addresses</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contact</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-03-25
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

### https://barcelona.cat/es/que-hacer-en-bcn/parque-montjuic/conoce-el-consejo-del-parque-de-montjuic

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_3.png">`
- XPath: `.menu-2 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2026-03..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Pasar al contenido principal     </a>`
- XPath: `.focusable`

**Failure 2:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Dirección</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contacto</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-03-25
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Pasar al contenido principal     </a>`
- XPath: `.focusable`

### https://barcelona.cat/ca/viure-a-bcn/amb-nens-i-nenes

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_1.png">`
- XPath: `.menu-0 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2026-03..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Vés al contingut     </a>`
- XPath: `.focusable`

**Failure 2:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Adreces</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contacte</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-03-25
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Vés al contingut     </a>`
- XPath: `.focusable`

### https://barcelona.cat/es/conocebcn/la-historia/la-barcelona-contemporanea

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_4.png">`
- XPath: `.menu-3 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2026-03..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Pasar al contenido principal     </a>`
- XPath: `.focusable`

**Failure 2:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Dirección</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contacto</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-03-25
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Pasar al contenido principal     </a>`
- XPath: `.focusable`

### https://barcelona.cat/en/discoverbcn/ciutadella-knowledge-hub/transformation-park

#### Rule: [aria-required-children](https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Certain ARIA roles must contain particular children
- HTML: `<div class="galeria-internanav" role="tablist" aria-label="Gallery controls">`
- XPath: `.galeria-internanav`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_4.png">`
- XPath: `.menu-3 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2026-03..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

**Failure 2:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Addresses</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contact</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-03-25
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

### https://barcelona.cat/es/conocebcn/ciutadelladelconocimiento/polo-de-biociencia-del-csic

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_4.png">`
- XPath: `.menu-3 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2026-03..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Pasar al contenido principal     </a>`
- XPath: `.focusable`

**Failure 2:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Dirección</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contacto</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-03-25
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Pasar al contenido principal     </a>`
- XPath: `.focusable`

