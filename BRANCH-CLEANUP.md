# Branch Cleanup Instructions

## Summary

All work from the following branches has been successfully merged into the `main` branch through pull requests. These branches are now stale and can be safely deleted.

## Branches to Delete

| Branch Name | PR # | Status | Notes |
|-------------|------|--------|-------|
| `copilot/allow-engine-specification` | #46 | ✅ Merged | Engine selection feature |
| `copilot/fix-browser-launch-error` | #40 | ✅ Merged | Browser cleanup improvements |
| `copilot/fix-browser-launch-error-again` | #42 | ✅ Merged | .achecker.yml config |
| `copilot/fix-frame-detached-error` | #49 | ✅ Merged | Detached page error handling |
| `copilot/fix-protocol-error-connection-closed` | #45 | ✅ Merged | Timeout protocol error fix |
| `copilot/fix-puppeteer-connection-error` | N/A | ⚠️ No work | Only contains empty "Initial plan" commit |
| `copilot/investigate-scan-issue-41` | #43 | ✅ Merged | Workflow documentation and ASCII |
| `copilot/prepend-scan-title` | #53 | ✅ Merged | Prefix logic improvements |
| `copilot/review-report-analysis-changes` | #50 | ✅ Merged | Accessibility improvements |
| `copilot/update-readme-instructions` | #55 | ✅ Merged | README improvements |

## Verification

You can verify that these branches have been merged by running:

```bash
# Check for unique commits in each branch that aren't in main
git fetch --all
for branch in copilot/allow-engine-specification copilot/fix-browser-launch-error copilot/fix-browser-launch-error-again copilot/fix-frame-detached-error copilot/fix-protocol-error-connection-closed copilot/fix-puppeteer-connection-error copilot/investigate-scan-issue-41 copilot/prepend-scan-title copilot/review-report-analysis-changes copilot/update-readme-instructions; do
  commits=$(git log origin/$branch --not origin/main --oneline 2>/dev/null | wc -l)
  echo "$branch: $commits unique commits"
done
```

Expected output: All branches should show "0 unique commits" (except `copilot/fix-puppeteer-connection-error` which has 1 empty commit).

## Manual Cleanup Instructions

### Option 1: Delete Branches via GitHub UI

1. Go to https://github.com/mgifford/alfa-scan/branches
2. Click the trash icon next to each of the branches listed above
3. Confirm the deletion

### Option 2: Delete Branches via Command Line

Run the provided cleanup script (see `cleanup-branches.sh`) or execute these commands:

```bash
# Delete remote branches
git push origin --delete copilot/allow-engine-specification
git push origin --delete copilot/fix-browser-launch-error
git push origin --delete copilot/fix-browser-launch-error-again
git push origin --delete copilot/fix-frame-detached-error
git push origin --delete copilot/fix-protocol-error-connection-closed
git push origin --delete copilot/fix-puppeteer-connection-error
git push origin --delete copilot/investigate-scan-issue-41
git push origin --delete copilot/prepend-scan-title
git push origin --delete copilot/review-report-analysis-changes
git push origin --delete copilot/update-readme-instructions
```

### Option 3: Use the Cleanup Script

A convenience script is provided in `cleanup-branches.sh`:

```bash
# Make the script executable (if not already)
chmod +x cleanup-branches.sh

# Run the script with bash
bash cleanup-branches.sh

# Or if executable, run directly
./cleanup-branches.sh
```

**Note:** The script requires bash. If you encounter errors, ensure you're running it with `bash cleanup-branches.sh`.

## Local Branch Cleanup

After deleting the remote branches, clean up your local repository:

```bash
# Prune remote tracking branches
git fetch --prune

# Delete local branches (if they exist)
git branch -D copilot/allow-engine-specification 2>/dev/null || true
git branch -D copilot/fix-browser-launch-error 2>/dev/null || true
git branch -D copilot/fix-browser-launch-error-again 2>/dev/null || true
git branch -D copilot/fix-frame-detached-error 2>/dev/null || true
git branch -D copilot/fix-protocol-error-connection-closed 2>/dev/null || true
git branch -D copilot/fix-puppeteer-connection-error 2>/dev/null || true
git branch -D copilot/investigate-scan-issue-41 2>/dev/null || true
git branch -D copilot/prepend-scan-title 2>/dev/null || true
git branch -D copilot/review-report-analysis-changes 2>/dev/null || true
git branch -D copilot/update-readme-instructions 2>/dev/null || true
```

## Impact

Deleting these branches will:
- ✅ Clean up the repository branch list
- ✅ Improve repository navigation and clarity
- ✅ Have no impact on the `main` branch or any merged code
- ✅ Not affect any existing pull requests or issues

The work from all these branches is preserved in the `main` branch through the merge commits listed in the table above.
