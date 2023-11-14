const prices = [122, 123, 5436, 234, 75, 234, 567, 7557];
// In order to ignore the in place sort one should make copy
// Either
const costs = [...prices].sort((a, b) => a - b);
const expenses = prices.slice().sort((a, b) => b - a);

console.log("Costs are : ", costs);
console.log("Expenses are : ", expenses);

console.log("String sort ", prices.sort()); // sorts them based by ASCII values, string
console.log(
  "Number sort",
  prices.sort((a, b) => b - a)
); // sorts in place, replcaes the original array with the sorted value
console.log("In place sort : ", prices);

// general theory is :
// if the compare callback returns less than zero , sort a before b
// if the compare callback returns more than zero , sort b before a
