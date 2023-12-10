const {test} = require ('@playwright/test')
const {HomePage} = require('../models/home-page.model')
const {Scrollbars} = require('../models/scrollbars.models')

test("Click hidding Button",async ({page})=> {
    await page.pause()
    const scrollbars = new Scrollbars(page)
    await scrollbars.navigaToScrollBars()
    await scrollbars.clickHidingButton()
})