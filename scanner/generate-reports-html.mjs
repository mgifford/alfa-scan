#!/usr/bin/env node

import { readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

/**
 * Recursively find all report.json files in the reports directory
 * Reads from both reports/issues/ (issue-triggered scans) and
 * reports/pages/ (GitHub Pages automated scans).
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
    console.error(`Failed to read reports/issues directory:`, err.message);
  }

  try {
    const pagesDir = join(reportsDir, 'pages');
    const timestamps = readdirSync(pagesDir);

    for (const timestamp of timestamps) {
      const reportPath = join(pagesDir, timestamp, 'report.json');
      try {
        const data = JSON.parse(readFileSync(reportPath, 'utf8'));
        reports.push({
          path: `reports/pages/${timestamp}`,
          data
        });
      } catch (err) {
        console.error(`Failed to read ${reportPath}:`, err.message);
      }
    }
  } catch (err) {
    if (err.code !== 'ENOENT') {
      console.error(`Failed to read reports/pages directory:`, err.message);
    }
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
        <tr data-issue="${data.issueNumber}" data-title="${escapeHtml(data.scanTitle)}" data-date="${escapeHtml(data.scannedAt)}" data-urls="${data.acceptedCount}">
          <td data-label="Issue"><a href="${data.issueUrl}">#${data.issueNumber}</a></td>
          <td data-label="Scan Title">${escapeHtml(data.scanTitle)}</td>
          <td class="date" data-label="Scanned At">${formattedDate}</td>
          <td data-label="URLs">${data.acceptedCount} accepted</td>
          <td data-label="Results">
            <span class="badge badge-success">${totalPassed} passed</span>
            <span class="badge badge-danger">${totalFailed} failed</span>
            <span class="badge badge-warning">${totalCantTell} can't tell</span>
          </td>
          <td class="links" data-label="Reports">
            <a href="${path}/report.html">HTML</a>
            <a href="${path}/report.md">Markdown</a>
            <a href="${path}/report.csv">CSV</a>
            <a href="${path}/report-overlap.md">Overlap</a>
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
  <title>Scan Reports</title>
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
      flex-wrap: wrap;
    }
    
    .table-wrapper {
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
    }
    
    @media (max-width: 599px) {
      body {
        padding: 0.75rem;
      }
      
      .container {
        padding: 1rem;
      }
      
      .table-wrapper {
        overflow-x: initial;
      }
      
      table {
        display: block;
      }
      
      thead {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
      }
      
      tbody {
        display: block;
        width: 100%;
      }
      
      tr {
        display: block;
        border: 1px solid #d0d7de;
        border-radius: 8px;
        margin-bottom: 1rem;
        padding: 0.25rem 0.5rem;
      }
      
      tr:hover {
        background-color: initial;
      }
      
      td {
        display: flex;
        align-items: flex-start;
        gap: 0.5rem;
        padding: 0.5rem 0.25rem;
        border-bottom: 1px solid #eaecef;
        font-size: 0.875rem;
      }
      
      td:last-child {
        border-bottom: none;
      }
      
      td::before {
        content: attr(data-label);
        font-weight: 600;
        min-width: 6rem;
        color: #57606a;
        flex-shrink: 0;
        font-size: 0.8125rem;
      }
      
      .links {
        gap: 0.5rem;
      }
      
      .badge {
        font-size: 0.8125rem;
      }
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
    
    .skip-link {
      position: absolute;
      top: -3rem;
      left: 0;
      background: #0969da;
      color: white;
      padding: 0.5rem 1rem;
      text-decoration: none;
      font-weight: 600;
      z-index: 100;
      border-radius: 0 0 4px 4px;
    }

    .skip-link:focus {
      top: 0;
    }

    .sort-btn {
      background: none;
      border: none;
      font: inherit;
      font-weight: 600;
      color: #24292f;
      cursor: pointer;
      padding: 0;
      display: inline-flex;
      align-items: center;
      gap: 0.25rem;
      white-space: nowrap;
    }
    
    .sort-btn:hover {
      color: #0969da;
    }
    
    .sort-btn:focus-visible {
      outline: 2px solid #0969da;
      outline-offset: 2px;
      border-radius: 2px;
    }
    
    .sort-icon {
      font-size: 0.75rem;
      opacity: 0.5;
    }
    
    .sort-btn:hover .sort-icon {
      opacity: 1;
    }
    
    .table-info {
      color: #57606a;
      font-size: 0.875rem;
      margin-top: 0.75rem;
    }
    
    .pagination-nav {
      display: flex;
      align-items: center;
      gap: 0.375rem;
      flex-wrap: wrap;
      margin-top: 1.25rem;
    }
    
    .page-info {
      color: #57606a;
      font-size: 0.875rem;
      margin-right: 0.5rem;
    }
    
    .page-btn {
      padding: 0.375rem 0.75rem;
      border: 1px solid #d0d7de;
      border-radius: 6px;
      background: white;
      color: #0969da;
      cursor: pointer;
      font-size: 0.875rem;
      line-height: 1.4;
    }
    
    .page-btn:hover {
      background: #f3f4f6;
    }
    
    .page-btn:focus-visible {
      outline: 2px solid #0969da;
      outline-offset: 2px;
    }
    
    .page-btn-active {
      background: #0969da;
      color: white;
      border-color: #0969da;
    }
    
    .page-btn-active:hover {
      background: #0860ca;
    }
    
    .page-ellipsis {
      padding: 0 0.25rem;
      color: #57606a;
    }
  </style>
</head>
<body>
  <div class="container">
    <header>
      <a class="skip-link" href="#main-content">Skip to main content</a>
      <nav class="nav" aria-label="Site navigation">
        <a href="index.html">Submit URLs</a>
        <a href="reports.html">View Reports</a>
      </nav>
    </header>
    
    <main id="main-content">
    <h1>Scan Reports</h1>
    <p class="subtitle">Accessibility scan reports generated by GitHub Actions</p>
    
    ${reports.length === 0 ? '<div class="no-reports">No reports available yet. Submit URLs to generate your first report.</div>' : `
    <div class="table-wrapper">
    <table>
      <thead>
        <tr>
          <th scope="col"><button class="sort-btn" data-col="issue">Issue <span class="sort-icon" aria-hidden="true">↕</span></button></th>
          <th scope="col"><button class="sort-btn" data-col="title">Scan Title <span class="sort-icon" aria-hidden="true">↕</span></button></th>
          <th scope="col"><button class="sort-btn" data-col="date">Scanned At <span class="sort-icon" aria-hidden="true">↓</span></button></th>
          <th scope="col"><button class="sort-btn" data-col="urls">URLs <span class="sort-icon" aria-hidden="true">↕</span></button></th>
          <th scope="col">Results</th>
          <th scope="col">Reports</th>
        </tr>
      </thead>
      <tbody>
        ${tableRows}
      </tbody>
    </table>
    </div>
    <p class="table-info" id="table-info" aria-live="polite"></p>
    <div id="pagination"></div>`}
    </main>
    
    <footer>
      <a href="https://github.com/mgifford/open-scans">Join our GitHub Community</a>
    </footer>
  </div>
  <script>
  (function () {
    var PAGE_SIZE = 50;
    var currentPage = 1;
    var sortCol = 'date';
    var sortDir = 'desc';

    var tbody = document.querySelector('tbody');
    var tableEl = document.querySelector('table');
    var paginationEl = document.getElementById('pagination');
    var tableInfoEl = document.getElementById('table-info');

    if (!tbody) return;

    function getRows() {
      return Array.from(tbody.querySelectorAll('tr'));
    }

    function compareValues(a, b) {
      var valA, valB;
      if (sortCol === 'issue' || sortCol === 'urls') {
        valA = parseInt(a.dataset[sortCol], 10) || 0;
        valB = parseInt(b.dataset[sortCol], 10) || 0;
      } else if (sortCol === 'date') {
        valA = a.dataset.date || '';
        valB = b.dataset.date || '';
      } else {
        valA = (a.dataset.title || '').toLowerCase();
        valB = (b.dataset.title || '').toLowerCase();
      }
      var cmp = valA < valB ? -1 : valA > valB ? 1 : 0;
      return sortDir === 'asc' ? cmp : -cmp;
    }

    function sortRows() {
      var rows = getRows();
      rows.sort(compareValues);
      rows.forEach(function (row) { tbody.appendChild(row); });
    }

    function renderPage() {
      var rows = getRows();
      var total = rows.length;
      var totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));
      if (currentPage > totalPages) currentPage = totalPages;
      var start = (currentPage - 1) * PAGE_SIZE;
      var end = start + PAGE_SIZE;

      rows.forEach(function (row, i) {
        row.style.display = (i >= start && i < end) ? '' : 'none';
      });

      if (tableInfoEl) {
        var showing = Math.min(end, total);
        tableInfoEl.textContent = total > 0
          ? 'Showing ' + (start + 1) + ' to ' + showing + ' of ' + total + ' reports'
          : '';
      }

      renderPagination(totalPages);
    }

    function renderPagination(totalPages) {
      if (!paginationEl) return;
      if (totalPages <= 1) {
        paginationEl.innerHTML = '';
        return;
      }

      var html = '<nav class="pagination-nav" aria-label="Report pages">';
      html += '<span class="page-info">Page ' + currentPage + ' of ' + totalPages + '</span>';

      if (currentPage > 1) {
        html += '<button class="page-btn" data-page="' + (currentPage - 1) + '">Previous</button>';
      }

      var pages = [];
      for (var i = 1; i <= totalPages; i++) {
        if (i === 1 || i === totalPages || (i >= currentPage - 2 && i <= currentPage + 2)) {
          pages.push(i);
        }
      }

      var prev = 0;
      pages.forEach(function (page) {
        if (prev && page - prev > 1) {
          html += '<span class="page-ellipsis" aria-hidden="true">\u2026</span>';
        }
        var isActive = page === currentPage;
        html += '<button class="page-btn' + (isActive ? ' page-btn-active' : '') + '" data-page="' + page + '"' +
          (isActive ? ' aria-current="page"' : '') + '>' + page + '</button>';
        prev = page;
      });

      if (currentPage < totalPages) {
        html += '<button class="page-btn" data-page="' + (currentPage + 1) + '">Next</button>';
      }

      html += '</nav>';
      paginationEl.innerHTML = html;

      paginationEl.querySelectorAll('.page-btn').forEach(function (btn) {
        btn.addEventListener('click', function () {
          currentPage = parseInt(this.dataset.page, 10);
          renderPage();
          if (tableEl) {
            var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            tableEl.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'start' });
          }
        });
      });
    }

    function updateSortIcons() {
      document.querySelectorAll('.sort-btn').forEach(function (btn) {
        var icon = btn.querySelector('.sort-icon');
        var th = btn.closest('th');
        if (btn.dataset.col === sortCol) {
          icon.textContent = sortDir === 'asc' ? '\u2191' : '\u2193';
          if (th) th.setAttribute('aria-sort', sortDir === 'asc' ? 'ascending' : 'descending');
        } else {
          icon.textContent = '\u2195';
          if (th) th.removeAttribute('aria-sort');
        }
      });
    }

    document.querySelectorAll('.sort-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var col = this.dataset.col;
        if (col === sortCol) {
          sortDir = sortDir === 'asc' ? 'desc' : 'asc';
        } else {
          sortCol = col;
          sortDir = col === 'date' ? 'desc' : 'asc';
        }
        currentPage = 1;
        sortRows();
        updateSortIcons();
        renderPage();
      });
    });

    updateSortIcons();
    renderPage();
  }());
  </script>
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
