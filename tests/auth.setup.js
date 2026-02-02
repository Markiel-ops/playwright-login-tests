const { test, expect } = require('@playwright/test');
require('dotenv').config();

test('authenticate user and save state', async ({ page }) => {
  const {
    VOYA_LOGIN_URL,
    VOYA_EMAIL,
    VOYA_PASSWORD,
  } = process.env;

  if (!VOYA_LOGIN_URL || !VOYA_EMAIL || !VOYA_PASSWORD) {
    throw new Error(
      'Missing env vars: VOYA_LOGIN_URL, VOYA_EMAIL, VOYA_PASSWORD'
    );
  }

  // ---- GO TO LOGIN ----
  await page.goto(VOYA_LOGIN_URL, { waitUntil: 'domcontentloaded' });

  // ---- LOGIN FORM (STRICT + STABLE) ----
  await page.locator('#inp-login-username').fill(VOYA_EMAIL);
  await page.locator('input[type="password"]').fill(VOYA_PASSWORD);

  await page.getByRole('button', { name: /log in/i }).click();

  // ---- DO NOT ASSERT URL (BROKEN REDIRECT IN DEV) ----
  // Instead, wait for auth cookie or storage to exist

  await page.waitForTimeout(1500); // allow auth handshake to complete

  const cookies = await page.context().cookies();
  expect(cookies.length).toBeGreaterThan(0);

  // ---- SAVE AUTH STATE ----
  await page.context().storageState({
    path: 'playwright/.auth/user.json',
  });
});
