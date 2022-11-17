// object used to hold variables that will be displayed
let variables = {
    a: 0,
    b: 0,
    variable: '',
    answer: 0,

    calculateAnswer() {
        switch(this.variable){
            case '+': this.answer = this.a + this.b;
            break;
            case '-': this.answer = this.a - this.b;
            break;
            case 'x': this.answer = this.a * this.b;
            break;
            case '/': this.answer = this.a / this.b;
            break;
        }
    }
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

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        console.log(button.textContent);
    })
});
