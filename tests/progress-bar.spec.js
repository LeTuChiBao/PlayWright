const {test } = require('@playwright/test')
const {ProgressBarPage} = require("../models/progress-bar.model")

test("Check Progress bar is 75%", async({page})=> {
    const progressBarPage = new ProgressBarPage(page)
    await progressBarPage.navigaToProgressBar()
    await progressBarPage.clickStartButton()
    while(await progressBarPage.progressBarPercent() !== "75%"){
        console.log(`Curren Percent is at ${await progressBarPage.progressBarPercent()}`)
    }
    await progressBarPage.clickStopButton()
})