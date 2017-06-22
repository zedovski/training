// Seed the data
const sequelize_fixtures = require('sequelize-fixtures');

var path = require('path');
var models = require('../server/models/');

sequelize_fixtures.loadFiles([
	'./loadDataToDb/author.js', 
	'./loadDataToDb/book.js'
], models).then(function(){
	console.log('Seed data loaded!');
});