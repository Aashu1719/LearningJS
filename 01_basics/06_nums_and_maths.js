// 1. hum no. ko do tarika sa bna sakta hain
const score = 400;
// console.log(score); // 400

// 2. hum agr is tarah sa no. bnayenga to colpusory hai ki wo no. hi banega
const balance = new Number(100.001)
// console.log(balance); // [Number: 100.001]


// 3. hum no ko string bhi bna sakta hain aur uska through huma string ki kuch extra property bhi mil jati hai
// console.log(balance.toString().length); // 7 // Jaise ki string

// Is method ka through hum fixed kar sakta hai ki huma decimal ka baad kitna digit chaiye
// console.log(balance.toFixed(1)); // 100.0


// 4. Ye ek pricision method hai jissa hum vale ko precise kar sakta hai like 123.87654 (agr hum bola ki precise 3 so wo starting 3 digit ko focus kar ka usa precise kar dega. agr hum bola value 2 to wo 2 digit ko precise kar dega)
// console.log(balance.toPrecision(3)); // 100


// 5. Is method sa hum 000s ko acha sa represent kar sakta hain like meaningfully
const hundreds = 1000000;
// console.log(hundreds.toLocaleString('en-In')); 




// ***************** ***************************** *******************************************
// Java script maths

// console.log(Math); // Op :- Object [Math] {}

// some more methods on Math

// 1. ye huma absoulute value deta hai jaise ki negative ko positive mai convert kar dega
// console.log(Math.abs(-5)); //5

// 2. ye huma value ko roundup kar ka dega
// console.log(Math.round(4.6)); // 5

// 3. ceil() : ye function huma humaesha top ki value hi dega (like : 4.2 ka 5)
// console.log(Math.ceil(4.2)); // 5

// 4. floor() : ye humesha huma nicha ki value hi dega (like 4.9 ka 4)
// console.log(Math.floor(4.9)); // 4

// 5. min(): ye function huma min vale deti hai like ek array ka andar jo min value hai usa
// console.log(Math.min(4, 3, 6, 2, 9)); // 2

// 6. max() : ye huma max value deti hai ek array ma se
// console.log(Math.max(4,8,7,9,2,1)); // 9


// ############# ####################

// math. random huma 0 0r 1 ki beech ki vakue deti hai
console.log(Math.random()); // 0.40838277743824

// now we multiple the random value wth 10
console.log((Math.random() * 10) + 1); // 9.793475257579068, 3.510188012823309 like this its shift one number

// ab ye jo value hai ye huma mil rahi hai decimal ma iska liy ahum use kar sakta hain Math.floor so its give a single value below one but is
console.log(Math.ceil(Math.random() * 10)); 

// console.log(Math.ceil(Math.random())); ye humesaha 1 hi dega


// ab ek condition rakh deta hia aur wo ye hai ki huma ek range mai value chaiye max ye min ka ranga ma

const max = 20;
const min = 10;
// issa huma jo value milaegi wo humesa 0 sa 10 ka beecha ki hogi

console.log(Math.ceil(Math.random() * (max - min))); // see yahan pe huma wahi value mil rahi hai jo uper thi. but huma ek at least min value to 10 chaiye uska liya hum isma + min kar denga

console.log(Math.ceil(Math.random() * (max - min) + min)); // now the vale will be 12, 15, 18, 20, 19...






