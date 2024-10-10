// Ex :- 1 
const myObject = {

    js: 'javascript',
    cpp: 'C++', 
    rb: "rubby",
    swift: "swift by apple"
}

// step 1 :- use for in loop to print the internal maal of objects 

// yahan pe hum use karenga forin loop 
// for (const key in myObject) {
//     console.log(key);
// //     js
// // cpp
// // rb
// // swift
// // Here we get all the key but huma sirf key thoda na chaiye huma object bhi chaiye hoga
// }

// step 2 :- for balues ko print karana ka liya 
for (const key in myObject) {
    // console.log(myObject[key]); // yahan pe hum bol rha hain ki ye jo ki aayo hai iska aap humae value de do
    /* Op :- 
     javascript
C++
rubby
swift by apple */

// step 3 :- ab hum key and values dono ko print karenga 
// now we have key and value now we print both
// console.log(`${key}, shortcut is for ${myObject[key]}`); 
// js, shortcut is for javascript
// cpp, shortcut is for C++
// rb, shortcut is for rubby
// swift, shortcut is for swift by apple
}



// ex :- 2 apply forin loop on array
let myArr = ["Js", "Java", "Cpp", "Python"]
for (const key in myArr) {
        // console.log(key);
        
        // Op :- yahan pe huma array ka index mila hai jisa ye key samjh raha hai uski values nahi uska liya huma kuch aur try karna padega
//         0
// 1
// 2
// 3

// step 2 
// console.log(myArr[key]); // ye huma mil jayengi values 
// Op :- yahan hum amil jayengi values bhi
// Js
// Java
// Cpp
// Python
}


