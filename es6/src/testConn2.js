var test = function(){
    console.log("inside test");
    console.log(global.conn);
}

var userModel = require('./userModel');

// import {userModel} from './userModel';

module.exports = test;