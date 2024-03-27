import {test,expect} from '@playwright/test'

test('@sanityPlaywright tags test 1',async ({page})=>
{
   console.log('This is test 1');
});

test('@sanityPlaywright tags test 2',async ({page})=>
{
   console.log('This is test 2');
});

test('@regPlaywright tags test 3',async ({page})=>
{
   console.log('This is test 3');
});

test('@reg@sanityPlaywright tags test 4',async ({page})=>
{
   console.log('This is test 4');
});

//Command use to execute test with sanity tag
//npx playwright test tests/Tags.spec.js --project chromium --headed --grep "@sanity"
//npx playwright test tests/Tags.spec.js --project chromium --headed --grep "@sanity" --grep-invert "@reg"