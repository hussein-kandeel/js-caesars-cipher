#!/usr/bin/env node
// The line above just for compiling the file to be standalone executable

function rot13(str) {
    const alpha = "abcdefghijklmnopqrstuvwxyz";
    // Get the length of the string
    let strLen = str.length;
    // Make placeholder for the result
    let plainText = "";
    // Make a Regular Expression pattern
    const REGEX = /[a-z]/i;
    // Loop for every character in str
    for (let i = 0; i < strLen; i++) {
        if (REGEX.test(str[i])) {
            for (let j = 0; j < 26; j++) {
                if (str[i].toUpperCase() == alpha[j].toUpperCase()) {
                    plainText += alpha[((j + 26) - 13) % 26].toUpperCase();
                    break;
                }
            }
        } else {
            plainText += str[i];
        }
    }
    return plainText;
}


// TESTS
console.log(`rot13("SERR PBQR PNZC") should decode to the string FREE CODE CAMP`);
console.log(`Returning: ${rot13("SERR PBQR PNZC")}`);
console.log();
console.log(`rot13("SERR CVMMN!") should decode to the string FREE PIZZA!`);
console.log(`Returning: ${rot13("SERR CVMMN!")}`);
console.log();
console.log(`rot13("SERR YBIR?") should decode to the string FREE LOVE?`);
console.log(`Returning: ${rot13("SERR YBIR?")}`);
console.log();
console.log(`rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.") should decode to the string THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.`);
console.log(`Returning: ${rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")}`);
