const express = require('express'),
app = express(),
path = require('path'),
bodyParser = require('body-parser');

// express config
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('port', process.env.PORT || 8000);

console.log(__dirname);

// start server
app.listen(app.get('port'), function () {
  console.log("Server started on port", app.get('port'));
});

var models = require("./models");


models.sequelize.sync().then(function() {
  console.log('Nice! Database looks fine');
}).catch(function(err){
  console.log(err,"Something went wrong with the database update!");
});

require('./loadData');
//models.Book.sequelize.sync({force:true});
//models.sequelize.query("delete from books where 1;");


var bookRoutes = require('./routes/book.route');

app.use("/books", bookRoutes);
