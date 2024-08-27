// Write a function called calculateMean that takes an array of numbers as an input and returns the mean (Average) of those numbers.

// Constraints :
// The input array may contain positive and negative integers.
// The input array may be empty. If it is empty, the function should return 0.

// Ex : console.log(calculateMean([1,2,3])) Output : 2

const calculateMean = (arr) => {
  let sum = 0;
  arr.forEach((element) => {
    sum += element;
  });
  let average = sum/(arr.length)
  console.log(Number(average.toFixed(2)))
};

calculateMean([-1, 2, 3]);
