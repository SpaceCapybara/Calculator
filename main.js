document.addEventListener('DOMContentLoaded', () => {
    const buttonOne = document.querySelector('.buttonOne')
    const buttonTwo = document.querySelector('.buttonTwo')
    const buttonThree = document.querySelector('.buttonThree')
    const clearBttn = document.querySelector('.clearBttn')
    const buttonFour = document.querySelector('.buttonFour')
    const buttonFive = document.querySelector('.buttonFive')
    const buttonSix = document.querySelector('.buttonSix')
    const multiplyBttn = document.querySelector('.multiplyBttn')
    const buttonSeven = document.querySelector('.buttonSeven')
    const buttonEight = document.querySelector('.buttonEight')
    const buttonNine = document.querySelector('.buttonNine')
    const divideBttn = document.querySelector('.divideBttn')
    const substractBttn = document.querySelector('.substractBttn')
    const buttonZero = document.querySelector('.buttonZero')
    const dotBttn = document.querySelector('.dotBttn')
    const sumBttn = document.querySelector('.sumBttn')
    const resultBttn = document.querySelector('.resultBttn')
    const resultOutput = document.querySelector('.userInput')
});

let firstNum = 0;
let operator = '';
let secondNum = 0;


buttonOne.addEventListener('click')