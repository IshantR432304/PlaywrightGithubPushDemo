const {test,expect}=require('@playwright/test')
//import {test,expect} from '@playwright/test'

test('Bootstrap dropdown Test',async ({page})=>
{
    await page.goto("https://www.jquery-az.com/boots/demo.php?ex=63.0_2");
    
    await page.locator("//button[@type='button']").click();
   // const options=await page.locator("ul>li label input");
   // await expect(options).toHaveCount(11);

   // const options=await page.$$("/ul>li label input")
    //await expect(options.length).toBe(11);

    //Select multiple option from dropdown
    /*const options= await page.$$("ul>li label")
    for(let option of options)
    {
        const value=await option.textContent();
        console.log(value);
        if(value.includes('Angular')||value.includes('Java'))
        {
            await option.click();
        }
    }*/

    //Deselect checked value from dropdown
    //Select multiple option from dropdown
    const options= await page.$$("ul>li label")
    for(let option of options)
    {
        const value=await option.textContent();
        console.log(value);
        if(value.includes('HTML')||value.includes('CSS'))
        {
            await option.click();
        }
    }

    await page.waitForTimeout(5000);

})