import {test,expect} from '@playwright/test'
test('Locators' ,async ( {page} ) => {

    await page.goto('https://demoblaze.com/')
    await page.click('id=login2')
    await page.fill('#loginusername','pavanol')
    await page.fill('//*[@id="loginpassword"]','test@123')
    await page.click('//button[text()="Log in"]')
    const logout2Button=await page.locator('id=logout2')
    await expect(logout2Button).toBeVisible();
    await page.close();

})
