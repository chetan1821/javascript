// Data types in js
let fname ="chetan";
console.log(fname);
let roll_no = 644;
console.log(roll_no);
let address;
let logIn =true; //this data type is boolean

// primitive data types
/**
    number => 2 power 53
    bigint
    string => " "
    boolean =>true/false
    null => empty value or standalone value
    undefined => its not define value only define the variable
    symbol =>unique

    
 */

console.log(typeof(fname));//string
console.log(typeof(roll_no));//number
console.log(typeof(address));//undefined 
console.log(typeof(null));//object
console.log(typeof(logIn));//Boolean

// Symbol 
    const id =Symbol('123');
    const anotheId = Symbol('123');
    console.log(id == anotheId); //false

// non primitive data types (Reference types )
// objects , Array , Function 
    // Array Declaration
    let arryName =["chetan","nikhil","jagdish","ravi"]
    console.log(arryName);
    // Function Declaration
    let myfun = function(){
        console.log("Hello chetan");
    } 
    myfun()
    // Objects
    let objects ={
        fname : "chetan",
        lname : "Patil",
        sId :644   
    }
    console.log(objects.fname,objects.lname,objects.sId);
    