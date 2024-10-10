const accountId = 123456
let accountEmail = "aashu@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"

// accountId = 2;  not allowed
accountEmail = "abhi@gmailcom"
accountPassword = "3457"
accountCity = "Delhi"

// undefined variable
let accountdState;

console.log(accountId);

// with this we can print all our variables
console.table([accountId, accountEmail, accountPassword, accountCity, accountdState])
/* 
Op :-  
 0       │ 123456          │
│ 1       │ 'abhi@gmailcom' │
│ 2       │ '3457'          │
│ 3       │ 'Delhi'         │
│ 4       │ undefined 
*/

