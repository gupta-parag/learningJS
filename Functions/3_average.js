function calcAverage(marks) {
  let total = 0;
  marks.forEach((d, i, n) => (total += d));
  return total / marks.length;
}

console.log(calcAverage([100, 80, 90, 67, 54, 22, 56, 22, 89, 23, 46, 2]));
