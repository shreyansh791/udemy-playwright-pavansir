import { test, expect } from '@playwright/test'

test('Verify if color dropdown is sorted', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/')

    const colorDropdownOptions = page.locator('#colors > option')
    const colorDropdownOptionsText = (await colorDropdownOptions.allTextContents()).map(element => element.trim())
    const actualOptions: string[] = colorDropdownOptionsText
    console.log("colorDropdownOptionsText = ", colorDropdownOptionsText)
    const sortedOptions: string[] = [...colorDropdownOptionsText].sort()
    console.log("sortedDropdownOptionsText = ", sortedOptions)
    expect(actualOptions).toEqual(sortedOptions)






})