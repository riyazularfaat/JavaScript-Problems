// Create a program that determines if a given year is a leap year. (A year is a leap year if it is divisible by 4 but not by 100 unless also divisible by 400.)

const prompt = require("prompt-sync")();

let year = prompt("Enter a year: ");

function checkLeapYear(year) {
    if (year%4 == 0 && year%100 !=0 || year%400 == 0) {
        console.log(`${year} is a leap year.`);
    } else {
        console.log(`${year} is not a leap year.`);
    }
}

checkLeapYear(year);