// Write a function objectToArray that takes an object as an input and returns an array of key-value pairs, where each element in an array is an array with two elements:- the key and value of the object.

const objectToArray =(obj)=>{
    let arr = Object.entries(obj);
    console.log("Array with different arrays inside with key and value:-",arr);
    console.log("Flat Method :-",arr.flat());

    let BackToObject = Object.fromEntries(arr);
    console.log("Back to same Object:-",BackToObject);
    
}

let object = {
    Name:"Ram",
    Address :"Ayodhya"
}

objectToArray(object);