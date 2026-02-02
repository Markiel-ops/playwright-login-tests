import 'dotenv/config';
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  // Where your tests live
  testDir: './tests',

  // Global test timeout
  timeout: 30 * 1000,

  // Expect assertions timeout
  expect: {
    timeout: 5 * 1000,
  },

  // Run tests in parallel
  fullyParallel: true,

  // Fail CI if test.only is left in code
  forbidOnly: !!process.env.CI,

  // Retry on CI only
  retries: process.env.CI ? 2 : 0,

  // Workers
  workers: process.env.CI ? 1 : undefined,

  // Test reports
  reporter: [
    ['html', { open: 'never' }],
    ['list'],
  ],

  // Shared settings for all projects
  use: {
    baseURL: process.env.BASE_URL,
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',
  },

  // Projects
  projects: [
  {
    name: 'setup',
    testMatch: /auth\.setup\.js/,
  },

  // UNAUTHENTICATED TESTS
  {
    name: 'unauth',
    testMatch: /(login|location)\.spec\.(js|ts)/,
    use: {
      ...devices['Desktop Chrome'],
    },
  },

  // AUTHENTICATED TESTS
  {
    name: 'chromium',
    dependencies: ['setup'],
    testIgnore: /(login|location)\.spec\.(js|ts)/,
    use: {
      ...devices['Desktop Chrome'],
      storageState: 'playwright/.auth/user.json',
    },
  },
]

});
