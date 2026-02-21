---
work_package_id: "WP02"
subtasks:
  - "T006"
  - "T007"
  - "T008"
  - "T009"
  - "T010"
title: "Pages Intake and Issue Submission"
phase: "Phase 2 - Intake UX"
lane: "done"
dependencies:
  - "WP01"
assignee: "copilot"
agent: "github-copilot"
shell_pid: ""
review_status: "pending"
reviewed_by: ""
history:
  - timestamp: "2026-02-20T20:28:38Z"
    lane: "planned"
    agent: "system"
    shell_pid: ""
    action: "Prompt generated via /spec-kitty.tasks"
  - timestamp: "2026-02-21T14:25:00Z"
    lane: "in_progress"
    agent: "github-copilot"
    shell_pid: ""
    action: "Started implementation"
  - timestamp: "2026-02-21T15:30:00Z"
    lane: "done"
    agent: "github-copilot"
    shell_pid: ""
    action: "Implementation complete - all tests passing, code review clean, no security issues"
---

# Work Package Prompt: WP02 - Pages Intake and Issue Submission

## Review Feedback

*[This section is empty initially. Reviewers will populate it if work is returned.]*

## Objectives & Success Criteria

- Deliver public Pages form for URL submission (line/csv input).
- Enforce max 100 URLs and malformed-input guidance before submission.
- Submit structured scan request issues as authenticated GitHub users.

## Context & Constraints

- Depends on schema and validation contract from WP01.
- Pages must not run scanning itself; it only creates request issues.
- Submission must align with parser expectations in `scanner/parse-issue.mjs`.

## Implementation Command

- `spec-kitty implement WP02 --base WP01`

## Subtasks & Detailed Guidance

### Subtask T006 - Build Pages intake form

- **Purpose**: Collect URL batches with minimal user friction.
- **Steps**:
  1. Build text-area based input and helper UI in `pages/index.html`.
  2. Add parsing helpers in `pages/submit.js` for one-per-line and CSV formats.
  3. Show counts and normalization preview before submit.
- **Files**: `pages/index.html`, `pages/submit.js`.
- **Parallel?**: No.
- **Notes**: Keep UX simple and explicit about URL policy.

### Subtask T007 - Add max-100 and quality validation

- **Purpose**: Prevent invalid request size/shape from reaching workflows.
- **Steps**:
  1. Enforce 1..100 target count.
  2. Validate URL syntax with immediate feedback.
  3. Mark accepted vs rejected input lines.
- **Files**: `pages/submit.js`.
- **Parallel?**: No.
- **Notes**: Browser validation supplements, not replaces, runtime checks.

### Subtask T008 - Integrate authenticated issue creation

- **Purpose**: Meet requirement that only authenticated GitHub users submit requests.
- **Steps**:
  1. Implement authenticated submission pattern to GitHub issue creation endpoint.
  2. Serialize payload in schema-compliant issue body.
  3. Return created issue link to the user on success.
- **Files**: `pages/submit.js`, submission integration docs if needed.
- **Parallel?**: No.
- **Notes**: Ensure clear error handling for auth/permission failures.

### Subtask T009 - Add error UX for malformed/private/internal targets

- **Purpose**: Provide actionable guidance before submit.
- **Steps**:
  1. Explain blocked URL categories (localhost, private ranges, invalid scheme).
  2. Keep rejected targets visible so users can fix quickly.
  3. Preserve original user ordering in preview.
- **Files**: `pages/index.html`, `pages/submit.js`.
- **Parallel?**: Yes.
- **Notes**: Messaging should match runtime rejection semantics.

### Subtask T010 - Add integration tests for payload composition

- **Purpose**: Ensure form output remains parser-compatible.
- **Steps**:
  1. Add fixtures for mixed line/csv input.
  2. Validate generated issue body against parser tests.
  3. Add regression test for >100 URL rejection behavior.
- **Files**: `tests/integration/pages-intake.test.mjs`, `tests/fixtures/*`.
- **Parallel?**: Yes.
- **Notes**: Include authentication failure case coverage.

## Test Strategy

- UI parsing/validation tests for line and CSV modes.
- Integration tests for schema-compatible issue body generation.
- Manual smoke test on Pages preview environment.

## Risks & Mitigations

- Risk: drift between client formatter and workflow parser.
  - Mitigation: shared fixture contracts and parser-backed integration tests.
- Risk: auth flow breakage from token/permissions changes.
  - Mitigation: explicit error states and test coverage for auth failures.

## Review Guidance

- Confirm issue body shape is accepted by WP01 parser tests.
- Confirm max-100 enforcement and malformed URL feedback.
- Confirm no direct scan execution logic exists in Pages code.

## Activity Log

- 2026-02-20T20:28:38Z - system - lane=planned - Prompt created.
