// singleton object
// const tinderUser = new Object();

// non-singleton object
const tinderUser = {};
// console.log(tinderUser); // {}

// give some values on this object
tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser); // { id: '123abc', name: 'Sammy', isLoggedIn: false }



// hum is example mai object ki nesting karka dekhta hain
// const regularUser = 
// {
//     email : "sam@gmail.com",

//     // declare anotherObject into object
//     fullName : 
//     {
//         // again declare object into object and object
//         userFullName :
//         {
//             firstName : "Aashutosh", 
//             lastName : "Shri"
//         }
//     }
    
// }

// console.log(regularUser.fullName); // { userFullName: { firstName: 'Aashutosh', lastName: 'Shri' } }

// console.log(regularUser.fullName.userFullName.firstName); // Aashutosh



// ########################### ################################ ############################# #######
// Is example mai hum dekhenga kaise object ko merge kar sakta hai
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// 1. assign() 
// const obj3 = Object.assign( {}, obj1, obj2); // giving a blank array so our merged array isma fit ho jaye ye optional hai but generally huma isa le lena chaiye.

// 2. spread operator :- 90% case ma hum isa hi use karna wala hai
// const obj3 = {...obj1, ...obj2};
// console.log(obj3); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }


// 3. ek syntax aur hum use karenga jab database sa value ayegi
const users = [

    // array ka ander bahit sare objects hai humare pass
    {
        id: 1, 
        email : "Aashu@gmail.com"
    }, 

    {
        id: 2,
        emial : "abhi@gmail.com"
    }, 

    {
        id : 3,
        email : "ram@gmail.com"
    },
]

// console.log(users[0]); // { id: 1, email: 'Aashu@gmail.com' }


// ################## #################### ##############
// huma age kisi object ka sirf key, ya sirf value nikalni hai as a form of object

// 1. keys :- 
// console.log(Object.keys(tinderUser)); // [ 'id', 'name', 'isLoggedIn' ]

// 2. values :- 
// console.log(Object.values(tinderUser)); // [ '123abc', 'Sammy', false ]


// 3. entreies () :- Issa huma array ka ander array milta hai 
// console.log(Object.entries(tinderUser)); // [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]


// 4. hasOwnProperty :- hum object sa puch sakta hai ki kya apka pass ye property hai
// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // true




// ######################### ############################# ################################
// Destructuring of objects {} 

const course = {

    courseName : "Js in Hindi", 
    price : "999",
    courseInstructor: "hitesh"
};
 
// console.log(course.courseInstructor); // hitesh :- but is tarika sa agr suppose karo ki huma 3 or 4 baar courseInstructor ko print krana hai to huma bar - bar likhna padega course.courseInstructor jo ki thoda thik nahi hai to hum isa dusra tarika sa bhi likh sakta hain. 


// And :- aur wo tarika ye hai 
// const {courseInstructor} = course // yahan hum isa declare kar rha hain
// now ab hum isa direct print kar sakta hai
// console.log(courseInstructor); // hitesh (agr hum isa bina declare kare likhange to yahan huma error a jayega)


// ek aur tarika hai jisma hum nam ko chota kar sakta hain
const {courseInstructor: instructor} = course
console.log(instructor); // hitesh






 



