//9. Define two interfaces: Car with properties like make, model, and year, and Driver with properties like name and licenseNumber. Create a function that takes objects of type Car and Driver and returns an object with the combined properties of both types.


interface Car{
    make:string;
    model:string;
    year:number;
}

interface Driver{
    name:string;
    licenseNumber:number;
}

function combineCarAndDriver(car: Car, driver: Driver): { car: Car, driver: Driver } {
    return {
      car: car,
      driver: driver
    };
  }
  
  // Example usage
  const myCar: Car = {
    make: "Toyota",
    model: "Camry",
    year: 2022
  };
  
  const myDriver: Driver = {
    name: "John Doe",
    licenseNumber: 123
  };
  
  const combinedData = combineCarAndDriver(myCar, myDriver);
  console.log(combinedData);