import { test, expect } from '../fixtures/combined-fixture';

test('Search for product jeans',{ tag: '@regression' }, async ({ page, env, productsPage }) => {
  // Navigate to the application
  await page.goto(env.baseUrl);
  
  // Click on products menu option
  await productsPage.clickProductsMenu();
  
  // Search for jeans product
  await productsPage.searchProduct('jeans');
  
  // Verify search results are displayed
  await productsPage.verifySearchResults();
});
