let firstNum;
let secondNum;
let operator;
let display = document.querySelector(".display");
let btnOne = document.querySelector(".one");
let btnTwo = document.querySelector(".two");
let btnThree = document.querySelector(".three");
let btnFour = document.querySelector(".four");
let btnFive = document.querySelector(".five");
let btnSix = document.querySelector(".six");
let btnSeven = document.querySelector(".seven");
let btnEight = document.querySelector(".eight");
let btnNine = document.querySelector(".nine");
let btnClear = document.querySelector(".clear");
btnOne.addEventListener("click", () => {
  display.textContent += "1";
});
btnTwo.addEventListener("click", () => {
  display.textContent += "2";
});
btnThree.addEventListener("click", () => {
  display.textContent += "3";
});
btnFour.addEventListener("click", () => {
  display.textContent += "4";
});
btnFive.addEventListener("click", () => {
  display.textContent += "5";
});
btnSix.addEventListener("click", () => {
  display.textContent += "6";
});
btnSeven.addEventListener("click", () => {
  display.textContent += "7";
});
btnEight.addEventListener("click", () => {
  display.textContent += "8";
});
btnNine.addEventListener("click", () => {
  display.textContent += "9";
});
btnClear.addEventListener("click", () => {
  display.textContent = " ";
});
function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}
function operate(operator, num1, num2) {
  if (operator == "+") {
    add(num1, num2);
  } else if (operator == "-") {
    subtract(num1, num2);
  } else if (operator == "*") {
    multiply(num1, num2);
  } else if (operator == "/") {
    divide(num1, num2);
  }
}
