# Scan Report: Preserve.eco

- Issue: https://github.com/mgifford/open-scans/issues/129
- Submitted by: timfrick
- Scanned at: 2026-03-12T19:32:19.526Z
- Engines used: AXE, EQUALACCESS
- Scan duration: 0.9 minutes
- Total URLs submitted: 7
- Accepted public URLs: 7
- Rejected URLs: 0
- 🌙 Dark mode: None of the scanned URLs support `prefers-color-scheme: dark`
- ALFA outcomes: 0 passed, 0 failed, 0 cantTell, 0 inapplicable
- axe outcomes: 11723 passed, 91 failed, 17 cantTell, 319 inapplicable
- Equal Access outcomes: 41497 passed, 449 failed (437 unique, 12 duplicate), 240 cantTell, 0 inapplicable
- AccessLint outcomes: 0 passed, 0 failed (0 unique, 0 duplicate), 0 cantTell, 0 inapplicable
- QualWeb outcomes: 0 passed, 0 failed, 0 cantTell, 0 inapplicable
- Duplicate findings caught by later scanners: 12

## 🎯 Priority: Pages with Most Errors

Focus your efforts on these pages to make the biggest impact (combined scanner unique failures):

| Page | axe Unique | Equal Access Unique | Total Unique | Page Title |
|---|---:|---:|---:|---|
| [View Page](https://www.preserve.eco/a/faq) | 29 | 99 | **128** | Preserve |
| [View Page](https://www.preserve.eco/collections) | 13 | 96 | **109** | Collections &ndash; Preserve |
| [View Page](https://www.preserve.eco/collections/preserve) | 10 | 91 | **101** | Preserve Compostables |
| [View Page](https://www.preserve.eco/pages/contact-us) | 10 | 46 | **56** | Contact Us &ndash; Preserve |
| [View Page](https://www.preserve.eco/) | 9 | 37 | **46** | Shop Toothbrushes, Razors, and Houseware from 100% Recycled Plastic &ndash; Preserve |
| [View Page](https://www.preserve.eco/pages/overview) | 10 | 34 | **44** | Overview &ndash; Preserve |
| [View Page](https://www.preserve.eco/pages/bcorp-certification) | 10 | 34 | **44** | B Corp Certification &ndash; Preserve |

## 🔧 Priority: Most Common Issues (ALFA)

These ALFA accessibility issues appear most frequently across your pages:

✅ No ALFA failed rules detected!

## 🔧 Priority: Most Common Issues (axe)

These axe accessibility issues appear most frequently across your pages:

| Rule | Pages Affected | Documentation |
|---|---:|---|
| button-name | **7** of 7 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/button-name) |
| heading-order | **7** of 7 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/heading-order) |
| html-has-lang | **7** of 7 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/html-has-lang) |
| image-alt | **7** of 7 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/image-alt) |
| label | **7** of 7 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/label) |
| link-name | **7** of 7 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/link-name) |
| region | **7** of 7 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/region) |
| color-contrast | **6** of 7 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/color-contrast) |
| page-has-heading-one | **1** of 7 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/page-has-heading-one) |

> 💡 **Tip**: Click on the rule documentation links to learn how to fix each issue. Consider fixing the most common issues first for maximum impact.

> 🤖 **Future Enhancement**: This report will soon include AI-powered fix suggestions for authenticated GitHub users (opt-in only, no auto-run AI).

## 🔍 Cross-Page Patterns: Common HTML Issues

These HTML patterns cause the same accessibility errors across multiple pages. **Fix the pattern once in your codebase to fix it everywhere!**

### 🎯 Top Patterns to Fix (Highest Impact)

#### Pattern 1: Affects 7 page(s) - 7 occurrence(s)

**Scanner**: axe
**Rule**: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**Issue**: Buttons must have discernible text

**HTML Pattern**:
```html
<button type="submit" class="btn search-btn"></button>
```

**XPath** (use in browser DevTools):
```
.search-btn
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.search-btn')`
5. The element will be highlighted

**Affected Pages**:
- https://www.preserve.eco/
- https://www.preserve.eco/collections
- https://www.preserve.eco/pages/overview
- https://www.preserve.eco/pages/bcorp-certification
- https://www.preserve.eco/a/faq
- *...and 2 more page(s)*

---

#### Pattern 2: Affects 7 page(s) - 7 occurrence(s)

**Scanner**: axe
**Rule**: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**Issue**: Images must have alternative text

**HTML Pattern**:
```html
<img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645">
```

**XPath** (use in browser DevTools):
```
a[href$="account"] > img
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('a[href$="account"] > img')`
5. The element will be highlighted

**Affected Pages**:
- https://www.preserve.eco/
- https://www.preserve.eco/collections
- https://www.preserve.eco/pages/overview
- https://www.preserve.eco/pages/bcorp-certification
- https://www.preserve.eco/a/faq
- *...and 2 more page(s)*

---

#### Pattern 3: Affects 7 page(s) - 7 occurrence(s)

**Scanner**: axe
**Rule**: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**Issue**: Links must have discernible text

**HTML Pattern**:
```html
<a href="/account"><img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645"></a>
```

**XPath** (use in browser DevTools):
```
a[href$="account"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('a[href$="account"]')`
5. The element will be highlighted

**Affected Pages**:
- https://www.preserve.eco/
- https://www.preserve.eco/collections
- https://www.preserve.eco/pages/overview
- https://www.preserve.eco/pages/bcorp-certification
- https://www.preserve.eco/a/faq
- *...and 2 more page(s)*

---

#### Pattern 4: Affects 7 page(s) - 7 occurrence(s)

**Scanner**: axe
**Rule**: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**Issue**: Links must have discernible text

**HTML Pattern**:
```html
<a href="/pages/contact-us123"></a>
```

**XPath** (use in browser DevTools):
```
a[href$="contact-us123"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('a[href$="contact-us123"]')`
5. The element will be highlighted

**Affected Pages**:
- https://www.preserve.eco/
- https://www.preserve.eco/collections
- https://www.preserve.eco/pages/overview
- https://www.preserve.eco/pages/bcorp-certification
- https://www.preserve.eco/a/faq
- *...and 2 more page(s)*

---

#### Pattern 5: Affects 7 page(s) - 7 occurrence(s)

**Scanner**: axe
**Rule**: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**Issue**: Links must have discernible text

**HTML Pattern**:
```html
<a href="/cart" class="CartToggle header-cart"></a>
```

**XPath** (use in browser DevTools):
```
.nav--desktop > .mobile-wrapper > .header-cart__wrapper > .header-cart.CartToggle[href$="cart"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.nav--desktop > .mobile-wrapper > .header-cart__wrapper > .header-cart.CartToggle[href$="cart"]')`
5. The element will be highlighted

**Affected Pages**:
- https://www.preserve.eco/
- https://www.preserve.eco/collections
- https://www.preserve.eco/pages/overview
- https://www.preserve.eco/pages/bcorp-certification
- https://www.preserve.eco/a/faq
- *...and 2 more page(s)*

---

#### Pattern 6: Affects 7 page(s) - 7 occurrence(s)

**Scanner**: axe
**Rule**: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate
**Issue**: All page content should be contained by landmarks

**HTML Pattern**:
```html
<div class="header-account-link">
          <a href="/account"><img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645"></a>
        </div>
```

**XPath** (use in browser DevTools):
```
.header-account-link
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.header-account-link')`
5. The element will be highlighted

**Affected Pages**:
- https://www.preserve.eco/
- https://www.preserve.eco/collections
- https://www.preserve.eco/pages/overview
- https://www.preserve.eco/pages/bcorp-certification
- https://www.preserve.eco/a/faq
- *...and 2 more page(s)*

---

#### Pattern 7: Affects 6 page(s) - 6 occurrence(s)

**Scanner**: axe
**Rule**: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**Issue**: Elements must meet minimum color contrast ratio thresholds

**HTML Pattern**:
```html
<span id="qab_message" style="color: inherit; font-size: 18px;">FREE SHIPPING ON ALL U.S. ORDERS OVER $50! </span>
```

**XPath** (use in browser DevTools):
```
#qab_message
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('#qab_message')`
5. The element will be highlighted

**Affected Pages**:
- https://www.preserve.eco/collections
- https://www.preserve.eco/pages/overview
- https://www.preserve.eco/pages/bcorp-certification
- https://www.preserve.eco/a/faq
- https://www.preserve.eco/collections/preserve
- *...and 1 more page(s)*

---

#### Pattern 8: Affects 6 page(s) - 6 occurrence(s)

**Scanner**: axe
**Rule**: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate
**Issue**: Heading levels should only increase by one

**HTML Pattern**:
```html
<h5 class="uppercase">Main menu </h5>
```

**XPath** (use in browser DevTools):
```
.large--one-third.grid__item:nth-child(1) > h5
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.large--one-third.grid__item:nth-child(1) > h5')`
5. The element will be highlighted

**Affected Pages**:
- https://www.preserve.eco/collections
- https://www.preserve.eco/pages/overview
- https://www.preserve.eco/pages/bcorp-certification
- https://www.preserve.eco/a/faq
- https://www.preserve.eco/collections/preserve
- *...and 1 more page(s)*

---

#### Pattern 9: Affects 5 page(s) - 5 occurrence(s)

**Scanner**: axe
**Rule**: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**Issue**: Form elements must have labels

**HTML Pattern**:
```html
<input class="search-bar snize-input-style" type="search" name="q" role="combobox" aria-haspopup="listbox" aria-autocomplete="list" aria-expanded="false" autocorrect="off" autocapitalize="off" autocomplete="off">
```

**XPath** (use in browser DevTools):
```
.search-bar
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.search-bar')`
5. The element will be highlighted

**Affected Pages**:
- https://www.preserve.eco/pages/overview
- https://www.preserve.eco/pages/bcorp-certification
- https://www.preserve.eco/a/faq
- https://www.preserve.eco/collections/preserve
- https://www.preserve.eco/pages/contact-us

---

#### Pattern 10: Affects 2 page(s) - 2 occurrence(s)

**Scanner**: axe
**Rule**: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**Issue**: Form elements must have labels

**HTML Pattern**:
```html
<input class="search-bar" type="search" name="q">
```

**XPath** (use in browser DevTools):
```
.search-bar
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.search-bar')`
5. The element will be highlighted

**Affected Pages**:
- https://www.preserve.eco/
- https://www.preserve.eco/collections

---

#### Pattern 11: Affects 2 page(s) - 2 occurrence(s)

**Scanner**: axe
**Rule**: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**Issue**: <html> element must have a lang attribute

**HTML Pattern**:
```html
<html class="supports-js supports-no-touch supports-csstransforms supports-csstransforms3d supports-fontface wf-opensans-n7-active wf-opensans-n4-active wf-oswald-n4-active wf-opensans-i4-active wf-opensans-i7-active wf-active" style="">
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
- https://www.preserve.eco/pages/overview
- https://www.preserve.eco/pages/contact-us

---

> 💡 **Pro Tip**: These patterns likely come from shared components or templates in your codebase. Fix them in the component/template source, and the fix will propagate to all affected pages.

## 📊 Detailed Results

Complete scan results for all tested pages:

| Submitted URL | Final URL | Status | HTTP | Redirected | Time (ms) | axe Unique | ALFA Unique | Equal Access Unique | AccessLint Unique | Duplicates | Notes |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|
| https://www.preserve.eco/ | https://www.preserve.eco/ | OK | 200 | no | 7054 | 9 | 0 | 37 | 0 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: button-name, heading-order, html-has-lang, image-alt, label, link-name, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_role_redundant, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, html_lang_exists, img_alt_valid, input_label_exists, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled, text_block_heading, text_sensory_misuse |
| https://www.preserve.eco/collections | https://www.preserve.eco/collections | OK | 200 | no | 23231 | 13 | 0 | 96 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: button-name, color-contrast, heading-order, html-has-lang, image-alt, label, link-name, page-has-heading-one, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_attribute_deprecated, aria_role_redundant, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, html_lang_exists, html_skipnav_exists, img_alt_valid, input_label_exists, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_contrast_sufficient |
| https://www.preserve.eco/pages/overview | https://www.preserve.eco/pages/overview | OK | 200 | no | 4584 | 10 | 0 | 34 | 0 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: button-name, color-contrast, heading-order, html-has-lang, image-alt, label, link-name, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_role_redundant, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, html_lang_exists, img_alt_valid, input_label_exists, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_contrast_sufficient |
| https://www.preserve.eco/pages/bcorp-certification | https://www.preserve.eco/pages/bcorp-certification | OK | 200 | no | 4091 | 10 | 0 | 34 | 0 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: button-name, color-contrast, heading-order, html-has-lang, image-alt, label, link-name, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_keyboard_handler_exists, aria_role_redundant, aria_role_valid, element_attribute_deprecated, element_tabbable_visible, html_lang_exists, img_alt_valid, input_label_exists, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, text_sensory_misuse |
| https://www.preserve.eco/a/faq | https://www.preserve.eco/a/faq | OK | 200 | no | 5110 | 29 | 0 | 99 | 0 | 3 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: button-name, color-contrast, heading-order, html-has-lang, image-alt, label, link-name, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_keyboard_handler_exists, aria_role_redundant, aria_role_valid, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, html_lang_exists, img_alt_valid, input_label_exists, input_label_visible, label_ref_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, text_sensory_misuse |
| https://www.preserve.eco/collections/preserve | https://www.preserve.eco/collections/preserve | OK | 200 | no | 6080 | 10 | 0 | 91 | 0 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: button-name, color-contrast, heading-order, html-has-lang, image-alt, label, link-name, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_attribute_deprecated, aria_role_redundant, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_visible, html_lang_exists, img_alt_valid, input_label_exists, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_contrast_sufficient |
| https://www.preserve.eco/pages/contact-us | https://www.preserve.eco/pages/contact-us | OK | 200 | no | 4249 | 10 | 0 | 46 | 0 | 3 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: button-name, color-contrast, heading-order, html-has-lang, image-alt, label, link-name, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_role_redundant, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, html_lang_exists, img_alt_valid, input_label_exists, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, text_sensory_misuse |

## Detailed Failure Information (ALFA)

## Detailed Failure Information (axe)

### https://www.preserve.eco/

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button type="submit" class="btn search-btn"></button>`
- XPath: `.search-btn`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h4 class="home__subtitle">SHOP PRESERVE</h4>`
- XPath: `.wrapper > h4`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html class="supports-js supports-no-touch supports-csstransforms supports-csstransforms3d supports-fontface wf-opensans-n4-active wf-opensans-n7-active wf-oswald-n4-active wf-opensans-i4-active wf-opensans-i7-active wf-active" style="">`
- XPath: `html`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645">`
- XPath: `a[href$="account"] > img`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input class="search-bar" type="search" name="q">`
- XPath: `.search-bar`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a href="/account"><img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645"></a>`
- XPath: `a[href$="account"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a href="/pages/contact-us123"></a>`
- XPath: `a[href$="contact-us123"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a href="/cart" class="CartToggle header-cart"></a>`
- XPath: `.nav--desktop > .mobile-wrapper > .header-cart__wrapper > .header-cart.CartToggle[href$="cart"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="header-account-link">           <a href="/account"><img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645"></a>         </div>`
- XPath: `.header-account-link`

### https://www.preserve.eco/collections

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button type="submit" class="btn search-btn"></button>`
- XPath: `.search-btn`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span id="qab_message" style="color: inherit; font-size: 18px;">FREE SHIPPING ON ALL U.S. ORDERS OVER $50! </span>`
- XPath: `#qab_message`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="money">$80.00</span>`
- XPath: `.on-sale.small--one-half.medium--one-half:nth-child(1) > .figcaption.under.text-center > a > .compare-at > .money`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="money">$80.00</span>`
- XPath: `.on-sale.small--one-half.medium--one-half:nth-child(2) > .figcaption.under.text-center > a > .compare-at > .money`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h5 class="uppercase">Main menu </h5>`
- XPath: `.large--one-third.grid__item:nth-child(1) > h5`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html class="supports-js supports-no-touch supports-csstransforms supports-csstransforms3d supports-fontface wf-opensans-i4-active wf-opensans-i7-active wf-oswald-n4-active wf-opensans-n7-active wf-opensans-n4-active wf-active" style="">`
- XPath: `html`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645">`
- XPath: `a[href$="account"] > img`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input class="search-bar" type="search" name="q">`
- XPath: `.search-bar`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a href="/account"><img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645"></a>`
- XPath: `a[href$="account"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a href="/pages/contact-us123"></a>`
- XPath: `a[href$="contact-us123"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a href="/cart" class="CartToggle header-cart"></a>`
- XPath: `.nav--desktop > .mobile-wrapper > .header-cart__wrapper > .header-cart.CartToggle[href$="cart"]`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Page should contain a level-one heading
- HTML: `<html class="supports-js supports-no-touch supports-csstransforms supports-csstransforms3d supports-fontface wf-opensans-i4-active wf-opensans-i7-active wf-oswald-n4-active wf-opensans-n7-active wf-opensans-n4-active wf-active" style="">`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="header-account-link">           <a href="/account"><img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645"></a>         </div>`
- XPath: `.header-account-link`

### https://www.preserve.eco/pages/overview

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button type="submit" class="btn search-btn"></button>`
- XPath: `.search-btn`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span id="qab_message" style="color: inherit; font-size: 18px;">FREE SHIPPING ON ALL U.S. ORDERS OVER $50! </span>`
- XPath: `#qab_message`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h5 class="uppercase">Main menu </h5>`
- XPath: `.large--one-third.grid__item:nth-child(1) > h5`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html class="supports-js supports-no-touch supports-csstransforms supports-csstransforms3d supports-fontface wf-opensans-n7-active wf-opensans-n4-active wf-oswald-n4-active wf-opensans-i4-active wf-opensans-i7-active wf-active" style="">`
- XPath: `html`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645">`
- XPath: `a[href$="account"] > img`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input class="search-bar snize-input-style" type="search" name="q" role="combobox" aria-haspopup="listbox" aria-autocomplete="list" aria-expanded="false" autocorrect="off" autocapitalize="off" autocomplete="off">`
- XPath: `.search-bar`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a href="/account"><img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645"></a>`
- XPath: `a[href$="account"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a href="/pages/contact-us123"></a>`
- XPath: `a[href$="contact-us123"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a href="/cart" class="CartToggle header-cart"></a>`
- XPath: `.nav--desktop > .mobile-wrapper > .header-cart__wrapper > .header-cart.CartToggle[href$="cart"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="header-account-link">           <a href="/account"><img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645"></a>         </div>`
- XPath: `.header-account-link`

### https://www.preserve.eco/pages/bcorp-certification

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button type="submit" class="btn search-btn"></button>`
- XPath: `.search-btn`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span id="qab_message" style="color: inherit; font-size: 18px;">FREE SHIPPING ON ALL U.S. ORDERS OVER $50! </span>`
- XPath: `#qab_message`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h5 class="uppercase">Main menu </h5>`
- XPath: `.large--one-third.grid__item:nth-child(1) > h5`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html class="supports-js supports-no-touch supports-csstransforms supports-csstransforms3d supports-fontface wf-opensans-n7-active wf-opensans-n4-active wf-oswald-n4-active wf-opensans-i7-active wf-opensans-i4-active wf-active" style="">`
- XPath: `html`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645">`
- XPath: `a[href$="account"] > img`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input class="search-bar snize-input-style" type="search" name="q" role="combobox" aria-haspopup="listbox" aria-autocomplete="list" aria-expanded="false" autocorrect="off" autocapitalize="off" autocomplete="off">`
- XPath: `.search-bar`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a href="/account"><img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645"></a>`
- XPath: `a[href$="account"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a href="/pages/contact-us123"></a>`
- XPath: `a[href$="contact-us123"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a href="/cart" class="CartToggle header-cart"></a>`
- XPath: `.nav--desktop > .mobile-wrapper > .header-cart__wrapper > .header-cart.CartToggle[href$="cart"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="header-account-link">           <a href="/account"><img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645"></a>         </div>`
- XPath: `.header-account-link`

### https://www.preserve.eco/a/faq

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button type="submit" class="btn search-btn"></button>`
- XPath: `.search-btn`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span id="qab_message" style="color: inherit; font-size: 18px;">FREE SHIPPING ON ALL U.S. ORDERS OVER $50! </span>`
- XPath: `#qab_message`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<label for="toggle-ProductRelated-0-0-where-are-your-products-made-" class="faqPlusAppTitle" itemprop="name">Where are your products made?</label>`
- XPath: `#where-are-your-products-made- > label`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<label for="toggle-ProductRelated-1-0-what-are-preserve-blades-made-from-" class="faqPlusAppTitle" itemprop="name">What are Preserve blades made from?</label>`
- XPath: `#what-are-preserve-blades-made-from- > label`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<label for="toggle-ProductRelated-2-0-what-are-the-bristles-on-your-toothbrushes-made-from-" class="faqPlusAppTitle" itemprop="name">What are the bristles on your toothbrushes made from?</label>`
- XPath: `#what-are-the-bristles-on-your-toothbrushes-made-from- > label`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<label for="toggle-ProductRelated-3-0-what-s-in-your-lubricating-strip-" class="faqPlusAppTitle" itemprop="name">What’s in your lubricating strip?</label>`
- XPath: `#what-s-in-your-lubricating-strip- > label`

*... and 15 more failures for this rule*

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h5 class="uppercase">Main menu </h5>`
- XPath: `.large--one-third.grid__item:nth-child(1) > h5`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html class="supports-js supports-no-touch supports-csstransforms supports-csstransforms3d supports-fontface wf-oswald-n4-active wf-opensans-n4-active wf-opensans-n7-active wf-opensans-i4-active wf-opensans-i7-active wf-active" style="">`
- XPath: `html`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645">`
- XPath: `a[href$="account"] > img`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input class="search-bar snize-input-style" type="search" name="q" role="combobox" aria-haspopup="listbox" aria-autocomplete="list" aria-expanded="false" autocorrect="off" autocapitalize="off" autocomplete="off">`
- XPath: `.search-bar`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a href="/account"><img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645"></a>`
- XPath: `a[href$="account"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a href="/pages/contact-us123"></a>`
- XPath: `a[href$="contact-us123"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a href="/cart" class="CartToggle header-cart"></a>`
- XPath: `.nav--desktop > .mobile-wrapper > .header-cart__wrapper > .header-cart.CartToggle[href$="cart"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="header-account-link">           <a href="/account"><img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645"></a>         </div>`
- XPath: `.header-account-link`

### https://www.preserve.eco/collections/preserve

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button type="submit" class="btn search-btn"></button>`
- XPath: `.search-btn`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span id="qab_message" style="color: inherit; font-size: 18px;">FREE SHIPPING ON ALL U.S. ORDERS OVER $50! </span>`
- XPath: `#qab_message`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h5 class="uppercase">Main menu </h5>`
- XPath: `.large--one-third.grid__item:nth-child(1) > h5`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html class="supports-js supports-no-touch supports-csstransforms supports-csstransforms3d supports-fontface wf-opensans-n4-active wf-opensans-n7-active wf-opensans-i4-active wf-opensans-i7-active wf-oswald-n4-active wf-active" style="">`
- XPath: `html`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645">`
- XPath: `a[href$="account"] > img`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input class="search-bar snize-input-style" type="search" name="q" role="combobox" aria-haspopup="listbox" aria-autocomplete="list" aria-expanded="false" autocorrect="off" autocapitalize="off" autocomplete="off">`
- XPath: `.search-bar`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a href="/account"><img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645"></a>`
- XPath: `a[href$="account"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a href="/pages/contact-us123"></a>`
- XPath: `a[href$="contact-us123"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a href="/cart" class="CartToggle header-cart"></a>`
- XPath: `.nav--desktop > .mobile-wrapper > .header-cart__wrapper > .header-cart.CartToggle[href$="cart"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="header-account-link">           <a href="/account"><img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645"></a>         </div>`
- XPath: `.header-account-link`

### https://www.preserve.eco/pages/contact-us

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button type="submit" class="btn search-btn"></button>`
- XPath: `.search-btn`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span id="qab_message" style="color: inherit; font-size: 18px;">FREE SHIPPING ON ALL U.S. ORDERS OVER $50! </span>`
- XPath: `#qab_message`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h5 class="uppercase">Main menu </h5>`
- XPath: `.large--one-third.grid__item:nth-child(1) > h5`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html class="supports-js supports-no-touch supports-csstransforms supports-csstransforms3d supports-fontface wf-opensans-n7-active wf-opensans-n4-active wf-oswald-n4-active wf-opensans-i4-active wf-opensans-i7-active wf-active" style="">`
- XPath: `html`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645">`
- XPath: `a[href$="account"] > img`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input class="search-bar snize-input-style" type="search" name="q" role="combobox" aria-haspopup="listbox" aria-autocomplete="list" aria-expanded="false" autocorrect="off" autocapitalize="off" autocomplete="off">`
- XPath: `.search-bar`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a href="/account"><img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645"></a>`
- XPath: `a[href$="account"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a href="/pages/contact-us123"></a>`
- XPath: `a[href$="contact-us123"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a href="/cart" class="CartToggle header-cart"></a>`
- XPath: `.nav--desktop > .mobile-wrapper > .header-cart__wrapper > .header-cart.CartToggle[href$="cart"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="header-account-link">           <a href="/account"><img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645"></a>         </div>`
- XPath: `.header-account-link`

