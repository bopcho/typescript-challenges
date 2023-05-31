/* You are given a string and two markers (the initial one and final). You have to find a substring enclosed between these two markers. But there are a few important conditions.

The initial and final markers are always different.
The initial and final markers are always 1 char size.
The initial and final markers always exist in a string and go one after another.
Input: Three arguments. All of them are strings. The second and third arguments are the initial and final markers.

Output: A string. */

import assert from "assert";

function betweenMarkers(line: string, left: string, right: string): string {

    let start = line.indexOf(left);
    let end =  line.indexOf(right);

    return line.slice(start + 1, end);
}

console.log("Example:");
console.log(betweenMarkers("What is >apple<", ">", "<"));

// These "asserts" are used for self-checking
assert.strictEqual(betweenMarkers("What is >apple<", ">", "<"), "apple");
assert.strictEqual(betweenMarkers("What is [apple]", "[", "]"), "apple");
assert.strictEqual(betweenMarkers("What is ><", ">", "<"), "");
assert.strictEqual(betweenMarkers("[an apple]", "[", "]"), "an apple");

console.log("Coding complete? Click 'Check Solution' to earn rewards!");
