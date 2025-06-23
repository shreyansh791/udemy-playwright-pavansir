/* Function Overloading in TypeScript
Function overloading in TypeScript allows you to define multiple function
signatures for a single function name. This enables the same function to behave 
differently depending on the number or types of arguments passed to it.
While JavaScript itself does not natively support function overloading, 
TypeScript achieves this by allowing you to declare multiple overload signatures
for a function, followed by a single implementation that handles all cases. */

// 1) write a signature of a function
// 2) Implement a function
// 3) Calling a function

function add(a: number, b: number): number;
function add(a: string, b: string): string;

// Implementation signature (Implementation should satisfy all the signatures)
function add(a: any, b: any): any {
    if (typeof a === "string" && typeof b === "string") {
        return a + b; // Concatenate strings
    }
    if (typeof a === "number" && typeof b === "number") {
        return a + b; // Add numbers
    }
    throw new Error("Invalid arguments");
}

// Usage
const sum = add(2, 3);         // 5
const text = add("foo", "bar"); // "foobar"
console.log(sum)
console.log(text)
console.log('*****************************************************************')


// Example 2 (different number of parameters)

function join(a: string, b: string): string;
function join(a: string, b: string, c: string): string;
function join(a: number, b: number): number;
function join(a: any, b: any, c?: any): any {
    if (typeof a === "number" && typeof b === "number" && c === undefined) {
        return a + b;
    }
    if (typeof a === "string" && typeof b === "string" && c === undefined) {
        return a + b;
    }
    if (typeof a === "string" && typeof b === "string" && typeof c === "string") {
        return a + b + c;
    }
    throw new Error("Invalid arguments");
}

// Usage:
console.log(join("Hello", "World"));         // "HelloWorld"
console.log(join("A", "B", "C"));            // "ABC"
console.log(join(1, 2));                     // 3



