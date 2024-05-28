function add(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

function mul(a,b){
    return a*b;
}

function div(a,b){
    return a/b;
}

function operate(operator,a,b){
    a=Number(a)
    b=Number(b)
    if(operator=='+'){
        return add(a,b)
    }
    else if(operator=='-'){
        return sub(a,b)
    }
    else if(operator=='x'){
        return mul(a,b)
    }
    else if(operator=='/'){
        if(b==0){
            return null
        }
        return div(a,b)
    }
    return null
}

const numberButtons = document.querySelector('[data-numbers]')
const operatorButtons = document.querySelector('[data-operators]')
const allclear = document.getElementById('allclear')
const clear = document.getElementById('clear')
const percentage = document.getElementById('percentage')
const equal = document.getElementById('equal')
const pointBtn = document.getElementById('pointBtn')

let firstoperand = ''
let secondoperand = ''
let currentoperation = null
