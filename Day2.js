const generateHash1 = (str) => {
  if (str.length > 280 || str.trim().length == 0) {
    return console.log("False");
  }
  // The below line of code is written for "last or first space" :- generateHash("ab vsv jsh ")
  str = str.trim();
  // This below code is for :-generateHash("KJDN anknkd            adnknvk ") type of string..
  str = str.replace(/ \s+/, " ");
  str = str.split(" ");
  str = str.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
  str = str.join("");
  str = "#" + str;
  return str;
};

console.log(generateHash1("Jai Shree Ram Jai Jai Jai Hanuman"));
console.log(generateHash1("          "))

// Method 2........
// const generateHash2 = (str) => {
//   if (str.length > 280 || str.trim().length == 0) {
//     return console.log("False");
//   }
//   // The below line of code is written for "last or first space" :- generateHash("ab vsv jsh ")
//   str = str.trim();
//   // This below code is for :-generateHash("KJDN anknkd            adnknvk ") type of string..
//   str = str.replace(/ \s+/, " ");
//   str = str.split(" ");
//   str = str.map((word) => word.replace(word[0], word[0].toUpperCase()));
//   console.log("#" + str.join(""));
// };

// generateHash2("KJDN anknkd            adnknvk ");
