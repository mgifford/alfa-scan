# Scan Report: fosdem.org

- Issue: https://github.com/mgifford/open-scans/issues/138
- Submitted by: mgifford
- Scanned at: 2026-03-14T00:39:05.494Z
- Engines used: AXE, QUALWEB
- Scan duration: 11.4 minutes
- Total URLs submitted: 100
- Accepted public URLs: 100
- Rejected URLs: 0
- 🌙 Dark mode: None of the scanned URLs support `prefers-color-scheme: dark`
- ALFA outcomes: 0 passed, 0 failed, 0 cantTell, 0 inapplicable
- axe outcomes: 31736 passed, 5212 failed, 654 cantTell, 5856 inapplicable
- Equal Access outcomes: 0 passed, 0 failed (0 unique, 0 duplicate), 0 cantTell, 0 inapplicable
- AccessLint outcomes: 0 passed, 0 failed (0 unique, 0 duplicate), 0 cantTell, 0 inapplicable
- QualWeb outcomes: 14011 passed, 7689 failed, 11573 cantTell, 210 inapplicable
- Duplicate findings caught by later scanners: 7342

## 🎯 Pages with Most Errors

Focus your efforts on these pages to make the biggest impact (combined scanner unique failures):

| Page | axe Unique | QualWeb | Total Unique | Page Title |
|---|---:|---:|---:|---|
| [View Page](https://fosdem.org/2026/faq/) | 93 | 117 | **210** | FOSDEM 2026 - Frequently Asked Questions |
| [View Page](https://fosdem.org/2026/schedule/room/k4401/) | 63 | 95 | **158** | FOSDEM 2026 - K.4.401 |
| [View Page](https://fosdem.org/2026/schedule/event/9GLCAE-the_saga_of_official_binary_packages_for_gentoo_linux/) | 66 | 88 | **154** | FOSDEM 2026 - The saga of official binary packages for Gentoo Linux |
| [View Page](https://fosdem.org/2026/schedule/event/GSNU89-teleportal/) | 66 | 87 | **153** | FOSDEM 2026 - Teleportal: A real-time collaborative editing framework |
| [View Page](https://fosdem.org/2026/schedule/event/QCFHVU-introduction_the_open_source_eu_policy_devroom/) | 64 | 88 | **152** | FOSDEM 2026 - Introduction the Open Source & EU Policy devroom |
| [View Page](https://fosdem.org/2026/schedule/event/FYVUB8-a_short_story_of_supporting_microsoft_exchange_in_thunderbird/) | 63 | 87 | **150** | FOSDEM 2026 - A short story of supporting Microsoft Exchange in Thunderbird |
| [View Page](https://fosdem.org/2026/schedule/speaker/thomas_schwinge/) | 65 | 85 | **150** | FOSDEM 2026 - Thomas Schwinge |
| [View Page](https://fosdem.org/2026/schedule/event/SQGLW7-fedora-on-riscv/) | 62 | 86 | **148** | FOSDEM 2026 - State of the Arch: Fedora on RISC-V |
| [View Page](https://fosdem.org/2026/schedule/event/KPHKNU-bringing-bsd-applications-on-linux/) | 61 | 87 | **148** | FOSDEM 2026 - Bringing BSD Applications on Linux container platforms with urunc |
| [View Page](https://fosdem.org/2026/schedule/event/QKNMJN-package-management-in-the-hands-of-users/) | 61 | 85 | **146** | FOSDEM 2026 - Package management in the hands of users: dream and reality |

## 🔧 Most Common Issues (ALFA)

These ALFA accessibility issues appear most frequently across your pages:

✅ No ALFA failed rules detected!

## 🔧 Most Common Issues (axe)

These axe accessibility issues appear most frequently across your pages:

| Rule | Pages Affected | Documentation |
|---|---:|---|
| color-contrast | **99** of 100 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/color-contrast) |
| label | **99** of 100 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/label) |
| landmark-one-main | **99** of 100 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/landmark-one-main) |
| region | **99** of 100 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/region) |
| heading-order | **59** of 100 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/heading-order) |
| link-in-text-block | **53** of 100 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/link-in-text-block) |
| empty-heading | **39** of 100 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/empty-heading) |
| image-alt | **11** of 100 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/image-alt) |
| empty-table-header | **2** of 100 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/empty-table-header) |

> 💡 **Tip**: Click on the rule documentation links to learn how to fix each issue. Consider fixing the most common issues first for maximum impact.

> 🤖 **Future Enhancement**: This report will soon include AI-powered fix suggestions for authenticated GitHub users (opt-in only, no auto-run AI).

## 🔍 Cross-Page Patterns: Common HTML Issues

These HTML patterns cause the same accessibility errors across multiple pages. **Fix the pattern once in your codebase to fix it everywhere!**

### 🎯 Top Patterns to Fix (Highest Impact)

#### Pattern 1: Affects 99 page(s) - 198 occurrence(s)

**Scanner**: axe
**Rule**: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**Issue**: Elements must meet minimum color contrast ratio thresholds

**HTML Pattern**:
```html
<a href="/2026/stands/">Stands</a>
```

**XPath** (use in browser DevTools):
```
li:nth-child(5) > a[href$="stands/"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('li:nth-child(5) > a[href$="stands/"]')`
5. The element will be highlighted

**Affected Pages**:
- https://fosdem.org/2026/practical/accessibility/
- https://fosdem.org/2026/schedule/event/ANGFQX-our_freedoms_depend_on_accessibility/
- https://fosdem.org/2026/schedule/event/D9RRZC-otp-finds-a-way/
- https://fosdem.org/2026/schedule/track/search/
- https://fosdem.org/2026/contact/
- *...and 94 more page(s)*

---

#### Pattern 2: Affects 99 page(s) - 198 occurrence(s)

**Scanner**: axe
**Rule**: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**Issue**: Elements must meet minimum color contrast ratio thresholds

**HTML Pattern**:
```html
<a href="/2026/volunteer/">Volunteer</a>
```

**XPath** (use in browser DevTools):
```
li:nth-child(6) > a[href$="volunteer/"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('li:nth-child(6) > a[href$="volunteer/"]')`
5. The element will be highlighted

**Affected Pages**:
- https://fosdem.org/2026/practical/accessibility/
- https://fosdem.org/2026/schedule/event/ANGFQX-our_freedoms_depend_on_accessibility/
- https://fosdem.org/2026/schedule/event/D9RRZC-otp-finds-a-way/
- https://fosdem.org/2026/schedule/track/search/
- https://fosdem.org/2026/contact/
- *...and 94 more page(s)*

---

#### Pattern 3: Affects 99 page(s) - 197 occurrence(s)

**Scanner**: axe
**Rule**: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**Issue**: Elements must meet minimum color contrast ratio thresholds

**HTML Pattern**:
```html
<a href="/2026/about/">About</a>
```

**XPath** (use in browser DevTools):
```
li:nth-child(2) > a[href$="about/"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('li:nth-child(2) > a[href$="about/"]')`
5. The element will be highlighted

**Affected Pages**:
- https://fosdem.org/2026/practical/accessibility/
- https://fosdem.org/2026/schedule/event/ANGFQX-our_freedoms_depend_on_accessibility/
- https://fosdem.org/2026/schedule/event/D9RRZC-otp-finds-a-way/
- https://fosdem.org/2026/schedule/track/search/
- https://fosdem.org/2026/contact/
- *...and 94 more page(s)*

---

#### Pattern 4: Affects 99 page(s) - 99 occurrence(s)

**Scanner**: axe
**Rule**: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**Issue**: Elements must meet minimum color contrast ratio thresholds

**HTML Pattern**:
```html
<a href="/2026/news/">News</a>
```

**XPath** (use in browser DevTools):
```
li:nth-child(3) > a[href$="news/"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('li:nth-child(3) > a[href$="news/"]')`
5. The element will be highlighted

**Affected Pages**:
- https://fosdem.org/2026/practical/accessibility/
- https://fosdem.org/2026/schedule/event/ANGFQX-our_freedoms_depend_on_accessibility/
- https://fosdem.org/2026/schedule/event/D9RRZC-otp-finds-a-way/
- https://fosdem.org/2026/schedule/track/search/
- https://fosdem.org/2026/contact/
- *...and 94 more page(s)*

---

#### Pattern 5: Affects 99 page(s) - 99 occurrence(s)

**Scanner**: axe
**Rule**: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**Issue**: Elements must meet minimum color contrast ratio thresholds

**HTML Pattern**:
```html
<a href="/2026/schedule/">Schedule</a>
```

**XPath** (use in browser DevTools):
```
li:nth-child(4) > a[href$="schedule/"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('li:nth-child(4) > a[href$="schedule/"]')`
5. The element will be highlighted

**Affected Pages**:
- https://fosdem.org/2026/practical/accessibility/
- https://fosdem.org/2026/schedule/event/ANGFQX-our_freedoms_depend_on_accessibility/
- https://fosdem.org/2026/schedule/event/D9RRZC-otp-finds-a-way/
- https://fosdem.org/2026/schedule/track/search/
- https://fosdem.org/2026/contact/
- *...and 94 more page(s)*

---

#### Pattern 6: Affects 99 page(s) - 99 occurrence(s)

**Scanner**: axe
**Rule**: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**Issue**: Elements must meet minimum color contrast ratio thresholds

**HTML Pattern**:
```html
<a href="/2026/">FOSDEM 2026</a>
```

**XPath** (use in browser DevTools):
```
.breadcrumbs > li:nth-child(1) > a[href="/2026/"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.breadcrumbs > li:nth-child(1) > a[href="/2026/"]')`
5. The element will be highlighted

**Affected Pages**:
- https://fosdem.org/2026/practical/accessibility/
- https://fosdem.org/2026/schedule/event/ANGFQX-our_freedoms_depend_on_accessibility/
- https://fosdem.org/2026/schedule/event/D9RRZC-otp-finds-a-way/
- https://fosdem.org/2026/schedule/track/search/
- https://fosdem.org/2026/contact/
- *...and 94 more page(s)*

---

#### Pattern 7: Affects 99 page(s) - 99 occurrence(s)

**Scanner**: axe
**Rule**: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**Issue**: Elements must meet minimum color contrast ratio thresholds

**HTML Pattern**:
```html
<a accesskey="1" href="/2026/">Home</a>
```

**XPath** (use in browser DevTools):
```
a[accesskey="1"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('a[accesskey="1"]')`
5. The element will be highlighted

**Affected Pages**:
- https://fosdem.org/2026/practical/accessibility/
- https://fosdem.org/2026/schedule/event/ANGFQX-our_freedoms_depend_on_accessibility/
- https://fosdem.org/2026/schedule/event/D9RRZC-otp-finds-a-way/
- https://fosdem.org/2026/schedule/track/search/
- https://fosdem.org/2026/contact/
- *...and 94 more page(s)*

---

#### Pattern 8: Affects 99 page(s) - 99 occurrence(s)

**Scanner**: axe
**Rule**: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**Issue**: Elements must meet minimum color contrast ratio thresholds

**HTML Pattern**:
```html
<a accesskey="2" href="/2026/news/">News</a>
```

**XPath** (use in browser DevTools):
```
a[accesskey="2"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('a[accesskey="2"]')`
5. The element will be highlighted

**Affected Pages**:
- https://fosdem.org/2026/practical/accessibility/
- https://fosdem.org/2026/schedule/event/ANGFQX-our_freedoms_depend_on_accessibility/
- https://fosdem.org/2026/schedule/event/D9RRZC-otp-finds-a-way/
- https://fosdem.org/2026/schedule/track/search/
- https://fosdem.org/2026/contact/
- *...and 94 more page(s)*

---

#### Pattern 9: Affects 99 page(s) - 99 occurrence(s)

**Scanner**: axe
**Rule**: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**Issue**: Elements must meet minimum color contrast ratio thresholds

**HTML Pattern**:
```html
<a href="/2026/about/sponsors/">Sponsors</a>
```

**XPath** (use in browser DevTools):
```
li:nth-child(4) > a[href$="sponsors/"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('li:nth-child(4) > a[href$="sponsors/"]')`
5. The element will be highlighted

**Affected Pages**:
- https://fosdem.org/2026/practical/accessibility/
- https://fosdem.org/2026/schedule/event/ANGFQX-our_freedoms_depend_on_accessibility/
- https://fosdem.org/2026/schedule/event/D9RRZC-otp-finds-a-way/
- https://fosdem.org/2026/schedule/track/search/
- https://fosdem.org/2026/contact/
- *...and 94 more page(s)*

---

#### Pattern 10: Affects 99 page(s) - 99 occurrence(s)

**Scanner**: axe
**Rule**: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**Issue**: Elements must meet minimum color contrast ratio thresholds

**HTML Pattern**:
```html
<a href="/2026/support/donate/">Donate</a>
```

**XPath** (use in browser DevTools):
```
a[href$="donate/"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('a[href$="donate/"]')`
5. The element will be highlighted

**Affected Pages**:
- https://fosdem.org/2026/practical/accessibility/
- https://fosdem.org/2026/schedule/event/ANGFQX-our_freedoms_depend_on_accessibility/
- https://fosdem.org/2026/schedule/event/D9RRZC-otp-finds-a-way/
- https://fosdem.org/2026/schedule/track/search/
- https://fosdem.org/2026/contact/
- *...and 94 more page(s)*

---

#### Pattern 11: Affects 99 page(s) - 99 occurrence(s)

**Scanner**: axe
**Rule**: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**Issue**: Elements must meet minimum color contrast ratio thresholds

**HTML Pattern**:
```html
<a accesskey="5" href="/2026/faq/">FAQ</a>
```

**XPath** (use in browser DevTools):
```
a[accesskey="5"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('a[accesskey="5"]')`
5. The element will be highlighted

**Affected Pages**:
- https://fosdem.org/2026/practical/accessibility/
- https://fosdem.org/2026/schedule/event/ANGFQX-our_freedoms_depend_on_accessibility/
- https://fosdem.org/2026/schedule/event/D9RRZC-otp-finds-a-way/
- https://fosdem.org/2026/schedule/track/search/
- https://fosdem.org/2026/contact/
- *...and 94 more page(s)*

---

#### Pattern 12: Affects 99 page(s) - 99 occurrence(s)

**Scanner**: axe
**Rule**: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**Issue**: Elements must meet minimum color contrast ratio thresholds

**HTML Pattern**:
```html
<a href="/2026/archives/">Archives</a>
```

**XPath** (use in browser DevTools):
```
a[href$="archives/"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('a[href$="archives/"]')`
5. The element will be highlighted

**Affected Pages**:
- https://fosdem.org/2026/practical/accessibility/
- https://fosdem.org/2026/schedule/event/ANGFQX-our_freedoms_depend_on_accessibility/
- https://fosdem.org/2026/schedule/event/D9RRZC-otp-finds-a-way/
- https://fosdem.org/2026/schedule/track/search/
- https://fosdem.org/2026/contact/
- *...and 94 more page(s)*

---

#### Pattern 13: Affects 99 page(s) - 99 occurrence(s)

**Scanner**: axe
**Rule**: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**Issue**: Elements must meet minimum color contrast ratio thresholds

**HTML Pattern**:
```html
<a accesskey="s" href="/2026/schedule/">Schedule</a>
```

**XPath** (use in browser DevTools):
```
a[accesskey="s"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('a[accesskey="s"]')`
5. The element will be highlighted

**Affected Pages**:
- https://fosdem.org/2026/practical/accessibility/
- https://fosdem.org/2026/schedule/event/ANGFQX-our_freedoms_depend_on_accessibility/
- https://fosdem.org/2026/schedule/event/D9RRZC-otp-finds-a-way/
- https://fosdem.org/2026/schedule/track/search/
- https://fosdem.org/2026/contact/
- *...and 94 more page(s)*

---

#### Pattern 14: Affects 99 page(s) - 99 occurrence(s)

**Scanner**: axe
**Rule**: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**Issue**: Elements must meet minimum color contrast ratio thresholds

**HTML Pattern**:
```html
<a href="/2026/certification/">Certification exams</a>
```

**XPath** (use in browser DevTools):
```
a[href$="certification/"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('a[href$="certification/"]')`
5. The element will be highlighted

**Affected Pages**:
- https://fosdem.org/2026/practical/accessibility/
- https://fosdem.org/2026/schedule/event/ANGFQX-our_freedoms_depend_on_accessibility/
- https://fosdem.org/2026/schedule/event/D9RRZC-otp-finds-a-way/
- https://fosdem.org/2026/schedule/track/search/
- https://fosdem.org/2026/contact/
- *...and 94 more page(s)*

---

#### Pattern 15: Affects 99 page(s) - 99 occurrence(s)

**Scanner**: axe
**Rule**: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**Issue**: Elements must meet minimum color contrast ratio thresholds

**HTML Pattern**:
```html
<a href="/2026/fringe/">Fringe</a>
```

**XPath** (use in browser DevTools):
```
a[href$="fringe/"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('a[href$="fringe/"]')`
5. The element will be highlighted

**Affected Pages**:
- https://fosdem.org/2026/practical/accessibility/
- https://fosdem.org/2026/schedule/event/ANGFQX-our_freedoms_depend_on_accessibility/
- https://fosdem.org/2026/schedule/event/D9RRZC-otp-finds-a-way/
- https://fosdem.org/2026/schedule/track/search/
- https://fosdem.org/2026/contact/
- *...and 94 more page(s)*

---

> 💡 **Pro Tip**: These patterns likely come from shared components or templates in your codebase. Fix them in the component/template source, and the fix will propagate to all affected pages.

## 📊 Detailed Results

Complete scan results for all tested pages:

| Submitted URL | Final URL | Status | HTTP | Redirected | Time (ms) | axe Unique | ALFA Unique | Equal Access Unique | AccessLint Unique | Duplicates | Notes |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|
| https://fosdem.org/2026/practical/accessibility/ | https://fosdem.org/2026/practical/accessibility/ | OK | 200 | no | 9440 | 47 | 0 | 0 | 0 | 64 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, heading-order, label, landmark-one-main, link-in-text-block, region |
| https://mailto:feedback@fosdem.org/ | https://mailto:feedback@fosdem.org/ | FAIL | - | no | 0 | 0 | 0 | 0 | 0 | 0 | Request cannot be constructed from a URL that includes credentials: https://mailto:feedback@fosdem.org/ |
| https://fosdem.org/2026/schedule/event/ANGFQX-our_freedoms_depend_on_accessibility/ | https://fosdem.org/2026/schedule/event/ANGFQX-our_freedoms_depend_on_accessibility/ | OK | 200 | no | 6779 | 57 | 0 | 0 | 0 | 77 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, empty-heading, label, landmark-one-main, link-in-text-block, region |
| https://fosdem.org/2026/schedule/event/D9RRZC-otp-finds-a-way/ | https://fosdem.org/2026/schedule/event/D9RRZC-otp-finds-a-way/ | OK | 200 | no | 6785 | 59 | 0 | 0 | 0 | 78 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, empty-heading, image-alt, label, landmark-one-main, link-in-text-block, region |
| https://fosdem.org/2026/schedule/track/search/ | https://fosdem.org/2026/schedule/track/search/ | OK | 200 | no | 7368 | 56 | 0 | 0 | 0 | 84 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, empty-table-header, heading-order, label, landmark-one-main, link-in-text-block, region |
| https://fosdem.org/2026/contact/ | https://fosdem.org/2026/contact/ | OK | 200 | no | 7176 | 59 | 0 | 0 | 0 | 68 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, heading-order, label, landmark-one-main, link-in-text-block, region |
| https://fosdem.org/2026/practical/services/ | https://fosdem.org/2026/practical/services/ | OK | 200 | no | 7163 | 40 | 0 | 0 | 0 | 62 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, label, landmark-one-main, link-in-text-block, region |
| https://fosdem.org/2026/about/ | https://fosdem.org/2026/about/ | OK | 200 | no | 7018 | 44 | 0 | 0 | 0 | 61 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, heading-order, label, landmark-one-main, link-in-text-block, region |
| https://fosdem.org/2026/faq/ | https://fosdem.org/2026/faq/ | OK | 200 | no | 7408 | 93 | 0 | 0 | 0 | 114 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, label, landmark-one-main, link-in-text-block, region |
| https://fosdem.org/2026/schedule/event/7PAYWS-oneai_an_open-source_framework_for_managing_ai_models_at_scale/ | https://fosdem.org/2026/schedule/event/7PAYWS-oneai_an_open-source_framework_for_managing_ai_models_at_scale/ | OK | 200 | no | 6817 | 59 | 0 | 0 | 0 | 79 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, empty-heading, label, landmark-one-main, link-in-text-block, region |
| https://fosdem.org/2026/schedule/event/AUFR8F-who-pays-your-bills/ | https://fosdem.org/2026/schedule/event/AUFR8F-who-pays-your-bills/ | OK | 200 | no | 6991 | 57 | 0 | 0 | 0 | 77 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, empty-heading, label, landmark-one-main, link-in-text-block, region |
| https://fosdem.org/schedule/track/lightning_talks/ | https://fosdem.org/2026/schedule/track/lightning_talks/ | FAIL | 404 | yes | 7101 | 40 | 0 | 0 | 0 | 62 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, heading-order, label, landmark-one-main, region |
| https://fosdem.org/2026/schedule/speaker/giuditta_parolini/ | https://fosdem.org/2026/schedule/speaker/giuditta_parolini/ | OK | 200 | no | 7123 | 46 | 0 | 0 | 0 | 70 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, heading-order, label, landmark-one-main, region |
| https://fosdem.org/2026/schedule/speaker/ron_evans/ | https://fosdem.org/2026/schedule/speaker/ron_evans/ | OK | 200 | no | 7058 | 46 | 0 | 0 | 0 | 70 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, heading-order, label, landmark-one-main, region |
| https://fosdem.org/2026/schedule/event/E7WQQX-webnn_and_webllm_on_risc-v_closing_the_ai_acceleration_gap_with_rvv_and_tenstorr/ | https://fosdem.org/2026/schedule/event/E7WQQX-webnn_and_webllm_on_risc-v_closing_the_ai_acceleration_gap_with_rvv_and_tenstorr/ | OK | 200 | no | 6674 | 58 | 0 | 0 | 0 | 78 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, empty-heading, label, landmark-one-main, link-in-text-block, region |
| https://fosdem.org/2026/schedule/speaker/thibault_raffaillac/ | https://fosdem.org/2026/schedule/speaker/thibault_raffaillac/ | OK | 200 | no | 6937 | 48 | 0 | 0 | 0 | 71 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, heading-order, label, landmark-one-main, link-in-text-block, region |
| https://fosdem.org/2026/schedule/speaker/lumi/ | https://fosdem.org/2026/schedule/speaker/lumi/ | OK | 200 | no | 6877 | 46 | 0 | 0 | 0 | 70 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, heading-order, label, landmark-one-main, region |
| https://fosdem.org/2026/schedule/speaker/mahendra_paipuri/ | https://fosdem.org/2026/schedule/speaker/mahendra_paipuri/ | OK | 200 | no | 7213 | 58 | 0 | 0 | 0 | 77 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, heading-order, label, landmark-one-main, link-in-text-block, region |
| https://fosdem.org/2026/schedule/speaker/effie_mouzeli/ | https://fosdem.org/2026/schedule/speaker/effie_mouzeli/ | OK | 200 | no | 7101 | 47 | 0 | 0 | 0 | 71 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, heading-order, label, landmark-one-main, region |
| https://fosdem.org/2026/schedule/speaker/brendan_abolivier/ | https://fosdem.org/2026/schedule/speaker/brendan_abolivier/ | OK | 200 | no | 6884 | 46 | 0 | 0 | 0 | 70 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, heading-order, label, landmark-one-main, region |
| https://fosdem.org/2026/schedule/speaker/gosia_zagajewska/ | https://fosdem.org/2026/schedule/speaker/gosia_zagajewska/ | OK | 200 | no | 6881 | 46 | 0 | 0 | 0 | 70 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, heading-order, label, landmark-one-main, region |
| https://fosdem.org/2026/schedule/speaker/alex_snaps/ | https://fosdem.org/2026/schedule/speaker/alex_snaps/ | OK | 200 | no | 7073 | 48 | 0 | 0 | 0 | 71 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, heading-order, label, landmark-one-main, link-in-text-block, region |
| https://fosdem.org/2026/schedule/event/XHZVPF-inxpect-profiling/ | https://fosdem.org/2026/schedule/event/XHZVPF-inxpect-profiling/ | OK | 200 | no | 6669 | 61 | 0 | 0 | 0 | 80 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, empty-heading, label, landmark-one-main, link-in-text-block, region |
| https://fosdem.org/2026/schedule/speaker/jim_bauwens/ | https://fosdem.org/2026/schedule/speaker/jim_bauwens/ | OK | 200 | no | 6913 | 46 | 0 | 0 | 0 | 70 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, heading-order, label, landmark-one-main, region |
| https://fosdem.org/2026/schedule/speaker/davide_thezero/ | https://fosdem.org/2026/schedule/speaker/davide_thezero/ | OK | 200 | no | 6931 | 46 | 0 | 0 | 0 | 70 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, heading-order, label, landmark-one-main, region |
| https://fosdem.org/2026/schedule/event/TYX3FF-accessible_software_performance/ | https://fosdem.org/2026/schedule/event/TYX3FF-accessible_software_performance/ | OK | 200 | no | 6786 | 58 | 0 | 0 | 0 | 78 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, empty-heading, label, landmark-one-main, link-in-text-block, region |
| https://fosdem.org/2026/schedule/speaker/jade/ | https://fosdem.org/2026/schedule/speaker/jade/ | OK | 200 | no | 6897 | 47 | 0 | 0 | 0 | 71 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, heading-order, label, landmark-one-main, region |
| https://fosdem.org/2026/schedule/speaker/pablo_del_arco/ | https://fosdem.org/2026/schedule/speaker/pablo_del_arco/ | OK | 200 | no | 6911 | 46 | 0 | 0 | 0 | 70 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, heading-order, label, landmark-one-main, region |
| https://fosdem.org/2026/schedule/speaker/ella_jakubowska/ | https://fosdem.org/2026/schedule/speaker/ella_jakubowska/ | OK | 200 | no | 6927 | 52 | 0 | 0 | 0 | 74 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, heading-order, label, landmark-one-main, region |
| https://fosdem.org/2026/schedule/speaker/kate_stewart/ | https://fosdem.org/2026/schedule/speaker/kate_stewart/ | OK | 200 | no | 7096 | 58 | 0 | 0 | 0 | 82 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, heading-order, label, landmark-one-main, region |
| https://fosdem.org/2026/schedule/event/WNLJ3C-private-vc-funding-commercial-open-source-flywheel/ | https://fosdem.org/2026/schedule/event/WNLJ3C-private-vc-funding-commercial-open-source-flywheel/ | OK | 200 | no | 6687 | 58 | 0 | 0 | 0 | 78 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, empty-heading, label, landmark-one-main, link-in-text-block, region |
| https://fosdem.org/2026/schedule/speaker/xuan-son_nguyen/ | https://fosdem.org/2026/schedule/speaker/xuan-son_nguyen/ | OK | 200 | no | 6885 | 46 | 0 | 0 | 0 | 70 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, heading-order, label, landmark-one-main, region |
| https://fosdem.org/2026/practical/online/ | https://fosdem.org/2026/practical/online/ | OK | 200 | no | 6812 | 41 | 0 | 0 | 0 | 61 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, heading-order, label, landmark-one-main, link-in-text-block, region |
| https://fosdem.org/2026/schedule/speaker/ruan_murgatroyd/ | https://fosdem.org/2026/schedule/speaker/ruan_murgatroyd/ | OK | 200 | no | 6781 | 48 | 0 | 0 | 0 | 71 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, heading-order, label, landmark-one-main, link-in-text-block, region |
| https://fosdem.org/2026/schedule/event/GSNU89-teleportal/ | https://fosdem.org/2026/schedule/event/GSNU89-teleportal/ | OK | 200 | no | 6915 | 66 | 0 | 0 | 0 | 83 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, empty-heading, label, landmark-one-main, link-in-text-block, region |
| https://fosdem.org/2026/schedule/event/QKNMJN-package-management-in-the-hands-of-users/ | https://fosdem.org/2026/schedule/event/QKNMJN-package-management-in-the-hands-of-users/ | OK | 200 | no | 6950 | 61 | 0 | 0 | 0 | 80 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, empty-heading, image-alt, label, landmark-one-main, link-in-text-block, region |
| https://fosdem.org/2026/schedule/speaker/simon_clavier/ | https://fosdem.org/2026/schedule/speaker/simon_clavier/ | OK | 200 | no | 6881 | 46 | 0 | 0 | 0 | 70 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, heading-order, label, landmark-one-main, region |
| https://fosdem.org/2026/schedule/event/VGXWNS-taming_the_llm_zoo_with_docker_model_runner_inference_with_oci_artifacts_llama_c/ | https://fosdem.org/2026/schedule/event/VGXWNS-taming_the_llm_zoo_with_docker_model_runner_inference_with_oci_artifacts_llama_c/ | OK | 200 | no | 6611 | 59 | 0 | 0 | 0 | 78 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, empty-heading, image-alt, label, landmark-one-main, link-in-text-block, region |
| https://fosdem.org/2026/schedule/speaker/m_palanikannan/ | https://fosdem.org/2026/schedule/speaker/m_palanikannan/ | OK | 200 | no | 6989 | 48 | 0 | 0 | 0 | 71 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, heading-order, label, landmark-one-main, link-in-text-block, region |
| https://fosdem.org/2026/schedule/speaker/sdomi/ | https://fosdem.org/2026/schedule/speaker/sdomi/ | OK | 200 | no | 6906 | 48 | 0 | 0 | 0 | 72 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, heading-order, label, landmark-one-main, region |
| https://fosdem.org/2026/schedule/speaker/t-lo/ | https://fosdem.org/2026/schedule/speaker/t-lo/ | OK | 200 | no | 7072 | 46 | 0 | 0 | 0 | 70 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, heading-order, label, landmark-one-main, region |
| https://fosdem.org/2026/schedule/event/GWRDNT-rust-type-checking-python/ | https://fosdem.org/2026/schedule/event/GWRDNT-rust-type-checking-python/ | OK | 200 | no | 6885 | 61 | 0 | 0 | 0 | 79 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, empty-heading, label, landmark-one-main, link-in-text-block, region |
| https://fosdem.org/2026/schedule/speaker/ignat_korchagin/ | https://fosdem.org/2026/schedule/speaker/ignat_korchagin/ | OK | 200 | no | 6940 | 46 | 0 | 0 | 0 | 70 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, heading-order, label, landmark-one-main, region |
| https://fosdem.org/2026/schedule/speaker/guillaume_ayoub/ | https://fosdem.org/2026/schedule/speaker/guillaume_ayoub/ | OK | 200 | no | 6998 | 52 | 0 | 0 | 0 | 74 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, heading-order, label, landmark-one-main, region |
| https://fosdem.org/2026/schedule/event/SQGLW7-fedora-on-riscv/ | https://fosdem.org/2026/schedule/event/SQGLW7-fedora-on-riscv/ | OK | 200 | no | 6756 | 62 | 0 | 0 | 0 | 82 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, empty-heading, label, landmark-one-main, link-in-text-block, region |
| https://fosdem.org/2026/schedule/event/WYHDQZ-non-blocking_continuous_code_reviews/ | https://fosdem.org/2026/schedule/event/WYHDQZ-non-blocking_continuous_code_reviews/ | OK | 200 | no | 6705 | 59 | 0 | 0 | 0 | 79 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, empty-heading, label, landmark-one-main, link-in-text-block, region |
| https://fosdem.org/2026/schedule/speaker/romain_hunault/ | https://fosdem.org/2026/schedule/speaker/romain_hunault/ | OK | 200 | no | 7026 | 52 | 0 | 0 | 0 | 74 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, heading-order, label, landmark-one-main, region |
| https://fosdem.org/2026/schedule/speaker/akashdeep_dhar/ | https://fosdem.org/2026/schedule/speaker/akashdeep_dhar/ | OK | 200 | no | 6803 | 46 | 0 | 0 | 0 | 70 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, heading-order, label, landmark-one-main, region |
| https://fosdem.org/2026/schedule/event/HCQRVT-designing_attestations_ui_the_security_and_safety_of_oss_package_supply_chain/ | https://fosdem.org/2026/schedule/event/HCQRVT-designing_attestations_ui_the_security_and_safety_of_oss_package_supply_chain/ | OK | 200 | no | 6587 | 59 | 0 | 0 | 0 | 78 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, empty-heading, image-alt, label, landmark-one-main, link-in-text-block, region |
| https://fosdem.org/2026/schedule/event/PUKMWN-how_to_do_a_podcast_with_free_software/ | https://fosdem.org/2026/schedule/event/PUKMWN-how_to_do_a_podcast_with_free_software/ | OK | 200 | no | 6681 | 60 | 0 | 0 | 0 | 80 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, empty-heading, label, landmark-one-main, link-in-text-block, region |
| https://fosdem.org/2026/schedule/event/KCWFBD-openflexure_education/ | https://fosdem.org/2026/schedule/event/KCWFBD-openflexure_education/ | OK | 200 | no | 6575 | 58 | 0 | 0 | 0 | 77 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, empty-heading, image-alt, label, landmark-one-main, link-in-text-block, region |
| https://fosdem.org/2026/schedule/event/ELPHEA-pkgconf-sbom/ | https://fosdem.org/2026/schedule/event/ELPHEA-pkgconf-sbom/ | OK | 200 | no | 6676 | 61 | 0 | 0 | 0 | 80 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, empty-heading, label, landmark-one-main, link-in-text-block, region |
| https://fosdem.org/2026/schedule/event/ZUVAZD-four_year_bus/ | https://fosdem.org/2026/schedule/event/ZUVAZD-four_year_bus/ | OK | 200 | no | 6685 | 59 | 0 | 0 | 0 | 77 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, empty-heading, label, landmark-one-main, link-in-text-block, region |
| https://fosdem.org/2026/schedule/speaker/adam_pioterek/ | https://fosdem.org/2026/schedule/speaker/adam_pioterek/ | OK | 200 | no | 6872 | 46 | 0 | 0 | 0 | 70 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, heading-order, label, landmark-one-main, region |
| https://fosdem.org/2026/schedule/event/QCFHVU-introduction_the_open_source_eu_policy_devroom/ | https://fosdem.org/2026/schedule/event/QCFHVU-introduction_the_open_source_eu_policy_devroom/ | OK | 200 | no | 6762 | 64 | 0 | 0 | 0 | 84 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, empty-heading, label, landmark-one-main, link-in-text-block, region |
| https://fosdem.org/2026/schedule/speaker/maartje_eyskens/ | https://fosdem.org/2026/schedule/speaker/maartje_eyskens/ | OK | 200 | no | 6834 | 52 | 0 | 0 | 0 | 74 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, heading-order, label, landmark-one-main, region |
| https://fosdem.org/2026/schedule/event/VGMUYA-the-open-weight-dilemma/ | https://fosdem.org/2026/schedule/event/VGMUYA-the-open-weight-dilemma/ | OK | 200 | no | 6709 | 57 | 0 | 0 | 0 | 77 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, empty-heading, label, landmark-one-main, link-in-text-block, region |
| https://fosdem.org/2026/news/2026-01-26-lightning-talks/ | https://fosdem.org/2026/news/2026-01-26-lightning-talks/ | OK | 200 | no | 6924 | 45 | 0 | 0 | 0 | 63 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, heading-order, label, landmark-one-main, link-in-text-block, region |
| https://fosdem.org/2026/schedule/event/8MUFCA-building_isos_from_oci_containers/ | https://fosdem.org/2026/schedule/event/8MUFCA-building_isos_from_oci_containers/ | OK | 200 | no | 6677 | 58 | 0 | 0 | 0 | 78 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, empty-heading, label, landmark-one-main, link-in-text-block, region |
| https://fosdem.org/2026/schedule/speaker/marton_bognar/ | https://fosdem.org/2026/schedule/speaker/marton_bognar/ | OK | 200 | no | 6886 | 47 | 0 | 0 | 0 | 71 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, heading-order, label, landmark-one-main, region |
| https://fosdem.org/2026/schedule/room/k4401/ | https://fosdem.org/2026/schedule/room/k4401/ | OK | 200 | no | 7663 | 63 | 0 | 0 | 0 | 92 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, empty-table-header, heading-order, label, landmark-one-main, link-in-text-block, region |
| https://fosdem.org/2026/schedule/event/FGBYKV-package_management_learnings_from_homebrew/ | https://fosdem.org/2026/schedule/event/FGBYKV-package_management_learnings_from_homebrew/ | OK | 200 | no | 6688 | 58 | 0 | 0 | 0 | 78 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, empty-heading, label, landmark-one-main, link-in-text-block, region |
| https://fosdem.org/2026/schedule/event/ARECWV-max2771_broadband_sdr_impact_of_low_bit_resolution_and_application_to_passive_ra/ | https://fosdem.org/2026/schedule/event/ARECWV-max2771_broadband_sdr_impact_of_low_bit_resolution_and_application_to_passive_ra/ | OK | 200 | no | 6615 | 60 | 0 | 0 | 0 | 79 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, empty-heading, image-alt, label, landmark-one-main, link-in-text-block, region |
| https://fosdem.org/2026/schedule/event/AV8MA9-open-source-hsm-based-aosp-signing/ | https://fosdem.org/2026/schedule/event/AV8MA9-open-source-hsm-based-aosp-signing/ | OK | 200 | no | 6758 | 58 | 0 | 0 | 0 | 78 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, empty-heading, label, landmark-one-main, link-in-text-block, region |
| https://fosdem.org/2026/schedule/speaker/angelina_claij-swart/ | https://fosdem.org/2026/schedule/speaker/angelina_claij-swart/ | OK | 200 | no | 6893 | 46 | 0 | 0 | 0 | 70 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, heading-order, label, landmark-one-main, region |
| https://fosdem.org/2026/schedule/speaker/fedor_smirnov/ | https://fosdem.org/2026/schedule/speaker/fedor_smirnov/ | OK | 200 | no | 6890 | 46 | 0 | 0 | 0 | 70 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, heading-order, label, landmark-one-main, region |
| https://fosdem.org/2026/schedule/speaker/hp_van_braam/ | https://fosdem.org/2026/schedule/speaker/hp_van_braam/ | OK | 200 | no | 6907 | 52 | 0 | 0 | 0 | 74 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, heading-order, label, landmark-one-main, region |
| https://fosdem.org/2026/schedule/speaker/pierromond/ | https://fosdem.org/2026/schedule/speaker/pierromond/ | OK | 200 | no | 6952 | 46 | 0 | 0 | 0 | 70 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, heading-order, label, landmark-one-main, region |
| https://fosdem.org/2026/schedule/speaker/michelle_barker/ | https://fosdem.org/2026/schedule/speaker/michelle_barker/ | OK | 200 | no | 7023 | 46 | 0 | 0 | 0 | 70 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, heading-order, label, landmark-one-main, region |
| https://fosdem.org/2026/schedule/event/WSKHHU-sucrela_open_source_usb_3_0_logic_analyzer_based_on_fpga/ | https://fosdem.org/2026/schedule/event/WSKHHU-sucrela_open_source_usb_3_0_logic_analyzer_based_on_fpga/ | OK | 200 | no | 6608 | 58 | 0 | 0 | 0 | 76 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, empty-heading, image-alt, label, landmark-one-main, link-in-text-block, region |
| https://fosdem.org/2026/schedule/speaker/date_yu-chiang_huang/ | https://fosdem.org/2026/schedule/speaker/date_yu-chiang_huang/ | OK | 200 | no | 6878 | 46 | 0 | 0 | 0 | 70 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, heading-order, label, landmark-one-main, region |
| https://fosdem.org/2026/schedule/event/T9ACNE-iroh_p2p_connections/ | https://fosdem.org/2026/schedule/event/T9ACNE-iroh_p2p_connections/ | OK | 200 | no | 6764 | 59 | 0 | 0 | 0 | 78 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, empty-heading, image-alt, label, landmark-one-main, link-in-text-block, region |
| https://fosdem.org/2026/schedule/speaker/cassie_jiun_seo/ | https://fosdem.org/2026/schedule/speaker/cassie_jiun_seo/ | OK | 200 | no | 6879 | 46 | 0 | 0 | 0 | 70 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, heading-order, label, landmark-one-main, region |
| https://fosdem.org/2026/schedule/event/7GANAH-badsmtp/ | https://fosdem.org/2026/schedule/event/7GANAH-badsmtp/ | OK | 200 | no | 6706 | 61 | 0 | 0 | 0 | 79 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, empty-heading, label, landmark-one-main, link-in-text-block, region |
| https://fosdem.org/2026/schedule/speaker/pascal_bleser/ | https://fosdem.org/2026/schedule/speaker/pascal_bleser/ | OK | 200 | no | 6806 | 46 | 0 | 0 | 0 | 70 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, heading-order, label, landmark-one-main, region |
| https://fosdem.org/2026/schedule/event/ETLVUA-the_joys_and_horrors_of_nes_dynamic_recompilation/ | https://fosdem.org/2026/schedule/event/ETLVUA-the_joys_and_horrors_of_nes_dynamic_recompilation/ | OK | 200 | no | 6787 | 56 | 0 | 0 | 0 | 77 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, empty-heading, label, landmark-one-main, link-in-text-block, region |
| https://fosdem.org/2026/schedule/event/FYVUB8-a_short_story_of_supporting_microsoft_exchange_in_thunderbird/ | https://fosdem.org/2026/schedule/event/FYVUB8-a_short_story_of_supporting_microsoft_exchange_in_thunderbird/ | OK | 200 | no | 6717 | 63 | 0 | 0 | 0 | 83 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, empty-heading, label, landmark-one-main, link-in-text-block, region |
| https://fosdem.org/2026/schedule/speaker/lesion/ | https://fosdem.org/2026/schedule/speaker/lesion/ | OK | 200 | no | 6903 | 46 | 0 | 0 | 0 | 70 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, heading-order, label, landmark-one-main, region |
| https://fosdem.org/2026/schedule/speaker/michael_stahl/ | https://fosdem.org/2026/schedule/speaker/michael_stahl/ | OK | 200 | no | 6874 | 46 | 0 | 0 | 0 | 70 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, heading-order, label, landmark-one-main, region |
| https://fosdem.org/2026/schedule/speaker/thomas_schwinge/ | https://fosdem.org/2026/schedule/speaker/thomas_schwinge/ | OK | 200 | no | 6955 | 65 | 0 | 0 | 0 | 82 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, heading-order, label, landmark-one-main, link-in-text-block, region |
| https://fosdem.org/2026/schedule/speaker/prankur_gupta/ | https://fosdem.org/2026/schedule/speaker/prankur_gupta/ | OK | 200 | no | 7042 | 46 | 0 | 0 | 0 | 70 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, heading-order, label, landmark-one-main, region |
| https://fosdem.org/2026/schedule/event/VUJT3T-passbolt_community_bof/ | https://fosdem.org/2026/schedule/event/VUJT3T-passbolt_community_bof/ | OK | 200 | no | 7018 | 51 | 0 | 0 | 0 | 70 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, empty-heading, label, landmark-one-main, link-in-text-block, region |
| https://fosdem.org/2026/schedule/speaker/gilles_pommereuil/ | https://fosdem.org/2026/schedule/speaker/gilles_pommereuil/ | OK | 200 | no | 7019 | 46 | 0 | 0 | 0 | 70 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, heading-order, label, landmark-one-main, region |
| https://fosdem.org/2026/schedule/speaker/kuniyasu_suzaki/ | https://fosdem.org/2026/schedule/speaker/kuniyasu_suzaki/ | OK | 200 | no | 6811 | 46 | 0 | 0 | 0 | 70 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, heading-order, label, landmark-one-main, region |
| https://fosdem.org/2026/schedule/amendments/ | https://fosdem.org/2026/schedule/amendments/ | OK | 200 | no | 6779 | 39 | 0 | 0 | 0 | 58 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, empty-heading, heading-order, label, landmark-one-main, region |
| https://fosdem.org/2026/schedule/speaker/maksim_samoilov/ | https://fosdem.org/2026/schedule/speaker/maksim_samoilov/ | OK | 200 | no | 6883 | 46 | 0 | 0 | 0 | 70 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, heading-order, label, landmark-one-main, region |
| https://fosdem.org/2026/schedule/event/QZHWK9-open_food_facts_getting_together_to_reduce_health_and_environmental_impacts_of_c/ | https://fosdem.org/2026/schedule/event/QZHWK9-open_food_facts_getting_together_to_reduce_health_and_environmental_impacts_of_c/ | OK | 200 | no | 6607 | 57 | 0 | 0 | 0 | 75 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, empty-heading, image-alt, label, landmark-one-main, link-in-text-block, region |
| https://fosdem.org/2026/schedule/speaker/renzo_davoli/ | https://fosdem.org/2026/schedule/speaker/renzo_davoli/ | OK | 200 | no | 7063 | 52 | 0 | 0 | 0 | 74 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, heading-order, label, landmark-one-main, region |
| https://fosdem.org/2026/schedule/speaker/dimitris_karakasilis/ | https://fosdem.org/2026/schedule/speaker/dimitris_karakasilis/ | OK | 200 | no | 7087 | 46 | 0 | 0 | 0 | 70 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, heading-order, label, landmark-one-main, region |
| https://fosdem.org/2026/schedule/speaker/leah_rowe/ | https://fosdem.org/2026/schedule/speaker/leah_rowe/ | OK | 200 | no | 6878 | 46 | 0 | 0 | 0 | 70 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, heading-order, label, landmark-one-main, region |
| https://fosdem.org/2026/schedule/event/9GLCAE-the_saga_of_official_binary_packages_for_gentoo_linux/ | https://fosdem.org/2026/schedule/event/9GLCAE-the_saga_of_official_binary_packages_for_gentoo_linux/ | OK | 200 | no | 6758 | 66 | 0 | 0 | 0 | 83 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, empty-heading, image-alt, label, landmark-one-main, link-in-text-block, region |
| https://fosdem.org/2026/schedule/speaker/twinkle/ | https://fosdem.org/2026/schedule/speaker/twinkle/ | OK | 200 | no | 6976 | 46 | 0 | 0 | 0 | 70 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, heading-order, label, landmark-one-main, region |
| https://fosdem.org/2026/schedule/event/TUEQCR-openperouter_turning_your_kubernetes_nodes_into_a_provide_edge_router/ | https://fosdem.org/2026/schedule/event/TUEQCR-openperouter_turning_your_kubernetes_nodes_into_a_provide_edge_router/ | OK | 200 | no | 6764 | 59 | 0 | 0 | 0 | 79 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, empty-heading, label, landmark-one-main, link-in-text-block, region |
| https://fosdem.org/2026/schedule/speaker/davide_berardi/ | https://fosdem.org/2026/schedule/speaker/davide_berardi/ | OK | 200 | no | 6890 | 46 | 0 | 0 | 0 | 70 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, heading-order, label, landmark-one-main, region |
| https://fosdem.org/2026/schedule/event/FSQJZG-from_gatekeepers_to_partners_how_developer_relations_transforms_security_tool_ad/ | https://fosdem.org/2026/schedule/event/FSQJZG-from_gatekeepers_to_partners_how_developer_relations_transforms_security_tool_ad/ | OK | 200 | no | 6704 | 57 | 0 | 0 | 0 | 77 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, empty-heading, label, landmark-one-main, link-in-text-block, region |
| https://fosdem.org/2026/schedule/speaker/nikolay_kuznetsov/ | https://fosdem.org/2026/schedule/speaker/nikolay_kuznetsov/ | OK | 200 | no | 6774 | 46 | 0 | 0 | 0 | 70 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, heading-order, label, landmark-one-main, region |
| https://fosdem.org/2026/schedule/event/KCPTX7-just1/ | https://fosdem.org/2026/schedule/event/KCPTX7-just1/ | OK | 200 | no | 6706 | 61 | 0 | 0 | 0 | 80 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, empty-heading, image-alt, label, landmark-one-main, link-in-text-block, region |
| https://fosdem.org/2026/schedule/event/8SNMXT-describing_nix_closures_using_sboms/ | https://fosdem.org/2026/schedule/event/8SNMXT-describing_nix_closures_using_sboms/ | OK | 200 | no | 6740 | 57 | 0 | 0 | 0 | 77 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, empty-heading, label, landmark-one-main, link-in-text-block, region |
| https://fosdem.org/2026/schedule/speaker/sergio_pastor_perez/ | https://fosdem.org/2026/schedule/speaker/sergio_pastor_perez/ | OK | 200 | no | 6979 | 46 | 0 | 0 | 0 | 70 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, heading-order, label, landmark-one-main, region |
| https://fosdem.org/2026/schedule/event/KPHKNU-bringing-bsd-applications-on-linux/ | https://fosdem.org/2026/schedule/event/KPHKNU-bringing-bsd-applications-on-linux/ | OK | 200 | no | 6906 | 61 | 0 | 0 | 0 | 83 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, empty-heading, label, landmark-one-main, link-in-text-block, region |

## Detailed Failure Information (ALFA)

## Detailed Failure Information (axe)

### https://fosdem.org/2026/practical/accessibility/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/about/">About</a>`
- XPath: `li:nth-child(2) > a[href$="about/"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/news/">News</a>`
- XPath: `li:nth-child(3) > a[href$="news/"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/schedule/">Schedule</a>`
- XPath: `li:nth-child(4) > a[href$="schedule/"]`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/stands/">Stands</a>`
- XPath: `li:nth-child(5) > a[href$="stands/"]`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/volunteer/">Volunteer</a>`
- XPath: `li:nth-child(6) > a[href$="volunteer/"]`

*... and 24 more failures for this rule*

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3>Suggestions welcome</h3>`
- XPath: `#main > h3`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input type="text" name="q" id="q" class="span2" value="">`
- XPath: `#q`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html lang="en">`
- XPath: `html`

#### Rule: [link-in-text-block](https://dequeuniversity.com/rules/axe/4.11/link-in-text-block?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.1](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color) (Level A)

**Failure 1:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a href="https://nav.fosdem.org">nav.fosdem.org</a>`
- XPath: `a[href$="nav.fosdem.org"]`

**Failure 2:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a href="https://www.ulb.be/fr/accessibilite-pour-tous/amenagements-specifiques">here</a>`
- XPath: `p:nth-child(4) > a:nth-child(2)`

**Failure 3:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a href="https://www.openstreetmap.org/way/150213167">Bois de La Cambre/Terkamerenbos</a>`
- XPath: `p:nth-child(7) > a`

**Failure 4:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a href="mailto:feedback@fosdem.org">feedback@fosdem.org</a>`
- XPath: `a[href="mailto:feedback@fosdem.org"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h1 class="logo"><a href="/2026/">fosdem-2026</a></h1>`
- XPath: `.logo`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="home"><a href="/2026/">Home</a></li>`
- XPath: `#nav > .home`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/about/">About</a></li>`
- XPath: `#nav > li:nth-child(2)`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/news/">News</a></li>`
- XPath: `#nav > li:nth-child(3)`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/schedule/">Schedule</a></li>`
- XPath: `#nav > li:nth-child(4)`

*... and 6 more failures for this rule*

### https://fosdem.org/2026/schedule/event/ANGFQX-our_freedoms_depend_on_accessibility/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/about/">About</a>`
- XPath: `li:nth-child(2) > a[href$="about/"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/news/">News</a>`
- XPath: `li:nth-child(3) > a[href$="news/"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/stands/">Stands</a>`
- XPath: `li:nth-child(5) > a[href$="stands/"]`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/volunteer/">Volunteer</a>`
- XPath: `li:nth-child(6) > a[href$="volunteer/"]`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/practical/">Practical</a>`
- XPath: `a[href$="practical/"]`

*... and 36 more failures for this rule*

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: Headings should not be empty
- HTML: `<h2></h2>`
- XPath: `#pagetitles > h2`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input type="text" name="q" id="q" class="span2" value="">`
- XPath: `#q`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html lang="en">`
- XPath: `html`

#### Rule: [link-in-text-block](https://dequeuniversity.com/rules/axe/4.11/link-in-text-block?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.1](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color) (Level A)

**Failure 1:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a class="value-title" title="2026-02-01T09:35:00+01:00" href="/2026/schedule/day/sunday/#0935">09:35</a>`
- XPath: `a[title="2026-02-01T09:35:00+01:00"]`

**Failure 2:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a class="value-title" title="2026-02-01T10:00:00+01:00" href="/2026/schedule/day/sunday/#1000">10:00</a>`
- XPath: `a[title="2026-02-01T10:00:00+01:00"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h1 class="logo"><a href="/2026/">fosdem-2026</a></h1>`
- XPath: `.logo`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="home"><a href="/2026/">Home</a></li>`
- XPath: `#nav > .home`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/about/">About</a></li>`
- XPath: `#nav > li:nth-child(2)`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/news/">News</a></li>`
- XPath: `#nav > li:nth-child(3)`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="active"><a href="/2026/schedule/">Schedule</a></li>`
- XPath: `#nav > .active`

*... and 6 more failures for this rule*

### https://fosdem.org/2026/schedule/event/D9RRZC-otp-finds-a-way/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/about/">About</a>`
- XPath: `li:nth-child(2) > a[href$="about/"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/news/">News</a>`
- XPath: `li:nth-child(3) > a[href$="news/"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/stands/">Stands</a>`
- XPath: `li:nth-child(5) > a[href$="stands/"]`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/volunteer/">Volunteer</a>`
- XPath: `li:nth-child(6) > a[href$="volunteer/"]`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/practical/">Practical</a>`
- XPath: `a[href$="practical/"]`

*... and 37 more failures for this rule*

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: Headings should not be empty
- HTML: `<h2></h2>`
- XPath: `#pagetitles > h2`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/2026/schedule/event/D9RRZC-otp-finds-a-way/D9RRZC-otp-finds-a-way-d785fe846448a0381dcfc29fe264b848764927f73e7212e9c7cca13c06c308fe.png" class="event-logo">`
- XPath: `.event-logo`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input type="text" name="q" id="q" class="span2" value="">`
- XPath: `#q`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html lang="en">`
- XPath: `html`

#### Rule: [link-in-text-block](https://dequeuniversity.com/rules/axe/4.11/link-in-text-block?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.1](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color) (Level A)

**Failure 1:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a class="value-title" title="2026-01-31T16:35:00+01:00" href="/2026/schedule/day/saturday/#1635">16:35</a>`
- XPath: `a[title="2026-01-31T16:35:00+01:00"]`

**Failure 2:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a class="value-title" title="2026-01-31T16:55:00+01:00" href="/2026/schedule/day/saturday/#1655">16:55</a>`
- XPath: `a[title="2026-01-31T16:55:00+01:00"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h1 class="logo"><a href="/2026/">fosdem-2026</a></h1>`
- XPath: `.logo`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="home"><a href="/2026/">Home</a></li>`
- XPath: `#nav > .home`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/about/">About</a></li>`
- XPath: `#nav > li:nth-child(2)`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/news/">News</a></li>`
- XPath: `#nav > li:nth-child(3)`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="active"><a href="/2026/schedule/">Schedule</a></li>`
- XPath: `#nav > .active`

*... and 6 more failures for this rule*

### https://fosdem.org/2026/schedule/track/search/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/about/">About</a>`
- XPath: `li:nth-child(2) > a[href$="about/"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/news/">News</a>`
- XPath: `li:nth-child(3) > a[href$="news/"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/stands/">Stands</a>`
- XPath: `li:nth-child(5) > a[href$="stands/"]`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/volunteer/">Volunteer</a>`
- XPath: `li:nth-child(6) > a[href$="volunteer/"]`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/practical/">Practical</a>`
- XPath: `a[href$="practical/"]`

*... and 34 more failures for this rule*

#### Rule: [empty-table-header](https://dequeuniversity.com/rules/axe/4.11/empty-table-header?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: Table header text should not be empty
- HTML: `<th class="day"></th>`
- XPath: `thead > tr > .day`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3>Sunday</h3>`
- XPath: `td[colspan="6"] > h3`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input type="text" name="q" id="q" class="span2" value="">`
- XPath: `#q`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html lang="en">`
- XPath: `html`

#### Rule: [link-in-text-block](https://dequeuniversity.com/rules/axe/4.11/link-in-text-block?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.1](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color) (Level A)

**Failure 1:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a href="/2026/schedule/track/search.ics">iCal</a>`
- XPath: `a:nth-child(7)`

**Failure 2:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a href="/2026/schedule/track/search.xcs">xCal</a>`
- XPath: `a:nth-child(8)`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h1 class="logo"><a href="/2026/">fosdem-2026</a></h1>`
- XPath: `.logo`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="home"><a href="/2026/">Home</a></li>`
- XPath: `#nav > .home`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/about/">About</a></li>`
- XPath: `#nav > li:nth-child(2)`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/news/">News</a></li>`
- XPath: `#nav > li:nth-child(3)`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="active"><a href="/2026/schedule/">Schedule</a></li>`
- XPath: `#nav > .active`

*... and 6 more failures for this rule*

### https://fosdem.org/2026/contact/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/about/">About</a>`
- XPath: `li:nth-child(2) > a[href$="about/"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/news/">News</a>`
- XPath: `li:nth-child(3) > a[href$="news/"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/schedule/">Schedule</a>`
- XPath: `li:nth-child(4) > a[href$="schedule/"]`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/stands/">Stands</a>`
- XPath: `li:nth-child(5) > a[href$="stands/"]`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/volunteer/">Volunteer</a>`
- XPath: `li:nth-child(6) > a[href$="volunteer/"]`

*... and 30 more failures for this rule*

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3>Discuss</h3>`
- XPath: `h3:nth-child(3)`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input type="text" name="q" id="q" class="span2" value="">`
- XPath: `#q`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html lang="en">`
- XPath: `html`

#### Rule: [link-in-text-block](https://dequeuniversity.com/rules/axe/4.11/link-in-text-block?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.1](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color) (Level A)

**Failure 1:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a href="https://lists.fosdem.org/mailman/listinfo/fosdem">mailing list</a>`
- XPath: `p:nth-child(4) > a`

**Failure 2:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a href="https://matrix.to/#/#fosdem:fosdem.org?web-instance[element.io]=chat.fosdem.org">the #fosdem:fosdem.org matrix room</a>`
- XPath: `p:nth-child(5) > a`

**Failure 3:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a href="https://matrix.to/#/#fosdem-space:fosdem.org?web-instance[element.io]=chat.fosdem.org">#fosdem-space:fosdem.org</a>`
- XPath: `p:nth-child(6) > a:nth-child(1)`

**Failure 4:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a href="https://chat.fosdem.org/#/room/#fosdem:fosdem.org">chat.fosdem.org</a>`
- XPath: `p:nth-child(6) > a:nth-child(2)`

**Failure 5:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a href="https://lists.fosdem.org/mailman/listinfo/volunteers">volunteers</a>`
- XPath: `p:nth-child(8) > a`

*... and 5 more failures for this rule*

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h1 class="logo"><a href="/2026/">fosdem-2026</a></h1>`
- XPath: `.logo`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="home"><a href="/2026/">Home</a></li>`
- XPath: `#nav > .home`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/about/">About</a></li>`
- XPath: `#nav > li:nth-child(2)`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/news/">News</a></li>`
- XPath: `#nav > li:nth-child(3)`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/schedule/">Schedule</a></li>`
- XPath: `#nav > li:nth-child(4)`

*... and 6 more failures for this rule*

### https://fosdem.org/2026/practical/services/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/about/">About</a>`
- XPath: `li:nth-child(2) > a[href$="about/"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/news/">News</a>`
- XPath: `li:nth-child(3) > a[href$="news/"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/schedule/">Schedule</a>`
- XPath: `li:nth-child(4) > a[href$="schedule/"]`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/stands/">Stands</a>`
- XPath: `li:nth-child(5) > a[href$="stands/"]`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/volunteer/">Volunteer</a>`
- XPath: `li:nth-child(6) > a[href$="volunteer/"]`

*... and 21 more failures for this rule*

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input type="text" name="q" id="q" class="span2" value="">`
- XPath: `#q`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html lang="en">`
- XPath: `html`

#### Rule: [link-in-text-block](https://dequeuniversity.com/rules/axe/4.11/link-in-text-block?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.1](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color) (Level A)

**Failure 1:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a href="https://nav.fosdem.org/l/red_cross/">on-campus interactive map</a>`
- XPath: `p:nth-child(14) > a`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h1 class="logo"><a href="/2026/">fosdem-2026</a></h1>`
- XPath: `.logo`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="home"><a href="/2026/">Home</a></li>`
- XPath: `#nav > .home`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/about/">About</a></li>`
- XPath: `#nav > li:nth-child(2)`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/news/">News</a></li>`
- XPath: `#nav > li:nth-child(3)`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/schedule/">Schedule</a></li>`
- XPath: `#nav > li:nth-child(4)`

*... and 6 more failures for this rule*

### https://fosdem.org/2026/about/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/news/">News</a>`
- XPath: `li:nth-child(3) > a[href$="news/"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/schedule/">Schedule</a>`
- XPath: `li:nth-child(4) > a[href$="schedule/"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/stands/">Stands</a>`
- XPath: `li:nth-child(5) > a[href$="stands/"]`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/volunteer/">Volunteer</a>`
- XPath: `li:nth-child(6) > a[href$="volunteer/"]`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/practical/">Practical</a>`
- XPath: `a[href$="practical/"]`

*... and 22 more failures for this rule*

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3>         FOSDEM is a two-day event organised by volunteers to promote the         widespread use of free and open source software.     </h3>`
- XPath: `.text-block > h3`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input type="text" name="q" id="q" class="span2" value="">`
- XPath: `#q`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html lang="en">`
- XPath: `html`

#### Rule: [link-in-text-block](https://dequeuniversity.com/rules/axe/4.11/link-in-text-block?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.1](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color) (Level A)

**Failure 1:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a href="/2026/support/donate/">donations</a>`
- XPath: `p:nth-child(4) > a[href$="donate/"]`

**Failure 2:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a href="/2026/about/sponsors/">sponsorship</a>`
- XPath: `p:nth-child(4) > a[href$="sponsors/"]`

**Failure 3:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a href="/2026/about/charter/">here</a>`
- XPath: `a[href$="charter/"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h1 class="logo"><a href="/2026/">fosdem-2026</a></h1>`
- XPath: `.logo`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="home"><a href="/2026/">Home</a></li>`
- XPath: `#nav > .home`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="active"><a href="/2026/about/">About</a></li>`
- XPath: `#nav > .active`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/news/">News</a></li>`
- XPath: `#nav > li:nth-child(3)`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/schedule/">Schedule</a></li>`
- XPath: `#nav > li:nth-child(4)`

*... and 6 more failures for this rule*

### https://fosdem.org/2026/faq/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/about/">About</a>`
- XPath: `li:nth-child(2) > a[href$="about/"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/news/">News</a>`
- XPath: `li:nth-child(3) > a[href$="news/"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/schedule/">Schedule</a>`
- XPath: `li:nth-child(4) > a[href$="schedule/"]`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/stands/">Stands</a>`
- XPath: `li:nth-child(5) > a[href$="stands/"]`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/volunteer/">Volunteer</a>`
- XPath: `li:nth-child(6) > a[href$="volunteer/"]`

*... and 58 more failures for this rule*

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input type="text" name="q" id="q" class="span2" value="">`
- XPath: `#q`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html lang="en">`
- XPath: `html`

#### Rule: [link-in-text-block](https://dequeuniversity.com/rules/axe/4.11/link-in-text-block?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.1](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color) (Level A)

**Failure 1:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a href="/2026/news/">news</a>`
- XPath: `p:nth-child(3) > a[href$="news/"]`

**Failure 2:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a href="https://fosdem.org/rss.xml">RSS feed</a>`
- XPath: `a[href$="rss.xml"]`

**Failure 3:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a href="https://diplomatie.belgium.be/en/travel-belgium/visa-belgium">the website of the Belgian ministry of foreign affairs</a>`
- XPath: `p:nth-child(12) > a`

**Failure 4:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a href="/2026/schedule/">schedule</a>`
- XPath: `p:nth-child(14) > a[href$="schedule/"]`

**Failure 5:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a href="https://video.fosdem.org/2026/">video.fosdem.org/2026</a>`
- XPath: `a[href="https://video.fosdem.org/2026/"]`

*... and 12 more failures for this rule*

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h1 class="logo"><a href="/2026/">fosdem-2026</a></h1>`
- XPath: `.logo`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="home"><a href="/2026/">Home</a></li>`
- XPath: `#nav > .home`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/about/">About</a></li>`
- XPath: `#nav > li:nth-child(2)`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/news/">News</a></li>`
- XPath: `#nav > li:nth-child(3)`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/schedule/">Schedule</a></li>`
- XPath: `#nav > li:nth-child(4)`

*... and 6 more failures for this rule*

### https://fosdem.org/2026/schedule/event/7PAYWS-oneai_an_open-source_framework_for_managing_ai_models_at_scale/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/about/">About</a>`
- XPath: `li:nth-child(2) > a[href$="about/"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/news/">News</a>`
- XPath: `li:nth-child(3) > a[href$="news/"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/stands/">Stands</a>`
- XPath: `li:nth-child(5) > a[href$="stands/"]`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/volunteer/">Volunteer</a>`
- XPath: `li:nth-child(6) > a[href$="volunteer/"]`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/practical/">Practical</a>`
- XPath: `a[href$="practical/"]`

*... and 38 more failures for this rule*

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: Headings should not be empty
- HTML: `<h2></h2>`
- XPath: `#pagetitles > h2`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input type="text" name="q" id="q" class="span2" value="">`
- XPath: `#q`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html lang="en">`
- XPath: `html`

#### Rule: [link-in-text-block](https://dequeuniversity.com/rules/axe/4.11/link-in-text-block?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.1](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color) (Level A)

**Failure 1:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a class="value-title" title="2026-01-31T14:20:00+01:00" href="/2026/schedule/day/saturday/#1420">14:20</a>`
- XPath: `a[title="2026-01-31T14:20:00+01:00"]`

**Failure 2:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a class="value-title" title="2026-01-31T14:40:00+01:00" href="/2026/schedule/day/saturday/#1440">14:40</a>`
- XPath: `a[title="2026-01-31T14:40:00+01:00"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h1 class="logo"><a href="/2026/">fosdem-2026</a></h1>`
- XPath: `.logo`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="home"><a href="/2026/">Home</a></li>`
- XPath: `#nav > .home`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/about/">About</a></li>`
- XPath: `#nav > li:nth-child(2)`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/news/">News</a></li>`
- XPath: `#nav > li:nth-child(3)`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="active"><a href="/2026/schedule/">Schedule</a></li>`
- XPath: `#nav > .active`

*... and 6 more failures for this rule*

### https://fosdem.org/2026/schedule/event/AUFR8F-who-pays-your-bills/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/about/">About</a>`
- XPath: `li:nth-child(2) > a[href$="about/"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/news/">News</a>`
- XPath: `li:nth-child(3) > a[href$="news/"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/stands/">Stands</a>`
- XPath: `li:nth-child(5) > a[href$="stands/"]`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/volunteer/">Volunteer</a>`
- XPath: `li:nth-child(6) > a[href$="volunteer/"]`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/practical/">Practical</a>`
- XPath: `a[href$="practical/"]`

*... and 36 more failures for this rule*

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: Headings should not be empty
- HTML: `<h2></h2>`
- XPath: `#pagetitles > h2`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input type="text" name="q" id="q" class="span2" value="">`
- XPath: `#q`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html lang="en">`
- XPath: `html`

#### Rule: [link-in-text-block](https://dequeuniversity.com/rules/axe/4.11/link-in-text-block?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.1](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color) (Level A)

**Failure 1:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a class="value-title" title="2026-02-01T11:00:00+01:00" href="/2026/schedule/day/sunday/#1100">11:00</a>`
- XPath: `a[title="2026-02-01T11:00:00+01:00"]`

**Failure 2:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a class="value-title" title="2026-02-01T11:25:00+01:00" href="/2026/schedule/day/sunday/#1125">11:25</a>`
- XPath: `a[title="2026-02-01T11:25:00+01:00"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h1 class="logo"><a href="/2026/">fosdem-2026</a></h1>`
- XPath: `.logo`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="home"><a href="/2026/">Home</a></li>`
- XPath: `#nav > .home`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/about/">About</a></li>`
- XPath: `#nav > li:nth-child(2)`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/news/">News</a></li>`
- XPath: `#nav > li:nth-child(3)`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="active"><a href="/2026/schedule/">Schedule</a></li>`
- XPath: `#nav > .active`

*... and 6 more failures for this rule*

### https://fosdem.org/schedule/track/lightning_talks/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/about/">About</a>`
- XPath: `li:nth-child(2) > a[href$="about/"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/news/">News</a>`
- XPath: `li:nth-child(3) > a[href$="news/"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/schedule/">Schedule</a>`
- XPath: `li:nth-child(4) > a[href$="schedule/"]`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/stands/">Stands</a>`
- XPath: `li:nth-child(5) > a[href$="stands/"]`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/volunteer/">Volunteer</a>`
- XPath: `li:nth-child(6) > a[href$="volunteer/"]`

*... and 21 more failures for this rule*

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3>FOSDEM</h3>`
- XPath: `.panel-column:nth-child(1) > h3`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input type="text" name="q" id="q" class="span2" value="">`
- XPath: `#q`

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
- HTML: `<h1 class="logo"><a href="/2026/">fosdem-2026</a></h1>`
- XPath: `.logo`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="home"><a href="/2026/">Home</a></li>`
- XPath: `#nav > .home`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/about/">About</a></li>`
- XPath: `#nav > li:nth-child(2)`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/news/">News</a></li>`
- XPath: `#nav > li:nth-child(3)`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/schedule/">Schedule</a></li>`
- XPath: `#nav > li:nth-child(4)`

*... and 6 more failures for this rule*

### https://fosdem.org/2026/schedule/speaker/giuditta_parolini/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/about/">About</a>`
- XPath: `li:nth-child(2) > a[href$="about/"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/news/">News</a>`
- XPath: `li:nth-child(3) > a[href$="news/"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/stands/">Stands</a>`
- XPath: `li:nth-child(5) > a[href$="stands/"]`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/volunteer/">Volunteer</a>`
- XPath: `li:nth-child(6) > a[href$="volunteer/"]`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/practical/">Practical</a>`
- XPath: `a[href$="practical/"]`

*... and 27 more failures for this rule*

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3>Events</h3>`
- XPath: `#main > h3`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input type="text" name="q" id="q" class="span2" value="">`
- XPath: `#q`

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
- HTML: `<h1 class="logo"><a href="/2026/">fosdem-2026</a></h1>`
- XPath: `.logo`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="home"><a href="/2026/">Home</a></li>`
- XPath: `#nav > .home`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/about/">About</a></li>`
- XPath: `#nav > li:nth-child(2)`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/news/">News</a></li>`
- XPath: `#nav > li:nth-child(3)`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="active"><a href="/2026/schedule/">Schedule</a></li>`
- XPath: `#nav > .active`

*... and 6 more failures for this rule*

### https://fosdem.org/2026/schedule/speaker/ron_evans/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/about/">About</a>`
- XPath: `li:nth-child(2) > a[href$="about/"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/news/">News</a>`
- XPath: `li:nth-child(3) > a[href$="news/"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/stands/">Stands</a>`
- XPath: `li:nth-child(5) > a[href$="stands/"]`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/volunteer/">Volunteer</a>`
- XPath: `li:nth-child(6) > a[href$="volunteer/"]`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/practical/">Practical</a>`
- XPath: `a[href$="practical/"]`

*... and 27 more failures for this rule*

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3>Events</h3>`
- XPath: `#main > h3`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input type="text" name="q" id="q" class="span2" value="">`
- XPath: `#q`

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
- HTML: `<h1 class="logo"><a href="/2026/">fosdem-2026</a></h1>`
- XPath: `.logo`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="home"><a href="/2026/">Home</a></li>`
- XPath: `#nav > .home`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/about/">About</a></li>`
- XPath: `#nav > li:nth-child(2)`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/news/">News</a></li>`
- XPath: `#nav > li:nth-child(3)`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="active"><a href="/2026/schedule/">Schedule</a></li>`
- XPath: `#nav > .active`

*... and 6 more failures for this rule*

### https://fosdem.org/2026/schedule/event/E7WQQX-webnn_and_webllm_on_risc-v_closing_the_ai_acceleration_gap_with_rvv_and_tenstorr/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/about/">About</a>`
- XPath: `li:nth-child(2) > a[href$="about/"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/news/">News</a>`
- XPath: `li:nth-child(3) > a[href$="news/"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/stands/">Stands</a>`
- XPath: `li:nth-child(5) > a[href$="stands/"]`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/volunteer/">Volunteer</a>`
- XPath: `li:nth-child(6) > a[href$="volunteer/"]`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/practical/">Practical</a>`
- XPath: `a[href$="practical/"]`

*... and 37 more failures for this rule*

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: Headings should not be empty
- HTML: `<h2></h2>`
- XPath: `#pagetitles > h2`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input type="text" name="q" id="q" class="span2" value="">`
- XPath: `#q`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html lang="en">`
- XPath: `html`

#### Rule: [link-in-text-block](https://dequeuniversity.com/rules/axe/4.11/link-in-text-block?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.1](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color) (Level A)

**Failure 1:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a class="value-title" title="2026-01-31T12:40:00+01:00" href="/2026/schedule/day/saturday/#1240">12:40</a>`
- XPath: `a[title="2026-01-31T12:40:00+01:00"]`

**Failure 2:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a class="value-title" title="2026-01-31T13:00:00+01:00" href="/2026/schedule/day/saturday/#1300">13:00</a>`
- XPath: `a[title="2026-01-31T13:00:00+01:00"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h1 class="logo"><a href="/2026/">fosdem-2026</a></h1>`
- XPath: `.logo`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="home"><a href="/2026/">Home</a></li>`
- XPath: `#nav > .home`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/about/">About</a></li>`
- XPath: `#nav > li:nth-child(2)`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/news/">News</a></li>`
- XPath: `#nav > li:nth-child(3)`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="active"><a href="/2026/schedule/">Schedule</a></li>`
- XPath: `#nav > .active`

*... and 6 more failures for this rule*

### https://fosdem.org/2026/schedule/speaker/thibault_raffaillac/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/about/">About</a>`
- XPath: `li:nth-child(2) > a[href$="about/"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/news/">News</a>`
- XPath: `li:nth-child(3) > a[href$="news/"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/stands/">Stands</a>`
- XPath: `li:nth-child(5) > a[href$="stands/"]`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/volunteer/">Volunteer</a>`
- XPath: `li:nth-child(6) > a[href$="volunteer/"]`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/practical/">Practical</a>`
- XPath: `a[href$="practical/"]`

*... and 28 more failures for this rule*

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3>Events</h3>`
- XPath: `#main > h3`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input type="text" name="q" id="q" class="span2" value="">`
- XPath: `#q`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html lang="en">`
- XPath: `html`

#### Rule: [link-in-text-block](https://dequeuniversity.com/rules/axe/4.11/link-in-text-block?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.1](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color) (Level A)

**Failure 1:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a href="https://github.com/tvlabs/edge264">edge264</a>`
- XPath: `p > a`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h1 class="logo"><a href="/2026/">fosdem-2026</a></h1>`
- XPath: `.logo`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="home"><a href="/2026/">Home</a></li>`
- XPath: `#nav > .home`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/about/">About</a></li>`
- XPath: `#nav > li:nth-child(2)`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/news/">News</a></li>`
- XPath: `#nav > li:nth-child(3)`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="active"><a href="/2026/schedule/">Schedule</a></li>`
- XPath: `#nav > .active`

*... and 6 more failures for this rule*

### https://fosdem.org/2026/schedule/speaker/lumi/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/about/">About</a>`
- XPath: `li:nth-child(2) > a[href$="about/"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/news/">News</a>`
- XPath: `li:nth-child(3) > a[href$="news/"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/stands/">Stands</a>`
- XPath: `li:nth-child(5) > a[href$="stands/"]`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/volunteer/">Volunteer</a>`
- XPath: `li:nth-child(6) > a[href$="volunteer/"]`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/practical/">Practical</a>`
- XPath: `a[href$="practical/"]`

*... and 27 more failures for this rule*

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3>Events</h3>`
- XPath: `#main > h3`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input type="text" name="q" id="q" class="span2" value="">`
- XPath: `#q`

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
- HTML: `<h1 class="logo"><a href="/2026/">fosdem-2026</a></h1>`
- XPath: `.logo`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="home"><a href="/2026/">Home</a></li>`
- XPath: `#nav > .home`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/about/">About</a></li>`
- XPath: `#nav > li:nth-child(2)`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/news/">News</a></li>`
- XPath: `#nav > li:nth-child(3)`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="active"><a href="/2026/schedule/">Schedule</a></li>`
- XPath: `#nav > .active`

*... and 6 more failures for this rule*

### https://fosdem.org/2026/schedule/speaker/mahendra_paipuri/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/about/">About</a>`
- XPath: `li:nth-child(2) > a[href$="about/"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/news/">News</a>`
- XPath: `li:nth-child(3) > a[href$="news/"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/stands/">Stands</a>`
- XPath: `li:nth-child(5) > a[href$="stands/"]`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/volunteer/">Volunteer</a>`
- XPath: `li:nth-child(6) > a[href$="volunteer/"]`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/practical/">Practical</a>`
- XPath: `a[href$="practical/"]`

*... and 36 more failures for this rule*

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3>Events</h3>`
- XPath: `#main > h3`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input type="text" name="q" id="q" class="span2" value="">`
- XPath: `#q`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html lang="en">`
- XPath: `html`

#### Rule: [link-in-text-block](https://dequeuniversity.com/rules/axe/4.11/link-in-text-block?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.1](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color) (Level A)

**Failure 1:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a href="https://magnum-erc.weebly.com/">ERC project</a>`
- XPath: `a[href$="magnum-erc.weebly.com/"]`

**Failure 2:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a href="https://www.skao.int/en">SKAO</a>`
- XPath: `a[href="https://www.skao.int/en"]`

**Failure 3:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a href="https://developer.skao.int/projects/ska-sdp-integration/en/latest/">SDP</a>`
- XPath: `p:nth-child(4) > a:nth-child(3)`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h1 class="logo"><a href="/2026/">fosdem-2026</a></h1>`
- XPath: `.logo`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="home"><a href="/2026/">Home</a></li>`
- XPath: `#nav > .home`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/about/">About</a></li>`
- XPath: `#nav > li:nth-child(2)`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/news/">News</a></li>`
- XPath: `#nav > li:nth-child(3)`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="active"><a href="/2026/schedule/">Schedule</a></li>`
- XPath: `#nav > .active`

*... and 6 more failures for this rule*

### https://fosdem.org/2026/schedule/speaker/effie_mouzeli/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/about/">About</a>`
- XPath: `li:nth-child(2) > a[href$="about/"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/news/">News</a>`
- XPath: `li:nth-child(3) > a[href$="news/"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/stands/">Stands</a>`
- XPath: `li:nth-child(5) > a[href$="stands/"]`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/volunteer/">Volunteer</a>`
- XPath: `li:nth-child(6) > a[href$="volunteer/"]`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/practical/">Practical</a>`
- XPath: `a[href$="practical/"]`

*... and 28 more failures for this rule*

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3>Events</h3>`
- XPath: `#main > h3`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input type="text" name="q" id="q" class="span2" value="">`
- XPath: `#q`

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
- HTML: `<h1 class="logo"><a href="/2026/">fosdem-2026</a></h1>`
- XPath: `.logo`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="home"><a href="/2026/">Home</a></li>`
- XPath: `#nav > .home`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/about/">About</a></li>`
- XPath: `#nav > li:nth-child(2)`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/news/">News</a></li>`
- XPath: `#nav > li:nth-child(3)`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="active"><a href="/2026/schedule/">Schedule</a></li>`
- XPath: `#nav > .active`

*... and 6 more failures for this rule*

### https://fosdem.org/2026/schedule/speaker/brendan_abolivier/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/about/">About</a>`
- XPath: `li:nth-child(2) > a[href$="about/"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/news/">News</a>`
- XPath: `li:nth-child(3) > a[href$="news/"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/stands/">Stands</a>`
- XPath: `li:nth-child(5) > a[href$="stands/"]`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/volunteer/">Volunteer</a>`
- XPath: `li:nth-child(6) > a[href$="volunteer/"]`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/practical/">Practical</a>`
- XPath: `a[href$="practical/"]`

*... and 27 more failures for this rule*

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3>Events</h3>`
- XPath: `#main > h3`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input type="text" name="q" id="q" class="span2" value="">`
- XPath: `#q`

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
- HTML: `<h1 class="logo"><a href="/2026/">fosdem-2026</a></h1>`
- XPath: `.logo`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="home"><a href="/2026/">Home</a></li>`
- XPath: `#nav > .home`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/about/">About</a></li>`
- XPath: `#nav > li:nth-child(2)`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/news/">News</a></li>`
- XPath: `#nav > li:nth-child(3)`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="active"><a href="/2026/schedule/">Schedule</a></li>`
- XPath: `#nav > .active`

*... and 6 more failures for this rule*

### https://fosdem.org/2026/schedule/speaker/gosia_zagajewska/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/about/">About</a>`
- XPath: `li:nth-child(2) > a[href$="about/"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/news/">News</a>`
- XPath: `li:nth-child(3) > a[href$="news/"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/stands/">Stands</a>`
- XPath: `li:nth-child(5) > a[href$="stands/"]`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/volunteer/">Volunteer</a>`
- XPath: `li:nth-child(6) > a[href$="volunteer/"]`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/practical/">Practical</a>`
- XPath: `a[href$="practical/"]`

*... and 27 more failures for this rule*

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3>Events</h3>`
- XPath: `#main > h3`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input type="text" name="q" id="q" class="span2" value="">`
- XPath: `#q`

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
- HTML: `<h1 class="logo"><a href="/2026/">fosdem-2026</a></h1>`
- XPath: `.logo`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="home"><a href="/2026/">Home</a></li>`
- XPath: `#nav > .home`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/about/">About</a></li>`
- XPath: `#nav > li:nth-child(2)`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/news/">News</a></li>`
- XPath: `#nav > li:nth-child(3)`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="active"><a href="/2026/schedule/">Schedule</a></li>`
- XPath: `#nav > .active`

*... and 6 more failures for this rule*

### https://fosdem.org/2026/schedule/speaker/alex_snaps/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/about/">About</a>`
- XPath: `li:nth-child(2) > a[href$="about/"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/news/">News</a>`
- XPath: `li:nth-child(3) > a[href$="news/"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/stands/">Stands</a>`
- XPath: `li:nth-child(5) > a[href$="stands/"]`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/volunteer/">Volunteer</a>`
- XPath: `li:nth-child(6) > a[href$="volunteer/"]`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/practical/">Practical</a>`
- XPath: `a[href$="practical/"]`

*... and 28 more failures for this rule*

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3>Events</h3>`
- XPath: `#main > h3`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input type="text" name="q" id="q" class="span2" value="">`
- XPath: `#q`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html lang="en">`
- XPath: `html`

#### Rule: [link-in-text-block](https://dequeuniversity.com/rules/axe/4.11/link-in-text-block?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.1](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color) (Level A)

**Failure 1:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a href="https://kuadrant.io">Kuadrant</a>`
- XPath: `a[href$="kuadrant.io"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h1 class="logo"><a href="/2026/">fosdem-2026</a></h1>`
- XPath: `.logo`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="home"><a href="/2026/">Home</a></li>`
- XPath: `#nav > .home`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/about/">About</a></li>`
- XPath: `#nav > li:nth-child(2)`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/news/">News</a></li>`
- XPath: `#nav > li:nth-child(3)`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="active"><a href="/2026/schedule/">Schedule</a></li>`
- XPath: `#nav > .active`

*... and 6 more failures for this rule*

### https://fosdem.org/2026/schedule/event/XHZVPF-inxpect-profiling/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/about/">About</a>`
- XPath: `li:nth-child(2) > a[href$="about/"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/news/">News</a>`
- XPath: `li:nth-child(3) > a[href$="news/"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/stands/">Stands</a>`
- XPath: `li:nth-child(5) > a[href$="stands/"]`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/volunteer/">Volunteer</a>`
- XPath: `li:nth-child(6) > a[href$="volunteer/"]`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/practical/">Practical</a>`
- XPath: `a[href$="practical/"]`

*... and 39 more failures for this rule*

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: Headings should not be empty
- HTML: `<h2></h2>`
- XPath: `#pagetitles > h2`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input type="text" name="q" id="q" class="span2" value="">`
- XPath: `#q`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html lang="en">`
- XPath: `html`

#### Rule: [link-in-text-block](https://dequeuniversity.com/rules/axe/4.11/link-in-text-block?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.1](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color) (Level A)

**Failure 1:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a href="/2026/schedule/track/ebpf/">eBPF</a>`
- XPath: `li:nth-child(1) > a[href$="ebpf/"]`

**Failure 2:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a class="value-title" title="2026-01-31T13:45:00+01:00" href="/2026/schedule/day/saturday/#1345">13:45</a>`
- XPath: `a[title="2026-01-31T13:45:00+01:00"]`

**Failure 3:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a class="value-title" title="2026-01-31T14:15:00+01:00" href="/2026/schedule/day/saturday/#1415">14:15</a>`
- XPath: `a[title="2026-01-31T14:15:00+01:00"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h1 class="logo"><a href="/2026/">fosdem-2026</a></h1>`
- XPath: `.logo`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="home"><a href="/2026/">Home</a></li>`
- XPath: `#nav > .home`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/about/">About</a></li>`
- XPath: `#nav > li:nth-child(2)`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/news/">News</a></li>`
- XPath: `#nav > li:nth-child(3)`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="active"><a href="/2026/schedule/">Schedule</a></li>`
- XPath: `#nav > .active`

*... and 6 more failures for this rule*

### https://fosdem.org/2026/schedule/speaker/jim_bauwens/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/about/">About</a>`
- XPath: `li:nth-child(2) > a[href$="about/"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/news/">News</a>`
- XPath: `li:nth-child(3) > a[href$="news/"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/stands/">Stands</a>`
- XPath: `li:nth-child(5) > a[href$="stands/"]`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/volunteer/">Volunteer</a>`
- XPath: `li:nth-child(6) > a[href$="volunteer/"]`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/practical/">Practical</a>`
- XPath: `a[href$="practical/"]`

*... and 27 more failures for this rule*

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3>Events</h3>`
- XPath: `#main > h3`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input type="text" name="q" id="q" class="span2" value="">`
- XPath: `#q`

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
- HTML: `<h1 class="logo"><a href="/2026/">fosdem-2026</a></h1>`
- XPath: `.logo`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="home"><a href="/2026/">Home</a></li>`
- XPath: `#nav > .home`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/about/">About</a></li>`
- XPath: `#nav > li:nth-child(2)`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/news/">News</a></li>`
- XPath: `#nav > li:nth-child(3)`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="active"><a href="/2026/schedule/">Schedule</a></li>`
- XPath: `#nav > .active`

*... and 6 more failures for this rule*

### https://fosdem.org/2026/schedule/speaker/davide_thezero/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/about/">About</a>`
- XPath: `li:nth-child(2) > a[href$="about/"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/news/">News</a>`
- XPath: `li:nth-child(3) > a[href$="news/"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/stands/">Stands</a>`
- XPath: `li:nth-child(5) > a[href$="stands/"]`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/volunteer/">Volunteer</a>`
- XPath: `li:nth-child(6) > a[href$="volunteer/"]`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/practical/">Practical</a>`
- XPath: `a[href$="practical/"]`

*... and 27 more failures for this rule*

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3>Events</h3>`
- XPath: `#main > h3`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input type="text" name="q" id="q" class="span2" value="">`
- XPath: `#q`

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
- HTML: `<h1 class="logo"><a href="/2026/">fosdem-2026</a></h1>`
- XPath: `.logo`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="home"><a href="/2026/">Home</a></li>`
- XPath: `#nav > .home`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/about/">About</a></li>`
- XPath: `#nav > li:nth-child(2)`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/news/">News</a></li>`
- XPath: `#nav > li:nth-child(3)`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="active"><a href="/2026/schedule/">Schedule</a></li>`
- XPath: `#nav > .active`

*... and 6 more failures for this rule*

### https://fosdem.org/2026/schedule/event/TYX3FF-accessible_software_performance/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/about/">About</a>`
- XPath: `li:nth-child(2) > a[href$="about/"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/news/">News</a>`
- XPath: `li:nth-child(3) > a[href$="news/"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/stands/">Stands</a>`
- XPath: `li:nth-child(5) > a[href$="stands/"]`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/volunteer/">Volunteer</a>`
- XPath: `li:nth-child(6) > a[href$="volunteer/"]`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/practical/">Practical</a>`
- XPath: `a[href$="practical/"]`

*... and 37 more failures for this rule*

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: Headings should not be empty
- HTML: `<h2></h2>`
- XPath: `#pagetitles > h2`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input type="text" name="q" id="q" class="span2" value="">`
- XPath: `#q`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html lang="en">`
- XPath: `html`

#### Rule: [link-in-text-block](https://dequeuniversity.com/rules/axe/4.11/link-in-text-block?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.1](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color) (Level A)

**Failure 1:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a class="value-title" title="2026-02-01T09:00:00+01:00" href="/2026/schedule/day/sunday/#0900">09:00</a>`
- XPath: `a[title="2026-02-01T09:00:00+01:00"]`

**Failure 2:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a class="value-title" title="2026-02-01T09:50:00+01:00" href="/2026/schedule/day/sunday/#0950">09:50</a>`
- XPath: `a[title="2026-02-01T09:50:00+01:00"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h1 class="logo"><a href="/2026/">fosdem-2026</a></h1>`
- XPath: `.logo`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="home"><a href="/2026/">Home</a></li>`
- XPath: `#nav > .home`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/about/">About</a></li>`
- XPath: `#nav > li:nth-child(2)`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/news/">News</a></li>`
- XPath: `#nav > li:nth-child(3)`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="active"><a href="/2026/schedule/">Schedule</a></li>`
- XPath: `#nav > .active`

*... and 6 more failures for this rule*

### https://fosdem.org/2026/schedule/speaker/jade/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/about/">About</a>`
- XPath: `li:nth-child(2) > a[href$="about/"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/news/">News</a>`
- XPath: `li:nth-child(3) > a[href$="news/"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/stands/">Stands</a>`
- XPath: `li:nth-child(5) > a[href$="stands/"]`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/volunteer/">Volunteer</a>`
- XPath: `li:nth-child(6) > a[href$="volunteer/"]`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/practical/">Practical</a>`
- XPath: `a[href$="practical/"]`

*... and 28 more failures for this rule*

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3>Events</h3>`
- XPath: `#main > h3`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input type="text" name="q" id="q" class="span2" value="">`
- XPath: `#q`

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
- HTML: `<h1 class="logo"><a href="/2026/">fosdem-2026</a></h1>`
- XPath: `.logo`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="home"><a href="/2026/">Home</a></li>`
- XPath: `#nav > .home`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/about/">About</a></li>`
- XPath: `#nav > li:nth-child(2)`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/news/">News</a></li>`
- XPath: `#nav > li:nth-child(3)`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="active"><a href="/2026/schedule/">Schedule</a></li>`
- XPath: `#nav > .active`

*... and 6 more failures for this rule*

### https://fosdem.org/2026/schedule/speaker/pablo_del_arco/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/about/">About</a>`
- XPath: `li:nth-child(2) > a[href$="about/"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/news/">News</a>`
- XPath: `li:nth-child(3) > a[href$="news/"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/stands/">Stands</a>`
- XPath: `li:nth-child(5) > a[href$="stands/"]`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/volunteer/">Volunteer</a>`
- XPath: `li:nth-child(6) > a[href$="volunteer/"]`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/practical/">Practical</a>`
- XPath: `a[href$="practical/"]`

*... and 27 more failures for this rule*

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3>Events</h3>`
- XPath: `#main > h3`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input type="text" name="q" id="q" class="span2" value="">`
- XPath: `#q`

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
- HTML: `<h1 class="logo"><a href="/2026/">fosdem-2026</a></h1>`
- XPath: `.logo`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="home"><a href="/2026/">Home</a></li>`
- XPath: `#nav > .home`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/about/">About</a></li>`
- XPath: `#nav > li:nth-child(2)`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/news/">News</a></li>`
- XPath: `#nav > li:nth-child(3)`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="active"><a href="/2026/schedule/">Schedule</a></li>`
- XPath: `#nav > .active`

*... and 6 more failures for this rule*

### https://fosdem.org/2026/schedule/speaker/ella_jakubowska/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/about/">About</a>`
- XPath: `li:nth-child(2) > a[href$="about/"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/news/">News</a>`
- XPath: `li:nth-child(3) > a[href$="news/"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/stands/">Stands</a>`
- XPath: `li:nth-child(5) > a[href$="stands/"]`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/volunteer/">Volunteer</a>`
- XPath: `li:nth-child(6) > a[href$="volunteer/"]`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/practical/">Practical</a>`
- XPath: `a[href$="practical/"]`

*... and 33 more failures for this rule*

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3>Events</h3>`
- XPath: `#main > h3`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input type="text" name="q" id="q" class="span2" value="">`
- XPath: `#q`

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
- HTML: `<h1 class="logo"><a href="/2026/">fosdem-2026</a></h1>`
- XPath: `.logo`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="home"><a href="/2026/">Home</a></li>`
- XPath: `#nav > .home`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/about/">About</a></li>`
- XPath: `#nav > li:nth-child(2)`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/news/">News</a></li>`
- XPath: `#nav > li:nth-child(3)`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="active"><a href="/2026/schedule/">Schedule</a></li>`
- XPath: `#nav > .active`

*... and 6 more failures for this rule*

### https://fosdem.org/2026/schedule/speaker/kate_stewart/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/about/">About</a>`
- XPath: `li:nth-child(2) > a[href$="about/"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/news/">News</a>`
- XPath: `li:nth-child(3) > a[href$="news/"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/stands/">Stands</a>`
- XPath: `li:nth-child(5) > a[href$="stands/"]`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/volunteer/">Volunteer</a>`
- XPath: `li:nth-child(6) > a[href$="volunteer/"]`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/practical/">Practical</a>`
- XPath: `a[href$="practical/"]`

*... and 39 more failures for this rule*

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3>Events</h3>`
- XPath: `#main > h3`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input type="text" name="q" id="q" class="span2" value="">`
- XPath: `#q`

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
- HTML: `<h1 class="logo"><a href="/2026/">fosdem-2026</a></h1>`
- XPath: `.logo`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="home"><a href="/2026/">Home</a></li>`
- XPath: `#nav > .home`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/about/">About</a></li>`
- XPath: `#nav > li:nth-child(2)`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/news/">News</a></li>`
- XPath: `#nav > li:nth-child(3)`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="active"><a href="/2026/schedule/">Schedule</a></li>`
- XPath: `#nav > .active`

*... and 6 more failures for this rule*

### https://fosdem.org/2026/schedule/event/WNLJ3C-private-vc-funding-commercial-open-source-flywheel/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/about/">About</a>`
- XPath: `li:nth-child(2) > a[href$="about/"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/news/">News</a>`
- XPath: `li:nth-child(3) > a[href$="news/"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/stands/">Stands</a>`
- XPath: `li:nth-child(5) > a[href$="stands/"]`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/volunteer/">Volunteer</a>`
- XPath: `li:nth-child(6) > a[href$="volunteer/"]`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/practical/">Practical</a>`
- XPath: `a[href$="practical/"]`

*... and 37 more failures for this rule*

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: Headings should not be empty
- HTML: `<h2></h2>`
- XPath: `#pagetitles > h2`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input type="text" name="q" id="q" class="span2" value="">`
- XPath: `#q`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html lang="en">`
- XPath: `html`

#### Rule: [link-in-text-block](https://dequeuniversity.com/rules/axe/4.11/link-in-text-block?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.1](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color) (Level A)

**Failure 1:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a class="value-title" title="2026-01-31T18:20:00+01:00" href="/2026/schedule/day/saturday/#1820">18:20</a>`
- XPath: `a[title="2026-01-31T18:20:00+01:00"]`

**Failure 2:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a class="value-title" title="2026-01-31T18:50:00+01:00" href="/2026/schedule/day/saturday/#1850">18:50</a>`
- XPath: `a[title="2026-01-31T18:50:00+01:00"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h1 class="logo"><a href="/2026/">fosdem-2026</a></h1>`
- XPath: `.logo`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="home"><a href="/2026/">Home</a></li>`
- XPath: `#nav > .home`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/about/">About</a></li>`
- XPath: `#nav > li:nth-child(2)`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/news/">News</a></li>`
- XPath: `#nav > li:nth-child(3)`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="active"><a href="/2026/schedule/">Schedule</a></li>`
- XPath: `#nav > .active`

*... and 6 more failures for this rule*

### https://fosdem.org/2026/schedule/speaker/xuan-son_nguyen/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/about/">About</a>`
- XPath: `li:nth-child(2) > a[href$="about/"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/news/">News</a>`
- XPath: `li:nth-child(3) > a[href$="news/"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/stands/">Stands</a>`
- XPath: `li:nth-child(5) > a[href$="stands/"]`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/volunteer/">Volunteer</a>`
- XPath: `li:nth-child(6) > a[href$="volunteer/"]`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/practical/">Practical</a>`
- XPath: `a[href$="practical/"]`

*... and 27 more failures for this rule*

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3>Events</h3>`
- XPath: `#main > h3`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input type="text" name="q" id="q" class="span2" value="">`
- XPath: `#q`

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
- HTML: `<h1 class="logo"><a href="/2026/">fosdem-2026</a></h1>`
- XPath: `.logo`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="home"><a href="/2026/">Home</a></li>`
- XPath: `#nav > .home`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/about/">About</a></li>`
- XPath: `#nav > li:nth-child(2)`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/news/">News</a></li>`
- XPath: `#nav > li:nth-child(3)`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="active"><a href="/2026/schedule/">Schedule</a></li>`
- XPath: `#nav > .active`

*... and 6 more failures for this rule*

### https://fosdem.org/2026/practical/online/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/about/">About</a>`
- XPath: `li:nth-child(2) > a[href$="about/"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/news/">News</a>`
- XPath: `li:nth-child(3) > a[href$="news/"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/schedule/">Schedule</a>`
- XPath: `li:nth-child(4) > a[href$="schedule/"]`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/stands/">Stands</a>`
- XPath: `li:nth-child(5) > a[href$="stands/"]`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/volunteer/">Volunteer</a>`
- XPath: `li:nth-child(6) > a[href$="volunteer/"]`

*... and 21 more failures for this rule*

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3>FOSDEM 2026 is again in-person.</h3>`
- XPath: `#main > h3`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input type="text" name="q" id="q" class="span2" value="">`
- XPath: `#q`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html lang="en">`
- XPath: `html`

#### Rule: [link-in-text-block](https://dequeuniversity.com/rules/axe/4.11/link-in-text-block?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.1](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color) (Level A)

**Failure 1:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a href="/2026/practical/transportation/">the transportation page</a>`
- XPath: `p > a`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h1 class="logo"><a href="/2026/">fosdem-2026</a></h1>`
- XPath: `.logo`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="home"><a href="/2026/">Home</a></li>`
- XPath: `#nav > .home`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/about/">About</a></li>`
- XPath: `#nav > li:nth-child(2)`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/news/">News</a></li>`
- XPath: `#nav > li:nth-child(3)`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/schedule/">Schedule</a></li>`
- XPath: `#nav > li:nth-child(4)`

*... and 6 more failures for this rule*

### https://fosdem.org/2026/schedule/speaker/ruan_murgatroyd/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/about/">About</a>`
- XPath: `li:nth-child(2) > a[href$="about/"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/news/">News</a>`
- XPath: `li:nth-child(3) > a[href$="news/"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/stands/">Stands</a>`
- XPath: `li:nth-child(5) > a[href$="stands/"]`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/volunteer/">Volunteer</a>`
- XPath: `li:nth-child(6) > a[href$="volunteer/"]`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/practical/">Practical</a>`
- XPath: `a[href$="practical/"]`

*... and 28 more failures for this rule*

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3>Events</h3>`
- XPath: `#main > h3`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input type="text" name="q" id="q" class="span2" value="">`
- XPath: `#q`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html lang="en">`
- XPath: `html`

#### Rule: [link-in-text-block](https://dequeuniversity.com/rules/axe/4.11/link-in-text-block?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.1](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color) (Level A)

**Failure 1:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a href="https://rjm.ie">Ruán Murgatroyd</a>`
- XPath: `a[href$="rjm.ie"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h1 class="logo"><a href="/2026/">fosdem-2026</a></h1>`
- XPath: `.logo`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="home"><a href="/2026/">Home</a></li>`
- XPath: `#nav > .home`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/about/">About</a></li>`
- XPath: `#nav > li:nth-child(2)`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/news/">News</a></li>`
- XPath: `#nav > li:nth-child(3)`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="active"><a href="/2026/schedule/">Schedule</a></li>`
- XPath: `#nav > .active`

*... and 6 more failures for this rule*

### https://fosdem.org/2026/schedule/event/GSNU89-teleportal/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/about/">About</a>`
- XPath: `li:nth-child(2) > a[href$="about/"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/news/">News</a>`
- XPath: `li:nth-child(3) > a[href$="news/"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/stands/">Stands</a>`
- XPath: `li:nth-child(5) > a[href$="stands/"]`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/volunteer/">Volunteer</a>`
- XPath: `li:nth-child(6) > a[href$="volunteer/"]`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/practical/">Practical</a>`
- XPath: `a[href$="practical/"]`

*... and 42 more failures for this rule*

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: Headings should not be empty
- HTML: `<h2></h2>`
- XPath: `#pagetitles > h2`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input type="text" name="q" id="q" class="span2" value="">`
- XPath: `#q`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html lang="en">`
- XPath: `html`

#### Rule: [link-in-text-block](https://dequeuniversity.com/rules/axe/4.11/link-in-text-block?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.1](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color) (Level A)

**Failure 1:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a class="value-title" title="2026-02-01T13:55:00+01:00" href="/2026/schedule/day/sunday/#1355">13:55</a>`
- XPath: `a[title="2026-02-01T13:55:00+01:00"]`

**Failure 2:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a class="value-title" title="2026-02-01T14:00:00+01:00" href="/2026/schedule/day/sunday/#1400">14:00</a>`
- XPath: `a[title="2026-02-01T14:00:00+01:00"]`

**Failure 3:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a href="https://teleportal.tools">Teleportal</a>`
- XPath: `p > a[href$="teleportal.tools"]`

**Failure 4:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a href="https://yjs.dev/">Y.js CRDT</a>`
- XPath: `a[href$="yjs.dev/"]`

**Failure 5:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a href="https://tiptap.dev/docs/hocuspocus/">Hocuspocus</a>`
- XPath: `p > a:nth-child(3)`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h1 class="logo"><a href="/2026/">fosdem-2026</a></h1>`
- XPath: `.logo`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="home"><a href="/2026/">Home</a></li>`
- XPath: `#nav > .home`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/about/">About</a></li>`
- XPath: `#nav > li:nth-child(2)`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/news/">News</a></li>`
- XPath: `#nav > li:nth-child(3)`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="active"><a href="/2026/schedule/">Schedule</a></li>`
- XPath: `#nav > .active`

*... and 6 more failures for this rule*

### https://fosdem.org/2026/schedule/event/QKNMJN-package-management-in-the-hands-of-users/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/about/">About</a>`
- XPath: `li:nth-child(2) > a[href$="about/"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/news/">News</a>`
- XPath: `li:nth-child(3) > a[href$="news/"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/stands/">Stands</a>`
- XPath: `li:nth-child(5) > a[href$="stands/"]`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/volunteer/">Volunteer</a>`
- XPath: `li:nth-child(6) > a[href$="volunteer/"]`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/practical/">Practical</a>`
- XPath: `a[href$="practical/"]`

*... and 39 more failures for this rule*

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: Headings should not be empty
- HTML: `<h2></h2>`
- XPath: `#pagetitles > h2`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/2026/schedule/event/QKNMJN-package-management-in-the-hands-of-users/QKNMJN-package-management-in-the-hands-of-users-7da0a6d7f0819cb1bca8f839833438f63dfa9da2ee62ed0bf3dc24759af55b6f.png" class="event-logo">`
- XPath: `img`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input type="text" name="q" id="q" class="span2" value="">`
- XPath: `#q`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html lang="en">`
- XPath: `html`

#### Rule: [link-in-text-block](https://dequeuniversity.com/rules/axe/4.11/link-in-text-block?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.1](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color) (Level A)

**Failure 1:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a class="value-title" title="2026-02-01T14:30:00+01:00" href="/2026/schedule/day/sunday/#1430">14:30</a>`
- XPath: `a[title="2026-02-01T14:30:00+01:00"]`

**Failure 2:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a class="value-title" title="2026-02-01T14:55:00+01:00" href="/2026/schedule/day/sunday/#1455">14:55</a>`
- XPath: `a[title="2026-02-01T14:55:00+01:00"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h1 class="logo"><a href="/2026/">fosdem-2026</a></h1>`
- XPath: `.logo`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="home"><a href="/2026/">Home</a></li>`
- XPath: `#nav > .home`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/about/">About</a></li>`
- XPath: `#nav > li:nth-child(2)`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/news/">News</a></li>`
- XPath: `#nav > li:nth-child(3)`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="active"><a href="/2026/schedule/">Schedule</a></li>`
- XPath: `#nav > .active`

*... and 6 more failures for this rule*

### https://fosdem.org/2026/schedule/speaker/simon_clavier/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/about/">About</a>`
- XPath: `li:nth-child(2) > a[href$="about/"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/news/">News</a>`
- XPath: `li:nth-child(3) > a[href$="news/"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/stands/">Stands</a>`
- XPath: `li:nth-child(5) > a[href$="stands/"]`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/volunteer/">Volunteer</a>`
- XPath: `li:nth-child(6) > a[href$="volunteer/"]`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/practical/">Practical</a>`
- XPath: `a[href$="practical/"]`

*... and 27 more failures for this rule*

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3>Events</h3>`
- XPath: `#main > h3`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input type="text" name="q" id="q" class="span2" value="">`
- XPath: `#q`

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
- HTML: `<h1 class="logo"><a href="/2026/">fosdem-2026</a></h1>`
- XPath: `.logo`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="home"><a href="/2026/">Home</a></li>`
- XPath: `#nav > .home`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/about/">About</a></li>`
- XPath: `#nav > li:nth-child(2)`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/news/">News</a></li>`
- XPath: `#nav > li:nth-child(3)`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="active"><a href="/2026/schedule/">Schedule</a></li>`
- XPath: `#nav > .active`

*... and 6 more failures for this rule*

### https://fosdem.org/2026/schedule/event/VGXWNS-taming_the_llm_zoo_with_docker_model_runner_inference_with_oci_artifacts_llama_c/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/about/">About</a>`
- XPath: `li:nth-child(2) > a[href$="about/"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/news/">News</a>`
- XPath: `li:nth-child(3) > a[href$="news/"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/stands/">Stands</a>`
- XPath: `li:nth-child(5) > a[href$="stands/"]`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/volunteer/">Volunteer</a>`
- XPath: `li:nth-child(6) > a[href$="volunteer/"]`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/practical/">Practical</a>`
- XPath: `a[href$="practical/"]`

*... and 37 more failures for this rule*

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: Headings should not be empty
- HTML: `<h2></h2>`
- XPath: `#pagetitles > h2`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/2026/schedule/event/VGXWNS-taming_the_llm_zoo_with_docker_model_runner_inference_with_oci_artifacts_llama_c/VGXWNS-taming_the_llm_zoo_with_docker_model_runner_inference_with_oci_artifacts_llama_c-532434ae061121adb0062456821735d71b0d67b1c1731e8b271c382ec9287c98.jpeg" class="event-logo">`
- XPath: `.event-logo`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input type="text" name="q" id="q" class="span2" value="">`
- XPath: `#q`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html lang="en">`
- XPath: `html`

#### Rule: [link-in-text-block](https://dequeuniversity.com/rules/axe/4.11/link-in-text-block?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.1](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color) (Level A)

**Failure 1:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a class="value-title" title="2026-01-31T16:05:00+01:00" href="/2026/schedule/day/saturday/#1605">16:05</a>`
- XPath: `a[title="2026-01-31T16:05:00+01:00"]`

**Failure 2:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a class="value-title" title="2026-01-31T16:25:00+01:00" href="/2026/schedule/day/saturday/#1625">16:25</a>`
- XPath: `a[title="2026-01-31T16:25:00+01:00"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h1 class="logo"><a href="/2026/">fosdem-2026</a></h1>`
- XPath: `.logo`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="home"><a href="/2026/">Home</a></li>`
- XPath: `#nav > .home`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/about/">About</a></li>`
- XPath: `#nav > li:nth-child(2)`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/news/">News</a></li>`
- XPath: `#nav > li:nth-child(3)`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="active"><a href="/2026/schedule/">Schedule</a></li>`
- XPath: `#nav > .active`

*... and 6 more failures for this rule*

### https://fosdem.org/2026/schedule/speaker/m_palanikannan/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/about/">About</a>`
- XPath: `li:nth-child(2) > a[href$="about/"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/news/">News</a>`
- XPath: `li:nth-child(3) > a[href$="news/"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/stands/">Stands</a>`
- XPath: `li:nth-child(5) > a[href$="stands/"]`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/volunteer/">Volunteer</a>`
- XPath: `li:nth-child(6) > a[href$="volunteer/"]`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/practical/">Practical</a>`
- XPath: `a[href$="practical/"]`

*... and 28 more failures for this rule*

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3>Events</h3>`
- XPath: `#main > h3`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input type="text" name="q" id="q" class="span2" value="">`
- XPath: `#q`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html lang="en">`
- XPath: `html`

#### Rule: [link-in-text-block](https://dequeuniversity.com/rules/axe/4.11/link-in-text-block?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.1](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color) (Level A)

**Failure 1:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a href="https://www.palanikannan.com">Palanikannan</a>`
- XPath: `a[href$="www.palanikannan.com"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h1 class="logo"><a href="/2026/">fosdem-2026</a></h1>`
- XPath: `.logo`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="home"><a href="/2026/">Home</a></li>`
- XPath: `#nav > .home`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/about/">About</a></li>`
- XPath: `#nav > li:nth-child(2)`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/news/">News</a></li>`
- XPath: `#nav > li:nth-child(3)`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="active"><a href="/2026/schedule/">Schedule</a></li>`
- XPath: `#nav > .active`

*... and 6 more failures for this rule*

### https://fosdem.org/2026/schedule/speaker/sdomi/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/about/">About</a>`
- XPath: `li:nth-child(2) > a[href$="about/"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/news/">News</a>`
- XPath: `li:nth-child(3) > a[href$="news/"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/stands/">Stands</a>`
- XPath: `li:nth-child(5) > a[href$="stands/"]`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/volunteer/">Volunteer</a>`
- XPath: `li:nth-child(6) > a[href$="volunteer/"]`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/practical/">Practical</a>`
- XPath: `a[href$="practical/"]`

*... and 29 more failures for this rule*

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3>Events</h3>`
- XPath: `#main > h3`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input type="text" name="q" id="q" class="span2" value="">`
- XPath: `#q`

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
- HTML: `<h1 class="logo"><a href="/2026/">fosdem-2026</a></h1>`
- XPath: `.logo`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="home"><a href="/2026/">Home</a></li>`
- XPath: `#nav > .home`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/about/">About</a></li>`
- XPath: `#nav > li:nth-child(2)`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/news/">News</a></li>`
- XPath: `#nav > li:nth-child(3)`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="active"><a href="/2026/schedule/">Schedule</a></li>`
- XPath: `#nav > .active`

*... and 6 more failures for this rule*

### https://fosdem.org/2026/schedule/speaker/t-lo/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/about/">About</a>`
- XPath: `li:nth-child(2) > a[href$="about/"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/news/">News</a>`
- XPath: `li:nth-child(3) > a[href$="news/"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/stands/">Stands</a>`
- XPath: `li:nth-child(5) > a[href$="stands/"]`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/volunteer/">Volunteer</a>`
- XPath: `li:nth-child(6) > a[href$="volunteer/"]`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/practical/">Practical</a>`
- XPath: `a[href$="practical/"]`

*... and 27 more failures for this rule*

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3>Events</h3>`
- XPath: `#main > h3`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input type="text" name="q" id="q" class="span2" value="">`
- XPath: `#q`

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
- HTML: `<h1 class="logo"><a href="/2026/">fosdem-2026</a></h1>`
- XPath: `.logo`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="home"><a href="/2026/">Home</a></li>`
- XPath: `#nav > .home`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/about/">About</a></li>`
- XPath: `#nav > li:nth-child(2)`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/news/">News</a></li>`
- XPath: `#nav > li:nth-child(3)`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="active"><a href="/2026/schedule/">Schedule</a></li>`
- XPath: `#nav > .active`

*... and 6 more failures for this rule*

### https://fosdem.org/2026/schedule/event/GWRDNT-rust-type-checking-python/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/about/">About</a>`
- XPath: `li:nth-child(2) > a[href$="about/"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/news/">News</a>`
- XPath: `li:nth-child(3) > a[href$="news/"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/stands/">Stands</a>`
- XPath: `li:nth-child(5) > a[href$="stands/"]`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/volunteer/">Volunteer</a>`
- XPath: `li:nth-child(6) > a[href$="volunteer/"]`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/practical/">Practical</a>`
- XPath: `a[href$="practical/"]`

*... and 38 more failures for this rule*

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: Headings should not be empty
- HTML: `<h2></h2>`
- XPath: `#pagetitles > h2`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input type="text" name="q" id="q" class="span2" value="">`
- XPath: `#q`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html lang="en">`
- XPath: `html`

#### Rule: [link-in-text-block](https://dequeuniversity.com/rules/axe/4.11/link-in-text-block?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.1](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color) (Level A)

**Failure 1:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a href="/2026/schedule/track/rust/">Rust</a>`
- XPath: `li:nth-child(1) > a[href$="rust/"]`

**Failure 2:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a class="value-title" title="2026-02-01T13:30:00+01:00" href="/2026/schedule/day/sunday/#1330">13:30</a>`
- XPath: `a[title="2026-02-01T13:30:00+01:00"]`

**Failure 3:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a class="value-title" title="2026-02-01T13:55:00+01:00" href="/2026/schedule/day/sunday/#1355">13:55</a>`
- XPath: `a[title="2026-02-01T13:55:00+01:00"]`

**Failure 4:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a href="https://docs.astral.sh/ty/">Ty</a>`
- XPath: `p:nth-child(1) > a[href$="ty/"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h1 class="logo"><a href="/2026/">fosdem-2026</a></h1>`
- XPath: `.logo`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="home"><a href="/2026/">Home</a></li>`
- XPath: `#nav > .home`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/about/">About</a></li>`
- XPath: `#nav > li:nth-child(2)`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/news/">News</a></li>`
- XPath: `#nav > li:nth-child(3)`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="active"><a href="/2026/schedule/">Schedule</a></li>`
- XPath: `#nav > .active`

*... and 6 more failures for this rule*

### https://fosdem.org/2026/schedule/speaker/ignat_korchagin/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/about/">About</a>`
- XPath: `li:nth-child(2) > a[href$="about/"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/news/">News</a>`
- XPath: `li:nth-child(3) > a[href$="news/"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/stands/">Stands</a>`
- XPath: `li:nth-child(5) > a[href$="stands/"]`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/volunteer/">Volunteer</a>`
- XPath: `li:nth-child(6) > a[href$="volunteer/"]`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/practical/">Practical</a>`
- XPath: `a[href$="practical/"]`

*... and 27 more failures for this rule*

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3>Events</h3>`
- XPath: `#main > h3`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input type="text" name="q" id="q" class="span2" value="">`
- XPath: `#q`

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
- HTML: `<h1 class="logo"><a href="/2026/">fosdem-2026</a></h1>`
- XPath: `.logo`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="home"><a href="/2026/">Home</a></li>`
- XPath: `#nav > .home`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/about/">About</a></li>`
- XPath: `#nav > li:nth-child(2)`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/news/">News</a></li>`
- XPath: `#nav > li:nth-child(3)`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="active"><a href="/2026/schedule/">Schedule</a></li>`
- XPath: `#nav > .active`

*... and 6 more failures for this rule*

### https://fosdem.org/2026/schedule/speaker/guillaume_ayoub/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/about/">About</a>`
- XPath: `li:nth-child(2) > a[href$="about/"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/news/">News</a>`
- XPath: `li:nth-child(3) > a[href$="news/"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/stands/">Stands</a>`
- XPath: `li:nth-child(5) > a[href$="stands/"]`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/volunteer/">Volunteer</a>`
- XPath: `li:nth-child(6) > a[href$="volunteer/"]`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/practical/">Practical</a>`
- XPath: `a[href$="practical/"]`

*... and 33 more failures for this rule*

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3>Events</h3>`
- XPath: `#main > h3`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input type="text" name="q" id="q" class="span2" value="">`
- XPath: `#q`

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
- HTML: `<h1 class="logo"><a href="/2026/">fosdem-2026</a></h1>`
- XPath: `.logo`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="home"><a href="/2026/">Home</a></li>`
- XPath: `#nav > .home`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/about/">About</a></li>`
- XPath: `#nav > li:nth-child(2)`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/news/">News</a></li>`
- XPath: `#nav > li:nth-child(3)`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="active"><a href="/2026/schedule/">Schedule</a></li>`
- XPath: `#nav > .active`

*... and 6 more failures for this rule*

### https://fosdem.org/2026/schedule/event/SQGLW7-fedora-on-riscv/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/about/">About</a>`
- XPath: `li:nth-child(2) > a[href$="about/"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/news/">News</a>`
- XPath: `li:nth-child(3) > a[href$="news/"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/stands/">Stands</a>`
- XPath: `li:nth-child(5) > a[href$="stands/"]`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/volunteer/">Volunteer</a>`
- XPath: `li:nth-child(6) > a[href$="volunteer/"]`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/practical/">Practical</a>`
- XPath: `a[href$="practical/"]`

*... and 41 more failures for this rule*

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: Headings should not be empty
- HTML: `<h2></h2>`
- XPath: `#pagetitles > h2`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input type="text" name="q" id="q" class="span2" value="">`
- XPath: `#q`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html lang="en">`
- XPath: `html`

#### Rule: [link-in-text-block](https://dequeuniversity.com/rules/axe/4.11/link-in-text-block?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.1](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color) (Level A)

**Failure 1:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a class="value-title" title="2026-01-31T12:00:00+01:00" href="/2026/schedule/day/saturday/#1200">12:00</a>`
- XPath: `a[title="2026-01-31T12:00:00+01:00"]`

**Failure 2:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a class="value-title" title="2026-01-31T12:35:00+01:00" href="/2026/schedule/day/saturday/#1235">12:35</a>`
- XPath: `a[title="2026-01-31T12:35:00+01:00"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h1 class="logo"><a href="/2026/">fosdem-2026</a></h1>`
- XPath: `.logo`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="home"><a href="/2026/">Home</a></li>`
- XPath: `#nav > .home`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/about/">About</a></li>`
- XPath: `#nav > li:nth-child(2)`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/news/">News</a></li>`
- XPath: `#nav > li:nth-child(3)`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="active"><a href="/2026/schedule/">Schedule</a></li>`
- XPath: `#nav > .active`

*... and 6 more failures for this rule*

### https://fosdem.org/2026/schedule/event/WYHDQZ-non-blocking_continuous_code_reviews/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/about/">About</a>`
- XPath: `li:nth-child(2) > a[href$="about/"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/news/">News</a>`
- XPath: `li:nth-child(3) > a[href$="news/"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/stands/">Stands</a>`
- XPath: `li:nth-child(5) > a[href$="stands/"]`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/volunteer/">Volunteer</a>`
- XPath: `li:nth-child(6) > a[href$="volunteer/"]`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/practical/">Practical</a>`
- XPath: `a[href$="practical/"]`

*... and 38 more failures for this rule*

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: Headings should not be empty
- HTML: `<h2></h2>`
- XPath: `#pagetitles > h2`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input type="text" name="q" id="q" class="span2" value="">`
- XPath: `#q`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html lang="en">`
- XPath: `html`

#### Rule: [link-in-text-block](https://dequeuniversity.com/rules/axe/4.11/link-in-text-block?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.1](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color) (Level A)

**Failure 1:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a class="value-title" title="2026-02-01T12:05:00+01:00" href="/2026/schedule/day/sunday/#1205">12:05</a>`
- XPath: `a[title="2026-02-01T12:05:00+01:00"]`

**Failure 2:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a class="value-title" title="2026-02-01T12:30:00+01:00" href="/2026/schedule/day/sunday/#1230">12:30</a>`
- XPath: `a[title="2026-02-01T12:30:00+01:00"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h1 class="logo"><a href="/2026/">fosdem-2026</a></h1>`
- XPath: `.logo`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="home"><a href="/2026/">Home</a></li>`
- XPath: `#nav > .home`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/about/">About</a></li>`
- XPath: `#nav > li:nth-child(2)`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/news/">News</a></li>`
- XPath: `#nav > li:nth-child(3)`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="active"><a href="/2026/schedule/">Schedule</a></li>`
- XPath: `#nav > .active`

*... and 6 more failures for this rule*

### https://fosdem.org/2026/schedule/speaker/romain_hunault/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/about/">About</a>`
- XPath: `li:nth-child(2) > a[href$="about/"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/news/">News</a>`
- XPath: `li:nth-child(3) > a[href$="news/"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/stands/">Stands</a>`
- XPath: `li:nth-child(5) > a[href$="stands/"]`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/volunteer/">Volunteer</a>`
- XPath: `li:nth-child(6) > a[href$="volunteer/"]`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/practical/">Practical</a>`
- XPath: `a[href$="practical/"]`

*... and 33 more failures for this rule*

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3>Events</h3>`
- XPath: `#main > h3`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input type="text" name="q" id="q" class="span2" value="">`
- XPath: `#q`

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
- HTML: `<h1 class="logo"><a href="/2026/">fosdem-2026</a></h1>`
- XPath: `.logo`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="home"><a href="/2026/">Home</a></li>`
- XPath: `#nav > .home`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/about/">About</a></li>`
- XPath: `#nav > li:nth-child(2)`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/news/">News</a></li>`
- XPath: `#nav > li:nth-child(3)`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="active"><a href="/2026/schedule/">Schedule</a></li>`
- XPath: `#nav > .active`

*... and 6 more failures for this rule*

### https://fosdem.org/2026/schedule/speaker/akashdeep_dhar/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/about/">About</a>`
- XPath: `li:nth-child(2) > a[href$="about/"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/news/">News</a>`
- XPath: `li:nth-child(3) > a[href$="news/"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/stands/">Stands</a>`
- XPath: `li:nth-child(5) > a[href$="stands/"]`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/volunteer/">Volunteer</a>`
- XPath: `li:nth-child(6) > a[href$="volunteer/"]`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/practical/">Practical</a>`
- XPath: `a[href$="practical/"]`

*... and 27 more failures for this rule*

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3>Events</h3>`
- XPath: `#main > h3`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input type="text" name="q" id="q" class="span2" value="">`
- XPath: `#q`

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
- HTML: `<h1 class="logo"><a href="/2026/">fosdem-2026</a></h1>`
- XPath: `.logo`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="home"><a href="/2026/">Home</a></li>`
- XPath: `#nav > .home`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/about/">About</a></li>`
- XPath: `#nav > li:nth-child(2)`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/news/">News</a></li>`
- XPath: `#nav > li:nth-child(3)`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="active"><a href="/2026/schedule/">Schedule</a></li>`
- XPath: `#nav > .active`

*... and 6 more failures for this rule*

### https://fosdem.org/2026/schedule/event/HCQRVT-designing_attestations_ui_the_security_and_safety_of_oss_package_supply_chain/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/about/">About</a>`
- XPath: `li:nth-child(2) > a[href$="about/"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/news/">News</a>`
- XPath: `li:nth-child(3) > a[href$="news/"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/stands/">Stands</a>`
- XPath: `li:nth-child(5) > a[href$="stands/"]`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/volunteer/">Volunteer</a>`
- XPath: `li:nth-child(6) > a[href$="volunteer/"]`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/practical/">Practical</a>`
- XPath: `a[href$="practical/"]`

*... and 37 more failures for this rule*

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: Headings should not be empty
- HTML: `<h2></h2>`
- XPath: `#pagetitles > h2`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/2026/schedule/event/HCQRVT-designing_attestations_ui_the_security_and_safety_of_oss_package_supply_chain/HCQRVT-designing_attestations_ui_the_security_and_safety_of_oss_package_supply_chain-b3407ff55e88965aa1c3a56acf37c2a0a839dbffa43abbb2cb11736ec74a144a.png" class="event-logo">`
- XPath: `.event-logo`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input type="text" name="q" id="q" class="span2" value="">`
- XPath: `#q`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html lang="en">`
- XPath: `html`

#### Rule: [link-in-text-block](https://dequeuniversity.com/rules/axe/4.11/link-in-text-block?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.1](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color) (Level A)

**Failure 1:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a class="value-title" title="2026-02-01T13:00:00+01:00" href="/2026/schedule/day/sunday/#1300">13:00</a>`
- XPath: `a[title="2026-02-01T13:00:00+01:00"]`

**Failure 2:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a class="value-title" title="2026-02-01T13:25:00+01:00" href="/2026/schedule/day/sunday/#1325">13:25</a>`
- XPath: `a[title="2026-02-01T13:25:00+01:00"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h1 class="logo"><a href="/2026/">fosdem-2026</a></h1>`
- XPath: `.logo`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="home"><a href="/2026/">Home</a></li>`
- XPath: `#nav > .home`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/about/">About</a></li>`
- XPath: `#nav > li:nth-child(2)`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/news/">News</a></li>`
- XPath: `#nav > li:nth-child(3)`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="active"><a href="/2026/schedule/">Schedule</a></li>`
- XPath: `#nav > .active`

*... and 6 more failures for this rule*

### https://fosdem.org/2026/schedule/event/PUKMWN-how_to_do_a_podcast_with_free_software/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/about/">About</a>`
- XPath: `li:nth-child(2) > a[href$="about/"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/news/">News</a>`
- XPath: `li:nth-child(3) > a[href$="news/"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/stands/">Stands</a>`
- XPath: `li:nth-child(5) > a[href$="stands/"]`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/volunteer/">Volunteer</a>`
- XPath: `li:nth-child(6) > a[href$="volunteer/"]`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/practical/">Practical</a>`
- XPath: `a[href$="practical/"]`

*... and 39 more failures for this rule*

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: Headings should not be empty
- HTML: `<h2></h2>`
- XPath: `#pagetitles > h2`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input type="text" name="q" id="q" class="span2" value="">`
- XPath: `#q`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html lang="en">`
- XPath: `html`

#### Rule: [link-in-text-block](https://dequeuniversity.com/rules/axe/4.11/link-in-text-block?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.1](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color) (Level A)

**Failure 1:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a class="value-title" title="2026-02-01T11:40:00+01:00" href="/2026/schedule/day/sunday/#1140">11:40</a>`
- XPath: `a[title="2026-02-01T11:40:00+01:00"]`

**Failure 2:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a class="value-title" title="2026-02-01T12:05:00+01:00" href="/2026/schedule/day/sunday/#1205">12:05</a>`
- XPath: `a[title="2026-02-01T12:05:00+01:00"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h1 class="logo"><a href="/2026/">fosdem-2026</a></h1>`
- XPath: `.logo`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="home"><a href="/2026/">Home</a></li>`
- XPath: `#nav > .home`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/about/">About</a></li>`
- XPath: `#nav > li:nth-child(2)`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/news/">News</a></li>`
- XPath: `#nav > li:nth-child(3)`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="active"><a href="/2026/schedule/">Schedule</a></li>`
- XPath: `#nav > .active`

*... and 6 more failures for this rule*

### https://fosdem.org/2026/schedule/event/KCWFBD-openflexure_education/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/about/">About</a>`
- XPath: `li:nth-child(2) > a[href$="about/"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/news/">News</a>`
- XPath: `li:nth-child(3) > a[href$="news/"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/stands/">Stands</a>`
- XPath: `li:nth-child(5) > a[href$="stands/"]`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/volunteer/">Volunteer</a>`
- XPath: `li:nth-child(6) > a[href$="volunteer/"]`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/practical/">Practical</a>`
- XPath: `a[href$="practical/"]`

*... and 36 more failures for this rule*

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: Headings should not be empty
- HTML: `<h2></h2>`
- XPath: `#pagetitles > h2`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/2026/schedule/event/KCWFBD-openflexure_education/KCWFBD-openflexure_education-0ab1996215cbbd200776cc205b2c7a28a5b18d613b51564993eb4123e79d5695.jpg" class="event-logo">`
- XPath: `img`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input type="text" name="q" id="q" class="span2" value="">`
- XPath: `#q`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html lang="en">`
- XPath: `html`

#### Rule: [link-in-text-block](https://dequeuniversity.com/rules/axe/4.11/link-in-text-block?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.1](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color) (Level A)

**Failure 1:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a class="value-title" title="2026-02-01T13:15:00+01:00" href="/2026/schedule/day/sunday/#1315">13:15</a>`
- XPath: `a[title="2026-02-01T13:15:00+01:00"]`

**Failure 2:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a class="value-title" title="2026-02-01T13:45:00+01:00" href="/2026/schedule/day/sunday/#1345">13:45</a>`
- XPath: `a[title="2026-02-01T13:45:00+01:00"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h1 class="logo"><a href="/2026/">fosdem-2026</a></h1>`
- XPath: `.logo`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="home"><a href="/2026/">Home</a></li>`
- XPath: `#nav > .home`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/about/">About</a></li>`
- XPath: `#nav > li:nth-child(2)`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/news/">News</a></li>`
- XPath: `#nav > li:nth-child(3)`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="active"><a href="/2026/schedule/">Schedule</a></li>`
- XPath: `#nav > .active`

*... and 6 more failures for this rule*

### https://fosdem.org/2026/schedule/event/ELPHEA-pkgconf-sbom/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/about/">About</a>`
- XPath: `li:nth-child(2) > a[href$="about/"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/news/">News</a>`
- XPath: `li:nth-child(3) > a[href$="news/"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/stands/">Stands</a>`
- XPath: `li:nth-child(5) > a[href$="stands/"]`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/volunteer/">Volunteer</a>`
- XPath: `li:nth-child(6) > a[href$="volunteer/"]`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/practical/">Practical</a>`
- XPath: `a[href$="practical/"]`

*... and 39 more failures for this rule*

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: Headings should not be empty
- HTML: `<h2></h2>`
- XPath: `#pagetitles > h2`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input type="text" name="q" id="q" class="span2" value="">`
- XPath: `#q`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html lang="en">`
- XPath: `html`

#### Rule: [link-in-text-block](https://dequeuniversity.com/rules/axe/4.11/link-in-text-block?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.1](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color) (Level A)

**Failure 1:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a class="value-title" title="2026-02-01T15:30:00+01:00" href="/2026/schedule/day/sunday/#1530">15:30</a>`
- XPath: `a[title="2026-02-01T15:30:00+01:00"]`

**Failure 2:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a class="value-title" title="2026-02-01T16:00:00+01:00" href="/2026/schedule/day/sunday/#1600">16:00</a>`
- XPath: `a[title="2026-02-01T16:00:00+01:00"]`

**Failure 3:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a href="https://github.com/pkgconf/pkgconf">pkgconf</a>`
- XPath: `p > a`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h1 class="logo"><a href="/2026/">fosdem-2026</a></h1>`
- XPath: `.logo`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="home"><a href="/2026/">Home</a></li>`
- XPath: `#nav > .home`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/about/">About</a></li>`
- XPath: `#nav > li:nth-child(2)`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/news/">News</a></li>`
- XPath: `#nav > li:nth-child(3)`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="active"><a href="/2026/schedule/">Schedule</a></li>`
- XPath: `#nav > .active`

*... and 6 more failures for this rule*

### https://fosdem.org/2026/schedule/event/ZUVAZD-four_year_bus/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/about/">About</a>`
- XPath: `li:nth-child(2) > a[href$="about/"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/news/">News</a>`
- XPath: `li:nth-child(3) > a[href$="news/"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/stands/">Stands</a>`
- XPath: `li:nth-child(5) > a[href$="stands/"]`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/volunteer/">Volunteer</a>`
- XPath: `li:nth-child(6) > a[href$="volunteer/"]`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/practical/">Practical</a>`
- XPath: `a[href$="practical/"]`

*... and 37 more failures for this rule*

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: Headings should not be empty
- HTML: `<h2></h2>`
- XPath: `#pagetitles > h2`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input type="text" name="q" id="q" class="span2" value="">`
- XPath: `#q`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html lang="en">`
- XPath: `html`

#### Rule: [link-in-text-block](https://dequeuniversity.com/rules/axe/4.11/link-in-text-block?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.1](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color) (Level A)

**Failure 1:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a class="value-title" title="2026-02-01T09:20:00+01:00" href="/2026/schedule/day/sunday/#0920">09:20</a>`
- XPath: `a[title="2026-02-01T09:20:00+01:00"]`

**Failure 2:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a class="value-title" title="2026-02-01T09:35:00+01:00" href="/2026/schedule/day/sunday/#0935">09:35</a>`
- XPath: `a[title="2026-02-01T09:35:00+01:00"]`

**Failure 3:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a href="https://cspp.ie">CS++</a>`
- XPath: `a[href$="cspp.ie"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h1 class="logo"><a href="/2026/">fosdem-2026</a></h1>`
- XPath: `.logo`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="home"><a href="/2026/">Home</a></li>`
- XPath: `#nav > .home`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/about/">About</a></li>`
- XPath: `#nav > li:nth-child(2)`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/news/">News</a></li>`
- XPath: `#nav > li:nth-child(3)`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="active"><a href="/2026/schedule/">Schedule</a></li>`
- XPath: `#nav > .active`

*... and 6 more failures for this rule*

### https://fosdem.org/2026/schedule/speaker/adam_pioterek/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/about/">About</a>`
- XPath: `li:nth-child(2) > a[href$="about/"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/news/">News</a>`
- XPath: `li:nth-child(3) > a[href$="news/"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/stands/">Stands</a>`
- XPath: `li:nth-child(5) > a[href$="stands/"]`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/volunteer/">Volunteer</a>`
- XPath: `li:nth-child(6) > a[href$="volunteer/"]`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/practical/">Practical</a>`
- XPath: `a[href$="practical/"]`

*... and 27 more failures for this rule*

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3>Events</h3>`
- XPath: `#main > h3`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input type="text" name="q" id="q" class="span2" value="">`
- XPath: `#q`

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
- HTML: `<h1 class="logo"><a href="/2026/">fosdem-2026</a></h1>`
- XPath: `.logo`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="home"><a href="/2026/">Home</a></li>`
- XPath: `#nav > .home`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/about/">About</a></li>`
- XPath: `#nav > li:nth-child(2)`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/news/">News</a></li>`
- XPath: `#nav > li:nth-child(3)`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="active"><a href="/2026/schedule/">Schedule</a></li>`
- XPath: `#nav > .active`

*... and 6 more failures for this rule*

### https://fosdem.org/2026/schedule/event/QCFHVU-introduction_the_open_source_eu_policy_devroom/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/about/">About</a>`
- XPath: `li:nth-child(2) > a[href$="about/"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/news/">News</a>`
- XPath: `li:nth-child(3) > a[href$="news/"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/stands/">Stands</a>`
- XPath: `li:nth-child(5) > a[href$="stands/"]`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/volunteer/">Volunteer</a>`
- XPath: `li:nth-child(6) > a[href$="volunteer/"]`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/practical/">Practical</a>`
- XPath: `a[href$="practical/"]`

*... and 43 more failures for this rule*

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: Headings should not be empty
- HTML: `<h2></h2>`
- XPath: `#pagetitles > h2`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input type="text" name="q" id="q" class="span2" value="">`
- XPath: `#q`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html lang="en">`
- XPath: `html`

#### Rule: [link-in-text-block](https://dequeuniversity.com/rules/axe/4.11/link-in-text-block?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.1](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color) (Level A)

**Failure 1:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a class="value-title" title="2026-02-01T09:00:00+01:00" href="/2026/schedule/day/sunday/#0900">09:00</a>`
- XPath: `a[title="2026-02-01T09:00:00+01:00"]`

**Failure 2:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a class="value-title" title="2026-02-01T09:05:00+01:00" href="/2026/schedule/day/sunday/#0905">09:05</a>`
- XPath: `a[title="2026-02-01T09:05:00+01:00"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h1 class="logo"><a href="/2026/">fosdem-2026</a></h1>`
- XPath: `.logo`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="home"><a href="/2026/">Home</a></li>`
- XPath: `#nav > .home`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/about/">About</a></li>`
- XPath: `#nav > li:nth-child(2)`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/news/">News</a></li>`
- XPath: `#nav > li:nth-child(3)`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="active"><a href="/2026/schedule/">Schedule</a></li>`
- XPath: `#nav > .active`

*... and 6 more failures for this rule*

### https://fosdem.org/2026/schedule/speaker/maartje_eyskens/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/about/">About</a>`
- XPath: `li:nth-child(2) > a[href$="about/"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/news/">News</a>`
- XPath: `li:nth-child(3) > a[href$="news/"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/stands/">Stands</a>`
- XPath: `li:nth-child(5) > a[href$="stands/"]`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/volunteer/">Volunteer</a>`
- XPath: `li:nth-child(6) > a[href$="volunteer/"]`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/practical/">Practical</a>`
- XPath: `a[href$="practical/"]`

*... and 33 more failures for this rule*

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3>Events</h3>`
- XPath: `#main > h3`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input type="text" name="q" id="q" class="span2" value="">`
- XPath: `#q`

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
- HTML: `<h1 class="logo"><a href="/2026/">fosdem-2026</a></h1>`
- XPath: `.logo`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="home"><a href="/2026/">Home</a></li>`
- XPath: `#nav > .home`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/about/">About</a></li>`
- XPath: `#nav > li:nth-child(2)`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/news/">News</a></li>`
- XPath: `#nav > li:nth-child(3)`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="active"><a href="/2026/schedule/">Schedule</a></li>`
- XPath: `#nav > .active`

*... and 6 more failures for this rule*

### https://fosdem.org/2026/schedule/event/VGMUYA-the-open-weight-dilemma/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/about/">About</a>`
- XPath: `li:nth-child(2) > a[href$="about/"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/news/">News</a>`
- XPath: `li:nth-child(3) > a[href$="news/"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/stands/">Stands</a>`
- XPath: `li:nth-child(5) > a[href$="stands/"]`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/volunteer/">Volunteer</a>`
- XPath: `li:nth-child(6) > a[href$="volunteer/"]`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/practical/">Practical</a>`
- XPath: `a[href$="practical/"]`

*... and 36 more failures for this rule*

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: Headings should not be empty
- HTML: `<h2></h2>`
- XPath: `#pagetitles > h2`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input type="text" name="q" id="q" class="span2" value="">`
- XPath: `#q`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html lang="en">`
- XPath: `html`

#### Rule: [link-in-text-block](https://dequeuniversity.com/rules/axe/4.11/link-in-text-block?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.1](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color) (Level A)

**Failure 1:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a class="value-title" title="2026-01-31T16:30:00+01:00" href="/2026/schedule/day/saturday/#1630">16:30</a>`
- XPath: `a[title="2026-01-31T16:30:00+01:00"]`

**Failure 2:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a class="value-title" title="2026-01-31T16:55:00+01:00" href="/2026/schedule/day/saturday/#1655">16:55</a>`
- XPath: `a[title="2026-01-31T16:55:00+01:00"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h1 class="logo"><a href="/2026/">fosdem-2026</a></h1>`
- XPath: `.logo`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="home"><a href="/2026/">Home</a></li>`
- XPath: `#nav > .home`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/about/">About</a></li>`
- XPath: `#nav > li:nth-child(2)`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/news/">News</a></li>`
- XPath: `#nav > li:nth-child(3)`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="active"><a href="/2026/schedule/">Schedule</a></li>`
- XPath: `#nav > .active`

*... and 6 more failures for this rule*

### https://fosdem.org/2026/news/2026-01-26-lightning-talks/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/about/">About</a>`
- XPath: `li:nth-child(2) > a[href$="about/"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/schedule/">Schedule</a>`
- XPath: `li:nth-child(4) > a[href$="schedule/"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/stands/">Stands</a>`
- XPath: `li:nth-child(5) > a[href$="stands/"]`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/volunteer/">Volunteer</a>`
- XPath: `li:nth-child(6) > a[href$="volunteer/"]`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/practical/">Practical</a>`
- XPath: `a[href$="practical/"]`

*... and 24 more failures for this rule*

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3>FOSDEM</h3>`
- XPath: `.panel-column:nth-child(1) > h3`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input type="text" name="q" id="q" class="span2" value="">`
- XPath: `#q`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html lang="en">`
- XPath: `html`

#### Rule: [link-in-text-block](https://dequeuniversity.com/rules/axe/4.11/link-in-text-block?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.1](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color) (Level A)

**Failure 1:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a href="https://archive.fosdem.org/2025/schedule/event/fosdem-2025-6674-lightning-lightning-talks/">last year</a>`
- XPath: `p:nth-child(3) > a`

**Failure 2:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a href="https://fosdem.org/submit">this link</a>`
- XPath: `a[href$="submit"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h1 class="logo"><a href="/2026/">fosdem-2026</a></h1>`
- XPath: `.logo`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="home"><a href="/2026/">Home</a></li>`
- XPath: `#nav > .home`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/about/">About</a></li>`
- XPath: `#nav > li:nth-child(2)`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="active"><a href="/2026/news/">News</a></li>`
- XPath: `#nav > .active`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/schedule/">Schedule</a></li>`
- XPath: `#nav > li:nth-child(4)`

*... and 6 more failures for this rule*

### https://fosdem.org/2026/schedule/event/8MUFCA-building_isos_from_oci_containers/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/about/">About</a>`
- XPath: `li:nth-child(2) > a[href$="about/"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/news/">News</a>`
- XPath: `li:nth-child(3) > a[href$="news/"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/stands/">Stands</a>`
- XPath: `li:nth-child(5) > a[href$="stands/"]`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/volunteer/">Volunteer</a>`
- XPath: `li:nth-child(6) > a[href$="volunteer/"]`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/practical/">Practical</a>`
- XPath: `a[href$="practical/"]`

*... and 37 more failures for this rule*

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: Headings should not be empty
- HTML: `<h2></h2>`
- XPath: `#pagetitles > h2`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input type="text" name="q" id="q" class="span2" value="">`
- XPath: `#q`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html lang="en">`
- XPath: `html`

#### Rule: [link-in-text-block](https://dequeuniversity.com/rules/axe/4.11/link-in-text-block?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.1](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color) (Level A)

**Failure 1:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a class="value-title" title="2026-02-01T12:00:00+01:00" href="/2026/schedule/day/sunday/#1200">12:00</a>`
- XPath: `a[title="2026-02-01T12:00:00+01:00"]`

**Failure 2:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a class="value-title" title="2026-02-01T12:25:00+01:00" href="/2026/schedule/day/sunday/#1225">12:25</a>`
- XPath: `a[title="2026-02-01T12:25:00+01:00"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h1 class="logo"><a href="/2026/">fosdem-2026</a></h1>`
- XPath: `.logo`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="home"><a href="/2026/">Home</a></li>`
- XPath: `#nav > .home`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/about/">About</a></li>`
- XPath: `#nav > li:nth-child(2)`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/news/">News</a></li>`
- XPath: `#nav > li:nth-child(3)`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="active"><a href="/2026/schedule/">Schedule</a></li>`
- XPath: `#nav > .active`

*... and 6 more failures for this rule*

### https://fosdem.org/2026/schedule/speaker/marton_bognar/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/about/">About</a>`
- XPath: `li:nth-child(2) > a[href$="about/"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/news/">News</a>`
- XPath: `li:nth-child(3) > a[href$="news/"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/stands/">Stands</a>`
- XPath: `li:nth-child(5) > a[href$="stands/"]`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/volunteer/">Volunteer</a>`
- XPath: `li:nth-child(6) > a[href$="volunteer/"]`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/practical/">Practical</a>`
- XPath: `a[href$="practical/"]`

*... and 28 more failures for this rule*

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3>Events</h3>`
- XPath: `#main > h3`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input type="text" name="q" id="q" class="span2" value="">`
- XPath: `#q`

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
- HTML: `<h1 class="logo"><a href="/2026/">fosdem-2026</a></h1>`
- XPath: `.logo`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="home"><a href="/2026/">Home</a></li>`
- XPath: `#nav > .home`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/about/">About</a></li>`
- XPath: `#nav > li:nth-child(2)`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/news/">News</a></li>`
- XPath: `#nav > li:nth-child(3)`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="active"><a href="/2026/schedule/">Schedule</a></li>`
- XPath: `#nav > .active`

*... and 6 more failures for this rule*

### https://fosdem.org/2026/schedule/room/k4401/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/about/">About</a>`
- XPath: `li:nth-child(2) > a[href$="about/"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/news/">News</a>`
- XPath: `li:nth-child(3) > a[href$="news/"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/stands/">Stands</a>`
- XPath: `li:nth-child(5) > a[href$="stands/"]`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/volunteer/">Volunteer</a>`
- XPath: `li:nth-child(6) > a[href$="volunteer/"]`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/practical/">Practical</a>`
- XPath: `a[href$="practical/"]`

*... and 40 more failures for this rule*

#### Rule: [empty-table-header](https://dequeuniversity.com/rules/axe/4.11/empty-table-header?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: Table header text should not be empty
- HTML: `<th style="width: 1em;"></th>`
- XPath: `table:nth-child(5) > thead > tr > th:nth-child(3)`

**Failure 2:**
- Message: Table header text should not be empty
- HTML: `<th class="day"></th>`
- XPath: `thead > tr > .day`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3>Events</h3>`
- XPath: `#main > h3`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input type="text" name="q" id="q" class="span2" value="">`
- XPath: `#q`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html lang="en">`
- XPath: `html`

#### Rule: [link-in-text-block](https://dequeuniversity.com/rules/axe/4.11/link-in-text-block?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.1](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color) (Level A)

**Failure 1:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a href="/2026/schedule/buildings/#k">K</a>`
- XPath: `a[href$="buildings/#k"]`

**Failure 2:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a href="https://nav.fosdem.org/l/k4401/">     K.4.401   </a>`
- XPath: `.side-box > li:nth-child(3) > a`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h1 class="logo"><a href="/2026/">fosdem-2026</a></h1>`
- XPath: `.logo`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="home"><a href="/2026/">Home</a></li>`
- XPath: `#nav > .home`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/about/">About</a></li>`
- XPath: `#nav > li:nth-child(2)`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/news/">News</a></li>`
- XPath: `#nav > li:nth-child(3)`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="active"><a href="/2026/schedule/">Schedule</a></li>`
- XPath: `#nav > .active`

*... and 6 more failures for this rule*

### https://fosdem.org/2026/schedule/event/FGBYKV-package_management_learnings_from_homebrew/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/about/">About</a>`
- XPath: `li:nth-child(2) > a[href$="about/"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/news/">News</a>`
- XPath: `li:nth-child(3) > a[href$="news/"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/stands/">Stands</a>`
- XPath: `li:nth-child(5) > a[href$="stands/"]`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/volunteer/">Volunteer</a>`
- XPath: `li:nth-child(6) > a[href$="volunteer/"]`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/practical/">Practical</a>`
- XPath: `a[href$="practical/"]`

*... and 37 more failures for this rule*

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: Headings should not be empty
- HTML: `<h2></h2>`
- XPath: `#pagetitles > h2`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input type="text" name="q" id="q" class="span2" value="">`
- XPath: `#q`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html lang="en">`
- XPath: `html`

#### Rule: [link-in-text-block](https://dequeuniversity.com/rules/axe/4.11/link-in-text-block?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.1](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color) (Level A)

**Failure 1:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a class="value-title" title="2026-01-31T14:00:00+01:00" href="/2026/schedule/day/saturday/#1400">14:00</a>`
- XPath: `a[title="2026-01-31T14:00:00+01:00"]`

**Failure 2:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a class="value-title" title="2026-01-31T14:25:00+01:00" href="/2026/schedule/day/saturday/#1425">14:25</a>`
- XPath: `a[title="2026-01-31T14:25:00+01:00"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h1 class="logo"><a href="/2026/">fosdem-2026</a></h1>`
- XPath: `.logo`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="home"><a href="/2026/">Home</a></li>`
- XPath: `#nav > .home`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/about/">About</a></li>`
- XPath: `#nav > li:nth-child(2)`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/news/">News</a></li>`
- XPath: `#nav > li:nth-child(3)`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="active"><a href="/2026/schedule/">Schedule</a></li>`
- XPath: `#nav > .active`

*... and 6 more failures for this rule*

### https://fosdem.org/2026/schedule/event/ARECWV-max2771_broadband_sdr_impact_of_low_bit_resolution_and_application_to_passive_ra/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/about/">About</a>`
- XPath: `li:nth-child(2) > a[href$="about/"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/news/">News</a>`
- XPath: `li:nth-child(3) > a[href$="news/"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/stands/">Stands</a>`
- XPath: `li:nth-child(5) > a[href$="stands/"]`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/volunteer/">Volunteer</a>`
- XPath: `li:nth-child(6) > a[href$="volunteer/"]`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/practical/">Practical</a>`
- XPath: `a[href$="practical/"]`

*... and 38 more failures for this rule*

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: Headings should not be empty
- HTML: `<h2></h2>`
- XPath: `#pagetitles > h2`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/2026/schedule/event/ARECWV-max2771_broadband_sdr_impact_of_low_bit_resolution_and_application_to_passive_ra/ARECWV-max2771_broadband_sdr_impact_of_low_bit_resolution_and_application_to_passive_ra-1470d4ef0fc763232e88930ddd5a035318d61148119e9ebc2ca4712b381a2a96.JPG" class="event-logo">`
- XPath: `.event-logo`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input type="text" name="q" id="q" class="span2" value="">`
- XPath: `#q`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html lang="en">`
- XPath: `html`

#### Rule: [link-in-text-block](https://dequeuniversity.com/rules/axe/4.11/link-in-text-block?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.1](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color) (Level A)

**Failure 1:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a class="value-title" title="2026-02-01T16:20:00+01:00" href="/2026/schedule/day/sunday/#1620">16:20</a>`
- XPath: `a[title="2026-02-01T16:20:00+01:00"]`

**Failure 2:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a class="value-title" title="2026-02-01T17:00:00+01:00" href="/2026/schedule/day/sunday/#1700">17:00</a>`
- XPath: `a[title="2026-02-01T17:00:00+01:00"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h1 class="logo"><a href="/2026/">fosdem-2026</a></h1>`
- XPath: `.logo`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="home"><a href="/2026/">Home</a></li>`
- XPath: `#nav > .home`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/about/">About</a></li>`
- XPath: `#nav > li:nth-child(2)`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/news/">News</a></li>`
- XPath: `#nav > li:nth-child(3)`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="active"><a href="/2026/schedule/">Schedule</a></li>`
- XPath: `#nav > .active`

*... and 6 more failures for this rule*

### https://fosdem.org/2026/schedule/event/AV8MA9-open-source-hsm-based-aosp-signing/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/about/">About</a>`
- XPath: `li:nth-child(2) > a[href$="about/"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/news/">News</a>`
- XPath: `li:nth-child(3) > a[href$="news/"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/stands/">Stands</a>`
- XPath: `li:nth-child(5) > a[href$="stands/"]`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/volunteer/">Volunteer</a>`
- XPath: `li:nth-child(6) > a[href$="volunteer/"]`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/practical/">Practical</a>`
- XPath: `a[href$="practical/"]`

*... and 37 more failures for this rule*

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: Headings should not be empty
- HTML: `<h2></h2>`
- XPath: `#pagetitles > h2`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input type="text" name="q" id="q" class="span2" value="">`
- XPath: `#q`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html lang="en">`
- XPath: `html`

#### Rule: [link-in-text-block](https://dequeuniversity.com/rules/axe/4.11/link-in-text-block?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.1](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color) (Level A)

**Failure 1:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a class="value-title" title="2026-01-31T13:00:00+01:00" href="/2026/schedule/day/saturday/#1300">13:00</a>`
- XPath: `a[title="2026-01-31T13:00:00+01:00"]`

**Failure 2:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a class="value-title" title="2026-01-31T13:30:00+01:00" href="/2026/schedule/day/saturday/#1330">13:30</a>`
- XPath: `a[title="2026-01-31T13:30:00+01:00"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h1 class="logo"><a href="/2026/">fosdem-2026</a></h1>`
- XPath: `.logo`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="home"><a href="/2026/">Home</a></li>`
- XPath: `#nav > .home`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/about/">About</a></li>`
- XPath: `#nav > li:nth-child(2)`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/news/">News</a></li>`
- XPath: `#nav > li:nth-child(3)`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="active"><a href="/2026/schedule/">Schedule</a></li>`
- XPath: `#nav > .active`

*... and 6 more failures for this rule*

### https://fosdem.org/2026/schedule/speaker/angelina_claij-swart/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/about/">About</a>`
- XPath: `li:nth-child(2) > a[href$="about/"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/news/">News</a>`
- XPath: `li:nth-child(3) > a[href$="news/"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/stands/">Stands</a>`
- XPath: `li:nth-child(5) > a[href$="stands/"]`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/volunteer/">Volunteer</a>`
- XPath: `li:nth-child(6) > a[href$="volunteer/"]`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/practical/">Practical</a>`
- XPath: `a[href$="practical/"]`

*... and 27 more failures for this rule*

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3>Events</h3>`
- XPath: `#main > h3`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input type="text" name="q" id="q" class="span2" value="">`
- XPath: `#q`

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
- HTML: `<h1 class="logo"><a href="/2026/">fosdem-2026</a></h1>`
- XPath: `.logo`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="home"><a href="/2026/">Home</a></li>`
- XPath: `#nav > .home`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/about/">About</a></li>`
- XPath: `#nav > li:nth-child(2)`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/news/">News</a></li>`
- XPath: `#nav > li:nth-child(3)`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="active"><a href="/2026/schedule/">Schedule</a></li>`
- XPath: `#nav > .active`

*... and 6 more failures for this rule*

### https://fosdem.org/2026/schedule/speaker/fedor_smirnov/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/about/">About</a>`
- XPath: `li:nth-child(2) > a[href$="about/"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/news/">News</a>`
- XPath: `li:nth-child(3) > a[href$="news/"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/stands/">Stands</a>`
- XPath: `li:nth-child(5) > a[href$="stands/"]`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/volunteer/">Volunteer</a>`
- XPath: `li:nth-child(6) > a[href$="volunteer/"]`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/practical/">Practical</a>`
- XPath: `a[href$="practical/"]`

*... and 27 more failures for this rule*

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3>Events</h3>`
- XPath: `#main > h3`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input type="text" name="q" id="q" class="span2" value="">`
- XPath: `#q`

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
- HTML: `<h1 class="logo"><a href="/2026/">fosdem-2026</a></h1>`
- XPath: `.logo`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="home"><a href="/2026/">Home</a></li>`
- XPath: `#nav > .home`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/about/">About</a></li>`
- XPath: `#nav > li:nth-child(2)`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/news/">News</a></li>`
- XPath: `#nav > li:nth-child(3)`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="active"><a href="/2026/schedule/">Schedule</a></li>`
- XPath: `#nav > .active`

*... and 6 more failures for this rule*

### https://fosdem.org/2026/schedule/speaker/hp_van_braam/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/about/">About</a>`
- XPath: `li:nth-child(2) > a[href$="about/"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/news/">News</a>`
- XPath: `li:nth-child(3) > a[href$="news/"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/stands/">Stands</a>`
- XPath: `li:nth-child(5) > a[href$="stands/"]`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/volunteer/">Volunteer</a>`
- XPath: `li:nth-child(6) > a[href$="volunteer/"]`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/practical/">Practical</a>`
- XPath: `a[href$="practical/"]`

*... and 33 more failures for this rule*

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3>Events</h3>`
- XPath: `#main > h3`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input type="text" name="q" id="q" class="span2" value="">`
- XPath: `#q`

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
- HTML: `<h1 class="logo"><a href="/2026/">fosdem-2026</a></h1>`
- XPath: `.logo`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="home"><a href="/2026/">Home</a></li>`
- XPath: `#nav > .home`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/about/">About</a></li>`
- XPath: `#nav > li:nth-child(2)`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/news/">News</a></li>`
- XPath: `#nav > li:nth-child(3)`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="active"><a href="/2026/schedule/">Schedule</a></li>`
- XPath: `#nav > .active`

*... and 6 more failures for this rule*

### https://fosdem.org/2026/schedule/speaker/pierromond/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/about/">About</a>`
- XPath: `li:nth-child(2) > a[href$="about/"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/news/">News</a>`
- XPath: `li:nth-child(3) > a[href$="news/"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/stands/">Stands</a>`
- XPath: `li:nth-child(5) > a[href$="stands/"]`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/volunteer/">Volunteer</a>`
- XPath: `li:nth-child(6) > a[href$="volunteer/"]`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/practical/">Practical</a>`
- XPath: `a[href$="practical/"]`

*... and 27 more failures for this rule*

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3>Events</h3>`
- XPath: `#main > h3`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input type="text" name="q" id="q" class="span2" value="">`
- XPath: `#q`

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
- HTML: `<h1 class="logo"><a href="/2026/">fosdem-2026</a></h1>`
- XPath: `.logo`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="home"><a href="/2026/">Home</a></li>`
- XPath: `#nav > .home`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/about/">About</a></li>`
- XPath: `#nav > li:nth-child(2)`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/news/">News</a></li>`
- XPath: `#nav > li:nth-child(3)`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="active"><a href="/2026/schedule/">Schedule</a></li>`
- XPath: `#nav > .active`

*... and 6 more failures for this rule*

### https://fosdem.org/2026/schedule/speaker/michelle_barker/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/about/">About</a>`
- XPath: `li:nth-child(2) > a[href$="about/"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/news/">News</a>`
- XPath: `li:nth-child(3) > a[href$="news/"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/stands/">Stands</a>`
- XPath: `li:nth-child(5) > a[href$="stands/"]`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/volunteer/">Volunteer</a>`
- XPath: `li:nth-child(6) > a[href$="volunteer/"]`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/practical/">Practical</a>`
- XPath: `a[href$="practical/"]`

*... and 27 more failures for this rule*

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3>Events</h3>`
- XPath: `#main > h3`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input type="text" name="q" id="q" class="span2" value="">`
- XPath: `#q`

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
- HTML: `<h1 class="logo"><a href="/2026/">fosdem-2026</a></h1>`
- XPath: `.logo`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="home"><a href="/2026/">Home</a></li>`
- XPath: `#nav > .home`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/about/">About</a></li>`
- XPath: `#nav > li:nth-child(2)`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/news/">News</a></li>`
- XPath: `#nav > li:nth-child(3)`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="active"><a href="/2026/schedule/">Schedule</a></li>`
- XPath: `#nav > .active`

*... and 6 more failures for this rule*

### https://fosdem.org/2026/schedule/event/WSKHHU-sucrela_open_source_usb_3_0_logic_analyzer_based_on_fpga/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/about/">About</a>`
- XPath: `li:nth-child(2) > a[href$="about/"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/news/">News</a>`
- XPath: `li:nth-child(3) > a[href$="news/"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/stands/">Stands</a>`
- XPath: `li:nth-child(5) > a[href$="stands/"]`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/volunteer/">Volunteer</a>`
- XPath: `li:nth-child(6) > a[href$="volunteer/"]`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/practical/">Practical</a>`
- XPath: `a[href$="practical/"]`

*... and 36 more failures for this rule*

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: Headings should not be empty
- HTML: `<h2></h2>`
- XPath: `#pagetitles > h2`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/2026/schedule/event/WSKHHU-sucrela_open_source_usb_3_0_logic_analyzer_based_on_fpga/WSKHHU-sucrela_open_source_usb_3_0_logic_analyzer_based_on_fpga-7cbdd52a268c86bbb395550fdae274a8e81efdf584488865136e193db5fa7c82.png" class="event-logo">`
- XPath: `.event-logo`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input type="text" name="q" id="q" class="span2" value="">`
- XPath: `#q`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html lang="en">`
- XPath: `html`

#### Rule: [link-in-text-block](https://dequeuniversity.com/rules/axe/4.11/link-in-text-block?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.1](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color) (Level A)

**Failure 1:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a class="value-title" title="2026-02-01T10:00:00+01:00" href="/2026/schedule/day/sunday/#1000">10:00</a>`
- XPath: `a[title="2026-02-01T10:00:00+01:00"]`

**Failure 2:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a class="value-title" title="2026-02-01T10:15:00+01:00" href="/2026/schedule/day/sunday/#1015">10:15</a>`
- XPath: `a[title="2026-02-01T10:15:00+01:00"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h1 class="logo"><a href="/2026/">fosdem-2026</a></h1>`
- XPath: `.logo`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="home"><a href="/2026/">Home</a></li>`
- XPath: `#nav > .home`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/about/">About</a></li>`
- XPath: `#nav > li:nth-child(2)`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/news/">News</a></li>`
- XPath: `#nav > li:nth-child(3)`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="active"><a href="/2026/schedule/">Schedule</a></li>`
- XPath: `#nav > .active`

*... and 6 more failures for this rule*

### https://fosdem.org/2026/schedule/speaker/date_yu-chiang_huang/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/about/">About</a>`
- XPath: `li:nth-child(2) > a[href$="about/"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/news/">News</a>`
- XPath: `li:nth-child(3) > a[href$="news/"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/stands/">Stands</a>`
- XPath: `li:nth-child(5) > a[href$="stands/"]`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/volunteer/">Volunteer</a>`
- XPath: `li:nth-child(6) > a[href$="volunteer/"]`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/practical/">Practical</a>`
- XPath: `a[href$="practical/"]`

*... and 27 more failures for this rule*

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3>Events</h3>`
- XPath: `#main > h3`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input type="text" name="q" id="q" class="span2" value="">`
- XPath: `#q`

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
- HTML: `<h1 class="logo"><a href="/2026/">fosdem-2026</a></h1>`
- XPath: `.logo`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="home"><a href="/2026/">Home</a></li>`
- XPath: `#nav > .home`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/about/">About</a></li>`
- XPath: `#nav > li:nth-child(2)`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/news/">News</a></li>`
- XPath: `#nav > li:nth-child(3)`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="active"><a href="/2026/schedule/">Schedule</a></li>`
- XPath: `#nav > .active`

*... and 6 more failures for this rule*

### https://fosdem.org/2026/schedule/event/T9ACNE-iroh_p2p_connections/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/about/">About</a>`
- XPath: `li:nth-child(2) > a[href$="about/"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/news/">News</a>`
- XPath: `li:nth-child(3) > a[href$="news/"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/stands/">Stands</a>`
- XPath: `li:nth-child(5) > a[href$="stands/"]`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/volunteer/">Volunteer</a>`
- XPath: `li:nth-child(6) > a[href$="volunteer/"]`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/practical/">Practical</a>`
- XPath: `a[href$="practical/"]`

*... and 37 more failures for this rule*

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: Headings should not be empty
- HTML: `<h2></h2>`
- XPath: `#pagetitles > h2`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/2026/schedule/event/T9ACNE-iroh_p2p_connections/T9ACNE-iroh_p2p_connections-6d5792a5ac8bba070568425bfcc0be62af6c1d83be9504e41a3f3fbcb5036ef1.svg" class="event-logo">`
- XPath: `.event-logo`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input type="text" name="q" id="q" class="span2" value="">`
- XPath: `#q`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html lang="en">`
- XPath: `html`

#### Rule: [link-in-text-block](https://dequeuniversity.com/rules/axe/4.11/link-in-text-block?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.1](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color) (Level A)

**Failure 1:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a class="value-title" title="2026-02-01T14:10:00+01:00" href="/2026/schedule/day/sunday/#1410">14:10</a>`
- XPath: `a[title="2026-02-01T14:10:00+01:00"]`

**Failure 2:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a class="value-title" title="2026-02-01T14:35:00+01:00" href="/2026/schedule/day/sunday/#1435">14:35</a>`
- XPath: `a[title="2026-02-01T14:35:00+01:00"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h1 class="logo"><a href="/2026/">fosdem-2026</a></h1>`
- XPath: `.logo`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="home"><a href="/2026/">Home</a></li>`
- XPath: `#nav > .home`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/about/">About</a></li>`
- XPath: `#nav > li:nth-child(2)`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/news/">News</a></li>`
- XPath: `#nav > li:nth-child(3)`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="active"><a href="/2026/schedule/">Schedule</a></li>`
- XPath: `#nav > .active`

*... and 6 more failures for this rule*

### https://fosdem.org/2026/schedule/speaker/cassie_jiun_seo/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/about/">About</a>`
- XPath: `li:nth-child(2) > a[href$="about/"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/news/">News</a>`
- XPath: `li:nth-child(3) > a[href$="news/"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/stands/">Stands</a>`
- XPath: `li:nth-child(5) > a[href$="stands/"]`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/volunteer/">Volunteer</a>`
- XPath: `li:nth-child(6) > a[href$="volunteer/"]`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/practical/">Practical</a>`
- XPath: `a[href$="practical/"]`

*... and 27 more failures for this rule*

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3>Events</h3>`
- XPath: `#main > h3`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input type="text" name="q" id="q" class="span2" value="">`
- XPath: `#q`

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
- HTML: `<h1 class="logo"><a href="/2026/">fosdem-2026</a></h1>`
- XPath: `.logo`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="home"><a href="/2026/">Home</a></li>`
- XPath: `#nav > .home`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/about/">About</a></li>`
- XPath: `#nav > li:nth-child(2)`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/news/">News</a></li>`
- XPath: `#nav > li:nth-child(3)`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="active"><a href="/2026/schedule/">Schedule</a></li>`
- XPath: `#nav > .active`

*... and 6 more failures for this rule*

### https://fosdem.org/2026/schedule/event/7GANAH-badsmtp/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/about/">About</a>`
- XPath: `li:nth-child(2) > a[href$="about/"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/news/">News</a>`
- XPath: `li:nth-child(3) > a[href$="news/"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/stands/">Stands</a>`
- XPath: `li:nth-child(5) > a[href$="stands/"]`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/volunteer/">Volunteer</a>`
- XPath: `li:nth-child(6) > a[href$="volunteer/"]`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/practical/">Practical</a>`
- XPath: `a[href$="practical/"]`

*... and 38 more failures for this rule*

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: Headings should not be empty
- HTML: `<h2></h2>`
- XPath: `#pagetitles > h2`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input type="text" name="q" id="q" class="span2" value="">`
- XPath: `#q`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html lang="en">`
- XPath: `html`

#### Rule: [link-in-text-block](https://dequeuniversity.com/rules/axe/4.11/link-in-text-block?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.1](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color) (Level A)

**Failure 1:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a class="value-title" title="2026-01-31T18:10:00+01:00" href="/2026/schedule/day/saturday/#1810">18:10</a>`
- XPath: `a[title="2026-01-31T18:10:00+01:00"]`

**Failure 2:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a class="value-title" title="2026-01-31T18:40:00+01:00" href="/2026/schedule/day/saturday/#1840">18:40</a>`
- XPath: `a[title="2026-01-31T18:40:00+01:00"]`

**Failure 3:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a href="https://github.com/PHPMailer/PHPMailer">PHPMailer</a>`
- XPath: `p > a:nth-child(1)`

**Failure 4:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a href="https://badsmtp.com">BadSMTP</a>`
- XPath: `a[href$="badsmtp.com"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h1 class="logo"><a href="/2026/">fosdem-2026</a></h1>`
- XPath: `.logo`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="home"><a href="/2026/">Home</a></li>`
- XPath: `#nav > .home`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/about/">About</a></li>`
- XPath: `#nav > li:nth-child(2)`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/news/">News</a></li>`
- XPath: `#nav > li:nth-child(3)`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="active"><a href="/2026/schedule/">Schedule</a></li>`
- XPath: `#nav > .active`

*... and 6 more failures for this rule*

### https://fosdem.org/2026/schedule/speaker/pascal_bleser/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/about/">About</a>`
- XPath: `li:nth-child(2) > a[href$="about/"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/news/">News</a>`
- XPath: `li:nth-child(3) > a[href$="news/"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/stands/">Stands</a>`
- XPath: `li:nth-child(5) > a[href$="stands/"]`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/volunteer/">Volunteer</a>`
- XPath: `li:nth-child(6) > a[href$="volunteer/"]`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/practical/">Practical</a>`
- XPath: `a[href$="practical/"]`

*... and 27 more failures for this rule*

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3>Events</h3>`
- XPath: `#main > h3`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input type="text" name="q" id="q" class="span2" value="">`
- XPath: `#q`

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
- HTML: `<h1 class="logo"><a href="/2026/">fosdem-2026</a></h1>`
- XPath: `.logo`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="home"><a href="/2026/">Home</a></li>`
- XPath: `#nav > .home`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/about/">About</a></li>`
- XPath: `#nav > li:nth-child(2)`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/news/">News</a></li>`
- XPath: `#nav > li:nth-child(3)`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="active"><a href="/2026/schedule/">Schedule</a></li>`
- XPath: `#nav > .active`

*... and 6 more failures for this rule*

### https://fosdem.org/2026/schedule/event/ETLVUA-the_joys_and_horrors_of_nes_dynamic_recompilation/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/about/">About</a>`
- XPath: `li:nth-child(2) > a[href$="about/"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/news/">News</a>`
- XPath: `li:nth-child(3) > a[href$="news/"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/stands/">Stands</a>`
- XPath: `li:nth-child(5) > a[href$="stands/"]`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/volunteer/">Volunteer</a>`
- XPath: `li:nth-child(6) > a[href$="volunteer/"]`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/practical/">Practical</a>`
- XPath: `a[href$="practical/"]`

*... and 35 more failures for this rule*

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: Headings should not be empty
- HTML: `<h2></h2>`
- XPath: `#pagetitles > h2`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input type="text" name="q" id="q" class="span2" value="">`
- XPath: `#q`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html lang="en">`
- XPath: `html`

#### Rule: [link-in-text-block](https://dequeuniversity.com/rules/axe/4.11/link-in-text-block?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.1](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color) (Level A)

**Failure 1:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a class="value-title" title="2026-02-01T14:50:00+01:00" href="/2026/schedule/day/sunday/#1450">14:50</a>`
- XPath: `a[title="2026-02-01T14:50:00+01:00"]`

**Failure 2:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a class="value-title" title="2026-02-01T15:10:00+01:00" href="/2026/schedule/day/sunday/#1510">15:10</a>`
- XPath: `a[title="2026-02-01T15:10:00+01:00"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h1 class="logo"><a href="/2026/">fosdem-2026</a></h1>`
- XPath: `.logo`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="home"><a href="/2026/">Home</a></li>`
- XPath: `#nav > .home`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/about/">About</a></li>`
- XPath: `#nav > li:nth-child(2)`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/news/">News</a></li>`
- XPath: `#nav > li:nth-child(3)`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="active"><a href="/2026/schedule/">Schedule</a></li>`
- XPath: `#nav > .active`

*... and 6 more failures for this rule*

### https://fosdem.org/2026/schedule/event/FYVUB8-a_short_story_of_supporting_microsoft_exchange_in_thunderbird/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/about/">About</a>`
- XPath: `li:nth-child(2) > a[href$="about/"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/news/">News</a>`
- XPath: `li:nth-child(3) > a[href$="news/"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/stands/">Stands</a>`
- XPath: `li:nth-child(5) > a[href$="stands/"]`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/volunteer/">Volunteer</a>`
- XPath: `li:nth-child(6) > a[href$="volunteer/"]`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/practical/">Practical</a>`
- XPath: `a[href$="practical/"]`

*... and 42 more failures for this rule*

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: Headings should not be empty
- HTML: `<h2></h2>`
- XPath: `#pagetitles > h2`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input type="text" name="q" id="q" class="span2" value="">`
- XPath: `#q`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html lang="en">`
- XPath: `html`

#### Rule: [link-in-text-block](https://dequeuniversity.com/rules/axe/4.11/link-in-text-block?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.1](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color) (Level A)

**Failure 1:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a class="value-title" title="2026-01-31T12:00:00+01:00" href="/2026/schedule/day/saturday/#1200">12:00</a>`
- XPath: `a[title="2026-01-31T12:00:00+01:00"]`

**Failure 2:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a class="value-title" title="2026-01-31T12:15:00+01:00" href="/2026/schedule/day/saturday/#1215">12:15</a>`
- XPath: `a[title="2026-01-31T12:15:00+01:00"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h1 class="logo"><a href="/2026/">fosdem-2026</a></h1>`
- XPath: `.logo`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="home"><a href="/2026/">Home</a></li>`
- XPath: `#nav > .home`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/about/">About</a></li>`
- XPath: `#nav > li:nth-child(2)`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/news/">News</a></li>`
- XPath: `#nav > li:nth-child(3)`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="active"><a href="/2026/schedule/">Schedule</a></li>`
- XPath: `#nav > .active`

*... and 6 more failures for this rule*

### https://fosdem.org/2026/schedule/speaker/lesion/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/about/">About</a>`
- XPath: `li:nth-child(2) > a[href$="about/"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/news/">News</a>`
- XPath: `li:nth-child(3) > a[href$="news/"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/stands/">Stands</a>`
- XPath: `li:nth-child(5) > a[href$="stands/"]`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/volunteer/">Volunteer</a>`
- XPath: `li:nth-child(6) > a[href$="volunteer/"]`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/practical/">Practical</a>`
- XPath: `a[href$="practical/"]`

*... and 27 more failures for this rule*

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3>Events</h3>`
- XPath: `#main > h3`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input type="text" name="q" id="q" class="span2" value="">`
- XPath: `#q`

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
- HTML: `<h1 class="logo"><a href="/2026/">fosdem-2026</a></h1>`
- XPath: `.logo`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="home"><a href="/2026/">Home</a></li>`
- XPath: `#nav > .home`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/about/">About</a></li>`
- XPath: `#nav > li:nth-child(2)`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/news/">News</a></li>`
- XPath: `#nav > li:nth-child(3)`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="active"><a href="/2026/schedule/">Schedule</a></li>`
- XPath: `#nav > .active`

*... and 6 more failures for this rule*

### https://fosdem.org/2026/schedule/speaker/michael_stahl/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/about/">About</a>`
- XPath: `li:nth-child(2) > a[href$="about/"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/news/">News</a>`
- XPath: `li:nth-child(3) > a[href$="news/"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/stands/">Stands</a>`
- XPath: `li:nth-child(5) > a[href$="stands/"]`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/volunteer/">Volunteer</a>`
- XPath: `li:nth-child(6) > a[href$="volunteer/"]`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/practical/">Practical</a>`
- XPath: `a[href$="practical/"]`

*... and 27 more failures for this rule*

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3>Events</h3>`
- XPath: `#main > h3`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input type="text" name="q" id="q" class="span2" value="">`
- XPath: `#q`

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
- HTML: `<h1 class="logo"><a href="/2026/">fosdem-2026</a></h1>`
- XPath: `.logo`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="home"><a href="/2026/">Home</a></li>`
- XPath: `#nav > .home`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/about/">About</a></li>`
- XPath: `#nav > li:nth-child(2)`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/news/">News</a></li>`
- XPath: `#nav > li:nth-child(3)`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="active"><a href="/2026/schedule/">Schedule</a></li>`
- XPath: `#nav > .active`

*... and 6 more failures for this rule*

### https://fosdem.org/2026/schedule/speaker/thomas_schwinge/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/about/">About</a>`
- XPath: `li:nth-child(2) > a[href$="about/"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/news/">News</a>`
- XPath: `li:nth-child(3) > a[href$="news/"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/stands/">Stands</a>`
- XPath: `li:nth-child(5) > a[href$="stands/"]`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/volunteer/">Volunteer</a>`
- XPath: `li:nth-child(6) > a[href$="volunteer/"]`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/practical/">Practical</a>`
- XPath: `a[href$="practical/"]`

*... and 39 more failures for this rule*

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3>Events</h3>`
- XPath: `#main > h3`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input type="text" name="q" id="q" class="span2" value="">`
- XPath: `#q`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html lang="en">`
- XPath: `html`

#### Rule: [link-in-text-block](https://dequeuniversity.com/rules/axe/4.11/link-in-text-block?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.1](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color) (Level A)

**Failure 1:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a href="https://gcc.gnu.org/">GCC (GNU Compiler Collection)</a>`
- XPath: `a[href$="gcc.gnu.org/"]`

**Failure 2:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a href="https://gcc.gnu.org/wiki/OpenACC">OpenACC</a>`
- XPath: `p:nth-child(4) > a:nth-child(2)`

**Failure 3:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a href="https://gcc.gnu.org/wiki/OpenMP">OpenMP</a>`
- XPath: `p:nth-child(4) > a:nth-child(3)`

**Failure 4:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a href="https://gcc.gnu.org/wiki/Offloading">code offloading</a>`
- XPath: `a:nth-child(4)`

**Failure 5:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a href="https://openacc.org/">OpenACC Technical Committee</a>`
- XPath: `a[href$="openacc.org/"]`

*... and 2 more failures for this rule*

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h1 class="logo"><a href="/2026/">fosdem-2026</a></h1>`
- XPath: `.logo`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="home"><a href="/2026/">Home</a></li>`
- XPath: `#nav > .home`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/about/">About</a></li>`
- XPath: `#nav > li:nth-child(2)`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/news/">News</a></li>`
- XPath: `#nav > li:nth-child(3)`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="active"><a href="/2026/schedule/">Schedule</a></li>`
- XPath: `#nav > .active`

*... and 6 more failures for this rule*

### https://fosdem.org/2026/schedule/speaker/prankur_gupta/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/about/">About</a>`
- XPath: `li:nth-child(2) > a[href$="about/"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/news/">News</a>`
- XPath: `li:nth-child(3) > a[href$="news/"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/stands/">Stands</a>`
- XPath: `li:nth-child(5) > a[href$="stands/"]`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/volunteer/">Volunteer</a>`
- XPath: `li:nth-child(6) > a[href$="volunteer/"]`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/practical/">Practical</a>`
- XPath: `a[href$="practical/"]`

*... and 27 more failures for this rule*

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3>Events</h3>`
- XPath: `#main > h3`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input type="text" name="q" id="q" class="span2" value="">`
- XPath: `#q`

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
- HTML: `<h1 class="logo"><a href="/2026/">fosdem-2026</a></h1>`
- XPath: `.logo`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="home"><a href="/2026/">Home</a></li>`
- XPath: `#nav > .home`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/about/">About</a></li>`
- XPath: `#nav > li:nth-child(2)`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/news/">News</a></li>`
- XPath: `#nav > li:nth-child(3)`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="active"><a href="/2026/schedule/">Schedule</a></li>`
- XPath: `#nav > .active`

*... and 6 more failures for this rule*

### https://fosdem.org/2026/schedule/event/VUJT3T-passbolt_community_bof/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/about/">About</a>`
- XPath: `li:nth-child(2) > a[href$="about/"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/news/">News</a>`
- XPath: `li:nth-child(3) > a[href$="news/"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/stands/">Stands</a>`
- XPath: `li:nth-child(5) > a[href$="stands/"]`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/volunteer/">Volunteer</a>`
- XPath: `li:nth-child(6) > a[href$="volunteer/"]`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/practical/">Practical</a>`
- XPath: `a[href$="practical/"]`

*... and 30 more failures for this rule*

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: Headings should not be empty
- HTML: `<h2></h2>`
- XPath: `#pagetitles > h2`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input type="text" name="q" id="q" class="span2" value="">`
- XPath: `#q`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html lang="en">`
- XPath: `html`

#### Rule: [link-in-text-block](https://dequeuniversity.com/rules/axe/4.11/link-in-text-block?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.1](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color) (Level A)

**Failure 1:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a class="value-title" title="2026-01-31T18:00:00+01:00" href="/2026/schedule/day/saturday/#1800">18:00</a>`
- XPath: `a[title="2026-01-31T18:00:00+01:00"]`

**Failure 2:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a class="value-title" title="2026-01-31T18:55:00+01:00" href="/2026/schedule/day/saturday/#1855">18:55</a>`
- XPath: `a[title="2026-01-31T18:55:00+01:00"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h1 class="logo"><a href="/2026/">fosdem-2026</a></h1>`
- XPath: `.logo`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="home"><a href="/2026/">Home</a></li>`
- XPath: `#nav > .home`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/about/">About</a></li>`
- XPath: `#nav > li:nth-child(2)`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/news/">News</a></li>`
- XPath: `#nav > li:nth-child(3)`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="active"><a href="/2026/schedule/">Schedule</a></li>`
- XPath: `#nav > .active`

*... and 6 more failures for this rule*

### https://fosdem.org/2026/schedule/speaker/gilles_pommereuil/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/about/">About</a>`
- XPath: `li:nth-child(2) > a[href$="about/"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/news/">News</a>`
- XPath: `li:nth-child(3) > a[href$="news/"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/stands/">Stands</a>`
- XPath: `li:nth-child(5) > a[href$="stands/"]`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/volunteer/">Volunteer</a>`
- XPath: `li:nth-child(6) > a[href$="volunteer/"]`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/practical/">Practical</a>`
- XPath: `a[href$="practical/"]`

*... and 27 more failures for this rule*

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3>Events</h3>`
- XPath: `#main > h3`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input type="text" name="q" id="q" class="span2" value="">`
- XPath: `#q`

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
- HTML: `<h1 class="logo"><a href="/2026/">fosdem-2026</a></h1>`
- XPath: `.logo`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="home"><a href="/2026/">Home</a></li>`
- XPath: `#nav > .home`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/about/">About</a></li>`
- XPath: `#nav > li:nth-child(2)`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/news/">News</a></li>`
- XPath: `#nav > li:nth-child(3)`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="active"><a href="/2026/schedule/">Schedule</a></li>`
- XPath: `#nav > .active`

*... and 6 more failures for this rule*

### https://fosdem.org/2026/schedule/speaker/kuniyasu_suzaki/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/about/">About</a>`
- XPath: `li:nth-child(2) > a[href$="about/"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/news/">News</a>`
- XPath: `li:nth-child(3) > a[href$="news/"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/stands/">Stands</a>`
- XPath: `li:nth-child(5) > a[href$="stands/"]`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/volunteer/">Volunteer</a>`
- XPath: `li:nth-child(6) > a[href$="volunteer/"]`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/practical/">Practical</a>`
- XPath: `a[href$="practical/"]`

*... and 27 more failures for this rule*

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3>Events</h3>`
- XPath: `#main > h3`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input type="text" name="q" id="q" class="span2" value="">`
- XPath: `#q`

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
- HTML: `<h1 class="logo"><a href="/2026/">fosdem-2026</a></h1>`
- XPath: `.logo`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="home"><a href="/2026/">Home</a></li>`
- XPath: `#nav > .home`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/about/">About</a></li>`
- XPath: `#nav > li:nth-child(2)`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/news/">News</a></li>`
- XPath: `#nav > li:nth-child(3)`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="active"><a href="/2026/schedule/">Schedule</a></li>`
- XPath: `#nav > .active`

*... and 6 more failures for this rule*

### https://fosdem.org/2026/schedule/amendments/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/about/">About</a>`
- XPath: `li:nth-child(2) > a[href$="about/"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/news/">News</a>`
- XPath: `li:nth-child(3) > a[href$="news/"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/stands/">Stands</a>`
- XPath: `li:nth-child(5) > a[href$="stands/"]`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/volunteer/">Volunteer</a>`
- XPath: `li:nth-child(6) > a[href$="volunteer/"]`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/practical/">Practical</a>`
- XPath: `a[href$="practical/"]`

*... and 19 more failures for this rule*

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: Headings should not be empty
- HTML: `<h1></h1>`
- XPath: `#pagetitles > h1`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3>FOSDEM</h3>`
- XPath: `.panel-column:nth-child(1) > h3`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input type="text" name="q" id="q" class="span2" value="">`
- XPath: `#q`

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
- HTML: `<h1 class="logo"><a href="/2026/">fosdem-2026</a></h1>`
- XPath: `.logo`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="home"><a href="/2026/">Home</a></li>`
- XPath: `#nav > .home`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/about/">About</a></li>`
- XPath: `#nav > li:nth-child(2)`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/news/">News</a></li>`
- XPath: `#nav > li:nth-child(3)`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="active"><a href="/2026/schedule/">Schedule</a></li>`
- XPath: `#nav > .active`

*... and 6 more failures for this rule*

### https://fosdem.org/2026/schedule/speaker/maksim_samoilov/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/about/">About</a>`
- XPath: `li:nth-child(2) > a[href$="about/"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/news/">News</a>`
- XPath: `li:nth-child(3) > a[href$="news/"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/stands/">Stands</a>`
- XPath: `li:nth-child(5) > a[href$="stands/"]`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/volunteer/">Volunteer</a>`
- XPath: `li:nth-child(6) > a[href$="volunteer/"]`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/practical/">Practical</a>`
- XPath: `a[href$="practical/"]`

*... and 27 more failures for this rule*

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3>Events</h3>`
- XPath: `#main > h3`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input type="text" name="q" id="q" class="span2" value="">`
- XPath: `#q`

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
- HTML: `<h1 class="logo"><a href="/2026/">fosdem-2026</a></h1>`
- XPath: `.logo`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="home"><a href="/2026/">Home</a></li>`
- XPath: `#nav > .home`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/about/">About</a></li>`
- XPath: `#nav > li:nth-child(2)`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/news/">News</a></li>`
- XPath: `#nav > li:nth-child(3)`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="active"><a href="/2026/schedule/">Schedule</a></li>`
- XPath: `#nav > .active`

*... and 6 more failures for this rule*

### https://fosdem.org/2026/schedule/event/QZHWK9-open_food_facts_getting_together_to_reduce_health_and_environmental_impacts_of_c/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/about/">About</a>`
- XPath: `li:nth-child(2) > a[href$="about/"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/news/">News</a>`
- XPath: `li:nth-child(3) > a[href$="news/"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/stands/">Stands</a>`
- XPath: `li:nth-child(5) > a[href$="stands/"]`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/volunteer/">Volunteer</a>`
- XPath: `li:nth-child(6) > a[href$="volunteer/"]`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/practical/">Practical</a>`
- XPath: `a[href$="practical/"]`

*... and 35 more failures for this rule*

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: Headings should not be empty
- HTML: `<h2></h2>`
- XPath: `#pagetitles > h2`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/2026/schedule/event/QZHWK9-open_food_facts_getting_together_to_reduce_health_and_environmental_impacts_of_c/QZHWK9-open_food_facts_getting_together_to_reduce_health_and_environmental_impacts_of_c-d59fd536f05054f8e4740a84394014943e2088c4286ee0bb307b0976ce679159.png" class="event-logo">`
- XPath: `.event-logo`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input type="text" name="q" id="q" class="span2" value="">`
- XPath: `#q`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html lang="en">`
- XPath: `html`

#### Rule: [link-in-text-block](https://dequeuniversity.com/rules/axe/4.11/link-in-text-block?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.1](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color) (Level A)

**Failure 1:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a class="value-title" title="2026-02-01T11:40:00+01:00" href="/2026/schedule/day/sunday/#1140">11:40</a>`
- XPath: `a[title="2026-02-01T11:40:00+01:00"]`

**Failure 2:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a class="value-title" title="2026-02-01T11:55:00+01:00" href="/2026/schedule/day/sunday/#1155">11:55</a>`
- XPath: `a[title="2026-02-01T11:55:00+01:00"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h1 class="logo"><a href="/2026/">fosdem-2026</a></h1>`
- XPath: `.logo`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="home"><a href="/2026/">Home</a></li>`
- XPath: `#nav > .home`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/about/">About</a></li>`
- XPath: `#nav > li:nth-child(2)`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/news/">News</a></li>`
- XPath: `#nav > li:nth-child(3)`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="active"><a href="/2026/schedule/">Schedule</a></li>`
- XPath: `#nav > .active`

*... and 6 more failures for this rule*

### https://fosdem.org/2026/schedule/speaker/renzo_davoli/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/about/">About</a>`
- XPath: `li:nth-child(2) > a[href$="about/"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/news/">News</a>`
- XPath: `li:nth-child(3) > a[href$="news/"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/stands/">Stands</a>`
- XPath: `li:nth-child(5) > a[href$="stands/"]`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/volunteer/">Volunteer</a>`
- XPath: `li:nth-child(6) > a[href$="volunteer/"]`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/practical/">Practical</a>`
- XPath: `a[href$="practical/"]`

*... and 33 more failures for this rule*

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3>Events</h3>`
- XPath: `#main > h3`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input type="text" name="q" id="q" class="span2" value="">`
- XPath: `#q`

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
- HTML: `<h1 class="logo"><a href="/2026/">fosdem-2026</a></h1>`
- XPath: `.logo`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="home"><a href="/2026/">Home</a></li>`
- XPath: `#nav > .home`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/about/">About</a></li>`
- XPath: `#nav > li:nth-child(2)`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/news/">News</a></li>`
- XPath: `#nav > li:nth-child(3)`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="active"><a href="/2026/schedule/">Schedule</a></li>`
- XPath: `#nav > .active`

*... and 6 more failures for this rule*

### https://fosdem.org/2026/schedule/speaker/dimitris_karakasilis/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/about/">About</a>`
- XPath: `li:nth-child(2) > a[href$="about/"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/news/">News</a>`
- XPath: `li:nth-child(3) > a[href$="news/"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/stands/">Stands</a>`
- XPath: `li:nth-child(5) > a[href$="stands/"]`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/volunteer/">Volunteer</a>`
- XPath: `li:nth-child(6) > a[href$="volunteer/"]`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/practical/">Practical</a>`
- XPath: `a[href$="practical/"]`

*... and 27 more failures for this rule*

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3>Events</h3>`
- XPath: `#main > h3`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input type="text" name="q" id="q" class="span2" value="">`
- XPath: `#q`

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
- HTML: `<h1 class="logo"><a href="/2026/">fosdem-2026</a></h1>`
- XPath: `.logo`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="home"><a href="/2026/">Home</a></li>`
- XPath: `#nav > .home`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/about/">About</a></li>`
- XPath: `#nav > li:nth-child(2)`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/news/">News</a></li>`
- XPath: `#nav > li:nth-child(3)`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="active"><a href="/2026/schedule/">Schedule</a></li>`
- XPath: `#nav > .active`

*... and 6 more failures for this rule*

### https://fosdem.org/2026/schedule/speaker/leah_rowe/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/about/">About</a>`
- XPath: `li:nth-child(2) > a[href$="about/"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/news/">News</a>`
- XPath: `li:nth-child(3) > a[href$="news/"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/stands/">Stands</a>`
- XPath: `li:nth-child(5) > a[href$="stands/"]`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/volunteer/">Volunteer</a>`
- XPath: `li:nth-child(6) > a[href$="volunteer/"]`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/practical/">Practical</a>`
- XPath: `a[href$="practical/"]`

*... and 27 more failures for this rule*

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3>Events</h3>`
- XPath: `#main > h3`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input type="text" name="q" id="q" class="span2" value="">`
- XPath: `#q`

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
- HTML: `<h1 class="logo"><a href="/2026/">fosdem-2026</a></h1>`
- XPath: `.logo`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="home"><a href="/2026/">Home</a></li>`
- XPath: `#nav > .home`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/about/">About</a></li>`
- XPath: `#nav > li:nth-child(2)`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/news/">News</a></li>`
- XPath: `#nav > li:nth-child(3)`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="active"><a href="/2026/schedule/">Schedule</a></li>`
- XPath: `#nav > .active`

*... and 6 more failures for this rule*

### https://fosdem.org/2026/schedule/event/9GLCAE-the_saga_of_official_binary_packages_for_gentoo_linux/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/about/">About</a>`
- XPath: `li:nth-child(2) > a[href$="about/"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/news/">News</a>`
- XPath: `li:nth-child(3) > a[href$="news/"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/stands/">Stands</a>`
- XPath: `li:nth-child(5) > a[href$="stands/"]`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/volunteer/">Volunteer</a>`
- XPath: `li:nth-child(6) > a[href$="volunteer/"]`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/practical/">Practical</a>`
- XPath: `a[href$="practical/"]`

*... and 42 more failures for this rule*

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: Headings should not be empty
- HTML: `<h2></h2>`
- XPath: `#pagetitles > h2`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/2026/schedule/event/9GLCAE-the_saga_of_official_binary_packages_for_gentoo_linux/9GLCAE-the_saga_of_official_binary_packages_for_gentoo_linux-5e2f517cca1dc0aff1694f0b14b71b13cad8e8337445faf20ebfff74080f2486.png" class="event-logo">`
- XPath: `.event-logo`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input type="text" name="q" id="q" class="span2" value="">`
- XPath: `#q`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html lang="en">`
- XPath: `html`

#### Rule: [link-in-text-block](https://dequeuniversity.com/rules/axe/4.11/link-in-text-block?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.1](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color) (Level A)

**Failure 1:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a class="value-title" title="2026-02-01T13:00:00+01:00" href="/2026/schedule/day/sunday/#1300">13:00</a>`
- XPath: `a[title="2026-02-01T13:00:00+01:00"]`

**Failure 2:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a class="value-title" title="2026-02-01T13:25:00+01:00" href="/2026/schedule/day/sunday/#1325">13:25</a>`
- XPath: `a[title="2026-02-01T13:25:00+01:00"]`

**Failure 3:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a href="https://www.gentoo.org/">Gentoo Linux</a>`
- XPath: `a[href$="gentoo.org/"]`

**Failure 4:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a href="https://www.gentoo.org/news/2023/12/29/Gentoo-binary.html">binary packages for download</a>`
- XPath: `p:nth-child(1) > a:nth-child(2)`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h1 class="logo"><a href="/2026/">fosdem-2026</a></h1>`
- XPath: `.logo`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="home"><a href="/2026/">Home</a></li>`
- XPath: `#nav > .home`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/about/">About</a></li>`
- XPath: `#nav > li:nth-child(2)`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/news/">News</a></li>`
- XPath: `#nav > li:nth-child(3)`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="active"><a href="/2026/schedule/">Schedule</a></li>`
- XPath: `#nav > .active`

*... and 6 more failures for this rule*

### https://fosdem.org/2026/schedule/speaker/twinkle/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/about/">About</a>`
- XPath: `li:nth-child(2) > a[href$="about/"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/news/">News</a>`
- XPath: `li:nth-child(3) > a[href$="news/"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/stands/">Stands</a>`
- XPath: `li:nth-child(5) > a[href$="stands/"]`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/volunteer/">Volunteer</a>`
- XPath: `li:nth-child(6) > a[href$="volunteer/"]`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/practical/">Practical</a>`
- XPath: `a[href$="practical/"]`

*... and 27 more failures for this rule*

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3>Events</h3>`
- XPath: `#main > h3`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input type="text" name="q" id="q" class="span2" value="">`
- XPath: `#q`

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
- HTML: `<h1 class="logo"><a href="/2026/">fosdem-2026</a></h1>`
- XPath: `.logo`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="home"><a href="/2026/">Home</a></li>`
- XPath: `#nav > .home`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/about/">About</a></li>`
- XPath: `#nav > li:nth-child(2)`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/news/">News</a></li>`
- XPath: `#nav > li:nth-child(3)`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="active"><a href="/2026/schedule/">Schedule</a></li>`
- XPath: `#nav > .active`

*... and 6 more failures for this rule*

### https://fosdem.org/2026/schedule/event/TUEQCR-openperouter_turning_your_kubernetes_nodes_into_a_provide_edge_router/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/about/">About</a>`
- XPath: `li:nth-child(2) > a[href$="about/"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/news/">News</a>`
- XPath: `li:nth-child(3) > a[href$="news/"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/stands/">Stands</a>`
- XPath: `li:nth-child(5) > a[href$="stands/"]`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/volunteer/">Volunteer</a>`
- XPath: `li:nth-child(6) > a[href$="volunteer/"]`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/practical/">Practical</a>`
- XPath: `a[href$="practical/"]`

*... and 38 more failures for this rule*

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: Headings should not be empty
- HTML: `<h2></h2>`
- XPath: `#pagetitles > h2`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input type="text" name="q" id="q" class="span2" value="">`
- XPath: `#q`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html lang="en">`
- XPath: `html`

#### Rule: [link-in-text-block](https://dequeuniversity.com/rules/axe/4.11/link-in-text-block?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.1](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color) (Level A)

**Failure 1:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a class="value-title" title="2026-01-31T15:45:00+01:00" href="/2026/schedule/day/saturday/#1545">15:45</a>`
- XPath: `a[title="2026-01-31T15:45:00+01:00"]`

**Failure 2:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a class="value-title" title="2026-01-31T16:05:00+01:00" href="/2026/schedule/day/saturday/#1605">16:05</a>`
- XPath: `a[title="2026-01-31T16:05:00+01:00"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h1 class="logo"><a href="/2026/">fosdem-2026</a></h1>`
- XPath: `.logo`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="home"><a href="/2026/">Home</a></li>`
- XPath: `#nav > .home`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/about/">About</a></li>`
- XPath: `#nav > li:nth-child(2)`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/news/">News</a></li>`
- XPath: `#nav > li:nth-child(3)`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="active"><a href="/2026/schedule/">Schedule</a></li>`
- XPath: `#nav > .active`

*... and 6 more failures for this rule*

### https://fosdem.org/2026/schedule/speaker/davide_berardi/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/about/">About</a>`
- XPath: `li:nth-child(2) > a[href$="about/"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/news/">News</a>`
- XPath: `li:nth-child(3) > a[href$="news/"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/stands/">Stands</a>`
- XPath: `li:nth-child(5) > a[href$="stands/"]`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/volunteer/">Volunteer</a>`
- XPath: `li:nth-child(6) > a[href$="volunteer/"]`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/practical/">Practical</a>`
- XPath: `a[href$="practical/"]`

*... and 27 more failures for this rule*

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3>Events</h3>`
- XPath: `#main > h3`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input type="text" name="q" id="q" class="span2" value="">`
- XPath: `#q`

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
- HTML: `<h1 class="logo"><a href="/2026/">fosdem-2026</a></h1>`
- XPath: `.logo`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="home"><a href="/2026/">Home</a></li>`
- XPath: `#nav > .home`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/about/">About</a></li>`
- XPath: `#nav > li:nth-child(2)`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/news/">News</a></li>`
- XPath: `#nav > li:nth-child(3)`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="active"><a href="/2026/schedule/">Schedule</a></li>`
- XPath: `#nav > .active`

*... and 6 more failures for this rule*

### https://fosdem.org/2026/schedule/event/FSQJZG-from_gatekeepers_to_partners_how_developer_relations_transforms_security_tool_ad/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/about/">About</a>`
- XPath: `li:nth-child(2) > a[href$="about/"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/news/">News</a>`
- XPath: `li:nth-child(3) > a[href$="news/"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/stands/">Stands</a>`
- XPath: `li:nth-child(5) > a[href$="stands/"]`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/volunteer/">Volunteer</a>`
- XPath: `li:nth-child(6) > a[href$="volunteer/"]`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/practical/">Practical</a>`
- XPath: `a[href$="practical/"]`

*... and 36 more failures for this rule*

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: Headings should not be empty
- HTML: `<h2></h2>`
- XPath: `#pagetitles > h2`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input type="text" name="q" id="q" class="span2" value="">`
- XPath: `#q`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html lang="en">`
- XPath: `html`

#### Rule: [link-in-text-block](https://dequeuniversity.com/rules/axe/4.11/link-in-text-block?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.1](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color) (Level A)

**Failure 1:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a class="value-title" title="2026-02-01T12:40:00+01:00" href="/2026/schedule/day/sunday/#1240">12:40</a>`
- XPath: `a[title="2026-02-01T12:40:00+01:00"]`

**Failure 2:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a class="value-title" title="2026-02-01T13:05:00+01:00" href="/2026/schedule/day/sunday/#1305">13:05</a>`
- XPath: `a[title="2026-02-01T13:05:00+01:00"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h1 class="logo"><a href="/2026/">fosdem-2026</a></h1>`
- XPath: `.logo`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="home"><a href="/2026/">Home</a></li>`
- XPath: `#nav > .home`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/about/">About</a></li>`
- XPath: `#nav > li:nth-child(2)`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/news/">News</a></li>`
- XPath: `#nav > li:nth-child(3)`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="active"><a href="/2026/schedule/">Schedule</a></li>`
- XPath: `#nav > .active`

*... and 6 more failures for this rule*

### https://fosdem.org/2026/schedule/speaker/nikolay_kuznetsov/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/about/">About</a>`
- XPath: `li:nth-child(2) > a[href$="about/"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/news/">News</a>`
- XPath: `li:nth-child(3) > a[href$="news/"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/stands/">Stands</a>`
- XPath: `li:nth-child(5) > a[href$="stands/"]`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/volunteer/">Volunteer</a>`
- XPath: `li:nth-child(6) > a[href$="volunteer/"]`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/practical/">Practical</a>`
- XPath: `a[href$="practical/"]`

*... and 27 more failures for this rule*

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3>Events</h3>`
- XPath: `#main > h3`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input type="text" name="q" id="q" class="span2" value="">`
- XPath: `#q`

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
- HTML: `<h1 class="logo"><a href="/2026/">fosdem-2026</a></h1>`
- XPath: `.logo`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="home"><a href="/2026/">Home</a></li>`
- XPath: `#nav > .home`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/about/">About</a></li>`
- XPath: `#nav > li:nth-child(2)`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/news/">News</a></li>`
- XPath: `#nav > li:nth-child(3)`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="active"><a href="/2026/schedule/">Schedule</a></li>`
- XPath: `#nav > .active`

*... and 6 more failures for this rule*

### https://fosdem.org/2026/schedule/event/KCPTX7-just1/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/about/">About</a>`
- XPath: `li:nth-child(2) > a[href$="about/"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/news/">News</a>`
- XPath: `li:nth-child(3) > a[href$="news/"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/stands/">Stands</a>`
- XPath: `li:nth-child(5) > a[href$="stands/"]`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/volunteer/">Volunteer</a>`
- XPath: `li:nth-child(6) > a[href$="volunteer/"]`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/practical/">Practical</a>`
- XPath: `a[href$="practical/"]`

*... and 39 more failures for this rule*

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: Headings should not be empty
- HTML: `<h2></h2>`
- XPath: `#pagetitles > h2`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/2026/schedule/event/KCPTX7-just1/KCPTX7-just1-90588315276c4f7b42bdd8769d40cb59af82882d4f3bf8a657f76a8ea8eca70a.png" class="event-logo">`
- XPath: `.event-logo`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input type="text" name="q" id="q" class="span2" value="">`
- XPath: `#q`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html lang="en">`
- XPath: `html`

#### Rule: [link-in-text-block](https://dequeuniversity.com/rules/axe/4.11/link-in-text-block?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.1](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color) (Level A)

**Failure 1:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a class="value-title" title="2026-01-31T12:10:00+01:00" href="/2026/schedule/day/saturday/#1210">12:10</a>`
- XPath: `a[title="2026-01-31T12:10:00+01:00"]`

**Failure 2:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a class="value-title" title="2026-01-31T12:15:00+01:00" href="/2026/schedule/day/saturday/#1215">12:15</a>`
- XPath: `a[title="2026-01-31T12:15:00+01:00"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h1 class="logo"><a href="/2026/">fosdem-2026</a></h1>`
- XPath: `.logo`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="home"><a href="/2026/">Home</a></li>`
- XPath: `#nav > .home`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/about/">About</a></li>`
- XPath: `#nav > li:nth-child(2)`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/news/">News</a></li>`
- XPath: `#nav > li:nth-child(3)`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="active"><a href="/2026/schedule/">Schedule</a></li>`
- XPath: `#nav > .active`

*... and 6 more failures for this rule*

### https://fosdem.org/2026/schedule/event/8SNMXT-describing_nix_closures_using_sboms/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/about/">About</a>`
- XPath: `li:nth-child(2) > a[href$="about/"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/news/">News</a>`
- XPath: `li:nth-child(3) > a[href$="news/"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/stands/">Stands</a>`
- XPath: `li:nth-child(5) > a[href$="stands/"]`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/volunteer/">Volunteer</a>`
- XPath: `li:nth-child(6) > a[href$="volunteer/"]`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/practical/">Practical</a>`
- XPath: `a[href$="practical/"]`

*... and 36 more failures for this rule*

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: Headings should not be empty
- HTML: `<h2></h2>`
- XPath: `#pagetitles > h2`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input type="text" name="q" id="q" class="span2" value="">`
- XPath: `#q`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html lang="en">`
- XPath: `html`

#### Rule: [link-in-text-block](https://dequeuniversity.com/rules/axe/4.11/link-in-text-block?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.1](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color) (Level A)

**Failure 1:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a class="value-title" title="2026-01-31T17:15:00+01:00" href="/2026/schedule/day/saturday/#1715">17:15</a>`
- XPath: `a[title="2026-01-31T17:15:00+01:00"]`

**Failure 2:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a class="value-title" title="2026-01-31T17:35:00+01:00" href="/2026/schedule/day/saturday/#1735">17:35</a>`
- XPath: `a[title="2026-01-31T17:35:00+01:00"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h1 class="logo"><a href="/2026/">fosdem-2026</a></h1>`
- XPath: `.logo`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="home"><a href="/2026/">Home</a></li>`
- XPath: `#nav > .home`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/about/">About</a></li>`
- XPath: `#nav > li:nth-child(2)`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/news/">News</a></li>`
- XPath: `#nav > li:nth-child(3)`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="active"><a href="/2026/schedule/">Schedule</a></li>`
- XPath: `#nav > .active`

*... and 6 more failures for this rule*

### https://fosdem.org/2026/schedule/speaker/sergio_pastor_perez/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/about/">About</a>`
- XPath: `li:nth-child(2) > a[href$="about/"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/news/">News</a>`
- XPath: `li:nth-child(3) > a[href$="news/"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/stands/">Stands</a>`
- XPath: `li:nth-child(5) > a[href$="stands/"]`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/volunteer/">Volunteer</a>`
- XPath: `li:nth-child(6) > a[href$="volunteer/"]`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/practical/">Practical</a>`
- XPath: `a[href$="practical/"]`

*... and 27 more failures for this rule*

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3>Events</h3>`
- XPath: `#main > h3`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input type="text" name="q" id="q" class="span2" value="">`
- XPath: `#q`

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
- HTML: `<h1 class="logo"><a href="/2026/">fosdem-2026</a></h1>`
- XPath: `.logo`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="home"><a href="/2026/">Home</a></li>`
- XPath: `#nav > .home`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/about/">About</a></li>`
- XPath: `#nav > li:nth-child(2)`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/news/">News</a></li>`
- XPath: `#nav > li:nth-child(3)`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="active"><a href="/2026/schedule/">Schedule</a></li>`
- XPath: `#nav > .active`

*... and 6 more failures for this rule*

### https://fosdem.org/2026/schedule/event/KPHKNU-bringing-bsd-applications-on-linux/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/about/">About</a>`
- XPath: `li:nth-child(2) > a[href$="about/"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/news/">News</a>`
- XPath: `li:nth-child(3) > a[href$="news/"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/stands/">Stands</a>`
- XPath: `li:nth-child(5) > a[href$="stands/"]`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/volunteer/">Volunteer</a>`
- XPath: `li:nth-child(6) > a[href$="volunteer/"]`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/2026/practical/">Practical</a>`
- XPath: `a[href$="practical/"]`

*... and 40 more failures for this rule*

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: Headings should not be empty
- HTML: `<h2></h2>`
- XPath: `#pagetitles > h2`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input type="text" name="q" id="q" class="span2" value="">`
- XPath: `#q`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html lang="en">`
- XPath: `html`

#### Rule: [link-in-text-block](https://dequeuniversity.com/rules/axe/4.11/link-in-text-block?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.1](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color) (Level A)

**Failure 1:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a class="value-title" title="2026-01-31T17:15:00+01:00" href="/2026/schedule/day/saturday/#1715">17:15</a>`
- XPath: `a[title="2026-01-31T17:15:00+01:00"]`

**Failure 2:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a class="value-title" title="2026-01-31T17:40:00+01:00" href="/2026/schedule/day/saturday/#1740">17:40</a>`
- XPath: `a[title="2026-01-31T17:40:00+01:00"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h1 class="logo"><a href="/2026/">fosdem-2026</a></h1>`
- XPath: `.logo`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="home"><a href="/2026/">Home</a></li>`
- XPath: `#nav > .home`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/about/">About</a></li>`
- XPath: `#nav > li:nth-child(2)`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<li><a href="/2026/news/">News</a></li>`
- XPath: `#nav > li:nth-child(3)`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<li class="active"><a href="/2026/schedule/">Schedule</a></li>`
- XPath: `#nav > .active`

*... and 6 more failures for this rule*

