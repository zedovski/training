var p = require('./global');
 m =45;
console.log(global)
console.log(global.test);
console.log(global.m);

function Person(name){
    this.name =name;
}

var p = Person('test');

console.log(global);
