var message = 'Good Afternoon';

var greeting  = `Welcome to the Session and ${message} everyone`;

console.log(greeting);

var htmlCode = '<p> This is my firstpara'+
  +'This is next line which cannot be split directly </p>';

  var templatehtml = `<p>
    This is my first line 
    <span> Good Morning</span>
  `
var todayDate = function(){
    return new Date();
}

var subject = `This mail is sent on ${todayDate()}`;

console.log(subject);