// Develop a program that takes a character as input and checks if it is a vowel(a, e, i, o, u) or not.

const prompt = require("prompt-sync")();
const char = prompt("Enter an a character: ");

function checkVowel(char) {
    if (char.toLowerCase() == "a" || char.toLowerCase() == "e" || char.toLowerCase() == "i" || char.toLowerCase() == "o" || char.toLowerCase() == "u") {
        console.log(`"${char}" is a vowel.`);
    } else {
        console.log(`"${char}" is not a vowel.`);
    }
}

checkVowel(char);