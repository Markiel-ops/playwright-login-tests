import { test, expect } from '@playwright/test';

test.describe('Sentinel | Post-Auth Smoke', () => {
  test('@smoke Authenticated user lands on app', async ({ page }) => {
    await page.goto('/', { waitUntil: 'domcontentloaded' });

    
    await expect(page).toHaveURL(/voyadores\.com/);

  });
});
