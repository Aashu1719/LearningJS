// Js loops are essential for efficently handling repetative tasks. They executed a block of code repetadely as long as a specified conditions are true. 

// Ex 1 :- suppose we want to print hello world 5 times 
for (let i = 0; i < 5; i++)
{
    // console.log("Hello World");
    /* 
    Hello World
Hello World
Hello World
Hello World
Hello World
    */    
}



// Some loops that we have 

// 1. JS for Loop : Its a concise way of writting the loop structure. This loop contains intiallization, condition and increment decrement in single line. 
// Ex :- Simple for loop example 
{
    let x;
    // loop start when x = 2; and run tills x <= 4
    for(x = 2; x <=4; x++)
    {
        // console.log("Valu of x : " + x);
    }
    // Op : Valu of x : 2
// Valu of x : 3
// Valu of x : 4
}


// 2. JS While loop : thats allow code to be executed repetadely based on a given boolean condition. 

/*
    Syntax : 
    while (boolean condition) {
    loop statements...
}
*/

// Ex :- simple example of while loop
{
    let val = 1;

    while (val < 3) {
        // console.log(val);
        
        // here we increased the val by 1
        val += 1;
    }
}



// JS Do-while loop : Its similar to the while loops the only difference is its check the conditions after first time execution. 
/*  Syntax : 
do {
    Statements...
}
while (condition);
*/
// Ex : simple example of do-while loop
let test = 1;
do
{
    // console.log(test);
    test++;
}
while (test <= 5); 
/* 1                                                                                                 
2
3
4
5*/



// JS for - in -loop : This loop is used to iterate over the properties of an object. 
/* syntax : for(let variable_name in object_name) {
    // Statement
}
*/
// Ex : simple example of for in loop
let myObj = {x: 1, y:2, z:3};
for (let key in myObj)
{
    // console.log(key, myObj[key]);
    /*
    OP : 
    x 1
    y 2
    z 3
    */
}


// for-of-loop : This loop is used to iterate the iterable objects like : array, object, set, and map. It directly iterate the value of the given iterable obkect and has more concise syntax.
/* Syntax 
for(let variable_name of  object_name) {
    // Statement
}
*/

let arr = [1,2,3,4,5]
for(let val of arr)
{
    // console.log(val);
}
/*
1
2
3
4
5
*/


// JS Break Statement : Its terminate the execution of the loop or switch statement when the condition is true.
// Ex :- simple example of for loop
for (let i =1; i<6; i++)
{
    if(i == 4)
        break;
    // console.log(i);
}
/*
Op : 
1
2
3 */


// JS Continue statemnt : Its used to break the iteration of the loop and follow with the next iteration. 
// The difference between the continue and break statement is that the break statement breaks out of the loop completely while continue is break one statement and iterate the next statement. 
// Ex :- Simple example of continue 
for(let i = 0; i < 11; i++)
{
    if(i % 2 == 0)
    continue;

    // console.log(i);
    /*
    
    Op : 
    1
3
5
7
9
    */
}






// ########################################### ######################################## #######################
// For Loops : Some more examples in for loop

// Ex : 1 : Simple examlpe of for loop
{
    let x;
    for(x = 0; x <= 4; x++)
    {
        // console.log("Value of x:" + x);
    }
    /*
    Value of x:0
Value of x:1
Value of x:2
Value of x:3
Value of x:4 */
}


// In that for loop : initiallization condition, value testing, and updation they all are not mandatory.
// lets check one by one first intiallization is not mandatory
{
    let x = 0;
    for(; x <=3; x++)
    {
        // console.log(x);     
    }
    /*
        0
        1
        2   
        3
    */
}



// Testing ccondition is not mandatory
let x;
for(x=1; "here condition checking is not available" ; x++)
{
    // console.log(x);
    // OP : infinite
}


// Updation condition : Its also mandatory 
{
    let x;
    for(x=1; x<=5; )
    {
        // console.log(x);
        // OP : But no Op
    }
} 


// ########################## ############### for - in - loop #############################################
// Exmples of for-in-loop 

// Ex : 1 : That examples the for - in -loop iterates over the array's indices.
const array = [ 1, 2, 3, 4, 5 ];

for (const item of array) {
    console.log(item);
}




// ###################### ################################# #################### for-of-loop
// Ex : Iterating over a string using for-of-loop, here we iterate each charatcer of string 

const str = "Hello";

for (const char of str) {
    console.log(char);

    /**
     H
e
l
l
o
     */
}




