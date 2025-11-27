import { test, expect } from '../fixtures/combined-fixture'


test('Verify login functionality', async ({ homePage, loginPage, page, env }) => {
  await page.goto(env.baseUrl);
  await homePage.clickSignUpLoginLink();
  await loginPage.enterEmailAddress(env.email);
  await loginPage.enterPassword(env.password);
  await loginPage.clickLogin();
  await expect(loginPage.loggedUser).toHaveText(`Logged in as ${env.password}`);

});
