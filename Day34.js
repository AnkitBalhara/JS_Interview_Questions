// Write a removeDuplicates that takes an array of integers an input and returns a new array  with duplicate elements removed.

// EX :- console.log(removeDuplicate([1,2,3,4,5,1,2,3])) || Output:- [1,2,3,4,5]

// // Method 1....
// const removeDuplicate = (arr) =>{
//     return [...(new Set([...arr]))];
// }

// //Method 2...(One line Solution....)
const removeDuplicate = (arr) => [...(new Set([...arr]))];


console.log(removeDuplicate([1,2,3,4,5,1,2,3]))