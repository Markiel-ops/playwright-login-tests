require('dotenv').config();
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',

  // SPEED & STABILITY
  fullyParallel: true,
  workers: process.env.CI ? 2 : undefined,
  retries: process.env.CI ? 2 : 0,
  forbidOnly: !!process.env.CI,

  // AUTH SETUP
  globalSetup: require.resolve('./tests/.auth/setup.auth.js'),

  // REPORTING
  reporter: [['html', { open: 'never' }]],

  // SHARED CONTEXT
  use: {
    baseURL: process.env.BASE_URL,
    storageState: 'storage/auth.json',
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',
  },

  // PROJECTS
  projects: [
    {
      name: 'Chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
