

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