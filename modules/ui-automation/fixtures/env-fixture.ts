import { test as base } from '@playwright/test';
import { EnvLoader } from '../utilities/env-loader';
import { EnvConfig } from '../envconfig/env-model';

type EnvFixture = {
  env: EnvConfig;
};

export const env = base.extend<EnvFixture>({
  env: async ({}, use) => {
    const env = EnvLoader.loadEnv();
    await use(env);
  }
});

export { expect } from '@playwright/test';