import { test } from '@playwright/test';
import { LoginPage } from './pages/login.page';

test('authenticate user and save state', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goTo();

  await loginPage.fillCredentials(
    process.env.VOYA_EMAIL!,
    process.env.VOYA_PASSWORD!
  );

  await loginPage.submit();

  // Wait until user is authenticated (NOT a specific URL)
  await page.waitForURL(url => !url.pathname.includes('login'), {
    timeout: 30_000,
  });

  // Save auth state
  await page.context().storageState({
    path: 'playwright/.auth/user.json',
  });
});
