// Create a program that checks whether a number is divisible by 5 and 11 or not.

const prompt = require("prompt-sync")();
let num = prompt("Enter a number: ");

function checkDivisible(num) {
    if (num % 5 == 0 && num % 11 == 0) {
        console.log(`${num} is a divisor of 5 and 11.`);
    } else {
        console.log("Not a divisor!");
    }
}

checkDivisible(num);