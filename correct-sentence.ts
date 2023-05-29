import assert from "assert";

function correctSentence(text: string): string {
    return text[0].toUpperCase() + text.slice(1) + (text[text.length-1]=="."?"":".");
}

console.log("Example:");
console.log(correctSentence("greetings, friends"));

// These "asserts" are used for self-checking
assert.strictEqual(
    correctSentence("greetings, friends"),
    "Greetings, friends."
);
assert.strictEqual(
    correctSentence("Greetings, friends"),
    "Greetings, friends."
);
assert.strictEqual(
    correctSentence("Greetings, friends."),
    "Greetings, friends."
);
assert.strictEqual(
    correctSentence("greetings, friends."),
    "Greetings, friends."
);

console.log("Coding complete? Click 'Check Solution' to earn rewards!");
