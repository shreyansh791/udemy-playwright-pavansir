import { test, expect } from '@playwright/test'

test('Handle Multi Select dropdown', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/')
    // selecting the value from the dropdown.
    const countryDropdown = page.locator('#colors');
    // 4 ways to select the value from the multi dropdown
    await countryDropdown.selectOption(['Red', 'Blue', 'Green'])
    await page.waitForTimeout(1000)
    await countryDropdown.selectOption(['red', 'green', 'white'])
    await page.waitForTimeout(1000)
    await countryDropdown.selectOption([{ label: 'Red' }, { label: 'Green' }, { label: 'Yellow' },])
    await page.waitForTimeout(1000)
    await countryDropdown.selectOption([{ index: 0 }, { index: 1 }])
    await page.waitForTimeout(1000)

    // 2) Check the number of options in the dropdown (count)
    const colorDropdownOptions = page.locator('#colors > option')
    console.log(await colorDropdownOptions.count());
    await expect(colorDropdownOptions).toHaveCount(7)

    // /3) Check an option present in the dropdown
    const optionsText = (await colorDropdownOptions.allTextContents()).map(text => text.trim())
    console.log(optionsText);
    expect(optionsText).toContain('Red')

    //  print each text from the dropdown
    for (const text of optionsText) {
        console.log(text);
    }



})