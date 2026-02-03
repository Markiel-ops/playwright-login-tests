const { test, expect } = require('../Fixtures/test');

test('login works', async ({ loginPage, page }) => {
  await loginPage.goto('/login');
  await loginPage.login(process.env.VOYA_EMAIL, process.env.VOYA_PASSWORD);

  await expect(page).toHaveURL(/voyadores/);
});
