document.addEventListener("DOMContentLoaded", () => {
    const typeHere = document.getElementById("typehere");
    const prevEquation = document.getElementById("prevequation");
    const buttons = document.querySelectorAll(".inputbtn");

    let currentInput = "";
    let previousInput = "";
    let operator = "";

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const value = button.textContent.trim();

            if (button.id === "AC") {
                currentInput = "";
                previousInput = "";
                operator = "";
                updateDisplay();
            } 

            else if (button.id === "changesign") {
                currentInput = currentInput.startsWith("-") ? currentInput.slice(1) : "-" + currentInput;
                updateDisplay();
            } 

            else if (button.id === "percent") {
                currentInput = (parseFloat(currentInput) / 100).toString();
                updateDisplay();
            } 

            else if (button.classList.contains("operatorbtn")) {
                if (currentInput) {
                    previousInput = currentInput;
                    currentInput = "";
                    operator = value;
                    prevEquation.textContent = `${previousInput} ${operator}`;
                    updateDisplay();
                }
            } 

            else if (button.classList.contains("equalbtn")) {
                if (previousInput && currentInput && operator) {
                    currentInput = calculate(previousInput, currentInput, operator).toString();
                    previousInput = "";
                    operator = "";
                    updateDisplay();
                }
            } 

            else {
                if (value === "." && currentInput.includes(".")) return;
                currentInput += value;
                updateDisplay();
            }
        });
    });

    function updateDisplay() {
        typeHere.textContent = currentInput || "0";
        prevEquation.textContent = previousInput ? `${previousInput} ${operator}` : "";
    }

    function calculate(a, b, operator) {
        const num1 = parseFloat(a);
        const num2 = parseFloat(b);
        if (isNaN(num1) || isNaN(num2)) return "";

        switch (operator) {
            case "+":
                return num1 + num2;
            case "-":
                return num1 - num2;
            case "/":
                return num1 / num2;
            case "x":
                return num1 * num2;
            default:
                return "";
        }
    }
});
