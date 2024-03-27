const {test,expect}=require('@playwright/test')
//import {test,expect} from '@playwright/test'

test('Soft Assertions Test',async ({page})=>
{
    await page.goto(' https://demo.nopcommerce.com/register?returnUrl=%2F');
    await expect.soft(page).toHaveURL(' https://demo.nopcommerce.com/register?returnUrl=%2F')   
    await expect.soft(page).toHaveTitle('nopCommerce demo store')   

    const logo=await page.locator('.header-logo');
    await expect.soft(logo).toBeVisible()  

    const srchstorebox=await page.locator('#small-searchterms');
    await expect.soft(srchstorebox).toBeEnabled()  

    const maleradiobuttonawait =await page.locator('#gender-male')
    maleradiobuttonawait.click();
    await expect.soft(locatormaleradiobuttonawait).toBeChecked() 

    const regButton=await page.locator('#register-button');
    await expect.soft(regButton).toHaveAttribute('type','submit'); 

    await expect.soft(await page.locator('.page-title h1')).toHaveText('Register');  
    await expect.soft(await page.locator('.page-title h1')).toContainText('Regi');

    const srchBoxInputText=await page.locator('#small-searchterms');
    srchBoxInputText.fill('Search store');
    await expect.soft(srchBoxInputText).toHaveValue('Search store');

    const monthoptions=await page.locator("select[name='DateOfBirthMonth'] option")
    await expect.soft(monthoptions).toHaveCount(13) 
    //await expect.soft(monthoptions).not.toHaveCount(13) 

})