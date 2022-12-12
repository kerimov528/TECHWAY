import { Column, Entity, CreateDateColumn, UpdateDateColumn, ManyToMany, JoinColumn, JoinTable } from "typeorm";
import { Client } from "./Client";
import { Person } from "./utils/Person";

@Entity('banker')
export class Banker extends Person {

    
    @Column({
        // unique: true,
        length: 10
    })
    employee_number: string

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

    @ManyToMany(
        () => Client
    )
    @JoinTable({
        name: "bankers_clients",
        joinColumn: {
            name: 'banker',
            referencedColumnName: 'id'
        },
        inverseJoinColumn: {
            name: 'client',
            referencedColumnName: 'id'
        }
    })
    clients: Client[]

}

