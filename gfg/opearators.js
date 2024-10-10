// JS Opearators 
// JavaScript Operators are symbols used to perform specific mathematical, comparison, assignment, and logical computations on operands


// ################ ######################## ########################### ##################
// 1. JS Arithmetic opeartors :- this operators opearate upon the numerical value and return the numerical value. 

// Now lets see the example on : addition, subtraction, multiplication, divison, modulos

//  1.   // addition 

    // number + number = number 
    // number + String = concatenitaion
{
    let a = 1 + 2;
    // console.log(a); // 3

    // Number + String = concatenitation
    let b = 5 + "hello";
    // console.log(b); // 5hello    
    

    // 2. subtraction : number - number = number
    let c = 4-3;
    // console.log(c); // 1


    //3. multipliaction : number * number = multiplication
    let d = 5*5;
    // console.log(d); // 25
    
    
    //4. division : number / number = division
    let e = 5/4;
    // console.log(e); // 1.25


    //5. modulos : number % number = modulus
    let f = 9%5;
    // console.log(f); // 4
}



// 6. Exponentiation (**) Operator : This operator of the first operand to the power of second operand, This operartpr is right assocaitive. 

{
    let g = 2 ** 5; // 32 its like w ki power 5
    let h = 3 ** 3; // 27 3 ki power 3
    let i = 2 ** 3 ** 2; // 512 pehla 3 ki power 2 then 2 ki power 9

    // console.log(g);
    // console.log(h);
    // console.log(i);
}



// 7. Increment oprator : This operator (adds one to) its operand and return a value. 
// If used postfix with the operator after the operand (for example, x++), then it increments and returns the value before incrementing.
// If used prefix with the operator before the operand (for example, ++x), then it increments and returns the value after incrementing.

// Ex : of postfix and prefix operator: 
{
    // postfix 
    let j = 2;
    k = j++; // in  that case j = 3, k = 2
    // console.log(j); // 3
    // console.log(k); // 2

    // prefix 
    let l = 3;
    m = ++l;
    // console.log(l); // 4
    // console.log(m); // 4
         
}


// 8. Decrement operator : This operator decrements (substract one from) its operand and returns a value.
// they work same like in increment operator in postfix and in prefix

// prefix
let n = 4;
let o = n--;
// console.log(n); // 3 
// console.log(o); // 4

// postfix
let p = 5;
let q = --p;
// console.log(q); // 4
// console.log(p); // 4




// ################################### ################################# ##############################
// 2. JS Assinment operator : Assignment operator are used to assign value to variables in JS. 
// Syntax : data = value

// Ex :- lets take some variables 
// x = 10;
// y = 20;

// x = y Here, x is equal to 20;
// y = x Here, y is equal to 10;


// In that we have so many assignment opeartors let discuss one by one
// Then the diagram on website; 

// lets discuss all the assignment opearators in on example 

{
    // 1. Addition assignmnet operators (+=)
    let a = 2;
    let b = 3;

    // console.log(a); // 2

    // console.log(a = b + 1); // 4


    // 2. Subtraction assignment operators (-=)

    let c = 4;
    let d = 3;

    // console.log(c); // 4
    // console.log(c = d-1); // 2
    
    // 3. Multiplication assigmnet operators (*=)
    let e = 4;
    let f = 2;
    // console.log(e = e * f); // 8

    // 4. Divison assigmnet operators (/=)
    let g = 10;
    let h = 2;
    // console.log(g = g/h); // 5


    // 5. Remainder assignment operator (%=)
    let i = 50;
    // console.log(i %= 10);
    
    
    // 6.  Bitwise AND assignment operator(&=)
    let j = 5; 


    // 7. Logical AND Assignment operator (&&=)
    let name = 
    {
        firstName : "Ram",
        lastName : "",
    }

    // console.log(name.firstName); // Ram 


    // 8. changing the value using logical AND assignment operator 
    name.firstName &&= "Shyam";

    // Here the value changed because name.firstName is truthy
    // console.log(name.firstName); // Shyam

    // console.log(name.lastName); // ""


    // now chnage the last name value using logical and assignment operator 
    name.lastName &&= "Shri";
    // console.log(name.lastName); // "" : Here the value remains same because the lastname is falsy

    
    
    // 9. Logical OR Assignment Operator(||=) : This operator is used to assign the value of y to x if the value of x is falsy. 

    {
        let name = 
        {
            firstName : "Aashu", 
            lastName : "",
        };

        // console.log(name.firstName); // Aashu
        

        // changing the firstName value using logical OR assignment operator
        name.firstName ||= "Aabhi";

        // But the value will not be changed beacuse firstName is truthy
        // console.log(name.firstName); // Aashu


        // print the last name that is empty string
        // Changing the logical value using logical or assignment operator 
        name.lastName ||= "Shri";

        // The value change bacause the lastName if falsy value; 
        // console.log(name.lastName); // Shri
        
        
    }    
    
}



// ####################3 ############################### ######################
// 3. JS Comparison Operators : this are for checking conditions and making decisions in our code. They are used to evaluate whether a condition is true or false by comparing variables or values. 

// Lets see some types of this operators :-


// 1. Equality operator (==) : This operator is used to compare the equality of two oprands. If equal the condition is true otherwise false. 
// Ex :- 
let val1 = 5;
let val2 = "5";

// checking of operands
// console.log(val1 == val2); // true
// console.log(val1 == 5); // true
// console.log(val1 == val1); // true

// check against null and boolean value
// console.log(0 == null); // false
// console.log(0 == false); // true


// 2. Inequality operators : This is used to check the inequality of two operands. If equal then the ondition is false otherwise condition is true. 

// ex :- 
{
    let val1 = 5;
    let val2 = "5";

    // checking of opearnds 
    // console.log(val1 != 6); // true
    // console.log(val1 != "5"); // false
    // console.log(val1 != val2); // false

    // check against null and boolean value
    // console.log(0 != false); // false
    // console.log(0 != null); // true
    
}



// 3. Strict equality operator : This operator is used to compare the equality of two operands with type. If both value and type are equal then the condition is true otherwise false. 

// EX :- 
{
    let val1 = 5;
    let val2 = "A";

    // checking of operands 
    // console.log(val1 === val2); // false
    // console.log(val1 === 5); // true
    // console.log(val1 === Number); // false

    // check against null and boolean value 
    // console.log(0 === false); // false 
    // console.log(0 === null); // false 
    
}


// 4. Strict inequality operartor (!==) : This opeartor isused to compare the inequility of two operands with type also, If both value and type are not equal then the condition is true otherwise false. 
{
    let val1 = 5;
    let val2 = "5";

    // checking the operands 
    // console.log(val1 !== val2); // true
    // console.log(val2 !== 6); // true
    // console.log(val1 !== 5); // false

    // check against null and boolean value 
    // console.log(0 !== false); // true
    // console.log(null !== 0); // true
}


// 5. Greater than Operartor (>) : This operator check the left side value is greater thanright side, if yes then it will return true otherwise false. 

{
    let val1 = 5;
    let val2 = "5";

    // checking of operands 
    // console.log(val1 > 0); // true
    // console.log(val2 > "10"); // true
    // console.log(val1 > 10); // false 
    // console.log(val2 > 0); // true
}




// 4. JS Logical Operators :- This operators are used to perform logical operations on values and return either true or false. 
// This operators are commonly used in decision-making statements like if or while loops to control the flow of execution. 

// 1. Logical AND(&&) Operator : This operator checks whether both operands are true, if both are true the result is true, and if false the result is false. 

// Ex : 
{
let i = 0, j = 2, k = 4, l = 8;
// console.log(Boolean(i && j));
// console.log(Boolean(j && k && l));
}


// 2. Logical OR Operartor : This checks that atleast one operand is true if one is true the result is true otherwise result is false. 
{
    let a = 2;
    let b = null;
    let c = undefined;
    let d = 0;

    // console.log(Boolean(a || d)); // true
    // console.log(b || c); // false
    
}


// 3. Logical NOT Operator(!)
// This operator inverts the boolean value of its operand, if the operand is true, it returns false. And if the operand if false its return true. 
{
    let i = 0;
    // console.log(!i); // true
    // console.log(!!!i); // true    
}


// 4. Nullish coalesing operator (??) : This opearand returns the  right-hand operand when the left-hand operand is either null or undefined. Otherwise it returns the left-hand operand. 
{
    let a = null
    let b = "Aashu";
    let c = undefined;
    let d = "Shro"

    // console.log(a ?? b); // Aashu
    // console.log(b ?? d); // Aashu
    // console.log(a ?? c);  // undefined    
}



//  ############################## ##########################3 ############################# 
// 5. JS Ternary Operator : Its a shortcut for writting simple if-else statements. Its alos known as conditional operator because it works based on a condition. 
// This operator allows you to quickly decide b/w two values depending on whether a condition is true or false. 

// How its work : 
/*
    Condition : A condition that returns true or false. 
    Value if true : What happens if condition is true. 
    Vale if false : what happens if the condition is false. 
*/

//  syntax : condition ? trueExpression : falseExpression

// Syntax example : 
/*
    Input : let result = (10 > 0) ? true : flase;
    Output : true

    Input : let message = (20 > 15) ? "Yes" : "No";
    Output : Yes
*/


// Ex : 1 function gfg()
{
    // conditional operator 
    let PMarks = 40;
    let result = (PMarks > 39) ? "Pass" : "Fail";
    // console.log(result); // Pass
    
}


// Ex : 2 : nested ternary operators 

function gfg() {
    
    // multiple conditional operators 
    let marks = 95; 
    let results = (marks < 40) ? "Unastisfactory" : (marks < 60) ? "Average" : (marks < 80) ? "good" : "execellent";

    console.log(results); // excellent
}
gfg();



// Js Comma Operator : 