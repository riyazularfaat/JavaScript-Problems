// Write a program that takes a student's marks as input and prints the corresponding grade:
// 90 - 100: "A"
// 80 - 89: "B"
// 70 - 79: "C"
// 60 - 69: "D"
// Below 60: "F"

const prompt = require("prompt-sync")();

let mark = prompt("Enter your mark(between 0 to 100): ");

function grading(mark) {
    if (mark >= 90) {
        console.log("Excellent! Your grade is 'A'.");
    }else if (mark >= 80) {
        console.log("Not bad! Your grade is 'B'.");
    }else if (mark >= 70) {
        console.log("Your grade is 'C'. You have to work a bit harder.");
    }else if (mark >= 60) {
        console.log("Your grade is 'D'. You have to work Really harder.");
    }else{
        console.log("My bad!Your grade is 'F'.");
    }
}

grading(mark);