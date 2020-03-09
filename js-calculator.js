let fullOperation = [];

function add(a, b) {
    return [a + b];
}

function subtract(a, b) {
    return [a - b];
}

function multiply(a, b) {
    return [a * b];
}

function divide(a, b) {
    return [a / b];
}

function operate(array) {
    if(array[1] == '+') {
        sum = add(array[0], array[2])
        fullOperation.splice(0, 3)
        fullOperation = sum.slice(0);
    } else if(array[1] == '-') {
        sub = subtract(array[0], array[2])
        fullOperation.splice(0, 3)
        fullOperation = sub.slice(0);
    } else if(array[1] == '*') {
        multi = multiply(array[0], array[2])
        fullOperation.splice(0, 3)
        fullOperation = multi.slice(0);
    } else if(array[1] == '/') {
        div = divide(array[0], array[2])
        fullOperation.splice(0, 3)
        fullOperation = div.slice(0);
    }
}

function addToArray(event) {
    console.log(event.target);
    if(event.target.id == 'btn1' || event.target.id == 'btn2' || event.target.id == 'btn3' || event.target.id == 'btn4' || 
    event.target.id == 'btn5' || event.target.id == 'btn6' || event.target.id == 'btn7' || event.target.id == 'btn8' || 
    event.target.id == 'btn9' || event.target.id == 'btn0') {
        addNumber(event);
    } else if (event.target.id == 'btnAdd' || event.target.id == 'btnAdd' || event.target.id == 'btnAdd' ||
    event.target.id == 'btnAdd') {
        addOperator(event)
    }
}

function addNumber(event) {
    if(event.target.id == 'btn1') {
        if(fullOperation.length == 0 || fullOperation.length == 1) {
            fullOperation[0] = 1;
        } else {
            fullOperation[2] = 1;
        }
    } else if(event.target.id == 'btn2') {
        if(fullOperation.length == 0 || fullOperation.length == 1) {
            fullOperation[0] = 2;
        } else {
            fullOperation[2] = 2;
        }
    } else if(event.target.id == 'btn3') {
        if(fullOperation.length == 0 || fullOperation.length == 1) {
            fullOperation[0] = 3;
        } else {
            fullOperation[2] = 3;
        }
    } else if(event.target.id == 'btn4') {
        if(fullOperation.length == 0 || fullOperation.length == 1) {
            fullOperation[0] = 4;
        } else {
            fullOperation[2] = 4;
        }
    } else if(event.target.id == 'btn5') {
        if(fullOperation.length == 0 || fullOperation.length == 1) {
            fullOperation[0] = 5;
        } else {
            fullOperation[2] = 5;
        }
    } else if(event.target.id == 'btn6') {
        if(fullOperation.length == 0 || fullOperation.length == 1) {
            fullOperation[0] = 6;
        } else {
            fullOperation[2] = 6;
        }
    } else if(event.target.id == 'btn7') {
        if(fullOperation.length == 0 || fullOperation.length == 1) {
            fullOperation[0] = 7;
        } else {
            fullOperation[2] = 7;
        }
    } else if(event.target.id == 'btn8') {
        if(fullOperation.length == 0 || fullOperation.length == 1) {
            fullOperation[0] = 8;
        } else {
            fullOperation[2] = 8;
        }
    } else if(event.target.id == 'btn9') {
        if(fullOperation.length == 0 || fullOperation.length == 1) {
            fullOperation[0] = 9;
        } else {
            fullOperation[2] = 9;
        }
    } else if(event.target.id == 'btn0') {
        if(fullOperation.length == 0 || fullOperation.length == 1) {
            fullOperation[0] = 0;
        } else {
            fullOperation[2] = 0;
        }
    }
}

function addOperator(event) {
    if(fullOperation.length == 1) {
        if(event.target.id == 'btnAdd') {
            fullOperation[1] = '+';
        }
    }
}

document.addEventListener('click', addToArray)