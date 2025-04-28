import {test,expect} from '@playwright/test'
test.skip ('Handling Alerts' , async ({page}) =>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    page.on('dialog' , async dialog =>{
    expect(dialog.type()).toContain('alert')
    expect(dialog.message()).toContain('I am an alert box!')
    expect(dialog.accept())
    })

    await page.click('#alertBtn')
    await page.waitForTimeout(3000)
})
test('confirmation alert', async ({page}) =>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    page.on('dialog' ,async dialog=>{
        expect(dialog.type()).toContain('confirm')
        expect(dialog.message()).toContain('Press a button!')
        expect(dialog.accept())

    })
 await page.click('#confirmBtn')
 await page.waitForTimeout(3000)
})
test('prompt alert', async ({page}) =>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    page.on('dialog' ,async dialog =>{
        expect(dialog.type()).toContain('prompt')
        expect(dialog.message()).toContain('Please enter your name:')
        expect(dialog.defaultValue('Harry Potter'))
        expect(dialog.accept('chitraa'))
    })
    await page.click('#promptBtn')
    await page.waitForTimeout(3000)
})
