
class Person{
  constructor(name,age,salary){
    this.name = name;
    this.age = age;
    this.salary = salary;
  }
  getName(){
    return this.name;
  }
  getAge(){
    return this.age;
  }
  static alive(){
    console.log("this can be accessed without object creation");
  }
}

var person = new Person('rahul',23,'4444');

class Address extends Person{
  constructor(name,age,salary,address){
    super(name,age,salary);
    this.adddress = address;
  }
  getDetails(){
    return this.getName()
  }
}

var person2  = new Address('test',23,'344','singapore');

console.log(person2.getName());
console.log(person2.getAge())