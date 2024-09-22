// Write a function calculateSimpleInterest that calculates that calculates a simple interest given the principal, amount, rate of interest per annum and time in years.

// console.log(calculateSimpleInterest(1000,5,3)) || Output:- 150

const calculateSimpleInterest = (principal, rate, time) => {
  return (principal * rate * time) / 100;
};

console.log(calculateSimpleInterest(1000, 5, 3));