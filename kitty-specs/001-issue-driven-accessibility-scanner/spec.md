# Feature Specification: Issue-Driven Accessibility Scanner

**Feature Branch**: `001-issue-driven-accessibility-scanner`  
**Created**: 2026-02-20  
**Status**: Draft  
**Input**: User description: "I want to explore using Siteimprove/alfa with GitHub Pages and GitHub Actions, compare it with axe, allow a list of up to 100 CSV URLs from a GitHub Pages form, and trigger scans through opening a GitHub Issue that Actions watches."

## Clarifications

### Session 2026-02-20

- Q: Who is allowed to trigger scans from the public submission flow (via issue creation)? → A: Any authenticated GitHub user who submits an issue.
- Q: What URL targeting policy should scans use for security and scope? → A: Valid public URLs only; block private/internal targets; record redirects in results.
- Q: Should published scan reports on Pages be visible to everyone or only to repo members? → A: Reports should be public.

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Submit URL List for Scanning (Priority: P1)

As a project maintainer, I can submit a list of URLs from a public web form so a scan request is captured consistently without manually editing repository files.

**Why this priority**: Without reliable intake, no scan workflow can begin.

**Independent Test**: Can be fully tested by submitting valid and invalid URL lists and verifying a correctly structured scan request is created and traceable.

**Acceptance Scenarios**:

1. **Given** a user enters 1 to 100 valid URLs in the form, **When** the user submits the form, **Then** a new scan request issue is created with the URL list and request metadata.
2. **Given** a user enters more than 100 URLs, **When** the user submits, **Then** the submission is rejected with guidance to reduce the list size.
3. **Given** a user provides malformed input, **When** the user submits, **Then** the submission is rejected with clear validation feedback.

---

### User Story 2 - Run Dual Scans from Issue (Priority: P1)

As a project maintainer, I can have scan requests automatically processed from new issues so both ALFA and axe run on the same URL set for direct comparison.

**Why this priority**: The core objective is to evaluate ALFA outputs relative to axe on identical targets.

**Independent Test**: Can be fully tested by creating one valid scan request issue and verifying both scanners process each URL and produce per-run raw outputs.

**Acceptance Scenarios**:

1. **Given** a new issue matches the scan request format, **When** automation runs, **Then** it executes both ALFA and axe against every valid URL in the request.
2. **Given** one URL fails to load or scan, **When** automation processes the request, **Then** the failure is recorded for that URL while processing continues for remaining URLs.
3. **Given** a non-scan issue is opened, **When** automation evaluates it, **Then** no scan execution is started.

---

### User Story 3 - Review Comparable Results on Pages (Priority: P2)

As a project maintainer, I can review scan outcomes in a published report so I can quickly identify differences between ALFA and axe findings per URL.

**Why this priority**: Decision-making depends on understandable side-by-side output, not raw logs alone.

**Independent Test**: Can be fully tested by completing a scan run and verifying a published report contains per-URL summaries, comparison fields, and links to raw data.

**Acceptance Scenarios**:

1. **Given** a scan run completes, **When** reports are published, **Then** a human-readable summary and machine-readable raw results are available.
2. **Given** both ALFA and axe data are present for a URL, **When** a user views the report, **Then** the report presents comparable counts and rule-level references where available.
3. **Given** a historical run exists, **When** a user accesses the reporting site, **Then** they can locate the run and view its timestamp and request source.

---

### Edge Cases

- What happens when the same URL appears multiple times in one request?
- How does the system handle a mix of reachable and unreachable URLs in the same batch?
- How does the system handle redirected URLs that resolve to a different final destination while preserving both original and final URL in reporting?
- What happens when the issue body format is partially valid but missing required metadata?

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: System MUST provide a public submission interface that accepts URL input as one-per-line and comma-separated CSV text.
- **FR-001A**: System MUST require GitHub authentication for issue creation so only authenticated GitHub users can submit scan requests.
- **FR-002**: System MUST enforce a maximum of 100 submitted URLs per scan request.
- **FR-003**: System MUST validate URL syntax before a scan request is accepted.
- **FR-003A**: System MUST accept only publicly reachable `http/https` targets and MUST reject private/internal network targets (including localhost, loopback, and non-public address ranges).
- **FR-004**: System MUST create a structured scan request issue containing the submitted URLs and requester-provided context.
- **FR-005**: System MUST trigger scan processing when a new issue matches the defined scan request pattern.
- **FR-006**: System MUST run ALFA and axe for each valid URL in the request.
- **FR-007**: System MUST keep processing remaining URLs if one URL scan fails.
- **FR-008**: System MUST produce machine-readable raw result output for both ALFA and axe per request.
- **FR-009**: System MUST produce a human-readable comparison summary that highlights key differences between ALFA and axe findings.
- **FR-010**: System MUST publish run results to a publicly accessible report location.
- **FR-011**: System MUST associate each published report with its originating request issue and execution timestamp.
- **FR-012**: System MUST reject malformed requests with clear correction guidance.
- **FR-013**: System MUST record redirect behavior per URL and include both submitted URL and final resolved URL in machine-readable and human-readable outputs.
- **FR-014**: System MUST publish report pages and generated outputs as publicly viewable artifacts.

### Key Entities *(include if feature involves data)*

- **Scan Request**: A user-submitted batch containing up to 100 URLs, request metadata, and a unique reference to the source issue.
- **Target URL**: A normalized web address to be scanned, with per-tool status and error details.
- **Scan Run**: A single processing execution for one scan request, including start/end time and aggregate outcome.
- **Tool Result**: Raw output and normalized summary data for one tool (ALFA or axe) on one target URL.
- **Comparison Report**: Published summary artifact that presents per-URL and aggregate differences between ALFA and axe results.

### Assumptions

- The PoC is intended for exploratory evaluation rather than compliance certification.
- Publicly submitted URLs are safe to process under repository governance controls.
- Reports are publicly visible and therefore should avoid sensitive submission metadata.
- Initial comparison focuses on result visibility and relative differences, not strict one-to-one rule parity.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: 100% of valid scan request issues trigger an automated scan run within 5 minutes of issue creation.
- **SC-002**: For scan requests with up to 100 valid URLs, at least 95% of URLs complete scans in both tools within 30 minutes.
- **SC-003**: 100% of completed runs publish both a human-readable summary and machine-readable raw outputs.
- **SC-004**: In stakeholder review, at least 90% of sampled runs clearly show per-URL ALFA-versus-axe differences without consulting raw logs.
- **SC-005**: For malformed submissions, 100% are rejected with actionable guidance and do not start scan execution.
