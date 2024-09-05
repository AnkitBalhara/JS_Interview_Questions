// Write a Recursion function to calculate the factorial  of a Number.

// **** Recursion :- It is a programming techique where a function calls itself in order to solve a problem. In Simple words: It is a function which calls itself with a smaller or Simpler value input until it reaches a base case.

// **** Base Case :- It is the condition in recursive function that stop the recursion. It is a function where function stop calling itself and returns a value without further recursion. Without base case, the recursion function would continue calling itself indefinitly, leading to what's known as infinte recursion.

// **** Recursive Case :- The case is the condition in a recursion function that determines when the function should call itself again. It's typically an expression or condition that evaluates to true for certain inputs, indicating that future recursion is neccesary to solve the problem. Each recursive call should move closer to the base case eventually leading to termination of the recursion.

// Ex:- findFactorialRecursively(5) || Output : 120

const findFactorialRecursively=(num)=>{

    if(num==1){
        return 1;
    }else{
        return num * findFactorialRecursively(num-1);
    }
}

console.log(findFactorialRecursively(5))
console.log(findFactorialRecursively(6))