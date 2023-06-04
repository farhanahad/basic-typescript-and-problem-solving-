// Pick

interface Person {
    name: string;
    age: number;
    email: string;
    address: string;
  }
  
  type PersonPreview = Pick<Person, 'name' | 'age'>;
  
  const person: PersonPreview = {
    name: 'John',
    age: 25,
  };
  
  console.log(person);
  
  
  //Omit
  
  interface Person {
    name: string;
    age: number;
    email: string;
    address: string;
  }
  
  type PersonWithoutEmail = Omit<Person, 'email'>;
  
  const person: PersonWithoutEmail = {
    name: 'John',
    age: 25,
    address: '123 Main Street',
  };
  
  console.log(person);
  
  
  //Partial

  interface Person {
    name: string;
    age: number;
    email: string;
  }
  
  type PartialPerson = Partial<Person>;
  
  const partialPerson: PartialPerson = {
    name: 'John',
    age: 25,
  };
  
  console.log(partialPerson);
  
  
  
  // Record Type
  
  type Fruit = 'apple' | 'banana' | 'orange';
type FruitColor = 'red' | 'yellow' | 'orange';

const fruitColors: Record<Fruit, FruitColor> = {
  apple: 'red',
  banana: 'yellow',
  orange: 'orange',
};

console.log(fruitColors);
