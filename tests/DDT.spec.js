const {test,expect}=require('@playwright/test')
//import {test,expect} from '@playwright/test'
const jsonData=JSON.parse(JSON.stringify(require("../testData.json")));

test('Json data test', async ({page})=>
{
    
    await page.goto("https://www.demoblaze.com/index.html"); 
    await page.locator("[id='login2']").click();
    await page.locator("[id='loginusername']").fill(jsonData.userName);
    await page.locator("[id='loginpassword']").fill(jsonData.passWord);
    await page.locator("//button[normalize-space()='Log in']").click();
    //await page.locator("[id='loginusername']").fill(jsonData.interest[1]);
    //await page.locator("[id='loginusername']").fill(jsonData.address.area);
})