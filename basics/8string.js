// in Console = "hello" + "world"
// in console console.log("hellow") = hellow

const name = "Armaan"
const repoCount = 50

// console.log(name + repoCount+"value");  This syntax is outdated 

//modern syntax for string concatination can use methods easly.
console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Armaan-Singh-pc-aulakh'); //here string is object here.


//methods are provided in prototype(Proto).
// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(1));
// console.log(gameName.indexOf('r'));
console.log(gameName.substring(0,4));


const anotherString = gameName.slice(-12,4);
console.log(anotherString);


const newString = gameName.substring(-12,4);
console.log(newString);

const newString1 = " hitesh  ";
console.log(newString1);
console.log(newString1.trim()); // will remove spaces.

const url = "https://hello.com/hellow%20singh"

console.log(url.replace('%20', '_')
);

console.log(url.includes('hello'));

console.log(gameName.split('-')); //split based on - 