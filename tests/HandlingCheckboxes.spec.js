const {test,expect}=require('@playwright/test')
//import {test,expect} from '@playwright/test'

test('Multiselect-Checkbox handling Test',async ({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/");
    //div[@class='form-group']//input[@type='checkbox']
    //input[@id='sunday' and @type='checkbox']

    //Handling single checkbox
    await page.locator("//input[@id='sunday' and @type='checkbox']").check();
    await expect(await page.locator("//input[@id='sunday' and @type='checkbox']")).toBeChecked();
    await expect(await page.locator("//input[@id='sunday' and @type='checkbox']").isChecked()).toBeTruthy();

    await expect(await page.locator("//input[@id='monday' and @type='checkbox']").isChecked()).toBeFalsy();

    await page.waitForTimeout(5000);
    await page.locator("//input[@id='sunday' and @type='checkbox']").uncheck();

    //Handling multiple checkboxes
    const checkboxesLocator=["//input[@id='sunday' and @type='checkbox']",
    "//input[@id='monday' and @type='checkbox']",
    "//input[@id='friday' and @type='checkbox']",
    "//input[@id='saturday' and @type='checkbox']"]

    //For selecting multiple checkboxes
    for(const locator of checkboxesLocator)
    {
        await page.locator(locator).check();
    }

    //For unselecting multiple checkboxes
    for(const locator of checkboxesLocator)
    {
        if(await page.locator(locator).isChecked())
        {
            await page.locator(locator).uncheck();
        }
        
    }
    await page.waitForTimeout(5000);

})