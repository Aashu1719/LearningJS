// For

for (let i = 0; i <= 10; i++) {

    // hala ki huma is variable ki koi jarurrat nhi hai filhal to but hum phir bhi isa use kar rha hain
    const element = i;
    // console.log(i); 
    // OP :- 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
        
}


// ex :- 2 if else condition inside a loop
for (let j = 0; j<=10; j++) {
    const element = j;
    if (element == 5) {
        // console.log("Now its reach on 5");        
    }

    // console.log(element); 
    
}



// ex :- 3 loop inside loop 

for (let i = 0; i <= 10; i++) {
    const element = i;
    // console.log(`Outer loop value: ${i}`); 

    for (let j = 0; j <= 10; j++) {
        const element = j;
        // console.log(i + "*" + j + "=" + i*j); 
    }

    
}



// Ex :- 4 array inside loop
let myArray = ["flash", "batman", "superman"]
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
    
}


// vreak and continue

// Ex :- 5 for break
for (let index = 0; index <= 20; index++) {

    if (index==5) {
        console.log(`Detected 5`);
        break;
    }

    console.log(`Value of i is ${index}`);
}

// Ex :- 5 for continue
for (let index = 0; index <= 20; index++) {

    if (index==5) {
        console.log(`Detected 5`);
        continue;
    }

    console.log(`Value of i is ${index}`);
}