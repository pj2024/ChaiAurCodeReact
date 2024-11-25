// ************** Premetive ************** 

// 7 type : String, Number, Boolean, null, undefined, Symbol, BigInt


// JavaScript is dynamically typed, meaning that type checking happens at runtime, not compile time

// In dynamically typed languages, variables can hold different data types, and you don't need to explicitly declare the data type of a variable. For example, a variable named x can hold a number, a string, or an array at different points in time.

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outSideTemp = null;
let userEmail;


const id =  Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId); // false


const bigNum = 2141243452345233424445n





// ************** Reference (Non Premetive) *******************

// Array, Objects, Functions



const heros = ["shaktiman", "naagraj", "doga"]

let myObj = {
    name: "prathmesh",
    age: 22,
}

const myFun = function () {
    console.log("Hello world");
}



// console.log(typeof outSideTemp); // null --> object 
// console.log(typeof NaN); // NaN --> number
// console.log(typeof heros); // array --> object
// console.log(typeof anotherId); // symbol

