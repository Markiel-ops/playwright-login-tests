import { chromium } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

export default async function globalSetup() {
  const { BASE_URL, VOYA_LOGIN_URL, VOYA_EMAIL, VOYA_PASSWORD } = process.env;

  if (!BASE_URL || !VOYA_LOGIN_URL || !VOYA_EMAIL || !VOYA_PASSWORD) {
    throw new Error(
      'Missing env vars: BASE_URL, VOYA_LOGIN_URL, VOYA_EMAIL, VOYA_PASSWORD'
    );
  }

  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  // Go to login
  await page.goto(VOYA_LOGIN_URL);

  // Login
  await page.getByPlaceholder('Username').fill(VOYA_EMAIL);
  await page.getByPlaceholder('Password').fill(VOYA_PASSWORD);
  await page.getByRole('button', { name: /log in/i }).click();

  // Wait until we are NOT on login anymore
  await page.waitForURL(/voyadores/i, { timeout: 15000 });

  
  // Save auth state
  await context.storageState({
    path: 'playwright/.auth/user.json',
  });

  await browser.close();
}
