import { Page, expect } from '@playwright/test';

export async function login(page: Page) {
  await page.goto(process.env.BASE_URL!);

  await page.fill('input[type="email"]', process.env.VOYA_EMAIL!);
  await page.fill('input[type="password"]', process.env.VOYA_PASSWORD!);

  await page.click('button[type="submit"]');

  // baby-step validation
await expect(page).toHaveURL(process.env.BASE_URL!);


}
