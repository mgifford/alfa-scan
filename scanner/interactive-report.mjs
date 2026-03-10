import { ROLES, SEVERITY } from "./rule-metadata.mjs";
import { formatAlfaRule } from "./alfa-rule-metadata.mjs";

export function generateInteractiveHtml(summary) {
  const { enhanced, scanTitle, issueNumber, issueUrl, scannedAt, totalElapsedMs, totalSubmitted, acceptedCount, scannedCount, darkModeUrlCount, results } = summary;
  const { consolidatedFailures, roleStats, severityStats } = enhanced;

  const rolesList = Object.values(ROLES);
  const severitiesList = Object.values(SEVERITY);

  // Calculate total issues once
  const totalIssues = consolidatedFailures.reduce((acc, f) => acc + f.totalOccurrences, 0);

  // Build priority table data (top 10 pages by total unique errors)
  const SCANNERS = ['axe', 'alfa', 'equalAccess', 'accesslint', 'qualweb'];
  const SCANNER_LABELS = { axe: 'axe', alfa: 'ALFA', equalAccess: 'Equal Access', accesslint: 'AccessLint', qualweb: 'QualWeb' };

  function getUnique(result, engine) {
    if (engine === 'axe') return result.axe?.uniqueFailedCount ?? result.axe?.counts?.failed ?? 0;
    if (engine === 'alfa') return result.alfa?.uniqueFailedCount ?? result.alfa?.counts?.failed ?? 0;
    if (engine === 'equalAccess') return result.equalAccess?.uniqueFailedCount ?? result.equalAccess?.counts?.failed ?? 0;
    if (engine === 'accesslint') return result.accesslint?.uniqueFailedCount ?? result.accesslint?.counts?.failed ?? 0;
    if (engine === 'qualweb') return result.qualweb?.counts?.failed ?? 0;
    return 0;
  }

  const pagesByErrorCount = [...(results || [])]
    .map(r => {
      const counts = {};
      let total = 0;
      for (const eng of SCANNERS) {
        counts[eng] = getUnique(r, eng);
        total += counts[eng];
      }
      return { result: r, counts, total };
    })
    .filter(p => p.total > 0)
    .sort((a, b) => b.total - a.total)
    .slice(0, 10);

  const priorityTableHtml = pagesByErrorCount.length > 0 ? `
    <section class="priority-section" aria-labelledby="priority-heading">
      <h2 id="priority-heading">🎯 Priority: Pages with Most Errors</h2>
      <p>Focus your efforts on these pages to make the biggest impact. Click any error count to filter the rule list below.</p>
      <div class="table-wrapper" role="region" aria-label="Pages with most errors" tabindex="0">
        <table class="priority-table" aria-label="Pages sorted by total unique accessibility errors">
          <thead>
            <tr>
              <th scope="col">Page</th>
              ${SCANNERS.map(eng => `<th scope="col">${SCANNER_LABELS[eng]} Unique</th>`).join('')}
              <th scope="col">Total Unique</th>
            </tr>
          </thead>
          <tbody>
            ${pagesByErrorCount.map(({ result: r, counts, total }) => {
    const displayUrl = r.finalUrl || r.submittedUrl;
    const filterUrl = r.submittedUrl;  // Must match the URL stored in consolidatedFailures.pages
    const pageTitle = r.pageTitle || displayUrl;
    return `
              <tr>
                <td>
                  <a href="${escapeHtml(displayUrl)}" target="_blank" rel="noopener" title="${escapeHtml(pageTitle)}" class="page-link">
                    View Page
                  </a>
                  <span class="page-title-text">${escapeHtml(pageTitle)}</span>
                </td>
                ${SCANNERS.map(eng => {
      const count = counts[eng];
      if (count === 0) return `<td class="count-cell count-zero">0</td>`;
      return `<td class="count-cell">
                    <button class="count-btn" 
                            data-page-url="${escapeHtml(filterUrl)}"
                            data-engine="${eng}"
                            data-engine-label="${escapeHtml(SCANNER_LABELS[eng])}"
                            aria-label="Filter: ${count} ${SCANNER_LABELS[eng]} errors on ${escapeHtml(pageTitle)}"
                            title="Click to filter rules for this page and scanner">
                      ${count}
                    </button>
                  </td>`;
    }).join('')}
                <td class="count-total"><strong>${total}</strong></td>
              </tr>`;
  }).join('')}
          </tbody>
        </table>
      </div>
    </section>
  ` : '';

  const ruleCardsHtml = consolidatedFailures.map(f => {
    const ruleInfo = f.engine === 'alfa' ? formatAlfaRule(f.rule) : { id: f.rule, description: f.metadata.description };
    const displayId = ruleInfo.id;
    const displayDesc = ruleInfo.description || "";
    const rolesData = JSON.stringify(f.metadata.roles);
    const pageUrlsData = JSON.stringify([...f.pages.keys()]);

    return `
      <details class="rule-card" 
               data-roles='${rolesData}' 
               data-severity="${f.metadata.severity}"
               data-engine="${f.engine}"
               data-page-urls='${pageUrlsData}'
               data-search="${escapeHtml((displayId + " " + displayDesc).toLowerCase())}">
        <summary>
          <div class="rule-summary-info">
            <span class="badge badge-count">${f.totalOccurrences}</span>
            <span class="badge badge-severity severity-${f.metadata.severity}">${f.metadata.severity}</span>
            <span class="badge badge-engine">${f.engine}</span>
            <span><strong>${displayId}</strong>: ${displayDesc}</span>
          </div>
          <div style="color: #57606a; font-size: 0.8rem;">
            ${f.pages.size} pages affected
          </div>
        </summary>
        <div class="rule-content">
          <div class="rule-details">
            <div>
              <h4>Rule Information</h4>
              <p><strong>Engine:</strong> ${f.engine}</p>
              <p><strong>Roles:</strong> ${f.metadata.roles.join(', ')}</p>
              <p><strong>Blocking:</strong> ${f.metadata.blocking ? '⚠️ Yes (Task-Blocking)' : 'No'}</p>
            </div>
            <div>
              <h4>Affected Pages</h4>
              <ul style="max-height: 150px; overflow-y: auto; font-size: 0.85rem;">
                ${Array.from(f.pages.entries()).map(([url, count]) => `
                  <li><a href="${url}" target="_blank">${url}</a> (${count} occurrences)</li>
                `).join('')}
              </ul>
            </div>
          </div>
          <h4>Examples</h4>
          <div class="example-list">
            ${f.examples.map((ex, i) => `
              <div class="example-item">
                <div class="example-meta">
                  <span>Example ${i + 1}</span>
                  <a href="${ex.url}" target="_blank" style="font-size: 0.75rem;">View on Page</a>
                </div>
                ${ex.message ? `<div style="margin-bottom: 0.5rem; font-weight: 600;">${escapeHtml(ex.message)}</div>` : ''}
                <div style="font-size: 0.75rem; color: #57606a; margin-bottom: 0.5rem;">
                  <strong>Mode:</strong> <span class="badge ${ex.colorScheme === 'dark' ? 'badge-dark' : 'badge-light'}">${ex.colorScheme || 'light'}</span>
                </div>
                ${ex.html ? `<div style="color: #0550ae;">${escapeHtml(ex.html)}</div>` : ''}
                ${ex.xpath ? `<div style="color: #663399; margin-top: 0.5rem;">XPath: ${escapeHtml(ex.xpath)}</div>` : ''}
              </div>
            `).join('')}
          </div>
        </div>
      </details>
    `;
  }).join('');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Accessibility Report: ${scanTitle || `Issue #${issueNumber}`}</title>
  <style>
    :root {
      --primary: #0969da;
      --bg: #f6f8fa;
      --text: #24292f;
      --border: #d0d7de;
      --critical: #cf222e;
      --serious: #bc4c00;
      --moderate: #9a6700;
      --minor: #57606a;
      --success: #1a7f37;
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
      line-height: 1.6;
      color: var(--text);
      background-color: var(--bg);
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

    header { border-bottom: 1px solid var(--border); margin-bottom: 2rem; padding-bottom: 1rem; }
    h1 { color: var(--primary); font-size: 2rem; margin-bottom: 0.5rem; }
    .meta { color: #57606a; font-size: 0.9rem; display: flex; gap: 1.5rem; flex-wrap: wrap; }

    .nav { margin-bottom: 2rem; display: flex; gap: 1rem; border-bottom: 1px solid var(--border); }
    .nav-item { 
      padding: 0.5rem 1rem; 
      cursor: pointer; 
      border-bottom: 2px solid transparent;
      font-weight: 500;
    }
    .nav-item:hover { background: #f0f0f0; }
    .nav-item:focus { outline: 2px solid var(--primary); outline-offset: -2px; }
    .nav-item.active { border-bottom-color: var(--primary); color: var(--primary); }

    .dashboard { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem; margin-bottom: 2rem; }
    .card { border: 1px solid var(--border); padding: 1.5rem; border-radius: 6px; }
    .card h3 { font-size: 1rem; margin-bottom: 1rem; color: #57606a; text-transform: uppercase; letter-spacing: 0.05em; }
    .stat { font-size: 2.5rem; font-weight: 700; line-height: 1; margin-bottom: 0.5rem; }

    .bar-chart { display: flex; flex-direction: column; gap: 0.5rem; margin-top: 1rem; }
    .bar-item { display: flex; align-items: center; gap: 0.5rem; }
    .bar-label { width: 140px; font-size: 0.85rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    .bar-container { flex-grow: 1; background: #eee; height: 12px; border-radius: 6px; overflow: hidden; }
    .bar-fill { height: 100%; background: var(--primary); }

    .severity-Critical { color: var(--critical); }
    .severity-Serious { color: var(--serious); }
    .severity-Moderate { color: var(--moderate); }
    .severity-Minor { color: var(--minor); }

    .filters { margin-bottom: 1.5rem; display: flex; gap: 1rem; align-items: center; flex-wrap: wrap; }
    select, input { padding: 0.5rem; border: 1px solid var(--border); border-radius: 4px; }
    select:focus, input:focus { outline: 2px solid var(--primary); outline-offset: 2px; border-color: var(--primary); }

    .rule-list { display: flex; flex-direction: column; gap: 1rem; }
    details { border: 1px solid var(--border); border-radius: 6px; overflow: hidden; }
    summary { 
      padding: 1rem; 
      background: #fafafa; 
      cursor: pointer; 
      font-weight: 600; 
      display: flex; 
      justify-content: space-between; 
      align-items: center; 
    }
    summary:hover { background: #f0f0f0; }
    summary:focus { outline: 2px solid var(--primary); outline-offset: 2px; }
    summary::-webkit-details-marker { display: none; }
    .rule-summary-info { display: flex; align-items: center; gap: 1rem; }
    .badge { padding: 0.2rem 0.6rem; border-radius: 12px; font-size: 0.75rem; font-weight: 600; }
    .badge-severity { background: #eee; }
    .badge-count { background: var(--primary); color: white; }
    .badge-engine { background: #e8f4fd; color: #0969da; border: 1px solid #b6d9fb; }
    .badge-light { background: #fff; border: 1px solid var(--border); color: #24292f; }
    .badge-dark { background: #24292f; color: #fff; }
    
    .rule-content { padding: 1.5rem; border-top: 1px solid var(--border); }
    .rule-details { margin-bottom: 1.5rem; display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; }
    .example-list { margin-top: 1rem; }
    .example-item { 
      border-left: 4px solid var(--primary); 
      background: #f8f9fa; 
      padding: 1rem; 
      margin-bottom: 1rem; 
      font-family: monospace;
      font-size: 0.85rem;
      white-space: pre-wrap;
      word-break: break-all;
    }
    .example-meta { font-family: sans-serif; font-weight: 600; margin-bottom: 0.5rem; display: flex; justify-content: space-between; }

    /* Priority table */
    .priority-section { margin-bottom: 2rem; padding: 1.5rem; border: 1px solid var(--border); border-radius: 6px; background: #f6f8fa; }
    .priority-section h2 { font-size: 1.25rem; margin-bottom: 0.5rem; }
    .priority-section > p { color: #57606a; font-size: 0.9rem; margin-bottom: 1rem; }
    .table-wrapper { overflow-x: auto; }
    .priority-table { width: 100%; border-collapse: collapse; font-size: 0.9rem; }
    .priority-table th { background: #e8ecf0; padding: 0.6rem 0.8rem; text-align: left; font-weight: 600; border-bottom: 2px solid var(--border); white-space: nowrap; }
    .priority-table td { padding: 0.5rem 0.8rem; border-bottom: 1px solid var(--border); vertical-align: middle; }
    .priority-table tr:last-child td { border-bottom: none; }
    .priority-table tr:hover td { background: #eaf1fb; }
    .count-cell { text-align: right; }
    .count-zero { color: #8c959f; }
    .count-total { text-align: right; }
    .count-btn {
      background: none;
      border: 1px solid transparent;
      border-radius: 4px;
      padding: 0.2rem 0.6rem;
      cursor: pointer;
      font-size: 0.9rem;
      font-weight: 600;
      color: var(--primary);
      min-width: 2.5rem;
      text-align: right;
      transition: background 0.15s, border-color 0.15s;
    }
    .count-btn:hover { background: #dbeafe; border-color: var(--primary); }
    .count-btn:focus { outline: 2px solid var(--primary); outline-offset: 2px; }
    .count-btn.active-filter { background: var(--primary); color: white; border-color: var(--primary); }
    .page-link { font-weight: 500; }
    .page-title-text { display: block; font-size: 0.8rem; color: #57606a; max-width: 280px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }

    /* Active filter banner */
    .filter-banner {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      flex-wrap: wrap;
      background: #dbeafe;
      border: 1px solid #b6d9fb;
      border-radius: 6px;
      padding: 0.6rem 1rem;
      margin-bottom: 1rem;
      font-size: 0.9rem;
    }
    .filter-banner.hidden { display: none !important; }
    .filter-banner-text { flex: 1; }
    .filter-banner-actions { display: flex; gap: 0.5rem; }
    .btn { display: inline-flex; align-items: center; gap: 0.3rem; padding: 0.35rem 0.75rem; border-radius: 6px; font-size: 0.85rem; font-weight: 600; cursor: pointer; border: 1px solid; }
    .btn:focus { outline: 2px solid var(--primary); outline-offset: 2px; }
    .btn-clear { background: white; color: var(--text); border-color: var(--border); }
    .btn-clear:hover { background: #f0f0f0; }
    .btn-copy { background: var(--success); color: white; border-color: var(--success); }
    .btn-copy:hover { background: #156b31; }
    .btn-copy.copied { background: #57606a; border-color: #57606a; }

    .hidden { display: none !important; }
    .visually-hidden { position: absolute; left: -10000px; width: 1px; height: 1px; overflow: hidden; }

    @media print {
      body::before {
        content: "Please do not print this report. Use the interactive digital version for full details.";
        display: block;
        background: #fff3cd;
        padding: 1rem;
        border: 1px solid #ffeeba;
        margin-bottom: 2rem;
        font-weight: bold;
        text-align: center;
      }
      .nav, .filters, .nav-item, .priority-section, .filter-banner { display: none; }
      details { border: none; }
      summary { background: none; padding: 0.5rem 0; border-bottom: 1px solid var(--border); }
      .container { box-shadow: none; max-width: none; width: 100%; padding: 0; }
    }
  </style>
</head>
<body>
  <div class="container">
    <header>
      <h1>Accessibility Scan Report</h1>
      <div class="meta">
        <span><strong>Title:</strong> ${scanTitle || `Issue #${issueNumber}`}</span>
        <span><strong>Issue:</strong> <a href="${issueUrl}" target="_blank">#${issueNumber}</a></span>
        <span><strong>Date:</strong> ${new Date(scannedAt).toLocaleString()}</span>
        <span><strong>Duration:</strong> ${(totalElapsedMs / 60000).toFixed(1)}m</span>
        <span><strong>URLs:</strong> ${acceptedCount} / ${totalSubmitted}</span>
        ${darkModeUrlCount !== undefined && scannedCount > 0 && darkModeUrlCount > 0 ? `<span><strong>🌙 Dark Mode:</strong> ${darkModeUrlCount} / ${scannedCount} URLs</span>` : ''}
      </div>
    </header>

    <div class="dashboard">
      <div class="card">
        <h3>Total Issues</h3>
        <div class="stat" aria-label="${totalIssues} total issues">${totalIssues}</div>
        <p>Across ${consolidatedFailures.length} unique rules</p>
      </div>
      <div class="card">
        <h3>By Severity</h3>
        <div class="bar-chart" role="list" aria-label="Issues by severity">
          ${severitiesList.map(s => {
    const count = severityStats[s] || 0;
    const max = Math.max(...Object.values(severityStats), 1);
    const percent = (count / max) * 100;
    return `
              <div class="bar-item" role="listitem">
                <span class="bar-label severity-${s}">${s}</span>
                <div class="bar-container" role="img" aria-label="${s}: ${count} issues, ${percent.toFixed(0)}% of maximum"><div class="bar-fill" style="width: ${percent}%; background-color: var(--${s.toLowerCase()})"></div></div>
                <span aria-hidden="true">${count}</span>
              </div>
            `;
  }).join('')}
        </div>
      </div>
      <div class="card">
        <h3>By Role</h3>
        <div class="bar-chart" role="list" aria-label="Issues by role">
          ${rolesList.map(r => {
    const count = roleStats[r] || 0;
    const max = Math.max(...Object.values(roleStats), 1);
    const percent = (count / max) * 100;
    return `
              <div class="bar-item" role="listitem">
                <span class="bar-label">${r}</span>
                <div class="bar-container" role="img" aria-label="${r}: ${count} issues, ${percent.toFixed(0)}% of maximum"><div class="bar-fill" style="width: ${percent}%"></div></div>
                <span aria-hidden="true">${count}</span>
              </div>
            `;
  }).join('')}
        </div>
      </div>
    </div>

    ${priorityTableHtml}

    <h2 id="filters-heading" class="visually-hidden">Filter Issues</h2>

    <!-- Active page/engine filter banner -->
    <div id="filterBanner" class="filter-banner hidden" role="region" aria-live="polite" aria-label="Active filter">
      <span class="filter-banner-text" id="filterBannerText"></span>
      <div class="filter-banner-actions">
        <button class="btn btn-copy" id="copyIssueBtn" aria-label="Copy filtered results as GitHub issue markdown">
          📋 Copy as GitHub Issue
        </button>
        <button class="btn btn-clear" id="clearFilterBtn" aria-label="Clear page filter">
          ✕ Clear Filter
        </button>
      </div>
    </div>

    <div class="nav" role="tablist" aria-labelledby="filters-heading" id="roleTabs">
      <button class="nav-item active" role="tab" aria-selected="true" aria-controls="ruleList" data-role="all" tabindex="0">All Issues</button>
      ${rolesList.map((r, i) => `<button class="nav-item" role="tab" aria-selected="false" aria-controls="ruleList" data-role="${r}" tabindex="-1">${r}</button>`).join('')}
    </div>

    <div class="filters">
      <label for="severityFilter">Severity:</label>
      <select id="severityFilter" aria-label="Filter by severity">
        <option value="all">All Severities</option>
        ${severitiesList.map(s => `<option value="${s}">${s}</option>`).join('')}
      </select>
      
      <label for="search">Search:</label>
      <input type="text" id="search" placeholder="Filter by rule or description..." aria-label="Search rules and descriptions">
    </div>

    <!-- Screen reader announcement for filter results -->
    <div id="filter-announcement" role="status" aria-live="polite" aria-atomic="true" class="visually-hidden"></div>

    <div class="rule-list" id="ruleList" role="tabpanel" aria-atomic="false">
      ${ruleCardsHtml}
    </div>
  </div>

  <script>
    const roleTabs = document.getElementById('roleTabs');
    const severityFilter = document.getElementById('severityFilter');
    const searchInput = document.getElementById('search');
    const ruleCards = document.querySelectorAll('.rule-card');
    const tabs = roleTabs.querySelectorAll('[role="tab"]');
    const filterBanner = document.getElementById('filterBanner');
    const filterBannerText = document.getElementById('filterBannerText');
    const clearFilterBtn = document.getElementById('clearFilterBtn');
    const copyIssueBtn = document.getElementById('copyIssueBtn');

    let activePageUrl = null;
    let activeEngine = null;
    let activeEngineLabel = null;
    let activePageTitle = null;

    function escapeHtml(text) {
      const div = document.createElement('div');
      div.textContent = text;
      return div.innerHTML;
    }

    function filterRules() {
      const activeRole = roleTabs.querySelector('[aria-selected="true"]').dataset.role;
      const activeSeverity = severityFilter.value;
      const searchTerm = searchInput.value.toLowerCase();

      let visibleCount = 0;
      ruleCards.forEach(card => {
        const roles = JSON.parse(card.dataset.roles);
        const severity = card.dataset.severity;
        const searchText = card.dataset.search;
        const cardEngine = card.dataset.engine;
        const pageUrls = JSON.parse(card.dataset.pageUrls || '[]');

        const roleMatch = activeRole === 'all' || roles.includes(activeRole);
        const severityMatch = activeSeverity === 'all' || severity === activeSeverity;
        const searchMatch = !searchTerm || searchText.includes(searchTerm);
        const pageMatch = !activePageUrl || pageUrls.includes(activePageUrl);
        const engineMatch = !activeEngine || cardEngine === activeEngine;

        if (roleMatch && severityMatch && searchMatch && pageMatch && engineMatch) {
          card.classList.remove('hidden');
          visibleCount++;
        } else {
          card.classList.add('hidden');
        }
      });
      
      // Announce result count to screen readers
      const announcement = document.getElementById('filter-announcement');
      if (announcement) {
        let msg = visibleCount + ' rule' + (visibleCount !== 1 ? 's' : '') + ' shown';
        if (activePageUrl) {
          msg += ' for ' + (activeEngineLabel || activeEngine) + ' on selected page';
        }
        announcement.textContent = msg;
      }
    }

    function setPageFilter(pageUrl, engine, engineLabel, pageTitle, btnEl) {
      // Toggle off if same button clicked again
      if (activePageUrl === pageUrl && activeEngine === engine) {
        clearPageFilter();
        return;
      }

      // Clear previous active button
      document.querySelectorAll('.count-btn.active-filter').forEach(b => b.classList.remove('active-filter'));

      activePageUrl = pageUrl;
      activeEngine = engine;
      activeEngineLabel = engineLabel;
      activePageTitle = pageTitle;

      if (btnEl) btnEl.classList.add('active-filter');

      const displayPage = pageTitle || pageUrl;
      filterBannerText.textContent = 'Showing ' + (engineLabel || engine) + ' errors for: ' + displayPage;
      filterBanner.classList.remove('hidden');

      // Scroll to rule list
      document.getElementById('ruleList').scrollIntoView({ behavior: 'smooth', block: 'start' });

      filterRules();
    }

    function clearPageFilter() {
      activePageUrl = null;
      activeEngine = null;
      activeEngineLabel = null;
      activePageTitle = null;

      document.querySelectorAll('.count-btn.active-filter').forEach(b => b.classList.remove('active-filter'));
      filterBanner.classList.add('hidden');
      filterRules();
    }

    function generateGitHubIssueMarkdown() {
      const visibleCards = Array.from(ruleCards).filter(c => !c.classList.contains('hidden'));
      if (visibleCards.length === 0) return '<!-- No matching issues found -->';

      const pageDisplay = activePageTitle || activePageUrl || 'Unknown page';
      const engineDisplay = activeEngineLabel || activeEngine || 'All scanners';

      let md = '## Accessibility Issues: ' + engineDisplay + ' — ' + pageDisplay + '\\n\\n';
      md += '> Generated from [Accessibility Scan Report](' + window.location.href + ')\\n\\n';
      md += '**Page:** ' + (activePageUrl ? '[' + pageDisplay + '](' + activePageUrl + ')' : pageDisplay) + '\\n';
      md += '**Scanner:** ' + engineDisplay + '\\n';
      md += '**Issues found:** ' + visibleCards.length + '\\n\\n';
      md += '---\\n\\n';

      visibleCards.forEach((card, i) => {
        const summary = card.querySelector('summary');
        const countBadge = summary.querySelector('.badge-count');
        const severityBadge = summary.querySelector('.badge-severity');
        const ruleText = summary.querySelector('strong');
        const descEl = ruleText ? ruleText.parentElement : null;
        const count = countBadge ? countBadge.textContent.trim() : '?';
        const severity = severityBadge ? severityBadge.textContent.trim() : '?';
        const ruleId = ruleText ? ruleText.textContent.trim() : '?';
        const descFull = descEl ? descEl.textContent.trim() : '';

        md += '### ' + (i + 1) + '. ' + ruleId + '\\n\\n';
        md += '- **Severity:** ' + severity + '\\n';
        md += '- **Occurrences:** ' + count + '\\n';
        md += '- **Description:** ' + descFull + '\\n\\n';

        // Include examples
        const examples = card.querySelectorAll('.example-item');
        if (examples.length > 0) {
          md += '**Examples:**\\n\\n';
          examples.forEach((ex, ei) => {
            const msg = ex.querySelector('div[style*="font-weight: 600"]');
            const codeEl = ex.querySelector('div[style*="#0550ae"]');
            const xpathEl = ex.querySelector('div[style*="#663399"]');
            if (msg) md += '- ' + msg.textContent.trim() + '\\n';
            if (codeEl) md += '\`\`\`html\\n' + codeEl.textContent.trim() + '\\n\`\`\`\\n';
            if (xpathEl) md += '  ' + xpathEl.textContent.trim() + '\\n';
          });
          md += '\\n';
        }

        md += '---\\n\\n';
      });

      return md;
    }

    // Priority table click handler
    document.addEventListener('click', (e) => {
      const btn = e.target.closest('.count-btn');
      if (!btn) return;
      const pageUrl = btn.dataset.pageUrl;
      const engine = btn.dataset.engine;
      const engineLabel = btn.dataset.engineLabel || engine;
      const pageTitle = btn.closest('tr')?.querySelector('.page-title-text')?.textContent?.trim() || '';
      setPageFilter(pageUrl, engine, engineLabel, pageTitle, btn);
    });

    clearFilterBtn.addEventListener('click', clearPageFilter);

    copyIssueBtn.addEventListener('click', () => {
      const md = generateGitHubIssueMarkdown();
      navigator.clipboard.writeText(md).then(() => {
        copyIssueBtn.textContent = '✅ Copied!';
        copyIssueBtn.classList.add('copied');
        setTimeout(() => {
          copyIssueBtn.textContent = '📋 Copy as GitHub Issue';
          copyIssueBtn.classList.remove('copied');
        }, 2500);
      }).catch(() => {
        // Fallback: show markdown in a textarea overlay for manual copying
        const overlay = document.createElement('div');
        overlay.setAttribute('role', 'dialog');
        overlay.setAttribute('aria-modal', 'true');
        overlay.setAttribute('aria-label', 'Copy GitHub Issue Markdown');
        overlay.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.5);z-index:1000;display:flex;align-items:center;justify-content:center;';
        const inner = document.createElement('div');
        inner.style.cssText = 'background:white;border-radius:8px;padding:1.5rem;max-width:600px;width:90%;max-height:80vh;display:flex;flex-direction:column;gap:1rem;';
        const label = document.createElement('p');
        label.textContent = 'Clipboard access unavailable. Select all and copy manually:';
        label.style.fontWeight = '600';
        const ta = document.createElement('textarea');
        ta.value = md;
        ta.style.cssText = 'width:100%;height:300px;font-family:monospace;font-size:0.8rem;resize:vertical;border:1px solid #d0d7de;border-radius:4px;padding:0.5rem;';
        ta.setAttribute('aria-label', 'GitHub issue markdown - select all and copy');
        const closeBtn = document.createElement('button');
        closeBtn.textContent = '✕ Close';
        closeBtn.style.cssText = 'align-self:flex-end;padding:0.4rem 0.8rem;cursor:pointer;border:1px solid #d0d7de;border-radius:6px;background:white;';
        closeBtn.setAttribute('aria-label', 'Close copy dialog');
        closeBtn.addEventListener('click', () => overlay.remove());
        overlay.addEventListener('click', (ev) => { if (ev.target === overlay) overlay.remove(); });
        inner.append(label, ta, closeBtn);
        overlay.appendChild(inner);
        document.body.appendChild(overlay);
        ta.focus();
        ta.select();
      });
    });

    function activateTab(tab) {
      // Deactivate all tabs
      tabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
        t.setAttribute('tabindex', '-1');
      });
      
      // Activate selected tab
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      tab.setAttribute('tabindex', '0');
      tab.focus();
      
      filterRules();
    }

    roleTabs.addEventListener('click', (e) => {
      if (e.target.getAttribute('role') === 'tab') {
        activateTab(e.target);
      }
    });

    roleTabs.addEventListener('keydown', (e) => {
      const currentTab = e.target;
      if (currentTab.getAttribute('role') !== 'tab') return;
      
      const tabArray = Array.from(tabs);
      const currentIndex = tabArray.indexOf(currentTab);
      let nextIndex;

      switch(e.key) {
        case 'ArrowRight':
        case 'ArrowDown':
          e.preventDefault();
          nextIndex = (currentIndex + 1) % tabArray.length;
          activateTab(tabArray[nextIndex]);
          break;
        case 'ArrowLeft':
        case 'ArrowUp':
          e.preventDefault();
          nextIndex = (currentIndex - 1 + tabArray.length) % tabArray.length;
          activateTab(tabArray[nextIndex]);
          break;
        case 'Home':
          e.preventDefault();
          activateTab(tabArray[0]);
          break;
        case 'End':
          e.preventDefault();
          activateTab(tabArray[tabArray.length - 1]);
          break;
      }
    });

    severityFilter.addEventListener('change', filterRules);
    searchInput.addEventListener('input', filterRules);
  </script>
</body>
</html>`;

  function escapeHtml(text) {
    return String(text ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }
}
