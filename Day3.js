// Write a function called countChar that takes two parameters :- a string and a character to count. The function should return the number of times the character appears in that string.

// ex:-  countChar("MissIssippi","I") output==>'4'

// todo :-
// The Function should be case senstive. 
// It should handle both upper and lower case.

const countChar = (str,char) =>{
    str = str.toLowerCase();
    char = char.toLowerCase();

    let  numOfTimesAppear = 0;

    for (const character of str) {
        if(character==char){
            numOfTimesAppear++;
        }
    }
    console.log(`Character ${char} Appeared ${numOfTimesAppear} times in ${str}`)
}

countChar("Ankit","i")
countChar("MissIssippi","I")