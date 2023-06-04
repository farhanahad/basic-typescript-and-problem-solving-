// keyof
type MovieType = {
    name: string;
    duration: number;
    category: string;
}

// type test = 'name' | 'duration' | 'category'
// const myTest:test = 'name'
const data:MovieType = {
    name: "Agni 2",
    duration: 310,
    category: "Action"
}

type myMoviesType = keyof MovieType // 'name' | 'duration' | 'category'
const myText11:myMoviesType = 'duration'
console.log(data[myText11])

