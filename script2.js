let firstNumb;
let secundNumb;
let operator;
let plus = document.querySelector("#add");
let equal = document.querySelector('#equal')
let paraLow = document.querySelector(".lowerDisplay");
let value = 0; 
let minus = document.querySelector("#subtract");
let multiplyBtn = document.querySelector('#multiply');
let divideBtn = document.querySelector('#divide');
let clear = document.querySelector('#clear');
let deleteBtn = document.querySelector('#delete');
let numb = document.querySelectorAll('.numb');
let buttons = document.querySelector("buttons");


console.log(numb);
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
        value += num.textContent
        updateDisplay();
    })
});

function updateDisplay() {
    paraLow.textContent = parseInt(value);
}

plus.addEventListener("click", (e) => {
    if(operator !== undefined) {
        secundNumb = parseInt(value);
        console.log(firstNumb, operator, secundNumb)
        
        value = operate(firstNumb, secundNumb, operator);
        updateDisplay();
        firstNumb = value;
        operator = '+';
        value = 0;   
    }    
    else {
        firstNumb = parseInt(value);
        operator = '+';
        value = 0;
    }
});

minus.addEventListener("click", (e) => {
    if(operator !== undefined) {
        secundNumb = parseInt(value);
        console.log(firstNumb, operator, secundNumb)
        
        value = operate(firstNumb, secundNumb, operator);
        updateDisplay();
        firstNumb = value;
        operator = '-';
        value = 0;   
    }    
    else {
        firstNumb = parseInt(value);
        operator = '-';
        value = 0;
    }
});

multiplyBtn.addEventListener("click", (e) => {
    if(operator !== undefined) {
        secundNumb = parseInt(value);
        console.log(firstNumb, operator, secundNumb)
        
        value = operate(firstNumb, secundNumb, operator);
        updateDisplay();
        firstNumb = value;
        operator = '*';
        value = 0;   
    }    
    else {
        firstNumb = parseInt(value);
        operator = '*';
        value = 0;
    }
});

divideBtn.addEventListener("click", (e) => {
    if(operator !== undefined) {
        secundNumb = parseInt(value);
        console.log(firstNumb, operator, secundNumb)
        
        value = operate(firstNumb, secundNumb, operator);
        updateDisplay();
        firstNumb = value;
        operator = '/';
        value = 0;   
    }    
    else {
        firstNumb = parseInt(value);
        operator = '/';
        value = 0;
    }
});

equal.addEventListener('click', (e) => {
    secundNumb = parseInt(value);
    value = operate(firstNumb, secundNumb, operator);
    updateDisplay();
    firstNumb = parseInt(value);
    value = 0;
})

clear.addEventListener('click', (e) => {
    firstNumb = 0;
    secundNumb = 0;
    operator = undefined;
    value = 0;
    updateDisplay();

})