# Research: Issue-Driven Accessibility Scanner

## Decision 1: Node.js-first orchestration on GitHub Actions

- Decision: Use Node.js as the primary runtime for issue parsing, URL validation, scanner orchestration, and report normalization.
- Rationale: ALFA and axe ecosystems are strongest in Node-based tooling, and Actions runners provide stable Node support.
- Alternatives considered:
  - Python orchestration with CLI wrappers: workable but adds cross-runtime complexity.
  - Hybrid orchestration: flexible but unnecessary for PoC scope.

## Decision 2: Issue-driven request intake from GitHub Pages form

- Decision: Use GitHub Pages form submission that creates a structured GitHub issue, then trigger scanning from issue events.
- Rationale: Matches user requirement, provides durable audit trail, and avoids direct compute in Pages.
- Alternatives considered:
  - Manual `workflow_dispatch`: less user-friendly intake.
  - Commit-based URL file updates: weaker traceability and higher friction.

## Decision 3: Dual scanner execution per URL (ALFA + axe)

- Decision: Run both scanners for each valid target and normalize outputs into a single comparison model.
- Rationale: Required for side-by-side evaluation of ALFA result characteristics versus axe.
- Alternatives considered:
  - ALFA-only baseline: does not satisfy comparison objective.
  - Separate independent reports: reduces comparability and reviewer clarity.

## Decision 4: Public report publishing via GitHub Pages

- Decision: Publish run summaries and machine-readable outputs as public Pages artifacts.
- Rationale: Explicit clarified requirement is public visibility for reports.
- Alternatives considered:
  - Private artifacts only: conflicts with clarified visibility requirement.
  - GitHub Releases attachments: weaker browsing UX for iterative scan runs.

## Decision 5: URL policy and network safety constraints

- Decision: Accept only public `http/https` URLs, reject private/internal ranges, and record redirects in outputs.
- Rationale: Aligns with clarified security scope and prevents internal network probing from workflow execution.
- Alternatives considered:
  - Allow all URLs: security risk and likely unreachable from runners.
  - Domain allowlist-only: overly restrictive for exploratory PoC.

## Decision 6: Report schema for comparison and traceability

- Decision: Persist per-run metadata, per-URL statuses, scanner findings summaries, redirect chain, and issue linkage.
- Rationale: Supports historical review, reproducibility, and direct ALFA-versus-axe analysis.
- Alternatives considered:
  - Human-readable summary only: insufficient for deeper analysis.
  - Raw tool outputs only: poor usability for stakeholders.

## Outstanding Risks and Mitigations

- Risk: Long-running scans for 100 URLs may exceed default workflow timing expectations.
  - Mitigation: Batch processing and explicit timeout/error annotations per URL.
- Risk: Tool output formats evolve over time.
  - Mitigation: Keep normalized schema versioned and include raw output snapshots.
- Risk: Malicious or noisy submissions via public form.
  - Mitigation: Require authenticated GitHub issue creation and strict payload validation.