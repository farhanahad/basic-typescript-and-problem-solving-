// //null

// const myText=(text:string | null):void=>{
//     if(text===null){
//         console.log("I have no text");
//     }

//     else{
//         console.log(text)
//     }
// }
// myText(null);
// myText("This is not a null value");


// //Unknown type

// const guessSomething=(myGuess:unknown):void=>{
//     console.log(myGuess);
// }
// guessSomething("Hello");
// guessSomething(24);
// guessSomething(null);
// guessSomething(undefined);
// guessSomething(true);



// const searchName = (value: string | null) => {
//     if (value === null) {
//       console.log("There is nothing to search");
//     } else {
//       console.log("Searching...");
//     }
//   };
  
//   searchName(null);
  
//   // kmh^-1 --> ms^-1
  
//   const getMyCarSpeed = (speed: unknown) => {
//     if (typeof speed === "number") {
//       const convertedSpeed = (speed * 1000) / 3600;
//       console.log(`My speed is ${convertedSpeed}`);
//     }
//     if (typeof speed === "string") {
//       const [value, unit] = speed.split(" "); // ['10' ,'kmh^-1']
//       const convertedSpeed = (parseFloat(value) * 1000) / 3600;
//       console.log(`My speed is ${convertedSpeed}`);
//     } else {
//       console.log("There is wrong type");
//     }
//   };
  
//   getMyCarSpeed(10);
//   getMyCarSpeed("10 kmh^-1"); // 10 kmh-1
//   getMyCarSpeed(true);
  
//   function throwError(message: string): never {
//     throw new Error(message);
//   }
  
//   throwError("Bhai bhai error hyeche , kandi dimu");