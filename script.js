let firstNumb;
let secundNumb;
let operator;
let equal = document.querySelector('#equal')
let paraLow = document.querySelector(".lowerDisplay");
let value = ''
let clear = document.querySelector('#clear');
let deleteBtn = document.querySelector('#delete');
let numb = document.querySelectorAll('.numb');
let buttons = document.querySelector("buttons");
let operators = document.querySelectorAll(".operator");
let change = document.querySelector("#change");
let float = document.querySelector('#float')


function add (a, b) {
     return a + b;
 }
 function subtract (a, b) {
     return a - b;
 }
 function multiply (a, b) {
     return a * b;
 }
 function divide (a, b) {
     return a / b;
    }
    
function operate(firstNumb, secundNumb, operator) {
 switch (operator) {
    case '+' :
        return add(firstNumb, secundNumb);
        break;
    case '-' :
        return subtract(firstNumb, secundNumb);
        break;
    case '*' :
        return multiply(firstNumb, secundNumb);
        break;
    case '/' :
        return divide(firstNumb, secundNumb);
        break;
    default:
        console.log("Something wrong!");
            }
        }

 //click button puts given number on display

 numb.forEach((num) => {
    document.querySelector(`#${num.id}`).addEventListener("click", (f) => {
        value += num.textContent;
        updateDisplay();
    })
});



    
// make all basic math button works

operators.forEach((op) => {
    document.querySelector(`#${op.id}`).addEventListener("click", (f) => {
        if((operator !== undefined) && (value == '')) {
            operator = op.innerHTML;
            return;
        }
            
            if(operator !== undefined) {
                secundNumb = parseFloat(value);
                value = operate(firstNumb, secundNumb, operator);
            updateDisplay();
            firstNumb = value;
            operator = op.innerHTML;
            value = '';   
        }    
        else {
            firstNumb = parseFloat(value);
            operator = op.innerHTML;
            value = '';
        }
    })
})


function updateDisplay() {
    let stringValue = parseFloat(value).toString();
    let decimalIndex = stringValue.indexOf(".");
    let length = stringValue.slice(decimalIndex).length;
    if(stringValue[stringValue.length-1] == 0) stringValue.slice(0,-1);
    if(length > 6){
        paraLow.textContent = parseFloat(stringValue).toFixed(3);
    }
    else {
        paraLow.textContent = value;
    }
}
    
    //other functions buttons
    
function equalFnc() {
    if((operator !== undefined) && (value == '')) {
        operator = "";
    }
    if (operator !== undefined){
        secundNumb = parseFloat(value);
        value = operate(firstNumb, secundNumb, operator);
        updateDisplay();
        firstNumb = parseFloat(value);
        operator = undefined;
    }
    else {
        firstNumb = parseFloat(value);
        operator = undefined;
    }
}


function clearFnc() {
    firstNumb = undefined;
    secundNumb = undefined;
    value = '';
    operator = undefined;
    updateDisplay();
}



function floatFnc() { 
    if (value.includes('.')) {
        return;
    }
    value = value + '.';
    updateDisplay(); 
}


function deleteFnc () {
    value = value.slice(0,-1);
    updateDisplay();
}

equal.addEventListener('click', () => equalFnc());
clear.addEventListener('click', () => clearFnc() );
float.addEventListener('click', () => floatFnc());
deleteBtn.addEventListener('click', () => deleteFnc());
change.addEventListener('click', () => {
    value = -value;
    updateDisplay();
});

// works with keyboard
document.addEventListener ("keydown", (e) => {
    if ((e.key >= 0) && (e.key <= 9)) {
        value += e.key;
        updateDisplay();
    }
    
//need operators handling function for keyboard events 
 
    function operatorsFnc () {
        if((operator !== undefined) && (value == '')) {
            operator = e.key;
            return;
        }
    
            if(operator !== undefined) {
                secundNumb = parseFloat(value);
                value = operate(firstNumb, secundNumb, operator);
            updateDisplay();
            firstNumb = value;
            operator = e.key;
            value = '';   
        }    
        else {
            firstNumb = parseFloat(value);
            operator = e.key;
            value = '';
        }
    }
    
    switch (e.key) {
        case '.':
            floatFnc();
            break;
        case '+':
        operatorsFnc();
            break;
        case '/':
        operatorsFnc();
        break;
        case '*':
            operatorsFnc();
            break;
            case '-':
                operatorsFnc();
                break;
        case 'Enter':
            equalFnc();
            break
        case 'Delete':
            clearFnc();
            break
        case 'Backspace':
            deleteFnc();
            break;            
        }
})
            
