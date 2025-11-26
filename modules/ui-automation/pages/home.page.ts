import { expect, type Page, type Locator} from '@playwright/test';
import { BasePage } from './base.page';

export class HomePage extends BasePage {
  readonly signUpLink: Locator= this.page.getByText('Signup / Login');;
  readonly loggedInUser: Locator= this.page.locator('h1', { hasText: 'Installation' });;

  constructor(page: Page) {
    super(page);  // pass page to BasePage
  }


async clickSignUpLoginLink(){
  await this.click(this.signUpLink);

}

}