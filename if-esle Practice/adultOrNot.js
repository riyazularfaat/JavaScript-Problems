// Create a program that takes an age as input and prints "Adult" if the age is 18 or above, otherwise prints "Minor".

const prompt = require("prompt-sync")();
const age = prompt("Enter your age: ");

function checkAdult(age) {
    if (age >= 18) {
        console.log("Adult");
    } else {
        console.log("Minor");
    }
}

checkAdult(age);