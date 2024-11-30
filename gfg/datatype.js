// Javascript has 8 data types. 

// 1. String 
// 2. Number
// 3. Bigint
// 4. Boolean
// 5. Undefined
// 6. Null
// 7. Symbol
// 8. Object

// Object :- The object data type can contain both built-in-objects, and user defined objects:
// Built in objects can be : objects, arrays, dates, maps, sets, intarrays, floatarrays, etc.

// Ex 1 : mix of all datatypes 

// Numbers : 
let length = 16;
let weight = 7.5;

// Strings : 
let color = "Yellow";
let lastName = "Shri";  

// Booleans
let x = true;
let y = false;

// Object: 
const person = {firstName : "Aashu", lastName : "Shri"};

// Array Object : 
const cars = ["Saab", "Volvo", "BMW"];

// Date Object
const date = new Date("2024-10-04")


// One case :- Js types are dynamic 
// exp : its means the same variable can be used to hold different data types : 
let a; // now a is undefined
a = 5; // mow a is a number
a = "aashu"; // now a is a string



// now lets talk the datatypes one by one

// 1. String 
// exp : A string is a series of characters like "Aashu Shri".
// Strings are written with qoutes. we can use single or double qoutes:

// Ex :- using double qoutes : 
let carName1 = "Volvo";
// console.log(carName1); // Volvo

// using single qoutes
let carName2 = 'BMW';
// console.log(carName2); // BMW



// 2. Numbers : all javascript numbers are stored as decimal numbers. 
// numbers can be written with or without semicolon.

let x1 = 34;
// console.log(x1); // 34 

let x2 = 34.00;
// console.log(x2); // 34 



// 3. Exponential notation : extra larga or extra small numbers can be written with scientific (exponential) notation
let z = 123e5; 
let c = -123e5 
// console.log(z); // 12300000 
// console.log(c); // 0.00123





// 4. javascript bigint : all js numbers are stored in a 64-bit floating-point format. 
let g = BigInt("1234567890098765432112345678900987654321")
// console.log(g); 1234567890098765432112345678900987654321n



// 5. JS Booleans : Booleans can only have two values : true or false
// ex :- 
let h = 5;
let j = 5;
let k = 7;
// console.log((h == j)); // true
// console.log((j == k)); // false



// 6. JS Arrays : JavaScript arrays are written with square brackets.
// Array items are separated by commas.

const car = ["BMW", "Thar", "Maruti"];
// console.log(car); // OP : [ 'BMW', 'Thar', 'Maruti' ] 



// 7. JS Objects 

// JavaScript objects are written with curly braces {}.
// Object properties are written as name:value pairs, separated by commas.
const peoples = { firstName : "Aashu", lastName : "Shri", age : 50, eyeColor : "Black"};
console.log(peoples); // OP : { firstName: 'Aashu', lastName: 'Shri', age: 50, eyeColor: 'Black' }



// 8. Undefined 
// In JavaScript, a variable without a value, has the value undefined. The type is also undefined. 

let carss;    // Value is undefined, type is undefined



const map = new Map([
    ["name", "Akash"],
    ["age", 25],
    ["city", "Noida"]
]);

for (let [key, value] of map) {
    console.log(`${key}: ${value}`);
}




