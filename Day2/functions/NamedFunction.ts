// Named Function - A function that is declared with name

// function functionName(parameter): ReturnType
// {
// block of code.
// }

// Example 1: Named function with no parameters  and no return type 
function display(): void {
    console.log('Welcome to typescript')
}

display() // calling function

// Example 2: Named function with parameters  and return type 

function addNumbers(a: number, b: number): number {
    return a + b
}

console.log(addNumbers(10, 20))

// Example 3: Named function with Rest parameters
// Rest Parameters dont restrict the number of values that you can pass to function

function addNumbers1(...nums1: number[]): number {
    let sum: number = 0
    for (num of nums1) {
        sum = sum + num;
    }
    return sum
}

console.log(addNumbers1(10, 20, 30, 40, 50))



// Example 4: Named function with Rest parameters - mutliple dataTypes
// Rest Parameters dont restrict the number of values that you can pass to function

function findElements(...elements: (number | string)[]): number {
    return elements.length
}

console.log(findElements(10, "Raghvendra", "21", "Shreyansh"))

// Example 5:  function with optional parameter
function greet(name: string, title?: string): string {
    const userTitle = title ?? "User";
    return `Hello, ${userTitle} ${name}!`;
}

greet("Alice");         // "Hello, User Alice!"
greet("Bob", "Dr.");    // "Hello, Dr. Bob!"
