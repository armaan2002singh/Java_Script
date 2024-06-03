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
 console.log(loginUserMessage());
//can aslo provide default value
// if values is not passed then undefined will output.