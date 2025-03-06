// Write a program that takes three numbers as input and prints the largest one.

const prompt = require("prompt-sync")();

let num1 = prompt("Enter 1st number: ");
let num2 = prompt("Enter 2nd number: ");
let num3 = prompt("Enter 3rd number: ");

function findLargest(num1, num2, num3) {
    let largest = num1;
    if (num2 > largest) {
        largest = num2;
    } else if (num3 > largest) {
        largest = num3; 
    } 
    return largest;
}
let largest = findLargest(num1, num2, num3);
console.log(`The largest number is: ${largest}`);
