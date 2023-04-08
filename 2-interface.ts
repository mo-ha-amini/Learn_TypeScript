
interface Frout{
    id: number,
    name:string,
}

interface BackPack<T>{
    count:number,
    product:T,
}

interface Apple extends Frout{}

const saraBag : BackPack<Frout> = {
    count:2,
    product:{
        id:2,
        name:'red',
    }
}

interface User_a{
    id: number,
    name:string,
    role?:string, //optional
}

//Array:
const users: User_a[] = []
const users1 : Array<User_a> = []

const userMap : Map<number, User_a> = new Map()

const users2 : Array<User_a> | undefined = []
const fetchUser_a : User_a | null = null