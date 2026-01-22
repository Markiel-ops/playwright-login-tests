import { test, expect } from '@playwright/test';

test.describe('Login Page – Voyadores DEV', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('login page loads', async ({ page }) => {
    await expect(page.getByPlaceholder('Username')).toBeVisible();
    await expect(page.getByPlaceholder('Password')).toBeVisible();
    await expect(page.getByRole('button', { name: /log in/i })).toBeVisible();
  });

  test('keep me logged in checkbox is toggleable', async ({ page }) => {
    const checkbox = page.getByRole('checkbox', { name: /keep me logged in/i });

    await checkbox.check();
    await expect(checkbox).toBeChecked();

    await checkbox.uncheck();
    await expect(checkbox).not.toBeChecked();
  });

  test('password visibility toggle works', async ({ page }) => {
    const password = page.getByPlaceholder('Password');
    const toggle = page.locator('#spn-login-password-toggle');

    await password.fill('dummy');
    await expect(password).toHaveAttribute('type', 'password');

    await toggle.click();
    await expect(password).toHaveAttribute('type', 'text');

    await toggle.click();
    await expect(password).toHaveAttribute('type', 'password');
  });

  test('validation errors appear when logging in with empty fields', async ({ page }) => {
    await page.locator('#btn-login-user').click();

    await expect(page.getByText(/username is required/i)).toBeVisible();
    await expect(page.getByText(/password is required/i)).toBeVisible();
  });

  test('forgot password flow opens reset page and returns to login', async ({ page }) => {
    await page.locator('#btn-login-forgot-password').click();
    await expect(page.getByText(/reset password/i)).toBeVisible();

    await page.locator('#btn-login-forgot').click();
    await expect(page.getByPlaceholder('Username')).toBeVisible();
  });

  test('user can log in with valid credentials', async ({ page }) => {
    await page.getByPlaceholder('Username').fill(process.env.VOYA_EMAIL);
    await page.getByPlaceholder('Password').fill(process.env.VOYA_PASSWORD);
    await page.locator('#btn-login-user').click();

    // REAL success signal (NOT URL, NOT DOM removal)
    await expect(page.locator('#btn-open-account')).toBeVisible({ timeout: 30000 });
  });

  test('logout returns user to login page', async ({ page }) => {
    // Login first
    await page.getByPlaceholder('Username').fill(process.env.VOYA_EMAIL);
    await page.getByPlaceholder('Password').fill(process.env.VOYA_PASSWORD);
    await page.locator('#btn-login-user').click();

    await expect(page.locator('#btn-open-account')).toBeVisible({ timeout: 30000 });

    // Logout
    await page.locator('#btn-open-account').click();
    await page.locator('a[href="/logout"]').click();

    // Assert login UI is back
    await expect(page.getByPlaceholder('Username')).toBeVisible();
    await expect(page.getByPlaceholder('Password')).toBeVisible();
  });

});
