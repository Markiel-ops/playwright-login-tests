// 🔑 Load environment variables FIRST
require('dotenv').config();

// 🎭 Playwright config helper
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',

  timeout: 30 * 1000,

  use: {
    baseURL: 'https://dev2-login.voyadores.com',
    headless: true,
    screenshot: 'only-on-failure',
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'logged-out',
      use: {},
    },
    {
      name: 'logged-in',
      use: {
        storageState: 'auth.json',
      },
    },
  ],
});
