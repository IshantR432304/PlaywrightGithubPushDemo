import {test,expect} from '@playwright/test'

test.skip('Taking Screenshot Test',async ({page})=>
{
   
    await page.goto("https://tutorialsninja.com/demo/"); 
    await page.screenshot({path: 'tests/Screenshots/' +Date.now()+'Homepagescreenshot.png'}); 

});

test.skip('Taking Fullpage Screenshot Test',async ({page})=>
{
   
    await page.goto("https://tutorialsninja.com/demo/"); 
    await page.screenshot({path: 'tests/Screenshots/' +Date.now()+'FullHomepagescreenshot.png', fullPage: true}); 

});

test.skip('Taking Element Screenshot Test',async ({page})=>
{
   
    await page.goto("https://tutorialsninja.com/demo/"); 
    await page.locator('//*[@id="content"]/div[2]/div[1]/div').screenshot({path: 'tests/Screenshots/' +Date.now()+'Elementscreenshot.png'}); 

});

//Always take screenshot of all the test which runs by configuring playwright.config.js file
test('Taking Screenshot Test with playwright file configuration',async ({page})=>
{
    await page.goto("https://www.demoblaze.com/index.html"); 
    await page.locator("[id='login2']").click();
    await page.locator("[id='loginusername']").fill('Ishwar79');
    await page.locator("[id='loginpassword']").fill('123456789');
    await page.locator("//button[normalize-space()='Log in']").click();
    //await page.locator('//*[@id="content"]/div[2]/div[1]/div').screenshot({path: 'tests/Screenshots/' +Date.now()+'Elementscreenshot.png'}); 

});

