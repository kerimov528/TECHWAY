const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth')
const { getMe, getUsers, getUserById, postUser, deleteUser } = require('../controllers/user')


router.get('/me', auth, getMe)
router.get('/', getUsers)
router.get('/:id', getUserById)
router.post('/', postUser)
router.delete('/:id', deleteUser)


module.exports = router
