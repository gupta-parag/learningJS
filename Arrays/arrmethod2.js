// Concat method - return an array

let fruits = ["apple", "banana", "orange"];
let vegetables = ["broccoli", "cauliflower", "carrot"];
let protein = ["tuna", "shrimp", "chicken"];

let shoppingList = fruits.concat(vegetables, protein);

//Slice method
let veggies = shoppingList.slice(3, 5); // ending index is not included
console.log(veggies);

veggies = shoppingList.slice(3, 6); // Select one more to get vegetables
console.log("Added an extra index : ", veggies);

//Slice takes a negative number to slice elements from the back
console.log("Slicing elements from the back");
console.log(shoppingList.slice(-2));
console.log(shoppingList);

// If you give only one position then it slices from that index till the end
console.log("Slicing elements using only one index");
console.log(shoppingList.slice(2));

//Using splice method
// .splice(indexNumber, totalElementsToDelete, elementsToAdd)
console.log(shoppingList.splice(2, 0, "organic milk", "cereal")); // INserting an element at an index
console.log("Added organic milk : ", shoppingList); //
console.log(shoppingList.splice(2, 2)); // Deleting two elements starting from index 2 and
console.log(shoppingList);

//using sort method

console.log(shoppingList.sort());
console.log(shoppingList);
console.log([1, 45, 22, 6789, 10000, 4500000].sort()); // converts them to string and then compares UTF values
