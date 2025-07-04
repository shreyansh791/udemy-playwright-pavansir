import { test, expect } from '@playwright/test'

test('Auto Suggest dropdown', async ({ page }) => {
    await page.goto('https://www.flipkart.com/')
    await page.getByPlaceholder(`Search for products, brands and more`).fill('smart');
    await page.locator('ul > li').first().waitFor({ state: 'visible' });
    const autoSuggestions = page.locator('ul >li');
    console.log(await autoSuggestions.count());

    for (const option of await autoSuggestions.all()) {
        console.log(await option.textContent())
    }

});