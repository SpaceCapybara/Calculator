const buttonOne = document.querySelector(".buttonOne");
const buttonTwo = document.querySelector(".buttonTwo");
const buttonThree = document.querySelector(".buttonThree");
const clearBttn = document.querySelector(".clearBttn");
const buttonFour = document.querySelector(".buttonFour");
const buttonFive = document.querySelector(".buttonFive");
const buttonSix = document.querySelector(".buttonSix");
const multiplyBttn = document.querySelector(".multiplyBttn");
const buttonSeven = document.querySelector(".buttonSeven");
const buttonEight = document.querySelector(".buttonEight");
const buttonNine = document.querySelector(".buttonNine");
const divideBttn = document.querySelector(".divideBttn");
const substractBttn = document.querySelector(".substractBttn");
const buttonZero = document.querySelector(".buttonZero");
const dotBttn = document.querySelector(".dotBttn");
const sumBttn = document.querySelector(".sumBttn");
const resultBttn = document.querySelector(".resultBttn");
const resultOutput = document.querySelector(".userInput");
const userInput = document.querySelector(".userInput");
const delBttn = document.querySelector(".delBttn");

let firstNum = "";
let operator = "";
let secondNum = "";
let result = "";

function isFloat(number) {
  return Number(number) === number && number % 1 !== 0;
}

delBttn.addEventListener("click", () => {
  if (operator === "") {
    firstNum = firstNum.slice(0, -1);
    userInput.textContent = firstNum;
    console.log(firstNum);
  } else {
    secondNum = secondNum.slice(0, -1);
  }
});

buttonOne.addEventListener("click", () => {
  if (operator === "") {
    firstNum += "1";
    userInput.textContent = firstNum;
  } else {
    secondNum += 1;
    userInput.textContent = `${firstNum} ${operator} ${secondNum}`;
  }
});

buttonTwo.addEventListener("click", () => {
  if (operator === "") {
    firstNum += "2";
    userInput.textContent = firstNum;
  } else {
    secondNum += 2;
    userInput.textContent = `${firstNum} ${operator} ${secondNum}`;
  }
});

buttonThree.addEventListener("click", () => {
  if (operator === "") {
    firstNum += "3";
    userInput.textContent = firstNum;
  } else {
    secondNum += 3;
    userInput.textContent = `${firstNum} ${operator} ${secondNum}`;
  }
});

buttonFour.addEventListener("click", () => {
  if (operator === "") {
    firstNum += "4";
    userInput.textContent = firstNum;
  } else {
    secondNum += 4;
    userInput.textContent = `${firstNum} ${operator} ${secondNum}`;
  }
});

buttonFive.addEventListener("click", () => {
  if (operator === "") {
    firstNum += "5";
    userInput.textContent = firstNum;
  } else {
    secondNum += 5;
    userInput.textContent = `${firstNum} ${operator} ${secondNum}`;
  }
});

buttonSix.addEventListener("click", () => {
  if (operator === "") {
    firstNum += "6";
    userInput.textContent = firstNum;
  } else {
    secondNum += 6;
    userInput.textContent = `${firstNum} ${operator} ${secondNum}`;
  }
});

buttonSeven.addEventListener("click", () => {
  if (operator === "") {
    firstNum += "7";
    userInput.textContent = firstNum;
  } else {
    secondNum += 7;
    userInput.textContent = `${firstNum} ${operator} ${secondNum}`;
  }
});

buttonEight.addEventListener("click", () => {
  if (operator === "") {
    firstNum += "8";
    userInput.textContent = firstNum;
  } else {
    secondNum += 8;
    userInput.textContent = `${firstNum} ${operator} ${secondNum}`;
  }
});

buttonNine.addEventListener("click", () => {
  if (operator === "") {
    firstNum += "9";
    userInput.textContent = firstNum;
  } else {
    secondNum += 9;
    userInput.textContent = `${firstNum} ${operator} ${secondNum}`;
  }
});

buttonZero.addEventListener("click", () => {
  if (operator === "") {
    firstNum += "0";
    userInput.textContent = firstNum;
  } else {
    secondNum += 0;
    userInput.textContent = `${firstNum} ${operator} ${secondNum}`;
  }
});

clearBttn.addEventListener("click", () => {
  userInput.textContent = "";
  operator = "";
  firstNum = "";
  secondNum = "";
  result = "";
  console.clear();
});

multiplyBttn.addEventListener("click", () => {
  if (operator === "") {
    userInput.textContent += " * ";
    operator = "*";
  } else {
  }
});

divideBttn.addEventListener("click", () => {
  if (operator === "") {
    userInput.textContent += " / ";
    operator = "/";
  } else {
  }
});

substractBttn.addEventListener("click", () => {
  if (operator === "") {
    userInput.textContent += " - ";
    operator = "-";
  } else {
  }
});

dotBttn.addEventListener("click", () => {
  if (operator === "") {
    userInput.textContent += ".";
    firstNum += ".";
  } else {
    secondNum += ".";
    userInput.textContent += ".";
  }
});

sumBttn.addEventListener("click", () => {
  if (operator === "") {
    userInput.textContent += " + ";
    operator = "+";
  } else {
  }
});

function operate(num1, num2, oper) {
  if (oper == "+") {
    let result = parseFloat(num1) + parseFloat(num2);
    userInput.textContent = result;
    console.log(result);
  } else if (oper == "-") {
    let result = parseFloat(num1) - parseFloat(num2);
    userInput.textContent = result;
    console.log(result);
  } else if (oper == "*") {
    let result = parseFloat(num1) * parseFloat(num2);
    userInput.textContent = result;
    console.log(result);
  } else if (oper == "/") {
    let result = parseFloat(num1) / parseFloat(num2);
    userInput.textContent = result;
    console.log(result);
  }
  return result
}

resultBttn.addEventListener("click", () => {
    operate(firstNum, secondNum, operator)
});
