const marvel_heros = ["thor","Ironman", "Spiderman"]

const Dc_heros = ["superman", "flash", "batman"]


 //marvel_heros.push(Dc_heros)  //[ 'thor', 'Ironman', 'Spiderman', [ 'superman', 'flash', 'batman' ] ]

// console.log(marvel_heros); // it provide an output of nested array. It takes array as an element.

// console.log(marvel_heros[3][1]); //..............

// const all_heros = marvel_heros.concat(Dc_heros)
// console.log(all_heros); // will print all in one array.

// use of spread operator
const all_heros = [...marvel_heros, ...Dc_heros]

// console.log(all_heros); // similar to concat method. for memorizing it drop a glass and spread.

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity);
//Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.

// flat(Infinity)--> (Infinity) depth — The maximum recursion depth


console.log(real_another_array);
// [
//    1, 2, 3, 4, 5,
//    6, 7, 6, 7, 4,
//    5
//  ]



// use during data scrapping, when we get data in other format like object etc... matter to change it into array.

console.log(Array.isArray("Armaan")); // will check it is an array or not
console.log(Array.from("Armaan"));
// Creates an array from an iterable object.

// @param iterable — An iterable object to convert to an array.

//[ 'A', 'r', 'm', 'a', 'a', 'n' ] Output.

console.log(Array.from({
    name: "Armaan"
})); //......................interesting CASE.
// will provide an empty array. if will not provide from it will create an array.

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));
//[ 100, 200, 300 ] output
// can use of in replace of from.

// methods --> isArray, from, of

