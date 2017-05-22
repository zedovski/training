function asyncSumOfAll(total,callback) {
    var sum =0;
    if(total===undefined){
        var err = new Error('data is not defined');
        return callback(err);
    }
    for(let i = 0;i<total;i++){
        sum  =  sum+i;
    }
    /*
    setTimeout(function(){
        callback(null,sum);
    }, 0);
    */
        //Another solution which is efffective 
        //this is how node libraries are written 
        process.nextTick(function(){
            callback(null,sum)
        })

    
}

function syncSumOfAll(total) {
    var sum  = 0;
    if(total===undefined){
        var err = new Error('data is not defined');
        return err;
    }
    for(let i=0;i<total;i++){
        sum = sum + i;
    }
    return sum;
}

module.exports = {
    asyncSumOfAll:asyncSumOfAll,
    syncSumOfAll:syncSumOfAll
}
