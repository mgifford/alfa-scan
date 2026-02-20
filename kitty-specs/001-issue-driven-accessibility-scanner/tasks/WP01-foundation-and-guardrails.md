---
work_package_id: WP01
title: Foundation and Guardrails
lane: "doing"
dependencies: []
base_branch: main
base_commit: ffedb3ab4ad2eeaacfcf74bc2e67b8dd1afbf0fe
created_at: '2026-02-20T20:40:46.688534+00:00'
subtasks:
- T001
- T002
- T003
- T004
- T005
phase: Phase 1 - Foundation
assignee: ''
agent: ''
shell_pid: "12579"
review_status: ''
reviewed_by: ''
history:
- timestamp: '2026-02-20T20:28:38Z'
  lane: planned
  agent: system
  shell_pid: ''
  action: Prompt generated via /spec-kitty.tasks
---

# Work Package Prompt: WP01 - Foundation and Guardrails

## Review Feedback

*[This section is empty initially. Reviewers will populate it if work is returned.]*

## Objectives & Success Criteria

- Establish core scanner package layout and shared request/validation contracts.
- Ensure URL policy guardrails are implemented once and reused by all later workflows.
- Provide a runnable workflow shell and test baseline that downstream WPs can build on.

## Context & Constraints

- Spec path: `kitty-specs/001-issue-driven-accessibility-scanner/spec.md`
- Plan path: `kitty-specs/001-issue-driven-accessibility-scanner/plan.md`
- Must enforce public-url-only policy and block private/internal targets.
- Must remain compatible with GitHub Actions (Ubuntu runner + Node 20.x).

## Implementation Command

- `spec-kitty implement WP01`

## Subtasks & Detailed Guidance

### Subtask T001 - Scaffold scanner and test structure

- **Purpose**: Create predictable layout for scripts, schemas, and tests.
- **Steps**:
  1. Create/normalize `scanner/`, `scanner/schemas/`, `tests/unit/`, `tests/integration/`.
  2. Add package scripts for lint/test/run-scan entrypoints.
  3. Add minimal README notes for scanner module purpose.
- **Files**: `scanner/`, `tests/`, root package config files.
- **Parallel?**: No.
- **Notes**: Keep naming aligned with `plan.md` paths.

### Subtask T002 - Define canonical issue payload schema/parser

- **Purpose**: Standardize scan request extraction from GitHub issues.
- **Steps**:
  1. Add schema for request metadata and URL list constraints.
  2. Implement parser that converts issue body into normalized `ScanRequest`.
  3. Emit structured validation errors for malformed payloads.
- **Files**: `scanner/parse-issue.mjs`, `scanner/schemas/scan-request.schema.json`.
- **Parallel?**: No.
- **Notes**: Keep parser output compatible with `data-model.md` fields.

### Subtask T003 - Implement URL validation + internal host blocking

- **Purpose**: Enforce security policy from clarified requirements.
- **Steps**:
  1. Validate `http/https` scheme and canonical URL formatting.
  2. Reject localhost/loopback/private/internal ranges.
  3. Return rejection reasons suitable for user-facing issue comments/reports.
- **Files**: `scanner/validate-targets.mjs`, `tests/unit/validate-targets.test.mjs`.
- **Parallel?**: Yes (after T002).
- **Notes**: Runtime checks are mandatory even if form validates earlier.

### Subtask T004 - Create workflow shell and permissions baseline

- **Purpose**: Establish action entrypoint with least privilege defaults.
- **Steps**:
  1. Create `scan-request.yml` skeleton with issue trigger and concurrency key.
  2. Set explicit permissions for reading issues and writing statuses/artifacts.
  3. Wire parser stage execution and dry-run mode.
- **Files**: `.github/workflows/scan-request.yml`.
- **Parallel?**: Yes (after T002).
- **Notes**: Keep permissions minimal; document any elevated scope.

### Subtask T005 - Add foundational tests and fixtures

- **Purpose**: Prevent schema and guardrail regressions.
- **Steps**:
  1. Add valid/invalid issue fixtures.
  2. Add tests for max-100 URL limit, malformed URLs, and blocked internal hosts.
  3. Ensure CI script runs parser + validator tests.
- **Files**: `tests/unit/parse-issue.test.mjs`, `tests/fixtures/*`.
- **Parallel?**: No.
- **Notes**: Include redirect sample fixtures for later WPs.

## Test Strategy

- Unit tests for parser and URL validator.
- Fixture-based tests for issue payload shape.
- Workflow lint/dry-run for YAML integrity.

## Risks & Mitigations

- Risk: invalid assumptions about issue formatting.
  - Mitigation: fixture diversity and strict schema validation.
- Risk: URL safety gaps.
  - Mitigation: explicit checks for loopback/private/link-local ranges.

## Review Guidance

- Confirm parser output maps directly to `ScanRequest` entity fields.
- Confirm blocking logic rejects private/internal URLs in runtime tests.
- Confirm workflow permissions do not exceed required scopes.

## Activity Log

- 2026-02-20T20:28:38Z - system - lane=planned - Prompt created.
