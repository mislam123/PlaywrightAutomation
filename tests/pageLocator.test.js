import { test, expect } from '@playwright/test';

test('test_01', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  //await page.pause();
  await page.locator('id=user-name').fill('username');
  await page.locator('id=password').fill("lwecgwicbiwecbwcbcbkcj");
  // click can be placed before or, after declering the locator
  //await page.locator('[data-test="login-button"]').click();
  await page.click('[data-test="login-button"]')
  // print the page title
  console.log('Page title is : :', await page.title());
  // print an assertion
   await expect(page).toHaveTitle('Swag Labs');
  //await page.pause();
});

test('test_02', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
 
  //await page.locator('id=user-name').fill('muhammad');
  //await page.locator('#user-name').fill('muhammad');

  await page.getByPlaceholder('Username').fill('muhammad');

  // xpath locator
    //await page.locator('xpath=//input[@data-test="password"]').fill("wecvwieycveiyce");
    //await page.locator('#password').fill("wecvwieycveiyce");

    //await page.locator('xpath=//input[@placeholder="Password"]').fill("wecvwieycveiyce");
    //await page.getByPlaceholder('Password').fill("wecvwieycveiyce");
    //await page.locator('xpath=//input[@id="password"]').fill("wecvwieycveiyce");
    //await page.locator('xpath=//input[@name="password"]').fill("wecvwieycveiyce");
    //await page.locator('xpath=//input[@type="password"]').fill("wecvwieycveiyce");

    /* 
    If your XPath matches 2 elements, Playwright treats it as multiple matches. You can select a single element using:
    .first()
    .last()
    .nth(index)
*/
    //let pwdselectByClass = page.locator('xpath=//input[@class="input_error form_input"]').first();
    //let pwdselectByClass = page.locator('xpath=//input[@class="input_error form_input"]').nth[2];
    //pwdselectByClass.fill("hwcvcbiwhcwcew");

  //await page.locator('id=password').fill("lwecgwicbiwecbwcbcbkcj");
  //await page.pause();
  // click can be placed before or, after declering the locator
  //await page.locator('[data-test="login-button"]').click();
  //await page.click('[data-test="login-button"]')
  
  // using text
  //await page.locator('text=Login').click();

   await page.locator('input:has-text("Login")').click();

  //await page.locator('#login-button').click();
  
  //console.log('Page title is : :', await page.title());
  // print an assertion
   await expect(page).toHaveTitle('Swag Labs');
  //await page.pause();

});