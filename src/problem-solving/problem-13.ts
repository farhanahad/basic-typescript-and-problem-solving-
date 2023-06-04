//13. Create a generic function that takes an array of elements and returns the first element of the array. Add a constraint to ensure that the generic type can be compared using the > operator.

function getFirstElement<T extends number | string>(arr: T[]): T | undefined {
    if (arr.length > 0) {
      return arr[0];
    } else {
      return undefined;
    }
  }
  const numbers: number[] = [1, 2, 3, 4, 5];
  const firstNumber = getFirstElement(numbers);
  console.log(firstNumber);  // Output: 1
  
  const strings: string[] = ["apple", "banana", "cherry"];
  const firstString = getFirstElement(strings);
  console.log(firstString);  // Output: "apple"