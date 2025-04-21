const {test , expect} = require('@playwright/test');

test ('Home Page', async ({ page }) => {

    await page.goto('https://demoblaze.com/');
    const pagetitle= await page.title();
    console.log("Title of the page" ,pagetitle);
    await expect(page).toHaveTitle('STORE');
    await page.close();



})