import test from "node:test";
import assert from "node:assert/strict";
import {
  parseWcagScTag,
  parseConformanceLevelFromTags,
  formatWcagFromTags,
  getRuleMetadata,
  wcagScUrl,
  getDisabilitiesFromScs,
  getFpsData,
  FPS_CATEGORIES,
  DISABILITY_TO_FPS
} from "../../scanner/rule-metadata.mjs";
import { formatAlfaRule } from "../../scanner/alfa-rule-metadata.mjs";

// --- parseWcagScTag ---

test("parseWcagScTag converts 3-digit wcag tag to SC number", () => {
  assert.strictEqual(parseWcagScTag("wcag111"), "1.1.1");
  assert.strictEqual(parseWcagScTag("wcag143"), "1.4.3");
  assert.strictEqual(parseWcagScTag("wcag412"), "4.1.2");
  assert.strictEqual(parseWcagScTag("wcag244"), "2.4.4");
  assert.strictEqual(parseWcagScTag("wcag211"), "2.1.1");
});

test("parseWcagScTag converts 4-digit wcag tag to SC number with multi-digit suffix", () => {
  assert.strictEqual(parseWcagScTag("wcag1412"), "1.4.12");
  assert.strictEqual(parseWcagScTag("wcag2411"), "2.4.11");
});

test("parseWcagScTag returns null for conformance-level tags", () => {
  assert.strictEqual(parseWcagScTag("wcag2a"), null);
  assert.strictEqual(parseWcagScTag("wcag2aa"), null);
  assert.strictEqual(parseWcagScTag("wcag21aa"), null);
  assert.strictEqual(parseWcagScTag("wcag22aa"), null);
  assert.strictEqual(parseWcagScTag("wcag21a"), null);
});

test("parseWcagScTag returns null for non-wcag tags", () => {
  assert.strictEqual(parseWcagScTag("best-practice"), null);
  assert.strictEqual(parseWcagScTag("cat.text-alternatives"), null);
  assert.strictEqual(parseWcagScTag("ACT"), null);
  assert.strictEqual(parseWcagScTag(""), null);
});

// --- parseConformanceLevelFromTags ---

test("parseConformanceLevelFromTags identifies Level A", () => {
  assert.strictEqual(parseConformanceLevelFromTags(["wcag2a", "wcag111"]), "A");
  assert.strictEqual(parseConformanceLevelFromTags(["wcag21a", "wcag111"]), "A");
});

test("parseConformanceLevelFromTags identifies Level AA (preferred over A)", () => {
  assert.strictEqual(parseConformanceLevelFromTags(["wcag2a", "wcag2aa", "wcag143"]), "AA");
  assert.strictEqual(parseConformanceLevelFromTags(["wcag21aa", "wcag143"]), "AA");
  assert.strictEqual(parseConformanceLevelFromTags(["wcag22aa", "wcag258"]), "AA");
});

test("parseConformanceLevelFromTags identifies best-practice", () => {
  assert.strictEqual(parseConformanceLevelFromTags(["best-practice"]), "best-practice");
  // best-practice takes priority even over level tags
  assert.strictEqual(parseConformanceLevelFromTags(["best-practice", "wcag2a"]), "best-practice");
});

test("parseConformanceLevelFromTags returns null when no level tag found", () => {
  assert.strictEqual(parseConformanceLevelFromTags(["wcag111", "ACT"]), null);
  assert.strictEqual(parseConformanceLevelFromTags([]), null);
});

// --- formatWcagFromTags ---

test("formatWcagFromTags extracts SC and level from axe violation tags", () => {
  const result = formatWcagFromTags(["wcag2a", "wcag2aa", "wcag143"]);
  assert.deepEqual(result.scs, ["1.4.3"]);
  assert.strictEqual(result.level, "AA");
});

test("formatWcagFromTags handles image-alt tags (Level A)", () => {
  const result = formatWcagFromTags(["wcag2a", "wcag21a", "wcag111"]);
  assert.deepEqual(result.scs, ["1.1.1"]);
  assert.strictEqual(result.level, "A");
});

test("formatWcagFromTags handles best-practice tags", () => {
  const result = formatWcagFromTags(["best-practice"]);
  assert.deepEqual(result.scs, []);
  assert.strictEqual(result.level, "best-practice");
});

test("formatWcagFromTags handles multiple SCs", () => {
  const result = formatWcagFromTags(["wcag2a", "wcag131", "wcag412"]);
  assert.deepEqual(result.scs, ["1.3.1", "4.1.2"]);
  assert.strictEqual(result.level, "A");
});

test("formatWcagFromTags deduplicates SCs", () => {
  const result = formatWcagFromTags(["wcag2a", "wcag111", "wcag111"]);
  assert.deepEqual(result.scs, ["1.1.1"]);
});

test("formatWcagFromTags handles empty array", () => {
  const result = formatWcagFromTags([]);
  assert.deepEqual(result.scs, []);
  assert.strictEqual(result.level, null);
});

// --- getRuleMetadata with WCAG fields ---

test("getRuleMetadata includes wcagCriteria and conformanceLevel for axe rules", () => {
  const meta = getRuleMetadata("axe", "image-alt");
  assert.ok(Array.isArray(meta.wcagCriteria), "wcagCriteria should be an array");
  assert.deepEqual(meta.wcagCriteria, ["1.1.1"]);
  assert.strictEqual(meta.conformanceLevel, "A");
});

test("getRuleMetadata includes WCAG AA for color-contrast", () => {
  const meta = getRuleMetadata("axe", "color-contrast");
  assert.deepEqual(meta.wcagCriteria, ["1.4.3"]);
  assert.strictEqual(meta.conformanceLevel, "AA");
});

test("getRuleMetadata marks heading-order as best-practice", () => {
  const meta = getRuleMetadata("axe", "heading-order");
  assert.deepEqual(meta.wcagCriteria, []);
  assert.strictEqual(meta.conformanceLevel, "best-practice");
});

test("getRuleMetadata default mapping has empty wcagCriteria", () => {
  const meta = getRuleMetadata("axe", "unknown-rule-xyz");
  assert.ok(Array.isArray(meta.wcagCriteria));
  assert.deepEqual(meta.wcagCriteria, []);
  assert.strictEqual(meta.conformanceLevel, null);
});

// --- formatAlfaRule with WCAG fields ---

test("formatAlfaRule includes wcagCriteria and conformanceLevel", () => {
  const result = formatAlfaRule("https://alfa.siteimprove.com/rules/sia-r14");
  assert.deepEqual(result.wcagCriteria, ["1.1.1"]);
  assert.strictEqual(result.conformanceLevel, "A");
});

test("formatAlfaRule includes AA level for contrast minimum", () => {
  const result = formatAlfaRule("https://alfa.siteimprove.com/rules/sia-r69");
  assert.deepEqual(result.wcagCriteria, ["1.4.3"]);
  assert.strictEqual(result.conformanceLevel, "AA");
});

test("formatAlfaRule returns empty criteria for unknown rule", () => {
  const result = formatAlfaRule("https://alfa.siteimprove.com/rules/sia-r9999");
  assert.deepEqual(result.wcagCriteria, []);
  assert.strictEqual(result.conformanceLevel, null);
});

test("formatAlfaRule marks heading hierarchy rule as best-practice", () => {
  const result = formatAlfaRule("https://alfa.siteimprove.com/rules/sia-r53");
  assert.deepEqual(result.wcagCriteria, []);
  assert.strictEqual(result.conformanceLevel, "best-practice");
});

// --- wcagScUrl ---

test("wcagScUrl returns Understanding page URL for known SC", () => {
  assert.strictEqual(
    wcagScUrl("1.1.1"),
    "https://www.w3.org/WAI/WCAG22/Understanding/non-text-content"
  );
  assert.strictEqual(
    wcagScUrl("1.4.3"),
    "https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum"
  );
  assert.strictEqual(
    wcagScUrl("4.1.2"),
    "https://www.w3.org/WAI/WCAG22/Understanding/name-role-value"
  );
  assert.strictEqual(
    wcagScUrl("2.5.8"),
    "https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum"
  );
});

test("wcagScUrl falls back to WCAG 2.2 spec for unknown SC", () => {
  const url = wcagScUrl("9.9.9");
  assert.strictEqual(url, "https://www.w3.org/TR/WCAG22/");
});

// --- getDisabilitiesFromScs ---

test("getDisabilitiesFromScs returns visual for image alt SC 1.1.1", () => {
  const result = getDisabilitiesFromScs(["1.1.1"]);
  assert.deepEqual(result, ["visual"]);
});

test("getDisabilitiesFromScs returns hearing for captions SC 1.2.2", () => {
  const result = getDisabilitiesFromScs(["1.2.2"]);
  assert.deepEqual(result, ["hearing"]);
});

test("getDisabilitiesFromScs returns motor for keyboard SC 2.1.1", () => {
  const result = getDisabilitiesFromScs(["2.1.1"]);
  assert.deepEqual(result, ["motor"]);
});

test("getDisabilitiesFromScs returns cognitive for error-identification SC 3.3.1", () => {
  const result = getDisabilitiesFromScs(["3.3.1"]);
  assert.deepEqual(result, ["cognitive"]);
});

test("getDisabilitiesFromScs deduplicates and returns stable order", () => {
  // 1.1.1 → visual, 1.2.2 → hearing, 2.1.1 → motor, 3.3.1 → cognitive
  const result = getDisabilitiesFromScs(["3.3.1", "2.1.1", "1.2.2", "1.1.1"]);
  assert.deepEqual(result, ["visual", "hearing", "motor", "cognitive"]);
});

test("getDisabilitiesFromScs handles SC with multiple disability categories", () => {
  // 1.4.1 (Use of Color) → visual + cognitive
  const result = getDisabilitiesFromScs(["1.4.1"]);
  assert.deepEqual(result, ["visual", "cognitive"]);
});

test("getDisabilitiesFromScs returns empty array for unknown SCs", () => {
  const result = getDisabilitiesFromScs(["9.9.9"]);
  assert.deepEqual(result, []);
});

test("getDisabilitiesFromScs returns empty array for empty input", () => {
  assert.deepEqual(getDisabilitiesFromScs([]), []);
  assert.deepEqual(getDisabilitiesFromScs(null), []);
  assert.deepEqual(getDisabilitiesFromScs(undefined), []);
});

test("getDisabilitiesFromScs combines categories from multiple SCs", () => {
  // 1.4.3 → visual, 2.1.1 → motor
  const result = getDisabilitiesFromScs(["1.4.3", "2.1.1"]);
  assert.deepEqual(result, ["visual", "motor"]);
});

// --- getFpsData ---

test("getFpsData returns visual FPS categories for visual disability", () => {
  const result = getFpsData(["visual"]);
  const keys = result.map(r => r.key);
  assert.ok(keys.includes("without_vision"), "Should include without_vision");
  assert.ok(keys.includes("limited_vision"), "Should include limited_vision");
  assert.strictEqual(result.length, 2);
});

test("getFpsData returns hearing FPS categories for hearing disability", () => {
  const result = getFpsData(["hearing"]);
  const keys = result.map(r => r.key);
  assert.ok(keys.includes("without_hearing"), "Should include without_hearing");
  assert.ok(keys.includes("limited_hearing"), "Should include limited_hearing");
  assert.strictEqual(result.length, 2);
});

test("getFpsData returns motor FPS categories for motor disability", () => {
  const result = getFpsData(["motor"]);
  const keys = result.map(r => r.key);
  assert.ok(keys.includes("limited_manipulation"), "Should include limited_manipulation");
  assert.ok(keys.includes("limited_reach_and_strength"), "Should include limited_reach_and_strength");
  assert.strictEqual(result.length, 2);
});

test("getFpsData returns cognitive FPS category for cognitive disability", () => {
  const result = getFpsData(["cognitive"]);
  assert.strictEqual(result.length, 1);
  assert.strictEqual(result[0].key, "limited_cognitive");
});

test("getFpsData includes population_pct and population_count fields", () => {
  const result = getFpsData(["visual"]);
  for (const entry of result) {
    assert.ok(typeof entry.population_pct === "string" && entry.population_pct.endsWith("%"), "population_pct should be a percentage string");
    assert.ok(typeof entry.population_count === "string" && entry.population_count.includes("Americans"), "population_count should mention Americans");
  }
});

test("getFpsData deduplicates FPS categories across multiple disabilities", () => {
  const result = getFpsData(["visual", "hearing", "motor", "cognitive"]);
  const keys = result.map(r => r.key);
  // Check for no duplicates
  assert.strictEqual(keys.length, new Set(keys).size, "Should have no duplicate FPS keys");
  assert.strictEqual(result.length, 7);
});

test("getFpsData adds without_color_perception for color-related WCAG SCs", () => {
  const result = getFpsData(["visual"], ["1.4.3"]);
  const keys = result.map(r => r.key);
  assert.ok(keys.includes("without_color_perception"), "Should add without_color_perception for contrast SC");
});

test("getFpsData does not add without_color_perception for non-color SCs", () => {
  const result = getFpsData(["visual"], ["1.1.1"]);
  const keys = result.map(r => r.key);
  assert.ok(!keys.includes("without_color_perception"), "Should not add without_color_perception for image alt SC");
});

test("getFpsData returns empty array for empty disabilities", () => {
  assert.deepEqual(getFpsData([]), []);
  assert.deepEqual(getFpsData(null), []);
  assert.deepEqual(getFpsData(undefined), []);
});

test("FPS_CATEGORIES has expected keys with required fields", () => {
  const expectedKeys = [
    "without_vision", "limited_vision", "without_color_perception",
    "without_hearing", "limited_hearing", "without_speech",
    "limited_manipulation", "limited_reach_and_strength", "limited_cognitive"
  ];
  for (const key of expectedKeys) {
    assert.ok(FPS_CATEGORIES[key], `FPS_CATEGORIES should have ${key}`);
    assert.ok(FPS_CATEGORIES[key].label, `${key} should have a label`);
    assert.ok(FPS_CATEGORIES[key].description, `${key} should have a description`);
    assert.ok(FPS_CATEGORIES[key].population_pct, `${key} should have population_pct`);
    assert.ok(FPS_CATEGORIES[key].population_count, `${key} should have population_count`);
  }
});

test("DISABILITY_TO_FPS maps all four disability categories", () => {
  assert.ok(Array.isArray(DISABILITY_TO_FPS.visual) && DISABILITY_TO_FPS.visual.length > 0);
  assert.ok(Array.isArray(DISABILITY_TO_FPS.hearing) && DISABILITY_TO_FPS.hearing.length > 0);
  assert.ok(Array.isArray(DISABILITY_TO_FPS.motor) && DISABILITY_TO_FPS.motor.length > 0);
  assert.ok(Array.isArray(DISABILITY_TO_FPS.cognitive) && DISABILITY_TO_FPS.cognitive.length > 0);
});

test("getRuleMetadata returns description for known axe rules", () => {
  const meta = getRuleMetadata("axe", "image-alt");
  assert.ok(typeof meta.description === "string" && meta.description.length > 0, "image-alt should have a description");
});

test("getRuleMetadata returns description for axe color-contrast", () => {
  const meta = getRuleMetadata("axe", "color-contrast");
  assert.ok(typeof meta.description === "string" && meta.description.length > 0, "color-contrast should have a description");
  assert.ok(meta.description.includes("contrast"), "description should mention contrast");
});

test("getFpsData handles null wcagScs gracefully", () => {
  // Should not throw and should return visual FPS without color perception
  const result = getFpsData(["visual"], null);
  const keys = result.map(r => r.key);
  assert.ok(keys.includes("without_vision"), "Should still include without_vision");
  assert.ok(!keys.includes("without_color_perception"), "Should not include color perception when wcagScs is null");
});
