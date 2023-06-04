//union ->  |
//intersection -> &

type HeroTypeA={
    name:string;
    age:number;
}
type HeroTypeB=HeroTypeA &{
    salary:number;
    position:string;

}
const HeroData:HeroTypeB={
    name:"SIAM",
    age:24,
    salary:20000,
    position:"Actor"
}

const myFavHero: HeroTypeA | HeroTypeB={
    name:"Hulk",
    age:30,
    //salary:20000,
    //position:"Actor"
}



// Union Type
type NoobDevloper = {
    name:string
}
type JuniourDevloper = {
    name:string,
    expertise:string,
    experience:number
}
const newDeveloper: NoobDevloper | JuniourDevloper = {
    name:'Rana'
}
const newDeveloper2: NoobDevloper | JuniourDevloper = {
    name:'Rana',
    expertise:'JavaScript',
    experience:3
}



// Intersection Type
type NoobDev = {
    name:string
}
type JuniourDev = NoobDev & {
    expertise:string,
    experience:number
}
const newDev: NoobDevloper | JuniourDevloper = {
    name:'Rana'
}
const newDev2: NoobDevloper | JuniourDevloper = {
    name:'Rana',
    expertise:'JavaScript',
    experience:3
}

// Intersection Type (Recommended)
type NextLevelDev1 = JuniourDev & {
    leadershipExperience:number;
    level: 'Junior' | 'Mid' | 'Senior';
}
const bestDev1:NextLevelDev1 = {
    name:'Masud',
    expertise:'TypeScript',
    experience:5,
    leadershipExperience:4,
    level:'Mid',
}



// enum 
enum Level {
    junior = 'junior',
    mid = 'mid',
    senior = 'senior'
}


// Intersection Type + enum
type NextLevelDev = JuniourDev & {
    leadershipExperience:number;
    level: Level;
}
const bestDev:NextLevelDev = {
    name:'Masud',
    expertise:'TypeScript',
    experience:5,
    leadershipExperience:4,
    level: Level.mid,
}
// but enum is not recommended.