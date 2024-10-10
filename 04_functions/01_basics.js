// functions ka simple sa matlab hai ki hmna jo bhi code likhahai 10 line a 20 line ka usa ek package mai band kar diya hai. and usa hum mjahan chahe wahan use kar sakta hain




// funsction ko declare karna :- 
// sbsa pehla hum use karta hain function keyword then uska name uska bad hum lgate hai function paranthesis()  and then {} : - hum likhta hai functyion ka scope or function ka definition ye function ka kam. 

function sayMyName() 
{
console.log("H");
console.log("I");
console.log("T");
console.log("E");
console.log("S");
console.log("H");
}

// to ab hum function ko karta hai print 
// sayMyName :- ye ho gya function ka refrence

// sayMyName() // ye ho gya function ka refrence  
/*
 Op :- H
I
T
E
S
H
*/


// another function 
// function addTwoNumbers(num1, num2) // declare the numbers as a parameters
// {
//     console.log(num1 + num2);
// }
// addTwoNumbers(3, 4) // 7 // declare the numbers as arguments


// declare a function
function addTwoNumbers(num1, num2) // declare the numbers as a parameters
{
    // create a variable for operation then return that variale
    // let result = num1 + num2
    // return result

    // another way of doing this 
    // direct return the num1 and num2
    return num1 + num2;

}

// create another variable and used it
const finalResult = addTwoNumbers(3, 5)

// console.log("Result: ", finalResult); // 8


// create another function 
// function loginUserMessage(username)
// {
//     return `${username} just logged in`
// }

// console.log(loginUserMessage("Hitesh")); // Hitesh just logged in


// Here we discuss on the undefined cases :- 
// console.log(loginUserMessage()); // undefined just logged in

// now we take ifStatement
function loginUserMessage(username = "Aashu") // now we never enter into if condition because we pass the default value means if no other value will be find it print this.
{
    if(!username) // without ! menas its a false value, and we want true so we write !
    {
        console.log("PLease enter a userName");
        return
        
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage()); // PLease enter a userName
//                                 // undefined

// console.log(loginUserMessage()); // Aashu just logged in

// // override the defaule value
// console.log(loginUserMessage("Abhi")); // Abhi just logged in




//  ################### ######################### ###########################
// Rest Operator :- suppose kariya hum ek commerce ka liye cart bna rha hain aur usma humara pass kai sare value ayin hain to hum unha kasie print karenga

// function calculateCartPrice(...num1)
// {
//     return num1
// }

// console.log(calculateCartPrice(200, 400, 500)); // 200 :- is case ma problem ye hai ki issa huma sirf first single value hi milegi. 
// // now we apply restOpeartor
// console.log(calculateCartPrice(200, 400, 500)); // OP :- [ 200, 400, 500 ] value gets in the form of array


// another example of restOperator :- isma hum total value ko num1 ma nhi dalenga jitna huma chahiye sirf utna hi usma jayenga

// function calculateCartPrice(val1, val2, ...num1) {
    
//     return num1
// }

// console.log(calculateCartPrice(200, 400, 500, 1000)); // [ 500, 1000 ]



// #################### ########################## ######################## ###############
// How to pass the object in the function and how to use it :- 

// create a object
const user = 
{
    username : "Aashutosh",
    price : 199
}

// create a function
function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
    
}

// handleObject(user); // call the function and pass the object  
// Op :- Username is Aashutosh and price is 199

// another way of doing this 
handleObject({

    // direct pass the object
    username : "sam", 
    price : "399"
})


// passing the array in the function 

const myNewArray = [200, 400, 600]

function returnSecondValue(getArray) {

    return getArray[2]
    
}

console.log(returnSecondValue(myNewArray)) // 600

// another way of doing this
console.log(returnSecondValue([

    3, 4, 5, 6
])); // 5


