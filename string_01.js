// STRING CONCEPT
let fname = "chetan"
let lname = "   patil   "
console.log(fname + lname); //chetan patil
console.log(`My first name is ${fname} and my last name is ${lname}`);
// My first name is chetan and my last name is  patil

// we can declare string in the another way (Using the object)
let  collageName =new String ("Bhagwan Mahavir University");
console.log(collageName);//print the string
console.log(collageName.toUpperCase()); //convert into uppercase 
console.log(collageName.charAt(3));//find 3 number index char
console.log(collageName.indexOf('t'));//return the char index :- o/p =24
console.log(collageName.substring(3,24)); // it's return the cut string like cut the index and 3 before and 24 after index 
// o/p :gwan Mahavir Universi
console.log(collageName.slice(4,24)); //  o/p :wan Mahavir Universi
console.log(lname.trim()); //it's remove the whitespace
console.log(collageName.replace('Bhagwan','chetan'));//chetan Mahavir University [replace the bhagwan to chetan]
console.log(collageName.includes('Bhagwan'));//return True .
// split() 
// The split() method of String values takes a pattern and divides this string into an ordered list of substrings
//  by searching for the pattern, puts these substrings into an array, and returns the array.
const str = 'The quick brown fox jumps over the lazy dog.';
const words = str.split(' ');
console.log(words[3]); 

const chars = str.split('');
console.log(chars[8]);

const strcopy = str.split();
console.log(strcopy);



