const {test,expect}=require('@playwright/test')
//import {test,expect} from '@playwright/test'

test.skip('Alert with OK',async ({page})=>
{
   
    await page.goto(" https://testautomationpractice.blogspot.com/");
    //Enabling alert handler
    page.on('dialog',async dialog=>{
       await expect(dialog.type()).toContain('alert');
       await expect(dialog.message()).toContain('I am an alert box!');
        await dialog.accept();



    })
    await page.locator("//button[normalize-space()='Alert']").click();
    await page.waitForTimeout(5000);
});

test.skip('Alert/confirmation dailog with OK and cancel',async ({page})=>
{
   
    await page.goto(" https://testautomationpractice.blogspot.com/");
    //Enabling alert handler
    page.on('dialog',async dialog=>{
       await expect(dialog.type()).toContain('confirm');
       await expect(dialog.message()).toContain('Press a button!');
       await dialog.accept();
        //await dialog.dismiss();



    })
    await page.locator("//button[normalize-space()='Confirm Box']").click();
    await expect(page.locator("//p[@id='demo']")).toHaveText('You pressed OK!');
    await page.waitForTimeout(5000);
});

test('Promt dailog with OK and cancel and text box',async ({page})=>
{
   
    await page.goto(" https://testautomationpractice.blogspot.com/");
    //Enabling alert handler
    page.on('dialog',async dialog=>{
       await expect(dialog.type()).toContain('prompt');
       await expect(dialog.message()).toContain('Please enter your name:');
       await expect(dialog.defaultValue()).toContain('Harry Potter')
       await dialog.accept('Ishwar');
        //await dialog.dismiss();



    })
    await page.locator("//button[normalize-space()='Prompt']").click();
    await expect(page.locator("//p[@id='demo']")).toHaveText('Hello Ishwar! How are you today?');
    await page.waitForTimeout(5000);
});