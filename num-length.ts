/*You have a non-negative integer. Try to find out how many digits it has.*/

import assert from "assert";

function numberLength(value: number): number {
    // your code here
    return value.toString().length;
}

console.log("Example:");
console.log(numberLength(10));

// These "asserts" are used for self-checking
assert.strictEqual(numberLength(10), 2);
assert.strictEqual(numberLength(0), 1);
assert.strictEqual(numberLength(4), 1);
assert.strictEqual(numberLength(44), 2);

console.log("Coding complete? Click 'Check Solution' to earn rewards!");
