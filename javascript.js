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
        const displayValue = document.querySelector('.lowerDisplay');
        displayValue.textContent += button.textContent;
        /*operation.push(button.textContent);
        for (let i = 0; i < operation.length; i++){
            if(!operation[i].isNaN()){
                variables.a = 
            }
        }*/
    })
});
