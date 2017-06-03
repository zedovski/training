let promiseToCleanRoom = new Promise(function(resolve,reject){
    //cleaning the room
    //image processing
    var  i =0;
    while(i<100000000){
        i++;
    }
    let isClean = false;
    if(isClean){
        resolve('Clean completed');
    }
    else{
        reject('Not Cleaned');
    }
});

console.log("Async defined");

promiseToCleanRoom.then(function(fromResolve){
    console.log("The status is " + fromResolve);
}).catch(function(fromReject){
    console.log("From Reject with status " + fromReject);  
});

console.log("Async Executed");

//resolve means fulling the promise 

//reject promise is not fullfilled in given time or some depedency hence reject

//if promise is resolved this method is fired

