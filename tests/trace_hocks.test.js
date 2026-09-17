import { test, expect } from '@playwright/test';

let context;
let page
test.beforeAll(async({browser}) => {
    context = await browser.newContext();
    await context.tracing.start(
        {
            snapshots: true,
            screenshots: true
    });
    page = await context.newPage
});

test.afterAll(async() => {
    await context.tracing.stop({path:'tracing_hocks.zip'})
})

test('test_01', async ({}) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('pwd');
  await page.locator('[data-test="login-button"]').click();
});

test('test_02', async ({}) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('pwd');
  await page.locator('[data-test="login-button"]').click();
});

test('test_03', async ({}) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('pwd');
  await page.locator('[data-test="login-button11"]').click();
});


