// Write a program that takes two numbers and an operator(+, -, *, /) as input and performs the corresponding arithmetic operation.

const prompt = require("prompt-sync")();

let num1 = parseInt(prompt("Enter 1st number: "));
let num2 = parseInt(prompt("Enter 2nd number: "));
let operator = prompt("Enter an operator(+, -, *, /, ^): ");

function arithmeticOperation(num1, num2, operator) {
    if (operator == "+") {
        return num1 + num2;
    }else if (operator == "-") {
        return num1 - num2;
    }else if (operator == "*") {
        return num1 * num2;
    }else if (operator == "/") {
        return num1 / num2;
    }else if (operator == "^") {
        return num1 ** num2;
    }
}

let result = arithmeticOperation(num1, num2, operator);
console.log(result);