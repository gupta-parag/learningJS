for (let i = 0; i < 99; i++) {
  console.log("Going over : ", i);
}

//reverse a string
const startingString = "abcdefghijklmnopqrstuvwxyz";
let reversedString = "";

for (let i = startingString.length - 1; i >= 0; i--) {
  reversedString += startingString[i];
}
console.log(reversedString);

// sum the grades and get the average
const students = [
  {
    name: "Jack",
    age: 19,
    grades: [88, 78, 90, 94],
  },
  {
    name: "Dave",
    age: 22,
    grades: [43, 58, 66, 45],
  },
  {
    name: "Bob",
    age: 34,
    grades: [78, 78, 92, 64],
  },
  {
    name: "Luke",
    age: 12,
    grades: [78, 98, 93, 84],
  },
];

for (let student of students) {
  let total = 0;
  student["grades"].forEach((d, i, n) => (total += d));
  console.log(
    `${student.name} is ${student.age} old, and has scored an average of ${
      total / 4
    }%`
  );
}
