# Scan Report: DGS digital.georgia.gov

- Issue: https://github.com/mgifford/open-scans/issues/136
- Submitted by: mgifford
- Scanned at: 2026-03-13T13:54:07.101Z
- Engines used: AXE, QUALWEB
- Scan duration: 9.2 minutes
- Total URLs submitted: 100
- Accepted public URLs: 100
- Rejected URLs: 0
- 🌙 Dark mode: None of the scanned URLs support `prefers-color-scheme: dark`
- ALFA outcomes: 0 passed, 0 failed, 0 cantTell, 0 inapplicable
- axe outcomes: 68465 passed, 577 failed, 340 cantTell, 4460 inapplicable
- Equal Access outcomes: 0 passed, 0 failed (0 unique, 0 duplicate), 0 cantTell, 0 inapplicable
- AccessLint outcomes: 0 passed, 0 failed (0 unique, 0 duplicate), 0 cantTell, 0 inapplicable
- QualWeb outcomes: 35342 passed, 35 failed, 13408 cantTell, 100 inapplicable
- Duplicate findings caught by later scanners: 18

## 🎯 Priority: Pages with Most Errors

Focus your efforts on these pages to make the biggest impact (combined scanner unique failures):

| Page | axe Unique | QualWeb | Total Unique | Page Title |
|---|---:|---:|---:|---|
| [View Page](https://digital.georgia.gov/resources) | 12 | 3 | **15** | Resources \| Digital Services &amp; Solutions |
| [View Page](https://digital.georgia.gov/blog-post/2016-05-03/accessibility-solutions) | 12 | 0 | **12** | Accessibility Solutions \| Digital Services &amp; Solutions |
| [View Page](https://digital.georgia.gov/blog-post/2025-05-09/help-users-find-their-way) | 11 | 0 | **11** | Help Users Find Their Way \| Digital Services &amp; Solutions |
| [View Page](https://digital.georgia.gov/blog-post/2014-10-28/web-accessibility-importance) | 11 | 0 | **11** | Web Accessibility Importance \| Digital Services &amp; Solutions |
| [View Page](https://digital.georgia.gov/blog-post/2014-12-17/accessibility-tools) | 11 | 0 | **11** | Accessibility Tools \| Digital Services &amp; Solutions |
| [View Page](https://digital.georgia.gov/blog-post/2015-01-13/rewriting-our-accessibility-statement) | 11 | 0 | **11** | Rewriting Our Accessibility Statement \| Digital Services &amp; Solutions |
| [View Page](https://digital.georgia.gov/blog-post/2015-02-02/growing-impact-and-importance-web-accessibility) | 11 | 0 | **11** | The Growing Impact and Importance of Web Accessibility \| Digital Services &amp; Solutions |
| [View Page](https://digital.georgia.gov/blog-post/2015-03-25/accessibility-impact-importance) | 11 | 0 | **11** | Accessibility: Impact &amp; Importance \| Digital Services &amp; Solutions |
| [View Page](https://digital.georgia.gov/blog-post/2015-05-12/accessible-multimedia-providing-greater-accessibility-all) | 11 | 0 | **11** | Accessible Multimedia: Providing Greater Accessibility for All \| Digital Services &amp; Solutions |
| [View Page](https://digital.georgia.gov/blog-post/2016-09-20/why-we-care-about-web-accessibility) | 11 | 0 | **11** | Why We Care About Web Accessibility \| Digital Services &amp; Solutions |

## 🔧 Priority: Most Common Issues (ALFA)

These ALFA accessibility issues appear most frequently across your pages:

✅ No ALFA failed rules detected!

## 🔧 Priority: Most Common Issues (axe)

These axe accessibility issues appear most frequently across your pages:

| Rule | Pages Affected | Documentation |
|---|---:|---|
| region | **87** of 100 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/region) |
| landmark-no-duplicate-banner | **74** of 100 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/landmark-no-duplicate-banner) |
| landmark-unique | **74** of 100 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/landmark-unique) |
| aria-prohibited-attr | **18** of 100 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/aria-prohibited-attr) |
| heading-order | **14** of 100 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/heading-order) |
| button-name | **1** of 100 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/button-name) |
| image-redundant-alt | **1** of 100 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/image-redundant-alt) |
| frame-title | **1** of 100 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/frame-title) |
| list | **1** of 100 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/list) |

> 💡 **Tip**: Click on the rule documentation links to learn how to fix each issue. Consider fixing the most common issues first for maximum impact.

> 🤖 **Future Enhancement**: This report will soon include AI-powered fix suggestions for authenticated GitHub users (opt-in only, no auto-run AI).

## 🔍 Cross-Page Patterns: Common HTML Issues

These HTML patterns cause the same accessibility errors across multiple pages. **Fix the pattern once in your codebase to fix it everywhere!**

### 🎯 Top Patterns to Fix (Highest Impact)

#### Pattern 1: Affects 74 page(s) - 74 occurrence(s)

**Scanner**: axe
**Rule**: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate
**Issue**: Document should not have more than one banner landmark

**HTML Pattern**:
```html
<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">
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
- https://digital.georgia.gov/services/accessibility-auditing
- https://digital.georgia.gov/resources/digital-accessibility-compliance/how-do-i-compliance-checklist
- https://digital.georgia.gov/blog-post/2025-05-09/help-users-find-their-way
- https://digital.georgia.gov/12-digital-accessibility-standards
- https://digital.georgia.gov/5-using-accessibility-checker
- *...and 69 more page(s)*

---

#### Pattern 2: Affects 74 page(s) - 74 occurrence(s)

**Scanner**: axe
**Rule**: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate
**Issue**: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

**HTML Pattern**:
```html
<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">
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
- https://digital.georgia.gov/services/accessibility-auditing
- https://digital.georgia.gov/resources/digital-accessibility-compliance/how-do-i-compliance-checklist
- https://digital.georgia.gov/blog-post/2025-05-09/help-users-find-their-way
- https://digital.georgia.gov/12-digital-accessibility-standards
- https://digital.georgia.gov/5-using-accessibility-checker
- *...and 69 more page(s)*

---

#### Pattern 3: Affects 72 page(s) - 72 occurrence(s)

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
- https://digital.georgia.gov/services/accessibility-auditing
- https://digital.georgia.gov/help-us-help-you-find-information-faster
- https://digital.georgia.gov/resources/digital-accessibility-compliance/document-remediation
- https://digital.georgia.gov/resources/digital-accessibility-compliance/how-do-i-compliance-checklist
- https://digital.georgia.gov/resources/digital-accessibility-compliance/leadership-key-points
- *...and 67 more page(s)*

---

#### Pattern 4: Affects 25 page(s) - 25 occurrence(s)

**Scanner**: axe
**Rule**: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate
**Issue**: All page content should be contained by landmarks

**HTML Pattern**:
```html
<span>Back to top</span>
```

**XPath** (use in browser DevTools):
```
.content-page__desktop > .accordion-wrapper > .link-collection-layout-wrapper.book--link-collection.contextual-region > .back-to-top > span
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.content-page__desktop > .accordion-wrapper > .link-collection-layout-wrapper.book--link-collection.contextual-region > .back-to-top > span')`
5. The element will be highlighted

**Affected Pages**:
- https://digital.georgia.gov/12-digital-accessibility-standards
- https://digital.georgia.gov/5-using-accessibility-checker
- https://digital.georgia.gov/how-does-your-audience-find-you
- https://digital.georgia.gov/resources/tools/content-tools/content-strategy-playbook
- https://digital.georgia.gov/46-social-bookmarking-eg-pinterest
- *...and 20 more page(s)*

---

#### Pattern 5: Affects 12 page(s) - 12 occurrence(s)

**Scanner**: axe
**Rule**: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate
**Issue**: All page content should be contained by landmarks

**HTML Pattern**:
```html
<h2 class="related-news__title">Related news</h2>
```

**XPath** (use in browser DevTools):
```
.related-news__title
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.related-news__title')`
5. The element will be highlighted

**Affected Pages**:
- https://digital.georgia.gov/blog-post/2025-05-09/help-users-find-their-way
- https://digital.georgia.gov/blog-post/2014-10-28/web-accessibility-importance
- https://digital.georgia.gov/blog-post/2014-12-17/accessibility-tools
- https://digital.georgia.gov/blog-post/2015-01-13/rewriting-our-accessibility-statement
- https://digital.georgia.gov/blog-post/2015-02-02/growing-impact-and-importance-web-accessibility
- *...and 7 more page(s)*

---

#### Pattern 6: Affects 11 page(s) - 12 occurrence(s)

**Scanner**: axe
**Rule**: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate
**Issue**: All page content should be contained by landmarks

**HTML Pattern**:
```html
<span class="global-teaser__content">
```

**XPath** (use in browser DevTools):
```
.contextual-region.global-teaser__wrapper:nth-child(2) > .global-teaser.global-teaser--has-icon.global-teaser--no-image > .global-teaser__content
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.contextual-region.global-teaser__wrapper:nth-child(2) > .global-teaser.global-teaser--has-icon.global-teaser--no-image > .global-teaser__content')`
5. The element will be highlighted

**Affected Pages**:
- https://digital.georgia.gov/blog-post/2014-10-28/web-accessibility-importance
- https://digital.georgia.gov/blog-post/2014-12-17/accessibility-tools
- https://digital.georgia.gov/blog-post/2015-01-13/rewriting-our-accessibility-statement
- https://digital.georgia.gov/blog-post/2015-02-02/growing-impact-and-importance-web-accessibility
- https://digital.georgia.gov/blog-post/2015-03-25/accessibility-impact-importance
- *...and 6 more page(s)*

---

#### Pattern 7: Affects 11 page(s) - 11 occurrence(s)

**Scanner**: axe
**Rule**: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate
**Issue**: All page content should be contained by landmarks

**HTML Pattern**:
```html
<div class="authored-by__author-summary">
```

**XPath** (use in browser DevTools):
```
.authored-by__author-summary
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.authored-by__author-summary')`
5. The element will be highlighted

**Affected Pages**:
- https://digital.georgia.gov/blog-post/2025-05-09/help-users-find-their-way
- https://digital.georgia.gov/blog-post/2014-10-28/web-accessibility-importance
- https://digital.georgia.gov/blog-post/2014-12-17/accessibility-tools
- https://digital.georgia.gov/blog-post/2015-01-13/rewriting-our-accessibility-statement
- https://digital.georgia.gov/blog-post/2015-02-02/growing-impact-and-importance-web-accessibility
- *...and 6 more page(s)*

---

#### Pattern 8: Affects 10 page(s) - 10 occurrence(s)

**Scanner**: axe
**Rule**: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate
**Issue**: All page content should be contained by landmarks

**HTML Pattern**:
```html
<span class="global-teaser__content">
            <h2 class="global-teaser__title">Accessibility Compliance Takes a Village — and a Plan</h2>                    <p class="global-teaser__description">
                      September 25, 2025
                  </p>
                            </span>
```

**XPath** (use in browser DevTools):
```
.contextual-region.global-teaser__wrapper:nth-child(1) > .global-teaser.global-teaser--has-icon.global-teaser--no-image > .global-teaser__content
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.contextual-region.global-teaser__wrapper:nth-child(1) > .global-teaser.global-teaser--has-icon.global-teaser--no-image > .global-teaser__content')`
5. The element will be highlighted

**Affected Pages**:
- https://digital.georgia.gov/blog-post/2014-10-28/web-accessibility-importance
- https://digital.georgia.gov/blog-post/2014-12-17/accessibility-tools
- https://digital.georgia.gov/blog-post/2015-01-13/rewriting-our-accessibility-statement
- https://digital.georgia.gov/blog-post/2015-02-02/growing-impact-and-importance-web-accessibility
- https://digital.georgia.gov/blog-post/2015-03-25/accessibility-impact-importance
- *...and 5 more page(s)*

---

#### Pattern 9: Affects 9 page(s) - 9 occurrence(s)

**Scanner**: axe
**Rule**: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate
**Issue**: All page content should be contained by landmarks

**HTML Pattern**:
```html
<span class="global-teaser__content">
            <h2 class="global-teaser__title">GOVTalks Spring 2025</h2>                    <p class="global-teaser__description">
                      May 19, 2025
                  </p>
                            </span>
```

**XPath** (use in browser DevTools):
```
.contextual-region.global-teaser__wrapper:nth-child(3) > .global-teaser.global-teaser--has-icon.global-teaser--no-image > .global-teaser__content
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.contextual-region.global-teaser__wrapper:nth-child(3) > .global-teaser.global-teaser--has-icon.global-teaser--no-image > .global-teaser__content')`
5. The element will be highlighted

**Affected Pages**:
- https://digital.georgia.gov/blog-post/2014-10-28/web-accessibility-importance
- https://digital.georgia.gov/blog-post/2014-12-17/accessibility-tools
- https://digital.georgia.gov/blog-post/2015-01-13/rewriting-our-accessibility-statement
- https://digital.georgia.gov/blog-post/2015-02-02/growing-impact-and-importance-web-accessibility
- https://digital.georgia.gov/blog-post/2015-03-25/accessibility-impact-importance
- *...and 4 more page(s)*

---

#### Pattern 10: Affects 9 page(s) - 9 occurrence(s)

**Scanner**: axe
**Rule**: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate
**Issue**: All page content should be contained by landmarks

**HTML Pattern**:
```html
<div class="event-top__summary-wrapper">
```

**XPath** (use in browser DevTools):
```
.event-top__summary-wrapper
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.event-top__summary-wrapper')`
5. The element will be highlighted

**Affected Pages**:
- https://digital.georgia.gov/events/2025-07-02/accessibility-group-july-2025
- https://digital.georgia.gov/events/2025-08-06/accessibility-working-group-0625
- https://digital.georgia.gov/events/2025-09-03/accessibility-working-group-0925
- https://digital.georgia.gov/events/2025-10-15/accessibility-working-group-1025
- https://digital.georgia.gov/events/2025-11-12/accessibility-working-group-1125
- *...and 4 more page(s)*

---

#### Pattern 11: Affects 6 page(s) - 6 occurrence(s)

**Scanner**: axe
**Rule**: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate
**Issue**: All page content should be contained by landmarks

**HTML Pattern**:
```html
<div class="service-top__summary">
```

**XPath** (use in browser DevTools):
```
.service-top__summary
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.service-top__summary')`
5. The element will be highlighted

**Affected Pages**:
- https://digital.georgia.gov/services/accessibility-auditing
- https://digital.georgia.gov/services/content-strategy-consulting
- https://digital.georgia.gov/services/gap
- https://digital.georgia.gov/services/govhub
- https://digital.georgia.gov/services/orchard-design-system
- *...and 1 more page(s)*

---

#### Pattern 12: Affects 4 page(s) - 5 occurrence(s)

**Scanner**: axe
**Rule**: [aria-prohibited-attr](https://dequeuniversity.com/rules/axe/4.11/aria-prohibited-attr?application=playwright)
**Impact**: serious
**Issue**: Elements must only use permitted ARIA attributes

**HTML Pattern**:
```html
<div class="content-icon__image" aria-label="Conversation icon">
```

**XPath** (use in browser DevTools):
```
div[aria-label="Conversation icon"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('div[aria-label="Conversation icon"]')`
5. The element will be highlighted

**Affected Pages**:
- https://digital.georgia.gov/resources/digital-accessibility-compliance
- https://digital.georgia.gov/resources/digital-accessibility-compliance/leadership-key-points
- https://digital.georgia.gov/2024-year-review
- https://digital.georgia.gov/2023-year-review

---

#### Pattern 13: Affects 4 page(s) - 4 occurrence(s)

**Scanner**: axe
**Rule**: [aria-prohibited-attr](https://dequeuniversity.com/rules/axe/4.11/aria-prohibited-attr?application=playwright)
**Impact**: serious
**Issue**: Elements must only use permitted ARIA attributes

**HTML Pattern**:
```html
<div class="content-icon__image" aria-label="Question icon">
```

**XPath** (use in browser DevTools):
```
.content-icon__image
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.content-icon__image')`
5. The element will be highlighted

**Affected Pages**:
- https://digital.georgia.gov/resources/digital-accessibility-compliance/document-remediation
- https://digital.georgia.gov/services/gap
- https://digital.georgia.gov/2024-year-review
- https://digital.georgia.gov/404-page-not-found

---

#### Pattern 14: Affects 4 page(s) - 4 occurrence(s)

**Scanner**: axe
**Rule**: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate
**Issue**: All page content should be contained by landmarks

**HTML Pattern**:
```html
<div class="authored-by__author-picture">
                  <img class="authored-by__author-picture-image" src="/sites/digital.georgia.gov/files/styles/square/public/profile/JohnRempel2.jpg?h=4626e670&amp;itok=GK50ZBqH" alt="Photo of John Rempel">
            </div>
```

**XPath** (use in browser DevTools):
```
.authored-by__author-picture
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.authored-by__author-picture')`
5. The element will be highlighted

**Affected Pages**:
- https://digital.georgia.gov/blog-post/2015-02-02/growing-impact-and-importance-web-accessibility
- https://digital.georgia.gov/blog-post/2015-03-25/accessibility-impact-importance
- https://digital.georgia.gov/blog-post/2015-05-12/accessible-multimedia-providing-greater-accessibility-all
- https://digital.georgia.gov/blog-post/2016-05-03/accessibility-solutions

---

#### Pattern 15: Affects 3 page(s) - 3 occurrence(s)

**Scanner**: axe
**Rule**: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate
**Issue**: Heading levels should only increase by one

**HTML Pattern**:
```html
<h4 id="pagination-heading" class="visually-hidden">Pagination</h4>
```

**XPath** (use in browser DevTools):
```
#pagination-heading
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('#pagination-heading')`
5. The element will be highlighted

**Affected Pages**:
- https://digital.georgia.gov/services/gap
- https://digital.georgia.gov/resources/hub
- https://digital.georgia.gov/blog

---

> 💡 **Pro Tip**: These patterns likely come from shared components or templates in your codebase. Fix them in the component/template source, and the fix will propagate to all affected pages.

## 📊 Detailed Results

Complete scan results for all tested pages:

| Submitted URL | Final URL | Status | HTTP | Redirected | Time (ms) | axe Unique | ALFA Unique | Equal Access Unique | AccessLint Unique | Duplicates | Notes |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|
| https://digital.georgia.gov/ | https://digital.georgia.gov/ | OK | 200 | no | 7607 | 2 | 0 | 0 | 0 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-prohibited-attr |
| https://digital.georgia.gov/services/accessibility-auditing | https://digital.georgia.gov/services/accessibility-auditing | OK | 200 | no | 6371 | 7 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-prohibited-attr, landmark-no-duplicate-banner, landmark-unique, region |
| https://digital.georgia.gov/help-us-help-you-find-information-faster | https://digital.georgia.gov/help-us-help-you-find-information-faster | OK | 200 | no | 5133 | 3 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
| https://digital.georgia.gov/resources/digital-accessibility-compliance | https://digital.georgia.gov/resources/digital-accessibility-compliance | OK | 200 | no | 5534 | 4 | 0 | 0 | 0 | 3 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-prohibited-attr |
| https://digital.georgia.gov/resources/digital-accessibility-compliance/document-remediation | https://digital.georgia.gov/resources/digital-accessibility-compliance/document-remediation | OK | 200 | no | 5480 | 4 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-prohibited-attr, region |
| https://digital.georgia.gov/resources/digital-accessibility-compliance/how-do-i-compliance-checklist | https://digital.georgia.gov/resources/digital-accessibility-compliance/how-do-i-compliance-checklist | OK | 200 | no | 5393 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
| https://digital.georgia.gov/resources/digital-accessibility-compliance/leadership-key-points | https://digital.georgia.gov/resources/digital-accessibility-compliance/leadership-key-points | OK | 200 | no | 5419 | 5 | 0 | 0 | 0 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-prohibited-attr, region |
| https://digital.georgia.gov/blog-post/2025-05-09/help-users-find-their-way | https://digital.georgia.gov/blog-post/2025-05-09/help-users-find-their-way | OK | 200 | no | 5306 | 11 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
| https://digital.georgia.gov/12-digital-accessibility-standards | https://digital.georgia.gov/12-digital-accessibility-standards | OK | 200 | no | 5348 | 6 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
| https://digital.georgia.gov/5-using-accessibility-checker | https://digital.georgia.gov/5-using-accessibility-checker | OK | 200 | no | 5059 | 6 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
| https://digital.georgia.gov/digital-accessibility-poc | https://digital.georgia.gov/digital-accessibility-poc | OK | 200 | no | 4885 | 4 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-prohibited-attr, region |
| https://digital.georgia.gov/govtalks-accessibility-photos | https://digital.georgia.gov/govtalks-accessibility-photos | OK | 200 | no | 4731 | 2 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique |
| https://digital.georgia.gov/contacts/digital-accessibility-contact-will-alford | https://digital.georgia.gov/contacts/digital-accessibility-contact-will-alford | OK | 200 | no | 4795 | 2 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique |
| https://digital.georgia.gov/services/hosting-support/platform-release-notes | https://digital.georgia.gov/services/hosting-support/platform-release-notes | OK | 200 | no | 4944 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
| https://digital.georgia.gov/tools/accessibility-tools | https://digital.georgia.gov/tools/accessibility-tools | OK | 200 | no | 5233 | 4 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-prohibited-attr, region |
| https://digital.georgia.gov/1-finding-your-audience | https://digital.georgia.gov/1-finding-your-audience | OK | 200 | no | 5682 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
| https://digital.georgia.gov/blog-post/2014-10-28/web-accessibility-importance | https://digital.georgia.gov/blog-post/2014-10-28/web-accessibility-importance | OK | 200 | no | 6235 | 11 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
| https://digital.georgia.gov/blog-post/2014-12-17/accessibility-tools | https://digital.georgia.gov/blog-post/2014-12-17/accessibility-tools | OK | 200 | no | 5340 | 11 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
| https://digital.georgia.gov/blog-post/2015-01-13/rewriting-our-accessibility-statement | https://digital.georgia.gov/blog-post/2015-01-13/rewriting-our-accessibility-statement | OK | 200 | no | 5354 | 11 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
| https://digital.georgia.gov/blog-post/2015-02-02/growing-impact-and-importance-web-accessibility | https://digital.georgia.gov/blog-post/2015-02-02/growing-impact-and-importance-web-accessibility | OK | 200 | no | 6308 | 11 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
| https://digital.georgia.gov/blog-post/2015-03-25/accessibility-impact-importance | https://digital.georgia.gov/blog-post/2015-03-25/accessibility-impact-importance | OK | 200 | no | 5915 | 11 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
| https://digital.georgia.gov/blog-post/2015-05-12/accessible-multimedia-providing-greater-accessibility-all | https://digital.georgia.gov/blog-post/2015-05-12/accessible-multimedia-providing-greater-accessibility-all | OK | 200 | no | 5446 | 11 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
| https://digital.georgia.gov/blog-post/2016-05-03/accessibility-solutions | https://digital.georgia.gov/blog-post/2016-05-03/accessibility-solutions | OK | 200 | no | 6274 | 12 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: heading-order, landmark-no-duplicate-banner, landmark-unique, region |
| https://digital.georgia.gov/blog-post/2016-09-20/why-we-care-about-web-accessibility | https://digital.georgia.gov/blog-post/2016-09-20/why-we-care-about-web-accessibility | OK | 200 | no | 6181 | 11 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
| https://digital.georgia.gov/blog-post/2017-05-16/approach-accessibility | https://digital.georgia.gov/blog-post/2017-05-16/approach-accessibility | OK | 200 | no | 5392 | 11 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
| https://digital.georgia.gov/blog/2020-05-29/accessibility-made-simple | https://digital.georgia.gov/blog/2020-05-29/accessibility-made-simple | OK | 200 | no | 5376 | 7 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
| https://digital.georgia.gov/case-studies-0/legacy-case-studies/accessibility-case-study | https://digital.georgia.gov/case-studies-0/legacy-case-studies/accessibility-case-study | OK | 200 | no | 6091 | 3 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
| https://digital.georgia.gov/events/2025-07-02/accessibility-group-july-2025 | https://digital.georgia.gov/events/2025-07-02/accessibility-group-july-2025 | OK | 200 | no | 5959 | 11 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
| https://digital.georgia.gov/events/2025-08-06/accessibility-working-group-0625 | https://digital.georgia.gov/events/2025-08-06/accessibility-working-group-0625 | OK | 200 | no | 5189 | 6 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
| https://digital.georgia.gov/events/2025-09-03/accessibility-working-group-0925 | https://digital.georgia.gov/events/2025-09-03/accessibility-working-group-0925 | OK | 200 | no | 5734 | 6 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
| https://digital.georgia.gov/events/2025-10-15/accessibility-working-group-1025 | https://digital.georgia.gov/events/2025-10-15/accessibility-working-group-1025 | OK | 200 | no | 5710 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
| https://digital.georgia.gov/events/2025-11-12/accessibility-working-group-1125 | https://digital.georgia.gov/events/2025-11-12/accessibility-working-group-1125 | OK | 200 | no | 5018 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
| https://digital.georgia.gov/events/2025-12-03/accessibility-working-group-1225 | https://digital.georgia.gov/events/2025-12-03/accessibility-working-group-1225 | OK | 200 | no | 5004 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
| https://digital.georgia.gov/events/2026-01-14/accessibility-working-group-0126 | https://digital.georgia.gov/events/2026-01-14/accessibility-working-group-0126 | OK | 200 | no | 5010 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
| https://digital.georgia.gov/events/2026-02-04/accessibility-working-group-0226 | https://digital.georgia.gov/events/2026-02-04/accessibility-working-group-0226 | OK | 200 | no | 5850 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
| https://digital.georgia.gov/events/2026-03-04/accessibility-working-group-0326 | https://digital.georgia.gov/events/2026-03-04/accessibility-working-group-0326 | OK | 200 | no | 5118 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
| https://digital.georgia.gov/govtalks/2014-11-12/govtalks-fall-2014-accessibility | https://digital.georgia.gov/govtalks/2014-11-12/govtalks-fall-2014-accessibility | OK | 200 | no | 13086 | 4 | 0 | 0 | 0 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-prohibited-attr, button-name, region |
| https://digital.georgia.gov/how-does-your-audience-find-you | https://digital.georgia.gov/how-does-your-audience-find-you | OK | 200 | no | 5527 | 6 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
| https://digital.georgia.gov/tools/accessibility-tools/accessibility-checklist | https://digital.georgia.gov/tools/accessibility-tools/accessibility-checklist | OK | 200 | no | 5427 | 3 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
| https://digital.georgia.gov/resources/tools/content-tools/content-strategy-playbook | https://digital.georgia.gov/resources/tools/content-tools/content-strategy-playbook | OK | 200 | no | 5372 | 6 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
| https://digital.georgia.gov/46-social-bookmarking-eg-pinterest | https://digital.georgia.gov/46-social-bookmarking-eg-pinterest | OK | 200 | no | 5418 | 7 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: heading-order, landmark-no-duplicate-banner, landmark-unique, region |
| https://digital.georgia.gov/content-playbook-fallon-tweet | https://digital.georgia.gov/content-playbook-fallon-tweet | OK | 200 | no | 5203 | 3 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
| https://digital.georgia.gov/content-strategy-playbook-0 | https://digital.georgia.gov/content-strategy-playbook-0 | OK | 200 | no | 5470 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
| https://digital.georgia.gov/digital-services-georgia-homepage | https://digital.georgia.gov/ | OK | 200 | yes | 5544 | 2 | 0 | 0 | 0 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-prohibited-attr |
| https://digital.georgia.gov/services | https://digital.georgia.gov/services | OK | 200 | no | 4985 | 3 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
| https://digital.georgia.gov/book-page/1-embracing-mobile | https://digital.georgia.gov/book-page/1-embracing-mobile | OK | 200 | no | 5078 | 7 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: heading-order, landmark-no-duplicate-banner, landmark-unique, region |
| https://digital.georgia.gov/book-page/2-responsive-web-design | https://digital.georgia.gov/book-page/2-responsive-web-design | OK | 200 | no | 5079 | 7 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: heading-order, landmark-no-duplicate-banner, landmark-unique, region |
| https://digital.georgia.gov/book-page/3-maximizing-your-experience | https://digital.georgia.gov/book-page/3-maximizing-your-experience | OK | 200 | no | 5101 | 7 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: heading-order, landmark-no-duplicate-banner, landmark-unique, region |
| https://digital.georgia.gov/services/content-strategy-consulting | https://digital.georgia.gov/services/content-strategy-consulting | OK | 200 | no | 5136 | 7 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-prohibited-attr, landmark-no-duplicate-banner, landmark-unique, region |
| https://digital.georgia.gov/services/data-visualization | https://digital.georgia.gov/services/data-visualization | OK | 200 | no | 4865 | 4 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-prohibited-attr, region |
| https://digital.georgia.gov/services/gap | https://digital.georgia.gov/services/gap | OK | 200 | no | 5547 | 9 | 0 | 0 | 0 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-prohibited-attr, heading-order, landmark-no-duplicate-banner, landmark-unique, region |
| https://digital.georgia.gov/services/georgiagov | https://digital.georgia.gov/services/georgiagov | OK | 200 | no | 5001 | 3 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
| https://digital.georgia.gov/services/govhub | https://digital.georgia.gov/services/govhub | OK | 200 | no | 5285 | 9 | 0 | 0 | 0 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-prohibited-attr, landmark-no-duplicate-banner, landmark-unique, region |
| https://digital.georgia.gov/services/orchard-design-system | https://digital.georgia.gov/services/orchard-design-system | OK | 200 | no | 5867 | 9 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-prohibited-attr, image-redundant-alt, landmark-no-duplicate-banner, landmark-unique, region |
| https://digital.georgia.gov/services/usability-testing | https://digital.georgia.gov/services/usability-testing | OK | 200 | no | 6068 | 7 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: frame-title, landmark-no-duplicate-banner, landmark-unique, region |
| https://digital.georgia.gov/hosting-and-support | https://digital.georgia.gov/hosting-and-support | OK | 200 | no | 5474 | 3 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
| https://digital.georgia.gov/case-studies/chatbots-provided-timely-support | https://digital.georgia.gov/case-studies/chatbots-provided-timely-support | OK | 200 | no | 5120 | 4 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: heading-order, region |
| https://digital.georgia.gov/contacts/former-web-content-support-specialist-charronda-king | https://digital.georgia.gov/contacts/former-web-content-support-specialist-charronda-king | OK | 200 | no | 4797 | 2 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique |
| https://digital.georgia.gov/contacts/support-desk | https://digital.georgia.gov/contacts/support-desk | OK | 200 | no | 4951 | 2 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique |
| https://digital.georgia.gov/resources | https://digital.georgia.gov/resources | OK | 200 | no | 5345 | 12 | 0 | 0 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-prohibited-attr, landmark-no-duplicate-banner, landmark-unique, region |
| https://digital.georgia.gov/blog/2025-11-04/help-wanted-online-jobs-site-works | https://digital.georgia.gov/blog/2025-11-04/help-wanted-online-jobs-site-works | OK | 200 | no | 5383 | 11 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
| https://digital.georgia.gov/resources/case-studies | https://digital.georgia.gov/resources/case-studies | OK | 200 | no | 5193 | 3 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
| https://digital.georgia.gov/resources/glossary | https://digital.georgia.gov/resources/glossary | OK | 200 | no | 5666 | 3 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
| https://digital.georgia.gov/resources/hub | https://digital.georgia.gov/resources/hub | OK | 200 | no | 5216 | 3 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: heading-order, landmark-no-duplicate-banner, landmark-unique |
| https://digital.georgia.gov/resources/social-media-policy | https://digital.georgia.gov/resources/social-media-policy | OK | 200 | no | 5940 | 6 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
| https://digital.georgia.gov/1-almost-blank-canvas | https://digital.georgia.gov/1-almost-blank-canvas | OK | 200 | no | 5057 | 6 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
| https://digital.georgia.gov/1-consider-your-users | https://digital.georgia.gov/1-consider-your-users | OK | 200 | no | 5572 | 6 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: heading-order, landmark-no-duplicate-banner, landmark-unique, region |
| https://digital.georgia.gov/1-creating-document-structure | https://digital.georgia.gov/1-creating-document-structure | OK | 200 | no | 5190 | 7 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: heading-order, landmark-no-duplicate-banner, landmark-unique, region |
| https://digital.georgia.gov/1-gather-and-write-your-content | https://digital.georgia.gov/1-gather-and-write-your-content | OK | 200 | no | 5326 | 6 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
| https://digital.georgia.gov/2-adding-alt-text-images-tables | https://digital.georgia.gov/2-adding-alt-text-images-tables | OK | 200 | no | 5296 | 6 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
| https://digital.georgia.gov/2-advantages-themes | https://digital.georgia.gov/2-advantages-themes | OK | 200 | no | 5096 | 6 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
| https://digital.georgia.gov/2-crafting-editorial-calendar | https://digital.georgia.gov/2-crafting-editorial-calendar | OK | 200 | no | 5915 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
| https://digital.georgia.gov/2-determine-your-main-menu-structure | https://digital.georgia.gov/2-determine-your-main-menu-structure | OK | 200 | no | 5052 | 6 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
| https://digital.georgia.gov/2-understand-platform-file-management | https://digital.georgia.gov/2-understand-platform-file-management | OK | 200 | no | 5773 | 6 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: heading-order, landmark-no-duplicate-banner, landmark-unique, region |
| https://digital.georgia.gov/2025-year-review | https://digital.georgia.gov/2025-year-review | OK | 200 | no | 7571 | 0 | 0 | 0 | 0 | 0 | Skipped (not requested) |
| https://digital.georgia.gov/2024-year-review | https://digital.georgia.gov/2024-year-review | OK | 200 | no | 5683 | 4 | 0 | 0 | 0 | 3 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-prohibited-attr |
| https://digital.georgia.gov/2023-year-review | https://digital.georgia.gov/2023-year-review | OK | 200 | no | 5438 | 3 | 0 | 0 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-prohibited-attr |
| https://digital.georgia.gov/3-determine-your-homepage-content | https://digital.georgia.gov/3-determine-your-homepage-content | OK | 200 | no | 5941 | 6 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
| https://digital.georgia.gov/3-everything-moderation | https://digital.georgia.gov/3-everything-moderation | OK | 200 | no | 5636 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
| https://digital.georgia.gov/3-how-choose-theme | https://digital.georgia.gov/3-how-choose-theme | OK | 200 | no | 5188 | 6 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
| https://digital.georgia.gov/3-hyperlinks-context | https://digital.georgia.gov/3-hyperlinks-context | OK | 200 | no | 5131 | 7 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: heading-order, landmark-no-duplicate-banner, landmark-unique, region |
| https://digital.georgia.gov/3-writing-tips-bloggers | https://digital.georgia.gov/3-writing-tips-bloggers | OK | 200 | no | 4974 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
| https://digital.georgia.gov/4-dealing-comments | https://digital.georgia.gov/4-dealing-comments | OK | 200 | no | 5653 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
| https://digital.georgia.gov/4-pick-theme | https://digital.georgia.gov/4-pick-theme | OK | 200 | no | 5622 | 6 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
| https://digital.georgia.gov/4-turning-accessible-word-docs-accessible-pdfs | https://digital.georgia.gov/4-turning-accessible-word-docs-accessible-pdfs | OK | 200 | no | 5223 | 7 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: heading-order, landmark-no-duplicate-banner, landmark-unique, region |
| https://digital.georgia.gov/404-page-not-found | https://digital.georgia.gov/404-page-not-found | OK | 200 | no | 5648 | 3 | 0 | 0 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-prohibited-attr |
| https://digital.georgia.gov/5-attend-training-session | https://digital.georgia.gov/5-attend-training-session | OK | 200 | no | 5511 | 6 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
| https://digital.georgia.gov/5-blogs-help-you-blog | https://digital.georgia.gov/5-blogs-help-you-blog | OK | 200 | no | 4845 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
| https://digital.georgia.gov/6-conclusion | https://digital.georgia.gov/6-conclusion | OK | 200 | no | 5492 | 6 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
| https://digital.georgia.gov/6-put-your-content-your-website | https://digital.georgia.gov/6-put-your-content-your-website | OK | 200 | no | 5503 | 6 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
| https://digital.georgia.gov/amanda-de-zayas | https://digital.georgia.gov/amanda-de-zayas | OK | 200 | no | 4968 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
| https://digital.georgia.gov/ana-santos | https://digital.georgia.gov/ana-santos | OK | 200 | no | 4962 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
| https://digital.georgia.gov/analytics-training | https://digital.georgia.gov/analytics-training | OK | 200 | no | 5043 | 3 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
| https://digital.georgia.gov/ann-masters | https://digital.georgia.gov/ann-masters | OK | 200 | no | 5919 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
| https://digital.georgia.gov/april-lentini | https://digital.georgia.gov/april-lentini | OK | 200 | no | 4928 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
| https://digital.georgia.gov/best-practices | https://digital.georgia.gov/best-practices | OK | 200 | no | 6269 | 6 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
| https://digital.georgia.gov/bethany-mcdaniel | https://digital.georgia.gov/bethany-mcdaniel | OK | 200 | no | 4828 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
| https://digital.georgia.gov/blog | https://digital.georgia.gov/blog | OK | 200 | no | 5470 | 4 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: heading-order, landmark-no-duplicate-banner, landmark-unique, list |
| https://digital.georgia.gov/building-form | https://digital.georgia.gov/building-form | OK | 200 | no | 5002 | 6 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
| https://digital.georgia.gov/careers | https://digital.georgia.gov/careers | OK | 200 | no | 4775 | 3 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |

## Detailed Failure Information (ALFA)

## Detailed Failure Information (axe)

### https://digital.georgia.gov/

#### Rule: [aria-prohibited-attr](https://dequeuniversity.com/rules/axe/4.11/aria-prohibited-attr?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div class="content-icon__image" aria-label="Graduation Cap iicon">`
- XPath: `div[aria-label="Graduation Cap iicon"]`

**Failure 2:**
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div class="content-icon__image" aria-label="Guidelines icon">`
- XPath: `div[aria-label="Guidelines icon"]`

### https://digital.georgia.gov/services/accessibility-auditing

#### Rule: [aria-prohibited-attr](https://dequeuniversity.com/rules/axe/4.11/aria-prohibited-attr?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div class="content-icon__image" aria-label="Eye-disability icon">`
- XPath: `.content-icon__image`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="service-top__summary">`
- XPath: `.service-top__summary`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Did you find what you were looking for on this page?</h2>`
- XPath: `#upper-feedback-content > h2`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-yes-button-14466">Yes</label>`
- XPath: `label[for="feedback-yes-button-14466"]`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-no-button-14466">No</label>`
- XPath: `label[for="feedback-no-button-14466"]`

### https://digital.georgia.gov/help-us-help-you-find-information-faster

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Did you find what you were looking for on this page?</h2>`
- XPath: `#upper-feedback-content > h2`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-yes-button-17381">Yes</label>`
- XPath: `label[for="feedback-yes-button-17381"]`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-no-button-17381">No</label>`
- XPath: `label[for="feedback-no-button-17381"]`

### https://digital.georgia.gov/resources/digital-accessibility-compliance

#### Rule: [aria-prohibited-attr](https://dequeuniversity.com/rules/axe/4.11/aria-prohibited-attr?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div class="content-icon__image" aria-label="Person Action Add Old Woman icon">`
- XPath: `.layout-section__region[data-region-type="one-third"]:nth-child(1) > .layout-section__region-item--card[data-has-card-icon="true"][data-has-layout-above="true"] > .card-wrapper--has-icon.card-wrapper.card-wrapper--wrapper > .card-wrapper__icon > .content-icon > .content-icon__image`

**Failure 2:**
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div class="content-icon__image" aria-label="Conversation icon">`
- XPath: `div[aria-label="Conversation icon"]`

**Failure 3:**
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div class="content-icon__image" aria-label="Document icon">`
- XPath: `div[aria-label="Document icon"]`

**Failure 4:**
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div class="content-icon__image" aria-label="Rating icon">`
- XPath: `div[aria-label="Rating icon"]`

### https://digital.georgia.gov/resources/digital-accessibility-compliance/document-remediation

#### Rule: [aria-prohibited-attr](https://dequeuniversity.com/rules/axe/4.11/aria-prohibited-attr?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div class="content-icon__image" aria-label="Question icon">`
- XPath: `.content-icon__image`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Did you find what you were looking for on this page?</h2>`
- XPath: `#upper-feedback-content > h2`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-yes-button-20216">Yes</label>`
- XPath: `label[for="feedback-yes-button-20216"]`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-no-button-20216">No</label>`
- XPath: `label[for="feedback-no-button-20216"]`

### https://digital.georgia.gov/resources/digital-accessibility-compliance/how-do-i-compliance-checklist

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Did you find what you were looking for on this page?</h2>`
- XPath: `#upper-feedback-content > h2`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-yes-button-20161">Yes</label>`
- XPath: `label[for="feedback-yes-button-20161"]`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-no-button-20161">No</label>`
- XPath: `label[for="feedback-no-button-20161"]`

### https://digital.georgia.gov/resources/digital-accessibility-compliance/leadership-key-points

#### Rule: [aria-prohibited-attr](https://dequeuniversity.com/rules/axe/4.11/aria-prohibited-attr?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div class="content-icon__image" aria-label="Warning triangle icon">`
- XPath: `div[aria-label="Warning triangle icon"]`

**Failure 2:**
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div class="content-icon__image" aria-label="Conversation icon">`
- XPath: `div[aria-label="Conversation icon"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Did you find what you were looking for on this page?</h2>`
- XPath: `#upper-feedback-content > h2`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-yes-button-20021">Yes</label>`
- XPath: `label[for="feedback-yes-button-20021"]`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-no-button-20021">No</label>`
- XPath: `label[for="feedback-no-button-20021"]`

### https://digital.georgia.gov/blog-post/2025-05-09/help-users-find-their-way

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="authored-by__author-picture">                   <img class="authored-by__author-picture-image" src="/sites/digital.georgia.gov/files/styles/square/public/2020-06/julieannfayheadshot.jpg?h=66c3b311&amp;itok=Pymuff6l" alt="Photo of Julie Fay">             </div>`
- XPath: `.authored-by__author-picture`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="authored-by__author-summary">`
- XPath: `.authored-by__author-summary`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Did you find what you were looking for on this page?</h2>`
- XPath: `#upper-feedback-content > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-yes-button-20051">Yes</label>`
- XPath: `label[for="feedback-yes-button-20051"]`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-no-button-20051">No</label>`
- XPath: `label[for="feedback-no-button-20051"]`

*... and 4 more failures for this rule*

### https://digital.georgia.gov/12-digital-accessibility-standards

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Did you find what you were looking for on this page?</h2>`
- XPath: `#upper-feedback-content > h2`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-yes-button-38">Yes</label>`
- XPath: `label[for="feedback-yes-button-38"]`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-no-button-38">No</label>`
- XPath: `label[for="feedback-no-button-38"]`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<span>Back to top</span>`
- XPath: `.content-page__desktop > .accordion-wrapper > .link-collection-layout-wrapper.book--link-collection.contextual-region > .back-to-top > span`

### https://digital.georgia.gov/5-using-accessibility-checker

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Did you find what you were looking for on this page?</h2>`
- XPath: `#upper-feedback-content > h2`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-yes-button-791">Yes</label>`
- XPath: `label[for="feedback-yes-button-791"]`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-no-button-791">No</label>`
- XPath: `label[for="feedback-no-button-791"]`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<span>Back to top</span>`
- XPath: `.content-page__desktop > .accordion-wrapper > .link-collection-layout-wrapper.book--link-collection.contextual-region > .back-to-top > span`

### https://digital.georgia.gov/digital-accessibility-poc

#### Rule: [aria-prohibited-attr](https://dequeuniversity.com/rules/axe/4.11/aria-prohibited-attr?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div class="content-icon__image" aria-label="Hand support icon">`
- XPath: `.content-icon__image`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Did you find what you were looking for on this page?</h2>`
- XPath: `#upper-feedback-content > h2`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-yes-button-20666">Yes</label>`
- XPath: `label[for="feedback-yes-button-20666"]`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-no-button-20666">No</label>`
- XPath: `label[for="feedback-no-button-20666"]`

### https://digital.georgia.gov/govtalks-accessibility-photos

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

### https://digital.georgia.gov/contacts/digital-accessibility-contact-will-alford

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

### https://digital.georgia.gov/services/hosting-support/platform-release-notes

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Did you find what you were looking for on this page?</h2>`
- XPath: `#upper-feedback-content > h2`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-yes-button-1371">Yes</label>`
- XPath: `label[for="feedback-yes-button-1371"]`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-no-button-1371">No</label>`
- XPath: `label[for="feedback-no-button-1371"]`

### https://digital.georgia.gov/tools/accessibility-tools

#### Rule: [aria-prohibited-attr](https://dequeuniversity.com/rules/axe/4.11/aria-prohibited-attr?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div class="content-icon__image" aria-label="Checbkox shape icon">`
- XPath: `.content-icon__image`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Did you find what you were looking for on this page?</h2>`
- XPath: `#upper-feedback-content > h2`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-yes-button-2696">Yes</label>`
- XPath: `label[for="feedback-yes-button-2696"]`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-no-button-2696">No</label>`
- XPath: `label[for="feedback-no-button-2696"]`

### https://digital.georgia.gov/1-finding-your-audience

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Did you find what you were looking for on this page?</h2>`
- XPath: `#upper-feedback-content > h2`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-yes-button-105">Yes</label>`
- XPath: `label[for="feedback-yes-button-105"]`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-no-button-105">No</label>`
- XPath: `label[for="feedback-no-button-105"]`

### https://digital.georgia.gov/blog-post/2014-10-28/web-accessibility-importance

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="authored-by__author-picture">                   <img class="authored-by__author-picture-image" src="/sites/digital.georgia.gov/files/styles/square/public/profile/Norah%20Sinclair%20hs.jpg?h=c8962261&amp;itok=E0ueG8--" alt="Photo of Norah Sinclair">             </div>`
- XPath: `.authored-by__author-picture`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="authored-by__author-summary">`
- XPath: `.authored-by__author-summary`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Did you find what you were looking for on this page?</h2>`
- XPath: `#upper-feedback-content > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-yes-button-726">Yes</label>`
- XPath: `label[for="feedback-yes-button-726"]`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-no-button-726">No</label>`
- XPath: `label[for="feedback-no-button-726"]`

*... and 4 more failures for this rule*

### https://digital.georgia.gov/blog-post/2014-12-17/accessibility-tools

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="authored-by__author-picture">                   <img class="authored-by__author-picture-image" src="/sites/digital.georgia.gov/files/styles/square/public/profile/Janet%20Sylvia_0.jpg?h=a12732df&amp;itok=NaHb3GAF" alt="Photo of Janet Sylvia">             </div>`
- XPath: `.authored-by__author-picture`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="authored-by__author-summary">`
- XPath: `.authored-by__author-summary`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Did you find what you were looking for on this page?</h2>`
- XPath: `#upper-feedback-content > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-yes-button-846">Yes</label>`
- XPath: `label[for="feedback-yes-button-846"]`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-no-button-846">No</label>`
- XPath: `label[for="feedback-no-button-846"]`

*... and 4 more failures for this rule*

### https://digital.georgia.gov/blog-post/2015-01-13/rewriting-our-accessibility-statement

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="authored-by__author-picture">                   <img class="authored-by__author-picture-image" src="/sites/digital.georgia.gov/files/styles/square/public/profile/Pooja2.jpg?h=4626e670&amp;itok=_mkUVoGL" alt="Photo of Pooja Berrong">             </div>`
- XPath: `.authored-by__author-picture`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="authored-by__author-summary">`
- XPath: `.authored-by__author-summary`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Did you find what you were looking for on this page?</h2>`
- XPath: `#upper-feedback-content > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-yes-button-871">Yes</label>`
- XPath: `label[for="feedback-yes-button-871"]`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-no-button-871">No</label>`
- XPath: `label[for="feedback-no-button-871"]`

*... and 4 more failures for this rule*

### https://digital.georgia.gov/blog-post/2015-02-02/growing-impact-and-importance-web-accessibility

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="authored-by__author-picture">                   <img class="authored-by__author-picture-image" src="/sites/digital.georgia.gov/files/styles/square/public/profile/JohnRempel2.jpg?h=4626e670&amp;itok=GK50ZBqH" alt="Photo of John Rempel">             </div>`
- XPath: `.authored-by__author-picture`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="authored-by__author-summary">`
- XPath: `.authored-by__author-summary`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Did you find what you were looking for on this page?</h2>`
- XPath: `#upper-feedback-content > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-yes-button-911">Yes</label>`
- XPath: `label[for="feedback-yes-button-911"]`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-no-button-911">No</label>`
- XPath: `label[for="feedback-no-button-911"]`

*... and 4 more failures for this rule*

### https://digital.georgia.gov/blog-post/2015-03-25/accessibility-impact-importance

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="authored-by__author-picture">                   <img class="authored-by__author-picture-image" src="/sites/digital.georgia.gov/files/styles/square/public/profile/JohnRempel2.jpg?h=4626e670&amp;itok=GK50ZBqH" alt="Photo of John Rempel">             </div>`
- XPath: `.authored-by__author-picture`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="authored-by__author-summary">`
- XPath: `.authored-by__author-summary`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Did you find what you were looking for on this page?</h2>`
- XPath: `#upper-feedback-content > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-yes-button-956">Yes</label>`
- XPath: `label[for="feedback-yes-button-956"]`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-no-button-956">No</label>`
- XPath: `label[for="feedback-no-button-956"]`

*... and 4 more failures for this rule*

### https://digital.georgia.gov/blog-post/2015-05-12/accessible-multimedia-providing-greater-accessibility-all

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="authored-by__author-picture">                   <img class="authored-by__author-picture-image" src="/sites/digital.georgia.gov/files/styles/square/public/profile/JohnRempel2.jpg?h=4626e670&amp;itok=GK50ZBqH" alt="Photo of John Rempel">             </div>`
- XPath: `.authored-by__author-picture`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="authored-by__author-summary">`
- XPath: `.authored-by__author-summary`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Did you find what you were looking for on this page?</h2>`
- XPath: `#upper-feedback-content > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-yes-button-1051">Yes</label>`
- XPath: `label[for="feedback-yes-button-1051"]`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-no-button-1051">No</label>`
- XPath: `label[for="feedback-no-button-1051"]`

*... and 4 more failures for this rule*

### https://digital.georgia.gov/blog-post/2016-05-03/accessibility-solutions

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h4>Video Demonstration: Web Accessibility in Action</h4>`
- XPath: `h4`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="authored-by__author-picture">                   <img class="authored-by__author-picture-image" src="/sites/digital.georgia.gov/files/styles/square/public/profile/JohnRempel2.jpg?h=4626e670&amp;itok=GK50ZBqH" alt="Photo of John Rempel">             </div>`
- XPath: `.authored-by__author-picture`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="authored-by__author-summary">`
- XPath: `.authored-by__author-summary`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Did you find what you were looking for on this page?</h2>`
- XPath: `#upper-feedback-content > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-yes-button-1661">Yes</label>`
- XPath: `label[for="feedback-yes-button-1661"]`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-no-button-1661">No</label>`
- XPath: `label[for="feedback-no-button-1661"]`

*... and 4 more failures for this rule*

### https://digital.georgia.gov/blog-post/2016-09-20/why-we-care-about-web-accessibility

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="authored-by__author-picture">                   <img class="authored-by__author-picture-image" src="/sites/digital.georgia.gov/files/styles/square/public/profile/Kendra3.jpg?h=a2f616d4&amp;itok=TpLMah5G" alt="Photo of Kendra Skeene">             </div>`
- XPath: `.authored-by__author-picture`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="authored-by__author-summary">`
- XPath: `.authored-by__author-summary`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Did you find what you were looking for on this page?</h2>`
- XPath: `#upper-feedback-content > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-yes-button-2056">Yes</label>`
- XPath: `label[for="feedback-yes-button-2056"]`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-no-button-2056">No</label>`
- XPath: `label[for="feedback-no-button-2056"]`

*... and 4 more failures for this rule*

### https://digital.georgia.gov/blog-post/2017-05-16/approach-accessibility

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="authored-by__author-picture">                   <img class="authored-by__author-picture-image" src="/sites/digital.georgia.gov/files/styles/square/public/2020-11/rachel-headshot.jpg?h=227cd4df&amp;itok=dYUQ7m7I" alt="Photo of Rachel Hart">             </div>`
- XPath: `.authored-by__author-picture`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="authored-by__author-summary">`
- XPath: `.authored-by__author-summary`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Did you find what you were looking for on this page?</h2>`
- XPath: `#upper-feedback-content > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-yes-button-2721">Yes</label>`
- XPath: `label[for="feedback-yes-button-2721"]`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-no-button-2721">No</label>`
- XPath: `label[for="feedback-no-button-2721"]`

*... and 4 more failures for this rule*

### https://digital.georgia.gov/blog/2020-05-29/accessibility-made-simple

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Did you find what you were looking for on this page?</h2>`
- XPath: `#upper-feedback-content > h2`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-yes-button-15351">Yes</label>`
- XPath: `label[for="feedback-yes-button-15351"]`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-no-button-15351">No</label>`
- XPath: `label[for="feedback-no-button-15351"]`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<h2 class="related-news__title">Related news</h2>`
- XPath: `.related-news__title`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<span class="global-teaser__content">`
- XPath: `.contextual-region.global-teaser__wrapper:nth-child(1) > .global-teaser.global-teaser--has-icon.global-teaser--no-image > .global-teaser__content`

*... and 2 more failures for this rule*

### https://digital.georgia.gov/case-studies-0/legacy-case-studies/accessibility-case-study

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Did you find what you were looking for on this page?</h2>`
- XPath: `#upper-feedback-content > h2`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-yes-button-2381">Yes</label>`
- XPath: `label[for="feedback-yes-button-2381"]`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-no-button-2381">No</label>`
- XPath: `label[for="feedback-no-button-2381"]`

### https://digital.georgia.gov/events/2025-07-02/accessibility-group-july-2025

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="event-top__date">                                                   Event ended July 2, 2025               </div>`
- XPath: `.event-top__date`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="event-top__summary-wrapper">`
- XPath: `.event-top__summary-wrapper`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Introduction to Group/Agency Leadership Discussion</h2>`
- XPath: `.event-recap > h2:nth-child(1)`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<div id="player" style="width: 100%; height: 100%;">`
- XPath: `iframe`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Discussion Notes</h2>`
- XPath: `h2:nth-child(3)`

*... and 4 more failures for this rule*

### https://digital.georgia.gov/events/2025-08-06/accessibility-working-group-0625

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="event-top__date">                                                   Event ended August 6, 2025               </div>`
- XPath: `.event-top__date`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="event-top__summary-wrapper">`
- XPath: `.event-top__summary-wrapper`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="event-summary-recap constrained">`
- XPath: `.event-summary-recap`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="event-date-time__content">     <div class="event-date-time__title">Date</div>               <div class="event-date-time">                 Wednesday, August 6, 2025<br>10 - 11 a.m.            </div>             </div>`
- XPath: `.event-date-time__content`

### https://digital.georgia.gov/events/2025-09-03/accessibility-working-group-0925

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="event-top__date">                                                   Event ended September 3, 2025               </div>`
- XPath: `.event-top__date`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="event-top__summary-wrapper">`
- XPath: `.event-top__summary-wrapper`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="event-summary-recap constrained">`
- XPath: `.event-summary-recap`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="event-date-time__content">     <div class="event-date-time__title">Date</div>               <div class="event-date-time">                 Wednesday, September 3, 2025<br>10:30 - 11:30 a.m.            </div>             </div>`
- XPath: `.event-date-time__content`

### https://digital.georgia.gov/events/2025-10-15/accessibility-working-group-1025

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="event-top__date">                                                   Event ended October 15, 2025               </div>`
- XPath: `.event-top__date`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="event-top__summary-wrapper">`
- XPath: `.event-top__summary-wrapper`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="event-date-time__content">     <div class="event-date-time__title">Date</div>               <div class="event-date-time">                 Wednesday, October 15, 2025<br>10 - 11 a.m.            </div>             </div>`
- XPath: `.event-date-time__content`

### https://digital.georgia.gov/events/2025-11-12/accessibility-working-group-1125

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="event-top__date">                                                   Event ended November 12, 2025               </div>`
- XPath: `.event-top__date`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="event-top__summary-wrapper">`
- XPath: `.event-top__summary-wrapper`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="event-date-time__content">     <div class="event-date-time__title">Date</div>               <div class="event-date-time">                 Wednesday, November 12, 2025<br>10 - 11 a.m.            </div>             </div>`
- XPath: `.event-date-time__content`

### https://digital.georgia.gov/events/2025-12-03/accessibility-working-group-1225

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="event-top__date">                                                   Event ended December 3, 2025               </div>`
- XPath: `.event-top__date`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="event-top__summary-wrapper">`
- XPath: `.event-top__summary-wrapper`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="event-date-time__content">     <div class="event-date-time__title">Date</div>               <div class="event-date-time">                 Wednesday, December 3, 2025<br>10 - 11 a.m.            </div>             </div>`
- XPath: `.event-date-time__content`

### https://digital.georgia.gov/events/2026-01-14/accessibility-working-group-0126

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="event-top__date">                                                   Event ended January 14, 2026               </div>`
- XPath: `.event-top__date`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="event-top__summary-wrapper">`
- XPath: `.event-top__summary-wrapper`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="event-date-time__content">     <div class="event-date-time__title">Date</div>               <div class="event-date-time">                 Wednesday, January 14, 2026<br>11 a.m. - 12 p.m.            </div>             </div>`
- XPath: `.event-date-time__content`

### https://digital.georgia.gov/events/2026-02-04/accessibility-working-group-0226

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="event-top__date">                                                   Event ended February 4, 2026               </div>`
- XPath: `.event-top__date`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="event-top__summary-wrapper">`
- XPath: `.event-top__summary-wrapper`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="event-date-time__content">     <div class="event-date-time__title">Date</div>               <div class="event-date-time">                 Wednesday, February 4, 2026<br>11 a.m. - 12 p.m.            </div>             </div>`
- XPath: `.event-date-time__content`

### https://digital.georgia.gov/events/2026-03-04/accessibility-working-group-0326

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="event-top__date">                                                   Event ended March 4, 2026               </div>`
- XPath: `.event-top__date`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="event-top__summary-wrapper">`
- XPath: `.event-top__summary-wrapper`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="event-date-time__content">     <div class="event-date-time__title">Date</div>               <div class="event-date-time">                 Wednesday, March 4, 2026<br>11 a.m. - 12 p.m.            </div>             </div>`
- XPath: `.event-date-time__content`

### https://digital.georgia.gov/govtalks/2014-11-12/govtalks-fall-2014-accessibility

#### Rule: [aria-prohibited-attr](https://dequeuniversity.com/rules/axe/4.11/aria-prohibited-attr?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div class="html5-video-player ytp-hide-controls ytp-exp-bottom-control-flexbox ytp-modern-caption ytp-livebadge-color unstarted-mode" tabindex="" id="movie_player" data-version="/s/player/74edf1a3/player_embed.vflset/en_US/base.js" aria-label="YouTube Video Player">`
- XPath: `article[aria-labelledby="article-label-1996"] > article > .remote-video--embed > iframe`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Did you find what you were looking for on this page?</h2>`
- XPath: `#upper-feedback-content > h2`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-yes-button-16361">Yes</label>`
- XPath: `label[for="feedback-yes-button-16361"]`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-no-button-16361">No</label>`
- XPath: `label[for="feedback-no-button-16361"]`

### https://digital.georgia.gov/how-does-your-audience-find-you

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Did you find what you were looking for on this page?</h2>`
- XPath: `#upper-feedback-content > h2`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-yes-button-2151">Yes</label>`
- XPath: `label[for="feedback-yes-button-2151"]`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-no-button-2151">No</label>`
- XPath: `label[for="feedback-no-button-2151"]`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<span>Back to top</span>`
- XPath: `.content-page__desktop > .accordion-wrapper > .link-collection-layout-wrapper.book--link-collection.contextual-region > .back-to-top > span`

### https://digital.georgia.gov/tools/accessibility-tools/accessibility-checklist

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Did you find what you were looking for on this page?</h2>`
- XPath: `#upper-feedback-content > h2`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-yes-button-19981">Yes</label>`
- XPath: `label[for="feedback-yes-button-19981"]`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-no-button-19981">No</label>`
- XPath: `label[for="feedback-no-button-19981"]`

### https://digital.georgia.gov/resources/tools/content-tools/content-strategy-playbook

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Did you find what you were looking for on this page?</h2>`
- XPath: `#upper-feedback-content > h2`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-yes-button-2166">Yes</label>`
- XPath: `label[for="feedback-yes-button-2166"]`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-no-button-2166">No</label>`
- XPath: `label[for="feedback-no-button-2166"]`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<span>Back to top</span>`
- XPath: `.content-page__desktop > .accordion-wrapper > .link-collection-layout-wrapper.book--link-collection.contextual-region > .back-to-top > span`

### https://digital.georgia.gov/46-social-bookmarking-eg-pinterest

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3 dir="ltr">4.6.1 Benefits of Social Bookmarking</h3>`
- XPath: `h3:nth-child(3)`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Did you find what you were looking for on this page?</h2>`
- XPath: `#upper-feedback-content > h2`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-yes-button-241">Yes</label>`
- XPath: `label[for="feedback-yes-button-241"]`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-no-button-241">No</label>`
- XPath: `label[for="feedback-no-button-241"]`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<span>Back to top</span>`
- XPath: `.content-page__desktop > .accordion-wrapper > .link-collection-layout-wrapper.book--link-collection.contextual-region > .back-to-top > span`

### https://digital.georgia.gov/content-playbook-fallon-tweet

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Did you find what you were looking for on this page?</h2>`
- XPath: `#upper-feedback-content > h2`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-yes-button-2171">Yes</label>`
- XPath: `label[for="feedback-yes-button-2171"]`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-no-button-2171">No</label>`
- XPath: `label[for="feedback-no-button-2171"]`

### https://digital.georgia.gov/content-strategy-playbook-0

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Did you find what you were looking for on this page?</h2>`
- XPath: `#upper-feedback-content > h2`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-yes-button-2121">Yes</label>`
- XPath: `label[for="feedback-yes-button-2121"]`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-no-button-2121">No</label>`
- XPath: `label[for="feedback-no-button-2121"]`

### https://digital.georgia.gov/digital-services-georgia-homepage

#### Rule: [aria-prohibited-attr](https://dequeuniversity.com/rules/axe/4.11/aria-prohibited-attr?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div class="content-icon__image" aria-label="Graduation Cap iicon">`
- XPath: `div[aria-label="Graduation Cap iicon"]`

**Failure 2:**
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div class="content-icon__image" aria-label="Guidelines icon">`
- XPath: `div[aria-label="Guidelines icon"]`

### https://digital.georgia.gov/services

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Did you find what you were looking for on this page?</h2>`
- XPath: `#upper-feedback-content > h2`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-yes-button-9">Yes</label>`
- XPath: `label[for="feedback-yes-button-9"]`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-no-button-9">No</label>`
- XPath: `label[for="feedback-no-button-9"]`

### https://digital.georgia.gov/book-page/1-embracing-mobile

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h4>Why do we need to embrace mobile?</h4>`
- XPath: `h4`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Did you find what you were looking for on this page?</h2>`
- XPath: `#upper-feedback-content > h2`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-yes-button-110">Yes</label>`
- XPath: `label[for="feedback-yes-button-110"]`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-no-button-110">No</label>`
- XPath: `label[for="feedback-no-button-110"]`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<span>Back to top</span>`
- XPath: `.content-page__desktop > .accordion-wrapper > .link-collection-layout-wrapper.book--link-collection.contextual-region > .back-to-top > span`

### https://digital.georgia.gov/book-page/2-responsive-web-design

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h4 dir="ltr">What is Responsive Web Design?</h4>`
- XPath: `h4:nth-child(1)`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Did you find what you were looking for on this page?</h2>`
- XPath: `#upper-feedback-content > h2`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-yes-button-111">Yes</label>`
- XPath: `label[for="feedback-yes-button-111"]`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-no-button-111">No</label>`
- XPath: `label[for="feedback-no-button-111"]`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<span>Back to top</span>`
- XPath: `.content-page__desktop > .accordion-wrapper > .link-collection-layout-wrapper.book--link-collection.contextual-region > .back-to-top > span`

### https://digital.georgia.gov/book-page/3-maximizing-your-experience

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h4 dir="ltr">What can I do to maximize the Responsive Web Design experience?</h4>`
- XPath: `h4`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Did you find what you were looking for on this page?</h2>`
- XPath: `#upper-feedback-content > h2`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-yes-button-112">Yes</label>`
- XPath: `label[for="feedback-yes-button-112"]`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-no-button-112">No</label>`
- XPath: `label[for="feedback-no-button-112"]`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<span>Back to top</span>`
- XPath: `.content-page__desktop > .accordion-wrapper > .link-collection-layout-wrapper.book--link-collection.contextual-region > .back-to-top > span`

### https://digital.georgia.gov/services/content-strategy-consulting

#### Rule: [aria-prohibited-attr](https://dequeuniversity.com/rules/axe/4.11/aria-prohibited-attr?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div class="content-icon__image" aria-label="Write file icon">`
- XPath: `.content-icon__image`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="service-top__summary">`
- XPath: `.service-top__summary`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Did you find what you were looking for on this page?</h2>`
- XPath: `#upper-feedback-content > h2`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-yes-button-14461">Yes</label>`
- XPath: `label[for="feedback-yes-button-14461"]`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-no-button-14461">No</label>`
- XPath: `label[for="feedback-no-button-14461"]`

### https://digital.georgia.gov/services/data-visualization

#### Rule: [aria-prohibited-attr](https://dequeuniversity.com/rules/axe/4.11/aria-prohibited-attr?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div class="content-icon__image" aria-label="Bar Graph icon">`
- XPath: `.content-icon__image`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Did you find what you were looking for on this page?</h2>`
- XPath: `#upper-feedback-content > h2`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-yes-button-14551">Yes</label>`
- XPath: `label[for="feedback-yes-button-14551"]`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-no-button-14551">No</label>`
- XPath: `label[for="feedback-no-button-14551"]`

### https://digital.georgia.gov/services/gap

#### Rule: [aria-prohibited-attr](https://dequeuniversity.com/rules/axe/4.11/aria-prohibited-attr?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div class="content-icon__image" aria-label="Question icon">`
- XPath: `div[aria-label="Question icon"]`

**Failure 2:**
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div class="content-icon__image" aria-label="Icon picturing apple on book">`
- XPath: `div[aria-label="Icon picturing apple on book"]`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h4 id="pagination-heading" class="visually-hidden">Pagination</h4>`
- XPath: `#pagination-heading`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="service-top__summary">`
- XPath: `.service-top__summary`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Did you find what you were looking for on this page?</h2>`
- XPath: `#upper-feedback-content > h2`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-yes-button-18616">Yes</label>`
- XPath: `label[for="feedback-yes-button-18616"]`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-no-button-18616">No</label>`
- XPath: `label[for="feedback-no-button-18616"]`

### https://digital.georgia.gov/services/georgiagov

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Did you find what you were looking for on this page?</h2>`
- XPath: `#upper-feedback-content > h2`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-yes-button-1636">Yes</label>`
- XPath: `label[for="feedback-yes-button-1636"]`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-no-button-1636">No</label>`
- XPath: `label[for="feedback-no-button-1636"]`

### https://digital.georgia.gov/services/govhub

#### Rule: [aria-prohibited-attr](https://dequeuniversity.com/rules/axe/4.11/aria-prohibited-attr?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div class="content-icon__image" aria-label="Checbkox shape icon">`
- XPath: `div[aria-label="Checbkox shape icon"]`

**Failure 2:**
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div class="content-icon__image" aria-label="Warning notification bell icon">`
- XPath: `div[aria-label="Warning notification bell icon"]`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="service-top__summary">`
- XPath: `.service-top__summary`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="service-top__logo-wrapper">                               <img loading="lazy" src="/sites/digital.georgia.gov/files/styles/flexheight/public/2023-12/logo-govhub-notext-dark-transparent.png?itok=ZuRhOtl_" width="1000" height="559" alt="GovHub logo">                 </div>`
- XPath: `.service-top__logo-wrapper`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Did you find what you were looking for on this page?</h2>`
- XPath: `#upper-feedback-content > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-yes-button-15031">Yes</label>`
- XPath: `label[for="feedback-yes-button-15031"]`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-no-button-15031">No</label>`
- XPath: `label[for="feedback-no-button-15031"]`

### https://digital.georgia.gov/services/orchard-design-system

#### Rule: [aria-prohibited-attr](https://dequeuniversity.com/rules/axe/4.11/aria-prohibited-attr?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div class="content-icon__image" aria-label="Warning notification bell icon">`
- XPath: `.content-icon__image`

#### Rule: [image-redundant-alt](https://dequeuniversity.com/rules/axe/4.11/image-redundant-alt?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: Alternative text of images should not be repeated as text
- HTML: `<img loading="lazy" src="/sites/digital.georgia.gov/files/styles/4_3_720px_x_540px_/public/2025-09/Georga%20Gateway%20A_1.png?h=ed850751&amp;itok=raT18MZM" width="720" height="540" alt="Georgia Gateway">`
- XPath: `img[alt="Georgia Gateway"]`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="service-top__summary">`
- XPath: `.service-top__summary`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="service-top__logo-wrapper">                               <img loading="lazy" src="/sites/digital.georgia.gov/files/styles/flexheight/public/2023-11/Orchard%20logo_0.png?itok=aGXh5g7E" width="675" height="277" alt="Orchard Design System logo">                 </div>`
- XPath: `.service-top__logo-wrapper`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Did you find what you were looking for on this page?</h2>`
- XPath: `#upper-feedback-content > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-yes-button-18591">Yes</label>`
- XPath: `label[for="feedback-yes-button-18591"]`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-no-button-18591">No</label>`
- XPath: `label[for="feedback-no-button-18591"]`

### https://digital.georgia.gov/services/usability-testing

#### Rule: [frame-title](https://dequeuniversity.com/rules/axe/4.11/frame-title?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Frames must have an accessible name
- HTML: `<iframe width="640" height="360" src="https://www.youtube...." frameborder="0" allow="accelerometer; autop..." referrerpolicy="strict-origin-when-c..." allowfullscreen="">`
- XPath: `iframe`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="service-top__summary">`
- XPath: `.service-top__summary`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Did you find what you were looking for on this page?</h2>`
- XPath: `#upper-feedback-content > h2`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-yes-button-15916">Yes</label>`
- XPath: `label[for="feedback-yes-button-15916"]`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-no-button-15916">No</label>`
- XPath: `label[for="feedback-no-button-15916"]`

### https://digital.georgia.gov/hosting-and-support

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Did you find what you were looking for on this page?</h2>`
- XPath: `#upper-feedback-content > h2`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-yes-button-14">Yes</label>`
- XPath: `label[for="feedback-yes-button-14"]`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-no-button-14">No</label>`
- XPath: `label[for="feedback-no-button-14"]`

### https://digital.georgia.gov/case-studies/chatbots-provided-timely-support

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3>Born of pandemic, Georgia’s chatbot opened another avenue to answers</h3>`
- XPath: `h3:nth-child(2)`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Did you find what you were looking for on this page?</h2>`
- XPath: `#upper-feedback-content > h2`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-yes-button-17416">Yes</label>`
- XPath: `label[for="feedback-yes-button-17416"]`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-no-button-17416">No</label>`
- XPath: `label[for="feedback-no-button-17416"]`

### https://digital.georgia.gov/contacts/former-web-content-support-specialist-charronda-king

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

### https://digital.georgia.gov/contacts/support-desk

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

### https://digital.georgia.gov/resources

#### Rule: [aria-prohibited-attr](https://dequeuniversity.com/rules/axe/4.11/aria-prohibited-attr?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div class="content-icon__image" aria-label="Number 1 icon">`
- XPath: `div[aria-label="Number 1 icon"]`

**Failure 2:**
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div class="content-icon__image" aria-label="Number 2 icon">`
- XPath: `div[aria-label="Number 2 icon"]`

**Failure 3:**
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div class="content-icon__image" aria-label="Number 3 icon">`
- XPath: `div[aria-label="Number 3 icon"]`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="promo-teaser__summary">`
- XPath: `.layout-section__region-item--no-card > .promo-teaser.promo-teaser--text.promo-teaser--no-label > .promo-teaser__summary`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<section class="layout-section" data-child-type="" data-has-auto-bg="false" data-child-has-card="false" data-child-has-hero="false" data-color-role="automatic" data-layout-type="thirds-one-one-one" data-is-super="false" data-has-background-...="false" style="--section-bg-color: ...">`
- XPath: `section[data-layout-type="thirds-one-one-one"]`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<header class="layout-section__header description-text">                 <h2 class="layout-section__title">                         Standards &amp; Branding                       </h2>                               </header>`
- XPath: `section[data-layout-type="thirds-two-one"] > .layout-section__header.description-text`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="link-collection-layout-wrapper__intro">`
- XPath: `div[data-has-layout-above="false"][data-has-card-icon="false"][data-has-link-collection="true"] > .card-wrapper.card-wrapper--wrapper.card-wrapper--embed > .card-wrapper__content > .link-collection-layout-wrapper.has-summary.contextual-region > .link-collection-layout-wrapper__intro`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="link-collection-layout-wrapper__links link-teaser-layout--max-2col">`
- XPath: `.link-teaser-layout--max-2col`

*... and 2 more failures for this rule*

### https://digital.georgia.gov/blog/2025-11-04/help-wanted-online-jobs-site-works

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="authored-by__author-picture">                   <img class="authored-by__author-picture-image" src="/sites/digital.georgia.gov/files/styles/square/public/2024-10/3575.jpg?h=17730c63&amp;itok=yw_Rh9e6" alt="Photo of Mary Liebowitz">             </div>`
- XPath: `.authored-by__author-picture`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="authored-by__author-summary">`
- XPath: `.authored-by__author-summary`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Did you find what you were looking for on this page?</h2>`
- XPath: `#upper-feedback-content > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-yes-button-20451">Yes</label>`
- XPath: `label[for="feedback-yes-button-20451"]`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-no-button-20451">No</label>`
- XPath: `label[for="feedback-no-button-20451"]`

*... and 4 more failures for this rule*

### https://digital.georgia.gov/resources/case-studies

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Did you find what you were looking for on this page?</h2>`
- XPath: `#upper-feedback-content > h2`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-yes-button-15811">Yes</label>`
- XPath: `label[for="feedback-yes-button-15811"]`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-no-button-15811">No</label>`
- XPath: `label[for="feedback-no-button-15811"]`

### https://digital.georgia.gov/resources/glossary

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Did you find what you were looking for on this page?</h2>`
- XPath: `#upper-feedback-content > h2`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-yes-button-2936">Yes</label>`
- XPath: `label[for="feedback-yes-button-2936"]`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-no-button-2936">No</label>`
- XPath: `label[for="feedback-no-button-2936"]`

### https://digital.georgia.gov/resources/hub

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h4 id="pagination-heading" class="visually-hidden">Pagination</h4>`
- XPath: `#pagination-heading`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

### https://digital.georgia.gov/resources/social-media-policy

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Did you find what you were looking for on this page?</h2>`
- XPath: `#upper-feedback-content > h2`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-yes-button-2816">Yes</label>`
- XPath: `label[for="feedback-yes-button-2816"]`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-no-button-2816">No</label>`
- XPath: `label[for="feedback-no-button-2816"]`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<span>Back to top</span>`
- XPath: `.content-page__desktop > .accordion-wrapper > .link-collection-layout-wrapper.book--link-collection.contextual-region > .back-to-top[href$="social-media-policy"] > span`

### https://digital.georgia.gov/1-almost-blank-canvas

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Did you find what you were looking for on this page?</h2>`
- XPath: `#upper-feedback-content > h2`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-yes-button-94">Yes</label>`
- XPath: `label[for="feedback-yes-button-94"]`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-no-button-94">No</label>`
- XPath: `label[for="feedback-no-button-94"]`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<span>Back to top</span>`
- XPath: `.content-page__desktop > .accordion-wrapper > .link-collection-layout-wrapper.book--link-collection.contextual-region > .back-to-top[href$="choosing-right-theme"] > span`

### https://digital.georgia.gov/1-consider-your-users

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3>Think about mobile first, and avoid downloads whenever possible</h3>`
- XPath: `h3:nth-child(2)`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Did you find what you were looking for on this page?</h2>`
- XPath: `#upper-feedback-content > h2`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-yes-button-341">Yes</label>`
- XPath: `label[for="feedback-yes-button-341"]`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-no-button-341">No</label>`
- XPath: `label[for="feedback-no-button-341"]`

### https://digital.georgia.gov/1-creating-document-structure

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3>Enabling the navigation pane</h3>`
- XPath: `h3:nth-child(2)`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Did you find what you were looking for on this page?</h2>`
- XPath: `#upper-feedback-content > h2`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-yes-button-766">Yes</label>`
- XPath: `label[for="feedback-yes-button-766"]`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-no-button-766">No</label>`
- XPath: `label[for="feedback-no-button-766"]`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<span>Back to top</span>`
- XPath: `.content-page__desktop > .accordion-wrapper > .link-collection-layout-wrapper.book--link-collection.contextual-region > .back-to-top > span`

### https://digital.georgia.gov/1-gather-and-write-your-content

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Did you find what you were looking for on this page?</h2>`
- XPath: `#upper-feedback-content > h2`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-yes-button-97">Yes</label>`
- XPath: `label[for="feedback-yes-button-97"]`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-no-button-97">No</label>`
- XPath: `label[for="feedback-no-button-97"]`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<span>Back to top</span>`
- XPath: `.content-page__desktop > .accordion-wrapper > .link-collection-layout-wrapper.book--link-collection.contextual-region > .back-to-top[href="/getting-started-your-website"] > span`

### https://digital.georgia.gov/2-adding-alt-text-images-tables

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Did you find what you were looking for on this page?</h2>`
- XPath: `#upper-feedback-content > h2`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-yes-button-771">Yes</label>`
- XPath: `label[for="feedback-yes-button-771"]`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-no-button-771">No</label>`
- XPath: `label[for="feedback-no-button-771"]`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<span>Back to top</span>`
- XPath: `.content-page__desktop > .accordion-wrapper > .link-collection-layout-wrapper.book--link-collection.contextual-region > .back-to-top > span`

### https://digital.georgia.gov/2-advantages-themes

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Did you find what you were looking for on this page?</h2>`
- XPath: `#upper-feedback-content > h2`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-yes-button-95">Yes</label>`
- XPath: `label[for="feedback-yes-button-95"]`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-no-button-95">No</label>`
- XPath: `label[for="feedback-no-button-95"]`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<span>Back to top</span>`
- XPath: `.content-page__desktop > .accordion-wrapper > .link-collection-layout-wrapper.book--link-collection.contextual-region > .back-to-top[href$="choosing-right-theme"] > span`

### https://digital.georgia.gov/2-crafting-editorial-calendar

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Did you find what you were looking for on this page?</h2>`
- XPath: `#upper-feedback-content > h2`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-yes-button-106">Yes</label>`
- XPath: `label[for="feedback-yes-button-106"]`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-no-button-106">No</label>`
- XPath: `label[for="feedback-no-button-106"]`

### https://digital.georgia.gov/2-determine-your-main-menu-structure

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Did you find what you were looking for on this page?</h2>`
- XPath: `#upper-feedback-content > h2`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-yes-button-98">Yes</label>`
- XPath: `label[for="feedback-yes-button-98"]`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-no-button-98">No</label>`
- XPath: `label[for="feedback-no-button-98"]`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<span>Back to top</span>`
- XPath: `.content-page__desktop > .accordion-wrapper > .link-collection-layout-wrapper.book--link-collection.contextual-region > .back-to-top[href="/getting-started-your-website"] > span`

### https://digital.georgia.gov/2-understand-platform-file-management

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3>Files can be deleted</h3>`
- XPath: `h3:nth-child(2)`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Did you find what you were looking for on this page?</h2>`
- XPath: `#upper-feedback-content > h2`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-yes-button-346">Yes</label>`
- XPath: `label[for="feedback-yes-button-346"]`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-no-button-346">No</label>`
- XPath: `label[for="feedback-no-button-346"]`

### https://digital.georgia.gov/2024-year-review

#### Rule: [aria-prohibited-attr](https://dequeuniversity.com/rules/axe/4.11/aria-prohibited-attr?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div class="content-icon__image" aria-label="Conversation icon">`
- XPath: `section[data-color-role="white"][data-layout-type="thirds-two-one"][data-has-auto-bg="false"]:nth-child(3) > .layout-section__content > .layout-section__region[data-region-type="one-third"] > .layout-section__region-item--card[data-has-card-icon="true"][data-has-card="true"] > .card-wrapper--has-icon.card-wrapper.card-wrapper--wrapper > .card-wrapper__icon > .content-icon > .content-icon__image[aria-label="Conversation icon"]`

**Failure 2:**
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div class="content-icon__image" aria-label="Conversation icon">`
- XPath: `.layout-section__region[data-region-type="one-third"]:nth-child(1) > .layout-section__region-item--card[data-has-card-icon="true"][data-has-card="true"] > .card-wrapper--has-icon.card-wrapper.card-wrapper--wrapper > .card-wrapper__icon > .content-icon > .content-icon__image[aria-label="Conversation icon"]`

**Failure 3:**
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div class="content-icon__image" aria-label="Question icon">`
- XPath: `div[aria-label="Question icon"]`

**Failure 4:**
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div class="content-icon__image" aria-label="Rating icon">`
- XPath: `div[aria-label="Rating icon"]`

### https://digital.georgia.gov/2023-year-review

#### Rule: [aria-prohibited-attr](https://dequeuniversity.com/rules/axe/4.11/aria-prohibited-attr?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div class="content-icon__image" aria-label="Conversation icon">`
- XPath: `div[aria-label="Conversation icon"]`

**Failure 2:**
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div class="content-icon__image" aria-label="Computer icon">`
- XPath: `div[aria-label="Computer icon"]`

**Failure 3:**
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div class="content-icon__image" aria-label="Cloud icon">`
- XPath: `div[aria-label="Cloud icon"]`

### https://digital.georgia.gov/3-determine-your-homepage-content

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Did you find what you were looking for on this page?</h2>`
- XPath: `#upper-feedback-content > h2`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-yes-button-99">Yes</label>`
- XPath: `label[for="feedback-yes-button-99"]`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-no-button-99">No</label>`
- XPath: `label[for="feedback-no-button-99"]`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<span>Back to top</span>`
- XPath: `.content-page__desktop > .accordion-wrapper > .link-collection-layout-wrapper.book--link-collection.contextual-region > .back-to-top[href="/getting-started-your-website"] > span`

### https://digital.georgia.gov/3-everything-moderation

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Did you find what you were looking for on this page?</h2>`
- XPath: `#upper-feedback-content > h2`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-yes-button-356">Yes</label>`
- XPath: `label[for="feedback-yes-button-356"]`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-no-button-356">No</label>`
- XPath: `label[for="feedback-no-button-356"]`

### https://digital.georgia.gov/3-how-choose-theme

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Did you find what you were looking for on this page?</h2>`
- XPath: `#upper-feedback-content > h2`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-yes-button-96">Yes</label>`
- XPath: `label[for="feedback-yes-button-96"]`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-no-button-96">No</label>`
- XPath: `label[for="feedback-no-button-96"]`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<span>Back to top</span>`
- XPath: `.content-page__desktop > .accordion-wrapper > .link-collection-layout-wrapper.book--link-collection.contextual-region > .back-to-top[href$="choosing-right-theme"] > span`

### https://digital.georgia.gov/3-hyperlinks-context

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3>Document properties &amp; metadata</h3>`
- XPath: `main > h3`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Did you find what you were looking for on this page?</h2>`
- XPath: `#upper-feedback-content > h2`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-yes-button-776">Yes</label>`
- XPath: `label[for="feedback-yes-button-776"]`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-no-button-776">No</label>`
- XPath: `label[for="feedback-no-button-776"]`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<span>Back to top</span>`
- XPath: `.content-page__desktop > .accordion-wrapper > .link-collection-layout-wrapper.book--link-collection.contextual-region > .back-to-top > span`

### https://digital.georgia.gov/3-writing-tips-bloggers

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Did you find what you were looking for on this page?</h2>`
- XPath: `#upper-feedback-content > h2`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-yes-button-107">Yes</label>`
- XPath: `label[for="feedback-yes-button-107"]`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-no-button-107">No</label>`
- XPath: `label[for="feedback-no-button-107"]`

### https://digital.georgia.gov/4-dealing-comments

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Did you find what you were looking for on this page?</h2>`
- XPath: `#upper-feedback-content > h2`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-yes-button-108">Yes</label>`
- XPath: `label[for="feedback-yes-button-108"]`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-no-button-108">No</label>`
- XPath: `label[for="feedback-no-button-108"]`

### https://digital.georgia.gov/4-pick-theme

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Did you find what you were looking for on this page?</h2>`
- XPath: `#upper-feedback-content > h2`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-yes-button-100">Yes</label>`
- XPath: `label[for="feedback-yes-button-100"]`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-no-button-100">No</label>`
- XPath: `label[for="feedback-no-button-100"]`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<span>Back to top</span>`
- XPath: `.content-page__desktop > .accordion-wrapper > .link-collection-layout-wrapper.book--link-collection.contextual-region > .back-to-top[href="/getting-started-your-website"] > span`

### https://digital.georgia.gov/4-turning-accessible-word-docs-accessible-pdfs

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3>Adobe PDF Maker</h3>`
- XPath: `main > h3`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Did you find what you were looking for on this page?</h2>`
- XPath: `#upper-feedback-content > h2`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-yes-button-786">Yes</label>`
- XPath: `label[for="feedback-yes-button-786"]`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-no-button-786">No</label>`
- XPath: `label[for="feedback-no-button-786"]`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<span>Back to top</span>`
- XPath: `.content-page__desktop > .accordion-wrapper > .link-collection-layout-wrapper.book--link-collection.contextual-region > .back-to-top > span`

### https://digital.georgia.gov/404-page-not-found

#### Rule: [aria-prohibited-attr](https://dequeuniversity.com/rules/axe/4.11/aria-prohibited-attr?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div class="content-icon__image" aria-label="Question icon">`
- XPath: `div[aria-label="Question icon"]`

**Failure 2:**
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div class="content-icon__image" aria-label="Computer icon">`
- XPath: `div[aria-label="Computer icon"]`

**Failure 3:**
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div class="content-icon__image" aria-label="Read file icon">`
- XPath: `div[aria-label="Read file icon"]`

### https://digital.georgia.gov/5-attend-training-session

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Did you find what you were looking for on this page?</h2>`
- XPath: `#upper-feedback-content > h2`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-yes-button-101">Yes</label>`
- XPath: `label[for="feedback-yes-button-101"]`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-no-button-101">No</label>`
- XPath: `label[for="feedback-no-button-101"]`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<span>Back to top</span>`
- XPath: `.content-page__desktop > .accordion-wrapper > .link-collection-layout-wrapper.book--link-collection.contextual-region > .back-to-top[href="/getting-started-your-website"] > span`

### https://digital.georgia.gov/5-blogs-help-you-blog

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Did you find what you were looking for on this page?</h2>`
- XPath: `#upper-feedback-content > h2`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-yes-button-109">Yes</label>`
- XPath: `label[for="feedback-yes-button-109"]`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-no-button-109">No</label>`
- XPath: `label[for="feedback-no-button-109"]`

### https://digital.georgia.gov/6-conclusion

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Did you find what you were looking for on this page?</h2>`
- XPath: `#upper-feedback-content > h2`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-yes-button-1751">Yes</label>`
- XPath: `label[for="feedback-yes-button-1751"]`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-no-button-1751">No</label>`
- XPath: `label[for="feedback-no-button-1751"]`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<span>Back to top</span>`
- XPath: `.content-page__desktop > .accordion-wrapper > .link-collection-layout-wrapper.book--link-collection.contextual-region > .back-to-top > span`

### https://digital.georgia.gov/6-put-your-content-your-website

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Did you find what you were looking for on this page?</h2>`
- XPath: `#upper-feedback-content > h2`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-yes-button-102">Yes</label>`
- XPath: `label[for="feedback-yes-button-102"]`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-no-button-102">No</label>`
- XPath: `label[for="feedback-no-button-102"]`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<span>Back to top</span>`
- XPath: `.content-page__desktop > .accordion-wrapper > .link-collection-layout-wrapper.book--link-collection.contextual-region > .back-to-top[href="/getting-started-your-website"] > span`

### https://digital.georgia.gov/amanda-de-zayas

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="bio-top__data--image">                             <img loading="lazy" src="/sites/digital.georgia.gov/files/styles/square/public/2025-01/Amanda%20de%20Zayas%20headshot.jpg?h=41e71851&amp;itok=-00TSZ-M" width="1000" height="1000" alt="Headshot of Amanda de Zayas">               </div>`
- XPath: `.bio-top__data--image`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="bio-top__teaser">      <p>“I help organizations communicate with the audiences they're trying to reach and help each side achieve their goal in a given situation. In a way, I'm like a translator, making sure each side understands the other.”</p>   </div>`
- XPath: `.bio-top__teaser`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2 class="related-news__title">News Entries by Amanda de Zayas</h2>`
- XPath: `.related-news__title`

### https://digital.georgia.gov/ana-santos

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="bio-top__data--image">                             <img loading="lazy" src="/sites/digital.georgia.gov/files/styles/square/public/2020-06/ana.jpg?h=a7e6d17b&amp;itok=-Krvyrkl" width="1000" height="1000" alt="Ana Santos">               </div>`
- XPath: `.bio-top__data--image`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="bio-top__teaser">      <p>Ana Santos served as a Content Strategist until 2022.</p>   </div>`
- XPath: `.bio-top__teaser`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2 class="related-news__title">News Entries by Ana Santos</h2>`
- XPath: `.related-news__title`

### https://digital.georgia.gov/analytics-training

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Did you find what you were looking for on this page?</h2>`
- XPath: `#upper-feedback-content > h2`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-yes-button-2106">Yes</label>`
- XPath: `label[for="feedback-yes-button-2106"]`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-no-button-2106">No</label>`
- XPath: `label[for="feedback-no-button-2106"]`

### https://digital.georgia.gov/ann-masters

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="bio-top__data--image">                             <img loading="lazy" src="/sites/digital.georgia.gov/files/styles/square/public/2020-05/amasters_pic.jpg?h=55541bb6&amp;itok=-IZwhYyS" width="1000" height="1000" alt="Ann Masters headshot">               </div>`
- XPath: `.bio-top__data--image`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="bio-top__teaser">      <p>Ann Masters served as the content strategist&nbsp;for Digital Services Georgia until 2021.</p>   </div>`
- XPath: `.bio-top__teaser`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2 class="related-news__title">News Entries by Ann Masters</h2>`
- XPath: `.related-news__title`

### https://digital.georgia.gov/april-lentini

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="bio-top__data--image">                             <img loading="lazy" src="/sites/digital.georgia.gov/files/styles/square/public/profile/April.jpg?h=a2f616d4&amp;itok=QSx72wP-" width="1000" height="1000" alt="April Lentini head shot">               </div>`
- XPath: `.bio-top__data--image`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="bio-top__teaser">      <p>April Lentini served as the Content Strategist for Digital Services Georgia from 2016 to 2017.</p>   </div>`
- XPath: `.bio-top__teaser`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2 class="related-news__title">News Entries by April Lentini</h2>`
- XPath: `.related-news__title`

### https://digital.georgia.gov/best-practices

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Did you find what you were looking for on this page?</h2>`
- XPath: `#upper-feedback-content > h2`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-yes-button-19421">Yes</label>`
- XPath: `label[for="feedback-yes-button-19421"]`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-no-button-19421">No</label>`
- XPath: `label[for="feedback-no-button-19421"]`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<span>Back to top</span>`
- XPath: `.content-page__desktop > .accordion-wrapper > .link-collection-layout-wrapper.book--link-collection.contextual-region > .back-to-top > span`

### https://digital.georgia.gov/bethany-mcdaniel

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="bio-top__data--image">                             <img loading="lazy" src="/sites/digital.georgia.gov/files/styles/square/public/profile/BethanyHeadshotCropped.jpg?h=efb2bfc5&amp;itok=wDkxkDRe" width="1000" height="1000" alt="Bethany McDaniel head shot">               </div>`
- XPath: `.bio-top__data--image`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="bio-top__teaser">      <p>Bethany McDaniel served as the Editorial Director for Digital Services Georgia from 2013 to 2016.</p>   </div>`
- XPath: `.bio-top__teaser`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2 class="related-news__title">News Entries by Bethany McDaniel</h2>`
- XPath: `.related-news__title`

### https://digital.georgia.gov/blog

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h4 id="pagination-heading" class="visually-hidden">Pagination</h4>`
- XPath: `#pagination-heading`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [list](https://dequeuniversity.com/rules/axe/4.11/list?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) (Level A)

**Failure 1:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul class="pager__item js-pager__items pager__items--is-first">`
- XPath: `.js-pager__items`

### https://digital.georgia.gov/building-form

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="header" class="header__wrapper header__wrapper--digital" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Did you find what you were looking for on this page?</h2>`
- XPath: `#upper-feedback-content > h2`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-yes-button-19436">Yes</label>`
- XPath: `label[for="feedback-yes-button-19436"]`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-no-button-19436">No</label>`
- XPath: `label[for="feedback-no-button-19436"]`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<span>Back to top</span>`
- XPath: `.content-page__desktop > .accordion-wrapper > .link-collection-layout-wrapper.book--link-collection.contextual-region > .back-to-top > span`

### https://digital.georgia.gov/careers

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Did you find what you were looking for on this page?</h2>`
- XPath: `#upper-feedback-content > h2`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-yes-button-3676">Yes</label>`
- XPath: `label[for="feedback-yes-button-3676"]`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-no-button-3676">No</label>`
- XPath: `label[for="feedback-no-button-3676"]`

