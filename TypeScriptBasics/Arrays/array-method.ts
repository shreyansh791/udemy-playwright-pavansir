let nums: number[] = [1, 2, 3, 4, 5]

// length (attribute and not a method)
console.log("Length of the array is ", nums.length) // 5

// 1) push() - Add single/multiple elements to the end of the array.
nums.push(6, 7, 8)
console.log("nums array -  ", nums)
console.log("Length of the array -  ", nums.length) // 8

// 2) pop()  - Removes the last element from an array and returns it.

console.log(nums.pop()) // removes last element which is 8
console.log("Length of the array -  ", nums.length) // 7

// 3) shift - Removes the first element from the array.

console.log(nums.shift()) // removes first element which is 1
console.log("Length of the array -  ", nums.length) // 6


// 4) unshift() - Inserts new elements at the start of an array, and returns the new length of the array.
nums.unshift(9, 10)
console.log("Length of the array -  ", nums.length) // 8

// 5) concat()

let newArray = nums.concat([11, 12, 13], [14, 15])
console.log(newArray)


/*
6) slice() - this method in TypeScript (and JavaScript) is used to extract a section
 of an array and return it as a new array, without modifying the original array.
     * @param start The beginning of the specified portion of the array.
     * @param end The end of the specified portion of the array. This is exclusive of the element at the index 'end'.
     */

const arr = ["orange", "mango", "banana", "sugar", "tea"];

console.log(arr.slice(1, 3)); // Output: ["mango", "banana"]
console.log(arr.slice(-3, -1)); // Output: ["banana", "sugar"]

// slice(1, 3) extracts from index 1 up to, but not including, index 3.
// Negative indices count from the end of the array

/**
 * 7) splice() - Add/Remove elements from an array (from anywhere)
 * Syntax - array.splice(startIndex, deleteCount, item1, item2, ....ItemN)
 */
// 1) Only Removing elements
const deletedElements = arr.splice(1, 3)
console.log("deletedElements ", deletedElements); // [ 'mango', 'banana', 'sugar' ]
console.log("array ", arr);  // [ 'orange', 'tea' ]

// 2) Only Adding elements
arr.splice(1, 0, 'sugar', 'sweets')
console.log("array ", arr);  //  [ 'orange', 'sugar', 'sweets', 'tea' ]

// 3)  Adding and Removing elements
arr.splice(1, 1, 'Litchi')
console.log("array ", arr);  //  [ 'orange', 'Litchi', 'sweets', 'tea' ]

/**
 * 
 * 8) indexOf()
 */

console.log(arr.indexOf('Litchi')) // 1 
console.log(arr.indexOf('orange')) // 0
console.log(arr.indexOf('tea')) // 3
console.log(arr.indexOf('Milk')) // -1 because Milk does not exist in the arr.

/**
 * 9) includes()
 * The includes() method in TypeScript is used to check if an array contains a 
 * specific element. It returns a boolean value: true if the element is found, 
 * and false otherwise. This method is inherited from JavaScript and works the
 *  same way in TypeScript, but with type safety benefits.
 *  Syntax -  array.includes(searchElement, fromIndex?)

 */

const numbers: number[] = [1, 2, 3, 4];
console.log(numbers.includes(2)); // true

const names: string[] = ["Alice", "Bob", "Charlie"];
console.log(names.includes("Bob")); // true
console.log(names.includes("Eve")); // false

/**
 * toString() in TypeScript
 * The toString() method is a built-in function in JavaScript and TypeScript that 
 * returns a string representation of the object on which it is called. 
 * Almost all objects in TypeScript (including numbers, arrays, dates, and custom
 * objects) inherit this method from the base Object class.
 * 
 */

const num: number = 123;
console.log(num.toString()); // "123"

const arr2: number[] = [1, 2, 3];
console.log(arr2.toString()); // "1,2,3"

const date: Date = new Date(2025, 5, 25);
console.log(date.toString()); // e.g., "Wed Jun 25 2025 00:00:00 GMT+0530 (India Standard Time)"





