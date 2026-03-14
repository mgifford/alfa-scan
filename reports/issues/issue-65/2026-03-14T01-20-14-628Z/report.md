# Scan Report: Georgia.gov

- Issue: https://github.com/mgifford/open-scans/issues/65
- Submitted by: mgifford
- Scanned at: 2026-03-14T01:19:21.353Z
- Engines used: AXE, ACCESSLINT
- Scan duration: 11.5 minutes
- Total URLs submitted: 100
- Accepted public URLs: 100
- Rejected URLs: 0
- 🌙 **Dark mode tested: 74 of 100 URLs (74%) support `prefers-color-scheme: dark`**
- ALFA outcomes: 0 passed, 0 failed, 0 cantTell, 0 inapplicable
- axe outcomes: 25485 passed, 346 failed, 74 cantTell, 10524 inapplicable
- Equal Access outcomes: 0 passed, 0 failed (0 unique, 0 duplicate), 0 cantTell, 0 inapplicable
- AccessLint outcomes: 8970 passed, 230 failed (230 unique, 0 duplicate), 0 cantTell, 0 inapplicable
- QualWeb outcomes: 0 passed, 0 failed, 0 cantTell, 0 inapplicable
- Duplicate findings caught by later scanners: 9

## 🎯 Pages with Most Errors

Focus your efforts on these pages to make the biggest impact (combined scanner unique failures):

| Page | axe Unique | AccessLint Unique | Total Unique | Page Title |
|---|---:|---:|---:|---|
| [View Page](https://georgia.gov/how-do-i-apply-georgia-dream-homeownership-program) | 10 | 3 | **13** | Just a moment... |
| [View Page](https://georgia.gov/how-do-i-register-llc) | 10 | 3 | **13** | Just a moment... |
| [View Page](https://georgia.gov/how-do-i-register-vehicle) | 10 | 3 | **13** | Just a moment... |
| [View Page](https://georgia.gov/locations/georgia-department-driver-services-dds) | 10 | 2 | **12** | Georgia Department of Driver Services (DDS) \| Georgia.gov |
| [View Page](https://georgia.gov/how-do-i-find-equity-and-accessibility-resources-consumer-services) | 8 | 3 | **11** | Find Equity and Accessibility Resources for Consumer Services \| Georgia.gov |
| [View Page](https://georgia.gov/how-do-i-find-equity-and-accessibility-resources-disability-services) | 8 | 3 | **11** | Find Equity and Accessibility Resources for Disability Services \| Georgia.gov |
| [View Page](https://georgia.gov/how-do-i-find-equity-and-accessibility-resources-veterans-services) | 8 | 3 | **11** | Find Equity and Accessibility Resources for Veterans Services \| Georgia.gov |
| [View Page](https://georgia.gov/how-do-i-find-aging-equity-and-accessibility-resources) | 8 | 3 | **11** | Find Aging Equity and Accessibility Resources \| Georgia.gov |
| [View Page](https://georgia.gov/how-do-i-find-job-georgia) | 8 | 3 | **11** | Find a Job in Georgia \| Georgia.gov |
| [View Page](https://georgia.gov/how-do-i-apply-weapons-carry-license-wcl) | 8 | 3 | **11** | Apply for a Weapons Carry License (WCL) \| Georgia.gov |

## 🔧 Most Common Issues (ALFA)

These ALFA accessibility issues appear most frequently across your pages:

✅ No ALFA failed rules detected!

## 🔧 Most Common Issues (axe)

These axe accessibility issues appear most frequently across your pages:

| Rule | Pages Affected | Documentation |
|---|---:|---|
| meta-refresh | **74** of 100 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/meta-refresh) |
| region | **26** of 100 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/region) |
| tabindex | **26** of 100 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/tabindex) |
| landmark-no-duplicate-banner | **22** of 100 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/landmark-no-duplicate-banner) |
| landmark-unique | **22** of 100 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/landmark-unique) |
| empty-heading | **2** of 100 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/empty-heading) |

> 💡 **Tip**: Click on the rule documentation links to learn how to fix each issue. Consider fixing the most common issues first for maximum impact.

> 🤖 **Future Enhancement**: This report will soon include AI-powered fix suggestions for authenticated GitHub users (opt-in only, no auto-run AI).

## 🔍 Cross-Page Patterns: Common HTML Issues

These HTML patterns cause the same accessibility errors across multiple pages. **Fix the pattern once in your codebase to fix it everywhere!**

### 🎯 Top Patterns to Fix (Highest Impact)

#### Pattern 1: Affects 74 page(s) - 148 occurrence(s)

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
- https://georgia.gov/how-do-i-find-equity-and-accessibility-resources-children-and-parenting
- https://georgia.gov/how-do-i-find-equity-and-accessibility-resources-courts-and-corrections
- https://georgia.gov/how-do-i-find-equity-and-accessibility-resources-education-and-teaching
- https://georgia.gov/
- https://georgia.gov/accessibility
- *...and 69 more page(s)*

---

#### Pattern 2: Affects 26 page(s) - 26 occurrence(s)

**Scanner**: axe
**Rule**: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate
**Issue**: All page content should be contained by landmarks

**HTML Pattern**:
```html
<p class="alert__title">
          That Text Is Not From Us        </p>
```

**XPath** (use in browser DevTools):
```
.alert__title
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.alert__title')`
5. The element will be highlighted

**Affected Pages**:
- https://georgia.gov/how-do-i-find-equity-and-accessibility-resources-consumer-services
- https://georgia.gov/how-do-i-find-equity-and-accessibility-resources-disability-services
- https://georgia.gov/how-do-i-find-equity-and-accessibility-resources-veterans-services
- https://georgia.gov/how-do-i-find-aging-equity-and-accessibility-resources
- https://georgia.gov/how-do-i-find-equity-and-accessibility-resources-assistance-programs
- *...and 21 more page(s)*

---

#### Pattern 3: Affects 26 page(s) - 26 occurrence(s)

**Scanner**: axe
**Rule**: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate
**Issue**: All page content should be contained by landmarks

**HTML Pattern**:
```html
<p class="alert__body">We'll never request payment or info through unsolicited text</p>
```

**XPath** (use in browser DevTools):
```
.alert__body
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.alert__body')`
5. The element will be highlighted

**Affected Pages**:
- https://georgia.gov/how-do-i-find-equity-and-accessibility-resources-consumer-services
- https://georgia.gov/how-do-i-find-equity-and-accessibility-resources-disability-services
- https://georgia.gov/how-do-i-find-equity-and-accessibility-resources-veterans-services
- https://georgia.gov/how-do-i-find-aging-equity-and-accessibility-resources
- https://georgia.gov/how-do-i-find-equity-and-accessibility-resources-assistance-programs
- *...and 21 more page(s)*

---

#### Pattern 4: Affects 26 page(s) - 26 occurrence(s)

**Scanner**: axe
**Rule**: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious
**Issue**: Elements should not have tabindex greater than zero

**HTML Pattern**:
```html
<div id="ivy-bot" tabindex="2" role="button" aria-label="Open chat" aria-expanded="false" aria-disabled="false" class="ivy-circle ivy-intro..." style="background-color: rg...">
```

**XPath** (use in browser DevTools):
```
#ivy-bot
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('#ivy-bot')`
5. The element will be highlighted

**Affected Pages**:
- https://georgia.gov/how-do-i-find-equity-and-accessibility-resources-consumer-services
- https://georgia.gov/how-do-i-find-equity-and-accessibility-resources-disability-services
- https://georgia.gov/how-do-i-find-equity-and-accessibility-resources-veterans-services
- https://georgia.gov/how-do-i-find-aging-equity-and-accessibility-resources
- https://georgia.gov/how-do-i-find-equity-and-accessibility-resources-assistance-programs
- *...and 21 more page(s)*

---

#### Pattern 5: Affects 16 page(s) - 16 occurrence(s)

**Scanner**: axe
**Rule**: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate
**Issue**: Document should not have more than one banner landmark

**HTML Pattern**:
```html
<header id="header" class="header__wrapper header__wrapper--www" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">
```

**XPath** (use in browser DevTools):
```
#header
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('#header')`
5. The element will be highlighted

**Affected Pages**:
- https://georgia.gov/how-do-i-find-equity-and-accessibility-resources-consumer-services
- https://georgia.gov/how-do-i-find-equity-and-accessibility-resources-disability-services
- https://georgia.gov/how-do-i-find-equity-and-accessibility-resources-veterans-services
- https://georgia.gov/how-do-i-find-aging-equity-and-accessibility-resources
- https://georgia.gov/how-do-i-find-equity-and-accessibility-resources-assistance-programs
- *...and 11 more page(s)*

---

#### Pattern 6: Affects 16 page(s) - 16 occurrence(s)

**Scanner**: axe
**Rule**: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate
**Issue**: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

**HTML Pattern**:
```html
<header id="header" class="header__wrapper header__wrapper--www" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">
```

**XPath** (use in browser DevTools):
```
#header
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('#header')`
5. The element will be highlighted

**Affected Pages**:
- https://georgia.gov/how-do-i-find-equity-and-accessibility-resources-consumer-services
- https://georgia.gov/how-do-i-find-equity-and-accessibility-resources-disability-services
- https://georgia.gov/how-do-i-find-equity-and-accessibility-resources-veterans-services
- https://georgia.gov/how-do-i-find-aging-equity-and-accessibility-resources
- https://georgia.gov/how-do-i-find-equity-and-accessibility-resources-assistance-programs
- *...and 11 more page(s)*

---

#### Pattern 7: Affects 15 page(s) - 15 occurrence(s)

**Scanner**: axe
**Rule**: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate
**Issue**: All page content should be contained by landmarks

**HTML Pattern**:
```html
<h2>Did you find what you were looking for on this page?</h2>
```

**XPath** (use in browser DevTools):
```
#upper-feedback-content > h2
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('#upper-feedback-content > h2')`
5. The element will be highlighted

**Affected Pages**:
- https://georgia.gov/how-do-i-find-equity-and-accessibility-resources-consumer-services
- https://georgia.gov/how-do-i-find-equity-and-accessibility-resources-disability-services
- https://georgia.gov/how-do-i-find-equity-and-accessibility-resources-veterans-services
- https://georgia.gov/how-do-i-find-aging-equity-and-accessibility-resources
- https://georgia.gov/how-do-i-find-equity-and-accessibility-resources-assistance-programs
- *...and 10 more page(s)*

---

#### Pattern 8: Affects 6 page(s) - 6 occurrence(s)

**Scanner**: axe
**Rule**: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate
**Issue**: Document should not have more than one banner landmark

**HTML Pattern**:
```html
<header id="header" class="header__wrapper header__wrapper--www" data-drupal-selector="site-header" role="banner" data-info-expanded="false">
```

**XPath** (use in browser DevTools):
```
#header
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('#header')`
5. The element will be highlighted

**Affected Pages**:
- https://georgia.gov/how-do-i-apply-georgia-dream-homeownership-program
- https://georgia.gov/how-do-i-register-llc
- https://georgia.gov/how-do-i-register-vehicle
- https://georgia.gov/contacts/child-protective-services
- https://georgia.gov/contacts/customer-service
- *...and 1 more page(s)*

---

#### Pattern 9: Affects 6 page(s) - 6 occurrence(s)

**Scanner**: axe
**Rule**: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate
**Issue**: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

**HTML Pattern**:
```html
<header id="header" class="header__wrapper header__wrapper--www" data-drupal-selector="site-header" role="banner" data-info-expanded="false">
```

**XPath** (use in browser DevTools):
```
#header
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('#header')`
5. The element will be highlighted

**Affected Pages**:
- https://georgia.gov/how-do-i-apply-georgia-dream-homeownership-program
- https://georgia.gov/how-do-i-register-llc
- https://georgia.gov/how-do-i-register-vehicle
- https://georgia.gov/contacts/child-protective-services
- https://georgia.gov/contacts/customer-service
- *...and 1 more page(s)*

---

#### Pattern 10: Affects 4 page(s) - 4 occurrence(s)

**Scanner**: axe
**Rule**: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate
**Issue**: All page content should be contained by landmarks

**HTML Pattern**:
```html
<div class="js-form-item form-item js-form-type-textarea form-item-feedback-message js-form-item-feedback-message">
```

**XPath** (use in browser DevTools):
```
.js-form-type-textarea
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.js-form-type-textarea')`
5. The element will be highlighted

**Affected Pages**:
- https://georgia.gov/faqs-motor-vehicle-reports
- https://georgia.gov/how-do-i-apply-georgia-dream-homeownership-program
- https://georgia.gov/how-do-i-register-llc
- https://georgia.gov/how-do-i-register-vehicle

---

#### Pattern 11: Affects 3 page(s) - 3 occurrence(s)

**Scanner**: axe
**Rule**: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate
**Issue**: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

**HTML Pattern**:
```html
<nav class="how-do-i-step-links accordion-wrapper" aria-label="How Do I Steps">
```

**XPath** (use in browser DevTools):
```
.content-page__mobile > .how-do-i-step-links.accordion-wrapper[aria-label="How Do I Steps"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.content-page__mobile > .how-do-i-step-links.accordion-wrapper[aria-label="How Do I Steps"]')`
5. The element will be highlighted

**Affected Pages**:
- https://georgia.gov/how-do-i-apply-georgia-dream-homeownership-program
- https://georgia.gov/how-do-i-register-llc
- https://georgia.gov/how-do-i-register-vehicle

---

#### Pattern 12: Affects 3 page(s) - 3 occurrence(s)

**Scanner**: axe
**Rule**: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate
**Issue**: All page content should be contained by landmarks

**HTML Pattern**:
```html
<div>
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
- https://georgia.gov/locations/department-administrative-services
- https://georgia.gov/locations/department-human-services-division-family-and-children-services-location
- https://georgia.gov/locations/georgia-department-driver-services-dds

---

#### Pattern 13: Affects 3 page(s) - 3 occurrence(s)

**Scanner**: axe
**Rule**: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate
**Issue**: All page content should be contained by landmarks

**HTML Pattern**:
```html
<div class="gmnoprint gm-style-cc" draggable="false" style="z-index: 1000001; user-select: none; position: relative; height: 14px; line-height: 14px;">
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
- https://georgia.gov/locations/department-administrative-services
- https://georgia.gov/locations/department-human-services-division-family-and-children-services-location
- https://georgia.gov/locations/georgia-department-driver-services-dds

---

#### Pattern 14: Affects 3 page(s) - 3 occurrence(s)

**Scanner**: axe
**Rule**: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate
**Issue**: All page content should be contained by landmarks

**HTML Pattern**:
```html
<div draggable="false" class="gm-style-cc" style="user-select: none; position: relative; height: 14px; line-height: 14px;">
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
- https://georgia.gov/locations/department-administrative-services
- https://georgia.gov/locations/department-human-services-division-family-and-children-services-location
- https://georgia.gov/locations/georgia-department-driver-services-dds

---

#### Pattern 15: Affects 2 page(s) - 2 occurrence(s)

**Scanner**: axe
**Rule**: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor
**Issue**: Headings should not be empty

**HTML Pattern**:
```html
<h2 class="organization-summary__title"></h2>
```

**XPath** (use in browser DevTools):
```
.organization-summary__title
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.organization-summary__title')`
5. The element will be highlighted

**Affected Pages**:
- https://georgia.gov/organization/georgia-department-human-services-division-child-support-services
- https://georgia.gov/organization/georgia-department-veterans-service

---

> 💡 **Pro Tip**: These patterns likely come from shared components or templates in your codebase. Fix them in the component/template source, and the fix will propagate to all affected pages.

## 📊 Detailed Results

Complete scan results for all tested pages:

| Submitted URL | Final URL | Status | HTTP | Redirected | Time (ms) | axe Unique | ALFA Unique | Equal Access Unique | AccessLint Unique | Duplicates | Notes |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|
| https://georgia.gov/how-do-i-find-equity-and-accessibility-resources-consumer-services | https://georgia.gov/how-do-i-find-equity-and-accessibility-resources-consumer-services | OK | 200 | no | 7753 | 8 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/landmark-unique, landmarks/no-duplicate-banner |
| https://georgia.gov/how-do-i-find-equity-and-accessibility-resources-disability-services | https://georgia.gov/how-do-i-find-equity-and-accessibility-resources-disability-services | OK | 200 | no | 7371 | 8 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/landmark-unique, landmarks/no-duplicate-banner |
| https://georgia.gov/how-do-i-find-equity-and-accessibility-resources-veterans-services | https://georgia.gov/how-do-i-find-equity-and-accessibility-resources-veterans-services | OK | 200 | no | 7058 | 8 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/landmark-unique, landmarks/no-duplicate-banner |
| https://georgia.gov/how-do-i-find-aging-equity-and-accessibility-resources | https://georgia.gov/how-do-i-find-aging-equity-and-accessibility-resources | OK | 200 | no | 7003 | 8 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/landmark-unique, landmarks/no-duplicate-banner |
| https://georgia.gov/how-do-i-find-equity-and-accessibility-resources-assistance-programs | https://georgia.gov/how-do-i-find-equity-and-accessibility-resources-assistance-programs | OK | 200 | no | 6736 | 8 | 0 | 0 | 2 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: enough-time/meta-refresh, enough-time/meta-refresh-no-exception |
| https://georgia.gov/how-do-i-find-equity-and-accessibility-resources-children-and-parenting | https://georgia.gov/how-do-i-find-equity-and-accessibility-resources-children-and-parenting | FAIL | 429 | no | 6648 | 2 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/landmark-unique, landmarks/no-duplicate-banner |
| https://georgia.gov/how-do-i-find-equity-and-accessibility-resources-courts-and-corrections | https://georgia.gov/how-do-i-find-equity-and-accessibility-resources-courts-and-corrections | FAIL | 429 | no | 6397 | 2 | 0 | 0 | 2 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: enough-time/meta-refresh, enough-time/meta-refresh-no-exception |
| https://georgia.gov/how-do-i-find-equity-and-accessibility-resources-education-and-teaching | https://georgia.gov/how-do-i-find-equity-and-accessibility-resources-education-and-teaching | FAIL | 403 | no | 6682 | 2 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/landmark-unique, landmarks/no-duplicate-banner |
| https://georgia.gov/ | https://georgia.gov/ | FAIL | 429 | no | 6408 | 2 | 0 | 0 | 2 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: enough-time/meta-refresh, enough-time/meta-refresh-no-exception |
| https://georgia.gov/accessibility | https://georgia.gov/accessibility | FAIL | 429 | no | 6799 | 2 | 0 | 0 | 1 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex |
| https://georgia.gov/contacts/child-support-services | https://georgia.gov/contacts/child-support-services | FAIL | 429 | no | 6399 | 2 | 0 | 0 | 2 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: enough-time/meta-refresh, enough-time/meta-refresh-no-exception |
| https://georgia.gov/organization/georgia-department-human-services-division-child-support-services | https://georgia.gov/organization/georgia-department-human-services-division-child-support-services | OK | 200 | no | 6868 | 4 | 0 | 0 | 2 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: empty-heading, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: enough-time/meta-refresh, enough-time/meta-refresh-no-exception |
| https://georgia.gov/find-a-job-in-georgia | https://georgia.gov/find-a-job-in-georgia | OK | 200 | no | 6853 | 3 | 0 | 0 | 2 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: enough-time/meta-refresh, enough-time/meta-refresh-no-exception |
| https://georgia.gov/how-do-i-find-job-georgia | https://georgia.gov/how-do-i-find-job-georgia | OK | 200 | no | 7567 | 8 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/landmark-unique, landmarks/no-duplicate-banner |
| https://georgia.gov/locations/12000-findley-rd-ste-400 | https://georgia.gov/locations/12000-findley-rd-ste-400 | FAIL | 429 | no | 6656 | 2 | 0 | 0 | 2 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/no-duplicate-banner |
| https://georgia.gov/aging-services | https://georgia.gov/aging-services | FAIL | 429 | no | 6862 | 2 | 0 | 0 | 1 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex |
| https://georgia.gov/disability-services | https://georgia.gov/disability-services | FAIL | 403 | no | 6753 | 2 | 0 | 0 | 1 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex |
| https://georgia.gov/faqs-motor-vehicle-reports | https://georgia.gov/faqs-motor-vehicle-reports | OK | 200 | no | 7129 | 7 | 0 | 0 | 1 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex |
| https://georgia.gov/how-do-i-apply-childcare-and-parent-services-caps-program | https://georgia.gov/how-do-i-apply-childcare-and-parent-services-caps-program | FAIL | 429 | no | 6642 | 2 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/landmark-unique, landmarks/no-duplicate-banner |
| https://georgia.gov/how-do-i-apply-drivers-license | https://georgia.gov/how-do-i-apply-drivers-license | FAIL | 429 | no | 6787 | 2 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/landmark-unique, landmarks/no-duplicate-banner |
| https://georgia.gov/how-do-i-apply-exemption-window-tint-law | https://georgia.gov/how-do-i-apply-exemption-window-tint-law | FAIL | 429 | no | 6653 | 2 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/landmark-unique, landmarks/no-duplicate-banner |
| https://georgia.gov/how-do-i-apply-georgia-dream-homeownership-program | https://georgia.gov/how-do-i-apply-georgia-dream-homeownership-program | FAIL | 429 | no | 7281 | 10 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/landmark-unique, landmarks/no-duplicate-banner |
| https://georgia.gov/how-do-i-apply-housing-choice-voucher-program | https://georgia.gov/how-do-i-apply-housing-choice-voucher-program | FAIL | 429 | no | 6680 | 2 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/landmark-unique, landmarks/no-duplicate-banner |
| https://georgia.gov/how-do-i-apply-independent-care-waiver-program-icwp | https://georgia.gov/how-do-i-apply-independent-care-waiver-program-icwp | FAIL | 429 | no | 6765 | 2 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/landmark-unique, landmarks/no-duplicate-banner |
| https://georgia.gov/how-do-i-apply-medicaid | https://georgia.gov/how-do-i-apply-medicaid | FAIL | 429 | no | 6847 | 2 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/landmark-unique, landmarks/no-duplicate-banner |
| https://georgia.gov/how-do-i-apply-my-georgia-drivers-license | https://georgia.gov/how-do-i-apply-my-georgia-drivers-license | OK | 200 | no | 6810 | 2 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/landmark-unique, landmarks/no-duplicate-banner |
| https://georgia.gov/how-do-i-apply-snap | https://georgia.gov/how-do-i-apply-snap | FAIL | 429 | no | 6618 | 2 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/landmark-unique, landmarks/no-duplicate-banner |
| https://georgia.gov/how-do-i-apply-state-id-card | https://georgia.gov/how-do-i-apply-state-id-card | FAIL | 429 | no | 6788 | 2 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/landmark-unique, landmarks/no-duplicate-banner |
| https://georgia.gov/how-do-i-apply-tanf | https://georgia.gov/how-do-i-apply-tanf | FAIL | 429 | no | 6659 | 2 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/landmark-unique, landmarks/no-duplicate-banner |
| https://georgia.gov/how-do-i-apply-weapons-carry-license-wcl | https://georgia.gov/how-do-i-apply-weapons-carry-license-wcl | OK | 200 | no | 8870 | 8 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/landmark-unique, landmarks/no-duplicate-banner |
| https://georgia.gov/how-do-i-get-or-renew-professional-certification-or-license | https://georgia.gov/how-do-i-get-or-renew-professional-certification-or-license | FAIL | 429 | no | 8349 | 2 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/landmark-unique, landmarks/no-duplicate-banner |
| https://georgia.gov/how-do-i-pay-estimated-tax | https://georgia.gov/how-do-i-pay-estimated-tax | OK | 200 | no | 7054 | 8 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/landmark-unique, landmarks/no-duplicate-banner |
| https://georgia.gov/how-do-i-pay-traffic-ticket | https://georgia.gov/how-do-i-pay-traffic-ticket | FAIL | 429 | no | 6716 | 2 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/landmark-unique, landmarks/no-duplicate-banner |
| https://georgia.gov/how-do-i-register-boat | https://georgia.gov/how-do-i-register-boat | FAIL | 429 | no | 6636 | 2 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/landmark-unique, landmarks/no-duplicate-banner |
| https://georgia.gov/how-do-i-register-business-dol | https://georgia.gov/how-do-i-register-business-dol | FAIL | 429 | no | 8327 | 2 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/landmark-unique, landmarks/no-duplicate-banner |
| https://georgia.gov/how-do-i-register-business-dor | https://georgia.gov/how-do-i-register-business-dor | FAIL | 429 | no | 6844 | 2 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/landmark-unique, landmarks/no-duplicate-banner |
| https://georgia.gov/how-do-i-register-corporation | https://georgia.gov/how-do-i-register-corporation | FAIL | 403 | no | 6858 | 2 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/landmark-unique, landmarks/no-duplicate-banner |
| https://georgia.gov/how-do-i-register-llc | https://georgia.gov/how-do-i-register-llc | FAIL | 429 | no | 7352 | 10 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/landmark-unique, landmarks/no-duplicate-banner |
| https://georgia.gov/how-do-i-register-lp-hdi | https://georgia.gov/how-do-i-register-lp-hdi | FAIL | 403 | no | 6665 | 2 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/landmark-unique, landmarks/no-duplicate-banner |
| https://georgia.gov/how-do-i-register-vehicle | https://georgia.gov/how-do-i-register-vehicle | FAIL | 403 | no | 7259 | 10 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/landmark-unique, landmarks/no-duplicate-banner |
| https://georgia.gov/how-do-i-register-vote | https://georgia.gov/how-do-i-register-vote | FAIL | 429 | no | 6643 | 2 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/landmark-unique, landmarks/no-duplicate-banner |
| https://georgia.gov/how-do-i-renew-boat-registration | https://georgia.gov/how-do-i-renew-boat-registration | FAIL | 429 | no | 7878 | 2 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/landmark-unique, landmarks/no-duplicate-banner |
| https://georgia.gov/how-do-i-renew-corporation | https://georgia.gov/how-do-i-renew-corporation | OK | 200 | no | 7071 | 8 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/landmark-unique, landmarks/no-duplicate-banner |
| https://georgia.gov/how-do-i-renew-drivers-license | https://georgia.gov/how-do-i-renew-drivers-license | OK | 200 | no | 7162 | 8 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/landmark-unique, landmarks/no-duplicate-banner |
| https://georgia.gov/how-do-i-renew-limited-partnership-lp | https://georgia.gov/how-do-i-renew-limited-partnership-lp | FAIL | 429 | no | 8419 | 2 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/landmark-unique, landmarks/no-duplicate-banner |
| https://georgia.gov/how-do-i-renew-my-llc | https://georgia.gov/how-do-i-renew-my-llc | FAIL | 429 | no | 6716 | 2 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/landmark-unique, landmarks/no-duplicate-banner |
| https://georgia.gov/how-do-i-renew-my-medicaid-benefits | https://georgia.gov/how-do-i-renew-my-medicaid-benefits | FAIL | 429 | no | 6706 | 2 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/landmark-unique, landmarks/no-duplicate-banner |
| https://georgia.gov/how-do-i-renew-my-snap-benefits | https://georgia.gov/how-do-i-renew-my-snap-benefits | FAIL | 429 | no | 6378 | 2 | 0 | 0 | 2 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: enough-time/meta-refresh, enough-time/meta-refresh-no-exception |
| https://georgia.gov/how-do-i-renew-my-vehicle-registration | https://georgia.gov/how-do-i-renew-my-vehicle-registration | OK | 200 | no | 6853 | 8 | 0 | 0 | 2 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: enough-time/meta-refresh, enough-time/meta-refresh-no-exception |
| https://georgia.gov/how-do-i-report-elder-abuse | https://georgia.gov/how-do-i-report-elder-abuse | FAIL | 403 | no | 6757 | 2 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/landmark-unique, landmarks/no-duplicate-banner |
| https://georgia.gov/how-do-i-request-and-vote-absentee-ballot | https://georgia.gov/how-do-i-request-and-vote-absentee-ballot | FAIL | 403 | no | 6657 | 2 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/landmark-unique, landmarks/no-duplicate-banner |
| https://georgia.gov/how-do-i-request-copy-my-immunization-records | https://georgia.gov/how-do-i-request-copy-my-immunization-records | FAIL | 429 | no | 8342 | 2 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/landmark-unique, landmarks/no-duplicate-banner |
| https://georgia.gov/how-do-i-request-criminal-background-check | https://georgia.gov/how-do-i-request-criminal-background-check | FAIL | 429 | no | 6792 | 2 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/landmark-unique, landmarks/no-duplicate-banner |
| https://georgia.gov/how-do-i-request-vital-records | https://georgia.gov/how-do-i-request-vital-records | FAIL | 429 | no | 8467 | 2 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/landmark-unique, landmarks/no-duplicate-banner |
| https://georgia.gov/motor-vehicle-reports | https://georgia.gov/motor-vehicle-reports | FAIL | 429 | no | 6802 | 2 | 0 | 0 | 1 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex |
| https://georgia.gov/public-service-commissioner-chuck-eaton | https://georgia.gov/public-service-commissioner-chuck-eaton | FAIL | 403 | no | 6574 | 2 | 0 | 0 | 2 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/no-duplicate-banner |
| https://georgia.gov/renewing-business | https://georgia.gov/renewing-business | FAIL | 403 | no | 6321 | 2 | 0 | 0 | 2 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: enough-time/meta-refresh, enough-time/meta-refresh-no-exception |
| https://georgia.gov/contacts/child-protective-services | https://georgia.gov/contacts/child-protective-services | OK | 200 | no | 7004 | 5 | 0 | 0 | 2 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/no-duplicate-banner |
| https://georgia.gov/contacts/customer-service | https://georgia.gov/contacts/customer-service | OK | 200 | no | 7083 | 5 | 0 | 0 | 2 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/no-duplicate-banner |
| https://georgia.gov/contacts/customer-service-0 | https://georgia.gov/contacts/customer-service-0 | FAIL | 429 | no | 6675 | 2 | 0 | 0 | 2 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/no-duplicate-banner |
| https://georgia.gov/contacts/customer-service-call-center | https://georgia.gov/contacts/customer-service-call-center | FAIL | 429 | no | 6582 | 2 | 0 | 0 | 2 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/no-duplicate-banner |
| https://georgia.gov/contacts/dcss-customer-service | https://georgia.gov/contacts/dcss-customer-service | FAIL | 429 | no | 6684 | 2 | 0 | 0 | 2 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/no-duplicate-banner |
| https://georgia.gov/contacts/department-administrative-services-contact | https://georgia.gov/contacts/department-administrative-services-contact | OK | 200 | no | 6874 | 2 | 0 | 0 | 2 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/no-duplicate-banner |
| https://georgia.gov/contacts/department-human-services | https://georgia.gov/contacts/department-human-services | FAIL | 429 | no | 6734 | 2 | 0 | 0 | 2 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/no-duplicate-banner |
| https://georgia.gov/contacts/department-human-services-division-family-and-children-services | https://georgia.gov/contacts/department-human-services-division-family-and-children-services | FAIL | 403 | no | 6527 | 2 | 0 | 0 | 2 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/no-duplicate-banner |
| https://georgia.gov/contacts/department-veterans-service | https://georgia.gov/contacts/department-veterans-service | OK | 200 | no | 6711 | 5 | 0 | 0 | 2 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: enough-time/meta-refresh, enough-time/meta-refresh-no-exception |
| https://georgia.gov/locations/department-administrative-services | https://georgia.gov/locations/department-administrative-services | OK | 200 | no | 7229 | 7 | 0 | 0 | 2 | 3 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/no-duplicate-banner |
| https://georgia.gov/locations/department-human-services-division-family-and-children-services-location | https://georgia.gov/locations/department-human-services-division-family-and-children-services-location | OK | 200 | no | 7188 | 7 | 0 | 0 | 2 | 3 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/no-duplicate-banner |
| https://georgia.gov/locations/georgia-department-driver-services-dds | https://georgia.gov/locations/georgia-department-driver-services-dds | OK | 200 | no | 7501 | 10 | 0 | 0 | 2 | 3 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/no-duplicate-banner |
| https://georgia.gov/locations/georgia-dhs-division-aging-services | https://georgia.gov/locations/georgia-dhs-division-aging-services | FAIL | 429 | no | 6845 | 2 | 0 | 0 | 2 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/no-duplicate-banner |
| https://georgia.gov/locations/georgia-dhs-division-aging-services-0 | https://georgia.gov/locations/georgia-dhs-division-aging-services-0 | FAIL | 429 | no | 6884 | 2 | 0 | 0 | 2 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/no-duplicate-banner |
| https://georgia.gov/locations/public-service-commission-location | https://georgia.gov/locations/public-service-commission-location | FAIL | 403 | no | 6739 | 2 | 0 | 0 | 2 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/no-duplicate-banner |
| https://georgia.gov/organization/department-administrative-services | https://georgia.gov/organization/department-administrative-services | FAIL | 429 | no | 6627 | 2 | 0 | 0 | 2 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, navigable/empty-heading |
| https://georgia.gov/organization/department-human-services | https://georgia.gov/organization/department-human-services | FAIL | 429 | no | 6611 | 2 | 0 | 0 | 2 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, navigable/empty-heading |
| https://georgia.gov/organization/department-human-services-division-family-and-children-services | https://georgia.gov/organization/department-human-services-division-family-and-children-services | FAIL | 403 | no | 6666 | 2 | 0 | 0 | 2 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, navigable/empty-heading |
| https://georgia.gov/organization/division-aging-services | https://georgia.gov/organization/division-aging-services | FAIL | 403 | no | 6631 | 2 | 0 | 0 | 2 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, navigable/empty-heading |
| https://georgia.gov/organization/georgia-department-driver-services | https://georgia.gov/organization/georgia-department-driver-services | FAIL | 429 | no | 6646 | 2 | 0 | 0 | 2 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, navigable/empty-heading |
| https://georgia.gov/organization/georgia-department-veterans-service | https://georgia.gov/organization/georgia-department-veterans-service | FAIL | 429 | no | 6924 | 4 | 0 | 0 | 2 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: empty-heading, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, navigable/empty-heading |
| https://georgia.gov/organization/governors-office-disability-services-ombudsman | https://georgia.gov/organization/governors-office-disability-services-ombudsman | FAIL | 429 | no | 6613 | 2 | 0 | 0 | 2 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, navigable/empty-heading |
| https://georgia.gov/organization/public-service-commission | https://georgia.gov/organization/public-service-commission | FAIL | 429 | no | 6817 | 2 | 0 | 0 | 2 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, navigable/empty-heading |
| https://georgia.gov/child-support | https://georgia.gov/child-support | FAIL | 429 | no | 6637 | 2 | 0 | 0 | 1 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex |
| https://georgia.gov/events/2024-09-16/first-day-request-absentee-ballots-december-runoff | https://georgia.gov/events/2024-09-16/first-day-request-absentee-ballots-december-runoff | FAIL | 429 | no | 8207 | 2 | 0 | 0 | 2 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/no-duplicate-banner |
| https://georgia.gov/events/2024-10-07/last-day-registered-voters-change-address | https://georgia.gov/events/2024-10-07/last-day-registered-voters-change-address | OK | 200 | no | 6669 | 2 | 0 | 0 | 2 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/no-duplicate-banner |
| https://georgia.gov/how-do-i-collect-child-support | https://georgia.gov/how-do-i-collect-child-support | FAIL | 403 | no | 6661 | 2 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/landmark-unique, landmarks/no-duplicate-banner |
| https://georgia.gov/how-do-i-get-support-my-child-special-needs | https://georgia.gov/how-do-i-get-support-my-child-special-needs | OK | 200 | no | 6880 | 2 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/landmark-unique, landmarks/no-duplicate-banner |
| https://georgia.gov/2022-calendario-electoral-intermedia | https://georgia.gov/2022-calendario-electoral-intermedia | FAIL | 429 | no | 6618 | 2 | 0 | 0 | 2 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/no-duplicate-banner |
| https://georgia.gov/abby-cox-0 | https://georgia.gov/abby-cox-0 | FAIL | 429 | no | 6705 | 2 | 0 | 0 | 2 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/no-duplicate-banner |
| https://georgia.gov/access-public-information | https://georgia.gov/access-public-information | FAIL | 429 | no | 6648 | 2 | 0 | 0 | 1 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex |
| https://georgia.gov/affordable-housing | https://georgia.gov/affordable-housing | FAIL | 429 | no | 6794 | 2 | 0 | 0 | 1 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex |
| https://georgia.gov/alicia-m-johnson | https://georgia.gov/alicia-m-johnson | OK | 200 | no | 6928 | 7 | 0 | 0 | 2 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/no-duplicate-banner |
| https://georgia.gov/barbara-rivera-holmes | https://georgia.gov/barbara-rivera-holmes | FAIL | 429 | no | 6782 | 2 | 0 | 0 | 2 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/no-duplicate-banner |
| https://georgia.gov/brad-raffensperger | https://georgia.gov/brad-raffensperger | FAIL | 429 | no | 6260 | 2 | 0 | 0 | 2 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: enough-time/meta-refresh, enough-time/meta-refresh-no-exception |
| https://georgia.gov/brian-kemp | https://georgia.gov/brian-kemp | OK | 200 | no | 6709 | 7 | 0 | 0 | 2 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: enough-time/meta-refresh, enough-time/meta-refresh-no-exception |
| https://georgia.gov/bulk-corporations-data | https://georgia.gov/bulk-corporations-data | OK | 200 | no | 6720 | 2 | 0 | 0 | 1 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex |
| https://georgia.gov/burt-jones | https://georgia.gov/burt-jones | FAIL | 403 | no | 6445 | 2 | 0 | 0 | 2 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/no-duplicate-banner |
| https://georgia.gov/business-taxes | https://georgia.gov/business-taxes | FAIL | 429 | no | 6647 | 2 | 0 | 0 | 1 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex |
| https://georgia.gov/call | https://georgia.gov/call | FAIL | 403 | no | 6604 | 2 | 0 | 0 | 2 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/no-duplicate-banner |
| https://georgia.gov/chat | https://georgia.gov/chat | FAIL | 429 | no | 6603 | 2 | 0 | 0 | 1 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex |
| https://georgia.gov/child-care | https://georgia.gov/child-care | FAIL | 403 | no | 6723 | 2 | 0 | 0 | 1 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex |
| https://georgia.gov/children-and-parenting | https://georgia.gov/children-and-parenting | FAIL | 429 | no | 6795 | 2 | 0 | 0 | 1 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex |

## Detailed Failure Information (ALFA)

## Detailed Failure Information (axe)

### https://georgia.gov/how-do-i-find-equity-and-accessibility-resources-consumer-services

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="header" class="header__wrapper header__wrapper--www" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="header" class="header__wrapper header__wrapper--www" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__title">           That Text Is Not From Us        </p>`
- XPath: `.alert__title`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__body">We'll never request payment or info through unsolicited text</p>`
- XPath: `.alert__body`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Did you find what you were looking for on this page?</h2>`
- XPath: `#upper-feedback-content > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-yes-button-33466">Yes</label>`
- XPath: `label[for="feedback-yes-button-33466"]`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-no-button-33466">No</label>`
- XPath: `label[for="feedback-no-button-33466"]`

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<div id="ivy-bot" tabindex="2" role="button" aria-label="Open chat" aria-expanded="false" aria-disabled="false" class="ivy-circle ivy-intro..." style="background-color: rg...">`
- XPath: `#ivy-bot`

### https://georgia.gov/how-do-i-find-equity-and-accessibility-resources-disability-services

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="header" class="header__wrapper header__wrapper--www" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="header" class="header__wrapper header__wrapper--www" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__title">           That Text Is Not From Us        </p>`
- XPath: `.alert__title`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__body">We'll never request payment or info through unsolicited text</p>`
- XPath: `.alert__body`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Did you find what you were looking for on this page?</h2>`
- XPath: `#upper-feedback-content > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-yes-button-33486">Yes</label>`
- XPath: `label[for="feedback-yes-button-33486"]`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-no-button-33486">No</label>`
- XPath: `label[for="feedback-no-button-33486"]`

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<div id="ivy-bot" tabindex="2" role="button" aria-label="Open chat" aria-expanded="false" aria-disabled="false" class="ivy-circle ivy-intro..." style="background-color: rg...">`
- XPath: `#ivy-bot`

### https://georgia.gov/how-do-i-find-equity-and-accessibility-resources-veterans-services

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="header" class="header__wrapper header__wrapper--www" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="header" class="header__wrapper header__wrapper--www" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__title">           That Text Is Not From Us        </p>`
- XPath: `.alert__title`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__body">We'll never request payment or info through unsolicited text</p>`
- XPath: `.alert__body`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Did you find what you were looking for on this page?</h2>`
- XPath: `#upper-feedback-content > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-yes-button-33506">Yes</label>`
- XPath: `label[for="feedback-yes-button-33506"]`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-no-button-33506">No</label>`
- XPath: `label[for="feedback-no-button-33506"]`

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<div id="ivy-bot" tabindex="2" role="button" aria-label="Open chat" aria-expanded="false" aria-disabled="false" class="ivy-circle ivy-intro..." style="background-color: rg...">`
- XPath: `#ivy-bot`

### https://georgia.gov/how-do-i-find-aging-equity-and-accessibility-resources

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="header" class="header__wrapper header__wrapper--www" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="header" class="header__wrapper header__wrapper--www" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__title">           That Text Is Not From Us        </p>`
- XPath: `.alert__title`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__body">We'll never request payment or info through unsolicited text</p>`
- XPath: `.alert__body`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Did you find what you were looking for on this page?</h2>`
- XPath: `#upper-feedback-content > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-yes-button-33306">Yes</label>`
- XPath: `label[for="feedback-yes-button-33306"]`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-no-button-33306">No</label>`
- XPath: `label[for="feedback-no-button-33306"]`

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<div id="ivy-bot" tabindex="2" role="button" aria-label="Open chat" aria-expanded="false" aria-disabled="false" class="ivy-circle ivy-intro..." style="background-color: rg...">`
- XPath: `#ivy-bot`

### https://georgia.gov/how-do-i-find-equity-and-accessibility-resources-assistance-programs

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="header" class="header__wrapper header__wrapper--www" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="header" class="header__wrapper header__wrapper--www" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__title">           That Text Is Not From Us        </p>`
- XPath: `.alert__title`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__body">We'll never request payment or info through unsolicited text</p>`
- XPath: `.alert__body`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Did you find what you were looking for on this page?</h2>`
- XPath: `#upper-feedback-content > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-yes-button-33346">Yes</label>`
- XPath: `label[for="feedback-yes-button-33346"]`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-no-button-33346">No</label>`
- XPath: `label[for="feedback-no-button-33346"]`

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<div id="ivy-bot" tabindex="2" role="button" aria-label="Open chat" aria-expanded="false" aria-disabled="false" class="ivy-circle ivy-intro..." style="background-color: rg...">`
- XPath: `#ivy-bot`

### https://georgia.gov/how-do-i-find-equity-and-accessibility-resources-children-and-parenting

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

### https://georgia.gov/how-do-i-find-equity-and-accessibility-resources-courts-and-corrections

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

### https://georgia.gov/how-do-i-find-equity-and-accessibility-resources-education-and-teaching

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

### https://georgia.gov/

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

### https://georgia.gov/accessibility

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

### https://georgia.gov/contacts/child-support-services

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

### https://georgia.gov/organization/georgia-department-human-services-division-child-support-services

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: Headings should not be empty
- HTML: `<h2 class="organization-summary__title"></h2>`
- XPath: `.organization-summary__title`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__title">           That Text Is Not From Us        </p>`
- XPath: `.alert__title`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__body">We'll never request payment or info through unsolicited text</p>`
- XPath: `.alert__body`

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<div id="ivy-bot" tabindex="2" role="button" aria-label="Open chat" aria-expanded="false" aria-disabled="false" class="ivy-circle ivy-intro..." style="background-color: rg...">`
- XPath: `#ivy-bot`

### https://georgia.gov/find-a-job-in-georgia

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__title">           That Text Is Not From Us        </p>`
- XPath: `.alert__title`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__body">We'll never request payment or info through unsolicited text</p>`
- XPath: `.alert__body`

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<div id="ivy-bot" tabindex="2" role="button" aria-label="Open chat" aria-expanded="false" aria-disabled="false" class="ivy-circle ivy-intro..." style="background-color: rg...">`
- XPath: `#ivy-bot`

### https://georgia.gov/how-do-i-find-job-georgia

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="header" class="header__wrapper header__wrapper--www" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="header" class="header__wrapper header__wrapper--www" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__title">           That Text Is Not From Us        </p>`
- XPath: `.alert__title`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__body">We'll never request payment or info through unsolicited text</p>`
- XPath: `.alert__body`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Did you find what you were looking for on this page?</h2>`
- XPath: `#upper-feedback-content > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-yes-button-29106">Yes</label>`
- XPath: `label[for="feedback-yes-button-29106"]`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-no-button-29106">No</label>`
- XPath: `label[for="feedback-no-button-29106"]`

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<div id="ivy-bot" tabindex="2" role="button" aria-label="Open chat" aria-expanded="false" aria-disabled="false" class="ivy-circle ivy-intro..." style="background-color: rg...">`
- XPath: `#ivy-bot`

### https://georgia.gov/locations/12000-findley-rd-ste-400

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

### https://georgia.gov/aging-services

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

### https://georgia.gov/disability-services

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

### https://georgia.gov/faqs-motor-vehicle-reports

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__title">           That Text Is Not From Us        </p>`
- XPath: `.alert__title`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__body">We'll never request payment or info through unsolicited text</p>`
- XPath: `.alert__body`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Did you find what you were looking for on this page?</h2>`
- XPath: `#upper-feedback-content > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-yes-button-32551">Yes</label>`
- XPath: `label[for="feedback-yes-button-32551"]`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-no-button-32551">No</label>`
- XPath: `label[for="feedback-no-button-32551"]`

*... and 1 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<div id="ivy-bot" tabindex="2" role="button" aria-label="Open chat" aria-expanded="false" aria-disabled="false" class="ivy-circle ivy-intro..." style="background-color: rg...">`
- XPath: `#ivy-bot`

### https://georgia.gov/how-do-i-apply-childcare-and-parent-services-caps-program

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

### https://georgia.gov/how-do-i-apply-drivers-license

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

### https://georgia.gov/how-do-i-apply-exemption-window-tint-law

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

### https://georgia.gov/how-do-i-apply-georgia-dream-homeownership-program

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="header" class="header__wrapper header__wrapper--www" data-drupal-selector="site-header" role="banner" data-info-expanded="false">`
- XPath: `#header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="header" class="header__wrapper header__wrapper--www" data-drupal-selector="site-header" role="banner" data-info-expanded="false">`
- XPath: `#header`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav class="how-do-i-step-links accordion-wrapper" aria-label="How Do I Steps">`
- XPath: `.content-page__mobile > .how-do-i-step-links.accordion-wrapper[aria-label="How Do I Steps"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__title">           That Text Is Not From Us        </p>`
- XPath: `.alert__title`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__body">We'll never request payment or info through unsolicited text</p>`
- XPath: `.alert__body`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Did you find what you were looking for on this page?</h2>`
- XPath: `#upper-feedback-content > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-yes-button-30281">Yes</label>`
- XPath: `label[for="feedback-yes-button-30281"]`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-no-button-30281">No</label>`
- XPath: `label[for="feedback-no-button-30281"]`

*... and 1 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<div id="ivy-bot" tabindex="2" role="button" aria-label="Open chat" aria-expanded="false" aria-disabled="false" class="ivy-circle ivy-intro..." style="background-color: rg...">`
- XPath: `#ivy-bot`

### https://georgia.gov/how-do-i-apply-housing-choice-voucher-program

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

### https://georgia.gov/how-do-i-apply-independent-care-waiver-program-icwp

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

### https://georgia.gov/how-do-i-apply-medicaid

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

### https://georgia.gov/how-do-i-apply-my-georgia-drivers-license

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

### https://georgia.gov/how-do-i-apply-snap

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

### https://georgia.gov/how-do-i-apply-state-id-card

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

### https://georgia.gov/how-do-i-apply-tanf

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

### https://georgia.gov/how-do-i-apply-weapons-carry-license-wcl

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="header" class="header__wrapper header__wrapper--www" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="header" class="header__wrapper header__wrapper--www" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__title">           That Text Is Not From Us        </p>`
- XPath: `.alert__title`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__body">We'll never request payment or info through unsolicited text</p>`
- XPath: `.alert__body`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Did you find what you were looking for on this page?</h2>`
- XPath: `#upper-feedback-content > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-yes-button-27746">Yes</label>`
- XPath: `label[for="feedback-yes-button-27746"]`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-no-button-27746">No</label>`
- XPath: `label[for="feedback-no-button-27746"]`

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<div id="ivy-bot" tabindex="2" role="button" aria-label="Open chat" aria-expanded="false" aria-disabled="false" class="ivy-circle ivy-intro..." style="background-color: rg...">`
- XPath: `#ivy-bot`

### https://georgia.gov/how-do-i-get-or-renew-professional-certification-or-license

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

### https://georgia.gov/how-do-i-pay-estimated-tax

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="header" class="header__wrapper header__wrapper--www" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="header" class="header__wrapper header__wrapper--www" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__title">           That Text Is Not From Us        </p>`
- XPath: `.alert__title`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__body">We'll never request payment or info through unsolicited text</p>`
- XPath: `.alert__body`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Did you find what you were looking for on this page?</h2>`
- XPath: `#upper-feedback-content > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-yes-button-28961">Yes</label>`
- XPath: `label[for="feedback-yes-button-28961"]`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-no-button-28961">No</label>`
- XPath: `label[for="feedback-no-button-28961"]`

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<div id="ivy-bot" tabindex="2" role="button" aria-label="Open chat" aria-expanded="false" aria-disabled="false" class="ivy-circle ivy-intro..." style="background-color: rg...">`
- XPath: `#ivy-bot`

### https://georgia.gov/how-do-i-pay-traffic-ticket

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

### https://georgia.gov/how-do-i-register-boat

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

### https://georgia.gov/how-do-i-register-business-dol

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

### https://georgia.gov/how-do-i-register-business-dor

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

### https://georgia.gov/how-do-i-register-corporation

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

### https://georgia.gov/how-do-i-register-llc

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="header" class="header__wrapper header__wrapper--www" data-drupal-selector="site-header" role="banner" data-info-expanded="false">`
- XPath: `#header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="header" class="header__wrapper header__wrapper--www" data-drupal-selector="site-header" role="banner" data-info-expanded="false">`
- XPath: `#header`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav class="how-do-i-step-links accordion-wrapper" aria-label="How Do I Steps">`
- XPath: `.content-page__mobile > .how-do-i-step-links.accordion-wrapper[aria-label="How Do I Steps"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__title">           That Text Is Not From Us        </p>`
- XPath: `.alert__title`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__body">We'll never request payment or info through unsolicited text</p>`
- XPath: `.alert__body`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Did you find what you were looking for on this page?</h2>`
- XPath: `#upper-feedback-content > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-yes-button-20256">Yes</label>`
- XPath: `label[for="feedback-yes-button-20256"]`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-no-button-20256">No</label>`
- XPath: `label[for="feedback-no-button-20256"]`

*... and 1 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<div id="ivy-bot" tabindex="2" role="button" aria-label="Open chat" aria-expanded="false" aria-disabled="false" class="ivy-circle ivy-intro..." style="background-color: rg...">`
- XPath: `#ivy-bot`

### https://georgia.gov/how-do-i-register-lp-hdi

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

### https://georgia.gov/how-do-i-register-vehicle

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="header" class="header__wrapper header__wrapper--www" data-drupal-selector="site-header" role="banner" data-info-expanded="false">`
- XPath: `#header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="header" class="header__wrapper header__wrapper--www" data-drupal-selector="site-header" role="banner" data-info-expanded="false">`
- XPath: `#header`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav class="how-do-i-step-links accordion-wrapper" aria-label="How Do I Steps">`
- XPath: `.content-page__mobile > .how-do-i-step-links.accordion-wrapper[aria-label="How Do I Steps"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__title">           That Text Is Not From Us        </p>`
- XPath: `.alert__title`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__body">We'll never request payment or info through unsolicited text</p>`
- XPath: `.alert__body`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Did you find what you were looking for on this page?</h2>`
- XPath: `#upper-feedback-content > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-yes-button-20536">Yes</label>`
- XPath: `label[for="feedback-yes-button-20536"]`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-no-button-20536">No</label>`
- XPath: `label[for="feedback-no-button-20536"]`

*... and 1 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<div id="ivy-bot" tabindex="2" role="button" aria-label="Open chat" aria-expanded="false" aria-disabled="false" class="ivy-circle ivy-intro..." style="background-color: rg...">`
- XPath: `#ivy-bot`

### https://georgia.gov/how-do-i-register-vote

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

### https://georgia.gov/how-do-i-renew-boat-registration

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

### https://georgia.gov/how-do-i-renew-corporation

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="header" class="header__wrapper header__wrapper--www" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="header" class="header__wrapper header__wrapper--www" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__title">           That Text Is Not From Us        </p>`
- XPath: `.alert__title`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__body">We'll never request payment or info through unsolicited text</p>`
- XPath: `.alert__body`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Did you find what you were looking for on this page?</h2>`
- XPath: `#upper-feedback-content > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-yes-button-29271">Yes</label>`
- XPath: `label[for="feedback-yes-button-29271"]`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-no-button-29271">No</label>`
- XPath: `label[for="feedback-no-button-29271"]`

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<div id="ivy-bot" tabindex="2" role="button" aria-label="Open chat" aria-expanded="false" aria-disabled="false" class="ivy-circle ivy-intro..." style="background-color: rg...">`
- XPath: `#ivy-bot`

### https://georgia.gov/how-do-i-renew-drivers-license

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="header" class="header__wrapper header__wrapper--www" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="header" class="header__wrapper header__wrapper--www" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__title">           That Text Is Not From Us        </p>`
- XPath: `.alert__title`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__body">We'll never request payment or info through unsolicited text</p>`
- XPath: `.alert__body`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Did you find what you were looking for on this page?</h2>`
- XPath: `#upper-feedback-content > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-yes-button-20696">Yes</label>`
- XPath: `label[for="feedback-yes-button-20696"]`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-no-button-20696">No</label>`
- XPath: `label[for="feedback-no-button-20696"]`

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<div id="ivy-bot" tabindex="2" role="button" aria-label="Open chat" aria-expanded="false" aria-disabled="false" class="ivy-circle ivy-intro..." style="background-color: rg...">`
- XPath: `#ivy-bot`

### https://georgia.gov/how-do-i-renew-limited-partnership-lp

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

### https://georgia.gov/how-do-i-renew-my-llc

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

### https://georgia.gov/how-do-i-renew-my-medicaid-benefits

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

### https://georgia.gov/how-do-i-renew-my-snap-benefits

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

### https://georgia.gov/how-do-i-renew-my-vehicle-registration

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="header" class="header__wrapper header__wrapper--www" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="header" class="header__wrapper header__wrapper--www" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__title">           That Text Is Not From Us        </p>`
- XPath: `.alert__title`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__body">We'll never request payment or info through unsolicited text</p>`
- XPath: `.alert__body`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Did you find what you were looking for on this page?</h2>`
- XPath: `#upper-feedback-content > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-yes-button-20561">Yes</label>`
- XPath: `label[for="feedback-yes-button-20561"]`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-no-button-20561">No</label>`
- XPath: `label[for="feedback-no-button-20561"]`

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<div id="ivy-bot" tabindex="2" role="button" aria-label="Open chat" aria-expanded="false" aria-disabled="false" class="ivy-circle ivy-intro..." style="background-color: rg...">`
- XPath: `#ivy-bot`

### https://georgia.gov/how-do-i-report-elder-abuse

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

### https://georgia.gov/how-do-i-request-and-vote-absentee-ballot

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

### https://georgia.gov/how-do-i-request-copy-my-immunization-records

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

### https://georgia.gov/how-do-i-request-criminal-background-check

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

### https://georgia.gov/how-do-i-request-vital-records

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

### https://georgia.gov/motor-vehicle-reports

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

### https://georgia.gov/public-service-commissioner-chuck-eaton

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

### https://georgia.gov/renewing-business

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

### https://georgia.gov/contacts/child-protective-services

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="header" class="header__wrapper header__wrapper--www" data-drupal-selector="site-header" role="banner" data-info-expanded="false">`
- XPath: `#header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="header" class="header__wrapper header__wrapper--www" data-drupal-selector="site-header" role="banner" data-info-expanded="false">`
- XPath: `#header`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__title">           That Text Is Not From Us        </p>`
- XPath: `.alert__title`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__body">We'll never request payment or info through unsolicited text</p>`
- XPath: `.alert__body`

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<div id="ivy-bot" tabindex="2" role="button" aria-label="Open chat" aria-expanded="false" aria-disabled="false" class="ivy-circle ivy-intro..." style="background-color: rg...">`
- XPath: `#ivy-bot`

### https://georgia.gov/contacts/customer-service

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="header" class="header__wrapper header__wrapper--www" data-drupal-selector="site-header" role="banner" data-info-expanded="false">`
- XPath: `#header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="header" class="header__wrapper header__wrapper--www" data-drupal-selector="site-header" role="banner" data-info-expanded="false">`
- XPath: `#header`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__title">           That Text Is Not From Us        </p>`
- XPath: `.alert__title`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__body">We'll never request payment or info through unsolicited text</p>`
- XPath: `.alert__body`

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<div id="ivy-bot" tabindex="2" role="button" aria-label="Open chat" aria-expanded="false" aria-disabled="false" class="ivy-circle ivy-intro..." style="background-color: rg...">`
- XPath: `#ivy-bot`

### https://georgia.gov/contacts/customer-service-0

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

### https://georgia.gov/contacts/customer-service-call-center

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

### https://georgia.gov/contacts/dcss-customer-service

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

### https://georgia.gov/contacts/department-administrative-services-contact

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

### https://georgia.gov/contacts/department-human-services

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

### https://georgia.gov/contacts/department-human-services-division-family-and-children-services

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

### https://georgia.gov/contacts/department-veterans-service

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="header" class="header__wrapper header__wrapper--www" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="header" class="header__wrapper header__wrapper--www" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__title">           That Text Is Not From Us        </p>`
- XPath: `.alert__title`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__body">We'll never request payment or info through unsolicited text</p>`
- XPath: `.alert__body`

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<div id="ivy-bot" tabindex="2" role="button" aria-label="Open chat" aria-expanded="false" aria-disabled="false" class="ivy-circle ivy-intro..." style="background-color: rg...">`
- XPath: `#ivy-bot`

### https://georgia.gov/locations/department-administrative-services

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="header" class="header__wrapper header__wrapper--www" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="header" class="header__wrapper header__wrapper--www" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__title">           That Text Is Not From Us        </p>`
- XPath: `.alert__title`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__body">We'll never request payment or info through unsolicited text</p>`
- XPath: `.alert__body`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<div>`
- XPath: `iframe`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="full-location-teaser__info">`
- XPath: `.full-location-teaser__info`

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<div id="ivy-bot" tabindex="2" role="button" aria-label="Open chat" aria-expanded="false" aria-disabled="false" class="ivy-circle ivy-intro..." style="background-color: rg...">`
- XPath: `#ivy-bot`

### https://georgia.gov/locations/department-human-services-division-family-and-children-services-location

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="header" class="header__wrapper header__wrapper--www" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="header" class="header__wrapper header__wrapper--www" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__title">           That Text Is Not From Us        </p>`
- XPath: `.alert__title`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__body">We'll never request payment or info through unsolicited text</p>`
- XPath: `.alert__body`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<div>`
- XPath: `iframe`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="full-location-teaser__info">`
- XPath: `.full-location-teaser__info`

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<div id="ivy-bot" tabindex="2" role="button" aria-label="Open chat" aria-expanded="false" aria-disabled="false" class="ivy-circle ivy-intro..." style="background-color: rg...">`
- XPath: `#ivy-bot`

### https://georgia.gov/locations/georgia-department-driver-services-dds

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="header" class="header__wrapper header__wrapper--www" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="header" class="header__wrapper header__wrapper--www" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__title">           That Text Is Not From Us        </p>`
- XPath: `.alert__title`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__body">We'll never request payment or info through unsolicited text</p>`
- XPath: `.alert__body`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<div>`
- XPath: `iframe`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="full-location-teaser__address">`
- XPath: `.full-location-teaser__address`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="visually-hidden">Hours</div>`
- XPath: `details > .visually-hidden`

*... and 2 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<div id="ivy-bot" tabindex="2" role="button" aria-label="Open chat" aria-expanded="false" aria-disabled="false" class="ivy-circle ivy-intro..." style="background-color: rg...">`
- XPath: `#ivy-bot`

### https://georgia.gov/locations/georgia-dhs-division-aging-services

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

### https://georgia.gov/locations/georgia-dhs-division-aging-services-0

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

### https://georgia.gov/locations/public-service-commission-location

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

### https://georgia.gov/organization/department-administrative-services

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

### https://georgia.gov/organization/department-human-services

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

### https://georgia.gov/organization/department-human-services-division-family-and-children-services

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

### https://georgia.gov/organization/division-aging-services

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

### https://georgia.gov/organization/georgia-department-driver-services

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

### https://georgia.gov/organization/georgia-department-veterans-service

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: Headings should not be empty
- HTML: `<h2 class="organization-summary__title"></h2>`
- XPath: `.organization-summary__title`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__title">           That Text Is Not From Us        </p>`
- XPath: `.alert__title`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__body">We'll never request payment or info through unsolicited text</p>`
- XPath: `.alert__body`

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<div id="ivy-bot" tabindex="2" role="button" aria-label="Open chat" aria-expanded="false" aria-disabled="false" class="ivy-circle ivy-intro..." style="background-color: rg...">`
- XPath: `#ivy-bot`

### https://georgia.gov/organization/governors-office-disability-services-ombudsman

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

### https://georgia.gov/organization/public-service-commission

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

### https://georgia.gov/child-support

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

### https://georgia.gov/events/2024-09-16/first-day-request-absentee-ballots-december-runoff

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

### https://georgia.gov/events/2024-10-07/last-day-registered-voters-change-address

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

### https://georgia.gov/how-do-i-collect-child-support

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

### https://georgia.gov/how-do-i-get-support-my-child-special-needs

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

### https://georgia.gov/2022-calendario-electoral-intermedia

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

### https://georgia.gov/abby-cox-0

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

### https://georgia.gov/access-public-information

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

### https://georgia.gov/affordable-housing

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

### https://georgia.gov/alicia-m-johnson

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="header" class="header__wrapper header__wrapper--www" data-drupal-selector="site-header" role="banner" data-info-expanded="false">`
- XPath: `#header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="header" class="header__wrapper header__wrapper--www" data-drupal-selector="site-header" role="banner" data-info-expanded="false">`
- XPath: `#header`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__title">           That Text Is Not From Us        </p>`
- XPath: `.alert__title`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__body">We'll never request payment or info through unsolicited text</p>`
- XPath: `.alert__body`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="bio-top__data--image">`
- XPath: `.bio-top__data--image`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="bio-top__teaser">`
- XPath: `.bio-top__teaser`

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<div id="ivy-bot" tabindex="2" role="button" aria-label="Open chat" aria-expanded="false" aria-disabled="false" class="ivy-circle ivy-intro..." style="background-color: rg...">`
- XPath: `#ivy-bot`

### https://georgia.gov/barbara-rivera-holmes

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

### https://georgia.gov/brad-raffensperger

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

### https://georgia.gov/brian-kemp

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="header" class="header__wrapper header__wrapper--www" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="header" class="header__wrapper header__wrapper--www" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__title">           That Text Is Not From Us        </p>`
- XPath: `.alert__title`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__body">We'll never request payment or info through unsolicited text</p>`
- XPath: `.alert__body`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="bio-top__data--image">                             <img loading="lazy" src="/sites/georgia.gov/files/styles/square/public/2023-01/governors-cropped.jpg?h=0e403d73&amp;itok=_tNswLTn" width="1000" height="1000" alt="Governor Brian P Kemp Official Headshot">               </div>`
- XPath: `.bio-top__data--image`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="bio-top__teaser">`
- XPath: `.bio-top__teaser`

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<div id="ivy-bot" tabindex="2" role="button" aria-label="Open chat" aria-expanded="false" aria-disabled="false" class="ivy-circle ivy-intro..." style="background-color: rg...">`
- XPath: `#ivy-bot`

### https://georgia.gov/bulk-corporations-data

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

### https://georgia.gov/burt-jones

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

### https://georgia.gov/business-taxes

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

### https://georgia.gov/call

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

### https://georgia.gov/chat

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

### https://georgia.gov/child-care

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

### https://georgia.gov/children-and-parenting

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

