// Write a  function removeDuplicate takes an array of integers as an input and removes any duplicate elements and return a new array with unique elements..
// Example:- removeDulpicate([1,2,3,1,2,3]); Output->[1,2,3]

const removeDulpicate = (arr) => {
  // // Method 1..
  // let setarr = new Set(arr)
  // let newArray = Array.from(setarr);
  // // Method 2..
  //   let setarr = new Set(arr);
  //   let newArray = [...setarr];
  // // Method 3..(best)
  let setarr = [...new Set(arr)];
  return setarr;
};

console.log(removeDulpicate([1, 2, 3, 1, 3, 2]));
