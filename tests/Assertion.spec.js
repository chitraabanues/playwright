import { test, expect } from '@playwright/test';

test('Assertion' , async({page}) => {
    await page.goto('https://demoblaze.com/index.html')
    //await expect(page).toHaveURL('https://demoblaze.com/index.html');
    //await expect(page).toHaveTitle('STORE')
    

    await page.goto('https://demoblaze.com/index.html')
    await expect.soft(page).toHaveURL('https://demoblaze.com/index.html');
    await expect.soft(page).toHaveTitle('STORE')
    await expect.soft(page.locator('.navbar-brand')).toBeVisible()
    

})