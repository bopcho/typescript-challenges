/* You are at the beginning of a password series. Every mission is based on the previous one. The missions that follow will become slightly more complex.

In this mission, you need to create a password verification function.

The verification condition is:

the length should be bigger than 6.
Input: A string.

Output: A bool. */



import assert from "assert";

function isAcceptablePassword(password: string): boolean {
 return password.length>6
}

console.log("Example: dasd");
console.log(isAcceptablePassword("short"));

// These "asserts" are used for self-checking
assert.strictEqual(isAcceptablePassword("short"), false);
assert.strictEqual(isAcceptablePassword("ashort"), false);
assert.strictEqual(isAcceptablePassword("muchlonger5"), true);
assert.strictEqual(isAcceptablePassword("sh5"), false);
;

console.log("Coding complete? Click 'Check Solution' to earn rewards!");