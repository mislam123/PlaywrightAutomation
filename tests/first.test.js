
import { test, expect } from '@playwright/test';

test('test_01', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('pwd');
  await page.locator('[data-test="login-button"]').click();
});

test('test_02', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('pwd');
  await page.locator('[data-test="login-button"]').click();
});

test('test_03', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('pwd');
  await page.locator('[data-test="login-button11"]').click();
});