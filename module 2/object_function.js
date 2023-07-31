//creating an object using object literal notation
const person = {
    firstname: "John",
    lastname: "Doe",
    age:30,
    occupation:"Engineer",
    //Method inside the object
    sayHello:function(){
        console.log(`Hello, my name is ${this.firstname }
        $ {this.lastname}. I am ${this.age} years old.`);
    },
};
//Accessing object properties
console.log(person.firstname); 
console.log(person.lastname);
console.log(person.age);
console.log(person.occupation);
//calling the method of the object
person.sayHello();
