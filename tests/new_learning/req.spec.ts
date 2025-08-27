import { test, expect } from "@playwright/test";

test("Check for failed requests", async ({ page }) => {
  page.on("requestfailed", (request) => {
    expect(
      `failed request to ${request.url()} with error ${
        request.failure()?.errorText
      }`
    ).toBeUndefined();
  });

  await page.goto("https://www.udemy.com/");

  await page.waitForTimeout(50); // without this the test exists without error
});
