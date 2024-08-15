// write a function calculateAverage takes an array of nummbers as an input. and return the average of the numbers...

const calculateAverage = (arr)=>{
    let numOfElements = arr.length;
    let sum = arr.reduce((preValue,currValue)=>{
        return preValue+currValue;
    })
    return sum/numOfElements
}

console.log(calculateAverage([1,2,3]))