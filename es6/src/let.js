let name ='rakesh';
function print(){
   for(var i =0;i<5;i++){
       console.log("The value of i is "+ i);
   }

   console.log("The value of is i is " + i);

   // another for loop with demonstrating the purpose of let

   for(let j =0;j<5;j++){
       console.log("The value of j is " + j);
   }

  // console.log("Can i access j let's see the value " + j);

console.log("The value of name is " + name);

}

print();