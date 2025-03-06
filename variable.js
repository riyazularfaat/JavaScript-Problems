console.log("Before: ")
let x = 45 // let is a block scope variable. It can be re-assigned, but not re-declared.
var y = 56 // var is a function scope variable. It can be re-assigned and re-declared.
let z = x + y
console.log(y)
console.log(x)
console.log(z)
console.log(`The total of ${x} and ${y} is ${z}.`)

console.log("\nAfter: ")
x = 23
y = 34
z = x + y
console.log(y)
console.log(x)
console.log(z)
console.log(`The total of ${x} and ${y} is ${z}.`)

// let x = 45 // SyntaxError: Identifier 'x' has already been declared
var y = 56
z = x + y
console.log(y)
console.log(x)
console.log(z)
console.log(`The total of ${x} and ${y} is ${z}.`)

const a = 45 // const is a block scope variable. It can't be re-assigned and re-declared.
// a = 56 // TypeError: Assignment to constant variable.
console.log(a)