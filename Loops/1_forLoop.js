const cars = ["Saab", "Volvo", "BMW"];

for (let car in cars) {
  console.log(car); // Prints out the index
}

for (let car of cars) {
  console.log(car); // Prints out the index
}
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
  car: { type: "Fiat", model: "500", color: "white" },
};

console.log(Object.keys(person));

for (let key of Object.keys(person)) {
  console.log(key);
}

// for (let keys of person) {
//   console.log(keys);
// }
