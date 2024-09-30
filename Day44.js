// Write a function validatePassword that checks if a given password string meets the following cretia:-
// * Minimum length :- The password must be 8 letters.
// * Case Requirement :- The password must include one uppercase and one lower case letters.
// * Numerical Requirements :- The password must contain atleast one digit.
// * Special Character :- One special character is required from (!@#$%^&*()_+=_)

// ******* Important ************
// [0-9] and  [\d] both are same...
// [\W] and [!@#$%^&*()+=] both are same... [\W] only not include one special character that is "_"
// ******* ************************

const validatePassword = (password) => {
  let valid =
    password.length >= 8 &&
    /[A-Z]/.test(password) &&
    /[a-z]/.test(password) &&
    /[\d]/.test(password) &&
    /[\W_]/.test(password); //[\W_] "_" is Added because [\W] don't include  "_".
  return valid;
};

console.log(validatePassword("Ankit0+"));
console.log(validatePassword("AnkitBal0+"));

// Short method For the above function using REGEX...
const validateShortMethod = (password) => {
  let regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[\d])(?=.*[\W_]).{8,}$/;
  return regex.test(password);
};

// ******* Important ************
// ^(?=.*[A-Z])(?=.*[a-z])(?=.*[\d])(?=.*[\W_]).{8,}$
// "^" It is used for satrting and "$" is used for ending..
// (?=.*[A-Z])  =>
// ?=.* OR ?=.+
// ?=."*" Means :- anything is written before [A-Z] is not important
// ?=."+" Means :- anything is written before [A-Z] is  important
// ******* ************************

console.log(validateShortMethod("Ankit0+"));
console.log(validateShortMethod("AnkitBal0+"));
