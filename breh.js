/*
//1.
console.log("hello wold")

//2.
console.log("Once upon a time")
console.log("I was falling in love")
console.log("Now I’m only falling apart")

//3.
console.log("Once upon a time \n I was falling in love \n Now I’m only falling apart")

//4.
var message = "trip and food!";
console.log(message);

//5.
var name = "Ada Lovelace";
// Write your code here:
console.log(name)

//6.
var ps = require("prompt-sync");
var prompt = ps();

let name = prompt("Enter your name: ");
// Write your code here:

console.log(name)

//7
var ps = require("prompt-sync");
var prompt = ps();

let name = prompt("give input: ");

console.log(name)
console.log(name)
console.log(name)

//8
var ps = require("prompt-sync");
var prompt = ps();

let name = prompt("whats your name ");

console.log("hello") 
console.log(name)

//9
var ps = require("prompt-sync");
var prompt = ps();

let name = prompt("Hello, how are you? ");
if (name == 'Fine, thanks') {
    let ab = prompt("That's interesting, tell me more ");
    if(ab == 'I learn coding'){
        console.log('Thank you for sharing')
    }
}

//10
var ps = require("prompt-sync");
var prompt = ps();

console.log('I will tell a story, but I need some information.')
let name = prompt("Give a name for main character: ");

console.log('> ', name);

let profession = prompt('Give the character a profession: ')

console.log('> ', profession)

console.log('Here is the story:')
console.log('Once upon a time there was a', profession, 'called', name)
console.log('On her way to work,', name, 'often pondered what being',profession, 'meant to them.')
console.log('When you work as a', profession, 'you meet interesting people.')
console.log(name, 'enjoys their work as', profession + ', The end.')

//11
var days = 200;
var hours= '3,5';
var coding = "It sure is!";
console.log("Days to summer:");
console.log(days);
console.log("Hours to lunch:");
console.log(hours);
console.log("Coding is fun:");
console.log(coding);

//12
var ps = require("prompt-sync");
var prompt = ps();

let number = prompt('give a number: ')
if (number >= 0){
console.log(parseInt(number))
}

//13
var ps = require("prompt-sync");
var prompt = ps();

let number = prompt('give a number: ')
if (number >= 0){
console.log(parseFloat(number))
}

//14
var ps = require("prompt-sync");
var prompt = ps();

let anwserTruth = prompt('give me the truth: ')
{
if (anwserTruth == 'true') {
console.log('true')
}
else if (anwserTruth == 'false') {
    console.log('false')
}
else {
    console.log('f**k you!')
}
}

//15
var ps = require("prompt-sync");
var prompt = ps();

let sträng = prompt('give me a string: ')
let heltal = prompt('give a integer: ')
let desimaltal = prompt('give a decimal numbers: ')
let anwserTruth = prompt('give me the truth: ')


console.log(sträng)
if (heltal >= 0){
console.log(parseInt(heltal))
}

if (desimaltal >= 0){
console.log(parseFloat(desimaltal))
}
{
    if (anwserTruth == 'true') {
    console.log('true')
    }
    else if (anwserTruth == 'false') {
        console.log('false')
    }
    else {
        console.log('and!!! \n f**k you!!!!!!')
    }
}

//16
var ps = require("prompt-sync");
var prompt = ps();

let days2 = prompt('How meny days: ')
if (days2 >= 0){
    console.log(days2 * 86400)
    console.log(days2 * 1440, "minuter")
    console.log(days2 * 24, "timmar")
    }

//17
var ps = require("prompt-sync");
var prompt = ps();

const calcCommandOperator = prompt('Enter operator ( either +, -, * or / ): ');

    const calcCommandNumber1 = parseFloat(prompt('Enter first number: '));
    const calcCommandNumber2 = parseFloat(prompt('Enter second number: '));

    let calcResult;

    if (calcCommandOperator == '+') {
        calcResult = calcCommandNumber1 + calcCommandNumber2;
    }
    else if (calcCommandOperator == '-') {
        calcResult = calcCommandNumber1 - calcCommandNumber2;
    }
    else if (calcCommandOperator == '*') {
        calcResult = calcCommandNumber1 * calcCommandNumber2;
    }
    else {
        calcResult = calcCommandNumber1 / calcCommandNumber2;
    }

    console.log(`${calcCommandNumber1} ${calcCommandOperator} ${calcCommandNumber2} = ${calcResult}`);

//18 //19 //20 //23
var ps = require("prompt-sync");
var prompt = ps();

    const calcCommandOperator = prompt('Enter operator ( either +, -, * or / ): ');
    const calcCommandOperator2 = prompt('Enter operator 2 ( either +, -, * or / ): ');
    const calcCommandNumber1 = parseFloat(prompt('Enter first number: '));
    const calcCommandNumber2 = parseFloat(prompt('Enter second number: '));
    const calcCommandNumber3 = parseFloat(prompt('Enter third number: '));

    let calcResult;

    if (calcCommandOperator == '+') {
        if (calcCommandOperator2 == '+') {
        calcResult = calcCommandNumber1 + calcCommandNumber2 + calcCommandNumber3;
    }
    else if (calcCommandOperator2 == '-') {
        calcResult = calcCommandNumber1 + calcCommandNumber2 - calcCommandNumber3;
    }
    else if (calcCommandOperator2 == '*') {
        calcResult = calcCommandNumber1 + calcCommandNumber2 * calcCommandNumber3;
    }
    else {
        calcResult = calcCommandNumber1 + calcCommandNumber2 / calcCommandNumber3;
    }    
    }
    else if (calcCommandOperator == '-') {
        if (calcCommandOperator2 == '+') {
            calcResult = calcCommandNumber1 - calcCommandNumber2 + calcCommandNumber3;
        }
        else if (calcCommandOperator2 == '-') {
            calcResult = calcCommandNumber1 - calcCommandNumber2 - calcCommandNumber3;
        }
        else if (calcCommandOperator2 == '*') {
            calcResult = calcCommandNumber1 - calcCommandNumber2 * calcCommandNumber3;
        }
        else {
            calcResult = calcCommandNumber1 - calcCommandNumber2 / calcCommandNumber3;
        }    
    }
    else if (calcCommandOperator == '*') {
        if (calcCommandOperator2 == '+') {
            calcResult = calcCommandNumber1 * calcCommandNumber2 + calcCommandNumber3;
        }
        else if (calcCommandOperator2 == '-') {
            calcResult = calcCommandNumber1 * calcCommandNumber2 - calcCommandNumber3;
        }
        else if (calcCommandOperator2 == '*') {
            calcResult = calcCommandNumber1 * calcCommandNumber2 * calcCommandNumber3;
        }
        else {
            calcResult = calcCommandNumber1 * calcCommandNumber2 / calcCommandNumber3;
        }    
        
    }
    else if (calcCommandOperator == '/') {
        if (calcCommandOperator2 == '+') {
            calcResult = calcCommandNumber1 / calcCommandNumber2 + calcCommandNumber3;
        }
        else if (calcCommandOperator2 == '-') {
            calcResult = calcCommandNumber1 / calcCommandNumber2 - calcCommandNumber3;
        }
        else if (calcCommandOperator2 == '*') {
            calcResult = calcCommandNumber1 / calcCommandNumber2 * calcCommandNumber3;
        }
        else {
            calcResult = calcCommandNumber1 / calcCommandNumber2 / calcCommandNumber3;
        }    
    }
    else {
        console.log("can't calculate")
    }

    console.log(`${calcCommandNumber1} ${calcCommandOperator} ${calcCommandNumber2} ${calcCommandOperator2} ${calcCommandNumber3} = ${calcResult}`);

//21
var ps = require("prompt-sync");
var prompt = ps();

let averageNumber1 = parseFloat(prompt('number 1: '));
let averageNumber2 = parseFloat(prompt('number 2: '));

averageHalfResult = averageNumber1 + averageNumber2;
console.log(averageHalfResult);
averageResult = averageHalfResult / 2;
console.log(averageResult);

//22
var ps = require("prompt-sync");
var prompt = ps();

let averageNumber1 = parseFloat(prompt('number 1: '));
let averageNumber2 = parseFloat(prompt('number 2: '));
let averageNumber3 = parseFloat(prompt('number 3: '));

averageHalfResult = averageNumber1 + averageNumber2 + averageNumber3;
console.log(averageHalfResult);
averageResult = averageHalfResult / 3;
console.log(averageResult);

//24
var ps = require("prompt-sync");
var prompt = ps();

let commandspeed = prompt('your speed: ')

if (commandspeed > 120) {
    console.log('your speeding!')
}

//25
var ps = require("prompt-sync");
var prompt = ps();

let orwellcommand = prompt('Give a nummber: ')
if (orwellcommand == 1984){
    console.log('Orwell')
}

//26

//27

//28

//29
var ps = require("prompt-sync");
var prompt = ps();

let firstnumbercommand = parseFloat(prompt('Give first number: '));
let secondnumbercommand = parseFloat(prompt('Give second number: '));

if (firstnumbercommand > secondnumbercommand) {
    console.log('firstnumber is larger');
}
else if (firstnumbercommand < secondnumbercommand) {
    console.log('secondnumber is larger');
}
else if (firstnumbercommand = secondnumbercommand) {
    console.log('thay are equal');
}
else{
    console.log('fuck you');
}
*/
//30
var ps = require("prompt-sync");
var prompt = ps();

let percent = parseFloat(prompt('Give first number: '));

if (percent < 0) {
    console.log('impossible')
}
if (percent <= 49 && percent >= 0) {
    console.log('fail')
}
if (percent <= 59 && percent >= 50) {
    console.log('fail')
}

