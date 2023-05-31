/* You are given a positive number. Your function should calculate the product of the digits excluding any zeroes.

For example: The number given is 123405. The result will be 1*2*3*4*5=120 (don't forget to exclude zeroes).

Input: A positive number.

Output: The product of the digits as a number. */

import assert from "assert";

function digitsMultip(data: number): number {
    // your code here
    let res = 1;
    for (let char of String(data).split("")) {
        let num = Number(char);
        if (num)res *= num;
    };
    return res;
}

console.log("Example:");
console.log(digitsMultip(123405));

// These "asserts" are used for self-checking
assert.strictEqual(digitsMultip(123405), 120);
assert.strictEqual(digitsMultip(999), 729);
assert.strictEqual(digitsMultip(1000), 1);
assert.strictEqual(digitsMultip(1111), 1);

console.log("Coding complete? Click 'Check Solution' to earn rewards!");
