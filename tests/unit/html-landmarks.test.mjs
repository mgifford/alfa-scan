import { test } from 'node:test';
import { strict as assert } from 'node:assert';
import { readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, '..', '..');

/**
 * Tests that static HTML pages contain required WCAG landmark elements.
 * Prevents regression of axe rule landmark-one-main.
 */

test('index.html has a main landmark (landmark-one-main)', () => {
  const html = readFileSync(join(rootDir, 'index.html'), 'utf8');
  assert.ok(/<main[\s>]/.test(html), 'index.html must have a <main> element');
  assert.ok(html.includes('id="main-content"'), 'index.html <main> must have id="main-content"');
});

test('index.html has a skip link pointing to main content', () => {
  const html = readFileSync(join(rootDir, 'index.html'), 'utf8');
  assert.ok(html.includes('href="#main-content"'), 'index.html must have a skip link to #main-content');
  assert.ok(html.includes('skip-link'), 'index.html must have a skip-link class');
});

test('index.html has a header landmark', () => {
  const html = readFileSync(join(rootDir, 'index.html'), 'utf8');
  assert.ok(/<header[\s>]/.test(html), 'index.html must have a <header> element');
});

test('index.html nav has an accessible label', () => {
  const html = readFileSync(join(rootDir, 'index.html'), 'utf8');
  assert.ok(/<nav[^>]+aria-label=/.test(html), 'index.html nav must have an aria-label attribute');
});

test('reports.html has a main landmark (landmark-one-main)', () => {
  const html = readFileSync(join(rootDir, 'reports.html'), 'utf8');
  assert.ok(/<main[\s>]/.test(html), 'reports.html must have a <main> element');
  assert.ok(html.includes('id="main-content"'), 'reports.html <main> must have id="main-content"');
});

test('reports.html has a skip link pointing to main content', () => {
  const html = readFileSync(join(rootDir, 'reports.html'), 'utf8');
  assert.ok(html.includes('href="#main-content"'), 'reports.html must have a skip link to #main-content');
  assert.ok(html.includes('skip-link'), 'reports.html must have a skip-link class');
});

test('reports.html has a header landmark', () => {
  const html = readFileSync(join(rootDir, 'reports.html'), 'utf8');
  assert.ok(/<header[\s>]/.test(html), 'reports.html must have a <header> element');
});

test('reports.html nav has an accessible label', () => {
  const html = readFileSync(join(rootDir, 'reports.html'), 'utf8');
  assert.ok(/<nav[^>]+aria-label=/.test(html), 'reports.html nav must have an aria-label attribute');
});
