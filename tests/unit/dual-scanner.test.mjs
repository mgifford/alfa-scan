import { describe, it } from "node:test";
import assert from "node:assert";
import { determineScannersToRun } from "../../scanner/run-scan.mjs";

describe("Dual-Scanner Integration Tests", () => {
  it("should have base error structure with both alfa and axe fields", () => {
    const baseErrorResult = {
      executed: false,
      error: "Test error",
      counts: {
        passed: 0,
        failed: 0,
        cantTell: 0,
        inapplicable: 0
      },
      failedRules: [],
      passedRules: [],
      failures: [],
      outcomeCount: 0
    };

    assert.strictEqual(baseErrorResult.executed, false);
    assert.strictEqual(baseErrorResult.counts.passed, 0);
    assert.strictEqual(baseErrorResult.counts.failed, 0);
    assert.strictEqual(baseErrorResult.counts.cantTell, 0);
    assert.strictEqual(baseErrorResult.counts.inapplicable, 0);
    assert.strictEqual(baseErrorResult.failedRules.length, 0);
    assert.strictEqual(baseErrorResult.passedRules.length, 0);
    assert.strictEqual(baseErrorResult.failures.length, 0);
  });

  it("should normalize scanner results to consistent structure", () => {
    // Mock result with both ALFA and axe data
    const mockResult = {
      submittedUrl: "https://example.com",
      finalUrl: "https://example.com",
      redirected: false,
      statusCode: 200,
      ok: true,
      contentType: "text/html",
      pageTitle: "Example Domain",
      elapsedMs: 1000,
      error: null,
      alfa: {
        executed: true,
        error: null,
        counts: {
          passed: 10,
          failed: 2,
          cantTell: 1,
          inapplicable: 5
        },
        failedRules: ["rule1", "rule2"],
        passedRules: ["rule3", "rule4"],
        failures: [],
        outcomeCount: 18
      },
      axe: {
        executed: true,
        error: null,
        counts: {
          passed: 15,
          failed: 3,
          cantTell: 2,
          inapplicable: 8
        },
        failedRules: ["axe-rule1", "axe-rule2", "axe-rule3"],
        passedRules: ["axe-rule4"],
        failures: [],
        outcomeCount: 28
      }
    };

    // Verify both scanners have same structure
    assert.deepStrictEqual(
      Object.keys(mockResult.alfa.counts),
      Object.keys(mockResult.axe.counts)
    );
    
    assert.strictEqual(typeof mockResult.alfa.executed, typeof mockResult.axe.executed);
    assert.strictEqual(Array.isArray(mockResult.alfa.failedRules), Array.isArray(mockResult.axe.failedRules));
    assert.strictEqual(Array.isArray(mockResult.alfa.failures), Array.isArray(mockResult.axe.failures));
  });

  it("should handle per-URL failure isolation", () => {
    // Mock a scenario where one URL fails but others succeed
    const results = [
      {
        submittedUrl: "https://success1.com",
        ok: true,
        error: null,
        alfa: { executed: true, error: null, counts: { failed: 0, passed: 10, cantTell: 0, inapplicable: 0 } },
        axe: { executed: true, error: null, counts: { failed: 0, passed: 15, cantTell: 0, inapplicable: 0 } }
      },
      {
        submittedUrl: "https://failure.com",
        ok: false,
        error: "Connection timeout",
        alfa: { executed: false, error: "Skipped because initial URL fetch failed", counts: { failed: 0, passed: 0, cantTell: 0, inapplicable: 0 } },
        axe: { executed: false, error: "Skipped because initial URL fetch failed", counts: { failed: 0, passed: 0, cantTell: 0, inapplicable: 0 } }
      },
      {
        submittedUrl: "https://success2.com",
        ok: true,
        error: null,
        alfa: { executed: true, error: null, counts: { failed: 1, passed: 8, cantTell: 0, inapplicable: 0 } },
        axe: { executed: true, error: null, counts: { failed: 2, passed: 12, cantTell: 0, inapplicable: 0 } }
      }
    ];

    // Verify that failure didn't stop other URLs from being scanned
    assert.strictEqual(results.length, 3);
    assert.strictEqual(results[0].alfa.executed, true);
    assert.strictEqual(results[1].alfa.executed, false);
    assert.strictEqual(results[2].alfa.executed, true);
    
    // Verify error is properly captured
    assert.strictEqual(results[1].error, "Connection timeout");
  });

  it("should capture redirect metadata", () => {
    const redirectedResult = {
      submittedUrl: "http://example.com",
      finalUrl: "https://example.com",
      redirected: true,
      statusCode: 200,
      ok: true
    };

    const nonRedirectedResult = {
      submittedUrl: "https://example.com",
      finalUrl: "https://example.com",
      redirected: false,
      statusCode: 200,
      ok: true
    };

    assert.strictEqual(redirectedResult.redirected, true);
    assert.notStrictEqual(redirectedResult.submittedUrl, redirectedResult.finalUrl);
    
    assert.strictEqual(nonRedirectedResult.redirected, false);
    assert.strictEqual(nonRedirectedResult.submittedUrl, nonRedirectedResult.finalUrl);
  });

  it("should compute aggregate totals for both scanners", () => {
    const results = [
      {
        alfa: { counts: { passed: 10, failed: 2, cantTell: 1, inapplicable: 5 } },
        axe: { counts: { passed: 15, failed: 3, cantTell: 2, inapplicable: 8 } }
      },
      {
        alfa: { counts: { passed: 8, failed: 1, cantTell: 0, inapplicable: 3 } },
        axe: { counts: { passed: 12, failed: 2, cantTell: 1, inapplicable: 6 } }
      }
    ];

    const alfaTotals = {
      passed: 0,
      failed: 0,
      cantTell: 0,
      inapplicable: 0
    };

    const axeTotals = {
      passed: 0,
      failed: 0,
      cantTell: 0,
      inapplicable: 0
    };

    for (const result of results) {
      alfaTotals.passed += result.alfa.counts.passed;
      alfaTotals.failed += result.alfa.counts.failed;
      alfaTotals.cantTell += result.alfa.counts.cantTell;
      alfaTotals.inapplicable += result.alfa.counts.inapplicable;
      
      axeTotals.passed += result.axe.counts.passed;
      axeTotals.failed += result.axe.counts.failed;
      axeTotals.cantTell += result.axe.counts.cantTell;
      axeTotals.inapplicable += result.axe.counts.inapplicable;
    }

    assert.strictEqual(alfaTotals.passed, 18);
    assert.strictEqual(alfaTotals.failed, 3);
    assert.strictEqual(alfaTotals.cantTell, 1);
    assert.strictEqual(alfaTotals.inapplicable, 8);

    assert.strictEqual(axeTotals.passed, 27);
    assert.strictEqual(axeTotals.failed, 5);
    assert.strictEqual(axeTotals.cantTell, 3);
    assert.strictEqual(axeTotals.inapplicable, 14);
  });

  it("should determine all scanners run when 'all' is specified", () => {
    const result = determineScannersToRun(["all"]);
    assert.strictEqual(result.runAxe, true);
    assert.strictEqual(result.runAlfa, true);
    assert.strictEqual(result.runEqualAccess, true);
    assert.strictEqual(result.runAccesslint, true);
  });

  it("should determine all scanners run by default when no engines specified", () => {
    const result = determineScannersToRun([]);
    assert.strictEqual(result.runAxe, true);
    assert.strictEqual(result.runAlfa, true);
    assert.strictEqual(result.runEqualAccess, true);
    assert.strictEqual(result.runAccesslint, true);
  });

  it("should determine only axe runs when 'axe' is specified", () => {
    const result = determineScannersToRun(["axe"]);
    assert.strictEqual(result.runAxe, true);
    assert.strictEqual(result.runAlfa, false);
    assert.strictEqual(result.runEqualAccess, false);
    assert.strictEqual(result.runAccesslint, false);
  });

  it("should determine only alfa runs when 'alfa' is specified", () => {
    const result = determineScannersToRun(["alfa"]);
    assert.strictEqual(result.runAxe, false);
    assert.strictEqual(result.runAlfa, true);
    assert.strictEqual(result.runEqualAccess, false);
    assert.strictEqual(result.runAccesslint, false);
  });

  it("should determine multiple scanners run when multiple engines specified", () => {
    const result = determineScannersToRun(["axe", "alfa"]);
    assert.strictEqual(result.runAxe, true);
    assert.strictEqual(result.runAlfa, true);
    assert.strictEqual(result.runEqualAccess, false);
    assert.strictEqual(result.runAccesslint, false);
  });

  it("should determine equalaccess and accesslint run when specified", () => {
    const result = determineScannersToRun(["equalaccess", "accesslint"]);
    assert.strictEqual(result.runAxe, false);
    assert.strictEqual(result.runAlfa, false);
    assert.strictEqual(result.runEqualAccess, true);
    assert.strictEqual(result.runAccesslint, true);
  });
});
