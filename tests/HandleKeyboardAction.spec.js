const {test,expect}=require('@playwright/test')
//import {test,expect} from '@playwright/test'

test('Handle Mouse actions',async ({page})=>
{
   
    await page.goto("https://gotranscript.com/text-compare"); 
    const textBox1=await page.locator("//textarea[@name='text1']");
   // await textBox1.fill("Welcome to automation");
    await page.type("//textarea[@name='text1']","Welcome to automation");
    await page.keyboard.press('Control+A');
    await page.keyboard.press('Control+C');
   // await page.keyboard.down('Tab');
   // await page.keyboard.up('Tab');
   await page.keyboard.press('Tab');
    //const textBox2=await page.locator("//textarea[@name='text2']");
    await page.keyboard.press('Control+V');

    await page.waitForTimeout(5000);


})