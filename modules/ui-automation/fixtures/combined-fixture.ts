// fixtures/combined-fixtures.ts
import { mergeTests } from '@playwright/test';
import { ui } from './ui-fixtures';
import { env } from './env-fixture';

export const test = mergeTests(ui, env);
export { expect } from '@playwright/test';