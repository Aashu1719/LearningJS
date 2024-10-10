const coding = ["js", "ruby", "java", "python", "cpp"]

// Step 1:- theory : Jab hum for each loop ko use karta hain to wo huma kehta hai ki aap mujha ek callbackfunction do,,,,,,
// ye normal function sa thoda alag hot hai iska name nhi hota basically, 
// ######### ab hum isma parameter pass karenga and that parameter humare liya values leka ayega. 

// step 2 : print with the help of foreach loop
// coding.forEach(function (arrVal) {
//     console.log(arrVal);
// // js
// // ruby
// // java
// // python
// // cpp
// })


// step :- 3 same process with arrow function
coding.forEach((item) => 
{
    // console.log(item);
    
    // Op :- same output
//     js
// ruby
// java
// python
// cpp
})


// step 4 same process jahan hum function bnayenga and usa for each loop ma pass kardenga, and wo jake humara liya values leka ayega. 
// function printMe(items) {
//     console.log(items);
// }
// coding.forEach(printMe)
// // Op
// // js
// // ruby
// // java
// // python
// // cpp

// step 4 :- foreach loop ma hum aur bhi kayi tarika ki values or paramaters ko pass kar sakta hai aisa nhi hai ki ye sir huma values hi nikal ka dega, aur bhi cheeja ye la sakta hai. 
coding.forEach((item, index, arr) => 
{
    console.log(item, index, arr);

//     js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// java 2 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// python 3 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
    
})



// step 5 array and uska ander objects
const myCoding = [
    {
        languageName: "Javascript",
        languageFileName: "js"
    },
    {
        languageName: "Java",
        languageFileName: "java"
    },
    {
        languageName: "Pyhton",
        languageFileName: "py"
    },
]

myCoding.forEach((item) => {
    // console.log(item.languageName);
// Op :-  
// Javascript
// Java
// Pyhton
})