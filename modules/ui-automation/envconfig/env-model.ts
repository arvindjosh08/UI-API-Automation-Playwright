// config/env-model.ts
export interface EnvConfig {
  environment: string;
  baseUrl: string;
  email: string;
  password: string;
  defaultTimeout: number;
  navigationTimeout: number;

  [key: string]: any; // allow extra dynamic fields
}