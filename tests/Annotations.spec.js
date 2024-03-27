import {test,expect} from '@playwright/test'

//USe of only
/*test.only('Annotation Test1',async ({page})=>
{
   console.log('This is test 1');
});*/

//Use of skip
/*test.skip('Annotation Test2',async ({page})=>
{
   console.log('This is test 2');
});*/

//Use of skip on certain condition
/*test('Annotation Test3',async ({page,browserName})=>
{
   console.log('This is test 3');
   if(browserName=='chromium')
   {
        test.skip();
   }
});*/

//Use of fixme
/*test('Annotation Test4',async ({page})=>
{
    console.log('This is test 4');
    test.fixme();
   
});*/

//Use of fail
/*test('Annotation Test5',async ({page})=>
{
    console.log('This is test 5');
    test.fail();
   
});*/

//Use of fail with condition
/*test('Annotation Test6',async ({page, browserName})=>
{
    console.log('This is test 6');
    if(browserName=='chromium')
    {
        test.fail();
    }
   
});*/

//Use of slow
test('Annotation Test7',async ({page, browserName})=>
{
    console.log('This is test 7');
   // test.slow();
   test.setTimeout(5000);
    await page.goto("https://www.demoblaze.com/index.html");
   
});