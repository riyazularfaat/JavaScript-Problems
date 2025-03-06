// Write a program that checks whether a person is eligible for a senior citizen discount(age 60 or above) and, if eligible, applies a 20 % discount to a given amount.

const prompt = require("prompt-sync")();

let age = prompt("Enter the age: ");
let amount = prompt("Enter the amount: ");
let discountedAmount;

function discount(age, amount) {
    if (age >= 60) {
        discountedAmount = amount - amount * 0.2;
        console.log(`Discounted amount = ${discountedAmount}`);
    } else {
        console.log(`You are not eligible for discount. \nAmount = ${amount}`);
    }
}

discount(age, amount);

