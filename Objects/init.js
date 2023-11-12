let fitBitData = {
  steps: 5900,
  sleep: 8 + 1,
  calories: 750,
  totalMiles: 5,
  workOutThisWeek: "5 of 7",
};

//Keys are converted to strings

console.log(fitBitData.totalMiles);
console.log("Total steps : ", fitBitData["steps"]);
console.log("Total Sleep hours : ", fitBitData.sleep);

const numbers = {
  10: "ten",
  100: "one hundred",
};

console.log(numbers["100"]);

fitBitData["joined"] = "10 Oct 2023";
