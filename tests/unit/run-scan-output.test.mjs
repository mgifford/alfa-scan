import test from "node:test";
import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { writeFileSync, mkdirSync, rmSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = fileURLToPath(new URL("../../", import.meta.url));

/**
 * Test suite to verify that run-scan.mjs outputs JSON to stdout
 * and progress messages to stderr, preventing JSON parsing errors.
 */

test("run-scan.mjs outputs valid JSON to stdout", () => {
  const testDir = "/tmp/run-scan-output-test";
  const eventPath = join(testDir, "event.json");
  const outputDir = join(testDir, "output");

  try {
    // Create test directory
    mkdirSync(testDir, { recursive: true });

    // Create a minimal valid issue event payload
    const eventPayload = {
      action: "opened",
      issue: {
        number: 999,
        title: "SCAN: Test Output Format",
        body: "https://example.com/",
        html_url: "https://github.com/test/repo/issues/999",
        user: {
          login: "testuser"
        },
        created_at: "2026-02-25T00:00:00Z"
      }
    };

    writeFileSync(eventPath, JSON.stringify(eventPayload, null, 2));

    // Run the scanner
    const result = spawnSync(
      process.execPath,
      ["scanner/run-scan.mjs", eventPath, outputDir],
      {
        cwd: repoRoot,
        encoding: "utf8",
        maxBuffer: 10 * 1024 * 1024
      }
    );

    // Check that the command succeeded
    assert.equal(result.status, 0, `Scanner failed with status ${result.status}\nStderr: ${result.stderr}`);

    // Verify stdout contains valid JSON
    assert.ok(result.stdout.trim().length > 0, "stdout should not be empty");
    
    let parsedOutput;
    assert.doesNotThrow(() => {
      parsedOutput = JSON.parse(result.stdout);
    }, "stdout should contain valid JSON");

    // Verify the JSON structure
    assert.ok(parsedOutput, "Parsed output should exist");
    assert.equal(typeof parsedOutput.skipped, "boolean", "Output should have 'skipped' field");
    
    if (!parsedOutput.skipped) {
      assert.equal(typeof parsedOutput.issueNumber, "number", "Output should have 'issueNumber' field");
      assert.equal(typeof parsedOutput.scanTitle, "string", "Output should have 'scanTitle' field");
      assert.equal(typeof parsedOutput.acceptedCount, "number", "Output should have 'acceptedCount' field");
    }

    // Verify progress messages are in stderr, not stdout
    assert.ok(result.stderr.length > 0, "stderr should contain progress messages");
    
    // Check that stderr contains expected progress patterns
    const stderrContent = result.stderr.toLowerCase();
    const hasProgressIndicators = 
      stderrContent.includes("scanned") || 
      stderrContent.includes("scanning") ||
      stderrContent.includes("total scan time");
    
    assert.ok(hasProgressIndicators, "stderr should contain progress indicators");

    // Verify stdout does NOT contain progress messages
    const stdoutLower = result.stdout.toLowerCase();
    const hasNoProgressInStdout = 
      !stdoutLower.includes("scanned https://") &&
      !stdoutLower.includes("[1/") &&
      !stdoutLower.includes("total scan time:");
    
    assert.ok(hasNoProgressInStdout, "stdout should not contain progress messages");

  } finally {
    // Clean up test directory
    rmSync(testDir, { recursive: true, force: true });
  }
});

test("run-scan.mjs skipped scan outputs valid JSON to stdout", () => {
  const testDir = "/tmp/run-scan-output-test-skipped";
  const eventPath = join(testDir, "event.json");
  const outputDir = join(testDir, "output");

  try {
    // Create test directory
    mkdirSync(testDir, { recursive: true });

    // Create an issue event that should be skipped (no "SCAN:" prefix)
    const eventPayload = {
      action: "opened",
      issue: {
        number: 1000,
        title: "Regular Issue Without SCAN Prefix",
        body: "https://example.com/",
        html_url: "https://github.com/test/repo/issues/1000",
        user: {
          login: "testuser"
        },
        created_at: "2026-02-25T00:00:00Z"
      }
    };

    writeFileSync(eventPath, JSON.stringify(eventPayload, null, 2));

    // Run the scanner
    const result = spawnSync(
      process.execPath,
      ["scanner/run-scan.mjs", eventPath, outputDir],
      {
        cwd: repoRoot,
        encoding: "utf8",
        maxBuffer: 10 * 1024 * 1024
      }
    );

    // Check that the command succeeded (exit 0 for skipped scans with valid title check)
    assert.equal(result.status, 0, `Scanner failed with status ${result.status}\nStderr: ${result.stderr}\nStdout: ${result.stdout}`);

    // Verify stdout contains valid JSON
    let parsedOutput;
    assert.doesNotThrow(() => {
      parsedOutput = JSON.parse(result.stdout);
    }, "stdout should contain valid JSON even for skipped scans");

    // Verify the skipped response structure
    assert.equal(parsedOutput.skipped, true, "Output should indicate scan was skipped");
    assert.equal(typeof parsedOutput.reason, "string", "Output should have 'reason' field");
    assert.ok(parsedOutput.reason.includes("SCAN:"), "Reason should mention SCAN: prefix requirement");

  } finally {
    // Clean up test directory
    rmSync(testDir, { recursive: true, force: true });
  }
});
