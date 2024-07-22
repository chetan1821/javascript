// variable in js
const accountId=644;
let accountEmail="chetan123@gmail.com";
var accountPassword="123456";
accountCity="surat";
let accountstate;
// accountId=1;  not allowed because account id is const..

console.log(accountId);
// console.log(accountEmail);
// console.log(accountPassword);
// console.log(accountCity);
/**
    prefer not to use var
    because of issue in block scope and function scope

 */
// print in the table form 
 console.table([accountId,accountEmail,accountPassword,accountCity,accountstate]);


