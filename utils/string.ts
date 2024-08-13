import md5 from 'md5';
import { v4 as uuid } from 'uuid';

/**
 * Generates a random string of specified length.
 * 
 * @param {number} length - The length of the string to generate.
 * @returns {string} A random string containing alphanumeric characters.
 */
export const generateRandomString = (length: number): string => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let result = ''
  const charactersLength = characters.length
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }
  return result
};

/**
 * Generates a random integer between the specified minimum and maximum values (inclusive).
 * 
 * @param {number} min - The minimum value of the range.
 * @param {number} max - The maximum value of the range.
 * @returns {number} A random integer within the specified range.
 */
export const generateRandomInt = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

/**
 * Generates an MD5 hash of the input string.
 * 
 * @param {string} input - The string to hash.
 * @returns {string} The MD5 hash of the input string, represented as a hexadecimal string.
 */
export const generateMd5 = (input: string) => {
  return md5(input);
}

/**
 * Generates a UUID (Universally Unique Identifier) v4.
 * 
 * @returns {string} A randomly generated UUID v4.
 */
export const generateUUID = (): string => {
  return uuid();
};