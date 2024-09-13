function one(){
    const userName = "chetan"
    function two(){
        const terminal ="visual studio"
        //console.log(userName);
        
    }
    //console.log(terminal); we can not access the this variable out of two function
    
    two()
}
one()

if (true) {
    const username = "Nikhil"
    if (username === "Nikhil") {
        const terminal1 = " Android"
        console.log(username + terminal1);
    }
}
// Function Declaration vs. Function Expression:
//A function declaration is when you define a function using the function keyword followed by the name of the function.
function oneFun(){
    console.log("this Function one" );
}
oneFun()


//A function expression is when you define a function and assign it to a variable.

const twoFun = function() {
    console.log("this Function two" );
}
twoFun()
