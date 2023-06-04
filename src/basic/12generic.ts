type myArray<T>=Array<T>

//T=number
//Array<number>

const myNumbers:myArray<number>=[1,2,3,4];
const myStrings:myArray<string>=["Hello","world"];

type dataType={name:string,age:number}

const ourInfo:myArray<dataType>=[
    {name:"Farhan",age:22},
    {name:"ahad",age:23}
];

type GenericTuple<X,Y>=[X,Y];
const relation:GenericTuple<string,string>=["Farhan","Farhana"];

type relationWithSalaryType={name:string;salary:number};
const relationWithSalary:GenericTuple<relationWithSalaryType,string>=[
    {
        name:"Farhan",
        salary:24
    },
    "Farhana"
];




// tuple in generic

type myGenType<X,Y,Z>=[X,Y,Z];

const A:myGenType<string,number,number>=["Farhan",2,3];
const b:myGenType<string,number,number>=["Farhana",2,3];
const c:myGenType<string,number,number>=["Farha",2,3];


// generic in function
const printInfo = <P, Q>(param1:P, param2:Q):P |Q =>{
    console.log(`param1: ${param1}, param2: ${param2}`)
    return param2;
}

console.log(printInfo<string, number>('fahim', 32))
// printInfo<boolean, number>(true, 32)
// printInfo<boolean, string>(true, 'hello')


// generic in interface

interface IMe<T, U> {
    name: string;
    age: T; // 23, 23years
    mark: U;
}

const me:IMe<string, number> = {
    name: "Firoz",
    age: "23 years",
    mark: 34 
}



// Generic Interface

interface CrushInterface<T, U = null> {
    name: string;
    husband: T;
    wife?: U;
    
  }
  
  interface PersonInterface {
    name: string;
    age: number;
  }
  
  const crush4: CrushInterface<PersonInterface, PersonInterface> = {
    name: "Kate",
    husband: {
      name: "Persian",
      age: 30,
    },
    wife: {
      name: "Winslet",
      age: 40,
    },
  };
  
  const crush1: CrushInterface<boolean, string> = {
    name: "Kate Winslet",
    husband: true,
    wife: "Chokina",
  };
  
  const crush2: CrushInterface<string> = {
    name: "Kate Winslet",
    husband: "Persian",
  };
  
  interface HusbandInterface {
    name: string;
    salary: number;
  }
  
  const crush3: CrushInterface<HusbandInterface> = {
    name: "Kate Winslet",
    husband: {
      name: "Persian",
      salary: 0.01,
    },
  };
  
  type GenericTuple1<X, Y> = [X, Y];
  
  const relation: GenericTuple1<string, string> = ["Persian", "Kate Winslet"];
  
  // type RelationWithSalaryType = { name: string; salary: number };
  
  interface RelationWithSalaryInterface {
    name: string;
    salary: number;
  }
  
  const relationWithSalary1: GenericTuple<RelationWithSalaryInterface, string> = [
    {
      name: "Persian",
      salary: 1000000000,
    },
    "Kate Winslet",
  ];
  
  const relationWithSalary2: GenericTuple<RelationWithSalaryInterface, string> = [
    {
      name: "Persian",
      salary: 1000000000,
    },
    "Kate Winslet",
  ];
  
  type GenericArray<T> = Array<T>;
  
  const rollNumbers: GenericArray<number> = [44, 12, 4];
  const rollNumbers2: GenericArray<string> = ["44", "12", "4"];
  const rolllNumbers3: GenericArray<boolean> = [true, false];
  
  type NameRollType = { name: string; roll: number };
  
  const userNameAndRollNumbers: GenericArray<NameRollType> = [
    {
      name: "Mr. X",
      roll: 1,
    },
    {
      name: "Mr. Y",
      roll: 2,
    },
  ];
  


  //generic constraints

  type MandatoryTypes={name:string;age:number;salary:number};

interface MandatoryInterface{
    name:string;
    age:number;
    salary:number
};

const addMeInMyCrushMind=<T extends MandatoryInterface>(myInfo: T)=>{
    const crush ="kate winslet";
    const newData={...myInfo,crush}
    return newData;
};

type MyInFoType = {
    name: string;
    age: number;
    salary: number;
    other1: boolean;
    other2: null;
  };
  const myInfo = {
    name: "Persian",
    age: 100,
    salary: 100000000,
    other1: false,
    other2: null,
  };
const result5=addMeInMyCrushMind(myInfo);
console.log(result5)

 

