// //spread operator

// const heroArr1:string[]=["IronMan","Thor","Hulk"];
// const heroArr2:string[]=["Captain america","Hawkeye"];
// heroArr1.push(...heroArr2);
// console.log(heroArr1)
// console.log(...heroArr2);

// //destructuring

// const [hero1,hero2,hero3,hero4]=heroArr1;
// console.log(hero1,hero2,hero3,hero4)

// //rest parameter

// const heroScore=(...score:number[]):number=>{
//     let sum:number=0;
//     score.map(n=>{
//         sum=sum+n;
//     })
//     return sum;
// }
// console.log(heroScore(10,20,30,40))

// const nameString=(...name:string[]):void=>{
//     name.map(n=>console.log(n));
// }
// nameString("Farhan","AHAD");




// spread operator

// const arr1=[1,2,3,4];
// const arr2=[5,6,7,8];

// arr1.push(...arr2);
// console.log(arr1);

//rest parameter

// const greetFriends=(
//     friend1:string,
//     friend2:string,
//     friend3:string
// ):void=>{
//     console.log(`Hi ${friend1}\n Hi ${friend2}\n Hi ${friend3}\n`);
// }
// greetFriends("Farhan","Ahad","Rahman");


// const greetFriends = (...friends: string[]): void =>
//   friends.forEach((friend) => console.log(`Hi ${friend}`));

// greetFriends(
//   "kashem",
//   "hashem",
//   "gashem",
//   "lashem",
//   "bangla bhai",
//   "english bhai"
// );

