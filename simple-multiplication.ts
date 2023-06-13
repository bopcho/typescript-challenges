/* This is an intro mission, the purpose of which is to explain how to solve missions on CheckiO.
I decided it might be good to have it up here too.
This mission is the easiest one. Write a function that will receive 2 numbers as input and it should return the multiplication of these 2 numbers.
*/

import assert from "assert";

function multTwo(a: number, b: number): number {
    // your code here
    return a*b;
}

console.log("Example:");
console.log(multTwo(3, 2));

// These "asserts" are used for self-checking
assert.equal(multTwo(3, 2), 6);
assert.equal(multTwo(0, 1), 0);

console.log("Coding complete? Click 'Check' to earn cool rewards!");
