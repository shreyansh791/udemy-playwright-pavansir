import { test, expect } from '@playwright/test';

test('Single and Multiple File Uploads', async ({ page }) => {
  // Navigate to the target website
  await page.goto('https://testautomationpractice.blogspot.com/');

  // --- SINGLE FILE UPLOAD ---
  // Locate the single file input element by its selector (adjust if needed)
  const singleFileInput = page.locator('#singleFileInput');

  // Set a single file to upload (provide the correct relative path)
  await singleFileInput.setInputFiles('tests/keyboard-actions-file-download/framework_Ques.txt');
  // At this point, the file is attached to the input

  await page.locator("button:has-text('Upload Single File')").click();

  // Optionally, you can add assertions or further actions here

  // --- MULTIPLE FILE UPLOAD ---
    const multipleFileInput = page.locator('#multipleFilesInput');

  // Set multiple files to upload by passing an array of file paths
  await multipleFileInput.setInputFiles([
    'tests/keyboard-actions-file-download/framework_Ques.txt',
    'tests/keyboard-actions-file-download/framework_Ques.txt'
  ]);
  // Now, both files are attached to the input
await page.locator("button:has-text('Upload Multiple Files')").click();
  // Optionally, add assertions or further actions here
});
