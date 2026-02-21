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

## Tool-Specific Instructions

### GitHub Copilot

Comprehensive GitHub Copilot instructions: [`.github/copilot-instructions.md`](.github/copilot-instructions.md)

### Spec Kitty

Spec Kitty agent rules (project management): [`.kittify/AGENTS.md`](.kittify/AGENTS.md)

### Cursor, Claude, Gemini, Codex, etc.

Follow the general guidelines above. Refer to `.github/copilot-instructions.md` for comprehensive project context including:
- Detailed architecture
- Scanner module documentation
- Report format requirements
- Workflow triggers and structure

## Key Dependencies

- `@siteimprove/alfa-cli`: Core accessibility testing
- `@siteimprove/alfa-formatter-earl`: EARL report formatting
- `@siteimprove/alfa-formatter-json`: JSON report formatting

## Getting Help

- **Project Structure**: See `.github/copilot-instructions.md`
- **Testing Patterns**: See `tests/unit/*.test.mjs` examples
- **Scanner Implementation**: See `scanner/*.mjs` modules
- **Spec Kitty Workflows**: See `.kittify/AGENTS.md`
