const { test, expect } = require('@playwright/test');

test.describe('Post-auth smoke tests', () => {
  test('@smoke SSO authentication completes successfully', async ({ page }) => {
    // Avoid full load (DEV2 crashes on heavy scripts)
    await page.goto('/', { waitUntil: 'domcontentloaded' });

    // Auth success = session exists
    const cookies = await page.context().cookies();
    expect(cookies.length).toBeGreaterThan(0);

    // Authenticated domain
    await expect(page).toHaveURL(/dev2-go\.voyadores\.com/);
  });
});
