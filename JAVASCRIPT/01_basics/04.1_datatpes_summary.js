// premetive data types
// 7 types : string, Number, Boolen, NULL, undefined, symbol, BigInt


// javascript is dynamically typed language

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId); // false

const bigInt = 32367846823648n

// Reference Type/Non premetive
// Arrays, Objects, Functions

const heros = ['shaktiman', 'naagraj', 'doga'];

let myObj = {
    name:'Prathamesh',
    age: 22
}

const myFun = function() {
    return 10;
}

console.log(myFun())

console.log(typeof outsideTemp); //object




// +++++++++++++++++++++++++++++++++++++++++++++++++++++ //

// Stack(Premetive Types)
// Heap(Non Premetive Types)

// +++++++++++++++++++++++++++++++++++++++++++++++++++++ //

let myYoutubeName = 'PrathameshJadhav'

let newYoutubeName = myYoutubeName
newYoutubeName = 'PJadhav'

console.log(myYoutubeName);
console.log(newYoutubeName);


let userOne = {
    email : 'user@google.com',
    upi : 'user@ybl'
}

let userTwo = userOne
userTwo.email = 'prathamesh@2024'

console.log(userOne);
console.log(userTwo);

