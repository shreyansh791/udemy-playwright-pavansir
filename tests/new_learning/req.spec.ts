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

test("check for errors inside the console", async ({ page }) => {
  page.on("console", (message) => {
    expect
      .soft(message.type(), `Received error log: ${message.text()}`)
      .not.toEqual("error");
  });

  await page.goto("http://localhost:5000/Events.html");
  const requestButton = page.getByRole("button", { name: "Call wrong server" });
  await requestButton.click();
  await page.waitForTimeout(50); // ensures console log processing
});
