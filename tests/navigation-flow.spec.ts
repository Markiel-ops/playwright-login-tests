import { test, expect } from '@playwright/test';

test.describe('Main navigation flow (authenticated)', () => {
  test('navigate to dashboard via menu', async ({ page }) => {
    await page.goto('/dashboard');
    await expect(page).toHaveURL(/dashboard/i);
  });

  test('navigate to profile via menu', async ({ page }) => {
    await page.goto('/profile');
    await expect(page).toHaveURL(/profile/i);
  });

  test('navigate to settings via menu', async ({ page }) => {
    await page.goto('/settings');
    await expect(page).toHaveURL(/settings/i);
  });
});
