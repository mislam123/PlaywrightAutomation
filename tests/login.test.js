import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demo.applitools.com/');

  //await page.pause();

  await page.getByRole('textbox', { name: 'Enter your username' }).click();
  await page.getByRole('textbox', { name: 'Enter your username' }).fill('muhammad');
  await page.getByRole('textbox', { name: 'Enter your password' }).click();
  await page.getByRole('textbox', { name: 'Enter your password' }).fill('ewkcbwiccbceww');
  await page.getByText('Remember Me').click();
  await page.getByRole('link', { name: 'Sign in' }).click();
  await page.getByRole('link', { name: 'View Statement ' }).click();
  await page.getByRole('link', { name: '  Credit cards' }).click();
  await page.getByRole('link', { name: '  Debit cards' }).click();
  await page.getByRole('link', { name: '  Loans' }).click();
  await page.getByRole('link', { name: '  Mortgages' }).click();
  await page.getByRole('cell', { name: 'Complete' }).first().click();
});