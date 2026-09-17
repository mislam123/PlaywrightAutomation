import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();


  // wait for the spacific element
  await page.waitForSelector('[data-test="username"]', {timeout: 5000})

  await page.locator('[data-test="username"]').fill('muhammad islam');
  await page.locator('[data-test="username"]').press('Enter');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('ewcewhibcbehwcwc');

// wait for the spacific element
  await page.waitForSelector('text=Login', {timeout: 70000})
  await page.locator('text=Login').click();
});