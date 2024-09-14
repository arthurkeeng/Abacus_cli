"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = require("readline-sync");
function main() {
    console.log("please note the operators allowed are add (+) , minus(-) , divide(/) , multiply(*) , power(^) , modulo(%)");
    let operatorList = ["+", "-", "*", "/", "^", "%"];
    const operator = (0, readline_sync_1.question)("please enter operator\n");
    let result;
    let isOperator = operatorList.some(e => e == operator);
    while (isOperator) {
        const firstNumber = (0, readline_sync_1.question)("please enter your first number\n");
        const secondNumber = (0, readline_sync_1.question)("please enter your second number\n");
        if (isNumber(firstNumber) && isNumber(secondNumber)) {
            let firstNum = parseFloat(firstNumber), secondNum = parseFloat(secondNumber);
            result = calculate(operator, firstNum, secondNum);
        }
        else {
            console.log("one or both of your inputs is not a number");
            continue;
        }
        break;
    }
    result ? console.log("the result is ", result) : console.log("operator not in the list given");
}
function calculate(operator, firstNum, secondNum) {
    switch (operator.trim()) {
        case "+":
            return firstNum + secondNum;
        case "-":
            return firstNum - secondNum;
        case "*":
            return firstNum * secondNum;
        case "/":
            return firstNum / secondNum;
        case "%":
            return firstNum % secondNum;
        case "^":
            return firstNum ** secondNum;
        default:
            return undefined;
    }
}
function isNumber(num) {
    const maybeNum = parseInt(num);
    const isNum = !isNaN(maybeNum);
    return isNum;
}
main();
