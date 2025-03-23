const person = {
  x: 10,
  firsName: "Amresh",
  lastName: "Chaurasiya",
  hobbies: ["Coding", "Reading"],
  isMarried: false,
  hasGf: false,
  getFullName: function () {
    return "Amresh Chaurasiya";
  },
  address: {
    hno: 16,
    street: 22,
    countryCode: "IN",
    state: "Raj",
  },
};

console.log(person.x);
console.log(person.lastName);
console.log(person.address.state);

//Use Cases Group the data, mostly real world data in object form

const remote = {
  color: "Black",
  brand: "Sony",
  dimensions: { height: 1, width: 1 },
  turnOff: function () {},
  volumeUp: function () {},
};
