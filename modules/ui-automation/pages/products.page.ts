import { expect, type Page, type Locator } from '@playwright/test';
import { BasePage } from './base.page';

export class ProductsPage extends BasePage {
  // Products menu option
  readonly productsMenu: Locator = this.page.getByRole('link', { name: /products/i });
  
  // Search elements
  readonly searchInput: Locator = this.page.locator('input[id="search_product"]');
  readonly searchButton: Locator = this.page.locator('button[id="submit_search"]');
  
  // Product results
  readonly productResults: Locator = this.page.locator('.productinfo');

  constructor(page: Page) {
    super(page);
  }

  // Click on Products menu
  async clickProductsMenu() {
    await this.click(this.productsMenu);
  }

  // Search for a product
  async searchProduct(productName: string) {
    await this.fill(this.searchInput, productName);
    await this.click(this.searchButton);
  }

  // Verify search results are displayed
  async verifySearchResults() {
    await this.expectVisible(this.page.locator('.productinfo').first());
  }
}
