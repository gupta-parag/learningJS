// to see if the sentence contains all the alphabets of English language

function isPangram(sentence) {
  sentence = sentence.toLowerCase();
  const alphabets = {};
  for (let char of sentence) {
    if ("abcdefghijklmnopqrstuvwxyz".indexOf(char) !== -1) {
      if (alphabets[char]) {
        alphabets[char] += 1;
      } else {
        alphabets[char] = 1;
      }
    }
  }
  return Object.keys(alphabets).length === 26;
}

// console.log(isPangram("the Quick BROWN fox jumps over the lazy dog"));
// console.log(isPangram("the Quick BROWN fox jumps  lazy dog"));

function isPangram2(sentence) {
  sentence = sentence.toLowerCase();
  const alphabets = {};
  for (let char of "abcdefghijklmnopqrstuvwxyz") {
    if (sentence.indexOf(char) === -1) {
      return false;
    }
  }
  return true;
}

console.log(isPangram2("the Quick BROWN fox jumps over the lazy dog"));
console.log(isPangram2("the Quick BROWN fox jumps  lazy dog"));
