// reuseable

// function sayMyName(){
//     console.log("hellow Armaan")
// }

// sayMyName -  reference
//sayMyName() //execution

// function addTwoNumber(number1, number2)// parameter
// {
//     console.log(number1 + number2);
// }

function addTwoNumber(number1, number2)// parameter
{
    // let result = number1 + number2
    // return result
    return number1 + number2;
}

//addTwoNumber(3,4)//arrgument // if string "4" then it will assume both as string.

// parameters - definition of a function.
// arrgument - when we call a function is called arrgument.
// const result = addTwoNumber(3,4)
// console.log(result); // result will be undefined.
// console is console but return is different concept 

// after return function will not print.

// function loginUserMessage(username){
//     if(username === undefined){
//         console.log("please enter username");
//         return
//     }
//     return `${username} just logged in`;
// }


function loginUserMessage(username = "sam")// if condition for case when their is no user present in arrgument
// sam is default value of username.
{
    if(!username){
        console.log("please enter username");
        return
    }
    return `${username} just logged in`;
}
//  console.log(loginUserMessage());
//can aslo provide default value
// if values is not passed then undefined will output.

//............situation for ecomm websites 
// function calculateCartPrice(...num1){
//     return num1;
// }

function calculateCartPrice(val,val1,...num1)//[ 43, 302 ] val=30, val=23, num1=[ 43, 302 ].
{
    return num1;
}

//console.log(calculateCartPrice(30,23,43,302));//s3/functions.js
//[ 30, 23, 43 ]
 
// here values are picked is first = 30 not other value to pick other values of we will use Rest/spread operator "...num1".

// object.........................
const user ={
    username : "Armaan",
    price:199
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
    //check type script
}

handleObject(user);
handleObject({
    username:"Armaan singh",
    price:300
})
// any object as varibale to store any object but we are using here user as an object.

// Can aslo pass arrays in it.
const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]; 
}

//console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([200,100]));