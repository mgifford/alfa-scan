# Scanner Module

This module contains WP01 foundations for request parsing and URL safety checks.

## Files

- `parse-issue.mjs` - Parses issue bodies into normalized `ScanRequest` data.
- `validate-targets.mjs` - Validates URL syntax and blocks private/internal targets.
- `schemas/scan-request.schema.json` - Canonical payload structure and constraints.

## Usage

- `npm run run:parse`
- `npm run run:validate`

The implementation avoids runtime dependencies so it runs consistently on GitHub Actions Node 20 runners.