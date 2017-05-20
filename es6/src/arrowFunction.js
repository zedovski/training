let isEven = (num)=>{
    if(num%2===0){
        return 'even number';
    }
    else{
        return 'odd number';
    }
}

console.log(isEven(3));

let isEvenes5 = function(num){
    if(num%2===0){
        return 'even number';
    }
    else{
        return 'odd number';
    }
}

console.log(isEven(3));





let welcomeMessage =  ()=>{
    return 'good morning'
};



var person = {
    name:'rahul',
    hobbies:['cricket', 'tennis','snooker'],
    printSports:function (){
        console.log(this.hobbies);
        
        this.hobbies.forEach(function(va){
                console.log(this);
        });

    }
}






//-------------------------


var Actor = {
  name: 'RajiniKanth',
  movies: ['Kabali', 'Sivaji', 'Baba'],
  showMovies: function() {

      // solution 
      //var self = this;
   this.movies.forEach(function(movie) {
     console.log(this.name + " has acted in " + movie);
   })
  }
};


Actor.showMovies.bind(Actor);


// Solution for lexical scope issue will be solved by arrow funciton


var Actor = {
  name: 'RajiniKanth',
  movies: ['Kabali', 'Sivaji', 'Baba'],
  showMovies: function() {

      // solution 
      //var self = this;
   this.movies.forEach((movie)=> {
     console.log(this.name + " has acted in " + movie);
   })
  }
};

Actor.showMovies();
