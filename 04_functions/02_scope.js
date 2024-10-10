// Global scope 
let a = 300;


// declare 3 variables block scope 

if (true) {
    let a = 10; 
    const b = 20;
    var c = 30;

    // console.log("Inner : ", a); // Inner : 10
    
}

// console.log(a); // gives error
// console.log(b); // gives error
// console.log(c); // print 30 :- jabki ye to if ka ander that matlab iska scope if mai hi lhtm hota hai isa yahan aana hi nhi chaiye tha. 

// Notes :- humara pass do scope hot hai 1. block scope jo bhi cheej hum block ka ander likhta hain usa kehta hai lock scope. 
// 2. jo bhi cheej hum block ka bahar likhta hai usa kehta hai gloabal scope global scope available hot hai block scope mai but block scope avaiballe hi hota hai global scope mai. 

// console.log(a); // 300



// #################### ###################################### ###########################
// Nested Scope

function one()
{
    const username = "Aashutosh"

    // function inside a function
    function two() {
        const website = "youtube"
        // console.log(username); // Aashutosh
        
    }

    // console.log(website); // This gives an error because thats outside the function

    two();    
    
    
}

one();


// Another example of if-else 
if (true) {

    const username = "hitesh"

    // if inside if
    if (username === "hitesh") {
        
        const website = " youtube"
        // console.log(username + website); // hitesh youtube
        
    }
    // outside the loop second if loop
    // console.log(website); // Here we got first error thats because username we try to access outside the loop. 
    
}

// outside the first if loop
// console.log(username); // CE :- Here we got second error thats because username we try to access outside the loop. 


// ############################## ########################### ##########################
// Declare a function in a two way and see how they react

console.log(addOne(3)); // 4
// 1. Simple declare a function in a tradition way
function addOne(num) {
    return num + 1;
}

// Call the addOne function
// console.log(addOne(3)); // 4

// but the catch point is agr hum is console line ko functioin ka uper bhi likh de to bhi ye isa call kar lega like at line no : 75 

// console.log(addTwo(5)); // RE

// ############## ################## ###########
// Create a function jisma isko hum isa ek varibale ma save karenga
const addTwo = function (num) {
    return num + 2
}

// call the function through their varibale
console.log(addTwo(5)); // 7

// But is case ma agr hum is function ko line no 88 ka uper likh de ye declare karna sa pehla call kare to ye huma ek error dega 
