// Single Line comment  ctrl+/
// Multi line comment Shift+Alt+A

// variable is container which can hold/store data 

// how to create the variable 
// var , let , const 
// Syntax : keyword variableName:variableDataType = variableValue
var a: number = 10

// difference between var, let and const 
/*
 1) Scope
 2) Declaration/assignment
 3) Re-declaration
 4) Re-initialization
 5) Hosting
 */
/*
in Modern JS, we do not use var keyword because of its limitation.
Avoid using var keyword because of its function scope and can lead to unexpected value.
let - use let when you need a variable can hold different value.    
const - use const when the variable value must not be changed.
*/

// 1) Scope - Accessible area (functional scope & block scope)
// var comes under functional scope 
function variableScope() {
    if (true) {
        var msg = "Hello World"
        let msg1 = "let variable"
        const msg2 = "const"
        console.log("msg is ", msg)
        console.log("msg is ", msg1)
        console.log("msg is ", msg2)
    }
    console.log("outside block msg is ", msg) // functional scope
    // console.log("outside block msg is ", msg1) // block scope error 
    // console.log("outside block msg is ", msg2)    // block scope error
}

variableScope()

// 2)  var variable can be declared without initialization

var x; // declaration
console.log("x ", x) // prints undefined.
x = 30;
console.log("x ", x) // prints 30.

// 2)  let variable can be declared without initialization

let y; // declaration
console.log("y ", y) // prints undefined.
y = 30;
console.log("y ", y) // prints 30.

// 2)  let variable can be declared without initialization

const z; // const must be initialized at the time of declaration



// 3) Re-declaration

// var keyword allows the re-declaration
// let and const does not allow the re-declaration 

var city = "Lucknow"
var city = "Sitapur"
console.log("city is ", city) // prints Sitapur

//  Below is not allowed and will give error
let city1 = "Lucknow"
let city1 = "Sitapur"
console.log("city is ", city1)

// 5) Hoisting
//  var hoisted with undefined, let and const (not Initialized)

console.log(a) // undefined.
var a = 10
console.log(a) // printd 10


console.log(b) // not initialized 
let b = 10
console.log(b)










