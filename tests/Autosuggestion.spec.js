import {test,expect} from '@playwright/test'
test ('Autosuggestion' ,async ({page}) =>{

   await page.goto("https://www.redbus.in/")
   await page.locator("#src").fill('Madurai')
   await page.waitForSelector("//li[contains(@class,'sc-iwsKbI')]/div/text[1]")
   const dropdownValues=await page.$$("//li[contains(@class,'sc-iwsKbI')]/div/text[1]")
   for (const value of dropdownValues)
   {
    const dropdownValue=await value.textContent()
    console.log("Dropdown values are",dropdownValue)
   }


})