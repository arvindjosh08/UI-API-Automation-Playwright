import { expect, type Page, type Locator} from '@playwright/test';
import { BasePage } from './base.page';

export class LoginPage extends BasePage{
  readonly emailAddress: Locator = this.page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address');
  readonly password: Locator = this.page.getByRole('textbox', { name: 'Password' });;
  readonly loginButton: Locator = this.page.getByRole('button',{name:'Login'});;

 constructor(page: Page) {
    super(page);  // pass page to BasePage
  }

async enterEmailAddress(email:string){
    await this.fill(this.emailAddress,email);
}

async enterPassword(password:string){
    await this.fill(this.password,password);
}

async clickLogin(){
    await this.click(this.loginButton);
}

}