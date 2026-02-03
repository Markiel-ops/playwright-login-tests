import { test, expect } from '@playwright/test';

test.describe('Protected routes (authenticated)', () => {
  test('can access dashboard', async ({ page }) => {
    await page.goto('/dashboard');
    await expect(page).toHaveURL(/dashboard/i);
  });

  test('can access profile', async ({ page }) => {
    await page.goto('/profile');
    await expect(page).toHaveURL(/profile/i);
  });
});
