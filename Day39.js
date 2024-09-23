// Write a function calculateAge that takes a birth Date as an input and returns the current age of the person. The birth Date will be provided in the format "YYYY-MM-DD".

// * The function must handle leap years and varying numbers of days in each month accurately.
// * Consider the time zone difference amd ensure the age is calculated based on the current date in your local time zone.
// *The output should be the age in the whole years.

// console.log(calculateAge("2000-01-30")); || Output :- 24


// console.log((today-dateOfBirth)/(365.25*24*60*60*1000))
// To do the upper type of solution we need to have leap years between that two yaers.
// To have a accurate solution..."else" it will show your birth days 6-10 days earlier

const calculateAge = (dob) => {
  let todayDate = new Date();
  let birthdate = new Date(dob);
//   console.log(birthdate.toDateString());

  let age = todayDate.getFullYear() - birthdate.getFullYear();
  let monthDiff = todayDate.getMonth() - birthdate.getMonth();

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && todayDate.getDate() < birthdate.getDate())
  ) {
    age--;
  }
  return age;
};

console.log(calculateAge("2003-06-29"));
