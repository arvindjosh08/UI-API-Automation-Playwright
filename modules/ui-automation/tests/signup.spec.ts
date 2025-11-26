import { TestDataProvider } from '../utilities/data-provider';
import { SignUpModel } from '../models/sign-up-model';
import { test, expect } from '../fixtures/combined-fixture'

// Get data from centralized provider
const signUpData: SignUpModel[] = TestDataProvider.getSignUpData();


test.describe('Verify sign-up functionality', () => {
  signUpData.forEach((data) => {
    test(`Sign up for ${data.firstName}`, async ({signupPage , page, homePage,env}) => {
      await page.goto(env.baseUrl);
      await homePage.clickSignUpLoginLink();
      await signupPage.enterSignUpName();
      await signupPage.enterSignUpEmail();
      await signupPage.clickSignUpButton();
      await signupPage.enterFirstName(data.firstName);
      await signupPage.enterLastName(data.lastName);
      await signupPage.enterAddress(data.address1);
      await signupPage.enterCity(data.city);
      await signupPage.enterState(data.state);
      await signupPage.enterZipCode(data.zipCode);
      await signupPage.enterMobile(data.mobileNum);
    });
  });
});





