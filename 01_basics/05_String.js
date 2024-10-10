// String concenation

const firstName = "Aashu";
const lastName = "Shri"

// console.log(firstName + lastName + " This is our fullName");

// The method we created is totally outdated. and now we use backtricks, the benefits of using this is yahan aata hai string interploation (name should be check), and through this we can make place holders, and whatever  the variables we can inject in them. and call's method also.

// console.log(`Hello my first name is ${firstName} and my last name is ${lastName} `);
// OP :- Hello my first name is Aashu and my last name is Shri 



// !!!!!!!!!!

// Declared string in a new way name we dont know i can research on that
const gameName = new String("AashuHello");
console.log(gameName); // OP :- [String: 'AashuHello']
console.log(gameName.length); // Op :- 10
console.log(gameName.toUpperCase()) // Op :- AASHUHELLO

// Some methods that we make notes and use it
// this method we used to know that our character at which place
console.log(gameName.charAt(2)); // Op :- s

// That method tell us that character at which no.
console.log(gameName.indexOf('A')); // Op :- 0

// That method convert our method into substring
const newString = gameName.substring(0, 4)
console.log(newString); // OP :- Aash

// SLice method
// This method also gives the same output as above one
const anotherString = gameName.slice(-8, 4)
console.log(anotherString); // Op :- sh

// trim methdod to remove faltu ka space
const trimFunct = "      Aashu    "
console.log(trimFunct);
console.log(trimFunct.trim());


// replaceFunction like in this we replace the string into we want to replace. EX :- in the url we have to replace %20 with -.

const replaceUrl = "https://aashu.com/aashu%20shrivastava"
console.log(replaceUrl.replace('%20', '_')); // Op :- https://aashu.com/aashu_shrivastava


// IncludesFunction :- is function ka dwara hum ye jaan sakta hia ki humara string mai ye string value hai ki nahi.
console.log(replaceUrl.includes('sundar')); // OP :- false




