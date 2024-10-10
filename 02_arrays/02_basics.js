const marvelHeroes = ["thor", "Ironman", "spiderman"];
const dcHeroes = ["superman", "flash", "batman"];

// push () :- ye method huma new value deta hai jab hum do array ko add karta hain, but ye array ko as a array hi leta hai like :- 
// marvelHeroes.push(dcHeroes);
// console.log(marvelHeroes); // [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvelHeroes[3]); // [ 'superman', 'flash', 'batman' ]


// 2. but huma agr chijo ko jodna hai to hum doosra method concat() use kar sakta hai 
//  const allHeroes = marvelHeroes.concat(dcHeroes);
//  console.log(allHeroes); // Op :- [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

//  3. spread() :- ye method chijo ko spread kar deta hai
// const allNewHeroes = [...marvelHeroes, ...dcHeroes];
// console.log(allNewHeroes); // [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]


// 4. flat() :- man lijya hum ek array leta hai jisma bahut sare array ka andr array define hai, aur huma single line mai sab array chaiye to hum flat() use karenga. 
// const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
// const real_another_array = anotherArray.flat(Infinity);
// console.log(real_another_array); // Op :- [ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5 ]


// 5. from() :- ye method hum jo value deta hai usa array ma convert kar deta hai
// console.log(Array.isArray("Hitesh")); // false (its not a array)
// console.log(Array.from("Hitesh")); // [ 'H', 'i', 't', 'e', 's', 'h' ]
// console.log(Array.from({name: "Hitesh"}));  // [] (blak array : is case mai huma batana padega ki ye key sa array bnaye, ye phir value sa.)


// // 6. of() :- agr humara pass multiple variables or huma usa array ma convert karna hai
// let score1 = 100;
// let score2 = 200;
// let score3 = 300;

// console.log(Array.of(score1, score2, score3)); // [ 100, 200, 300 ]


 

