var express = require('express');
var router = express.Router();

const User = require('../models/').User;
const bcrypt = require('bcryptjs');

var jwt    = require('jsonwebtoken');

var config    = require(__dirname + '/../../secretKey');

var secretKey = config.secretKey;

router.post("/create",function(req,res){
    User.findOne({ where: {username: req.body.username} })
        .then(function (user) {
            if(user){
                res.status(200).json("User already Exists");
            }
            else{
                var user = {
                        username:req.body.username,
                        password:req.body.password
                    };
                generateHash(req.body.password,function(err,hash) {
                    console.log("Th hash is " + hash);
                    user.password = hash;
                    
                    User.create(user)
                    .then(function(user)    {
                        
                        var token = jwt.sign({
        	                   username: user.username
                            },secretKey, {
                            expiresIn: '24h' // expires in 24 hours
                        });
                        console.log("token " + token);
                        
                        var resultObj ={};
                        resultObj.token = token;
                        resultObj.user = user;
                        resultObj.user.password = null;
                        res.status(200).json(resultObj);
                    })
                })
            }
        })
      .catch(function (error) {
        res.status(500).json(error);
      });
});

router.post("/login",function(req,res){
    console.log("Inside login ")
    User.findOne({ where: {username: req.body.username} })
        .then(function (user) {
            console.log("User fid one success " + JSON.stringify(user));        
             if(!user){
                res.status(200).json("User Does not Exist");
            }
            else{
                console.log("Before Verify password");
                verifyPassword(req.body.password,user.password,function(err,isMatch) {
                        if(isMatch)
                            var token = jwt.sign({
        	                   username: user.username
                            },secretKey, {
                            expiresIn: '24h' // expires in 24 hours
                        });
                            //res.status(200).json(user);
                        var resultObj ={};
                        resultObj.token = token;
                        resultObj.user = user;
                        resultObj.user.password = null;
                        res.status(200).json(resultObj);
                    })
            }
        })
      .catch(function (error) {
        res.status(500).json(error);
      });
});

var generateHash = function(password,callback){
    console.log("in generate hashh" + password)
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, (err, hash) => {
          
        console.log("hash iii " + hash);
          callback(null,hash);
        });
    });
}

var verifyPassword = function (password,hash,callback){
    console.log("The password is " + password);
    console.log("The hash is " + hash);
    bcrypt.compare(password, hash, (err, isMatch) => {
        if(err) throw err;
        callback(null, isMatch);
    });
}

module.exports = router;