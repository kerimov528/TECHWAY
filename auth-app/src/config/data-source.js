const { DataSource } = require('typeorm')

const myDataSource = new DataSource({
    type: 'mysql',
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    multipleStatements: true,
    database: "auth-app",
    synchronize: true,
    entities: ['src/entity/*.js'],
})

module.exports = myDataSource