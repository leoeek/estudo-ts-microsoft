type ValidTypes = string | number;
function identity<T extends ValidTypes, U> (value: T, message: U) {   // Return type is inferred
    let result: ValidTypes = '';
    let typeValue: string = typeof value;

    if (typeof value === 'number') {           // Is it a number?
        result = value + value;                // OK
    } else if (typeof value === 'string') {    // Is it a string?
        result = value + value;                // OK
    }

    console.log(`The message is ${message} and the function returns a ${typeValue} value of ${result}`);

    return result
}

let numberValue = identity<number, string>(100, 'Hello');
let stringValue = identity<string, string>('100', 'Hello');

console.log(numberValue);       // Returns 200
console.log(stringValue);       // Returns 100100

/************* */

interface Identify<T, U> {
    value: T;
    message: U;
}

let returnNumber: Identify<number, string> = {
    value: 25,
    message: 'Hello'
}

let returnString: Identify<string, number> = {
    value: 'Hello!',
    message: 25
}

/************************ */

interface ProcessIdentifiy<T, U> {
    (value: T, message: U): T;
}

function processIdentify<T, U> (value: T, message: U): T {
    console.log(message)
    return value
}

let processor: ProcessIdentifiy<number, string> = processIdentify;
let returnNumber1 = processor(100, 'Hello!')
// let returnNumber2 = processor('Hello!', 100)

/************** */


interface ProcessIdentifiy<T, U> {
    value: T;
    message: U;
    process(): T;
}

class processIdentity<X, Y> implements ProcessIdentifiy<X, Y> {
    value: X;
    message: Y;

    constructor(val: X, msg: Y) {
        this.value = val;
        this.message = msg;
    }

    process() : X {
        console.log(this.message);
        return this.value;
    }
}

let p1 = new processIdentity<number, string>(100, 'Hello');
p1.process();
// p1.value = '42'

/************** */

class Car {
    make: string = 'Generic Car';
    doors: number = 4;
}
class ElectricCar extends Car {
    make = 'Electric Car';
    doors = 4
}
class Truck extends Car {
    make = 'Truck';
    doors = 2
}
function accelerate<T extends Car> (car: T): T {
    console.log(`All ${car.doors} doors are closed.`);
    console.log(`The ${car.make} is now accelerating!`)
    return car
}

let myElectricCar = new ElectricCar;
accelerate<ElectricCar>(myElectricCar);
let myTruck = new Truck;
accelerate<Truck>(myTruck);