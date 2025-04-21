/*page.getByRole() to locate by explicit and implicit accessibility attributes.
page.getByText() to locate by text content.
page.getByLabel() to locate a form control by associated label's text.
page.getByPlaceholder() to locate an input by placeholder.
page.getByAltText() to locate an element, usually image, by its text alternative.
page.getByTitle() to locate an element by its title attribute.
page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).*/

import {test,execute} from '@playwright/test'
test('BuiltInLocators', async ({page}) =>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    //const logo=await page.getByAltText('company-branding')

    //page.getByAltText() to locate an element, usually image, by its text alternative.
   // await expect(logo).toBeVisible()
    //page.getByPlaceholder() to locate an input by placeholder.
    if (page.isClosed()) {
        console.error("Page is already closed!");
      } else {
        await page.getByPlaceholder('Username').fill('Admin');
      }
      if (page.isClosed()) {
        console.error("Page is already closed!");
      } else {
        await page.getByPlaceholder('Password').fill('admin123');
      }
    
      
    //page.getByLabel() to locate a form control by associated label's text.
    await page.getByRole('button',{type: 'submit'}).click()
    

})