#!/usr/bin/env node

import { readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

/**
 * Recursively find all report.json files in the reports directory
 * @param {string} reportsDir - Path to the reports directory
 * @returns {Array<{path: string, data: object}>} Array of report data with paths
 */
export function findAllReports(reportsDir) {
  const reports = [];
  
  try {
    const issuesDir = join(reportsDir, 'issues');
    const issueDirs = readdirSync(issuesDir);
    
    for (const issueDir of issueDirs) {
      const issuePath = join(issuesDir, issueDir);
      const timestamps = readdirSync(issuePath);
      
      for (const timestamp of timestamps) {
        const reportPath = join(issuePath, timestamp, 'report.json');
        try {
          const data = JSON.parse(readFileSync(reportPath, 'utf8'));
          reports.push({
            path: `reports/issues/${issueDir}/${timestamp}`,
            data
          });
        } catch (err) {
          console.error(`Failed to read ${reportPath}:`, err.message);
        }
      }
    }
  } catch (err) {
    console.error(`Failed to read reports directory:`, err.message);
  }
  
  return reports;
}

/**
 * Sort reports by timestamp, most recent first
 * @param {Array<{path: string, data: object}>} reports
 * @returns {Array<{path: string, data: object}>}
 */
export function sortReportsByTime(reports) {
  return reports.sort((a, b) => {
    const timeA = new Date(a.data.scannedAt).getTime();
    const timeB = new Date(b.data.scannedAt).getTime();
    return timeB - timeA; // Most recent first
  });
}

/**
 * Generate HTML table rows for reports
 * @param {Array<{path: string, data: object}>} reports
 * @returns {string} HTML table rows
 */
export function generateTableRows(reports) {
  return reports.map(({ path, data }) => {
    const scannedDate = new Date(data.scannedAt);
    const formattedDate = scannedDate.toLocaleString('en-US', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    });
    
    // Calculate total results from both scanners
    // Handle both old (ALFA-only) and new (ALFA + axe) report formats
    const alfaTotals = data.alfaTotals || { passed: 0, failed: 0, cantTell: 0 };
    const axeTotals = data.axeTotals || { passed: 0, failed: 0, cantTell: 0 };
    const totalPassed = alfaTotals.passed + axeTotals.passed;
    const totalFailed = alfaTotals.failed + axeTotals.failed;
    const totalCantTell = alfaTotals.cantTell + axeTotals.cantTell;
    
    return `
        <tr>
          <td><a href="${data.issueUrl}">#${data.issueNumber}</a></td>
          <td>${escapeHtml(data.scanTitle)}</td>
          <td class="date">${formattedDate}</td>
          <td>${data.acceptedCount} accepted</td>
          <td>
            <span class="badge badge-success">${totalPassed} passed</span>
            <span class="badge badge-danger">${totalFailed} failed</span>
            <span class="badge badge-warning">${totalCantTell} can't tell</span>
          </td>
          <td class="links">
            <a href="${path}/report.html">HTML</a>
            <a href="${path}/report.md">Markdown</a>
            <a href="${path}/report.csv">CSV</a>
            <a href="${path}/report.json">JSON</a>
          </td>
        </tr>`;
  }).join('\n        ');
}

/**
 * Escape HTML special characters
 * @param {string} text
 * @returns {string}
 */
function escapeHtml(text) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, char => map[char]);
}

/**
 * Generate the complete reports.html page
 * @param {Array<{path: string, data: object}>} reports
 * @returns {string} Complete HTML document
 */
export function generateReportsHtml(reports) {
  const tableRows = generateTableRows(reports);
  
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Alfa Scan Reports</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
      line-height: 1.6;
      color: #24292f;
      background-color: #f6f8fa;
      padding: 2rem;
    }
    
    .container {
      max-width: 1200px;
      margin: 0 auto;
      background: white;
      padding: 2rem;
      border-radius: 8px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
    }
    
    h1 {
      color: #0969da;
      margin-bottom: 0.5rem;
      font-size: 2rem;
    }
    
    .subtitle {
      color: #57606a;
      margin-bottom: 2rem;
    }
    
    table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 1rem;
    }
    
    th, td {
      padding: 0.75rem;
      text-align: left;
      border-bottom: 1px solid #d0d7de;
    }
    
    th {
      background-color: #f6f8fa;
      font-weight: 600;
      color: #24292f;
    }
    
    tr:hover {
      background-color: #f6f8fa;
    }
    
    a {
      color: #0969da;
      text-decoration: none;
    }
    
    a:hover {
      text-decoration: underline;
    }
    
    .badge {
      display: inline-block;
      padding: 0.25rem 0.5rem;
      border-radius: 4px;
      font-size: 0.875rem;
      font-weight: 500;
    }
    
    .badge-success {
      background-color: #dafbe1;
      color: #1a7f37;
    }
    
    .badge-danger {
      background-color: #ffebe9;
      color: #cf222e;
    }
    
    .badge-warning {
      background-color: #fff8c5;
      color: #9a6700;
    }
    
    .no-reports {
      text-align: center;
      padding: 3rem;
      color: #57606a;
    }
    
    .date {
      color: #57606a;
      font-size: 0.875rem;
    }
    
    .links {
      display: flex;
      gap: 1rem;
    }
    
    .nav {
      margin-bottom: 1.5rem;
      padding-bottom: 1rem;
      border-bottom: 1px solid #d0d7de;
    }
    
    .nav a {
      color: #0969da;
      text-decoration: none;
      margin-right: 1.5rem;
    }
    
    .nav a:hover {
      text-decoration: underline;
    }
    
    footer {
      margin-top: 2rem;
      padding-top: 1.5rem;
      border-top: 1px solid #d0d7de;
      text-align: center;
      color: #57606a;
    }
    
    footer a {
      color: #0969da;
      text-decoration: none;
      font-weight: 600;
    }
    
    footer a:hover {
      text-decoration: underline;
    }
  </style>
</head>
<body>
  <div class="container">
    <nav class="nav">
      <a href="index.html">Submit URLs</a>
      <a href="reports.html">View Reports</a>
    </nav>
    
    <h1>Alfa Scan Reports</h1>
    <p class="subtitle">Accessibility scan reports generated by GitHub Actions</p>
    
    ${reports.length === 0 ? '<div class="no-reports">No reports available yet. Submit URLs to generate your first report.</div>' : `
    <table>
      <thead>
        <tr>
          <th>Issue</th>
          <th>Scan Title</th>
          <th>Scanned At</th>
          <th>URLs</th>
          <th>Results</th>
          <th>Reports</th>
        </tr>
      </thead>
      <tbody>
        ${tableRows}
      </tbody>
    </table>`}
    
    <footer>
      <a href="https://github.com/mgifford/alfa-scan">Join our GitHub Community</a>
    </footer>
  </div>
</body>
</html>`;
}

/**
 * Main function to generate reports.html
 */
export function main() {
  const reportsDir = process.argv[2] || 'reports';
  const outputFile = process.argv[3] || 'reports.html';
  
  console.log(`Scanning for reports in: ${reportsDir}`);
  
  const reports = findAllReports(reportsDir);
  console.log(`Found ${reports.length} reports`);
  
  const sortedReports = sortReportsByTime(reports);
  console.log(`Sorted reports by time (most recent first)`);
  
  const html = generateReportsHtml(sortedReports);
  
  writeFileSync(outputFile, html, 'utf8');
  console.log(`Generated ${outputFile} with ${sortedReports.length} reports`);
}

// Run main if this script is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}
