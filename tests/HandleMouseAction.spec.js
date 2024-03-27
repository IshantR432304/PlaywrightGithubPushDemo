const {test,expect}=require('@playwright/test')
//import {test,expect} from '@playwright/test'

test('Handle Mouse actions',async ({page})=>
{
   
    //await page.goto("https://tutorialsninja.com/demo/"); //Mouse hover action website
    //await page.goto("https://swisnl.github.io/jQuery-contextMenu/demo.html");  //Mouse right click website
    await page.goto("https://testautomationpractice.blogspot.com/");  //Double click and drag and drop website
    
   //Mouse hover action
  /* const desktopOption= await page.locator("//a[normalize-space()='Desktops']");
   const macOption=await page.locator(" //a[normalize-space()='Mac (1)']");

   await desktopOption.hover();
   await macOption.hover();*/

   //Right click action
  /* const rightClickOption= await page.locator("//span[normalize-space()='right click me']");
   await rightClickOption.click({button: 'right'});*/

   //Double click action
   /*const doubleClickOption= await page.locator("//button[normalize-space()='Copy Text']");
   await doubleClickOption.dblclick();
   const secondFieldText=await page.locator("#field2");
   await expect(secondFieldText).toHaveValue('Hello World!');*/

   //Drag and drop action
   const drag=await page.locator("#draggable");
   const drop=await page.locator("#droppable");

   //Approach 1
   /*await drag.hover();
   await page.mouse.down();
   await drop.hover();
   await page.mouse.up();*/

   //Approach 2
   await drag.dragTo(drop);

   await page.waitForTimeout(5000);



});