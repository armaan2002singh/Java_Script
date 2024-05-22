//Two type of memories 
// Stack and Heap
/*Stack - Primitive 
We get the copy of declared variable.*/
/*Heap - Non-Primitive 
we get the reference of original value.
Changes we make in reference will also change in Original value.*/

let myYoutubename = "ArmaanSingh"
// let anotherName = myYoutubename
anotherName = "HelloArmaan"
//Here copy is provided Original is not changed

let userOne = {
    email :"user@gamil.com",
    upi:"user1000"
}

let userTwo = userOne ;
userTwo.email = "armaan@gmail.com";

console.log(userOne);
console.log(userTwo);
// here in heap memory original value is also changed.