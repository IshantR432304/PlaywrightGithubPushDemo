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
   //await page.waitForTimeout(5000);

   //Home Page
   const home=new homePage();
   await home.addProductToCart('Nexus 6');
   await page.waitForTimeout(3000);
   await home.goToCart();

   //Cart page
   const cart=new cartPage();
   const status=await cart.checkProductInCart('Nexus 6');
   expect(await status).toBe(true);
   await page.waitForTimeout(3000);
   await cart.goToCart();

});