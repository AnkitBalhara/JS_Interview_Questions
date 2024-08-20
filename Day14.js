// Write a function isPowerTwo that takes an integer as an input and return true if number is power of two else false.
// EX : isPowerTwo(8) Output : true
// EX : isPowerTwo(7) Output : false.

// Notes :-
// *Only Postive integer are allowed.
// *Zero and negative integers are not consider.

// const isPowerTwo = (num) =>{
//     for (let i = 0; i <= 10; i++) {
//         let numPower = Math.pow(2,i);
//         if(num==numPower){
//             return console.log(true)
//         }
//     }
//     return console.log(false)
// }

// Best method to return any true or false in the situations when we have to return something either true or false...
const isPowerTwo = (num) => {
  let answer = false;
  for (let i = 0; i <= 10; i++) {
    if (num == Math.pow(2, i)) {
      answer = true;
    }
  }
  return console.log(answer);
};

isPowerTwo(3);
isPowerTwo(8);
isPowerTwo(1024);
