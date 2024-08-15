// Question 1. Write a function, findLongestWord that takes a string input and returns 
        // the longest word in the string. If there are multiple longest words, return the first 
        // one encountered. 

        // Constraints :-
        //  1) The input string may contain alphabetic characters, digits, spaces and punctuations 
        //  2) The input string is non-empty.
        //  3)The input string may be contain multiple words separated by spaces.

        //  Notes :-
        //   1) If the input string is empty or contains only whitespace, the function should return as 
        //   false.
        //   2) The function should ignore leading and trailing whitespace when determining the 
        //   longest word.

        // EX :-
        // findLongestWord("This is the longest word from the string")---> longest.

        // function findLongestWord(str){
        //     let arr = str.split(" ")
        //     let arr2 = []
        //     let maxIndex = 0;
        //     let longestWord = ''
        //     for (let i = 0; i < arr.length; i++) {
        //       arr2.push(arr[i].length)
        //     }
        //     maxIndex = Math.max(...arr2) 
        //     let index = arr2.indexOf(maxIndex)
        //     console.log(arr[index])
        // }

        function findLongestWord(str) {
            if(str===''){
                return console.log('false')
            }
            str = str.replace(/ \s+/, " ") // This is used when more than one space is given in between.
            let arr = str.split(" ")
            //    console.log(str)
            let arrLength = []
            for (const i in arr) {
                arrLength.push(arr[i].length)
            }
            // console.log(arrLength)
            let longestLength = Math.max(...arrLength)
            let longestLengthIndex = arrLength.indexOf(longestLength)
            // console.log(longestLengthIndex)
            return console.log(arr[longestLengthIndex])
        }

        findLongestWord("    This is the longest word from the string")
        findLongestWord("This is Ankit                                 Balhara")
        findLongestWord(   "                 ")


        // Shortest Method:-
        // const findLongestWord=(str)=>{
        //     let stringToArr = str.split(" ")
        //     let longestWord = stringToArr.sort((a,b)=>b.length - a.length)
        //     console.log(longestWord[0])
        // }


        // findLongestWord("'JaiHoShaniDevKi' This is the Day for Shani Dev..")