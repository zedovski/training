setTimeout(function(){
  console.log('Hello world 5'); // It's waiting like a normal person at a queue
}, 0);

setImmediate(function(){
  console.log('Hello world 4'); 
  // It's like get to last and be take care of first 
  // but always after of .nextStick and before of setInterval(, 0)
});

setTimeout(function(){
  console.log('Hello world 8'); // It's waiting like a normal person at a queue
}, 10);

setTimeout(function(){
  console.log('Hello world 6'); // It's waiting like a normal person at a queue
}, 0);

process.nextTick(function(){
   console.log('Hello world 3'); // It's like be at the bottom at this file
});

console.log("helloworld");