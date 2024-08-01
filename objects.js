//object literals

const mysym = Symbol("key1")
const jsUser = {
    name : "chetan", //name is a key and "chetan" is value
    age  : 18,
    location :"surat",
    email : "cp789@gmail.com" ,
    [mysym] :"my symbol"
}
console.log(jsUser.name); //first way to access the object
console.log(jsUser["email"]); //this is proper way to access the object variable
//console.log(typeof jsUser.mysym); //inner value is symbol but datatype is string not a symbol
console.log(jsUser[mysym]); //[Symbol(key1)]: 'my symbol'
//update object 
jsUser.age=19
console.log(jsUser["age"]);
console.log(jsUser);
//how to freeze object
//Object.freeze(jsUser) //after freeze the object we can not  change the any values
// jsUser.email="chetan123@gmail.com"
// console.log(jsUser["email"]);//cp789@gmail.com {"NOt change"}

//creating Function in object
jsUser.greeting = function(){
    console.log("Hello js user");
}
console.log(jsUser.greeting());
jsUser.greetingTwo = function(){
    console.log(`Hello Js user , ${this.name} \n wel-come to this side`);
}
console.log(jsUser.greetingTwo());


