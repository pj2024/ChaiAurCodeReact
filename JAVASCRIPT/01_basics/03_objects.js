// singleton


// Object.create

const mySym = Symbol('Key1')
// object literals
const user = {
    name : 'Prathamesh',
    'Full name' : 'Prathamesh Jadhav',
    age : 21,
    [mySym]: 'Mykey1',
    location : 'Hingoli',
    email : 'prathamesh@goole.com',
    isLoggedIn : false,
    lastLoginDays : ['Monday', 'Saturday']
} 

// console.log(user.email);
// console.log(user['name']);


// console.log(user["Full name"]);
// console.log(typeof user.mySym); // String

// console.log(user[mySym]);

// No change in object 
// Object.freeze(user)
user.email = 'hitesh@chatgpt.com'
// console.log(user);


user.greeting = function() {
    console.log('Hello JS users!');
}
user.greetingTwo = function() {
    console.log(`Hello ${this.name}`);
}

console.log(user.greeting);
console.log(user.greeting());


console.log(user.greetingTwo);
console.log(user.greetingTwo());


