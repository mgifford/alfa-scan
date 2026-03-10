import { ROLES, SEVERITY } from "./rule-metadata.mjs";
import { formatAlfaRule } from "./alfa-rule-metadata.mjs";

/** Convert a string to a URL-safe slug for use as an HTML id */
function slugify(text) {
  return String(text ?? "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

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

  // Engine order and labels for accordion sections
  const ENGINE_ORDER = ['alfa', 'axe', 'equalAccess', 'accesslint', 'qualweb'];
  const ENGINE_ACCORDION_LABELS = {
    alfa: 'ALFA', axe: 'axe', equalAccess: 'Equal Access',
    accesslint: 'AccessLint', qualweb: 'QualWeb'
  };

  function makeRuleCard(f) {
    const ruleInfo = f.engine === 'alfa' ? formatAlfaRule(f.rule) : { id: f.rule, description: f.metadata.description };
    const displayId = ruleInfo.id;
    const displayDesc = ruleInfo.description || "";
    const rolesData = JSON.stringify(f.metadata.roles);
    const pageUrlsData = JSON.stringify([...f.pages.keys()]);
    const ruleSlug = slugify(f.engine + "-" + displayId);

    return `
      <details class="rule-card"
               id="rule-${ruleSlug}"
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
            <span>
              <strong>${displayId}</strong>: ${displayDesc}
              <a href="#rule-${ruleSlug}" class="anchor-link anchor-link-inline" aria-label="Link to ${displayId} rule">
                <span aria-hidden="true">#</span>
              </a>
            </span>
          </div>
          <div class="pages-affected">
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
                <div class="example-mode">
                  <strong>Mode:</strong> <span class="badge ${ex.colorScheme === 'dark' ? 'badge-dark' : 'badge-light'}">${ex.colorScheme || 'light'}</span>
                </div>
                ${ex.html ? `<div class="example-code">${escapeHtml(ex.html)}</div>` : ''}
                ${ex.xpath ? `<div class="example-xpath">XPath: ${escapeHtml(ex.xpath)}</div>` : ''}
              </div>
            `).join('')}
          </div>
        </div>
      </details>
    `;
  }

  // Per-engine accordion sections (collapsed by default)
  const engineAccordionHtml = ENGINE_ORDER
    .filter(eng => consolidatedFailures.some(f => f.engine === eng))
    .map(eng => {
      const label = ENGINE_ACCORDION_LABELS[eng];
      const engFailures = consolidatedFailures.filter(f => f.engine === eng);
      const engCardsHtml = engFailures.map(makeRuleCard).join('');
      return `
      <details class="accordion-section" id="accordion-${eng}">
        <summary class="accordion-header">
          <h2>🔧 Priority: Most Common Issues (${label})</h2>
          <span class="accordion-count">${engFailures.length} rule${engFailures.length !== 1 ? 's' : ''}</span>
        </summary>
        <div class="accordion-content rule-list">
          ${engCardsHtml}
        </div>
      </details>
      `;
    })
    .join('');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Accessibility Report: ${scanTitle || `Issue #${issueNumber}`}</title>
  <style>
    /* ── Color tokens ── */
    :root {
      --primary: #0969da;
      --bg: #f6f8fa;
      --container-bg: #ffffff;
      --text: #24292f;
      --border: #d0d7de;
      --critical: #cf222e;
      --serious: #bc4c00;
      --moderate: #9a6700;
      --minor: #57606a;
      --success: #1a7f37;
      --muted: #57606a;
      --surface: #fafafa;
      --hover-bg: #f0f0f0;
      --code-bg: #f8f9fa;
      --bar-bg: #eeeeee;
      --code-color: #0550ae;
      --xpath-color: #663399;
      --anchor-icon: #57606a;
      --badge-count-text: #ffffff;
      --badge-dark-bg: #24292f;
      --badge-dark-text: #e6edf3;
    }

    /* ── Dark mode (system preference) ── */
    @media (prefers-color-scheme: dark) {
      :root {
        --primary: #58a6ff;
        --bg: #0d1117;
        --container-bg: #161b22;
        --text: #e6edf3;
        --border: #30363d;
        --critical: #ff7b72;
        --serious: #ffa657;
        --moderate: #e3b341;
        --minor: #8b949e;
        --success: #3fb950;
        --muted: #8b949e;
        --surface: #21262d;
        --hover-bg: #30363d;
        --code-bg: #1c2128;
        --bar-bg: #30363d;
        --code-color: #79c0ff;
        --xpath-color: #d2a8ff;
        --anchor-icon: #8b949e;
        --badge-count-text: #0d1117;
        --badge-dark-bg: #e6edf3;
        --badge-dark-text: #24292f;
      }
    }

    /* ── Manual theme overrides via data-theme attribute ── */
    [data-theme="light"] {
      --primary: #0969da;
      --bg: #f6f8fa;
      --container-bg: #ffffff;
      --text: #24292f;
      --border: #d0d7de;
      --critical: #cf222e;
      --serious: #bc4c00;
      --moderate: #9a6700;
      --minor: #57606a;
      --success: #1a7f37;
      --muted: #57606a;
      --surface: #fafafa;
      --hover-bg: #f0f0f0;
      --code-bg: #f8f9fa;
      --bar-bg: #eeeeee;
      --code-color: #0550ae;
      --xpath-color: #663399;
      --anchor-icon: #57606a;
      --badge-count-text: #ffffff;
      --badge-dark-bg: #24292f;
      --badge-dark-text: #e6edf3;
    }

    [data-theme="dark"] {
      --primary: #58a6ff;
      --bg: #0d1117;
      --container-bg: #161b22;
      --text: #e6edf3;
      --border: #30363d;
      --critical: #ff7b72;
      --serious: #ffa657;
      --moderate: #e3b341;
      --minor: #8b949e;
      --success: #3fb950;
      --muted: #8b949e;
      --surface: #21262d;
      --hover-bg: #30363d;
      --code-bg: #1c2128;
      --bar-bg: #30363d;
      --code-color: #79c0ff;
      --xpath-color: #d2a8ff;
      --anchor-icon: #8b949e;
      --badge-count-text: #0d1117;
      --badge-dark-bg: #e6edf3;
      --badge-dark-text: #24292f;
    }

    /* ── Forced-colors / high contrast ── */
    @media (forced-colors: active) {
      .card { border: 1px solid CanvasText; }
      .anchor-link:focus { outline: 2px solid Highlight; }
      #theme-toggle { color: ButtonText; background-color: ButtonFace; border: 1px solid ButtonText; }
      .skip-link { background: Canvas; color: CanvasText; border: 1px solid CanvasText; }
    }

    /* ── Smooth scroll (only when motion is acceptable) ── */
    @media (prefers-reduced-motion: no-preference) {
      html { scroll-behavior: smooth; }
    }

    /* ── Scroll offset for anchor targets ── */
    :target { scroll-margin-top: 1rem; }
    h1[tabindex="-1"]:focus,
    h2[tabindex="-1"]:focus,
    h3[tabindex="-1"]:focus { outline: none; }

    /* ── Skip link ── */
    .skip-link {
      position: absolute;
      top: -100%;
      left: 1rem;
      padding: 0.5rem 1rem;
      background: var(--container-bg);
      color: var(--primary);
      font-weight: bold;
      text-decoration: none;
      border: 2px solid var(--primary);
      border-radius: 4px;
      z-index: 9999;
    }
    .skip-link:focus { top: 1rem; }

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
      background: var(--container-bg);
      padding: 2rem;
      border-radius: 8px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
    }

    header {
      border-bottom: 1px solid var(--border);
      margin-bottom: 2rem;
      padding-bottom: 1rem;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 1rem;
    }
    .header-content { flex: 1; min-width: 0; }
    h1 { color: var(--primary); font-size: 2rem; margin-bottom: 0.5rem; }
    .meta { color: var(--muted); font-size: 0.9rem; display: flex; gap: 1.5rem; flex-wrap: wrap; }

    /* ── Theme toggle button ── */
    #theme-toggle {
      flex-shrink: 0;
      padding: 0.5rem;
      border: 1px solid var(--border);
      background-color: var(--container-bg);
      color: var(--text);
      cursor: pointer;
      border-radius: 4px;
      line-height: 0;
    }
    #theme-toggle:hover { background-color: var(--hover-bg); }
    #theme-toggle:focus { outline: 2px solid var(--primary); outline-offset: 2px; }
    .theme-icon { display: block; width: 20px; height: 20px; }
    /* Default: show moon (switch-to-dark affordance) */
    .sun-icon { display: none; }
    .moon-icon { display: block; }
    @media (prefers-color-scheme: dark) {
      .sun-icon { display: block; }
      .moon-icon { display: none; }
    }
    [data-theme="dark"] .sun-icon { display: block; }
    [data-theme="dark"] .moon-icon { display: none; }
    [data-theme="light"] .sun-icon { display: none; }
    [data-theme="light"] .moon-icon { display: block; }

    /* ── Section headings with anchor links ── */
    .section-heading {
      font-size: 1.25rem;
      color: var(--text);
      margin-bottom: 1rem;
      display: flex;
      align-items: center;
      gap: 0.25rem;
    }

    /* ── Anchor link icons ── */
    .anchor-link {
      opacity: 0;
      text-decoration: none;
      color: var(--anchor-icon);
      font-weight: normal;
      padding: 0 0.2rem;
      border-radius: 3px;
    }
    .anchor-link-inline {
      font-size: 0.8em;
      margin-right: 0.3rem;
    }
    .section-heading:hover .anchor-link,
    .section-heading:focus-within .anchor-link,
    .anchor-link:focus { opacity: 1; }
    .anchor-link:focus { outline: 2px solid var(--primary); outline-offset: 2px; }
    /* Show inline rule anchors when parent summary is hovered/focused */
    summary:hover .anchor-link,
    summary:focus-within .anchor-link { opacity: 1; }

    .nav { margin-bottom: 2rem; display: flex; gap: 1rem; border-bottom: 1px solid var(--border); }
    .nav-item { 
      padding: 0.5rem 1rem; 
      cursor: pointer; 
      border-bottom: 2px solid transparent;
      font-weight: 500;
      color: var(--text);
      background: transparent;
      border-top: none;
      border-left: none;
      border-right: none;
      font-size: 1rem;
      font-family: inherit;
    }
    .nav-item:hover { background: var(--hover-bg); }
    .nav-item:focus { outline: 2px solid var(--primary); outline-offset: -2px; }
    .nav-item.active { border-bottom-color: var(--primary); color: var(--primary); }

    .dashboard { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem; margin-bottom: 2rem; }
    .card { border: 1px solid var(--border); padding: 1.5rem; border-radius: 6px; background: var(--container-bg); }
    .card h3 { font-size: 1rem; margin-bottom: 1rem; color: var(--muted); text-transform: uppercase; letter-spacing: 0.05em; }
    .stat { font-size: 2.5rem; font-weight: 700; line-height: 1; margin-bottom: 0.5rem; }

    .bar-chart { display: flex; flex-direction: column; gap: 0.5rem; margin-top: 1rem; }
    .bar-item { display: flex; align-items: center; gap: 0.5rem; }
    .bar-label { width: 140px; font-size: 0.85rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    .bar-container { flex-grow: 1; background: var(--bar-bg); height: 12px; border-radius: 6px; overflow: hidden; }
    .bar-fill { height: 100%; background: var(--primary); }

    .severity-Critical { color: var(--critical); }
    .severity-Serious { color: var(--serious); }
    .severity-Moderate { color: var(--moderate); }
    .severity-Minor { color: var(--minor); }

    .filters { margin-bottom: 1.5rem; display: flex; gap: 1rem; align-items: center; flex-wrap: wrap; }
    select, input {
      padding: 0.5rem;
      border: 1px solid var(--border);
      border-radius: 4px;
      background: var(--container-bg);
      color: var(--text);
    }
    select:focus, input:focus { outline: 2px solid var(--primary); outline-offset: 2px; border-color: var(--primary); }

    .rule-list { display: flex; flex-direction: column; gap: 1rem; }
    details { border: 1px solid var(--border); border-radius: 6px; overflow: hidden; }
    summary { 
      padding: 1rem; 
      background: var(--surface); 
      cursor: pointer; 
      font-weight: 600; 
      display: flex; 
      justify-content: space-between; 
      align-items: center; 
    }
    summary:hover { background: var(--hover-bg); }
    summary:focus { outline: 2px solid var(--primary); outline-offset: 2px; }
    summary::-webkit-details-marker { display: none; }
    .rule-summary-info { display: flex; align-items: center; gap: 1rem; }
    .pages-affected { color: var(--muted); font-size: 0.8rem; }
    .badge { padding: 0.2rem 0.6rem; border-radius: 12px; font-size: 0.75rem; font-weight: 600; }
    .badge-severity { background: var(--bar-bg); color: var(--text); }
    .badge-count { background: var(--primary); color: var(--badge-count-text); }
    .badge-engine { background: #e8f4fd; color: #0969da; border: 1px solid #b6d9fb; }
    .badge-light { background: var(--container-bg); border: 1px solid var(--border); color: var(--text); }
    .badge-dark { background: var(--badge-dark-bg); color: var(--badge-dark-text); }
    
    .rule-content { padding: 1.5rem; border-top: 1px solid var(--border); }
    .rule-details { margin-bottom: 1.5rem; display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; }
    .example-list { margin-top: 1rem; }
    .example-item { 
      border-left: 4px solid var(--primary); 
      background: var(--code-bg); 
      padding: 1rem; 
      margin-bottom: 1rem; 
      font-family: monospace;
      font-size: 0.85rem;
      white-space: pre-wrap;
      word-break: break-all;
      color: var(--text);
    }
    .example-meta { font-family: sans-serif; font-weight: 600; margin-bottom: 0.5rem; display: flex; justify-content: space-between; }
    .example-mode { font-size: 0.75rem; color: var(--muted); margin-bottom: 0.5rem; }
    .example-code { color: var(--code-color); }
    .example-xpath { color: var(--xpath-color); margin-top: 0.5rem; }

    /* Priority table */
    .priority-section { margin-bottom: 2rem; padding: 1.5rem; border: 1px solid var(--border); border-radius: 6px; background: var(--surface); }
    .priority-section h2 { font-size: 1.25rem; margin-bottom: 0.5rem; }
    .priority-section > p { color: var(--muted); font-size: 0.9rem; margin-bottom: 1rem; }
    .table-wrapper { overflow-x: auto; }
    .priority-table { width: 100%; border-collapse: collapse; font-size: 0.9rem; }
    .priority-table th { background: var(--bar-bg); padding: 0.6rem 0.8rem; text-align: left; font-weight: 600; border-bottom: 2px solid var(--border); white-space: nowrap; }
    .priority-table td { padding: 0.5rem 0.8rem; border-bottom: 1px solid var(--border); vertical-align: middle; }
    .priority-table tr:last-child td { border-bottom: none; }
    .priority-table tr:hover td { background: var(--hover-bg); }
    .count-cell { text-align: right; }
    .count-zero { color: var(--muted); }
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
    .count-btn:hover { background: var(--hover-bg); border-color: var(--primary); }
    .count-btn:focus { outline: 2px solid var(--primary); outline-offset: 2px; }
    .count-btn.active-filter { background: var(--primary); color: var(--badge-count-text); border-color: var(--primary); }
    .page-link { font-weight: 500; }
    .page-title-text { display: block; font-size: 0.8rem; color: var(--muted); max-width: 280px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }

    /* Accordion sections for per-engine issue groups */
    .accordion-section {
      margin: 1.5rem 0;
      border: 1px solid var(--border);
      border-radius: 6px;
      overflow: hidden;
    }
    .accordion-header {
      padding: 1rem 1.25rem;
      background: var(--surface);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      list-style: none;
      font-weight: 600;
    }
    .accordion-header::-webkit-details-marker { display: none; }
    .accordion-header::marker { content: none; }
    .accordion-header::before {
      content: '▶';
      font-size: 0.7rem;
      color: var(--muted);
      flex-shrink: 0;
      transition: transform 0.15s ease;
      order: -1;
    }
    .accordion-section[open] > .accordion-header::before { transform: rotate(90deg); }
    .accordion-section[open] > .accordion-header {
      border-bottom: 1px solid var(--border);
      border-radius: 6px 6px 0 0;
    }
    .accordion-header:hover { background: var(--hover-bg); }
    .accordion-header:focus { outline: 2px solid var(--primary); outline-offset: -2px; }
    .accordion-header h2 {
      margin: 0;
      font-size: 1.1rem;
      font-weight: 600;
      color: var(--text);
      flex: 1;
    }
    .accordion-count {
      font-size: 0.8rem;
      color: var(--muted);
      font-weight: normal;
      white-space: nowrap;
    }
    .accordion-content {
      padding: 1rem 1.25rem;
    }

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
    .btn-clear { background: var(--container-bg); color: var(--text); border-color: var(--border); }
    .btn-clear:hover { background: var(--hover-bg); }
    .btn-copy { background: var(--success); color: white; border-color: var(--success); }
    .btn-copy:hover { background: #156b31; }
    .btn-copy.copied { background: var(--muted); border-color: var(--muted); }

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
    .visually-hidden {
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
      .nav, .filters, .nav-item, .priority-section, .filter-banner, #theme-toggle, .skip-link, .anchor-link { display: none; }
      details { border: none; }
      summary { background: none; padding: 0.5rem 0; border-bottom: 1px solid var(--border); }
      .container { box-shadow: none; max-width: none; width: 100%; padding: 0; }
    }
  </style>
</head>
<body>
  <a class="skip-link" href="#main-content">Skip to main content</a>
  <div class="container" id="main-content" tabindex="-1">
    <header>
      <div class="header-content">
        <h1>Accessibility Scan Report</h1>
        <div class="meta">
          <span><strong>Title:</strong> ${scanTitle || `Issue #${issueNumber}`}</span>
          <span><strong>Issue:</strong> <a href="${issueUrl}" target="_blank">#${issueNumber}</a></span>
          <span><strong>Date:</strong> ${new Date(scannedAt).toLocaleString()}</span>
          <span><strong>Duration:</strong> ${(totalElapsedMs / 60000).toFixed(1)}m</span>
          <span><strong>URLs:</strong> ${acceptedCount} / ${totalSubmitted}</span>
          ${darkModeUrlCount !== undefined && scannedCount > 0 && darkModeUrlCount > 0 ? `<span><strong>🌙 Dark Mode:</strong> ${darkModeUrlCount} / ${scannedCount} URLs</span>` : ''}
        </div>
      </div>
      <!-- Theme toggle: placed after header content for correct tab order -->
      <button id="theme-toggle" aria-label="Switch to dark mode">
        <svg aria-hidden="true" class="theme-icon sun-icon" viewBox="0 0 24 24" width="20" height="20">
          <circle cx="12" cy="12" r="5" fill="currentColor"/>
          <path fill="currentColor" d="M12 1v3M12 20v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M1 12h3M20 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>
        <svg aria-hidden="true" class="theme-icon moon-icon" viewBox="0 0 24 24" width="20" height="20">
          <path fill="currentColor" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
        </svg>
      </button>
    </header>

    <section aria-labelledby="section-summary">
      <h2 id="section-summary" class="section-heading" tabindex="-1">
        Summary
        <a href="#section-summary" class="anchor-link" aria-label="Link to Summary section">
          <span aria-hidden="true">#</span>
        </a>
      </h2>
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
    </section>

    <section aria-labelledby="section-issues">
      <h2 id="section-issues" class="section-heading" tabindex="-1">
        Issues
        <a href="#section-issues" class="anchor-link" aria-label="Link to Issues section">
          <span aria-hidden="true">#</span>
        </a>
      </h2>

      ${priorityTableHtml}

      ${engineAccordionHtml}
    </section>
  </div>

  <script>
    // ── Theme toggle ──
    const themeToggle = document.getElementById('theme-toggle');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    const savedTheme = localStorage.getItem('report-theme');
    let currentTheme;
    let userOverride = false;

    if (savedTheme) {
      currentTheme = savedTheme;
      userOverride = true;
    } else {
      currentTheme = prefersDark.matches ? 'dark' : 'light';
    }

    function applyTheme(theme) {
      document.documentElement.setAttribute('data-theme', theme);
      themeToggle.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
    }

    themeToggle.addEventListener('click', () => {
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      currentTheme = newTheme;
      userOverride = true;
      localStorage.setItem('report-theme', newTheme);
      applyTheme(newTheme);
    });

    prefersDark.addEventListener('change', (e) => {
      if (!userOverride) {
        currentTheme = e.matches ? 'dark' : 'light';
        applyTheme(currentTheme);
      }
    });

    applyTheme(currentTheme);

    // ── Filters / tabs ──

    // Priority table click handler: open and scroll to the relevant engine accordion
    document.addEventListener('click', (e) => {
      const btn = e.target.closest('.count-btn');
      if (!btn) return;
      const engine = btn.dataset.engine;
      if (!engine) return;

      // Toggle active state on the button
      const wasActive = btn.classList.contains('active-filter');
      document.querySelectorAll('.count-btn.active-filter').forEach(b => b.classList.remove('active-filter'));

      if (!wasActive) {
        btn.classList.add('active-filter');
        const accordion = document.getElementById('accordion-' + engine);
        if (accordion) {
          accordion.setAttribute('open', '');
          accordion.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
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
