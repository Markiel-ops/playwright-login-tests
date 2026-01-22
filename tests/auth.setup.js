import { chromium } from '@playwright/test';
import 'dotenv/config';

export default async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto(process.env.VOYA_LOGIN_URL);

  // Login
  await page.getByPlaceholder('Username').fill(process.env.VOYA_EMAIL);
  await page.getByPlaceholder('Password').fill(process.env.VOYA_PASSWORD);
  await page.locator('#btn-login-user').click();

  // ✅ WAIT FOR AUTH COOKIE / STORAGE (NOT UI)
  await page.waitForFunction(() => {
    return document.cookie.length > 0;
  }, { timeout: 30000 });

  // Save authenticated state
  await context.storageState({
    path: 'playwright/.auth/user.json',
  });

  await browser.close();
};
