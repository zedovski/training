module.exports.randomNumber  = function(){
 return Math.random();
}

var age = new Date();

module.exports.age  = age;

function Person(name){
  this.name =name;
  this. age = new Date();
}

module.exports.person = Person;