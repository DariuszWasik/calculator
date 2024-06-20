let firstNumb;
let secundNumb;
let operator;
let equal = document.querySelector('#equal')
let paraLow = document.querySelector(".lowerDisplay");
let value = 0;
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
        if(operator !== undefined) {
            secundNumb = parseFloat(value);
            value = operate(firstNumb, secundNumb, operator);
            updateDisplay();
            firstNumb = value;
            operator = op.innerHTML;
            value = 0;   
        }    
        else {
            firstNumb = parseFloat(value);
            operator = op.innerHTML;
            value = 0;
        }
    })
})


function updateDisplay() {
    
    let stringValue = parseFloat(value).toString();
    let decimalIndex = stringValue.indexOf(".");
    let length = stringValue.slice(decimalIndex).length;
    if(length > 6){
        paraLow.textContent = parseFloat(stringValue).toFixed(3);
    }
    else {
        paraLow.textContent = parseFloat(value);
    }}
    
//other functions buttons

equal.addEventListener('click', (e) => {
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
});

clear.addEventListener('click', (e) => {
    firstNumb = undefined;
    secundNumb = undefined;
    value = 0;
    operator = undefined;
    updateDisplay();
});

change.addEventListener('click', () => {
    value = -value;
    updateDisplay();
}); 

float.addEventListener('click', () => {
    value = value.slice(1) + '.';
    updateDisplay();
})

