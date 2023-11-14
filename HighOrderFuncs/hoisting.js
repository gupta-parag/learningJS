console.log(animal);
var animal = "Dog";

// That is how the code is run and JS does not throw an error but says it is undefined
// JS hoists animal first
// var animal
// console.log(animal);
// animal = "Dog"

//console.log(shrimp); throws error for let
let shrimp = "piccadaily";
console.log(shrimp);
// same with const

// Function declaration are hoisted but function expressions are not

howl();
function howl() {
  console.log("aaaahhhhooooooooooo");
}
