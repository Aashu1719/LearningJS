// For of

// explanantion : 
// for (const element of object) {
//     // yahan pe element jo hai wo ek varibale hia jo hum declare karenga.. and jo oject hai uska simple sa matlab ye hai ki hum kiska upar us loop ko lagana chahte hain, just for ex :- (yahan pe hum arr ke uper isa lagana chahte hain so hum value yahan pass kar denga)
// } 

// ex :- 1 : simple array and is array ma hum for of loop lgana wala hai
const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    
    // console.log(num);
    
}
// // 1
// 2
// 3
// 4
// 5


// ex :- 2
// Ex :- apply that forof loop in string
const greetings = "Hello World";
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
    
}

// Each char is H
// Each char is e
// Each char is l
// Each char is l
// Each char is o
// Each char is
// Each char is W
// Each char is o
// Each char is r
// Each char is l
// Each char is d




// ######################## ########################### ##################
// Step 2 :- Maps
// DEF : Its simple an object : isma value jo hai wo key value pair ma aata hai, and isma sirf unique values hi hoti hai 

// declarartion 
const map = new Map()
map.set('IN', "India")
map.set('USA', "Unites States of America"),
map.set('FR', "France")

// step 2.1 : 
// agr hum isma dubara sa ('IN', "India ko write kar ka print karenga to ye usko nahi lega and yahan pe kuch bhi nhi hoga, because ye sirf unique values ko leta hai, and ye jis order mai hum value ko transfer karenga usi order mai ye value ko print karega")

// console.log(map);
// Map(3) {
//     'IN' => 'India',
//     'USA' => 'Unites States of America',
//     'FR' => 'France'
//   }

// step 2.2 :- now we apply forof on maps

for (const kes of map) {
    // console.log(map); 
    
    // Op :- Map(3) {
    //     'IN' => 'India',
    //     'USA' => 'Unites States of America',
    //     'FR' => 'France'
    //   }
}

// step 2.4 :- print in different format or in key value format : iska liya hum bus square bracket ko add kar denga and its gives the value in key value format. 

for (const [keysss, valuesss] of map) {
    console.log(keysss, ':-', valuesss);

//   Op :-   IN :- India
// USA :- Unites States of America
// FR :- France
}


// Step :-3 ab hum forOf loop ko object ka uper print krwa ka dekhta hain
const myObject = {

    'game1': 'NFS', 
    'game2': 'Spiderman'
}

// step :- 3.1
// for (const obj of myObject) {
//     // console.log(obj); here we got an RE :- myObject is not iterable    
// }

// step 3.2
// try to print in key, value pair
for (const [key, pair] of myObject) {
    console.log(key, ':-', value);
    // Op :- RE :- myObject is not iterable
    // to humna yahan dekha ki yahan pe kisi bhi tarika sa forof loop kam nhi kar rha hai.
}