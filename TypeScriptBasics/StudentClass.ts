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
