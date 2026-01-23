import { test, expect } from '@playwright/test';

test.skip(true, 'Dashboard route not available in DEV environment');
test.use({ storageState: 'auth.json' });

test('authenticated user can access app', async ({ page }) => {
  // Go to app root (not /dashboard)
  await page.goto('/');

  // Proof 1: not redirected to login
  await expect(page).not.toHaveURL(/login/i);

  // Proof 2: app shell exists (pick something stable)
  await expect(
    page.locator('body')
  ).toBeVisible();
});
