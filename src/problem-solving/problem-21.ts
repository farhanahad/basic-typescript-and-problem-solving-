//Create an interface called Person that includes properties for name (string), age (number), and email (string). Then create an array of Person objects and write a function that takes the array and a string email as parameters, and returns the Person object that matches the email or null if no match is found.

interface Person {
    name: string;
    age: number;
    email: string;
  }
  const people: Person[] = [
    { name: "Alice", age: 25, email: "alice@example.com" },
    { name: "Bob", age: 30, email: "bob@example.com" },
    { name: "Charlie", age: 35, email: "charlie@example.com" },
  ];

  function findPersonByEmail(people: Person[], email: string): Person | null {
    const foundPerson = people.find((person) => person.email === email);
    return foundPerson || null;
  }
  
  // Example usage:
  const email = "bob@example.com";
  const person = findPersonByEmail(people, email);
  if (person) {
    console.log(`Found person with email ${email}:`, person);
  } else {
    console.log(`No person found with email ${email}`);
  }
  