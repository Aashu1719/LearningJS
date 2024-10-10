// Step 1 :- benefits of iife ye hai ki hum chahte hain ki jo bhi humara function hia wo turant execute ho, ex :- database coonection humare project ma, and the second benefit is ki hum nhai chate ki global scope mai jo hai wo humare function ko disturb kare uska liya hum kya karenga apna hi ek scope define kar denga. 

// step 2 :- fullform of IIFE :- Immediately Invoked Function Expression (IIFE)

// step 3 :- iife ko declare karna ka liya huma function ka aage parenthsis likhna hota hai and last mai ek paranthesis usa execute karna ka liya likhna hota hai. 
// like :- ()()

// ex :- of step 3
( 
function chai() 
{
    console.log(`DB COnnected`); // DB COnnected
    
}
)
// thats for execution
();


// step 4 :- jo bhi humara iife function hai agr hum usma ; (semicolon nhi likhta to wo create karega problem kyunki usa kabhi pta nhi chalega ki uska scope kahna tak hai aur usa kahan end karen ) 
// ex :- of point 4

// (
//     function notUsingSecilcolon() {
//         console.log(`DB connected 2`);
        
//     }
// )
// ()
// OP :- yahan huma mil gya ek error. 


// step 5 :- using semicolon and create a arrow function

( () => {
    console.log(`DB connected 2`);
    
})
() 
// OP :- DB connected 2

// step 6 :- named iife and unnamed iife jo step 4 hai wo ek named iife hai kyunki usma humna name use kiya hai, but jo step 5 wo ek unnmaed iifi kunki wahan koi named use nhi hua hai. 