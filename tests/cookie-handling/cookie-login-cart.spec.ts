
import { chromium, expect, test } from '@playwright/test';
import { promises as fs } from 'fs';

test.describe.serial('Cookie Handling and Cart', () => {

  test('cookie handling',async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://demo.opencart.com/index.php?route=account/login');
    await page.fill('#input-email', 'testuser@example.com');
    await page.fill('#input-password', 'yourPassword');
    await page.click('input[type="submit"]');
    await page.waitForLoadState();

    // Save cookies after successful login
    const cookies = await context.cookies();
    await fs.writeFile('cookies.json', JSON.stringify(cookies));

    await browser.close();
  });

  test('Load Cookies and Add Item to Cart', async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext();

    // Load cookies from previous login
    const cookies = JSON.parse(await fs.readFile('cookies.json', 'utf-8'));
    await context.addCookies(cookies);

    const page = await context.newPage();
    await page.goto('https://demo.opencart.com/');

    // Add an item to the cart
    await page.locator("div.carousel-item.active > img[title='HTC Touch HD']").click();
    await page.locator("#button-cart").click();

    // Verify item is in the cart
    await page.locator("a.btn.btn-primary.btn-block", { hasText: 'View Cart' }).click();
    await expect(page.locator("td.text-left", { hasText: 'HTC Touch HD' })).toBeVisible();

    await browser.close();
  });
});
