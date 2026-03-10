import { Page, Locator } from '@playwright/test';
import { CommonLocator } from './common-locator';

export class HomePageLocator extends CommonLocator {

    navbar: Locator;
    profileIcon: Locator;
    loginButton: Locator;
    cookiePopup: Locator;

    constructor(page: Page) {
        super(page);
        this.initializeLocators();
    }

    protected initializeLocators(): void {
        this.navbar = this.page.getByRole('navigation', { name: 'Primary Site' });
        this.profileIcon = this.page.locator('#topnav-portal-account-icon');
        this.loginButton = this.page.getByRole('link', { name: 'Log in to RocPortal' })
        this.cookiePopup = this.page.getByRole('button', { name: 'Accept all' })
    }
}
