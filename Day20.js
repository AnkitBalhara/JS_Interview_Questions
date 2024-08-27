// Write a function to reverse a string without using any built-in method or library. The function should take a string as an input and return reversed string.

// EX : console.log(reverseString("Ram")); Output :-maR

const reverseString = (str) =>{
    let revStr = "";
    for (let i = str.length-1; i >= 0 ; i--) {
        revStr+=str[i];
    }
    return console.log(revStr);
}

reverseString("Ram")