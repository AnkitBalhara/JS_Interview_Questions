// Write a function numberRange that generates an array containing numbers from "a" to "b" (inclusive).
// Where "a"=> It is the starting number.
// Where "b"=> It is the ending number.

// "a" should be less than "b"

// Ex :- numberRange(0,5) || Output :- [0,1,2,3,4,5]
// Ex :- numberRange(-2,2) || Output :- [-2,-1,0,1,2]

const numberRange = (startIndex , endIndex ,arr=[] )=>{
    for (let i = startIndex; i <= endIndex; i++) {
        arr.push(i);
    }
    return arr;
}

console.log(numberRange(0,5))
console.log(numberRange(-2,2))
console.log(numberRange(3,8))