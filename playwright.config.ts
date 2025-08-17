import { defineConfig, devices } from '@playwright/test';
import * as dotenv from 'dotenv';

dotenv.config({ path: './env/.env' });  // <-- load env file

export default defineConfig({
  testDir: './src/test',       // your tests folder
  timeout: 30 * 1000,          // 30 seconds timeout per test
  expect: {
    timeout: 5000,             // timeout for expect() assertions
  },
  retries: 1,                  // retry once on failure
  reporter: 'list',            // test reporter style
  use: {
    headless: true,            // run tests in headless mode
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    video: 'retain-on-failure', // record video on failure
    screenshot: 'only-on-failure',
    launchOptions: {
      slowMo: 900,
    },
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },
    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },
  ],
});
