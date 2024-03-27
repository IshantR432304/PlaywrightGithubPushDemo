const {test,expect}=require('@playwright/test')
//import {test,expect} from '@playwright/test'

test('Autosuggest dropdown Test',async ({page})=>
{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.locator("//input[@placeholder='Username']").fill('Admin');
    await page.locator("//input[@placeholder='Password']").fill('admin123');
    await page.locator("button[type='submit']").click();
    await page.locator("//span[normalize-space()='PIM']").click();
    await page.locator("(//div[@class='oxd-select-text-input'][normalize-space()='-- Select --'])[2]").click();

    //Waiting for options
    await page.waitForTimeout(5000);
    const options=await page.$$("//div[@role='listbox']//div[@role='option']//span");

    for(let option of options)
    {
        const value=await option.textContent();
        console.log(value);
        if(value.includes('QA Engineer'))
        {
            await option.click();
            break;
        }
    }

    await page.waitForTimeout(5000);

})