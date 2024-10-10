// arrays of same type 
// javascript arrays are resiziable and can contain a mix of different data types. 
const myArr = [0, 1, 2, 3, 4, 5, 6, 7, 8]
// console.log(myArr[1]); // 1

// we can define a array with another way also
const myArr2 = new Array(1, 2, 3, 4);
// console.log(myArr2[1]); // 2


// Array methods

// add values on arrays
// 1. push()
// myArr.push(9)
// console.log(myArr); // it can add 9 in our array element

// 2. pop()
// to remove the last value
// myArr.pop()
// console.log(myArr);


// 3. shift() :- removes the first digit
// myArr.shift();
// // console.log(myArr); Op :- [
//   1, 2, 3, 4,
//   5, 6, 7, 8
// ]


// 4. unshift () :- add the elemnt that we provided on front
// myArr.unshift(9);
// console.log(myArr);
// [
//     9, 0, 1, 2, 3,
//     4, 5, 6, 7, 8
// ]


// 5. includes() :- array sa puchna ki wo humaray element list mai hai ki nahi
// console.log(myArr.includes(9)); // false if o to 8 so its gives true

// indexOf() :- 

// 6. Join() :- ye method humara array ko string mai convert kar deta hai and usa join bhi kar deta hai. 
// const newArr = myArr.join();

// console.log(myArr); // op :- [
//     0, 1, 2, 3, 4,
//     5, 6, 7, 8
//   ]


// console.log(newArr); // OP :- 0,1,2,3,4,5,6,7,8



// ############## #################### #######################
// Slice() and Splice()

// 1. Slice()
// console.log("A", myArr); // A [ 0, 1, 2, 3, 4, 5, 6, 7, 8]

// const myn1 = myArr.slice(1, 3); 
// console.log(myn1); // [ 1, 2 ] includes 1 and 2 elelment not includes last range that is 3.
// console.log("B", myArr); // B [ 0, 1, 2, 3, 4, 5, 6, 7, 8]

// // 2. Splice()
// const myn2 = myArr.splice(1, 3);
// console.log(myn2); // [1, 2, 3]
// console.log("C", myArr); // C [ 0, 4, 5, 6, 7, 8 ]
// splice method last range ko to include karta hia aur uska sath wo originial  array mai sa bhi un elemnt ko delete kar deta hai ye change kar deta hai jo usna print karta samya includes kiya tha. 










