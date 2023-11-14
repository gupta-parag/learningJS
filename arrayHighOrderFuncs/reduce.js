// reduces down to a single value
// accumulator , next element and start value of the accumulator
// whatever callback returns that becomes the value of the accumulator

const num = [12, 3456, 123, 87, 64, 245, 82, 76];

// starts as accumulator 12, current Value 3456

console.log(
  num.reduce((accumulator, currentValue) => accumulator + currentValue, 1000) // accumalator starts with 1000
);
