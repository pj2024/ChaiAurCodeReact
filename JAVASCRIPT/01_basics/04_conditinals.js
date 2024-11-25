// console.log("2" > 1); // true
// console.log("02" > 1); // true

console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true

// The reson is that an equality ceck == and comparisons > <>=<= work diffrently.
// Comparisons convert null to a number, treatin it as 0.
// that's why (3) null >= is tue and (1) null > 0 is false.


console.log(undefined == 0); // false
console.log(undefined > 0); // false
console.log(undefined < 0); // false

// === --> strict check

console.log("2" === 2); // false



