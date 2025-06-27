/*
1. class
2. Read Only Properties (readonly can be used with only variables and hence read only properties)
3. Optional Property
4. Static Variable and Static Methods
*/

class Student
{
readonly studentId:number; // readonly property (value can be assigned only once in constructor)
name:string;  // regular property
email?:string; // optional property because of ?
static schoolName:string="Gd Goenka"

constructor(studentId:number,name:string,email?:string)
{
this.studentId = studentId
this.name = name
this.email = email
}

static changeSchoolName(schoolName:string)
{
Student.schoolName = schoolName
}

display()
{
console.log("ID - ", this.studentId, "Name - ", this.name)
if(this.email)
{
console.log("Email - ", this.email)
}
console.log("SchoolName - ", Student.schoolName)
   console.log("*************************************")
}
}

const s1= new Student(1,"Shreyansh","c_shrjain@google.com")
const s2=  new Student(2,"RPST")

s1.display()
s2.display()

// Constructor Overloading Example

class Person {
    name: string;
    age: number;

    // Overload signatures
    constructor();
    constructor(name: string, age: number);

    // Single implementation
    constructor(name?: string, age?: number) {
        this.name = name ?? "Unknown";
        this.age = age ?? 0;
    }
}

const p1 = new Person();
console.log(p1); // Person { name: 'Unknown', age: 0 }

const p2 = new Person("Alice", 25);
console.log(p2); // Person { name: 'Alice', age: 25 }

// Method Overloading Example

class Calculator {
    // Overload signatures
    add(a: number, b: number): number;
    add(a: string, b: string): string;

    // Single implementation
    add(a: number | string, b: number | string): number | string {
        return a as any + b as any;
    }
}

const calc = new Calculator();
console.log(calc.add(5, 10));        // 15
console.log(calc.add("Hello, ", "World!")); // Hello, World!





