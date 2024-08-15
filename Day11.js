// Write a function sumOfDigits takes a number as input and returns the sum of its digits.
// Points:-
// *The input numberr will always be a positive integer.
// *The input can contain a multiple digits.
// *The output should be the sum of all the digits in the input number.

const sumOfDigits = (num) => {
    let sum = 0;
    // num = ""+num
    num = String(num)
    for (let i = 0; i < num.length; i++) {
        sum +=Number(num[i])
    }
    return sum
};

console.log(sumOfDigits(123))
