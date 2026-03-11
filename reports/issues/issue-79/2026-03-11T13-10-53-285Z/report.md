# Scan Report: DARK MODE TEST nexxt.com.au

- Issue: https://github.com/mgifford/open-scans/issues/79
- Submitted by: mgifford
- Scanned at: 2026-03-11T13:10:05.533Z
- Engines used: AXE, QUALWEB
- Scan duration: 7.5 minutes
- Total URLs submitted: 37
- Accepted public URLs: 37
- Rejected URLs: 0
- 🌙 Dark mode: None of the scanned URLs support `prefers-color-scheme: dark`
- ALFA outcomes: 0 passed, 0 failed, 0 cantTell, 0 inapplicable
- axe outcomes: 29171 passed, 2183 failed, 256 cantTell, 1478 inapplicable
- Equal Access outcomes: 0 passed, 0 failed (0 unique, 0 duplicate), 0 cantTell, 0 inapplicable
- AccessLint outcomes: 0 passed, 0 failed (0 unique, 0 duplicate), 0 cantTell, 0 inapplicable
- QualWeb outcomes: 13651 passed, 2002 failed, 6362 cantTell, 84 inapplicable
- Duplicate findings caught by later scanners: 1950

## 🎯 Priority: Pages with Most Errors

Focus your efforts on these pages to make the biggest impact (combined scanner unique failures):

| Page | axe Unique | QualWeb | Total Unique | Page Title |
|---|---:|---:|---:|---|
| [View Page](https://nexxt.com.au/category/blog/) | 168 | 224 | **392** | Blog Archives - Nexxt |
| [View Page](https://nexxt.com.au/category/uncategorized/) | 168 | 224 | **392** | Uncategorized Archives - Nexxt |
| [View Page](https://nexxt.com.au/digital-transformation-consulting/) | 69 | 74 | **143** | Digital Transformation Consulting - Nexxt |
| [View Page](https://nexxt.com.au/workflow-automation/) | 67 | 70 | **137** | Workflow Automation Services - Nexxt |
| [View Page](https://nexxt.com.au/insights/) | 61 | 75 | **136** | Insights - Nexxt |
| [View Page](https://nexxt.com.au/insights/2/) | 61 | 75 | **136** | Insights - Nexxt |
| [View Page](https://nexxt.com.au/) | 64 | 71 | **135** | Nexxt - Digital Transformation Consultancy - Nexxt |
| [View Page](https://nexxt.com.au/) | 63 | 71 | **134** | Nexxt - Digital Transformation Consultancy - Nexxt |
| [View Page](https://nexxt.com.au/) | 65 | 68 | **133** | Nexxt - Digital Transformation Consultancy - Nexxt |
| [View Page](https://nexxt.com.au/) | 63 | 68 | **131** | Nexxt - Digital Transformation Consultancy - Nexxt |

## 🔧 Priority: Most Common Issues (ALFA)

These ALFA accessibility issues appear most frequently across your pages:

✅ No ALFA failed rules detected!

## 🔧 Priority: Most Common Issues (axe)

These axe accessibility issues appear most frequently across your pages:

| Rule | Pages Affected | Documentation |
|---|---:|---|
| color-contrast | **37** of 37 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/color-contrast) |
| heading-order | **37** of 37 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/heading-order) |
| landmark-banner-is-top-level | **37** of 37 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/landmark-banner-is-top-level) |
| landmark-contentinfo-is-top-level | **37** of 37 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/landmark-contentinfo-is-top-level) |
| landmark-no-duplicate-banner | **37** of 37 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/landmark-no-duplicate-banner) |
| landmark-unique | **37** of 37 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/landmark-unique) |
| link-name | **37** of 37 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/link-name) |
| list | **37** of 37 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/list) |
| image-alt | **29** of 37 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/image-alt) |
| landmark-no-duplicate-contentinfo | **25** of 37 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/landmark-no-duplicate-contentinfo) |

> 💡 **Tip**: Click on the rule documentation links to learn how to fix each issue. Consider fixing the most common issues first for maximum impact.

> 🤖 **Future Enhancement**: This report will soon include AI-powered fix suggestions for authenticated GitHub users (opt-in only, no auto-run AI).

## 🔍 Cross-Page Patterns: Common HTML Issues

These HTML patterns cause the same accessibility errors across multiple pages. **Fix the pattern once in your codebase to fix it everywhere!**

### 🎯 Top Patterns to Fix (Highest Impact)

#### Pattern 1: Affects 37 page(s) - 148 occurrence(s)

**Scanner**: axe
**Rule**: [list](https://dequeuniversity.com/rules/axe/4.11/list?application=playwright)
**Impact**: serious
**Issue**: <ul> and <ol> must only directly contain <li>, <script> or <template> elements

**HTML Pattern**:
```html
<ul>
```

**XPath** (use in browser DevTools):
```
.footer-links:nth-child(1) > ul
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.footer-links:nth-child(1) > ul')`
5. The element will be highlighted

**Affected Pages**:
- https://nexxt.com.au/
- https://nexxt.com.au/jira-to-azure-devops-migration-services/
- https://nexxt.com.au/office-365-consulting-services-australia/
- https://nexxt.com.au/services/
- https://nexxt.com.au/contact/
- *...and 32 more page(s)*

---

#### Pattern 2: Affects 37 page(s) - 37 occurrence(s)

**Scanner**: axe
**Rule**: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**Issue**: Elements must meet minimum color contrast ratio thresholds

**HTML Pattern**:
```html
<a href="/contact" class="theme-btn">Contact Us</a>
```

**XPath** (use in browser DevTools):
```
.header-left-right > .theme-btn[href$="contact"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.header-left-right > .theme-btn[href$="contact"]')`
5. The element will be highlighted

**Affected Pages**:
- https://nexxt.com.au/
- https://nexxt.com.au/jira-to-azure-devops-migration-services/
- https://nexxt.com.au/office-365-consulting-services-australia/
- https://nexxt.com.au/services/
- https://nexxt.com.au/contact/
- *...and 32 more page(s)*

---

#### Pattern 3: Affects 37 page(s) - 37 occurrence(s)

**Scanner**: axe
**Rule**: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate
**Issue**: Heading levels should only increase by one

**HTML Pattern**:
```html
<h4>Services</h4>
```

**XPath** (use in browser DevTools):
```
.footer-links:nth-child(1) > h4
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.footer-links:nth-child(1) > h4')`
5. The element will be highlighted

**Affected Pages**:
- https://nexxt.com.au/
- https://nexxt.com.au/jira-to-azure-devops-migration-services/
- https://nexxt.com.au/office-365-consulting-services-australia/
- https://nexxt.com.au/services/
- https://nexxt.com.au/contact/
- *...and 32 more page(s)*

---

#### Pattern 4: Affects 37 page(s) - 37 occurrence(s)

**Scanner**: axe
**Rule**: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate
**Issue**: Banner landmark should not be contained in another landmark

**HTML Pattern**:
```html
<header class="header-area">
```

**XPath** (use in browser DevTools):
```
.header-area
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.header-area')`
5. The element will be highlighted

**Affected Pages**:
- https://nexxt.com.au/
- https://nexxt.com.au/jira-to-azure-devops-migration-services/
- https://nexxt.com.au/office-365-consulting-services-australia/
- https://nexxt.com.au/services/
- https://nexxt.com.au/contact/
- *...and 32 more page(s)*

---

#### Pattern 5: Affects 37 page(s) - 37 occurrence(s)

**Scanner**: axe
**Rule**: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate
**Issue**: Document should not have more than one banner landmark

**HTML Pattern**:
```html
<header id="masthead" itemscope="itemscope" itemtype="https://schema.org/WPHeader">
```

**XPath** (use in browser DevTools):
```
#masthead
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('#masthead')`
5. The element will be highlighted

**Affected Pages**:
- https://nexxt.com.au/
- https://nexxt.com.au/jira-to-azure-devops-migration-services/
- https://nexxt.com.au/office-365-consulting-services-australia/
- https://nexxt.com.au/services/
- https://nexxt.com.au/contact/
- *...and 32 more page(s)*

---

#### Pattern 6: Affects 37 page(s) - 37 occurrence(s)

**Scanner**: axe
**Rule**: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate
**Issue**: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

**HTML Pattern**:
```html
<header id="masthead" itemscope="itemscope" itemtype="https://schema.org/WPHeader">
```

**XPath** (use in browser DevTools):
```
#masthead
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('#masthead')`
5. The element will be highlighted

**Affected Pages**:
- https://nexxt.com.au/
- https://nexxt.com.au/jira-to-azure-devops-migration-services/
- https://nexxt.com.au/office-365-consulting-services-australia/
- https://nexxt.com.au/services/
- https://nexxt.com.au/contact/
- *...and 32 more page(s)*

---

#### Pattern 7: Affects 37 page(s) - 37 occurrence(s)

**Scanner**: axe
**Rule**: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**Issue**: Links must have discernible text

**HTML Pattern**:
```html
<a href="https://www.linkedin.com/company/nexxtgroup/">
        <i class="iconoir-linkedin"></i>
    </a>
```

**XPath** (use in browser DevTools):
```
.social-links > li > a
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.social-links > li > a')`
5. The element will be highlighted

**Affected Pages**:
- https://nexxt.com.au/
- https://nexxt.com.au/jira-to-azure-devops-migration-services/
- https://nexxt.com.au/office-365-consulting-services-australia/
- https://nexxt.com.au/services/
- https://nexxt.com.au/contact/
- *...and 32 more page(s)*

---

#### Pattern 8: Affects 29 page(s) - 29 occurrence(s)

**Scanner**: axe
**Rule**: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**Issue**: Elements must meet minimum color contrast ratio thresholds

**HTML Pattern**:
```html
<h6 class="section-subtitle">Contact</h6>
```

**XPath** (use in browser DevTools):
```
.contact-form-body > h6
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.contact-form-body > h6')`
5. The element will be highlighted

**Affected Pages**:
- https://nexxt.com.au/
- https://nexxt.com.au/jira-to-azure-devops-migration-services/
- https://nexxt.com.au/office-365-consulting-services-australia/
- https://nexxt.com.au/services/
- https://nexxt.com.au/contact/
- *...and 24 more page(s)*

---

#### Pattern 9: Affects 29 page(s) - 29 occurrence(s)

**Scanner**: axe
**Rule**: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**Issue**: Elements must meet minimum color contrast ratio thresholds

**HTML Pattern**:
```html
<a target="_blank" href="mailto:info@nexxt.com.au">info@nexxt.com.au</a>
```

**XPath** (use in browser DevTools):
```
a[target="_blank"][href$="mailto:info@nexxt.com.au"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('a[target="_blank"][href$="mailto:info@nexxt.com.au"]')`
5. The element will be highlighted

**Affected Pages**:
- https://nexxt.com.au/
- https://nexxt.com.au/jira-to-azure-devops-migration-services/
- https://nexxt.com.au/office-365-consulting-services-australia/
- https://nexxt.com.au/services/
- https://nexxt.com.au/contact/
- *...and 24 more page(s)*

---

#### Pattern 10: Affects 29 page(s) - 29 occurrence(s)

**Scanner**: axe
**Rule**: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**Issue**: Elements must meet minimum color contrast ratio thresholds

**HTML Pattern**:
```html
<input type="submit" class="hs-button primary large" value="Submit">
```

**XPath** (use in browser DevTools):
```
#hs-form-iframe-0
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('#hs-form-iframe-0')`
5. The element will be highlighted

**Affected Pages**:
- https://nexxt.com.au/
- https://nexxt.com.au/jira-to-azure-devops-migration-services/
- https://nexxt.com.au/office-365-consulting-services-australia/
- https://nexxt.com.au/services/
- https://nexxt.com.au/contact/
- *...and 24 more page(s)*

---

#### Pattern 11: Affects 29 page(s) - 29 occurrence(s)

**Scanner**: axe
**Rule**: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**Issue**: Elements must meet minimum color contrast ratio thresholds

**HTML Pattern**:
```html
<p>Workshops delivered</p>
```

**XPath** (use in browser DevTools):
```
li:nth-child(1) > p
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('li:nth-child(1) > p')`
5. The element will be highlighted

**Affected Pages**:
- https://nexxt.com.au/
- https://nexxt.com.au/jira-to-azure-devops-migration-services/
- https://nexxt.com.au/office-365-consulting-services-australia/
- https://nexxt.com.au/services/
- https://nexxt.com.au/contact/
- *...and 24 more page(s)*

---

#### Pattern 12: Affects 29 page(s) - 29 occurrence(s)

**Scanner**: axe
**Rule**: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**Issue**: Elements must meet minimum color contrast ratio thresholds

**HTML Pattern**:
```html
<p>Delivered Successfully</p>
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
- https://nexxt.com.au/
- https://nexxt.com.au/jira-to-azure-devops-migration-services/
- https://nexxt.com.au/office-365-consulting-services-australia/
- https://nexxt.com.au/services/
- https://nexxt.com.au/contact/
- *...and 24 more page(s)*

---

#### Pattern 13: Affects 29 page(s) - 29 occurrence(s)

**Scanner**: axe
**Rule**: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**Issue**: Elements must meet minimum color contrast ratio thresholds

**HTML Pattern**:
```html
<p>Professionals Coached</p>
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
- https://nexxt.com.au/
- https://nexxt.com.au/jira-to-azure-devops-migration-services/
- https://nexxt.com.au/office-365-consulting-services-australia/
- https://nexxt.com.au/services/
- https://nexxt.com.au/contact/
- *...and 24 more page(s)*

---

#### Pattern 14: Affects 29 page(s) - 29 occurrence(s)

**Scanner**: axe
**Rule**: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate
**Issue**: Heading levels should only increase by one

**HTML Pattern**:
```html
<h6 class="section-subtitle">Contact</h6>
```

**XPath** (use in browser DevTools):
```
.contact-form-body > h6
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.contact-form-body > h6')`
5. The element will be highlighted

**Affected Pages**:
- https://nexxt.com.au/
- https://nexxt.com.au/jira-to-azure-devops-migration-services/
- https://nexxt.com.au/office-365-consulting-services-australia/
- https://nexxt.com.au/services/
- https://nexxt.com.au/contact/
- *...and 24 more page(s)*

---

#### Pattern 15: Affects 29 page(s) - 29 occurrence(s)

**Scanner**: axe
**Rule**: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate
**Issue**: Heading levels should only increase by one

**HTML Pattern**:
```html
<h4>Contact Info</h4>
```

**XPath** (use in browser DevTools):
```
.contact-info:nth-child(1) > h4
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.contact-info:nth-child(1) > h4')`
5. The element will be highlighted

**Affected Pages**:
- https://nexxt.com.au/
- https://nexxt.com.au/jira-to-azure-devops-migration-services/
- https://nexxt.com.au/office-365-consulting-services-australia/
- https://nexxt.com.au/services/
- https://nexxt.com.au/contact/
- *...and 24 more page(s)*

---

> 💡 **Pro Tip**: These patterns likely come from shared components or templates in your codebase. Fix them in the component/template source, and the fix will propagate to all affected pages.

## 📊 Detailed Results

Complete scan results for all tested pages:

| Submitted URL | Final URL | Status | HTTP | Redirected | Time (ms) | axe Unique | ALFA Unique | Equal Access Unique | AccessLint Unique | Duplicates | Notes |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|
| https://nexxt.com.au/ | https://nexxt.com.au/ | OK | 200 | no | 13973 | 63 | 0 | 0 | 0 | 64 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, heading-order, image-alt, landmark-banner-is-top-level, landmark-contentinfo-is-top-level, landmark-no-duplicate-banner, landmark-unique, link-name, list |
| https://nexxt.com.au/jira-to-azure-devops-migration-services/ | https://nexxt.com.au/jira-to-azure-devops-migration-services/ | OK | 200 | no | 12927 | 50 | 0 | 0 | 0 | 44 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, heading-order, image-alt, landmark-banner-is-top-level, landmark-contentinfo-is-top-level, landmark-no-duplicate-banner, landmark-no-duplicate-contentinfo, landmark-one-main, landmark-unique, link-name, list, region |
| https://nexxt.com.au/office-365-consulting-services-australia/ | https://nexxt.com.au/office-365-consulting-services-australia/ | OK | 200 | no | 12206 | 52 | 0 | 0 | 0 | 44 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, heading-order, image-alt, landmark-banner-is-top-level, landmark-contentinfo-is-top-level, landmark-no-duplicate-banner, landmark-no-duplicate-contentinfo, landmark-one-main, landmark-unique, link-name, list, region |
| https://nexxt.com.au/services/ | https://nexxt.com.au/services/ | OK | 200 | no | 12602 | 36 | 0 | 0 | 0 | 34 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, heading-order, image-alt, landmark-banner-is-top-level, landmark-contentinfo-is-top-level, landmark-no-duplicate-banner, landmark-unique, link-name, list, page-has-heading-one |
| https://nexxt.com.au/contact/ | https://nexxt.com.au/contact/ | OK | 200 | no | 10365 | 23 | 0 | 0 | 0 | 17 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, heading-order, image-alt, landmark-banner-is-top-level, landmark-contentinfo-is-top-level, landmark-no-duplicate-banner, landmark-unique, link-name, list, page-has-heading-one |
| https://nexxt.com.au/20-years-of-agile-manifesto/ | https://nexxt.com.au/20-years-of-agile-manifesto/ | OK | 200 | no | 11950 | 71 | 0 | 0 | 0 | 34 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, heading-order, image-alt, landmark-banner-is-top-level, landmark-contentinfo-is-top-level, landmark-no-duplicate-banner, landmark-no-duplicate-contentinfo, landmark-one-main, landmark-unique, link-name, list, region |
| https://nexxt.com.au/about-us/ | https://nexxt.com.au/about-us/ | OK | 200 | no | 12127 | 39 | 0 | 0 | 0 | 38 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, heading-order, image-alt, landmark-banner-is-top-level, landmark-contentinfo-is-top-level, landmark-no-duplicate-banner, landmark-unique, link-name, list |
| https://nexxt.com.au/beyond-traditional-hiring-how-to-build-an-agile-future-ready-project-team/ | https://nexxt.com.au/beyond-traditional-hiring-how-to-build-an-agile-future-ready-project-team/ | OK | 200 | no | 11594 | 52 | 0 | 0 | 0 | 42 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, heading-order, image-alt, landmark-banner-is-top-level, landmark-contentinfo-is-top-level, landmark-no-duplicate-banner, landmark-no-duplicate-contentinfo, landmark-one-main, landmark-unique, link-name, list, region |
| https://nexxt.com.au/change-management-consulting-brisbane/ | https://nexxt.com.au/change-management-consulting-brisbane/ | OK | 200 | no | 12467 | 52 | 0 | 0 | 0 | 44 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, heading-order, image-alt, landmark-banner-is-top-level, landmark-contentinfo-is-top-level, landmark-no-duplicate-banner, landmark-no-duplicate-contentinfo, landmark-one-main, landmark-unique, link-name, list, region |
| https://nexxt.com.au/coaching-and-uplift/ | https://nexxt.com.au/coaching-and-uplift/ | OK | 200 | no | 12214 | 54 | 0 | 0 | 0 | 42 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, empty-heading, heading-order, image-alt, landmark-banner-is-top-level, landmark-contentinfo-is-top-level, landmark-no-duplicate-banner, landmark-unique, link-name, list |
| https://nexxt.com.au/decision-velocity-business-2025/ | https://nexxt.com.au/decision-velocity-business-2025/ | OK | 200 | no | 11871 | 52 | 0 | 0 | 0 | 42 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, heading-order, image-alt, landmark-banner-is-top-level, landmark-contentinfo-is-top-level, landmark-no-duplicate-banner, landmark-no-duplicate-contentinfo, landmark-one-main, landmark-unique, link-name, list, region |
| https://nexxt.com.au/digital-transformation-consulting/ | https://nexxt.com.au/digital-transformation-consulting/ | OK | 200 | no | 12132 | 69 | 0 | 0 | 0 | 76 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, heading-order, image-alt, landmark-banner-is-top-level, landmark-contentinfo-is-top-level, landmark-no-duplicate-banner, landmark-no-duplicate-contentinfo, landmark-one-main, landmark-unique, link-name, list, region |
| https://nexxt.com.au/insights-inner/ | https://nexxt.com.au/insights-inner/ | OK | 200 | no | 12254 | 41 | 0 | 0 | 0 | 42 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, color-contrast, heading-order, landmark-banner-is-top-level, landmark-contentinfo-is-top-level, landmark-no-duplicate-banner, landmark-no-duplicate-contentinfo, landmark-one-main, landmark-unique, link-name, list, page-has-heading-one, region |
| https://nexxt.com.au/insights/ | https://nexxt.com.au/insights/ | OK | 200 | no | 12057 | 61 | 0 | 0 | 0 | 71 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, color-contrast, heading-order, image-alt, landmark-banner-is-top-level, landmark-contentinfo-is-top-level, landmark-no-duplicate-banner, landmark-unique, link-name, list, page-has-heading-one |
| https://nexxt.com.au/it-consultant-brisbane-sme-guide/ | https://nexxt.com.au/it-consultant-brisbane-sme-guide/ | OK | 200 | no | 12658 | 52 | 0 | 0 | 0 | 44 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, heading-order, image-alt, landmark-banner-is-top-level, landmark-contentinfo-is-top-level, landmark-no-duplicate-banner, landmark-no-duplicate-contentinfo, landmark-one-main, landmark-unique, link-name, list, region |
| https://nexxt.com.au/microsoft-teams-training/ | https://nexxt.com.au/microsoft-teams-training/ | OK | 200 | no | 11230 | 54 | 0 | 0 | 0 | 46 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, heading-order, image-alt, landmark-banner-is-top-level, landmark-contentinfo-is-top-level, landmark-no-duplicate-banner, landmark-no-duplicate-contentinfo, landmark-one-main, landmark-unique, link-name, list, region |
| https://nexxt.com.au/privacy-policy/ | https://nexxt.com.au/privacy-policy/ | OK | 200 | no | 11813 | 15 | 0 | 0 | 0 | 6 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, heading-order, landmark-banner-is-top-level, landmark-contentinfo-is-top-level, landmark-no-duplicate-banner, landmark-no-duplicate-contentinfo, landmark-one-main, landmark-unique, link-name, list, region |
| https://nexxt.com.au/project-delivery-assurance-audit/ | https://nexxt.com.au/project-delivery-assurance-audit/ | OK | 200 | no | 11591 | 52 | 0 | 0 | 0 | 44 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, heading-order, image-alt, landmark-banner-is-top-level, landmark-contentinfo-is-top-level, landmark-no-duplicate-banner, landmark-no-duplicate-contentinfo, landmark-one-main, landmark-unique, link-name, list, region |
| https://nexxt.com.au/project-delivery/ | https://nexxt.com.au/project-delivery/ | OK | 200 | no | 12633 | 54 | 0 | 0 | 0 | 42 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, empty-heading, heading-order, image-alt, landmark-banner-is-top-level, landmark-contentinfo-is-top-level, landmark-no-duplicate-banner, landmark-unique, link-name, list |
| https://nexxt.com.au/running-a-workshop-part-2-the-art-of-skillful-facilitation/ | https://nexxt.com.au/running-a-workshop-part-2-the-art-of-skillful-facilitation/ | OK | 200 | no | 12245 | 50 | 0 | 0 | 0 | 36 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, heading-order, image-alt, landmark-banner-is-top-level, landmark-contentinfo-is-top-level, landmark-no-duplicate-banner, landmark-no-duplicate-contentinfo, landmark-one-main, landmark-unique, link-name, list, region |
| https://nexxt.com.au/scaling-tech-teams-brisbane-staff-augmentation-vs-outsourcing/ | https://nexxt.com.au/scaling-tech-teams-brisbane-staff-augmentation-vs-outsourcing/ | OK | 200 | no | 12113 | 50 | 0 | 0 | 0 | 36 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, empty-heading, heading-order, image-alt, landmark-banner-is-top-level, landmark-contentinfo-is-top-level, landmark-no-duplicate-banner, landmark-no-duplicate-contentinfo, landmark-one-main, landmark-unique, link-name, list, region |
| https://nexxt.com.au/sharepoint-consultation-brisbane/ | https://nexxt.com.au/sharepoint-consultation-brisbane/ | OK | 200 | no | 11347 | 53 | 0 | 0 | 0 | 46 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, heading-order, image-alt, landmark-banner-is-top-level, landmark-contentinfo-is-top-level, landmark-no-duplicate-banner, landmark-no-duplicate-contentinfo, landmark-one-main, landmark-unique, link-name, list, region |
| https://nexxt.com.au/sitemap/ | https://nexxt.com.au/sitemap/ | OK | 200 | no | 10534 | 16 | 0 | 0 | 0 | 18 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, heading-order, landmark-banner-is-top-level, landmark-contentinfo-is-top-level, landmark-no-duplicate-banner, landmark-no-duplicate-contentinfo, landmark-one-main, landmark-unique, link-name, list, page-has-heading-one, region |
| https://nexxt.com.au/staff-augmentation-vs-traditional-hiring-brisbane-2/ | https://nexxt.com.au/staff-augmentation-vs-traditional-hiring-brisbane-2/ | OK | 200 | no | 11954 | 50 | 0 | 0 | 0 | 36 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, empty-heading, heading-order, image-alt, landmark-banner-is-top-level, landmark-contentinfo-is-top-level, landmark-no-duplicate-banner, landmark-no-duplicate-contentinfo, landmark-one-main, landmark-unique, link-name, list, region |
| https://nexxt.com.au/terms-and-conditions/ | https://nexxt.com.au/terms-and-conditions/ | OK | 200 | no | 11539 | 17 | 0 | 0 | 0 | 6 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, heading-order, landmark-banner-is-top-level, landmark-contentinfo-is-top-level, landmark-no-duplicate-banner, landmark-no-duplicate-contentinfo, landmark-one-main, landmark-unique, link-name, list, region |
| https://nexxt.com.au/thank-you/ | https://nexxt.com.au/thank-you/ | OK | 200 | no | 10826 | 17 | 0 | 0 | 0 | 6 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, empty-heading, heading-order, landmark-banner-is-top-level, landmark-contentinfo-is-top-level, landmark-no-duplicate-banner, landmark-no-duplicate-contentinfo, landmark-one-main, landmark-unique, link-name, list, region |
| https://nexxt.com.au/the-seven-deadly-wastes-of-lean/ | https://nexxt.com.au/the-seven-deadly-wastes-of-lean/ | OK | 200 | no | 11492 | 48 | 0 | 0 | 0 | 34 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, heading-order, image-alt, landmark-banner-is-top-level, landmark-contentinfo-is-top-level, landmark-no-duplicate-banner, landmark-no-duplicate-contentinfo, landmark-one-main, landmark-unique, link-name, list, region |
| https://nexxt.com.au/transformation-and-change/ | https://nexxt.com.au/transformation-and-change/ | OK | 200 | no | 12119 | 54 | 0 | 0 | 0 | 42 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, empty-heading, heading-order, image-alt, landmark-banner-is-top-level, landmark-contentinfo-is-top-level, landmark-no-duplicate-banner, landmark-unique, link-name, list |
| https://nexxt.com.au/workflow-automation/ | https://nexxt.com.au/workflow-automation/ | OK | 200 | no | 12932 | 67 | 0 | 0 | 0 | 72 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, heading-order, image-alt, landmark-banner-is-top-level, landmark-contentinfo-is-top-level, landmark-no-duplicate-banner, landmark-no-duplicate-contentinfo, landmark-one-main, landmark-unique, link-name, list, region |
| https://nexxt.com.au/author/mnitish0gmail-com/ | https://nexxt.com.au/author/mnitish0gmail-com/ | OK | 200 | no | 11106 | 57 | 0 | 0 | 0 | 59 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, heading-order, landmark-banner-is-top-level, landmark-contentinfo-is-top-level, landmark-no-duplicate-banner, landmark-no-duplicate-contentinfo, landmark-one-main, landmark-unique, link-in-text-block, link-name, list, page-has-heading-one, region |
| https://nexxt.com.au/category/blog/ | https://nexxt.com.au/category/blog/ | OK | 200 | no | 12969 | 168 | 0 | 0 | 0 | 220 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, aria-required-children, color-contrast, heading-order, landmark-banner-is-top-level, landmark-contentinfo-is-top-level, landmark-no-duplicate-banner, landmark-no-duplicate-contentinfo, landmark-one-main, landmark-unique, link-name, list, page-has-heading-one, region |
| https://nexxt.com.au/category/uncategorized/ | https://nexxt.com.au/category/uncategorized/ | OK | 200 | no | 13295 | 168 | 0 | 0 | 0 | 220 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, aria-required-children, color-contrast, heading-order, landmark-banner-is-top-level, landmark-contentinfo-is-top-level, landmark-no-duplicate-banner, landmark-no-duplicate-contentinfo, landmark-one-main, landmark-unique, link-name, list, page-has-heading-one, region |
| https://nexxt.com.au/elementor-hf/home-footer/ | https://nexxt.com.au/ | OK | 200 | yes | 13598 | 63 | 0 | 0 | 0 | 67 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, heading-order, image-alt, landmark-banner-is-top-level, landmark-contentinfo-is-top-level, landmark-no-duplicate-banner, landmark-unique, link-name, list |
| https://nexxt.com.au/elementor-hf/home-v1-header/ | https://nexxt.com.au/ | OK | 200 | yes | 13321 | 65 | 0 | 0 | 0 | 64 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, heading-order, image-alt, landmark-banner-is-top-level, landmark-contentinfo-is-top-level, landmark-no-duplicate-banner, landmark-unique, link-name, list |
| https://nexxt.com.au/elementor-hf/home-v2-header/ | https://nexxt.com.au/ | OK | 200 | yes | 13494 | 64 | 0 | 0 | 0 | 67 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, heading-order, image-alt, landmark-banner-is-top-level, landmark-contentinfo-is-top-level, landmark-no-duplicate-banner, landmark-unique, link-name, list |
| https://nexxt.com.au/agile-20-years-on | https://nexxt.com.au/20-years-of-agile-manifesto/ | OK | 200 | yes | 12843 | 71 | 0 | 0 | 0 | 34 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, heading-order, image-alt, landmark-banner-is-top-level, landmark-contentinfo-is-top-level, landmark-no-duplicate-banner, landmark-no-duplicate-contentinfo, landmark-one-main, landmark-unique, link-name, list, region |
| https://nexxt.com.au/insights/2/ | https://nexxt.com.au/insights/2/ | OK | 200 | no | 12306 | 61 | 0 | 0 | 0 | 71 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, color-contrast, heading-order, image-alt, landmark-banner-is-top-level, landmark-contentinfo-is-top-level, landmark-no-duplicate-banner, landmark-unique, link-name, list, page-has-heading-one |

## Detailed Failure Information (ALFA)

## Detailed Failure Information (axe)

### https://nexxt.com.au/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/contact" class="theme-btn">Contact Us</a>`
- XPath: `.header-left-right > .theme-btn[href$="contact"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/about-us" class="theme-btn">Learn More</a>`
- XPath: `.theme-btn[href$="about-us"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<p>                             Years  <span>of Customer <br>Success</span>                        </p>`
- XPath: `.experience-content > p`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<p>                         50+  <span>Years of combined business and digital expertise</span>                    </p>`
- XPath: `.our-expert-team-box-inner > p`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="section-subtitle">CASE STUDIES</span>`
- XPath: `.case-studio-header > p > .section-subtitle`

*... and 11 more failures for this rule*

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h4><a href="/transformation-and-change">Transformation &amp; Change</a></h4>`
- XPath: `.service-card.simple-shadow:nth-child(1) > h4`

**Failure 2:**
- Message: Heading levels should only increase by one
- HTML: `<h4>Accelerating Delivery, Inspiring Change</h4>`
- XPath: `#development > .case-studio-body.d-flex > .right > .case-studio-contents.service-card.card-h > h4`

**Failure 3:**
- Message: Heading levels should only increase by one
- HTML: `<h4>Assess</h4>`
- XPath: `.about-timeline-item:nth-child(1) > .about-timeline-item-inner > h4`

**Failure 4:**
- Message: Heading levels should only increase by one
- HTML: `<h6 class="section-subtitle section-subtitle1">Op Ed</h6>`
- XPath: `.section-subtitle1`

**Failure 5:**
- Message: Heading levels should only increase by one
- HTML: `<h6 class="section-subtitle">Tips</h6>`
- XPath: `.news-item.card-h:nth-child(1) > .news-item-body > h6`

*... and 4 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img decoding="async" class="desktop fade-in" src="https://nexxt.com.au/wp-content/uploads/2024/11/NEXXT-226-1-scaled.jpg">`
- XPath: `.desktop`

**Failure 2:**
- Message: Images must have alternative text
- HTML: `<img decoding="async" src="https://nexxt.com.au/wp-content/uploads/2024/11/success2.png">`
- XPath: `.experience-body > img[decoding="async"]`

**Failure 3:**
- Message: Images must have alternative text
- HTML: `<img decoding="async" src="https://nexxt.com.au/wp-content/uploads/2024/11/experts2.png">`
- XPath: `.imgs > img[decoding="async"]`

**Failure 4:**
- Message: Images must have alternative text
- HTML: `<img decoding="async" src="https://nexxt.com.au/wp-content/uploads/2024/11/Badge.jpeg" style="touch-action: pan-y;">`
- XPath: `.client-logo.simple-shadow:nth-child(1) > img[decoding="async"]`

**Failure 5:**
- Message: Images must have alternative text
- HTML: `<img decoding="async" src="https://nexxt.com.au/wp-content/uploads/2024/11/linfox.png" style="touch-action: pan-y;">`
- XPath: `.client-logo.simple-shadow:nth-child(2) > img[decoding="async"]`

*... and 20 more failures for this rule*

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<header class="header-area">`
- XPath: `.header-area`

#### Rule: [landmark-contentinfo-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-contentinfo-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Contentinfo landmark should not be contained in another landmark
- HTML: `<footer itemtype="https://schema.org/WPFooter" itemscope="itemscope" id="colophon" role="contentinfo">`
- XPath: `#colophon`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="masthead" itemscope="itemscope" itemtype="https://schema.org/WPHeader">`
- XPath: `#masthead`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="masthead" itemscope="itemscope" itemtype="https://schema.org/WPHeader">`
- XPath: `#masthead`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a href="/contact" class="theme-btn">                     <i class="iconoir-arrow-up-right"></i>                 </a>`
- XPath: `#development > .case-studio-body.d-flex > .right > .case-studio-contents.service-card.card-h > .theme-btn[href$="contact"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a href="/agile-20-years-on" class="theme-btn">         <i class="iconoir-arrow-up-right"></i>     </a>`
- XPath: `.theme-btn[href$="agile-20-years-on"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a href="/running-a-workshop-part-2-the-art-of-skillful-facilitation" class="theme-btn">                 <i class="iconoir-arrow-up-right"></i>             </a>`
- XPath: `.news-item.card-h:nth-child(1) > .news-item-body > .theme-btn`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a href="/the-seven-deadly-wastes-of-lean" class="theme-btn">                 <i class="iconoir-arrow-up-right"></i>             </a>`
- XPath: `.news-item.card-h:nth-child(2) > .news-item-body > .theme-btn`

**Failure 5:**
- Message: Links must have discernible text
- HTML: `<a href="https://www.linkedin.com/company/nexxtgroup/">         <i class="iconoir-linkedin"></i>     </a>`
- XPath: `.social-links > li > a`

#### Rule: [list](https://dequeuniversity.com/rules/axe/4.11/list?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(1) > ul`

**Failure 2:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(2) > ul`

**Failure 3:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(3) > ul`

**Failure 4:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(4) > ul`

### https://nexxt.com.au/jira-to-azure-devops-migration-services/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/contact" class="theme-btn">Contact Us</a>`
- XPath: `.header-left-right > .theme-btn[href$="contact"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<h6 class="section-subtitle badge-radius">Our Studies</h6>`
- XPath: `.badge-radius`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="elementor-button-text">Talk to a Change Lead</span>`
- XPath: `.elementor-element-edf9bb6 > .elementor-widget-container > .elementor-button-wrapper > .elementor-button.elementor-button-link.elementor-size-sm > .elementor-button-content-wrapper > .elementor-button-text`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<div class="e-n-accordion-item-title-text"> Will we lose history? </div>`
- XPath: `summary[data-accordion-index="2"] > .e-n-accordion-item-title-header > .e-n-accordion-item-title-text`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<div class="e-n-accordion-item-title-text"> How long does migration take? </div>`
- XPath: `summary[data-accordion-index="3"] > .e-n-accordion-item-title-header > .e-n-accordion-item-title-text`

*... and 8 more failures for this rule*

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h6 class="section-subtitle">INSIGHTS</h6>`
- XPath: `.left > h6`

**Failure 2:**
- Message: Heading levels should only increase by one
- HTML: `<h6 class="section-subtitle section-subtitle1">Op Ed</h6>`
- XPath: `.section-subtitle1`

**Failure 3:**
- Message: Heading levels should only increase by one
- HTML: `<h6 class="section-subtitle">Tips</h6>`
- XPath: `.news-item.card-h:nth-child(1) > .news-item-body > h6`

**Failure 4:**
- Message: Heading levels should only increase by one
- HTML: `<h6 class="section-subtitle">Lean</h6>`
- XPath: `.news-item.card-h:nth-child(2) > .news-item-body > h6`

**Failure 5:**
- Message: Heading levels should only increase by one
- HTML: `<h6 class="section-subtitle">Contact</h6>`
- XPath: `.contact-form-body > h6`

*... and 2 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="https://nexxt.com.au/wp-content/uploads/2024/10/NEXXT-250-scaled.jpg">`
- XPath: `.sticky-news > .news-img-box > img`

**Failure 2:**
- Message: Images must have alternative text
- HTML: `<img src="https://nexxt.com.au/wp-content/uploads/2024/10/64b7ce72cc736c81beadb984_IMG_1582-2-p-800.jpg">`
- XPath: `.news-item.card-h:nth-child(1) > .news-img-box > img`

**Failure 3:**
- Message: Images must have alternative text
- HTML: `<img src="https://nexxt.com.au/wp-content/uploads/2024/10/61ac2b0bd942768a049f941a_58-COMPRESSED-p-800.jpeg">`
- XPath: `.news-item.card-h:nth-child(2) > .news-img-box > img`

**Failure 4:**
- Message: Images must have alternative text
- HTML: `<img src="https://nexxt.com.au/wp-content/uploads/2024/11/support2.png">`
- XPath: `.contact-info:nth-child(1) > img`

**Failure 5:**
- Message: Images must have alternative text
- HTML: `<img src="https://nexxt.com.au/wp-content/uploads/2024/11/map1.png">`
- XPath: `.contact-info:nth-child(2) > img`

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<header class="header-area">`
- XPath: `.header-area`

#### Rule: [landmark-contentinfo-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-contentinfo-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Contentinfo landmark should not be contained in another landmark
- HTML: `<footer class="footer-area">`
- XPath: `.footer-area`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="masthead" itemscope="itemscope" itemtype="https://schema.org/WPHeader">`
- XPath: `#masthead`

#### Rule: [landmark-no-duplicate-contentinfo](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-contentinfo?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one contentinfo landmark
- HTML: `<footer itemtype="https://schema.org/WPFooter" itemscope="itemscope" id="colophon" role="contentinfo">`
- XPath: `#colophon`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html lang="en-US">`
- XPath: `html`

**Failure 2:**
- Message: Document should have one main landmark
- HTML: `<html>`
- XPath: `#hs-form-iframe-0`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="masthead" itemscope="itemscope" itemtype="https://schema.org/WPHeader">`
- XPath: `#masthead`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<footer itemtype="https://schema.org/WPFooter" itemscope="itemscope" id="colophon" role="contentinfo">`
- XPath: `#colophon`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a href="/agile-20-years-on" class="theme-btn">         <i class="iconoir-arrow-up-right"></i>     </a>`
- XPath: `.theme-btn[href$="agile-20-years-on"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a href="/running-a-workshop-part-2-the-art-of-skillful-facilitation" class="theme-btn">                 <i class="iconoir-arrow-up-right"></i>             </a>`
- XPath: `.news-item.card-h:nth-child(1) > .news-item-body > .theme-btn`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a href="/the-seven-deadly-wastes-of-lean" class="theme-btn">                 <i class="iconoir-arrow-up-right"></i>             </a>`
- XPath: `.news-item.card-h:nth-child(2) > .news-item-body > .theme-btn`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a href="https://www.linkedin.com/company/nexxtgroup/">         <i class="iconoir-linkedin"></i>     </a>`
- XPath: `.social-links > li > a`

#### Rule: [list](https://dequeuniversity.com/rules/axe/4.11/list?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(1) > ul`

**Failure 2:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(2) > ul`

**Failure 3:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(3) > ul`

**Failure 4:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(4) > ul`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="elementor-element elementor-element-e499878 e-flex e-con-boxed e-con e-parent" data-id="e499878" data-element_type="container" data-e-type="container" data-settings="{"background_background":"gradient"}">`
- XPath: `.elementor-element-e499878`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="elementor-element elementor-element-92a3565 e-flex e-con-boxed e-con e-parent" data-id="92a3565" data-element_type="container" data-e-type="container">`
- XPath: `.elementor-element-92a3565`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="elementor-element elementor-element-50ed840 e-con-full e-flex e-con e-parent" data-id="50ed840" data-element_type="container" data-e-type="container">`
- XPath: `.elementor-element-50ed840`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<h6 class="section-subtitle">Contact</h6>`
- XPath: `.contact-form-body > h6`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<h2 class="section-title">Get in Touch</h2>`
- XPath: `.contact-form-body > .section-title`

*... and 4 more failures for this rule*

### https://nexxt.com.au/office-365-consulting-services-australia/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/contact" class="theme-btn">Contact Us</a>`
- XPath: `.header-left-right > .theme-btn[href$="contact"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<h6 class="section-subtitle badge-radius">Our Studies</h6>`
- XPath: `.badge-radius`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="elementor-button-text">Speak with a Microsoft 365 Consultant</span>`
- XPath: `.elementor-element-32745f5 > .elementor-widget-container > .elementor-button-wrapper > .elementor-button.elementor-button-link.elementor-size-sm > .elementor-button-content-wrapper > .elementor-button-text`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<div class="e-n-accordion-item-title-text"> Can you integrate Teams telephony? </div>`
- XPath: `summary[data-accordion-index="2"] > .e-n-accordion-item-title-header > .e-n-accordion-item-title-text`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<div class="e-n-accordion-item-title-text"> Will this disrupt day-to-day work? </div>`
- XPath: `summary[data-accordion-index="3"] > .e-n-accordion-item-title-header > .e-n-accordion-item-title-text`

*... and 8 more failures for this rule*

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h6 class="section-subtitle">INSIGHTS</h6>`
- XPath: `.left > h6`

**Failure 2:**
- Message: Heading levels should only increase by one
- HTML: `<h6 class="section-subtitle section-subtitle1">Op Ed</h6>`
- XPath: `.section-subtitle1`

**Failure 3:**
- Message: Heading levels should only increase by one
- HTML: `<h6 class="section-subtitle">Tips</h6>`
- XPath: `.news-item.card-h:nth-child(1) > .news-item-body > h6`

**Failure 4:**
- Message: Heading levels should only increase by one
- HTML: `<h6 class="section-subtitle">Lean</h6>`
- XPath: `.news-item.card-h:nth-child(2) > .news-item-body > h6`

**Failure 5:**
- Message: Heading levels should only increase by one
- HTML: `<h6 class="section-subtitle">Contact</h6>`
- XPath: `.contact-form-body > h6`

*... and 2 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="https://nexxt.com.au/wp-content/uploads/2024/10/NEXXT-250-scaled.jpg">`
- XPath: `.sticky-news > .news-img-box > img`

**Failure 2:**
- Message: Images must have alternative text
- HTML: `<img src="https://nexxt.com.au/wp-content/uploads/2024/10/64b7ce72cc736c81beadb984_IMG_1582-2-p-800.jpg">`
- XPath: `.news-item.card-h:nth-child(1) > .news-img-box > img`

**Failure 3:**
- Message: Images must have alternative text
- HTML: `<img src="https://nexxt.com.au/wp-content/uploads/2024/10/61ac2b0bd942768a049f941a_58-COMPRESSED-p-800.jpeg">`
- XPath: `.news-item.card-h:nth-child(2) > .news-img-box > img`

**Failure 4:**
- Message: Images must have alternative text
- HTML: `<img src="https://nexxt.com.au/wp-content/uploads/2024/11/support2.png">`
- XPath: `.contact-info:nth-child(1) > img`

**Failure 5:**
- Message: Images must have alternative text
- HTML: `<img src="https://nexxt.com.au/wp-content/uploads/2024/11/map1.png">`
- XPath: `.contact-info:nth-child(2) > img`

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<header class="header-area">`
- XPath: `.header-area`

#### Rule: [landmark-contentinfo-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-contentinfo-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Contentinfo landmark should not be contained in another landmark
- HTML: `<footer class="footer-area">`
- XPath: `.footer-area`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="masthead" itemscope="itemscope" itemtype="https://schema.org/WPHeader">`
- XPath: `#masthead`

#### Rule: [landmark-no-duplicate-contentinfo](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-contentinfo?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one contentinfo landmark
- HTML: `<footer itemtype="https://schema.org/WPFooter" itemscope="itemscope" id="colophon" role="contentinfo">`
- XPath: `#colophon`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html lang="en-US">`
- XPath: `html`

**Failure 2:**
- Message: Document should have one main landmark
- HTML: `<html>`
- XPath: `#hs-form-iframe-0`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="masthead" itemscope="itemscope" itemtype="https://schema.org/WPHeader">`
- XPath: `#masthead`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<footer itemtype="https://schema.org/WPFooter" itemscope="itemscope" id="colophon" role="contentinfo">`
- XPath: `#colophon`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a href="/agile-20-years-on" class="theme-btn">         <i class="iconoir-arrow-up-right"></i>     </a>`
- XPath: `.theme-btn[href$="agile-20-years-on"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a href="/running-a-workshop-part-2-the-art-of-skillful-facilitation" class="theme-btn">                 <i class="iconoir-arrow-up-right"></i>             </a>`
- XPath: `.news-item.card-h:nth-child(1) > .news-item-body > .theme-btn`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a href="/the-seven-deadly-wastes-of-lean" class="theme-btn">                 <i class="iconoir-arrow-up-right"></i>             </a>`
- XPath: `.news-item.card-h:nth-child(2) > .news-item-body > .theme-btn`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a href="https://www.linkedin.com/company/nexxtgroup/">         <i class="iconoir-linkedin"></i>     </a>`
- XPath: `.social-links > li > a`

#### Rule: [list](https://dequeuniversity.com/rules/axe/4.11/list?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(1) > ul`

**Failure 2:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(2) > ul`

**Failure 3:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(3) > ul`

**Failure 4:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(4) > ul`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="elementor-element elementor-element-e499878 e-flex e-con-boxed e-con e-parent" data-id="e499878" data-element_type="container" data-e-type="container" data-settings="{"background_background":"gradient"}">`
- XPath: `.elementor-element-e499878`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="elementor-element elementor-element-8ca229b elementor-widget elementor-widget-heading" data-id="8ca229b" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">`
- XPath: `.elementor-element-8ca229b`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="elementor-element elementor-element-9891aff blog-section e-flex e-con-boxed e-con e-parent" data-id="9891aff" data-element_type="container" data-e-type="container">`
- XPath: `.elementor-element-9891aff`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="elementor-element elementor-element-35d0a21 e-flex e-con-boxed e-con e-parent" data-id="35d0a21" data-element_type="container" data-e-type="container">`
- XPath: `.elementor-element-35d0a21`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="elementor-element elementor-element-50ed840 e-con-full e-flex e-con e-parent" data-id="50ed840" data-element_type="container" data-e-type="container">`
- XPath: `.elementor-element-50ed840`

*... and 6 more failures for this rule*

### https://nexxt.com.au/services/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/contact" class="theme-btn">Contact Us</a>`
- XPath: `.header-left-right > .theme-btn[href$="contact"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<h6 class="section-subtitle">CASE STUDIES</h6>`
- XPath: `.case-studio-header > h6`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<h6 class="section-subtitle">Contact</h6>`
- XPath: `.contact-form-body > h6`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a target="_blank" href="mailto:info@nexxt.com.au">info@nexxt.com.au</a>`
- XPath: `a[href$="mailto:info@nexxt.com.au"][target="_blank"]`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<input type="submit" class="hs-button primary large" value="Submit">`
- XPath: `#hs-form-iframe-0`

*... and 5 more failures for this rule*

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h6 class="section-subtitle">WHAT WE’RE OFFERING</h6>`
- XPath: `.left > h6`

**Failure 2:**
- Message: Heading levels should only increase by one
- HTML: `<h4><a href="">Transformation &amp; Change</a></h4>`
- XPath: `.service-card.simple-shadow:nth-child(1) > h4`

**Failure 3:**
- Message: Heading levels should only increase by one
- HTML: `<h6 class="section-subtitle">CASE STUDIES</h6>`
- XPath: `.case-studio-header > h6`

**Failure 4:**
- Message: Heading levels should only increase by one
- HTML: `<h4>Accelerating Delivery, Inspiring Change</h4>`
- XPath: `#development > .case-studio-body.d-flex > .right > .case-studio-contents.card-h.service-card > h4`

**Failure 5:**
- Message: Heading levels should only increase by one
- HTML: `<h6 class="section-subtitle">Contact</h6>`
- XPath: `.contact-form-body > h6`

*... and 2 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img decoding="async" src="https://nexxt.com.au/wp-content/uploads/2024/11/big-data2.png" class="service-icon">`
- XPath: `.service-card.simple-shadow:nth-child(1) > .service-icon[decoding="async"]`

**Failure 2:**
- Message: Images must have alternative text
- HTML: `<img decoding="async" src="https://nexxt.com.au/wp-content/uploads/2024/11/mentoring.png" class="service-icon">`
- XPath: `.service-card.simple-shadow:nth-child(2) > .service-icon[decoding="async"]`

**Failure 3:**
- Message: Images must have alternative text
- HTML: `<img decoding="async" src="https://nexxt.com.au/wp-content/uploads/2024/11/fast-delivery3.png" class="service-icon">`
- XPath: `.service-card.simple-shadow:nth-child(3) > .service-icon[decoding="async"]`

**Failure 4:**
- Message: Images must have alternative text
- HTML: `<img decoding="async" src="https://nexxt.com.au/wp-content/uploads/2024/10/NEXXT-22-scaled.jpg">`
- XPath: `#development > .case-studio-body.d-flex > .flex-1.left.d-flex > .case-studio-img-card.simple-shadow > img[decoding="async"]`

**Failure 5:**
- Message: Images must have alternative text
- HTML: `<img decoding="async" src="https://nexxt.com.au/wp-content/uploads/2024/11/fast-delivery3.png">`
- XPath: `#development > .case-studio-body.d-flex > .right > .case-studio-contents.card-h.service-card > img[decoding="async"]`

*... and 2 more failures for this rule*

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<header class="header-area">`
- XPath: `.header-area`

#### Rule: [landmark-contentinfo-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-contentinfo-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Contentinfo landmark should not be contained in another landmark
- HTML: `<footer itemtype="https://schema.org/WPFooter" itemscope="itemscope" id="colophon" role="contentinfo">`
- XPath: `#colophon`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="masthead" itemscope="itemscope" itemtype="https://schema.org/WPHeader">`
- XPath: `#masthead`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="masthead" itemscope="itemscope" itemtype="https://schema.org/WPHeader">`
- XPath: `#masthead`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a href="#" class="theme-btn">                     <i class="iconoir-arrow-up-right"></i>                 </a>`
- XPath: `#development > .case-studio-body.d-flex > .right > .case-studio-contents.card-h.service-card > .theme-btn[href="#"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a href="https://www.linkedin.com/company/nexxtgroup/">         <i class="iconoir-linkedin"></i>     </a>`
- XPath: `.social-links > li > a`

#### Rule: [list](https://dequeuniversity.com/rules/axe/4.11/list?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(1) > ul`

**Failure 2:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(2) > ul`

**Failure 3:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(3) > ul`

**Failure 4:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(4) > ul`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Page should contain a level-one heading
- HTML: `<html lang="en-US" en-us""="">`
- XPath: `html`

**Failure 2:**
- Message: Page should contain a level-one heading
- HTML: `<html>`
- XPath: `#hs-form-iframe-0`

### https://nexxt.com.au/contact/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/contact" class="theme-btn">Contact Us</a>`
- XPath: `.header-left-right > .theme-btn[href$="contact"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<h6 class="section-subtitle">Contact</h6>`
- XPath: `.contact-form-body > h6`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a target="_blank" href="mailto:info@nexxt.com.au">info@nexxt.com.au</a>`
- XPath: `a[target="_blank"][href$="mailto:info@nexxt.com.au"]`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<input type="submit" class="hs-button primary large" value="Submit">`
- XPath: `#hs-form-iframe-0`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<p>Workshops delivered</p>`
- XPath: `li:nth-child(1) > p`

*... and 2 more failures for this rule*

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h6 class="section-subtitle">Contact</h6>`
- XPath: `.contact-form-body > h6`

**Failure 2:**
- Message: Heading levels should only increase by one
- HTML: `<h4>Contact Info</h4>`
- XPath: `.contact-info:nth-child(1) > h4`

**Failure 3:**
- Message: Heading levels should only increase by one
- HTML: `<h4>Services</h4>`
- XPath: `.footer-links:nth-child(1) > h4`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img decoding="async" src="https://nexxt.com.au/wp-content/uploads/2024/11/support2.png">`
- XPath: `.contact-info:nth-child(1) > img[decoding="async"]`

**Failure 2:**
- Message: Images must have alternative text
- HTML: `<img decoding="async" src="https://nexxt.com.au/wp-content/uploads/2024/11/map1.png">`
- XPath: `.contact-info:nth-child(2) > img[decoding="async"]`

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<header class="header-area">`
- XPath: `.header-area`

#### Rule: [landmark-contentinfo-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-contentinfo-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Contentinfo landmark should not be contained in another landmark
- HTML: `<footer itemtype="https://schema.org/WPFooter" itemscope="itemscope" id="colophon" role="contentinfo">`
- XPath: `#colophon`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="masthead" itemscope="itemscope" itemtype="https://schema.org/WPHeader">`
- XPath: `#masthead`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="masthead" itemscope="itemscope" itemtype="https://schema.org/WPHeader">`
- XPath: `#masthead`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a href="https://www.linkedin.com/company/nexxtgroup/">         <i class="iconoir-linkedin"></i>     </a>`
- XPath: `.social-links > li > a`

#### Rule: [list](https://dequeuniversity.com/rules/axe/4.11/list?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(1) > ul`

**Failure 2:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(2) > ul`

**Failure 3:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(3) > ul`

**Failure 4:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(4) > ul`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Page should contain a level-one heading
- HTML: `<html lang="en-US" en-us""="">`
- XPath: `html`

**Failure 2:**
- Message: Page should contain a level-one heading
- HTML: `<html>`
- XPath: `#hs-form-iframe-0`

### https://nexxt.com.au/20-years-of-agile-manifesto/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/contact" class="theme-btn">Contact Us</a>`
- XPath: `.header-left-right > .theme-btn[href$="contact"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<h6 class="section-subtitle badge-radius">Our Studies</h6>`
- XPath: `.badge-radius`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<h6 class="section-subtitle section-subtitle1">Op Ed</h6>`
- XPath: `.section-subtitle1`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="elementor-button-text">VIEW ALL</span>`
- XPath: `.elementor-button-text`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<h6 class="section-subtitle">Contact</h6>`
- XPath: `.contact-form-body > h6`

*... and 5 more failures for this rule*

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h6 class="section-subtitle">INSIGHTS</h6>`
- XPath: `.left > h6`

**Failure 2:**
- Message: Heading levels should only increase by one
- HTML: `<h6 class="section-subtitle section-subtitle1">Op Ed</h6>`
- XPath: `.section-subtitle1`

**Failure 3:**
- Message: Heading levels should only increase by one
- HTML: `<h6 class="section-subtitle">Tips</h6>`
- XPath: `.news-item.card-h:nth-child(1) > .news-item-body > h6`

**Failure 4:**
- Message: Heading levels should only increase by one
- HTML: `<h6 class="section-subtitle">Lean</h6>`
- XPath: `.news-item.card-h:nth-child(2) > .news-item-body > h6`

**Failure 5:**
- Message: Heading levels should only increase by one
- HTML: `<h6 class="section-subtitle">Contact</h6>`
- XPath: `.contact-form-body > h6`

*... and 2 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="https://nexxt.com.au/wp-content/uploads/2024/10/NEXXT-250-scaled.jpg">`
- XPath: `.sticky-news > .news-img-box > img`

**Failure 2:**
- Message: Images must have alternative text
- HTML: `<img src="https://nexxt.com.au/wp-content/uploads/2024/10/64b7ce72cc736c81beadb984_IMG_1582-2-p-800.jpg">`
- XPath: `.news-item.card-h:nth-child(1) > .news-img-box > img`

**Failure 3:**
- Message: Images must have alternative text
- HTML: `<img src="https://nexxt.com.au/wp-content/uploads/2024/10/61ac2b0bd942768a049f941a_58-COMPRESSED-p-800.jpeg">`
- XPath: `.news-item.card-h:nth-child(2) > .news-img-box > img`

**Failure 4:**
- Message: Images must have alternative text
- HTML: `<img src="https://nexxt.com.au/wp-content/uploads/2024/11/support2.png">`
- XPath: `.contact-info:nth-child(1) > img`

**Failure 5:**
- Message: Images must have alternative text
- HTML: `<img src="https://nexxt.com.au/wp-content/uploads/2024/11/map1.png">`
- XPath: `.contact-info:nth-child(2) > img`

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<header class="header-area">`
- XPath: `.header-area`

#### Rule: [landmark-contentinfo-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-contentinfo-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Contentinfo landmark should not be contained in another landmark
- HTML: `<footer class="footer-area">`
- XPath: `.footer-area`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="masthead" itemscope="itemscope" itemtype="https://schema.org/WPHeader">`
- XPath: `#masthead`

#### Rule: [landmark-no-duplicate-contentinfo](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-contentinfo?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one contentinfo landmark
- HTML: `<footer itemtype="https://schema.org/WPFooter" itemscope="itemscope" id="colophon" role="contentinfo">`
- XPath: `#colophon`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html lang="en-US">`
- XPath: `html`

**Failure 2:**
- Message: Document should have one main landmark
- HTML: `<html>`
- XPath: `#hs-form-iframe-0`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="masthead" itemscope="itemscope" itemtype="https://schema.org/WPHeader">`
- XPath: `#masthead`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<footer itemtype="https://schema.org/WPFooter" itemscope="itemscope" id="colophon" role="contentinfo">`
- XPath: `#colophon`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a href="/agile-20-years-on" class="theme-btn">         <i class="iconoir-arrow-up-right"></i>     </a>`
- XPath: `.theme-btn[href$="agile-20-years-on"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a href="/running-a-workshop-part-2-the-art-of-skillful-facilitation" class="theme-btn">                 <i class="iconoir-arrow-up-right"></i>             </a>`
- XPath: `.news-item.card-h:nth-child(1) > .news-item-body > .theme-btn`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a href="/the-seven-deadly-wastes-of-lean" class="theme-btn">                 <i class="iconoir-arrow-up-right"></i>             </a>`
- XPath: `.news-item.card-h:nth-child(2) > .news-item-body > .theme-btn`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a href="https://www.linkedin.com/company/nexxtgroup/">         <i class="iconoir-linkedin"></i>     </a>`
- XPath: `.social-links > li > a`

#### Rule: [list](https://dequeuniversity.com/rules/axe/4.11/list?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(1) > ul`

**Failure 2:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(2) > ul`

**Failure 3:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(3) > ul`

**Failure 4:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(4) > ul`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="elementor-element elementor-element-e499878 e-flex e-con-boxed e-con e-parent" data-id="e499878" data-element_type="container" data-e-type="container" data-settings="{"background_background":"gradient"}">`
- XPath: `.elementor-element-e499878`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="elementor-element elementor-element-8ca229b elementor-widget elementor-widget-heading" data-id="8ca229b" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">`
- XPath: `.elementor-element-8ca229b`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="c-ih-insights-header t-section"><p>On the 20th anniversary of the Agile Manifesto, we ask whether the adoption of agile thinking and practices has improved business operations?</p></div>`
- XPath: `.c-ih-insights-header`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<p>2021 marked the 20th anniversary of the Agile Manifesto, created when 17 software experts met in Snowbird, Utah, to discuss how to radically improve the delivery of software products.</p>`
- XPath: `.c-ic__rich-text > p:nth-child(1)`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<p>Since that time, the Agile movement has grown to be a global phenomenon, not only in the software field, but across all aspects of business and government. And understandably so – what business or government agency would not want to be seen as being agile?</p>`
- XPath: `.c-ic__rich-text > p:nth-child(2)`

*... and 28 more failures for this rule*

### https://nexxt.com.au/about-us/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/contact" class="theme-btn">Contact Us</a>`
- XPath: `.header-left-right > .theme-btn[href$="contact"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="elementor-heading-title elementor-size-default">OUR VALUES</span>`
- XPath: `.elementor-element-82eac61 > .elementor-widget-container > .elementor-heading-title.elementor-size-default`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="elementor-button-text">Book an appointment</span>`
- XPath: `.elementor-button-text`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<h6 class="section-subtitle">WHAT WE’RE OFFERING</h6>`
- XPath: `.left > h6`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/contact" class="theme-btn">Book an appointment now</a>`
- XPath: `.cta-body > .theme-btn[href$="contact"]`

*... and 6 more failures for this rule*

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h6 class="section-subtitle">WHAT WE’RE OFFERING</h6>`
- XPath: `.left > h6`

**Failure 2:**
- Message: Heading levels should only increase by one
- HTML: `<h4><a href="/transformation-and-change">Transformation &amp; Change</a></h4>`
- XPath: `.service-card.simple-shadow:nth-child(1) > h4`

**Failure 3:**
- Message: Heading levels should only increase by one
- HTML: `<h6 class="section-subtitle">Contact</h6>`
- XPath: `.contact-form-body > h6`

**Failure 4:**
- Message: Heading levels should only increase by one
- HTML: `<h4>Contact Info</h4>`
- XPath: `.contact-info:nth-child(1) > h4`

**Failure 5:**
- Message: Heading levels should only increase by one
- HTML: `<h4>Services</h4>`
- XPath: `.footer-links:nth-child(1) > h4`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img decoding="async" src="https://nexxt.com.au/wp-content/uploads/2024/11/Badge.jpeg" style="touch-action: pan-y;">`
- XPath: `.client-logo.simple-shadow:nth-child(1) > img[decoding="async"]`

**Failure 2:**
- Message: Images must have alternative text
- HTML: `<img decoding="async" src="https://nexxt.com.au/wp-content/uploads/2024/11/linfox.png" style="touch-action: pan-y;">`
- XPath: `.client-logo.simple-shadow:nth-child(2) > img[decoding="async"]`

**Failure 3:**
- Message: Images must have alternative text
- HTML: `<img decoding="async" src="https://nexxt.com.au/wp-content/uploads/2025/02/image002.png" style="touch-action: pan-y;">`
- XPath: `.client-logo.simple-shadow:nth-child(3) > img[decoding="async"]`

**Failure 4:**
- Message: Images must have alternative text
- HTML: `<img decoding="async" src="https://nexxt.com.au/wp-content/uploads/2024/11/dominos.png" style="touch-action: pan-y;">`
- XPath: `.client-logo.simple-shadow:nth-child(4) > img[decoding="async"]`

**Failure 5:**
- Message: Images must have alternative text
- HTML: `<img decoding="async" src="https://nexxt.com.au/wp-content/uploads/2024/11/datatorque.png" style="touch-action: pan-y;">`
- XPath: `.client-logo.simple-shadow:nth-child(5) > img[decoding="async"]`

*... and 9 more failures for this rule*

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<header class="header-area">`
- XPath: `.header-area`

#### Rule: [landmark-contentinfo-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-contentinfo-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Contentinfo landmark should not be contained in another landmark
- HTML: `<footer itemtype="https://schema.org/WPFooter" itemscope="itemscope" id="colophon" role="contentinfo">`
- XPath: `#colophon`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="masthead" itemscope="itemscope" itemtype="https://schema.org/WPHeader">`
- XPath: `#masthead`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="masthead" itemscope="itemscope" itemtype="https://schema.org/WPHeader">`
- XPath: `#masthead`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a href="https://www.linkedin.com/company/nexxtgroup/">         <i class="iconoir-linkedin"></i>     </a>`
- XPath: `.social-links > li > a`

#### Rule: [list](https://dequeuniversity.com/rules/axe/4.11/list?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(1) > ul`

**Failure 2:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(2) > ul`

**Failure 3:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(3) > ul`

**Failure 4:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(4) > ul`

### https://nexxt.com.au/beyond-traditional-hiring-how-to-build-an-agile-future-ready-project-team/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/contact" class="theme-btn">Contact Us</a>`
- XPath: `.header-left-right > .theme-btn[href$="contact"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<h6 class="section-subtitle badge-radius">Our Studies</h6>`
- XPath: `.badge-radius`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<strong>Nexxt’s Solution:</strong>`
- XPath: `p:nth-child(14) > strong`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<strong>Nexxt’s Solution:</strong>`
- XPath: `p:nth-child(19) > strong`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<strong>Nexxt’s Solution:</strong>`
- XPath: `p:nth-child(24) > strong`

*... and 9 more failures for this rule*

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h6 class="section-subtitle">INSIGHTS</h6>`
- XPath: `.left > h6`

**Failure 2:**
- Message: Heading levels should only increase by one
- HTML: `<h6 class="section-subtitle section-subtitle1">Op Ed</h6>`
- XPath: `.section-subtitle1`

**Failure 3:**
- Message: Heading levels should only increase by one
- HTML: `<h6 class="section-subtitle">Tips</h6>`
- XPath: `.news-item.card-h:nth-child(1) > .news-item-body > h6`

**Failure 4:**
- Message: Heading levels should only increase by one
- HTML: `<h6 class="section-subtitle">Lean</h6>`
- XPath: `.news-item.card-h:nth-child(2) > .news-item-body > h6`

**Failure 5:**
- Message: Heading levels should only increase by one
- HTML: `<h6 class="section-subtitle">Contact</h6>`
- XPath: `.contact-form-body > h6`

*... and 2 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="https://nexxt.com.au/wp-content/uploads/2024/10/NEXXT-250-scaled.jpg">`
- XPath: `.sticky-news > .news-img-box > img`

**Failure 2:**
- Message: Images must have alternative text
- HTML: `<img src="https://nexxt.com.au/wp-content/uploads/2024/10/64b7ce72cc736c81beadb984_IMG_1582-2-p-800.jpg">`
- XPath: `.news-item.card-h:nth-child(1) > .news-img-box > img`

**Failure 3:**
- Message: Images must have alternative text
- HTML: `<img src="https://nexxt.com.au/wp-content/uploads/2024/10/61ac2b0bd942768a049f941a_58-COMPRESSED-p-800.jpeg">`
- XPath: `.news-item.card-h:nth-child(2) > .news-img-box > img`

**Failure 4:**
- Message: Images must have alternative text
- HTML: `<img src="https://nexxt.com.au/wp-content/uploads/2024/11/support2.png">`
- XPath: `.contact-info:nth-child(1) > img`

**Failure 5:**
- Message: Images must have alternative text
- HTML: `<img src="https://nexxt.com.au/wp-content/uploads/2024/11/map1.png">`
- XPath: `.contact-info:nth-child(2) > img`

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<header class="header-area">`
- XPath: `.header-area`

#### Rule: [landmark-contentinfo-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-contentinfo-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Contentinfo landmark should not be contained in another landmark
- HTML: `<footer class="footer-area">`
- XPath: `.footer-area`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="masthead" itemscope="itemscope" itemtype="https://schema.org/WPHeader">`
- XPath: `#masthead`

#### Rule: [landmark-no-duplicate-contentinfo](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-contentinfo?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one contentinfo landmark
- HTML: `<footer itemtype="https://schema.org/WPFooter" itemscope="itemscope" id="colophon" role="contentinfo">`
- XPath: `#colophon`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html lang="en-US">`
- XPath: `html`

**Failure 2:**
- Message: Document should have one main landmark
- HTML: `<html>`
- XPath: `#hs-form-iframe-0`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="masthead" itemscope="itemscope" itemtype="https://schema.org/WPHeader">`
- XPath: `#masthead`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<footer itemtype="https://schema.org/WPFooter" itemscope="itemscope" id="colophon" role="contentinfo">`
- XPath: `#colophon`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a href="/agile-20-years-on" class="theme-btn">         <i class="iconoir-arrow-up-right"></i>     </a>`
- XPath: `.theme-btn[href$="agile-20-years-on"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a href="/running-a-workshop-part-2-the-art-of-skillful-facilitation" class="theme-btn">                 <i class="iconoir-arrow-up-right"></i>             </a>`
- XPath: `.news-item.card-h:nth-child(1) > .news-item-body > .theme-btn`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a href="/the-seven-deadly-wastes-of-lean" class="theme-btn">                 <i class="iconoir-arrow-up-right"></i>             </a>`
- XPath: `.news-item.card-h:nth-child(2) > .news-item-body > .theme-btn`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a href="https://www.linkedin.com/company/nexxtgroup/">         <i class="iconoir-linkedin"></i>     </a>`
- XPath: `.social-links > li > a`

#### Rule: [list](https://dequeuniversity.com/rules/axe/4.11/list?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(1) > ul`

**Failure 2:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(2) > ul`

**Failure 3:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(3) > ul`

**Failure 4:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(4) > ul`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="elementor-element elementor-element-e499878 e-flex e-con-boxed e-con e-parent" data-id="e499878" data-element_type="container" data-e-type="container" data-settings="{"background_background":"gradient"}">`
- XPath: `.elementor-element-e499878`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="elementor-element elementor-element-8ca229b elementor-widget elementor-widget-heading" data-id="8ca229b" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">`
- XPath: `.elementor-element-8ca229b`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="elementor-element elementor-element-c445e3a e-flex e-con-boxed e-con e-parent" data-id="c445e3a" data-element_type="container" data-e-type="container">`
- XPath: `.elementor-element-c445e3a`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="elementor-element elementor-element-50ed840 e-con-full e-flex e-con e-parent" data-id="50ed840" data-element_type="container" data-e-type="container">`
- XPath: `.elementor-element-50ed840`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<h6 class="section-subtitle">Contact</h6>`
- XPath: `.contact-form-body > h6`

*... and 5 more failures for this rule*

### https://nexxt.com.au/change-management-consulting-brisbane/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/contact" class="theme-btn">Contact Us</a>`
- XPath: `.header-left-right > .theme-btn[href$="contact"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<h6 class="section-subtitle badge-radius">Our Studies</h6>`
- XPath: `.badge-radius`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="elementor-button-text">Talk to a Change Lead</span>`
- XPath: `.elementor-element-044fdbf > .elementor-widget-container > .elementor-button-wrapper > .elementor-button.elementor-button-link.elementor-size-sm > .elementor-button-content-wrapper > .elementor-button-text`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<div class="e-n-accordion-item-title-text"> Do you customise for frontline vs leadership? </div>`
- XPath: `summary[data-accordion-index="2"] > .e-n-accordion-item-title-header > .e-n-accordion-item-title-text`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<div class="e-n-accordion-item-title-text"> Can you align with current programs (e.g., Teams rollout)? </div>`
- XPath: `summary[data-accordion-index="3"] > .e-n-accordion-item-title-header > .e-n-accordion-item-title-text`

*... and 8 more failures for this rule*

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h6 class="section-subtitle">INSIGHTS</h6>`
- XPath: `.left > h6`

**Failure 2:**
- Message: Heading levels should only increase by one
- HTML: `<h6 class="section-subtitle section-subtitle1">Op Ed</h6>`
- XPath: `.section-subtitle1`

**Failure 3:**
- Message: Heading levels should only increase by one
- HTML: `<h6 class="section-subtitle">Tips</h6>`
- XPath: `.news-item.card-h:nth-child(1) > .news-item-body > h6`

**Failure 4:**
- Message: Heading levels should only increase by one
- HTML: `<h6 class="section-subtitle">Lean</h6>`
- XPath: `.news-item.card-h:nth-child(2) > .news-item-body > h6`

**Failure 5:**
- Message: Heading levels should only increase by one
- HTML: `<h6 class="section-subtitle">Contact</h6>`
- XPath: `.contact-form-body > h6`

*... and 2 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="https://nexxt.com.au/wp-content/uploads/2024/10/NEXXT-250-scaled.jpg">`
- XPath: `.sticky-news > .news-img-box > img`

**Failure 2:**
- Message: Images must have alternative text
- HTML: `<img src="https://nexxt.com.au/wp-content/uploads/2024/10/64b7ce72cc736c81beadb984_IMG_1582-2-p-800.jpg">`
- XPath: `.news-item.card-h:nth-child(1) > .news-img-box > img`

**Failure 3:**
- Message: Images must have alternative text
- HTML: `<img src="https://nexxt.com.au/wp-content/uploads/2024/10/61ac2b0bd942768a049f941a_58-COMPRESSED-p-800.jpeg">`
- XPath: `.news-item.card-h:nth-child(2) > .news-img-box > img`

**Failure 4:**
- Message: Images must have alternative text
- HTML: `<img src="https://nexxt.com.au/wp-content/uploads/2024/11/support2.png">`
- XPath: `.contact-info:nth-child(1) > img`

**Failure 5:**
- Message: Images must have alternative text
- HTML: `<img src="https://nexxt.com.au/wp-content/uploads/2024/11/map1.png">`
- XPath: `.contact-info:nth-child(2) > img`

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<header class="header-area">`
- XPath: `.header-area`

#### Rule: [landmark-contentinfo-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-contentinfo-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Contentinfo landmark should not be contained in another landmark
- HTML: `<footer class="footer-area">`
- XPath: `.footer-area`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="masthead" itemscope="itemscope" itemtype="https://schema.org/WPHeader">`
- XPath: `#masthead`

#### Rule: [landmark-no-duplicate-contentinfo](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-contentinfo?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one contentinfo landmark
- HTML: `<footer itemtype="https://schema.org/WPFooter" itemscope="itemscope" id="colophon" role="contentinfo">`
- XPath: `#colophon`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html lang="en-US">`
- XPath: `html`

**Failure 2:**
- Message: Document should have one main landmark
- HTML: `<html>`
- XPath: `#hs-form-iframe-0`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="masthead" itemscope="itemscope" itemtype="https://schema.org/WPHeader">`
- XPath: `#masthead`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<footer itemtype="https://schema.org/WPFooter" itemscope="itemscope" id="colophon" role="contentinfo">`
- XPath: `#colophon`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a href="/agile-20-years-on" class="theme-btn">         <i class="iconoir-arrow-up-right"></i>     </a>`
- XPath: `.theme-btn[href$="agile-20-years-on"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a href="/running-a-workshop-part-2-the-art-of-skillful-facilitation" class="theme-btn">                 <i class="iconoir-arrow-up-right"></i>             </a>`
- XPath: `.news-item.card-h:nth-child(1) > .news-item-body > .theme-btn`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a href="/the-seven-deadly-wastes-of-lean" class="theme-btn">                 <i class="iconoir-arrow-up-right"></i>             </a>`
- XPath: `.news-item.card-h:nth-child(2) > .news-item-body > .theme-btn`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a href="https://www.linkedin.com/company/nexxtgroup/">         <i class="iconoir-linkedin"></i>     </a>`
- XPath: `.social-links > li > a`

#### Rule: [list](https://dequeuniversity.com/rules/axe/4.11/list?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(1) > ul`

**Failure 2:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(2) > ul`

**Failure 3:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(3) > ul`

**Failure 4:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(4) > ul`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="elementor-element elementor-element-e499878 e-flex e-con-boxed e-con e-parent" data-id="e499878" data-element_type="container" data-e-type="container" data-settings="{"background_background":"gradient"}">`
- XPath: `.elementor-element-e499878`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="elementor-element elementor-element-8ca229b elementor-widget elementor-widget-heading" data-id="8ca229b" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">`
- XPath: `.elementor-element-8ca229b`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="elementor-element elementor-element-2ca2648 blog-section e-flex e-con-boxed e-con e-parent" data-id="2ca2648" data-element_type="container" data-e-type="container">`
- XPath: `.elementor-element-2ca2648`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="elementor-element elementor-element-1d449b7 e-flex e-con-boxed e-con e-parent" data-id="1d449b7" data-element_type="container" data-e-type="container">`
- XPath: `.elementor-element-1d449b7`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="elementor-element elementor-element-50ed840 e-con-full e-flex e-con e-parent" data-id="50ed840" data-element_type="container" data-e-type="container">`
- XPath: `.elementor-element-50ed840`

*... and 6 more failures for this rule*

### https://nexxt.com.au/coaching-and-uplift/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/contact" class="theme-btn">Contact Us</a>`
- XPath: `.header-left-right > .theme-btn[href$="contact"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<h6 class="section-subtitle">Benefits</h6>`
- XPath: `.about-service7-content > .section-header > h6`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<h6 class="section-subtitle">FEATURES</h6>`
- XPath: `.feature3-body > .section-header > h6`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<h6 class="section-subtitle">CASE STUDIES</h6>`
- XPath: `.case-studio-header > h6`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<h6 class="section-subtitle section-subtitle1">Op Ed</h6>`
- XPath: `.section-subtitle1`

*... and 7 more failures for this rule*

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: Headings should not be empty
- HTML: `<h6 class="section-subtitle">&nbsp;</h6>`
- XPath: `.section-header.w-full.justify-content-between > .left > h6`

**Failure 2:**
- Message: Headings should not be empty
- HTML: `<h2 class="section-title">&nbsp;</h2>`
- XPath: `.section-header.w-full.justify-content-between > .left > .section-title`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h4>Projects Delivered Successfully</h4>`
- XPath: `.hero-company-box.simple-shadow:nth-child(1) > h4`

**Failure 2:**
- Message: Heading levels should only increase by one
- HTML: `<h4>Tailored Workshops Delivered</h4>`
- XPath: `.hero-company-box.simple-shadow:nth-child(2) > h4`

**Failure 3:**
- Message: Heading levels should only increase by one
- HTML: `<h4>Professionals Coached</h4>`
- XPath: `.hero-company-box.simple-shadow:nth-child(3) > h4`

**Failure 4:**
- Message: Heading levels should only increase by one
- HTML: `<h4>Established</h4>`
- XPath: `.hero-company-box.simple-shadow:nth-child(4) > h4`

**Failure 5:**
- Message: Heading levels should only increase by one
- HTML: `<h6 class="section-subtitle">&nbsp;</h6>`
- XPath: `.section-header.w-full.justify-content-between > .left > h6`

*... and 12 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img decoding="async" src="https://nexxt.com.au/wp-content/uploads/2024/11/NEXXT-54-scaled.jpg">`
- XPath: `.hero-service-about > img[decoding="async"]`

**Failure 2:**
- Message: Images must have alternative text
- HTML: `<img decoding="async" src="https://nexxt.com.au/wp-content/uploads/2024/11/NEXXT-83-scaled.jpg">`
- XPath: `.about-service7-img-box > img[decoding="async"]:nth-child(1)`

**Failure 3:**
- Message: Images must have alternative text
- HTML: `<img decoding="async" src="">`
- XPath: `img[src=""][decoding="async"]`

**Failure 4:**
- Message: Images must have alternative text
- HTML: `<img decoding="async" src="https://nexxt.com.au/wp-content/uploads/2024/10/NEXXT-22-scaled.jpg">`
- XPath: `#development > .case-studio-body.d-flex > .flex-1.left.d-flex > .case-studio-img-card.simple-shadow > img[decoding="async"]`

**Failure 5:**
- Message: Images must have alternative text
- HTML: `<img decoding="async" src="https://nexxt.com.au/wp-content/uploads/2024/11/fast-delivery3.png">`
- XPath: `#development > .case-studio-body.d-flex > .right > .case-studio-contents.service-card.card-h > img[decoding="async"]`

*... and 5 more failures for this rule*

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<header class="header-area">`
- XPath: `.header-area`

#### Rule: [landmark-contentinfo-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-contentinfo-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Contentinfo landmark should not be contained in another landmark
- HTML: `<footer itemtype="https://schema.org/WPFooter" itemscope="itemscope" id="colophon" role="contentinfo">`
- XPath: `#colophon`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="masthead" itemscope="itemscope" itemtype="https://schema.org/WPHeader">`
- XPath: `#masthead`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="masthead" itemscope="itemscope" itemtype="https://schema.org/WPHeader">`
- XPath: `#masthead`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a href="/contact" class="theme-btn">                     <i class="iconoir-arrow-up-right"></i>                 </a>`
- XPath: `#development > .case-studio-body.d-flex > .right > .case-studio-contents.service-card.card-h > .theme-btn[href$="contact"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a href="/agile-20-years-on" class="theme-btn">         <i class="iconoir-arrow-up-right"></i>     </a>`
- XPath: `.theme-btn[href$="agile-20-years-on"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a href="/running-a-workshop-part-2-the-art-of-skillful-facilitation" class="theme-btn">                 <i class="iconoir-arrow-up-right"></i>             </a>`
- XPath: `.news-item.card-h:nth-child(1) > .news-item-body > .theme-btn`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a href="/the-seven-deadly-wastes-of-lean" class="theme-btn">                 <i class="iconoir-arrow-up-right"></i>             </a>`
- XPath: `.news-item.card-h:nth-child(2) > .news-item-body > .theme-btn`

**Failure 5:**
- Message: Links must have discernible text
- HTML: `<a href="https://www.linkedin.com/company/nexxtgroup/">         <i class="iconoir-linkedin"></i>     </a>`
- XPath: `.social-links > li > a`

#### Rule: [list](https://dequeuniversity.com/rules/axe/4.11/list?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(1) > ul`

**Failure 2:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(2) > ul`

**Failure 3:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(3) > ul`

**Failure 4:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(4) > ul`

### https://nexxt.com.au/decision-velocity-business-2025/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/contact" class="theme-btn">Contact Us</a>`
- XPath: `.header-left-right > .theme-btn[href$="contact"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<h6 class="section-subtitle badge-radius">Our Studies</h6>`
- XPath: `.badge-radius`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<strong>Nexxt’s Approach:</strong>`
- XPath: `p:nth-child(9) > strong`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<strong>Nexxt’s Approach:</strong>`
- XPath: `p:nth-child(12) > strong`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<strong>Nexxt’s Approach:</strong>`
- XPath: `p:nth-child(15) > strong`

*... and 9 more failures for this rule*

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h6 class="section-subtitle">INSIGHTS</h6>`
- XPath: `.left > h6`

**Failure 2:**
- Message: Heading levels should only increase by one
- HTML: `<h6 class="section-subtitle section-subtitle1">Op Ed</h6>`
- XPath: `.section-subtitle1`

**Failure 3:**
- Message: Heading levels should only increase by one
- HTML: `<h6 class="section-subtitle">Tips</h6>`
- XPath: `.news-item.card-h:nth-child(1) > .news-item-body > h6`

**Failure 4:**
- Message: Heading levels should only increase by one
- HTML: `<h6 class="section-subtitle">Lean</h6>`
- XPath: `.news-item.card-h:nth-child(2) > .news-item-body > h6`

**Failure 5:**
- Message: Heading levels should only increase by one
- HTML: `<h6 class="section-subtitle">Contact</h6>`
- XPath: `.contact-form-body > h6`

*... and 2 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="https://nexxt.com.au/wp-content/uploads/2024/10/NEXXT-250-scaled.jpg">`
- XPath: `.sticky-news > .news-img-box > img`

**Failure 2:**
- Message: Images must have alternative text
- HTML: `<img src="https://nexxt.com.au/wp-content/uploads/2024/10/64b7ce72cc736c81beadb984_IMG_1582-2-p-800.jpg">`
- XPath: `.news-item.card-h:nth-child(1) > .news-img-box > img`

**Failure 3:**
- Message: Images must have alternative text
- HTML: `<img src="https://nexxt.com.au/wp-content/uploads/2024/10/61ac2b0bd942768a049f941a_58-COMPRESSED-p-800.jpeg">`
- XPath: `.news-item.card-h:nth-child(2) > .news-img-box > img`

**Failure 4:**
- Message: Images must have alternative text
- HTML: `<img src="https://nexxt.com.au/wp-content/uploads/2024/11/support2.png">`
- XPath: `.contact-info:nth-child(1) > img`

**Failure 5:**
- Message: Images must have alternative text
- HTML: `<img src="https://nexxt.com.au/wp-content/uploads/2024/11/map1.png">`
- XPath: `.contact-info:nth-child(2) > img`

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<header class="header-area">`
- XPath: `.header-area`

#### Rule: [landmark-contentinfo-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-contentinfo-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Contentinfo landmark should not be contained in another landmark
- HTML: `<footer class="footer-area">`
- XPath: `.footer-area`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="masthead" itemscope="itemscope" itemtype="https://schema.org/WPHeader">`
- XPath: `#masthead`

#### Rule: [landmark-no-duplicate-contentinfo](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-contentinfo?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one contentinfo landmark
- HTML: `<footer itemtype="https://schema.org/WPFooter" itemscope="itemscope" id="colophon" role="contentinfo">`
- XPath: `#colophon`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html lang="en-US">`
- XPath: `html`

**Failure 2:**
- Message: Document should have one main landmark
- HTML: `<html>`
- XPath: `#hs-form-iframe-0`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="masthead" itemscope="itemscope" itemtype="https://schema.org/WPHeader">`
- XPath: `#masthead`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<footer itemtype="https://schema.org/WPFooter" itemscope="itemscope" id="colophon" role="contentinfo">`
- XPath: `#colophon`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a href="/agile-20-years-on" class="theme-btn">         <i class="iconoir-arrow-up-right"></i>     </a>`
- XPath: `.theme-btn[href$="agile-20-years-on"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a href="/running-a-workshop-part-2-the-art-of-skillful-facilitation" class="theme-btn">                 <i class="iconoir-arrow-up-right"></i>             </a>`
- XPath: `.news-item.card-h:nth-child(1) > .news-item-body > .theme-btn`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a href="/the-seven-deadly-wastes-of-lean" class="theme-btn">                 <i class="iconoir-arrow-up-right"></i>             </a>`
- XPath: `.news-item.card-h:nth-child(2) > .news-item-body > .theme-btn`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a href="https://www.linkedin.com/company/nexxtgroup/">         <i class="iconoir-linkedin"></i>     </a>`
- XPath: `.social-links > li > a`

#### Rule: [list](https://dequeuniversity.com/rules/axe/4.11/list?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(1) > ul`

**Failure 2:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(2) > ul`

**Failure 3:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(3) > ul`

**Failure 4:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(4) > ul`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="elementor-element elementor-element-e499878 e-flex e-con-boxed e-con e-parent" data-id="e499878" data-element_type="container" data-e-type="container" data-settings="{"background_background":"gradient"}">`
- XPath: `.elementor-element-e499878`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="elementor-element elementor-element-8ca229b elementor-widget elementor-widget-heading" data-id="8ca229b" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">`
- XPath: `.elementor-element-8ca229b`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="elementor-element elementor-element-690a031 e-flex e-con-boxed e-con e-parent" data-id="690a031" data-element_type="container" data-e-type="container">`
- XPath: `.elementor-element-690a031`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="elementor-element elementor-element-50ed840 e-con-full e-flex e-con e-parent" data-id="50ed840" data-element_type="container" data-e-type="container">`
- XPath: `.elementor-element-50ed840`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<h6 class="section-subtitle">Contact</h6>`
- XPath: `.contact-form-body > h6`

*... and 5 more failures for this rule*

### https://nexxt.com.au/digital-transformation-consulting/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/contact" class="theme-btn">Contact Us</a>`
- XPath: `.header-left-right > .theme-btn[href$="contact"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<h6 class="section-subtitle badge-radius">Our Studies</h6>`
- XPath: `.badge-radius`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<strong>Digital transformation</strong>`
- XPath: `p:nth-child(2) > strong`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://nexxt.com.au">Nexxt.com.au</a>`
- XPath: `strong:nth-child(1) > a[href$="nexxt.com.au"]`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<strong>digital transformation consulting</strong>`
- XPath: `p:nth-child(3) > strong:nth-child(2)`

*... and 26 more failures for this rule*

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h6 class="section-subtitle">INSIGHTS</h6>`
- XPath: `.left > h6`

**Failure 2:**
- Message: Heading levels should only increase by one
- HTML: `<h6 class="section-subtitle section-subtitle1">Op Ed</h6>`
- XPath: `.section-subtitle1`

**Failure 3:**
- Message: Heading levels should only increase by one
- HTML: `<h6 class="section-subtitle">Tips</h6>`
- XPath: `.news-item.card-h:nth-child(1) > .news-item-body > h6`

**Failure 4:**
- Message: Heading levels should only increase by one
- HTML: `<h6 class="section-subtitle">Lean</h6>`
- XPath: `.news-item.card-h:nth-child(2) > .news-item-body > h6`

**Failure 5:**
- Message: Heading levels should only increase by one
- HTML: `<h6 class="section-subtitle">Contact</h6>`
- XPath: `.contact-form-body > h6`

*... and 2 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="https://nexxt.com.au/wp-content/uploads/2024/10/NEXXT-250-scaled.jpg">`
- XPath: `.sticky-news > .news-img-box > img`

**Failure 2:**
- Message: Images must have alternative text
- HTML: `<img src="https://nexxt.com.au/wp-content/uploads/2024/10/64b7ce72cc736c81beadb984_IMG_1582-2-p-800.jpg">`
- XPath: `.news-item.card-h:nth-child(1) > .news-img-box > img`

**Failure 3:**
- Message: Images must have alternative text
- HTML: `<img src="https://nexxt.com.au/wp-content/uploads/2024/10/61ac2b0bd942768a049f941a_58-COMPRESSED-p-800.jpeg">`
- XPath: `.news-item.card-h:nth-child(2) > .news-img-box > img`

**Failure 4:**
- Message: Images must have alternative text
- HTML: `<img src="https://nexxt.com.au/wp-content/uploads/2024/11/support2.png">`
- XPath: `.contact-info:nth-child(1) > img`

**Failure 5:**
- Message: Images must have alternative text
- HTML: `<img src="https://nexxt.com.au/wp-content/uploads/2024/11/map1.png">`
- XPath: `.contact-info:nth-child(2) > img`

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<header class="header-area">`
- XPath: `.header-area`

#### Rule: [landmark-contentinfo-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-contentinfo-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Contentinfo landmark should not be contained in another landmark
- HTML: `<footer class="footer-area">`
- XPath: `.footer-area`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="masthead" itemscope="itemscope" itemtype="https://schema.org/WPHeader">`
- XPath: `#masthead`

#### Rule: [landmark-no-duplicate-contentinfo](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-contentinfo?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one contentinfo landmark
- HTML: `<footer itemtype="https://schema.org/WPFooter" itemscope="itemscope" id="colophon" role="contentinfo">`
- XPath: `#colophon`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html lang="en-US">`
- XPath: `html`

**Failure 2:**
- Message: Document should have one main landmark
- HTML: `<html>`
- XPath: `#hs-form-iframe-0`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="masthead" itemscope="itemscope" itemtype="https://schema.org/WPHeader">`
- XPath: `#masthead`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<footer itemtype="https://schema.org/WPFooter" itemscope="itemscope" id="colophon" role="contentinfo">`
- XPath: `#colophon`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a href="/agile-20-years-on" class="theme-btn">         <i class="iconoir-arrow-up-right"></i>     </a>`
- XPath: `.theme-btn[href$="agile-20-years-on"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a href="/running-a-workshop-part-2-the-art-of-skillful-facilitation" class="theme-btn">                 <i class="iconoir-arrow-up-right"></i>             </a>`
- XPath: `.news-item.card-h:nth-child(1) > .news-item-body > .theme-btn`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a href="/the-seven-deadly-wastes-of-lean" class="theme-btn">                 <i class="iconoir-arrow-up-right"></i>             </a>`
- XPath: `.news-item.card-h:nth-child(2) > .news-item-body > .theme-btn`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a href="https://www.linkedin.com/company/nexxtgroup/">         <i class="iconoir-linkedin"></i>     </a>`
- XPath: `.social-links > li > a`

#### Rule: [list](https://dequeuniversity.com/rules/axe/4.11/list?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(1) > ul`

**Failure 2:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(2) > ul`

**Failure 3:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(3) > ul`

**Failure 4:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(4) > ul`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="elementor-element elementor-element-e499878 e-flex e-con-boxed e-con e-parent" data-id="e499878" data-element_type="container" data-e-type="container" data-settings="{"background_background":"gradient"}">`
- XPath: `.elementor-element-e499878`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="elementor-element elementor-element-8ca229b elementor-widget elementor-widget-heading" data-id="8ca229b" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">`
- XPath: `.elementor-element-8ca229b`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="elementor-element elementor-element-b097045 e-flex e-con-boxed e-con e-parent" data-id="b097045" data-element_type="container" data-e-type="container">`
- XPath: `.elementor-element-b097045`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="elementor-element elementor-element-50ed840 e-con-full e-flex e-con e-parent" data-id="50ed840" data-element_type="container" data-e-type="container">`
- XPath: `.elementor-element-50ed840`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<h6 class="section-subtitle">Contact</h6>`
- XPath: `.contact-form-body > h6`

*... and 5 more failures for this rule*

### https://nexxt.com.au/insights-inner/

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<article class="elementor-post elementor-grid-item post-8568 post type-post status-publish format-standard has-post-thumbnail hentry category-blog" role="listitem">`
- XPath: `.post-8568`

**Failure 2:**
- Message: ARIA role should be appropriate for the element
- HTML: `<article class="elementor-post elementor-grid-item post-8559 post type-post status-publish format-standard has-post-thumbnail hentry category-blog" role="listitem">`
- XPath: `.post-8559`

**Failure 3:**
- Message: ARIA role should be appropriate for the element
- HTML: `<article class="elementor-post elementor-grid-item post-8551 post type-post status-publish format-standard has-post-thumbnail hentry category-blog" role="listitem">`
- XPath: `.post-8551`

**Failure 4:**
- Message: ARIA role should be appropriate for the element
- HTML: `<article class="elementor-post elementor-grid-item post-8533 post type-post status-publish format-standard has-post-thumbnail hentry category-blog" role="listitem">`
- XPath: `.post-8533`

**Failure 5:**
- Message: ARIA role should be appropriate for the element
- HTML: `<article class="elementor-post elementor-grid-item post-8525 post type-post status-publish format-standard has-post-thumbnail hentry category-blog" role="listitem">`
- XPath: `.post-8525`

*... and 1 more failures for this rule*

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/contact" class="theme-btn">Contact Us</a>`
- XPath: `.header-left-right > .theme-btn[href$="contact"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://nexxt.com.au/it-consultant-brisbane-sme-guide/"> 				IT Consultant Brisbane for SMEs: Services, Pricing Signals &amp; When to Engage			</a>`
- XPath: `.post-8568 > .elementor-post__text > .elementor-post__title > a`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<p>If you’re spinning up initiatives without clear outcomes or fighting tool sprawl, an IT consultant in Brisbane can align strategy, delivery and change so work</p>`
- XPath: `.post-8568 > .elementor-post__text > .elementor-post__excerpt > p`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a class="elementor-post__read-more" href="https://nexxt.com.au/it-consultant-brisbane-sme-guide/" aria-label="Read more about IT Consultant Brisbane for SMEs: Services, Pricing Signals &amp; When to Engage" tabindex="-1"> 			Read More »		</a>`
- XPath: `.post-8568 > .elementor-post__text > .elementor-post__read-more`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://nexxt.com.au/office-365-consulting-services-australia/"> 				Office 365 Consulting Services (Australia)			</a>`
- XPath: `.post-8559 > .elementor-post__text > .elementor-post__title > a`

*... and 14 more failures for this rule*

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h4>Services</h4>`
- XPath: `.footer-links:nth-child(1) > h4`

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<header class="header-area">`
- XPath: `.header-area`

#### Rule: [landmark-contentinfo-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-contentinfo-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Contentinfo landmark should not be contained in another landmark
- HTML: `<footer class="footer-area">`
- XPath: `.footer-area`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="masthead" itemscope="itemscope" itemtype="https://schema.org/WPHeader">`
- XPath: `#masthead`

#### Rule: [landmark-no-duplicate-contentinfo](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-contentinfo?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one contentinfo landmark
- HTML: `<footer itemtype="https://schema.org/WPFooter" itemscope="itemscope" id="colophon" role="contentinfo">`
- XPath: `#colophon`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html lang="en-US">`
- XPath: `html`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="masthead" itemscope="itemscope" itemtype="https://schema.org/WPHeader">`
- XPath: `#masthead`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<footer itemtype="https://schema.org/WPFooter" itemscope="itemscope" id="colophon" role="contentinfo">`
- XPath: `#colophon`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a href="https://www.linkedin.com/company/nexxtgroup/">         <i class="iconoir-linkedin"></i>     </a>`
- XPath: `.social-links > li > a`

#### Rule: [list](https://dequeuniversity.com/rules/axe/4.11/list?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(1) > ul`

**Failure 2:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(2) > ul`

**Failure 3:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(3) > ul`

**Failure 4:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(4) > ul`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Page should contain a level-one heading
- HTML: `<html lang="en-US">`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="elementor-widget-container">`
- XPath: `.elementor-element-74889dd > .elementor-widget-container`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="elementor-posts-container elementor-posts elementor-posts--skin-classic elementor-grid elementor-has-item-ratio" role="list">`
- XPath: `.elementor-posts-container`

### https://nexxt.com.au/insights/

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<article class="elementor-post elementor-grid-item post-8568 post type-post status-publish format-standard has-post-thumbnail hentry category-blog" role="listitem">`
- XPath: `.post-8568`

**Failure 2:**
- Message: ARIA role should be appropriate for the element
- HTML: `<article class="elementor-post elementor-grid-item post-8559 post type-post status-publish format-standard has-post-thumbnail hentry category-blog" role="listitem">`
- XPath: `.post-8559`

**Failure 3:**
- Message: ARIA role should be appropriate for the element
- HTML: `<article class="elementor-post elementor-grid-item post-8551 post type-post status-publish format-standard has-post-thumbnail hentry category-blog" role="listitem">`
- XPath: `.post-8551`

**Failure 4:**
- Message: ARIA role should be appropriate for the element
- HTML: `<article class="elementor-post elementor-grid-item post-8533 post type-post status-publish format-standard has-post-thumbnail hentry category-blog" role="listitem">`
- XPath: `.post-8533`

**Failure 5:**
- Message: ARIA role should be appropriate for the element
- HTML: `<article class="elementor-post elementor-grid-item post-8525 post type-post status-publish format-standard has-post-thumbnail hentry category-blog" role="listitem">`
- XPath: `.post-8525`

*... and 3 more failures for this rule*

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/contact" class="theme-btn">Contact Us</a>`
- XPath: `.header-left-right > .theme-btn[href$="contact"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://nexxt.com.au/it-consultant-brisbane-sme-guide/"> 				IT Consultant Brisbane for SMEs: Services, Pricing Signals &amp; When to Engage			</a>`
- XPath: `.post-8568 > .elementor-post__text > .elementor-post__title > a`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<p>If you’re spinning up initiatives without clear outcomes or fighting tool sprawl, an IT consultant in Brisbane can align strategy, delivery and change so work</p>`
- XPath: `.post-8568 > .elementor-post__text > .elementor-post__excerpt > p`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a class="elementor-post__read-more" href="https://nexxt.com.au/it-consultant-brisbane-sme-guide/" aria-label="Read more about IT Consultant Brisbane for SMEs: Services, Pricing Signals &amp; When to Engage" tabindex="-1"> 			Read More »		</a>`
- XPath: `.post-8568 > .elementor-post__text > .elementor-post__read-more`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://nexxt.com.au/office-365-consulting-services-australia/"> 				Office 365 Consulting Services (Australia)			</a>`
- XPath: `.post-8559 > .elementor-post__text > .elementor-post__title > a`

*... and 27 more failures for this rule*

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h6 class="section-subtitle">CASE STUDIES</h6>`
- XPath: `.case-studio-header > h6`

**Failure 2:**
- Message: Heading levels should only increase by one
- HTML: `<h4>Accelerating Delivery, Inspiring Change</h4>`
- XPath: `#development > .case-studio-body.d-flex > .right > .case-studio-contents.service-card.card-h > h4`

**Failure 3:**
- Message: Heading levels should only increase by one
- HTML: `<h6 class="section-subtitle">Contact</h6>`
- XPath: `.contact-form-body > h6`

**Failure 4:**
- Message: Heading levels should only increase by one
- HTML: `<h4>Contact Info</h4>`
- XPath: `.contact-info:nth-child(1) > h4`

**Failure 5:**
- Message: Heading levels should only increase by one
- HTML: `<h4>Services</h4>`
- XPath: `.footer-links:nth-child(1) > h4`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img decoding="async" src="https://nexxt.com.au/wp-content/uploads/2024/10/NEXXT-22-scaled.jpg">`
- XPath: `#development > .case-studio-body.d-flex > .flex-1.left.d-flex > .case-studio-img-card.simple-shadow > img[decoding="async"]`

**Failure 2:**
- Message: Images must have alternative text
- HTML: `<img decoding="async" src="https://nexxt.com.au/wp-content/uploads/2024/11/fast-delivery3.png">`
- XPath: `#development > .case-studio-body.d-flex > .right > .case-studio-contents.service-card.card-h > img[decoding="async"]`

**Failure 3:**
- Message: Images must have alternative text
- HTML: `<img decoding="async" src="https://nexxt.com.au/wp-content/uploads/2024/11/support2.png">`
- XPath: `.contact-info:nth-child(1) > img[decoding="async"]`

**Failure 4:**
- Message: Images must have alternative text
- HTML: `<img decoding="async" src="https://nexxt.com.au/wp-content/uploads/2024/11/map1.png">`
- XPath: `.contact-info:nth-child(2) > img[decoding="async"]`

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<header class="header-area">`
- XPath: `.header-area`

#### Rule: [landmark-contentinfo-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-contentinfo-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Contentinfo landmark should not be contained in another landmark
- HTML: `<footer itemtype="https://schema.org/WPFooter" itemscope="itemscope" id="colophon" role="contentinfo">`
- XPath: `#colophon`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="masthead" itemscope="itemscope" itemtype="https://schema.org/WPHeader">`
- XPath: `#masthead`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="masthead" itemscope="itemscope" itemtype="https://schema.org/WPHeader">`
- XPath: `#masthead`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a href="/contact" class="theme-btn">                     <i class="iconoir-arrow-up-right"></i>                 </a>`
- XPath: `#development > .case-studio-body.d-flex > .right > .case-studio-contents.service-card.card-h > .theme-btn[href$="contact"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a href="https://www.linkedin.com/company/nexxtgroup/">         <i class="iconoir-linkedin"></i>     </a>`
- XPath: `.social-links > li > a`

#### Rule: [list](https://dequeuniversity.com/rules/axe/4.11/list?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(1) > ul`

**Failure 2:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(2) > ul`

**Failure 3:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(3) > ul`

**Failure 4:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(4) > ul`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Page should contain a level-one heading
- HTML: `<html lang="en-US" en-us""="">`
- XPath: `html`

**Failure 2:**
- Message: Page should contain a level-one heading
- HTML: `<html>`
- XPath: `#hs-form-iframe-0`

### https://nexxt.com.au/it-consultant-brisbane-sme-guide/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/contact" class="theme-btn">Contact Us</a>`
- XPath: `.header-left-right > .theme-btn[href$="contact"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<h6 class="section-subtitle badge-radius">Our Studies</h6>`
- XPath: `.badge-radius`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="elementor-button-text">Speak with a Brisbane Consultant</span>`
- XPath: `.elementor-element-63025cf > .elementor-widget-container > .elementor-button-wrapper > .elementor-button.elementor-button-link.elementor-size-sm > .elementor-button-content-wrapper > .elementor-button-text`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<div class="e-n-accordion-item-title-text"> Do you work on-site? </div>`
- XPath: `summary[data-accordion-index="2"] > .e-n-accordion-item-title-header > .e-n-accordion-item-title-text`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<div class="e-n-accordion-item-title-text"> Can you help hire or augment tech roles? </div>`
- XPath: `summary[data-accordion-index="3"] > .e-n-accordion-item-title-header > .e-n-accordion-item-title-text`

*... and 8 more failures for this rule*

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h6 class="section-subtitle">INSIGHTS</h6>`
- XPath: `.left > h6`

**Failure 2:**
- Message: Heading levels should only increase by one
- HTML: `<h6 class="section-subtitle section-subtitle1">Op Ed</h6>`
- XPath: `.section-subtitle1`

**Failure 3:**
- Message: Heading levels should only increase by one
- HTML: `<h6 class="section-subtitle">Tips</h6>`
- XPath: `.news-item.card-h:nth-child(1) > .news-item-body > h6`

**Failure 4:**
- Message: Heading levels should only increase by one
- HTML: `<h6 class="section-subtitle">Lean</h6>`
- XPath: `.news-item.card-h:nth-child(2) > .news-item-body > h6`

**Failure 5:**
- Message: Heading levels should only increase by one
- HTML: `<h6 class="section-subtitle">Contact</h6>`
- XPath: `.contact-form-body > h6`

*... and 2 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="https://nexxt.com.au/wp-content/uploads/2024/10/NEXXT-250-scaled.jpg">`
- XPath: `.sticky-news > .news-img-box > img`

**Failure 2:**
- Message: Images must have alternative text
- HTML: `<img src="https://nexxt.com.au/wp-content/uploads/2024/10/64b7ce72cc736c81beadb984_IMG_1582-2-p-800.jpg">`
- XPath: `.news-item.card-h:nth-child(1) > .news-img-box > img`

**Failure 3:**
- Message: Images must have alternative text
- HTML: `<img src="https://nexxt.com.au/wp-content/uploads/2024/10/61ac2b0bd942768a049f941a_58-COMPRESSED-p-800.jpeg">`
- XPath: `.news-item.card-h:nth-child(2) > .news-img-box > img`

**Failure 4:**
- Message: Images must have alternative text
- HTML: `<img src="https://nexxt.com.au/wp-content/uploads/2024/11/support2.png">`
- XPath: `.contact-info:nth-child(1) > img`

**Failure 5:**
- Message: Images must have alternative text
- HTML: `<img src="https://nexxt.com.au/wp-content/uploads/2024/11/map1.png">`
- XPath: `.contact-info:nth-child(2) > img`

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<header class="header-area">`
- XPath: `.header-area`

#### Rule: [landmark-contentinfo-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-contentinfo-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Contentinfo landmark should not be contained in another landmark
- HTML: `<footer class="footer-area">`
- XPath: `.footer-area`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="masthead" itemscope="itemscope" itemtype="https://schema.org/WPHeader">`
- XPath: `#masthead`

#### Rule: [landmark-no-duplicate-contentinfo](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-contentinfo?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one contentinfo landmark
- HTML: `<footer itemtype="https://schema.org/WPFooter" itemscope="itemscope" id="colophon" role="contentinfo">`
- XPath: `#colophon`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html lang="en-US">`
- XPath: `html`

**Failure 2:**
- Message: Document should have one main landmark
- HTML: `<html>`
- XPath: `#hs-form-iframe-0`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="masthead" itemscope="itemscope" itemtype="https://schema.org/WPHeader">`
- XPath: `#masthead`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<footer itemtype="https://schema.org/WPFooter" itemscope="itemscope" id="colophon" role="contentinfo">`
- XPath: `#colophon`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a href="/agile-20-years-on" class="theme-btn">         <i class="iconoir-arrow-up-right"></i>     </a>`
- XPath: `.theme-btn[href$="agile-20-years-on"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a href="/running-a-workshop-part-2-the-art-of-skillful-facilitation" class="theme-btn">                 <i class="iconoir-arrow-up-right"></i>             </a>`
- XPath: `.news-item.card-h:nth-child(1) > .news-item-body > .theme-btn`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a href="/the-seven-deadly-wastes-of-lean" class="theme-btn">                 <i class="iconoir-arrow-up-right"></i>             </a>`
- XPath: `.news-item.card-h:nth-child(2) > .news-item-body > .theme-btn`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a href="https://www.linkedin.com/company/nexxtgroup/">         <i class="iconoir-linkedin"></i>     </a>`
- XPath: `.social-links > li > a`

#### Rule: [list](https://dequeuniversity.com/rules/axe/4.11/list?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(1) > ul`

**Failure 2:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(2) > ul`

**Failure 3:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(3) > ul`

**Failure 4:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(4) > ul`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="elementor-element elementor-element-e499878 e-flex e-con-boxed e-con e-parent" data-id="e499878" data-element_type="container" data-e-type="container" data-settings="{"background_background":"gradient"}">`
- XPath: `.elementor-element-e499878`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="elementor-element elementor-element-8ca229b elementor-widget elementor-widget-heading" data-id="8ca229b" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">`
- XPath: `.elementor-element-8ca229b`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="elementor-element elementor-element-9dc8bea blog-section e-flex e-con-boxed e-con e-parent" data-id="9dc8bea" data-element_type="container" data-e-type="container">`
- XPath: `.elementor-element-9dc8bea`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="elementor-element elementor-element-421dda1 e-flex e-con-boxed e-con e-parent" data-id="421dda1" data-element_type="container" data-e-type="container">`
- XPath: `.elementor-element-421dda1`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="elementor-element elementor-element-50ed840 e-con-full e-flex e-con e-parent" data-id="50ed840" data-element_type="container" data-e-type="container">`
- XPath: `.elementor-element-50ed840`

*... and 6 more failures for this rule*

### https://nexxt.com.au/microsoft-teams-training/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/contact" class="theme-btn">Contact Us</a>`
- XPath: `.header-left-right > .theme-btn[href$="contact"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<h6 class="section-subtitle badge-radius">Our Studies</h6>`
- XPath: `.badge-radius`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<strong>central nervous system</strong>`
- XPath: `p:nth-child(7) > strong`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<strong>Microsoft Partner</strong>`
- XPath: `li:nth-child(1) > strong`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<strong>real-world ways of working</strong>`
- XPath: `li:nth-child(2) > strong`

*... and 11 more failures for this rule*

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h6 class="section-subtitle">INSIGHTS</h6>`
- XPath: `.left > h6`

**Failure 2:**
- Message: Heading levels should only increase by one
- HTML: `<h6 class="section-subtitle section-subtitle1">Op Ed</h6>`
- XPath: `.section-subtitle1`

**Failure 3:**
- Message: Heading levels should only increase by one
- HTML: `<h6 class="section-subtitle">Tips</h6>`
- XPath: `.news-item.card-h:nth-child(1) > .news-item-body > h6`

**Failure 4:**
- Message: Heading levels should only increase by one
- HTML: `<h6 class="section-subtitle">Lean</h6>`
- XPath: `.news-item.card-h:nth-child(2) > .news-item-body > h6`

**Failure 5:**
- Message: Heading levels should only increase by one
- HTML: `<h6 class="section-subtitle">Contact</h6>`
- XPath: `.contact-form-body > h6`

*... and 2 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="https://nexxt.com.au/wp-content/uploads/2024/10/NEXXT-250-scaled.jpg">`
- XPath: `.sticky-news > .news-img-box > img`

**Failure 2:**
- Message: Images must have alternative text
- HTML: `<img src="https://nexxt.com.au/wp-content/uploads/2024/10/64b7ce72cc736c81beadb984_IMG_1582-2-p-800.jpg">`
- XPath: `.news-item.card-h:nth-child(1) > .news-img-box > img`

**Failure 3:**
- Message: Images must have alternative text
- HTML: `<img src="https://nexxt.com.au/wp-content/uploads/2024/10/61ac2b0bd942768a049f941a_58-COMPRESSED-p-800.jpeg">`
- XPath: `.news-item.card-h:nth-child(2) > .news-img-box > img`

**Failure 4:**
- Message: Images must have alternative text
- HTML: `<img src="https://nexxt.com.au/wp-content/uploads/2024/11/support2.png">`
- XPath: `.contact-info:nth-child(1) > img`

**Failure 5:**
- Message: Images must have alternative text
- HTML: `<img src="https://nexxt.com.au/wp-content/uploads/2024/11/map1.png">`
- XPath: `.contact-info:nth-child(2) > img`

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<header class="header-area">`
- XPath: `.header-area`

#### Rule: [landmark-contentinfo-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-contentinfo-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Contentinfo landmark should not be contained in another landmark
- HTML: `<footer class="footer-area">`
- XPath: `.footer-area`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="masthead" itemscope="itemscope" itemtype="https://schema.org/WPHeader">`
- XPath: `#masthead`

#### Rule: [landmark-no-duplicate-contentinfo](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-contentinfo?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one contentinfo landmark
- HTML: `<footer itemtype="https://schema.org/WPFooter" itemscope="itemscope" id="colophon" role="contentinfo">`
- XPath: `#colophon`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html lang="en-US">`
- XPath: `html`

**Failure 2:**
- Message: Document should have one main landmark
- HTML: `<html>`
- XPath: `#hs-form-iframe-0`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="masthead" itemscope="itemscope" itemtype="https://schema.org/WPHeader">`
- XPath: `#masthead`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<footer itemtype="https://schema.org/WPFooter" itemscope="itemscope" id="colophon" role="contentinfo">`
- XPath: `#colophon`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a href="/agile-20-years-on" class="theme-btn">         <i class="iconoir-arrow-up-right"></i>     </a>`
- XPath: `.theme-btn[href$="agile-20-years-on"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a href="/running-a-workshop-part-2-the-art-of-skillful-facilitation" class="theme-btn">                 <i class="iconoir-arrow-up-right"></i>             </a>`
- XPath: `.news-item.card-h:nth-child(1) > .news-item-body > .theme-btn`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a href="/the-seven-deadly-wastes-of-lean" class="theme-btn">                 <i class="iconoir-arrow-up-right"></i>             </a>`
- XPath: `.news-item.card-h:nth-child(2) > .news-item-body > .theme-btn`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a href="https://www.linkedin.com/company/nexxtgroup/">         <i class="iconoir-linkedin"></i>     </a>`
- XPath: `.social-links > li > a`

#### Rule: [list](https://dequeuniversity.com/rules/axe/4.11/list?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(1) > ul`

**Failure 2:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(2) > ul`

**Failure 3:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(3) > ul`

**Failure 4:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(4) > ul`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="elementor-element elementor-element-e499878 e-flex e-con-boxed e-con e-parent" data-id="e499878" data-element_type="container" data-e-type="container" data-settings="{"background_background":"gradient"}">`
- XPath: `.elementor-element-e499878`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="elementor-element elementor-element-8ca229b elementor-widget elementor-widget-heading" data-id="8ca229b" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">`
- XPath: `.elementor-element-8ca229b`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="elementor-element elementor-element-ba9fce7 blog-section e-flex e-con-boxed e-con e-parent" data-id="ba9fce7" data-element_type="container" data-e-type="container">`
- XPath: `.elementor-element-ba9fce7`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="elementor-element elementor-element-50ed840 e-con-full e-flex e-con e-parent" data-id="50ed840" data-element_type="container" data-e-type="container">`
- XPath: `.elementor-element-50ed840`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<h6 class="section-subtitle">Contact</h6>`
- XPath: `.contact-form-body > h6`

*... and 5 more failures for this rule*

### https://nexxt.com.au/privacy-policy/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/contact" class="theme-btn">Contact Us</a>`
- XPath: `.header-left-right > .theme-btn[href$="contact"]`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h4>Services</h4>`
- XPath: `.footer-links:nth-child(1) > h4`

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<header class="header-area">`
- XPath: `.header-area`

#### Rule: [landmark-contentinfo-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-contentinfo-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Contentinfo landmark should not be contained in another landmark
- HTML: `<footer class="footer-area">`
- XPath: `.footer-area`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="masthead" itemscope="itemscope" itemtype="https://schema.org/WPHeader">`
- XPath: `#masthead`

#### Rule: [landmark-no-duplicate-contentinfo](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-contentinfo?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one contentinfo landmark
- HTML: `<footer itemtype="https://schema.org/WPFooter" itemscope="itemscope" id="colophon" role="contentinfo">`
- XPath: `#colophon`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html lang="en-US">`
- XPath: `html`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="masthead" itemscope="itemscope" itemtype="https://schema.org/WPHeader">`
- XPath: `#masthead`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<footer itemtype="https://schema.org/WPFooter" itemscope="itemscope" id="colophon" role="contentinfo">`
- XPath: `#colophon`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a href="https://www.linkedin.com/company/nexxtgroup/">         <i class="iconoir-linkedin"></i>     </a>`
- XPath: `.social-links > li > a`

#### Rule: [list](https://dequeuniversity.com/rules/axe/4.11/list?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(1) > ul`

**Failure 2:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(2) > ul`

**Failure 3:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(3) > ul`

**Failure 4:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(4) > ul`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div data-elementor-type="wp-page" data-elementor-id="3" class="elementor elementor-3" data-elementor-post-type="page">`
- XPath: `.elementor-3`

### https://nexxt.com.au/project-delivery-assurance-audit/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/contact" class="theme-btn">Contact Us</a>`
- XPath: `.header-left-right > .theme-btn[href$="contact"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<h6 class="section-subtitle badge-radius">Our Studies</h6>`
- XPath: `.badge-radius`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="elementor-button-text">Book a Delivery Assurance Audit</span>`
- XPath: `.elementor-element-52b2028 > .elementor-widget-container > .elementor-button-wrapper > .elementor-button.elementor-button-link.elementor-size-sm > .elementor-button-content-wrapper > .elementor-button-text`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<div class="e-n-accordion-item-title-text"> Will it slow the team down? </div>`
- XPath: `summary[data-accordion-index="2"] > .e-n-accordion-item-title-header > .e-n-accordion-item-title-text`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<div class="e-n-accordion-item-title-text"> What if the root cause is staffing? </div>`
- XPath: `summary[data-accordion-index="3"] > .e-n-accordion-item-title-header > .e-n-accordion-item-title-text`

*... and 8 more failures for this rule*

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h6 class="section-subtitle">INSIGHTS</h6>`
- XPath: `.left > h6`

**Failure 2:**
- Message: Heading levels should only increase by one
- HTML: `<h6 class="section-subtitle section-subtitle1">Op Ed</h6>`
- XPath: `.section-subtitle1`

**Failure 3:**
- Message: Heading levels should only increase by one
- HTML: `<h6 class="section-subtitle">Tips</h6>`
- XPath: `.news-item.card-h:nth-child(1) > .news-item-body > h6`

**Failure 4:**
- Message: Heading levels should only increase by one
- HTML: `<h6 class="section-subtitle">Lean</h6>`
- XPath: `.news-item.card-h:nth-child(2) > .news-item-body > h6`

**Failure 5:**
- Message: Heading levels should only increase by one
- HTML: `<h6 class="section-subtitle">Contact</h6>`
- XPath: `.contact-form-body > h6`

*... and 2 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="https://nexxt.com.au/wp-content/uploads/2024/10/NEXXT-250-scaled.jpg">`
- XPath: `.sticky-news > .news-img-box > img`

**Failure 2:**
- Message: Images must have alternative text
- HTML: `<img src="https://nexxt.com.au/wp-content/uploads/2024/10/64b7ce72cc736c81beadb984_IMG_1582-2-p-800.jpg">`
- XPath: `.news-item.card-h:nth-child(1) > .news-img-box > img`

**Failure 3:**
- Message: Images must have alternative text
- HTML: `<img src="https://nexxt.com.au/wp-content/uploads/2024/10/61ac2b0bd942768a049f941a_58-COMPRESSED-p-800.jpeg">`
- XPath: `.news-item.card-h:nth-child(2) > .news-img-box > img`

**Failure 4:**
- Message: Images must have alternative text
- HTML: `<img src="https://nexxt.com.au/wp-content/uploads/2024/11/support2.png">`
- XPath: `.contact-info:nth-child(1) > img`

**Failure 5:**
- Message: Images must have alternative text
- HTML: `<img src="https://nexxt.com.au/wp-content/uploads/2024/11/map1.png">`
- XPath: `.contact-info:nth-child(2) > img`

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<header class="header-area">`
- XPath: `.header-area`

#### Rule: [landmark-contentinfo-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-contentinfo-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Contentinfo landmark should not be contained in another landmark
- HTML: `<footer class="footer-area">`
- XPath: `.footer-area`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="masthead" itemscope="itemscope" itemtype="https://schema.org/WPHeader">`
- XPath: `#masthead`

#### Rule: [landmark-no-duplicate-contentinfo](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-contentinfo?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one contentinfo landmark
- HTML: `<footer itemtype="https://schema.org/WPFooter" itemscope="itemscope" id="colophon" role="contentinfo">`
- XPath: `#colophon`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html lang="en-US">`
- XPath: `html`

**Failure 2:**
- Message: Document should have one main landmark
- HTML: `<html>`
- XPath: `#hs-form-iframe-0`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="masthead" itemscope="itemscope" itemtype="https://schema.org/WPHeader">`
- XPath: `#masthead`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<footer itemtype="https://schema.org/WPFooter" itemscope="itemscope" id="colophon" role="contentinfo">`
- XPath: `#colophon`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a href="/agile-20-years-on" class="theme-btn">         <i class="iconoir-arrow-up-right"></i>     </a>`
- XPath: `.theme-btn[href$="agile-20-years-on"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a href="/running-a-workshop-part-2-the-art-of-skillful-facilitation" class="theme-btn">                 <i class="iconoir-arrow-up-right"></i>             </a>`
- XPath: `.news-item.card-h:nth-child(1) > .news-item-body > .theme-btn`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a href="/the-seven-deadly-wastes-of-lean" class="theme-btn">                 <i class="iconoir-arrow-up-right"></i>             </a>`
- XPath: `.news-item.card-h:nth-child(2) > .news-item-body > .theme-btn`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a href="https://www.linkedin.com/company/nexxtgroup/">         <i class="iconoir-linkedin"></i>     </a>`
- XPath: `.social-links > li > a`

#### Rule: [list](https://dequeuniversity.com/rules/axe/4.11/list?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(1) > ul`

**Failure 2:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(2) > ul`

**Failure 3:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(3) > ul`

**Failure 4:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(4) > ul`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="elementor-element elementor-element-e499878 e-flex e-con-boxed e-con e-parent" data-id="e499878" data-element_type="container" data-e-type="container" data-settings="{"background_background":"gradient"}">`
- XPath: `.elementor-element-e499878`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="elementor-element elementor-element-8ca229b elementor-widget elementor-widget-heading" data-id="8ca229b" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">`
- XPath: `.elementor-element-8ca229b`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="elementor-element elementor-element-bf73a42 blog-section e-flex e-con-boxed e-con e-parent" data-id="bf73a42" data-element_type="container" data-e-type="container">`
- XPath: `.elementor-element-bf73a42`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="elementor-element elementor-element-3a5a136 e-flex e-con-boxed e-con e-parent" data-id="3a5a136" data-element_type="container" data-e-type="container">`
- XPath: `.elementor-element-3a5a136`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="elementor-element elementor-element-50ed840 e-con-full e-flex e-con e-parent" data-id="50ed840" data-element_type="container" data-e-type="container">`
- XPath: `.elementor-element-50ed840`

*... and 6 more failures for this rule*

### https://nexxt.com.au/project-delivery/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/contact" class="theme-btn">Contact Us</a>`
- XPath: `.header-left-right > .theme-btn[href$="contact"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<h6 class="section-subtitle">Benefits</h6>`
- XPath: `.about-service7-content > .section-header > h6`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<h6 class="section-subtitle">FEATURES</h6>`
- XPath: `.feature3-body > .section-header > h6`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<h6 class="section-subtitle">CASE STUDIES</h6>`
- XPath: `.case-studio-header > h6`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<h6 class="section-subtitle section-subtitle1">Op Ed</h6>`
- XPath: `.section-subtitle1`

*... and 7 more failures for this rule*

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: Headings should not be empty
- HTML: `<h6 class="section-subtitle">&nbsp;</h6>`
- XPath: `.section-header.w-full.justify-content-between > .left > h6`

**Failure 2:**
- Message: Headings should not be empty
- HTML: `<h2 class="section-title">&nbsp;</h2>`
- XPath: `.section-header.w-full.justify-content-between > .left > .section-title`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h4>Projects Delivered Successfully</h4>`
- XPath: `.hero-company-box.simple-shadow:nth-child(1) > h4`

**Failure 2:**
- Message: Heading levels should only increase by one
- HTML: `<h4>Tailored Workshops Delivered</h4>`
- XPath: `.hero-company-box.simple-shadow:nth-child(2) > h4`

**Failure 3:**
- Message: Heading levels should only increase by one
- HTML: `<h4>Professionals Coached</h4>`
- XPath: `.hero-company-box.simple-shadow:nth-child(3) > h4`

**Failure 4:**
- Message: Heading levels should only increase by one
- HTML: `<h4>Established</h4>`
- XPath: `.hero-company-box.simple-shadow:nth-child(4) > h4`

**Failure 5:**
- Message: Heading levels should only increase by one
- HTML: `<h6 class="section-subtitle">&nbsp;</h6>`
- XPath: `.section-header.w-full.justify-content-between > .left > h6`

*... and 12 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img decoding="async" src="https://nexxt.com.au/wp-content/uploads/2024/11/NEXXT-138-scaled.jpg">`
- XPath: `.hero-service-about > img[decoding="async"]`

**Failure 2:**
- Message: Images must have alternative text
- HTML: `<img decoding="async" src="https://nexxt.com.au/wp-content/uploads/2024/11/NEXXT-22-1-scaled.jpg">`
- XPath: `.about-service7-img-box > img[decoding="async"]:nth-child(1)`

**Failure 3:**
- Message: Images must have alternative text
- HTML: `<img decoding="async" src="">`
- XPath: `img[src=""][decoding="async"]`

**Failure 4:**
- Message: Images must have alternative text
- HTML: `<img decoding="async" src="https://nexxt.com.au/wp-content/uploads/2024/10/NEXXT-22-scaled.jpg">`
- XPath: `#development > .case-studio-body.d-flex > .flex-1.left.d-flex > .case-studio-img-card.simple-shadow > img[decoding="async"]`

**Failure 5:**
- Message: Images must have alternative text
- HTML: `<img decoding="async" src="https://nexxt.com.au/wp-content/uploads/2024/11/fast-delivery3.png">`
- XPath: `#development > .case-studio-body.d-flex > .right > .case-studio-contents.service-card.card-h > img[decoding="async"]`

*... and 5 more failures for this rule*

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<header class="header-area">`
- XPath: `.header-area`

#### Rule: [landmark-contentinfo-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-contentinfo-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Contentinfo landmark should not be contained in another landmark
- HTML: `<footer itemtype="https://schema.org/WPFooter" itemscope="itemscope" id="colophon" role="contentinfo">`
- XPath: `#colophon`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="masthead" itemscope="itemscope" itemtype="https://schema.org/WPHeader">`
- XPath: `#masthead`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="masthead" itemscope="itemscope" itemtype="https://schema.org/WPHeader">`
- XPath: `#masthead`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a href="/contact" class="theme-btn">                     <i class="iconoir-arrow-up-right"></i>                 </a>`
- XPath: `#development > .case-studio-body.d-flex > .right > .case-studio-contents.service-card.card-h > .theme-btn[href$="contact"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a href="/agile-20-years-on" class="theme-btn">         <i class="iconoir-arrow-up-right"></i>     </a>`
- XPath: `.theme-btn[href$="agile-20-years-on"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a href="" class="theme-btn">                 <i class="iconoir-arrow-up-right"></i>             </a>`
- XPath: `.news-item.card-h:nth-child(1) > .news-item-body > .theme-btn[href=""]`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a href="" class="theme-btn">                 <i class="iconoir-arrow-up-right"></i>             </a>`
- XPath: `.news-item.card-h:nth-child(2) > .news-item-body > .theme-btn[href=""]`

**Failure 5:**
- Message: Links must have discernible text
- HTML: `<a href="https://www.linkedin.com/company/nexxtgroup/">         <i class="iconoir-linkedin"></i>     </a>`
- XPath: `.social-links > li > a`

#### Rule: [list](https://dequeuniversity.com/rules/axe/4.11/list?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(1) > ul`

**Failure 2:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(2) > ul`

**Failure 3:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(3) > ul`

**Failure 4:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(4) > ul`

### https://nexxt.com.au/running-a-workshop-part-2-the-art-of-skillful-facilitation/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/contact" class="theme-btn">Contact Us</a>`
- XPath: `.header-left-right > .theme-btn[href$="contact"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<h6 class="section-subtitle badge-radius">Our Studies</h6>`
- XPath: `.badge-radius`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<em>info@nexxt.com</em>`
- XPath: `a[href$="mailto:info@nexxt.com.au"] > em`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<em>1300 031 931</em>`
- XPath: `a[href="tel:1300031931"] > em`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<h6 class="section-subtitle section-subtitle1">Op Ed</h6>`
- XPath: `.section-subtitle1`

*... and 7 more failures for this rule*

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h6 class="section-subtitle">INSIGHTS</h6>`
- XPath: `.left > h6`

**Failure 2:**
- Message: Heading levels should only increase by one
- HTML: `<h6 class="section-subtitle section-subtitle1">Op Ed</h6>`
- XPath: `.section-subtitle1`

**Failure 3:**
- Message: Heading levels should only increase by one
- HTML: `<h6 class="section-subtitle">Tips</h6>`
- XPath: `.news-item.card-h:nth-child(1) > .news-item-body > h6`

**Failure 4:**
- Message: Heading levels should only increase by one
- HTML: `<h6 class="section-subtitle">Lean</h6>`
- XPath: `.news-item.card-h:nth-child(2) > .news-item-body > h6`

**Failure 5:**
- Message: Heading levels should only increase by one
- HTML: `<h6 class="section-subtitle">Contact</h6>`
- XPath: `.contact-form-body > h6`

*... and 2 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="https://nexxt.com.au/wp-content/uploads/2024/10/NEXXT-250-scaled.jpg">`
- XPath: `.sticky-news > .news-img-box > img`

**Failure 2:**
- Message: Images must have alternative text
- HTML: `<img src="https://nexxt.com.au/wp-content/uploads/2024/10/64b7ce72cc736c81beadb984_IMG_1582-2-p-800.jpg">`
- XPath: `.news-item.card-h:nth-child(1) > .news-img-box > img`

**Failure 3:**
- Message: Images must have alternative text
- HTML: `<img src="https://nexxt.com.au/wp-content/uploads/2024/10/61ac2b0bd942768a049f941a_58-COMPRESSED-p-800.jpeg">`
- XPath: `.news-item.card-h:nth-child(2) > .news-img-box > img`

**Failure 4:**
- Message: Images must have alternative text
- HTML: `<img src="https://nexxt.com.au/wp-content/uploads/2024/11/support2.png">`
- XPath: `.contact-info:nth-child(1) > img`

**Failure 5:**
- Message: Images must have alternative text
- HTML: `<img src="https://nexxt.com.au/wp-content/uploads/2024/11/map1.png">`
- XPath: `.contact-info:nth-child(2) > img`

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<header class="header-area">`
- XPath: `.header-area`

#### Rule: [landmark-contentinfo-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-contentinfo-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Contentinfo landmark should not be contained in another landmark
- HTML: `<footer class="footer-area">`
- XPath: `.footer-area`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="masthead" itemscope="itemscope" itemtype="https://schema.org/WPHeader">`
- XPath: `#masthead`

#### Rule: [landmark-no-duplicate-contentinfo](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-contentinfo?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one contentinfo landmark
- HTML: `<footer itemtype="https://schema.org/WPFooter" itemscope="itemscope" id="colophon" role="contentinfo">`
- XPath: `#colophon`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html lang="en-US">`
- XPath: `html`

**Failure 2:**
- Message: Document should have one main landmark
- HTML: `<html>`
- XPath: `#hs-form-iframe-0`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="masthead" itemscope="itemscope" itemtype="https://schema.org/WPHeader">`
- XPath: `#masthead`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<footer itemtype="https://schema.org/WPFooter" itemscope="itemscope" id="colophon" role="contentinfo">`
- XPath: `#colophon`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a href="/agile-20-years-on" class="theme-btn">         <i class="iconoir-arrow-up-right"></i>     </a>`
- XPath: `.theme-btn[href$="agile-20-years-on"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a href="/running-a-workshop-part-2-the-art-of-skillful-facilitation" class="theme-btn">                 <i class="iconoir-arrow-up-right"></i>             </a>`
- XPath: `.news-item.card-h:nth-child(1) > .news-item-body > .theme-btn`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a href="/the-seven-deadly-wastes-of-lean" class="theme-btn">                 <i class="iconoir-arrow-up-right"></i>             </a>`
- XPath: `.news-item.card-h:nth-child(2) > .news-item-body > .theme-btn`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a href="https://www.linkedin.com/company/nexxtgroup/">         <i class="iconoir-linkedin"></i>     </a>`
- XPath: `.social-links > li > a`

#### Rule: [list](https://dequeuniversity.com/rules/axe/4.11/list?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(1) > ul`

**Failure 2:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(2) > ul`

**Failure 3:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(3) > ul`

**Failure 4:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(4) > ul`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="elementor-element elementor-element-e499878 e-flex e-con-boxed e-con e-parent" data-id="e499878" data-element_type="container" data-e-type="container" data-settings="{"background_background":"gradient"}">`
- XPath: `.elementor-element-e499878`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="elementor-element elementor-element-8ca229b elementor-widget elementor-widget-heading" data-id="8ca229b" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">`
- XPath: `.elementor-element-8ca229b`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="elementor-element elementor-element-a87d340 e-flex e-con-boxed e-con e-parent" data-id="a87d340" data-element_type="container" data-e-type="container">`
- XPath: `.elementor-element-a87d340`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="elementor-element elementor-element-50ed840 e-con-full e-flex e-con e-parent" data-id="50ed840" data-element_type="container" data-e-type="container">`
- XPath: `.elementor-element-50ed840`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<h6 class="section-subtitle">Contact</h6>`
- XPath: `.contact-form-body > h6`

*... and 5 more failures for this rule*

### https://nexxt.com.au/scaling-tech-teams-brisbane-staff-augmentation-vs-outsourcing/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/contact" class="theme-btn">Contact Us</a>`
- XPath: `.header-left-right > .theme-btn[href$="contact"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<h6 class="section-subtitle badge-radius">Our Studies</h6>`
- XPath: `.badge-radius`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="elementor-button-text">Speak with a Nexxt Group consultant today → </span>`
- XPath: `.elementor-element-bd1e71e > .elementor-widget-container > .elementor-button-wrapper > .elementor-button.elementor-button-link.elementor-size-sm > .elementor-button-content-wrapper > .elementor-button-text`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<h6 class="section-subtitle section-subtitle1">Op Ed</h6>`
- XPath: `.section-subtitle1`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="elementor-button-text">VIEW ALL</span>`
- XPath: `a[href$="insights-inner"] > .elementor-button-content-wrapper > .elementor-button-text`

*... and 6 more failures for this rule*

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: Headings should not be empty
- HTML: `<h2><span style="font-size: 2rem;"><br></span></h2>`
- XPath: `h2:nth-child(15)`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h6 class="section-subtitle">INSIGHTS</h6>`
- XPath: `.left > h6`

**Failure 2:**
- Message: Heading levels should only increase by one
- HTML: `<h6 class="section-subtitle section-subtitle1">Op Ed</h6>`
- XPath: `.section-subtitle1`

**Failure 3:**
- Message: Heading levels should only increase by one
- HTML: `<h6 class="section-subtitle">Tips</h6>`
- XPath: `.news-item.card-h:nth-child(1) > .news-item-body > h6`

**Failure 4:**
- Message: Heading levels should only increase by one
- HTML: `<h6 class="section-subtitle">Lean</h6>`
- XPath: `.news-item.card-h:nth-child(2) > .news-item-body > h6`

**Failure 5:**
- Message: Heading levels should only increase by one
- HTML: `<h6 class="section-subtitle">Contact</h6>`
- XPath: `.contact-form-body > h6`

*... and 2 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="https://nexxt.com.au/wp-content/uploads/2024/10/NEXXT-250-scaled.jpg">`
- XPath: `.sticky-news > .news-img-box > img`

**Failure 2:**
- Message: Images must have alternative text
- HTML: `<img src="https://nexxt.com.au/wp-content/uploads/2024/10/64b7ce72cc736c81beadb984_IMG_1582-2-p-800.jpg">`
- XPath: `.news-item.card-h:nth-child(1) > .news-img-box > img`

**Failure 3:**
- Message: Images must have alternative text
- HTML: `<img src="https://nexxt.com.au/wp-content/uploads/2024/10/61ac2b0bd942768a049f941a_58-COMPRESSED-p-800.jpeg">`
- XPath: `.news-item.card-h:nth-child(2) > .news-img-box > img`

**Failure 4:**
- Message: Images must have alternative text
- HTML: `<img src="https://nexxt.com.au/wp-content/uploads/2024/11/support2.png">`
- XPath: `.contact-info:nth-child(1) > img`

**Failure 5:**
- Message: Images must have alternative text
- HTML: `<img src="https://nexxt.com.au/wp-content/uploads/2024/11/map1.png">`
- XPath: `.contact-info:nth-child(2) > img`

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<header class="header-area">`
- XPath: `.header-area`

#### Rule: [landmark-contentinfo-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-contentinfo-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Contentinfo landmark should not be contained in another landmark
- HTML: `<footer class="footer-area">`
- XPath: `.footer-area`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="masthead" itemscope="itemscope" itemtype="https://schema.org/WPHeader">`
- XPath: `#masthead`

#### Rule: [landmark-no-duplicate-contentinfo](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-contentinfo?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one contentinfo landmark
- HTML: `<footer itemtype="https://schema.org/WPFooter" itemscope="itemscope" id="colophon" role="contentinfo">`
- XPath: `#colophon`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html lang="en-US">`
- XPath: `html`

**Failure 2:**
- Message: Document should have one main landmark
- HTML: `<html>`
- XPath: `#hs-form-iframe-0`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="masthead" itemscope="itemscope" itemtype="https://schema.org/WPHeader">`
- XPath: `#masthead`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<footer itemtype="https://schema.org/WPFooter" itemscope="itemscope" id="colophon" role="contentinfo">`
- XPath: `#colophon`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a href="/agile-20-years-on" class="theme-btn">         <i class="iconoir-arrow-up-right"></i>     </a>`
- XPath: `.theme-btn[href$="agile-20-years-on"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a href="/running-a-workshop-part-2-the-art-of-skillful-facilitation" class="theme-btn">                 <i class="iconoir-arrow-up-right"></i>             </a>`
- XPath: `.news-item.card-h:nth-child(1) > .news-item-body > .theme-btn`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a href="/the-seven-deadly-wastes-of-lean" class="theme-btn">                 <i class="iconoir-arrow-up-right"></i>             </a>`
- XPath: `.news-item.card-h:nth-child(2) > .news-item-body > .theme-btn`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a href="https://www.linkedin.com/company/nexxtgroup/">         <i class="iconoir-linkedin"></i>     </a>`
- XPath: `.social-links > li > a`

#### Rule: [list](https://dequeuniversity.com/rules/axe/4.11/list?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(1) > ul`

**Failure 2:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(2) > ul`

**Failure 3:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(3) > ul`

**Failure 4:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(4) > ul`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="elementor-element elementor-element-e499878 e-flex e-con-boxed e-con e-parent" data-id="e499878" data-element_type="container" data-e-type="container" data-settings="{"background_background":"gradient"}">`
- XPath: `.elementor-element-e499878`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="elementor-element elementor-element-8ca229b elementor-widget elementor-widget-heading" data-id="8ca229b" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">`
- XPath: `.elementor-element-8ca229b`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="elementor-element elementor-element-5ffb17d blog-section e-flex e-con-boxed e-con e-parent" data-id="5ffb17d" data-element_type="container" data-e-type="container">`
- XPath: `.elementor-element-5ffb17d`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="elementor-element elementor-element-50ed840 e-con-full e-flex e-con e-parent" data-id="50ed840" data-element_type="container" data-e-type="container">`
- XPath: `.elementor-element-50ed840`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<h6 class="section-subtitle">Contact</h6>`
- XPath: `.contact-form-body > h6`

*... and 5 more failures for this rule*

### https://nexxt.com.au/sharepoint-consultation-brisbane/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/contact" class="theme-btn">Contact Us</a>`
- XPath: `.header-left-right > .theme-btn[href$="contact"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<h6 class="section-subtitle badge-radius">Our Studies</h6>`
- XPath: `.badge-radius`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/sharepoint-consultation-brisbane">SharePoint consultation</a>`
- XPath: `strong > a`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="elementor-button-text">Talk to a SharePoint Consultant</span>`
- XPath: `.elementor-element-7b90a91 > .elementor-widget-container > .elementor-button-wrapper > .elementor-button.elementor-button-link.elementor-size-sm > .elementor-button-content-wrapper > .elementor-button-text`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<div class="e-n-accordion-item-title-text"> Do you build Power Automate workflows? </div>`
- XPath: `summary[data-accordion-index="2"] > .e-n-accordion-item-title-header > .e-n-accordion-item-title-text`

*... and 9 more failures for this rule*

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h6 class="section-subtitle">INSIGHTS</h6>`
- XPath: `.left > h6`

**Failure 2:**
- Message: Heading levels should only increase by one
- HTML: `<h6 class="section-subtitle section-subtitle1">Op Ed</h6>`
- XPath: `.section-subtitle1`

**Failure 3:**
- Message: Heading levels should only increase by one
- HTML: `<h6 class="section-subtitle">Tips</h6>`
- XPath: `.news-item.card-h:nth-child(1) > .news-item-body > h6`

**Failure 4:**
- Message: Heading levels should only increase by one
- HTML: `<h6 class="section-subtitle">Lean</h6>`
- XPath: `.news-item.card-h:nth-child(2) > .news-item-body > h6`

**Failure 5:**
- Message: Heading levels should only increase by one
- HTML: `<h6 class="section-subtitle">Contact</h6>`
- XPath: `.contact-form-body > h6`

*... and 2 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="https://nexxt.com.au/wp-content/uploads/2024/10/NEXXT-250-scaled.jpg">`
- XPath: `.sticky-news > .news-img-box > img`

**Failure 2:**
- Message: Images must have alternative text
- HTML: `<img src="https://nexxt.com.au/wp-content/uploads/2024/10/64b7ce72cc736c81beadb984_IMG_1582-2-p-800.jpg">`
- XPath: `.news-item.card-h:nth-child(1) > .news-img-box > img`

**Failure 3:**
- Message: Images must have alternative text
- HTML: `<img src="https://nexxt.com.au/wp-content/uploads/2024/10/61ac2b0bd942768a049f941a_58-COMPRESSED-p-800.jpeg">`
- XPath: `.news-item.card-h:nth-child(2) > .news-img-box > img`

**Failure 4:**
- Message: Images must have alternative text
- HTML: `<img src="https://nexxt.com.au/wp-content/uploads/2024/11/support2.png">`
- XPath: `.contact-info:nth-child(1) > img`

**Failure 5:**
- Message: Images must have alternative text
- HTML: `<img src="https://nexxt.com.au/wp-content/uploads/2024/11/map1.png">`
- XPath: `.contact-info:nth-child(2) > img`

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<header class="header-area">`
- XPath: `.header-area`

#### Rule: [landmark-contentinfo-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-contentinfo-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Contentinfo landmark should not be contained in another landmark
- HTML: `<footer class="footer-area">`
- XPath: `.footer-area`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="masthead" itemscope="itemscope" itemtype="https://schema.org/WPHeader">`
- XPath: `#masthead`

#### Rule: [landmark-no-duplicate-contentinfo](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-contentinfo?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one contentinfo landmark
- HTML: `<footer itemtype="https://schema.org/WPFooter" itemscope="itemscope" id="colophon" role="contentinfo">`
- XPath: `#colophon`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html lang="en-US">`
- XPath: `html`

**Failure 2:**
- Message: Document should have one main landmark
- HTML: `<html>`
- XPath: `#hs-form-iframe-0`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="masthead" itemscope="itemscope" itemtype="https://schema.org/WPHeader">`
- XPath: `#masthead`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<footer itemtype="https://schema.org/WPFooter" itemscope="itemscope" id="colophon" role="contentinfo">`
- XPath: `#colophon`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a href="/agile-20-years-on" class="theme-btn">         <i class="iconoir-arrow-up-right"></i>     </a>`
- XPath: `.theme-btn[href$="agile-20-years-on"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a href="/running-a-workshop-part-2-the-art-of-skillful-facilitation" class="theme-btn">                 <i class="iconoir-arrow-up-right"></i>             </a>`
- XPath: `.news-item.card-h:nth-child(1) > .news-item-body > .theme-btn`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a href="/the-seven-deadly-wastes-of-lean" class="theme-btn">                 <i class="iconoir-arrow-up-right"></i>             </a>`
- XPath: `.news-item.card-h:nth-child(2) > .news-item-body > .theme-btn`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a href="https://www.linkedin.com/company/nexxtgroup/">         <i class="iconoir-linkedin"></i>     </a>`
- XPath: `.social-links > li > a`

#### Rule: [list](https://dequeuniversity.com/rules/axe/4.11/list?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(1) > ul`

**Failure 2:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(2) > ul`

**Failure 3:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(3) > ul`

**Failure 4:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(4) > ul`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="elementor-element elementor-element-e499878 e-flex e-con-boxed e-con e-parent" data-id="e499878" data-element_type="container" data-e-type="container" data-settings="{"background_background":"gradient"}">`
- XPath: `.elementor-element-e499878`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="elementor-element elementor-element-8ca229b elementor-widget elementor-widget-heading" data-id="8ca229b" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">`
- XPath: `.elementor-element-8ca229b`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="elementor-element elementor-element-f8ad00b blog-section e-flex e-con-boxed e-con e-parent" data-id="f8ad00b" data-element_type="container" data-e-type="container">`
- XPath: `.elementor-element-f8ad00b`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="elementor-element elementor-element-7d03f12 e-flex e-con-boxed e-con e-parent" data-id="7d03f12" data-element_type="container" data-e-type="container">`
- XPath: `.elementor-element-7d03f12`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="elementor-element elementor-element-50ed840 e-con-full e-flex e-con e-parent" data-id="50ed840" data-element_type="container" data-e-type="container">`
- XPath: `.elementor-element-50ed840`

*... and 6 more failures for this rule*

### https://nexxt.com.au/sitemap/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/contact" class="theme-btn">Contact Us</a>`
- XPath: `.header-left-right > .theme-btn[href$="contact"]`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h4>Services</h4>`
- XPath: `.footer-links:nth-child(1) > h4`

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<header class="header-area">`
- XPath: `.header-area`

#### Rule: [landmark-contentinfo-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-contentinfo-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Contentinfo landmark should not be contained in another landmark
- HTML: `<footer class="footer-area">`
- XPath: `.footer-area`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="masthead" itemscope="itemscope" itemtype="https://schema.org/WPHeader">`
- XPath: `#masthead`

#### Rule: [landmark-no-duplicate-contentinfo](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-contentinfo?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one contentinfo landmark
- HTML: `<footer itemtype="https://schema.org/WPFooter" itemscope="itemscope" id="colophon" role="contentinfo">`
- XPath: `#colophon`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html lang="en-US">`
- XPath: `html`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="masthead" itemscope="itemscope" itemtype="https://schema.org/WPHeader">`
- XPath: `#masthead`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<footer itemtype="https://schema.org/WPFooter" itemscope="itemscope" id="colophon" role="contentinfo">`
- XPath: `#colophon`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a href="https://www.linkedin.com/company/nexxtgroup/">         <i class="iconoir-linkedin"></i>     </a>`
- XPath: `.social-links > li > a`

#### Rule: [list](https://dequeuniversity.com/rules/axe/4.11/list?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(1) > ul`

**Failure 2:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(2) > ul`

**Failure 3:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(3) > ul`

**Failure 4:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(4) > ul`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Page should contain a level-one heading
- HTML: `<html lang="en-US">`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div data-elementor-type="wp-page" data-elementor-id="7884" class="elementor elementor-7884" data-elementor-post-type="page">`
- XPath: `.elementor-7884`

### https://nexxt.com.au/staff-augmentation-vs-traditional-hiring-brisbane-2/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/contact" class="theme-btn">Contact Us</a>`
- XPath: `.header-left-right > .theme-btn[href$="contact"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<h6 class="section-subtitle badge-radius">Our Studies</h6>`
- XPath: `.badge-radius`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="elementor-button-text">Book a 15-minute resource-scoping call</span>`
- XPath: `.elementor-element-a2c3d24 > .elementor-widget-container > .elementor-button-wrapper > .elementor-button.elementor-button-link.elementor-size-sm > .elementor-button-content-wrapper > .elementor-button-text`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<h6 class="section-subtitle section-subtitle1">Op Ed</h6>`
- XPath: `.section-subtitle1`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="elementor-button-text">VIEW ALL</span>`
- XPath: `a[href$="insights-inner"] > .elementor-button-content-wrapper > .elementor-button-text`

*... and 6 more failures for this rule*

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: Headings should not be empty
- HTML: `<h2><br></h2>`
- XPath: `h2:nth-child(14)`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h6 class="section-subtitle">INSIGHTS</h6>`
- XPath: `.left > h6`

**Failure 2:**
- Message: Heading levels should only increase by one
- HTML: `<h6 class="section-subtitle section-subtitle1">Op Ed</h6>`
- XPath: `.section-subtitle1`

**Failure 3:**
- Message: Heading levels should only increase by one
- HTML: `<h6 class="section-subtitle">Tips</h6>`
- XPath: `.news-item.card-h:nth-child(1) > .news-item-body > h6`

**Failure 4:**
- Message: Heading levels should only increase by one
- HTML: `<h6 class="section-subtitle">Lean</h6>`
- XPath: `.news-item.card-h:nth-child(2) > .news-item-body > h6`

**Failure 5:**
- Message: Heading levels should only increase by one
- HTML: `<h6 class="section-subtitle">Contact</h6>`
- XPath: `.contact-form-body > h6`

*... and 2 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="https://nexxt.com.au/wp-content/uploads/2024/10/NEXXT-250-scaled.jpg">`
- XPath: `.sticky-news > .news-img-box > img`

**Failure 2:**
- Message: Images must have alternative text
- HTML: `<img src="https://nexxt.com.au/wp-content/uploads/2024/10/64b7ce72cc736c81beadb984_IMG_1582-2-p-800.jpg">`
- XPath: `.news-item.card-h:nth-child(1) > .news-img-box > img`

**Failure 3:**
- Message: Images must have alternative text
- HTML: `<img src="https://nexxt.com.au/wp-content/uploads/2024/10/61ac2b0bd942768a049f941a_58-COMPRESSED-p-800.jpeg">`
- XPath: `.news-item.card-h:nth-child(2) > .news-img-box > img`

**Failure 4:**
- Message: Images must have alternative text
- HTML: `<img src="https://nexxt.com.au/wp-content/uploads/2024/11/support2.png">`
- XPath: `.contact-info:nth-child(1) > img`

**Failure 5:**
- Message: Images must have alternative text
- HTML: `<img src="https://nexxt.com.au/wp-content/uploads/2024/11/map1.png">`
- XPath: `.contact-info:nth-child(2) > img`

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<header class="header-area">`
- XPath: `.header-area`

#### Rule: [landmark-contentinfo-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-contentinfo-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Contentinfo landmark should not be contained in another landmark
- HTML: `<footer class="footer-area">`
- XPath: `.footer-area`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="masthead" itemscope="itemscope" itemtype="https://schema.org/WPHeader">`
- XPath: `#masthead`

#### Rule: [landmark-no-duplicate-contentinfo](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-contentinfo?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one contentinfo landmark
- HTML: `<footer itemtype="https://schema.org/WPFooter" itemscope="itemscope" id="colophon" role="contentinfo">`
- XPath: `#colophon`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html lang="en-US">`
- XPath: `html`

**Failure 2:**
- Message: Document should have one main landmark
- HTML: `<html>`
- XPath: `#hs-form-iframe-0`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="masthead" itemscope="itemscope" itemtype="https://schema.org/WPHeader">`
- XPath: `#masthead`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<footer itemtype="https://schema.org/WPFooter" itemscope="itemscope" id="colophon" role="contentinfo">`
- XPath: `#colophon`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a href="/agile-20-years-on" class="theme-btn">         <i class="iconoir-arrow-up-right"></i>     </a>`
- XPath: `.theme-btn[href$="agile-20-years-on"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a href="/running-a-workshop-part-2-the-art-of-skillful-facilitation" class="theme-btn">                 <i class="iconoir-arrow-up-right"></i>             </a>`
- XPath: `.news-item.card-h:nth-child(1) > .news-item-body > .theme-btn`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a href="/the-seven-deadly-wastes-of-lean" class="theme-btn">                 <i class="iconoir-arrow-up-right"></i>             </a>`
- XPath: `.news-item.card-h:nth-child(2) > .news-item-body > .theme-btn`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a href="https://www.linkedin.com/company/nexxtgroup/">         <i class="iconoir-linkedin"></i>     </a>`
- XPath: `.social-links > li > a`

#### Rule: [list](https://dequeuniversity.com/rules/axe/4.11/list?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(1) > ul`

**Failure 2:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(2) > ul`

**Failure 3:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(3) > ul`

**Failure 4:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(4) > ul`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="elementor-element elementor-element-e499878 e-flex e-con-boxed e-con e-parent" data-id="e499878" data-element_type="container" data-e-type="container" data-settings="{"background_background":"gradient"}">`
- XPath: `.elementor-element-e499878`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="elementor-element elementor-element-8ca229b elementor-widget elementor-widget-heading" data-id="8ca229b" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">`
- XPath: `.elementor-element-8ca229b`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="elementor-element elementor-element-2c9004d blog-section e-flex e-con-boxed e-con e-parent" data-id="2c9004d" data-element_type="container" data-e-type="container">`
- XPath: `.elementor-element-2c9004d`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="elementor-element elementor-element-50ed840 e-con-full e-flex e-con e-parent" data-id="50ed840" data-element_type="container" data-e-type="container">`
- XPath: `.elementor-element-50ed840`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<h6 class="section-subtitle">Contact</h6>`
- XPath: `.contact-form-body > h6`

*... and 5 more failures for this rule*

### https://nexxt.com.au/terms-and-conditions/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/contact" class="theme-btn">Contact Us</a>`
- XPath: `.header-left-right > .theme-btn[href$="contact"]`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h4>1. Acceptance of Terms</h4>`
- XPath: `li:nth-child(1) > h4`

**Failure 2:**
- Message: Heading levels should only increase by one
- HTML: `<h4>Services</h4>`
- XPath: `.footer-links:nth-child(1) > h4`

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<header class="header-area">`
- XPath: `.header-area`

#### Rule: [landmark-contentinfo-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-contentinfo-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Contentinfo landmark should not be contained in another landmark
- HTML: `<footer class="footer-area">`
- XPath: `.footer-area`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="masthead" itemscope="itemscope" itemtype="https://schema.org/WPHeader">`
- XPath: `#masthead`

#### Rule: [landmark-no-duplicate-contentinfo](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-contentinfo?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one contentinfo landmark
- HTML: `<footer itemtype="https://schema.org/WPFooter" itemscope="itemscope" id="colophon" role="contentinfo">`
- XPath: `#colophon`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html lang="en-US">`
- XPath: `html`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="masthead" itemscope="itemscope" itemtype="https://schema.org/WPHeader">`
- XPath: `#masthead`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<footer itemtype="https://schema.org/WPFooter" itemscope="itemscope" id="colophon" role="contentinfo">`
- XPath: `#colophon`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a href="https://www.linkedin.com/company/nexxtgroup/">         <i class="iconoir-linkedin"></i>     </a>`
- XPath: `.social-links > li > a`

#### Rule: [list](https://dequeuniversity.com/rules/axe/4.11/list?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ol start="1" data-spread="true">`
- XPath: `ol`

**Failure 2:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(1) > ul`

**Failure 3:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(2) > ul`

**Failure 4:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(3) > ul`

**Failure 5:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(4) > ul`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div data-elementor-type="wp-page" data-elementor-id="7560" class="elementor elementor-7560" data-elementor-post-type="page">`
- XPath: `.elementor-7560`

### https://nexxt.com.au/thank-you/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/contact" class="theme-btn">Contact Us</a>`
- XPath: `.header-left-right > .theme-btn[href$="contact"]`

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: Headings should not be empty
- HTML: `<h1>`
- XPath: `h1:nth-child(2)`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3>Let’s get started on something great</h3>`
- XPath: `h3`

**Failure 2:**
- Message: Heading levels should only increase by one
- HTML: `<h4>Services</h4>`
- XPath: `.footer-links:nth-child(1) > h4`

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<header class="header-area">`
- XPath: `.header-area`

#### Rule: [landmark-contentinfo-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-contentinfo-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Contentinfo landmark should not be contained in another landmark
- HTML: `<footer class="footer-area">`
- XPath: `.footer-area`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="masthead" itemscope="itemscope" itemtype="https://schema.org/WPHeader">`
- XPath: `#masthead`

#### Rule: [landmark-no-duplicate-contentinfo](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-contentinfo?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one contentinfo landmark
- HTML: `<footer itemtype="https://schema.org/WPFooter" itemscope="itemscope" id="colophon" role="contentinfo">`
- XPath: `#colophon`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html lang="en-US">`
- XPath: `html`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="masthead" itemscope="itemscope" itemtype="https://schema.org/WPHeader">`
- XPath: `#masthead`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<footer itemtype="https://schema.org/WPFooter" itemscope="itemscope" id="colophon" role="contentinfo">`
- XPath: `#colophon`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a href="https://www.linkedin.com/company/nexxtgroup/">         <i class="iconoir-linkedin"></i>     </a>`
- XPath: `.social-links > li > a`

#### Rule: [list](https://dequeuniversity.com/rules/axe/4.11/list?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(1) > ul`

**Failure 2:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(2) > ul`

**Failure 3:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(3) > ul`

**Failure 4:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(4) > ul`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="hero-section-content text-center">`
- XPath: `.hero-section-content`

### https://nexxt.com.au/the-seven-deadly-wastes-of-lean/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/contact" class="theme-btn">Contact Us</a>`
- XPath: `.header-left-right > .theme-btn[href$="contact"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<h6 class="section-subtitle badge-radius">Our Studies</h6>`
- XPath: `.badge-radius`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<h6 class="section-subtitle section-subtitle1">Op Ed</h6>`
- XPath: `.section-subtitle1`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="elementor-button-text">VIEW ALL</span>`
- XPath: `.elementor-button-text`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<h6 class="section-subtitle">Contact</h6>`
- XPath: `.contact-form-body > h6`

*... and 5 more failures for this rule*

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h6 class="section-subtitle">INSIGHTS</h6>`
- XPath: `.left > h6`

**Failure 2:**
- Message: Heading levels should only increase by one
- HTML: `<h6 class="section-subtitle section-subtitle1">Op Ed</h6>`
- XPath: `.section-subtitle1`

**Failure 3:**
- Message: Heading levels should only increase by one
- HTML: `<h6 class="section-subtitle">Tips</h6>`
- XPath: `.news-item.card-h:nth-child(1) > .news-item-body > h6`

**Failure 4:**
- Message: Heading levels should only increase by one
- HTML: `<h6 class="section-subtitle">Lean</h6>`
- XPath: `.news-item.card-h:nth-child(2) > .news-item-body > h6`

**Failure 5:**
- Message: Heading levels should only increase by one
- HTML: `<h6 class="section-subtitle">Contact</h6>`
- XPath: `.contact-form-body > h6`

*... and 2 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="https://nexxt.com.au/wp-content/uploads/2024/10/NEXXT-250-scaled.jpg">`
- XPath: `.sticky-news > .news-img-box > img`

**Failure 2:**
- Message: Images must have alternative text
- HTML: `<img src="https://nexxt.com.au/wp-content/uploads/2024/10/64b7ce72cc736c81beadb984_IMG_1582-2-p-800.jpg">`
- XPath: `.news-item.card-h:nth-child(1) > .news-img-box > img`

**Failure 3:**
- Message: Images must have alternative text
- HTML: `<img src="https://nexxt.com.au/wp-content/uploads/2024/10/61ac2b0bd942768a049f941a_58-COMPRESSED-p-800.jpeg">`
- XPath: `.news-item.card-h:nth-child(2) > .news-img-box > img`

**Failure 4:**
- Message: Images must have alternative text
- HTML: `<img src="https://nexxt.com.au/wp-content/uploads/2024/11/support2.png">`
- XPath: `.contact-info:nth-child(1) > img`

**Failure 5:**
- Message: Images must have alternative text
- HTML: `<img src="https://nexxt.com.au/wp-content/uploads/2024/11/map1.png">`
- XPath: `.contact-info:nth-child(2) > img`

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<header class="header-area">`
- XPath: `.header-area`

#### Rule: [landmark-contentinfo-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-contentinfo-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Contentinfo landmark should not be contained in another landmark
- HTML: `<footer class="footer-area">`
- XPath: `.footer-area`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="masthead" itemscope="itemscope" itemtype="https://schema.org/WPHeader">`
- XPath: `#masthead`

#### Rule: [landmark-no-duplicate-contentinfo](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-contentinfo?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one contentinfo landmark
- HTML: `<footer itemtype="https://schema.org/WPFooter" itemscope="itemscope" id="colophon" role="contentinfo">`
- XPath: `#colophon`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html lang="en-US">`
- XPath: `html`

**Failure 2:**
- Message: Document should have one main landmark
- HTML: `<html>`
- XPath: `#hs-form-iframe-0`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="masthead" itemscope="itemscope" itemtype="https://schema.org/WPHeader">`
- XPath: `#masthead`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<footer itemtype="https://schema.org/WPFooter" itemscope="itemscope" id="colophon" role="contentinfo">`
- XPath: `#colophon`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a href="/agile-20-years-on" class="theme-btn">         <i class="iconoir-arrow-up-right"></i>     </a>`
- XPath: `.theme-btn[href$="agile-20-years-on"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a href="/running-a-workshop-part-2-the-art-of-skillful-facilitation" class="theme-btn">                 <i class="iconoir-arrow-up-right"></i>             </a>`
- XPath: `.news-item.card-h:nth-child(1) > .news-item-body > .theme-btn`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a href="/the-seven-deadly-wastes-of-lean" class="theme-btn">                 <i class="iconoir-arrow-up-right"></i>             </a>`
- XPath: `.news-item.card-h:nth-child(2) > .news-item-body > .theme-btn`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a href="https://www.linkedin.com/company/nexxtgroup/">         <i class="iconoir-linkedin"></i>     </a>`
- XPath: `.social-links > li > a`

#### Rule: [list](https://dequeuniversity.com/rules/axe/4.11/list?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(1) > ul`

**Failure 2:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(2) > ul`

**Failure 3:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(3) > ul`

**Failure 4:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(4) > ul`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="elementor-element elementor-element-e499878 e-flex e-con-boxed e-con e-parent" data-id="e499878" data-element_type="container" data-e-type="container" data-settings="{"background_background":"gradient"}">`
- XPath: `.elementor-element-e499878`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="elementor-element elementor-element-8ca229b elementor-widget elementor-widget-heading" data-id="8ca229b" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">`
- XPath: `.elementor-element-8ca229b`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="elementor-element elementor-element-48f4e592 e-flex e-con-boxed e-con e-parent" data-id="48f4e592" data-element_type="container" data-e-type="container">`
- XPath: `.elementor-element-48f4e592`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="elementor-element elementor-element-50ed840 e-con-full e-flex e-con e-parent" data-id="50ed840" data-element_type="container" data-e-type="container">`
- XPath: `.elementor-element-50ed840`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<h6 class="section-subtitle">Contact</h6>`
- XPath: `.contact-form-body > h6`

*... and 5 more failures for this rule*

### https://nexxt.com.au/transformation-and-change/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/contact" class="theme-btn">Contact Us</a>`
- XPath: `.header-left-right > .theme-btn[href$="contact"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<h6 class="section-subtitle">Benefits</h6>`
- XPath: `.about-service7-content > .section-header > h6`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<h6 class="section-subtitle">FEATURES</h6>`
- XPath: `.feature3-body > .section-header > h6`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<h6 class="section-subtitle">CASE STUDIES</h6>`
- XPath: `.case-studio-header > h6`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<h6 class="section-subtitle section-subtitle1">Op Ed</h6>`
- XPath: `.section-subtitle1`

*... and 7 more failures for this rule*

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: Headings should not be empty
- HTML: `<h6 class="section-subtitle">&nbsp;</h6>`
- XPath: `.section-header.w-full.justify-content-between > .left > h6`

**Failure 2:**
- Message: Headings should not be empty
- HTML: `<h2 class="section-title">&nbsp;</h2>`
- XPath: `.section-header.w-full.justify-content-between > .left > .section-title`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h4>Projects Delivered Successfully</h4>`
- XPath: `.hero-company-box.simple-shadow:nth-child(1) > h4`

**Failure 2:**
- Message: Heading levels should only increase by one
- HTML: `<h4>Tailored Workshops Delivered</h4>`
- XPath: `.hero-company-box.simple-shadow:nth-child(2) > h4`

**Failure 3:**
- Message: Heading levels should only increase by one
- HTML: `<h4>Professionals Coached</h4>`
- XPath: `.hero-company-box.simple-shadow:nth-child(3) > h4`

**Failure 4:**
- Message: Heading levels should only increase by one
- HTML: `<h4>Established</h4>`
- XPath: `.hero-company-box.simple-shadow:nth-child(4) > h4`

**Failure 5:**
- Message: Heading levels should only increase by one
- HTML: `<h6 class="section-subtitle">&nbsp;</h6>`
- XPath: `.section-header.w-full.justify-content-between > .left > h6`

*... and 12 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img decoding="async" src="https://nexxt.com.au/wp-content/uploads/2024/11/NEXXT-138-scaled.jpg">`
- XPath: `.hero-service-about > img[decoding="async"]`

**Failure 2:**
- Message: Images must have alternative text
- HTML: `<img decoding="async" src="https://nexxt.com.au/wp-content/uploads/2024/11/NEXXT-226-1-scaled.jpg">`
- XPath: `.about-service7-img-box > img[decoding="async"]:nth-child(1)`

**Failure 3:**
- Message: Images must have alternative text
- HTML: `<img decoding="async" src="">`
- XPath: `img[src=""][decoding="async"]`

**Failure 4:**
- Message: Images must have alternative text
- HTML: `<img decoding="async" src="https://nexxt.com.au/wp-content/uploads/2024/10/NEXXT-22-scaled.jpg">`
- XPath: `#development > .case-studio-body.d-flex > .flex-1.left.d-flex > .case-studio-img-card.simple-shadow > img[decoding="async"]`

**Failure 5:**
- Message: Images must have alternative text
- HTML: `<img decoding="async" src="https://nexxt.com.au/wp-content/uploads/2024/11/fast-delivery3.png">`
- XPath: `#development > .case-studio-body.d-flex > .right > .case-studio-contents.service-card.card-h > img[decoding="async"]`

*... and 5 more failures for this rule*

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<header class="header-area">`
- XPath: `.header-area`

#### Rule: [landmark-contentinfo-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-contentinfo-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Contentinfo landmark should not be contained in another landmark
- HTML: `<footer itemtype="https://schema.org/WPFooter" itemscope="itemscope" id="colophon" role="contentinfo">`
- XPath: `#colophon`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="masthead" itemscope="itemscope" itemtype="https://schema.org/WPHeader">`
- XPath: `#masthead`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="masthead" itemscope="itemscope" itemtype="https://schema.org/WPHeader">`
- XPath: `#masthead`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a href="/contact" class="theme-btn">                     <i class="iconoir-arrow-up-right"></i>                 </a>`
- XPath: `#development > .case-studio-body.d-flex > .right > .case-studio-contents.service-card.card-h > .theme-btn[href$="contact"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a href="/agile-20-years-on" class="theme-btn">         <i class="iconoir-arrow-up-right"></i>     </a>`
- XPath: `.theme-btn[href$="agile-20-years-on"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a href="/running-a-workshop-part-2-the-art-of-skillful-facilitation" class="theme-btn">                 <i class="iconoir-arrow-up-right"></i>             </a>`
- XPath: `.news-item.card-h:nth-child(1) > .news-item-body > .theme-btn`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a href="/the-seven-deadly-wastes-of-lean" class="theme-btn">                 <i class="iconoir-arrow-up-right"></i>             </a>`
- XPath: `.news-item.card-h:nth-child(2) > .news-item-body > .theme-btn`

**Failure 5:**
- Message: Links must have discernible text
- HTML: `<a href="https://www.linkedin.com/company/nexxtgroup/">         <i class="iconoir-linkedin"></i>     </a>`
- XPath: `.social-links > li > a`

#### Rule: [list](https://dequeuniversity.com/rules/axe/4.11/list?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(1) > ul`

**Failure 2:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(2) > ul`

**Failure 3:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(3) > ul`

**Failure 4:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(4) > ul`

### https://nexxt.com.au/workflow-automation/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/contact" class="theme-btn">Contact Us</a>`
- XPath: `.header-left-right > .theme-btn[href$="contact"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<h6 class="section-subtitle badge-radius">Our Studies</h6>`
- XPath: `.badge-radius`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<strong>Manual Bottlenecks:</strong>`
- XPath: `.mb-4:nth-child(11) > li:nth-child(1) > strong`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<strong>Lack of Process Visibility:</strong>`
- XPath: `.mb-4:nth-child(11) > li:nth-child(2) > strong`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<strong>Compliance and Risk Exposure:</strong>`
- XPath: `.mb-4:nth-child(11) > li:nth-child(3) > strong`

*... and 24 more failures for this rule*

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h6 class="section-subtitle">INSIGHTS</h6>`
- XPath: `.left > h6`

**Failure 2:**
- Message: Heading levels should only increase by one
- HTML: `<h6 class="section-subtitle section-subtitle1">Op Ed</h6>`
- XPath: `.section-subtitle1`

**Failure 3:**
- Message: Heading levels should only increase by one
- HTML: `<h6 class="section-subtitle">Tips</h6>`
- XPath: `.news-item.card-h:nth-child(1) > .news-item-body > h6`

**Failure 4:**
- Message: Heading levels should only increase by one
- HTML: `<h6 class="section-subtitle">Lean</h6>`
- XPath: `.news-item.card-h:nth-child(2) > .news-item-body > h6`

**Failure 5:**
- Message: Heading levels should only increase by one
- HTML: `<h6 class="section-subtitle">Contact</h6>`
- XPath: `.contact-form-body > h6`

*... and 2 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="https://nexxt.com.au/wp-content/uploads/2024/10/NEXXT-250-scaled.jpg">`
- XPath: `.sticky-news > .news-img-box > img`

**Failure 2:**
- Message: Images must have alternative text
- HTML: `<img src="https://nexxt.com.au/wp-content/uploads/2024/10/64b7ce72cc736c81beadb984_IMG_1582-2-p-800.jpg">`
- XPath: `.news-item.card-h:nth-child(1) > .news-img-box > img`

**Failure 3:**
- Message: Images must have alternative text
- HTML: `<img src="https://nexxt.com.au/wp-content/uploads/2024/10/61ac2b0bd942768a049f941a_58-COMPRESSED-p-800.jpeg">`
- XPath: `.news-item.card-h:nth-child(2) > .news-img-box > img`

**Failure 4:**
- Message: Images must have alternative text
- HTML: `<img src="https://nexxt.com.au/wp-content/uploads/2024/11/support2.png">`
- XPath: `.contact-info:nth-child(1) > img`

**Failure 5:**
- Message: Images must have alternative text
- HTML: `<img src="https://nexxt.com.au/wp-content/uploads/2024/11/map1.png">`
- XPath: `.contact-info:nth-child(2) > img`

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<header class="header-area">`
- XPath: `.header-area`

#### Rule: [landmark-contentinfo-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-contentinfo-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Contentinfo landmark should not be contained in another landmark
- HTML: `<footer class="footer-area">`
- XPath: `.footer-area`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="masthead" itemscope="itemscope" itemtype="https://schema.org/WPHeader">`
- XPath: `#masthead`

#### Rule: [landmark-no-duplicate-contentinfo](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-contentinfo?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one contentinfo landmark
- HTML: `<footer itemtype="https://schema.org/WPFooter" itemscope="itemscope" id="colophon" role="contentinfo">`
- XPath: `#colophon`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html lang="en-US">`
- XPath: `html`

**Failure 2:**
- Message: Document should have one main landmark
- HTML: `<html>`
- XPath: `#hs-form-iframe-0`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="masthead" itemscope="itemscope" itemtype="https://schema.org/WPHeader">`
- XPath: `#masthead`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<footer itemtype="https://schema.org/WPFooter" itemscope="itemscope" id="colophon" role="contentinfo">`
- XPath: `#colophon`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a href="/agile-20-years-on" class="theme-btn">         <i class="iconoir-arrow-up-right"></i>     </a>`
- XPath: `.theme-btn[href$="agile-20-years-on"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a href="/running-a-workshop-part-2-the-art-of-skillful-facilitation" class="theme-btn">                 <i class="iconoir-arrow-up-right"></i>             </a>`
- XPath: `.news-item.card-h:nth-child(1) > .news-item-body > .theme-btn`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a href="/the-seven-deadly-wastes-of-lean" class="theme-btn">                 <i class="iconoir-arrow-up-right"></i>             </a>`
- XPath: `.news-item.card-h:nth-child(2) > .news-item-body > .theme-btn`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a href="https://www.linkedin.com/company/nexxtgroup/">         <i class="iconoir-linkedin"></i>     </a>`
- XPath: `.social-links > li > a`

#### Rule: [list](https://dequeuniversity.com/rules/axe/4.11/list?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(1) > ul`

**Failure 2:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(2) > ul`

**Failure 3:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(3) > ul`

**Failure 4:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(4) > ul`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="elementor-element elementor-element-e499878 e-flex e-con-boxed e-con e-parent" data-id="e499878" data-element_type="container" data-e-type="container" data-settings="{"background_background":"gradient"}">`
- XPath: `.elementor-element-e499878`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="elementor-element elementor-element-8ca229b elementor-widget elementor-widget-heading" data-id="8ca229b" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">`
- XPath: `.elementor-element-8ca229b`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="elementor-element elementor-element-eb08a69 blog-section e-flex e-con-boxed e-con e-parent" data-id="eb08a69" data-element_type="container" data-e-type="container">`
- XPath: `.elementor-element-eb08a69`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="elementor-element elementor-element-50ed840 e-con-full e-flex e-con e-parent" data-id="50ed840" data-element_type="container" data-e-type="container">`
- XPath: `.elementor-element-50ed840`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<h6 class="section-subtitle">Contact</h6>`
- XPath: `.contact-form-body > h6`

*... and 5 more failures for this rule*

### https://nexxt.com.au/author/mnitish0gmail-com/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/contact" class="theme-btn">Contact Us</a>`
- XPath: `.header-left-right > .theme-btn[href$="contact"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<p class="meta">November 3, 2025 - <a href="https://nexxt.com.au/category/blog/">Blog</a></p>`
- XPath: `#post-8568 > .blog-2-item-box > .meta`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://nexxt.com.au/it-consultant-brisbane-sme-guide/" class="theme-btn">Read More</a>`
- XPath: `#post-8568 > .blog-2-item-box > .theme-btn`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<p class="meta">November 3, 2025 - <a href="https://nexxt.com.au/category/blog/">Blog</a></p>`
- XPath: `#post-8559 > .blog-2-item-box > .meta`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://nexxt.com.au/office-365-consulting-services-australia/" class="theme-btn">Read More</a>`
- XPath: `#post-8559 > .blog-2-item-box > .theme-btn`

*... and 16 more failures for this rule*

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h4>Services</h4>`
- XPath: `.footer-links:nth-child(1) > h4`

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<header class="header-area">`
- XPath: `.header-area`

#### Rule: [landmark-contentinfo-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-contentinfo-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Contentinfo landmark should not be contained in another landmark
- HTML: `<footer class="footer-area">`
- XPath: `.footer-area`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="masthead" itemscope="itemscope" itemtype="https://schema.org/WPHeader">`
- XPath: `#masthead`

#### Rule: [landmark-no-duplicate-contentinfo](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-contentinfo?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one contentinfo landmark
- HTML: `<footer itemtype="https://schema.org/WPFooter" itemscope="itemscope" id="colophon" role="contentinfo">`
- XPath: `#colophon`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html lang="en-US">`
- XPath: `html`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="masthead" itemscope="itemscope" itemtype="https://schema.org/WPHeader">`
- XPath: `#masthead`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<footer itemtype="https://schema.org/WPFooter" itemscope="itemscope" id="colophon" role="contentinfo">`
- XPath: `#colophon`

#### Rule: [link-in-text-block](https://dequeuniversity.com/rules/axe/4.11/link-in-text-block?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a href="https://nexxt.com.au/category/blog/">Blog</a>`
- XPath: `#post-8568 > .blog-2-item-box > .meta > a`

**Failure 2:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a href="https://nexxt.com.au/category/blog/">Blog</a>`
- XPath: `#post-8559 > .blog-2-item-box > .meta > a`

**Failure 3:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a href="https://nexxt.com.au/category/blog/">Blog</a>`
- XPath: `#post-8551 > .blog-2-item-box > .meta > a`

**Failure 4:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a href="https://nexxt.com.au/category/blog/">Blog</a>`
- XPath: `#post-8533 > .blog-2-item-box > .meta > a`

**Failure 5:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a href="https://nexxt.com.au/category/blog/">Blog</a>`
- XPath: `#post-8525 > .blog-2-item-box > .meta > a`

*... and 5 more failures for this rule*

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a class="next page-numbers" href="https://nexxt.com.au/author/mnitish0gmail-com/page/2/"><i class="iconoir-arrow-right"></i></a>`
- XPath: `.next`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a href="https://www.linkedin.com/company/nexxtgroup/">         <i class="iconoir-linkedin"></i>     </a>`
- XPath: `.social-links > li > a`

#### Rule: [list](https://dequeuniversity.com/rules/axe/4.11/list?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(1) > ul`

**Failure 2:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(2) > ul`

**Failure 3:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(3) > ul`

**Failure 4:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(4) > ul`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Page should contain a level-one heading
- HTML: `<html lang="en-US">`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<section class="blog-breadcrumb-area">`
- XPath: `section`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div id="post-8568" class="post-8568 post type-post status-publish format-standard has-post-thumbnail hentry category-blog">`
- XPath: `#post-8568`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<div id="post-8559" class="post-8559 post type-post status-publish format-standard has-post-thumbnail hentry category-blog">`
- XPath: `#post-8559`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<div id="post-8551" class="post-8551 post type-post status-publish format-standard has-post-thumbnail hentry category-blog">`
- XPath: `#post-8551`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<div id="post-8533" class="post-8533 post type-post status-publish format-standard has-post-thumbnail hentry category-blog">`
- XPath: `#post-8533`

*... and 6 more failures for this rule*

### https://nexxt.com.au/category/blog/

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<article class="elementor-post elementor-grid-item post-8568 post type-post status-publish format-standard has-post-thumbnail hentry category-blog" role="listitem">`
- XPath: `.e-loop-item-8568 > .elementor-element-b8fbc95.e-con-boxed[data-id="b8fbc95"] > .e-con-inner > .elementor-element-7c68f1c.elementor-posts--thumbnail-top.elementor-widget-posts > .elementor-widget-container > .elementor-posts-container.elementor-posts.elementor-posts--skin-classic > .post-8568`

**Failure 2:**
- Message: ARIA role should be appropriate for the element
- HTML: `<article class="elementor-post elementor-grid-item post-8559 post type-post status-publish format-standard has-post-thumbnail hentry category-blog" role="listitem">`
- XPath: `.e-loop-item-8568 > .elementor-element-b8fbc95.e-con-boxed[data-id="b8fbc95"] > .e-con-inner > .elementor-element-7c68f1c.elementor-posts--thumbnail-top.elementor-widget-posts > .elementor-widget-container > .elementor-posts-container.elementor-posts.elementor-posts--skin-classic > .post-8559`

**Failure 3:**
- Message: ARIA role should be appropriate for the element
- HTML: `<article class="elementor-post elementor-grid-item post-8551 post type-post status-publish format-standard has-post-thumbnail hentry category-blog" role="listitem">`
- XPath: `.e-loop-item-8568 > .elementor-element-b8fbc95.e-con-boxed[data-id="b8fbc95"] > .e-con-inner > .elementor-element-7c68f1c.elementor-posts--thumbnail-top.elementor-widget-posts > .elementor-widget-container > .elementor-posts-container.elementor-posts.elementor-posts--skin-classic > .post-8551`

**Failure 4:**
- Message: ARIA role should be appropriate for the element
- HTML: `<article class="elementor-post elementor-grid-item post-8533 post type-post status-publish format-standard has-post-thumbnail hentry category-blog" role="listitem">`
- XPath: `.e-loop-item-8568 > .elementor-element-b8fbc95.e-con-boxed[data-id="b8fbc95"] > .e-con-inner > .elementor-element-7c68f1c.elementor-posts--thumbnail-top.elementor-widget-posts > .elementor-widget-container > .elementor-posts-container.elementor-posts.elementor-posts--skin-classic > .post-8533`

**Failure 5:**
- Message: ARIA role should be appropriate for the element
- HTML: `<article class="elementor-post elementor-grid-item post-8525 post type-post status-publish format-standard has-post-thumbnail hentry category-blog" role="listitem">`
- XPath: `.e-loop-item-8568 > .elementor-element-b8fbc95.e-con-boxed[data-id="b8fbc95"] > .e-con-inner > .elementor-element-7c68f1c.elementor-posts--thumbnail-top.elementor-widget-posts > .elementor-widget-container > .elementor-posts-container.elementor-posts.elementor-posts--skin-classic > .post-8525`

*... and 31 more failures for this rule*

#### Rule: [aria-required-children](https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Certain ARIA roles must contain particular children
- HTML: `<div class="elementor-loop-container elementor-grid" role="list">`
- XPath: `.elementor-loop-container`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/contact" class="theme-btn">Contact Us</a>`
- XPath: `.header-left-right > .theme-btn[href$="contact"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://nexxt.com.au/it-consultant-brisbane-sme-guide/"> 				IT Consultant Brisbane for SMEs: Services, Pricing Signals &amp; When to Engage			</a>`
- XPath: `.e-loop-item-8568 > .elementor-element-b8fbc95.e-con-boxed[data-id="b8fbc95"] > .e-con-inner > .elementor-element-7c68f1c.elementor-posts--thumbnail-top.elementor-widget-posts > .elementor-widget-container > .elementor-posts-container.elementor-posts.elementor-posts--skin-classic > .post-8568 > .elementor-post__text > .elementor-post__title > a`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<p>If you’re spinning up initiatives without clear outcomes or fighting</p>`
- XPath: `.e-loop-item-8568 > .elementor-element-b8fbc95.e-con-boxed[data-id="b8fbc95"] > .e-con-inner > .elementor-element-7c68f1c.elementor-posts--thumbnail-top.elementor-widget-posts > .elementor-widget-container > .elementor-posts-container.elementor-posts.elementor-posts--skin-classic > .post-8568 > .elementor-post__text > .elementor-post__excerpt > p`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a class="elementor-post__read-more" href="https://nexxt.com.au/it-consultant-brisbane-sme-guide/" aria-label="Read more about IT Consultant Brisbane for SMEs: Services, Pricing Signals &amp; When to Engage" tabindex="-1"> 			Read More »		</a>`
- XPath: `.e-loop-item-8568 > .elementor-element-b8fbc95.e-con-boxed[data-id="b8fbc95"] > .e-con-inner > .elementor-element-7c68f1c.elementor-posts--thumbnail-top.elementor-widget-posts > .elementor-widget-container > .elementor-posts-container.elementor-posts.elementor-posts--skin-classic > .post-8568 > .elementor-post__text > .elementor-post__read-more`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://nexxt.com.au/office-365-consulting-services-australia/"> 				Office 365 Consulting Services (Australia)			</a>`
- XPath: `.e-loop-item-8568 > .elementor-element-b8fbc95.e-con-boxed[data-id="b8fbc95"] > .e-con-inner > .elementor-element-7c68f1c.elementor-posts--thumbnail-top.elementor-widget-posts > .elementor-widget-container > .elementor-posts-container.elementor-posts.elementor-posts--skin-classic > .post-8559 > .elementor-post__text > .elementor-post__title > a`

*... and 104 more failures for this rule*

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h4>Services</h4>`
- XPath: `.footer-links:nth-child(1) > h4`

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<header class="header-area">`
- XPath: `.header-area`

#### Rule: [landmark-contentinfo-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-contentinfo-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Contentinfo landmark should not be contained in another landmark
- HTML: `<footer class="footer-area">`
- XPath: `.footer-area`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="masthead" itemscope="itemscope" itemtype="https://schema.org/WPHeader">`
- XPath: `#masthead`

#### Rule: [landmark-no-duplicate-contentinfo](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-contentinfo?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one contentinfo landmark
- HTML: `<footer itemtype="https://schema.org/WPFooter" itemscope="itemscope" id="colophon" role="contentinfo">`
- XPath: `#colophon`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html lang="en-US">`
- XPath: `html`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="masthead" itemscope="itemscope" itemtype="https://schema.org/WPHeader">`
- XPath: `#masthead`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav class="elementor-pagination" aria-label="Pagination">`
- XPath: `.e-loop-item-8568 > .elementor-element-b8fbc95.e-con-boxed[data-id="b8fbc95"] > .e-con-inner > .elementor-element-7c68f1c.elementor-posts--thumbnail-top.elementor-widget-posts > .elementor-widget-container > .elementor-pagination[aria-label="Pagination"]`

**Failure 3:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<footer itemtype="https://schema.org/WPFooter" itemscope="itemscope" id="colophon" role="contentinfo">`
- XPath: `#colophon`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a href="https://www.linkedin.com/company/nexxtgroup/">         <i class="iconoir-linkedin"></i>     </a>`
- XPath: `.social-links > li > a`

#### Rule: [list](https://dequeuniversity.com/rules/axe/4.11/list?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(1) > ul`

**Failure 2:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(2) > ul`

**Failure 3:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(3) > ul`

**Failure 4:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(4) > ul`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Page should contain a level-one heading
- HTML: `<html lang="en-US">`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="elementor-element elementor-element-87f2c60 e-flex e-con-boxed e-con e-parent" data-id="87f2c60" data-element_type="container" data-e-type="container">`
- XPath: `.elementor-element-87f2c60`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="elementor-posts-container elementor-posts elementor-posts--skin-classic elementor-grid elementor-has-item-ratio" role="list">`
- XPath: `.e-loop-item-8568 > .elementor-element-b8fbc95.e-con-boxed[data-id="b8fbc95"] > .e-con-inner > .elementor-element-7c68f1c.elementor-posts--thumbnail-top.elementor-widget-posts > .elementor-widget-container > .elementor-posts-container.elementor-posts.elementor-posts--skin-classic`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="elementor-posts-container elementor-posts elementor-posts--skin-classic elementor-grid elementor-has-item-ratio" role="list">`
- XPath: `.e-loop-item-8559 > .elementor-element-b8fbc95.e-con-boxed[data-id="b8fbc95"] > .e-con-inner > .elementor-element-7c68f1c.elementor-posts--thumbnail-top.elementor-widget-posts > .elementor-widget-container > .elementor-posts-container.elementor-posts.elementor-posts--skin-classic`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="elementor-posts-container elementor-posts elementor-posts--skin-classic elementor-grid elementor-has-item-ratio" role="list">`
- XPath: `.e-loop-item-8551 > .elementor-element-b8fbc95.e-con-boxed[data-id="b8fbc95"] > .e-con-inner > .elementor-element-7c68f1c.elementor-posts--thumbnail-top.elementor-widget-posts > .elementor-widget-container > .elementor-posts-container.elementor-posts.elementor-posts--skin-classic`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="elementor-posts-container elementor-posts elementor-posts--skin-classic elementor-grid elementor-has-item-ratio" role="list">`
- XPath: `.e-loop-item-8533 > .elementor-element-b8fbc95.e-con-boxed[data-id="b8fbc95"] > .e-con-inner > .elementor-element-7c68f1c.elementor-posts--thumbnail-top.elementor-widget-posts > .elementor-widget-container > .elementor-posts-container.elementor-posts.elementor-posts--skin-classic`

*... and 2 more failures for this rule*

### https://nexxt.com.au/category/uncategorized/

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<article class="elementor-post elementor-grid-item post-8568 post type-post status-publish format-standard has-post-thumbnail hentry category-blog" role="listitem">`
- XPath: `.e-loop-item-8568 > .elementor-element-b8fbc95.e-con-boxed[data-id="b8fbc95"] > .e-con-inner > .elementor-element-7c68f1c.elementor-posts--thumbnail-top.elementor-widget-posts > .elementor-widget-container > .elementor-posts-container.elementor-posts.elementor-posts--skin-classic > .post-8568`

**Failure 2:**
- Message: ARIA role should be appropriate for the element
- HTML: `<article class="elementor-post elementor-grid-item post-8559 post type-post status-publish format-standard has-post-thumbnail hentry category-blog" role="listitem">`
- XPath: `.e-loop-item-8568 > .elementor-element-b8fbc95.e-con-boxed[data-id="b8fbc95"] > .e-con-inner > .elementor-element-7c68f1c.elementor-posts--thumbnail-top.elementor-widget-posts > .elementor-widget-container > .elementor-posts-container.elementor-posts.elementor-posts--skin-classic > .post-8559`

**Failure 3:**
- Message: ARIA role should be appropriate for the element
- HTML: `<article class="elementor-post elementor-grid-item post-8551 post type-post status-publish format-standard has-post-thumbnail hentry category-blog" role="listitem">`
- XPath: `.e-loop-item-8568 > .elementor-element-b8fbc95.e-con-boxed[data-id="b8fbc95"] > .e-con-inner > .elementor-element-7c68f1c.elementor-posts--thumbnail-top.elementor-widget-posts > .elementor-widget-container > .elementor-posts-container.elementor-posts.elementor-posts--skin-classic > .post-8551`

**Failure 4:**
- Message: ARIA role should be appropriate for the element
- HTML: `<article class="elementor-post elementor-grid-item post-8533 post type-post status-publish format-standard has-post-thumbnail hentry category-blog" role="listitem">`
- XPath: `.e-loop-item-8568 > .elementor-element-b8fbc95.e-con-boxed[data-id="b8fbc95"] > .e-con-inner > .elementor-element-7c68f1c.elementor-posts--thumbnail-top.elementor-widget-posts > .elementor-widget-container > .elementor-posts-container.elementor-posts.elementor-posts--skin-classic > .post-8533`

**Failure 5:**
- Message: ARIA role should be appropriate for the element
- HTML: `<article class="elementor-post elementor-grid-item post-8525 post type-post status-publish format-standard has-post-thumbnail hentry category-blog" role="listitem">`
- XPath: `.e-loop-item-8568 > .elementor-element-b8fbc95.e-con-boxed[data-id="b8fbc95"] > .e-con-inner > .elementor-element-7c68f1c.elementor-posts--thumbnail-top.elementor-widget-posts > .elementor-widget-container > .elementor-posts-container.elementor-posts.elementor-posts--skin-classic > .post-8525`

*... and 31 more failures for this rule*

#### Rule: [aria-required-children](https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Certain ARIA roles must contain particular children
- HTML: `<div class="elementor-loop-container elementor-grid" role="list">`
- XPath: `.elementor-loop-container`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/contact" class="theme-btn">Contact Us</a>`
- XPath: `.header-left-right > .theme-btn[href$="contact"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://nexxt.com.au/it-consultant-brisbane-sme-guide/"> 				IT Consultant Brisbane for SMEs: Services, Pricing Signals &amp; When to Engage			</a>`
- XPath: `.e-loop-item-8568 > .elementor-element-b8fbc95.e-con-boxed[data-id="b8fbc95"] > .e-con-inner > .elementor-element-7c68f1c.elementor-posts--thumbnail-top.elementor-widget-posts > .elementor-widget-container > .elementor-posts-container.elementor-posts.elementor-posts--skin-classic > .post-8568 > .elementor-post__text > .elementor-post__title > a`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<p>If you’re spinning up initiatives without clear outcomes or fighting</p>`
- XPath: `.e-loop-item-8568 > .elementor-element-b8fbc95.e-con-boxed[data-id="b8fbc95"] > .e-con-inner > .elementor-element-7c68f1c.elementor-posts--thumbnail-top.elementor-widget-posts > .elementor-widget-container > .elementor-posts-container.elementor-posts.elementor-posts--skin-classic > .post-8568 > .elementor-post__text > .elementor-post__excerpt > p`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a class="elementor-post__read-more" href="https://nexxt.com.au/it-consultant-brisbane-sme-guide/" aria-label="Read more about IT Consultant Brisbane for SMEs: Services, Pricing Signals &amp; When to Engage" tabindex="-1"> 			Read More »		</a>`
- XPath: `.e-loop-item-8568 > .elementor-element-b8fbc95.e-con-boxed[data-id="b8fbc95"] > .e-con-inner > .elementor-element-7c68f1c.elementor-posts--thumbnail-top.elementor-widget-posts > .elementor-widget-container > .elementor-posts-container.elementor-posts.elementor-posts--skin-classic > .post-8568 > .elementor-post__text > .elementor-post__read-more`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://nexxt.com.au/office-365-consulting-services-australia/"> 				Office 365 Consulting Services (Australia)			</a>`
- XPath: `.e-loop-item-8568 > .elementor-element-b8fbc95.e-con-boxed[data-id="b8fbc95"] > .e-con-inner > .elementor-element-7c68f1c.elementor-posts--thumbnail-top.elementor-widget-posts > .elementor-widget-container > .elementor-posts-container.elementor-posts.elementor-posts--skin-classic > .post-8559 > .elementor-post__text > .elementor-post__title > a`

*... and 104 more failures for this rule*

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h4>Services</h4>`
- XPath: `.footer-links:nth-child(1) > h4`

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<header class="header-area">`
- XPath: `.header-area`

#### Rule: [landmark-contentinfo-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-contentinfo-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Contentinfo landmark should not be contained in another landmark
- HTML: `<footer class="footer-area">`
- XPath: `.footer-area`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="masthead" itemscope="itemscope" itemtype="https://schema.org/WPHeader">`
- XPath: `#masthead`

#### Rule: [landmark-no-duplicate-contentinfo](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-contentinfo?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one contentinfo landmark
- HTML: `<footer itemtype="https://schema.org/WPFooter" itemscope="itemscope" id="colophon" role="contentinfo">`
- XPath: `#colophon`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html lang="en-US">`
- XPath: `html`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="masthead" itemscope="itemscope" itemtype="https://schema.org/WPHeader">`
- XPath: `#masthead`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav class="elementor-pagination" aria-label="Pagination">`
- XPath: `.e-loop-item-8568 > .elementor-element-b8fbc95.e-con-boxed[data-id="b8fbc95"] > .e-con-inner > .elementor-element-7c68f1c.elementor-posts--thumbnail-top.elementor-widget-posts > .elementor-widget-container > .elementor-pagination[aria-label="Pagination"]`

**Failure 3:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<footer itemtype="https://schema.org/WPFooter" itemscope="itemscope" id="colophon" role="contentinfo">`
- XPath: `#colophon`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a href="https://www.linkedin.com/company/nexxtgroup/">         <i class="iconoir-linkedin"></i>     </a>`
- XPath: `.social-links > li > a`

#### Rule: [list](https://dequeuniversity.com/rules/axe/4.11/list?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(1) > ul`

**Failure 2:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(2) > ul`

**Failure 3:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(3) > ul`

**Failure 4:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(4) > ul`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Page should contain a level-one heading
- HTML: `<html lang="en-US">`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="elementor-element elementor-element-87f2c60 e-flex e-con-boxed e-con e-parent" data-id="87f2c60" data-element_type="container" data-e-type="container">`
- XPath: `.elementor-element-87f2c60`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="elementor-posts-container elementor-posts elementor-posts--skin-classic elementor-grid elementor-has-item-ratio" role="list">`
- XPath: `.e-loop-item-8568 > .elementor-element-b8fbc95.e-con-boxed[data-id="b8fbc95"] > .e-con-inner > .elementor-element-7c68f1c.elementor-posts--thumbnail-top.elementor-widget-posts > .elementor-widget-container > .elementor-posts-container.elementor-posts.elementor-posts--skin-classic`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="elementor-posts-container elementor-posts elementor-posts--skin-classic elementor-grid elementor-has-item-ratio" role="list">`
- XPath: `.e-loop-item-8559 > .elementor-element-b8fbc95.e-con-boxed[data-id="b8fbc95"] > .e-con-inner > .elementor-element-7c68f1c.elementor-posts--thumbnail-top.elementor-widget-posts > .elementor-widget-container > .elementor-posts-container.elementor-posts.elementor-posts--skin-classic`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="elementor-posts-container elementor-posts elementor-posts--skin-classic elementor-grid elementor-has-item-ratio" role="list">`
- XPath: `.e-loop-item-8551 > .elementor-element-b8fbc95.e-con-boxed[data-id="b8fbc95"] > .e-con-inner > .elementor-element-7c68f1c.elementor-posts--thumbnail-top.elementor-widget-posts > .elementor-widget-container > .elementor-posts-container.elementor-posts.elementor-posts--skin-classic`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="elementor-posts-container elementor-posts elementor-posts--skin-classic elementor-grid elementor-has-item-ratio" role="list">`
- XPath: `.e-loop-item-8533 > .elementor-element-b8fbc95.e-con-boxed[data-id="b8fbc95"] > .e-con-inner > .elementor-element-7c68f1c.elementor-posts--thumbnail-top.elementor-widget-posts > .elementor-widget-container > .elementor-posts-container.elementor-posts.elementor-posts--skin-classic`

*... and 2 more failures for this rule*

### https://nexxt.com.au/elementor-hf/home-footer/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/contact" class="theme-btn">Contact Us</a>`
- XPath: `.header-left-right > .theme-btn[href$="contact"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/about-us" class="theme-btn">Learn More</a>`
- XPath: `.theme-btn[href$="about-us"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<p>                             Years  <span>of Customer <br>Success</span>                        </p>`
- XPath: `.experience-content > p`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<p>                         50+  <span>Years of combined business and digital expertise</span>                    </p>`
- XPath: `.our-expert-team-box-inner > p`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="section-subtitle">CASE STUDIES</span>`
- XPath: `.case-studio-header > p > .section-subtitle`

*... and 11 more failures for this rule*

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h4><a href="/transformation-and-change">Transformation &amp; Change</a></h4>`
- XPath: `.service-card.simple-shadow:nth-child(1) > h4`

**Failure 2:**
- Message: Heading levels should only increase by one
- HTML: `<h4>Accelerating Delivery, Inspiring Change</h4>`
- XPath: `#development > .case-studio-body.d-flex > .right > .case-studio-contents.service-card.card-h > h4`

**Failure 3:**
- Message: Heading levels should only increase by one
- HTML: `<h4>Assess</h4>`
- XPath: `.about-timeline-item:nth-child(1) > .about-timeline-item-inner > h4`

**Failure 4:**
- Message: Heading levels should only increase by one
- HTML: `<h6 class="section-subtitle section-subtitle1">Op Ed</h6>`
- XPath: `.section-subtitle1`

**Failure 5:**
- Message: Heading levels should only increase by one
- HTML: `<h6 class="section-subtitle">Tips</h6>`
- XPath: `.news-item.card-h:nth-child(1) > .news-item-body > h6`

*... and 4 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img decoding="async" class="desktop fade-in" src="https://nexxt.com.au/wp-content/uploads/2024/11/NEXXT-226-1-scaled.jpg">`
- XPath: `.desktop`

**Failure 2:**
- Message: Images must have alternative text
- HTML: `<img decoding="async" src="https://nexxt.com.au/wp-content/uploads/2024/11/success2.png">`
- XPath: `.experience-body > img[decoding="async"]`

**Failure 3:**
- Message: Images must have alternative text
- HTML: `<img decoding="async" src="https://nexxt.com.au/wp-content/uploads/2024/11/experts2.png">`
- XPath: `.imgs > img[decoding="async"]`

**Failure 4:**
- Message: Images must have alternative text
- HTML: `<img decoding="async" src="https://nexxt.com.au/wp-content/uploads/2024/11/Badge.jpeg" style="touch-action: pan-y;">`
- XPath: `.client-logo.simple-shadow:nth-child(1) > img[decoding="async"]`

**Failure 5:**
- Message: Images must have alternative text
- HTML: `<img decoding="async" src="https://nexxt.com.au/wp-content/uploads/2024/11/linfox.png" style="touch-action: pan-y;">`
- XPath: `.client-logo.simple-shadow:nth-child(2) > img[decoding="async"]`

*... and 20 more failures for this rule*

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<header class="header-area">`
- XPath: `.header-area`

#### Rule: [landmark-contentinfo-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-contentinfo-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Contentinfo landmark should not be contained in another landmark
- HTML: `<footer itemtype="https://schema.org/WPFooter" itemscope="itemscope" id="colophon" role="contentinfo">`
- XPath: `#colophon`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="masthead" itemscope="itemscope" itemtype="https://schema.org/WPHeader">`
- XPath: `#masthead`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="masthead" itemscope="itemscope" itemtype="https://schema.org/WPHeader">`
- XPath: `#masthead`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a href="/contact" class="theme-btn">                     <i class="iconoir-arrow-up-right"></i>                 </a>`
- XPath: `#development > .case-studio-body.d-flex > .right > .case-studio-contents.service-card.card-h > .theme-btn[href$="contact"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a href="/agile-20-years-on" class="theme-btn">         <i class="iconoir-arrow-up-right"></i>     </a>`
- XPath: `.theme-btn[href$="agile-20-years-on"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a href="/running-a-workshop-part-2-the-art-of-skillful-facilitation" class="theme-btn">                 <i class="iconoir-arrow-up-right"></i>             </a>`
- XPath: `.news-item.card-h:nth-child(1) > .news-item-body > .theme-btn`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a href="/the-seven-deadly-wastes-of-lean" class="theme-btn">                 <i class="iconoir-arrow-up-right"></i>             </a>`
- XPath: `.news-item.card-h:nth-child(2) > .news-item-body > .theme-btn`

**Failure 5:**
- Message: Links must have discernible text
- HTML: `<a href="https://www.linkedin.com/company/nexxtgroup/">         <i class="iconoir-linkedin"></i>     </a>`
- XPath: `.social-links > li > a`

#### Rule: [list](https://dequeuniversity.com/rules/axe/4.11/list?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(1) > ul`

**Failure 2:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(2) > ul`

**Failure 3:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(3) > ul`

**Failure 4:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(4) > ul`

### https://nexxt.com.au/elementor-hf/home-v1-header/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/contact" class="theme-btn">Contact Us</a>`
- XPath: `.header-left-right > .theme-btn[href$="contact"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/about-us" class="theme-btn">Learn More</a>`
- XPath: `.theme-btn[href$="about-us"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<p>                             Years  <span>of Customer <br>Success</span>                        </p>`
- XPath: `.experience-content > p`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<p>                         50+  <span>Years of combined business and digital expertise</span>                    </p>`
- XPath: `.our-expert-team-box-inner > p`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<p>                         Trusted by over <span>50 clients across business and government</span>                    </p>`
- XPath: `.google-reviews-box > .right > p`

*... and 12 more failures for this rule*

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h4><a href="/transformation-and-change">Transformation &amp; Change</a></h4>`
- XPath: `.service-card.simple-shadow:nth-child(1) > h4`

**Failure 2:**
- Message: Heading levels should only increase by one
- HTML: `<h4>Accelerating Delivery, Inspiring Change</h4>`
- XPath: `#development > .case-studio-body.d-flex > .right > .case-studio-contents.service-card.card-h > h4`

**Failure 3:**
- Message: Heading levels should only increase by one
- HTML: `<h4>Assess</h4>`
- XPath: `.about-timeline-item:nth-child(1) > .about-timeline-item-inner > h4`

**Failure 4:**
- Message: Heading levels should only increase by one
- HTML: `<h6 class="section-subtitle section-subtitle1">Op Ed</h6>`
- XPath: `.section-subtitle1`

**Failure 5:**
- Message: Heading levels should only increase by one
- HTML: `<h6 class="section-subtitle">Tips</h6>`
- XPath: `.news-item.card-h:nth-child(1) > .news-item-body > h6`

*... and 4 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img decoding="async" class="desktop fade-in" src="https://nexxt.com.au/wp-content/uploads/2024/11/NEXXT-226-1-scaled.jpg">`
- XPath: `.desktop`

**Failure 2:**
- Message: Images must have alternative text
- HTML: `<img decoding="async" src="https://nexxt.com.au/wp-content/uploads/2024/11/success2.png">`
- XPath: `.experience-body > img[decoding="async"]`

**Failure 3:**
- Message: Images must have alternative text
- HTML: `<img decoding="async" src="https://nexxt.com.au/wp-content/uploads/2024/11/experts2.png">`
- XPath: `.imgs > img[decoding="async"]`

**Failure 4:**
- Message: Images must have alternative text
- HTML: `<img decoding="async" src="https://nexxt.com.au/wp-content/uploads/2024/11/handshake.png">`
- XPath: `.left > img[decoding="async"]`

**Failure 5:**
- Message: Images must have alternative text
- HTML: `<img decoding="async" src="https://nexxt.com.au/wp-content/uploads/2024/11/Badge.jpeg" style="touch-action: pan-y;">`
- XPath: `.client-logo.simple-shadow:nth-child(1) > img[decoding="async"]`

*... and 21 more failures for this rule*

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<header class="header-area">`
- XPath: `.header-area`

#### Rule: [landmark-contentinfo-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-contentinfo-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Contentinfo landmark should not be contained in another landmark
- HTML: `<footer itemtype="https://schema.org/WPFooter" itemscope="itemscope" id="colophon" role="contentinfo">`
- XPath: `#colophon`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="masthead" itemscope="itemscope" itemtype="https://schema.org/WPHeader">`
- XPath: `#masthead`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="masthead" itemscope="itemscope" itemtype="https://schema.org/WPHeader">`
- XPath: `#masthead`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a href="/contact" class="theme-btn">                     <i class="iconoir-arrow-up-right"></i>                 </a>`
- XPath: `#development > .case-studio-body.d-flex > .right > .case-studio-contents.service-card.card-h > .theme-btn[href$="contact"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a href="/agile-20-years-on" class="theme-btn">         <i class="iconoir-arrow-up-right"></i>     </a>`
- XPath: `.theme-btn[href$="agile-20-years-on"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a href="/running-a-workshop-part-2-the-art-of-skillful-facilitation" class="theme-btn">                 <i class="iconoir-arrow-up-right"></i>             </a>`
- XPath: `.news-item.card-h:nth-child(1) > .news-item-body > .theme-btn`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a href="/the-seven-deadly-wastes-of-lean" class="theme-btn">                 <i class="iconoir-arrow-up-right"></i>             </a>`
- XPath: `.news-item.card-h:nth-child(2) > .news-item-body > .theme-btn`

**Failure 5:**
- Message: Links must have discernible text
- HTML: `<a href="https://www.linkedin.com/company/nexxtgroup/">         <i class="iconoir-linkedin"></i>     </a>`
- XPath: `.social-links > li > a`

#### Rule: [list](https://dequeuniversity.com/rules/axe/4.11/list?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(1) > ul`

**Failure 2:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(2) > ul`

**Failure 3:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(3) > ul`

**Failure 4:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(4) > ul`

### https://nexxt.com.au/elementor-hf/home-v2-header/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/contact" class="theme-btn">Contact Us</a>`
- XPath: `.header-left-right > .theme-btn[href$="contact"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/about-us" class="theme-btn">Learn More</a>`
- XPath: `.theme-btn[href$="about-us"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<p>                             Years  <span>of Customer <br>Success</span>                        </p>`
- XPath: `.experience-content > p`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<p>                         50+  <span>Years of combined business and digital expertise</span>                    </p>`
- XPath: `.our-expert-team-box-inner > p`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="section-subtitle">CASE STUDIES</span>`
- XPath: `.case-studio-header > p > .section-subtitle`

*... and 11 more failures for this rule*

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h4><a href="/transformation-and-change">Transformation &amp; Change</a></h4>`
- XPath: `.service-card.simple-shadow:nth-child(1) > h4`

**Failure 2:**
- Message: Heading levels should only increase by one
- HTML: `<h4>Accelerating Delivery, Inspiring Change</h4>`
- XPath: `#development > .case-studio-body.d-flex > .right > .case-studio-contents.service-card.card-h > h4`

**Failure 3:**
- Message: Heading levels should only increase by one
- HTML: `<h4>Assess</h4>`
- XPath: `.about-timeline-item:nth-child(1) > .about-timeline-item-inner > h4`

**Failure 4:**
- Message: Heading levels should only increase by one
- HTML: `<h6 class="section-subtitle section-subtitle1">Op Ed</h6>`
- XPath: `.section-subtitle1`

**Failure 5:**
- Message: Heading levels should only increase by one
- HTML: `<h6 class="section-subtitle">Tips</h6>`
- XPath: `.news-item.card-h:nth-child(1) > .news-item-body > h6`

*... and 4 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img decoding="async" class="desktop fade-in" src="https://nexxt.com.au/wp-content/uploads/2024/11/NEXXT-226-1-scaled.jpg">`
- XPath: `.desktop`

**Failure 2:**
- Message: Images must have alternative text
- HTML: `<img decoding="async" src="https://nexxt.com.au/wp-content/uploads/2024/11/success2.png">`
- XPath: `.experience-body > img[decoding="async"]`

**Failure 3:**
- Message: Images must have alternative text
- HTML: `<img decoding="async" src="https://nexxt.com.au/wp-content/uploads/2024/11/experts2.png">`
- XPath: `.imgs > img[decoding="async"]`

**Failure 4:**
- Message: Images must have alternative text
- HTML: `<img decoding="async" src="https://nexxt.com.au/wp-content/uploads/2024/11/handshake.png">`
- XPath: `.left > img[decoding="async"]`

**Failure 5:**
- Message: Images must have alternative text
- HTML: `<img decoding="async" src="https://nexxt.com.au/wp-content/uploads/2024/11/Badge.jpeg" style="touch-action: pan-y;">`
- XPath: `.client-logo.simple-shadow:nth-child(1) > img[decoding="async"]`

*... and 21 more failures for this rule*

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<header class="header-area">`
- XPath: `.header-area`

#### Rule: [landmark-contentinfo-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-contentinfo-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Contentinfo landmark should not be contained in another landmark
- HTML: `<footer itemtype="https://schema.org/WPFooter" itemscope="itemscope" id="colophon" role="contentinfo">`
- XPath: `#colophon`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="masthead" itemscope="itemscope" itemtype="https://schema.org/WPHeader">`
- XPath: `#masthead`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="masthead" itemscope="itemscope" itemtype="https://schema.org/WPHeader">`
- XPath: `#masthead`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a href="/contact" class="theme-btn">                     <i class="iconoir-arrow-up-right"></i>                 </a>`
- XPath: `#development > .case-studio-body.d-flex > .right > .case-studio-contents.service-card.card-h > .theme-btn[href$="contact"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a href="/agile-20-years-on" class="theme-btn">         <i class="iconoir-arrow-up-right"></i>     </a>`
- XPath: `.theme-btn[href$="agile-20-years-on"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a href="/running-a-workshop-part-2-the-art-of-skillful-facilitation" class="theme-btn">                 <i class="iconoir-arrow-up-right"></i>             </a>`
- XPath: `.news-item.card-h:nth-child(1) > .news-item-body > .theme-btn`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a href="/the-seven-deadly-wastes-of-lean" class="theme-btn">                 <i class="iconoir-arrow-up-right"></i>             </a>`
- XPath: `.news-item.card-h:nth-child(2) > .news-item-body > .theme-btn`

**Failure 5:**
- Message: Links must have discernible text
- HTML: `<a href="https://www.linkedin.com/company/nexxtgroup/">         <i class="iconoir-linkedin"></i>     </a>`
- XPath: `.social-links > li > a`

#### Rule: [list](https://dequeuniversity.com/rules/axe/4.11/list?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(1) > ul`

**Failure 2:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(2) > ul`

**Failure 3:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(3) > ul`

**Failure 4:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(4) > ul`

### https://nexxt.com.au/agile-20-years-on

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/contact" class="theme-btn">Contact Us</a>`
- XPath: `.header-left-right > .theme-btn[href$="contact"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<h6 class="section-subtitle badge-radius">Our Studies</h6>`
- XPath: `.badge-radius`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<h6 class="section-subtitle section-subtitle1">Op Ed</h6>`
- XPath: `.section-subtitle1`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="elementor-button-text">VIEW ALL</span>`
- XPath: `.elementor-button-text`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<h6 class="section-subtitle">Contact</h6>`
- XPath: `.contact-form-body > h6`

*... and 5 more failures for this rule*

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h6 class="section-subtitle">INSIGHTS</h6>`
- XPath: `.left > h6`

**Failure 2:**
- Message: Heading levels should only increase by one
- HTML: `<h6 class="section-subtitle section-subtitle1">Op Ed</h6>`
- XPath: `.section-subtitle1`

**Failure 3:**
- Message: Heading levels should only increase by one
- HTML: `<h6 class="section-subtitle">Tips</h6>`
- XPath: `.news-item.card-h:nth-child(1) > .news-item-body > h6`

**Failure 4:**
- Message: Heading levels should only increase by one
- HTML: `<h6 class="section-subtitle">Lean</h6>`
- XPath: `.news-item.card-h:nth-child(2) > .news-item-body > h6`

**Failure 5:**
- Message: Heading levels should only increase by one
- HTML: `<h6 class="section-subtitle">Contact</h6>`
- XPath: `.contact-form-body > h6`

*... and 2 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="https://nexxt.com.au/wp-content/uploads/2024/10/NEXXT-250-scaled.jpg">`
- XPath: `.sticky-news > .news-img-box > img`

**Failure 2:**
- Message: Images must have alternative text
- HTML: `<img src="https://nexxt.com.au/wp-content/uploads/2024/10/64b7ce72cc736c81beadb984_IMG_1582-2-p-800.jpg">`
- XPath: `.news-item.card-h:nth-child(1) > .news-img-box > img`

**Failure 3:**
- Message: Images must have alternative text
- HTML: `<img src="https://nexxt.com.au/wp-content/uploads/2024/10/61ac2b0bd942768a049f941a_58-COMPRESSED-p-800.jpeg">`
- XPath: `.news-item.card-h:nth-child(2) > .news-img-box > img`

**Failure 4:**
- Message: Images must have alternative text
- HTML: `<img src="https://nexxt.com.au/wp-content/uploads/2024/11/support2.png">`
- XPath: `.contact-info:nth-child(1) > img`

**Failure 5:**
- Message: Images must have alternative text
- HTML: `<img src="https://nexxt.com.au/wp-content/uploads/2024/11/map1.png">`
- XPath: `.contact-info:nth-child(2) > img`

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<header class="header-area">`
- XPath: `.header-area`

#### Rule: [landmark-contentinfo-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-contentinfo-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Contentinfo landmark should not be contained in another landmark
- HTML: `<footer class="footer-area">`
- XPath: `.footer-area`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="masthead" itemscope="itemscope" itemtype="https://schema.org/WPHeader">`
- XPath: `#masthead`

#### Rule: [landmark-no-duplicate-contentinfo](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-contentinfo?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one contentinfo landmark
- HTML: `<footer itemtype="https://schema.org/WPFooter" itemscope="itemscope" id="colophon" role="contentinfo">`
- XPath: `#colophon`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html lang="en-US">`
- XPath: `html`

**Failure 2:**
- Message: Document should have one main landmark
- HTML: `<html>`
- XPath: `#hs-form-iframe-0`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="masthead" itemscope="itemscope" itemtype="https://schema.org/WPHeader">`
- XPath: `#masthead`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<footer itemtype="https://schema.org/WPFooter" itemscope="itemscope" id="colophon" role="contentinfo">`
- XPath: `#colophon`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a href="/agile-20-years-on" class="theme-btn">         <i class="iconoir-arrow-up-right"></i>     </a>`
- XPath: `.theme-btn[href$="agile-20-years-on"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a href="/running-a-workshop-part-2-the-art-of-skillful-facilitation" class="theme-btn">                 <i class="iconoir-arrow-up-right"></i>             </a>`
- XPath: `.news-item.card-h:nth-child(1) > .news-item-body > .theme-btn`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a href="/the-seven-deadly-wastes-of-lean" class="theme-btn">                 <i class="iconoir-arrow-up-right"></i>             </a>`
- XPath: `.news-item.card-h:nth-child(2) > .news-item-body > .theme-btn`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a href="https://www.linkedin.com/company/nexxtgroup/">         <i class="iconoir-linkedin"></i>     </a>`
- XPath: `.social-links > li > a`

#### Rule: [list](https://dequeuniversity.com/rules/axe/4.11/list?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(1) > ul`

**Failure 2:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(2) > ul`

**Failure 3:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(3) > ul`

**Failure 4:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(4) > ul`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="elementor-element elementor-element-e499878 e-flex e-con-boxed e-con e-parent" data-id="e499878" data-element_type="container" data-e-type="container" data-settings="{"background_background":"gradient"}">`
- XPath: `.elementor-element-e499878`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="elementor-element elementor-element-8ca229b elementor-widget elementor-widget-heading" data-id="8ca229b" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">`
- XPath: `.elementor-element-8ca229b`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="c-ih-insights-header t-section"><p>On the 20th anniversary of the Agile Manifesto, we ask whether the adoption of agile thinking and practices has improved business operations?</p></div>`
- XPath: `.c-ih-insights-header`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<p>2021 marked the 20th anniversary of the Agile Manifesto, created when 17 software experts met in Snowbird, Utah, to discuss how to radically improve the delivery of software products.</p>`
- XPath: `.c-ic__rich-text > p:nth-child(1)`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<p>Since that time, the Agile movement has grown to be a global phenomenon, not only in the software field, but across all aspects of business and government. And understandably so – what business or government agency would not want to be seen as being agile?</p>`
- XPath: `.c-ic__rich-text > p:nth-child(2)`

*... and 28 more failures for this rule*

### https://nexxt.com.au/insights/2/

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<article class="elementor-post elementor-grid-item post-8130 post type-post status-publish format-standard has-post-thumbnail hentry category-blog" role="listitem">`
- XPath: `.post-8130`

**Failure 2:**
- Message: ARIA role should be appropriate for the element
- HTML: `<article class="elementor-post elementor-grid-item post-8098 post type-post status-publish format-standard has-post-thumbnail hentry category-uncategorized" role="listitem">`
- XPath: `.post-8098`

**Failure 3:**
- Message: ARIA role should be appropriate for the element
- HTML: `<article class="elementor-post elementor-grid-item post-8072 post type-post status-publish format-standard has-post-thumbnail hentry category-blog" role="listitem">`
- XPath: `.post-8072`

**Failure 4:**
- Message: ARIA role should be appropriate for the element
- HTML: `<article class="elementor-post elementor-grid-item post-7952 post type-post status-publish format-standard has-post-thumbnail hentry category-blog" role="listitem">`
- XPath: `.post-7952`

**Failure 5:**
- Message: ARIA role should be appropriate for the element
- HTML: `<article class="elementor-post elementor-grid-item post-7943 post type-post status-publish format-standard has-post-thumbnail hentry category-blog" role="listitem">`
- XPath: `.post-7943`

*... and 3 more failures for this rule*

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/contact" class="theme-btn">Contact Us</a>`
- XPath: `.header-left-right > .theme-btn[href$="contact"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://nexxt.com.au/workflow-automation/"> 				Workflow Automation Services			</a>`
- XPath: `.post-8130 > .elementor-post__text > .elementor-post__title > a`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<p>Unlock Efficiency with Workflow Automation At Nexxt.com.au, we believe workflow automation is not just a tool, it’s a catalyst for confident, strategic change. Workflow automation</p>`
- XPath: `.post-8130 > .elementor-post__text > .elementor-post__excerpt > p`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a class="elementor-post__read-more" href="https://nexxt.com.au/workflow-automation/" aria-label="Read more about Workflow Automation Services" tabindex="-1"> 			Read More »		</a>`
- XPath: `.post-8130 > .elementor-post__text > .elementor-post__read-more`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://nexxt.com.au/microsoft-teams-training/"> 				Microsoft Teams Training			</a>`
- XPath: `.post-8098 > .elementor-post__text > .elementor-post__title > a`

*... and 27 more failures for this rule*

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h6 class="section-subtitle">CASE STUDIES</h6>`
- XPath: `.case-studio-header > h6`

**Failure 2:**
- Message: Heading levels should only increase by one
- HTML: `<h4>Accelerating Delivery, Inspiring Change</h4>`
- XPath: `#development > .case-studio-body.d-flex > .right > .case-studio-contents.service-card.card-h > h4`

**Failure 3:**
- Message: Heading levels should only increase by one
- HTML: `<h6 class="section-subtitle">Contact</h6>`
- XPath: `.contact-form-body > h6`

**Failure 4:**
- Message: Heading levels should only increase by one
- HTML: `<h4>Contact Info</h4>`
- XPath: `.contact-info:nth-child(1) > h4`

**Failure 5:**
- Message: Heading levels should only increase by one
- HTML: `<h4>Services</h4>`
- XPath: `.footer-links:nth-child(1) > h4`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img decoding="async" src="https://nexxt.com.au/wp-content/uploads/2024/10/NEXXT-22-scaled.jpg">`
- XPath: `#development > .case-studio-body.d-flex > .flex-1.left.d-flex > .case-studio-img-card.simple-shadow > img[decoding="async"]`

**Failure 2:**
- Message: Images must have alternative text
- HTML: `<img decoding="async" src="https://nexxt.com.au/wp-content/uploads/2024/11/fast-delivery3.png">`
- XPath: `#development > .case-studio-body.d-flex > .right > .case-studio-contents.service-card.card-h > img[decoding="async"]`

**Failure 3:**
- Message: Images must have alternative text
- HTML: `<img decoding="async" src="https://nexxt.com.au/wp-content/uploads/2024/11/support2.png">`
- XPath: `.contact-info:nth-child(1) > img[decoding="async"]`

**Failure 4:**
- Message: Images must have alternative text
- HTML: `<img decoding="async" src="https://nexxt.com.au/wp-content/uploads/2024/11/map1.png">`
- XPath: `.contact-info:nth-child(2) > img[decoding="async"]`

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<header class="header-area">`
- XPath: `.header-area`

#### Rule: [landmark-contentinfo-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-contentinfo-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Contentinfo landmark should not be contained in another landmark
- HTML: `<footer itemtype="https://schema.org/WPFooter" itemscope="itemscope" id="colophon" role="contentinfo">`
- XPath: `#colophon`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="masthead" itemscope="itemscope" itemtype="https://schema.org/WPHeader">`
- XPath: `#masthead`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="masthead" itemscope="itemscope" itemtype="https://schema.org/WPHeader">`
- XPath: `#masthead`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a href="/contact" class="theme-btn">                     <i class="iconoir-arrow-up-right"></i>                 </a>`
- XPath: `#development > .case-studio-body.d-flex > .right > .case-studio-contents.service-card.card-h > .theme-btn[href$="contact"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a href="https://www.linkedin.com/company/nexxtgroup/">         <i class="iconoir-linkedin"></i>     </a>`
- XPath: `.social-links > li > a`

#### Rule: [list](https://dequeuniversity.com/rules/axe/4.11/list?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(1) > ul`

**Failure 2:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(2) > ul`

**Failure 3:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(3) > ul`

**Failure 4:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.footer-links:nth-child(4) > ul`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Page should contain a level-one heading
- HTML: `<html lang="en-US" en-us""="">`
- XPath: `html`

**Failure 2:**
- Message: Page should contain a level-one heading
- HTML: `<html>`
- XPath: `#hs-form-iframe-0`

