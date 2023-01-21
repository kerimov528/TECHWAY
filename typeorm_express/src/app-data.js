const { DataSource } = require('typeorm')

const myDataSource = new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'test',
    entities: ['src/entities/*js'],
    logging: true,
    synchronize: true,
})

module.exports = myDataSource