import {test,expect} from '@playwright/test'
import { loginPage } from '../Pages/loginPage';
import { homePage } from '../Pages/homePage';
import { cartPage } from '../Pages/cartPage';

test('Login test',async ({page})=>
{
    //Login page
   const login=new loginPage(page);
   await login.gotoLoginPage();
   await login.login('Ishwar79','123456789');
   await page.waitForTimeout(5000);

   //Home Page
   const home=new homePage(page);
   await home.addProductToCart('Nexus 6');
   await page.waitForTimeout(3000);
   await home.goToCart();

   //Cart page
   const cart=new cartPage(page);
   const status=await cart.checkProductInCart('Nexus 6');
   expect(await status).toBe(true);
   await page.waitForTimeout(3000);
   await cart.goToCart();

});

/*//Home page verification
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
 //Cart page
 await page.locator("#cartur").click();
 await page.locator("//a[norma;lize-space()='Delete']").click();
await expect(page.locator("#logout2")).toBeVisible();*/