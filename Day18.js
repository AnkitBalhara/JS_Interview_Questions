// Write a function to check if a character is uppercase or lowercase.
// Constraints:
// The input char will be a single character.
// The character can be any printable ASCII character.
// You can assume that the input will be always in a string of length 1.

// Notes :
// Ensure that the function correctly identifies uppercase characters based on their ASCII values.
// Optimize the function to handle edges acses efficiently.

// Ex :
// console.log(isUpperCase('A'))    Output : true
// console.log(isLowerCase('b'))    Output : true

const isUpperCase = (char) => {
    // Method 1.
    // if(char.charCodeAt(0)>64 && char.charCodeAt(0)<91){
    //     console.log(true)
    // }else{
    //     console.log(false)
    // }

    // Method 2.
    return console.log(char===char.toUpperCase());
};
const isLowerCase = (char) => {
    if(char.charCodeAt(0)>96 && char.charCodeAt(0)<123){
        console.log(true)
    }else{
        console.log(false)
    }
};

isUpperCase('s')
isLowerCase('s')
isUpperCase('A')