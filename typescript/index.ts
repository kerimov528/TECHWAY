interface Iw {
    name: string
    age: boolean
    city: string | null
}

type IM = Omit<Iw, 'name' | 'age'> & {
    name: boolean
}

type Ip = Iw & {
    lastname: string
}

interface Iq extends Ip, Iw {
    as: 'd' | 'a'
}

let obj: IM = {
    name: false,
    // lastname: 'kerim',
    // age: false,
    city: 'Canada',
    // as: 'd'
}

export { }



