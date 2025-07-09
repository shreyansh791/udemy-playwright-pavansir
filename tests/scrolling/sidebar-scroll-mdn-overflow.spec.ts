import { test, expect } from '@playwright/test';

test('scroll sidebar quicklinks on MDN CSS overflow page', async ({ page }) => {
  // Navigate to the page
  await page.goto('https://developer.mozilla.org/en-US/docs/Web/CSS/overflow');

  // Wait for the scrollable sidebar to appear
  await page.waitForSelector('#sidebar-quicklinks');

  // Scroll the sidebar to the bottom
  await page.evaluate(() => {
    const scrollable = document.querySelector('#sidebar-quicklinks');
    if (scrollable) scrollable.scrollTop = scrollable.scrollHeight;
  });

  // Wait so you can see the scroll effect
  await page.waitForTimeout(2000);

  // Scroll the sidebar back to the top
  await page.evaluate(() => {
    const scrollable = document.querySelector('#sidebar-quicklinks');
    if (scrollable) scrollable.scrollTop = 0;
  });

  // Wait before finishing the test
  await page.waitForTimeout(2000);
});


test('scroll another sidebar', async ({ page }) => {
  // Navigate to the page
  await page.goto('https://developer.mozilla.org/en-US/docs/Web/CSS/overflow');

  // Scroll the sidebar to the bottom
  await page.evaluate(() => {
    const scrollable = document.querySelector('.toc-container');
    if (scrollable) scrollable.scrollTop = scrollable.scrollHeight;
  });

  // Wait so you can see the scroll effect
  await page.waitForTimeout(2000);

  // Scroll the sidebar back to the top
  await page.evaluate(() => {
    const scrollable = document.querySelector('#sidebar-quicklinks');
    if (scrollable) scrollable.scrollTop = 0;
  });

  // Wait before finishing the test
  await page.waitForTimeout(2000);
});