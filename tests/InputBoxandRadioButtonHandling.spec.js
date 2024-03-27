const {test,expect}=require('@playwright/test')
//import {test,expect} from '@playwright/test'

test('Inputbox and radio button Test',async ({page})=>
{
    await page.goto(' https://demo.nopcommerce.com/register?returnUrl=%2F');

    //Handle radio button
    await page.locator('#gender-male').check();
    await expect(await page.locator("#gender-male")).toBeEnabled();
    await expect(await page.locator("#gender-male")).toBeChecked();
    await expect(await page.locator("#gender-male").isChecked()).toBeTruthy();

    await expect(await page.locator("#gender-female").isChecked()).toBeFalsy();
    
    //await page.locator('#gender-male').click;

    //Handle input box
    await expect(await page.locator("#FirstName")).toBeVisible();
    await expect(await page.locator("#FirstName")).toBeEmpty();
    await expect(await page.locator("#FirstName")).toBeEnabled();
    await expect(await page.locator("#FirstName")).toBeEditable();
    await page.locator("#FirstName").fill('Ishwar');

   await page.waitForTimeout(5000);

})