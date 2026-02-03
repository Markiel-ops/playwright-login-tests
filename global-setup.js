const { chromium } = require('@playwright/test');
require('dotenv').config();
const { LoginPage } = require('./tests/pages/login.page.js');

module.exports = async () => {
  const browser = await chromium.launch();

  const context = await browser.newContext({
    baseURL: process.env.BASE_URL,
  });

  const page = await context.newPage();
  const loginPage = new LoginPage(page);

  await loginPage.goTo();
  await loginPage.openLogin();
  await loginPage.fillCredentials(
    process.env.VOYA_EMAIL,
    process.env.VOYA_PASSWORD
  );
  await loginPage.submit();

  await page.waitForLoadState('domcontentloaded');

  await context.storageState({ path: 'storageState.json' });
  await browser.close();
};
