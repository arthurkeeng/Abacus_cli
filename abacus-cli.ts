
import { question } from "readline-sync";

function main() : void
{
    console.log("please note the operators allowed are add (+) , minus(-) , divide(/) , multiply(*) , power(^) , modulo(%)");
    let operatorList = ["+" , "-" , "*" ,"/" ,"^" ,"%"]
    const operator : string = question("please enter operator\n")
    let result;
    let isOperator = operatorList.some(e => e == operator)

        while(isOperator){
            const firstNumber : string = question("please enter your first number\n");
            const   secondNumber : string = question("please enter your second number\n");
            if(isNumber(firstNumber) && isNumber(secondNumber)){
                let firstNum = parseFloat(firstNumber), secondNum = parseFloat(secondNumber)
                 result = calculate(operator  , firstNum , secondNum)
               
                
            }
            else{
                console.log("one or both of your inputs is not a number");
                continue;
            }
            break;
        
        }
    
    result ? console.log("the result is " , result) :console.log("operator not in the list given");

 
}

function calculate(operator: string , firstNum : number , secondNum: number):number | undefined{ 
   
    switch (operator.trim()){
        case "+" :
            return firstNum + secondNum;
            
        case "-" :
            return firstNum - secondNum
            
        case "*" :
            return firstNum * secondNum
            
        case "/" :
            return firstNum / secondNum
            
        case "%" :
            return firstNum % secondNum
            
        case "^" :
            return firstNum ** secondNum
            
        default:
            return undefined;
           
    }
    
}
function isNumber(num : string) : boolean{
    const maybeNum = parseInt(num);
    const isNum: boolean = !isNaN(maybeNum);
    return isNum;
}
main()