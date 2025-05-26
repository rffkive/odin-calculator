

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
        return "ERROR WAKARIMASEN >.<";
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
    
    if (operations[operator]) {
        const result = operations[operator](a, b);
        // Handle division by zero error
        if (typeof result === 'string' && result.includes('ERROR')) {
            return result;
        }
        // Round to avoid floating point precision issues
        return Math.round(result * 1000000000) / 1000000000;
    }
    return b;
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
    if (AfterEqual) {
        calculationArray = [];
        displayValue = "";
        AfterEqual = false;
        console.log ("reset");
    }  
    if (AfterOperator) {
        displayValue = num;
        AfterOperator = false;
        console.log("first stop");
        console.log (displayValue);
    } 
    else {
        displayValue = displayValue === '0' ? num : displayValue + num;
        console.log("second stop");
        console.log (displayValue);
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

function inputOperator (nextOperator) {
    const inputValue = parseFloat(displayValue);

    if (AfterEqual) {
        AfterEqual = false;
    };

    if (calculationArray.length >= 2 && !AfterOperator) {
        const lastOperator = calculationArray[calculationArray.length - 1];
        const firstNumber = calculationArray[calculationArray.length - 2];
        console.log(calculationArray);
        console.log (`${firstNumber} ${lastOperator} ${inputValue}`);
        const result = operate (lastOperator, firstNumber, inputValue);
        calculationArray = [result];
        displayValue = result;
        console.log(calculationArray);
        updateDisplay();
    } else {
        calculationArray.push(inputValue);
        console.log(calculationArray);
    }

    calculationArray.push(nextOperator);
    console.log(calculationArray);
    AfterOperator = true;
}

const operationBtn = document.querySelectorAll(".operationButton");

operationBtn.forEach ((button) => {
    button.addEventListener("click", () => {
        inputOperator(button.textContent);
    });
});


//button for equal

function inputEqual () {
    const inputValue = parseFloat(displayValue);
    console.log(inputValue);
    console.log(calculationArray);

    if (calculationArray.length > 2) {
    calculationArray.push(inputValue);
    const firstNumber = calculationArray[0];
    const lastOperator = calculationArray[1];
    console.log (`${firstNumber} ${lastOperator} ${inputValue}`);
    const result = operate (lastOperator, firstNumber, inputValue);
    displayValue = result;
    updateDisplay();
    AfterEqual = true;
    } else { 
        displayValue = "not a complete eqn";
        updateDisplay();
        AfterEqual = true;
    }
    
}

const equalBtn = document.querySelector(".equal");

equalBtn.addEventListener("click", () => {
    return inputEqual();
})

