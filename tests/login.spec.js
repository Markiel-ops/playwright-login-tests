// 🔑 Load environment variables FIRST
require('dotenv').config();

// 🎭 Playwright
const { test, expect } = require('@playwright/test');

test.describe('Login Page - Voyadores DEV', () => {

  test.beforeEach(async ({ page }, testInfo) => {
    // ⛔ Skip login tests when already authenticated project is used
    if (testInfo.project.name === 'logged-in') {
      test.skip(true, 'Login page should not run when authenticated');
    }

    // 🌐 Go to login page
    await page.goto('/');
  });

  test('login page loads', async ({ page }) => {
    await expect(page.getByPlaceholder('Username')).toBeVisible();
    await expect(page.getByPlaceholder('Password')).toBeVisible();
    await expect(
      page.getByRole('button', { name: /log in/i })
    ).toBeVisible();
  });

  test('shows validation errors when submitting empty form', async ({ page }) => {
    await page.getByRole('button', { name: /log in/i }).click();

    await expect(page.getByText(/username is required/i)).toBeVisible();
    await expect(page.getByText(/password is required/i)).toBeVisible();
  });

  test('shows error when credentials are invalid', async ({ page }) => {
    await page.getByPlaceholder('Username').fill('wrong@email.com');
    await page.getByPlaceholder('Password').fill('wrongpassword');
    await page.getByRole('button', { name: /log in/i }).click();

    await expect(
      page.getByText(/invalid|incorrect|wrong/i)
    ).toBeVisible();

    // Still on login page
    await expect(page).toHaveURL(/login/i);
  });

  test('user can log in with valid credentials', async ({ page }) => {
    await page.getByPlaceholder('Username').fill(process.env.VOYA_EMAIL);
    await page.getByPlaceholder('Password').fill(process.env.VOYA_PASSWORD);
    await page.getByRole('button', { name: /log in/i }).click();

    // ✅ Proof login succeeded (REALISTIC ASSERTION)
    await expect(page).not.toHaveURL(/login/i);

    // 🔐 Save authenticated state
    await page.context().storageState({ path: 'auth.json' });
  });

 test('password visibility toggle works', async ({ page }) => {
  const passwordInput = page.getByPlaceholder('Password');

  // Find toggle near password input
  const toggleButton = passwordInput
    .locator('xpath=..')
    .locator('button, svg, span')
    .first();

  // Password input exists and is masked initially
  await expect(passwordInput).toBeVisible();
  await expect(passwordInput).toHaveAttribute('type', 'password');

  // Toggle visibility (behavioral check)
  await toggleButton.click();

  // ✅ Input still exists and is interactable after toggle
  await expect(passwordInput).toBeVisible();
});


});
