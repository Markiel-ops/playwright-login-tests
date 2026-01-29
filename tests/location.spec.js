import { test, expect } from '@playwright/test';

test('voyadores - login navigation shows correct page', async ({ page }) => {

  // Go to page  
  await page.goto(process.env.BASE_URL);

  // Perform user action
  await page.getByRole('button', { name: /log in|login|sign in/i }).click();

  // Assert location
  await expect(page).toHaveURL(/login/);

  // Assert page identity
  await expect(page.getByRole('textbox', { name: /username/i })).toBeVisible();
  await expect(page.locator('input[type="password"]')).toBeVisible();
});
