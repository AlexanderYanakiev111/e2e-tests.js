# e2e-tests.js
End-to-End testing in Playwright in JavaScript using Node.js

import { test, expect } from '@playwright/test'

test('Demo Login Test 1', async ({ page }) => {

    await page.goto('https://demo.applitools.com/')

    await page.locator('id=username').click()
    await page.locator('id=username').fill('Alex123')

    await page.locator('id=password').click()
    await page.locator('id=password').fill('1234')

    await page.waitForSelector('text=Sign in', { timeout: 5000 })
    await page.locator('text=Sign in').click()
    await page.close()

})



test('Demo Login Test 2', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await page.getByPlaceholder('Username').click();
    await page.getByPlaceholder('Username').fill('Admin');

    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill('admin123');

    await page.getByRole('button', { name: 'Login' }).click();
    
    await page.locator('span').filter({ hasText: 'Test 76 Alex' }).click();
    await page.getByRole('menuitem', { name: 'Logout' }).click();
    
    await page.close()

})
