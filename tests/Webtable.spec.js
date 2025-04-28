import {test ,expect} from '@playwright/test'
test( 'Webtable' , async ({page}) =>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    const table=await page.locator('#productTable') 
    const columns=await table.locator('thead tr th')  
    expect(await columns.count()).toBe(4)
    const rows=await table.locator('tbody tr')  
    expect(await rows.count()).toBe(5)
    /*await selectProduct(rows,page,'Smartphone')
    await selectProduct(rows,page,'Laptop')
    await selectProduct(rows,page,'Tablet')*/

    
    const pages=await page.locator('.pagination li a')
    console.log(await pages.count())
    for (let p=0;p<await pages.count();p++)
    {
        if(p>0)
        {
            await pages.nth(p).click();
        }
        
    
    for(let i=0;i<await rows.count();i++)
    {
        const row=rows.nth(i);
        const tds=row.locator('td');
        for(let j=0;j<await tds.count()-1;j++)
        {
           const cellvalue= await tds.nth(j).textContent();
           console.log(cellvalue);
        }
    }
}
    await page.waitForTimeout(3000)
    

})

/*async function selectProduct(rows,page,Name)
{
   const matchedRow= rows.filter({
        has:page.locator('td'),
        hasText:'Name' 
    });
   //await matchedRow.locator('input[type="checkbox"]').check();
   //await waitForTimeout(3000)
   await matchedRow.locator('input').waitFor({ state: 'visible' });
   await matchedRow.locator('input').check();
}*/