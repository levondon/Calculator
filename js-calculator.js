let fullOperation = '';

let operatorFlag = ''

function add(a, b) {
    return parseInt(a) + parseInt(b);
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function updateDisplay(event) {
    para = document.getElementById('display');
    if(operatorFlag) {
        if(fullOperation) {
            if(operatorFlag == '+') {
                fullOperation = add(fullOperation, para.innerText)
            } else if (operatorFlag == '-') {
                fullOperation = subtract(fullOperation, para.innerText)
            } else if (operatorFlag == '*') {
                fullOperation = multiply(fullOperation, para.innerText)
            } else if (operatorFlag == '/') {
                fullOperation = divide(fullOperation, para.innerText)
            }
        } else {
        fullOperation = para.innerText;
        }
        para.innerText = '';
        clearOperatorFlag() 
    }

    if(event.target.id == 'btn1') {
        para.innerText += '1'
    } else if(event.target.id =='btn2') {
        para.innerText += '2'
    } else if(event.target.id =='btn3') {
        para.innerText += '3'
    } else if(event.target.id =='btn4') {
        para.innerText += '4'
    } else if(event.target.id =='btn5') {
        para.innerText += '5'
    } else if(event.target.id =='btn6') {
        para.innerText += '6'
    } else if(event.target.id =='btn7') {
        para.innerText += '7'
    } else if(event.target.id =='btn8') {
        para.innerText += '8'
    } else if(event.target.id =='btn9') {
        para.innerText += '9'
    } else if(event.target.id =='btn0') {
        para.innerText += '0'
    }
} 

function flagOperator(event) {

    clearOperatorFlag()

    if(event.target.id == 'btnAdd') {
        operatorFlag = '+'
        document.getElementById('btnAdd').className = 'activeBtn';
    } else if(event.target.id == 'btnSub') {
        operatorFlag = '-'
        document.getElementById('btnSub').className = 'activeBtn';
    } else if(event.target.id == 'btnMul') {
        operatorFlag = '*'
        document.getElementById('btnMul').className = 'activeBtn';
    } else if(event.target.id == 'btnDiv') {
        operatorFlag = '/'
        document.getElementById('btnDiv').className = 'activeBtn';
    }

}

function clearOperatorFlag() {
    document.getElementById('btnAdd').className = 'operatorBtn'
    document.getElementById('btnSub').className = 'operatorBtn'
    document.getElementById('btnMul').className = 'operatorBtn'
    document.getElementById('btnDiv').className = 'operatorBtn'
    operatorFlag = ''
}

document.getElementById('btn1').addEventListener('click', updateDisplay)
document.getElementById('btn2').addEventListener('click', updateDisplay)
document.getElementById('btn3').addEventListener('click', updateDisplay)
document.getElementById('btn4').addEventListener('click', updateDisplay)
document.getElementById('btn5').addEventListener('click', updateDisplay)
document.getElementById('btn6').addEventListener('click', updateDisplay)
document.getElementById('btn7').addEventListener('click', updateDisplay)
document.getElementById('btn8').addEventListener('click', updateDisplay)
document.getElementById('btn9').addEventListener('click', updateDisplay)
document.getElementById('btn0').addEventListener('click', updateDisplay)
document.getElementById('btnAdd').addEventListener('click', flagOperator)
document.getElementById('btnSub').addEventListener('click', flagOperator)
document.getElementById('btnMul').addEventListener('click', flagOperator)
document.getElementById('btnDiv').addEventListener('click', flagOperator)





// function addOperator(event) {
//     if(fullOperation.length == 1) {
//         if(event.target.id == 'btnAdd') {
//             fullOperation[1] = '+';
//         }
//     }
// }

// function operate(array) {
//     if(array[1] == '+') {
//         sum = add(array[0], array[2])
//         fullOperation.splice(0, 3)
//         fullOperation = sum.slice(0);
//     } else if(array[1] == '-') {
//         sub = subtract(array[0], array[2])
//         fullOperation.splice(0, 3)
//         fullOperation = sub.slice(0);
//     } else if(array[1] == '*') {
//         multi = multiply(array[0], array[2])
//         fullOperation.splice(0, 3)
//         fullOperation = multi.slice(0);
//     } else if(array[1] == '/') {
//         div = divide(array[0], array[2])
//         fullOperation.splice(0, 3)
//         fullOperation = div.slice(0);
//     }
// }

// function addToArray(event) {
//     console.log(event.target);
//     if(event.target.id == 'btn1' || event.target.id == 'btn2' || event.target.id == 'btn3' || event.target.id == 'btn4' || 
//     event.target.id == 'btn5' || event.target.id == 'btn6' || event.target.id == 'btn7' || event.target.id == 'btn8' || 
//     event.target.id == 'btn9' || event.target.id == 'btn0') {
//         addNumber(event);
//     } else if (event.target.id == 'btnAdd' || event.target.id == 'btnAdd' || event.target.id == 'btnAdd' ||
//     event.target.id == 'btnAdd') {
//         addOperator(event)
//     }
// }