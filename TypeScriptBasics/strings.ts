// '' or `` (backtick)

// declaration of string

let s1: string = 'This is simple string'
let s2: string = "This is another string with double quote"
let s3: string = `This is another string with backtick quote`

console.log(s1)
console.log(s2)
console.log(s3)

// string methods 

let str: string = 'Hello Typescript!'
// 1) to find the length of the string
console.log(str.length); // 17

// 2) toUpperCase() and toLowerCase()

console.log("Upper Case -  ", str.toUpperCase()); // HELLO TYPESCRIPT!
console.log("Lower Case -  ", str.toLowerCase()); // hello typescript!


// 3) charAt(index) and indexOf(string)

console.log(str.charAt(0));  // H
console.log(str.indexOf("e"));  // 1


// 4) subString()
let str2: string = 'Indiaismycountry'
console.log(str2.substring(0, 5)); // India
console.log(str2.substring(0, 5).length); // 5

// 5) includes()
console.log(str2.includes('typescript')); // false
console.log(str2.includes('country')); // true

// 6) startsWith() and endsWith() ---> returns a boolean value

console.log(str2.startsWith("India")); // true
console.log(str2.startsWith("is")); // false
console.log(str2.endsWith("country")); // true

// 7) replace()
let str3: string = 'Playwright is in demand in 2025'
str3.replace('Playwright', 'Playwright with Typescript')
console.log(str3.replace('Playwright', 'Playwright with Typescript'));

// 8) split() -- break the string into multiple parts based on the delimeter, returns an array.
let str4: string | string[] = 'I am from Lucknow'
str4 = str4.split(' ')
console.log(str4) // [ 'I', 'am', 'from', 'Lucknow' ]
console.log(str4.length) //4


// 9) trim(), trimStart(), trimEnd() 
let str5 = '       Welcome to the world of Typescript.          '

console.log(str5.length); // 52
console.log(str5.trim().length); // 35
console.log(str5.trimStart().length); // 45
console.log(str5.trimEnd().length); // 42


// 10) concat 
let greeting = "Hello";
let name2 = "Shreyansh Jain";
let message = greeting.concat(' ').concat(name2);
console.log(message); // "Hello Shreyansh Jain"

// concept of string immutable
let str1 = 'welcome'
let modifiedString = str1.concat(' to typescript')

console.log(str1); // welcome
console.log(modifiedString);  // welcome to typescript


// multiline string with backtick operator
let str11:string = `welcome 
to typescript`
console.log(str11);




















