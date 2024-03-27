const {test,expect}=require('@playwright/test')
//import {test,expect} from '@playwright/test'

test('Handling multi-select dropdown Test',async ({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/");

    //Select multiple option from fropdown
    await page.selectOption("#colors",['Green','White']);

    //Assertions
   // const options=await page.locator("#colors option");
   // await expect(options).toHaveCount(5);

    const options=await page.$$("#colors option");
    await expect(options.length).toBe(15);

    const content=await page.locator("#colors").textContent();
    await expect(content.includes('White')).toBeTruthy();

})