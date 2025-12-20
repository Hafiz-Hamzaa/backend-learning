// Errors and Debugging
// Types of Errors:
// Syntax Error , Logical Error , Runtime Error

// Using Debugging Tool for debugging in Node.JS: steps: start debugigng - Node.JS - Breakpoints - check line by line

// Syntax Error
// Matlab JavaScript ka rule tod diya
// Code execute hi nahi hota
// console.log('Hello'   // ❌ missing closing parenthesis

// Runtime Error
// Code likhne me sahi, par run-time pe fail hota hai
// console.log(x); // ❌ x is not defined

// let num = 12;
// num();          // ❌ num is not a function

// Logical Error
// Code run ho jata hai, lekin output galat
// const x = 10;
// if(x = 10){ // ❌ assignment instead of comparison
//     console.log(x); // ye hamesha execute hoga
// }else{
//     console.log("x is not 10")
// }


// Debug and Fix Syntax,Logical and Runtime Errors
function calculateArea(width,height) {
    return width * height
}

let result = calculateArea(10,120)
console.log(result)

if(result > 100){
    console.log('The area is large')
}else{
    console.log('The area is small')
}

if(result > 100){
    console.log('Area is greater then or equal to 100');
}