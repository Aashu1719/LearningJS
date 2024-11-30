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



// Js Comma Operator : Its evalutaes the operands from left to right sequentially and returns the value of the rightmost operand. 
// It used as a seperator for ultiple expressions at a place that requires a single expression. 
// syntax : Expression1, expression2, expression3,,,, so on

function Func1() {
    console.log('one');
    return 'one';
}
function Func2() {
    console.log('two');
    return 'two';
}
function Func3() {
    console.log('three');
    return 'three';
}

// Three expressions are
// given at one place
let x = (Func1(), Func2(), Func3());

// console.log(x);


// Ex : 2 : we used comma operators mostly in loops
for (let a = 0, b=5; a<=5; a++, b--) {
    // console.log(a, b);
}


// Ex : 3 : using the comma operator to initiallize multiple variable in a single line. 
let a =1, b =2, c=3;
console.log("Initial values");
// console.log("a:", a);
// console.log("b", b);
// console.log("c", c);

// using comma operator to update multiple values 
(a *= 2), (b *=  3), (c *= 4);

console.log("Updated values :");
// console.log("a:", a);
// console.log("b", b);
// console.log("c", c);





// ############################################## JS Unary Operators : This operators works on a single operand and perform various operations, evaulating data type, negation of value, etc. 

/*
Unary Plus (+) Operator
Unary Minus (-) Operator
Unary Increment (++) Operator
Unary Decrement (–) Operator
Logical NOT (!) Operator
Bitwise NOT (~) Operator
typeof Operator
delete Operator
void Operator 
*/


// 1. Unary Plus (+) Operator :- The unary plus (+) converts an operand into a number, if possible. It is commonly used to ensure numerical operations on variables that may contain numeric strings.

// Ex :- 1 : In this example the unary plus converts the string "12" into the number 12, 
// but in the second case, the unary plus try to converts the string "Geeks" into a number, but its not a valid number so its gives NAN.
{ 
let str1 = "12";

// Using umary plus to convert string to number
let num = +str1;
console.log(num); // 12
 
// Here we are using of typeof operator
console.log(typeof (num)); // number

// "Geeks" cannot be converted to a number
let str2 = +"Geeks";
console.log(str2); // NAN

}



// 2. Unary Minus (-) Operator : The unary negation operator is used to convert its operand to a negative number if it isn,t already a negative number
// Ex :- 2 
{
    let str1 = "12";

    // Unary negation, 
    let num = -str1;
    console.log(num); // -12

    // try to convert a string into a number
    let str2 = -"Geeks";
    console.log(str2); // NAN
    
}



// 3. Unary Increment Operator (++) : This operator adds 1 to its operands value and update the value. 
// 3.1 :- Postfix : The current value of the operand is used then updated by +1.
// 3.2 :- Prefix : The current value will be updated one then its going to use

// Case 1 : Postfix 
{
let num = 12;

// The current value of 'num' is used, 
// then num is incremented is 13
let numPostfix = num++;
console.log(numPostfix); // Op : 12

// Updated value of num
console.log(num);


// Case 2 : Prefix
let num1 = 10;
// num1 is incremented to 11, and then updated value 11 is used
let numPrefix = ++num1
console.log(numPrefix); // 11

// updated value of num1
console.log(num1); // 11

}



// Unary Decrement Operator : This operator substracts 1 from its operands value and then update it, the postfix and prefix property are same like unary increment operator. 

{
    // postfix
    let num1 = 8;
    // The current value of 8 is used, then num1 value will decreased.
    let num1postfix = num1--;
    console.log(num1postfix); // 8

    console.log(num1); // 7
    
    let num2 = 15;
    // num2 is decremented to 14, and then value will be updated.
    let num2prefix = --num2;

    console.log(num2prefix); // 14

    console.log(num2); // 14
    
}



// Logical NOT(!) Operator : Its a unary operator that negates the boolean value of an operand, convering true to false and false to true. 
// ex :- 1 
{
    let var1 = false;
    let result1 = !var1;
    console.log(result1); // true

    let var2 = true;
    let result2 = !var2;
    console.log(result2); // false
    
}



// typeOf Operator : This operator returns the datatypes of its operands in the form of a string. 
// Ex: 
{
    let num = 18;
    let str = "Aashutosh";
    let isTrue = true;
    let obj = {name: "Aman", age: 21};
    let undefinedVar;

    console.log(typeof num); // number
    console.log(typeof str); // string
    console.log(typeof isTrue); // boolean
    console.log(typeof obj); // object
    console.log(typeof undefinedVar); // undefined
    
}


// delete operator : This operator removes a property from an object. 
// Ex :- 1
let person = 
{
    name: "Aashu",
    age: 26,
    city: "Noida"
};
console.log(person); // { name: 'Aashu', age: 26, city: 'Noida' }

// Deleting the age property from the person object
delete person.age;
console.log(person); // { name: 'Aashu', city: 'Noida' }

