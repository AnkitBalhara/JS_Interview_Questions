// Write a function findMode that takes an array of numbers as input and returns the mode from the array.
// Notes :
// The input array can't be empty.
// The mode always be unique (i.e., there won't be multiple numbers with same highest frequency.)

// Ex: findMode([1,2,3,4,2,1,2,5,2]) Output:2

// Method 1:++++++++++++++++++++++++++++++++++++++
// const findMode = (arr) => {
//     let obj ={};
//     let newArr =[];
//     for (const element of arr) {
//         obj[element] = (obj[element] || 0)+1;
//     }
//     for (const key in obj) {
//         newArr.push(obj[key]);
//     }
//     let value = Math.max(...newArr)

//     for (const key in obj) {
//         if(obj[key]===value){
//             return console.log(key)
//         }
//     }
// };

// Method 2:++++++++++++++++++++++++++++++++++++++

const findMode = (arr) => {
    let counts= {}
    let maxNum = 0;
    let mode;

    for (const element of arr) {
        counts[element] = (counts[element] || 0)+1;
        if(counts[element]>maxNum){
            maxNum=counts[element]
            // mode=counts[element]
            mode=element
        }
    }
    console.log(counts);
    return console.log(mode)
};

findMode([1, 2, 3, 2, 3, 3, 2, 1, 3, 4, 5, 6, 2, 2, 2, 6, 7, 8, 0]);
