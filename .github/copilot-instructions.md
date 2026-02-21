# Copilot Instructions for alfa-scan

## Project Overview

This is an issue-driven accessibility scanning system that integrates with GitHub Issues and Actions. It accepts URL batches via GitHub Pages form, creates scan-request issues, runs accessibility scans using Siteimprove ALFA, and publishes results to GitHub Pages.

## Architecture

### Core Components

1. **scanner/parse-issue.mjs** - Parses issue bodies into normalized `ScanRequest` data
2. **scanner/validate-targets.mjs** - Validates URL syntax and blocks private/internal targets
3. **scanner/run-scan.mjs** - Fetches URLs, runs ALFA audits, generates reports (JSON, Markdown, CSV)

### Workflows

- **scan-request.yml** - Triggers on issue events (opened/edited/reopened) for issues titled "SCAN:"
- **scan-issue-queue.yml** - Scheduled daily + manual trigger for all open "SCAN:" issues
- **deploy-pages.yml** - Deploys reports to GitHub Pages

### Reports Structure

- `reports/issues/issue-{number}/{timestamp}/` - Timestamped scan reports
- Each scan generates: `report.json`, `report.md`, `report.csv`

## Coding Conventions

### JavaScript/Node.js

- **Module System**: Use ES Modules (type: "module" in package.json)
- **Node Version**: Requires Node.js >= 20
- **File Extensions**: Use `.mjs` for module files
- **Imports**: Use explicit file extensions in import statements

### Testing Practices

- **Test Framework**: Node.js built-in test runner (`node:test`)
- **Test Location**: `tests/unit/*.test.mjs`
- **Run Tests**: `npm test`
- **Module Exports**: Export functions from scanner modules and use import guard to prevent main() execution during testing:
  ```javascript
  if (import.meta.url === `file://${process.argv[1]}`) {
    await main();
  }
  ```

### Security Practices

- **Command Execution**: Use `spawnSync` with argument arrays instead of `execSync` with template strings to prevent command injection
- **URL Validation**: Always validate and sanitize URLs through `validate-targets.mjs` before scanning
- **Private Networks**: Block access to private/internal IP ranges and localhost

### Code Quality

- **Linting**: Run `npm run lint` (checks syntax with `--check` flag)
- **No Unused Vars**: Prefix unused variables with underscore (e.g., `_unused`)
- **Error Handling**: Always handle errors gracefully, especially in async operations
- **Retry Logic**: Implement exponential backoff for API calls (see workflow examples)

## Report Format

- Reports should be action-oriented with priority sections
- Show pages with most errors first
- Display most common issues prominently
- Include:
  - Summary statistics (passed/failed/can't tell/inapplicable)
  - Per-URL results with page titles
  - Failed ALFA rules with links
  - CSV export for data analysis

## File Structure

```
.github/
  workflows/       - GitHub Actions workflows
  prompts/         - AI agent prompt files (spec-kitty)
scanner/
  *.mjs           - Core scanning modules
  schemas/        - JSON schemas for validation
tests/
  unit/           - Unit tests
  fixtures/       - Test fixtures
reports/          - Generated accessibility reports
```

## Dependencies

- **@siteimprove/alfa-cli** - Core accessibility scanning engine
- **@siteimprove/alfa-formatter-earl** - EARL format output
- **@siteimprove/alfa-formatter-json** - JSON format output

## Git Practices

- **Ignored Paths**: `node_modules/`, `.scan-output/`, `.tmp/`
- **Commit Messages**: Use conventional commits (e.g., `chore(scan):`, `feat:`, `fix:`)
- **Branch Protection**: Main branch receives scan results via automated commits

## Development Commands

- `npm test` - Run unit tests
- `npm run lint` - Check syntax
- `npm run run:parse` - Test issue parsing
- `npm run run:validate` - Test URL validation
- `npm run run:scan -- <issue-event.json> <output-dir>` - Run scan locally

## Common Patterns

### Issue Parsing
Issues must have title starting with "SCAN:" and contain URLs (one per line or comma-separated)

### Workflow Triggers
- **On Issue**: Automatically triggered by issue events
- **Scheduled**: Daily at midnight UTC via cron
- **Manual**: Via workflow_dispatch in Actions tab

### Error States
- Handle network failures with retries
- Report scan errors without failing entire batch
- Distinguish between validation errors and scan errors

## Best Practices

1. **Minimal Changes**: Make surgical, focused changes to accomplish specific tasks
2. **Test First**: Understand existing tests before making changes
3. **Security First**: Always consider security implications of URL handling and command execution
4. **Documentation**: Update README.md when changing user-facing behavior
5. **Backward Compatibility**: Maintain existing report format structures unless specifically updating them
