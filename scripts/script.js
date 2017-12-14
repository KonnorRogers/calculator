let displayValue = 0;
let expression = null;
let display = document.querySelector("output");

function operate(operator, num1, num2){
    if (operator == "multiply"){
        return multiply(num1, num2);
    } else if (operator === "divide"){
        return divide(num1, num2);
    } else if (operator === "add"){
        return add(num1, num2);
    } else if (operator === "subtract"){
        return subtract(num1, num2);
    } else {
        return displayValue;
        console.log("no operator")
    }
}

function add(num1, num2){
    return num1 + num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function clearTotal(){
    displayValue = 0;
    display = document.querySelector("output");
    display.innerHTML = displayValue;
}

function addClearListener(){
    let clear = document.querySelector("button[data-value='clear']");
    console.log(clear);
    clear.addEventListener("click", clearTotal);
}

function addNumberListeners(){
    let numbers = document.querySelectorAll("button[name='number']");
    //console.log(numbers);
    numbers.forEach(number => number.addEventListener("click", function(){
        if (displayValue === 0){
            displayValue = parseInt(number.value);
            console.log(displayValue);
            display = document.querySelector("output");
            display.innerHTML = displayValue;
        } else {
            let valuePressed = parseInt(number.value);
            displayValue = operate(expression, displayValue, valuePressed);
        }
    }));
}

function addOperatorListeners(){
    let operators = document.querySelectorAll("button[name='operator']");
    console.log(operators);
    operators.forEach(operator => operator.addEventListener("click", function(){
        expression = operator.value;
        // console.log(typeof expression);
        if (expression === "equals"){
            display.innerHTML = displayValue.toString();
        }
    }));
}


addOperatorListeners();
addClearListener();
addNumberListeners();

// CLICK LISTENERS all works
// to implement keyboard functionality, place into keycodes
// possible data-keycode?