# GitHub Copilot Instructions for alfa-scan

## Project Overview

This is an issue-driven accessibility scanning prototype that uses GitHub Pages and GitHub Actions to perform automated accessibility scans using Siteimprove's Alfa library.

### Architecture

- **Frontend**: GitHub Pages form (`index.html`) for submitting URL batches
- **Backend**: GitHub Actions workflows triggered by issues
- **Scanner**: Node.js modules in `scanner/` directory using @siteimprove/alfa-cli
- **Results**: Published to GitHub Pages for comparison

## Key Components

### Scanner Modules

1. **parse-issue.mjs**: Parses scan request issues to extract URLs
2. **validate-targets.mjs**: Validates URL targets before scanning
3. **run-scan.mjs**: Executes accessibility scans and generates reports

### Workflows

- **scan-request.yml**: Triggered on issue creation/edit for issues titled "SCAN:"
- **scan-issue-queue.yml**: Daily scheduled scan + manual trigger option

## Coding Conventions

### Module Structure

- Use ES modules (`type: "module"` in package.json)
- Export functions from modules for testing
- Use import guard to prevent main() execution during testing:
  ```javascript
  if (import.meta.url === `file://${process.argv[1]}`) {
    main();
  }
  ```

### Testing Practices

- Test files located in `tests/unit/` with `.test.mjs` extension
- Run tests with: `npm test`
- Export functions from scanner modules for unit testing
- Use Node.js built-in test runner

### Code Quality

- Lint with: `npm run lint` (checks all scanner modules)
- Follow existing code patterns in the scanner/ directory
- Node.js version: >= 20 (see package.json engines)

### Security

- Use `spawnSync` with argument arrays instead of `execSync` with template strings to prevent command injection
- Never commit secrets or credentials
- Validate all user inputs before processing

### Stdout/Stderr Convention

**CRITICAL**: Scanner modules must output structured data (JSON) to stdout and progress/diagnostic messages to stderr.

- **stdout**: Reserved ONLY for structured data (JSON) that workflows will parse
- **stderr**: Use for all progress messages, warnings, errors, and diagnostic output
- **Rationale**: Workflows redirect stdout to files or parse it as JSON. Any non-JSON output breaks parsing.

**Example (run-scan.mjs)**:
```javascript
// ✅ CORRECT: Progress to stderr
console.error(`[1/100] Scanned ${url} in ${ms}ms`);

// ✅ CORRECT: Warnings to stderr  
console.warn(`WARNING: Scan incomplete`);

// ✅ CORRECT: Final JSON to stdout
console.log(JSON.stringify({ results: [...] }));

// ❌ WRONG: Progress to stdout corrupts JSON
console.log(`[1/100] Scanned ${url}`); // Breaks workflow parsing!
```

**Testing**: See `tests/unit/run-scan-output.test.mjs` for examples of validating stdout/stderr separation.

### Git Practices

- Keep `node_modules/` in .gitignore (never commit dependencies)
- Write clear, descriptive commit messages
- Follow existing branch naming conventions

## Testing Commands

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

## Report Format

- Accessibility reports should be action-oriented
- Prioritize sections showing pages with most errors first
- Display most common issues prominently
- Use structured format for easy comparison across scans

## Dependencies

- `@siteimprove/alfa-cli`: Core accessibility testing library
- `@siteimprove/alfa-formatter-earl`: EARL report formatting
- `@siteimprove/alfa-formatter-json`: JSON report formatting

## Important Notes

- This project uses Spec Kitty for project management (see `.kittify/` directory)
- Work packages are organized under `kitty-specs/`
- `.github/prompts/` contains Spec Kitty command templates (not Copilot instructions)
