//We can't access static fields within the object we have to explicitly tell <ClassName><FieldName>
class Student{
    static count = 0;
    constructor(name){
        this.name = name;
        Student.count++; //Important
    }
}

const s1 = new Student("shivam");
const s2 = new Student("Vishwa");
console.log(s1);
console.log(s2);
console.log(Student.count);