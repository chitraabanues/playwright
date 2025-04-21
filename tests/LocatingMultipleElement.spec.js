import { test, execute} from '@playwright/test'
test ('LocationgMultipleElements' , async ({page}) =>{
   await page.goto("https://demoblaze.com/")
   const products=await page.$$('//div[@id="tbodyid"]//div// h4/a')
   for(const product of products)
   {
    const prodName=await product.textContent();
    console.log(prodName)

   }
   await page.close()
    
   
})
