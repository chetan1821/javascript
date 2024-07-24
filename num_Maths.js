// number define
const score = 400; //it is absolutely number 
console.log(score.toString().length); // we can easy to convert  number to string
console.log(typeof(score));// type of this variable is also string

const balance = new Number (100);//declare the number with object
console.log(balance);
//Number Function 
console.log(balance.toFixed(2));
const num = 23.899 //100.00
console.log(num.toPrecision(2)); //24

const hundreds =1000000
console.log(hundreds.toLocaleString('en-IN'));

//******************Math's**********************
console.log(Math); //Object [Math] {}
console.log(Math.abs(-45)); //45 [negitive to positive convert]
console.log(Math.round(8.4));// its consider the round value
console.log(Math.ceil(8.1));// its consider the top value .its return the[9]
console.log(Math.floor(2.9));// its consider the lowest value .its return the[2]
console.log(Math.max(10,20,30));//return 30
console.log(Math.min(10,2,30));//return 2
console.log(Math.sqrt(5));//2.23606797749979

console.log(Math.random()); //its return random value  this range is 0 to 1 [like 0.11 ,0.22]
console.log(Math.floor(Math.random()*10)+1); // 10.450233864378713

// Example of random value
const min =10
const max =20
console.log(Math.floor(Math.random() * (max-min+1)+min));