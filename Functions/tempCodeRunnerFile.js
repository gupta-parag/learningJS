function calcAverage(marks) {
  let total = 0;
  marks.forEach((d, i, n) => (total += d));
  return total / marks.length;
}

console.log(calcAverage([100, 80, 100]));
