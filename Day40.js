// Write a function generateBarChart that takes an array of numbers and generates a simple text-based bar-chart.

// console.log(generateBarChart([5,3,9,2]))
// Output :-
// 1:*****
// 2:***
// 3:*********
// 4:**

const generateBarChart=(arr)=>{
    // Method 1.......(Simple and short)
    return arr.map((element,index)=>{
        return `${index+1} : ${"*".repeat(element)}`
    }).join("\n")

    // Method 2.......
    // for (let i = 0; i < arr.length; i++) {
    //     let char = i+1;
    //     let value = "";
    //     for (let j = 0; j < arr[i]; j++) {
    //         value+='*';
    //     }
    //     console.log(char,":",value)
    // }
}

console.log(generateBarChart([5,3,9,2])) // Method 1.....
// generateBarChart([5,3,9,2])   // Method 2.....