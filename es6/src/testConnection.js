var Sequelize = new require('sequelize');
var file2 = require('./testConn2');

const sequelize = new Sequelize('sequelize_passport', 'root', 'root', {
  host: '127.0.0.1',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

const User = sequelize.define('testUser', {
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  },
  age:{
      type:Sequelize.STRING
  }
});

// force: true will drop the table if it already exists

User.sync({force: true}).then(() => {
  // Table created
  return User.create({
    firstName: 'John',
    lastName: 'Hancock'
  });
});




