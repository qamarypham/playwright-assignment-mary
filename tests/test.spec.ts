import { test } from '../fixtures/fixture'

test.beforeEach(async ({ homePage }) => {
    await homePage.navigateTo('/');
    await homePage.handleCookiePopups();
});

test.describe('Login functionality', {
    tag: ['@ui']
}, () => {
    test('@TC001 - Verify URL and validate Login page elements are visible', async ({ loginPage, homePage }) => {
        await homePage.clickToProfileIcon();
        await homePage.clickToLoginButton();
        await loginPage.verifyNavigateToLoginPage();
        await loginPage.validateUsernameFieldVisible();
        await loginPage.validatePasswordFieldVisible();
        await loginPage.validateLoginButtonVisible();
        await loginPage.validateLoginButtonEnabled();
    });
});



