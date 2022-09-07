var ps = require("prompt-sync");
var prompt = ps();

    let calcResult = 0;
    var counter = 0;

    var calcCommandNumber1 = parseFloat(prompt('Enter first number: '));

    while (true) {
        var calcCommandOperator = prompt('Enter operator ( either +, -, *, / or =): ');

        if (calcCommandOperator == "=") {
            break;
        }

        var calcCommandNumber2 = parseFloat(prompt('Enter a number: '));

        if (counter > 0) {
            calcCommandNumber1 = calcResult;
        }
if ((calcCommandOperator == '+') || (calcCommandOperator == '-') || (calcCommandOperator == '*') || (calcCommandOperator == '/')) {

        if (calcCommandOperator == '+') {
            calcResult = calcCommandNumber1 + calcCommandNumber2
        }
        else if (calcCommandOperator == '-') {
            calcResult = calcCommandNumber1 - calcCommandNumber2
        }
        else if (calcCommandOperator == '*') {
            calcResult = calcCommandNumber1 * calcCommandNumber2
        }
        else if (calcCommandOperator == '/') {
            calcResult = calcCommandNumber1 / calcCommandNumber2
        }
        else {
            console.log("can't calculate")
        }
    }
        counter = counter + 1;
    }


console.log(calcResult)

    
