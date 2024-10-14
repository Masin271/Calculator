let firstNumber = "";
let secondNumber = "";
let operator = "";
let calDisplay = document.querySelector(".display");
let numbers = document.querySelectorAll(".number");
let operators = document.querySelectorAll(".operator");
let clear = document.querySelector(".clear");
let equal = document.querySelector("#equal");
let float = document.querySelector(".float");
let back = document.querySelector(".back");
calDisplay.textContent = "0";
numbers.forEach((number) =>
  number.addEventListener("click", (e) => {
    if (firstNumber.length <= 6) {
      firstNumber += e.target.textContent;
    }
    calDisplay.textContent = firstNumber;
  })
);
float.addEventListener("click", () => {
  if (!firstNumber.includes(".")) {
    firstNumber += ".";
    calDisplay.textContent += ".";
  }
});
operators.forEach((operateVar) =>
  operateVar.addEventListener("click", (e) => {
    operator = e.target.textContent;
    secondNumber = firstNumber;
    firstNumber = "";
    calDisplay.textContent = operator + " " + firstNumber;
  })
);
back.addEventListener("click", () => {
  firstNumber = firstNumber.slice(0, -1);
  if (calDisplay.textContent.length > 1) {
    calDisplay.textContent = firstNumber;
  }
    
    else if (calDisplay.textContent.length <= 1) {
      calDisplay.textContent = "0";
    }
})
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
    if (Number(firstNumber) != 0) {
      secondNumber /= firstNumber;
      firstNumber = secondNumber;
    } else {
      calDisplay.textContent = "0";
      firstNumber = "";
      secondNumber = "0";
      operator = "";
    }
  }

  calDisplay.textContent = secondNumber;
});

function round(number) {
  return Math.round(number * 100000) / 100000;
}
