const {test,expect}=require('@playwright/test')
//import {test,expect} from '@playwright/test'

/*test('Single file upload',async ({page})=>
{
   
    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php"); 
    await page.waitForSelector('#filesToUpload');
    await page.locator("#filesToUpload").click();
   // await page.locator("#filesToUpload").setInputFiles('Demo.txt');
   await page.setInputFiles('#filesToUpload', 'tests/testData/abc.pdf');

    await page.waitForTimeout(5000);

})*/

test('Multiple file upload',async ({page})=>
{
   
    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php"); 
    await page.waitForSelector('#filesToUpload');
    await page.locator("#filesToUpload").click();
   // await page.locator("#filesToUpload").setInputFiles('Demo.txt');
    await page.setInputFiles('#filesToUpload', ['tests/testData/abc.pdf','tests\testData\singlefile.txt']);

    await page.waitForTimeout(5000);
   expect(await page.locator('#fileList li:nth-child(1)')).toHaveText('abc.pdf');
   expect(await page.locator('#fileList li:nth-child(2)')).toHaveText('tests\testData\singlefile.txt');

   //Removing files
   await page.locator("#filesToUpload").setInputFiles([]);
   await page.waitForTimeout(3000);
   expect(await page.locator('#fileList li:nth-child(1)')).toHaveText('No Files Selected');
   await page.waitForTimeout(3000);





});