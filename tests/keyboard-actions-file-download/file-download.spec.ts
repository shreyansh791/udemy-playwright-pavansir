import { test, expect } from '@playwright/test';
import * as fs from 'fs';

test('Download file from testautomationpractice.blogspot.com', async ({ page, context }) => {
    await page.goto('https://testautomationpractice.blogspot.com/p/download-files_25.html');
    await page.locator('#inputText').fill('Playwright Typescript Learning');
    await page.locator('#generateTxt').click();

    const [download] = await Promise.all([
        page.waitForEvent('download'), // Wait for download to start
        page.locator('#txtDownloadLink').click()
    ]);

    // Define the path where you want to save the downloaded file
    const downloadPath = 'downloads/sample-file.txt';

    // Save the downloaded file to the specified path
    await download.saveAs(downloadPath);

    // Assertion: Check that the file exists at the specified path
    expect(fs.existsSync(downloadPath)).toBe(true);

    //   clean up file downloaded
    if (fs.existsSync(downloadPath)) {
        fs.unlinkSync(downloadPath);
    }
    // Assertion: Check that the file does not exists at the specified path
    expect(fs.existsSync(downloadPath)).toBe(false);
});
