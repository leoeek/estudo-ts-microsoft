"use strict";
function addNumbers(x, y) {
    return x + y;
}
addNumbers(1, 2);
/******************* */
let addNew = function (x, y) {
    if (y === undefined)
        return x;
    return x + y;
};
console.log('aqui 0', addNew(1, 2));
console.log('aqui 1', addNew(12));
/*************** */
//  let total = function (input: number[]): number {
let total = (input) => {
    let total = 0;
    for (let i = 0; i < input.length; i++) {
        if (isNaN(input[i])) {
            continue;
        }
        total += Number(input[i]);
    }
    return total;
};
console.log(total([1, 2, 3, 4]));
/************* */
let addAllNumbers = (firstNumber, ...restOfNumbers) => {
    let total = firstNumber;
    for (let counter = 0; counter < restOfNumbers.length; counter++) {
        if (isNaN(restOfNumbers[counter])) {
            continue;
        }
        total += Number(restOfNumbers[counter]);
    }
    return total;
};
console.log(addAllNumbers(1, 2, 3, 4, 5, 6, 7));
console.log(addAllNumbers(2));
function displayMessage({ text, sender }) {
    console.log(`Message from ${sender}: ${text}`);
}
displayMessage({ sender: 'Christopher', text: 'hello, world' });
let addNumbers = (x, y) => x + y;
let subtractNumbers = (x, y) => x - y;
console.log(addNumbers(1, 2));
console.log(subtractNumbers(1, 2));
let doCalculation = (operation) => {
    if (operation === 'add') {
        return addNumbers;
    }
    else {
        return subtractNumbers;
    }
};
console.log(doCalculation('add')(1, 2));
console.log(doCalculation('subtract')(1, 2));
