import * as Methods from './2module';

const add=(param1:number,param2:number):number =>{
    return param1+param2;
};

const res=Methods.add(4,6)
console.log(res)