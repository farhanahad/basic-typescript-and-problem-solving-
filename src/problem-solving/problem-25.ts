//Write a function that takes in an array of objects with properties name and age, and returns only the objects where the person's age is greater than or equal to 18,


interface Person {
    name: string;
    age: number;
  }
  
  function filterPerson(people: Person[]): Person[] {
    return people.filter(person => person.age >= 18);
  }

  const people: Person[] = [
    { name: "Farhan", age: 15 },
    { name: "Ahad", age: 20 },
    { name: "Rahman", age: 19 },
    { name: "Fayaz", age: 16 },
  ];
  
  const adults = filterPerson(people);
  console.log(adults);
  