// references in array

let nums = [34, 56, 23, 86];
let num2 = nums;

// both nums and num2 will change because Nums 2 is pointing to the same memory location
nums.push(100, 45);
console.log(" Nums : ", nums);
console.log(" Nums 2 : ", num2);

// Using const to initiate arrays, as it keeps the memory address constant
const foods = ["cucumber", "carrot", "ladyfinger"];
console.log(foods);
console.log(foods.pop());
console.log(foods.splice(1, 0, "apple", "papaya"));
console.log(foods);

//foods = ["pineapple", "watermelon"]; // TypeError: Assignment to constant variable
