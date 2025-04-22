import{test,expect} from '@playwright/test'
let page;
test.beforeEach('Before Each ', async ({browser}) =>{

    page=await browser.newPage()
    await page.goto('https://www.saucedemo.com/')
    await page.locator('#user-name').fill('standard_user')
    await page.locator('#password').fill('secret_sauce')
    await page.locator("#login-button").click()
    await page.waitForTimeout(3000);
})
test.afterEach('After each', async () =>{
    /*try
    {
        if(page.isClosed())
        {
            console.warn('page already closed skipping logout');
            
        }

     const burger_menu=await page.locator('#react-burger-menu-btn');
     const sidebar_menu=await page.locator("//a[text()='Logout']");
     if(await burger_menu.isVisible({timeout:5000}))
     {
     await burger_menu.click();
     await sidebar_menu.waitFor({state:'visible',timeout:4000});
     await sidebar_menu.click();
     }
     else
     {
        console.warn("Skipping logout");
     }
    }
    catch(err)
    {
        console.log('logout failed in afterEach:', err.message);
    }*/
    await page.locator('#react-burger-menu-btn').click();
    await page.locator("//a[text()='Logout']").click();
  
})
 test('products' ,async () =>{
    page.on('dialog', async dialog =>{
        expect(dialog.type()).toContain('alert')
        expect(dialog.message()).toContain('Press the button')
        expect(dialog.accept())

    })
    const products=await page.$$("//div[@class='inventory_list']//div[@class='inventory_item']//div[@class='inventory_item_description']//a//div");
    for(const product of products)
    {
        const value=await product.textContent();
        console.log(value);
    }

    
  
})
 test('Add to cart', async()=>{
    const product = await page.locator("//a[@id='item_4_title_link']/div");
    await product.waitFor({state:'visible',time:3000})
    await product.click();
    const addToCart=await page.locator("//button[text()='Add to cart']");
    await expect(addToCart).toBeVisible();
    await addToCart.click({timeout:5000});
    const item=await page.locator(".shopping_cart_link span");
    await item.click();
    await expect(item).toBeVisible();

})
