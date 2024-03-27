exports.loginPage=class loginPage
{
    constructor(page)
    {
        this.page=page;
        this.loginLink="[id='login2']";
        this.userNameInput="[id='loginusername']";
        this.passwordInput="[id='loginpassword']";
        this.loginButton="//button[normalize-space()='Log in']";
    }

    async gotoLoginPage()
    {
        await this.page.goto("https://www.demoblaze.com/index.html"); 
    }

    async login(username,password)
    {
        await this.page.locator(this.loginLink).click();
        await this.page.locator(this.userNameInput).fill(username);
        await this.page.locator(this.passwordInput).fill(password);
        await this.page.locator(this.loginButton).click();
    }
}