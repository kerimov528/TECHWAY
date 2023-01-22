const express = require('express')
const myDataSource = require('./src/config/data-source')
const users = require('./src/routes/user')
const auth = require('./src/routes/auth')
const app = express()
require('dotenv').config()
app.use(express.json())

myDataSource.initialize().then(() => {
    console.log('Database initialized...')
}).catch((err) => {
    console.log('Error', err)
})

app.use('/api/users', users)
app.use('/api', auth)

app.listen(process.env.PORT, () => {
    console.log(`Server listing on ${process.env.PORT} Port`)
})