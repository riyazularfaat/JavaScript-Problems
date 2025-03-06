// Write a program that checks if a number is positive, negative, or zero.

function checkNum(num) {
    if (num == 0) {
        console.log(`The number ${num} is a zero.`);
    } else if (num > 0) {
        console.log(`The number ${num} is a positive number.`);
    } else {
        console.log(`The number ${num} is a neative number.`);
    }
}

checkNum(12);
checkNum(-12);
checkNum(0);