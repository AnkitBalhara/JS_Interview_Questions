// Write a function truncateString that takes two parameters :-
// str : The string that needs to be truncate.
// maxlength :- An integer representing the maximum length of the string allowed.
// The function should truncate the input string str if its length exceeds the specified maxLength. If truncation occurs, the function should add "..." to the end of the truncate string.

// Ex :- truncateString(("Jai Shree Ram from Ankit"),13) || Output : "Jai Shree Ram"

const truncateString = (str, maxLength) => {
  // Method 1....
  //   if (maxLength <= 0) return str;
  //   else return str.slice(0, maxLength) + "...";

  // Method 2....
  return maxLength <= 0 ? str : str.slice(0, maxLength) + "...";
};

console.log(truncateString("Jai Shree Ram from Ankit", 13));
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 0));
