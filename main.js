const displaySolution = document.getElementById("solution");
const displayExpression = document.getElementById("expression");
const displayHistory = document.getElementById("history");
const btnContainer = document.getElementById("btn-container");

let btnArray = Array.from(btnContainer.children);
let input = '';
let expArray = [];
let expHistory = [];

btnContainer.addEventListener("click",btnClick);

function btnClick(e) {
    let btnId = e.target.id;
    let btn = e.target;
    switch(btnId) {
        case "btn-container":
            return;

        case "clear-btn":
            clear();
            return;

        case "del-btn":
            del();
            return;
        
        case "equal-btn":
            equal();
            return;

        case "subtraction-btn":
        case "addition-btn":
        case "multiplication-btn":
        case "divition-btn":
            inputOperator(btn.textContent);
            return;

        case '.':
            if(input.indexOf('.') > -1) return;
            break;
        case '0':
            if(input == '0') return;
            break;       
    }
    if(input.length <= inputSizeLimit()) {
        input += btn.textContent;
        updateDisplay(input);
        updateExpDisplay(expArray);
    }
}

function inputOperator(operator) {
    if(input == '.' || input == '0') return;
    if(input == '' && displaySolution.textContent.length > 0) {
        input = displaySolution.textContent;
    } else if(expArray.length == 1) {
        expArray.push(operator);
        expHistory.push(operator);
        updateExpDisplay(expArray);
        return;
    } else if(expArray.length == 2 && input != '') {
        expArray.push(input);
        expHistory.push(input);
        updateHistoryDisplay(expHistory);
        expHistory.push(operator);
        let result = operate(expArray)
        updateDisplay(result);
        expArray = [];
        expArray.push(result,operator);
        updateExpDisplay(expArray);
        input = '';
        return;
    }
    switch(operator) {
        case '+':
            if(input == '-' || input == '') {
                input = '+';
                updateDisplay(input);
                return;
            }
            break;
        
        case '-':
            if(input == '+' || input == '') {
                input = '-';
                updateDisplay(input);
                return;
            }
            break;

        case '*':
            if(input == '+' || input == '-' || input == '') return;
            break;

        case '/':
            if(input == '+' || input == '-' || input == '') return;
            break;    
    }
    expArray.push(input,operator);
    expHistory.push(input,operator)
    input = '';
    updateExpDisplay(expArray);
    updateHistoryDisplay(expHistory);
}

function updateDisplay(string) {
    flickDisplay();
    setTimeout(function(){
        displaySolution.textContent = string;
    }, 50)
}

function updateExpDisplay(array) {
    displayExpression.textContent = array.join(' ');
}

function updateHistoryDisplay(array) {
    if(expHistory.length >= 5) {
        displayHistory.classList.remove('toggle-display');
        displayHistory.textContent = array.join(' ');
    } else {
        displayHistory.classList.add('toggle-display');
        displayHistory.textContent = '';
    }
}

function del() {
    if(input.length == 0) {
        expArray.pop();
        updateExpDisplay(expArray);
        expHistory.pop();
        if(expArray.length == 0) {
            expHistory = [];
            updateHistoryDisplay(expHistory);
        }
    }
    input = input.slice(0,-1);
    updateDisplay(input);
}

function clear() {
    input = '';
    expArray = [];
    expHistory = [];
    updateDisplay(input);
    updateExpDisplay(expArray);
    updateHistoryDisplay(expHistory);
}

function equal() {
    if(input.length == 0) return;
    expArray.push(input,'=');
    updateExpDisplay(expArray);
    expHistory.push(input,'=');
    updateHistoryDisplay(expHistory);
    updateDisplay(operate(expArray));
    input = '';
    expArray = [];
    expHistory = [];
}

function operate(array) {
    let term1 = parseFloat(array[0]);
    let operator = array[1];
    let term2  = parseFloat(array[2]);
    let result = 0;
    switch(operator) {
        case '+':
            result = term1 + term2;
            break;

        case '-':
            result = term1 - term2;
            break;

        case '*':
            result = term1 * term2;
            break;

        case '/':
            if(term2 == 0) {
                errorDivideByZero()
                return '';
            }
            result = term1 / term2;
            break;

    }
    return String(result);
}

function errorDivideByZero() {
    alert("Error: Dividing by Zero");
    clear();
}

function inputSizeLimit() {
    let limit = 12;
    if(input[0] == '+' || input[0] == '-') limit++;
    return limit;
}

function flickDisplay() {
    displaySolution.classList.add('flicker-display');
    setTimeout(function(){
        displaySolution.className = '';
    }, 50);
}