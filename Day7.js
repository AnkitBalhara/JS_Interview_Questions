// Write a function findMax that  takes an array of numbbers as an input and returns the maximum number in the array.
// Ex :- findMax([1,2,3,4]) => Output : 9.

const findMax = (arr) =>{
    if(arr.length==0){
        return "No Elements in the Array";
    }
    let answer = arr.reduce((preValue,currValue)=>{
        return preValue > currValue ? preValue : currValue
    })
    return answer
}

console.log(findMax([4389,39094,2,4]))
console.log(findMax([-4389,-39094,-2,-4]))
console.log(findMax([]))
console.log(findMax([4]))


// Sir Method or Short Method...

// const findMax = (arr) =>{
//    return Math.max(...arr)
// }

// console.log(findMax([4389,39094,2,4]))
// console.log(findMax([-4389,-39094,-2,-4]))
// console.log(findMax([]))
// console.log(findMax([4]))