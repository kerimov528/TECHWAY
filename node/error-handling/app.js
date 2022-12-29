const express = require('express')
const errorHandler = require('./middleware/errorHandler')
const { tryCatch } = require('./utils/tryCatch')
const Joi = require('joi')
const app = express()

const getUser = () => undefined

app.get('/test', tryCatch(async (req, res) => {

    const user = getUser()
    if (!user) {
        throw new Error('User not Foundss')
    }
    return res.status(200).json({ success: true })
}))

const schema = Joi.object({
    userId: Joi.number().require()
})

app.post('/login', tryCatch(async (req, res) => {
    const { error, value } = schema.validate({})
    if (error) throw error

    const sub = getSub()
    if(!sub) {
        throw new AppError(300, 'Sub not Found', 400)
    }
}))

app.use(errorHandler)

app.listen(4000, () => {
    console.log('Listening on port 4000....')
})