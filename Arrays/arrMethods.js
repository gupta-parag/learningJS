// Concat method - return an array

let fruits = ["apple", "banana", "orange"];
let vegetables = ["broccoli", "cauliflower", "carrot"];
let protein = ["tuna", "shrimp", "chicken"];

let shoppingList = fruits.concat(vegetables, protein);
console.log(shoppingList);
console.log("Using destructurin to concat arrays", [
  ...fruits,
  ...vegetables,
  ...protein,
]);

//Includes Method - returns boolean true\false
console.log("Includes of Method begins from here \n");
console.log(shoppingList.includes("orange"));
console.log(shoppingList.includes("orange", 2)); // One can specify the index to start searching from here
console.log(shoppingList.includes("orange", 3));

//indexOf() , return a number, -1 did not find
console.log(shoppingList.indexOf("orange"));
console.log(shoppingList.indexOf("pineapple"));
console.log(shoppingList.indexOf("shrimp"));
console.log(shoppingList.indexOf("cauliflower", 2)); // One can specify the index to start searching from here
console.log(shoppingList.indexOf("cauliflower", 5)); // can not find after index 5 as it is one index 4

// reverse
console.log(shoppingList.reverse()); // reverses the arry on the same variable
console.log(["12345", "789"].reverse());

// JOIN method

console.log(shoppingList.join()); // default join is a comma
console.log(shoppingList);

console.log(shoppingList.join("-")); // default join is a comma
console.log(shoppingList.join(" # ->")); // default join is a comma
