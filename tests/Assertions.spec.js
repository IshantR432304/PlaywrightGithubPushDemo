const {test,expect}=require('@playwright/test')
//import {test,expect} from '@playwright/test'

test('HardAssertionsTest',async ({page})=>
{
   
    await page.goto(' https://demo.nopcommerce.com/register?returnUrl=%2F');
    await expect(page).toHaveURL(' https://demo.nopcommerce.com/register?returnUrl=%2F')   
    await expect(page).toHaveTitle('nopCommerce demo store')   

    const logo=await page.locator('.header-logo');
    await expect(logo).toBeVisible()  

    const srchstorebox=await page.locator('#small-searchterms');
    await expect(srchstorebox).toBeEnabled()  

    const maleradiobuttonawait =await page.locator('#gender-male')
    maleradiobuttonawait.click();
    await expect(locatormaleradiobuttonawait).toBeChecked() 

    const regButton=await page.locator('#register-button');
    await expect(regButton).toHaveAttribute('type','submit'); 

    await expect(await page.locator('.page-title h1')).toHaveText('Register');  
    await expect(await page.locator('.page-title h1')).toContainText('Regi');

    const srchBoxInputText=await page.locator('#small-searchterms');
    srchBoxInputText.fill('Search store');
    await expect(srchBoxInputText).toHaveValue('Search store');

    const monthoptions=await page.locator("select[name='DateOfBirthMonth'] option")
    await expect(monthoptions).toHaveCount(13) 
    //await expect(monthoptions).not.toHaveCount(13) 
})