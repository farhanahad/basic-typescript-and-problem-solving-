//5. Create a generic interface called Repository that represents a generic data repository. It should have methods like getAll, getById, create, update, and delete. Define the types for the methods and create a class that implements this interface.

interface Repository<T>{
    getAll():T[];
    getById(id:number):T | undefined;
    create(item:T):void;
    update(item:T):void;
    delete(id:number):void;
}

class GenericRepository<T> implements Repository<T>{
    private items:T[];

    constructor(){
        this.items=[];
    }
    getAll(): T[] {
        return this.items;
    }
    getById(id:number):T | undefined{
        return this.items.find((item: any) => item.id === id);
    }
    create (item:T):void{
        this.items.push(item);
    }

    update(item: T): void {
        const index = this.items.findIndex((existingItem: any) => existingItem.id === item);
        if (index !== -1) {
          this.items[index] = item;
        }
      }
    
      delete(id: number): void {
        const index = this.items.findIndex((item: any) => item.id === id);
        if (index !== -1) {
          this.items.splice(index, 1);
        }
      }


}

// Example usage
interface User {
    id: number;
    name: string;
    age: number;
  }
  
  const userRepository = new GenericRepository<User>();
  
  userRepository.create({ id: 1, name: "John Doe", age: 25 });
  userRepository.create({ id: 2, name: "Jane Smith", age: 30 });
  
  const allUsers = userRepository.getAll();
  console.log(allUsers);
  
  const user = userRepository.getById(1);
  console.log(user);
  userRepository.update({ id: 1, name: "John Doe", age: 26 });
  userRepository.delete(2);