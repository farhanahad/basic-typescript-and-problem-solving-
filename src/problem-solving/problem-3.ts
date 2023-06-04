//3. Write a function called calculateArea that takes the length and width of a rectangle as parameters and returns its area. Define the types for the input parameters and return value.


function calculateArea(length:number,width:number):number{
    return length*width;
}
const length1:number=10;
const width:number=20;
const area:number=calculateArea(length1,width);
console.log(area)