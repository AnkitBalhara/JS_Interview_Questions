// Write a function to validate credit card numbers using Luhn Algorithm.

// Write a function name validateCreditCard that takes a credit card number as a string.
// The function should return true if the number is valid according  to the Luhn algorithm else return false.
// Ensure the function can handle numbers as strings, which may include space or dashes.

// ********* Luhn Algorithm Steps:---*******
// Start with the digit of number. EX:- if validating the number 1234567890.
// *Reverse the digit:-
// Reverse the digit of the number. Ex:- it bacomes 0987654321
// *Double every second digit :-
// Starting from the first digit, double every second digit. Ex:-1,2*2,3,4*4,5,6*2.....
// *Which translate to :- 1,4,3,8,5,12,7,16,9,0
// *Subtract 9 from numbers those are higher from 9.
// *If doubling the number results in number greater than 9,subtract  9 from it.
// *Now series is :- 1,4,3,8,5,3,7,7,9,0
// *Sum all the digits.
// *Sum = 1+4+3+8+5+3+7+7+9+0 = 47
// *Check Module 10.
// *If the sum module 10 is 0 , then the number is valid according to luhn formula
// * 47%10=7, which is not 0, so 1234567890 is not a valid number.

// *********************************

// validateCreditCard("4539 1488 0343 6467") || Output:-true
// validateCreditCard("8273 1232 7352 0569") || Output:-false

const validateCreditCard = (str) => {
    // Both Methods are same but in this below code we are just shorting the lines of code
    let arr = [];
    str = str.trim().replaceAll(" ", "").split("").reverse().forEach((num, index) => {
      if (index % 2 != 0) num = num * 2;
      arr.push(num);
    });
    
    arr = arr.map((element) => {
      if (element > 9) {
        element = element - 9;
      }
      return Number(element);
    }).reduce((preValue, currValue) => preValue + currValue, 0);
  
    return arr % 10 == 0 ? true : false;
  


  // Both Methods are same .......
  //   str = str.trim().replaceAll(" ", "").split("").reverse();
  //   let arr = [];
  //   str.forEach((num, index) => {
  //     if (index % 2 != 0) {
  //       num = num * 2;
  //     }
  //     arr.push(num);
  //   });
  //   arr = arr.map((element) => {
  //     if (element > 9) {
  //       element = element - 9;
  //     }
  //     return Number(element);
  //   });
  //   arr = arr.reduce((preValue, currValue) => preValue + currValue, 0);
  //   return arr % 10 == 0 ? true : false;
};
console.log(validateCreditCard("4539 1488 0343 6467"));
console.log(validateCreditCard("8273 1232 7352 0569"));
