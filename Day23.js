// Write a function to count the occurences of each element in an array and store the counts in the object. The keys of the object should represent the elements of the array , and values should represent the number of times each element appears in the array.

// Here what function should do :

// Accept an array of numbers as input.
// Create an empty object called counts to store the counts of each element.
// Itterate through each number in the array.
// For each number , increment the count in counts object.
// If the count for a number does not exists yet, initilize it to 1.
// Return the counts object containing the counts of each element.

// Ex :
// numberOccur([1,2,2,3,1,4,2]) Output : {'1': 2 , '2': 3 , '3': 1 ,'4':1 }
// means '"Number":Times of occurence in the array'

const numberOccur = (arr) => {
//  let newArr = [...new Set([...arr])];
let objCount = {};

for (const element of arr) {
    objCount[element] = (objCount[element] || 0) +1;
}
console.log(objCount);

}

numberOccur([1, 2, 2, 3, 1, 4, 2]);
