import { defineConfig } from '@playwright/test';
import 'dotenv/config';

export default defineConfig({
  testDir: './tests',

  globalSetup: './tests/auth.setup.js',

  use: {
    baseURL: process.env.VOYA_LOGIN_URL,
    storageState: 'playwright/.auth/user.json',
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' },
    },
  ],
});
