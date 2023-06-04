//Suppose you have an array of numbers in TypeScript, and you want to find the sum of all the even numbers in the array. How would you approach this problem and write code to solve it?

function sumEvenNumbers(numbers: number[]): number {
    const evenNumbers = numbers.filter((num) => num % 2 === 0);
    const sum = evenNumbers.reduce((acc, curr) => acc + curr, 0);
    return sum;
  }
  
  // Example usage:
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const sumOfEvens = sumEvenNumbers(numbers);
  console.log(`Sum of even numbers: ${sumOfEvens}`);
  