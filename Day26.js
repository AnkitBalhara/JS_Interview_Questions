// Write a function to find the nth fibonacci number.

// Fibonacci Series : 0,1,1,2,3,5,8,13,.......

// Ex : fibonacci(0) => Output :- 0
// Ex : fibonacci(1) => Output :- 1
// Ex : fibonacci(2) => Output :- 1
// Ex : fibonacci(4) => Output :- 3
// Ex : fibonacci(6) => Output :- 8

const fibonacci = (index) =>{
    // Shortest Method with Recursion function....
    if(index<=1){
        return index ;
    }else{
        return fibonacci(index-1)+fibonacci(index-2) ;
    }


    // If Recursion function is not allowed....

    
    // if(index==0){
    //     return console.log(0)
    // }
    // let arr = [0,1];
    // let a =0;
    // let b =1;
    // for (let i = 2; i <=index; i++) {
    // let c = a+b;
    // // console.log(a,b,c)
    // arr.push(c)
    // a=b;
    // b=c;
    // // console.log(a,b,c);
    // }
    // console.log(arr.pop())
}

console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));
console.log(fibonacci(6));
console.log(fibonacci(7));
console.log(fibonacci(8));