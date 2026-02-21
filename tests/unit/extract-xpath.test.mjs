import { describe, it } from "node:test";
import { strict as assert } from "node:assert";

// Helper functions to test (copied from run-scan.mjs)
function extractXPath(element) {
  if (!element || element.type !== "element") {
    return null;
  }
  
  // Build XPath with parent hierarchy and element position for unique identification
  const pathSegments = [];
  let current = element;
  
  while (current && current.type === "element") {
    const name = current.name || "unknown";
    let segment = name;
    
    // Add id attribute if present for more specific identification
    const id = getAttributeValue(current, "id");
    if (id) {
      segment += `[@id="${escapeXPathValue(id)}"]`;
    } else {
      // Use class attribute for identification if present
      const className = getAttributeValue(current, "class");
      if (className) {
        segment += `[@class="${escapeXPathValue(className)}"]`;
        
        // Add position within elements with same class for disambiguation
        const position = getElementPositionWithClass(current, className);
        if (position !== null && position > 1) {
          segment = `${name}[@class="${escapeXPathValue(className)}"][${position}]`;
        }
      } else {
        // No id or class, use position among siblings with the same name
        const position = getElementPosition(current);
        if (position !== null && position > 1) {
          segment += `[${position}]`;
        }
      }
    }
    
    pathSegments.unshift(segment);
    current = current.parent;
  }
  
  return pathSegments.length > 0 ? "/" + pathSegments.join("/") : null;
}

function getAttributeValue(element, attrName) {
  if (!element || !Array.isArray(element.attributes)) {
    return null;
  }
  
  for (const attr of element.attributes) {
    if (attr && attr.name === attrName && attr.value !== undefined) {
      return attr.value;
    }
  }
  
  return null;
}

function getElementPosition(element) {
  // Get parent to calculate position among siblings
  const parent = element.parent;
  if (!parent || !Array.isArray(parent.children)) {
    return null;
  }
  
  const elementName = element.name;
  let position = 1;
  
  for (const sibling of parent.children) {
    if (sibling === element) {
      return position;
    }
    if (sibling && sibling.type === "element" && sibling.name === elementName) {
      position++;
    }
  }
  
  return null;
}

function getElementPositionWithClass(element, className) {
  // Get parent to calculate position among siblings with same name and class
  const parent = element.parent;
  if (!parent || !Array.isArray(parent.children)) {
    return null;
  }
  
  const elementName = element.name;
  let position = 1;
  
  for (const sibling of parent.children) {
    if (sibling === element) {
      return position;
    }
    if (sibling && sibling.type === "element" && sibling.name === elementName) {
      const siblingClass = getAttributeValue(sibling, "class");
      if (siblingClass === className) {
        position++;
      }
    }
  }
  
  return null;
}

function escapeXPathValue(value) {
  // Escape double quotes in XPath attribute values
  return String(value).replace(/"/g, '&quot;');
}

// Test cases
it("extractXPath returns null for non-element", () => {
  assert.equal(extractXPath(null), null);
  assert.equal(extractXPath({ type: "text" }), null);
  assert.equal(extractXPath({}), null);
});

it("extractXPath generates simple path for element without parent", () => {
  const element = {
    type: "element",
    name: "div",
    attributes: []
  };
  assert.equal(extractXPath(element), "/div");
});

it("extractXPath includes id attribute when present", () => {
  const element = {
    type: "element",
    name: "div",
    attributes: [
      { name: "id", value: "main-content" }
    ]
  };
  assert.equal(extractXPath(element), '/div[@id="main-content"]');
});

it("extractXPath includes parent hierarchy", () => {
  const element = {
    type: "element",
    name: "button",
    attributes: [
      { name: "id", value: "submit" }
    ],
    parent: {
      type: "element",
      name: "form",
      attributes: [
        { name: "id", value: "login-form" }
      ],
      parent: {
        type: "element",
        name: "div",
        attributes: [
          { name: "class", value: "container" }
        ],
        parent: {
          type: "element",
          name: "body",
          attributes: []
        }
      }
    }
  };
  assert.equal(extractXPath(element), '/body/div[@class="container"]/form[@id="login-form"]/button[@id="submit"]');
});

it("extractXPath includes position among siblings", () => {
  const sibling1 = {
    type: "element",
    name: "div",
    attributes: []
  };
  
  const sibling2 = {
    type: "element",
    name: "div",
    attributes: []
  };
  
  const sibling3 = {
    type: "element",
    name: "div",
    attributes: []
  };
  
  const parent = {
    type: "element",
    name: "section",
    attributes: [{ name: "id", value: "main" }],
    children: [sibling1, sibling2, sibling3]
  };
  
  sibling1.parent = parent;
  sibling2.parent = parent;
  sibling3.parent = parent;
  
  // First element doesn't need position specifier
  assert.equal(extractXPath(sibling1), '/section[@id="main"]/div');
  // Second and third elements need position to distinguish from first
  assert.equal(extractXPath(sibling2), '/section[@id="main"]/div[2]');
  assert.equal(extractXPath(sibling3), '/section[@id="main"]/div[3]');
});

it("extractXPath includes class when no id present", () => {
  const element = {
    type: "element",
    name: "div",
    attributes: [
      { name: "class", value: "header nav-bar" }
    ],
    parent: {
      type: "element",
      name: "body",
      attributes: [],
      children: [
        { type: "element", name: "div", attributes: [] },
        null // will be set below
      ]
    }
  };
  
  element.parent.children[1] = element;
  
  // This is the first (and only) div with class="header nav-bar", so no position needed
  assert.equal(extractXPath(element), '/body/div[@class="header nav-bar"]');
});

it("extractXPath includes position when multiple elements have same class", () => {
  const div1 = {
    type: "element",
    name: "div",
    attributes: [{ name: "class", value: "card" }]
  };
  
  const div2 = {
    type: "element",
    name: "div",
    attributes: [{ name: "class", value: "card" }]
  };
  
  const parent = {
    type: "element",
    name: "section",
    attributes: [{ name: "id", value: "cards" }],
    children: [div1, div2]
  };
  
  div1.parent = parent;
  div2.parent = parent;
  
  // First div with class="card" doesn't need position
  assert.equal(extractXPath(div1), '/section[@id="cards"]/div[@class="card"]');
  // Second div with same class needs position for disambiguation
  assert.equal(extractXPath(div2), '/section[@id="cards"]/div[@class="card"][2]');
});

it("extractXPath escapes double quotes in attribute values", () => {
  const element = {
    type: "element",
    name: "input",
    attributes: [
      { name: "id", value: 'my"special"id' }
    ]
  };
  assert.equal(extractXPath(element), '/input[@id="my&quot;special&quot;id"]');
});

it("extractXPath handles complex nested structure", () => {
  const element = {
    type: "element",
    name: "span",
    attributes: [
      { name: "class", value: "error-message" }
    ],
    parent: {
      type: "element",
      name: "div",
      attributes: [
        { name: "class", value: "field-error" }
      ],
      children: [
        { type: "text", data: "Error:" },
        null // will be set below
      ],
      parent: {
        type: "element",
        name: "form",
        attributes: [
          { name: "id", value: "contact-form" }
        ],
        children: [
          { type: "element", name: "input" },
          null // will be set below
        ]
      }
    }
  };
  
  element.parent.children[1] = element;
  element.parent.parent.children[1] = element.parent;
  
  assert.equal(extractXPath(element), '/form[@id="contact-form"]/div[@class="field-error"]/span[@class="error-message"]');
});

it("extractXPath handles missing attributes array", () => {
  const element = {
    type: "element",
    name: "div"
  };
  assert.equal(extractXPath(element), "/div");
});

it("extractXPath handles element with unknown name", () => {
  const element = {
    type: "element",
    attributes: []
  };
  assert.equal(extractXPath(element), "/unknown");
});
