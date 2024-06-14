
let firstNumb;
let secundNumb;
let operator;
let plus = document.querySelector("#add");
let equal = document.querySelector('#equal')
let paraLow = document.querySelector(".lowerDisplay");
let displayValue; 
let minus = document.querySelector("#subtract");
let multiplyBtn = document.querySelector('#multiply');
let divideBtn = document.querySelector('#divide');
let clear = document.querySelector('#clear');
let deleteBtn = document.querySelector('#delete');

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



// function numbersWorks() {
    
//     // document.querySelector(".buttons").addEventListener("click", (e) => {
//     //     paraLow.textContent = "";
//     // }
//     //     , {once: true})}

//     document.querySelector("#one").addEventListener("click", (f) => {
//         paraLow.textContent += '1';
//         displayValue = parseInt(paraLow.textContent);
//     });
//     document.querySelector("#two").addEventListener("click", (f) => {
//         paraLow.textContent += '2';
//         displayValue = parseInt(paraLow.textContent);
//     });
//     document.querySelector("#three").addEventListener("click", (f) => {
//         paraLow.textContent += '3';
//         displayValue = parseInt(paraLow.textContent);
//     });
    
//     minus.addEventListener("click", (f) => {    
//         console.log(displayValue);
//         return displayValue;
//     }
//     )
    
// }

// numbersWorks();


    
let one = document.querySelector("#one");
one.addEventListener("click", (f) => {
    paraLow.textContent += '1';
    displayValue = parseInt(paraLow.textContent);
    
});
    
let two = document.querySelector("#two");
two.addEventListener("click", (f) => {
    paraLow.textContent += '2';
    displayValue = parseInt(paraLow.textContent);
    
 });

let three = document.querySelector("#three");
three.addEventListener("click", (f) => {
    paraLow.textContent += '3';
    displayValue = parseInt(paraLow.textContent);
    
});

let four = document.querySelector("#four");
four.addEventListener("click", (f) => {
    paraLow.textContent += '4';
    displayValue = parseInt(paraLow.textContent);
    
});

let five = document.querySelector("#five");
five.addEventListener("click", (f) => {
    paraLow.textContent += '5';
    displayValue = parseInt(paraLow.textContent);
    
});

let six = document.querySelector("#six");
six.addEventListener("click", (f) => {
    paraLow.textContent += '6';
    displayValue = parseInt(paraLow.textContent);
    
});
    
let seven = document.querySelector("#seven");
seven.addEventListener("click", (f) => {
    paraLow.textContent += '7';
    displayValue = parseInt(paraLow.textContent);

});
    
let eight = document.querySelector("#eight");
eight.addEventListener("click", (f) => {
    paraLow.textContent += '8';
    displayValue = parseInt(paraLow.textContent);
    
});
    
let nine = document.querySelector("#nine");
nine.addEventListener("click", (f) => {
    paraLow.textContent += '9';
    displayValue = parseInt(paraLow.textContent);
    
});
        
let zero = document.querySelector("#zero");
zero.addEventListener("click", (f) => {
    paraLow.textContent += '0';
    displayValue = parseInt(paraLow.textContent);

});

// the functions buttons

plus.addEventListener("click", (e) => {
    operator = '+';
    firstNumb = displayValue;
    displayValue = 0;
    paraLow.textContent  = "";
   });
minus.addEventListener("click", (e) => {
    operator = '-';
    firstNumb = displayValue;
    displayValue = 0;
    paraLow.textContent  = "";
   });
divideBtn.addEventListener("click", (e) => {
    paraLow.textContent = displayValue;
    operator = '/';
    firstNumb = displayValue;
    displayValue = 0;
    paraLow.textContent  = "";
   });
multiplyBtn.addEventListener("click", (e) => {
    operator = '*';
    firstNumb = displayValue;
    displayValue = 0;
    paraLow.textContent  = "";
   });

equal.addEventListener("click", (e) => {
    secundNumb = displayValue;
    console.log(firstNumb, secundNumb, operator)
    displayValue = operate(firstNumb, secundNumb, operator);
    paraLow.textContent = displayValue;
} )

clear.addEventListener('click', (e) => {
    paraLow.textContent = "";
    firstNumb = 0;
    secundNumb = 0;
    operator = ""
})

    

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    // array.push(displayValue);
    // displayValue = 0;
    // operator = '+';
    // //  paraLow.textContent = "";
    // console.log(array);
    // numbersKeys.addEventListener("click", (e) => {
    //     paraLow.textContent = "";
    // })
    // })

//     ))
//     if (array.length > 1){
//         displayValue = add(array[(array.length-1)], array[(array.length-2)]);
//         paraLow.textContent = displayValue;

//     }
// })


