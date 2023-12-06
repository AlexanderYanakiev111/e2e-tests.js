import { test, expect, chromium } from '@playwright/test'

test('Slow Mo and Video Rec', async () => {

    const browser = await chromium.launch({
        slowMo: 500,
        headless: false
    });
    const context = await browser.newContext({
        recordVideo: {
            dir: 'videos/',
            size: { width: 800, height: 600 }
        }
    })

    const page = await context.newPage()

    await page.goto('https://demo.applitools.com/')

    await page.locator('id=username').click()
    await page.locator('id=username').fill('Alex123')

    await page.locator('id=password').click()
    await page.locator('id=password').fill('1234')

    await page.waitForSelector('text=Sign in', { timeout: 5000 })
    await page.locator('text=Sign in').click()

    await context.close()
})