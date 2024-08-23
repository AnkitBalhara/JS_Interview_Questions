// Write a function to convert a string to camelCase and snakeCase.
// EX : toCamelCase("jai shree ram") Output :- jaiShreeRam
// EX : toCamelCase("jaiShreeRam") Output :- jai_shree_ram

// const toCamelCase = (str) => {
//     str = str.trim().split(' ');
//     let str1 = str[0][0].toLowerCase() + str[0].slice(1,).toLowerCase();
//     let newStr = str1;
//     for (let i = 1; i < str.length; i++) {
//         let str2 = str[i][0].toUpperCase();
//         let str3 = str[i].slice(1,).toLowerCase();
//         newStr+=str2+str3;
//     }
//     console.log(newStr)
// };


// Easy and short method for camelCase :

// Detail method of that  short method which is defined below...
// const toCamelCase=(str)=>{
//     str = str.trim().split(" ");
//     str = str.map((element,index)=>{
//         if(index==0){
//             return element.toLowerCase();
//         }else{
//             return element[0].toUpperCase() + element.slice(1).toLowerCase();
//         }
//     })

//     return console.log(str.join(""))
// }

const toCamelCase=(str)=>{
    return str.trim().split(" ").map((element,index)=>{
        if(index==0){
            return element.toLowerCase();
        }else{
            return element[0].toUpperCase() + element.slice(1).toLowerCase();
        }
    }).join("");
}


// console.log(toCamelCase('jai shree ram'))
// console.log(toCamelCase('Lorem ipsum dolor sitRatione, possimus.'))


// Snake Method...
const toSnakeCase = (str) =>{
    return str.trim().replaceAll(" ","_")
}

console.log(toSnakeCase('jai shree ram'))
