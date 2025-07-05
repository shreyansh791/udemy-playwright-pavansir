import { test, expect, Locator } from '@playwright/test';

test("Read data from all the table pages", async ({ page }) => {

    await page.goto("https://datatables.net/examples/basic_init/zero_configuration.html");

    let hasmorepages = true;

    while (hasmorepages) {
        const rows = await page.locator("#example tbody tr").all();
        for (let row of rows) {
            console.log(await row.innerText());
        }
        await page.waitForTimeout(2000);
        const nextButton: Locator = page.getByLabel('Next')
        // const isDisabled = await nextButton.getAttribute('class'); // dt-paging-button disabled next

        if (!await nextButton.isEnabled()) {
            hasmorepages = false;
        }
        else {
            await nextButton.click()
        }
    }

});


test("Filter the rows and check the rows count", async ({ page }) => {

    await page.goto("https://datatables.net/examples/basic_init/zero_configuration.html");

    const dropdown: Locator = page.locator("#dt-length-0");
    await dropdown.selectOption({ label: '25' });

    //Appraoch 1
    const rows = await page.locator("#example tbody tr").all();
    expect(rows.length).toBe(25); //assertion

    //Appraoch2
    const rows2 = page.locator("#example tbody tr");
    await expect(rows2).toHaveCount(25);
})




test.only("Search for specific data in a table", async ({ page }) => {

    await page.goto("https://datatables.net/examples/basic_init/zero_configuration.html");

    const searchbox: Locator = page.locator('#dt-search-0');
    await searchbox.fill('Paul Byrd');

    await page.waitForTimeout(5000);
    const rows = await page.locator("#example tbody tr").all();

    if (rows.length >= 1) {
        let matchFound = false;
        for (let row of rows) {
            const text = await row.innerText();
            if (text.includes('Paul Byrd')) {
                console.log("Record exist- found");
                matchFound = true;
                break;
            }

        }
        //expect(matchFound).toBe(true);
        expect(matchFound).toBeTruthy();
    }
    else {
        console.log("No Rows found with search text")
    }


})