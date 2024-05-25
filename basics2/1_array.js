// Array
const myArr = [0,1,2,3,4,5] // all are elements can be mix elements
// javascript array are resizable 
// can not be access using arbitary strings as indexes.
console.log(myArr[0]);
// console.log(myArr);
// zero based indexing
//makes shallow copies. (is a copy share the same rederence point.)

// typesof copies 
// 1. Shallow copy - of an object is a copy whose properties share the same reference.

//2. Deep copy - property donnot share the same reference.

const myheros = ["batmen","superman","antman"]

const myArr2 = new Array(1, 2, 3, 4) // here it automatically provide square brackets.


// console 
// const numbers = [1,2,3,4]
// prototype methods access (.length)

//......................METHODS

// myArr.push(6) // to add values in arrays at last position.
// myArr.push(7)
// myArr.pop() // remove last element out of array.
// myArr.unshift(10) // it add the value in front  of all elements.If we have Million values, then it will be time consuming method because it shifted all value to next index.
// myArr.shift() //it remove value from front.

// console.log(myArr.includes(3)); // questinary method used to find presence of element. output in boolean type. 
// console.log(myArr.indexOf(3)); // index of element.
// console.log(myArr);

// const newArr = myArr.join("_")
//(method) Array<number>.join(separator?: string | undefined): string
// Adds all the elements of an array into a string, separated by the specified separator string.
// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

//.............SLICE, UNSLICE

console.log("A", myArr);
// 

const myn1 = myArr.slice(1,3)

console.log("B",myArr);
// console.log(myn1);

const myn2 = myArr.splice(1,3)
// Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

//@param start — The zero-based location in the array from which to start removing elements.

// @param deleteCount — The number of elements to remove.


//@returns — An array containing the elements that were deleted.

console.log(myn2);
console.log("C",myArr);

//Diff btw Splice in Slice
//

