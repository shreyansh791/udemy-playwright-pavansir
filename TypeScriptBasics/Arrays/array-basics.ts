/*
What is an Array in TypeScript?
An array in TypeScript is a data structure that allows you to store multiple values
under a single variable name, maintaining a specific order.
Arrays can hold elements of any type, but TypeScript adds type safety, 
ensuring that all elements in an array are of the specified type
*/
// Declaring Arrays

// There are two main ways to declare arrays in TypeScript:

// Square Bracket Syntax (Preferred):
let fruits: string[] = ['Apple', 'Banana'];
let numbers: number[] = [1, 2, 3];
// Generic Array Type:
let fruits2: Array<string> = ['Apple', 'Banana'];
let numbers2: Array<number> = [1, 2, 3];
/*
How to Iterate an Array in TypeScript
There are several common ways to iterate over an array in TypeScript. Here are the most widely used methods:
*/
const numbersArray: number[] = [1, 2, 3, 4, 5];
for (let i = 0; i < numbersArray.length; i++) {
  console.log(numbersArray[i]);
}

// Example2
const fruitsArray: string[] = ["apple", "banana", "orange"];
fruitsArray.forEach(fruit => {
  console.log(fruit);
});

// Example 3
console.log("***************** For Of Loop ***************************")
const colors: string[] = ["red", "blue", "green"];
for (const color of colors) {
  console.log(color);
}

console.log("*************************************")


const colorsArray: string[] = ["red", "blue", "green"];
console.log("***************** For In Loop ***************************")
for (const color in colorsArray) {
  console.log("index - " , color , ",Value - ", colorsArray[color]);
}




