// returns the first match it finds (an element)
// callback should return boolean
let movies = [
  "The Fantastic Mr. Fox",
  "Mr. and Mrs. Smith",
  "Mrs. Doubtfire",
  "Mrs. Deeds", // will ignore Mrs. Deeds
];

const movie = movies.find((d, i, n) => d.includes("Mrs"));
console.log(movie);
