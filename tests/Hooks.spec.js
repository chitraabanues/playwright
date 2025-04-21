import{test,expect} from '@playwright/test'
let page;
test.beforeEach('Before Each ', async ({browser}) =>{

    page=await browser.newPage()
    await page.goto('https://demoblaze.com/')
    await page.locator('#login2').click();
    await page.locator('#loginusername').fill('pavanol')
    await page.locator('#loginpassword').fill('test@123')
    await page.locator("//button[text()='Log in']").click()
    await page.waitForTimeout(3000);
})
test.afterEach('After each', async ({page}) =>{
    if(!page.closed?.())
    {
    
    try{
    await page.waitForSelector('#logout2',{state:'visible'});
    await page.locator('#logout2').click();
    await page.waitForTimeout(3000)
    }
    catch(err)
    {
        console.warn('logout failed',err.message);
    }
    }
    else{
        console.warn('page already closed skipping logout');
    }
    
    
})
test.only('Home page' ,async ({page}) =>{
  const products=await page.$$("//a[@class='hrefch']")
  for (const product of products)
  {
   // if (await product.isVisible())
      console.log('products are ',await product.textContent())
   /* else 
    {
    console.log('Product element is no longer available');
    }*/
  }

  await page.waitForTimeout(3000)
  
})
test('Add to Cart' , async ({page}) =>{
    await page.locator("//a[@class='hrefch']").click()
    await page.locator('//a[text()="Add to cart"]')
    page.on('dialog' , async dialog =>{
        expect(await dialog.message()).toHaveText('Product added.')
        await dialog.accept()

    })
    await page.waitForTimeout(3000)
})
