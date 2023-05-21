import assert from "assert";

function isAcceptablePassword(password: string): boolean {
    // C1: the length should be bigger than 6;
    // C2: should contain at least one digit, but cannot consist of just digits.
    const cond1 = password.length > 6;
    const cond2 = /\d/.test(password) && !/^\d*$/.test(password);
    return cond1 && cond2;
}



// These "asserts" are used for self-checking

// These "asserts" are used for self-checking
assert.strictEqual(isAcceptablePassword("short"), false);
assert.strictEqual(isAcceptablePassword("muchlonger"), false);
assert.strictEqual(isAcceptablePassword("ashort"), false);
assert.strictEqual(isAcceptablePassword("muchlonger5"), true);
assert.strictEqual(isAcceptablePassword("sh5"), false);
assert.strictEqual(isAcceptablePassword("1234567"), false);
