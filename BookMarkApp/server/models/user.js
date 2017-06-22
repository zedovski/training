'use strict';

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    //set the timestamps to be underscored: (created_at, updated_at)
    underscored: true
  });
  return User;
};