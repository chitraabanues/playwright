import {test,expect} from '@playwright/test'
test( 'Handle frame' , async ({page}) =>{
    await page.goto('https://ui.vision/demo/webtest/frames/')
    const number_frames=await page.frames()
    console.log(number_frames.length)
   /*const frame1=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'})
   await frame1.fill("//input[@name='mytext1']",'hello')*/
   const frame1=await page.frameLocator('//frame[@src="frame_1.html"]').locator("//input[@name='mytext1']")
   await frame1.fill("hello");
   await page.waitForTimeout(3000)
})