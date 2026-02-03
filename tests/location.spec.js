import { test, expect } from '@playwright/test';

test('voyadores - login navigation shows correct page', async ({ page }, testInfo) => {
  if (testInfo.project.name === 'logged-in') {
    test.skip(true, 'Login navigation does not apply when already logged in');
  }

  await page.goto(process.env.BASE_URL);

  await page.getByRole('button', { name: /log in|login|sign in/i }).click();

  await expect(page).toHaveURL(/login/);
});

