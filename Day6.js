// Write a function that check a string is a palindrome or not...

// Notes:--
// The string may contain a special char, symbol, letters, digits, spaces and punctuation.
// It should be case-'Insensitive'


// Self solution..

// const palidromOrNot = (str) => {
//     str = str.trim();
//     // str=str.replaceAll(" ",'')
//     str=str.replaceAll(/[^a-zA-Z0-9]/g,'')
//     str=str.toLowerCase()
//     // console.log(str)
//     let matchStr = str.split('').reverse().join('')
//     // console.log(matchStr)
//     if(matchStr===str){
//         return true    
//     }else return false
// }

// console.log(palidromOrNot("JaiRam,mariaj"))
// console.log(palidromOrNot("Jai H"))
// console.log(palidromOrNot("a MAN, a PLAN, a Canal, Panama"))


// Sir solution ...

const palidromOrNot = (str) =>{
    str = str.toLowerCase().replace(/\W/g,"")
    reverseStr = str.split('').reverse().join('')
    return str===reverseStr?true:false
}


console.log(palidromOrNot("JaiRam,mariaj"))
console.log(palidromOrNot("Jai H"))
console.log(palidromOrNot("a MAN, a PLAN, a Canal, Panama"))
