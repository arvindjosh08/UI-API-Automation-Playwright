import { expect, type Page, type Locator} from '@playwright/test';
import { BasePage } from './base.page';

export class SignUpPage extends BasePage{
  readonly signUpName: Locator = this.page.getByPlaceholder('Name');
  readonly signUpEmail: Locator = this.page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address');
  readonly signUpButton: Locator = this.page.getByRole('button', { name: 'Signup' });
  readonly password: Locator = this.page.locator('[id="password"]');
  readonly firstName: Locator = this.page.locator('[id="first_name"]');
  readonly lastName: Locator = this.page.locator('[id="last_name"]');
  readonly address: Locator = this.page.locator('[id="address1"]');
  readonly state: Locator = this.page.locator('[id="state"]');
  readonly city: Locator = this.page.locator('[id="city"]');
  readonly zipCode: Locator = this.page.locator('[id="zipcode"]');
  readonly mobile: Locator = this.page.locator('[id="mobile_number"]');
  readonly createAccountButton: Locator = this.page.getByRole('button', { name: 'Create Account' });
  readonly accountCreatedText: Locator = this.page.getByText('Account Created!');


constructor(page: Page) {
    super(page);  // pass page to BasePage
  }

async enterSignUpName(){
  await this.fill(this.signUpName,`User${Math.floor(Math.random() * 100000)}`);
}

async enterSignUpEmail(){
  const randomString = Math.random().toString(36).substring(2, 10);
  await this.fill(this.signUpEmail,`user_${randomString}@example.com`);
}

async clickSignUpButton(){
  await this.click(this.signUpButton); 
}

async enterPassword(password : string){
  await this.fill(this.password,password); 
}

async enterFirstName(firstName:string){
  await this.fill(this.firstName,firstName);

}
async enterLastName(lastName:string){
    await this.fill(this.lastName,lastName);

}
async enterAddress(address:string){
    await this.fill(this.address,address);

}
async enterState(state:string){
    await this.fill(this.state,state);

}
async enterCity(city:string){
    await this.fill(this.city,city);

}
async enterZipCode(zipCode:string ){
    await this.fill(this.zipCode,zipCode);

}
async enterMobile(mobile:string){
    await this.fill(this.mobile,mobile);

}

async clickCreateAccountButton(){
  await this.click(this.createAccountButton); 
}

}