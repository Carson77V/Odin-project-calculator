// object used to hold variables that will be displayed
let variables = {
    a: 0,
    b: 0,
    operator: '',
    answer: 0,

}

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

// add eventListener to all buttons
const buttons = document.querySelectorAll('button');
let operation = [];
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        // get the DOM for lowerDisplay
        const displayValue = document.querySelector('.lowerDisplay');
        //change lowerDisplay to display text
        displayValue.textContent += button.textContent;
        // if a non number is pressed add the current number to object
        if (isNaN(button.textContent)){
            // remove the operator and store the number in object
            variables.a = +displayValue.textContent.slice(0, -1);
            // add current variables to upperDisplay
            const upperDisplay = document.querySelector('.upperDisplay');
            upperDisplay.textContent += variables.a + button.textContent;
            // erase data from main display
            displayValue.textContent = "";
        }
    })
});
