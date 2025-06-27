type ProductDetails = {
    name: string,
    price: number,
    getInfo: () => string
}

let book1: ProductDetails = {
    name: 'learn JS',
    price: 1000,
    getInfo: () => {
        return book1.name + " costs " + book1.price
    }
}
/*
 You are using an arrow function for getInfo. In JavaScript/TypeScript, 
arrow functions do not have their own this context; they inherit this from the
surrounding (lexical) scope. Therefore, if you try to use this inside getInfo,
it will not refer to the book1 object as you might expect.
*/

let book2: ProductDetails = {
    name: 'learn Java',
    price: 800,
    getInfo: () => {
        return book2.name + " costs " + book2.price
    }
}
console.log(book1.getInfo())
console.log(book2.getInfo())



// Example: Creating an Object Using a Class

// Define a class
class Product {
    name: string;
    price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }

    getInfo(): string {
        return `${this.name} costs ${this.price}`;
    }
}

// Create an object (instance) of the class
const product1 = new Product('Learn JS', 1000);
console.log(product1.getInfo()); // Output: Learn JS costs 1000

// Create a second object (instance) of the class
const product2 = new Product('Learn TypeScript', 1200);
console.log(product2.getInfo()); // Output: Learn TypeScript costs 1200

