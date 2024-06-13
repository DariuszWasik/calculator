
let firstNumb;
let secundNumb;
let operator;
 
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


let paraLow = document.querySelector(".lowerDisplay");
let displayValue 


let one = document.querySelector("#one");
one.addEventListener("click", (f) => {
    paraLow.textContent += '1';
    displayValue = parseInt(paraLow.textContent);
    console.log(displayValue);
    });
    
let two = document.querySelector("#two");
two.addEventListener("click", (f) => {
    paraLow.textContent += '2';
    displayValue = parseInt(paraLow.textContent);
    console.log(displayValue);
    
    });

let three = document.querySelector("#three");
three.addEventListener("click", (f) => {
    paraLow.textContent += '3';
    displayValue = parseInt(paraLow.textContent);
    console.log(displayValue);
    
});

let four = document.querySelector("#four");
four.addEventListener("click", (f) => {
    paraLow.textContent += '4';
    displayValue = parseInt(paraLow.textContent);
    console.log(displayValue);
    
});

let five = document.querySelector("#five");
five.addEventListener("click", (f) => {
    paraLow.textContent += '5';
    displayValue = parseInt(paraLow.textContent);
    console.log(typeof(displayValue));
    
});

let six = document.querySelector("#six");
six.addEventListener("click", (f) => {
    paraLow.textContent += '6';
    displayValue = parseInt(paraLow.textContent);
    console.log(displayValue);
    
    });
    
let seven = document.querySelector("#seven");
seven.addEventListener("click", (f) => {
    paraLow.textContent += '7';
    displayValue = parseInt(paraLow.textContent);
    console.log(displayValue);
    
    });
    
let eight = document.querySelector("#eight");
eight.addEventListener("click", (f) => {
    paraLow.textContent += '8';
    displayValue = parseInt(paraLow.textContent);
    console.log(displayValue);
    
    });
    
let nine = document.querySelector("#nine");
nine.addEventListener("click", (f) => {
    paraLow.textContent += '9';
    displayValue = parseInt(paraLow.textContent);
    console.log(displayValue);
    
    });
        
let zero = document.querySelector("#zero");
zero.addEventListener("click", (f) => {
    paraLow.textContent += '0';
    displayValue = parseInt(paraLow.textContent);
    console.log(displayValue)
});


