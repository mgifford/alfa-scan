# Data Model: Issue-Driven Accessibility Scanner

## Entity: ScanRequest

- Description: A normalized request extracted from a scan issue.
- Key fields:
  - `requestId` (string, unique)
  - `issueNumber` (integer)
  - `issueUrl` (string)
  - `submittedBy` (string, GitHub login)
  - `submittedAt` (datetime)
  - `urlInputMode` (enum: `line`, `csv`, `mixed`)
  - `requestedUrls` (array of URL strings, max 100)
  - `validatedUrlCount` (integer)
  - `rejectedUrlCount` (integer)
  - `status` (enum: `accepted`, `rejected`, `processing`, `completed`, `failed`)

## Entity: TargetUrl

- Description: A single URL entry derived from a scan request.
- Key fields:
  - `targetId` (string, unique within run)
  - `requestId` (string, foreign key to `ScanRequest`)
  - `submittedUrl` (string)
  - `normalizedUrl` (string)
  - `isPublicReachable` (boolean)
  - `validationError` (string, nullable)
  - `redirected` (boolean)
  - `finalUrl` (string, nullable)
  - `httpStatus` (integer, nullable)

## Entity: ScanRun

- Description: One workflow execution processing a scan request.
- Key fields:
  - `runId` (string, unique)
  - `requestId` (string, foreign key to `ScanRequest`)
  - `workflowRunId` (string)
  - `startedAt` (datetime)
  - `completedAt` (datetime, nullable)
  - `durationSeconds` (integer, nullable)
  - `status` (enum: `running`, `completed`, `partial`, `failed`)
  - `totals` (object: counts by success/failure per tool)

## Entity: ToolResult

- Description: Scanner output for a single tool on a single target URL.
- Key fields:
  - `toolResultId` (string, unique)
  - `runId` (string, foreign key to `ScanRun`)
  - `targetId` (string, foreign key to `TargetUrl`)
  - `tool` (enum: `alfa`, `axe`)
  - `executionStatus` (enum: `success`, `failed`, `skipped`)
  - `errorMessage` (string, nullable)
  - `findingsSummary` (object: normalized counts)
  - `rawOutputPath` (string)

## Entity: ComparisonReport

- Description: Published run-level summary for reviewer consumption.
- Key fields:
  - `reportId` (string, unique)
  - `runId` (string, foreign key to `ScanRun`)
  - `publishedAt` (datetime)
  - `publicUrl` (string)
  - `requestReference` (object: issue number + URL)
  - `perUrlComparisons` (array of normalized comparison rows)
  - `aggregateComparison` (object)
  - `schemaVersion` (string)

## Relationships

- One `ScanRequest` has many `TargetUrl`.
- One `ScanRequest` has one or more `ScanRun`.
- One `ScanRun` has many `ToolResult`.
- One `TargetUrl` has up to two `ToolResult` entries per run (ALFA and axe).
- One `ScanRun` produces one `ComparisonReport`.

## State Transitions

- `ScanRequest.status`: `accepted` → `processing` → (`completed` | `failed`)
- `ScanRun.status`: `running` → (`completed` | `partial` | `failed`)
- `ToolResult.executionStatus`: (`success` | `failed` | `skipped`) terminal per run