import { Entity, BaseEntity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm'
import { Client } from './Client'

export enum TransactionTypes {
    DEPOSIT = 'deposite',
    WITHDRAW = 'withdraw'
}

@Entity('transactions')
export class Transactions {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        type: 'enum',
        enum: TransactionTypes
    })
    type: string

    @Column({
        type: 'numeric'
    })
    amount: number

    @ManyToOne(
        () => Client,
        client => client.transactions 
    )

    @JoinColumn({
        name: 'client_id'
    })
    client: Client
}