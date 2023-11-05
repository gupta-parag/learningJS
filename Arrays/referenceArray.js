// references in array

let nums = [34, 56, 23, 86];
let num2 = nums;

// both nums and num2 will change because Nums 2 is pointing to the same memory location
nums.push(100, 45);
console.log(" Nums : ", nums);
console.log(" Nums 2 : ", num2);

// Using const to initiate arrays, as it keeps the memory address constant
