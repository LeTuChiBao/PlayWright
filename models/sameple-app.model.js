const {expect} = require('@playwright/test')
exports.SampleAppPage = class SampleAppPage {
    constructor(page){
        this.page = page
        this.sampleAppUrl = page.goto("/sampleapp")
        this.userNameField = page.getByPlaceholder("User Name")
        this.passwordField = page.getByPlaceholder("********")
        this.loginButton = page.getByRole("button", { name: "Log In" })
        this.logoutButton = page.getByRole("button", { name: "Log Out" })
        this.loginText = page.locator("#loginstatus")
    }
    async navigateToSampleApp(){
        await this.sampleAppUrl
    }
    async fillUsernameField(username){
        await this.userNameField.fill(username)
    }
    async fillPasswordField(password){
        await this.passwordField.fill(password)
    }
    async clickLoginButton(){
        await this.loginButton.click()
    }
    async clickLogoutButton(){
        await this.logoutButton.click()
    }
    async expectedLoginTextTobe(text){
        await expect(this.loginText).toHaveText(text)
    }    
}