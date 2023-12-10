exports.ProgressBarPage = class ProgressBarPage{
    constructor(page){
        this.page = page
        this.progressBarUrl = page.goto("/progressbar")
        this.startButton = page.locator("#startButton")
        this.stopButton = page.locator("#stopButton")
        this.progressBarText = page.locator("#progressBar")
    }
    async navigaToProgressBar(){
        await this.progressBarUrl
    }
    async clickStartButton(){
        await this.startButton.click()
    }
    async clickStopButton(){
        await this.startButton.click()
    }
    
    async progressBarPercent (){
        let currentPercent = this.progressBarText.innerText()
        return currentPercent
    }
}