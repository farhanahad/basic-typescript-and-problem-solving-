//Create a TypeScript program that uses a generic function to reverse an array of strings, and takes a variable number of strings to the array using rest parameters. Provide an example of calling the function with a variable number of strings.

function reverseArray<T>(...data: T[]): T[] {
    return data.reverse();
  }
  
  const strings = reverseArray("ahad", "farhan", "a");
  console.log(strings);
  