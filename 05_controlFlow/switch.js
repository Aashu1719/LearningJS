// switch case hum tab use karta hai jab humare pass multiple cases ho; 
// isma basically key and cases hota hai, key mai hum wo pass karta hain jis chij ko  huma check karna hot hai. cases mai hum basically apni values ko check karta hai. its like tala aur chabi, tala humara key hai aur cases humare chabhi hai jiss chabhi sa humara tala khool jaye wahin huma rukna hota hai

// realLife ex :- huma pta karna hai ki jo value humna di hai wo kis mahina ki hai

const month = 3; // isma huma dekhna hai ki ye konsa mahina hai

switch (month) // becaus eyahi huma check karna tha
 {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("Febraray");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;

    default:
        console.log("Default case match");
        break;
}
// OP :- March

// Note :- case ka ander jo datatype huma match karna hai jo humna dala hai at the time of declration 
// wahi value basically hum pass karta hai cases mai 
// ex :- month = "jan", so hum cases ma bhi string hi pass karta like case1 = "jan", case2 = "feburary", etc


