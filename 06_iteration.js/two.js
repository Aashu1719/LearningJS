// Simple while loop
let i = 0;
while (i <= 10) {
    console.log(`Value of i is ${i}`);
    i = i + 2;

    /**
     * OP : 
     * Value of i is 0
Value of i is 2
Value of i is 4
Value of i is 6
Value of i is 8
Value of i is 10
     */
}


// Ex :- 2 Array inside 
let myArray = ['flash', 'batmna', 'superman']
let arr = 0 // yahan arr pe humara index hai njo ki humna set kiya hai 
while (arr < myArray.length) {
    // console.log(`Value is ${myArray[arr]}`);
    arr = arr + 1;
}

// Ex :- 3
// Do-while loop : isma pehla kam hoga then condition check hogi 

let score = 0;
do {
    // console.log(`Score is ${score}`);
    score++
} while (score <= 10);