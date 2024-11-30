// Step 1 :- j.s Execution context :- iska simple sa matlab ye hai ki hum koi bhi file bnyi hai usa j.s execute kasie karegi run kaise karegi.
// basically j.s koi hi cheej ko 2 phase ma execute karti hai

// Step 2 :- humrae pass 2 execution context hai 1. is Global execution context, 2. Function execution context.

// step 3 :- humare pass 2 phase hai
// 1st is memeory creation phase,
// 2nd is execution phase


// step 4:-  ab jo koi bhi code wo run kaise hota hai uska kuch step dekhta hai
// step 1 :- global execution :- iska through humare pass sbsa pehla file ayi global execution phase ma with the help of this keyword.
// step 2 :- memory phase :-  isma humare pass all variables aata hai aur save hota hai, isma sbka nam liya jata hai ye keh sakta hai strore hota hai aur isma value define kri jati hai that is undefine.

// step 3 :- execution phase :- isma humari chheja jo hai wo execute karna suru kar deti hai.

// Note :- jitna bar bhi function execute hoga utna bar ye 2nd and 3rd phase jo hai wo run karenga.

// diagram


// ################################ ######################################### #################
// Call Stack

// call stack jo bhi value hai wo ek contanier ma function aati hai aur phir chali jati hai..
// but hum function ka nadr gunction ko hi call kr la to us time pe kya hoga kaise hoga wahi hai call stack
// ye baically lifo pe kam karta hai (Last in first out) hum is cheej ko browser ka snippet mai jake dekh sakta hai.

// basic example of call stack

function one()
{
    console.log("One");
    two()
}

function two()
{
    console.log("two");
    three()
}

function three()
{
    console.log("three");
}

one()
two()
three()

// One
// two
// three
// two
// three
// three


