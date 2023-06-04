//12. Create a function that takes an input parameter of type unknown. Inside the function, implement type guards to check if the input is of type string or number and perform different operations based on the type.

function processInput(input: unknown): void {
    if (typeof input === 'string') {
      console.log(`Input is a string: ${input.toUpperCase()}`);
    } else if (typeof input === 'number') {
      console.log(`Input is a number: ${input * 2}`);
    } else {
      console.log('Unknown input type');
    }
  }
  processInput("hello");  // Output: "Input is a string: HELLO"
  processInput(5);  // Output: "Input is a number: 10"
  processInput(true);  // Output: "Unknown input type"