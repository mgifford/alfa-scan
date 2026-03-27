---
description: Write a new accessibility scanner rule for open-scans, including rule metadata, WCAG mapping, and unit tests.
---

## Context

You are adding a new accessibility rule to the **open-scans** scanner. Rules are defined as metadata entries in `scanner/rule-metadata.mjs`. The scanner supports five engines: **axe-core**, **Siteimprove ALFA**, **IBM Equal Access Checker**, **AccessLint**, and **QualWeb**.

## WCAG Success Criterion Structure

Every rule must map to one or more WCAG 2.2 Success Criteria (SCs). Use the following structure:

| Field | Values |
|---|---|
| `wcagCriteria` | Array of SC strings, e.g. `["1.1.1", "1.4.3"]` |
| `conformanceLevel` | `"A"`, `"AA"`, `"AAA"`, or `"best-practice"` |
| `severity` | `"Critical"`, `"Serious"`, `"Moderate"`, `"Minor"` |
| `roles` | Array of responsible roles: `UX Designer`, `Visual Designer`, `Content Author`, `Front-End Developer` |
| `blocking` | `true` if the issue prevents task completion, `false` otherwise |

### WCAG SC → Severity Mapping

Use these canonical severity assignments, which align with Deque's axe-core impact levels:

| WCAG SC | Description | Severity |
|---|---|---|
| 1.1.1 | Non-text content | Critical |
| 1.3.1 | Info and relationships | Serious |
| 1.4.3 | Contrast (minimum) | Serious |
| 1.4.11 | Non-text contrast | Serious |
| 2.1.1 | Keyboard | Critical |
| 2.4.3 | Focus order | Serious |
| 2.4.6 | Headings and labels | Moderate |
| 2.4.7 | Focus visible | Serious |
| 4.1.2 | Name, role, value | Critical |

## Rule Metadata Pattern

Add new rules to the appropriate engine's section in `scanner/rule-metadata.mjs`. Each entry follows this shape:

```javascript
"rule-id": {
  roles: [ROLES.DEV],          // Who is responsible for fixing this
  severity: SEVERITY.SERIOUS,  // Impact level
  blocking: true,              // Does it block user tasks?
  wcagCriteria: ["1.4.3"],     // WCAG SC numbers
  conformanceLevel: "AA"       // WCAG conformance level
}
```

Use the exported constants `ROLES` and `SEVERITY` — never hard-code string literals.

## Functional Performance Specifications (FPS)

The `getFpsData(disabilities, wcagScs)` function in `rule-metadata.mjs` maps SCs to the nine FPS categories. When adding a rule, consider which disability types are affected:

- **Visual**: colour, contrast, images, screen layout
- **Hearing**: audio, video captions
- **Motor**: keyboard, pointer, time limits
- **Cognitive**: language, reading level, consistent navigation

The `WCAG_SC_TO_DISABILITIES` map in `rule-metadata.mjs` stores these mappings — add new SCs there if they are missing.

## Axe-Core Tag Parsing

The helper `parseWcagScTag(tag)` converts axe `wcagNNN` tags to dot-notation SCs:
- `"wcag111"` → `"1.1.1"`
- `"wcag1411"` → `"1.4.11"`
- `"wcag22aa"` → conformance level `"AA"` (filtered out by `parseConformanceLevelFromTags`)

Use `formatWcagFromTags(wcagTags)` when constructing metadata dynamically from axe results.

## Cross-Engine WCAG Overlap

When a rule maps to the same WCAG SC as rules from other engines, the scanner records a `crossEngineOverlapCount`. Ensure your rule's `wcagCriteria` list is accurate — it drives the overlap deduplication in `computeCrossEngineWcagOverlap()`.

## stdout / stderr Convention

**Critical**: Scanner modules output **JSON only** to stdout. All diagnostic messages, warnings, and progress output must go to **stderr**. Violating this breaks workflow JSON parsing.

```javascript
// ✅ Correct
console.error(`[info] Processing rule ${ruleId}`);
console.log(JSON.stringify({ rules: updatedRules }));

// ❌ Wrong — corrupts workflow JSON parsing
console.log(`Processing rule ${ruleId}`);
```

## Unit Test Pattern

Create or extend a test file in `tests/unit/` using Node.js built-in test runner:

```javascript
import test from "node:test";
import assert from "node:assert/strict";
import { getRuleMetadata, parseWcagScTag } from "../../scanner/rule-metadata.mjs";

test("new rule has correct WCAG criteria", () => {
  const meta = getRuleMetadata("axe", "your-rule-id");
  assert.ok(meta.wcagCriteria.includes("1.4.3"));
  assert.equal(meta.severity, "Serious");
  assert.equal(meta.conformanceLevel, "AA");
});

test("parseWcagScTag converts axe tag to SC string", () => {
  assert.equal(parseWcagScTag("wcag1411"), "1.4.11");
  assert.equal(parseWcagScTag("wcag2aa"), null); // conformance tag, not SC
});
```

Export all functions from the module so tests can import them directly. Use the import guard pattern to prevent `main()` from running during tests:

```javascript
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}
```

## Checklist Before Submitting

- [ ] Rule entry added to the correct engine section in `rule-metadata.mjs`
- [ ] `wcagCriteria` list is accurate and uses dot-notation SC strings
- [ ] `conformanceLevel` matches the SC's WCAG version (A / AA / AAA)
- [ ] `severity` aligns with the WCAG SC → Severity table above
- [ ] `blocking` is set to `true` only if the issue prevents task completion
- [ ] `DISABILITY_TO_FPS` / `WCAG_SC_TO_DISABILITIES` updated if SC is new
- [ ] Unit test added or extended in `tests/unit/`
- [ ] `npm test` passes
- [ ] `npm run lint` passes
