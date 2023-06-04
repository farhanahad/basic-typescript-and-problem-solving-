class MyBank{
    id: number;
    private amount: number;
    name: string;

    constructor(id: number, amount: number, name: string){
        this.amount = amount;
        this.id = id;
        this.name = name;
    }
}

const bank = new MyBank(101, 50000, "Fahim Ahammed");
//bank.amount = 0;
console.log(bank);




// class BankAccount{
//     public readonly id:number;
//     public name:string;
//     private _balance:number;

//     constructor(id:number,name:string,balance:number){
//         this.id=id;
//         this.name=name;
//         this._balance=balance;
//     }
//     getBalance(){
//         console.log(`My current balance is ${this._balance}`);
//     }
//     addDeposit(amount:number){
//         this._balance+=amount;
//     }
// }
// const myAccount=new BankAccount(1,"Farhan",1000)
// //myAccount._balance=9;
// console.log(myAccount)
// console.log(myAccount.getBalance())


//getter and setter


class BankAccount {
    public readonly id: number;
    public name: string;
    private _balance: number;
  
    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }
     
    private getTestBalance(): number{
       return this._balance
    }
    
    get Test():number{
      return this.getTestBalance()
    }
    //getter
    get balance(): number {
      return this._balance;
    }
    // getBalance(): number {
    //   return this._balance;
    // }
  
    //setter
    set deposit(amount: number) {
      this._balance = this.balance + amount;
    }
    // addDeposit(amount: number) {
    //   this._balance = this._balance + amount;
    // }
  }
  
  class StudentAccount extends BankAccount {
    test() {
       //this.
    }
  }
  
  const myAccount = new BankAccount(444, "Persian", 30);
  // myAccount.addDeposit(20);
  // myAccount.getBalance();
  // myAccount.getBalance();
  console.log(myAccount.balance);
  myAccount.deposit = 30;
  console.log(myAccount.balance);
  console.log(myAccount)
  