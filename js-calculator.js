let fullOperation = [10, '/', 2];

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