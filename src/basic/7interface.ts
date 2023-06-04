interface IHeroInterface {
    name: string;
    age: number;
}
// interface Z number;

type HeroType1 = {
    name: string;
    age: number;
}
type ABC = number;

const hero7:HeroType1 = {
    name: "siam ahmed",
    age: 34
}


 // Try creating a new interface and extending it like below
 interface Rectangle {
    height: number,
    width: number
  }
  
  interface ColoredRectangle extends Rectangle {
    color: string
  }
  
  const coloredRectangle: ColoredRectangle = {
    height: 20,
    width: 10,
    color: "red"
  };
  
  console.log(coloredRectangle);