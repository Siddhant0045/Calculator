const numberBtns = document.querySelectorAll('[data-numbers]')
const operatorsBtns = document.querySelectorAll('[data-operators]')
const outputscreen = document.getElementById('outputscreen')
const allclearBtn = document.getElementById('allClearBtn')
const clearBtn = document.getElementById('clearBtn')
const percentageBtn = document.getElementById('percentageBtn')
const pointBtn = document.getElementById('pointBtn')
const equalBtn = document.getElementById('equal')

numberBtns.forEach((button) => button.addEventListener('click',() => appendNumber(button.textContent)));
operatorsBtns.forEach((button) => button.addEventListener('click',() => setOperation(button.textContent)));
equalBtn.addEventListener("click",showanswer);
// allclearBtn.addEventListener('click',allclearfunc);
// clearBtn.addEventListener('click',clearfunc);
// percentageBtn.addEventListener('click',percentfunc)
// pointBtn.addEventListener('click',pointfunc)

let currentAns = '';
let currentInput = '';
let currentOperator = null;
let previousInput = '';
let shouldreset = false

function appendNumber(number){
    currentInput += number;
    if(currentOperator == ''){
        outputscreen.textContent = currentInput;
        shouldreset = false
    }
    else{
        outputscreen.textContent = currentInput;
        shouldreset = false
        evaluate();
    }
}

function setOperation(operation){
    if(currentOperator !== null){
        currentOperator = null
        setOperation(operation)
    }
    currentOperator = operation;
    previousInput = currentInput;
    currentInput = '';
    shouldreset = true
}

function evaluate(){
    if (currentOperator === null || shouldreset) return;
    const result = operate(currentOperator,parseInt(previousInput),parseInt(currentInput))
    if(result !== null){
        currentAns = result
        previousInput = '';
        currentOperator = '';
    }
    else{
        outputscreen.textContent = "Error"
    }
}
 
function operate(operator , a , b){
    if(operator == '+')
        return add(a,b)
    else if(operator == '-')
        return sub(a,b)
    else if(operator == 'x')
        return mul(a,b)
    else if(operator == '/')
        return div(a,b)
    else
        return "Error";
}

function add(a,b){
    return a+b
}

function sub(a,b){
    return a-b
}

function mul(a,b){
    return a*b
}

function div(a,b){
    if(b == 0) return "Error";
    return a/b
}

function showanswer(){
    outputscreen.textContent = currentAns.toString();
}