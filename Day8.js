// Write a function that takes a number as a input and returns its factorial.

const factorialFun = (num) =>{
    if(num<0) return "Enter Positive Integer"
    let fact = 1;
    for (let i = num; i >1; i--) {
        fact = fact * i;
    }
    return fact;
}

console.log(factorialFun(1))
console.log(factorialFun(0))
console.log(factorialFun(-9))