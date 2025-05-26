

function add (a,b) {
    return a +b ;
}

function product (a,b) {
    return a * b;
}

function subtract (a,b) {
    return a - b;
}

function divide (a,b) {
    if (b === 0) 
    { 
        return "ERROR >.<";
    }
    return a / b;
}


//function for operation to process
function operate(operator, a, b) {
    const operations = {
        '+': add,
        '-': subtract,
        '*': product,
        '/': divide
    };
    
    return operations[operator] ? operations[operator](a, b) : b;
}

// array for calculation logic
let calculationArray = [];
let validOperators = ["+","-", "*", "/"];

// calculator state
let displayValue = "0";
let AfterEqual = false;
let AfterOperator = false;

//function to update the display
const display = document.querySelector("#display");

function updateDisplay () {
    display.textContent = displayValue;
}

//button for number
function inputNumber(num) {
    if (AfterEqual || displayValue === "ERROR >.<" || displayValue === "ERROR") {
        calculationArray = [];
        displayValue = "";
        AfterEqual = false;
    }  
    if (AfterOperator) {
        displayValue = num;
        AfterOperator = false;
    } 
    else {
        displayValue = displayValue === '0' ? num : displayValue + num;
    }

    updateDisplay();
}

const numberBtn = document.querySelectorAll(".number");

numberBtn.forEach ((button) => {
    button.addEventListener("click", () => {
        inputNumber(button.textContent);
        }
    );
});

//button for operation

function inputOperator(nextOperator) {
        if (calculationArray.length === 0 && displayValue === "0") return;

    const inputValue = parseFloat(displayValue);

    if (AfterEqual) {
        AfterEqual = false;
    }

    if (calculationArray.length >= 2 && !AfterOperator) {
        const lastOperator = calculationArray[calculationArray.length - 1];
        const firstNumber = calculationArray[calculationArray.length - 2];
        const result = operate (lastOperator, firstNumber, inputValue);
        calculationArray = [result];
        displayValue = result;
        updateDisplay();
    } else {
        const lastElement = calculationArray[calculationArray.length - 1];
        if (typeof lastElement === 'number' || calculationArray.length === 0) {
            calculationArray.push(inputValue);
        } else {
            calculationArray.pop();
        }
    }

    calculationArray.push(nextOperator);
    AfterOperator = true;
}

const operationBtn = document.querySelectorAll(".operationButton");

operationBtn.forEach ((button) => {
    button.addEventListener("click", () => {
        inputOperator(button.textContent);
    });
});


//button for equal

function inputEqual() {
    const inputValue = parseFloat(displayValue);

    if (AfterOperator || calculationArray.length === 0) {
        displayValue = "ERROR";
        updateDisplay();
        AfterEqual = true;
        return;
    }

    calculationArray.push(inputValue);
    
    if (calculationArray.length >= 3) {
        const firstNumber = calculationArray[0];
        const lastOperator = calculationArray[1];
        const result = operate(lastOperator, firstNumber, inputValue);
        displayValue = result;
        calculationArray = [result];
    } else {
        displayValue = "ERROR";
    }
    
    updateDisplay();
    AfterEqual = true;
}
const equalBtn = document.querySelector(".equal");

equalBtn.addEventListener("click", () => {
    return inputEqual();
})

// add clear button
function clearAll() {
    calculationArray = [];
    displayValue = "0";
    AfterEqual = false;
    AfterOperator = false;
    updateDisplay();
}

const clearbtn = document.querySelector(".clear");

clearbtn.addEventListener("click", () => clearAll());

// add decimal button
function inputDecimal() {
    if (!displayValue.includes('.')) {
        displayValue += '.';
        updateDisplay();
    }
}

const decimalBtn = document.querySelector(".decimal");
decimalBtn.addEventListener("click", inputDecimal);