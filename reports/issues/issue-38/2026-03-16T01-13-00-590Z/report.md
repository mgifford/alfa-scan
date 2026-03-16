# Scan Report: LocalGov Drupal

- Issue: https://github.com/mgifford/open-scans/issues/38
- Submitted by: mgifford
- Scanned at: 2026-03-16T01:12:08.660Z
- Engines used: AXE, QUALWEB
- Scan duration: 12.8 minutes
- Total URLs submitted: 70
- Accepted public URLs: 70
- Rejected URLs: 0
- 🎨 **Accessibility personalization (CSS media queries):**
  - 🌙 **Dark mode:** 7 of 70 URLs (10%) support `prefers-color-scheme: dark`
  - ⚡ **Reduced motion:** 52 of 70 URLs (74%) support `prefers-reduced-motion: reduce`
  - 🔍 **High contrast:** 4 of 70 URLs (6%) support `prefers-contrast: more`
  - 🖥️ **Forced colors:** 5 of 70 URLs (7%) support `forced-colors: active`
  - 🪟 Reduced transparency: None of the scanned URLs support `prefers-reduced-transparency: reduce`
- ALFA outcomes: 0 passed, 0 failed, 0 cantTell, 0 inapplicable
- axe outcomes: 63323 passed, 288 failed, 693 cantTell, 3285 inapplicable
- Equal Access outcomes: 0 passed, 0 failed (0 unique, 0 duplicate), 0 cantTell, 0 inapplicable
- AccessLint outcomes: 0 passed, 0 failed (0 unique, 0 duplicate), 0 cantTell, 0 inapplicable
- QualWeb outcomes: 33159 passed, 1259 failed, 8740 cantTell, 212 inapplicable
- Duplicate findings caught by later scanners: 1114

## 🎯 Pages with Most Errors

Focus your efforts on these pages to make the biggest impact (combined scanner unique failures):

| Page | axe Unique | QualWeb | Total Unique | Page Title |
|---|---:|---:|---:|---|
| [View Page](https://www.kingston.gov.uk/) | 2 | 157 | **159** | Homepage \| Royal Borough of Kingston upon Thames |
| [View Page](https://www.southkesteven.gov.uk/) | 7 | 126 | **133** | Welcome to South Kesteven District Council - Homepage \| South Kesteven District Council |
| [View Page](https://www.milton-keynes.gov.uk/) | 22 | 64 | **86** | Milton Keynes City Council |
| [View Page](https://www.leeds.gov.uk/) | 0 | 78 | **78** | Welcome to Leeds \| Leeds.gov.uk |
| [View Page](https://www.brighton-hove.gov.uk/) | 1 | 65 | **66** | Brighton &amp; Hove City Council |
| [View Page](https://laois.ie/) | 10 | 51 | **61** | Homepage \| Laois County Council |
| [View Page](https://www.clarecoco.ie/) | 6 | 46 | **52** | Homepage \| Clare County Council |
| [View Page](https://www.havant.gov.uk/) | 11 | 32 | **43** | Homepage \| Havant Borough Council |
| [View Page](https://www.westminster.gov.uk/) | 1 | 38 | **39** | Homepage \| Westminster City Council |
| [View Page](https://www.southwark.gov.uk/) | 2 | 36 | **38** | Hello, welcome to Southwark \| Southwark Council |

## 🔧 Most Common Issues (ALFA)

These ALFA accessibility issues appear most frequently across your pages:

✅ No ALFA failed rules detected!

## 🔧 Most Common Issues (axe)

These axe accessibility issues appear most frequently across your pages:

| Rule | Pages Affected | Documentation |
|---|---:|---|
| region | **47** of 70 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/region) |
| color-contrast | **11** of 70 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/color-contrast) |
| landmark-no-duplicate-contentinfo | **9** of 70 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/landmark-no-duplicate-contentinfo) |
| landmark-unique | **9** of 70 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/landmark-unique) |
| aria-dialog-name | **6** of 70 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/aria-dialog-name) |
| heading-order | **5** of 70 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/heading-order) |
| page-has-heading-one | **5** of 70 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/page-has-heading-one) |
| label-title-only | **5** of 70 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/label-title-only) |
| meta-refresh | **3** of 70 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/meta-refresh) |
| link-name | **3** of 70 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/link-name) |

> 💡 **Tip**: Click on the rule documentation links to learn how to fix each issue. Consider fixing the most common issues first for maximum impact.

> 🤖 **Future Enhancement**: This report will soon include AI-powered fix suggestions for authenticated GitHub users (opt-in only, no auto-run AI).

## 🔍 Cross-Page Patterns: Common HTML Issues

These HTML patterns cause the same accessibility errors across multiple pages. **Fix the pattern once in your codebase to fix it everywhere!**

### 🎯 Top Patterns to Fix (Highest Impact)

#### Pattern 1: Affects 22 page(s) - 22 occurrence(s)

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
- https://beta.luton.gov.uk/
- https://www.solihull.gov.uk/
- https://haringey.gov.uk/
- https://carlow.ie/
- https://schools.essex.gov.uk/
- *...and 17 more page(s)*

---

#### Pattern 2: Affects 7 page(s) - 7 occurrence(s)

**Scanner**: axe
**Rule**: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate
**Issue**: All page content should be contained by landmarks

**HTML Pattern**:
```html
<div class="banner__image">
```

**XPath** (use in browser DevTools):
```
.banner__image
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.banner__image')`
5. The element will be highlighted

**Affected Pages**:
- https://www.solihull.gov.uk/
- https://www.galway.ie/
- https://schools.essex.gov.uk/
- https://laois.ie/
- https://www.canterbury.gov.uk/
- *...and 2 more page(s)*

---

#### Pattern 3: Affects 6 page(s) - 7 occurrence(s)

**Scanner**: axe
**Rule**: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate
**Issue**: All page content should be contained by landmarks

**HTML Pattern**:
```html
<div class="localgov-alert-banner__content">
```

**XPath** (use in browser DevTools):
```
.localgov-alert-banner--minor > .padding-horizontal.lgd-container > .localgov-alert-banner__inner > .localgov-alert-banner__content
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.localgov-alert-banner--minor > .padding-horizontal.lgd-container > .localgov-alert-banner__inner > .localgov-alert-banner__content')`
5. The element will be highlighted

**Affected Pages**:
- https://www.rbwm.gov.uk/
- https://www.eastcambs.gov.uk
- https://www.canterbury.gov.uk/
- https://www.northdevon.gov.uk
- https://www.lbbd.gov.uk/
- *...and 1 more page(s)*

---

#### Pattern 4: Affects 5 page(s) - 5 occurrence(s)

**Scanner**: axe
**Rule**: [landmark-no-duplicate-contentinfo](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-contentinfo?application=playwright)
**Impact**: moderate
**Issue**: Document should not have more than one contentinfo landmark

**HTML Pattern**:
```html
<div class="eu-cookie-compliance-banner eu-cookie-compliance-banner-info eu-cookie-compliance-banner--categories cookies-notice" role="contentinfo" aria-label="cookienotice" aria-hidden="false">
```

**XPath** (use in browser DevTools):
```
.eu-cookie-compliance-banner
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.eu-cookie-compliance-banner')`
5. The element will be highlighted

**Affected Pages**:
- https://schools.essex.gov.uk/
- https://www.canterbury.gov.uk/
- https://www.essex.gov.uk/
- https://www.knowsley.gov.uk/
- https://www.croydon.gov.uk/

---

#### Pattern 5: Affects 4 page(s) - 4 occurrence(s)

**Scanner**: axe
**Rule**: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate
**Issue**: All page content should be contained by landmarks

**HTML Pattern**:
```html
<div class="js-form-item form-item js-form-type-search-api-autocomplete form-item-s js-form-item-s">
```

**XPath** (use in browser DevTools):
```
form[data-drupal-form-fields="edit-s--6,edit-type--6"] > .js-form-type-search-api-autocomplete.form-item-s.js-form-item-s
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('form[data-drupal-form-fields="edit-s--6,edit-type--6"] > .js-form-type-search-api-autocomplete.form-item-s.js-form-item-s')`
5. The element will be highlighted

**Affected Pages**:
- https://www.staffordshire.gov.uk/
- https://www.knowsley.gov.uk/
- https://www.redcar-cleveland.gov.uk/
- https://www.sheffield.gov.uk/

---

#### Pattern 6: Affects 4 page(s) - 4 occurrence(s)

**Scanner**: axe
**Rule**: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate
**Issue**: All page content should be contained by landmarks

**HTML Pattern**:
```html
<div class="js-form-item form-item js-form-type-textfield form-item-s js-form-item-s">
```

**XPath** (use in browser DevTools):
```
.js-form-type-textfield
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.js-form-type-textfield')`
5. The element will be highlighted

**Affected Pages**:
- https://www.solihull.gov.uk/
- https://www.galway.ie/
- https://laois.ie/
- https://cumberland.gov.uk/

---

#### Pattern 7: Affects 4 page(s) - 4 occurrence(s)

**Scanner**: axe
**Rule**: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate
**Issue**: All page content should be contained by landmarks

**HTML Pattern**:
```html
<div class="lgd-region lgd-region--banner region region-banner">
```

**XPath** (use in browser DevTools):
```
.lgd-region--banner
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.lgd-region--banner')`
5. The element will be highlighted

**Affected Pages**:
- https://www.northtyneside.gov.uk/
- https://galwaycity.ie/
- https://www.ipswich.gov.uk/
- https://www.tamworth.gov.uk

---

#### Pattern 8: Affects 3 page(s) - 6 occurrence(s)

**Scanner**: axe
**Rule**: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**Issue**: Delayed refresh under 20 hours must not be used

**HTML Pattern**:
```html
<meta http-equiv="refresh" content="360">
```

**XPath** (use in browser DevTools):
```
meta[http-equiv="refresh"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('meta[http-equiv="refresh"]')`
5. The element will be highlighted

**Affected Pages**:
- https://www.dumfriesandgalloway.gov.uk/
- https://www.newport.gov.uk/
- https://www.tipperarycoco.ie/

---

#### Pattern 9: Affects 3 page(s) - 4 occurrence(s)

**Scanner**: axe
**Rule**: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate
**Issue**: All page content should be contained by landmarks

**HTML Pattern**:
```html
<div class="field field--name-field-landing-banner field--type-entity-reference field--label-hidden field__item">
```

**XPath** (use in browser DevTools):
```
.field--name-field-landing-banner
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.field--name-field-landing-banner')`
5. The element will be highlighted

**Affected Pages**:
- https://www.easthants.gov.uk/
- https://www.havant.gov.uk/
- https://www.bedford.gov.uk/

---

#### Pattern 10: Affects 3 page(s) - 3 occurrence(s)

**Scanner**: axe
**Rule**: [aria-dialog-name](https://dequeuniversity.com/rules/axe/4.11/aria-dialog-name?application=playwright)
**Impact**: serious
**Issue**: ARIA dialog and alertdialog nodes should have an accessible name

**HTML Pattern**:
```html
<div id="prefix-overlay-outer" tabindex="0" role="dialog" aria-modal="true" aria-describedby="prefix-overlay-step1">
```

**XPath** (use in browser DevTools):
```
#prefix-overlay-outer
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('#prefix-overlay-outer')`
5. The element will be highlighted

**Affected Pages**:
- https://www.erewash.gov.uk/
- https://www.sstaffs.gov.uk/
- https://www.bedford.gov.uk/

---

#### Pattern 11: Affects 2 page(s) - 3 occurrence(s)

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
- https://www.woking.gov.uk/
- https://westmorlandandfurness.gov.uk/

---

#### Pattern 12: Affects 2 page(s) - 3 occurrence(s)

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
- https://www.woking.gov.uk/
- https://westmorlandandfurness.gov.uk/

---

#### Pattern 13: Affects 2 page(s) - 3 occurrence(s)

**Scanner**: axe
**Rule**: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate
**Issue**: All page content should be contained by landmarks

**HTML Pattern**:
```html
<span>protected by <strong>reCAPTCHA</strong></span>
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
- https://www.woking.gov.uk/
- https://westmorlandandfurness.gov.uk/

---

#### Pattern 14: Affects 2 page(s) - 2 occurrence(s)

**Scanner**: axe
**Rule**: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate
**Issue**: All page content should be contained by landmarks

**HTML Pattern**:
```html
<div class="field field--name-localgov-image field--type-entity-reference field--label-hidden field__item">
```

**XPath** (use in browser DevTools):
```
.field--name-localgov-image
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.field--name-localgov-image')`
5. The element will be highlighted

**Affected Pages**:
- https://www.staffordshire.gov.uk/
- https://www.northdevon.gov.uk

---

#### Pattern 15: Affects 2 page(s) - 2 occurrence(s)

**Scanner**: axe
**Rule**: [landmark-no-duplicate-contentinfo](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-contentinfo?application=playwright)
**Impact**: moderate
**Issue**: Document should not have more than one contentinfo landmark

**HTML Pattern**:
```html
<footer class="lgd-footer">
```

**XPath** (use in browser DevTools):
```
footer
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('footer')`
5. The element will be highlighted

**Affected Pages**:
- https://www.kingston.gov.uk
- https://www.northtyneside.gov.uk/

---

> 💡 **Pro Tip**: These patterns likely come from shared components or templates in your codebase. Fix them in the component/template source, and the fix will propagate to all affected pages.

## 📊 Detailed Results

Complete scan results for all tested pages:

| Submitted URL | Final URL | Status | HTTP | Redirected | Time (ms) | axe Unique | ALFA Unique | Equal Access Unique | AccessLint Unique | Duplicates | Notes |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|
| https://www.clarecoco.ie | https://www.clarecoco.ie/ | OK | 200 | no | 10596 | 6 | 0 | 0 | 0 | 43 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast |
| https://www.leicester.gov.uk | https://www.leicester.gov.uk/ | OK | 200 | no | 9241 | 0 | 0 | 0 | 0 | 3 | Skipped (not requested) |
| https://beta.luton.gov.uk/ | https://beta.luton.gov.uk/welcome-your-new-website | OK | 200 | yes | 8764 | 1 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
| https://www.staffordshire.gov.uk/ | https://www.staffordshire.gov.uk/ | OK | 200 | no | 8877 | 3 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
| https://www.newark-sherwooddc.gov.uk/ | https://www.newark-sherwooddc.gov.uk/ | OK | 200 | no | 13834 | 0 | 0 | 0 | 0 | 4 | Skipped (not requested) |
| https://leeds.gov.uk | https://www.leeds.gov.uk/ | OK | 200 | yes | 12129 | 0 | 0 | 0 | 0 | 76 | Skipped (not requested) |
| https://www.merton.gov.uk | https://www.merton.gov.uk/ | OK | 200 | no | 9043 | 2 | 0 | 0 | 0 | 27 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
| https://www.dumfriesandgalloway.gov.uk/ | https://www.dumfriesandgalloway.gov.uk/ | FAIL | 403 | no | 6854 | 2 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
| https://www.solihull.gov.uk/ | https://www.solihull.gov.uk/ | OK | 200 | no | 8458 | 5 | 0 | 0 | 0 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
| https://www.woking.gov.uk/ | https://www.woking.gov.uk/ | OK | 200 | no | 10089 | 1 | 0 | 0 | 0 | 6 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
| https://www.kingston.gov.uk | https://www.kingston.gov.uk/ | OK | 200 | no | 8425 | 2 | 0 | 0 | 0 | 153 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-contentinfo, landmark-unique |
| https://www.erewash.gov.uk/ | https://www.erewash.gov.uk/ | OK | 200 | no | 7701 | 5 | 0 | 0 | 0 | 21 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-dialog-name, region |
| https://www.northtyneside.gov.uk/ | https://www.northtyneside.gov.uk/ | OK | 200 | no | 8340 | 3 | 0 | 0 | 0 | 3 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-dialog-name, landmark-no-duplicate-contentinfo, region |
| https://www.spelthorne.gov.uk/ | https://www.spelthorne.gov.uk/ | FAIL | - | no | 59999 | 0 | 0 | 0 | 0 | 0 | URL scan exceeded 60s timeout |
| https://www.galway.ie/ | https://www.galway.ie/en | OK | 200 | yes | 9099 | 5 | 0 | 0 | 0 | 3 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region, scrollable-region-focusable |
| https://www.gedling.gov.uk | https://www.gedling.gov.uk/ | OK | 200 | no | 8932 | 0 | 0 | 0 | 0 | 28 | Skipped (not requested) |
| https://haringey.gov.uk/ | https://haringey.gov.uk/ | OK | 200 | no | 9387 | 2 | 0 | 0 | 0 | 11 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-unique, region |
| https://www.newport.gov.uk/ | https://www.newport.gov.uk/ | FAIL | 403 | no | 7024 | 2 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
| https://carlow.ie/ | https://carlow.ie/ | OK | 200 | no | 11238 | 2 | 0 | 0 | 0 | 5 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: heading-order, region |
| https://www.londoncouncils.gov.uk/ | https://www.londoncouncils.gov.uk/ | OK | 200 | no | 10131 | 0 | 0 | 0 | 0 | 5 | Skipped (not requested) |
| https://www.rbwm.gov.uk/ | https://www.rbwm.gov.uk/ | OK | 200 | no | 7901 | 2 | 0 | 0 | 0 | 8 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
| https://schools.essex.gov.uk/ | https://schools.essex.gov.uk/ | OK | 200 | no | 7974 | 5 | 0 | 0 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-contentinfo, region |
| https://laois.ie/ | https://laois.ie/ | OK | 200 | no | 11419 | 10 | 0 | 0 | 0 | 49 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, region |
| https://southwark.gov.uk | https://www.southwark.gov.uk/ | OK | 200 | yes | 11011 | 2 | 0 | 0 | 0 | 32 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, region |
| https://www.royalgreenwich.gov.uk/ | https://www.royalgreenwich.gov.uk/ | OK | 200 | no | 8123 | 6 | 0 | 0 | 0 | 13 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-contentinfo, link-name, region |
| https://northumberland.gov.uk/ | https://www.northumberland.gov.uk/ | OK | 200 | yes | 11846 | 10 | 0 | 0 | 0 | 15 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, region |
| https://galwaycity.ie/ | https://www.galwaycity.ie/ | OK | 200 | yes | 12414 | 2 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
| https://www.ipswich.gov.uk/ | https://www.ipswich.gov.uk/ | OK | 200 | no | 9979 | 1 | 0 | 0 | 0 | 9 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
| https://www.eastcambs.gov.uk | https://eastcambs.gov.uk/ | OK | 200 | yes | 12207 | 2 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: page-has-heading-one, region |
| https://www.tamworth.gov.uk | https://www.tamworth.gov.uk/ | OK | 200 | no | 8619 | 2 | 0 | 0 | 0 | 16 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: page-has-heading-one, region |
| https://argyll-bute.gov.uk/ | https://www.argyll-bute.gov.uk/ | OK | 200 | yes | 11534 | 1 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
| https://www.canterbury.gov.uk/ | https://www.canterbury.gov.uk/ | OK | 200 | no | 9424 | 8 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: label-title-only, landmark-no-duplicate-contentinfo, region |
| https://cumberland.gov.uk/ | https://www.cumberland.gov.uk/ | OK | 200 | yes | 9468 | 2 | 0 | 0 | 0 | 5 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
| https://www.easthants.gov.uk/ | https://www.easthants.gov.uk/ | OK | 200 | no | 10672 | 6 | 0 | 0 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
| https://www.eaststaffsbc.gov.uk/ | https://www.eaststaffsbc.gov.uk/ | FAIL | - | no | 10493 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://www.essex.gov.uk/ | https://www.essex.gov.uk/ | OK | 200 | no | 7612 | 6 | 0 | 0 | 0 | 7 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: label-title-only, landmark-no-duplicate-contentinfo, region |
| https://www.lbhf.gov.uk/ | https://www.lbhf.gov.uk/ | FAIL | 404 | no | 41979 | 2 | 0 | 0 | 0 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-unique, region |
| https://www.hart.gov.uk/ | https://www.hart.gov.uk/ | OK | 200 | no | 8563 | 1 | 0 | 0 | 0 | 17 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: page-has-heading-one |
| https://www.havant.gov.uk/ | https://www.havant.gov.uk/ | OK | 200 | no | 10932 | 11 | 0 | 0 | 0 | 29 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-dialog-name, color-contrast, label-title-only, region |
| https://www.n-kesteven.gov.uk/ | https://www.n-kesteven.gov.uk/ | OK | 200 | no | 8829 | 0 | 0 | 0 | 0 | 13 | Skipped (not requested) |
| https://www.northyorks.gov.uk/ | https://www.northyorks.gov.uk/ | OK | 200 | no | 7597 | 4 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: label-title-only, region |
| https://www.rutland.gov.uk/ | https://www.rutland.gov.uk/ | OK | 200 | no | 9078 | 6 | 0 | 0 | 0 | 7 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, image-redundant-alt, region |
| https://www.surreyheath.gov.uk/ | https://www.surreyheath.gov.uk/ | OK | 200 | no | 8657 | 0 | 0 | 0 | 0 | 2 | Skipped (not requested) |
| https://www.tipperarycoco.ie/ | https://www.tipperarycoco.ie/ | FAIL | 403 | no | 6770 | 2 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
| https://westmorlandandfurness.gov.uk/ | https://www.westmorlandandfurness.gov.uk/ | OK | 200 | yes | 13237 | 8 | 0 | 0 | 0 | 30 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: label-title-only, landmark-no-duplicate-banner, landmark-unique, region |
| https://www.wirral.gov.uk/ | https://www.wirral.gov.uk/ | OK | 200 | no | 8851 | 4 | 0 | 0 | 0 | 9 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, region |
| https://www.wokingham.gov.uk/ | https://www.wokingham.gov.uk/ | OK | 200 | no | 11821 | 2 | 0 | 0 | 0 | 25 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: heading-order, region |
| https://southhams.gov.uk/ | https://southhams.gov.uk/ | FAIL | 405 | no | 6446 | 5 | 0 | 0 | 0 | 17 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-redundant-alt, landmark-one-main, region |
| https://westdevon.gov.uk/ | https://westdevon.gov.uk/ | FAIL | 405 | no | 6100 | 5 | 0 | 0 | 0 | 17 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-redundant-alt, landmark-one-main, region |
| https://www.northdevon.gov.uk | https://www.northdevon.gov.uk/ | OK | 200 | no | 7416 | 6 | 0 | 0 | 0 | 22 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-contentinfo, region |
| https://www.southkesteven.gov.uk/ | https://www.southkesteven.gov.uk/ | OK | 200 | no | 8494 | 7 | 0 | 0 | 0 | 124 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: heading-order, link-name, page-has-heading-one |
| https://www.sstaffs.gov.uk/ | https://www.sstaffs.gov.uk/ | OK | 200 | no | 9763 | 8 | 0 | 0 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-dialog-name, color-contrast, meta-viewport-large, region |
| https://www.knowsley.gov.uk/ | https://www.knowsley.gov.uk/ | OK | 200 | no | 40675 | 16 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: empty-heading, landmark-no-duplicate-contentinfo, link-name, region, role-img-alt |
| https://new.calderdale.gov.uk/ | https://new.calderdale.gov.uk/ | FAIL | 404 | no | 6520 | 8 | 0 | 0 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, html-has-lang, image-alt, landmark-one-main, page-has-heading-one, region |
| https://www.elmbridge.gov.uk | https://www.elmbridge.gov.uk/ | OK | 200 | no | 8523 | 8 | 0 | 0 | 0 | 7 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-banner-is-top-level, landmark-no-duplicate-banner, landmark-unique |
| https://www.bedford.gov.uk/ | https://www.bedford.gov.uk/ | OK | 200 | no | 8948 | 6 | 0 | 0 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-dialog-name, heading-order, region |
| https://www.lbbd.gov.uk/ | https://www.lbbd.gov.uk/ | OK | 200 | no | 13119 | 12 | 0 | 0 | 0 | 6 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-prohibited-attr, color-contrast, frame-title, landmark-unique, region, select-name |
| https://www.blackburn.gov.uk/ | https://www.blackburn.gov.uk/ | FAIL | - | no | 10493 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://www.rbkc.gov.uk/ | https://www.rbkc.gov.uk/ | OK | 200 | no | 9838 | 8 | 0 | 0 | 0 | 25 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, landmark-no-duplicate-banner, landmark-unique |
| https://www.milton-keynes.gov.uk/ | https://www.milton-keynes.gov.uk/ | OK | 200 | no | 9948 | 22 | 0 | 0 | 0 | 58 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, aria-required-children, aria-required-parent, button-name, color-contrast, list, region |
| https://www.redcar-cleveland.gov.uk/ | https://www.redcar-cleveland.gov.uk/ | OK | 200 | no | 11097 | 4 | 0 | 0 | 0 | 25 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: button-name, heading-order, region |
| https://www.sheffield.gov.uk/ | https://www.sheffield.gov.uk/ | OK | 200 | no | 7084 | 3 | 0 | 0 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
| https://www.west-lindsey.gov.uk/ | https://www.west-lindsey.gov.uk/ | OK | 200 | no | 8598 | 0 | 0 | 0 | 0 | 5 | Skipped (not requested) |
| https://www.bracknell-forest.gov.uk/ | https://www.bracknell-forest.gov.uk/ | OK | 200 | no | 7666 | 3 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: tabindex |
| https://www.croydon.gov.uk/ | https://www.croydon.gov.uk/ | OK | 200 | no | 9389 | 5 | 0 | 0 | 0 | 6 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-dialog-name, landmark-no-duplicate-contentinfo, landmark-unique, region |
| https://www.walthamforest.gov.uk/ | https://www.walthamforest.gov.uk/ | OK | 200 | no | 11262 | 2 | 0 | 0 | 0 | 10 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
| https://www.westminster.gov.uk/ | https://www.westminster.gov.uk/ | OK | 200 | no | 8432 | 1 | 0 | 0 | 0 | 36 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
| https://www.westnorthants.gov.uk | https://www.westnorthants.gov.uk/ | OK | 200 | no | 10194 | 4 | 0 | 0 | 0 | 3 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
| https://www.brighton-hove.gov.uk/ | https://www.brighton-hove.gov.uk/ | OK | 200 | no | 7566 | 1 | 0 | 0 | 0 | 63 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-unique |
| https://www.lambeth.gov.uk/ | https://www.lambeth.gov.uk/ | OK | 200 | no | 8217 | 0 | 0 | 0 | 0 | 2 | Skipped (not requested) |

## Detailed Failure Information (ALFA)

## Detailed Failure Information (axe)

### https://www.clarecoco.ie

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<h2>Clare County Council</h2>`
- XPath: `#block-bbd-localgov-clarecountycouncil > h2`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<h2 id="block-bbd-localgov-quicklinks-menu">Quicklinks</h2>`
- XPath: `#block-bbd-localgov-quicklinks-menu`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<h2 id="block-bbd-localgov-help-menu">Help</h2>`
- XPath: `#block-bbd-localgov-help-menu`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<h2 id="block-bbd-localgov-terms-menu">Terms</h2>`
- XPath: `#block-bbd-localgov-terms-menu`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<h2>Google translate</h2>`
- XPath: `#block-bbd-localgov-gtranslate-block--2 > h2`

*... and 1 more failures for this rule*

### https://beta.luton.gov.uk/

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable skip-link">       Skip to main content     </a>`
- XPath: `.focusable`

### https://www.staffordshire.gov.uk/

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h1>Welcome to Staffordshire</h1>`
- XPath: `h1`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="js-form-item form-item js-form-type-search-api-autocomplete form-item-s js-form-item-s">`
- XPath: `form[data-drupal-form-fields="edit-s--6,edit-type--6"] > .js-form-type-search-api-autocomplete.form-item-s.js-form-item-s`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="field field--name-localgov-image field--type-entity-reference field--label-hidden field__item">`
- XPath: `.field--name-localgov-image`

### https://www.merton.gov.uk

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="fourpledges">`
- XPath: `.fourpledges`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="lgd-region lgd-region--content-title region region-content-title">`
- XPath: `.lgd-region--content-title`

### https://www.dumfriesandgalloway.gov.uk/

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://www.solihull.gov.uk/

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable skip-link">       Skip to main content     </a>`
- XPath: `.focusable`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div id="block-lgd-localgov-alert-banner-scarfolk" class="block block-localgov-alert-banner block-localgov-alert-banner-block">`
- XPath: `#block-lgd-localgov-alert-banner-scarfolk`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="banner__content-inner">`
- XPath: `.banner__content-inner`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="js-form-item form-item js-form-type-textfield form-item-s js-form-item-s">`
- XPath: `.js-form-type-textfield`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="banner__image">`
- XPath: `.banner__image`

### https://www.woking.gov.uk/

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="https://www.google.com/intl/en/policies/privacy/" target="_blank">Privacy</a>`
- XPath: `iframe[title="reCAPTCHA"]`

### https://www.kingston.gov.uk

#### Rule: [landmark-no-duplicate-contentinfo](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-contentinfo?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one contentinfo landmark
- HTML: `<footer class="lgd-footer">`
- XPath: `footer`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<footer class="lgd-footer">`
- XPath: `footer`

### https://www.erewash.gov.uk/

#### Rule: [aria-dialog-name](https://dequeuniversity.com/rules/axe/4.11/aria-dialog-name?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: ARIA dialog and alertdialog nodes should have an accessible name
- HTML: `<div class="eu-cookie-compliance-banner eu-cookie-compliance-banner-info eu-cookie-compliance-banner--opt-in" role="dialog" aria-hidden="false" data-once="data-table">`
- XPath: `.eu-cookie-compliance-banner`

**Failure 2:**
- Message: ARIA dialog and alertdialog nodes should have an accessible name
- HTML: `<div id="prefix-overlay-outer" tabindex="0" role="dialog" aria-modal="true" aria-describedby="prefix-overlay-step1">`
- XPath: `#prefix-overlay-outer`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="localgov-alert-banner__body">`
- XPath: `.localgov-alert-banner__body`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="localgov-alert-banner--content-link">`
- XPath: `.localgov-alert-banner--content-link`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="az-services-wrapper">`
- XPath: `.az-services-wrapper`

### https://www.northtyneside.gov.uk/

#### Rule: [aria-dialog-name](https://dequeuniversity.com/rules/axe/4.11/aria-dialog-name?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: ARIA dialog and alertdialog nodes should have an accessible name
- HTML: `<div id="sliding-popup" role="alertdialog" aria-describedby="popup-text" class="sliding-popup-bottom" style="height: auto; width: 100%; bottom: 0px;">`
- XPath: `#sliding-popup`

#### Rule: [landmark-no-duplicate-contentinfo](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-contentinfo?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one contentinfo landmark
- HTML: `<footer class="lgd-footer">`
- XPath: `footer`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="lgd-region lgd-region--banner region region-banner">`
- XPath: `.lgd-region--banner`

### https://www.galway.ie/

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="banner__image">`
- XPath: `.banner__image`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<h1>`
- XPath: `h1`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="js-form-item form-item js-form-type-textfield form-item-s js-form-item-s">`
- XPath: `.js-form-item`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<a aria-label="Back to top" class="back-to-top" data-min-content-viewport-ratio="1.5" href="#main-content" hidden="" data-once="back-to-top">`
- XPath: `.back-to-top`

#### Rule: [scrollable-region-focusable](https://dequeuniversity.com/rules/axe/4.11/scrollable-region-focusable?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.1.1](https://www.w3.org/WAI/WCAG22/Understanding/keyboard), [SC 2.1.3](https://www.w3.org/WAI/WCAG22/Understanding/keyboard-no-exception) (Level A)

**Failure 1:**
- Message: Scrollable region must have keyboard access
- HTML: `<div id="uc-cmp-description" class="overflow">`
- XPath: `#usercentrics-cmp-ui,#uc-cmp-description`

### https://haringey.gov.uk/

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div class="search-block-form block block-search block-search-form-block" data-drupal-selector="search-block-form" id="block-searchform" role="search">`
- XPath: `#block-searchform`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable skip-link">       Skip to main content     </a>`
- XPath: `.focusable`

### https://www.newport.gov.uk/

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://carlow.ie/

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3 class="box-link__title">     <a class="box-link__link" href="/planning-and-building/development-management/planning-permission">               Online Planning     </a>   </h3>`
- XPath: `.box-links-listing__list-item.lgd-row__one-quarter:nth-child(1) > .box-link.paragraph--type--localgov-box-link > .box-link__title`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable skip-link">       Skip to main content     </a>`
- XPath: `.focusable`

### https://www.rbwm.gov.uk/

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="localgov-alert-banner__content">`
- XPath: `.localgov-alert-banner--minor > .padding-horizontal.lgd-container > .localgov-alert-banner__inner > .localgov-alert-banner__content`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="localgov-alert-banner__content">`
- XPath: `.localgov-alert-banner--announcement > .padding-horizontal.lgd-container > .localgov-alert-banner__inner > .localgov-alert-banner__content`

### https://schools.essex.gov.uk/

#### Rule: [landmark-no-duplicate-contentinfo](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-contentinfo?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one contentinfo landmark
- HTML: `<div class="eu-cookie-compliance-banner eu-cookie-compliance-banner-info eu-cookie-compliance-banner--categories cookies-notice" role="contentinfo" aria-label="cookienotice" aria-hidden="false">`
- XPath: `.eu-cookie-compliance-banner`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable skip-link">       Skip to main content     </a>`
- XPath: `.focusable`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="banner__image">`
- XPath: `.banner__image`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h1 class="page-title">Essex Schools InfoLink</h1>`
- XPath: `h1`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<input data-drupal-selector="edit-s" placeholder="Search" type="text" id="edit-s" name="s" value="" size="30" maxlength="128" class="form-text required" required="required" aria-required="true">`
- XPath: `#edit-s`

### https://laois.ie/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<p>Your links to community and updates!</p>`
- XPath: `.lgd-page-section--bg-colour-6.lgd-page-section--padding-top-largest.lgd-page-section--padding-bottom-medium > .padding-horizontal.lgd-container > .layout--onecol.layout > .layout__region--content.layout__region > .text > .field--name-localgov-text.field--type-text-long.field--label-hidden > p`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Status Yellow Rain Warning for Laois</span>`
- XPath: `.views-row:nth-child(1) > .lgd-teaser.lgd-teaser--localgov-news-article.node--type-localgov-news-article > .lgd-teaser__content.lgd-teaser__content--localgov-news-article > h3 > a[rel="bookmark"] > span`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Notification of temporary road closure on the L-5731, Drimaterril, Ballinakill, Co. Laois</span>`
- XPath: `.views-row:nth-child(2) > .lgd-teaser.lgd-teaser--localgov-news-article.node--type-localgov-news-article > .lgd-teaser__content.lgd-teaser__content--localgov-news-article > h3 > a[rel="bookmark"] > span`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Status Yellow Wind Warning for Ireland</span>`
- XPath: `.views-row:nth-child(3) > .lgd-teaser.lgd-teaser--localgov-news-article.node--type-localgov-news-article > .lgd-teaser__content.lgd-teaser__content--localgov-news-article > h3 > a[rel="bookmark"] > span`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Notification of Parade Route and Road Closures for St. Patrick's Day 2026</span>`
- XPath: `.views-row:nth-child(4) > .lgd-teaser.lgd-teaser--localgov-news-article.node--type-localgov-news-article > .lgd-teaser__content.lgd-teaser__content--localgov-news-article > h3 > a[rel="bookmark"] > span`

*... and 1 more failures for this rule*

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable skip-link">       Skip to main content     </a>`
- XPath: `.focusable`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="banner__image">`
- XPath: `.banner__image`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="field field--name-field-banner-text field--type-text-long field--label-hidden field__item"><h2>Welcome to</h2><h1>Laois County Council</h1><p>How can we help you?</p></div>`
- XPath: `.field--name-field-banner-text`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="js-form-item form-item js-form-type-textfield form-item-s js-form-item-s">`
- XPath: `.js-form-item`

### https://southwark.gov.uk

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<button class="ccc-vendor-reveal ccc-notify-button ccc-link ccc-tabbable" aria-controls="optional-vendor-1" aria-expanded="false">`
- XPath: `.ccc-vendor-reveal`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable skip-link">       Skip to main content     </a>`
- XPath: `.focusable`

### https://www.royalgreenwich.gov.uk/

#### Rule: [landmark-no-duplicate-contentinfo](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-contentinfo?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one contentinfo landmark
- HTML: `<div data-component-id="greenwich:cookie-banner" class="eu-cookie-compliance-banner cookies-notice" role="contentinfo" aria-label="cookienotice" aria-hidden="false">`
- XPath: `.eu-cookie-compliance-banner`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a class="lgd-card__link" href="/news/2026/new-strategy-help-transform-greenwichs-14km-thames-path-and-riverside-corridor"></a>`
- XPath: `.padding-horizontal.lgd-container:nth-child(5) > .rbg-promoted-cards > .lgd-row--halves.lgd-row > article:nth-child(1) > .lgd-card__content > .lgd-card__link`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a class="lgd-card__link" href="/news/2026/love-your-neighbourhood-taking-part-great-british-spring-clean"></a>`
- XPath: `.padding-horizontal.lgd-container:nth-child(5) > .rbg-promoted-cards > .lgd-row--halves.lgd-row > article:nth-child(2) > .lgd-card__content > .lgd-card__link`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a class="lgd-card__link" href="/events/luminarium-myriad"></a>`
- XPath: `article:nth-child(1) > .lgd-card__content > .lgd-card__link[href$="luminarium-myriad"]`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a class="lgd-card__link" href="/events/luminarium-myriad"></a>`
- XPath: `article:nth-child(2) > .lgd-card__content > .lgd-card__link[href$="luminarium-myriad"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable skip-link">       Skip to main content     </a>`
- XPath: `.focusable`

### https://northumberland.gov.uk/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="date">10 March 2026</span>`
- XPath: `.view-ncc-homepage-news-featured-items-with-image > .view-content > .views-row:nth-child(1) > article > .card-item-link > .content > .date`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="date">04 March 2026</span>`
- XPath: `.view-ncc-homepage-news-featured-items-with-image > .view-content > .views-row:nth-child(2) > article > .card-item-link > .content > .date`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="date">12 March 2026</span>`
- XPath: `.view-ncc-homepage-news-featured-items-with-image > .view-content > .views-row:nth-child(3) > article > .card-item-link > .content > .date`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="date">12 March 2026</span>`
- XPath: `.view-ncc-homepage-news-items-with-image > .view-content > .views-row:nth-child(1) > article > .card-item-link > .content > .date`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="date">12 March 2026</span>`
- XPath: `.view-ncc-homepage-news-items-with-image > .view-content > .views-row:nth-child(2) > article > .card-item-link > .content > .date`

*... and 2 more failures for this rule*

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div id="silktide-banner" class="bottomRight">`
- XPath: `#silktide-banner`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable">       Skip to main content     </a>`
- XPath: `.focusable`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="hero__overlay">`
- XPath: `.hero__overlay`

### https://galwaycity.ie/

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable skip-link">       Skip to main content     </a>`
- XPath: `.focusable`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="lgd-region lgd-region--banner region region-banner">`
- XPath: `.lgd-region--banner`

### https://www.ipswich.gov.uk/

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="lgd-region lgd-region--banner region region-banner">`
- XPath: `.lgd-region--banner`

### https://www.eastcambs.gov.uk

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Page should contain a level-one heading
- HTML: `<html lang="en-gb" dir="ltr" class="sticky-header-html js" data-once="euccRelocateInit" style="--lgd-sticky-header-position: 0px; --lgd-sticky-header-height: 103px;">`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="localgov-alert-banner__content">`
- XPath: `.localgov-alert-banner__content`

### https://www.tamworth.gov.uk

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr" class="sticky-header-html js" style="--lgd-sticky-header-position: 0px; --lgd-sticky-header-height: 116px;">`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="lgd-region lgd-region--banner region region-banner">`
- XPath: `.lgd-region--banner`

### https://argyll-bute.gov.uk/

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable skip-link">       Skip to main content     </a>`
- XPath: `.focusable`

### https://www.canterbury.gov.uk/

#### Rule: [label-title-only](https://dequeuniversity.com/rules/axe/4.11/label-title-only?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Form elements should have a visible label
- HTML: `<input title="Search" autocomplete="off" data-drupal-selector="edit-search-query" type="text" id="edit-search-query--5" name="search_query" value="" size="60" maxlength="128" placeholder="Search" class="form-text required" required="required" aria-required="true">`
- XPath: `#edit-search-query--5`

**Failure 2:**
- Message: Form elements should have a visible label
- HTML: `<input title="Search" autocomplete="off" data-drupal-selector="edit-search-query" type="text" id="edit-search-query--6" name="search_query" value="" size="60" maxlength="128" placeholder="Search" class="form-text required" required="required" aria-required="true">`
- XPath: `#edit-search-query--6`

#### Rule: [landmark-no-duplicate-contentinfo](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-contentinfo?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one contentinfo landmark
- HTML: `<div class="eu-cookie-compliance-banner eu-cookie-compliance-banner-info eu-cookie-compliance-banner--categories cookies-notice" role="contentinfo" aria-label="cookienotice" aria-hidden="false">`
- XPath: `.eu-cookie-compliance-banner`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable skip-link">       Skip to main content     </a>`
- XPath: `.focusable`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="localgov-alert-banner__content">`
- XPath: `.localgov-alert-banner__content`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="banner__image">`
- XPath: `.banner__image`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="field field--name-localgov-title field--type-string field--label-above field__item"> 	<h1>Welcome to 		<span class="banner-title-name">Canterbury</span> 	</h1></div>`
- XPath: `.field--name-localgov-title`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="js-form-item form-item js-form-type-textfield form-item-search-query js-form-item-search-query form-no-label">`
- XPath: `#batch-job-form--6 > .js-form-item.form-item.js-form-type-textfield`

### https://cumberland.gov.uk/

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h1>Welcome to Cumberland</h1>`
- XPath: `h1`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="js-form-item form-item js-form-type-textfield form-item-s js-form-item-s">`
- XPath: `.js-form-type-textfield`

### https://www.easthants.gov.uk/

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="field field--name-field-landing-banner field--type-entity-reference field--label-hidden field__item">`
- XPath: `.field--name-field-landing-banner`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div id="block-ehdc-theme-homepagebannercontent" class="block block-block-content block-block-content11a73b7a-c7d1-4bc7-9f28-d2a74be1554b">`
- XPath: `#block-ehdc-theme-homepagebannercontent`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<input placeholder="Search" data-drupal-selector="edit-s" data-search-api-auto...="localgov_sitewide_se..." class="form-autocomplete fo..." data-autocomplete-pa...="/search_api_autocomp..." type="text" id="edit-s" name="s" value="" size="30" maxlength="128" required="required" aria-required="true" d ...>`
- XPath: `#edit-s`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="field field--name-field-landing-banner field--type-entity-reference field--label-hidden field__item">`
- XPath: `.field--name-field-landing-banner`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<div id="block-ehdc-theme-homepagebannercontent" class="block block-block-content block-block-content11a73b7a-c7d1-4bc7-9f28-d2a74be1554b">`
- XPath: `#block-ehdc-theme-homepagebannercontent`

*... and 1 more failures for this rule*

### https://www.essex.gov.uk/

#### Rule: [label-title-only](https://dequeuniversity.com/rules/axe/4.11/label-title-only?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Form elements should have a visible label
- HTML: `<input title="Enter the terms you ..." autocomplete="off" placeholder="Search Essex County ..." onfocus="this.placeholder = '..." onblur="this.placeholder = '..." data-drupal-selector="edit-search-keys" type="text" id="edit-search-keys" name="search_keys" value="" size="60" maxlength="128" class="fo ...>`
- XPath: `#edit-search-keys`

#### Rule: [landmark-no-duplicate-contentinfo](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-contentinfo?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one contentinfo landmark
- HTML: `<div class="eu-cookie-compliance-banner eu-cookie-compliance-banner-info eu-cookie-compliance-banner--categories cookies-notice" role="contentinfo" aria-label="cookienotice" aria-hidden="false">`
- XPath: `.eu-cookie-compliance-banner`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable skip-link">       Skip to main content     </a>`
- XPath: `.focusable`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="banner__image">`
- XPath: `.banner__image`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h1 class="page-title">Welcome to Essex</h1>`
- XPath: `h1`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Search</h2>`
- XPath: `#block-ecc-theme-gov-cludosearchblock > h2`

### https://www.lbhf.gov.uk/

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div data-parent-id="our-services-id" class="lgd-header__nav lbhf-header-drawer-item lbhf-header-drawer-item__sm" id="our-services-drawer" tabindex="-1" aria-labelledby="our-services-id" role="region">`
- XPath: `#our-services-drawer`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable skip-link">       Skip to main content     </a>`
- XPath: `.focusable`

### https://www.hart.gov.uk/

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr" class="sticky-header-html js" style="--lgd-sticky-header-position: 0px; --lgd-sticky-header-height: 93px;">`
- XPath: `html`

### https://www.havant.gov.uk/

#### Rule: [aria-dialog-name](https://dequeuniversity.com/rules/axe/4.11/aria-dialog-name?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: ARIA dialog and alertdialog nodes should have an accessible name
- HTML: `<div id="prefix-overlay-outer" tabindex="0" role="dialog" aria-labelledby="#prefix-overlay-header" aria-describedby="#prefix-overlay-step1" style="height: 349px;">`
- XPath: `#prefix-overlay-outer`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<input placeholder="Search" data-drupal-selector="edit-s" type="text" id="edit-s" name="s" value="" size="30" maxlength="128" class="form-text required" required="required" aria-required="true">`
- XPath: `#edit-s`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<div class="field field--name-localgov-news-date field--type-datetime field--label-hidden field__item">10 March 2026</div>`
- XPath: `.views-row:nth-child(1) > a[rel="bookmark"] > .wlgd-news-card > .node--type-localgov-news-article.node--view-mode-news-list > .field--name-localgov-news-date.field--type-datetime.field--label-hidden`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<div class="field field--name-localgov-news-date field--type-datetime field--label-hidden field__item">9 March 2026</div>`
- XPath: `.views-row:nth-child(2) > a[rel="bookmark"] > .wlgd-news-card > .node--type-localgov-news-article.node--view-mode-news-list > .field--name-localgov-news-date.field--type-datetime.field--label-hidden`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<div class="field field--name-localgov-news-date field--type-datetime field--label-hidden field__item">2 March 2026</div>`
- XPath: `.views-row:nth-child(3) > a[rel="bookmark"] > .wlgd-news-card > .node--type-localgov-news-article.node--view-mode-news-list > .field--name-localgov-news-date.field--type-datetime.field--label-hidden`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/news">See More News</a>`
- XPath: `a[href$="news"]`

*... and 1 more failures for this rule*

#### Rule: [label-title-only](https://dequeuniversity.com/rules/axe/4.11/label-title-only?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Form elements should have a visible label
- HTML: `<input placeholder="Enter your email address" name="e" type="email" required="" id="prefix-emailInput" title="Enter your email address">`
- XPath: `#prefix-emailInput`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="field field--name-field-landing-banner field--type-entity-reference field--label-hidden field__item">`
- XPath: `.field--name-field-landing-banner`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div id="block-havant-theme-homepagebannercontent" class="block block-block-content block-block-content11a73b7a-c7d1-4bc7-9f28-d2a74be1554b">`
- XPath: `#block-havant-theme-homepagebannercontent`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<input placeholder="Search" data-drupal-selector="edit-s" type="text" id="edit-s" name="s" value="" size="30" maxlength="128" class="form-text required" required="required" aria-required="true">`
- XPath: `#edit-s`

### https://www.northyorks.gov.uk/

#### Rule: [label-title-only](https://dequeuniversity.com/rules/axe/4.11/label-title-only?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Form elements should have a visible label
- HTML: `<input title="Search" data-drupal-selector="edit-keys" placeholder="Search our website" id="edit-keys--q-Bol_PXxQQ" type="search" name="keys" value="" size="15" maxlength="128" class="form-search">`
- XPath: `#edit-keys--q-Bol_PXxQQ`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable skip-link">       Skip to main content     </a>`
- XPath: `.visually-hidden`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div id="block-nyccfrontpagequickactions" class="frontpage-quickactions block block-block-content block-block-contentc440986d-db47-4f2c-9348-b3ac6b93a7d7">`
- XPath: `#block-nyccfrontpagequickactions`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="lgd-region lgd-region--pre-footer region region-pre-footer">`
- XPath: `.lgd-region--pre-footer`

### https://www.rutland.gov.uk/

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<article class="js-localgov-alert-ba..." data-dismiss-alert-t...="alert-51--5fa766c687..." role="alert" data-once="allAlertBanners">`
- XPath: `.js-localgov-alert-banner`

#### Rule: [image-redundant-alt](https://dequeuniversity.com/rules/axe/4.11/image-redundant-alt?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: Alternative text of images should not be repeated as text
- HTML: `<img loading="lazy" src="/sites/default/files/styles/footer_icons/public/2022-09/group_21.png?itok=2sAiHH2g" width="66" height="66" alt="Email" data-once="allImages">`
- XPath: `img[alt="Email"]`

**Failure 2:**
- Message: Alternative text of images should not be repeated as text
- HTML: `<img loading="lazy" src="/sites/default/files/styles/footer_icons/public/2022-09/group_19.png?itok=caeYrV6F" width="66" height="66" alt="Customer feedback" data-once="allImages">`
- XPath: `img[alt="Customer feedback"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<select class="gt_selector notranslate" aria-label="Select Language">`
- XPath: `select`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="title-wrapper">                        <div class="field field--name-field-title field--type-string field--label-hidden field__item"><h1>Welcome to Rutland County Council</h1> </div>                </div>`
- XPath: `.title-wrapper`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<input autocomplete="off" data-drupal-selector="edit-search-keys" type="text" id="edit-search-keys--2" name="search_keys" value="" size="60" maxlength="128" placeholder="Search" class="form-text">`
- XPath: `#edit-search-keys--2`

### https://www.tipperarycoco.ie/

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://westmorlandandfurness.gov.uk/

#### Rule: [label-title-only](https://dequeuniversity.com/rules/axe/4.11/label-title-only?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Form elements should have a visible label
- HTML: `<input title="Enter the terms you wish to search for." data-drupal-selector="edit-keys" type="search" id="edit-keys" name="keys" value="" size="15" maxlength="128" class="form-search">`
- XPath: `.banner__content > div > .search-block-form.block-search.block-search-form-block > form[action="/search"][method="get"][data-once="form-updated"] > .js-form-type-search.form-item-keys.js-form-item-keys > .form-search[data-drupal-selector="edit-keys"][type="search"]`

**Failure 2:**
- Message: Form elements should have a visible label
- HTML: `<input title="Enter the terms you wish to search for." data-drupal-selector="edit-keys" type="search" id="edit-keys" name="keys" value="" size="15" maxlength="128" class="form-search">`
- XPath: `.banner__content > div > .search-block-form.block-search.block-search-form-block > form[action="/search"][method="get"][data-once="form-updated"] > .js-form-type-search.form-item-keys.js-form-item-keys > .form-search[data-drupal-selector="edit-keys"][type="search"]`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="lgd-header" aria-label="Navigation" data-once="allStickyHeaders">`
- XPath: `header`

**Failure 2:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="lgd-header" aria-label="Navigation" data-once="allStickyHeaders">`
- XPath: `header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div class="search-block-form block block-search block-search-form-block" data-drupal-selector="search-block-form" id="block-localgov-wandf-searchform" role="search">`
- XPath: `.lgd-region__inner--search > .search-block-form.block-search.block-search-form-block`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div class="search-block-form block block-search block-search-form-block" data-drupal-selector="search-block-form" id="block-localgov-wandf-searchform" role="search">`
- XPath: `.lgd-region__inner--search > .search-block-form.block-search.block-search-form-block`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="https://www.google.com/intl/en/policies/privacy/" target="_blank">Privacy</a>`
- XPath: `iframe[title="reCAPTCHA"]`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="https://www.google.com/intl/en/policies/privacy/" target="_blank">Privacy</a>`
- XPath: `iframe[title="reCAPTCHA"]`

### https://www.wirral.gov.uk/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="checkbox-toggle-off" aria-hidden="true">Off</span>`
- XPath: `.checkbox-toggle-off`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<div class="skiptranslate goog-te-gadget" dir="ltr" style="">`
- XPath: `.goog-te-gadget`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a class="VIpgJd-ZVi9od-l4eHX-hSRGPd" href="https://translate.google.com" target="_blank"><img src="https://www.gstatic.com/images/branding/googlelogo/1x/googlelogo_color_42x16dp.png" width="37px" height="14px" style="padding-right: 3px" alt="Google Translate">Translate</a>`
- XPath: `.VIpgJd-ZVi9od-l4eHX-hSRGPd`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable skip-link">       Skip to main content     </a>`
- XPath: `.visually-hidden`

### https://www.wokingham.gov.uk/

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h4 class="heading heading--small">             Connect with us       </h4>`
- XPath: `h4`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="footer-banner__text">         <h2 class="heading heading--main">             Sign up to the Wokingham Borough Council Newsletter       </h2>                <p class="paragraph">       Get the latest news and updates within the area.   </p>           </div>`
- XPath: `.footer-banner__text`

### https://southhams.gov.uk/

#### Rule: [image-redundant-alt](https://dequeuniversity.com/rules/axe/4.11/image-redundant-alt?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: Alternative text of images should not be repeated as text
- HTML: `<img src="data:image/svg+xml;b..." alt="begin" style="margin-left: 5px;">`
- XPath: `img[alt="begin"]`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html lang="en">`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div><h1 style="font-weight: normal; color: rgb(221, 107, 16);">Let's confirm you are human</h1></div>`
- XPath: `div:nth-child(3)`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div id="root-instructions" style="text-align: initial; align-self: center; line-height: 22px;"><p>Complete the security check before continuing. This step verifies that you are not a bot, which helps to protect your account and prevent spam.</p></div>`
- XPath: `#root-instructions`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<select class="amzn-captcha-lang-selector" aria-label="Select language" style="margin-top: 5px;">`
- XPath: `select`

### https://westdevon.gov.uk/

#### Rule: [image-redundant-alt](https://dequeuniversity.com/rules/axe/4.11/image-redundant-alt?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: Alternative text of images should not be repeated as text
- HTML: `<img src="data:image/svg+xml;b..." alt="begin" style="margin-left: 5px;">`
- XPath: `img[alt="begin"]`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html lang="en">`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div><h1 style="font-weight: normal; color: rgb(221, 107, 16);">Let's confirm you are human</h1></div>`
- XPath: `div:nth-child(3)`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div id="root-instructions" style="text-align: initial; align-self: center; line-height: 22px;"><p>Complete the security check before continuing. This step verifies that you are not a bot, which helps to protect your account and prevent spam.</p></div>`
- XPath: `#root-instructions`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<select class="amzn-captcha-lang-selector" aria-label="Select language" style="margin-top: 5px;">`
- XPath: `select`

### https://www.northdevon.gov.uk

#### Rule: [landmark-no-duplicate-contentinfo](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-contentinfo?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one contentinfo landmark
- HTML: `<div class="eu-cookie-compliance-banner eu-cookie-compliance-banner-info eu-cookie-compliance-banner--opt-in cookies-notice" role="contentinfo" aria-label="cookie notice" aria-hidden="false">`
- XPath: `.eu-cookie-compliance-banner`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable skip-link">       Skip to main content     </a>`
- XPath: `.focusable`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="localgov-alert-banner__content">`
- XPath: `.padding-horizontal.lgd-container > .localgov-alert-banner__inner > .localgov-alert-banner__content`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="field field--name-localgov-image field--type-entity-reference field--label-hidden field__item">`
- XPath: `.field--name-localgov-image`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<input data-drupal-selector="edit-s" placeholder="Search northdevon.gov.uk" type="text" id="edit-s" name="s" value="" size="30" maxlength="128" class="form-text required" required="required" aria-required="true">`
- XPath: `#edit-s`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="lgd-region lgd-region--pre-footer region region-pre-footer">`
- XPath: `.lgd-region--pre-footer`

### https://www.southkesteven.gov.uk/

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h4>Students take first step towards their careers</h4>`
- XPath: `.views-row.lgd-row__one-third:nth-child(1) > .node--type-localgov-news-article.lgd-teaser.lgd-teaser--localgov-news-article > .card-link > .lgd-teaser__content.lgd-teaser__content--localgov-news-article > .text-wrapper > .field--name-field-display-title.field--type-string.field--label-hidden > h4`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a class="social-media-link-icon--facebook" href="https://www.facebook.com/southkdc">         <span class="fab fa-facebook fa-2x"></span>       </a>`
- XPath: `.social-media-link-icon--facebook`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a class="social-media-link-icon--twitter" href="https://x.com/southkesteven">         <span class="fab fa-x-twitter fa-2x"></span>       </a>`
- XPath: `.social-media-link-icon--twitter`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a class="social-media-link-icon--instagram" href="https://www.instagram.com/discoversouthk">         <span class="fab fa-instagram fa-2x"></span>       </a>`
- XPath: `.social-media-link-icon--instagram`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a class="social-media-link-icon--linkedin" href="https://www.linkedin.com/company/south-kesteven-council">         <span class="fab fa-linkedin fa-2x"></span>       </a>`
- XPath: `.social-media-link-icon--linkedin`

**Failure 5:**
- Message: Links must have discernible text
- HTML: `<a class="social-media-link-icon--youtube" href="https://www.youtube.com/@SouthKestevenGovUK">         <span class="fab fa-youtube fa-2x"></span>       </a>`
- XPath: `.social-media-link-icon--youtube`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr" class="sticky-header-html js" style="--lgd-sticky-header-position: 0px; --lgd-sticky-header-height: 121px;">`
- XPath: `html`

### https://www.sstaffs.gov.uk/

#### Rule: [aria-dialog-name](https://dequeuniversity.com/rules/axe/4.11/aria-dialog-name?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: ARIA dialog and alertdialog nodes should have an accessible name
- HTML: `<div id="prefix-overlay-outer" tabindex="0" role="dialog" aria-modal="true" aria-describedby="prefix-overlay-step1">`
- XPath: `#prefix-overlay-outer`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<input type="submit" value="Subscribe" id="prefix-submitButton">`
- XPath: `#prefix-submitButton`

#### Rule: [meta-viewport-large](https://dequeuniversity.com/rules/axe/4.11/meta-viewport-large?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: Users should be able to zoom and scale the text up to 500%
- HTML: `<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=2.0, user-scalable=yes">`
- XPath: `meta[name="viewport"]:nth-child(28)`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable skip-link">       Skip to main content     </a>`
- XPath: `.focusable`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="email-alerts--text"><h3 class="email-alerts--heading h5">Stay connected</h3> <p>Sign up to receive news and updates from South Staffordshire Council</p> </div>`
- XPath: `.email-alerts--text`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="js-form-item form-item js-form-type-email form-item-email js-form-item-email form-no-label">`
- XPath: `.js-form-type-email`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>A-Z of services</h2>`
- XPath: `#block-atoz > h2`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="a-z-items">`
- XPath: `.a-z-items`

### https://www.knowsley.gov.uk/

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: Headings should not be empty
- HTML: `<h2 class="call-to-action-links-listing__title"></h2>`
- XPath: `.call-to-action-links-listing__title`

#### Rule: [landmark-no-duplicate-contentinfo](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-contentinfo?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one contentinfo landmark
- HTML: `<div class="eu-cookie-compliance-banner eu-cookie-compliance-banner-info eu-cookie-compliance-banner--categories cookies-notice" role="contentinfo" aria-label="cookienotice" aria-hidden="false">`
- XPath: `.eu-cookie-compliance-banner`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a class="social-media-link-icon--facebook" href="https://www.facebook.com/knowsley.council">         <span class="fab fa-facebook fa-2x"></span>       </a>`
- XPath: `.social-media-link-icon--facebook`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a class="social-media-link-icon--youtube" href="https://www.youtube.com/knowsleycouncil">         <span class="fab fa-youtube fa-2x"></span>       </a>`
- XPath: `.social-media-link-icon--youtube`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a class="social-media-link-icon--instagram" href="https://www.instagram.com/knowsleycouncil">         <span class="fab fa-instagram fa-2x"></span>       </a>`
- XPath: `.social-media-link-icon--instagram`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a class="social-media-link-icon--pinterest" href="https://www.pinterest.com/knowsleycouncil">         <span class="fab fa-pinterest fa-2x"></span>       </a>`
- XPath: `.social-media-link-icon--pinterest`

**Failure 5:**
- Message: Links must have discernible text
- HTML: `<a class="social-media-link-icon--flickr" href="https://www.flickr.com/photos/knowsleycouncil">         <span class="fab fa-flickr fa-2x"></span>       </a>`
- XPath: `.social-media-link-icon--flickr`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable skip-link">       Skip to main content     </a>`
- XPath: `.focusable`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="banner__image">`
- XPath: `.banner__image`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<span class="heading-intro">Welcome,</span>`
- XPath: `.heading-intro`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<h1 class="page-title">How can we help?</h1>`
- XPath: `h1`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="js-form-item form-item js-form-type-search-api-autocomplete form-item-s js-form-item-s">`
- XPath: `.js-form-type-search-api-autocomplete`

#### Rule: [role-img-alt](https://dequeuniversity.com/rules/axe/4.11/role-img-alt?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: [role="img"] elements must have alternative text
- HTML: `<span class="fa-ext extlink" role="img" aria-hidden="false"><span class="fa fa-external-link" data-extlink-placement="append"></span></span>`
- XPath: `.call-to-action.paragraph--type--call-to-action.paragraph--view-mode--default > .ext[data-extlink=""][aria-label="(link is external)"] > .fa-ext.extlink[role="img"]`

**Failure 2:**
- Message: [role="img"] elements must have alternative text
- HTML: `<span class="fa-ext extlink" role="img" aria-hidden="false"><span class="fa fa-external-link" data-extlink-placement="append"></span></span>`
- XPath: `a[href$="foster4.co.uk/"] > .fa-ext.extlink[role="img"]`

**Failure 3:**
- Message: [role="img"] elements must have alternative text
- HTML: `<span class="fa-ext extlink" role="img" aria-hidden="false"><span class="fa fa-external-link" data-extlink-placement="append"></span></span>`
- XPath: `.menu-item:nth-child(9) > .ext[data-extlink=""][aria-label="(link is external)"] > .fa-ext.extlink[role="img"]`

**Failure 4:**
- Message: [role="img"] elements must have alternative text
- HTML: `<span class="fa-ext extlink" role="img" aria-hidden="false"><span class="fa fa-external-link" data-extlink-placement="append"></span></span>`
- XPath: `.menu-item:nth-child(12) > .ext[data-extlink=""][aria-label="(link is external)"] > .fa-ext.extlink[role="img"]`

### https://new.calderdale.gov.uk/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<div class="footer-div">                ©                <script>document.write(new Date().getFullYear())</script>2026                Barracuda Networks, Inc. All rights reserved.            </div>`
- XPath: `.footer-div`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html>`
- XPath: `html`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img id="logo" src="">`
- XPath: `#logo`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html>`
- XPath: `html`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Page should contain a level-one heading
- HTML: `<html>`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div>                    <div class="header-first-line" id="title">You have been blocked</div>                    <div class="header-second-line" id="subTitle">You are unable to access this website</div>                </div>`
- XPath: `.header-flex-content > div:nth-child(2)`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="logo">            <img id="logo" src="">        </div>`
- XPath: `.logo`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<div>`
- XPath: `body > div:nth-child(3)`

### https://www.elmbridge.gov.uk

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="lgd-region lgd-region--header region region-header" role="banner">`
- XPath: `.lgd-region--header`

**Failure 2:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="lgd-region lgd-region--content region region-content" role="banner">`
- XPath: `.lgd-region--content`

**Failure 3:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="lgd-region lgd-region--content-bottom region region-content-bottom" role="banner">`
- XPath: `.lgd-region--content-bottom`

**Failure 4:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="lgd-region lgd-region--footer-first region region-footer-first" role="banner">`
- XPath: `.lgd-region--footer-first`

**Failure 5:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="lgd-region lgd-region--footer-second region region-footer-second" role="banner">`
- XPath: `.lgd-region--footer-second`

*... and 1 more failures for this rule*

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header>         <h1 class="visually-hidden">Welcome to Elmbridge.gov.uk</h1>       </header>`
- XPath: `body > header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header>         <h1 class="visually-hidden">Welcome to Elmbridge.gov.uk</h1>       </header>`
- XPath: `body > header`

### https://www.bedford.gov.uk/

#### Rule: [aria-dialog-name](https://dequeuniversity.com/rules/axe/4.11/aria-dialog-name?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: ARIA dialog and alertdialog nodes should have an accessible name
- HTML: `<div id="prefix-overlay-outer" tabindex="0" role="dialog" aria-modal="true" aria-describedby="prefix-overlay-step1">`
- XPath: `#prefix-overlay-outer`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3 class="services-menu-title">Services</h3>`
- XPath: `.services-menu-title`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable skip-link">       Skip to main content     </a>`
- XPath: `.focusable`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="field field--name-field-landing-banner field--type-entity-reference field--label-hidden field__item">`
- XPath: `.field--name-field-landing-banner`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<div id="block-bbc-theme-homepagebannercontent" class="block block-block-content block-block-contentf12e6c3d-df74-44c1-b0c3-99781afd32f8">`
- XPath: `#block-bbc-theme-homepagebannercontent`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<input placeholder="Search" autocomplete="off" data-drupal-selector="edit-s" type="text" id="edit-s" name="s" value="" size="30" maxlength="128" class="form-text required" required="required" aria-required="true">`
- XPath: `#edit-s`

### https://www.lbbd.gov.uk/

#### Rule: [aria-prohibited-attr](https://dequeuniversity.com/rules/axe/4.11/aria-prohibited-attr?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Elements must only use permitted ARIA attributes
- HTML: `<a class="ytp-shorts-title-channel-logo" target="_blank" aria-label="Photo image of Barking and Dagenham Council" style="background-image: url(&quot;https://yt3.ggpht.com/ytc/AIdro_lrPNzDYoZXbmNIM8zbIzacSZbXvX1drW8UFnMcRKzWj9U=s68-c-k-c0x00ffffff-no-rj&quot;);"></a>`
- XPath: `li:nth-child(3) > iframe[title="Youtube Video Player"][width="570px"][height="600px;"]`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Submit</span>`
- XPath: `iframe[title="ehq-embed-survey"]`

#### Rule: [frame-title](https://dequeuniversity.com/rules/axe/4.11/frame-title?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Frames must have an accessible name
- HTML: `<iframe id="chatbox" src="https://chat.lbbd.gov.uk/" style="width: 100%; height: 0px; border: none; box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 8px; background-color: white; transition: height 0.3s ease-out;"></iframe>`
- XPath: `#chatbox`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<main class="main" id="main-content">`
- XPath: `#main-content`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div role="region" aria-live="polite" id="chakra-toast-manager..." style="position: fixed; z-i...">`
- XPath: `iframe[title="ehq-embed-survey"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="localgov-alert-banner__content">`
- XPath: `.localgov-alert-banner__content`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div id="block-lgd-localgov-home-welcome-block-base" class="block block-localgov block-localgov-home-welcome-block">               <h1>How can we help?</h1><p>Ask any question about council services</p>   </div>`
- XPath: `#block-lgd-localgov-home-welcome-block-base`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="js-form-item form-item js-form-type-textfield form-item-s js-form-item-s form-no-label">`
- XPath: `.js-form-item`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<div id="block-lgd-localgov-subsite-banner-base" class="block block-localgov-subsites block-localgov-subsite-banner">`
- XPath: `#block-lgd-localgov-subsite-banner-base`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<div id="chat-button" style="background-color: rg...">`
- XPath: `#chat-button`

*... and 1 more failures for this rule*

#### Rule: [select-name](https://dequeuniversity.com/rules/axe/4.11/select-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Select element must have an accessible name
- HTML: `<select id="gtranslate_fake_select">`
- XPath: `.block-gtranslate > .gtranslate_wrapper.gt_container--wz96ug > select:nth-child(1)`

### https://www.rbkc.gov.uk/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<button href="#" class="button button--inverse alert-banner__toggle alert-banner__toggle--close js-alert-banner-toggle">        Close     </button>`
- XPath: `.alert-banner__toggle--close`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<button type="button" class="agree-button eu-cookie-compliance-secondary-button button--agree button button--inverse" tabindex="0">Accept cookies policy</button>`
- XPath: `.agree-button`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<button class="button button--expander js-button-expander" aria-expanded="false">         More services       </button>`
- XPath: `.button--expander`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<p class="paragraph">               Use the library catalogue, sign up for events and more.       </p>`
- XPath: `#paragraph-id-4804 > .cta-block__content > .paragraph`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.rbkc.gov.uk/libraries-0" class="button button--inverse button--icon" target="_self">`
- XPath: `#paragraph-id-4804 > .button--icon.button--inverse[target="_self"]`

*... and 1 more failures for this rule*

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header eu-cookie-compliance-status-null" data-eu-cookie-compliance-once="true" data-once="site-header">`
- XPath: `header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header eu-cookie-compliance-status-null" data-eu-cookie-compliance-once="true" data-once="site-header">`
- XPath: `header`

### https://www.milton-keynes.gov.uk/

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<button role="listitem" class="qc-cmp2-list-item-header" aria-label="Opt-Outs" aria-live="polite">`
- XPath: `button[aria-label="Opt-Outs"]`

**Failure 2:**
- Message: ARIA role should be appropriate for the element
- HTML: `<li id="Google Basic Consents" class="qc-cmp2-list-item qc-cmp2-expanded" role="list">`
- XPath: `#Google\ Basic\ Consents`

**Failure 3:**
- Message: ARIA role should be appropriate for the element
- HTML: `<button class="qc-cmp2-list-item-header" role="listitem" aria-label="Google consents" aria-live="polite">`
- XPath: `button[aria-label="Google consents"]`

#### Rule: [aria-required-children](https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) (Level A)

**Failure 1:**
- Message: Certain ARIA roles must contain particular children
- HTML: `<li id="Google Basic Consents" class="qc-cmp2-list-item qc-cmp2-expanded" role="list">`
- XPath: `#Google\ Basic\ Consents`

#### Rule: [aria-required-parent](https://dequeuniversity.com/rules/axe/4.11/aria-required-parent?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) (Level A)

**Failure 1:**
- Message: Certain ARIA roles must be contained by particular parents
- HTML: `<button role="listitem" class="qc-cmp2-list-item-header" aria-label="Opt-Outs" aria-live="polite">`
- XPath: `button[aria-label="Opt-Outs"]`

**Failure 2:**
- Message: Certain ARIA roles must be contained by particular parents
- HTML: `<p class="qc-cmp2-list-item-title" role="listitem"><p>Google consents</p></p>`
- XPath: `.qc-cmp2-list-item-title[role="listitem"]`

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button tabindex="0" role="switch" aria-checked="false" class="qc-cmp2-toggle css-w01txj"><div class="toggle"></div><p class="text off" aria-label="Toggle off">OFF</p><p class="text on" aria-label="Toggle on">ON</p></button>`
- XPath: `.qc-cmp2-expandable-info:nth-child(1) > .qc-cmp2-toggle-switch > .css-w01txj.qc-cmp2-toggle[role="switch"]`

**Failure 2:**
- Message: Buttons must have discernible text
- HTML: `<button tabindex="0" role="switch" aria-checked="false" class="qc-cmp2-toggle css-w01txj"><div class="toggle"></div><p class="text off" aria-label="Toggle off">OFF</p><p class="text on" aria-label="Toggle on">ON</p></button>`
- XPath: `.qc-cmp2-expandable-info:nth-child(2) > .qc-cmp2-toggle-switch > .css-w01txj.qc-cmp2-toggle[role="switch"]`

**Failure 3:**
- Message: Buttons must have discernible text
- HTML: `<button tabindex="0" role="switch" aria-checked="false" class="qc-cmp2-toggle css-w01txj"><div class="toggle"></div><p class="text off" aria-label="Toggle off">OFF</p><p class="text on" aria-label="Toggle on">ON</p></button>`
- XPath: `.qc-cmp2-expandable-info:nth-child(3) > .qc-cmp2-toggle-switch > .css-w01txj.qc-cmp2-toggle[role="switch"]`

**Failure 4:**
- Message: Buttons must have discernible text
- HTML: `<button tabindex="0" role="switch" aria-checked="false" class="qc-cmp2-toggle css-w01txj"><div class="toggle"></div><p class="text off" aria-label="Toggle off">OFF</p><p class="text on" aria-label="Toggle on">ON</p></button>`
- XPath: `.qc-cmp2-expandable-info:nth-child(4) > .qc-cmp2-toggle-switch > .css-w01txj.qc-cmp2-toggle[role="switch"]`

**Failure 5:**
- Message: Buttons must have discernible text
- HTML: `<button tabindex="0" role="switch" aria-checked="false" class="qc-cmp2-toggle css-w01txj"><div class="toggle"></div><p class="text off" aria-label="Toggle off">OFF</p><p class="text on" aria-label="Toggle on">ON</p></button>`
- XPath: `.qc-cmp2-expandable-info:nth-child(5) > .qc-cmp2-toggle-switch > .css-w01txj.qc-cmp2-toggle[role="switch"]`

*... and 2 more failures for this rule*

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<p class="css-jg567y">Opted In</p>`
- XPath: `div:nth-child(2) > .css-cf00qb > .css-jg567y`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<p class="css-jg567y">Opted In</p>`
- XPath: `div:nth-child(3) > .css-cf00qb > .css-jg567y`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<p class="css-jg567y">Opted In</p>`
- XPath: `div:nth-child(4) > .css-cf00qb > .css-jg567y`

#### Rule: [list](https://dequeuniversity.com/rules/axe/4.11/list?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) (Level A)

**Failure 1:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul class="qc-cmp2-consent-list css-1f88jwd">`
- XPath: `.css-1f88jwd`

**Failure 2:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul class="qc-cmp2-consent-list css-def7e2">`
- XPath: `.css-def7e2`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable skip-link">       Skip to main content     </a>`
- XPath: `.focusable`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="field field--name-field-landing-banner field--type-entity-reference field--label-hidden field__items">`
- XPath: `.field--name-field-landing-banner`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<div id="block-homepagebannercontent" class="block block-block-content block-block-content065139dd-3323-4556-84e7-e4bce3b95d5f">`
- XPath: `#block-homepagebannercontent`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<input placeholder="Search" data-drupal-selector="edit-search" type="text" id="edit-search" name="search" value="" size="30" maxlength="128" class="form-text">`
- XPath: `#edit-search`

### https://www.redcar-cleveland.gov.uk/

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button class="MuiButtonBase-root M..." tabindex="0" type="button" id=":r3:">`
- XPath: `div[data-arto-chat-host=""],#\:r3\:`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3 class="box-link__title">     <a class="box-link__link" href="/cost-of-living-support">               Cost of Living Support     </a>   </h3>`
- XPath: `.box-links-listing__list-item.lgd-row__one-quarter:nth-child(1) > .box-link.paragraph--type--localgov-box-link > .box-link__title`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="js-form-item form-item js-form-type-search-api-autocomplete form-item-s js-form-item-s">`
- XPath: `.js-form-item`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div id="block-subsitebanner" class="block block-localgov-subsites block-localgov-subsite-banner">`
- XPath: `#block-subsitebanner`

### https://www.sheffield.gov.uk/

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable skip-link">       Skip to main content     </a>`
- XPath: `.focusable`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<h1>For you and your city</h1>`
- XPath: `h1`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="js-form-item form-item js-form-type-search-api-autocomplete form-item-s js-form-item-s">`
- XPath: `#views-exposed-form-search-results-embed-1-69b426e28ae0d-block > .js-form-type-search-api-autocomplete.form-item-s.js-form-item-s`

### https://www.bracknell-forest.gov.uk/

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable skip-link" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

**Failure 2:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<div class="site-logo" tabindex="2">         <img src="/themes/custom/bfc/logo.svg" alt="Bracknell Forest Council">       </div>`
- XPath: `.site-logo`

**Failure 3:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<button aria-controls="main-menu-wrapper" aria-expanded="false" type="button" class="menu__button" tabindex="3">`
- XPath: `.menu__button`

### https://www.croydon.gov.uk/

#### Rule: [aria-dialog-name](https://dequeuniversity.com/rules/axe/4.11/aria-dialog-name?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: ARIA dialog and alertdialog nodes should have an accessible name
- HTML: `<div id="sliding-popup" role="alertdialog" aria-describedby="popup-text" class="sliding-popup-top clearfix" style="top: 0px;">`
- XPath: `#sliding-popup`

#### Rule: [landmark-no-duplicate-contentinfo](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-contentinfo?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one contentinfo landmark
- HTML: `<div class="eu-cookie-compliance-banner eu-cookie-compliance-banner-info eu-cookie-compliance-banner--categories cookies-notice" role="contentinfo" aria-label="cookienotice" aria-hidden="false">`
- XPath: `.eu-cookie-compliance-banner`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div class="search-block-form google-cse block block-search block-search-form-block" data-drupal-selector="search-block-form" novalidate="novalidate" id="block-localgov-base-croydon-searchform" role="search">`
- XPath: `#block-localgov-base-croydon-searchform`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable skip-link">       Skip to main content     </a>`
- XPath: `.focusable`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="localgov-alert-banner__content">`
- XPath: `.localgov-alert-banner__content`

### https://www.walthamforest.gov.uk/

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="homepage-banner__hero-image">`
- XPath: `.homepage-banner__hero-image`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="homepage-banner__content homepage-banner__content--right ">`
- XPath: `.homepage-banner__content--right`

### https://www.westminster.gov.uk/

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="col-md-12">`
- XPath: `.col-md-12`

### https://www.westnorthants.gov.uk

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="sc-iVnIWt isTIAC">Tell us whether you accept cookies</p>`
- XPath: `.sc-iVnIWt`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="sc-hWgKua iAFiwN"><p>We use <a href="/your-council/cookies">cookies to collect information</a> about how you use this website. We use this information to make it work as well as possible and help make improvements.</p></div>`
- XPath: `.sc-hWgKua`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="sc-fGniAB kxXsia">`
- XPath: `.sc-fGniAB`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<div id="promoted-services-tabpanel-0" aria-labelledby="promoted-services-tab-0" role="tabpanel" class="sc-ecEkbT bubSOo">`
- XPath: `#promoted-services-tabpanel-0`

### https://www.brighton-hove.gov.uk/

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav id="block-findoutmore" role="navigation">`
- XPath: `#block-findoutmore`

