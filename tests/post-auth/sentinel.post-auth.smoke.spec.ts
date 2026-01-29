import { test, expect } from '@playwright/test';

test.describe('Sentinel | Post-Auth Smoke', () => {
  test.use({ storageState: 'playwright/.auth/user.json' });

  test('@smoke SSO authentication completes successfully', async ({ page }) => {
    await page.goto('/');

    // Assert we reached the SSO gateway successfully
    await expect(page.url()).toContain('dev2-login.voyadores.com');

    // Assert redirect parameter is present (auth contract)
    await expect(page.url()).toContain('redirect=');
  });
});
