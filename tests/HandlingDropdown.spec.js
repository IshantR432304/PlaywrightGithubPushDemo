const {test,expect}=require('@playwright/test')
//import {test,expect} from '@playwright/test'

test('Handling dropdown Test',async ({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/");

    //Multiple ways to select option from dropdown
   // await page.locator("#country").selectOption({label:'India'}); //visible text/label
   // await page.locator("#country").selectOption('India'); //visible text
    // await page.locator("#country").selectOption({value:'india'}); //value attribute
   // await page.locator("#country").selectOption({index:1});  //index we need to count
    //await page.selectOption("#country",'India'); //visible text

    //Assertion on dropdown
    //1.Checking number of options in dropdown
   // const options=await page.locator("#country option");
   // await expect(options).toHaveCount(10);

    //2.Check number of option in dropdown
   // const options=await page.$$("#country option"); //this will return all elements in an array
   // console.log("Number of options in dropdown : ",options.length);
   // await expect(options.length).toBe(10);

   //3.Check presence of option in dropdown
   //const content=await page.locator("#country").textContent();
  // await expect(content.includes('India')).toBeTruthy();

   //4.Check presence of option in dropdown using loop
  /* const options=await page.$$("#country option");
   let status=false;
   for(const option of options)
   {
    let value=await option.textContent();
       // console.log(await option.textContent();)
       if(value.includes('France'))
       {
            status=true;
            break;
       }
   }
   await expect(status).toBeTruthy();*/

   //When select tag is not present in DOM then use loop
   const options=await page.$$("#country option");
   for(const option of options)
   {
    let value=await option.textContent();
       // console.log(await option.textContent();)
       if(value.includes('France'))
       {
            await page.selectOption("#country",value);
            break;
       }
   }

    await page.waitForTimeout(5000);
})