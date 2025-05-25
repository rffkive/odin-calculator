

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
function operate (operator, a, b) {
    switch (operator) 
    {
        case '+':
          return add(a, b);
        case '-':
          return subtract(a, b);
        case '*':
          return product (a, b);
        case '/':
          return divide(a, b);
    };
    return operations[operator] ? operations[operator](a, b) : b;
};

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

//button for number and show in display
function inputNumber(num) {
    if (AfterEqual) {
        calculationArray = [];
        AfterEqual = false;
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

function expression () {
        //currentinput;
        //put currentinput to first value;
        //operation;
        //currentiput;
        //put currentinput to second value;
        //operate ()

        //
};


// clear button
// const clear = document.querySelector(".clear");

// clear.addEventListener ("click", ()=> {
//     currentInput = '';
//     expression = [];
//     updateDisplay('YOUR ANSWER HERE');
// });


//const equalBtn = document.querySelector(".equal");

// equalBtn.addEventListener("click", () => {
//     console.log(`${firstNumber} ${operator} ${secondNumber}`);
//     operate (operator, firstNumber, secondNumber);
//     console.log(`${firstNumber} ${operator} ${secondNumber} = ${total}`);
    
//     display.textContent = total;
//     firstNumber = "";
//     secondNumber = "";
//     operator = "";
//     currentDisplay = "";
// });

// reduce array
// first iteration a + b = c
// second iteration c + b = c
// third iteration c+ b = c
