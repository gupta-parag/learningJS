function isValidPassword(userName, pass) {
  if (pass.length >= 8) {
    if (pass.indexOf(" ") === -1) {
      if (pass.indexOf(userName) === -1) {
        return true;
      }
    }
  }
  return false;
}

console.log(isValidPassword("prgpt2", "pass word"));
console.log(isValidPassword("prgpt2", "prgpt2"));
console.log(isValidPassword("prgpt2", "prgpaedfsg"));
