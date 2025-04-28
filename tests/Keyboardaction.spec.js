import {test ,expect} from '@playwright/test'
test ('Keyboard Action' , async ({page}) =>{
    await page.goto('https://gotranscript.com/text-compare')
    await page.fill('[name="text1"]','Welcome to playwright testing')
    await page.keyboard.press('Control+A')
    await page.keyboard.press('Control+C')
    await page.keyboard.up('Tab')
    await page.keyboard.down('Tab')
    await page.keyboard.press('Control+V')
    await page.waitForTimeout(3000)

})