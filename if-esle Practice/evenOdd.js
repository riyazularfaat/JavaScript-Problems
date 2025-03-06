// Write a program that checks whether a given number is even or odd.
const prompt = require("prompt-sync")();
const num = prompt("Enter a number: ");
function checkEven(num) {
    if (num % 2 == 0) {
        console.log("Even");
    } else {
        console.log("Odd");
    }
}

checkEven(num);
