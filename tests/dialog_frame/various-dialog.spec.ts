import { test, expect } from '@playwright/test';

test('Handle alert dialog', async ({ page }) => {
    // Listen for the dialog or dialog Handler
    page.on('dialog', async (dialog) => {
        console.log('Dialog message:', dialog.message());
        await dialog.accept();
    });

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    await page.click('button[onclick="jsAlert()"]');
    // Optionally, assert the result text
    await expect(page.locator('#result')).toHaveText('You successfully clicked an alert');
});

// Scenario: Demonstrate handling a JavaScript confirm() dialog.

test('handle confirm dialog', async ({ page }) => {
    page.on('dialog', async (dialog) => {
        console.log(dialog.message());
        await dialog.accept(); // Click OK
        // await dialog.dismiss(); // Click Cancel
    });

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    await page.click('button[onclick="jsConfirm()"]');
    await expect(page.locator('#result')).toHaveText('You clicked: Ok');
});

// Scenario: Demonstrate handling a JavaScript prompt() dialog with input.

test('handle prompt dialog with input', async ({ page }) => {
    page.on('dialog', async (dialog) => {
        console.log(dialog.message());
        await dialog.accept('Playwright Input'); // Provide input and click OK
    });

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    await page.click('button[onclick="jsPrompt()"]');
    await expect(page.locator('#result')).toHaveText('You entered: Playwright Input');
});


test('Interact with iframe on LetCode', async ({ page }) => {
    await page.goto('https://letcode.in/frame');
    // count number of frames in a page
    console.log("Number of frames in a page ", await page.frames().length);

    // Use frameLocator to access the iframe by its selector
    const frame = page.frameLocator('#firstFr'); // this works as well 
    // const frame = page.frameLocator("[name='firstFr']"); // this works as well

    // Fill the "First Name" input inside the iframe
    await frame.locator("input[name='fname']").fill('John');

    // Fill the "Last Name" input inside the iframe
    await frame.locator("input[name='lname']").fill('Doe');

    // Optionally, assert the value in the first name field
    await expect(frame.locator("input[name='fname']")).toHaveValue('John');
    // Switch back to main frame: just use 'page'
    await expect(page.getByRole('heading', { name: 'Frame' })).toBeVisible()
});
/**
 frameLocator is recommended for most automation tasks because it is robust, auto-waits for the frame and the element, and is less prone to race conditions or flakiness15.

Frame is more suitable for advanced use cases, such as running JavaScript in the frame’s context with frame.evaluate(), but requires you to manage frame selection and readiness manually27.
 
 */
