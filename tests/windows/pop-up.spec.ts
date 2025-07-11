import { test, expect, Page } from '@playwright/test';

test('Handle pop-up', async ({ browser }) => {
    // Create a new browser context and page
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://testautomationpractice.blogspot.com/');

    await Promise.all([
        page.waitForEvent('popup'), // Waits for a new pop-up (with int he same tab) to be created within the given browser context (the context object)
        page.locator('#PopUp').click()
    ]);

    await page.waitForTimeout(1000)

    const allPopUpWindows = context.pages(); // returns array of pages
    console.log(allPopUpWindows.length)

    for (const popup of allPopUpWindows) {
        const title = await popup.title();
        console.log(`Popup title: ${title}`);

        if (title.includes('Selenium')) {
            // Example: Perform some action on Selenium popup
            console.log('This is the Selenium popup!');
            // some more actions
            popup.close();
        } else if (title.includes('Playwright')) {
            // Perform actions for Playwright popup
            console.log('This is Playwright popup!');
            // some more actions
            popup.close();
        }

    }
    page.close();
});
