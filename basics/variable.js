const accountId = 144552 //constant not changed

let accountEmail = "hello@gamil.com" //can changed

var accountPassword = "12345" //old way to declare variables and have some limitations.
/* prefer not use to var 
because issue in block scope and Functional scope. */

accountCity = "Punjab" // without scope default.

let accountState  // it declare variable on global scope and will throw error on Strict-Mode.It is not a good approach.


//accountId = 2 not changed

//variables are changed here below
accountEmail = "abc@gamil.com"
accountPassword = "10"
accountCity = "Himachal"


console.log(accountId);
//used to print single value.
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
//table is used to print multiple values in one execution.