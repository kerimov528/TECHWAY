/* Interface */

// *
interface Person {
    name: string
    age: number
}

// * (Methods)

interface Person {
    name: string
    age: number
    greet(): string
}

// * (Inheritance)

interface Student extends Person {
    id: number
}



