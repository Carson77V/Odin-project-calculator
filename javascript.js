// object used to hold variables that will be displayed
let variables = {
    string: '',
    a: 0,
    b: 0,
    operator: '',
    answer: 0,

}

// add eventListener to all buttons
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.textContent === 'clear') clear();
        else if (button.textContent === 'delete') backspace();
        else if(button.textContent === '=') {
            variables.string += button.textContent;
            equals();
        }
        else {
            variables.string += button.textContent;
        }
        // call updateDisplay at the end to make sure everything has executed
        updateDisplay();
    })
});

// function that performs addition
function addition(a, b){
    return a + b;
}

// function that performs subtraction
function subtraction(a, b){
    return a - b;
}

// function that performs multiplication
function multiplication(a, b){
    return a * b;
}

// function that performs division
function division(a, b){
    return a / b;
}

// function that performs operation
function operate(operator, a, b){
    switch(operator){
        case '+': return addition(a, b);
        break;
        case '-': return subtraction(a, b);
        break;
        case '*': return multiplication(a, b);
        break;
        case '/': return division(a, b);
        break;
    }
}

// clears everything
function clear(){
    // clean the object
    variables.string = '';
    variables.a = 0;
    variables.b = 0;
    variables.operator = '';
    variables.answer = 0;
}

function backspace(){
    let temp = variables.string.slice(0, -1);
    variables.string = temp;
}

// function that updates the display 
function updateDisplay(){
    const lowerDisplay = document.querySelector('.lowerDisplay');
    lowerDisplay.textContent = variables.answer;
    const upperDisplay = document.querySelector('.upperDisplay');
    upperDisplay.textContent = variables.string;
}

// this function will be used to calculate the entire entered equation 
function equals(){

}









/* get the DOM for lowerDisplay
const displayValue = document.querySelector('.lowerDisplay');
//change lowerDisplay to display text
displayValue.textContent += button.textContent;

// if a non number is pressed add the current number to object
if (isNaN(button.textContent)){

    if (button.textContent === 'delete') backspace(displayValue);

    else if (button.textContent === 'clear') clear();

    else {
        // save the operator value in object
        variables.operator = displayValue.textContent.charAt(displayValue.textContent.length - 1);
        const upperDisplay = document.querySelector('.upperDisplay');

        if (!upperDisplay.textContent == ''){
            // remove the operator and store the number in object
            variables.b = +displayValue.textContent.slice(0, -1);
            // add current variables to upperDisplay
            upperDisplay.textContent += variables.b + button.textContent;
            // erase data from main display
            displayValue.textContent = "";
        }
        else{
            // remove the operator and store the number in object
            variables.a = +displayValue.textContent.slice(0, -1);
            // add current variables to upperDisplay
            upperDisplay.textContent += variables.a + variables.operator;
            // erase data from main display
            displayValue.textContent = "";
        }
    }
}*/