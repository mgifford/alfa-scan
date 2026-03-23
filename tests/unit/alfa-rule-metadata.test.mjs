import test from "node:test";
import assert from "node:assert/strict";
import { formatAlfaRule, extractAlfaRuleId, getAlfaRuleMetadata } from "../../scanner/alfa-rule-metadata.mjs";

test("extractAlfaRuleId extracts rule ID from URL", () => {
  assert.strictEqual(
    extractAlfaRuleId("https://alfa.siteimprove.com/rules/sia-r78"),
    "SIA-R78"
  );
  
  assert.strictEqual(
    extractAlfaRuleId("https://alfa.siteimprove.com/rules/sia-r111"),
    "SIA-R111"
  );
  
  assert.strictEqual(
    extractAlfaRuleId("https://alfa.siteimprove.com/rules/sia-r1"),
    "SIA-R1"
  );
});

test("extractAlfaRuleId returns null for invalid URL", () => {
  assert.strictEqual(
    extractAlfaRuleId("https://example.com/invalid"),
    null
  );
  
  assert.strictEqual(
    extractAlfaRuleId("not-a-url"),
    null
  );
});

test("getAlfaRuleMetadata returns metadata for known rules", () => {
  const metadata = getAlfaRuleMetadata("https://alfa.siteimprove.com/rules/sia-r78");
  
  assert.ok(metadata !== null, "Should return metadata for known rule");
  assert.strictEqual(metadata.name, "Headings have content between them");
  assert.strictEqual(metadata.description, "Headings of same level have text content between them");
});

test("getAlfaRuleMetadata returns null for unknown rules", () => {
  const metadata = getAlfaRuleMetadata("https://alfa.siteimprove.com/rules/sia-r9999");
  
  assert.strictEqual(metadata, null, "Should return null for unknown rule");
});

test("formatAlfaRule formats known rule with full metadata", () => {
  const formatted = formatAlfaRule("https://alfa.siteimprove.com/rules/sia-r78");
  
  assert.strictEqual(formatted.id, "SIA-R78");
  assert.strictEqual(formatted.name, "Headings have content between them");
  assert.strictEqual(formatted.description, "Headings of same level have text content between them");
  assert.strictEqual(formatted.url, "https://alfa.siteimprove.com/rules/sia-r78");
});

test("formatAlfaRule handles unknown rule gracefully", () => {
  const formatted = formatAlfaRule("https://alfa.siteimprove.com/rules/sia-r9999");
  
  assert.strictEqual(formatted.id, "SIA-R9999");
  assert.strictEqual(formatted.name, null);
  assert.strictEqual(formatted.description, null);
  assert.strictEqual(formatted.url, "https://alfa.siteimprove.com/rules/sia-r9999");
});

test("formatAlfaRule handles common rules correctly", () => {
  const rules = [
    {
      url: "https://alfa.siteimprove.com/rules/sia-r111",
      expectedId: "SIA-R111",
      expectedName: "Target size (enhanced)"
    },
    {
      url: "https://alfa.siteimprove.com/rules/sia-r56",
      expectedId: "SIA-R56",
      expectedName: "Landmarks are unique"
    },
    {
      url: "https://alfa.siteimprove.com/rules/sia-r57",
      expectedId: "SIA-R57",
      expectedName: "Landmark has non-repeated content"
    },
    {
      url: "https://alfa.siteimprove.com/rules/sia-r66",
      expectedId: "SIA-R66",
      expectedName: "Contrast (enhanced)"
    }
  ];
  
  for (const rule of rules) {
    const formatted = formatAlfaRule(rule.url);
    assert.strictEqual(formatted.id, rule.expectedId, `ID should match for ${rule.url}`);
    assert.strictEqual(formatted.name, rule.expectedName, `Name should match for ${rule.url}`);
    assert.ok(formatted.description !== null, `Description should exist for ${rule.url}`);
  }
});

test("formatAlfaRule handles best-practice rules that were previously missing", () => {
  const rules = [
    {
      url: "https://alfa.siteimprove.com/rules/sia-r61",
      expectedId: "SIA-R61",
      expectedName: "Document starts with heading",
      expectedDescription: "Documents start with a level 1 heading"
    },
    {
      url: "https://alfa.siteimprove.com/rules/sia-r64",
      expectedId: "SIA-R64",
      expectedName: "Heading has accessible name",
      expectedDescription: "Heading has non-empty accessible name"
    },
    {
      url: "https://alfa.siteimprove.com/rules/sia-r71",
      expectedId: "SIA-R71",
      expectedName: "Text is not justified",
      expectedDescription: "Paragraphs of text are not justified"
    },
    {
      url: "https://alfa.siteimprove.com/rules/sia-r85",
      expectedId: "SIA-R85",
      expectedName: "Text is not all italics",
      expectedDescription: "Paragraphs of text are not all italics"
    }
  ];

  for (const rule of rules) {
    const formatted = formatAlfaRule(rule.url);
    assert.strictEqual(formatted.id, rule.expectedId, `ID should match for ${rule.url}`);
    assert.strictEqual(formatted.name, rule.expectedName, `Name should match for ${rule.url}`);
    assert.strictEqual(formatted.description, rule.expectedDescription, `Description should match for ${rule.url}`);
    assert.strictEqual(formatted.conformanceLevel, "best-practice", `Conformance level should be best-practice for ${rule.url}`);
    assert.deepStrictEqual(formatted.wcagCriteria, [], `WCAG criteria should be empty for ${rule.url}`);
  }
});

test("formatAlfaRule handles SIA-R7, SIA-R42, and SIA-R59 rules from problem report", () => {
  const r7 = formatAlfaRule("https://alfa.siteimprove.com/rules/sia-r7");
  assert.strictEqual(r7.id, "SIA-R7");
  assert.strictEqual(r7.name, "lang attribute has valid primary language subtag");
  assert.ok(r7.description !== null);

  const r42 = formatAlfaRule("https://alfa.siteimprove.com/rules/sia-r42");
  assert.strictEqual(r42.id, "SIA-R42");
  assert.strictEqual(r42.name, "Elements with a role have required parent");
  assert.ok(r42.description !== null);

  const r59 = formatAlfaRule("https://alfa.siteimprove.com/rules/sia-r59");
  assert.strictEqual(r59.id, "SIA-R59");
  assert.strictEqual(r59.name, "Documents have headings");
  assert.ok(r59.description !== null);
});
