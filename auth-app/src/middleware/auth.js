const jwt = require('jsonwebtoken')

const auth = (req, res, next) => {
    const token = req.header('x-auth-token')
    if (!token) return res.status(401).send('Access denied. No tokens provided')

    try {
        const decoded = jwt.verify(token, process.env.TOKEN_SECRET)
        req.user = decoded
        next()
    } catch (err) {
        res.status(401).send('Invalid Token')
    }
}

module.exports = auth