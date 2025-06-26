/*
forEach() returns void 
Map()     returns array
filter()  returns array
reduce()  returns single element (can be number/string/object)
some()    returns boolean
every()   returns boolean
*/

/*
1) The forEach() method in TypeScript is used to iterate over each element of an array 
and execute a provided callback function for each element. 
It is a built-in array method that simplifies array iteration without the need for 
explicit loop counters or index management.
*/

/*
 The basic syntax for forEach() in TypeScript is:
array.forEach((element, index, array) => {
  // Your code here
}, thisArg?);
element: The current element being processed.
index: The index of the current element (optional).
array: The array on which forEach() was called (optional).
thisArg: Optional value to use as this when executing the callback
*/

// Example 1
let fruits: string[] = ['apple', 'banana', 'orange', 'mango', 'kiwi']

fruits.forEach((element, i) => console.log(i, element))
// Example 2
const printer = {
    prefix: "Item",
    print: function (element: string, index: number) {
        console.log(`${this.prefix} ${index}: ${element}`);
    }
};
const items = ['printer', 'screen', 'keyboard'];
items.forEach(printer.print, printer);
// Output:
// Item 0: printer
// Item 1: screen
// Item 2: keyboard

/**
 * 2) map() - creats a new array with the result of the calling the function on 
 * every element of an array
 * The original array is not modified; instead, map() returns a new array with the 
 results of the function applied to each element
 * 
 */

/*
 Syntax 
array.map((currentValue, index, array) => {
 // Return a new value for each element
}, thisArg?); 
 */

// Example1
// Get Square of each element
let numbersArray: number[] = [1, 2, 3, 4, 5]
const newArrayAfterMapOperation = numbersArray.map((element) => element * element)
console.log(newArrayAfterMapOperation);
console.log(numbersArray);


// 3) filter() 

const numbers2 = [12, 5, 8, 130, 44];
const bigNumbers = numbers2.filter(n => n >= 10);
console.log(bigNumbers); // Output: [12, 130, 44]

// 4) reduce()
/**
The reduce() method in TypeScript (and JavaScript) applies a function against an
accumulator and each element in the array (from left to right) to reduce it to a 
single value. This is very useful for summing, concatenating, or aggregating data.
 */

/* 

array.reduce(callback(accumulator, currentValue, index, array), initialValue?)
callback: Function to execute on each element.
accumulator: The accumulated value from previous iterations.
currentValue: The current element being processed.
index (optional): The index of the current element.
array (optional): The array reduce() was called upon.

initialValue (optional): Initial value for the accumulator. If omitted, the first
element is used as the initial accumulator, and iteration starts from the second element.
*/

const numbers3 = [10, 20, 30, 40];
const sum = numbers3.reduce((acc, curr) => acc + curr, 100);
console.log(sum); // Output: 200 because 100 is the initial value.

const words = ['I ', 'Love ', 'My ', 'Country'];
const sentence = words.reduce((acc, curr) => acc + curr, 'India is My Country ');
console.log(sentence); // Output: India is My Country I Love My Country

const words3 = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const count = words3.reduce((acc: Record<string, number>, word) => {
    acc[word] = (acc[word] || 0) + 1;
    return acc;
}, {});
console.log(count);
// Output: { apple: 3, banana: 2, orange: 1 }

// Returns a single value (not necessarily a number; can be any type).
// Does not modify the original array.
// TypeScript infers types for the accumulator and current value, but you can explicitly type them for clarity
// Provides powerful data aggregation and transformation capabilities.


// 5) some()
/**

The some() method in TypeScript (and JavaScript) checks if at least one element in 
the array passes a test implemented by the provided function. 
It returns a boolean (true or false).
 */
// Checking for Any Even Number
const numbers4 = [1, 3, 5, 2, 7];
const hasEven = numbers4.some(n => n % 2 === 0);
console.log(hasEven); // Output: true

// Checking for Objects with a Property
interface Person {
    name: string;
    age: number;
}

const people: Person[] = [
    { name: 'Alice', age: 17 },
    { name: 'Bob', age: 18 },
    { name: 'Charlie', age: 19 }
];

const hasAdult = people.some(person => person.age >= 18);
console.log(hasAdult); // Output: true

// 6) every()
/**
 The every() method in TypeScript (and JavaScript) tests whether all elements in an
 array pass a test implemented by a provided function. 
 It returns a boolean value: true if every element passes the test, and false if at
  least one element fails 
 */
//  Checking if All Numbers Are Greater Than or Equal to 10
const passed = [12, 5, 8, 130, 44].every((element) => element >= 10);
console.log(passed); // Output: false













