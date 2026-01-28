// Primitive
// 7 types: String, Number, Boolearn, null, undefined, Symbol,
BigInt
const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

const bigNumber = 3456543576654356754n

// Reference (Non primitive)
// Array, Objects, Functions


const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
name: "hitesh",
age: 22,
} 
const myFunction = function() {
console.log("Hello world");
}

console.log(typeof score);
 // type of number is number
console.log(typeof scoreValue);
// type of float is also number
console.log(typeof outsideTemp);
// type of null is object
console.log(typeof isLoggedIn);
// type of boolean is boolean
console.log(typeof userEmail);
//type of undefined is undefined
console.log(typeof id);
// type of symbol is symbol
console.log(typeof anotherId);
// type of symbol is symbol
console.log(typeof bigNumber);
// type of bigint is bigint
console.log(typeof heros);
// type of array is  object
console.log(typeof myFunction);
// type of function is object/ function object