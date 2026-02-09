const { test } = require('@playwright/test');

test('@setup auth setup', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto(process.env.VOYA_LOGIN_URL);
  await page.getByPlaceholder('Username').fill(process.env.VOYA_EMAIL);
  await page.getByPlaceholder('Password').fill(process.env.VOYA_PASSWORD);
  await page.getByRole('button', { name: /log in/i }).click();

  await page.waitForURL(/voyadores/i);

  await context.storageState({
    path: 'storage/storageState.json',
  });

  await context.close();
});
