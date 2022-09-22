/*
// öv:1
var ps = require("prompt-sync");
var prompt = ps();

var number = prompt("give number: ")

if (number == 0) {
    console.log('number = 0')
}
else if (number > 0) {
    console.log('number is posetive')
}
else if (number < 0) {
    console.log('number is negative')
}

// öv:2
var ps = require("prompt-sync");
var prompt = ps();

var input = prompt("give input: ")

function caracter(ca) {
    const caracter = /[qwertyuiopåasdfghjklöäzxcvbnm]/
    return caracter.test(ca)
}
if (caracter(input)) {
    console.log('its a normal caracter')
}
else {
    console.log('its not a caracter')
}

// öv:3
var ps = require("prompt-sync");
var prompt = ps();

var input2 = prompt("give input: ")

function containsVowelsChars (cv){
    const vowelsChars =/[euioyåaöä]/
    return vowelsChars.test(cv)
}
function containsConsonantChars (cc){
    const consonantChars =/[qwrtpsdfghjklzxcvbnm]/
    return consonantChars.test(cc)
}

if (containsConsonantChars(input2)) {
 console.log('contains consonant')
}
if (containsVowelsChars(input2)) {
    console.log('contains vowel')
}
if ((containsVowelsChars(input2) == false) && (containsConsonantChars(input2) == false)) {
    console.log('nither consonant or vowel')
}

// öv:4
var ps = require("prompt-sync");
var prompt = ps();

var triangelVinkel1 = prompt("give number1: ")
var triangelVinkel2 = prompt("give number2: ")
var triangelVinkel3 = prompt("give number3: ")

let triangleAwnser = triangelVinkel1 + triangelVinkel2 + triangelVinkel3

if (triangleAwnser == 180) {
    console.log('giltlig')
}
else {
    console.log('ogiltlig')
}

// öv:5
var ps = require("prompt-sync");
var prompt = ps();

let percent = prompt('Give percent: ');

if (percent <= 39 && percent >= 0) {
    console.log('Betyg F')
}
else if (percent <= 49 && percent >= 40) {
    console.log('Betyg E')
}
else if (percent <= 69 && percent >= 60) {
    console.log('Betyg D')
}
else if (percent <= 79 && percent >= 70) {
    console.log('Betyg C')
}
else if (percent <= 89 && percent >= 80) {
    console.log('Betyg B')
}
else if (percent <= 100 && percent >= 90) {
    console.log('Betyg A')
}

// öv:6
var ps = require("prompt-sync");
var prompt = ps();

var number69 = prompt('give a number: ')

if (number69 % 2) {
    console.log('numbret e ogämt')
}
else {
    console.log('numbret e gämt')
}

// öv:7
var ps = require("prompt-sync");
var prompt = ps();

function containsNumbers(ba){
    const numbers = /[1234567890]/
    return numbers.test(ba)
}

let leterOrNumber = prompt('give input: ')

if (containsNumbers(leterOrNumber)) {
    console.log('its a number')
}
else {
    console.log('its not a number')
}

// öv:8
var ps = require("prompt-sync");
var prompt = ps();


var month = prompt("give a month: ")

var yearNumber1 = prompt("give year number: ")

if ((yearNumber1 % 400) && (yearNumber1 % 4)){
    if ((month == 'January') || (month == 'March') || (month == 'May') || (month == 'July') || (month == 'August') || (month == 'October') || (month == 'December')) {
        console.log('31 days')
    }
    else if ((month == 'April') || (month == 'June') || (month == 'September') || (month == 'November')) {
        console.log('30 days')
    }
    else if (month == 'February') {
        console.log('28 days')
    }
    else {
        console.log('error')
    }
}
else {
    if ((month == 'January') || (month == 'March') || (month == 'May') || (month == 'July') || (month == 'August') || (month == 'October') || (month == 'December')) {
        console.log('31 days')
    }
    else if ((month == 'April') || (month == 'June') || (month == 'September') || (month == 'November')) {
        console.log('30 days')
    }
    else if (month == 'February') {
        console.log('29 days')
    }
    else {
        console.log('error')
    }
}

// öv:9
var ps = require("prompt-sync");
var prompt = ps();

let [n1, n2, n3] = prompt('give 3 numbers (no spaces): ')

var arrayNumber = [n1, n2, n3]

console.log(Math.max(...arrayNumber))

// öv:10
var ps = require("prompt-sync");
var prompt = ps();

let [n4, n5, n6] = prompt('give 3 numbers (no spaces): ')

var ps = require("prompt-sync");
var prompt = ps();

if ((n4 > n5) && (n4 > n5)){
    console.log(n4)
}
else if (n5 > n6){
    console.log(n5)
}
else if (n6 > n5){
    console.log(n6)
}
*/