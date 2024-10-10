// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt


// 1. Numbers
const score = 100;
const scoreValue = 100.3;

// Boolean
const isLoggedIn = false;

// null 
const outsideTemp = null;

// undefined
let userEmail;


// Symbol 
const id = Symbol('123');
const anotherId = Symbol('123')

// Here we compare and its gives different false as a output
console.log(id === anotherId); // false


const bigNumber = 12345678999999973333333333333333333333333333333333333333333333333333333333333333333333333333n;
console.log(typeof bigNumber);



// Refrence (Non Primitive)

// Arrays, Objects, Functions

// Arrays
const heroes = ["shaktiman", "Krrish", "Ajjoba"];


// Objects
let myObj = {

    name: "Aashu",
    age: 22,
}

// functions declared as a variable
const myFunction = function () {
    console.log("Hello World");
}



// ***********************8 **************************** *********************************** *********

// Two types of dataTypes 
// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "aashutoshPodcast";

let anotherName = myYoutubename;
anotherName = "onlyTech"

console.log(anotherName); // onlyTech
console.log(myYoutubename); // aashutoshPodcast


// Taking one another datatype that is object
let userOne = 
{
    email : "user@google.com",
    upi :  "user@ybl"
}

let userTwo = userOne // now they both are pointintg on the same place heap area or take same refrence from same place

// but now here we want to change the data through user two so they reflect in the both place or in all refrence.
userTwo.email = "aashu.gmail.com"


console.log(userOne.email); // aashu.gmail.com
console.log(userTwo.email); // aashu.gmail.com