let score = "Aashu";

// console.log(typeof score);
// console.log(typeof(score));

// let valueInNumber = Number(score)
// console.log(typeof valueInNumber);

// console.log(valueInNumber);

// If we convert "33" :- Its converting in a number
// If we convert "33abc" :- Its not convert and its gives NaN
// If we are convert String to number like :- "Aashu" :- Its gives Nan
// If we are convert null to number then its simply gives 0.
// If we are try to convert value in number then its gives us (1 on true and 0 on false)



// 2.  Try to convert numbers, string and other things boolean
let isLoggedIn = -100;

let booleanConversion = Boolean(isLoggedIn);
// console.log(booleanConversion);

// If we are try with 1 or any numbers its gives us true;
// If we are try with 0 its ives us false
// 2. If we are try with blank "" string its gives us false
// if we are try to pass "Aashu" its gives us true



// 3. Try to convert String with some other things
let someNumber = 33

let stringConversion = String(someNumber)
// console.log(stringConversion); // 33

// console.log(typeof stringConversion); // string 

// When we gives the number its convertrd into string
// Yes simply its convert the number into String



// ************************************** Operations ********************************************************
let value = 3;
let negValue = -value;
console.log(negValue); // -3

// some small operations
// console.log(2+2); 4
// console.log(2-2); 0
// console.log(2*2); 4
// console.log(2**3); 8
// console.log(2/3); 1
// console.log(2%3); 1


// 1. One simple of string addition operations
let str1 = "Hello";
let str2 = "Aashu";

let str3 = str1 + str2;
console.log(str3); // Hello Aashu


// 2. Some basic conversion on string

// 1. If we take first variable and second one is a number its take total as a string
console.log("1" + 2); // 12

//2. If we first as a number and second as a String in that case also its takes its a String only
console.log(1 + "2"); // 12

// 3. If first no. as a string then the whole back number its take as a string
console.log("1" + 2 + 2); // 122

// If first variable as a number the other as a string so first its take as a number then as string
console.log(1 + 4 + "3"); // 53


// Increment statemnet
let gameCounter = 100;
gameCounter++;

console.log(gameCounter); // 101



