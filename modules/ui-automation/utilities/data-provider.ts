// utils/test-data-provider.ts
import { JsonReader } from '../../common/utilities/json-reader';
import { SignUpModel } from '../models/sign-up-model';
import { PathResolver } from '../../common/utilities/path-resolver';

export class TestDataProvider {
  
  private static readonly ENV = process.env.ENV || 'sit';

  private static resolveEnvDataPath(fileName: string): string {
    const relativePath = `../testdata/${this.ENV}/${fileName}`;
    return PathResolver.resolve(import.meta.url, relativePath);
  }
  
  /**
   * Provides sign-up test data
   */
  static getSignUpData(): SignUpModel[] {
    const dataFilePath = this.resolveEnvDataPath("signupdata.json");
    return JsonReader.readJson<SignUpModel>(dataFilePath);
  }

}