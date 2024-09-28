// Write a fumction "fizzbuzz" that takes two numbers "startNum" and "endNum" as input. The function should return an array containing numbers and specific strings based on the following rules:-

// * For each "i" the range lies from startNum to endNum (both inclusive).
// * If "i" is divisible by "3" and "5" then include "FizzBuzz" in result.
// * If "i"  is divisible by only "3" then include "Fizz" in the result.
// * If "i"  is divisible by only "5" then include "Buzz" in the result.
// * Otherwise, include "i" itself in the result.

// console.log(fizzBuzz(4,15)) || Output:-[4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz"]

const fizzBuzz = (startNum, endNum) => {
    let arr = [];
    for (let i = startNum; i <=endNum; i++) {
        if(i%3===0 && i%5===0){
            arr.push("FizzBuzz")
        }else if(i%3===0){
            arr.push("Fizz")
        }else if(i%5===0){
            arr.push("Buzz")
        }else{
            arr.push(i)
        }
    }
    return arr;
};
console.log(fizzBuzz(4,15))