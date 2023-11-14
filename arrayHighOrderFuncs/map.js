const words = ["asap", "byob", "rsvp", "diy"];

const abbreviation = words.map((d, i, n) => {
  return d.toUpperCase().split("").join(".");
});

console.log(abbreviation);

// Arrow functions with implicit return
const square = (n) => n * n;
