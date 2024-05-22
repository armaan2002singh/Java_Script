// // let score = "33" //string
// // let score = "33abc" // Nan with this after conversion.
// // let score = null // will provide you 0

// // let score = undefined // use of undefined = output will be Nan again

// // let score = true // boolean type and result will be = 1,0.

// let score = "Armaan" // string = Nan

// console.log(typeof score);
// console.log(typeof (score));

// let valueInNumber = Number(score); //conversion operation is used here. Here score is initialized to valueInNumber as string to number.
// console.log(typeof valueInNumber); // checking the datatype of variable changed.
// // console.log(valueInNumber); it is used to test string conversion in number by adding abc with 33 output is Nan = Not a number.

// console.log(valueInNumber);



//.............NOTES
//"33" => 33
//"33abc" => Nan
// true => 1, false => 0

// let isLoggedIn = 1 //ture
// let isLoggedIn = "" //false
let isLoggedIn = "Armaan" // because it has something.

let booleanIsLoggedIn = Boolean(isLoggedIn)

console.log(booleanIsLoggedIn);

//....NOTES
// 1=>true,0=>false
//""=> false
//"Armaan"=>true

let someNumber = 33

let stringNumber = String(someNumber);
console.log(stringNumber); // converion to string 33
console.log(typeof stringNumber);