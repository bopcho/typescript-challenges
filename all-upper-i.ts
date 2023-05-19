/* Check if a given string has all symbols in upper case. If the string is empty or doesn't have any letter in it - function should return True.

Input: A string.

Output: A boolean.

Examples:

assert.strictEqual(isAllUpper("ALL UPPER"), true);
assert.strictEqual(isAllUpper("all lower"), false);
assert.strictEqual(isAllUpper("mixed UPPER and lower"), false);
assert.strictEqual(isAllUpper(""), true);
1
2
3
4
Precondition: a-z, A-Z, 1-9 and spaces */

import assert from "assert";

function isAllUpper(text: string): boolean {
  return text == text.toUpperCase();
}

console.log("Example:");
console.log(isAllUpper("ALL UPPER"));

// These "asserts" are used for self-checking
assert.strictEqual(isAllUpper("ALL UPPER"), true);
assert.strictEqual(isAllUpper("all lower"), false);
assert.strictEqual(isAllUpper("mixed UPPER and lower"), false);
assert.strictEqual(isAllUpper(""), true);
assert.strictEqual(isAllUpper("444"), true);
assert.strictEqual(isAllUpper("55 55 5 "), true);
