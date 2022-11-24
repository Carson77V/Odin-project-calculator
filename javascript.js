// object used to hold variables that will be displayed
let variables = {
    string: '',
    a: '',
    b: '',
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
        case 'x': return multiplication(a, b);
        break;
        case '/': 
        if (variables.b === '0'){
            return "Error/0";
        }
        else{
            return division(a, b);
        }
        break;
    }
}

// clears everything
function clear(){
    // clean the object
    variables.string = '';
    variables.a = '';
    variables.b = '';
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
    let string = variables.string;
    //counter will be used later to cut the string to calculate the rest
    // of string to variables.answer
    let counter = 0;
    // make sure equation doesn't have two operators back to back
    for (let i = 0; i < string.length - 1; i++){
        if (isNaN(string.charAt(i)) && isNaN(string.charAt(i + 1))){
            // display error on calculator screen
            variables.string = "Error: Can't have two operators in a row";
            break;
        }
    }

    // loop through string to calculate equation, but only the first two 
    // numbers
    for (let i = 0; i < string.length; i++){
        // check if first thing entered is NaN. If it is NaN, continue and ignore
        if (isNaN(string.charAt(0))) continue;

        // if there is an operator add it to the object or perform operation
        if (isOperator(string.charAt(i))){
            // if there is already an operator saved perform the equation and 
            //break the loop
            if (variables.operator > ''){
                variables.answer = operate(variables.operator, +variables.a, +variables.b);
                break;
            }
            // if no operator is saved yet, add one
            else if (variables.operator === ''){
                variables.operator = string.charAt(i);
            }
        }        
        // if operator has been passed add numbers to b
        else if (variables.operator > ''){
            variables.b += string.charAt(i);
        }
        // if nothing has been done append numbers to a
        else{
            variables.a += string.charAt(i);
        }
        counter++;
    }

    // removes the first two operators/numbers from the string
    string = string.slice(counter);

    // use loop to calculate the rest of numbers by using the current answer
    for (let i = 0; i < string.length; i++){
        // checks if the user inputed an equation with more than 2 variable
        if (string.charAt(i) === '='){
            break;
        }
        // if there is an operator save it to the object
        if (isOperator(string.charAt(i))){
            variables.operator = string.charAt(i);
            // reset variables.b to be used to store new numbers
            variables.b = '';
        }
        // when a number is found: store it in b and then perform operation with answer
        else {
            variables.b += string.charAt(i);
            variables.answer = operate(variables.operator, variables.answer, +variables.b);
        }

    }

}

// this function is called to check if an operator is used instead 
// of relying on isNaN
function isOperator(char){
    switch(char){
        case '+': return true;
        break;
        case '-': return true;
        break;
        case '/': return true;
        break;
        case 'x': return true;
        break;
        case '=': return true;
        break;
    }
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