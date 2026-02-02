const { chromium } = require('@playwright/test');

module.exports = async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

 await page.goto(process.env.VOYA_LOGIN_URL, {
  waitUntil: 'domcontentloaded',
});

  await page.fill('input[type="email"]', process.env.VOYA_EMAIL);
  await page.fill('input[type="password"]', process.env.VOYA_PASSWORD);
  await page.click('button[type="submit"]');

  await page.waitForTimeout(3000);

  const cookies = await context.cookies();
  if (!cookies.length) {
    throw new Error('Global auth failed: no session cookies found');
  }

  await context.storageState({
    path: 'storage/auth.json',
  });

  await browser.close();
};
