# Scan Report: Fel website

- Issue: https://github.com/mgifford/open-scans/issues/93
- Submitted by: JayNiker
- Scanned at: 2026-03-06T20:02:13.220Z
- Engines used: All engines (AXE, ALFA, Equal Access, AccessLint, QualWeb)
- Scan duration: 0.3 minutes
- Total URLs submitted: 1
- Accepted public URLs: 1
- Rejected URLs: 0
- 🌙 Dark mode: None of the scanned URLs support `prefers-color-scheme: dark`
- ALFA outcomes: 1157 passed, 55 failed, 25 cantTell, 46 inapplicable
- axe outcomes: 866 passed, 1 failed, 77 cantTell, 38 inapplicable
- Equal Access outcomes: 2564 passed, 78 failed (66 unique, 12 duplicate), 54 cantTell, 0 inapplicable
- AccessLint outcomes: 86 passed, 6 failed (6 unique, 0 duplicate), 0 cantTell, 0 inapplicable
- QualWeb outcomes: 432 passed, 2 failed, 152 cantTell, 1 inapplicable
- Duplicate findings caught by later scanners: 44

## 🎯 Priority: Pages with Most Errors

Focus your efforts on these pages to make the biggest impact (combined scanner unique failures):

| Page | axe Unique | ALFA Unique | Equal Access Unique | AccessLint Unique | QualWeb | Total Unique | Page Title |
|---|---:|---:|---:|---:|---:|---:|---|
| [View Page](https://www.flightemissions.eu/en) | 1 | 24 | 66 | 6 | 2 | **99** | EU Flight Emissions Label (FEL) \| EU Flight Emissions Label (FEL) |

## 🔧 Priority: Most Common Issues (ALFA)

These ALFA accessibility issues appear most frequently across your pages:

| Rule | Pages Affected | Documentation |
|---|---:|---|
| [SIA-R3](https://alfa.siteimprove.com/rules/sia-r3): lang attribute has a valid language code | **1** of 1 | [View Rule](https://alfa.siteimprove.com/rules/sia-r3) |
| [SIA-R53](https://alfa.siteimprove.com/rules/sia-r53): Headings follow a logical hierarchy | **1** of 1 | [View Rule](https://alfa.siteimprove.com/rules/sia-r53) |
| [SIA-R61](https://alfa.siteimprove.com/rules/sia-r61) | **1** of 1 | [View Rule](https://alfa.siteimprove.com/rules/sia-r61) |
| [SIA-R66](https://alfa.siteimprove.com/rules/sia-r66): Text has enhanced contrast with its background | **1** of 1 | [View Rule](https://alfa.siteimprove.com/rules/sia-r66) |
| [SIA-R69](https://alfa.siteimprove.com/rules/sia-r69): Text has sufficient contrast with its background | **1** of 1 | [View Rule](https://alfa.siteimprove.com/rules/sia-r69) |
| [SIA-R78](https://alfa.siteimprove.com/rules/sia-r78): Headings of same level have text content between them | **1** of 1 | [View Rule](https://alfa.siteimprove.com/rules/sia-r78) |

> 💡 **Tip**: Click on the rule documentation links to learn how to fix each issue.


## 🔧 Priority: Most Common Issues (axe)

These axe accessibility issues appear most frequently across your pages:

| Rule | Pages Affected | Documentation |
|---|---:|---|
| heading-order | **1** of 1 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/heading-order) |

> 💡 **Tip**: Click on the rule documentation links to learn how to fix each issue. Consider fixing the most common issues first for maximum impact.

> 🤖 **Future Enhancement**: This report will soon include AI-powered fix suggestions for authenticated GitHub users (opt-in only, no auto-run AI).

## 🔍 Cross-Page Patterns: Common HTML Issues

These HTML patterns cause the same accessibility errors across multiple pages. **Fix the pattern once in your codebase to fix it everywhere!**

✅ No recurring HTML patterns found across multiple pages. Each issue appears to be page-specific.

## 📊 Detailed Results

Complete scan results for all tested pages:

| Submitted URL | Final URL | Status | HTTP | Redirected | Time (ms) | axe Unique | ALFA Unique | Equal Access Unique | AccessLint Unique | Duplicates | Notes |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|
| https://flightemissions.eu | https://www.flightemissions.eu/en | OK | 200 | yes | 16837 | 1 | 24 | 66 | 6 | 44 | EU Flight Emissions Label (FEL) \| EU Flight Emissions Label (FEL) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R3 (lang attribute has a valid language code), SIA-R53 (Headings follow a logical hierarchy), SIA-R61, SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background), SIA-R78 (Headings of same level have text content between them) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: heading-order |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_complementary_labelled, aria_content_in_landmark, aria_descendant_valid, aria_role_redundant, element_attribute_deprecated, element_id_unique, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, input_checkboxes_grouped, label_ref_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled, text_block_heading, text_sensory_misuse |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: adaptable/autocomplete-valid, distinguishable/color-contrast, labels-and-names/duplicate-id-aria, landmarks/region, navigable/heading-order, navigable/page-has-heading-one |

## Detailed Failure Information (ALFA)

### https://flightemissions.eu

#### Rule: [SIA-R3: lang attribute has a valid language code](https://alfa.siteimprove.com/rules/sia-r3)

**Failure 1:**
- Message: The element does not have a unique ID
- HTML: `<title id="website-logo-title">EASA (European Union Aviation Safety Agency)</title>`
- XPath: `/title[@id="website-logo-title"]`

**Failure 2:**
- Message: The element does not have a unique ID
- HTML: `<g id="EASA_Logo" clip-path="url(#clip0_2148_7664)">...</g>`
- XPath: `/g[@id="EASA_Logo"]`

**Failure 3:**
- Message: The element does not have a unique ID
- HTML: `<g id="Group 3">...</g>`
- XPath: `/g[@id="Group 3"]`

**Failure 4:**
- Message: The element does not have a unique ID
- HTML: `<path id="blue square" d="M3.58272 34.5166H3.58239C1.8966 34.5178 0.5 33.1012 0.5 31.3254V3.88981C0.5 2.1126 1.89672 0.695923 3.58272 0.695923H30.1926C31.8797 0.695923 33.2741 2.11236 33.2741 3.88849V31.3241C33.2741 33.1013 31.8786 34.5166 30.1926 34.5166H3.58272Z" fill="#222F64" stroke="white" />`
- XPath: `/path[@id="blue square"]`

**Failure 5:**
- Message: The element does not have a unique ID
- HTML: `<g id="EU stars">...</g>`
- XPath: `/g[@id="EU stars"]`

*... and 14 more failures for this rule*

#### Rule: [SIA-R53: Headings follow a logical hierarchy](https://alfa.siteimprove.com/rules/sia-r53)

**Failure 1:**
- Message: The heading skips one or more levels
- HTML: `<h5 class="menu__link menu__link--footer menu__link--with-sub menu__link--empty"> Sitemap</h5>`
- XPath: `/h5[@class="menu__link menu__link--footer menu__link--with-sub menu__link--empty"]`

#### Rule: [SIA-R61](https://alfa.siteimprove.com/rules/sia-r61)

**Failure 1:**
- Message: The document does not start with a level 1 heading

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 1:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R69: Text has sufficient contrast with its background](https://alfa.siteimprove.com/rules/sia-r69)

**Failure 1:**
- Message: The highest possible contrast of the text is 1:1 which is         below the required contrast of 4.5:1

#### Rule: [SIA-R78: Headings of same level have text content between them](https://alfa.siteimprove.com/rules/sia-r78)

**Failure 1:**
- Message: There is no content between this heading and the next
- HTML: `<h3 class="heading">European Commission endorses Air France-KLM’s coop...</h3>`
- XPath: `/h3[@class="heading"]`

## Detailed Failure Information (axe)

### https://flightemissions.eu

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h5 class="menu__link menu__link--footer menu__link--with-sub menu__link--empty"> Sitemap</h5>`
- XPath: `.menu__item--with-sub.has-sub.menu__item--footer:nth-child(1) > .menu__link--with-sub`

