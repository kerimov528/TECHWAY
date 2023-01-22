const bcrypt = require('bcrypt')

const run = async () => {
    const salt = await bcrypt.genSalt(10)
    const hashed = await bcrypt.hash('anaR2002', salt)
    console.log('salt', salt)
    console.log('hashed', hashed)
}

run()