"use strict";
function addNumbers(x, y) {
    return x + y;
}
addNumbers(1, 2);
/******************* */
let addNew = function (x, y) {
    return x + y;
};
addNew(1, 2);
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
