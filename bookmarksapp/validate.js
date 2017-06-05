var Sequelize = new require('sequelize');

const sequelize = new Sequelize('user', 'user', 'user', {
  host: '127.0.0.1',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});


const User = sequelize.define('testModel',{
 firstName:Sequelize.STRING,
 lastName:{type:Sequelize.STRING,allowNull:false}

}
);

sequelize.sync().then(function(){
  console.log('Sync\'d and all up and running');
});

User.create({firstName:'test'}).then(function(result){

 console.log("inside the create successor");
}).catch(function(err){

 console.log("In catch block");
 console.log(err);
});
