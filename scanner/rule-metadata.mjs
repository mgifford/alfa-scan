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
 * Mapping from WCAG 2.x Success Criterion numbers to the disability categories they affect.
 * Categories: "visual", "hearing", "motor", "cognitive"
 *
 * Derived from the W3C's WCAG 2 guidance and the How People with Disabilities Use the Web document.
 * Each SC can affect one or more disability categories.
 */
export const WCAG_SC_TO_DISABILITIES = {
  // Principle 1 – Perceivable
  "1.1.1": ["visual"],                         // Non-text Content: blind users need text alts
  "1.2.1": ["visual", "hearing"],              // Audio-only / Video-only: needs alt for both
  "1.2.2": ["hearing"],                        // Captions (Prerecorded): deaf users
  "1.2.3": ["visual"],                         // Audio Description / Media Alt (Prerecorded)
  "1.2.4": ["hearing"],                        // Captions (Live)
  "1.2.5": ["visual"],                         // Audio Description (Prerecorded)
  "1.3.1": ["visual", "cognitive"],            // Info and Relationships: screen readers, cognition
  "1.3.2": ["visual", "cognitive"],            // Meaningful Sequence
  "1.3.3": ["visual", "cognitive"],            // Sensory Characteristics (e.g. "click the red button")
  "1.3.4": ["motor", "cognitive"],             // Orientation: locked rotation affects motor/cognitive
  "1.3.5": ["cognitive", "motor"],             // Identify Input Purpose: autofill, cognitive load
  "1.3.6": ["cognitive"],                      // Identify Purpose
  "1.4.1": ["visual", "cognitive"],            // Use of Color: color blindness, cognitive
  "1.4.2": ["hearing", "cognitive"],           // Audio Control: autoplaying audio
  "1.4.3": ["visual"],                         // Contrast (Minimum): low vision
  "1.4.4": ["visual"],                         // Resize Text: low vision
  "1.4.5": ["visual"],                         // Images of Text: low vision
  "1.4.6": ["visual"],                         // Contrast (Enhanced): low vision
  "1.4.10": ["visual", "motor"],               // Reflow: low vision at 400%, single-column
  "1.4.11": ["visual"],                        // Non-text Contrast: UI components, low vision
  "1.4.12": ["visual", "cognitive"],           // Text Spacing: dyslexia, low vision
  "1.4.13": ["visual", "motor"],               // Content on Hover or Focus: fine motor, low vision

  // Principle 2 – Operable
  "2.1.1": ["motor"],                          // Keyboard: keyboard-only, switch access
  "2.1.2": ["motor"],                          // No Keyboard Trap
  "2.1.3": ["motor"],                          // Keyboard (No Exception)
  "2.1.4": ["motor", "cognitive"],             // Character Key Shortcuts
  "2.2.1": ["cognitive", "motor"],             // Timing Adjustable
  "2.2.2": ["cognitive"],                      // Pause, Stop, Hide
  "2.3.1": ["visual"],                         // Three Flashes: photosensitive seizures
  "2.3.2": ["visual"],                         // Three Flashes (No Exception)
  "2.4.1": ["motor", "visual"],                // Bypass Blocks: skip nav, keyboard users
  "2.4.2": ["cognitive", "visual"],            // Page Titled
  "2.4.3": ["motor", "visual", "cognitive"],   // Focus Order
  "2.4.4": ["visual", "cognitive"],            // Link Purpose (In Context)
  "2.4.5": ["cognitive"],                      // Multiple Ways
  "2.4.6": ["visual", "cognitive"],            // Headings and Labels
  "2.4.7": ["motor", "visual"],                // Focus Visible: keyboard users
  "2.4.11": ["motor", "visual"],               // Focus Not Obscured (Minimum)
  "2.4.12": ["motor", "visual"],               // Focus Not Obscured (Enhanced)
  "2.4.13": ["motor", "visual"],               // Focus Appearance
  "2.5.1": ["motor"],                          // Pointer Gestures
  "2.5.2": ["motor"],                          // Pointer Cancellation
  "2.5.3": ["cognitive", "visual"],            // Label in Name: voice control, low vision
  "2.5.4": ["motor"],                          // Motion Actuation: tremors, restricted movement
  "2.5.5": ["motor"],                          // Target Size (Enhanced)
  "2.5.6": ["motor"],                          // Concurrent Input Mechanisms
  "2.5.7": ["motor"],                          // Dragging Movements
  "2.5.8": ["motor"],                          // Target Size (Minimum)

  // Principle 3 – Understandable
  "3.1.1": ["cognitive"],                      // Language of Page: screen reader pronunciation
  "3.1.2": ["cognitive"],                      // Language of Parts
  "3.2.1": ["cognitive"],                      // On Focus: no unexpected context changes
  "3.2.2": ["cognitive"],                      // On Input
  "3.2.3": ["cognitive"],                      // Consistent Navigation
  "3.2.4": ["cognitive"],                      // Consistent Identification
  "3.2.6": ["cognitive"],                      // Consistent Help
  "3.3.1": ["cognitive"],                      // Error Identification
  "3.3.2": ["cognitive"],                      // Labels or Instructions
  "3.3.3": ["cognitive"],                      // Error Suggestion
  "3.3.4": ["cognitive"],                      // Error Prevention (Legal, Financial, Data)
  "3.3.7": ["cognitive", "motor"],             // Redundant Entry
  "3.3.8": ["cognitive"],                      // Accessible Authentication (Minimum)
  "3.3.9": ["cognitive"],                      // Accessible Authentication (Enhanced)

  // Principle 4 – Robust
  "4.1.1": ["visual", "cognitive"],            // Parsing: affects all AT users
  "4.1.2": ["visual", "cognitive", "motor"],   // Name, Role, Value: all AT users
  "4.1.3": ["visual", "cognitive"],            // Status Messages
};

/**
 * Get the set of disability categories affected by a list of WCAG success criteria.
 * @param {string[]} scs - Array of SC numbers (e.g. ["1.4.3", "2.4.4"])
 * @returns {string[]} Sorted, deduplicated array of disability categories
 */
export function getDisabilitiesFromScs(scs) {
  if (!scs || !Array.isArray(scs) || scs.length === 0) return [];
  const result = new Set();
  for (const sc of scs) {
    const cats = WCAG_SC_TO_DISABILITIES[sc];
    if (cats) cats.forEach(c => result.add(c));
  }
  // Return in a stable display order
  const ORDER = ["visual", "hearing", "motor", "cognitive"];
  return ORDER.filter(c => result.has(c));
}

/**
 * Functional Performance Specifications (FPS) categories from U.S. Section 508 ICT Standards.
 * These connect accessibility failures to real people and population statistics.
 * Source: U.S. Access Board Section 508 Standards and related U.S. population data.
 */
export const FPS_CATEGORIES = {
  without_vision: {
    label: "Without Vision",
    description: "People who are blind or have no functional vision",
    population_pct: "1.0%",
    population_count: "~3,400,000 Americans"
  },
  limited_vision: {
    label: "Limited Vision",
    description: "People with low vision who need magnification or high contrast",
    population_pct: "2.4%",
    population_count: "~8,100,000 Americans"
  },
  without_color_perception: {
    label: "Without Perception of Color",
    description: "People who cannot distinguish certain colors (color blindness)",
    population_pct: "4.3%",
    population_count: "~14,500,000 Americans"
  },
  without_hearing: {
    label: "Without Hearing",
    description: "People who are deaf and cannot hear audio content",
    population_pct: "0.3%",
    population_count: "~1,100,000 Americans"
  },
  limited_hearing: {
    label: "Limited Hearing",
    description: "People with hearing loss who may struggle with audio without accommodations",
    population_pct: "3.5%",
    population_count: "~11,900,000 Americans"
  },
  without_speech: {
    label: "Without Speech",
    description: "People who cannot use speech or voice-based input effectively",
    population_pct: "0.5%",
    population_count: "~1,700,000 Americans"
  },
  limited_manipulation: {
    label: "Limited Manipulation",
    description: "People with limited hand, finger, or fine motor dexterity",
    population_pct: "2.2%",
    population_count: "~7,600,000 Americans"
  },
  limited_reach_and_strength: {
    label: "Limited Reach and Strength",
    description: "People with limited reach, strength, or stamina",
    population_pct: "5.8%",
    population_count: "~19,600,000 Americans"
  },
  limited_cognitive: {
    label: "Limited Language, Cognitive, and Learning Abilities",
    description: "People with cognitive, learning, or language differences",
    population_pct: "4.7%",
    population_count: "~15,900,000 Americans"
  }
};

/**
 * Maps disability categories (from WCAG_SC_TO_DISABILITIES) to their corresponding
 * Functional Performance Specifications (FPS) categories.
 * "visual" maps to both vision categories. Color-specific SC (e.g. 1.4.1) may additionally
 * include without_color_perception (handled in getFpsData via COLOR_SCS).
 */
export const DISABILITY_TO_FPS = {
  visual: ["without_vision", "limited_vision"],
  hearing: ["without_hearing", "limited_hearing"],
  motor: ["limited_manipulation", "limited_reach_and_strength"],
  cognitive: ["limited_cognitive"]
};

/**
 * WCAG success criteria that specifically affect color perception (color blindness).
 * 1.4.1 Use of Color, 1.4.3 Contrast (Minimum), 1.4.6 Contrast (Enhanced),
 * 1.4.11 Non-text Contrast.
 * When one of these SCs is present, without_color_perception is added to FPS results.
 */
const COLOR_SCS = new Set(["1.4.1", "1.4.3", "1.4.6", "1.4.11"]);

/**
 * Get the Functional Performance Specification (FPS) categories applicable
 * to a given list of disability categories and optional WCAG success criteria.
 * @param {string[] | null | undefined} disabilities - Array of disability category keys (e.g. ["visual", "motor"])
 * @param {string[] | null | undefined} [wcagScs] - Optional WCAG SC numbers to detect color-specific rules
 * @returns {{ key: string, label: string, description: string, population_pct: string, population_count: string }[]}
 */
export function getFpsData(disabilities, wcagScs = []) {
  if (!disabilities || !Array.isArray(disabilities) || disabilities.length === 0) return [];
  const seen = new Set();
  const result = [];
  for (const disability of disabilities) {
    const fpsList = DISABILITY_TO_FPS[disability] || [];
    for (const fpsKey of fpsList) {
      if (!seen.has(fpsKey)) {
        seen.add(fpsKey);
        result.push({ key: fpsKey, ...FPS_CATEGORIES[fpsKey] });
      }
    }
  }
  // Add color perception category for color-related WCAG SCs
  if (
    !seen.has("without_color_perception") &&
    Array.isArray(wcagScs) &&
    wcagScs.some(sc => COLOR_SCS.has(sc))
  ) {
    result.push({ key: "without_color_perception", ...FPS_CATEGORIES.without_color_perception });
  }
  return result;
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
    conformanceLevel: "A",
    description: "Ensures every accesskey attribute value is unique. Duplicate accesskeys cause unpredictable keyboard navigation behavior."
  },
  "axe:area-alt": {
    roles: [ROLES.CONTENT, ROLES.UX],
    severity: SEVERITY.CRITICAL,
    blocking: true,
    wcagCriteria: ["1.1.1", "2.4.4"],
    conformanceLevel: "A",
    description: "Ensures <area> elements of image maps have descriptive alternative text so screen reader users understand the link destination."
  },
  "axe:aria-allowed-attr": {
    roles: [ROLES.DEV],
    severity: SEVERITY.SERIOUS,
    blocking: false,
    wcagCriteria: ["4.1.2"],
    conformanceLevel: "A",
    description: "Ensures ARIA attributes are only used on elements where they are permitted by the ARIA specification."
  },
  "axe:aria-hidden-focus": {
    roles: [ROLES.DEV],
    severity: SEVERITY.SERIOUS,
    blocking: true,
    wcagCriteria: ["4.1.2"],
    conformanceLevel: "A",
    description: "Ensures aria-hidden elements do not contain focusable elements. Hidden elements that receive focus confuse screen reader users."
  },
  "axe:aria-input-field-name": {
    roles: [ROLES.DEV, ROLES.CONTENT],
    severity: SEVERITY.SERIOUS,
    blocking: true,
    wcagCriteria: ["4.1.2"],
    conformanceLevel: "A",
    description: "Ensures every ARIA input field has an accessible name so screen reader users know what information to enter."
  },
  "axe:aria-roles": {
    roles: [ROLES.DEV],
    severity: SEVERITY.SERIOUS,
    blocking: false,
    wcagCriteria: ["4.1.2"],
    conformanceLevel: "A",
    description: "Ensures all elements with ARIA roles use valid, non-abstract role values from the ARIA specification."
  },
  "axe:aria-valid-attr-value": {
    roles: [ROLES.DEV],
    severity: SEVERITY.SERIOUS,
    blocking: false,
    wcagCriteria: ["4.1.2"],
    conformanceLevel: "A",
    description: "Ensures all ARIA attributes have valid values as required by the specification. Invalid values break assistive technology behavior."
  },
  "axe:aria-valid-attr": {
    roles: [ROLES.DEV],
    severity: SEVERITY.SERIOUS,
    blocking: false,
    wcagCriteria: ["4.1.2"],
    conformanceLevel: "A",
    description: "Ensures attributes beginning with 'aria-' are valid ARIA attributes. Typos or custom names are ignored by assistive technologies."
  },
  "axe:button-name": {
    roles: [ROLES.DEV, ROLES.CONTENT],
    severity: SEVERITY.CRITICAL,
    blocking: true,
    wcagCriteria: ["4.1.2"],
    conformanceLevel: "A",
    description: "Ensures buttons have discernible text so screen reader users know what action the button performs."
  },
  "axe:color-contrast": {
    roles: [ROLES.VISUAL],
    severity: SEVERITY.SERIOUS,
    blocking: false,
    wcagCriteria: ["1.4.3"],
    conformanceLevel: "AA",
    description: "Ensures text and interactive elements have sufficient contrast ratio (4.5:1 for normal text, 3:1 for large text) against their background."
  },
  "axe:document-title": {
    roles: [ROLES.CONTENT, ROLES.UX],
    severity: SEVERITY.SERIOUS,
    blocking: false,
    wcagCriteria: ["2.4.2"],
    conformanceLevel: "A",
    description: "Ensures every page has a descriptive <title> element. Screen reader users hear the page title first when navigating between pages."
  },
  "axe:duplicate-id-active": {
    roles: [ROLES.DEV],
    severity: SEVERITY.SERIOUS,
    blocking: true,
    wcagCriteria: ["4.1.1"],
    conformanceLevel: "A",
    description: "Ensures IDs on active, focusable elements are unique. Duplicate IDs on interactive elements cause broken keyboard navigation."
  },
  "axe:duplicate-id": {
    roles: [ROLES.DEV],
    severity: SEVERITY.MINOR,
    blocking: false,
    wcagCriteria: ["4.1.1"],
    conformanceLevel: "A",
    description: "Ensures every ID attribute is unique in the document. Duplicate IDs can cause assistive technologies to read incorrect or incomplete content."
  },
  "axe:form-field-multiple-labels": {
    roles: [ROLES.DEV, ROLES.UX],
    severity: SEVERITY.MODERATE,
    blocking: false,
    wcagCriteria: ["3.3.2"],
    conformanceLevel: "A",
    description: "Ensures form fields do not have multiple <label> elements. Multiple labels can cause screen readers to announce confusing or duplicated instructions."
  },
  "axe:frame-title": {
    roles: [ROLES.DEV, ROLES.CONTENT],
    severity: SEVERITY.SERIOUS,
    blocking: false,
    wcagCriteria: ["2.4.1", "4.1.2"],
    conformanceLevel: "A",
    description: "Ensures <iframe> and <frame> elements have a descriptive title attribute so screen reader users understand what the embedded content contains."
  },
  "axe:heading-order": {
    roles: [ROLES.CONTENT, ROLES.UX],
    severity: SEVERITY.MODERATE,
    blocking: false,
    wcagCriteria: [],
    conformanceLevel: "best-practice",
    description: "Ensures heading levels are not skipped (e.g. h1→h3). Inconsistent heading hierarchy makes page structure difficult to navigate for screen reader users."
  },
  "axe:html-has-lang": {
    roles: [ROLES.DEV],
    severity: SEVERITY.SERIOUS,
    blocking: false,
    wcagCriteria: ["3.1.1"],
    conformanceLevel: "A",
    description: "Ensures the <html> element has a lang attribute. Screen readers use the language attribute to select the correct pronunciation engine."
  },
  "axe:image-alt": {
    roles: [ROLES.CONTENT],
    severity: SEVERITY.CRITICAL,
    blocking: true,
    wcagCriteria: ["1.1.1"],
    conformanceLevel: "A",
    description: "Ensures every <img> element has alternative text. Without alt text, blind users receive no information about the image's meaning or purpose."
  },
  "axe:input-image-alt": {
    roles: [ROLES.CONTENT, ROLES.DEV],
    severity: SEVERITY.CRITICAL,
    blocking: true,
    wcagCriteria: ["1.1.1"],
    conformanceLevel: "A",
    description: "Ensures <input type=\"image\"> elements have alternative text describing the button's action, since the image is the only visible label."
  },
  "axe:label": {
    roles: [ROLES.DEV, ROLES.UX],
    severity: SEVERITY.CRITICAL,
    blocking: true,
    wcagCriteria: ["1.3.1", "4.1.2"],
    conformanceLevel: "A",
    description: "Ensures every form input has an associated label. Without labels, screen reader users cannot understand what information a form field requires."
  },
  "axe:landmark-complementary-is-top-level": {
    roles: [ROLES.DEV, ROLES.UX],
    severity: SEVERITY.MODERATE,
    blocking: false,
    wcagCriteria: [],
    conformanceLevel: "best-practice",
    description: "Ensures the complementary landmark (<aside>) is a top-level landmark. Nested aside elements cannot be found by screen reader landmark navigation."
  },
  "axe:landmark-main-is-top-level": {
    roles: [ROLES.DEV, ROLES.UX],
    severity: SEVERITY.MODERATE,
    blocking: false,
    wcagCriteria: [],
    conformanceLevel: "best-practice",
    description: "Ensures the main landmark (<main>) is not nested inside another landmark. Screen reader users skip navigation by jumping directly to the main landmark — nesting prevents this."
  },
  "axe:landmark-no-duplicate-banner": {
    roles: [ROLES.DEV, ROLES.UX],
    severity: SEVERITY.MODERATE,
    blocking: false,
    wcagCriteria: [],
    conformanceLevel: "best-practice",
    description: "Ensures the page has only one banner landmark (<header> at top level). Multiple banners confuse screen reader users navigating by landmarks."
  },
  "axe:landmark-no-duplicate-contentinfo": {
    roles: [ROLES.DEV, ROLES.UX],
    severity: SEVERITY.MODERATE,
    blocking: false,
    wcagCriteria: [],
    conformanceLevel: "best-practice",
    description: "Ensures the page has only one contentinfo landmark (<footer> at top level). Duplicate contentinfo landmarks make landmark navigation unpredictable."
  },
  "axe:landmark-no-duplicate-main": {
    roles: [ROLES.DEV, ROLES.UX],
    severity: SEVERITY.MODERATE,
    blocking: false,
    wcagCriteria: [],
    conformanceLevel: "best-practice",
    description: "Ensures the page has only one main landmark. Multiple main landmarks make it impossible for screen reader users to reliably skip to primary content."
  },
  "axe:landmark-one-main": {
    roles: [ROLES.DEV, ROLES.UX],
    severity: SEVERITY.MODERATE,
    blocking: false,
    wcagCriteria: [],
    conformanceLevel: "best-practice",
    description: "Ensures the page has exactly one main landmark. Screen reader users rely on the main landmark to skip navigation and jump directly to page content."
  },
  "axe:link-name": {
    roles: [ROLES.CONTENT, ROLES.UX],
    severity: SEVERITY.SERIOUS,
    blocking: true,
    wcagCriteria: ["2.4.4", "4.1.2"],
    conformanceLevel: "A",
    description: "Ensures links have discernible text. Screen reader users often navigate pages by listing all links — links without text or with only 'click here' provide no context."
  },
  "axe:list": {
    roles: [ROLES.CONTENT, ROLES.DEV],
    severity: SEVERITY.SERIOUS,
    blocking: false,
    wcagCriteria: ["1.3.1"],
    conformanceLevel: "A",
    description: "Ensures <ul> and <ol> contain only <li> elements. Invalid list structure prevents screen readers from announcing list item counts and navigation shortcuts."
  },
  "axe:listitem": {
    roles: [ROLES.CONTENT, ROLES.DEV],
    severity: SEVERITY.SERIOUS,
    blocking: false,
    wcagCriteria: ["1.3.1"],
    conformanceLevel: "A",
    description: "Ensures <li> elements are contained within a <ul> or <ol>. List items outside lists lose their structural meaning for screen reader users."
  },
  "axe:meta-viewport": {
    roles: [ROLES.DEV, ROLES.UX],
    severity: SEVERITY.CRITICAL,
    blocking: true,
    wcagCriteria: ["1.4.4"],
    conformanceLevel: "AA",
    description: "Ensures viewport meta does not disable text scaling. Disabling user-scaling prevents people with low vision from enlarging text to a readable size."
  },
  "axe:region": {
    roles: [ROLES.DEV, ROLES.UX],
    severity: SEVERITY.MODERATE,
    blocking: false,
    wcagCriteria: [],
    conformanceLevel: "best-practice",
    description: "Ensures all page content is contained within landmark regions. Content outside landmarks cannot be found by screen reader users navigating by landmarks."
  },
  "axe:tabindex": {
    roles: [ROLES.DEV],
    severity: SEVERITY.SERIOUS,
    blocking: true,
    wcagCriteria: [],
    conformanceLevel: "best-practice",
    description: "Ensures tabindex attribute values greater than 0 are not used. Positive tabindex values create an unnatural tab order that disorients keyboard users."
  },
  "axe:td-headers-attr": {
    roles: [ROLES.DEV],
    severity: SEVERITY.SERIOUS,
    blocking: false,
    wcagCriteria: ["1.3.1"],
    conformanceLevel: "A",
    description: "Ensures table cells using headers attribute only reference cells in the same table. Invalid header references cause screen readers to read incorrect column/row context."
  },
  "axe:valid-lang": {
    roles: [ROLES.CONTENT, ROLES.DEV],
    severity: SEVERITY.SERIOUS,
    blocking: false,
    wcagCriteria: ["3.1.2"],
    conformanceLevel: "AA",
    description: "Ensures lang attributes have valid BCP 47 language tag values. Invalid language tags prevent screen readers from switching to the correct pronunciation."
  },
  "axe:video-caption": {
    roles: [ROLES.CONTENT],
    severity: SEVERITY.CRITICAL,
    blocking: true,
    wcagCriteria: ["1.2.2"],
    conformanceLevel: "A",
    description: "Ensures <video> elements have captions. Without captions, deaf and hard-of-hearing users cannot access audio content in videos."
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
  "alfa:sia-r7": { // lang attribute has valid primary language subtag
    roles: [ROLES.DEV, ROLES.CONTENT],
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
  "alfa:sia-r42": { // Elements with a role have required parent
    roles: [ROLES.DEV],
    severity: SEVERITY.SERIOUS,
    blocking: false,
    wcagCriteria: ["1.3.1"],
    conformanceLevel: "A"
  },
  "alfa:sia-r53": { // Heading hierarchy
    roles: [ROLES.CONTENT, ROLES.UX],
    severity: SEVERITY.MODERATE,
    blocking: false,
    wcagCriteria: [],
    conformanceLevel: "best-practice"
  },
  "alfa:sia-r59": { // Documents have headings
    roles: [ROLES.CONTENT, ROLES.UX],
    severity: SEVERITY.MODERATE,
    blocking: false,
    wcagCriteria: ["2.4.6"],
    conformanceLevel: "AA"
  },
  "alfa:sia-r61": { // Documents start with heading
    roles: [ROLES.CONTENT, ROLES.UX],
    severity: SEVERITY.MODERATE,
    blocking: false,
    wcagCriteria: [],
    conformanceLevel: "best-practice"
  },
  "alfa:sia-r64": { // Heading has accessible name
    roles: [ROLES.CONTENT, ROLES.DEV],
    severity: SEVERITY.MODERATE,
    blocking: false,
    wcagCriteria: [],
    conformanceLevel: "best-practice"
  },
  "alfa:sia-r71": { // Text is not justified
    roles: [ROLES.VISUAL, ROLES.CONTENT],
    severity: SEVERITY.MODERATE,
    blocking: false,
    wcagCriteria: [],
    conformanceLevel: "best-practice"
  },
  "alfa:sia-r85": { // Text is not all italics
    roles: [ROLES.VISUAL, ROLES.CONTENT],
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
