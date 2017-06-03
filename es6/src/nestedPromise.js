let openDoor = function(){
    return new Promise(function(resolve,reject){
        var  i =0;
        while(i<100000000){
            i++;
        }
        resolve('Door is opened');                   
    });
};

let turnOntheLights = function(){
    return new Promise(function(resolve,reject){
        var  i =0;
        while(i<100000000){
            i++;
        }
        resolve("Lights are on");
    })
};

let partyStart =  function(){
    return new Promise(function(resolve,reject){
        var  i =0;
        while(i<100000000){
            i++;
        }
        resolve("Party Started");                   
    })
};

console.log("Async Defined");

openDoor().then(function(result){
    return turnOntheLights(result);
}).then(function(result){
    return partyStart(result);
}).then(function(result){
    console.log("Party is started Yay");
}).catch(function(partyRejected){
    console.log("Sorry Party is cancelled")
});


console.log("Async Executed");