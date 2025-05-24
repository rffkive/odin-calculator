

function add (a,b) {
    return a +b ;
}

function product (a,b) {
    return a * b;
}

function substract (a,b) {
    return a - b;
}

function divide (a,b) {
    return a / b;
}

let firstNumber;
let operator;
let secondNumber;

function operate (operator, a, b) {
    switch (operator) 
    {
        case '+':
          return add(a, b);
        case '-':
          return subtract(a, b);
        case '*':
          return multiply(a, b);
        case '/':
          return divide(a, b);
    }
};

console.log (operate("+",4,3));

const display = document.querySelector("#display");
const numberBtn = document.querySelectorAll(".number");

let currentDisplay = "";

numberBtn.forEach ((button) => {
    button.addEventListener("click", () => {
        currentDisplay += button.textContent;      
        display.textContent = currentDisplay;
    });
});

  