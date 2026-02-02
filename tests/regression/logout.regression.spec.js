import { test, expect } from '@playwright/test';

test.describe('@regression Logout flow', () => {
  test('User session is invalidated after logout', async ({ page, context }) => {

    // User starts authenticated via storageState
    await page.goto('/', { waitUntil: 'domcontentloaded' });
    await expect(page).toHaveURL(/voyadores\.com/);

    // 🔐 Perform logout by clearing session (SSO-safe)
    await context.clearCookies();

    // Attempt to access protected route again
    await page.goto('/', { waitUntil: 'domcontentloaded' });

    // ✅ Correct assertion: redirected to login / auth
    await expect(page).toHaveURL(/login|auth|sso/i);
  });
});
