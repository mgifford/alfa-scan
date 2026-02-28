#!/bin/bash
# Script to delete merged branches from the remote repository
# Run this script after verifying that all branches have been merged into main

# Verify we're running with bash
if [ -z "$BASH_VERSION" ]; then
  echo "Error: This script requires bash. Please run with: bash cleanup-branches.sh"
  exit 1
fi

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# List of branches to delete
branches=(
  "copilot/add-qualweb-scanner-support"
  "copilot/allow-engine-specification"
  "copilot/consolidate-branches-into-main"
  "copilot/fix-browser-launch-error"
  "copilot/fix-browser-launch-error-again"
  "copilot/fix-frame-detached-error"
  "copilot/fix-issue-from-actions-run"
  "copilot/fix-protocol-error-connection-closed"
  "copilot/fix-puppeteer-connection-error"
  "copilot/fix-syntax-error-in-script"
  "copilot/investigate-scan-issue-41"
  "copilot/merge-and-cleanup-branches"
  "copilot/prepend-scan-title"
  "copilot/review-report-analysis-changes"
  "copilot/update-readme-instructions"
)

echo -e "${YELLOW}Branch Cleanup Script${NC}"
echo "This script will delete the following remote branches:"
echo ""

for branch in "${branches[@]}"; do
  echo "  - $branch"
done

echo ""
echo -e "${YELLOW}Warning: This action cannot be undone!${NC}"
echo -e "All work from these branches has been merged into main."
echo ""
read -p "Are you sure you want to continue? (yes/no): " confirm

if [ "$confirm" != "yes" ]; then
  echo -e "${RED}Aborted.${NC}"
  exit 1
fi

echo ""
echo -e "${GREEN}Starting branch cleanup...${NC}"
echo ""

deleted_count=0
failed_count=0
failed_branches=()

for branch in "${branches[@]}"; do
  echo -n "Deleting $branch... "
  # Capture both stdout and stderr to show errors if deletion fails
  error_output=$(git push origin --delete "$branch" 2>&1)
  exit_code=$?
  
  if [ $exit_code -eq 0 ]; then
    echo -e "${GREEN}✓${NC}"
    ((deleted_count++))
  else
    echo -e "${RED}✗${NC}"
    ((failed_count++))
    failed_branches+=("$branch")
    # Show the error message for troubleshooting
    echo "  Error: $error_output"
  fi
done

echo ""
echo "Cleanup complete!"
echo -e "${GREEN}Successfully deleted: $deleted_count${NC}"

if [ $failed_count -gt 0 ]; then
  echo -e "${RED}Failed to delete: $failed_count${NC}"
  echo ""
  echo "Failed branches:"
  for branch in "${failed_branches[@]}"; do
    echo "  - $branch"
  done
  echo ""
  echo "These branches may have already been deleted or you may lack permissions."
fi

echo ""
echo "Pruning local remote-tracking branches..."
git fetch --prune

echo ""
echo -e "${GREEN}All done!${NC}"
echo ""
echo "Note: If you have local copies of these branches, you can delete them with:"
echo "  git branch -D <branch-name>"
