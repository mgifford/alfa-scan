# Scan Report: week 8

- Issue: https://github.com/mgifford/open-scans/issues/88
- Submitted by: Thomas-Irwin
- Scanned at: 2026-03-06T14:51:02.968Z
- Engines used: All engines (AXE, ALFA, Equal Access, AccessLint, QualWeb)
- Scan duration: 4.1 minutes
- Total URLs submitted: 12
- Accepted public URLs: 12
- Rejected URLs: 0
- 🌙 Dark mode: None of the scanned URLs support `prefers-color-scheme: dark`
- ALFA outcomes: 9457 passed, 521 failed, 301 cantTell, 609 inapplicable
- axe outcomes: 7026 passed, 68 failed, 151 cantTell, 572 inapplicable
- Equal Access outcomes: 19699 passed, 212 failed (211 unique, 1 duplicate), 149 cantTell, 0 inapplicable
- AccessLint outcomes: 1104 passed, 0 failed (0 unique, 0 duplicate), 0 cantTell, 0 inapplicable
- QualWeb outcomes: 4492 passed, 267 failed, 985 cantTell, 108 inapplicable
- Duplicate findings caught by later scanners: 696

## 🎯 Priority: Pages with Most Errors

Focus your efforts on these pages to make the biggest impact (combined scanner unique failures):

| Page | axe Unique | ALFA Unique | Equal Access Unique | AccessLint Unique | QualWeb | Total Unique | Page Title |
|---|---:|---:|---:|---:|---:|---:|---|
| [View Page](https://dbm.maryland.gov/Pages/ManagingResultsMaryland.aspx) | 5 | 5 | 19 | 0 | 41 | **70** | Managing for Results: Performance-Informed Budgeting in Maryland |
| [View Page](https://dbm.maryland.gov/dbmsitearchives/Documents/Furlough/FurloughEmployeeNotices.aspx) | 8 | 2 | 17 | 0 | 32 | **59** | Furlough Employee Notices |
| [View Page](https://dbm.maryland.gov/Pages/AboutDBM.aspx) | 7 | 6 | 19 | 0 | 24 | **56** | About DBM |
| [View Page](https://dbm.maryland.gov/Pages/DivSec.aspx) | 5 | 5 | 18 | 0 | 27 | **55** | Office of the Secretary |
| [View Page](https://dbm.maryland.gov/Pages/regulations.aspx) | 7 | 6 | 19 | 0 | 19 | **51** | Regulations |
| [View Page](https://dbm.maryland.gov/Pages/ContactUs.aspx) | 5 | 5 | 17 | 0 | 21 | **48** | Contact Us |
| [View Page](https://dbm.maryland.gov/Pages/DivAuditCompliance.aspx) | 5 | 5 | 18 | 0 | 18 | **46** | Audit Compliance Unit |
| [View Page](https://dbm.maryland.gov/Pages/DivEmployeeBen.aspx) | 5 | 5 | 17 | 0 | 18 | **45** | OPSB - Employee Benefits Division |
| [View Page](https://dbm.maryland.gov/Pages/DivMgmtPersSvces.aspx) | 5 | 5 | 17 | 0 | 18 | **45** | OPSB - Personnel Services Division |
| [View Page](https://dbm.maryland.gov/Pages/DivContractMgmt.aspx) | 5 | 4 | 18 | 0 | 16 | **43** | Contract Management Division |

## 🔧 Priority: Most Common Issues (ALFA)

These ALFA accessibility issues appear most frequently across your pages:

| Rule | Pages Affected | Documentation |
|---|---:|---|
| [SIA-R18](https://alfa.siteimprove.com/rules/sia-r18): ARIA states are consistent with element semantics | **12** of 12 | [View Rule](https://alfa.siteimprove.com/rules/sia-r18) |
| [SIA-R57](https://alfa.siteimprove.com/rules/sia-r57): Landmarks don't repeat the same content | **12** of 12 | [View Rule](https://alfa.siteimprove.com/rules/sia-r57) |
| [SIA-R111](https://alfa.siteimprove.com/rules/sia-r111): Interactive elements have a sufficient target size | **11** of 12 | [View Rule](https://alfa.siteimprove.com/rules/sia-r111) |
| [SIA-R66](https://alfa.siteimprove.com/rules/sia-r66): Text has enhanced contrast with its background | **9** of 12 | [View Rule](https://alfa.siteimprove.com/rules/sia-r66) |
| [SIA-R78](https://alfa.siteimprove.com/rules/sia-r78): Headings of same level have text content between them | **2** of 12 | [View Rule](https://alfa.siteimprove.com/rules/sia-r78) |

> 💡 **Tip**: Click on the rule documentation links to learn how to fix each issue.


## 🔧 Priority: Most Common Issues (axe)

These axe accessibility issues appear most frequently across your pages:

| Rule | Pages Affected | Documentation |
|---|---:|---|
| aria-prohibited-attr | **12** of 12 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/aria-prohibited-attr) |
| region | **12** of 12 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/region) |

> 💡 **Tip**: Click on the rule documentation links to learn how to fix each issue. Consider fixing the most common issues first for maximum impact.

> 🤖 **Future Enhancement**: This report will soon include AI-powered fix suggestions for authenticated GitHub users (opt-in only, no auto-run AI).

## 🔍 Cross-Page Patterns: Common HTML Issues

These HTML patterns cause the same accessibility errors across multiple pages. **Fix the pattern once in your codebase to fix it everywhere!**

### 🎯 Top Patterns to Fix (Highest Impact)

#### Pattern 1: Affects 12 page(s) - 12 occurrence(s)

**Scanner**: axe
**Rule**: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate
**Issue**: All page content should be contained by landmarks

**HTML Pattern**:
```html
<a href="http://www.maryland.gov/pages/accessibility.aspx" class="sr-only sr-only-focusable show-on-focus" target="_blank">Accessibility Information</a>
```

**XPath** (use in browser DevTools):
```
.sr-only-focusable.show-on-focus.sr-only:nth-child(2)
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.sr-only-focusable.show-on-focus.sr-only:nth-child(2)')`
5. The element will be highlighted

**Affected Pages**:
- https://dbm.maryland.gov/Pages/AboutDBM.aspx
- https://dbm.maryland.gov/Pages/ContactUs.aspx
- https://dbm.maryland.gov/Pages/DivAuditCompliance.aspx
- https://dbm.maryland.gov/Pages/DivClassSalary.aspx
- https://dbm.maryland.gov/Pages/DivContractMgmt.aspx
- *...and 7 more page(s)*

---

#### Pattern 2: Affects 12 page(s) - 12 occurrence(s)

**Scanner**: axe
**Rule**: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate
**Issue**: All page content should be contained by landmarks

**HTML Pattern**:
```html
<a class="mdgov-entNav__logo" href="https://www.maryland.gov/">
        <img src="https://stage.egov.maryland.gov/doit/ewf/widgets/header/v2/img/mdgov-logo-2018-black.png" alt="Maryland.gov">
    </a>
```

**XPath** (use in browser DevTools):
```
.mdgov-entNav__logo
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.mdgov-entNav__logo')`
5. The element will be highlighted

**Affected Pages**:
- https://dbm.maryland.gov/Pages/AboutDBM.aspx
- https://dbm.maryland.gov/Pages/ContactUs.aspx
- https://dbm.maryland.gov/Pages/DivAuditCompliance.aspx
- https://dbm.maryland.gov/Pages/DivClassSalary.aspx
- https://dbm.maryland.gov/Pages/DivContractMgmt.aspx
- *...and 7 more page(s)*

---

#### Pattern 3: Affects 12 page(s) - 12 occurrence(s)

**Scanner**: axe
**Rule**: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate
**Issue**: All page content should be contained by landmarks

**HTML Pattern**:
```html
<ul class="mdgov-entNavList">
```

**XPath** (use in browser DevTools):
```
.mdgov-entNavList
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.mdgov-entNavList')`
5. The element will be highlighted

**Affected Pages**:
- https://dbm.maryland.gov/Pages/AboutDBM.aspx
- https://dbm.maryland.gov/Pages/ContactUs.aspx
- https://dbm.maryland.gov/Pages/DivAuditCompliance.aspx
- https://dbm.maryland.gov/Pages/DivClassSalary.aspx
- https://dbm.maryland.gov/Pages/DivContractMgmt.aspx
- *...and 7 more page(s)*

---

#### Pattern 4: Affects 11 page(s) - 11 occurrence(s)

**Scanner**: ALFA
**Rule**: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)
**Issue**: Target has insufficient size

**HTML Pattern**:
```html
<button class="mdgov-headerBanner__btn" aria-expanded="false" aria-controls="official-banner">...</button>
```

**XPath** (use in browser DevTools):
```
/button[@class="mdgov-headerBanner__btn"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('/button[@class="mdgov-headerBanner__btn"]')`
5. The element will be highlighted

**Affected Pages**:
- https://dbm.maryland.gov/Pages/AboutDBM.aspx
- https://dbm.maryland.gov/Pages/ContactUs.aspx
- https://dbm.maryland.gov/Pages/DivAuditCompliance.aspx
- https://dbm.maryland.gov/Pages/DivClassSalary.aspx
- https://dbm.maryland.gov/Pages/DivContractMgmt.aspx
- *...and 6 more page(s)*

---

#### Pattern 5: Affects 11 page(s) - 11 occurrence(s)

**Scanner**: ALFA
**Rule**: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)
**Issue**: Target has insufficient size

**HTML Pattern**:
```html
<a href="https://dbm.maryland.gov/Pages/ContactUs.aspx" target="_blank">Contact Us</a>
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
- https://dbm.maryland.gov/Pages/AboutDBM.aspx
- https://dbm.maryland.gov/Pages/ContactUs.aspx
- https://dbm.maryland.gov/Pages/DivAuditCompliance.aspx
- https://dbm.maryland.gov/Pages/DivClassSalary.aspx
- https://dbm.maryland.gov/Pages/DivContractMgmt.aspx
- *...and 6 more page(s)*

---

#### Pattern 6: Affects 11 page(s) - 11 occurrence(s)

**Scanner**: ALFA
**Rule**: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)
**Issue**: Target has insufficient size

**HTML Pattern**:
```html
<a href="https://mva.maryland.gov/vehicles" target="_blank">Vehicle Services</a>
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
- https://dbm.maryland.gov/Pages/AboutDBM.aspx
- https://dbm.maryland.gov/Pages/ContactUs.aspx
- https://dbm.maryland.gov/Pages/DivAuditCompliance.aspx
- https://dbm.maryland.gov/Pages/DivClassSalary.aspx
- https://dbm.maryland.gov/Pages/DivContractMgmt.aspx
- *...and 6 more page(s)*

---

#### Pattern 7: Affects 11 page(s) - 11 occurrence(s)

**Scanner**: ALFA
**Rule**: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)
**Issue**: Target has insufficient size

**HTML Pattern**:
```html
<a href="https://dhs.maryland.gov/supplemental-nutrition-assistance-program/" target="_blank">Food Assistance / SNAP</a>
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
- https://dbm.maryland.gov/Pages/AboutDBM.aspx
- https://dbm.maryland.gov/Pages/ContactUs.aspx
- https://dbm.maryland.gov/Pages/DivAuditCompliance.aspx
- https://dbm.maryland.gov/Pages/DivClassSalary.aspx
- https://dbm.maryland.gov/Pages/DivContractMgmt.aspx
- *...and 6 more page(s)*

---

#### Pattern 8: Affects 11 page(s) - 11 occurrence(s)

**Scanner**: ALFA
**Rule**: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)
**Issue**: Target has insufficient size

**HTML Pattern**:
```html
<a href="https://www.labor.maryland.gov/employment/unemployment.shtml" target="_blank">Unemployment Services</a>
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
- https://dbm.maryland.gov/Pages/AboutDBM.aspx
- https://dbm.maryland.gov/Pages/ContactUs.aspx
- https://dbm.maryland.gov/Pages/DivAuditCompliance.aspx
- https://dbm.maryland.gov/Pages/DivClassSalary.aspx
- https://dbm.maryland.gov/Pages/DivContractMgmt.aspx
- *...and 6 more page(s)*

---

#### Pattern 9: Affects 11 page(s) - 11 occurrence(s)

**Scanner**: ALFA
**Rule**: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)
**Issue**: Target has insufficient size

**HTML Pattern**:
```html
<a href="https://www.marylandtaxes.gov/individual/index.php" target="_blank">Taxes</a>
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
- https://dbm.maryland.gov/Pages/AboutDBM.aspx
- https://dbm.maryland.gov/Pages/ContactUs.aspx
- https://dbm.maryland.gov/Pages/DivAuditCompliance.aspx
- https://dbm.maryland.gov/Pages/DivClassSalary.aspx
- https://dbm.maryland.gov/Pages/DivContractMgmt.aspx
- *...and 6 more page(s)*

---

#### Pattern 10: Affects 11 page(s) - 11 occurrence(s)

**Scanner**: ALFA
**Rule**: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)
**Issue**: Target has insufficient size

**HTML Pattern**:
```html
<a href="https://elections.maryland.gov/voter_registration/index.html" target="_blank">Register to Vote</a>
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
- https://dbm.maryland.gov/Pages/AboutDBM.aspx
- https://dbm.maryland.gov/Pages/ContactUs.aspx
- https://dbm.maryland.gov/Pages/DivAuditCompliance.aspx
- https://dbm.maryland.gov/Pages/DivClassSalary.aspx
- https://dbm.maryland.gov/Pages/DivContractMgmt.aspx
- *...and 6 more page(s)*

---

#### Pattern 11: Affects 11 page(s) - 11 occurrence(s)

**Scanner**: ALFA
**Rule**: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)
**Issue**: Target has insufficient size

**HTML Pattern**:
```html
<a href="https://www.maryland.gov/pages/residents.aspx" target="_blank">Resident Resources</a>
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
- https://dbm.maryland.gov/Pages/AboutDBM.aspx
- https://dbm.maryland.gov/Pages/ContactUs.aspx
- https://dbm.maryland.gov/Pages/DivAuditCompliance.aspx
- https://dbm.maryland.gov/Pages/DivClassSalary.aspx
- https://dbm.maryland.gov/Pages/DivContractMgmt.aspx
- *...and 6 more page(s)*

---

#### Pattern 12: Affects 11 page(s) - 11 occurrence(s)

**Scanner**: ALFA
**Rule**: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)
**Issue**: Target has insufficient size

**HTML Pattern**:
```html
<a href="https://www.visitmaryland.org/" target="_blank">Visit Maryland</a>
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
- https://dbm.maryland.gov/Pages/AboutDBM.aspx
- https://dbm.maryland.gov/Pages/ContactUs.aspx
- https://dbm.maryland.gov/Pages/DivAuditCompliance.aspx
- https://dbm.maryland.gov/Pages/DivClassSalary.aspx
- https://dbm.maryland.gov/Pages/DivContractMgmt.aspx
- *...and 6 more page(s)*

---

#### Pattern 13: Affects 11 page(s) - 11 occurrence(s)

**Scanner**: ALFA
**Rule**: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)
**Issue**: Target has insufficient size

**HTML Pattern**:
```html
<a href="https://www.maryland.gov/pages/online_services.aspx" target="_blank">More Online Services</a>
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
- https://dbm.maryland.gov/Pages/AboutDBM.aspx
- https://dbm.maryland.gov/Pages/ContactUs.aspx
- https://dbm.maryland.gov/Pages/DivAuditCompliance.aspx
- https://dbm.maryland.gov/Pages/DivClassSalary.aspx
- https://dbm.maryland.gov/Pages/DivContractMgmt.aspx
- *...and 6 more page(s)*

---

#### Pattern 14: Affects 11 page(s) - 11 occurrence(s)

**Scanner**: ALFA
**Rule**: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)
**Issue**: Target has insufficient size

**HTML Pattern**:
```html
<a href="https://governor.maryland.gov/" target="_blank">Governor Wes Moore</a>
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
- https://dbm.maryland.gov/Pages/AboutDBM.aspx
- https://dbm.maryland.gov/Pages/ContactUs.aspx
- https://dbm.maryland.gov/Pages/DivAuditCompliance.aspx
- https://dbm.maryland.gov/Pages/DivClassSalary.aspx
- https://dbm.maryland.gov/Pages/DivContractMgmt.aspx
- *...and 6 more page(s)*

---

#### Pattern 15: Affects 11 page(s) - 11 occurrence(s)

**Scanner**: ALFA
**Rule**: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)
**Issue**: Target has insufficient size

**HTML Pattern**:
```html
<a href="https://governor.maryland.gov/leadership/cabinet/" target="_blank">Maryland Cabinet Agencies</a>
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
- https://dbm.maryland.gov/Pages/AboutDBM.aspx
- https://dbm.maryland.gov/Pages/ContactUs.aspx
- https://dbm.maryland.gov/Pages/DivAuditCompliance.aspx
- https://dbm.maryland.gov/Pages/DivClassSalary.aspx
- https://dbm.maryland.gov/Pages/DivContractMgmt.aspx
- *...and 6 more page(s)*

---

> 💡 **Pro Tip**: These patterns likely come from shared components or templates in your codebase. Fix them in the component/template source, and the fix will propagate to all affected pages.

## 📊 Detailed Results

Complete scan results for all tested pages:

| Submitted URL | Final URL | Status | HTTP | Redirected | Time (ms) | axe Unique | ALFA Unique | Equal Access Unique | AccessLint Unique | Duplicates | Notes |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|
| https://dbm.maryland.gov/Pages/AboutDBM.aspx | https://dbm.maryland.gov/Pages/AboutDBM.aspx | OK | 200 | no | 21851 | 7 | 6 | 19 | 0 | 70 | About DBM |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R111 (Interactive elements have a sufficient target size), SIA-R18 (ARIA states are consistent with element semantics), SIA-R57 (Landmarks don't repeat the same content), SIA-R66 (Text has enhanced contrast with its background), SIA-R78 (Headings of same level have text content between them) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-prohibited-attr, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_attribute_valid, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_sensory_misuse |
| https://dbm.maryland.gov/Pages/ContactUs.aspx | https://dbm.maryland.gov/Pages/ContactUs.aspx | OK | 200 | no | 18921 | 5 | 5 | 17 | 0 | 54 | Contact Us |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R111 (Interactive elements have a sufficient target size), SIA-R18 (ARIA states are consistent with element semantics), SIA-R57 (Landmarks don't repeat the same content), SIA-R66 (Text has enhanced contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-prohibited-attr, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_attribute_valid, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_sensory_misuse |
| https://dbm.maryland.gov/Pages/DivAuditCompliance.aspx | https://dbm.maryland.gov/Pages/DivAuditCompliance.aspx | OK | 200 | no | 17495 | 5 | 5 | 18 | 0 | 47 | Audit Compliance Unit |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R111 (Interactive elements have a sufficient target size), SIA-R18 (ARIA states are consistent with element semantics), SIA-R57 (Landmarks don't repeat the same content), SIA-R66 (Text has enhanced contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-prohibited-attr, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_attribute_valid, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_sensory_misuse |
| https://dbm.maryland.gov/Pages/DivClassSalary.aspx | https://dbm.maryland.gov/Pages/DivClassSalary.aspx | OK | 200 | no | 17878 | 5 | 4 | 17 | 0 | 45 | OPSB - Division of Classification and Salary |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R111 (Interactive elements have a sufficient target size), SIA-R18 (ARIA states are consistent with element semantics), SIA-R57 (Landmarks don't repeat the same content) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-prohibited-attr, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_attribute_valid, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_sensory_misuse |
| https://dbm.maryland.gov/Pages/DivContractMgmt.aspx | https://dbm.maryland.gov/Pages/DivContractMgmt.aspx | OK | 200 | no | 17960 | 5 | 4 | 18 | 0 | 45 | Contract Management Division |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R111 (Interactive elements have a sufficient target size), SIA-R18 (ARIA states are consistent with element semantics), SIA-R57 (Landmarks don't repeat the same content) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-prohibited-attr, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_attribute_valid, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_sensory_misuse |
| https://dbm.maryland.gov/Pages/DivEmployeeBen.aspx | https://dbm.maryland.gov/Pages/DivEmployeeBen.aspx | OK | 200 | no | 17824 | 5 | 5 | 17 | 0 | 47 | OPSB - Employee Benefits Division |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R111 (Interactive elements have a sufficient target size), SIA-R18 (ARIA states are consistent with element semantics), SIA-R57 (Landmarks don't repeat the same content), SIA-R66 (Text has enhanced contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-prohibited-attr, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_attribute_valid, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_sensory_misuse |
| https://dbm.maryland.gov/Pages/DivMgmtPersSvces.aspx | https://dbm.maryland.gov/Pages/DivMgmtPersSvces.aspx | OK | 200 | no | 17501 | 5 | 5 | 17 | 0 | 47 | OPSB - Personnel Services Division |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R111 (Interactive elements have a sufficient target size), SIA-R18 (ARIA states are consistent with element semantics), SIA-R57 (Landmarks don't repeat the same content), SIA-R66 (Text has enhanced contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-prohibited-attr, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_attribute_valid, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_sensory_misuse |
| https://dbm.maryland.gov/Pages/DivSec.aspx | https://dbm.maryland.gov/Pages/DivSec.aspx | OK | 200 | no | 21006 | 5 | 5 | 18 | 0 | 82 | Office of the Secretary |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R111 (Interactive elements have a sufficient target size), SIA-R18 (ARIA states are consistent with element semantics), SIA-R57 (Landmarks don't repeat the same content), SIA-R66 (Text has enhanced contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-prohibited-attr, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_attribute_valid, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_sensory_misuse |
| https://dbm.maryland.gov/Pages/ManagingResultsMaryland.aspx | https://dbm.maryland.gov/Pages/ManagingResultsMaryland.aspx | OK | 200 | no | 19272 | 5 | 5 | 19 | 0 | 114 | Managing for Results: Performance-Informed Budgeting in Maryland |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R111 (Interactive elements have a sufficient target size), SIA-R18 (ARIA states are consistent with element semantics), SIA-R57 (Landmarks don't repeat the same content), SIA-R66 (Text has enhanced contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-prohibited-attr, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_attribute_valid, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_sensory_misuse |
| https://dbm.maryland.gov/Pages/regulations.aspx | https://dbm.maryland.gov/Pages/regulations.aspx | OK | 200 | no | 18408 | 7 | 6 | 19 | 0 | 52 | Regulations |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R111 (Interactive elements have a sufficient target size), SIA-R18 (ARIA states are consistent with element semantics), SIA-R57 (Landmarks don't repeat the same content), SIA-R66 (Text has enhanced contrast with its background), SIA-R78 (Headings of same level have text content between them) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-prohibited-attr, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_attribute_valid, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_sensory_misuse |
| https://dbm.maryland.gov/dbmsitearchives/Documents/Furlough/FY2010OMalleyLetter.aspx | https://dbm.maryland.gov/dbmsitearchives/Documents/Furlough/FY2010OMalleyLetter.aspx | OK | 200 | no | 18001 | 6 | 5 | 15 | 0 | 45 | FY2010 OMalley Letter to State Employees |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R111 (Interactive elements have a sufficient target size), SIA-R18 (ARIA states are consistent with element semantics), SIA-R57 (Landmarks don't repeat the same content), SIA-R66 (Text has enhanced contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-prohibited-attr, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_attribute_valid, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_sensory_misuse |
| https://dbm.maryland.gov/dbmsitearchives/Documents/Furlough/FurloughEmployeeNotices.aspx | https://dbm.maryland.gov/dbmsitearchives/Documents/Furlough/FurloughEmployeeNotices.aspx | OK | 200 | no | 39075 | 8 | 2 | 17 | 0 | 48 | Furlough Employee Notices |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R18 (ARIA states are consistent with element semantics), SIA-R57 (Landmarks don't repeat the same content) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-prohibited-attr, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_attribute_valid, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_sensory_misuse |

## Detailed Failure Information (ALFA)

### https://dbm.maryland.gov/Pages/AboutDBM.aspx

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)

**Failure 1:**
- Message: Target has insufficient size
- HTML: `<button class="mdgov-headerBanner__btn" aria-expanded="false" aria-controls="official-banner">...</button>`
- XPath: `/button[@class="mdgov-headerBanner__btn"]`

**Failure 2:**
- Message: Target has insufficient size
- HTML: `<a href="/Pages/DivisionDescriptions.aspx">Division Descriptions</a>`
- XPath: `/a`

#### Rule: [SIA-R18: ARIA states are consistent with element semantics](https://alfa.siteimprove.com/rules/sia-r18)

**Failure 1:**
- Message: The attribute is prohibited for the element on which it is specified

#### Rule: [SIA-R57: Landmarks don't repeat the same content](https://alfa.siteimprove.com/rules/sia-r57)

**Failure 1:**
- Message: The text is not included in a landmark region

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 4.95:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R78: Headings of same level have text content between them](https://alfa.siteimprove.com/rules/sia-r78)

**Failure 1:**
- Message: There is no content between this heading and the next
- HTML: `<h2 class="mdgov-section__heading">About the Department of Budget and Management</h2>`
- XPath: `/h2[@class="mdgov-section__heading"]`

### https://dbm.maryland.gov/Pages/ContactUs.aspx

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)

**Failure 1:**
- Message: Target has insufficient size
- HTML: `<button class="mdgov-headerBanner__btn" aria-expanded="false" aria-controls="official-banner">...</button>`
- XPath: `/button[@class="mdgov-headerBanner__btn"]`

**Failure 2:**
- Message: Target has insufficient size
- HTML: `<a href="https://www.doit.state.md.us/phonebook/Level2Offices.asp?AID=DBM">...</a>`
- XPath: `/a`

#### Rule: [SIA-R18: ARIA states are consistent with element semantics](https://alfa.siteimprove.com/rules/sia-r18)

**Failure 1:**
- Message: The attribute is prohibited for the element on which it is specified

#### Rule: [SIA-R57: Landmarks don't repeat the same content](https://alfa.siteimprove.com/rules/sia-r57)

**Failure 1:**
- Message: The text is not included in a landmark region

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 5.87:1 which is         below the required contrast of 7:1

### https://dbm.maryland.gov/Pages/DivAuditCompliance.aspx

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)

**Failure 1:**
- Message: Target has insufficient size
- HTML: `<button class="mdgov-headerBanner__btn" aria-expanded="false" aria-controls="official-banner">...</button>`
- XPath: `/button[@class="mdgov-headerBanner__btn"]`

**Failure 2:**
- Message: Target has insufficient size
- HTML: `<a href="https://dbm.maryland.gov/Pages/ContactUs.aspx" target="_blank">Contact Us</a>`
- XPath: `/a`

#### Rule: [SIA-R18: ARIA states are consistent with element semantics](https://alfa.siteimprove.com/rules/sia-r18)

**Failure 1:**
- Message: The attribute is prohibited for the element on which it is specified

#### Rule: [SIA-R57: Landmarks don't repeat the same content](https://alfa.siteimprove.com/rules/sia-r57)

**Failure 1:**
- Message: The text is not included in a landmark region

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 5.57:1 which is         below the required contrast of 7:1

### https://dbm.maryland.gov/Pages/DivClassSalary.aspx

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)

**Failure 1:**
- Message: Target has insufficient size
- HTML: `<button class="mdgov-headerBanner__btn" aria-expanded="false" aria-controls="official-banner">...</button>`
- XPath: `/button[@class="mdgov-headerBanner__btn"]`

**Failure 2:**
- Message: Target has insufficient size
- HTML: `<a href="https://dbm.maryland.gov/Pages/ContactUs.aspx" target="_blank">Contact Us</a>`
- XPath: `/a`

#### Rule: [SIA-R18: ARIA states are consistent with element semantics](https://alfa.siteimprove.com/rules/sia-r18)

**Failure 1:**
- Message: The attribute is prohibited for the element on which it is specified

#### Rule: [SIA-R57: Landmarks don't repeat the same content](https://alfa.siteimprove.com/rules/sia-r57)

**Failure 1:**
- Message: The text is not included in a landmark region

### https://dbm.maryland.gov/Pages/DivContractMgmt.aspx

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)

**Failure 1:**
- Message: Target has insufficient size
- HTML: `<button class="mdgov-headerBanner__btn" aria-expanded="false" aria-controls="official-banner">...</button>`
- XPath: `/button[@class="mdgov-headerBanner__btn"]`

**Failure 2:**
- Message: Target has insufficient size
- HTML: `<a href="https://dbm.maryland.gov/Pages/ContactUs.aspx" target="_blank">Contact Us</a>`
- XPath: `/a`

#### Rule: [SIA-R18: ARIA states are consistent with element semantics](https://alfa.siteimprove.com/rules/sia-r18)

**Failure 1:**
- Message: The attribute is prohibited for the element on which it is specified

#### Rule: [SIA-R57: Landmarks don't repeat the same content](https://alfa.siteimprove.com/rules/sia-r57)

**Failure 1:**
- Message: The text is not included in a landmark region

### https://dbm.maryland.gov/Pages/DivEmployeeBen.aspx

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)

**Failure 1:**
- Message: Target has insufficient size
- HTML: `<button class="mdgov-headerBanner__btn" aria-expanded="false" aria-controls="official-banner">...</button>`
- XPath: `/button[@class="mdgov-headerBanner__btn"]`

**Failure 2:**
- Message: Target has insufficient size
- HTML: `<a href="https://dbm.maryland.gov/Pages/ContactUs.aspx" target="_blank">Contact Us</a>`
- XPath: `/a`

#### Rule: [SIA-R18: ARIA states are consistent with element semantics](https://alfa.siteimprove.com/rules/sia-r18)

**Failure 1:**
- Message: The attribute is prohibited for the element on which it is specified

#### Rule: [SIA-R57: Landmarks don't repeat the same content](https://alfa.siteimprove.com/rules/sia-r57)

**Failure 1:**
- Message: The text is not included in a landmark region

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 5.57:1 which is         below the required contrast of 7:1

### https://dbm.maryland.gov/Pages/DivMgmtPersSvces.aspx

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)

**Failure 1:**
- Message: Target has insufficient size
- HTML: `<button class="mdgov-headerBanner__btn" aria-expanded="false" aria-controls="official-banner">...</button>`
- XPath: `/button[@class="mdgov-headerBanner__btn"]`

**Failure 2:**
- Message: Target has insufficient size
- HTML: `<a href="https://dbm.maryland.gov/Pages/ContactUs.aspx" target="_blank">Contact Us</a>`
- XPath: `/a`

#### Rule: [SIA-R18: ARIA states are consistent with element semantics](https://alfa.siteimprove.com/rules/sia-r18)

**Failure 1:**
- Message: The attribute is prohibited for the element on which it is specified

#### Rule: [SIA-R57: Landmarks don't repeat the same content](https://alfa.siteimprove.com/rules/sia-r57)

**Failure 1:**
- Message: The text is not included in a landmark region

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 5.57:1 which is         below the required contrast of 7:1

### https://dbm.maryland.gov/Pages/DivSec.aspx

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)

**Failure 1:**
- Message: Target has insufficient size
- HTML: `<button class="mdgov-headerBanner__btn" aria-expanded="false" aria-controls="official-banner">...</button>`
- XPath: `/button[@class="mdgov-headerBanner__btn"]`

**Failure 2:**
- Message: Target has insufficient size
- HTML: `<a href="/Pages/AboutDBM.aspx" target="_blank">About DBM</a>`
- XPath: `/a`

#### Rule: [SIA-R18: ARIA states are consistent with element semantics](https://alfa.siteimprove.com/rules/sia-r18)

**Failure 1:**
- Message: The attribute is prohibited for the element on which it is specified

#### Rule: [SIA-R57: Landmarks don't repeat the same content](https://alfa.siteimprove.com/rules/sia-r57)

**Failure 1:**
- Message: The text is not included in a landmark region

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 4.95:1 which is         below the required contrast of 7:1

### https://dbm.maryland.gov/Pages/ManagingResultsMaryland.aspx

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)

**Failure 1:**
- Message: Target has insufficient size
- HTML: `<button class="mdgov-headerBanner__btn" aria-expanded="false" aria-controls="official-banner">...</button>`
- XPath: `/button[@class="mdgov-headerBanner__btn"]`

**Failure 2:**
- Message: Target has insufficient size
- HTML: `<a href="https://governor.maryland.gov/priorities/Documents/2024%20State%20Plan.pdf" target="_blank">...</a>`
- XPath: `/a`

#### Rule: [SIA-R18: ARIA states are consistent with element semantics](https://alfa.siteimprove.com/rules/sia-r18)

**Failure 1:**
- Message: The attribute is prohibited for the element on which it is specified

#### Rule: [SIA-R57: Landmarks don't repeat the same content](https://alfa.siteimprove.com/rules/sia-r57)

**Failure 1:**
- Message: The text is not included in a landmark region

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 4.95:1 which is         below the required contrast of 7:1

### https://dbm.maryland.gov/Pages/regulations.aspx

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)

**Failure 1:**
- Message: Target has insufficient size
- HTML: `<button class="mdgov-headerBanner__btn" aria-expanded="false" aria-controls="official-banner">...</button>`
- XPath: `/button[@class="mdgov-headerBanner__btn"]`

**Failure 2:**
- Message: Target has insufficient size
- HTML: `<a href="https://dbm.maryland.gov/Pages/ContactUs.aspx" target="_blank">Contact Us</a>`
- XPath: `/a`

#### Rule: [SIA-R18: ARIA states are consistent with element semantics](https://alfa.siteimprove.com/rules/sia-r18)

**Failure 1:**
- Message: The attribute is prohibited for the element on which it is specified

#### Rule: [SIA-R57: Landmarks don't repeat the same content](https://alfa.siteimprove.com/rules/sia-r57)

**Failure 1:**
- Message: The text is not included in a landmark region

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 4.95:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R78: Headings of same level have text content between them](https://alfa.siteimprove.com/rules/sia-r78)

**Failure 1:**
- Message: There is no content between this heading and the next
- HTML: `<h2 class="mdgov-section__heading">Regulations</h2>`
- XPath: `/h2[@class="mdgov-section__heading"]`

### https://dbm.maryland.gov/dbmsitearchives/Documents/Furlough/FY2010OMalleyLetter.aspx

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)

**Failure 1:**
- Message: Target has insufficient size
- HTML: `<button class="mdgov-headerBanner__btn" aria-expanded="false" aria-controls="official-banner">...</button>`
- XPath: `/button[@class="mdgov-headerBanner__btn"]`

**Failure 2:**
- Message: Target has insufficient size
- HTML: `<a href="https://dbm.maryland.gov/Pages/ContactUs.aspx" target="_blank">Contact Us</a>`
- XPath: `/a`

#### Rule: [SIA-R18: ARIA states are consistent with element semantics](https://alfa.siteimprove.com/rules/sia-r18)

**Failure 1:**
- Message: The attribute is prohibited for the element on which it is specified

#### Rule: [SIA-R57: Landmarks don't repeat the same content](https://alfa.siteimprove.com/rules/sia-r57)

**Failure 1:**
- Message: The text is not included in a landmark region

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 5.87:1 which is         below the required contrast of 7:1

### https://dbm.maryland.gov/dbmsitearchives/Documents/Furlough/FurloughEmployeeNotices.aspx

#### Rule: [SIA-R18: ARIA states are consistent with element semantics](https://alfa.siteimprove.com/rules/sia-r18)

**Failure 1:**
- Message: The attribute is prohibited for the element on which it is specified

#### Rule: [SIA-R57: Landmarks don't repeat the same content](https://alfa.siteimprove.com/rules/sia-r57)

**Failure 1:**
- Message: The text is not included in a landmark region

## Detailed Failure Information (axe)

### https://dbm.maryland.gov/Pages/AboutDBM.aspx

#### Rule: [aria-prohibited-attr](https://dequeuniversity.com/rules/axe/4.11/aria-prohibited-attr?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div id="ctl00_PlaceHolderMain_ctl00__ControlWrapper_RichHtmlField" class="ms-rtestate-field" style="display:inline" aria-labelledby="ctl00_PlaceHolderMain_ctl00_label"></div>`
- XPath: `#ctl00_PlaceHolderMain_ctl00__ControlWrapper_RichHtmlField`

**Failure 2:**
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div id="ctl00_PlaceHolderMain_ctl02__ControlWrapper_RichHtmlField" class="ms-rtestate-field" style="display:inline" aria-labelledby="ctl00_PlaceHolderMain_ctl02_label"></div>`
- XPath: `#ctl00_PlaceHolderMain_ctl02__ControlWrapper_RichHtmlField`

**Failure 3:**
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div id="ctl00_PlaceHolderMain_ctl04__ControlWrapper_RichHtmlField" class="ms-rtestate-field" style="display:inline" aria-labelledby="ctl00_PlaceHolderMain_ctl04_label"></div>`
- XPath: `#ctl00_PlaceHolderMain_ctl04__ControlWrapper_RichHtmlField`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="http://www.maryland.gov/pages/accessibility.aspx" class="sr-only sr-only-focusable show-on-focus" target="_blank">Accessibility Information</a>`
- XPath: `.sr-only-focusable.show-on-focus.sr-only:nth-child(2)`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<a class="mdgov-entNav__logo" href="https://www.maryland.gov/">         <img src="https://stage.egov.maryland.gov/doit/ewf/widgets/header/v2/img/mdgov-logo-2018-black.png" alt="Maryland.gov">     </a>`
- XPath: `.mdgov-entNav__logo`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<ul class="mdgov-entNavList">`
- XPath: `.mdgov-entNavList`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<div id="ctl00_PlaceHolderMain_ctl03__ControlWrapper_RichHtmlField" class="ms-rtestate-field" style="display:inline" aria-labelledby="ctl00_PlaceHolderMain_ctl03_label">`
- XPath: `#ctl00_PlaceHolderMain_ctl03__ControlWrapper_RichHtmlField`

### https://dbm.maryland.gov/Pages/ContactUs.aspx

#### Rule: [aria-prohibited-attr](https://dequeuniversity.com/rules/axe/4.11/aria-prohibited-attr?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div id="ctl00_PlaceHolderMain_ctl00__ControlWrapper_RichHtmlField" class="ms-rtestate-field" style="display:inline" aria-labelledby="ctl00_PlaceHolderMain_ctl00_label"></div>`
- XPath: `#ctl00_PlaceHolderMain_ctl00__ControlWrapper_RichHtmlField`

**Failure 2:**
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div id="ctl00_PlaceHolderMain_ctl01__ControlWrapper_RichHtmlField" class="ms-rtestate-field" style="display:inline" aria-labelledby="ctl00_PlaceHolderMain_ctl01_label"></div>`
- XPath: `#ctl00_PlaceHolderMain_ctl01__ControlWrapper_RichHtmlField`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="http://www.maryland.gov/pages/accessibility.aspx" class="sr-only sr-only-focusable show-on-focus" target="_blank">Accessibility Information</a>`
- XPath: `.sr-only-focusable.show-on-focus.sr-only:nth-child(2)`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<a class="mdgov-entNav__logo" href="https://www.maryland.gov/">         <img src="https://stage.egov.maryland.gov/doit/ewf/widgets/header/v2/img/mdgov-logo-2018-black.png" alt="Maryland.gov">     </a>`
- XPath: `.mdgov-entNav__logo`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<ul class="mdgov-entNavList">`
- XPath: `.mdgov-entNavList`

### https://dbm.maryland.gov/Pages/DivAuditCompliance.aspx

#### Rule: [aria-prohibited-attr](https://dequeuniversity.com/rules/axe/4.11/aria-prohibited-attr?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div id="ctl00_PlaceHolderMain_ctl00__ControlWrapper_RichHtmlField" class="ms-rtestate-field" style="display:inline" aria-labelledby="ctl00_PlaceHolderMain_ctl00_label"></div>`
- XPath: `#ctl00_PlaceHolderMain_ctl00__ControlWrapper_RichHtmlField`

**Failure 2:**
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div id="ctl00_PlaceHolderMain_ctl01__ControlWrapper_RichHtmlField" class="ms-rtestate-field" style="display:inline" aria-labelledby="ctl00_PlaceHolderMain_ctl01_label"></div>`
- XPath: `#ctl00_PlaceHolderMain_ctl01__ControlWrapper_RichHtmlField`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="http://www.maryland.gov/pages/accessibility.aspx" class="sr-only sr-only-focusable show-on-focus" target="_blank">Accessibility Information</a>`
- XPath: `.sr-only-focusable.show-on-focus.sr-only:nth-child(2)`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<a class="mdgov-entNav__logo" href="https://www.maryland.gov/">         <img src="https://stage.egov.maryland.gov/doit/ewf/widgets/header/v2/img/mdgov-logo-2018-black.png" alt="Maryland.gov">     </a>`
- XPath: `.mdgov-entNav__logo`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<ul class="mdgov-entNavList">`
- XPath: `.mdgov-entNavList`

### https://dbm.maryland.gov/Pages/DivClassSalary.aspx

#### Rule: [aria-prohibited-attr](https://dequeuniversity.com/rules/axe/4.11/aria-prohibited-attr?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div id="ctl00_PlaceHolderMain_ctl01__ControlWrapper_RichHtmlField" class="ms-rtestate-field" style="display:inline" aria-labelledby="ctl00_PlaceHolderMain_ctl01_label"></div>`
- XPath: `#ctl00_PlaceHolderMain_ctl01__ControlWrapper_RichHtmlField`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="http://www.maryland.gov/pages/accessibility.aspx" class="sr-only sr-only-focusable show-on-focus" target="_blank">Accessibility Information</a>`
- XPath: `.sr-only-focusable.show-on-focus.sr-only:nth-child(2)`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<a class="mdgov-entNav__logo" href="https://www.maryland.gov/">         <img src="https://stage.egov.maryland.gov/doit/ewf/widgets/header/v2/img/mdgov-logo-2018-black.png" alt="Maryland.gov">     </a>`
- XPath: `.mdgov-entNav__logo`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<ul class="mdgov-entNavList">`
- XPath: `.mdgov-entNavList`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<div id="ctl00_PlaceHolderMain_ctl00__ControlWrapper_RichHtmlField" class="ms-rtestate-field" style="display:inline" aria-labelledby="ctl00_PlaceHolderMain_ctl00_label"><p>​​<br></p></div>`
- XPath: `#ctl00_PlaceHolderMain_ctl00__ControlWrapper_RichHtmlField`

### https://dbm.maryland.gov/Pages/DivContractMgmt.aspx

#### Rule: [aria-prohibited-attr](https://dequeuniversity.com/rules/axe/4.11/aria-prohibited-attr?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div id="ctl00_PlaceHolderMain_ctl01__ControlWrapper_RichHtmlField" class="ms-rtestate-field" style="display:inline" aria-labelledby="ctl00_PlaceHolderMain_ctl01_label"></div>`
- XPath: `#ctl00_PlaceHolderMain_ctl01__ControlWrapper_RichHtmlField`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="http://www.maryland.gov/pages/accessibility.aspx" class="sr-only sr-only-focusable show-on-focus" target="_blank">Accessibility Information</a>`
- XPath: `.sr-only-focusable.show-on-focus.sr-only:nth-child(2)`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<a class="mdgov-entNav__logo" href="https://www.maryland.gov/">         <img src="https://stage.egov.maryland.gov/doit/ewf/widgets/header/v2/img/mdgov-logo-2018-black.png" alt="Maryland.gov">     </a>`
- XPath: `.mdgov-entNav__logo`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<ul class="mdgov-entNavList">`
- XPath: `.mdgov-entNavList`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<div id="ctl00_PlaceHolderMain_ctl00__ControlWrapper_RichHtmlField" class="ms-rtestate-field" style="display:inline" aria-labelledby="ctl00_PlaceHolderMain_ctl00_label"><p>​​​<br></p></div>`
- XPath: `#ctl00_PlaceHolderMain_ctl00__ControlWrapper_RichHtmlField`

### https://dbm.maryland.gov/Pages/DivEmployeeBen.aspx

#### Rule: [aria-prohibited-attr](https://dequeuniversity.com/rules/axe/4.11/aria-prohibited-attr?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div id="ctl00_PlaceHolderMain_ctl00__ControlWrapper_RichHtmlField" class="ms-rtestate-field" style="display:inline" aria-labelledby="ctl00_PlaceHolderMain_ctl00_label"></div>`
- XPath: `#ctl00_PlaceHolderMain_ctl00__ControlWrapper_RichHtmlField`

**Failure 2:**
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div id="ctl00_PlaceHolderMain_ctl01__ControlWrapper_RichHtmlField" class="ms-rtestate-field" style="display:inline" aria-labelledby="ctl00_PlaceHolderMain_ctl01_label"></div>`
- XPath: `#ctl00_PlaceHolderMain_ctl01__ControlWrapper_RichHtmlField`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="http://www.maryland.gov/pages/accessibility.aspx" class="sr-only sr-only-focusable show-on-focus" target="_blank">Accessibility Information</a>`
- XPath: `.sr-only-focusable.show-on-focus.sr-only:nth-child(2)`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<a class="mdgov-entNav__logo" href="https://www.maryland.gov/">         <img src="https://stage.egov.maryland.gov/doit/ewf/widgets/header/v2/img/mdgov-logo-2018-black.png" alt="Maryland.gov">     </a>`
- XPath: `.mdgov-entNav__logo`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<ul class="mdgov-entNavList">`
- XPath: `.mdgov-entNavList`

### https://dbm.maryland.gov/Pages/DivMgmtPersSvces.aspx

#### Rule: [aria-prohibited-attr](https://dequeuniversity.com/rules/axe/4.11/aria-prohibited-attr?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div id="ctl00_PlaceHolderMain_ctl00__ControlWrapper_RichHtmlField" class="ms-rtestate-field" style="display:inline" aria-labelledby="ctl00_PlaceHolderMain_ctl00_label"></div>`
- XPath: `#ctl00_PlaceHolderMain_ctl00__ControlWrapper_RichHtmlField`

**Failure 2:**
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div id="ctl00_PlaceHolderMain_ctl01__ControlWrapper_RichHtmlField" class="ms-rtestate-field" style="display:inline" aria-labelledby="ctl00_PlaceHolderMain_ctl01_label"></div>`
- XPath: `#ctl00_PlaceHolderMain_ctl01__ControlWrapper_RichHtmlField`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="http://www.maryland.gov/pages/accessibility.aspx" class="sr-only sr-only-focusable show-on-focus" target="_blank">Accessibility Information</a>`
- XPath: `.sr-only-focusable.show-on-focus.sr-only:nth-child(2)`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<a class="mdgov-entNav__logo" href="https://www.maryland.gov/">         <img src="https://stage.egov.maryland.gov/doit/ewf/widgets/header/v2/img/mdgov-logo-2018-black.png" alt="Maryland.gov">     </a>`
- XPath: `.mdgov-entNav__logo`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<ul class="mdgov-entNavList">`
- XPath: `.mdgov-entNavList`

### https://dbm.maryland.gov/Pages/DivSec.aspx

#### Rule: [aria-prohibited-attr](https://dequeuniversity.com/rules/axe/4.11/aria-prohibited-attr?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div id="ctl00_PlaceHolderMain_ctl01__ControlWrapper_RichHtmlField" class="ms-rtestate-field" style="display:inline" aria-labelledby="ctl00_PlaceHolderMain_ctl01_label"></div>`
- XPath: `#ctl00_PlaceHolderMain_ctl01__ControlWrapper_RichHtmlField`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="http://www.maryland.gov/pages/accessibility.aspx" class="sr-only sr-only-focusable show-on-focus" target="_blank">Accessibility Information</a>`
- XPath: `.sr-only-focusable.show-on-focus.sr-only:nth-child(2)`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<a class="mdgov-entNav__logo" href="https://www.maryland.gov/">         <img src="https://stage.egov.maryland.gov/doit/ewf/widgets/header/v2/img/mdgov-logo-2018-black.png" alt="Maryland.gov">     </a>`
- XPath: `.mdgov-entNav__logo`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<ul class="mdgov-entNavList">`
- XPath: `.mdgov-entNavList`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<div id="ctl00_PlaceHolderMain_ctl00__ControlWrapper_RichHtmlField" class="ms-rtestate-field" style="display:inline" aria-labelledby="ctl00_PlaceHolderMain_ctl00_label">`
- XPath: `#ctl00_PlaceHolderMain_ctl00__ControlWrapper_RichHtmlField`

### https://dbm.maryland.gov/Pages/ManagingResultsMaryland.aspx

#### Rule: [aria-prohibited-attr](https://dequeuniversity.com/rules/axe/4.11/aria-prohibited-attr?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div id="ctl00_PlaceHolderMain_ctl01__ControlWrapper_RichHtmlField" class="ms-rtestate-field" style="display:inline" aria-labelledby="ctl00_PlaceHolderMain_ctl01_label"></div>`
- XPath: `#ctl00_PlaceHolderMain_ctl01__ControlWrapper_RichHtmlField`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="http://www.maryland.gov/pages/accessibility.aspx" class="sr-only sr-only-focusable show-on-focus" target="_blank">Accessibility Information</a>`
- XPath: `.sr-only-focusable.show-on-focus.sr-only:nth-child(2)`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<a class="mdgov-entNav__logo" href="https://www.maryland.gov/">         <img src="https://stage.egov.maryland.gov/doit/ewf/widgets/header/v2/img/mdgov-logo-2018-black.png" alt="Maryland.gov">     </a>`
- XPath: `.mdgov-entNav__logo`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<ul class="mdgov-entNavList">`
- XPath: `.mdgov-entNavList`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<div id="ctl00_PlaceHolderMain_ctl00__ControlWrapper_RichHtmlField" class="ms-rtestate-field" style="display:inline" aria-labelledby="ctl00_PlaceHolderMain_ctl00_label">`
- XPath: `#ctl00_PlaceHolderMain_ctl00__ControlWrapper_RichHtmlField`

### https://dbm.maryland.gov/Pages/regulations.aspx

#### Rule: [aria-prohibited-attr](https://dequeuniversity.com/rules/axe/4.11/aria-prohibited-attr?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div id="ctl00_PlaceHolderMain_ctl00__ControlWrapper_RichHtmlField" class="ms-rtestate-field" style="display:inline" aria-labelledby="ctl00_PlaceHolderMain_ctl00_label"></div>`
- XPath: `#ctl00_PlaceHolderMain_ctl00__ControlWrapper_RichHtmlField`

**Failure 2:**
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div id="ctl00_PlaceHolderMain_ctl02__ControlWrapper_RichHtmlField" class="ms-rtestate-field" style="display:inline" aria-labelledby="ctl00_PlaceHolderMain_ctl02_label"></div>`
- XPath: `#ctl00_PlaceHolderMain_ctl02__ControlWrapper_RichHtmlField`

**Failure 3:**
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div id="ctl00_PlaceHolderMain_ctl04__ControlWrapper_RichHtmlField" class="ms-rtestate-field" style="display:inline" aria-labelledby="ctl00_PlaceHolderMain_ctl04_label"></div>`
- XPath: `#ctl00_PlaceHolderMain_ctl04__ControlWrapper_RichHtmlField`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="http://www.maryland.gov/pages/accessibility.aspx" class="sr-only sr-only-focusable show-on-focus" target="_blank">Accessibility Information</a>`
- XPath: `.sr-only-focusable.show-on-focus.sr-only:nth-child(2)`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<a class="mdgov-entNav__logo" href="https://www.maryland.gov/">         <img src="https://stage.egov.maryland.gov/doit/ewf/widgets/header/v2/img/mdgov-logo-2018-black.png" alt="Maryland.gov">     </a>`
- XPath: `.mdgov-entNav__logo`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<ul class="mdgov-entNavList">`
- XPath: `.mdgov-entNavList`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<div id="ctl00_PlaceHolderMain_ctl03__ControlWrapper_RichHtmlField" class="ms-rtestate-field" style="display:inline" aria-labelledby="ctl00_PlaceHolderMain_ctl03_label">`
- XPath: `#ctl00_PlaceHolderMain_ctl03__ControlWrapper_RichHtmlField`

### https://dbm.maryland.gov/dbmsitearchives/Documents/Furlough/FY2010OMalleyLetter.aspx

#### Rule: [aria-prohibited-attr](https://dequeuniversity.com/rules/axe/4.11/aria-prohibited-attr?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div id="pageSectionNav" class="nav flex-column" aria-labelledby="mdgovSectionMenuHeading">                                  </div>`
- XPath: `#pageSectionNav`

**Failure 2:**
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div id="ctl00_PlaceHolderMain_ctl00__ControlWrapper_RichHtmlField" class="ms-rtestate-field" style="display:inline" aria-labelledby="ctl00_PlaceHolderMain_ctl00_label"></div>`
- XPath: `#ctl00_PlaceHolderMain_ctl00__ControlWrapper_RichHtmlField`

**Failure 3:**
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div id="ctl00_PlaceHolderMain_ctl01__ControlWrapper_RichHtmlField" class="ms-rtestate-field" style="display:inline" aria-labelledby="ctl00_PlaceHolderMain_ctl01_label"></div>`
- XPath: `#ctl00_PlaceHolderMain_ctl01__ControlWrapper_RichHtmlField`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="http://www.maryland.gov/pages/accessibility.aspx" class="sr-only sr-only-focusable show-on-focus" target="_blank">Accessibility Information</a>`
- XPath: `.sr-only-focusable.show-on-focus.sr-only:nth-child(2)`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<a class="mdgov-entNav__logo" href="https://www.maryland.gov/">         <img src="https://stage.egov.maryland.gov/doit/ewf/widgets/header/v2/img/mdgov-logo-2018-black.png" alt="Maryland.gov">     </a>`
- XPath: `.mdgov-entNav__logo`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<ul class="mdgov-entNavList">`
- XPath: `.mdgov-entNavList`

### https://dbm.maryland.gov/dbmsitearchives/Documents/Furlough/FurloughEmployeeNotices.aspx

#### Rule: [aria-prohibited-attr](https://dequeuniversity.com/rules/axe/4.11/aria-prohibited-attr?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div id="pageSectionNav" class="nav flex-column" aria-labelledby="mdgovSectionMenuHeading">                                   </div>`
- XPath: `#pageSectionNav`

**Failure 2:**
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div id="ctl00_PlaceHolderMain_ctl00__ControlWrapper_RichHtmlField" class="ms-rtestate-field" style="display:inline" aria-labelledby="ctl00_PlaceHolderMain_ctl00_label"></div>`
- XPath: `#ctl00_PlaceHolderMain_ctl00__ControlWrapper_RichHtmlField`

**Failure 3:**
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div id="ctl00_PlaceHolderMain_ctl02__ControlWrapper_RichHtmlField" class="ms-rtestate-field" style="display:inline" aria-labelledby="ctl00_PlaceHolderMain_ctl02_label"></div>`
- XPath: `#ctl00_PlaceHolderMain_ctl02__ControlWrapper_RichHtmlField`

**Failure 4:**
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div id="ctl00_PlaceHolderMain_ctl04__ControlWrapper_RichHtmlField" class="ms-rtestate-field" style="display:inline" aria-labelledby="ctl00_PlaceHolderMain_ctl04_label"></div>`
- XPath: `#ctl00_PlaceHolderMain_ctl04__ControlWrapper_RichHtmlField`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="http://www.maryland.gov/pages/accessibility.aspx" class="sr-only sr-only-focusable show-on-focus" target="_blank">Accessibility Information</a>`
- XPath: `.sr-only-focusable.show-on-focus.sr-only:nth-child(2)`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<a class="mdgov-entNav__logo" href="https://www.maryland.gov/">         <img src="https://stage.egov.maryland.gov/doit/ewf/widgets/header/v2/img/mdgov-logo-2018-black.png" alt="Maryland.gov">     </a>`
- XPath: `.mdgov-entNav__logo`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<ul class="mdgov-entNavList">`
- XPath: `.mdgov-entNavList`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<div id="ctl00_PlaceHolderMain_ctl03__ControlWrapper_RichHtmlField" class="ms-rtestate-field" style="display:inline" aria-labelledby="ctl00_PlaceHolderMain_ctl03_label">`
- XPath: `#ctl00_PlaceHolderMain_ctl03__ControlWrapper_RichHtmlField`

