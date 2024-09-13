// FUNCTION
//A JavaScript function is a block of code designed to perform a particular task.

//A JavaScript function is executed when "something" invokes it (calls it).

// function myName (){
//     console.log("hello chetan !");

// }
// myName()

function AirthmaticOperation(a, b) { //a,b =>this is parameter
    let result =[]; 

    result = a + b
    console.log(result);
    

    result = a - b
    console.log(result);
   

    result = a * b
    console.log(result);
    

    result = a / b
    console.log(result);
    

    result = a % b
    console.log(result);
    
    console.log(typeof result);
    
    return result
    

}
const result = AirthmaticOperation(10, 20) //10,20 => this is argument
console.log("result :-",result);




