import { HomePageLocator } from '../../locator/homepage-locators';
import { CommonLocator } from '../../locator/common-locator';
import { BasePage } from '../common/BasePage';
import { Page, Expect, expect } from '@playwright/test';

export class HomePage extends BasePage {

    readonly expect: Expect;
    protected commonPageLocator: CommonLocator;
    protected homePageLocator: HomePageLocator;
    constructor(page: Page) {
        super(page);
        this.homePageLocator = new HomePageLocator(page);
        this.commonPageLocator = new CommonLocator(page);

    }

    async handleCookiePopups() {
        const popupButtons = [
            // this.page.getByRole('button', { name: /accept/i }),
            // this.page.getByRole('button', { name: /agree/i }),
            // this.page.getByRole('button', { name: /allow/i }),
            this.page.getByRole('button', { name: /close/i })
            // this.page.getByRole('button', { name: /reject/i }),
        ];

        for (const btn of popupButtons) {
            await btn.click({timeout:2000}).catch(() => { });
        }
    }

    async clickToProfileIcon(): Promise<void> {
        this.clickElement(this.homePageLocator.profileIcon);
    }

    async clickToLoginButton(): Promise<void> {
        this.clickElement(this.homePageLocator.loginButton);
    }

}