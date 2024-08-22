// Write an function findMin that takes an array of numbers as an input and returns the minimum value from the array.
// Notes:-
// *Input values may contains positive and negative values both.
// *The input array may be empty.
// *The input array may contains duplicates value.

// Ex: findMin([1,2,3,-4]) Output: -4

const findMin = (arr) =>{
    if(arr.length==0) return  console.log("Array is empty...")
    return console.log((arr.sort((a,b)=>a-b))[0])
}
findMin([1,2,3,-4])
findMin([3,-2,1])
findMin([])