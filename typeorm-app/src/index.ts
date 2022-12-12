import express from "express"
import { AppDataSource } from "./data-source"
import { User } from "./entity/User"
import { Client } from "./entity/Client"
import { createClientRouter } from "./routes/create_client"
import { createBankerRouter } from "./routes/create_banker"

const app = express()

//connect to mongodb in nodejs?

app.use(express.json())
app.use(createClientRouter)
app.use(createBankerRouter)


AppDataSource.initialize()
    .then(async () => {

        console.log('Connected to DB...')

        // const client = new Client()
        // client.id = 3323
        // client.first_name = 'Anar'
        // client.last_name = 'Kerimli'
        // client.email = 'anarrkerimli@gmail.com'
        // client.additional_info = {
        //     age: 21,
        //     hair_color: 'yrllow'
        // }
        // client.family_members = [
        //     'Ata', 'Ana'
        // ]

        // await AppDataSource.manager.save(client)
        // const clients = await AppDataSource.manager.find(Client)
        // console.log("Loaded users: ", clients)

        // console.log("Inserting a new user into the database...")
        // const user = new User()
        // user.firstName = "Timber"
        // user.lastName = "Saw"
        // user.age = 25
        // await AppDataSource.manager.save(user)
        // console.log("Saved a new user with id: " + user.id)

        // console.log("Loading users from the database...")
        // const users = await AppDataSource.manager.find(User)
        // console.log("Loaded users: ", users)

        // console.log("Here you can setup and run express / fastify / any other framework.")

    }).catch(error => console.log(error))

app.listen(8080, () => { console.log(`Listening on port ${8080}...`) })


//How to connect to mysql in typeorm?