const express = require('express'),
	app = express(),
    path = require('path'),
	bodyParser = require('body-parser');
var models = require("./server/models");
var cors = require('cors');
var jwt    = require('jsonwebtoken');
var router = express.Router();

var config = require('./secretKey');

var secretKey = config.secretKey;
// express config
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())
app.set('port', process.env.PORT || 8000);

app.set('secretKey', 'This is secret Key');

// start server
app.listen(app.get('port'), function () {
  console.log("Server started on port", app.get('port'));
});



var bookRoutes = require('./server/routes/book.route');


var userRoutes = require('./server/routes/user.route');

app.use("/user",userRoutes);
app.use("/books",bookRoutes);

// route middleware to verify a token

app.use(function(req, res, next) {
    next();
  // check header or url parameters or post parameters for token
  var token = req.body.token || req.query.token || req.headers['x-access-token'];

  // decode token
  if (token) {

    // verifies secret and checks exp
    jwt.verify(token, secretKey, function(err, decoded) {
      if (err) {
        return res.json({ success: false, message: 'Failed to authenticate token.' });
      } else {
        // if everything is good, save to request for use in other routes
        req.decoded = decoded;
        next(); // make sure we go to the next routes and don't stop here
      }
    });

  } else {

    // if there is no token
    // return an HTTP response of 403 (access forbidden) and an error message
    return res.status(403).send({
      success: false,
      message: 'No token provided.'
    });

  }
});




require('./loadDataToDb');

models.Book.sequelize.sync({});

