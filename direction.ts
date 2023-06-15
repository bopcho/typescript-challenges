/*  You are given an array of numbers. Your task in this mission is to find, how many times the sorting direction was changed in the given array. If the elements are equal - the previous sorting direction remains the same, if the sequence starts from the same elements - look for the next different to determine the sorting direction. */

function changingDirection(elements: number[]): number {

    let dir = 0, count = 0;
    for (let i = 0; i < elements.length - 1; i++){
        let dir2 = elements[i + 1] - elements[i];
        if (dir2){
            if (dir2 * dir < 0) count++;
            dir = dir2;
        }
    }
    return count
}

console.log("Example:");
console.log(changingDirection([1, 2, 3, 4, 5]));

// These "asserts" are used for self-checking
assert.strictEqual(changingDirection([1, 2, 3, 4, 5]), 0);
assert.strictEqual(changingDirection([1, 2, 3, 2, 1]), 1);
assert.strictEqual(changingDirection([1, 2, 2, 1, 2, 2]), 2);

console.log("Coding complete? Click 'Check Solution' to earn rewards!");
