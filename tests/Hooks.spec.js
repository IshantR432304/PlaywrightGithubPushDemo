const {test,expect}=require('@playwright/test')
//import {test,expect} from '@playwright/test'

let page;

test.beforeEach(async ({browser})=>
{
    page= await browser.newPage();
    await page.goto("https://www.demoblaze.com/index.html"); 
    await page.locator("[id='login2']").click();
    await page.locator("[id='loginusername']").fill('Ishwar79');
    await page.locator("[id='loginpassword']").fill('123456789');
    await page.locator("//button[normalize-space()='Log in']").click();
})

test('Login Test Demo', async ()=>
{
    //Home page verification
    const listOfProduct=await page.$$("//a[@class='hrefch']");
    expect(listOfProduct).toHaveLength(9);
    await page.locator("//a[normalize-space()='Nokia lumia 1520']").click();
    await page.locator("//a[normalize-space()='Add to cart']").click();
    //Handling alert after adding product to cart
    page.on('dialog',async dialog=>{
        //await expect(dialog.type()).toContain('alert');
        await expect(dialog.message()).toContain('Product added.');
         await dialog.accept();
     });
    
});

test.afterEach(async ()=>
{
    await page.locator('[id="logout2"]').click();

});