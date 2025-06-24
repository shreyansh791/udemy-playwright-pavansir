/*
Tuple Array in TypeScript
A tuple in TypeScript is a special type of array where the types and the number 
of elements are fixed and known in advance. Each position in the tuple can have a 
different type, and the order of types matters.

*/

let user: [number, string] = [1, "Alice"];
console.log(user[0]);
console.log(user[1]);
console.log(user);

let user2: [number, string]  // Declaration
user2 = [2, "Aparna"];        // Initialization
console.log(user2);


/**
 *Tuple Array
A tuple array is simply an array where each element is a tuple of a specific 
structure. For example, if you want an array of pairs (number, string):
 * 
 */
let employees: [number, string][] = [
  [1, "Steve"],
  [2, "Bill"],
  [3, "Jeff"]
];
/**
 *
In this example, employees is an array where each item is a tuple containing a 
number and a string in that order. 
 */

let employees2: Array<[number, string]> = [
  [1, "Steve"],
  [2, "Bill"],
  [3, "Jeff"]
];

console.log(employees[0]);
console.log(employees[1]);

