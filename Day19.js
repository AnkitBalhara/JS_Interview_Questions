// Write a function to check if a given string starts with a specific substring.

// console.log(startsWith("Jai Shree Ram","Jai")) Output : true
// console.log(startsWith("Jai Shree Ram","Jaiho")) Output : false

const startsWith = (str,substr) =>{
    str=str.toLowerCase();
    substr=substr.toLowerCase();

    console.log(str.startsWith(substr))
}

startsWith('Jai Shree Ram',"Jai")
startsWith('Jai Shree Ram',"jai")
startsWith('Jai Shree Ram',"jdai")