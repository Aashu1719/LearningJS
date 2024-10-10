

// If
if (true) {
    
}

// step 1 :- agr condition true hai tabhi if ka andr ka scope jo hai wo execute hoga otherwise wo execute nhi hoga, 
// step 1.1  iska andr hum kayi aur tarika sa bhi condition check kar sakta hai 
// ex :- 
// const isUserLoggedIn = true

// if (isUserLoggedIn) {
//     // ab ye jo hai wo execute hoga
//     console.log("Hello"); // Hello
    
    
// }


// step 2 :- comparison operator 
// 1. greater than <
// 2. less than >
// 3. greater than <=
// 4. less than >=, 
// 5. == ye contect check karta hai uska dataType nhi like {(2==3) : false , (2=="2") : true)}
// 6. != iska matalb hai not equal kya ye uska equal nahi hai {ex : (2!="2") : false, (2!=3) : true}
// 7. === isa kahta hai stricly check ye content ka sath sath dataType ko bhi check karta hai like {ex: (2==="2") : false }
// 8. !== ye bhi negative value ko strictly check kart hai like {(2!=="2") : true}

// // example at 8
// if (2!=="2") {
//     console.log("Hello");
//     // Hello
// }

// ex :- 2 of === if else

// If else condition 
// const temprature = 40;
// if (temprature === 40) {
//     console.log("Less than 50");
// }
// else
// {
//     console.log("Greater than 50");
// }


// ex :- 3 on scopes 
// const score = 200;
// if (score > 100) {
//    let power = "fly";
//    console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`); if we use here this line so we will get RE beacuase the scope of that power variable is inside the loop only and outside the loop its not work. 
// but is we use power variable declared as var then the above log message will print because var varibale ka scope out of the scope bhi hota hai. jo ki galat hai uska sir if ke andr tak hi hona chaiya tha but ab aisa nhi hai so, hum usa use nahi karta

// step 3
// short hand notation
// const balance = 1000 
// if (balance > 500) 
//     console.log("Hello"), console.log("Hello 2"); // Op :- Hello 
// // Hello 2
// // Is case ma hum {} curly braces ka use nhi karta hai, aur (, ka sath multiple log likh sakta hai but its not recommended)


// step 4 :- for nesting 
// const balance = 1000;

// if (balance < 500) {
//     console.log("less than 500");
// }

// else if(balance < 750)
// {
//     console.log("less than 750");   
// }

// else if(balance < 900)
// {
//     console.log("less than 900");
    
// }

// else
// {
//     console.log("less than 1200");
    
// }

// Op :- 1200


// step 5 
// Multiple checks with && 
const isUserLoggedIn = true;
const debitCard = true;

if (isUserLoggedIn && debitCard) {
    
    console.log("Allow to buy courses");    
    // Op :- Allow to buy courses 
    
    // ######## ######### ####
    // remember :- iska andr agr ek bhi && condition false ho gyi to if ka scope run nhi hoga 
    // ex :- (isUserLoggedIn = true, debitCard = true, (2==3 false) yahan pe if condition run nhi hoga)
    // syntax :- of exa is (isUserLoggedIn && debitCard && 2==3) if condition not execute
}


// Step 6 
// Check multiple consitions agr ek bhi sahi hoti hai to if part or scope will be executed

const isLoggedInFromGoogle = true;
const isLoggedInFromEmail = false;

if (isLoggedInFromGoogle || isLoggedInFromEmail) {

    console.log("User logged in"); // Op :- User logged in   
}


