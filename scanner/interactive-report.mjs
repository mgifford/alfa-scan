import { ROLES, SEVERITY } from "./rule-metadata.mjs";
import { formatAlfaRule } from "./alfa-rule-metadata.mjs";

export function generateInteractiveHtml(summary) {
  const { enhanced, scanTitle, issueNumber, issueUrl, scannedAt, totalElapsedMs, totalSubmitted, acceptedCount, results } = summary;
  const { consolidatedFailures, roleStats, severityStats } = enhanced;

  const rolesList = Object.values(ROLES);
  const severitiesList = Object.values(SEVERITY);

  const ruleCardsHtml = consolidatedFailures.map(f => {
    const ruleInfo = f.engine === 'alfa' ? formatAlfaRule(f.rule) : { id: f.rule, description: f.metadata.description };
    const displayId = ruleInfo.id;
    const displayDesc = ruleInfo.description || "";
    const rolesData = JSON.stringify(f.metadata.roles);
    
    return `
      <details class="rule-card" 
               data-roles='\${rolesData}' 
               data-severity="\${f.metadata.severity}"
               data-search="${(displayId + " " + displayDesc).toLowerCase()}">
        <summary>
          <div class="rule-summary-info">
            <span class="badge badge-count">${f.totalOccurrences}</span>
            <span class="badge badge-severity severity-${f.metadata.severity}">${f.metadata.severity}</span>
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
                  <span>Example ${i+1}</span>
                  <a href="${ex.url}" target="_blank" style="font-size: 0.75rem;">View on Page</a>
                </div>
                ${ex.message ? `<div style="margin-bottom: 0.5rem; font-weight: 600;">${ex.message}</div>` : ''}
                ${ex.html ? `<div style="color: #0550ae;">${escapeHtml(ex.html)}</div>` : ''}
                ${ex.xpath ? `<div style="color: #663399; margin-top: 0.5rem;">XPath: ${ex.xpath}</div>` : ''}
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
    summary::marker { content: none; }
    .rule-summary-info { display: flex; align-items: center; gap: 1rem; }
    .badge { padding: 0.2rem 0.6rem; border-radius: 12px; font-size: 0.75rem; font-weight: 600; }
    .badge-severity { background: #eee; }
    .badge-count { background: var(--primary); color: white; }
    
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
      .nav, .filters, .nav-item { display: none; }
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
      </div>
    </header>

    <div class="dashboard">
      <div class="card">
        <h3>Total Issues</h3>
        <div class="stat" aria-label="${consolidatedFailures.reduce((acc, f) => acc + f.totalOccurrences, 0)} total issues">${consolidatedFailures.reduce((acc, f) => acc + f.totalOccurrences, 0)}</div>
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

    <h2 id="filters-heading" class="visually-hidden">Filter Issues</h2>

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
    <div id="filter-announcement" role="status" aria-live="polite" aria-atomic="true" style="position: absolute; left: -10000px; width: 1px; height: 1px; overflow: hidden;"></div>

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

        const roleMatch = activeRole === 'all' || roles.includes(activeRole);
        const severityMatch = activeSeverity === 'all' || severity === activeSeverity;
        const searchMatch = !searchTerm || searchText.includes(searchTerm);

        if (roleMatch && severityMatch && searchMatch) {
          card.classList.remove('hidden');
          visibleCount++;
        } else {
          card.classList.add('hidden');
        }
      });
      
      // Announce result count to screen readers
      const announcement = document.getElementById('filter-announcement');
      if (announcement) {
        announcement.textContent = visibleCount + ' rule' + (visibleCount !== 1 ? 's' : '') + ' shown';
      }
    }

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
