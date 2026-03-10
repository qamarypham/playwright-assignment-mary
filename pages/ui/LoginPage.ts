import { LoginPageLocator } from '../../locator/loginpage-locators';
import { CommonLocator } from '../../locator/common-locator';
import { BasePage } from '../common/BasePage';
import { Page, Expect, expect } from '@playwright/test';

export class LoginPage extends BasePage {

    readonly expect: Expect;
    protected loginPageLocator: LoginPageLocator;
    protected commonPageLocator: CommonLocator;
    constructor(page: Page) {
        super(page);
        this.loginPageLocator = new LoginPageLocator(page);
        this.commonPageLocator = new CommonLocator(page);
    }

    async verifyNavigateToLoginPage() {
        // await expect(this.page).toHaveURL(/auth\.rocscience\.com\/u\/login/)
        await this.page.waitForURL('**/u/login**');
    }

    async validateUsernameFieldVisible(): Promise<void> {
        await expect(this.loginPageLocator.userName).toBeVisible();
    }

    async validatePasswordFieldVisible(): Promise<void> {
        await expect(this.loginPageLocator.passWord).toBeVisible();
    }

    async validateLoginButtonVisible(): Promise<void> {
        await expect(this.loginPageLocator.loginButton).toBeVisible();
    }

    async validateLoginButtonEnabled(): Promise<void> {
        await expect(this.loginPageLocator.loginButton).toBeEnabled();
    }


}