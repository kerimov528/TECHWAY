const typeorm = require('typeorm')

module.exports = new typeorm.EntitySchema({
    name: 'auth-app',
    tableName: 'users',
    columns: {
        id: {
            unique: true,
            primary: true,
            type: 'int',
            generated: true
        },
        email: {
            unique: true,
            type: 'varchar',
        },
        password: {
            type: 'varchar',
        }
    }
})