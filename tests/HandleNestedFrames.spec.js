const {test,expect}=require('@playwright/test')
//import {test,expect} from '@playwright/test'

test('Handle nested frames/iframes',async ({page})=>
{
   
    await page.goto(" https://ui.vision/demo/webtest/frames/");

    //Total frames 
    const allframes=await page.frames();
    console.log("Total numbers of frames : ",allframes.length);

    // Get frame using the frame's name attribute
    //const frame = page.frame('mytext1');

    // Get frame using frame's URL
    const frame3 = await page.frame({ url: 'https://ui.vision/demo/webtest/frames/frame_3.html' });
   // await frame3.fill("input[name='mytext3']",'Ishwar')

   //Nested frame
   const childframes=await frame3.childFrames();
   await childframes[0].locator("//*[@id='i22']/div[2]").check();
    await page.waitForTimeout(3000)


    // Locate element inside frame
   // const username = await page.frameLocator("frame[src='frame_3.html']").locator("[name='mytext1']");
   // await username.fill('John');

    


}) 