// ye humare dates hai or kuch iska format hai jo abhi hum discuss karenga

// Dates

let myDate = new Date()
// console.log(myDate); // 2024-08-30T07:50:33.029Z
// yahan sa huma ye mil rha hai

// console.log(myDate.toString()) // Fri Aug 30 2024 13:21:26 GMT+0530 (India Standard Time)
// in return

// console.log(myDate.toDateString()) // Fri Aug 30 2024

// console.log(myDate.toLocaleDateString()) // 30/8/2024

// console.log(myDate.toLocaleString()); // 30/8/2024, 1:24:10 pm


// ################## #####################
// how to pass our own my created date


// we have one more way that is timeStamp

let myTimeStamp = Date.now()
console.log(myTimeStamp);  // 1725005496823
// ye date ko millisecond mai ek number ma convert kar dega


// we have to convert the date in the form of millisecond
// console.log(myDate.getTime()); // it wil gives the current time into second


//  ######################### ################
// convert milisecond to second just divided by 1000 but the problem is its gives decimal values also

console.log(Math.floor(Date.now() / 1000)); // 1725005811


// ################## #################
// date ma sa agr month, day, ye aur kuch...

let newDate = new Date()
console.log(newDate.getMonth() + 1); // 7
console.log(newDate.getDate()); // 30







