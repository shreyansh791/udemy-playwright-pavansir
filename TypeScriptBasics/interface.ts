interface Person {
    name: string,
    age: number,
    display(): void
}

class A implements Person {
    name: string;
    age: number;
    static color: string = "green"

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
    display(): void {
        console.log(this.name + " - " + this.age + " - " + A.color);
    }
}
let person = new A("Shreyansh", 34);
person.display()