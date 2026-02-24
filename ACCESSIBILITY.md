# ACCESSIBILITY.md

> **Accessibility commitment and transparency for alfa-scan**

This document defines the accessibility standards, practices, and guidelines for the alfa-scan project.

**Related:** See [AGENTS.md](./AGENTS.md) for AI agent instructions that enforce these standards.

---

## 🎯 Project Purpose

alfa-scan is an issue-driven accessibility scanning tool that uses GitHub Pages and GitHub Actions to perform automated accessibility scans. The tool helps developers identify and fix accessibility issues by:

- Scanning multiple URLs for WCAG compliance
- Generating actionable reports using Siteimprove's Alfa and axe-core
- Publishing results to GitHub Pages for easy comparison

---

## 📊 Conformance Status

### Target Standard
- **WCAG 2.2 Level AA** - This project strives to meet WCAG 2.2 Level AA standards for all user-facing interfaces.

### Current Status
- **Frontend (index.html, reports.html)**: Tested with automated tools, keyboard navigation verified
- **Generated Reports**: Semantic HTML structure, keyboard accessible, proper heading hierarchy
- **Scan Results**: Machine-readable formats (JSON, CSV) and human-readable formats (Markdown, HTML)

---

## 🔧 Automated Testing

### Dual-Scanner Approach

This project uses two accessibility scanning engines:

1. **Siteimprove Alfa** (`@siteimprove/alfa-cli`)
   - Standards-first approach based on ACT rules
   - Comprehensive WCAG 2.2 coverage
   - EARL report format support

2. **axe-core** (`@axe-core/playwright`)
   - Industry-standard accessibility testing
   - Playwright integration for dynamic content
   - Detailed violation reporting

### CI/CD Integration

All scans run in GitHub Actions workflows:
- **scan-request.yml**: Triggered on issue creation/edit
- **scan-issue-queue.yml**: Daily scheduled scans + manual trigger

### Automated Guardrails

✅ **What is automated:**
- WCAG 2.2 rule violations (both ALFA and axe-core)
- Color contrast checking
- Semantic HTML structure validation
- ARIA usage validation
- Keyboard accessibility patterns

❌ **What requires manual testing:**
- Screen reader compatibility
- Focus management in complex interactions
- Meaningful content descriptions
- Logical reading order

---

## 💻 Development Best Practices

### 1. Module Structure & Security

**Use ES Modules**
```javascript
// package.json
{
  "type": "module"
}
```

**Export Functions for Testing**
```javascript
// Use import guard to prevent main() execution during testing
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}
```

**Security: Never use command injection patterns**
```javascript
// ✅ CORRECT: Use spawn with argument arrays
import { spawn } from "node:child_process";
const child = spawn(command, [arg1, arg2, arg3]);

// ❌ WRONG: Never use execSync with template strings
// execSync(`command ${userInput}`); // Command injection risk!
```

### 2. Frontend Accessibility

**Semantic HTML**
- Use proper heading hierarchy (h1 → h2 → h3)
- Use semantic elements (`<nav>`, `<main>`, `<footer>`, `<article>`)
- Provide labels for all form inputs

**Form Validation**
- Real-time URL validation with clear error messages
- Server-side validation as defense-in-depth
- Prevent submission of private/localhost URLs

**Keyboard Navigation**
- All interactive elements are keyboard accessible
- Visible focus indicators
- Logical tab order

### 3. Report Generation

**Accessible Reports**
- Priority sections show pages with most errors first
- Common issues prominently displayed
- Cross-page pattern analysis for recurring problems
- Detailed failure information with replication steps

**Multiple Formats**
- HTML with semantic structure and ARIA landmarks
- Markdown for GitHub rendering
- CSV for data analysis
- JSON for machine processing

### 4. Input Validation

**URL Validation Rules**
- Reject localhost URLs (`localhost`, `127.0.0.1`, `[::1]`)
- Reject private IPv4 ranges (10.x, 172.16-31.x, 192.168.x, 169.254.x)
- Reject private IPv6 ranges (fe80:, fc00:, fd00:, ::1)
- Accept only HTTP/HTTPS protocols
- Enforce 500 URL maximum per scan request

### 5. Testing Requirements

**Unit Tests**
- All scanner modules have unit tests in `tests/unit/*.test.mjs`
- Use Node.js built-in test runner
- Run tests with: `npm test`

**Linting**
- All code must pass syntax checking
- Run linter with: `npm run lint`

**Quality Gates**
```bash
# Run all unit tests (66 tests)
npm test

# Lint all scanner modules
npm run lint

# Test individual modules
npm run run:parse
npm run run:validate
npm run run:scan
```

---

## 📚 Trusted Accessibility Resources

This project follows guidance from established accessibility authorities:

### Standards & Specifications
- [W3C WCAG 2.2](https://www.w3.org/TR/WCAG22/) - Web Content Accessibility Guidelines
- [W3C ARIA](https://www.w3.org/TR/wai-aria/) - Accessible Rich Internet Applications
- [ACT Rules](https://www.w3.org/WAI/standards-guidelines/act/) - Accessibility Conformance Testing

### Tools & Libraries
- [Siteimprove Alfa](https://alfa.siteimprove.com/) - Standards-first accessibility testing
- [axe-core](https://github.com/dequelabs/axe-core) - Industry-standard accessibility engine
- [Playwright](https://playwright.dev/) - Cross-browser testing framework

### Community Resources
For a comprehensive list of vetted accessibility resources, see:
- [TRUSTED_SOURCES.yaml](https://github.com/mgifford/ACCESSIBILITY.md/blob/main/examples/TRUSTED_SOURCES.yaml) - Machine-readable accessibility resource registry

---

## 🤝 Contributing

### Accessibility Requirements for PRs

All pull requests must:
1. ✅ Pass automated accessibility scans (Alfa + axe-core)
2. ✅ Include unit tests for new functionality
3. ✅ Pass linting checks
4. ✅ Follow existing code patterns
5. ✅ Update documentation as needed

### Reporting Accessibility Issues

Found an accessibility barrier? Please:
1. Open a GitHub issue with the `accessibility` label
2. Describe the barrier and how it affects users
3. Include steps to reproduce
4. Suggest a fix if you have one

### AI Agent Compliance

AI coding assistants (GitHub Copilot, Cursor, Claude, etc.) working in this repository must:
- Read and follow [AGENTS.md](./AGENTS.md) instructions
- Generate WCAG 2.2 AA compliant code
- Use secure coding patterns (no command injection)
- Follow existing module structure and conventions
- Include unit tests for new functionality

---

## 🔗 Related Documentation

- **[AGENTS.md](./AGENTS.md)** - AI agent instructions and coding standards
- **[README.md](./README.md)** - Project overview and usage guide
- **[.github/copilot-instructions.md](.github/copilot-instructions.md)** - GitHub Copilot specific instructions
- **[.kittify/AGENTS.md](.kittify/AGENTS.md)** - Spec Kitty project management rules

---

## 📈 Metrics & Accountability

### Current Test Coverage
- ✅ 66/66 unit tests passing
- ✅ All scanner modules lint-clean
- ✅ Dual-scanner validation (ALFA + axe-core)

### Known Limitations
- Manual screen reader testing not yet performed
- Limited assistive technology coverage in testing
- Focus on automated testing over manual evaluation

### Ongoing Improvements
- Expanding test coverage for edge cases
- Adding more comprehensive keyboard navigation tests
- Documenting screen reader testing procedures

---

## 📞 Contact & Support

- **Issues**: [GitHub Issues](https://github.com/mgifford/alfa-scan/issues)
- **Repository**: [mgifford/alfa-scan](https://github.com/mgifford/alfa-scan)
- **Community**: Join our [GitHub Discussions](https://github.com/mgifford/alfa-scan/discussions)

---

**Last Updated**: 2026-02-24

This is a living document. As our accessibility practices evolve, this document will be updated to reflect our current state and commitments.
