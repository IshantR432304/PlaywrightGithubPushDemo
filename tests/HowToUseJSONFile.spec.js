const {test,expect}=require('@playwright/test')
//import {test,expect} from '@playwright/test'
//const jsonData=JSON.parse(JSON.stringify(require("../testData.json")));
//const jsonData=JSON.parse(JSON.stringify(require("../tests/testData/testLoginData.json")));
import jsondata from "../tests/testData/testLoginData.json";

/*test.describe("Data driven testing",function()
{
    for(const data of jsonData)
    {
        test.describe(`Login with multiple users ${data.id}`, function()
        {
            test("Json data test", async ({page})=>
            {
    
                await page.goto("https://www.demoblaze.com/index.html"); 
                await page.locator("[id='login2']").click();
                await page.locator("[id='loginusername']").fill(data.userName);
                await page.locator("[id='loginpassword']").fill(data.passWord);
                // await page.locator("//button[normalize-space()='Log in']").click();
                //await page.locator("[id='loginusername']").fill(jsonData.interest[1]);
                 //await page.locator("[id='loginusername']").fill(jsonData.address.area);
            })
        })
    }
})*/

//Using foreach
jsondata.forEach((data) => {
    test(`Json data test ${data.id}`, async ({page})=>
    {
    
    await page.goto("https://www.demoblaze.com/index.html"); 
    await page.locator("[id='login2']").click();
    await page.locator("[id='loginusername']").fill(data.userName);
    await page.locator("[id='loginpassword']").fill(data.passWord);
   // await page.locator("//button[normalize-space()='Log in']").click();
    //await page.locator("[id='loginusername']").fill(jsonData.interest[1]);
    //await page.locator("[id='loginusername']").fill(jsonData.address.area);
    })
});


/*test.skip('Json data test', async ({page})=>
{
    
    await page.goto("https://www.demoblaze.com/index.html"); 
    await page.locator("[id='login2']").click();
    await page.locator("[id='loginusername']").fill(jsonData.userName);
    await page.locator("[id='loginpassword']").fill(jsonData.passWord);
   // await page.locator("//button[normalize-space()='Log in']").click();
    //await page.locator("[id='loginusername']").fill(jsonData.interest[1]);
    //await page.locator("[id='loginusername']").fill(jsonData.address.area);
})*/