const {test,expect}=require('@playwright/test')
//import {test,expect} from '@playwright/test'

test('Handle frames/iframes',async ({page})=>
{
   
    await page.goto(" https://ui.vision/demo/webtest/frames/");

    //Total frames 
    const allframes=await page.frames();
    console.log("Total numbers of frames : ",allframes.length);

    // Get frame using the frame's name attribute
    //const frame = page.frame('mytext1');

    // Get frame using frame's URL
   // const frame1 = await page.frame({ url: 'https://ui.vision/demo/webtest/frames/frame_1.html' });
    
   // await frame1.fill("[name='mytext1']",'Ishwar')

    // Locate element inside frame
    const username = await page.frameLocator("frame[src='frame_1.html']").locator("[name='mytext1']");
    await username.fill('John');

    await page.waitForTimeout(3000)


}) 