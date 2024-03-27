import {test,expect} from '@playwright/test'

test('Trace viewer test',async ({page})=>
{
   
    await page.goto("https://www.demoblaze.com/index.html"); 
    await page.locator("[id='login2']").click();
    await page.locator("[id='loginusername']").fill('Ishwar79');
    await page.locator("[id='loginpassword']").fill('123456789');
    await page.locator("//button[normalize-space()='Log in']").click();
    await expect(page.locator("#logout2")).toBeVisible();
    

});