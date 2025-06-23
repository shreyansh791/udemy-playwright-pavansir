function abc(a: number, b: number, callBack: () => void) {
    console.log("Sum is ", a + b)
    callBack()
}

function xyz() {
    console.log("xyz function is called.")
}

abc(1100, 2100, xyz)

// Example 2
// This function takes callback function as a parameter
function greet(name: string, smg: (message: string) => void) {
    smg(name) // executing the callback function
}

function showMessage(message: string) {
    console.log(`Hello ${message}`)
}
// calling the function by passing the callback function
greet("shreyansh", showMessage)