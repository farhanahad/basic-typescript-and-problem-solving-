//6. Define a type alias called Coordinates that represents the latitude and longitude of a location. It should be an object with latitude and longitude properties, both of which are numbers. Create a variable of type Coordinates and assign some sample values to it.

type Coordinates={
    latitude:number;
    longitude:number;
}

const location1:Coordinates={
    latitude:23.8103,
    longitude:90.4125
}
console.log(location1)