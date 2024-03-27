const {test,expect,chromium}=require('@playwright/test')
//import {test,expect} from '@playwright/test'

test('Test1',async ()=>
{
    await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await expect(page1).toHaveTitle("OrangeHRM");
});

test('Test2',async ()=>
{
    await page1.goto("https://www.demoblaze.com/");
    await expect(page1).toHaveTitle("STORE");
});

test('Test3',async ()=>
{
    await page1.goto("https://tutorialsninja.com/demo/");
    await expect(page1).toHaveTitle("Your Store");
});