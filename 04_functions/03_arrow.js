// basic object create
const user = {

    userName: "hitesh", 
    price: 999, 

    welcomeMessage: function()
    {
        // console.log(`${this.userName}, welcome to website`); 
        
        // step 4 :- now ab hum this ko current object ma print karenga 
        // console.log(this); 
        
    }
}

// step 2 :- ab hum isa print karenga
user.welcomeMessage(); // hitesh, welcome to website

// step 3 :- jab hum name ko change kar denga to wo nam hi print hoga
user.userName = "Sam";
user.welcomeMessage(); // Sam, welcome to website

// step 5 :- ab hum blank this ko object ka bahar ye scope ka bahar print karenga to huma ek empty object milega
// console.log(this); // {} 

// // step 6 :- functions ka ander hum this ko use karenga to wahi sa kam nhi karega
// function chai() {
    
//     // step 6.1 yahan hum ek variable declare karenga aur usa bhi this ka sath print kar ka dekhnaga to huma undefined output hi milega
//     let username = "hitesh"
//     console.log(this.userName); // undefined 
    
//     // console.log(this); // yahan huma ajeebo gareeb kuch cheeja milengi
    
// }

// chai();



// ####################### ####################### ################################ #
// setp 7 :-  now we declare arrow function :- uska liya bus huma function keyword ko hatana hai and arrow ko add karna hai, bn gya arrow function. 

const chai = () => 
{
    let userName = "Aashutosh"
    console.log(this.userName); // but isma bhi huma undefined hi mil OP ma
    
}

// chai()


// step 8 :- declare a simple arrow function()
// const addTwo = (num1 , num2) =>
// {
//     return num1 + num2
// }

// console.log(addTwo(3, 4)); // 7 


//  STEP 9 :- arrow function with implicit return
// const addTwo = (num1, num2) => num1 + num2
// console.log(addTwo(2, 4)); // 6


// step 10 :- arrow function with paranthesis : agr hum paranthesis mai output likhta hain to huma return keyword nhi likhna padega, but agr hum isa {} braces ma use karta hai to huma wahan pe retun likhna hi padega

// const addTwo = (num1, num2) => (num1 + num2)
// console.log(addTwo(3, 4)); // 7


// step 11 :- agr huma object return karna hai to hum kaise usa return karenga and wahan hum dekhenga parantehsis ka fayda
// const addTwo = () => {userName : "Aashu"}
// console.log(addTwo); // Op:- agr hum bina parenthisies ka print karenga to humare pass jo value ayegi wo hogi undefined. 

// step 11.1 :- same cheej ko hum parenthsis ka sath return karenga to huma milega value
const addTwo = () => ({userName : "Aashu"})
console.log(addTwo());


