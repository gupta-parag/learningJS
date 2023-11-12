//Functions that accept other functions as parameters
const repeatNTimes = function (func, n) {
  for (let i = 0; i < n; i++) {
    func();
  }
};

function laugh() {
  console.log("Hahahahaha");
}

function cry() {
  console.log("wah wah wahwah!!!");
}

repeatNTimes(laugh, 5);
repeatNTimes(cry, 3);

//Functions that can return functions

function multiplyBy(num) {
  return function (x) {
    return x * num;
  };
}

const triple = multiplyBy(3);
console.log(triple(8));
