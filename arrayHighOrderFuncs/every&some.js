//EVERY - returns true if all elements have the same condition
// returns a boolean
// callback return a boolean

const words = ["dog", "dig", "log", "bag", "wag"];
const answer = words.every((d, i, n) => d.includes("d"));
console.log(answer);

const words2 = ["dog", "dig", "dag", "wad"];
const answer2 = words2.every((d, i, n) => d.includes("d"));
console.log(answer2);

//Some - returns true if only one or more element have the same condition
// returns a boolean
// callback return a boolean

const words3 = ["dog", "dig", "log", "bag", "wag"];
const answer3 = words3.some((d, i, n) => d.includes("d"));
console.log(answer3);
