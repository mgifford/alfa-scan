---
description: Fix a specific WCAG accessibility violation found by one of the five open-scans engines.
---

## Context

You are fixing an accessibility violation reported by one of the five engines used in **open-scans**: **axe-core**, **Siteimprove ALFA**, **IBM Equal Access Checker**, **AccessLint**, or **QualWeb**. Use the engine name and rule ID from the scan report to guide your fix.

## Common Violations by Engine

### axe-core (Deque)

| Rule ID | WCAG SC | Fix pattern |
|---|---|---|
| `color-contrast` | 1.4.3 (AA) | Increase foreground/background contrast to ≥ 4.5:1 (normal text) or ≥ 3:1 (large text) |
| `image-alt` | 1.1.1 (A) | Add descriptive `alt` text; use `alt=""` for decorative images |
| `label` | 1.3.1 / 4.1.2 (A) | Associate `<label for="id">` or use `aria-label` / `aria-labelledby` |
| `button-name` | 4.1.2 (A) | Add visible text, `aria-label`, or `aria-labelledby` to `<button>` |
| `link-name` | 2.4.4 (A) | Ensure link text is descriptive; add `aria-label` if icon-only |
| `heading-order` | 1.3.1 (A) | Fix heading hierarchy — do not skip levels (e.g. h1 → h3) |
| `html-has-lang` | 3.1.1 (A) | Add `lang` attribute to `<html>` element |
| `landmark-one-main` | 1.3.1 (A) | Wrap primary content in `<main>` or `role="main"` |
| `keyboard` | 2.1.1 (A) | Ensure all interactive elements are focusable and operable via keyboard |
| `focus-order-semantics` | 2.4.3 (A) | Ensure focus order matches visual/logical reading order |

### Siteimprove ALFA (ACT Rules)

ALFA rules reference ACT rule IDs (e.g. `r69`, `r14`). Common fixes:

| ALFA signal | WCAG SC | Fix pattern |
|---|---|---|
| Missing accessible name on `<button>` | 4.1.2 | Add `aria-label` or inner text |
| `<img>` without `alt` | 1.1.1 | Add `alt` attribute |
| `<input>` without label | 1.3.1 | Add associated `<label>`, `aria-label`, or `aria-labelledby` |
| Insufficient colour contrast | 1.4.3 | Increase contrast to minimum ratios |
| Missing document language | 3.1.1 | Add `<html lang="en">` (or appropriate language tag) |

### IBM Equal Access Checker

IBM rules use IDs like `IBMA_*` or `Rpt_Aria_*`. Common fixes:

| Rule prefix | WCAG SC | Fix pattern |
|---|---|---|
| `IBMA_Color_Contrast` | 1.4.3 | Fix contrast ratio |
| `Rpt_Aria_ValidRole` | 4.1.2 | Use only valid ARIA roles from the ARIA spec |
| `Rpt_Aria_RequiredProperties` | 4.1.2 | Add required ARIA properties (e.g. `aria-checked` on `role="checkbox"`) |
| `WCAG20_Input_ExplicitLabel` | 1.3.1 | Add explicit `<label for>` association |
| `WCAG20_Img_HasAlt` | 1.1.1 | Add `alt` attribute to `<img>` |

### AccessLint

AccessLint findings are enriched with `wcagSc` derived from the corresponding axe rule. Fix patterns mirror the axe-core table above. Check the `ruleUrl` in the finding for the relevant axe documentation.

### QualWeb (University of Lisbon)

QualWeb uses ACT rule names like `QW-ACT-R1`. Fixes follow the same WCAG SC guidance as the tables above.

## ARIA Role and Property Usage

Use ARIA only when native HTML semantics are insufficient. Follow the first rule of ARIA: *do not use ARIA if a native element provides the same semantics*.

```html
<!-- ✅ Native semantics — preferred -->
<button type="button">Open menu</button>

<!-- ❌ Redundant ARIA — avoid -->
<div role="button" tabindex="0">Open menu</div>
```

When you must use ARIA roles, supply all **required properties**:

| Role | Required properties |
|---|---|
| `checkbox` | `aria-checked` |
| `combobox` | `aria-expanded`, `aria-controls` |
| `dialog` | `aria-modal="true"`, `aria-labelledby` |
| `listbox` | (none required; use `aria-selected` on options) |
| `slider` | `aria-valuenow`, `aria-valuemin`, `aria-valuemax` |
| `tab` | `aria-selected`, `aria-controls` |

Never use `role="presentation"` or `role="none"` on focusable elements.

## Focus Management for Dynamic Content

When content changes without a page reload (modals, accordions, route changes), move focus explicitly (WCAG 2.4.3):

```javascript
// After opening a modal dialog
const modal = document.getElementById("dialog");
modal.removeAttribute("hidden");
modal.querySelector("[autofocus], h1, [tabindex='-1']").focus();

// After closing a modal
const trigger = document.getElementById("open-button");
trigger.focus();
```

For single-page or partial updates, send a polite status announcement:

```javascript
const status = document.getElementById("status");
status.textContent = ""; // reset to force re-announcement
requestAnimationFrame(() => {
  status.textContent = `Loaded 12 results for ${query}`;
});
```

## Form Validation and Error Messages

Follow WCAG 1.3.1, 3.3.1, and 3.3.3 for form error patterns:

```html
<div role="alert" id="url-error" aria-live="assertive">
  <!-- Injected error message -->
</div>

<label for="url-input">
  URL to scan
  <span aria-hidden="true" class="required-indicator">*</span>
  <span class="sr-only">(required)</span>
</label>
<input
  type="url"
  id="url-input"
  name="url"
  aria-required="true"
  aria-describedby="url-error url-hint"
  autocomplete="url"
/>
<p id="url-hint" class="hint">Enter a public HTTPS URL, e.g. https://example.com</p>
```

- Use `aria-describedby` to link the input to both the hint and the error message.
- Inject error text into the live region (`role="alert"`) — do not use `alert()` dialogs.
- Mark the error state with `aria-invalid="true"` on the input when validation fails.
- Clear `aria-invalid` and the live region when the error is resolved.

## Colour Contrast Fix Workflow

1. Identify the failing foreground and background colours from the scan report.
2. Use a contrast checker (e.g. WebAIM Contrast Checker) to find compliant alternatives.
3. Update CSS custom properties — never hardcode colours on individual elements:

```css
/* ✅ Update the token */
:root { --text-muted: #595959; }  /* was #767676 — now ≥ 4.5:1 on white */

/* ❌ Hardcode on element */
.nav-link { color: #595959; }
```

4. Verify the fix covers both light and dark mode (`prefers-color-scheme` and `[data-theme]` overrides).

## Security Pattern

When implementing scanner-side fixes (Node.js modules), never use `execSync` with template strings — use `spawnSync` with an argument array (OWASP command injection prevention):

```javascript
// ✅ Safe
import { spawnSync } from "node:child_process";
spawnSync("alfa", ["--target", url, "--output", outputPath], { encoding: "utf8" });

// ❌ Command injection risk
import { execSync } from "node:child_process";
execSync(`alfa --target ${url}`);
```

## Checklist Before Submitting

- [ ] Engine and rule ID identified from scan report
- [ ] Relevant WCAG SC(s) noted
- [ ] Fix applied using native HTML semantics where possible
- [ ] ARIA roles have all required properties
- [ ] Focus managed correctly for any dynamic content changes
- [ ] Form error messages use `role="alert"` and `aria-invalid`
- [ ] Colour contrast verified in both light and dark mode
- [ ] CSS custom properties updated rather than hardcoded values
- [ ] No `execSync` with template strings in Node.js modules
- [ ] `npm test` passes
- [ ] `npm run lint` passes
