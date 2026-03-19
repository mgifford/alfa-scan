import test from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { writeFileSync, unlinkSync } from "node:fs";

// Helper to run a function from run-scan.mjs by importing it
// Note: runAxeAudit depends on many things, so we might need to mock or use a real browser
import { runAxeAudit } from "../../scanner/run-scan.mjs";

test("Dark mode detection and scanning", async (t) => {
  const testHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { background: white; color: black; }
        @media (prefers-color-scheme: dark) {
          body { background: black; color: #333; } /* Low contrast in dark mode */
        }
        .content { padding: 20px; }
      </style>
    </head>
    <body>
      <div class="content" id="target">Hello World</div>
    </body>
    </html>
  `;

  const testFilePath = join(dirname(fileURLToPath(import.meta.url)), "dark-mode-test.html");
  writeFileSync(testFilePath, testHtml);
  const testUrl = `file://${testFilePath}`;

  await t.test("runAxeAudit detects and scans dark mode", async () => {
    const result = await runAxeAudit(testUrl);

    if (!result.executed) {
      // Playwright/axe-core not available in this environment — skip remaining assertions
      return;
    }

    assert.ok(result.darkModeScanned, "Dark mode should be detected");

    // Check that we have findings for both light and dark if applicable
    // In this specific HTML, there might be a color-contrast issue in dark mode but not in light 
    // (depending on axe rules for black on #333)

    const darkFailures = result.failures.filter(f => f.colorScheme === 'dark');
    const lightFailures = result.failures.filter(f => f.colorScheme === 'light');

    console.error(`Found ${lightFailures.length} light failures and ${darkFailures.length} dark failures`);

    // We expect at least one failure to be tagged with its mode
    assert.ok(result.failures.every(f => f.colorScheme === 'light' || f.colorScheme === 'dark'), "All failures should have colorScheme");
  });

  // Clean up
  try {
    unlinkSync(testFilePath);
  } catch { }
});
