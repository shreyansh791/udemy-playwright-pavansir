import { test, expect, Page } from '@playwright/test';

test('Handle multiple tabs', async ({ browser }) => {
    // Create a new browser context and page
    const context = await browser.newContext();
    const parentPage = await context.newPage();

    // Go to Playwright's official website
    await parentPage.goto('https://playwright.dev/');

    // The "Community" link in the footer opens in a new tab
    // Wait for the new page (tab) to open after clicking the link
    const [newPage] = await Promise.all([
        context.waitForEvent('page'), // Waits for a new page (tab or window) to be created within the given browser context (the context object)
        parentPage.getByRole('link', { name: 'Stack Overflow' }).click()
    ]);

    // Wait for the new tab to load
    await newPage.waitForLoadState();

    //    Approach 1: Switch between Pages and get their title. (using context)
    const pages = context.pages()
    console.log("Nmber of pages created :: ", pages.length)

    console.log("Title of the Parent page is ", await pages[0].title());
    console.log("Title of the Child page is ", await pages[1].title());

    console.log(
        "-------------------------------------------------------------------------"
    )
    // Approach 2:

    console.log("Title of the Parent page is ", await parentPage.title());
    console.log("Title of the Child page is ", await newPage.title());

    await parentPage.bringToFront();
    await parentPage.waitForTimeout(1000); // not recommended to use... just used to check if foucs changes
    await context.close()

});
