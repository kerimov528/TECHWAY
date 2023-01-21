const express = require('express')
const app = express()
const myDataSource = require('./app-data')
const User = require('./entities/user')
const port = 5000

app.use(express.json())

myDataSource.initialize().then(() => {
    console.log('Data initialized')
}).catch((err) => {
    console.log('Error', err)
})

// get all users 
app.get('/users', async (req, res) => {
    try {
        const users = await myDataSource.getRepository(User).find()
        // const { name, email } = users[0]
        // res.status(200).send(`Your name is ${name} and your email is ${email}`)
        // res.status(200).send(users)
        res.json(users)
    } catch (err) {
        res.status(400).send(err)
    }
})

// get user by Id 

app.get('/users/:id', async (req, res) => {
    const user = await myDataSource.getRepository(User).findOneBy({
        id: parseInt(req.params.id)
    })
    return res.send(user)
})

// post data to db

app.post('/users', async (req, res) => {
    const users = await myDataSource.getRepository(User).create(req.body)
    const result = await myDataSource.getRepository(User).save(users)
    return res.send(result)
})

// updating user by Id

app.put('users/:id', async (req, res) => {
    const user = await myDataSource.getRepository(User).findOneBy({
        id: parseInt(req.params.id)
    })
    myDataSource.getRepository(User).merge(user, req.body)
    const result = await myDataSource.getRepository(User).save(user)
    return res.send(result)
})

// delete user by Id 

app.delete('/users/:id', async (req, res) => {
    const result = await myDataSource.getRepository(User).delete(req.params.id)
    res.send(result)
})

app.listen(port, () => {
    console.log('Listen port 5000...')
})

