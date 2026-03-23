/**
 * IBM Equal Access Checker rule metadata mapping
 *
 * Maps machine-readable rule IDs to human-readable titles and descriptions.
 * Rule names are sourced from the IBM Equal Access Checker rule sets:
 * https://www.ibm.com/able/requirements/checker-rule-sets/
 */

export const equalAccessRuleMetadata = {
  a_text_purpose: {
    name: "Link text must identify the purpose of the link",
    wcagCriteria: ["2.4.4"],
    conformanceLevel: "A"
  },
  aria_accessiblename_exists: {
    name: "Certain UI components must have an accessible name",
    wcagCriteria: ["4.1.2"],
    conformanceLevel: "A"
  },
  aria_attribute_redundant: {
    name: "ARIA role or attribute is redundant with the native role and attributes",
    wcagCriteria: ["4.1.2"],
    conformanceLevel: "A"
  },
  aria_complementary_labelled: {
    name: "Each element with a complementary role must have an accessible name",
    wcagCriteria: ["1.3.6"],
    conformanceLevel: "AAA"
  },
  aria_content_in_landmark: {
    name: "All content of the page should be contained within a landmark region",
    wcagCriteria: ["1.3.6"],
    conformanceLevel: "AAA"
  },
  aria_role_redundant: {
    name: "ARIA role is redundant with the native role of the element",
    wcagCriteria: ["4.1.2"],
    conformanceLevel: "A"
  },
  blockquote_cite_exists: {
    name: "A blockquote should cite the reference source if it can be identified",
    wcagCriteria: ["1.3.1"],
    conformanceLevel: "A"
  },
  element_attribute_deprecated: {
    name: "Deprecated HTML attributes should not be used",
    wcagCriteria: ["4.1.1"],
    conformanceLevel: "A"
  },
  element_id_unique: {
    name: "Element IDs must be unique within a page",
    wcagCriteria: ["4.1.1"],
    conformanceLevel: "A"
  },
  element_tabbable_unobscured: {
    name: "A tabbable element should not be entirely obscured by overlapping content",
    wcagCriteria: ["2.4.11"],
    conformanceLevel: "AA"
  },
  element_tabbable_visible: {
    name: "A tabbable element must be visible on the page",
    wcagCriteria: ["2.4.3"],
    conformanceLevel: "A"
  },
  frame_src_valid: {
    name: "The src value of the frame must not be empty",
    wcagCriteria: ["4.1.2"],
    conformanceLevel: "A"
  },
  heading_content_exists: {
    name: "Heading elements must have descriptive content",
    wcagCriteria: ["2.4.6"],
    conformanceLevel: "AA"
  },
  heading_markup_misuse: {
    name: "Heading markup should be used only for headings, not for formatting",
    wcagCriteria: ["1.3.1"],
    conformanceLevel: "A"
  },
  input_label_visible: {
    name: "An input element must have an associated visible label",
    wcagCriteria: ["1.3.1", "2.4.6"],
    conformanceLevel: "A"
  },
  label_name_visible: {
    name: "The label text for an element must be visible",
    wcagCriteria: ["2.5.3"],
    conformanceLevel: "A"
  },
  meta_refresh_delay: {
    name: "Content should not automatically refresh or redirect without warning",
    wcagCriteria: ["2.2.1"],
    conformanceLevel: "A"
  },
  style_color_misuse: {
    name: "Color must not be used as the only visual means of conveying information",
    wcagCriteria: ["1.4.1"],
    conformanceLevel: "A"
  },
  style_focus_visible: {
    name: "An element's focused state must be visually apparent",
    wcagCriteria: ["2.4.7"],
    conformanceLevel: "AA"
  },
  style_highcontrast_visible: {
    name: "Elements must be visible in Windows High Contrast mode",
    wcagCriteria: ["1.4.11"],
    conformanceLevel: "AA"
  },
  style_viewport_resizable: {
    name: "Zooming and scaling must not be disabled",
    wcagCriteria: ["1.4.4"],
    conformanceLevel: "AA"
  },
  svg_graphics_labelled: {
    name: "SVG graphics must have an accessible name describing their purpose",
    wcagCriteria: ["1.1.1"],
    conformanceLevel: "A"
  },
  text_block_heading: {
    name: "Blocks of text that serve as headings should be marked up as headings",
    wcagCriteria: ["1.3.1"],
    conformanceLevel: "A"
  },
  text_contrast_sufficient: {
    name: "Contrast ratio of text against its background must meet minimum requirements",
    wcagCriteria: ["1.4.3"],
    conformanceLevel: "AA"
  },
  text_sensory_misuse: {
    name: "Instructions must not rely solely on sensory characteristics",
    wcagCriteria: ["1.3.3"],
    conformanceLevel: "A"
  }
};

/**
 * Get human-readable name for an IBM Equal Access Checker rule.
 * @param {string} ruleId - The machine-readable rule ID (e.g., "input_label_visible")
 * @returns {string | null} Human-readable rule name, or null if not found
 */
export function getEqualAccessRuleName(ruleId) {
  return equalAccessRuleMetadata[ruleId]?.name || null;
}
