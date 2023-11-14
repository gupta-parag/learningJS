// filter returns an array
// callback should return boolean

const nums = [
  12, 2345, 5678, 431, 653675, 423635, 7645, 524635, 645, 645, 542, 534, 52,
  4524, 54, 987,
];

console.log(
  nums.filter((d, i, n) => {
    return d > 5000;
  })
);
