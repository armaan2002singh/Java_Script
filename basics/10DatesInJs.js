//A single moment in time in a plateform independent format. Date objects encapsulate an integral number that represent milliseconds since the midnight at the beginning of JAN 1, 1970, UTC.
// tc39 temporal API 

//DATES

let myDate = new Date()
// console.log(myDate.toString()); // data in string many other methods 
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0 ,23) // yyyy/mm/dd
// let myCreatedDate =  new Date(2021, 0, 23, 5, 3); // yyyy/mm/dd/h/m/sec
// let myCreatedDate = new Date("2023-01-14"); // to specify ty format, Now here in dd/mm/yy need to start with 1 as starting month
// let myCreatedDate = new Date("03-14-2014"); // formate specially followed in india.
// console.log(myCreatedDate.toString());

// time stemp use 
// let myTimeStamp = Date.now() // will provide milli second values.
let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getDay());// day
// console.log(newDate.getMonth()+1); //month
// console.log(newDate.getFullYear()); // yyyy
// console.log(newDate.getMinutes()); //minutes


// use of string interpolation
console.log(`On ${newDate.getDate()}, we are going to mohali at ${newDate.getTimezoneOffset()}`);

newDate.toLocaleString('default',{
    weekday: "long"  
})//can customize more to local string.
