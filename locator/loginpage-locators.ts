import { Page, Locator } from '@playwright/test';
import { CommonLocator } from './common-locator';

export class LoginPageLocator extends CommonLocator {

    userName: Locator;
    passWord: Locator;
    loginButton: Locator;

    constructor(page: Page) {
        super(page);
        this.initializeLocators();
    }

    protected initializeLocators(): void {
        this.userName = this.page.locator('#username');
        this.passWord = this.page.locator('#password');
        this.loginButton = this.page.getByRole('button', { name: 'Continue', exact: true });
    }

}
