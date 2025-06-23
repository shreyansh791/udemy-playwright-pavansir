let num: number = 1 // initialization

while (num < 10) {
    console.log(num)
    num++;
}

console.log("-----------------------------------------------------")

/** print even numbers from 1 to 10 */

let x: number = 2;
while (x <= 10) {
    if (x % 2 === 0) {
        console.log(x)
        x += 2
    }
}