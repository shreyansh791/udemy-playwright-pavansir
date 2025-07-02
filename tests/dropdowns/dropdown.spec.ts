import { test, expect } from '@playwright/test'

test('Handle Single Select dropdown', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/')
    // selecting the value from the dropdown.
    const countryDropdown = page.locator('#country');
    // 4 ways to select the value from the dropdown
    await countryDropdown.selectOption('France')
    await page.waitForTimeout(1000)
    await countryDropdown.selectOption({ value: 'india' })
    await page.waitForTimeout(1000)
    await countryDropdown.selectOption({ label: 'Brazil' })
    await page.waitForTimeout(1000)
    await countryDropdown.selectOption({ index: 9 })

    // 2) Check the number of options in the dropdown (count)
    const countryDropdownOption = page.locator('#country > option')
    console.log(await countryDropdownOption.count());
    await expect(countryDropdownOption).toHaveCount(10)

    // /3) Check an option present in the dropdown
    const optionsText = (await countryDropdownOption.allTextContents()).map(text => text.trim())
    console.log(optionsText);
    expect(optionsText).toContain('India')

    //  print each text from the dropdown

    for (const text of optionsText) {
        console.log(text);
    }

    console.log("**************************************************************");

    for (const element of await countryDropdownOption.all()) {
        console.log((await element.innerText()).trim());

    }
    console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@2");

    for (let i = 0; i < await countryDropdownOption.count(); i++) {
        console.log("@@@ ", (await countryDropdownOption.nth(i).innerText()).trim());
    }



})