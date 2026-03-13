import { ROLES, SEVERITY, wcagScUrl } from "./rule-metadata.mjs";
import { formatAlfaRule } from "./alfa-rule-metadata.mjs";

/**
 * Format WCAG criteria for display in HTML reports.
 * @param {{ scs: string[], level: string|null }} wcag
 * @returns {string} HTML string
 */
function formatWcagHtml(wcag) {
  if (!wcag) return "";
  const { scs, level } = wcag;
  if (level === "best-practice") {
    return `<span class="badge badge-wcag badge-best-practice">Best Practice</span>`;
  }
  if (!scs || scs.length === 0) return "";
  const scLinks = scs.map(sc => {
    const url = wcagScUrl(sc);
    return `<a href="${url}" target="_blank" rel="noopener" class="wcag-sc-link">SC ${sc}</a>`;
  }).join(", ");
  const levelBadge = level ? `<span class="badge badge-wcag badge-level-${level.toLowerCase()}">${level}</span>` : "";
  return `${scLinks} ${levelBadge}`;
}

/** Convert a string to a URL-safe slug for use as an HTML id */
function slugify(text) {
  return String(text ?? "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

/**
 * WCAG Success Criteria introduced in WCAG 2.1 (not in 2.0).
 * @type {Set<string>}
 */
const WCAG_21_SCS = new Set([
  "1.3.4", "1.3.5", "1.3.6",
  "1.4.10", "1.4.11", "1.4.12", "1.4.13",
  "2.1.4",
  "2.5.1", "2.5.2", "2.5.3", "2.5.4", "2.5.5", "2.5.6",
  "4.1.3"
]);

/**
 * WCAG Success Criteria introduced in WCAG 2.2 (not in 2.0 or 2.1).
 * @type {Set<string>}
 */
const WCAG_22_SCS = new Set([
  "2.4.11", "2.4.12", "2.4.13",
  "2.5.7", "2.5.8",
  "3.2.6",
  "3.3.7", "3.3.8", "3.3.9"
]);

/**
 * Given an array of WCAG SC strings, return the minimum WCAG version
 * required to cover all of them ("2.0", "2.1", or "2.2").
 * Returns "" when the array is empty or null.
 * @param {string[]} scs
 * @returns {string}
 */
function getWcagVersionFromScs(scs) {
  if (!scs || scs.length === 0) return "";
  let version = "2.0";
  for (const sc of scs) {
    if (WCAG_22_SCS.has(sc)) return "2.2";
    if (WCAG_21_SCS.has(sc)) version = "2.1";
  }
  return version;
}

/**
 * Extract the WCAG object for a consolidated failure, falling back to metadata fields.
 * @param {{ wcag?: {scs: string[], level: string|null}, metadata?: {wcagCriteria?: string[], conformanceLevel?: string} }} f
 * @returns {{ scs: string[], level: string|null }}
 */
function getRuleWcag(f) {
  return f.wcag || { scs: f.metadata?.wcagCriteria || [], level: f.metadata?.conformanceLevel || null };
}

export function generateInteractiveHtml(summary) {
  const { enhanced, scanTitle, issueNumber, issueUrl, scannedAt, totalElapsedMs, totalSubmitted, acceptedCount, scannedCount, darkModeUrlCount, results } = summary;
  const { consolidatedFailures, roleStats, severityStats } = enhanced;

  const rolesList = Object.values(ROLES);
  const severitiesList = Object.values(SEVERITY);

  // Calculate total issues once
  const totalIssues = consolidatedFailures.reduce((acc, f) => acc + f.totalOccurrences, 0);

  // Calculate detailed issue breakdown statistics for the header summary
  const engineCount = new Set(consolidatedFailures.map(f => f.engine)).size;
  let levelA = 0, levelAA = 0, levelAAA = 0;
  let version20 = 0, version21 = 0, version22 = 0;
  let axeStrict = 0, bestPractice = 0, otherUnique = 0;
  for (const f of consolidatedFailures) {
    const wcag = getRuleWcag(f);
    const wcagLevel = wcag.level || "";
    const count = f.totalOccurrences;
    // By WCAG conformance level
    if (wcagLevel === "A") levelA += count;
    else if (wcagLevel === "AA") levelAA += count;
    else if (wcagLevel === "AAA") levelAAA += count;
    // By WCAG version (A & AA only -- AAA is advisory and version tracking is less relevant)
    if (wcagLevel === "A" || wcagLevel === "AA") {
      const ver = getWcagVersionFromScs(wcag.scs || []);
      if (ver === "2.0") version20 += count;
      else if (ver === "2.1") version21 += count;
      else if (ver === "2.2") version22 += count;
    }
    // By confidence/engine category
    if (wcagLevel === "best-practice") {
      bestPractice += count;
    } else if (f.engine === "axe") {
      // axe-strict: axe violations mapped to WCAG SCs (high-confidence, no false positives)
      axeStrict += count;
    } else {
      // Other unique errors: non-axe engine violations
      otherUnique += count;
    }
  }

  // Build priority table data (top 10 pages by total unique errors)
  const ALL_SCANNERS = ['axe', 'alfa', 'equalAccess', 'accesslint', 'qualweb'];
  const SCANNER_LABELS = { axe: 'axe', alfa: 'ALFA', equalAccess: 'Equal Access', accesslint: 'AccessLint', qualweb: 'QualWeb' };
  // Mapping from lowercase engine key (as stored in summary.engines) to SCANNERS key
  const ENGINE_KEY_MAP = { axe: 'axe', alfa: 'alfa', equalaccess: 'equalAccess', accesslint: 'accesslint', qualweb: 'qualweb' };

  // Determine which scanners to show columns for based on which engines were run
  const enginesSpec = summary.engines || ["all"];
  const isAllEngines = enginesSpec.includes("all");
  const activeScannerKeys = isAllEngines
    ? ALL_SCANNERS
    : [...new Set([
        ...enginesSpec.map(e => ENGINE_KEY_MAP[e.toLowerCase()]).filter(Boolean),
        'axe' // axe always included
      ])];
  // Preserve original SCANNERS order
  const SCANNERS = ALL_SCANNERS.filter(s => activeScannerKeys.includes(s));

  function getUnique(result, engine) {
    if (engine === 'axe') return result.axe?.uniqueFailedCount ?? result.axe?.counts?.failed ?? 0;
    if (engine === 'alfa') return result.alfa?.uniqueFailedCount ?? result.alfa?.counts?.failed ?? 0;
    if (engine === 'equalAccess') return result.equalAccess?.uniqueFailedCount ?? result.equalAccess?.counts?.failed ?? 0;
    if (engine === 'accesslint') return result.accesslint?.uniqueFailedCount ?? result.accesslint?.counts?.failed ?? 0;
    if (engine === 'qualweb') return result.qualweb?.counts?.failed ?? 0;
    return 0;
  }

  const PRIORITY_TABLE_DEFAULT_ROWS = 10;

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
    .sort((a, b) => b.total - a.total);

  const totalPageCount = pagesByErrorCount.length;
  const extraPageCount = Math.max(0, totalPageCount - PRIORITY_TABLE_DEFAULT_ROWS);

  const priorityTableHtml = pagesByErrorCount.length > 0 ? `
    <section class="priority-section" aria-labelledby="priority-heading">
      <h2 id="priority-heading">🎯 Pages with Most Errors</h2>
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
            ${pagesByErrorCount.map(({ result: r, counts, total }, index) => {
    const displayUrl = r.finalUrl || r.submittedUrl;
    const filterUrl = r.submittedUrl;  // Must match the URL stored in consolidatedFailures.pages
    const pageTitle = r.pageTitle || displayUrl;
    const isExtra = index >= PRIORITY_TABLE_DEFAULT_ROWS;
    return `
              <tr${isExtra ? ' class="priority-row-extra" hidden' : ''}>
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
      ${extraPageCount > 0 ? `
      <div class="show-all-pages-wrapper">
        <button class="btn btn-show-all-pages" id="show-all-pages-btn"
                aria-expanded="false">
          Show all ${totalPageCount} pages
        </button>
      </div>` : ''}
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
    // Use stored wcag info (set during buildEnhancedSummary), falling back to metadata
    const wcag = getRuleWcag(f);
    const wcagHtml = formatWcagHtml(wcag);
    const wcagLevel = wcag.level || "";
    const wcagVersion = wcagLevel === "best-practice"
      ? "best-practice"
      : getWcagVersionFromScs(wcag.scs);

    return `
      <details class="rule-card"
               id="rule-${ruleSlug}"
               data-roles='${rolesData}'
               data-severity="${f.metadata.severity}"
               data-engine="${f.engine}"
               data-page-urls='${pageUrlsData}'
               data-wcag-level="${escapeHtml(wcagLevel)}"
               data-wcag-version="${escapeHtml(wcagVersion)}"
               data-search="${escapeHtml((displayId + " " + displayDesc).toLowerCase())}">
        <summary>
          <div class="rule-summary-info">
            <span class="badge badge-count">${f.totalOccurrences}</span>
            <span class="badge badge-severity severity-${f.metadata.severity}">${f.metadata.severity}</span>
            <span class="badge badge-engine">${f.engine}</span>
            ${wcagHtml ? `<span class="wcag-inline">${wcagHtml}</span>` : ''}
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
              ${wcagHtml ? `<p><strong>WCAG:</strong> ${wcagHtml}</p>` : ''}
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
          <h2>🔧 Most Common Issues (${label})</h2>
          <span class="accordion-count">${engFailures.length} rule${engFailures.length !== 1 ? 's' : ''}</span>
        </summary>
        <div class="accordion-content rule-list">
          ${engCardsHtml}
        </div>
      </details>
      `;
    })
    .join('');

  // Engine filter options for the filter bar
  const engineFilterOptions = [
    '<option value="all">All Engines</option>',
    ...SCANNERS.map(s => `<option value="${s}">${escapeHtml(SCANNER_LABELS[s])}</option>`)
  ].join('');

  const filterControlsHtml = `
    <div class="filters" id="rule-filters" role="search" aria-label="Filter accessibility rules">
      <div class="filter-group">
        <label for="filter-type" class="filter-label">Type:</label>
        <select id="filter-type" aria-label="Filter by requirement type">
          <option value="all">All</option>
          <option value="wcag">WCAG Requirements</option>
          <option value="best-practice">Best Practices</option>
        </select>
      </div>
      <div class="filter-group">
        <label for="filter-level" class="filter-label">WCAG Level:</label>
        <select id="filter-level" aria-label="Filter by WCAG conformance level">
          <option value="all">All Levels</option>
          <option value="A">Level A only</option>
          <option value="A+AA">A &amp; AA</option>
          <option value="A+AA+AAA">A, AA &amp; AAA</option>
        </select>
      </div>
      <div class="filter-group">
        <label for="filter-version" class="filter-label">WCAG Version:</label>
        <select id="filter-version" aria-label="Filter by WCAG version">
          <option value="all">All Versions</option>
          <option value="2.0">WCAG 2.0</option>
          <option value="2.1">WCAG 2.1</option>
          <option value="2.2">WCAG 2.2</option>
        </select>
      </div>
      <div class="filter-group">
        <label for="filter-engine" class="filter-label">Engine:</label>
        <select id="filter-engine" aria-label="Filter by accessibility engine">
          ${engineFilterOptions}
        </select>
      </div>
      <button class="btn btn-clear" id="clear-rule-filters" type="button" hidden>Clear Filters</button>
      <span id="filter-rule-count" class="filter-count-text" aria-live="polite" aria-atomic="true"></span>
    </div>`;

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
    .card-issues-overview { grid-column: 1 / -1; }
    .issues-breakdown { list-style: disc; padding-left: 1.4rem; margin: 0; font-size: 0.9rem; line-height: 2; }
    .issues-breakdown li { color: var(--text); }
    .stat-inline { font-size: 1.4rem; font-weight: 700; }

    .bar-chart { display: flex; flex-direction: column; gap: 0.5rem; margin-top: 1rem; }
    .bar-item { display: flex; align-items: center; gap: 0.5rem; }
    .bar-label { width: 140px; font-size: 0.85rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    .bar-container { flex-grow: 1; background: var(--bar-bg); height: 12px; border-radius: 6px; overflow: hidden; }
    .bar-fill { height: 100%; background: var(--primary); }

    .severity-Critical { color: var(--critical); }
    .severity-Serious { color: var(--serious); }
    .severity-Moderate { color: var(--moderate); }
    .severity-Minor { color: var(--minor); }

    .filters { margin-bottom: 1.5rem; display: flex; gap: 0.75rem; align-items: center; flex-wrap: wrap; padding: 1rem; background: var(--surface); border: 1px solid var(--border); border-radius: 6px; }
    .filter-group { display: flex; align-items: center; gap: 0.4rem; }
    .filter-label { font-size: 0.9rem; font-weight: 600; white-space: nowrap; color: var(--text); }
    .filter-count-text { font-size: 0.85rem; color: var(--muted); margin-left: auto; }
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
    .rule-summary-info { display: flex; align-items: center; gap: 1rem; flex-wrap: wrap; }
    .pages-affected { color: var(--muted); font-size: 0.8rem; }
    .badge { padding: 0.2rem 0.6rem; border-radius: 12px; font-size: 0.75rem; font-weight: 600; }
    .badge-severity { background: var(--bar-bg); color: var(--text); }
    .badge-count { background: var(--primary); color: var(--badge-count-text); }
    .badge-engine { background: #e8f4fd; color: #0969da; border: 1px solid #b6d9fb; }
    .badge-light { background: var(--container-bg); border: 1px solid var(--border); color: var(--text); }
    .badge-dark { background: var(--badge-dark-bg); color: var(--badge-dark-text); }
    .badge-wcag { font-size: 0.7rem; }
    .badge-level-a { background: #d1fae5; color: #065f46; border: 1px solid #6ee7b7; }
    .badge-level-aa { background: #dbeafe; color: #1e40af; border: 1px solid #93c5fd; }
    .badge-level-aaa { background: #ede9fe; color: #5b21b6; border: 1px solid #c4b5fd; }
    .badge-best-practice { background: #fef3c7; color: #92400e; border: 1px solid #fcd34d; }
    .wcag-inline { display: inline-flex; align-items: center; gap: 0.25rem; }
    .wcag-sc-link { color: var(--link); font-size: 0.8rem; text-decoration: none; }
    .wcag-sc-link:hover { text-decoration: underline; }
    
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
    .show-all-pages-wrapper { margin-top: 0.75rem; text-align: center; }
    .btn-show-all-pages { background: var(--container-bg); color: var(--primary); border: 1px solid var(--primary); border-radius: 6px; padding: 0.4rem 1rem; font-size: 0.85rem; font-weight: 600; cursor: pointer; }
    .btn-show-all-pages:hover { background: var(--hover-bg); }
    .btn-show-all-pages:focus { outline: 2px solid var(--primary); outline-offset: 2px; }
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
    .show-all-pages-wrapper { margin-top: 0.75rem; text-align: center; }
    .btn-show-all-pages { background: #fff; color: var(--primary); border: 1px solid var(--primary); border-radius: 6px; padding: 0.4rem 1rem; font-size: 0.85rem; font-weight: 600; cursor: pointer; }
    .btn-show-all-pages:hover { background: #eaf1fb; }
    .btn-show-all-pages:focus { outline: 2px solid var(--primary); outline-offset: 2px; }
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
    .btn-clear { background: var(--container-bg); color: var(--text); border-color: var(--border); }
    .btn-clear:hover { background: var(--hover-bg); }
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
        <div class="card card-issues-overview">
          <h3>Issues</h3>
          <ul class="issues-breakdown" aria-label="Issues breakdown by WCAG level, version, and category">
            <li>
              <strong>By Level:</strong>
              A (${levelA}), AA (${levelAA}), AAA (${levelAAA})
            </li>
            <li>
              <strong>By Version (A &amp; AA):</strong>
              WCAG 2.0 (${version20}), WCAG 2.1 (${version21}), WCAG 2.2 (${version22})
            </li>
            <li>
              <strong>By Category:</strong>
              axe-strict (${axeStrict}), Best Practice (${bestPractice}), Other unique errors (${otherUnique})
            </li>
            <li>
              <strong>Total: <span class="stat-inline" aria-label="${totalIssues} total issues">${totalIssues}</span></strong>
              across ${consolidatedFailures.length} unique rules and ${engineCount} accessibility engine${engineCount !== 1 ? 's' : ''}
            </li>
          </ul>
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

      ${filterControlsHtml}

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

    // ── Show all / Show fewer pages toggle ──
    const showAllBtn = document.getElementById('show-all-pages-btn');
    if (showAllBtn) {
      showAllBtn.addEventListener('click', () => {
        const expanded = showAllBtn.getAttribute('aria-expanded') === 'true';
        const extraRows = document.querySelectorAll('.priority-row-extra');
        if (expanded) {
          extraRows.forEach(row => { row.hidden = true; });
          showAllBtn.setAttribute('aria-expanded', 'false');
          showAllBtn.textContent = 'Show all ' + (extraRows.length + ${PRIORITY_TABLE_DEFAULT_ROWS}) + ' pages';
        } else {
          extraRows.forEach(row => { row.hidden = false; });
          showAllBtn.setAttribute('aria-expanded', 'true');
          showAllBtn.textContent = 'Show fewer pages';
        }
      });
    }

    // ── Rule card filtering ──
    const filterTypeEl = document.getElementById('filter-type');
    const filterLevelEl = document.getElementById('filter-level');
    const filterVersionEl = document.getElementById('filter-version');
    const filterEngineEl = document.getElementById('filter-engine');
    const clearRuleFiltersBtn = document.getElementById('clear-rule-filters');
    const filterRuleCountEl = document.getElementById('filter-rule-count');

    function applyRuleFilters() {
      const type = filterTypeEl.value;
      const level = filterLevelEl.value;
      const version = filterVersionEl.value;
      const engine = filterEngineEl.value;

      const allCards = document.querySelectorAll('.rule-card');
      let visibleCount = 0;

      allCards.forEach(card => {
        const cardEngine = card.dataset.engine || '';
        const cardLevel = card.dataset.wcagLevel || '';
        const cardVersion = card.dataset.wcagVersion || '';
        const isBestPractice = cardLevel === 'best-practice';

        let visible = true;

        // Engine filter
        if (engine !== 'all' && cardEngine !== engine) visible = false;

        // Type filter
        if (visible && type === 'wcag' && isBestPractice) visible = false;
        if (visible && type === 'best-practice' && !isBestPractice) visible = false;

        // Level filter (only meaningful for WCAG requirements, not best practices)
        if (visible && level !== 'all' && !isBestPractice) {
          if (level === 'A' && cardLevel !== 'A') visible = false;
          if (level === 'A+AA' && cardLevel !== 'A' && cardLevel !== 'AA') visible = false;
          // 'A+AA+AAA' includes A, AA, and AAA — any known WCAG level passes
        }

        // Version filter (only for WCAG requirements with a known version)
        if (visible && version !== 'all' && !isBestPractice && cardVersion !== '') {
          if (version === '2.0' && cardVersion !== '2.0') visible = false;
          else if (version === '2.1' && cardVersion !== '2.0' && cardVersion !== '2.1') visible = false;
          // '2.2' shows all
        }

        card.style.display = visible ? '' : 'none';
        if (visible) visibleCount++;
      });

      // Hide accordion sections that have no visible rule cards
      document.querySelectorAll('.accordion-section').forEach(section => {
        const sectionCards = section.querySelectorAll('.rule-card');
        const hasVisible = Array.from(sectionCards).some(c => c.style.display !== 'none');
        section.style.display = hasVisible ? '' : 'none';
      });

      // Update live count text
      const total = allCards.length;
      const hasActiveFilters = type !== 'all' || level !== 'all' || version !== 'all' || engine !== 'all';
      filterRuleCountEl.textContent = hasActiveFilters
        ? \`Showing \${visibleCount} of \${total} rules\`
        : '';
      clearRuleFiltersBtn.hidden = !hasActiveFilters;
    }

    [filterTypeEl, filterLevelEl, filterVersionEl, filterEngineEl].forEach(el => {
      el.addEventListener('change', applyRuleFilters);
    });

    clearRuleFiltersBtn.addEventListener('click', () => {
      filterTypeEl.value = 'all';
      filterLevelEl.value = 'all';
      filterVersionEl.value = 'all';
      filterEngineEl.value = 'all';
      applyRuleFilters();
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
