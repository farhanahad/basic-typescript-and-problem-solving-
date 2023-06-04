// //normal function

// function normalFunction(a:number,b:number):string{
//      const sum=a+b;
//      return `Sum is ${sum}`;
// }
// console.log(normalFunction(10,20));

// //arrow function

// const arrowFunction=(a:number,b:number):number=>{
//     return a+b;
// }
// console.log(arrowFunction(1,2));


// function add(num1:number ,num2:number):number{
//     return num1+num2;
// }
// console.log(add(2,3));

// const addArrow=(num1:number ,num2:number):number => num1+num2;
// console.log(addArrow(5,6))

// const arr=[1,3,4];

// const newArray=arr.map((num:number)=>num*num);


// const person:{
//     name:string;
//     balance:number;
//     addBalance(money:number):void;
// }={
//     name:"Farhan",
//     balance:1000,
//     addBalance(money:number){
//         console.log("My new balance is ",this.balance+money);
//     },
// }
// person.addBalance(500);




function generateAdder(a: number): (b: number) => number {

  return function(b: number) {
    console.log(a,b)
    return a + b;

  };

}
const addTwo = generateAdder(2);

console.log(addTwo(3));

console.log(addTwo(5));


