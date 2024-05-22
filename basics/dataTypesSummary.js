// It is not required to define values.
// It is Dynamic Language
// how check dataType :- use typeof method.

const score = 100
const scorevalue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id === anotherId);

const bigNumber = 33333333332222211123n // BigInt value.
console.log(typeof bigNumber);
//Array
const heros = ["shaktiman", "naagraj","doga"]
console.log(heros);
//object
let myObj = {
    name:"Armaan",
    age:22
}
console.log(myObj);

//function as variable, can call it function object.
const myfunction = function(){
    console.log("hellow world");
}
myfunction();
// primitive data type
/*  7 types :- call by value
String
Number
Boolean
null
undefined
Symbol - used to make a value unique
BigInt - big values and scientific values
*/

// Reference (Non-Primitive datatype)
/*
Array
object
functions */