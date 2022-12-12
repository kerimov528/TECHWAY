import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Client } from "./entity/Client"
import { Banker } from "./entity/Banker"
import { Transactions } from "./entity/Transactions"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "anaR2002",
    multipleStatements: true,
    database: "typeorm",
    synchronize: true,
    // logging: false,
    entities: [User, Client, Banker, Transactions],
    // migrations: [],
    // subscribers: [],
})


