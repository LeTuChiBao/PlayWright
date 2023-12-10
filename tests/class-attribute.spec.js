const {test} = require('@playwright/test')
const {ClassAtttributePage} = require('../models/class-attribute.model')

test('Click Blue Button',async ({page})=> {

    page.on('dialog', async dialog =>{
        console.log(dialog.message())
        await page.pause()
        await dialog.dismiss()
    })

    const classAttributepage = new ClassAtttributePage(page)
    await classAttributepage.navigaToClassAtrributePage()
    await classAttributepage.clickBlueButton()
})