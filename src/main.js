// reexports

export { DtsClass, dtsSum, dtsRandom } from './useDts.js';

/**
 * double - function doubles a number
 * @param {number} a
 * @returns {number}
*/
export const double = (a) => a * 2;

/**
 * triple - function triples a number
 * @type {(a: number) => number}
*/
export const triple = (a) => a * 3;
