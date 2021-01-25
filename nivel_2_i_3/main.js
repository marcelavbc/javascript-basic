// Variables: 
// 1. preValue: valor antes del click en operador
// 2. newValue: valor antes del click en operador
// 3. mathOperator: +, -, /, *
// 4. finalResult: resultado final 
// 5. decimalClicked: si true, no permite que el usuario clique otra vez

let prevVal = "";
let newVal = "";
let resultVal = "";
let mathOperator = "";
let decimalClicked = false;

function numButPress(num) {
    if (resultVal) {
        newVal = num;
        resultVal = ""
    } else {
        if (num === ".") {
            if (decimalClicked != true) {
                decimalClicked = true;
                newVal += num;
            }
        } else {
            newVal += num
        }
    }
    document.getElementById("entry").value = newVal
}

function mathButPress(operator) {
    if (!resultVal) {
        prevVal = newVal;
    } else {
        prevVal = resultVal;
    }
    newVal = "";
    decimalClicked = false;
    mathOperator = operator;
    resultVal = "";
    document.getElementById("entry").value = 0
    console.log('operator', mathOperator);

}

function equalButPress() {
    decimalClicked = false;
    prevVal = parseFloat(prevVal);
    newVal = parseFloat(newVal);

    switch (mathOperator) {
        case "+":
            resultVal = prevVal + newVal;
            break;
        case "-":
            resultVal = prevVal - newVal;
            break;
        case "*":
            resultVal = prevVal * newVal;
            break;
        case "/":
            resultVal = prevVal / newVal;
            break;
        default:
            resultVal = newVal;
    }
    prevVal = resultVal;
    document.getElementById("entry").value = resultVal
}

function clearButPress() {
    prevVal = "";
    newVal = "";
    resultVal = "";
    mathOperator = "";
    decimalClicked = false;
    document.getElementById("entry").value = 0
}
