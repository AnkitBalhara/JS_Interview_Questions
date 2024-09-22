// Write a function calculateDaysBetweenDays that calculates the number of days between two dates. The dates will be provided in format "YYYY-MM-DD"

// console.log(calculateDaysBetweenDays("2024-01-01","2024-01-31")) || Output:- 30

const calculateDaysBetweenDays = (date1,date2) => {
    // console.log(date1)
    let diff1 = new Date(date1);
    let diff2 = new Date(date2);
    let out = new Date(diff2.getTime()-diff1.getTime())
    console.log(out/(24*60*60*1000))
};

calculateDaysBetweenDays("2024-01-01","2024-01-31")
calculateDaysBetweenDays("2000-01-30","2024-01-30")
