import { test, expect } from '@playwright/test';
import path from 'node:path';

// tracing configaration in this test

test('test_01', async ({ page, context }) => {
    
    // start tracing
    await context.tracing.start(
        { 
            snapshots: true,
            screenshots: true, 
        });

    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('user');
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill('pwd');
    await page.locator('[data-test="login-button"]').click();
    
    // srop tracing
    await context.tracing.stop({path:'trace.zip'})
});


