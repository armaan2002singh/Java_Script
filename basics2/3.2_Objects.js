//const tinderUser = new Object() // singleton object
//..............object one
const tinderUser = {
    //normal way to declare object.
}

tinderUser.id ="123abc"
tinderUser.name ="Sammy"
tinderUser.isLoggedIn = false
// console.log(tinderUser); // will give empty object

//......object two

const regularUser ={
    email:"some@gamil.com",
    fullname: {
        userfullname:{
            //nested
            firstname:"armaan",
            lastname:"singh"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname); //access to nested object.


//.....OPERATIONS FOR OBJECTS

const obj1 ={
    1:"a",
    2:"b"
}

const obj2 = {
    3:"a",
    4:"b"
}

const obj4 = {
    5:"a",
    6:"b"
}

//const obj3 = {obj1,obj2}
// console.log(obj3); //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

// const obj3 = Object.assign(obj1,obj2) //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' } output of this command.

//const obj3 = Object.assign({},obj1,obj2, obj4) // {} is optional parameter.
//Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object.

// {} that is target and sources are obj1 and obj2.


// assign - static method copies enumerbale own properties from one or more source objects to a target object.

const obj3 ={
    ...obj1,...obj2} //MUST USED

//console.log(obj3); 

const users = [{
    id: 1, email:"h@gamil.com"
},{
    id: 1, email:"h@gamil.com"
},{
    id: 1, email:"h@gamil.com"
},{
    id: 1, email:"h@gamil.com"
}]

// console.log( users[1].email); // to access array object  output - h@gamil.com
// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); 
//Returns keys the names of the enumerable string properties and methods of an object. output - [ 'id', 'name', 'isLoggedIn' ]

// console.log(Object.values(tinderUser)); // values

console.log(Object.entries(tinderUser)); // output - [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]
//data in arrays of keys and values

console.log(tinderUser.hasOwnProperty('isLoggedIn')); // true

console.log(tinderUser.hasOwnProperty('isLogged')); // false

// we can check more methods in prototype of Objects.