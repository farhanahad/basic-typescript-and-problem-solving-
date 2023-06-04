//Create a TypeScript class called Person that has private properties name and age, and a public method getDetails that returns a string with the person's name and age. Use parameter properties to define and initialize the properties in the constructor.



class Person {
    constructor(private name: string, private age: number) {}
  
    getDetails(): string {
      return `Name: ${this.name}, Age: ${this.age}`;
    }
  }
  const person = new Person("Farhan", 25);
  const personData = person.getDetails();
  console.log(personData);
    