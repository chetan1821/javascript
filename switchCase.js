const month = "March"
switch (month) {
    case "jan":
        console.log("january");
        break;
    case "feb":
        console.log("Feb");
        break;
    case "March":
        console.log("March");
        break;
    default:
        console.log("Invalid");
        break;
}
// falsy values
// false , 0,-0, BigInt 0n ,"",null,undefined,NaN

// truthy values
// "0" ,'false' , " " , [], {} , function(){}

// check Array is empty or not
// const userEmail ="cp72@gamil.com"
const userEmail = [
    "chetan","patil"
]
const emptyobj = {name : "chetan", surname : "patil"}
// Equal to == (checks only values)
// strict equal (Checks both values and type) ===
if (userEmail.length === 0) {
    console.log("Array is empty");
}
else {
    console.log(userEmail);
    
}

if (Object.keys(emptyobj).length === 0) {
    console.log("Object is empty");
}
else console.log(emptyobj);


// Nullish Coalescing Operator (??) : null undefined 
// let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
// val1 = null ?? 10 ?? 20
// console.log(val1);


// Terniary Operator
// sy : Condition ? true :false
const iceTeaprice = 100
iceTeaprice <= 80 ? console.log("Less than 80") : console.log("More than 80");

 



