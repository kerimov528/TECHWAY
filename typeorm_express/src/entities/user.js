const typeorm = require('typeorm')

module.exports = new typeorm.EntitySchema({
   name: 'test',
   tableName: 'test-1',
   columns: {
      id: {
         primary: true,
         type: 'int',
         generated: true
      },
      name: {
         type: 'varchar'
      },
      email: {
         unique: true,
         type: 'varchar',
      }
   }
})