/*
You should return a given string in reverse order.
*/

import assert from "assert";

function backwardString(value: string): string {
    // your code here
    const chars = value.split('');
  // Reverse the array of characters
  chars.reverse();
  // Join the array of characters back into a string
  return chars.join('');
}

console.log("Example:");
console.log(backwardString("val"));

// These "asserts" are used for self-checking
assert.strictEqual(backwardString("val"), "lav");
assert.strictEqual(backwardString(""), "");
assert.strictEqual(backwardString("ohho"), "ohho");
assert.strictEqual(backwardString("123456789"), "987654321");

console.log("Coding complete? Click 'Check Solution' to earn rewards!");
