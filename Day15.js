// Write a function to calculate the sum of square of all elements in an array.
// Ex : sumOfSquare([1,2,3]) OutPut :14  (1+4+9)

const sumOfSquare = (arr) =>{
    let squareSum = 0;
    arr.map((element)=> squareSum+=(element*element))
    console.log(squareSum)
}

sumOfSquare([1,2,3])