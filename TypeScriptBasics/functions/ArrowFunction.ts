/**
    Arrow Function in TypeScript
    Arrow functions in TypeScript are a concise way to write function expressions,
    introduced in ES6 and also known as lambda functions or fat arrow functions. 
    They use the => syntax, which allows you to define functions without the
    function keyword, making your code shorter and more readable. 
 */

// Syntax 
let variable = (parameters) => {
    // block of code 
}
// Example 1 : No parameters:
let greetFn = () => {
    console.log("Hello Typescript!!")
}
greetFn()

// Example 2: Single statement (implicit return):
let diff = (a: number, b: number) => (a - b)
console.log(diff(111, 21));

// Example 3: Multiple statements (explicit return):
const multiplication = (x: number, y: number): number => {
  let result = x * y;
  return result;
};
console.log(multiplication(10, 30));

