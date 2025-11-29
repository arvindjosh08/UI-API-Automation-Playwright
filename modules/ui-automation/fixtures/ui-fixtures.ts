import { test as base } from '@playwright/test';
import { HomePage } from '../pages/home.page';
import { LoginPage } from '../pages/login.page';
import { SignUpPage } from '../pages/signup.page';
import { ProductsPage } from '../pages/products.page';

// Declare the types of your fixtures.
type UiFixtures = {
  homePage: HomePage;
  loginPage: LoginPage;
  signupPage: SignUpPage;
  productsPage: ProductsPage;
};

// Extend base test by providing "todoPage" and "settingsPage".
// This new "test" can be used in multiple test files, and each of them will get the fixtures.
export const ui = base.extend<UiFixtures>({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },

  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

   signupPage: async ({ page }, use) => {
    await use(new SignUpPage(page));
  },

  productsPage: async ({ page }, use) => {
    await use(new ProductsPage(page));
  },
});
export { expect } from '@playwright/test';