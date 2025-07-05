import { test, expect } from '@playwright/test'

test('Dynamic Web Table', async ({ page }) => {
    await page.goto('https://practice.expandtesting.com/dynamic-table');
    let cpuIndex;
    let chromeIndex;
    const headers = await page.locator('.table-striped thead').locator('tr th').allInnerTexts();
    const rows = page.locator('.table-striped tbody tr');
    cpuIndex = headers.indexOf('CPU') + 1
    for (const m in await rows.all()) {
        const name = rows.nth(Number(m)).locator('td').first()
        if ((await name.innerText()).includes('Chrome')) {
            chromeIndex = Number(m) + 1;
            break;
        }
    }
    console.log(cpuIndex);
    console.log(chromeIndex);

    const text = await page.locator(`.table-striped tbody tr:nth-of-type(${chromeIndex}) td:nth-of-type(${cpuIndex})`)
        .innerText()
    console.log(text);
});