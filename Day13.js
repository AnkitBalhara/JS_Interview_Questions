// Write a function countVowels that takes a string as an input and returns the number of vowels in the string(both case lower and upper case.)...

// const countVowels = (str) =>{
//     let vowels = ['a','e','i','o','u'];
//     str = str.toLowerCase();
//     let numOfVowel = 0;
//     for (let i = 0; i < str.length; i++) {
//         for (let j = 0; j < vowels.length; j++) {
//             if(str[i]==vowels[j]){
//                 numOfVowel++;
//             }
//         }
//     }
//     return `Num of Vowels :- ${numOfVowel}`
// }

// Sir Method....

const countVowels = (str) => {
    str = str.toLowerCase();
    str = str.split('')
    let vowels = ['a','e','i','o','u'];
    let count = 0;

    for (const character of str) {
        if(vowels.includes(character)){
            count++;
        }
    }
    return `Number of Vowels are :- ${count}`
};

console.log(countVowels("This is vowel counter"));
console.log(countVowels("Helloo World"));
