//create a class

class Person{
    name: string;
    age: number;

    constructor(name1: string, age1: number){
        this.name = name1;
        this.age = age1;
    }
}

const p1 = new Person("Jalil bhai", 39);
//console.log(p1);

// inheritance
class Person1 {
    name: string;
    age: number;

    constructor(name:string, age:number){
        this.name = name;
        this.age = age;
    }

    show(){
        console.log(`Name: ${this.name} and Age: ${this.age}`);
    }
}

class Person2 extends Person1 {
    salary: number;
    position: string;

    constructor(name:string, age:number, salary: number, position: string){
        super(name, age);
        this.salary = salary;
        this.position = position;
    }

    show(){
        console.log(`Name: ${this.name} and Age: ${this.age}`);
    }
}

const p2 = new Person1("Fahim", 26);
const p3 = new Person2("Fahim", 26, 30000000000, 'developer');
console.log(p3.show());


class Parent{
    name:string;
    age:number;
    address:string;

    constructor(name:string,age:number,address:string){
        this.name=name;
        this.age=age;
        this.address=address;
    }
    makeSleep(hours:number):string{
        return `${this.name} sleeps for ${hours} hours`;
    }
}

class Student extends Parent{
    constructor(name:string,age:number,address:string){
        super(name,age,address);
    }
}
const student=new Student("Farhan",21,"Cumilla");
console.log(student.makeSleep(8));


class Teacher extends Parent {
    designation: string
 
   constructor(name: string, age: number, address: string, designation: string) {
      super(name,age,address)
      this.designation = designation;
   }
 
   takeClasses(numOfClass: number): string {
     return `This ${this.name} will take ${numOfClass} class`;
   }
 }
const teacher=new Teacher("Farhan",24,"Cumilla","Lecturer");
console.log(teacher.takeClasses(5)) 



