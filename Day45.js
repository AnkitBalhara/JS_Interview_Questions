// Write a function that takes a string as input and returns true if the string represents a valid Indian mobile number and false otherwise.

// Notes:-
// * Length :- Length should be 10 digits.
// * Starting digits :- The number must start with 6,7,8 and 9.

// console.log(validateIndianMobileNumber("9896207922"));

const validateIndianMobileNumber = (num) => {
  // Method 1....(Shortest Method)

  return /^[6-9][\d]{9}$/.test(num);

  // Method 2....
  //   if (num.length != 10 || /[0-5]/.test(Number(num[0])) || /[\D]/.test(num)) {
  //     return false;
  //   }
  //   return true;
};

console.log(validateIndianMobileNumber("9876543210"));
console.log(validateIndianMobileNumber("98765432190"));
console.log(validateIndianMobileNumber("9+76543210"));
console.log(validateIndianMobileNumber("0123456789"));
