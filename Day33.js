// Write a function randomHexColor that generates hexadecimal color code ecah time it is called.The function should return a random color code in the format #RRGGBB where RR,GG,BB goes for two digits hexadecimal numbers representing the red , green and blue components of colors.

// The length should be 7 including "#".

const randomHexColor = ()=>{
    // Method 1............Shortest Methood.....
    // return `#${Math.random().toString(16).slice(0,6).padEnd(6,1)}`;
    return `#${Math.random().toString(16).slice(2,8).padEnd(6,1)}`;



    // // Method 2....................
    // let arr = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e' ,'f'];
    // let hexColor = '';
    // for (let i = 0; i < 6; i++) {
    //     let random = Math.round(Math.random()*16);
    //     hexColor +=arr[random];
    // }
    // hexColor="#"+hexColor;
    // return hexColor ;
}

console.log(randomHexColor())