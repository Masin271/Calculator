let firstNumber = "";
let secondNumber = "";
let operator = "";
let calDisplay = document.querySelector(".display");
let numbers = document.querySelectorAll(".number");
let operators = document.querySelectorAll(".operator");
let clear = document.querySelector(".clear");
let equal = document.querySelector(".equal");
calDisplay.textContent = "0";
numbers.forEach((number) =>
  number.addEventListener("click", (e) => {
    if (firstNumber.length <= 6) {
      firstNumber += e.target.textContent;
    }
    calDisplay.textContent = firstNumber;
  })
);
operators.forEach((operateVar) =>
  operateVar.addEventListener("click", (e) => {
    operator = e.target.textContent;
    secondNumber = firstNumber;
    firstNumber = "";
    calDisplay.textContent = operator + " " + firstNumber;
  })
);
clear.addEventListener("click", () => {
  calDisplay.textContent = "0";
  firstNumber = "";
  secondNumber = "";
  operator = "";
});

equal.addEventListener("click", () => {
  secondNumber = Number(secondNumber);
  firstNumber = Number(firstNumber);
  if (operator === "+") {
    secondNumber += firstNumber;
    firstNumber = secondNumber;
  } else if (operator === "-") {
    secondNumber -= firstNumber;
    firstNumber = secondNumber;
  } else if (operator === "*") {
    secondNumber *= firstNumber;
    firstNumber = secondNumber;
  } else if (operator === "/") {
    secondNumber /= firstNumber;
    firstNumber = secondNumber;
  }

  calDisplay.textContent = secondNumber;
});

function round(number) {
  return Math.round(number * 100000) / 100000;
}
