// In js variables are used to store and manage the data, They are created using the var, let and const keyword. 

// 1. Var 
// the var keyword is used to declare a variable, its has a function scoped or globally scoped behaviour. 

// Ex :- In this example, we will declare variables using var.
var a = "Hello Geeks";
var b = 10;
var c = 12;
var d = b+c;

// console.log(a); // Op :- Hello Geeks
// console.log(b); // Op :- 10
// console.log(c); // Op :- 12
// console.log(d); // Op :- 22


// some example on var variables 

// Ex :- In this example, we will declare a global variable and access it anywhere inside the program
var test = "dadasdsa"
function foo()
{
    // console.log(test);   // Op : dadasdsa  
}
foo();


// Ex :- 2 : In this example w will see the hoisting of variables declared using var
// console.log(test1) // OP : undefined
var test1 = 12;
// EXP : huma yahan undefined mila kyunki humna the variable test1 is hoisted at the top even before the execution of the program began and the variable is intiallized with a default value. 


// Ex :- 3 : In this example, we will redeclare a variable in the same global scope ***
var test2 = 10;
var test2 = 100;
// console.log(test2); // 100
// exp : huma yahan koi error nahi mila kyunki humna var use kiya tha so in that case at last wala execute hota hai , yahi iska drawback hai isiliya hum isa use nahi karta, 
// agr yahi cheej hum let and const ka sath karta to huma error milta. 


// Ex :- 4 In this example we will redecalre the variable in another scope and see how how it is the original the orighinal variable. 
var test3 = 12;
function too() {
    var test3 = 120;
    // console.log(test3);  // OP : 120
}
too();
// console.log(test3);  // Op : 12


// ########################### ########################## #########################
// Let keyword :- ye varibale jo hai blocked ka andr scope ma kam kart hai hai jahan humna isa declare kiya hai. 
// hum ek bar let declare kar de to hum same scope mai usa redeclare nhi kar sakta. and isa use karna sa pehla isa declare karna hota hai menas ye hoisting ko support nahi karta


// Some cases :- 1. Block Scope
// EXP :- The variables which are declared inside the {} block are known as block-scoped variables. jo variables var ka sath declared hota hai wo blocked scopped ko nahi manta hai. 

// Ex :- In this example, the num variable is block-scoped and it cannot be accessed outside the block. If we try to access outside the scope its gives an RE


{
    let num = 10;
    // console.log(num); // OP : 10
    
}

// console.log(num); // OP : RE


// Case 2 :- Global Scope 
// EXP :- a global scope varibale is a variable that is declared in the main body of the, outside all the functions. 
// Ex :- 2 : The num variable is globally scoped variable and it can be accessed from anywhere in the program. 
let num = 10; 
// console.log(num); // 10
function fun() {
    // console.log(num); // 10
}

fun(); 


// Case 3 :- Function Scope : A function scope variable is a varibale declared insode a function and cannot be accessed outside the function.
// Ex :- 3 : In this example, the bum variable is declared insode a function and it cannot be accessed outside the function. 

function fun1() {
    let bum = 10;
    // console.log(bum); // Op : 10
    
}
fun1();
// console.log(bum); // Op : RE


// Case 4 :- Redeclaring variables in diferent blocks
// Ex :- In this example, the variable x is redeclared inside the other blocks. 
let x = 77;
{
    let x = 23;
    // console.log(x); // OP : 23
    
}
// console.log(x); // OP : 77


// Case 5 :- redecalring the variables in the same blocks : We cannot redecelare a let variable inside the same block its gives an error

let y = 77;
{
    let y = 13;
    // console.log(y);  
}

// let y = 5; Here we get CE because its illegal


// Case 6 :- Its does not support hoisting

// console.log(s);  // Op :- RE
let s = 4;


// ############################### ############################### ###############################
// Const Variables 

// Exp :- The const keyword in js is used to define variables that cannot be changed once they are assigned a value. to hum iska baad isma koi modification nhi kar sakta. 
// const variables ko hum redeclare nhi kar sakta within the same block, and it provides block scope. 


// Some properties of const keyword 
/*
Cannot be reassigned.
It has Block Scope
It can be assigned to the variable on the declaration line.
It’s a Primitive value.
The property of a const object can be changed but it cannot be changed to a reference to the new object
The values inside the const array can be changed, it can add new items to const arrays but it cannot reference a new array.
Re-declaring of a const variable inside different block scopes is allowed.
Cannot be Hoisted.
Creates only read-only references to value.
*/


// Some cases and their examples on const keyword 

// Case 1 :- Cannot be reassigned
// Ex :- 1 : It describes that the const variable cannot be reassigned. 
const r = 12;
//  r = 13; // OP :- Here we got an error. that reassignment of const is not possible
//  console.log(r);
 

//  Case 2 :- Block scope
// Ex :- 2 : It describe the const variable which contains the block scope
const t = 22;
{
    const y = 90;
    // console.log(y); // OP : 90

    {
        const u = 77;
        // console.log(u); // Op : 77
        
    }

    {
        const i = 99;
        // console.log(i);  // Op : 99  
    }
    
}
// console.log(t); // Op : 22 


// Case 3 :- Variables must be assigned
// Ex :- 3 : Its shows const variable declaration and assignment we can do in single line
// const o; here we got an error


// Case 4 :- Cannot be hoisted
// console.log(d); // Op : RE 
// const d = 4;


// Case 5 :- Const in Arrays
// Ex : 4: It describes that the array values can be modified only but refrence to the array cannot be changed. 

const arr1 = ["pankaj", "sumit", "chandan", "ajay"];
console.log(arr1.toString()); // OP : pankaj,sumit,chandan,ajay

arr1[2] = "ravi";
console.log(arr1.toString()); // Op : pankaj,sumit,ravi,ajay


// Const in Objects
// Ex :- 5: It shows that the object properties can be modified only but refrence to the object cannot be changed. 
const person = 
{
    first_name : "Pankaj",
    last_name : "Shri", 
    age : 20,
    About : "A java developer"
};

console.log(person); 
/*
{
  first_name: 'Pankaj',
  last_name: 'Shri',
  age: 20,
  About: 'A java developer'
}
*/

// Its possible in const case 
person.first_name = "Aashu";
person.last_name = "Shri";
person.age = 22;
person.About = "but bow i am doing figma";
console.log(person);
/* 
{
  first_name: 'Aashu',
  last_name: 'Shri',
  age: 22,
  About: 'but bow i am doing figma'
}   
*/


