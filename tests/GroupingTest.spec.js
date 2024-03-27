const {test,expect}=require('@playwright/test')
//import {test,expect} from '@playwright/test'

test.beforeAll(async ()=>
{
   console.log('BeforeAll block executed');
})

test.beforeEach(async ()=>
{
   console.log('Before each block executed');
})


test.describe('Group 1',()=>
{
    test('Test 1', async ()=>
{
   console.log("This is test 1");
});

test('Test 2', async ()=>
{
   console.log("This is test 2");
});
});

test.describe('Group 2',()=>
{
    test('Test 3', async ()=>
{
   console.log("This is test 3");
});

test('Test 4', async ()=>
{
   console.log("This is test 4");
});
});

test.describe.only('Group 3',()=>
{
    test('Test 5', async ()=>
{
   console.log("This is test 5");
});

test('Test 6', async ()=>
{
   console.log("This is test 6");
});
});

test.describe.skip('Group 4',()=>
{
    test('Test 7', async ()=>
{
   console.log("This is test 7");
});

test('Test 8', async ()=>
{
   console.log("This is test 8");
});
});

test.afterEach(async ()=>
{
   console.log('After each block executed');
})

test.afterAll(async ()=>
{
    console.log('AfterAll block executed');

});





