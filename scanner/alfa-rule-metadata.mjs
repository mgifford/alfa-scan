/**
 * ALFA rule metadata mapping
 * 
 * This file provides human-readable descriptions for ALFA accessibility rules.
 * Descriptions are based on WCAG success criteria and best practices.
 * 
 * Note: Descriptions are manually curated as the Alfa rule metadata doesn't
 * always include user-friendly descriptions in the package.
 */

export const alfaRuleMetadata = {
  // Common rules seen in reports
  "https://alfa.siteimprove.com/rules/sia-r111": {
    name: "Target size (enhanced)",
    description: "Interactive elements have a sufficient target size"
  },
  "https://alfa.siteimprove.com/rules/sia-r56": {
    name: "Landmarks are unique",
    description: "Landmarks with the same role are distinguishable"
  },
  "https://alfa.siteimprove.com/rules/sia-r57": {
    name: "Landmark has non-repeated content",
    description: "Landmarks don't repeat the same content"
  },
  "https://alfa.siteimprove.com/rules/sia-r66": {
    name: "Contrast (enhanced)",
    description: "Text has enhanced contrast with its background"
  },
  "https://alfa.siteimprove.com/rules/sia-r78": {
    name: "Headings have content between them",
    description: "Headings of same level have text content between them"
  },
  "https://alfa.siteimprove.com/rules/sia-r18": {
    name: "ARIA states match semantics",
    description: "ARIA states are consistent with element semantics"
  },
  
  // Additional common ALFA rules
  "https://alfa.siteimprove.com/rules/sia-r1": {
    name: "Unique id attributes",
    description: "id attributes are unique within the document"
  },
  "https://alfa.siteimprove.com/rules/sia-r2": {
    name: "lang attribute",
    description: "HTML elements have a valid lang attribute"
  },
  "https://alfa.siteimprove.com/rules/sia-r3": {
    name: "lang attribute valid",
    description: "lang attribute has a valid language code"
  },
  "https://alfa.siteimprove.com/rules/sia-r4": {
    name: "Page title",
    description: "Page has a descriptive title"
  },
  "https://alfa.siteimprove.com/rules/sia-r5": {
    name: "HTML lang attribute",
    description: "html element has a lang attribute"
  },
  "https://alfa.siteimprove.com/rules/sia-r8": {
    name: "Form elements labeled",
    description: "Form elements have accessible labels"
  },
  "https://alfa.siteimprove.com/rules/sia-r11": {
    name: "Button has accessible name",
    description: "Button elements have an accessible name"
  },
  "https://alfa.siteimprove.com/rules/sia-r12": {
    name: "Link has accessible name",
    description: "Links have an accessible name"
  },
  "https://alfa.siteimprove.com/rules/sia-r14": {
    name: "Image has accessible name",
    description: "Images have an accessible name or are decorative"
  },
  "https://alfa.siteimprove.com/rules/sia-r53": {
    name: "Heading hierarchy",
    description: "Headings follow a logical hierarchy"
  },
  "https://alfa.siteimprove.com/rules/sia-r62": {
    name: "Links are distinguishable",
    description: "Links are visually distinguishable from surrounding text"
  },
  "https://alfa.siteimprove.com/rules/sia-r65": {
    name: "Table headers",
    description: "Tables have appropriate headers"
  },
  "https://alfa.siteimprove.com/rules/sia-r68": {
    name: "Accessible name matches visible text",
    description: "Accessible name contains the visible label text"
  },
  "https://alfa.siteimprove.com/rules/sia-r69": {
    name: "Contrast (minimum)",
    description: "Text has sufficient contrast with its background"
  },
  "https://alfa.siteimprove.com/rules/sia-r73": {
    name: "Text spacing",
    description: "Text spacing can be adjusted without loss of content"
  },
  "https://alfa.siteimprove.com/rules/sia-r80": {
    name: "Text alternatives for ASCII art",
    description: "ASCII art has a text alternative"
  },
  "https://alfa.siteimprove.com/rules/sia-r83": {
    name: "Text resize",
    description: "Text can be resized to 200% without loss of content"
  },
  "https://alfa.siteimprove.com/rules/sia-r86": {
    name: "Bypass blocks",
    description: "Page has a mechanism to bypass repeated blocks of content"
  },
  "https://alfa.siteimprove.com/rules/sia-r87": {
    name: "Skip link",
    description: "First focusable element is a skip link"
  },
  "https://alfa.siteimprove.com/rules/sia-r90": {
    name: "Iframe has accessible name",
    description: "iframe elements have an accessible name"
  }
};

/**
 * Get metadata for an ALFA rule URL
 * @param {string} ruleUrl - The full ALFA rule URL (e.g., "https://alfa.siteimprove.com/rules/sia-r78")
 * @returns {{ name: string, description: string } | null} Rule metadata or null if not found
 */
export function getAlfaRuleMetadata(ruleUrl) {
  return alfaRuleMetadata[ruleUrl] || null;
}

/**
 * Extract rule ID from ALFA rule URL
 * @param {string} ruleUrl - The full ALFA rule URL
 * @returns {string | null} The rule ID (e.g., "SIA-R78") or null
 */
export function extractAlfaRuleId(ruleUrl) {
  const match = ruleUrl.match(/sia-r(\d+)$/);
  return match ? `SIA-R${match[1]}` : null;
}

/**
 * Format an ALFA rule for display in reports
 * @param {string} ruleUrl - The full ALFA rule URL
 * @returns {{ id: string, name: string | null, description: string | null, url: string }} Formatted rule info
 */
export function formatAlfaRule(ruleUrl) {
  const id = extractAlfaRuleId(ruleUrl) || "Unknown Rule";
  const metadata = getAlfaRuleMetadata(ruleUrl);
  
  return {
    id,
    name: metadata?.name || null,
    description: metadata?.description || null,
    url: ruleUrl
  };
}
