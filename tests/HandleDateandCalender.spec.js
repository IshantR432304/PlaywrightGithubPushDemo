const {test,expect}=require('@playwright/test')
//import {test,expect} from '@playwright/test'

test('Handle date picker',async ({page})=>
{
   
    await page.goto(" https://testautomationpractice.blogspot.com/");

   // await page.locator("#datepicker").fill('03/09/2024');

   const year='2025';
   const month='March';
   const date='9';

   await page.locator("#datepicker").click();
   while(true)
   {
       const currentMonth= await page.locator('.ui-datepicker-month').textContent();
       const currentYear=await page.locator('.ui-datepicker-year').textContent();

       if(currentYear==year && currentMonth==month)
       {
            break;
       }

       await page.locator("[title='Next']").click();
   }

  /* const dates=await page.$$('.ui-state-default');

   //Date selection using loop
   for(const dt of dates)
   {
        if(await dt.textContent()==date)
        {
            await dt.click();
            break;
        }
   }*/

   //Date selection without using loop

   //await page.click(`//a[@class='ui-state-default'][text()='${date}']`);
   await page.click(`//a[normalize-space()='${date}']`);

   await page.waitForTimeout(5000);

})