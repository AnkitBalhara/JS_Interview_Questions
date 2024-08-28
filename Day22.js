// Write a function findMedian that takes an array of numbers as an input and returns the median value. If the array has even number of elements, return the average of the two middle values.
// Ex : finndMedian([1,2,3,4,5]) Output : 3
// Ex : finndMedian([1,2,3,4,5,6]) Output : (3+4)/2

// const findMedian = (arr) =>{
//     arr=arr.sort((a,b)=>a-b)
//     let median = 0;
//     if(arr.length%2===0){
//         let index = arr.length/2;
//         median = (arr[index-1]+arr[index])/2
//         return console.log(median)
//     }else{
//         // arr(index-1) This is because inside arr[--] index is there which starts from 0.
//         median = arr[Math.ceil(arr.length/2)-1]
//         return console.log(median)
//     }
// }

const findMedian = (arr) => {
  arr = arr.sort((a, b) => a - b);
  let midd;
  leIndex = Math.floor(arr.length / 2);
  let median = 0;
  if (arr.length % 2 == 0) {
    median = (arr[middleIndex] + arr[middleIndex - 1]) / 2;
    return console.log(median);
  } else {
    median = arr[middleIndex];
    return console.log(median);
  }
};
findMedian([1, 2, 6, 7, 3, 4]);
findMedian([1, 2, 3, 4, 5]);
