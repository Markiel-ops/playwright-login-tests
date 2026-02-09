const { test, expect } = require('@playwright/test');
const DashboardPage = require('./pages/DashboardPage');


test.use({ storageState: 'storage/storageState.json' });

test('@smoke Dashboard loads successfully', async ({ page }) => {
  const dashboard = new DashboardPage(page);
  await dashboard.goto();
  await dashboard.isLoaded();
});



