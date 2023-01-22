const Joi = require('joi')
const bcrypt = require('bcrypt')
const User = require('../entity/user')
const myDataSource = require('../config/data-source')
const jwt = require('jsonwebtoken')

// const validateReq =  (req) => {
//     const schema = {
//         email: Joi.string().min(5).max(255).required().email(),
//         password: Joi.string().min(55).max(255).required()
//     }

//     return Joi.validate(req, schema)
// }

const auth = async (req, res) => {
    // const { error } = validate(req.body)
    // if (error) return res.status(400).send(error.details[0].message)

    const user = await myDataSource.getRepository(User).findOneBy({
        email: req.body.email
    })
    if (!user) res.status(400).send('Invalid email or Password')

    const validPassword = await bcrypt.compare(req.body.password, user.password)
    if(!validPassword) res.status(400).send('Invalid email or Password')

    const token = jwt.sign({_id: user.id}, process.env.TOKEN_SECRET)

    res.status(200).send(token)
}

module.exports = {
    // validateReq,
    auth
}