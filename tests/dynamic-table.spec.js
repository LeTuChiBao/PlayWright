const {test, expect} = require("@playwright/test")
const {DynamicTablePage} = require("../models/dymanic-table.model")

test("Testing Dynamic Table Page", async ({page})=> {
    const dymanicTablePage = new DynamicTablePage(page)
    await dymanicTablePage.navigationToDynamicTablePage()
    let chromeHeaders =  await dymanicTablePage.getHeaderCPUIndex()
    console.log(chromeHeaders)
    let chromeCells =  await dymanicTablePage.getChromeCellContent(chromeHeaders)
    console.log(chromeCells)

    let chromCpuPercentage = await dymanicTablePage.getChromeCpuPercentage()
    console.log(chromCpuPercentage)

    let validatioMessage = await dymanicTablePage.getChromeValidationMessage()
    console.log(validatioMessage)
    expect(chromCpuPercentage).toMatch(validatioMessage)

})