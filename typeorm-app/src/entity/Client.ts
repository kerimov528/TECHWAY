import { Column, Entity, ManyToMany, JoinColumn, JoinTable, OneToMany, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { Banker } from "./Banker";
import { Transactions } from "./Transactions";
import { Person } from "./utils/Person";

@Entity('client')
export class Client extends Person {

    
    @Column({
        type: 'numeric'
    })
    balance: number
    
    @Column({
        default: true,
        name: 'name'
    })
    is_active: boolean

    @Column({
        type: 'simple-json',
        nullable: true
    })
    additional_info: {
        age: number,
        hair_color: string
    }
    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

    @OneToMany(
        () => Transactions,
        transactions => transactions.client
    )
    transactions: Transactions[]

    @ManyToMany(
        () => Banker
    )
    bankers: Banker[]
}








// import { Column, Entity, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToMany } from "typeorm";
// import { Banker } from "./Banker";
// import { Transactions } from "./Transactions";
// import { Person } from "./utils/Person";

// @Entity('client')
// export class Client extends Person {

//     @Column({
//         type: 'simple-json',
//         nullable: true
//     })
//     additional_info: {
//         age: number,
//         hair_color: string
//     }

//     @Column({
//         type: 'simple-array',
//         default: []
//     })
//     family_members: string[]

//     // @CreateDateColumn()
//     // created_at: Date

//     // @UpdateDateColumn()
//     // updated_at: Date

//     @OneToMany(
//         () => Transactions,
//         transactions => transactions.client
//     )
//     transactions: Transactions[]

//     @ManyToMany(
//         () => Banker
//     )
//     bankers: Banker[]
// }