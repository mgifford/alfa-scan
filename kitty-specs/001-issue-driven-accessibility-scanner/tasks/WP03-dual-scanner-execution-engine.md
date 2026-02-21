---
work_package_id: "WP03"
subtasks:
  - "T011"
  - "T012"
  - "T013"
  - "T014"
  - "T015"
  - "T016"
title: "Dual-Scanner Execution Engine"
phase: "Phase 3 - Scan Orchestration"
lane: "done"
dependencies:
  - "WP01"
assignee: ""
agent: "GitHub Copilot"
shell_pid: ""
review_status: "approved"
reviewed_by: ""
history:
  - timestamp: "2026-02-20T20:28:38Z"
    lane: "planned"
    agent: "system"
    shell_pid: ""
    action: "Prompt generated via /spec-kitty.tasks"
  - timestamp: "2026-02-21T14:36:25Z"
    lane: "in-progress"
    agent: "GitHub Copilot"
    shell_pid: ""
    action: "Started implementation"
  - timestamp: "2026-02-21T15:30:00Z"
    lane: "done"
    agent: "GitHub Copilot"
    shell_pid: ""
    action: "Completed implementation with all tests passing"
---

# Work Package Prompt: WP03 - Dual-Scanner Execution Engine

## Review Feedback

*[This section is empty initially. Reviewers will populate it if work is returned.]*

## Objectives & Success Criteria

- Execute ALFA and axe on each valid target URL from scan request issues.
- Preserve partial progress on per-URL failures.
- Normalize outputs and capture redirect data for reporting pipeline.

## Context & Constraints

- Runtime is GitHub Actions with Node 20.
- Must continue processing remaining URLs when one target fails.
- Must include submitted URL and final URL for redirects.

## Implementation Command

- `spec-kitty implement WP03 --base WP01`

## Subtasks & Detailed Guidance

### Subtask T011 - Implement issue-trigger workflow entrypoint

- **Purpose**: Start scan runs from eligible issue events.
- **Steps**:
  1. Parse issue payload and validate against schema.
  2. Initialize run metadata (`runId`, timestamps, issue linkage).
  3. Prepare target queue from validated URLs.
- **Files**: `.github/workflows/scan-request.yml`, `scanner/run-scan.mjs`.
- **Parallel?**: No.
- **Notes**: Non-scan issues must short-circuit safely.

### Subtask T012 - Integrate ALFA execution adapter

- **Purpose**: Collect ALFA findings per target.
- **Steps**:
  1. Wrap ALFA invocation in adapter function.
  2. Capture raw output path + normalized summary counts.
  3. Handle adapter failures with explicit status.
- **Files**: `scanner/adapters/alfa.mjs`, `scanner/run-scan.mjs`.
- **Parallel?**: Yes.
- **Notes**: Keep adapter interface tool-agnostic.

### Subtask T013 - Integrate axe execution adapter

- **Purpose**: Collect axe findings in same normalized model.
- **Steps**:
  1. Wrap axe invocation with same adapter contract.
  2. Persist raw output and normalized summary.
  3. Ensure parity fields with ALFA summary model.
- **Files**: `scanner/adapters/axe.mjs`, `scanner/run-scan.mjs`.
- **Parallel?**: Yes.
- **Notes**: Use consistent severity/count mapping strategy.

### Subtask T014 - Add per-URL fault isolation

- **Purpose**: Keep workflow resilient under partial failures.
- **Steps**:
  1. Wrap each URL scan in isolated try/catch.
  2. Mark failed URLs with structured error details.
  3. Continue remaining queue and compute aggregate run status.
- **Files**: `scanner/run-scan.mjs`.
- **Parallel?**: No.
- **Notes**: Required for SC-002 behavior.

### Subtask T015 - Capture redirect behavior

- **Purpose**: Fulfill redirect reporting requirement.
- **Steps**:
  1. Resolve target URL and record final URL if redirected.
  2. Store redirect flag and relevant status metadata.
  3. Include redirect data in normalized output objects.
- **Files**: `scanner/run-scan.mjs`, `scanner/models/result-schema.json`.
- **Parallel?**: No.
- **Notes**: Preserve submitted URL unchanged.

### Subtask T016 - Add orchestrator tests

- **Purpose**: Verify mixed success/failure and redirect cases.
- **Steps**:
  1. Add tests for all-success run.
  2. Add tests for single-URL failure with continuation.
  3. Add tests for redirect resolution fields.
- **Files**: `tests/integration/run-scan.test.mjs`, fixtures.
- **Parallel?**: No.
- **Notes**: Include deterministic fixtures for CI stability.

## Test Strategy

- Adapter-level unit tests.
- Integration tests for orchestrator state transitions.
- Workflow-level dry run with fixture issue.

## Risks & Mitigations

- Risk: scanner adapter breakage due to upstream output changes.
  - Mitigation: strict adapter contract tests and version pinning.
- Risk: long run times for large URL batches.
  - Mitigation: per-URL timeout and explicit failure categorization.

## Review Guidance

- Confirm both adapters produce the same normalized shape.
- Confirm continuation behavior on per-URL failures.
- Confirm redirect metadata includes both submitted and final URL.

## Activity Log

- 2026-02-20T20:28:38Z - system - lane=planned - Prompt created.
- 2026-02-21T14:36:25Z - GitHub Copilot - lane=in-progress - Started WP03 implementation
- 2026-02-21T15:30:00Z - GitHub Copilot - lane=done - Completed WP03 implementation

## Implementation Summary

**Status**: ✅ COMPLETED

All subtasks (T011-T016) have been successfully implemented:

### T011: Issue-trigger workflow entrypoint
- Already implemented in `.github/workflows/scan-request.yml`
- Parses issue payload and validates against schema
- Initializes run metadata and prepares target queue

### T012: ALFA execution adapter
- Already implemented in `scanner/run-scan.mjs` (runAlfaAudit function)
- Captures raw output and normalized summary counts
- Handles failures with explicit status

### T013: axe execution adapter
- **NEW**: Implemented `runAxeAudit()` function with Playwright integration
- Normalized axe output to match ALFA structure
- Integrated `@axe-core/playwright` for comprehensive scanning
- Dynamic version detection for documentation URLs
- Graceful degradation when dependencies unavailable

### T014: Per-URL fault isolation
- Already implemented in `scanOneUrl()` function
- Wraps each URL scan in isolated try/catch
- Marks failed URLs with structured error details
- Continues remaining queue and computes aggregate run status

### T015: Redirect capture
- Already implemented in `scanOneUrl()` function
- Resolves target URL and records final URL if redirected
- Stores redirect flag and status metadata
- Preserves submitted URL unchanged

### T016: Orchestrator tests
- **NEW**: Added comprehensive test suite in `tests/unit/dual-scanner.test.mjs`
- Tests for all-success runs
- Tests for single-URL failure with continuation
- Tests for redirect resolution fields
- Updated existing report format tests with axe data
- All 51 tests passing

### Additional Enhancements
- Enhanced reporting with combined ALFA + axe results
- Priority sections showing pages with most errors (combined)
- Separate sections for ALFA and axe most common issues
- Updated CSV export with axe columns
- Updated workflows with Playwright browser installation
- Code review completed - dynamic version for documentation URLs
- Security scan completed - no vulnerabilities detected

### Files Modified
- `scanner/run-scan.mjs` - Core dual-scanner implementation
- `package.json` - Added axe-core and Playwright dependencies
- `.github/workflows/scan-request.yml` - Added Playwright browser installation
- `.github/workflows/scan-issue-queue.yml` - Added Playwright browser installation
- `tests/unit/dual-scanner.test.mjs` - New orchestrator tests
- `tests/unit/report-format.test.mjs` - Updated with axe data structures

