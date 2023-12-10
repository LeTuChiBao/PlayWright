exports.ClassAtttributePage = class ClassAtttributePage{
    constructor (page){
        this.page = page
        this.classAttributeUrl = page.goto('/classattr')
        this.blueButton = page.locator(".btn-primary")

    }

    async navigaToClassAtrributePage(){
        await this.classAttributeUrl
    }

    async clickBlueButton(){
        await this.blueButton.click()
    }

}