import {test,expect} from '@playwright/test'
test ('handle Dropdown',async ({page}) =>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    //await page.locator('#country').selectOption({label :'Japan'})
    await page.selectOption('#country','India')
    //const options=await page.locator('#country option')
    //await expect(options).toHaveCount(10);
    const option=await page.$$('#country option')
    await expect(option.length).toBe(10);

    const option_values=await page.locator('#country').textContent()
    await expect(option_values.includes('India')).toBeTruthy()

   /* const options=await page.$$('#country option')
    for (const option of options)
    {
       console.log(await option.textContent());
    }*/

    const options=await page.$$('#country option')
    let status=false
    for (const option of options)
    {
      const value= await option.textContent()
      if(value.includes('France'))
      {
        status=true;
        break;
      }
      
    }
    expect(status).toBeTruthy()





    await page.waitForTimeout(5000)

})