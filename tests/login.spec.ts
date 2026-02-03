import { test, expect } from '@playwright/test';
import { LoginPage } from './pages';



test.describe('Login flow | unauthenticated access', () => {
  test('unauthenticated user is routed to SSO login', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();

    await expect(page).toHaveURL(/sso|login|auth/i);

    const isSSOVisible = await loginPage.isSSOTriggered();
    expect(isSSOVisible).toBeTruthy();
  });
});
