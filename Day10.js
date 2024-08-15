// Write a function arrayAreEqual that takes two arrays arr1 and arr2 as input and return true if the arrays are equal (contain same elements in same order) else false..

// const arrayAreEqual = (arr1,arr2) =>{
//     if(arr1.length!=arr2.length)return false
//     for (let i = 0; i < arr1.length; i++) {  
//     if(arr1[i]!=arr2[i]){
//         return false
//     }
// }
// return true
// }


// Sir Method New method..

const arrayAreEqual = (arr1,arr2) =>{
    if(arr1.length!==arr2.length) return false;
    return arr1.every((currValue,index)=>currValue===arr2[index])
}

console.log(arrayAreEqual([1,2,3],[1,2,3]))
console.log(arrayAreEqual([1,2,3],[1,2,4]))
console.log(arrayAreEqual([1,2,3],[1,3,2]))
console.log(arrayAreEqual([-1],[-1]))