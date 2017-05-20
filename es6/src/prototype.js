function Person(name,age,salary){
    this.name = name;
    this.age = age;
    this.salary = salary;
}

Person.prototype.getName = function(){
   return this.name;
}

var person1 =  new Person('rahul',23,'3333');

var person2 = new Person('testing',24,'35633');

console.log(person1);


console.log(this.name);
console.log("The peroson1 name is "+ person2.getName());