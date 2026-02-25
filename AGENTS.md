# AI Agent Instructions for alfa-scan

This repository welcomes multiple AI coding agents and tools. This document provides universal guidance for all AI assistants working in this codebase.

## Quick Start for AI Agents

- **Project Type**: Node.js accessibility scanning tool using GitHub Pages and Actions
- **Primary Language**: JavaScript (ES Modules)
- **Key Commands**: `npm test`, `npm run lint`, `npm run run:scan`
- **Architecture**: Frontend (GitHub Pages) + Backend (GitHub Actions) + Scanner (Alfa CLI)

## Project-Specific Guidelines

### Code Conventions

1. **Module Structure**: Use ES modules with `type: "module"` in package.json
2. **Testing**: Export functions from modules; use import guard to prevent main() execution:
   ```javascript
   if (import.meta.url === `file://${process.argv[1]}`) {
     main();
   }
   ```
3. **Security**: Use `spawnSync` with argument arrays, never `execSync` with template strings
4. **Node Version**: >= 20 (see package.json engines)
5. **Stdout/Stderr**: Scanner modules MUST output structured data (JSON) to stdout and progress/diagnostic messages to stderr. Workflows parse stdout as JSON - any non-JSON output breaks parsing. See `.github/copilot-instructions.md` for detailed examples.

### Testing & Quality

```bash
# Run all unit tests
npm test

# Lint code
npm run lint

# Run individual scanner modules
npm run run:parse
npm run run:validate
npm run run:scan
```

### File Organization

- **Scanner modules**: `/scanner/*.mjs`
- **Tests**: `/tests/unit/*.test.mjs`
- **Workflows**: `.github/workflows/`
- **Reports**: Published to `/reports/` for GitHub Pages
- **Spec Kitty specs**: `kitty-specs/` (for project management)

### Never Commit

- `node_modules/` (in .gitignore)
- Secrets or credentials
- Agent-specific directories (`.claude/`, `.cursor/`, `.gemini/`, etc.)

## Accessibility Standards

**IMPORTANT**: All AI agents must read and follow accessibility requirements.

📋 **[ACCESSIBILITY.md](./ACCESSIBILITY.md)** - Accessibility commitment, WCAG 2.2 AA requirements, and best practices

This document defines:
- WCAG 2.2 Level AA compliance requirements
- Development best practices for accessible code
- Security patterns (avoid command injection)
- Testing requirements and quality gates
- Trusted accessibility resources

## Tool-Specific Instructions

### GitHub Copilot

Comprehensive GitHub Copilot instructions: [`.github/copilot-instructions.md`](.github/copilot-instructions.md)

### Spec Kitty

Spec Kitty agent rules (project management): **[`.kittify/AGENTS.md`](https://github.com/mgifford/alfa-scan/blob/main/.kittify/AGENTS.md)**

These rules are CRITICAL for agents working with Spec Kitty commands and include:
- Path reference requirements
- UTF-8 encoding rules
- Context management
- Work quality standards
- Git discipline and best practices

### Cursor, Claude, Gemini, Codex, etc.

Follow the general guidelines above. Refer to these comprehensive resources:
- [`.github/copilot-instructions.md`](.github/copilot-instructions.md) - Detailed architecture and patterns
- [`ACCESSIBILITY.md`](./ACCESSIBILITY.md) - Accessibility requirements and best practices
- [`.kittify/AGENTS.md`](https://github.com/mgifford/alfa-scan/blob/main/.kittify/AGENTS.md) - Spec Kitty project management rules

## Key Dependencies

- `@siteimprove/alfa-cli`: Core accessibility testing
- `@siteimprove/alfa-formatter-earl`: EARL report formatting
- `@siteimprove/alfa-formatter-json`: JSON report formatting

## Getting Help

- **Project Structure**: See `.github/copilot-instructions.md`
- **Accessibility Standards**: See `ACCESSIBILITY.md`
- **Testing Patterns**: See `tests/unit/*.test.mjs` examples
- **Scanner Implementation**: See `scanner/*.mjs` modules
- **Spec Kitty Workflows**: See [`.kittify/AGENTS.md`](https://github.com/mgifford/alfa-scan/blob/main/.kittify/AGENTS.md)
