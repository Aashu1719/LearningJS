// truthy or falsy values :- iska simple sa matlab hai ki hum man leta hai ki ye jo value hai wo true hai ye agr true hai to if condition chalega agr nhi to wo nhi chalega

// const userEmail = "as"

// if (userEmail) {
    
//     console.log("Got User Email");
    
// } else {
//     console.log("Dont got user email");
    
// }

// OP :- Got User Email :- kunki isna passes string ko true man liya hai, 
// aise hi ye kayi cheejo ko true and kayi cheejo ko false man leta hai ayi dekhta hai whats tru and whats false


// step 1 :- 

// pehla dekhta hain konsi value falsy hai
// false, 0, -0, BigInt 0n, "", null, undefined, Nan

// truly values :- falsy ka alwala baki sab truthy values hai, 
// some more cases on truth values :- "0", 'false', " ", {}, [], function(){}

// step 2 :
// empty array check
const userEmail = []
if (userEmail.length === 0) {
    console.log("Array is empty");
    
}

// step 3
// empty object check
const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
    
}



// step 4
// Nullish coalescing Operator (??) : null, undefined 
// iska simple sa matlab hota hai ki value agr null or undefined aa rhai hai aur agr sath ma dosri koi value bhi hai to use pass kar do ye null, undefined pass kar do

// ex :- basics of ?? jisma first value chalegi
// let val1;
// val1 = 5 ?? 10;

// console.log(val1); // 5

// ex :- 2 isma null ka sath hum value ko pass karenga
let val1;

val1 = null ?? 10;
console.log(val1); // 10

// ex :- 
val1 = undefined ?? 15;
console.log(val1); // 15


// ##########
// step ternirary operator

// step 5
// syntax :- condition ? true : false

const iceTeaPrice = 100;
iceTeaPrice > 80 ? console.log("less than 80") : console.log("more than 80"); // less than 80



