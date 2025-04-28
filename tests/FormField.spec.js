import { test,expect} from '@playwright/test'
test ('FormFileds', async ({page}) =>{

    //input box
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.locator("//input[@id='name']").fill("mukesh")
    await expect (await page.locator("//input[@id='name']")).toBeEditable()

    await page.fill("//input[@id='email']","chitraabanues@gmail.com")
    await expect(await page.locator("//input[@id='email']")).toBeEnabled()

    //radio buttons
    await page.locator("//label[text()='Female']").click()
    await expect(await page.locator("//label[text()='Female']")).toBeChecked()
    await expect(await page.locator("//label[text()='Male']")).not.toBeChecked()
    

    // 1 check boxes
    await page.click("//input[@id='sunday']")
    await expect(await page.locator("//input[@id='sunday']")).toBeEnabled()

    //multiple check boxes
    const checkboxLocators=[ 
        "//input[@id='monday']",
        "//input[@id='tuesday']",
        "//input[@id='wednesday']"

    ];
    for(const checkbox of checkboxLocators)
    {
        await page.locator(checkbox).click();
    }
    //unchecked selected checkboxes
    for(const checkbox of checkboxLocators)
    {
     if(await page.locator(checkbox).isChecked())
     {
        await page.locator(checkbox).uncheck();
     }
    }
  await page.waitForTimeout(5000);




    
})