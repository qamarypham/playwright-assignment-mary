import { test as base, expect as baseExpect } from '@playwright/test';
import { LoginPage } from '../pages/ui/LoginPage';
import { HomePage } from '../pages/ui/HomePage'

export const expect = baseExpect;
export const test = base.extend<{
    loginPage: LoginPage;
    homePage: HomePage;

}>({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    homePage: async ({ page }, use) => {
        await use(new HomePage(page));
    }
});

