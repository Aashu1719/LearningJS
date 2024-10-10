// obejcts ko declare karna ka 2 tarkia hota hai ek hai literal ki tarah, or ek hai constructor ki tarah.
// singleton :-  jab koi bhi constructor issa ap bnatae hai to wo singleton ka banta hai
// object.create

// object literals

    // lets declare a symbol 
    const mySym = Symbol("key1")

const jsUser = {
    // isma data jo hai vo (key, value) ka pair mai chalta hai

    // yahan hum symbol ko use karta hai
    [mySym] : "myKey1",
    name : "Aashutosh", 
    "full Name" : "Aashutosh Shrivastava",
    age : "26",
    location  : "Delhi", 
    email : "aashu@gmail.com", 
    isLoggedIn: false, 
    lastLoginDays: ["MOnday", "Saturday"]
}

// objects ko print karna ka 2 tarika hota hai
// 1. :- with dot
// console.log(jsUser.name); // Aashutosh

// 2. :- with bracket
// console.log(jsUser["name"]); // Aashutosh

// ab humna jo fullName declare kiya hia usa hum pehla wala tarika sa access nahi kar sakta uska liya huma doosra hi tarika use karna padega. 
// console.log(jsUser.full Name); here we get CE

// console.log(jsUser["full Name"]);


// aab hum symbol ki baat karenga and lets declare symbol and print the symbol: 
// console.log(jsUser.mySym); // Op : myKey1 :- yahan huma vale to mil gayi but ye synbol ki tarah use nahi hoga agr hum iska typeOf dekha to ye huma dikhayega as a string abhi
// console.log( typeof jsUser.mySym); // string


// 2 scenario :- ab huma isa agr symbol ki tarah use karna hai to, huma usa square bracket ka ander declare karna padega aur wo call bhi as a square bracket hi hoga

// console.log(jsUser[mySym]); // meKey1
// console.log(typeof jsUser[mySym]); // 



// ###################### ############################ ##########################
// agr huma object ki value change ye print karni hai to aisa kar sakta hai : 

// 1. object value change :- 
jsUser.email = "aashu@google.com"
// console.log(jsUser.email); // Op :- aashu@google.com

// 2. Object value freeze
// Object.freeze(jsUser) // now jsUser has freezed now hum koi bhi value ko change nhi kar sakta is object ka

jsUser.email = "aashu@co.com";
jsUser.name = "abhishek";
// console.log(jsUser);
/*  OP :- 
{
  name: 'Aashutosh',
  'full Name': 'Aashutosh Shrivastava',
  age: '26',
  location: 'Delhi',
  email: 'aashu@google.com',
  isLoggedIn: false,
  lastLoginDays: [ 'MOnday', 'Saturday' ],
  [Symbol(key1)]: 'myKey1'
}
  
hum yahan pe dekh sakta hia ki value jo hai wo email ya name ki change nhi hui*/



// ##################### ############################ ############################### #######
// 2. Functions() :- 
jsUser.greeting = function()
{
    console.log("Hello JS User");
}

console.log(jsUser.greeting); // Op :- [Function (anonymous)]

console.log(jsUser.greeting()); // OP :- Hello JS User


// create another function name is greeting2 
jsUser.greetingTwo = function()
{
    console.log(`Hello Js User ${this.name} `);
    
}

console.log(jsUser.greetingTwo()); // OP :- Hello Js User abhishek


