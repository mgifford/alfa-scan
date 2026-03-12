/**
 * Accessibility Rule Metadata
 * 
 * Maps rules from various engines (Axe, Alfa, IBM) to:
 * - Roles: UX Designer, Visual Designer, Content Author, Front-End Developer
 * - Severity: Critical, Serious, Moderate, Minor
 * - Task Impact: Task-Blocking vs. Non-Blocking
 * - WCAG criteria: Success Criterion number(s) (e.g. ["1.1.1", "2.4.4"])
 * - Conformance level: "A", "AA", "AAA", or "best-practice"
 */

export const ROLES = {
  UX: "UX Designer",
  VISUAL: "Visual Designer",
  CONTENT: "Content Author",
  DEV: "Front-End Developer"
};

export const SEVERITY = {
  CRITICAL: "Critical",
  SERIOUS: "Serious",
  MODERATE: "Moderate",
  MINOR: "Minor"
};

// Default mappings for unknown rules
export const DEFAULT_MAPPING = {
  roles: [ROLES.DEV],
  severity: SEVERITY.MODERATE,
  blocking: false,
  wcagCriteria: [],
  conformanceLevel: null
};

/**
 * Parse an axe-core WCAG tag into a formatted SC number.
 * E.g. "wcag111" → "1.1.1", "wcag412" → "4.1.2", "wcag1411" → "1.4.11"
 * Returns null for conformance-level tags like "wcag2a", "wcag2aa".
 * @param {string} tag
 * @returns {string|null}
 */
export function parseWcagScTag(tag) {
  // SC tags: wcag followed by 3+ digits with no trailing letters
  const scMatch = tag.match(/^wcag(\d{3,})$/i);
  if (!scMatch) return null;
  const digits = scMatch[1];
  if (digits.length === 3) {
    return `${digits[0]}.${digits[1]}.${digits[2]}`;
  }
  if (digits.length === 4) {
    return `${digits[0]}.${digits[1]}.${digits.slice(2)}`;
  }
  // 5+ digits: e.g. wcag14101 → 1.4.101
  return `${digits[0]}.${digits[1]}.${digits.slice(2)}`;
}

/**
 * Determine conformance level from axe-core tag array.
 * Looks for tags like "wcag2a", "wcag2aa", "wcag21aa", "wcag22aa", "wcag21a".
 * @param {string[]} tags
 * @returns {"A"|"AA"|"AAA"|"best-practice"|null}
 */
export function parseConformanceLevelFromTags(tags) {
  if (tags.includes("best-practice")) return "best-practice";
  const levelTags = tags.filter(t => /^wcag\d+a{1,3}$/i.test(t));
  if (levelTags.some(t => /aaa$/i.test(t))) return "AAA";
  if (levelTags.some(t => /aa$/i.test(t))) return "AA";
  if (levelTags.some(t => /a$/i.test(t))) return "A";
  return null;
}

/**
 * Format WCAG criteria for display.
 * Accepts an array of axe wcag tags or pre-formatted SC strings.
 * Returns an object { scs: string[], level: string|null }.
 * @param {string[]} wcagTags - Axe wcag tags (e.g. ["wcag111", "wcag2a", "wcag2aa"])
 * @returns {{ scs: string[], level: string|null }}
 */
export function formatWcagFromTags(wcagTags) {
  const tags = Array.isArray(wcagTags) ? wcagTags : [];
  const scs = [...new Set(
    tags.map(parseWcagScTag).filter(Boolean)
  )].sort();
  const level = parseConformanceLevelFromTags(tags);
  return { scs, level };
}

/**
 * WCAG 2.2 Success Criteria to Understanding page anchor mapping.
 * Used to build links to the WCAG Understanding documents.
 */
export const WCAG_SC_ANCHORS = {
  "1.1.1": "non-text-content",
  "1.2.1": "audio-only-and-video-only-prerecorded",
  "1.2.2": "captions-prerecorded",
  "1.2.3": "audio-description-or-media-alternative-prerecorded",
  "1.2.4": "captions-live",
  "1.2.5": "audio-description-prerecorded",
  "1.3.1": "info-and-relationships",
  "1.3.2": "meaningful-sequence",
  "1.3.3": "sensory-characteristics",
  "1.3.4": "orientation",
  "1.3.5": "identify-input-purpose",
  "1.3.6": "identify-purpose",
  "1.4.1": "use-of-color",
  "1.4.2": "audio-control",
  "1.4.3": "contrast-minimum",
  "1.4.4": "resize-text",
  "1.4.5": "images-of-text",
  "1.4.6": "contrast-enhanced",
  "1.4.10": "reflow",
  "1.4.11": "non-text-contrast",
  "1.4.12": "text-spacing",
  "1.4.13": "content-on-hover-or-focus",
  "2.1.1": "keyboard",
  "2.1.2": "no-keyboard-trap",
  "2.1.3": "keyboard-no-exception",
  "2.1.4": "character-key-shortcuts",
  "2.2.1": "timing-adjustable",
  "2.2.2": "pause-stop-hide",
  "2.4.1": "bypass-blocks",
  "2.4.2": "page-titled",
  "2.4.3": "focus-order",
  "2.4.4": "link-purpose-in-context",
  "2.4.5": "multiple-ways",
  "2.4.6": "headings-and-labels",
  "2.4.7": "focus-visible",
  "2.4.11": "focus-not-obscured-minimum",
  "2.4.12": "focus-not-obscured-enhanced",
  "2.5.1": "pointer-gestures",
  "2.5.2": "pointer-cancellation",
  "2.5.3": "label-in-name",
  "2.5.4": "motion-actuation",
  "2.5.7": "dragging-movements",
  "2.5.8": "target-size-minimum",
  "3.1.1": "language-of-page",
  "3.1.2": "language-of-parts",
  "3.2.1": "on-focus",
  "3.2.2": "on-input",
  "3.3.1": "error-identification",
  "3.3.2": "labels-or-instructions",
  "3.3.3": "error-suggestion",
  "3.3.4": "error-prevention-legal-financial-data",
  "4.1.1": "parsing",
  "4.1.2": "name-role-value",
  "4.1.3": "status-messages"
};

/**
 * Build a link to the WCAG 2.2 Understanding page for a given SC number.
 * @param {string} sc - SC number (e.g. "1.4.3")
 * @returns {string} URL
 */
export function wcagScUrl(sc) {
  const anchor = WCAG_SC_ANCHORS[sc];
  if (anchor) {
    return `https://www.w3.org/WAI/WCAG22/Understanding/${anchor}`;
  }
  // Fall back to WCAG 2.2 spec with query parameter
  return `https://www.w3.org/TR/WCAG22/`;
}

/**
 * Mapping of Rule IDs to Metadata
 * We use prefix-based keys: 'axe:', 'alfa:', 'ibm:'
 */
export const ruleMapping = {
  // --- axe-core rules ---
  "axe:accesskeys": {
    roles: [ROLES.DEV],
    severity: SEVERITY.MINOR,
    blocking: false,
    wcagCriteria: ["4.1.1"],
    conformanceLevel: "A"
  },
  "axe:area-alt": {
    roles: [ROLES.CONTENT, ROLES.UX],
    severity: SEVERITY.CRITICAL,
    blocking: true,
    wcagCriteria: ["1.1.1", "2.4.4"],
    conformanceLevel: "A"
  },
  "axe:aria-allowed-attr": {
    roles: [ROLES.DEV],
    severity: SEVERITY.SERIOUS,
    blocking: false,
    wcagCriteria: ["4.1.2"],
    conformanceLevel: "A"
  },
  "axe:aria-hidden-focus": {
    roles: [ROLES.DEV],
    severity: SEVERITY.SERIOUS,
    blocking: true,
    wcagCriteria: ["4.1.2"],
    conformanceLevel: "A"
  },
  "axe:aria-input-field-name": {
    roles: [ROLES.DEV, ROLES.CONTENT],
    severity: SEVERITY.SERIOUS,
    blocking: true,
    wcagCriteria: ["4.1.2"],
    conformanceLevel: "A"
  },
  "axe:aria-roles": {
    roles: [ROLES.DEV],
    severity: SEVERITY.SERIOUS,
    blocking: false,
    wcagCriteria: ["4.1.2"],
    conformanceLevel: "A"
  },
  "axe:aria-valid-attr-value": {
    roles: [ROLES.DEV],
    severity: SEVERITY.SERIOUS,
    blocking: false,
    wcagCriteria: ["4.1.2"],
    conformanceLevel: "A"
  },
  "axe:aria-valid-attr": {
    roles: [ROLES.DEV],
    severity: SEVERITY.SERIOUS,
    blocking: false,
    wcagCriteria: ["4.1.2"],
    conformanceLevel: "A"
  },
  "axe:button-name": {
    roles: [ROLES.DEV, ROLES.CONTENT],
    severity: SEVERITY.CRITICAL,
    blocking: true,
    wcagCriteria: ["4.1.2"],
    conformanceLevel: "A"
  },
  "axe:color-contrast": {
    roles: [ROLES.VISUAL],
    severity: SEVERITY.SERIOUS,
    blocking: false,
    wcagCriteria: ["1.4.3"],
    conformanceLevel: "AA"
  },
  "axe:document-title": {
    roles: [ROLES.CONTENT, ROLES.UX],
    severity: SEVERITY.SERIOUS,
    blocking: false,
    wcagCriteria: ["2.4.2"],
    conformanceLevel: "A"
  },
  "axe:duplicate-id-active": {
    roles: [ROLES.DEV],
    severity: SEVERITY.SERIOUS,
    blocking: true,
    wcagCriteria: ["4.1.1"],
    conformanceLevel: "A"
  },
  "axe:duplicate-id": {
    roles: [ROLES.DEV],
    severity: SEVERITY.MINOR,
    blocking: false,
    wcagCriteria: ["4.1.1"],
    conformanceLevel: "A"
  },
  "axe:form-field-multiple-labels": {
    roles: [ROLES.DEV, ROLES.UX],
    severity: SEVERITY.MODERATE,
    blocking: false,
    wcagCriteria: ["3.3.2"],
    conformanceLevel: "A"
  },
  "axe:frame-title": {
    roles: [ROLES.DEV, ROLES.CONTENT],
    severity: SEVERITY.SERIOUS,
    blocking: false,
    wcagCriteria: ["2.4.1", "4.1.2"],
    conformanceLevel: "A"
  },
  "axe:heading-order": {
    roles: [ROLES.CONTENT, ROLES.UX],
    severity: SEVERITY.MODERATE,
    blocking: false,
    wcagCriteria: [],
    conformanceLevel: "best-practice"
  },
  "axe:html-has-lang": {
    roles: [ROLES.DEV],
    severity: SEVERITY.SERIOUS,
    blocking: false,
    wcagCriteria: ["3.1.1"],
    conformanceLevel: "A"
  },
  "axe:image-alt": {
    roles: [ROLES.CONTENT],
    severity: SEVERITY.CRITICAL,
    blocking: true,
    wcagCriteria: ["1.1.1"],
    conformanceLevel: "A"
  },
  "axe:input-image-alt": {
    roles: [ROLES.CONTENT, ROLES.DEV],
    severity: SEVERITY.CRITICAL,
    blocking: true,
    wcagCriteria: ["1.1.1"],
    conformanceLevel: "A"
  },
  "axe:label": {
    roles: [ROLES.DEV, ROLES.UX],
    severity: SEVERITY.CRITICAL,
    blocking: true,
    wcagCriteria: ["1.3.1", "4.1.2"],
    conformanceLevel: "A"
  },
  "axe:link-name": {
    roles: [ROLES.CONTENT, ROLES.UX],
    severity: SEVERITY.SERIOUS,
    blocking: true,
    wcagCriteria: ["2.4.4", "4.1.2"],
    conformanceLevel: "A"
  },
  "axe:list": {
    roles: [ROLES.CONTENT, ROLES.DEV],
    severity: SEVERITY.SERIOUS,
    blocking: false,
    wcagCriteria: ["1.3.1"],
    conformanceLevel: "A"
  },
  "axe:listitem": {
    roles: [ROLES.CONTENT, ROLES.DEV],
    severity: SEVERITY.SERIOUS,
    blocking: false,
    wcagCriteria: ["1.3.1"],
    conformanceLevel: "A"
  },
  "axe:meta-viewport": {
    roles: [ROLES.DEV, ROLES.UX],
    severity: SEVERITY.CRITICAL,
    blocking: true,
    wcagCriteria: ["1.4.4"],
    conformanceLevel: "AA"
  },
  "axe:tabindex": {
    roles: [ROLES.DEV],
    severity: SEVERITY.SERIOUS,
    blocking: true,
    wcagCriteria: [],
    conformanceLevel: "best-practice"
  },
  "axe:td-headers-attr": {
    roles: [ROLES.DEV],
    severity: SEVERITY.SERIOUS,
    blocking: false,
    wcagCriteria: ["1.3.1"],
    conformanceLevel: "A"
  },
  "axe:valid-lang": {
    roles: [ROLES.CONTENT, ROLES.DEV],
    severity: SEVERITY.SERIOUS,
    blocking: false,
    wcagCriteria: ["3.1.2"],
    conformanceLevel: "AA"
  },
  "axe:video-caption": {
    roles: [ROLES.CONTENT],
    severity: SEVERITY.CRITICAL,
    blocking: true,
    wcagCriteria: ["1.2.2"],
    conformanceLevel: "A"
  },

  // --- ALFA (SIA) rules ---
  "alfa:sia-r1": { // Unique IDs
    roles: [ROLES.DEV],
    severity: SEVERITY.MINOR,
    blocking: false,
    wcagCriteria: ["4.1.1"],
    conformanceLevel: "A"
  },
  "alfa:sia-r2": { // lang attribute
    roles: [ROLES.DEV],
    severity: SEVERITY.SERIOUS,
    blocking: false,
    wcagCriteria: ["3.1.1"],
    conformanceLevel: "A"
  },
  "alfa:sia-r4": { // Page title
    roles: [ROLES.CONTENT, ROLES.UX],
    severity: SEVERITY.SERIOUS,
    blocking: false,
    wcagCriteria: ["2.4.2"],
    conformanceLevel: "A"
  },
  "alfa:sia-r8": { // Form elements labeled
    roles: [ROLES.DEV, ROLES.UX],
    severity: SEVERITY.CRITICAL,
    blocking: true,
    wcagCriteria: ["1.3.1", "4.1.2"],
    conformanceLevel: "A"
  },
  "alfa:sia-r11": { // Button has accessible name
    roles: [ROLES.DEV, ROLES.CONTENT],
    severity: SEVERITY.CRITICAL,
    blocking: true,
    wcagCriteria: ["4.1.2"],
    conformanceLevel: "A"
  },
  "alfa:sia-r12": { // Link has accessible name
    roles: [ROLES.CONTENT, ROLES.UX],
    severity: SEVERITY.SERIOUS,
    blocking: true,
    wcagCriteria: ["2.4.4", "4.1.2"],
    conformanceLevel: "A"
  },
  "alfa:sia-r14": { // Image has accessible name
    roles: [ROLES.CONTENT],
    severity: SEVERITY.CRITICAL,
    blocking: true,
    wcagCriteria: ["1.1.1"],
    conformanceLevel: "A"
  },
  "alfa:sia-r53": { // Heading hierarchy
    roles: [ROLES.CONTENT, ROLES.UX],
    severity: SEVERITY.MODERATE,
    blocking: false,
    wcagCriteria: [],
    conformanceLevel: "best-practice"
  },
  "alfa:sia-r62": { // Links are distinguishable
    roles: [ROLES.VISUAL, ROLES.UX],
    severity: SEVERITY.SERIOUS,
    blocking: false,
    wcagCriteria: ["1.4.1"],
    conformanceLevel: "A"
  },
  "alfa:sia-r66": { // Contrast (enhanced)
    roles: [ROLES.VISUAL],
    severity: SEVERITY.MODERATE,
    blocking: false,
    wcagCriteria: ["1.4.6"],
    conformanceLevel: "AAA"
  },
  "alfa:sia-r69": { // Contrast (minimum)
    roles: [ROLES.VISUAL],
    severity: SEVERITY.SERIOUS,
    blocking: false,
    wcagCriteria: ["1.4.3"],
    conformanceLevel: "AA"
  },
  "alfa:sia-r111": { // Target size
    roles: [ROLES.UX, ROLES.VISUAL],
    severity: SEVERITY.SERIOUS,
    blocking: true,
    wcagCriteria: ["2.5.8"],
    conformanceLevel: "AA"
  }
};

/**
 * Get metadata for a rule from any engine
 * @param {string} engine - Engine name ('axe', 'alfa', 'equalAccess')
 * @param {string} ruleId - Rule ID
 * @returns {Object} Metadata object
 */
export function getRuleMetadata(engine, ruleId) {
  const normalizedEngine = engine.toLowerCase();
  const key = `${normalizedEngine}:${ruleId.toLowerCase()}`;
  
  // Try exact match
  if (ruleMapping[key]) {
    return ruleMapping[key];
  }
  
  // For ALFA, handle full URLs if passed
  if (normalizedEngine === 'alfa' && ruleId.startsWith('http')) {
    const match = ruleId.match(/sia-r(\d+)$/);
    if (match) {
      const siaKey = `alfa:sia-r${match[1]}`;
      if (ruleMapping[siaKey]) return ruleMapping[siaKey];
    }
  }

  return DEFAULT_MAPPING;
}
