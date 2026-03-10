import { Locator, Page, expect } from '@playwright/test';
import { step } from '../../utilities/logging';

export class BasePage {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  @step('Navigate to URL')
  async navigateTo(url: string): Promise<void> {
    await this.page.goto(url);
  }

  @step('click on element ')
  async clickElement(element: Locator): Promise<void> {
    await element.waitFor({ state: 'visible' });
    await element.click();
  }
}
