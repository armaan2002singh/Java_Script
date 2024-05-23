const score = 400
//here  javascript define its type as a number.
//console.log(score);

const balance = new Number(100)
//here we dedicately defined it number(specially defined).
// methods are as compared to string.
//console.log(balance);

//console.log(balance.toString().length);
// will provide it length and it is converted into string.
//console.log(balance.toFixed(1));
// to avoid the big values like 100.9829848.


const otherNumber = 123.8986
// console.log(otherNumber.toPrecision(3));
// used to round over the values.

// const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));// output 10,00,000


// max value and min value 
// max safe integer




//..............................MATH............................

// console.log(Math); // values
console.log(Math.abs(-3)); // it is absolute value = 3.
console.log(Math.round(4.8));
//round off
console.log(Math.ceil(4.3));
console.log(Math.floor(4.9));
console.log(Math.min(2,4,5,4,3));
console.log(Math.max(2,4,3,3,4));

console.log(Math.random()); // 0 to 1 value but random values.
console.log(Math.random()*10+1); // value will be minimum 1


const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max - min + 1))+min)

