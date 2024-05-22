// console.log(2 > 1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2!=1);
// true false

// the reason is that an equality check == and comparision > <>= <= work differently. Comparision convert null to a number. treating it as 0. that's why (3) is true and (1) null >0is false.

//compare same datatypes
// console.log("2" >1);
// console.log("02">2);

// console.log(null >0);
// console.log(null==0);
// console.log(null >= 0);

// console.log(undefined ==0);
// console.log(undefined >0);
// console.log(undefined < 0);

// === strict check it also check values as well as datatype

console.log(undefined === 0);
console.log("2" ===0);