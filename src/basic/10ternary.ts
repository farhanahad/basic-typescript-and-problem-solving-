//Ternary Operator

// condition ? true_value : false_value

const isAvailable:boolean=false;

const checkAvailability=isAvailable?"book now":"You can't book";
console.log(checkAvailability);


// nullish operator ( ?? )
// check null and undefined
/**
 * null = No input
 * undefined = No input
 * hello = hello
 * 4 = 4
 * true = true
 * false = false
 * "" = ""
 */

const inputSomething:unknown =undefined;
const checkInput = inputSomething ?? "No input";
console.log(checkInput);



const isAuthenticatedUser = null;
const userName = isAuthenticatedUser ?? "Guest";
const userName2 = isAuthenticatedUser ? isAuthenticatedUser : "Guest";
console.log(userName ,  userName2);
console.log({ userName }, { userName2 });

type Manush = {
  name: string;
  age: number;
  address: {
    city: "NO City";
    road: "No Road";
    home?: "";
  };
};

const manush1: Manush = {
  name: "Manush",
  age: 100,
  address: {
    city: "NO City",
    road: "No Road",
  },
};

const home = manush1?.address?.home ?? "No Home"; // default 'No Home'
console.log({ home });