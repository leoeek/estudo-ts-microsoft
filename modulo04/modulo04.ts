function addNumbers (x: number, y: number): number {
    return x + y;
 }
 addNumbers(1, 2);

 /******************* */

 let addNew = function (x: number, y?: number): number {
     if (y === undefined) return x;
    return x + y;
 }
 console.log('aqui 0', addNew(1, 2));
 console.log('aqui 1', addNew(12));

 /*************** */

//  let total = function (input: number[]): number {
 let total = (input: number[]): number => {
    let total: number =  0;
    for(let i = 0; i < input.length; i++) {
        if(isNaN(input[i])) {
            continue;
        }
        total += Number(input[i]);
    }
    return total;
}

console.log(total([1, 2, 3, 4]));

/************* */

let addAllNumbers = (firstNumber: number, ...restOfNumbers: number[]): number => {
    let total: number =  firstNumber;
    for(let counter = 0; counter < restOfNumbers.length; counter++) {
       if(isNaN(restOfNumbers[counter])){
          continue;
       }
       total += Number(restOfNumbers[counter]);
    }
    return total;
 }
console.log(addAllNumbers(1, 2, 3, 4, 5, 6, 7));
console.log(addAllNumbers(2));

/************* */

interface Message {
    text: string;
    sender: string;
 }
 
 function displayMessage({text, sender}: Message) {
     console.log(`Message from ${sender}: ${text}`);
 }
 
 displayMessage({sender: 'Christopher', text: 'hello, world'});