import { test, expect } from '@playwright/test';

test('DemoQA Mouse Actions and Scrolling', async ({ page }) => {
    // 1. Mouse Hover - Hover over the "Elements" card
    await page.goto('https://demoqa.com/');
    await page.locator('.card-body:has-text("Elements")').hover();

    // 2. Right Click - Go to Buttons page and right-click the "Right Click Me" button
    await page.goto('https://demoqa.com/buttons');
    await page.locator('#rightClickBtn').click({ button: 'right' });

    // 3. Double Click - Double-click the "Double Click Me" button
    await page.locator('#doubleClickBtn').dblclick();

    // 4. Drag and Drop - Go to Drag and Drop page and perform drag-and-drop
    await page.goto('https://demoqa.com/droppable');
    const source = page.locator('#draggable');
    const target = page.locator('#droppable').first();

    await source.dragTo(target);


})

test('Scroll to a specific element on LambdaTest Playground', async ({ page }) => {
    await page.goto('https://www.lambdatest.com/selenium-playground/');
    const contactUsLink = page.getByRole('link', { name: 'Contact Us' });
    await contactUsLink.scrollIntoViewIfNeeded();
    // Optionally, verify it is visible
    await expect(contactUsLink).toBeVisible();
});


test('Scroll to the bottom of the page', async ({ page }) => {
    await page.goto('https://web-scraping.dev/testimonials/');
    await page.evaluate(() => {
        window.scrollTo(0, document.body.scrollHeight);
    });
    // Optionally, wait for new content to load
    await page.waitForTimeout(1000);
});


test('Infinite scroll on testimonials page', async ({ page }) => {
    await page.goto('https://web-scraping.dev/testimonials/');
    let previousHeight = 0;
    while (true) {
        await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
        await page.waitForTimeout(1000);
        const newHeight = await page.evaluate(() => document.body.scrollHeight);
        if (newHeight === previousHeight) break;
        previousHeight = newHeight;
    }
});

test('Horizontal scrolling using page.evaluate()', async ({ page }) => {
    // Navigate to the demo page with a horizontal scroll menu
    await page.goto('https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_menu_hor_scroll');

    // Get the actual Frame object by its name
    const frame = page.frame({ name: 'iframeResult' });
    if (!frame) throw new Error('iframeResult not found');

    // Use frame.evaluate() to scroll the menu container horizontally by 200 pixels
    await frame.evaluate(() => {
        const menu = document.querySelector('.scrollmenu');
        if (menu) menu.scrollLeft += menu.scrollWidth;

    });
    await page.waitForTimeout(1000)
    await frame.evaluate(() => {
        const menu = document.querySelector('.scrollmenu');
        if (menu) menu.scrollLeft = 0

    });

    // Wait to observe the scroll effect
    await page.waitForTimeout(2000);
});


