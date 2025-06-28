// Access Modifiers in TypeScript
/**
 * Access modifiers in TypeScript are keywords that control the visibility and 
 * accessibility of class members (properties and methods). They are fundamental for
 *  implementing encapsulation and data hiding in object-oriented programming.
 */

/**
 public: Members are accessible from anywhere—inside the class, in subclasses, and from external code. This is the default if no modifier is specified.

private: Members are accessible only within the class where they are defined. They cannot be accessed or modified from outside the class or by subclasses.

protected: Members are accessible within the class and by subclasses (derived classes), but not from outside these classes.
Additionally, TypeScript supports the readonly modifier, which is not an access modifier but ensures that a property can only be assigned once (typically in the constructor).
 
 */

// 1) Public 
class Person {
  public name: string;
  constructor(name: string) {
    this.name = name;
  }
  public greet(): void {
    console.log(`Hello, ${this.name}!`);
  }
}

const person = new Person("Alice");
console.log(person.name); // Accessible
person.greet();           // Accessible
// Here, name and greet are accessible from anywhere.


//2) Private:

class BankAccount {
  private balance: number;
  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }
  private calculateInterest(): number {
    return this.balance * 0.05;
  }
}

const account = new BankAccount(1000);
// account.balance; // Error: Property 'balance' is private
// account.calculateInterest(); // Error: Property 'calculateInterest' is private
// Here, balance and calculateInterest are only accessible within BankAccount.

// 3) Protected:

class Employee {
  protected id: number;
  constructor(id: number) {
    this.id = id;
  }
}

class Manager extends Employee {
  getId() {
    return this.id; // Accessible in subclass
  }
}

const mgr = new Manager(101);
// mgr.id; // Error: Property 'id' is protected

// Here, id is accessible in Employee and its subclass Manager, but not from outside.

/**
 Best Practices
Use private or protected to encapsulate internal data and expose only what is necessary via public methods.

Minimize the use of public members to reduce the complexity of a class’s interface.

Use readonly for properties that should not change after initialization.

 */