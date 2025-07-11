import { test} from '@playwright/test';

test('keyboard actions', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    // Focus on the first input field with id 'input1'
    await page.locator('#input1').focus();

    // Type the text 'Playwright with Typescript' into the focused input field
    await page.keyboard.insertText('Playwright with Typescript');

    // Select all text in the input field using Ctrl+A
    await page.keyboard.press('Control+A');

    // Copy the selected text using Ctrl+C
    await page.keyboard.press('Control+C');

    // Press Tab twice to move the focus to the next input field
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');

    // In the new input field, select all existing text (if any) with Ctrl+A
    await page.keyboard.press('Control+A');

    // Paste the copied text using Ctrl+V
    await page.keyboard.press('Control+V');

    // Press Tab twice again to move focus to the next input field
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');

    // In the next input field, select all text with Ctrl+A
    await page.keyboard.press('Control+A');

    // Paste the copied text again using Ctrl+V
    await page.keyboard.press('Control+V');
});
