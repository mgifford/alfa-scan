import test from "node:test";
import assert from "node:assert/strict";
import { getEqualAccessRuleName, equalAccessRuleMetadata } from "../../scanner/equalaccess-rule-metadata.mjs";

test("getEqualAccessRuleName returns name for known rule", () => {
  const name = getEqualAccessRuleName("input_label_visible");

  assert.strictEqual(name, "An input element must have an associated visible label");
});

test("getEqualAccessRuleName returns null for unknown rule", () => {
  const name = getEqualAccessRuleName("unknown_rule_id_xyz");

  assert.strictEqual(name, null);
});

test("getEqualAccessRuleName returns names for all common rules", () => {
  const commonRules = [
    "a_text_purpose",
    "aria_accessiblename_exists",
    "aria_content_in_landmark",
    "element_attribute_deprecated",
    "element_tabbable_unobscured",
    "element_tabbable_visible",
    "heading_content_exists",
    "style_color_misuse",
    "style_focus_visible",
    "style_highcontrast_visible",
    "svg_graphics_labelled",
    "text_block_heading",
    "text_contrast_sufficient",
    "text_sensory_misuse"
  ];

  for (const ruleId of commonRules) {
    const name = getEqualAccessRuleName(ruleId);
    assert.ok(name !== null, `Should return a name for rule: ${ruleId}`);
    assert.ok(name.length > 0, `Name should not be empty for rule: ${ruleId}`);
  }
});

test("equalAccessRuleMetadata entries have required fields", () => {
  for (const [ruleId, entry] of Object.entries(equalAccessRuleMetadata)) {
    assert.ok(typeof entry.name === "string", `${ruleId} should have a string name`);
    assert.ok(entry.name.length > 0, `${ruleId} name should not be empty`);
    assert.ok(Array.isArray(entry.wcagCriteria), `${ruleId} should have wcagCriteria array`);
    assert.ok(typeof entry.conformanceLevel === "string", `${ruleId} should have a conformanceLevel string`);
  }
});

test("getEqualAccessRuleName returns correct name for input_label_visible", () => {
  assert.strictEqual(
    getEqualAccessRuleName("input_label_visible"),
    "An input element must have an associated visible label"
  );
});

test("getEqualAccessRuleName returns correct name for text_contrast_sufficient", () => {
  assert.strictEqual(
    getEqualAccessRuleName("text_contrast_sufficient"),
    "Contrast ratio of text against its background must meet minimum requirements"
  );
});
