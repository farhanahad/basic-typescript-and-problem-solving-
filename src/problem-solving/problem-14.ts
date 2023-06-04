//14. Create a function that takes two parameters: one can be either a string or number, and the other can be either a boolean or an array of strings. Implement logic in the function to perform different operations based on the types of the parameters.

function performOperations(param1: string | number, param2: boolean | string[]): void {
    if (typeof param1 === 'string' && Array.isArray(param2)) {
      console.log('Performing operation 1');
      console.log(`Param1: ${param1.toUpperCase()}`);
      console.log(`Param2 Length: ${param2.length}`);
    } else if (typeof param1 === 'number' && typeof param2 === 'boolean') {
      console.log('Performing operation 2');
      console.log(`Param1 Squared: ${param1 * param1}`);
      console.log(`Param2: ${param2}`);
    } else {
      console.log('Invalid parameter types');
    }
  }
  performOperations("hello", ["apple", "banana"]);  // Output: Performing operation 1 ... Param1: HELLO ... Param2 Length: 2
  performOperations(5, true);  // Output: Performing operation 2 ... Param1 Squared: 25 ... Param2: true
  performOperations(10, ["apple", "banana"]);  // Output: Invalid parameter types