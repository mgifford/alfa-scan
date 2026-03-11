# Scan Report: edf-feph.org

- Issue: https://github.com/mgifford/open-scans/issues/121
- Submitted by: mgifford
- Scanned at: 2026-03-11T17:47:04.576Z
- Engines used: AXE, QUALWEB
- Scan duration: 17.4 minutes
- Total URLs submitted: 100
- Accepted public URLs: 100
- Rejected URLs: 0
- 🌙 Dark mode: None of the scanned URLs support `prefers-color-scheme: dark`
- ALFA outcomes: 0 passed, 0 failed, 0 cantTell, 0 inapplicable
- axe outcomes: 9827 passed, 79 failed, 100 cantTell, 939 inapplicable
- Equal Access outcomes: 0 passed, 0 failed (0 unique, 0 duplicate), 0 cantTell, 0 inapplicable
- AccessLint outcomes: 0 passed, 0 failed (0 unique, 0 duplicate), 0 cantTell, 0 inapplicable
- QualWeb outcomes: 6544 passed, 41 failed, 1488 cantTell, 17 inapplicable
- Duplicate findings caught by later scanners: 28

## 🎯 Priority: Pages with Most Errors

Focus your efforts on these pages to make the biggest impact (combined scanner unique failures):

| Page | axe Unique | QualWeb | Total Unique | Page Title |
|---|---:|---:|---:|---|
| [View Page](https://www.edf-feph.org/a-look-at-the-european-commission-web-accessibility-action-plan/) | 9 | 8 | **17** | A look at the European Commission Web Accessibility Action Plan - European Disability Forum |
| [View Page](https://www.edf-feph.org/meps-focus-on-improving-accessibility-and-employment-opportunities-for-persons-with-disabilities-in-the-european-parliament/) | 7 | 3 | **10** | MEPs focus on improving accessibility and employment opportunities for persons with disabilities in the European Parliament - European Disability Forum |
| [View Page](https://www.edf-feph.org/edf-welcomes-the-european-commissions-draft-standardisation-request-in-support-of-the-european-accessibility-act/) | 5 | 3 | **8** | EDF welcomes the European Commission’s draft standardisation request in support of the European Accessibility Act - European Disability Forum |
| [View Page](https://www.edf-feph.org/publications/edf-welcomes-the-european-commissions-draft-standardisation-request-in-support-of-the-european-accessibility-act/) | 5 | 3 | **8** | EDF statement on European Commission’s draft standardisation request for the European Accessibility Act - European Disability Forum |
| [View Page](https://www.edf-feph.org/interview-with-mep-dita-charanzova-we-need-to-make-accessibility-part-of-the-training-in-computer-science-and-public-administration-classes/) | 5 | 3 | **8** | Interview with MEP Dita Charanzová - &quot;We need to make accessibility part of the training in computer science and public administration classes” - European Disability Forum |
| [View Page](https://www.edf-feph.org/join-the-european-accessibility-summit-2023-for-the-latest-insights-on-accessible-technology/) | 5 | 3 | **8** | Join the European Accessibility Summit 2023 for the Latest Insights on Accessible Technology - European Disability Forum |
| [View Page](https://www.edf-feph.org/meps-require-major-digital-companies-to-ensure-accessibility-for-persons-with-disabilities/) | 5 | 3 | **8** | MEPs require major digital companies to ensure accessibility for persons with disabilities - European Disability Forum |
| [View Page](https://www.edf-feph.org/bringing-accessibility-and-design-for-all-to-higher-education-curriculum-findings-from-the-athena-projects-transnational-report/) | 4 | 3 | **7** | Bringing Accessibility and Design for All to Higher Education Curriculum: Findings from the ATHENA Project’s Transnational Report - European Disability Forum |
| [View Page](https://www.edf-feph.org/23-member-states-are-running-late-with-the-european-accessibility-act/) | 4 | 3 | **7** | 24 Member States are running late with the European Accessibility Act - European Disability Forum |
| [View Page](https://www.edf-feph.org/accessibility-from-law-to-practice-conclusions-of-fireside-chat-between-edf-and-oracle/) | 4 | 3 | **7** | Accessibility from law to practice: conclusions of fireside-chat between EDF and Oracle - European Disability Forum |

## 🔧 Priority: Most Common Issues (ALFA)

These ALFA accessibility issues appear most frequently across your pages:

✅ No ALFA failed rules detected!

## 🔧 Priority: Most Common Issues (axe)

These axe accessibility issues appear most frequently across your pages:

| Rule | Pages Affected | Documentation |
|---|---:|---|
| landmark-unique | **16** of 100 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/landmark-unique) |
| link-name | **11** of 100 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/link-name) |
| heading-order | **5** of 100 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/heading-order) |
| page-has-heading-one | **5** of 100 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/page-has-heading-one) |
| image-alt | **2** of 100 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/image-alt) |
| landmark-one-main | **2** of 100 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/landmark-one-main) |
| meta-viewport | **2** of 100 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/meta-viewport) |
| region | **2** of 100 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/region) |
| empty-heading | **1** of 100 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/empty-heading) |
| aria-hidden-focus | **1** of 100 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/aria-hidden-focus) |

> 💡 **Tip**: Click on the rule documentation links to learn how to fix each issue. Consider fixing the most common issues first for maximum impact.

> 🤖 **Future Enhancement**: This report will soon include AI-powered fix suggestions for authenticated GitHub users (opt-in only, no auto-run AI).

## 🔍 Cross-Page Patterns: Common HTML Issues

These HTML patterns cause the same accessibility errors across multiple pages. **Fix the pattern once in your codebase to fix it everywhere!**

### 🎯 Top Patterns to Fix (Highest Impact)

#### Pattern 1: Affects 16 page(s) - 16 occurrence(s)

**Scanner**: axe
**Rule**: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate
**Issue**: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

**HTML Pattern**:
```html
<nav class="topbar-accessibility__container">
```

**XPath** (use in browser DevTools):
```
.topbar-accessibility__container
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.topbar-accessibility__container')`
5. The element will be highlighted

**Affected Pages**:
- https://edf-feph.org/bringing-accessibility-and-design-for-all-to-higher-education-curriculum-findings-from-the-athena-projects-transnational-report/
- https://edf-feph.org/edf-welcomes-the-european-commissions-draft-standardisation-request-in-support-of-the-european-accessibility-act/
- https://edf-feph.org/publications/edf-welcomes-the-european-commissions-draft-standardisation-request-in-support-of-the-european-accessibility-act/
- https://edf-feph.org/events-slug/european-accessibility-act-peer-support-meeting-9th-october-2024/
- https://edf-feph.org/23-member-states-are-running-late-with-the-european-accessibility-act/
- *...and 11 more page(s)*

---

#### Pattern 2: Affects 5 page(s) - 5 occurrence(s)

**Scanner**: axe
**Rule**: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate
**Issue**: Page should contain a level-one heading

**HTML Pattern**:
```html
<html lang="en">
```

**XPath** (use in browser DevTools):
```
html
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('html')`
5. The element will be highlighted

**Affected Pages**:
- https://edf-feph.org/events-slug/european-accessibility-act-peer-support-meeting-9th-october-2024/
- https://edf-feph.org/accessibility-database/
- https://edf-feph.org/accessibility-feedback-best-practice/
- https://edf-feph.org/accessibility-nonprofit-tech-accelerator-2023-grant-program/
- https://edf-feph.org/letter-ensuring-equal-access-to-relevant-european-accessibility-standards-by-persons-with-disabilities/

---

#### Pattern 3: Affects 4 page(s) - 4 occurrence(s)

**Scanner**: axe
**Rule**: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate
**Issue**: Heading levels should only increase by one

**HTML Pattern**:
```html
<h3 class="h4">Share</h3>
```

**XPath** (use in browser DevTools):
```
.article__share > h3
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.article__share > h3')`
5. The element will be highlighted

**Affected Pages**:
- https://edf-feph.org/edf-welcomes-the-european-commissions-draft-standardisation-request-in-support-of-the-european-accessibility-act/
- https://edf-feph.org/interview-with-mep-dita-charanzova-we-need-to-make-accessibility-part-of-the-training-in-computer-science-and-public-administration-classes/
- https://edf-feph.org/join-the-european-accessibility-summit-2023-for-the-latest-insights-on-accessible-technology/
- https://edf-feph.org/meps-require-major-digital-companies-to-ensure-accessibility-for-persons-with-disabilities/

---

#### Pattern 4: Affects 2 page(s) - 2 occurrence(s)

**Scanner**: axe
**Rule**: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**Issue**: Images must have alternative text

**HTML Pattern**:
```html
<img id="img" width="250" src="https://o2swit.ch/assets/tiger.svg">
```

**XPath** (use in browser DevTools):
```
#img
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('#img')`
5. The element will be highlighted

**Affected Pages**:
- https://edf-feph.org/meps-focus-on-improving-accessibility-and-employment-opportunities-for-persons-with-disabilities-in-the-european-parliament/
- https://edf-feph.org/neb-accessibility-statement/

---

#### Pattern 5: Affects 2 page(s) - 2 occurrence(s)

**Scanner**: axe
**Rule**: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate
**Issue**: Document should have one main landmark

**HTML Pattern**:
```html
<html lang="en-US" class="fontawesome-i2svg-active fontawesome-i2svg-complete">
```

**XPath** (use in browser DevTools):
```
html
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('html')`
5. The element will be highlighted

**Affected Pages**:
- https://edf-feph.org/meps-focus-on-improving-accessibility-and-employment-opportunities-for-persons-with-disabilities-in-the-european-parliament/
- https://edf-feph.org/neb-accessibility-statement/

---

#### Pattern 6: Affects 2 page(s) - 2 occurrence(s)

**Scanner**: axe
**Rule**: [meta-viewport](https://dequeuniversity.com/rules/axe/4.11/meta-viewport?application=playwright)
**Impact**: moderate
**Issue**: Zooming and scaling must not be disabled

**HTML Pattern**:
```html
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
```

**XPath** (use in browser DevTools):
```
meta[name="viewport"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('meta[name="viewport"]')`
5. The element will be highlighted

**Affected Pages**:
- https://edf-feph.org/meps-focus-on-improving-accessibility-and-employment-opportunities-for-persons-with-disabilities-in-the-european-parliament/
- https://edf-feph.org/neb-accessibility-statement/

---

#### Pattern 7: Affects 2 page(s) - 2 occurrence(s)

**Scanner**: axe
**Rule**: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate
**Issue**: All page content should be contained by landmarks

**HTML Pattern**:
```html
<h1>
```

**XPath** (use in browser DevTools):
```
h1
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('h1')`
5. The element will be highlighted

**Affected Pages**:
- https://edf-feph.org/meps-focus-on-improving-accessibility-and-employment-opportunities-for-persons-with-disabilities-in-the-european-parliament/
- https://edf-feph.org/neb-accessibility-statement/

---

#### Pattern 8: Affects 2 page(s) - 2 occurrence(s)

**Scanner**: axe
**Rule**: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate
**Issue**: All page content should be contained by landmarks

**HTML Pattern**:
```html
<p style="margin-top:2em;" data-i18n-key="lead">
```

**XPath** (use in browser DevTools):
```
p[data-i18n-key="lead"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('p[data-i18n-key="lead"]')`
5. The element will be highlighted

**Affected Pages**:
- https://edf-feph.org/meps-focus-on-improving-accessibility-and-employment-opportunities-for-persons-with-disabilities-in-the-european-parliament/
- https://edf-feph.org/neb-accessibility-statement/

---

#### Pattern 9: Affects 2 page(s) - 2 occurrence(s)

**Scanner**: axe
**Rule**: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate
**Issue**: All page content should be contained by landmarks

**HTML Pattern**:
```html
<a href="https://faq.o2switch.fr/hebergement-mutualise/tutoriels-cpanel/tiger-protect" target="_blank">
                <span data-i18n-key="link">How to manage this security with the Tiger Protect Tool on cPanel ?</span>
              </a>
```

**XPath** (use in browser DevTools):
```
p:nth-child(3) > a
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('p:nth-child(3) > a')`
5. The element will be highlighted

**Affected Pages**:
- https://edf-feph.org/meps-focus-on-improving-accessibility-and-employment-opportunities-for-persons-with-disabilities-in-the-european-parliament/
- https://edf-feph.org/neb-accessibility-statement/

---

#### Pattern 10: Affects 2 page(s) - 2 occurrence(s)

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
div:nth-child(2)
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('div:nth-child(2)')`
5. The element will be highlighted

**Affected Pages**:
- https://edf-feph.org/meps-focus-on-improving-accessibility-and-employment-opportunities-for-persons-with-disabilities-in-the-european-parliament/
- https://edf-feph.org/neb-accessibility-statement/

---

> 💡 **Pro Tip**: These patterns likely come from shared components or templates in your codebase. Fix them in the component/template source, and the fix will propagate to all affected pages.

## 📊 Detailed Results

Complete scan results for all tested pages:

| Submitted URL | Final URL | Status | HTTP | Redirected | Time (ms) | axe Unique | ALFA Unique | Equal Access Unique | AccessLint Unique | Duplicates | Notes |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|
| https://edf-feph.org/bringing-accessibility-and-design-for-all-to-higher-education-curriculum-findings-from-the-athena-projects-transnational-report/ | https://www.edf-feph.org/bringing-accessibility-and-design-for-all-to-higher-education-curriculum-findings-from-the-athena-projects-transnational-report/ | OK | 200 | yes | 10730 | 4 | 0 | 0 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-unique, link-name |
| https://edf-feph.org/edf-welcomes-the-european-commissions-draft-standardisation-request-in-support-of-the-european-accessibility-act/ | https://www.edf-feph.org/edf-welcomes-the-european-commissions-draft-standardisation-request-in-support-of-the-european-accessibility-act/ | OK | 200 | yes | 9400 | 5 | 0 | 0 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: heading-order, landmark-unique, link-name |
| https://edf-feph.org/publications/edf-welcomes-the-european-commissions-draft-standardisation-request-in-support-of-the-european-accessibility-act/ | https://www.edf-feph.org/publications/edf-welcomes-the-european-commissions-draft-standardisation-request-in-support-of-the-european-accessibility-act/ | OK | 200 | yes | 8765 | 5 | 0 | 0 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: heading-order, landmark-unique, link-name |
| https://edf-feph.org/ | https://edf-feph.org/ | FAIL | - | no | 10493 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://edf-feph.org/accessibility-act-enters-into-force-products-and-services-must-be-accessible/ | https://edf-feph.org/accessibility-act-enters-into-force-products-and-services-must-be-accessible/ | FAIL | - | no | 10495 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://edf-feph.org/apply-european-disability-forum-and-oracle-e-accessibility-scholarship-2019-2020/ | https://edf-feph.org/apply-european-disability-forum-and-oracle-e-accessibility-scholarship-2019-2020/ | FAIL | - | no | 10493 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://edf-feph.org/audio-visual-media-services-directive-avmsd-has-it-made-progress-for-media-accessibility/ | https://edf-feph.org/audio-visual-media-services-directive-avmsd-has-it-made-progress-for-media-accessibility/ | FAIL | - | no | 10496 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://edf-feph.org/call-for-tenders-accessibility-audit-service/ | https://edf-feph.org/call-for-tenders-accessibility-audit-service/ | FAIL | - | no | 10495 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://edf-feph.org/conference-how-to-make-sure-tax-payers-money-is-spent-on-accessibility/ | https://edf-feph.org/conference-how-to-make-sure-tax-payers-money-is-spent-on-accessibility/ | FAIL | - | no | 10494 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://edf-feph.org/digital-services-act-fails-to-ensure-accessibility-for-persons-with-disabilities-edf-calls-the-eu-to-rectify-this-political-agreement/ | https://edf-feph.org/digital-services-act-fails-to-ensure-accessibility-for-persons-with-disabilities-edf-calls-the-eu-to-rectify-this-political-agreement/ | FAIL | - | no | 10494 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://edf-feph.org/facebook-edf-policy-roundtable-on-the-european-accessibility-act/ | https://edf-feph.org/facebook-edf-policy-roundtable-on-the-european-accessibility-act/ | FAIL | - | no | 10494 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://edf-feph.org/funding-opportunity-ai-for-accessibility-grants-program-apply-now/ | https://edf-feph.org/funding-opportunity-ai-for-accessibility-grants-program-apply-now/ | FAIL | - | no | 10495 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://edf-feph.org/events-slug/audio-visual-media-services-directive-avmsd-has-it-made-progress-for-media-accessibility/ | https://edf-feph.org/events-slug/audio-visual-media-services-directive-avmsd-has-it-made-progress-for-media-accessibility/ | FAIL | - | no | 10493 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://edf-feph.org/events-slug/facebook-edf-policy-roundtable-on-the-european-accessibility-act/ | https://edf-feph.org/events-slug/facebook-edf-policy-roundtable-on-the-european-accessibility-act/ | FAIL | - | no | 10495 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://edf-feph.org/faqs/what-accessibility-requirements-apply-to-products/ | https://edf-feph.org/faqs/what-accessibility-requirements-apply-to-products/ | FAIL | - | no | 10493 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://edf-feph.org/faqs/what-accessibility-requirements-apply-to-services/ | https://edf-feph.org/faqs/what-accessibility-requirements-apply-to-services/ | FAIL | - | no | 10493 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://edf-feph.org/partners/global-accessibility-reporting-initiative-by-the-mobile-wireless-forum/ | https://edf-feph.org/partners/global-accessibility-reporting-initiative-by-the-mobile-wireless-forum/ | FAIL | - | no | 10495 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://edf-feph.org/publications/edf-position-paper-on-european-commissions-draft-standardisation-request-for-the-european-accessibility-act/ | https://edf-feph.org/publications/edf-position-paper-on-european-commissions-draft-standardisation-request-for-the-european-accessibility-act/ | FAIL | - | no | 10494 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://edf-feph.org/coherence-in-standardisation-to-support-accessibility/ | https://edf-feph.org/coherence-in-standardisation-to-support-accessibility/ | FAIL | - | no | 10496 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://edf-feph.org/new-report-finds-serious-gaps-in-disability-inclusive-eu-aid/ | https://edf-feph.org/new-report-finds-serious-gaps-in-disability-inclusive-eu-aid/ | FAIL | - | no | 10493 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://edf-feph.org/events-slug/european-accessibility-act-peer-support-meeting-9th-october-2024/ | https://www.edf-feph.org/events-slug/european-accessibility-act-peer-support-meeting-9th-october-2024/ | OK | 200 | yes | 7485 | 2 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-unique, page-has-heading-one |
| https://edf-feph.org/events-slug/european-accessibility-act-peer-support-meeting-state-of-play-of-standards-and-infringement-procedures-6-december-2023/ | https://edf-feph.org/events-slug/european-accessibility-act-peer-support-meeting-state-of-play-of-standards-and-infringement-procedures-6-december-2023/ | FAIL | - | no | 10492 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://edf-feph.org/events-slug/european-accessibility-act-peer-support-meeting/ | https://edf-feph.org/events-slug/european-accessibility-act-peer-support-meeting/ | FAIL | - | no | 10493 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://edf-feph.org/events-slug/european-accessibility-act-peer-support-online-meeting-1-2/ | https://edf-feph.org/events-slug/european-accessibility-act-peer-support-online-meeting-1-2/ | FAIL | - | no | 10493 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://edf-feph.org/events-slug/european-accessibility-act-peer-support-online-meeting-2-standardisation/ | https://edf-feph.org/events-slug/european-accessibility-act-peer-support-online-meeting-2-standardisation/ | FAIL | - | no | 10493 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://edf-feph.org/events-slug/european-accessibility-act-peer-support-online-meeting-3/ | https://edf-feph.org/events-slug/european-accessibility-act-peer-support-online-meeting-3/ | FAIL | - | no | 10494 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://edf-feph.org/events-slug/we-cant-afford-to-fund-more-barriers-do-eu-funds-support-accessibility-in-europe-advocacy-event-in-the-european-parliament/ | https://edf-feph.org/events-slug/we-cant-afford-to-fund-more-barriers-do-eu-funds-support-accessibility-in-europe-advocacy-event-in-the-european-parliament/ | FAIL | - | no | 10493 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://edf-feph.org/blog/a-pathway-of-support-to-find-an-accessible-job-in-latvia-andriis-story/ | https://edf-feph.org/blog/a-pathway-of-support-to-find-an-accessible-job-in-latvia-andriis-story/ | FAIL | - | no | 10494 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://edf-feph.org/edf-and-nadp-request-a-meeting-with-commissioner-dalli-to-discuss-eu-actions-to-support-children-and-adults-with-disabilities-in-the-ukraine-war/ | https://edf-feph.org/edf-and-nadp-request-a-meeting-with-commissioner-dalli-to-discuss-eu-actions-to-support-children-and-adults-with-disabilities-in-the-ukraine-war/ | FAIL | - | no | 10494 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://edf-feph.org/newsroom-news-43-meps-coronavirus-response-investment-initiative-must-fund-support-services-0/ | https://edf-feph.org/newsroom-news-43-meps-coronavirus-response-investment-initiative-must-fund-support-services-0/ | FAIL | - | no | 10493 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://edf-feph.org/request-take-immediate-actions-mobilise-crii-eu-funds-guarantee-continuity-care-and-support-services/ | https://edf-feph.org/request-take-immediate-actions-mobilise-crii-eu-funds-guarantee-continuity-care-and-support-services/ | FAIL | - | no | 10494 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://edf-feph.org/16-november-using-artificial-intelligence-to-enhance-accessibility-opportunities-and-risks-of-emerging-technologies-for-persons-with-disabilities/ | https://edf-feph.org/16-november-using-artificial-intelligence-to-enhance-accessibility-opportunities-and-risks-of-emerging-technologies-for-persons-with-disabilities/ | FAIL | - | no | 10494 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://edf-feph.org/23-member-states-are-running-late-with-the-european-accessibility-act/ | https://www.edf-feph.org/23-member-states-are-running-late-with-the-european-accessibility-act/ | OK | 200 | yes | 11444 | 4 | 0 | 0 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-unique, link-name |
| https://edf-feph.org/a-look-at-the-european-commission-web-accessibility-action-plan/ | https://www.edf-feph.org/a-look-at-the-european-commission-web-accessibility-action-plan/ | OK | 200 | yes | 8235 | 9 | 0 | 0 | 0 | 6 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: empty-heading, landmark-unique, link-name |
| https://edf-feph.org/accessibility-database/ | https://www.edf-feph.org/accessibility-database/ | OK | 200 | yes | 7818 | 2 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-unique, page-has-heading-one |
| https://edf-feph.org/accessibility-feedback-best-practice/ | https://www.edf-feph.org/accessibility-feedback-best-practice/ | OK | 200 | yes | 7269 | 2 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-unique, page-has-heading-one |
| https://edf-feph.org/accessibility-from-law-to-practice-conclusions-of-fireside-chat-between-edf-and-oracle/ | https://www.edf-feph.org/accessibility-from-law-to-practice-conclusions-of-fireside-chat-between-edf-and-oracle/ | OK | 200 | yes | 9460 | 4 | 0 | 0 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-unique, link-name |
| https://edf-feph.org/accessibility-must-be-present-at-a-high-level-within-political-agendas-accessibleeu-centre/ | https://www.edf-feph.org/accessibility-must-be-present-at-a-high-level-within-political-agendas-accessibleeu-centre/ | OK | 200 | yes | 8310 | 4 | 0 | 0 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-unique, link-name |
| https://edf-feph.org/accessibility-nonprofit-tech-accelerator-2023-grant-program/ | https://www.edf-feph.org/accessibility-nonprofit-tech-accelerator-2023-grant-program/ | OK | 200 | yes | 34336 | 2 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-unique, page-has-heading-one |
| https://edf-feph.org/accessibility-overlays-dont-guarantee-compliance-with-european-legislation/ | https://edf-feph.org/accessibility-overlays-dont-guarantee-compliance-with-european-legislation/ | FAIL | - | no | 10494 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://edf-feph.org/accessibility-statement/ | https://edf-feph.org/accessibility-statement/ | FAIL | - | no | 10492 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://edf-feph.org/accessibility/ | https://edf-feph.org/accessibility/ | FAIL | - | no | 10494 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://edf-feph.org/accessibleeu-centre-a-first-step-towards-an-eu-agency-on-accessibility/ | https://edf-feph.org/accessibleeu-centre-a-first-step-towards-an-eu-agency-on-accessibility/ | FAIL | - | no | 10492 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://edf-feph.org/affordablestandards-eu-needs-to-make-accessibility-standards-affordable/ | https://edf-feph.org/affordablestandards-eu-needs-to-make-accessibility-standards-affordable/ | FAIL | - | no | 10493 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://edf-feph.org/agreement-on-eu-digital-covid-certificate-includes-accessibility-for-persons-with-disabilities/ | https://edf-feph.org/agreement-on-eu-digital-covid-certificate-includes-accessibility-for-persons-with-disabilities/ | FAIL | - | no | 10492 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://edf-feph.org/ai-act-agreement-partial-win-on-accessibility/ | https://edf-feph.org/ai-act-agreement-partial-win-on-accessibility/ | FAIL | - | no | 10494 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://edf-feph.org/ai-act-european-parliament-must-ensure-accessibility-of-artificial-intelligence-systems/ | https://edf-feph.org/ai-act-european-parliament-must-ensure-accessibility-of-artificial-intelligence-systems/ | FAIL | - | no | 10492 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://edf-feph.org/airline-accessibility-statement/ | https://edf-feph.org/airline-accessibility-statement/ | FAIL | - | no | 10494 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://edf-feph.org/airport-accessibility-statement/ | https://edf-feph.org/airport-accessibility-statement/ | FAIL | - | no | 10493 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://edf-feph.org/alde-party-accessibility-results/ | https://edf-feph.org/alde-party-accessibility-results/ | FAIL | - | no | 10491 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://edf-feph.org/artificial-intelligence-act-european-parliament-misses-chance-to-ensure-accessibility/ | https://edf-feph.org/artificial-intelligence-act-european-parliament-misses-chance-to-ensure-accessibility/ | FAIL | - | no | 10493 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://edf-feph.org/blog/empowering-independence-of-persons-with-disabilities-the-essential-role-of-support-services/ | https://edf-feph.org/blog/empowering-independence-of-persons-with-disabilities-the-essential-role-of-support-services/ | FAIL | - | no | 10492 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://edf-feph.org/build-better-lives-campaign-improving-accessibility-and-energy-efficiency-of-buildings/ | https://edf-feph.org/build-better-lives-campaign-improving-accessibility-and-energy-efficiency-of-buildings/ | FAIL | - | no | 10492 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://edf-feph.org/call-for-expression-of-interest-accessibility-expert/ | https://edf-feph.org/call-for-expression-of-interest-accessibility-expert/ | FAIL | - | no | 10495 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://edf-feph.org/call-for-tenders-captioning-at-european-accessibility-summit/ | https://edf-feph.org/call-for-tenders-captioning-at-european-accessibility-summit/ | FAIL | - | no | 10492 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://edf-feph.org/call-for-tenders-providing-for-international-sign-interpretation-at-the-european-accessibility-summit/ | https://edf-feph.org/call-for-tenders-providing-for-international-sign-interpretation-at-the-european-accessibility-summit/ | FAIL | - | no | 10491 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://edf-feph.org/call-for-tenders-review-of-edfs-website-accessibility/ | https://edf-feph.org/call-for-tenders-review-of-edfs-website-accessibility/ | FAIL | - | no | 10494 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://edf-feph.org/ecr-party-accessibility-results/ | https://edf-feph.org/ecr-party-accessibility-results/ | FAIL | - | no | 10491 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://edf-feph.org/edf-and-oracle-award-scholarship-to-student-with-disability-for-designing-research-accessibility-tool/ | https://edf-feph.org/edf-and-oracle-award-scholarship-to-student-with-disability-for-designing-research-accessibility-tool/ | FAIL | - | no | 10492 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://edf-feph.org/edf-anec-webinar-on-accessibility-standards-for-the-built-environment/ | https://edf-feph.org/edf-anec-webinar-on-accessibility-standards-for-the-built-environment/ | FAIL | - | no | 10492 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://edf-feph.org/edf-is-recruiting-an-accessibility-policy-officer/ | https://edf-feph.org/edf-is-recruiting-an-accessibility-policy-officer/ | FAIL | - | no | 10494 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://edf-feph.org/edf-launches-its-online-accessibility-database-focused-on-transport/ | https://edf-feph.org/edf-launches-its-online-accessibility-database-focused-on-transport/ | FAIL | - | no | 10493 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://edf-feph.org/edf-participates-in-iaaps-eu-accessibility-2024-hybrid-event/ | https://edf-feph.org/edf-participates-in-iaaps-eu-accessibility-2024-hybrid-event/ | FAIL | - | no | 10494 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://edf-feph.org/edf-photo-competition-2024-through-the-accessibility-lens-stories-of-barriers-challenges-and-good-practices/ | https://edf-feph.org/edf-photo-competition-2024-through-the-accessibility-lens-stories-of-barriers-challenges-and-good-practices/ | FAIL | - | no | 10492 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://edf-feph.org/edf-response-to-the-european-commission-consultation-on-the-web-accessibility-directive/ | https://edf-feph.org/edf-response-to-the-european-commission-consultation-on-the-web-accessibility-directive/ | FAIL | - | no | 10494 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://edf-feph.org/edf-scorecard-on-the-belgian-presidency-of-the-council-accessibility-accomplished-yet-inconsistent-involvement/ | https://edf-feph.org/edf-scorecard-on-the-belgian-presidency-of-the-council-accessibility-accomplished-yet-inconsistent-involvement/ | FAIL | - | no | 10494 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://edf-feph.org/edf-scorecard-on-the-hungary-eu-presidency-gaps-in-inclusion-and-accessibility-despite-good-communication/ | https://edf-feph.org/edf-scorecard-on-the-hungary-eu-presidency-gaps-in-inclusion-and-accessibility-despite-good-communication/ | FAIL | - | no | 10493 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://edf-feph.org/energy-performance-of-buildings-directive-first-eu-legislation-to-address-accessibility-of-buildings/ | https://edf-feph.org/energy-performance-of-buildings-directive-first-eu-legislation-to-address-accessibility-of-buildings/ | FAIL | - | no | 10494 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://edf-feph.org/eu-accessibility-act/ | https://edf-feph.org/eu-accessibility-act/ | FAIL | - | no | 10494 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://edf-feph.org/eu-green-deal-must-also-include-accessibility-persons-disabilites/ | https://edf-feph.org/eu-green-deal-must-also-include-accessibility-persons-disabilites/ | FAIL | - | no | 10492 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://edf-feph.org/euacessibilitysummit-2024-accessibility-achievements-political-participation-workplace-inclusion/ | https://edf-feph.org/euacessibilitysummit-2024-accessibility-achievements-political-participation-workplace-inclusion/ | FAIL | - | no | 10493 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://edf-feph.org/european-accessibility-summit-2022-from-policy-into-practice/ | https://edf-feph.org/european-accessibility-summit-2022-from-policy-into-practice/ | FAIL | - | no | 10494 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://edf-feph.org/european-accessibility-summit-2024/ | https://edf-feph.org/european-accessibility-summit-2024/ | FAIL | - | no | 10492 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://edf-feph.org/european-accessibility-summit-accessibility-and-the-future-of-work-the-role-of-digital/ | https://edf-feph.org/european-accessibility-summit-accessibility-and-the-future-of-work-the-role-of-digital/ | FAIL | - | no | 10494 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://edf-feph.org/european-accessibility-summit-accessibility-driving-innovation-keynotefirstpanel/ | https://edf-feph.org/european-accessibility-summit-accessibility-driving-innovation-keynotefirstpanel/ | FAIL | - | no | 10492 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://edf-feph.org/european-accessibility-summit-accessibility-in-higher-education-and-gaming/ | https://edf-feph.org/european-accessibility-summit-accessibility-in-higher-education-and-gaming/ | FAIL | - | no | 10492 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://edf-feph.org/european-accessibility-summit-accessibility-meets-artificial-intelligence/ | https://edf-feph.org/european-accessibility-summit-accessibility-meets-artificial-intelligence/ | FAIL | - | no | 10494 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://edf-feph.org/european-accessibility-summit-accessibility-meets-public-procurement/ | https://edf-feph.org/european-accessibility-summit-accessibility-meets-public-procurement/ | FAIL | - | no | 10495 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://edf-feph.org/european-accessibility-summit/ | https://edf-feph.org/european-accessibility-summit/ | FAIL | - | no | 10493 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://edf-feph.org/european-commission-detainees-with-disabilities-should-have-accessibility-measures-access-to-healthcare/ | https://edf-feph.org/european-commission-detainees-with-disabilities-should-have-accessibility-measures-access-to-healthcare/ | FAIL | - | no | 10495 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://edf-feph.org/european-disability-forum-and-oracle-e-accessibility-scholarship-2021/ | https://edf-feph.org/european-disability-forum-and-oracle-e-accessibility-scholarship-2021/ | FAIL | - | no | 10494 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://edf-feph.org/european-greens-accessibility-results/ | https://edf-feph.org/european-greens-accessibility-results/ | FAIL | - | no | 10493 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://edf-feph.org/european-left-accessibility-results/ | https://edf-feph.org/european-left-accessibility-results/ | FAIL | - | no | 10491 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://edf-feph.org/european-parliament-worst-in-class-on-digital-accessibility/ | https://edf-feph.org/european-parliament-worst-in-class-on-digital-accessibility/ | FAIL | - | no | 10493 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://edf-feph.org/european-peoples-party-accessibility-results/ | https://edf-feph.org/european-peoples-party-accessibility-results/ | FAIL | - | no | 10493 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://edf-feph.org/first-european-accessibility-standard-on-built-environment-approved/ | https://edf-feph.org/first-european-accessibility-standard-on-built-environment-approved/ | FAIL | - | no | 10494 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://edf-feph.org/funding-opportunity-access-to-success-organization-labs-accelerator-for-accessibility-startups/ | https://edf-feph.org/funding-opportunity-access-to-success-organization-labs-accelerator-for-accessibility-startups/ | FAIL | - | no | 10494 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://edf-feph.org/funding-opportunity-ai-for-accessibility-low-cost-assistive-technology-program/ | https://edf-feph.org/funding-opportunity-ai-for-accessibility-low-cost-assistive-technology-program/ | FAIL | - | no | 10494 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://edf-feph.org/funds-for-economic-recovery-must-promote-digital-accessibility/ | https://edf-feph.org/funds-for-economic-recovery-must-promote-digital-accessibility/ | FAIL | - | no | 10494 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://edf-feph.org/how-standards-improve-accessibility-in-ict/ | https://edf-feph.org/how-standards-improve-accessibility-in-ict/ | FAIL | - | no | 10494 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://edf-feph.org/how-to-build-capacity-on-accessibility-legislation/ | https://edf-feph.org/how-to-build-capacity-on-accessibility-legislation/ | FAIL | - | no | 10494 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://edf-feph.org/identity-and-democracy-accessibility-results/ | https://edf-feph.org/identity-and-democracy-accessibility-results/ | FAIL | - | no | 10494 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://edf-feph.org/interview-with-mep-adam-kosa-we-have-come-a-long-way-towards-the-complete-accessibility-of-the-european-parliament/ | https://edf-feph.org/interview-with-mep-adam-kosa-we-have-come-a-long-way-towards-the-complete-accessibility-of-the-european-parliament/ | FAIL | - | no | 10493 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://edf-feph.org/interview-with-mep-ciaran-mullooly-we-need-binding-accessibility-standards-for-all-new-public-and-private-housing/ | https://www.edf-feph.org/interview-with-mep-ciaran-mullooly-we-need-binding-accessibility-standards-for-all-new-public-and-private-housing/ | OK | 200 | yes | 13736 | 4 | 0 | 0 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-unique, link-name |
| https://edf-feph.org/interview-with-mep-dita-charanzova-we-need-to-make-accessibility-part-of-the-training-in-computer-science-and-public-administration-classes/ | https://www.edf-feph.org/interview-with-mep-dita-charanzova-we-need-to-make-accessibility-part-of-the-training-in-computer-science-and-public-administration-classes/ | OK | 200 | yes | 8401 | 5 | 0 | 0 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: heading-order, landmark-unique, link-name |
| https://edf-feph.org/join-the-european-accessibility-summit-2023-for-the-latest-insights-on-accessible-technology/ | https://www.edf-feph.org/join-the-european-accessibility-summit-2023-for-the-latest-insights-on-accessible-technology/ | OK | 200 | yes | 8397 | 5 | 0 | 0 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: heading-order, landmark-unique, link-name |
| https://edf-feph.org/letter-ensuring-equal-access-to-relevant-european-accessibility-standards-by-persons-with-disabilities/ | https://www.edf-feph.org/letter-ensuring-equal-access-to-relevant-european-accessibility-standards-by-persons-with-disabilities/ | OK | 200 | yes | 8374 | 3 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-hidden-focus, landmark-unique, page-has-heading-one |
| https://edf-feph.org/meps-focus-on-improving-accessibility-and-employment-opportunities-for-persons-with-disabilities-in-the-european-parliament/ | https://www.edf-feph.org/meps-focus-on-improving-accessibility-and-employment-opportunities-for-persons-with-disabilities-in-the-european-parliament/ | OK | 200 | yes | 7649 | 7 | 0 | 0 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt, landmark-one-main, meta-viewport, region |
| https://edf-feph.org/meps-require-major-digital-companies-to-ensure-accessibility-for-persons-with-disabilities/ | https://www.edf-feph.org/meps-require-major-digital-companies-to-ensure-accessibility-for-persons-with-disabilities/ | OK | 200 | yes | 8520 | 5 | 0 | 0 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: heading-order, landmark-unique, link-name |
| https://edf-feph.org/neb-accessibility-statement/ | https://www.edf-feph.org/neb-accessibility-statement/ | OK | 200 | yes | 7478 | 7 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt, landmark-one-main, meta-viewport, region |

## Detailed Failure Information (ALFA)

## Detailed Failure Information (axe)

### https://edf-feph.org/bringing-accessibility-and-design-for-all-to-higher-education-curriculum-findings-from-the-athena-projects-transnational-report/

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav class="topbar-accessibility__container">`
- XPath: `.topbar-accessibility__container`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a href="https://www.facebook.com/sharer/sharer.php?u=https://www.edf-feph.org/bringing-accessibility-and-design-for-all-to-higher-education-curriculum-findings-from-the-athena-projects-transnational-report/" target="_blank">`
- XPath: `.share > li:nth-child(1) > a[target="_blank"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a href="https://twitter.com/intent/tweet?text=https://www.edf-feph.org/bringing-accessibility-and-design-for-all-to-higher-education-curriculum-findings-from-the-athena-projects-transnational-report/" target="_blank">`
- XPath: `.share > li:nth-child(2) > a[target="_blank"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a href="https://www.linkedin.com/sharing/share-offsite/?url=https://www.edf-feph.org/bringing-accessibility-and-design-for-all-to-higher-education-curriculum-findings-from-the-athena-projects-transnational-report/" target="_blank">`
- XPath: `li:nth-child(3) > a[target="_blank"]`

### https://edf-feph.org/edf-welcomes-the-european-commissions-draft-standardisation-request-in-support-of-the-european-accessibility-act/

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3 class="h4">Share</h3>`
- XPath: `.article__share > h3`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav class="topbar-accessibility__container">`
- XPath: `.topbar-accessibility__container`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a href="https://www.facebook.com/sharer/sharer.php?u=https://www.edf-feph.org/edf-welcomes-the-european-commissions-draft-standardisation-request-in-support-of-the-european-accessibility-act/" target="_blank">`
- XPath: `li:nth-child(1) > a[target="_blank"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a href="https://twitter.com/intent/tweet?text=https://www.edf-feph.org/edf-welcomes-the-european-commissions-draft-standardisation-request-in-support-of-the-european-accessibility-act/" target="_blank">`
- XPath: `li:nth-child(2) > a[target="_blank"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a href="https://www.linkedin.com/sharing/share-offsite/?url=https://www.edf-feph.org/edf-welcomes-the-european-commissions-draft-standardisation-request-in-support-of-the-european-accessibility-act/" target="_blank">`
- XPath: `li:nth-child(3) > a[target="_blank"]`

### https://edf-feph.org/publications/edf-welcomes-the-european-commissions-draft-standardisation-request-in-support-of-the-european-accessibility-act/

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h4>We support:</h4>`
- XPath: `h4:nth-child(2)`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav class="topbar-accessibility__container">`
- XPath: `.topbar-accessibility__container`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a href="https://www.facebook.com/sharer/sharer.php?u=https://www.edf-feph.org/publications/edf-welcomes-the-european-commissions-draft-standardisation-request-in-support-of-the-european-accessibility-act/" target="_blank">`
- XPath: `li:nth-child(1) > a[target="_blank"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a href="https://twitter.com/intent/tweet?text=https://www.edf-feph.org/publications/edf-welcomes-the-european-commissions-draft-standardisation-request-in-support-of-the-european-accessibility-act/" target="_blank">`
- XPath: `li:nth-child(2) > a[target="_blank"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a href="https://www.linkedin.com/sharing/share-offsite/?url=https://www.edf-feph.org/publications/edf-welcomes-the-european-commissions-draft-standardisation-request-in-support-of-the-european-accessibility-act/" target="_blank">`
- XPath: `li:nth-child(3) > a[target="_blank"]`

### https://edf-feph.org/events-slug/european-accessibility-act-peer-support-meeting-9th-october-2024/

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav class="topbar-accessibility__container">`
- XPath: `.topbar-accessibility__container`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Page should contain a level-one heading
- HTML: `<html lang="en">`
- XPath: `html`

### https://edf-feph.org/23-member-states-are-running-late-with-the-european-accessibility-act/

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav class="topbar-accessibility__container">`
- XPath: `.topbar-accessibility__container`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a href="https://www.facebook.com/sharer/sharer.php?u=https://www.edf-feph.org/23-member-states-are-running-late-with-the-european-accessibility-act/" target="_blank">`
- XPath: `li:nth-child(1) > a[target="_blank"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a href="https://twitter.com/intent/tweet?text=https://www.edf-feph.org/23-member-states-are-running-late-with-the-european-accessibility-act/" target="_blank">`
- XPath: `li:nth-child(2) > a[target="_blank"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a href="https://www.linkedin.com/sharing/share-offsite/?url=https://www.edf-feph.org/23-member-states-are-running-late-with-the-european-accessibility-act/" target="_blank">`
- XPath: `li:nth-child(3) > a[target="_blank"]`

### https://edf-feph.org/a-look-at-the-european-commission-web-accessibility-action-plan/

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: Headings should not be empty
- HTML: `<h3></h3>`
- XPath: `h3:nth-child(13)`

**Failure 2:**
- Message: Headings should not be empty
- HTML: `<h3></h3>`
- XPath: `h3:nth-child(18)`

**Failure 3:**
- Message: Headings should not be empty
- HTML: `<h3></h3>`
- XPath: `h3:nth-child(21)`

**Failure 4:**
- Message: Headings should not be empty
- HTML: `<h3></h3>`
- XPath: `h3:nth-child(25)`

**Failure 5:**
- Message: Headings should not be empty
- HTML: `<h2></h2>`
- XPath: `h2:nth-child(29)`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav class="topbar-accessibility__container">`
- XPath: `.topbar-accessibility__container`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a href="https://www.facebook.com/sharer/sharer.php?u=https://www.edf-feph.org/a-look-at-the-european-commission-web-accessibility-action-plan/" target="_blank">`
- XPath: `li:nth-child(1) > a[target="_blank"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a href="https://twitter.com/intent/tweet?text=https://www.edf-feph.org/a-look-at-the-european-commission-web-accessibility-action-plan/" target="_blank">`
- XPath: `li:nth-child(2) > a[target="_blank"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a href="https://www.linkedin.com/sharing/share-offsite/?url=https://www.edf-feph.org/a-look-at-the-european-commission-web-accessibility-action-plan/" target="_blank">`
- XPath: `li:nth-child(3) > a[target="_blank"]`

### https://edf-feph.org/accessibility-database/

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav class="topbar-accessibility__container">`
- XPath: `.topbar-accessibility__container`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Page should contain a level-one heading
- HTML: `<html lang="en">`
- XPath: `html`

### https://edf-feph.org/accessibility-feedback-best-practice/

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav class="topbar-accessibility__container">`
- XPath: `.topbar-accessibility__container`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Page should contain a level-one heading
- HTML: `<html lang="en">`
- XPath: `html`

### https://edf-feph.org/accessibility-from-law-to-practice-conclusions-of-fireside-chat-between-edf-and-oracle/

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav class="topbar-accessibility__container">`
- XPath: `.topbar-accessibility__container`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a href="https://www.facebook.com/sharer/sharer.php?u=https://www.edf-feph.org/accessibility-from-law-to-practice-conclusions-of-fireside-chat-between-edf-and-oracle/" target="_blank">`
- XPath: `li:nth-child(1) > a[target="_blank"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a href="https://twitter.com/intent/tweet?text=https://www.edf-feph.org/accessibility-from-law-to-practice-conclusions-of-fireside-chat-between-edf-and-oracle/" target="_blank">`
- XPath: `li:nth-child(2) > a[target="_blank"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a href="https://www.linkedin.com/sharing/share-offsite/?url=https://www.edf-feph.org/accessibility-from-law-to-practice-conclusions-of-fireside-chat-between-edf-and-oracle/" target="_blank">`
- XPath: `li:nth-child(3) > a[target="_blank"]`

### https://edf-feph.org/accessibility-must-be-present-at-a-high-level-within-political-agendas-accessibleeu-centre/

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav class="topbar-accessibility__container">`
- XPath: `.topbar-accessibility__container`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a href="https://www.facebook.com/sharer/sharer.php?u=https://www.edf-feph.org/accessibility-must-be-present-at-a-high-level-within-political-agendas-accessibleeu-centre/" target="_blank">`
- XPath: `li:nth-child(1) > a[target="_blank"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a href="https://twitter.com/intent/tweet?text=https://www.edf-feph.org/accessibility-must-be-present-at-a-high-level-within-political-agendas-accessibleeu-centre/" target="_blank">`
- XPath: `li:nth-child(2) > a[target="_blank"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a href="https://www.linkedin.com/sharing/share-offsite/?url=https://www.edf-feph.org/accessibility-must-be-present-at-a-high-level-within-political-agendas-accessibleeu-centre/" target="_blank">`
- XPath: `li:nth-child(3) > a[target="_blank"]`

### https://edf-feph.org/accessibility-nonprofit-tech-accelerator-2023-grant-program/

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav class="topbar-accessibility__container">`
- XPath: `.topbar-accessibility__container`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Page should contain a level-one heading
- HTML: `<html lang="en">`
- XPath: `html`

### https://edf-feph.org/interview-with-mep-ciaran-mullooly-we-need-binding-accessibility-standards-for-all-new-public-and-private-housing/

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav class="topbar-accessibility__container">`
- XPath: `.topbar-accessibility__container`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a href="https://www.facebook.com/sharer/sharer.php?u=https://www.edf-feph.org/interview-with-mep-ciaran-mullooly-we-need-binding-accessibility-standards-for-all-new-public-and-private-housing/" target="_blank">`
- XPath: `li:nth-child(1) > a[target="_blank"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a href="https://twitter.com/intent/tweet?text=https://www.edf-feph.org/interview-with-mep-ciaran-mullooly-we-need-binding-accessibility-standards-for-all-new-public-and-private-housing/" target="_blank">`
- XPath: `li:nth-child(2) > a[target="_blank"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a href="https://www.linkedin.com/sharing/share-offsite/?url=https://www.edf-feph.org/interview-with-mep-ciaran-mullooly-we-need-binding-accessibility-standards-for-all-new-public-and-private-housing/" target="_blank">`
- XPath: `li:nth-child(3) > a[target="_blank"]`

### https://edf-feph.org/interview-with-mep-dita-charanzova-we-need-to-make-accessibility-part-of-the-training-in-computer-science-and-public-administration-classes/

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3 class="h4">Share</h3>`
- XPath: `.article__share > h3`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav class="topbar-accessibility__container">`
- XPath: `.topbar-accessibility__container`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a href="https://www.facebook.com/sharer/sharer.php?u=https://www.edf-feph.org/interview-with-mep-dita-charanzova-we-need-to-make-accessibility-part-of-the-training-in-computer-science-and-public-administration-classes/" target="_blank">`
- XPath: `li:nth-child(1) > a[target="_blank"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a href="https://twitter.com/intent/tweet?text=https://www.edf-feph.org/interview-with-mep-dita-charanzova-we-need-to-make-accessibility-part-of-the-training-in-computer-science-and-public-administration-classes/" target="_blank">`
- XPath: `li:nth-child(2) > a[target="_blank"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a href="https://www.linkedin.com/sharing/share-offsite/?url=https://www.edf-feph.org/interview-with-mep-dita-charanzova-we-need-to-make-accessibility-part-of-the-training-in-computer-science-and-public-administration-classes/" target="_blank">`
- XPath: `li:nth-child(3) > a[target="_blank"]`

### https://edf-feph.org/join-the-european-accessibility-summit-2023-for-the-latest-insights-on-accessible-technology/

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3 class="h4">Share</h3>`
- XPath: `.article__share > h3`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav class="topbar-accessibility__container">`
- XPath: `.topbar-accessibility__container`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a href="https://www.facebook.com/sharer/sharer.php?u=https://www.edf-feph.org/join-the-european-accessibility-summit-2023-for-the-latest-insights-on-accessible-technology/" target="_blank">`
- XPath: `li:nth-child(1) > a[target="_blank"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a href="https://twitter.com/intent/tweet?text=https://www.edf-feph.org/join-the-european-accessibility-summit-2023-for-the-latest-insights-on-accessible-technology/" target="_blank">`
- XPath: `li:nth-child(2) > a[target="_blank"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a href="https://www.linkedin.com/sharing/share-offsite/?url=https://www.edf-feph.org/join-the-european-accessibility-summit-2023-for-the-latest-insights-on-accessible-technology/" target="_blank">`
- XPath: `li:nth-child(3) > a[target="_blank"]`

### https://edf-feph.org/letter-ensuring-equal-access-to-relevant-european-accessibility-standards-by-persons-with-disabilities/

#### Rule: [aria-hidden-focus](https://dequeuniversity.com/rules/axe/4.11/aria-hidden-focus?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: ARIA hidden element must not be focusable or contain focusable elements
- HTML: `<button class="burger" type="button" aria-expanded="false" aria-hidden="true">       <span class="burger__bar"></span>       <span class="burger__bar"></span>       <span class="burger__bar"></span>       <span class="sr-only">Menu</span>     </button>`
- XPath: `.burger`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav class="topbar-accessibility__container">`
- XPath: `.topbar-accessibility__container`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Page should contain a level-one heading
- HTML: `<html lang="en">`
- XPath: `html`

### https://edf-feph.org/meps-focus-on-improving-accessibility-and-employment-opportunities-for-persons-with-disabilities-in-the-european-parliament/

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img id="img" width="250" src="https://o2swit.ch/assets/tiger.svg">`
- XPath: `#img`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html lang="en-US" class="fontawesome-i2svg-active fontawesome-i2svg-complete">`
- XPath: `html`

#### Rule: [meta-viewport](https://dequeuniversity.com/rules/axe/4.11/meta-viewport?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Zooming and scaling must not be disabled
- HTML: `<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">`
- XPath: `meta[name="viewport"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h1>`
- XPath: `h1`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p style="margin-top:2em;" data-i18n-key="lead">`
- XPath: `p[data-i18n-key="lead"]`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="https://faq.o2switch.fr/hebergement-mutualise/tutoriels-cpanel/tiger-protect" target="_blank">                 <span data-i18n-key="link">How to manage this security with the Tiger Protect Tool on cPanel ?</span>               </a>`
- XPath: `p:nth-child(3) > a`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<div>`
- XPath: `div:nth-child(2)`

### https://edf-feph.org/meps-require-major-digital-companies-to-ensure-accessibility-for-persons-with-disabilities/

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3 class="h4">Share</h3>`
- XPath: `.article__share > h3`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav class="topbar-accessibility__container">`
- XPath: `.topbar-accessibility__container`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a href="https://www.facebook.com/sharer/sharer.php?u=https://www.edf-feph.org/meps-require-major-digital-companies-to-ensure-accessibility-for-persons-with-disabilities/" target="_blank">`
- XPath: `li:nth-child(1) > a[target="_blank"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a href="https://twitter.com/intent/tweet?text=https://www.edf-feph.org/meps-require-major-digital-companies-to-ensure-accessibility-for-persons-with-disabilities/" target="_blank">`
- XPath: `li:nth-child(2) > a[target="_blank"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a href="https://www.linkedin.com/sharing/share-offsite/?url=https://www.edf-feph.org/meps-require-major-digital-companies-to-ensure-accessibility-for-persons-with-disabilities/" target="_blank">`
- XPath: `li:nth-child(3) > a[target="_blank"]`

### https://edf-feph.org/neb-accessibility-statement/

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img id="img" width="250" src="https://o2swit.ch/assets/tiger.svg">`
- XPath: `#img`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html lang="en-US" class="fontawesome-i2svg-active fontawesome-i2svg-complete">`
- XPath: `html`

#### Rule: [meta-viewport](https://dequeuniversity.com/rules/axe/4.11/meta-viewport?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Zooming and scaling must not be disabled
- HTML: `<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">`
- XPath: `meta[name="viewport"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h1>`
- XPath: `h1`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p style="margin-top:2em;" data-i18n-key="lead">`
- XPath: `p[data-i18n-key="lead"]`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="https://faq.o2switch.fr/hebergement-mutualise/tutoriels-cpanel/tiger-protect" target="_blank">                 <span data-i18n-key="link">How to manage this security with the Tiger Protect Tool on cPanel ?</span>               </a>`
- XPath: `p:nth-child(3) > a`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<div>`
- XPath: `div:nth-child(2)`

