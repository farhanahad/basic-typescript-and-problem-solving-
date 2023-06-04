// type assertion
const thinkSomething:unknown = "Farhan";
//const result = (thinkSomething as number)
console.log((thinkSomething as string).length)

const myLuckyNum = (num: string | number): number | string =>{
    if(typeof num === 'string'){
        return "This is string";
    }
    return num;
}
console.log(myLuckyNum("F"))