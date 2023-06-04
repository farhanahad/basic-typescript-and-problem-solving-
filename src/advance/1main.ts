import {add as addTwo,subtract} from './1module';

const add=(param1:number,param2:number):number =>{
    return param1+param2;
};

const res=addTwo(4,6)
console.log(res)