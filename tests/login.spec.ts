import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/login.page';

test.use({ storageState: undefined });

test('unauthenticated user is routed to SSO login', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();

  await expect(page).toHaveURL(/login|auth|sso|voyadores/i);

  const ssoVisible = await loginPage.isSSOTriggered();
  expect(ssoVisible).toBeTruthy();
});
