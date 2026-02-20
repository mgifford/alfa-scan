# Quickstart: Issue-Driven Accessibility Scanner

## Prerequisites

- GitHub repository with Actions enabled
- GitHub Pages enabled for static publishing
- Node.js 20 locally for script development
- Permissions to create workflows and Pages content

## Setup Steps

1. Configure GitHub Pages to publish from the designated reports/pages branch or folder.
2. Add Actions workflows for issue-triggered scanning and Pages publishing.
3. Add scanner orchestration scripts and normalization utilities.
4. Add form page assets that create scan request issues through authenticated GitHub flow.
5. Configure least-privilege repository tokens/permissions for issue read/write and Pages publish.

## Request Flow (Happy Path)

1. Open Pages form.
2. Submit up to 100 URLs (line-separated, CSV, or mixed).
3. Form creates structured issue using authenticated GitHub user session.
4. Actions workflow detects issue and validates payload.
5. Workflow runs ALFA and axe for each valid public URL.
6. Workflow publishes normalized report and raw outputs to Pages.
7. Issue receives status update with report link.

## Validation Scenarios

### Scenario A: Valid mixed URL batch

- Input: 10 valid public URLs
- Expected:
  - Issue accepted
  - Both tools execute for each URL
  - Public report contains per-URL ALFA vs axe comparison

### Scenario B: Over limit submission

- Input: 101 URLs
- Expected:
  - Request rejected
  - No scan workflow starts
  - User receives correction guidance

### Scenario C: Private/internal URL rejection

- Input includes `http://localhost`, `http://10.0.0.5`, and valid public URLs
- Expected:
  - Private/internal targets rejected and logged with reasons
  - Valid public URLs proceed
  - Report clearly marks excluded targets

### Scenario D: Redirect reporting

- Input includes URLs that redirect
- Expected:
  - Report shows submitted URL and final resolved URL
  - Redirect path is represented in machine-readable output

### Scenario E: Partial run resilience

- Input includes one unreachable host among valid URLs
- Expected:
  - Unreachable URL recorded as failed
  - Remaining URLs continue and complete
  - Run status is `partial` when applicable

## Operational Checks

- Confirm workflow runtime remains within expected limits for 100 URLs.
- Confirm published outputs are public and non-sensitive.
- Confirm report links are tied to originating issue references.