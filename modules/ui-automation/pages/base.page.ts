import { Page, Locator, expect } from '@playwright/test';
import { logger } from '../../common/utilities/logger';

export class BasePage {
  protected readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // -------------------------------------------------
  // ELEMENT GETTERS
  // -------------------------------------------------
  locator(selector: string | Locator): Locator {
    return typeof selector === 'string' ? this.page.locator(selector) : selector;
  }

  // -------------------------------------------------
  // NAVIGATION
  // -------------------------------------------------
  async goto(url: string) {
    try {
      logger.info(`Navigating to URL: ${url}`);
      await this.page.goto(url, { waitUntil: 'load' });
    } catch (error) {
      logger.error(`Navigation failed for URL: ${url} → ${error}`);
      throw error;
    }
  }

  async waitForPageLoad() {
    try {
      logger.info(`Waiting for page load (network idle)`);
      await this.page.waitForLoadState('networkidle');
    } catch (error) {
      logger.error(`Page load wait failed → ${error}`);
      throw error;
    }
  }

  // -------------------------------------------------
  // CLICK
  // -------------------------------------------------
  async click(selector: string | Locator) {
    const element = this.locator(selector);

    try {
      logger.info(`Clicking element → ${selector}`);
      await element.click();
    } catch (error) {
      logger.error(`Failed to click ${selector} → ${error}`);
      throw error;
    }
  }

  async forceClick(selector: string | Locator) {
    const element = this.locator(selector);
    try {
      logger.warn(`Force clicking → ${selector}`);
      await element.click({ force: true });
    } catch (error) {
      logger.error(`Failed force click: ${selector} → ${error}`);
      throw error;
    }
  }

  // -------------------------------------------------
  // TYPE / FILL
  // -------------------------------------------------
  async fill(selector: string | Locator, value: string) {
    const element = this.locator(selector);
    try {
      logger.info(`Filling ${selector} with value: ${value}`);
      await element.fill(value);
    } catch (error) {
      logger.error(`Failed to fill ${selector} → ${error}`);
      throw error;
    }
  }

  async type(selector: string | Locator, value: string) {
    const element = this.locator(selector);
    try {
      logger.info(`Typing into ${selector}: ${value}`);
      await element.type(value);
    } catch (error) {
      logger.error(`Failed to type into ${selector} → ${error}`);
      throw error;
    }
  }

  // -------------------------------------------------
  // TEXT & VALUE
  // -------------------------------------------------
  async getText(selector: string | Locator): Promise<string> {
    const element = this.locator(selector);
    try {
      const text = await element.textContent();
      logger.info(`Read text from ${selector}: ${text}`);
      return text ?? '';
    } catch (error) {
      logger.error(`Failed reading text from ${selector} → ${error}`);
      throw error;
    }
  }

  async getInputValue(selector: string | Locator): Promise<string> {
    const element = this.locator(selector);
    try {
      const val = await element.inputValue();
      logger.info(`Input value from ${selector}: ${val}`);
      return val;
    } catch (error) {
      logger.error(`Failed to get input value ${selector} → ${error}`);
      throw error;
    }
  }

  // -------------------------------------------------
  // ASSERTIONS
  // -------------------------------------------------
  async expectVisible(selector: string | Locator) {
    try {
      logger.info(`Expecting visibility → ${selector}`);
      await expect(this.locator(selector)).toBeVisible();
    } catch (error) {
      logger.error(`Element not visible: ${selector} → ${error}`);
      throw error;
    }
  }

  async expectHidden(selector: string | Locator) {
    try {
      logger.info(`Expect hidden → ${selector}`);
      await expect(this.locator(selector)).toBeHidden();
    } catch (error) {
      logger.error(`Element still visible: ${selector} → ${error}`);
      throw error;
    }
  }

  async expectText(selector: string | Locator, expected: string) {
    try {
      logger.info(`Expecting text '${expected}' in ${selector}`);
      await expect(this.locator(selector)).toHaveText(expected);
    } catch (error) {
      logger.error(`Text mismatch for ${selector} → ${error}`);
      throw error;
    }
  }

  // -------------------------------------------------
  // DROPDOWN / SELECT
  // -------------------------------------------------
  async selectByValue(selector: string | Locator, value: string) {
    try {
      logger.info(`Selecting value '${value}' from ${selector}`);
      await this.locator(selector).selectOption(value);
    } catch (error) {
      logger.error(`Failed dropdown select ${selector} → ${error}`);
      throw error;
    }
  }

  // -------------------------------------------------
  // WAIT HELPERS
  // -------------------------------------------------
  async waitForVisible(selector: string | Locator) {
    try {
      logger.info(`Waiting for visibility → ${selector}`);
      await this.locator(selector).waitFor({ state: 'visible' });
    } catch (error) {
      logger.error(`Visibility wait failed: ${selector} → ${error}`);
      throw error;
    }
  }

  async waitForHidden(selector: string | Locator) {
    try {
      logger.info(`Waiting for hidden → ${selector}`);
      await this.locator(selector).waitFor({ state: 'hidden' });
    } catch (error) {
      logger.error(`Hidden wait failed: ${selector} → ${error}`);
      throw error;
    }
  }

  async waitForLoader(selector: string) {
    try {
      logger.info(`Waiting for loader to disappear → ${selector}`);
      await this.page.locator(selector).waitFor({ state: 'hidden', timeout: 10000 });
    } catch (error) {
      logger.error(`Loader did not disappear: ${selector} → ${error}`);
      throw error;
    }
  }

  async waitForText(text: string) {
    try {
      logger.info(`Waiting for text: ${text}`);
      await this.page.getByText(text).waitFor();
    } catch (error) {
      logger.error(`Text not found: ${text} → ${error}`);
      throw error;
    }
  }

  // -------------------------------------------------
  // NETWORK WAITS
  // -------------------------------------------------
  async waitForApi(urlPart: string, status = 200) {
    try {
      logger.info(`Waiting for API response containing '${urlPart}'`);
      await this.page.waitForResponse(
        (resp) => resp.url().includes(urlPart) && resp.status() === status,
        { timeout: 10000 }
      );
    } catch (error) {
      logger.error(`API wait failed for '${urlPart}' → ${error}`);
      throw error;
    }
  }

  // -------------------------------------------------
  // SCREENSHOTS
  // -------------------------------------------------
  async screenshot(name: string) {
    try {
      const path = `logs/screenshots/${name}-${Date.now()}.png`;
      await this.page.screenshot({ path });
      logger.info(`Screenshot saved: ${path}`);
    } catch (error) {
      logger.error(`Screenshot failed → ${error}`);
    }
  }
}