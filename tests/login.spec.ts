import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/login.page';

test.describe('Login Page – Voyadores DEV', () => {
  test.beforeEach(async ({ page }, testInfo) => {
    // Skip login tests if already authenticated
    if (testInfo.project.name === 'logged-in') {
      test.skip(true, 'Login flow is skipped for authenticated users');
    }

    const loginPage = new LoginPage(page);
    await loginPage.goTo();
  });

  test('loads login page', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.openLogin();

    await expect(loginPage.usernameInput).toBeVisible();
    await expect(loginPage.passwordInput).toBeVisible();
    await expect(loginPage.submitButton).toBeVisible();
  });

  test('allows typing into login inputs', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.openLogin();
    await expect(page).toHaveURL(/login/);

    await loginPage.fillCredentials(
      'testuser@example.com',
      'P@ssw0rd123'
    );

    await expect(loginPage.usernameInput).toHaveValue('testuser@example.com');
    await expect(loginPage.passwordInput).toHaveValue('P@ssw0rd123');
  });

  test('shows validation errors for empty login form', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.openLogin();
    await loginPage.submit();

    await expect(
      page.getByText(/username is required/i)
    ).toBeVisible();

    await expect(
      page.getByText(/password is required/i)
    ).toBeVisible();
  });
});
