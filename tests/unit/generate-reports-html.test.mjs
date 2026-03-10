import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { 
  findAllReports, 
  sortReportsByTime, 
  generateTableRows,
  generateReportsHtml
} from '../../scanner/generate-reports-html.mjs';

describe('generate-reports-html', () => {
  describe('findAllReports', () => {
    it('should find all reports in the reports directory', () => {
      const reports = findAllReports('reports');
      assert.ok(reports.length > 0, 'Should find at least one report');
      
      // Check that each report has the expected structure
      for (const report of reports) {
        assert.ok(report.path, 'Report should have a path');
        assert.ok(report.data, 'Report should have data');
        assert.ok(report.data.issueNumber, 'Report data should have issueNumber');
        assert.ok(report.data.scannedAt, 'Report data should have scannedAt');
      }
    });
  });

  describe('sortReportsByTime', () => {
    it('should sort reports by timestamp, most recent first', () => {
      const reports = [
        {
          path: 'reports/issues/issue-1/2026-02-21T12-48-19-132Z',
          data: { scannedAt: '2026-02-21T12:48:19.091Z' }
        },
        {
          path: 'reports/issues/issue-1/2026-02-21T16-37-55-764Z',
          data: { scannedAt: '2026-02-21T16:37:55.764Z' }
        },
        {
          path: 'reports/issues/issue-18/2026-02-21T20-55-47-400Z',
          data: { scannedAt: '2026-02-21T20:55:47.400Z' }
        }
      ];
      
      const sorted = sortReportsByTime(reports);
      
      // Most recent should be first
      assert.equal(sorted[0].data.scannedAt, '2026-02-21T20:55:47.400Z');
      assert.equal(sorted[1].data.scannedAt, '2026-02-21T16:37:55.764Z');
      assert.equal(sorted[2].data.scannedAt, '2026-02-21T12:48:19.091Z');
    });
  });

  describe('generateTableRows', () => {
    it('should generate HTML table rows for reports', () => {
      const reports = [
        {
          path: 'reports/issues/issue-1/2026-02-21T16-37-55-764Z',
          data: {
            issueNumber: 1,
            issueUrl: 'https://github.com/mgifford/open-scans/issues/1',
            scanTitle: 'GSA.gov',
            scannedAt: '2026-02-21T16:37:55.764Z',
            acceptedCount: 13,
            alfaTotals: { passed: 23694, failed: 1698, cantTell: 125 },
            axeTotals: { passed: 0, failed: 0, cantTell: 0 }
          }
        }
      ];
      
      const html = generateTableRows(reports);
      
      assert.ok(html.includes('#1'), 'Should include issue number');
      assert.ok(html.includes('GSA.gov'), 'Should include scan title');
      assert.ok(html.includes('13 accepted'), 'Should include accepted count');
      assert.ok(html.includes('23694 passed'), 'Should include passed count');
      assert.ok(html.includes('1698 failed'), 'Should include failed count');
      assert.ok(html.includes('125 can\'t tell'), 'Should include can\'t tell count');
      assert.ok(html.includes('/report.md'), 'Should include markdown link');
      assert.ok(html.includes('/report.csv'), 'Should include CSV link');
      assert.ok(html.includes('/report-overlap.md'), 'Should include overlap report link');
      assert.ok(html.includes('/report.json'), 'Should include JSON link');
    });

    it('should handle reports without axeTotals (old format)', () => {
      const reports = [
        {
          path: 'reports/issues/issue-1/2026-02-21T12-48-19-132Z',
          data: {
            issueNumber: 1,
            issueUrl: 'https://github.com/mgifford/open-scans/issues/1',
            scanTitle: 'GSA.gov',
            scannedAt: '2026-02-21T12:48:19.132Z',
            acceptedCount: 13,
            alfaTotals: { passed: 23776, failed: 1698, cantTell: 125 }
            // No axeTotals
          }
        }
      ];
      
      const html = generateTableRows(reports);
      
      assert.ok(html.includes('23776 passed'), 'Should include ALFA passed count');
      assert.ok(html.includes('1698 failed'), 'Should include ALFA failed count');
      assert.ok(html.includes('125 can\'t tell'), 'Should include ALFA can\'t tell count');
    });

    it('should combine ALFA and axe totals for new format', () => {
      const reports = [
        {
          path: 'reports/issues/issue-18/2026-02-21T20-55-47-400Z',
          data: {
            issueNumber: 18,
            issueUrl: 'https://github.com/mgifford/open-scans/issues/18',
            scanTitle: 'Government of Canada',
            scannedAt: '2026-02-21T20:55:47.400Z',
            acceptedCount: 46,
            alfaTotals: { passed: 41833, failed: 2201, cantTell: 2088 },
            axeTotals: { passed: 33281, failed: 76, cantTell: 1034 }
          }
        }
      ];
      
      const html = generateTableRows(reports);
      
      // Should combine: 41833 + 33281 = 75114
      assert.ok(html.includes('75114 passed'), 'Should combine ALFA and axe passed counts');
      // Should combine: 2201 + 76 = 2277
      assert.ok(html.includes('2277 failed'), 'Should combine ALFA and axe failed counts');
      // Should combine: 2088 + 1034 = 3122
      assert.ok(html.includes('3122 can\'t tell'), 'Should combine ALFA and axe can\'t tell counts');
    });
  });

  describe('generateReportsHtml', () => {
    it('should generate a complete HTML document', () => {
      const reports = [
        {
          path: 'reports/issues/issue-1/2026-02-21T16-37-55-764Z',
          data: {
            issueNumber: 1,
            issueUrl: 'https://github.com/mgifford/open-scans/issues/1',
            scanTitle: 'GSA.gov',
            scannedAt: '2026-02-21T16:37:55.764Z',
            acceptedCount: 13,
            alfaTotals: { passed: 23694, failed: 1698, cantTell: 125 },
            axeTotals: { passed: 0, failed: 0, cantTell: 0 }
          }
        }
      ];
      
      const html = generateReportsHtml(reports);
      
      assert.ok(html.includes('<!DOCTYPE html>'), 'Should include DOCTYPE');
      assert.ok(html.includes('<html lang="en">'), 'Should include html tag');
      assert.ok(html.includes('Scan Reports'), 'Should include title');
      assert.ok(html.includes('GSA.gov'), 'Should include report data');
      assert.ok(html.includes('Join our GitHub Community'), 'Should include footer');
    });

    it('should show message when no reports available', () => {
      const html = generateReportsHtml([]);
      
      assert.ok(html.includes('No reports available yet'), 'Should show no reports message');
      assert.ok(!html.includes('<table>'), 'Should not include table when no reports');
    });
  });
});
