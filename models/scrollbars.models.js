exports.Scrollbars = class Scrollbars{
    constructor(page){
        this.page = page
        this.scrollbarUrl = page.goto("/scrollbars")
        this.hidingButton = page.locator("#hidingButton")
    }
    async navigaToScrollBars(){
        await this.scrollbarUrl
    }
    async clickHidingButton(){{
        await this.hidingButton.click()
    }}
}