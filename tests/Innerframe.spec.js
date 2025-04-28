import {test,expect} from '@playwright/test'
test( 'Inner frame' , async ({page}) =>{
    await page.goto('https://ui.vision/demo/webtest/frames/')
    const frame3=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'})
   // await frame3.fill('//input[@name="mytext3"]','welcome')
    await page.waitForTimeout(3000)
    const childFrame=await frame3.childFrames()
    childFrame[0].locator("//*[text()='Hi, I am the UI.Vision IDE']").click()
    await page.waitForTimeout(3000)






})