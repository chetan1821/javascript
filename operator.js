/**
    Operators in js.
    In programming, an operator is a symbol that represents an action or operation. 
    It usually works on one or more values (operands) to produce a result.
    Types of operator:
    Assignment operators
    Comparison operators
    Arithmetic operators
    Bitwise operators
    Logical operators
    BigInt operators
    String operators
    Conditional (ternary) operator
    Comma operator
    Unary operators
    Relational operators
 */

// Assignment Operators :
// An assignment operators assigns a value to its list operand based on the value of its right 
// right operand. (=);

const obj ={};
obj.x =3;
console.log(obj.x);
console.log(obj);

const key ="y";
obj[key] =5;
console.log(obj[key]);
console.log(obj);

const foo =["one","two","Three"];
console.table(foo);

// Comparison operators
    /**
        A comparison operator compares its operands and returns a logical value based on whether the comparison is true. 
        Equal (==)
        Not equal (!=)
        strict equal (===)
        strict not equal (!==)
        Greater than (>)
        Greater than or equal (>=)
        Less than (>)
        Less than or equal (>=)
        Note : =>is not a comparison operator but rather is the notation for Arrow function.

        */
let val=5;
let val2=55;
let str="chetan";
let str1="chetan";
console.log(val < val2);
console.log(str == str1);

// Arithmetic operator (+,-,*,/,%)

// BITWISE OPERATORS
/**
    bitwise AND :- a & b
    bitwise OR :- a || b
    bitwise XOR :- a ^ b
    bitwise NOT :- a ~ b
    Left Shift :- a << b
    right shift :- a >> b
    Zero-fill-right shift :- a >>> b
 */

