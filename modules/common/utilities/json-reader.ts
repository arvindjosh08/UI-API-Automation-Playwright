// common/utilities/json-reader.ts
import fs from 'fs';

export class JsonReader {
  /**
   * Reads a JSON file from absolute path and parses it to typed object array
   * @param absolutePath Absolute path to JSON file
   * @returns Generic type array
   */
  static readJson<T>(absolutePath: string): T[] {
    const content = fs.readFileSync(absolutePath, 'utf-8');
    return JSON.parse(content) as T[];
  }
}