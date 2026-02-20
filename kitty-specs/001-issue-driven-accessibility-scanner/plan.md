# Implementation Plan: Issue-Driven Accessibility Scanner

**Branch**: `001-issue-driven-accessibility-scanner` | **Date**: 2026-02-20 | **Spec**: `kitty-specs/001-issue-driven-accessibility-scanner/spec.md`
**Input**: Feature specification from `/kitty-specs/001-issue-driven-accessibility-scanner/spec.md`

## Summary

Build a GitHub-native PoC that accepts up to 100 public URLs from a GitHub Pages form, creates a scan request issue, runs both ALFA and axe in GitHub Actions, and publishes public comparison reports to GitHub Pages. The implementation is Node.js-first to maximize scanner compatibility and simplify side-by-side output normalization.

## Technical Context

**Language/Version**: Node.js 20.x (GitHub Actions runner)  
**Primary Dependencies**: GitHub Actions workflows, ALFA scanner packages, axe scanner tooling, lightweight Node report-normalization utilities  
**Storage**: Repository artifacts + generated static report files published via GitHub Pages  
**Testing**: Node test runner + workflow-level validation scenarios in Actions  
**Target Platform**: GitHub Actions (Ubuntu runners) and GitHub Pages (static hosting)
**Project Type**: Web automation + static report publishing  
**Performance Goals**: Process up to 100 URLs per request; complete most dual-tool scans within 30 minutes  
**Constraints**: Public reports only; authenticated GitHub submitters; block private/internal URLs; preserve redirect trails in outputs  
**Scale/Scope**: PoC-quality single-repo implementation focused on reliable automation and report comparability

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- No constitution file found at `.kittify/memory/constitution.md`; constitution gate is skipped for this feature.
- Re-check after Phase 1 design: still skipped unless constitution is added before implementation.

## Project Structure

### Documentation (this feature)

```
kitty-specs/001-issue-driven-accessibility-scanner/
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── contracts/
│   └── openapi.yaml
└── tasks.md
```

### Source Code (repository root)

```
.github/
└── workflows/
    ├── scan-request.yml
    └── publish-pages.yml

pages/
├── index.html
├── submit.js
└── assets/

scanner/
├── run-scan.mjs
├── parse-issue.mjs
├── validate-targets.mjs
├── compare-results.mjs
└── schemas/

reports/
├── index.json
└── runs/

tests/
├── unit/
├── integration/
└── fixtures/
```

**Structure Decision**: Single-repo Node automation plus static Pages assets. Workflow logic lives in `.github/workflows/`, scanner orchestration in `scanner/`, and published artifacts in `reports/` and `pages/`.

## Complexity Tracking

*Fill ONLY if Constitution Check has violations that must be justified*

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| None | N/A | N/A |