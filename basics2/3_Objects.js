// singleton -Created by constructor
// Object.create


// please access values by dots and specific cases use Square notation.
const mySym = Symbol("key1")
// object Literals
const JsUser = {
    name: "Armaan",
    "fullname":"armaan singh",
    age : 22,
    // mySym : "mykey!", it not correct way 
    location : "punjab",
    [mySym]: "myKey1",
    email : "armaanSingh@gmail.com",
    isLoggedIn: false,
    lastLoginDays : ["monday", "saturday"]

}
//keys and values are used in objects.
console.log(JsUser.email); //normally used

console.log(JsUser["email"]) // 2nd way
console.log(JsUser["fullname"]); //sqaure notation line number 7.

console.log(JsUser.mySym); // will be declared as string.
console.log(JsUser[mySym]);
JsUser.email = "armaan@gmail.com" // overwriting
// Object.freeze(JsUser);// will not update values.
console.log(JsUser);

// function in object 
JsUser.greeting = function(){
    console.log("hello JsUser...");
}

JsUser.greetingTwo = function(){
    console.log(`hello JsUser...${this.name
    }`);
}

console.log(JsUser.greeting());
console.log(JsUser.greeting); // function return back function not executed but reference
console.log(JsUser.greetingTwo());

