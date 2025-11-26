// utils/path-resolver.ts
import path from 'path';
import { fileURLToPath } from 'url';

export class PathResolver {
  /**
   * Resolves a relative file path based on the caller's file location
   * @param callerMetaUrl import.meta.url from the calling file
   * @param relativePath Relative path from the calling file
   * @returns Absolute file path
   */
  static resolve(callerMetaUrl: string, relativePath: string): string {
    const __dirname = path.dirname(fileURLToPath(callerMetaUrl));
    return path.resolve(__dirname, relativePath);
  }
}