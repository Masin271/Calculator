let num = " ";
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
let btnADD = document.querySelector(".add");
let btnSubtract = document.querySelector(".subtract");
let btnMultiply = document.querySelector(".multiply");
let btnDivide = document.querySelector(".divide");
let btnEqual = document.querySelector(".equal");
let btnZero = document.querySelector(".zero");
let btnFloat = document.querySelector(".float");
btnFloat.addEventListener("click", () => {
  display.textContent += ".";
  num += ".";
})
btnZero.addEventListener("click", () => {
  display.textContent += "0";
  num += "0";
})
btnOne.addEventListener("click", () => {
  display.textContent += "1";
  num += "1";
});
btnTwo.addEventListener("click", () => {
  display.textContent += "2";
  num += "2";
});
btnThree.addEventListener("click", () => {
  display.textContent += "3";
  num += "3";
});
btnFour.addEventListener("click", () => {
  display.textContent += "4";
  num += "4";
});
btnFive.addEventListener("click", () => {
  display.textContent += "5";
  num += "5";
});
btnSix.addEventListener("click", () => {
  display.textContent += "6";
  num += "6";
});
btnSeven.addEventListener("click", () => {
  display.textContent += "7";
  num += "7";
});
btnEight.addEventListener("click", () => {
  display.textContent += "8";
  num += "8";
});
btnNine.addEventListener("click", () => {
  display.textContent += "9";
  num += "9";
});
btnADD.addEventListener("click", () => {
  display.textContent = "+";
  num += " + ";
});
btnSubtract.addEventListener("click", () => {
  display.textContent = "-";
  num += " - ";
});
btnMultiply.addEventListener("click", () => {
  display.textContent = "*";
  num += " * ";
});
btnDivide.addEventListener("click", () => {
  display.textContent = "/";
  num += " / ";
});
btnEqual.addEventListener("click", () => {
  let condition = display.textContent.split("");
  if (condition[condition.indexOf("+")] == "+") {
    num = num.split(" + ");
    display.textContent = Number(num[0]) + Number(num[1]);
    return display.textContent;
  } else if (condition[condition.indexOf("-")] == "-") {
    num = num.split(" - ");
    display.textContent = Number(num[0]) - Number(num[1]);
    return display.textContent;
  } else if (condition[condition.indexOf("*")] == "*") {
    num = num.split(" * ");
    display.textContent = Number(num[0]) * Number(num[1]);
    return display.textContent;
  } else if (condition[condition.indexOf("/")] == "/") {
    num = num.split(" / ");
    display.textContent = Number(num[0]) / Number(num[1]);
    return display.textContent;
  }
});
btnClear.addEventListener("click", () => {
  display.textContent = "";
  num = "";
});
