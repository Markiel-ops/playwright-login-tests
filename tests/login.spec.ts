import { test, expect } from '@playwright/test';
const LoginPage = require('./pages/login.page');

test.describe('Login flow | unauthenticated access', () => {
  test('unauthenticated user is routed to SSO login', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();

    await expect(page).toHaveURL(/sso|login|auth/i);

    const isSSOVisible = await loginPage.isSSOTriggered();
    expect(isSSOVisible).toBeTruthy();
  });
});
