//creating a nested object representing a person and age
const person ={
    firstname: "John",
    lastname: "Doe",
    age: 30,
    address: {
        street: "123 Main Street",
        city: "New York",
        state: "NY",
        zipcode: "10001"
    },
    occupation: "Engineer"
};
//Accessing properties of the main object
console.log(person.firstname);
console.log(person.lastname);
console.log(person.age);
console.log(person.occupation);

//Accessing properties of the nested object 
console.log(person.address.street);
console.log(person.address.city);
console.log(person.address.state);
console.log(person.address.zipcode);