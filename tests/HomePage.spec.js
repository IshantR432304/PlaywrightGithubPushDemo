const {test,expect}=require('@playwright/test')
//import {test,expect} from '@playwright/test'

test('Home Page',async ({page})=>
{
    await page.goto('https://www.demoblaze.com/');

    const pageTitle=await page.title();
    console.log('Page title is :',pageTitle);

   await expect(page).toHaveTitle("STORE");
   await expect(page).toHaveURL("https://www.demoblaze.com/");

   //Click on login option on homepage
   //await page.click('id=login2');
   await page.locator('id=login2').click();

   //Enter username
   await page.locator('id=loginusername').fill('Ishwar79');
   //await page.fill('id=loginusername','Ishwar79');
   //await page.type('id=loginusername','Ishwar79');

  //Enter password
   await page.locator('id=loginpassword').fill('123456789');

   //Click on login
   await page.click("//button[normalize-space()='Log in']");
   
   const logoutLink= await page.locator("(//a[normalize-space()='Log out'])[1]");
   await expect(logoutLink).toBeVisible();

   //Locating multiple elements
   //const elements=await page.$$(locator);

   await page.close();
})