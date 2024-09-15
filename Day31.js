// Write a function called simplePasswordValidator that takes a single parameter :

// password :- A string representing the password to be validated.
// The function should validate the password bassed on the following creteria:...

// The password must contain One Lowercase ,one Uppercase and one Digit.
// The length of the password must be atleast 8.
// The function should return true if the password meets all the creteria, else it returns false.

// The input string password will contain only alphanumeric characters and punctuation marks.

// console.log(simplePasswordValidator("Ram123")) || Output : length error :- false
// console.log(simplePasswordValidator("ram12345")) || Output : Uppercase err :- false
// console.log(simplePasswordValidator("RAM12345")) || Output : Lowercase err :- false
// console.log(simplePasswordValidator("aaAkjjgd"))|| Output : Number err :-false
// console.log(simplePasswordValidator("aA1234567")) || Output : true

const simplePasswordValidator = (str) => {
  if (
    str.length > 7 &&
    /[a-z]/.test(str) &&
    /[A-Z]/.test(str) &&
    /[0-9]/.test(str)
  )
    return true;
  else return false;
};
console.log(simplePasswordValidator("Ram123"))
console.log(simplePasswordValidator("ram12345"));
console.log(simplePasswordValidator("RAM12345"));
console.log(simplePasswordValidator("aaAkjjhd"));
console.log(simplePasswordValidator("aA1234567"))
