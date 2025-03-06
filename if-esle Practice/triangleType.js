// Create a program that checks whether a given triangle is equilateral, isosceles, or scalene based on its three sides.

const prompt = require("prompt-sync")();
let side1 = parseInt(prompt("Enter 1st side: "));
let side2 = parseInt(prompt("Enter 2nd side: "));
let side3 = parseInt(prompt("Enter 3rd side: "));

function checkTriangle(side1, side2, side3) {
    if (side1 == side2 && side1 == side3) {
        console.log('The triangle is an "Equilateral".');
    } else if ((side1 == side2 && side1 != side3) || (side1 != side2 && side2 == side3 )|| (side1 == side3 && side1 != side2)) {
        console.log('The triangle is an "Isosceles".');
    } else {
        console.log('The triangle is a "Scalene".');
    }
}

checkTriangle(side1, side2, side3);