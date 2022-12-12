import { Column, Entity, BaseEntity, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity()
export class Person extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    first_name: string

    @Column()
    last_name: string

    @Column()
    email: string

    @Column({
        length: 10
    })
    card_number: string

}