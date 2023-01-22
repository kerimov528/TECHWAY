const _ = require('lodash')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const myDataSource = require("../config/data-source")
const User = require('../entity/user')

const getMe = async (req, res) => {
    const user = await myDataSource.getRepository(User).findOneBy({
        id: req.user.id
    })
    res.send(user)
}

const getUsers = async (req, res) => {
    try {
        const users = await myDataSource.getRepository(User).find()
        res.status(200).send(users)
    } catch (error) {
        res.status(401).send('Bad Request', error)
    }
}

const getUserById = async (req, res) => {
    try {
        const user = await myDataSource.getRepository(User).findOneBy({
            id: req.params.id
        })
        res.status(200).send(user)
    } catch (error) {
        res.status(401).send('Bad Request', error)
    }
}

const postUser = async (req, res) => {
    const user = await myDataSource.getRepository(User).findOneBy({
        email: req.body.email
    })
    if (user) res.status(400).send('User already registered')

    const users = await myDataSource.getRepository(User).create(req.body)
    const salt = await bcrypt.genSalt(10)
    users.password = await bcrypt.hash(users.password, salt)
    const result = await myDataSource.getRepository(User).save(users)

    // _.pick => methodu verilen deyerlerden sadece istediklerimizi return edir
    const selected = _.pick(result, ['email', 'id'])

    const token = jwt.sign({ _id: users.id }, process.env.TOKEN_SECRET)

    res.header('x-auth-token', token).send(selected)
}

const putUser = async (req, res) => {

}

const deleteUser = async (req, res) => {
    const user = await myDataSource.getRepository(User).findOneBy({
        id: req.params.id
    })
    const result = await myDataSource.getRepository(User).delete(user)
    res.status(200).send(result)
}

module.exports = {
    getUsers,
    getUserById,
    postUser,
    putUser,
    deleteUser,
    getMe
}