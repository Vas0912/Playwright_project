// @ts-check
import { defineConfig, devices } from '@playwright/test';
import { trace } from 'node:console';


/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = ({
  testDir: './tests',
  testMatch: '**/*.spec.js',
  retries :0,
  timeout:30*1000,
  expect:{
    timeout: 5000,
  },
  reporter: 'html',
   use: {
    //actionTimeout: 10 * 1000,
    //navigationTimeout: 30 * 1000,
    browserName: 'chromium',
    headless: true,
    screenshot : 'on',
    trace : 'retain-on-failure',
    // if mention headless: true **the browser will not open**
  },

});

module.exports = config;
