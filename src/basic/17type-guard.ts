// of guard
type typeOfData = number | string;
const doSomething = (a: typeOfData):typeOfData =>{
    if(typeof a === 'number'){
        return a;
    }
    return a;
}

// console.log(doSomething(23))
// console.log(doSomething('hello'))

// in guard
type X = {
    name: string;
    phone: number;
}

type Y = {
    name: string;
    address: string;
    salary: number;
}

const getInfo= (info: X | Y) => {
    if('phone' in info){
        return `Type A: phone: ${info.phone}`;
    }
    else if('salary' in info){
        return `Type B: salary: ${info.salary}`
    }
}

// instance of guard
class P {
    position: string;
    salary: number;

    constructor(position: string, salary: number){
        this.position = position;
        this.salary = salary;
    }

    showDetails(){
        console.log(`Position: ${this.position}`);
    }
}

class Q extends P{
    constructor(position: string, salary: number){
        super(position, salary)
    }
    showSalary(){
        console.log(`Salary: ${this.salary}`)
    }
}

class R extends P{
    constructor(position: string, salary: number){
        super(position, salary)
    }
    showSalarywithPosition(){
        console.log(`Salary: ${this.salary}, Position: ${this.position}`)
    }
}

function findInstance (person: P){
    if(person instanceof Q){
        person.showSalary();
    }
    else if(person instanceof R){
        person.showSalarywithPosition();
    }
}

const p4 = new Q('developer', 23);
const p5 = new R('engineer', 33);





type AlphaNumeric= string |number;

//keyof guard

function add(param1:AlphaNumeric,param2:AlphaNumeric){
    if(typeof param1=="number" && typeof param2=="number"){
        return param1+param2;
    }
    else{
        return param1.toString()+param2.toString();
    }
}
console.log(add("1","2"));
console.log(add(1,22));

//in guard

type NormalUserType={
    name:string;

}
type AdminUserType={
    name:string;
    role:"admin";
}
function getUser(user:NormalUserType|AdminUserType){
    if("role" in user){
        return `I'm admin & my role is ${user.role}`;
    }
    else{
        return ` I'm a normal user`;
    }
}
const normalUser1: NormalUserType = { name: "Mr. kallu" };
const adminUser1: AdminUserType = { name: "Mr. Gallu", role: "admin" };

console.log(getUser(normalUser1));
console.log(getUser(adminUser1));



//instaceof guard

class Animal {
  name: string;
  species: string;
  constructor(name: string, species: string) {
    this.name = name;
    this.species = species;
  }

  makeSound() {
    console.log("I am making sound");
  }
}

class Dog extends Animal {
  constructor(name: string, species: string) {
    super(name, species);
  }
  makeBark() {
    console.log(" I am barking");
  }
}
class Cat extends Animal {
  constructor(name: string, species: string) {
    super(name, species);
  }
  makeMeaw() {
    console.log("I am Meawing");
  }
}
function isDog(animal: Animal): animal is Dog {
    return animal instanceof Dog;
  }
  
  function isCat(animal: Animal): animal is Cat {
    return animal instanceof Cat;
  }
  
  function getAnimal(animal: Animal) {
    if (isDog(animal)) {
      animal.makeBark();
    } else if (isCat(animal)) {
      animal.makeMeaw();
    } else {
      animal.makeSound();
    }
  }
  
  const animal1 = new Dog("German Bhai", "dog"); // instance -> Dog
  const animal2 = new Cat("Persian Bhai", "cat"); // inatance -> Cat
  
 getAnimal(animal1)
  
