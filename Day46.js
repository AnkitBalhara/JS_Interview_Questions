// Write a regular to expression all numbers from a given string.
// Notes:- Requirements...
// * Extract all numbers from a string.
// * Return the number as an array.


// Parsing numrical data from text.
// Extracting numeric values for calculations.
// Filtering numbers from mixed Content.

// Ex:- console.log(extractNumbers("abc123def456")) || Output:-["123","456"]
// Ex:- console.log(extractNumbers("1asd2ssc3")) || Output:-["1","2","3"]

const extractNumbers=(str)=>{
   let regex = /\d+/g;
   return str.match(regex);
}

console.log(extractNumbers("abc123def456"))
console.log(extractNumbers("1asd2ssc3"))
console.log(extractNumbers("Balhara"))