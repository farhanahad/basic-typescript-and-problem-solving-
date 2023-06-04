//1. Create a function that takes an array of numbers as input and returns the sum of all the numbers in the array. Make sure to define the types for the input parameter and return value.


function sumArray(numbers:number[]):number{
    let sum:number=0;
    for(let num of numbers){
         sum+=num;
    }
    return sum
}
const numbers:number[]=[1,23,3,4,5];
const result:number=sumArray(numbers);
console.log(result)