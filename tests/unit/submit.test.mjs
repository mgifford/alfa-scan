import { test } from 'node:test';
import { strict as assert } from 'node:assert';
import {
  parseUrls,
  isValidUrl,
  validateUrl,
  validateUrls,
  formatIssueBody,
  createGitHubIssue
} from '../../submit.js';

test('parseUrls handles line-by-line format', () => {
  const input = 'https://example.com\nhttps://example.org\nhttps://example.net';
  const result = parseUrls(input);
  assert.deepEqual(result, [
    'https://example.com',
    'https://example.org',
    'https://example.net'
  ]);
});

test('parseUrls handles comma-separated format', () => {
  const input = 'https://example.com,https://example.org,https://example.net';
  const result = parseUrls(input);
  assert.deepEqual(result, [
    'https://example.com',
    'https://example.org',
    'https://example.net'
  ]);
});

test('parseUrls handles mixed format', () => {
  const input = 'https://example.com\nhttps://example.org,https://example.net';
  const result = parseUrls(input);
  assert.deepEqual(result, [
    'https://example.com',
    'https://example.org',
    'https://example.net'
  ]);
});

test('parseUrls filters out non-HTTP URLs', () => {
  const input = 'https://example.com\nftp://example.org\nhttps://example.net';
  const result = parseUrls(input);
  assert.deepEqual(result, [
    'https://example.com',
    'https://example.net'
  ]);
});

test('isValidUrl accepts valid HTTPS URLs', () => {
  assert.strictEqual(isValidUrl('https://example.com'), true);
});

test('isValidUrl accepts valid HTTP URLs', () => {
  assert.strictEqual(isValidUrl('http://example.com'), true);
});

test('isValidUrl rejects invalid URLs', () => {
  assert.strictEqual(isValidUrl('not-a-url'), false);
  assert.strictEqual(isValidUrl('ftp://example.com'), false);
});

test('validateUrl rejects localhost URLs', () => {
  const result = validateUrl('http://localhost:3000');
  assert.strictEqual(result.valid, false);
  assert.match(result.reason, /localhost/i);
});

test('validateUrl rejects private IPv4 addresses', () => {
  const result = validateUrl('http://192.168.1.1');
  assert.strictEqual(result.valid, false);
  assert.match(result.reason, /private/i);
});

test('validateUrl accepts public URLs', () => {
  const result = validateUrl('https://example.com');
  assert.strictEqual(result.valid, true);
  assert.strictEqual(result.reason, '');
});

test('validateUrls separates accepted and rejected URLs', () => {
  const urls = [
    'https://example.com',
    'http://localhost:3000',
    'https://example.org',
    'http://192.168.1.1'
  ];
  const result = validateUrls(urls);
  
  assert.strictEqual(result.accepted.length, 2);
  assert.strictEqual(result.rejected.length, 2);
  assert.deepEqual(result.accepted, [
    'https://example.com',
    'https://example.org'
  ]);
});

test('formatIssueBody creates proper markdown format', () => {
  const scanTitle = 'Test Scan';
  const urls = ['https://example.com', 'https://example.org'];
  const body = formatIssueBody(scanTitle, urls);
  
  assert.match(body, /# URLs/);
  assert.match(body, /https:\/\/example\.com/);
  assert.match(body, /https:\/\/example\.org/);
});

// Helper function to mock global.window for GitHub issue tests
function withMockedLocation(testFn) {
  return async () => {
    const originalWindow = global.window;
    global.window = {
      location: {
        hostname: 'mgifford.github.io',
        pathname: '/alfa-scan/'
      }
    };
    
    try {
      await testFn();
    } finally {
      global.window = originalWindow;
    }
  };
}

test('createGitHubIssue prepends "SCAN: " prefix to title', withMockedLocation(async () => {
  const scanTitle = 'GSA.gov Homepage and Key Pages';
  const urls = ['https://www.gsa.gov', 'https://www.gsa.gov/about-us'];
  
  const githubUrl = await createGitHubIssue(scanTitle, urls);
  
  // Verify the URL contains the properly encoded title with "SCAN: " prefix
  assert.match(githubUrl, /title=SCAN%3A%20GSA\.gov%20Homepage%20and%20Key%20Pages/);
  
  // Decode the title from the URL to verify it exactly
  const urlObj = new URL(githubUrl);
  const titleParam = urlObj.searchParams.get('title');
  assert.strictEqual(titleParam, 'SCAN: GSA.gov Homepage and Key Pages');
}));

test('createGitHubIssue prepends "SCAN: " to any title', withMockedLocation(async () => {
  const scanTitle = 'My Custom Scan Title';
  const urls = ['https://example.com'];
  
  const githubUrl = await createGitHubIssue(scanTitle, urls);
  
  const urlObj = new URL(githubUrl);
  const titleParam = urlObj.searchParams.get('title');
  
  // Verify "SCAN: " is prepended to the user's title
  assert.strictEqual(titleParam, 'SCAN: My Custom Scan Title');
}));

test('createGitHubIssue does not double-prepend "SCAN: " if user includes it', withMockedLocation(async () => {
  // If a user accidentally types "SCAN: " themselves, we should not prepend it again
  const scanTitle = 'SCAN: My Scan';
  const urls = ['https://example.com'];
  
  const githubUrl = await createGitHubIssue(scanTitle, urls);
  
  const urlObj = new URL(githubUrl);
  const titleParam = urlObj.searchParams.get('title');
  
  // Should NOT result in "SCAN: SCAN: My Scan" - just "SCAN: My Scan"
  assert.strictEqual(titleParam, 'SCAN: My Scan');
  assert.ok(!titleParam.includes('SCAN: SCAN:'));
}));

test('createGitHubIssue handles lowercase "scan: " prefix case-insensitively', withMockedLocation(async () => {
  // If a user types "scan: " in lowercase, we should normalize it to "SCAN: "
  const scanTitle = 'scan: My Lowercase Scan';
  const urls = ['https://example.com'];
  
  const githubUrl = await createGitHubIssue(scanTitle, urls);
  
  const urlObj = new URL(githubUrl);
  const titleParam = urlObj.searchParams.get('title');
  
  // Should normalize to "SCAN: My Lowercase Scan", not keep "scan: " or double-prefix
  assert.strictEqual(titleParam, 'SCAN: My Lowercase Scan');
}));

test('createGitHubIssue normalizes mixed-case "ScAn: " prefix', withMockedLocation(async () => {
  // If a user types "ScAn: " in mixed case, we should normalize it to "SCAN: "
  const scanTitle = 'ScAn: My Mixed Case Scan';
  const urls = ['https://example.com'];
  
  const githubUrl = await createGitHubIssue(scanTitle, urls);
  
  const urlObj = new URL(githubUrl);
  const titleParam = urlObj.searchParams.get('title');
  
  // Should normalize to "SCAN: My Mixed Case Scan"
  assert.strictEqual(titleParam, 'SCAN: My Mixed Case Scan');
}));
