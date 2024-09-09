// Write a function repeatString that takes two parameter :
// first string : a string that needs to be repeated.
// second number : How many times times the string needs to be repeated.

// Ex : repeatString("Ram",4) || Output:-"RamRamRamRam"

const repeatString = (str, num) => {
  // Method 1 :Best Method..................
  return num > 0 ? str.repeat(num) : str;

  // Method 2:Loop case................................

  // let i=0;
  // // let newStr = '';
  // while(i<num){
  //     newStr += str;
  //     i++;
  // }
  // return newStr;
};

console.log(repeatString("Ram", 4));
console.log(repeatString("Ram", 0));
