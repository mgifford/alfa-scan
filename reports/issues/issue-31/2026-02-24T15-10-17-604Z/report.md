# Scan Report: Logan's Nerdy Scan

- Issue: https://github.com/mgifford/alfa-scan/issues/31
- Submitted by: lhouse24
- Scanned at: 2026-02-24T15:10:17.530Z
- Total URLs submitted: 1
- Accepted public URLs: 1
- Rejected URLs: 0
- ALFA outcomes: 1800 passed, 324 failed, 18 cantTell, 47 inapplicable
- axe outcomes: 1431 passed, 42 failed, 12 cantTell, 44 inapplicable

## 🎯 Priority: Pages with Most Errors

Focus your efforts on these pages to make the biggest impact (combined ALFA + axe results):

| Page | ALFA Failed | axe Failed | Total Failed | Page Title |
|---|---:|---:|---:|---|
| [View Page](https://kotaku.com/) | 324 | 42 | **366** | Kotaku - Gaming Reviews, News, Tips and More. |

## 🔧 Priority: Most Common Issues (ALFA)

These ALFA accessibility issues appear most frequently across your pages:

| Rule | Pages Affected | Documentation |
|---|---:|---|
| [SIA-R111](https://alfa.siteimprove.com/rules/sia-r111): Interactive elements have a sufficient target size | **1** of 1 | [View Rule](https://alfa.siteimprove.com/rules/sia-r111) |
| [SIA-R57](https://alfa.siteimprove.com/rules/sia-r57): Landmarks don't repeat the same content | **1** of 1 | [View Rule](https://alfa.siteimprove.com/rules/sia-r57) |
| [SIA-R61](https://alfa.siteimprove.com/rules/sia-r61) | **1** of 1 | [View Rule](https://alfa.siteimprove.com/rules/sia-r61) |
| [SIA-R66](https://alfa.siteimprove.com/rules/sia-r66): Text has enhanced contrast with its background | **1** of 1 | [View Rule](https://alfa.siteimprove.com/rules/sia-r66) |
| [SIA-R69](https://alfa.siteimprove.com/rules/sia-r69): Text has sufficient contrast with its background | **1** of 1 | [View Rule](https://alfa.siteimprove.com/rules/sia-r69) |
| [SIA-R72](https://alfa.siteimprove.com/rules/sia-r72) | **1** of 1 | [View Rule](https://alfa.siteimprove.com/rules/sia-r72) |
| [SIA-R73](https://alfa.siteimprove.com/rules/sia-r73): Text spacing can be adjusted without loss of content | **1** of 1 | [View Rule](https://alfa.siteimprove.com/rules/sia-r73) |
| [SIA-R78](https://alfa.siteimprove.com/rules/sia-r78): Headings of same level have text content between them | **1** of 1 | [View Rule](https://alfa.siteimprove.com/rules/sia-r78) |

> 💡 **Tip**: Click on the rule documentation links to learn how to fix each issue.


## 🔧 Priority: Most Common Issues (axe)

These axe accessibility issues appear most frequently across your pages:

| Rule | Pages Affected | Documentation |
|---|---:|---|
| color-contrast | **1** of 1 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/color-contrast) |
| region | **1** of 1 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/region) |

> 💡 **Tip**: Click on the rule documentation links to learn how to fix each issue. Consider fixing the most common issues first for maximum impact.

> 🤖 **Future Enhancement**: This report will soon include AI-powered fix suggestions for authenticated GitHub users (opt-in only, no auto-run AI).

## 🔍 Cross-Page Patterns: Common HTML Issues

These HTML patterns cause the same accessibility errors across multiple pages. **Fix the pattern once in your codebase to fix it everywhere!**

✅ No recurring HTML patterns found across multiple pages. Each issue appears to be page-specific.

## 📊 Detailed Results

Complete scan results for all tested pages:

| Submitted URL | Final URL | Status | HTTP | Redirected | Time (ms) | ALFA Pass | ALFA Fail | axe Pass | axe Fail | Notes |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---|
| https://kotaku.com/ | https://kotaku.com/ | OK | 200 | no | 214 | 1800 | 324 | 1431 | 42 | Kotaku - Gaming Reviews, News, Tips and More. |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R111 (Interactive elements have a sufficient target size), SIA-R57 (Landmarks don't repeat the same content), SIA-R61, SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background), SIA-R72, SIA-R73 (Text spacing can be adjusted without loss of content), SIA-R78 (Headings of same level have text content between them) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, region |

## Detailed Failure Information (ALFA)

### https://kotaku.com/

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)

**Failure 1:**
- Message: Target has insufficient size
- HTML: `<a href="https://kotaku.com/latest" data-mrf-link="https://kotaku.com/latest" cmp-ltrk="navbar" cmp-ltrk-idx="1" mrfobservableid="d215bbfc-5c56-451b-8b5c-4ad1ee97d78a">Latest</a>`
- XPath: `/a`

**Failure 2:**
- Message: Target has insufficient size
- HTML: `<a href="https://kotaku.com/entertainment" data-mrf-link="https://kotaku.com/entertainment" cmp-ltrk="navbar" cmp-ltrk-idx="2" mrfobservableid="9e6228cc-4db3-4155-add9-99339878fdf1">Entertainment</a>`
- XPath: `/a`

**Failure 3:**
- Message: Target has insufficient size
- HTML: `<a href="https://kotaku.com/reviews" data-mrf-link="https://kotaku.com/reviews" cmp-ltrk="navbar" cmp-ltrk-idx="3" mrfobservableid="aa9e92be-fa82-4332-b5fa-39bd5edc7a39">Reviews</a>`
- XPath: `/a`

**Failure 4:**
- Message: Target has insufficient size
- HTML: `<a href="https://kotaku.com/culture/news" data-mrf-link="https://kotaku.com/culture/news" cmp-ltrk="navbar" cmp-ltrk-idx="4" mrfobservableid="0068e89f-7add-4896-a074-b7805b30f207">News</a>`
- XPath: `/a`

**Failure 5:**
- Message: Target has insufficient size
- HTML: `<a href="https://kotaku.com/game-tips" data-mrf-link="https://kotaku.com/game-tips" cmp-ltrk="navbar" cmp-ltrk-idx="5" mrfobservableid="b9c15b74-2cca-4e73-af1d-0358d369e836">Tips & Guides</a>`
- XPath: `/a`

*... and 25 more failures for this rule*

#### Rule: [SIA-R57: Landmarks don't repeat the same content](https://alfa.siteimprove.com/rules/sia-r57)

**Failure 1:**
- Message: The text is not included in a landmark region

**Failure 2:**
- Message: The text is not included in a landmark region

**Failure 3:**
- Message: The text is not included in a landmark region

**Failure 4:**
- Message: The text is not included in a landmark region

**Failure 5:**
- Message: The text is not included in a landmark region

*... and 217 more failures for this rule*

#### Rule: [SIA-R61](https://alfa.siteimprove.com/rules/sia-r61)

**Failure 1:**
- Message: The document does not start with a level 1 heading

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 6.38:1 which is         below the required contrast of 7:1

**Failure 2:**
- Message: The highest possible contrast of the text is 6.38:1 which is         below the required contrast of 7:1

**Failure 3:**
- Message: The highest possible contrast of the text is 6.38:1 which is         below the required contrast of 7:1

**Failure 4:**
- Message: The highest possible contrast of the text is 6.38:1 which is         below the required contrast of 7:1

**Failure 5:**
- Message: The highest possible contrast of the text is 6.38:1 which is         below the required contrast of 7:1

*... and 22 more failures for this rule*

#### Rule: [SIA-R69: Text has sufficient contrast with its background](https://alfa.siteimprove.com/rules/sia-r69)

**Failure 1:**
- Message: The highest possible contrast of the text is 1.66:1 which is         below the required contrast of 4.5:1

**Failure 2:**
- Message: The highest possible contrast of the text is 1.66:1 which is         below the required contrast of 4.5:1

**Failure 3:**
- Message: The highest possible contrast of the text is 1.66:1 which is         below the required contrast of 4.5:1

**Failure 4:**
- Message: The highest possible contrast of the text is 1.66:1 which is         below the required contrast of 4.5:1

**Failure 5:**
- Message: The highest possible contrast of the text is 1.66:1 which is         below the required contrast of 4.5:1

*... and 5 more failures for this rule*

#### Rule: [SIA-R72](https://alfa.siteimprove.com/rules/sia-r72)

**Failure 1:**
- Message: The text of the paragraph is uppercased
- HTML: `<p class="text-accent dark:text-accent-500 text-xs font-bold uppercase">                     Justin Clark                 ...</p>`
- XPath: `/p[@class="text-accent dark:text-accent-500 text-xs font-bold uppercase"]`

**Failure 2:**
- Message: The text of the paragraph is uppercased
- HTML: `<p class="text-accent dark:text-accent-500 text-xs font-bold uppercase">                     Kenneth Shepard              ...</p>`
- XPath: `/p[@class="text-accent dark:text-accent-500 text-xs font-bold uppercase"]`

**Failure 3:**
- Message: The text of the paragraph is uppercased
- HTML: `<p class="text-accent dark:text-accent-500 text-xs font-bold uppercase">                     Kenneth Shepard              ...</p>`
- XPath: `/p[@class="text-accent dark:text-accent-500 text-xs font-bold uppercase"]`

**Failure 4:**
- Message: The text of the paragraph is uppercased
- HTML: `<p class="text-accent dark:text-accent-500 text-xs font-bold uppercase">                     Ethan Gach                   </p>`
- XPath: `/p[@class="text-accent dark:text-accent-500 text-xs font-bold uppercase"]`

**Failure 5:**
- Message: The text of the paragraph is uppercased
- HTML: `<p class="text-accent dark:text-accent-500 text-xs font-bold uppercase">                     Ethan Gach                   </p>`
- XPath: `/p[@class="text-accent dark:text-accent-500 text-xs font-bold uppercase"]`

*... and 3 more failures for this rule*

#### Rule: [SIA-R73: Text spacing can be adjusted without loss of content](https://alfa.siteimprove.com/rules/sia-r73)

**Failure 1:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="mt-2 text-lg leading-6">               I have so many more questions than ...</p>`
- XPath: `/p[@class="mt-2 text-lg leading-6"]`

**Failure 2:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="mt-3 leading-4">...</p>`
- XPath: `/p[@class="mt-3 leading-4"]`

**Failure 3:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="text-accent dark:text-accent-500 text-xs font-bold uppercase">                     Justin Clark                 ...</p>`
- XPath: `/p[@class="text-accent dark:text-accent-500 text-xs font-bold uppercase"]`

**Failure 4:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="text-accent dark:text-accent-500 text-xs font-bold uppercase">                     Kenneth Shepard              ...</p>`
- XPath: `/p[@class="text-accent dark:text-accent-500 text-xs font-bold uppercase"]`

**Failure 5:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="text-accent dark:text-accent-500 text-xs font-bold uppercase">                     Kenneth Shepard              ...</p>`
- XPath: `/p[@class="text-accent dark:text-accent-500 text-xs font-bold uppercase"]`

*... and 7 more failures for this rule*

#### Rule: [SIA-R78: Headings of same level have text content between them](https://alfa.siteimprove.com/rules/sia-r78)

**Failure 1:**
- Message: There is no content between this heading and the next
- HTML: `<h3 class="mt-2 text-lg leading-6 font-bold lg:line-clamp-3 text-neutral-800 group-hover:text-neutral-500 dark:text-neutral-200 dark:group-hover:text-neutral-300">...</h3>`
- XPath: `/h3[@class="mt-2 text-lg leading-6 font-bold lg:line-clamp-3 text-neutral-800 group-hover:text-neutral-500 dark:text-neutral-200 dark:group-hover:text-neutral-300"]`

**Failure 2:**
- Message: There is no content between this heading and the next
- HTML: `<h3 class="mt-2 text-lg leading-6 font-bold lg:line-clamp-3 text-neutral-800 group-hover:text-neutral-500 dark:text-neutral-200 dark:group-hover:text-neutral-300">     Nioh 3   </h3>`
- XPath: `/h3[@class="mt-2 text-lg leading-6 font-bold lg:line-clamp-3 text-neutral-800 group-hover:text-neutral-500 dark:text-neutral-200 dark:group-hover:text-neutral-300"]`

**Failure 3:**
- Message: There is no content between this heading and the next
- HTML: `<h3 class="mt-2 text-lg leading-6 font-bold lg:line-clamp-3 text-neutral-800 group-hover:text-neutral-500 dark:text-neutral-200 dark:group-hover:text-neutral-300">...</h3>`
- XPath: `/h3[@class="mt-2 text-lg leading-6 font-bold lg:line-clamp-3 text-neutral-800 group-hover:text-neutral-500 dark:text-neutral-200 dark:group-hover:text-neutral-300"]`

**Failure 4:**
- Message: There is no content between this heading and the next
- HTML: `<h3 class="flex-1 line-clamp-3">                     LG 32″ UltraGear Curved Gamin...</h3>`
- XPath: `/h3[@class="flex-1 line-clamp-3"]`

**Failure 5:**
- Message: There is no content between this heading and the next
- HTML: `<h3 class="mt-2 text-lg leading-6 font-bold lg:line-clamp-3 text-neutral-800 group-hover:text-neutral-500 dark:text-neutral-200 dark:group-hover:text-neutral-300">...</h3>`
- XPath: `/h3[@class="mt-2 text-lg leading-6 font-bold lg:line-clamp-3 text-neutral-800 group-hover:text-neutral-500 dark:text-neutral-200 dark:group-hover:text-neutral-300"]`

*... and 9 more failures for this rule*

## Detailed Failure Information (axe)

### https://kotaku.com/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="py-3 text-main dark:text-main-300 bg-white dark:bg-neutral-900 tracking-tight">                       8:35 AM                     </span>`
- XPath: `.mb-2.flex:nth-child(1) > .w-16.mr-1.z-10 > .py-3.dark\:text-main-300.tracking-tight`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="py-3 text-main dark:text-main-300 bg-white dark:bg-neutral-900 tracking-tight">                       8:05 AM                     </span>`
- XPath: `.mb-2.flex:nth-child(2) > .w-16.mr-1.z-10 > .py-3.dark\:text-main-300.tracking-tight`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="py-3 text-main dark:text-main-300 bg-white dark:bg-neutral-900 tracking-tight">                       7:35 AM                     </span>`
- XPath: `.mb-2.flex:nth-child(3) > .w-16.mr-1.z-10 > .py-3.dark\:text-main-300.tracking-tight`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="py-3 text-main dark:text-main-300 bg-white dark:bg-neutral-900 tracking-tight">                       7:05 AM                     </span>`
- XPath: `.mb-2.flex:nth-child(4) > .w-16.mr-1.z-10 > .py-3.dark\:text-main-300.tracking-tight`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="py-3 text-main dark:text-main-300 bg-white dark:bg-neutral-900 tracking-tight">                       Feb 23                     </span>`
- XPath: `.mb-2.flex:nth-child(5) > .w-16.mr-1.z-10 > .py-3.dark\:text-main-300.tracking-tight`

*... and 6 more failures for this rule*

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="md:flex flex-col" data-mrf-recirculation="home-latest">`
- XPath: `.md\:flex`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8" data-mrf-recirculation="home-featured">`
- XPath: `.lg\:gap-8.lg\:grid-cols-4[data-mrf-recirculation="home-featured"]`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="mt-12 lg:mt-16" data-mrf-recirculation="home-game-tips">`
- XPath: `div[data-mrf-recirculation="home-game-tips"]`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="mt-12 lg:mt-16" data-mrf-recirculation="home-top-games">`
- XPath: `div[data-mrf-recirculation="home-top-games"]`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="mt-12 lg:mt-16" data-mrf-recirculation="home-entertainment">`
- XPath: `div[data-mrf-recirculation="home-entertainment"]`

*... and 26 more failures for this rule*

