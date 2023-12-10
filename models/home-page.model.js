exports.HomePage = class HomePage{
    constructor(page){
        this.page = page
        this.homePageUrl = page.goto("/home")
        this.quote = page.locator(".mb-0")
        this.linkTags = page.locator('a')
        this.div = page.locator('.col-sm')
    }
    async navigationToHomePage(){
        await this.homePageUrl
    }
    async geQuote(){
        let test = await this.quote.innerText() 
        return test 
    }
    async getAllLinkTags(){
        let homePageLinkTags =   await this.linkTags.evaluateAll((elements)=> elements.map((el) => el.innerText))
        return homePageLinkTags
    }
}