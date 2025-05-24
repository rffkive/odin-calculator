

function add (a,b) {
    return c = a +b ;
}

function product (a,b) {
    return c = a * b;
}

function substract (a,b) {
    return c = a - b;
}

function divide (a,b) {
    return c = a / b;
}

let firstNumber;
let operator = "";
let secondNumber;

function operate (operator, a, b) {
    switch (operator) 
    {
        case '+':
          return add(a, b);
        case '-':
          return substract(a, b);
        case '*':
          return product (a, b);
        case '/':
          return divide(a, b);
    }
};


const display = document.querySelector("#display");
const numberBtn = document.querySelectorAll(".number");

let currentDisplay = "";

numberBtn.forEach ((button) => {
    button.addEventListener("click", () => {
        if (operator == "") {
        currentDisplay += button.textContent; 
        display.textContent = currentDisplay;
        firstNumber = parseInt(currentDisplay);
        } else {
        currentDisplay += button.textContent; 
        display.textContent = currentDisplay;
        secondNumber = parseInt(currentDisplay);
        }
    });
});

const operationBtn = document.querySelectorAll(".operationButton");



operationBtn.forEach ((button) => {
    button.addEventListener("click", () => {
        operator += button.textContent;
        console.log(operator);
        currentDisplay = "";
    });
});

const equalBtn = document.querySelector(".equal");

equalBtn.addEventListener("click", () => {
    operate (operator, firstNumber, secondNumber);
    display.textContent = c;
    firstNumber = "";
    secondNumber = "";
    operator = "";
    currentDisplay = "";
});

