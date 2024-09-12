// Write a "recursive" function numberRangeRecursive that generates an array containing numbers from "a" to "b" (inclusive).
// Where "a"=> It is the starting number.
// Where "b"=> It is the ending number.

// "a" should be less than "b"

// Ex :- numberRangeRecursive(0,5) || Output :- [0,1,2,3,4,5]
// Ex :- numberRangeRecursive(-2,2) || Output :- [-2,-1,0,1,2]

const numberRangeRecursive = (startIndex, endIndex , arr =[]) => {
    if(startIndex<=endIndex){
        arr.push(startIndex)
        return numberRangeRecursive(startIndex+1,endIndex,arr);
    }
    return arr;
};

console.log(numberRangeRecursive(0,5))
console.log(numberRangeRecursive(-2,2))