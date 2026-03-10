// Common locators shared across multiple pages
import { Page, Locator } from '@playwright/test';

export class CommonLocator {

    readonly page: Page;
    readonly headerLink!: Locator;

    constructor(page: Page) {
        this.page = page;
    }

    elementByText(text: string): Locator {
        return this.page.getByText(text);
    }
}