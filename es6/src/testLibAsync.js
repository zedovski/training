var lib = require('./libAsync');

console.log('async starts')
lib.asyncSumOfAll(10000,function(err,res){
    console.log("Res is calculated" + res);
});

console.log("execution of async ends");
console.log("sync fn starts");

lib.syncSumOfAll(10000);

console.log("end of sync operation");



