// step 1: - example and explanantion
// Ex 1 :- isma hum dekhta hain ki jab hum for each loop ko variable ma save karta hai to wo jo value hai wo  kya return karta hai kuch karta bhi hai ye nahi karta.

// const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach( (item) => 
// {
//     console.log(item);
// })

// console.log(values);

// ue human retun mai undefined mil rha hai iska matlab forEach kuch bhi values ko return nhi karta. 



// ############################################# ############################ ###########################
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNums = myNums.filter( (num) => num > 4);
console.log(newNums); // [ 5, 6, 7, 8, 9, 10 ]



