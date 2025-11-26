// utils/env-loader.ts
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import type { EnvConfig } from '../envconfig/env-model';
import { PathResolver } from '../../common/utilities/path-resolver';

export class EnvLoader {

  /**
   * Loads environment JSON file based on ENV variable
   * @returns EnvConfig object
   */
  static loadEnv(): EnvConfig {
    const ENV = process.env.ENV || 'sit';

    const envFilePath=PathResolver.resolve(import.meta.url,`../envconfig/env.${ENV}.json`)

    // Check if file exists
    if (!fs.existsSync(envFilePath)) {
      throw new Error(
        `Environment file not found: ${envFilePath}\n` +
        `Make sure environment/env.${ENV}.json exists.`
      );
    }

    // Load and parse JSON
    const fileContent = fs.readFileSync(envFilePath, 'utf-8');
    return JSON.parse(fileContent) as EnvConfig;
  }
}