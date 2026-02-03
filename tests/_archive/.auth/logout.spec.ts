import { test, expect } from '@playwright/test';

test.describe('Logout / access revocation', () => {
  test('user session is revoked and protected routes are blocked', async ({ page, context }) => {
    // Start authenticated via storageState (already proven working)
    await page.goto('/dashboard');
    await expect(page).toHaveURL(/dashboard/i);

    // Clear session manually (simulate logout)
    await context.clearCookies();
    await context.clearPermissions();

    // Try to access protected route again
    await page.goto('/dashboard');

    // User should be redirected to login
    await expect(page).toHaveURL(/login/i);
  });
});
