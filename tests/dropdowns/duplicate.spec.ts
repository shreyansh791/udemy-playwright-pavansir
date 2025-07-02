import { test, expect } from '@playwright/test'

test('Verify if color dropdown is sorted', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/')

    const colorDropdownOptions = page.locator('#colors > option')
    const colorDropdownOptionsText = (await colorDropdownOptions.allTextContents()).map(element => element.trim())
    const actualOptions: string[] = colorDropdownOptionsText

    const mySet = new Set<string>()
    const duplicates: string[] = []

    for (const optionsText of colorDropdownOptionsText) {
        if (mySet.has(optionsText)) {
            duplicates.push(optionsText)
        }
        else {
            mySet.add(optionsText)
        }
    }
    console.log("Duplicate Element ==> ", duplicates);
    





})