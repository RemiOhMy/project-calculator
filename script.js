let previousOperand, currentOperand = 0;
let currentOperator;

const allClearBtn = document.querySelector(".allclear");
const deleteBtn = document.querySelector(".delete");
const numberBtns = document.querySelectorAll(".number");
const operatorBtns = document.querySelectorAll(".operator");

const previousOutput = document.querySelector(".previous");
const currentOutput = document.querySelector(".current");

allClearBtn.addEventListener("click", () => allClearFn());
deleteBtn.addEventListener("click", () => deleteFn());
numberBtns.forEach((btn) => btn.addEventListener("click", (e) => pressNumber(e)));
operatorBtns.forEach((btn) => btn.addEventListener("click", (e) => pressOperator(e)));

function allClearFn() {
    previousOperand = null;
    currentOperand = null;
    currentOperator = null;
    previousOutput.textContent = "";
    currentOutput.textContent = "";
}

function deleteFn() {
    currentOutput.textContent = currentOutput.textContent.slice(0, -1);
}

function pressNumber(e) {
    if (e.target.id === "decimal") {
        if (!currentOutput.textContent.includes(".")) {
            currentOutput.textContent += ".";
        }
    }
    else if (e.target.id === "zero") {
        if (!(currentOutput.textContent === "0")) {
            if (currentOutput.textContent.length < 15) {
                currentOutput.textContent += e.target.innerText;
            }
        }
    }
    else {
        if (currentOutput.textContent.length < 15) {
            currentOutput.textContent += e.target.innerText;
        }
    }
    currentOperand = parseFloat(currentOutput.textContent);
}

function pressOperator(e) {
    if (e.target.id === "add") {
        operate("+");
    }
    else if (e.target.id === "subtract") {
        operate("-");
    }
    else if (e.target.id === "multiply") {
        operate("*");
    }
    else if (e.target.id === "divide") {
        operate("/");
    }
    else if (e.target.id === "equals") {
        evaluate();
    }
}

function operate(operation) {
    if (!currentOperand) return;
    if (!previousOperand) {
        currentOperand = parseFloat(currentOutput.textContent);
        previousOperand = currentOperand;
        previousOutput.textContent = currentOutput.textContent + ` ${operation}`;
        currentOperator = operation;
        currentOperand = null;
        currentOutput.textContent = "";
    }
    else if (currentOperator) {
        evaluate();
    }
}

function evaluate() {
    if (!currentOperand) return;
    if (!previousOperand) return;
    if (!currentOperator) return;

    previousOutput.textContent += ` ${currentOperand}`;
    switch (currentOperator) {
        case "+": currentOperand = previousOperand + currentOperand;
        break;
        case "-": currentOperand = previousOperand - currentOperand;
        break;
        case "*": currentOperand = previousOperand * currentOperand;
        break;
        case "/": currentOperand = previousOperand / currentOperand;
        break;
    }
    currentOutput.textContent = currentOperand;
    previousOperand = null;
    currentOperator = null;
}