let previousOperand, currentOperand = 0;

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
    previousOperand = 0;
    currentOperand = 0;
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
    else if (e.target.id === "zero"){
        if (!(currentOutput.textContent === "0")) {
            if (currentOutput.textContent.length < 15) {
                currentOutput.textContent += e.target.innerText;
            };
        }
    }
    else {
        if (currentOutput.textContent.length < 15) {
            currentOutput.textContent += e.target.innerText;
        };
    };
}