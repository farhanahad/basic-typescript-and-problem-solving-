//Create a TypeScript function that takes a parameter of type unknown and uses a type guard to check whether the parameter is of type string. If it is, log the string to the console. If it is not, log an error message.

function unknownData(param: unknown) {
    if (typeof param === "string") {
      console.log(param);
    } else {
      console.error("Error: Parameter is not a string.");
    }
  }
  unknownData("Farhan"); 
  unknownData(2); 
    