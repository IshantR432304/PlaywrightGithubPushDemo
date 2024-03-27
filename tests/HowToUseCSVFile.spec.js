const {test,expect}=require('@playwright/test')
//import {test,expect} from '@playwright/test'
import fs from "fs";
import {parse} from "csv-parse/sync";
const csvdata=parse(fs.readFileSync("tests/testData/testData.csv"),
    {
        columns:true,
        skip_empty_lines:true,
        //delimiter:";"
    }
)


/*csvdata.forEach((data) => {
    test(`Json data test using for each loop ${data.id}`, async ({page})=>
    {
    
    await page.goto("https://www.demoblaze.com/index.html"); 
    await page.locator("[id='login2']").click();
    await page.locator("[id='loginusername']").fill(data.userName);
    await page.locator("[id='loginpassword']").fill(data.passWord);
   // await page.locator("//button[normalize-space()='Log in']").click();
    //await page.locator("[id='loginusername']").fill(jsonData.interest[1]);
    //await page.locator("[id='loginusername']").fill(jsonData.address.area);
    })
});*/

for(const data of csvdata)
    {
    test(`Json data test using for loop ${data.id}`, async ({page})=>
    {
    
    await page.goto("https://www.demoblaze.com/index.html"); 
    await page.locator("[id='login2']").click();
    await page.locator("[id='loginusername']").fill(data.userName);
    await page.locator("[id='loginpassword']").fill(data.passWord);
   // await page.locator("//button[normalize-space()='Log in']").click();
    //await page.locator("[id='loginusername']").fill(jsonData.interest[1]);
    //await page.locator("[id='loginusername']").fill(jsonData.address.area);
    })
};

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